import { z } from "zod";

export const IMAGE_EXT = ["jpg", "jpeg", "png", "webp"] as const;
export const VIDEO_EXT = ["mp4", "mov", "webm"] as const;

export const CATEGORY_FOLDERS: Record<string, string> = {
  "TV Consoles": "tv-consoles",
  "Bedroom Furniture": "bedroom",
  "Sofa Chairs": "sofas",
  "Wardrobes and Shoe Rack": "wardrobes",
  Doors: "doors",
  "Dining Tables": "dining",
  "Kitchen Cabinets": "kitchen",
  "Office Furniture": "office",
};

export const CATEGORY_NAMES = Object.keys(CATEGORY_FOLDERS);

export const MAX_BYTES = 60 * 1024 * 1024;
export const REPO_LIMIT = 10 * 1024 * 1024;

export function safeExt(name: string): string | null {
  const ext = name.split(".").pop()?.toLowerCase() ?? "";
  return [...IMAGE_EXT, ...VIDEO_EXT].includes(ext as never) ? ext : null;
}

export function isVideoExt(ext: string) {
  return (VIDEO_EXT as readonly string[]).includes(ext);
}

export function slugify(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase()
    .slice(0, 70);
}

/** Turn "IMG-20260703-WA0045 (1).jpg" or "walnut door frame.jpg" into a display title. */
export function titleFromFilename(name: string) {
  const base = name.replace(/\.[^.]+$/, "").replace(/[_-]+/g, " ").replace(/\s+/g, " ").trim();
  const cleaned = base.replace(/^(IMG|VID|PXL|WA)\b[\s\d]*/i, "").trim() || base;
  return cleaned
    .split(" ")
    .map((word) => (word.length > 2 ? word[0]!.toUpperCase() + word.slice(1) : word))
    .join(" ")
    .slice(0, 120);
}

/** Guess a gallery category from any folder segment inside the ZIP path. */
export function guessCategory(zipPath: string): string | null {
  const hay = zipPath.toLowerCase();
  const rules: [RegExp, string][] = [
    [/tv|console|media wall|feature wall/, "TV Consoles"],
    [/wardrobe|shoe|closet/, "Wardrobes and Shoe Rack"],
    [/door|frame/, "Doors"],
    [/kitchen|cabinet/, "Kitchen Cabinets"],
    [/dining|table/, "Dining Tables"],
    [/sofa|chair|couch/, "Sofa Chairs"],
    [/bed|bedroom/, "Bedroom Furniture"],
    [/office|desk/, "Office Furniture"],
  ];
  for (const [pattern, category] of rules) if (pattern.test(hay)) return category;
  return null;
}

export const uploadFileSchema = z.object({
  name: z.string().min(1).max(200),
  title: z.string().min(1).max(160),
  category: z.string().refine((c) => c in CATEGORY_FOLDERS, "Unknown category"),
  content: z.string().min(4),
});

export const uploadInputSchema = z.object({ files: z.array(uploadFileSchema).min(1).max(200) });

export type SaveResult = {
  saved: { refName: string; title: string; category: string; kind: "image" | "video" }[];
  skipped: { name: string; reason: string }[];
};
