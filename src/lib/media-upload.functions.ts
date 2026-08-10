import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const IMAGE_EXT = ["jpg", "jpeg", "png", "webp"] as const;
const VIDEO_EXT = ["mp4", "mov", "webm"] as const;

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

const fileSchema = z.object({
  name: z.string().min(1).max(200),
  title: z.string().min(1).max(160),
  category: z.string().refine((c) => c in CATEGORY_FOLDERS, "Unknown category"),
  // base64 (no data: prefix)
  content: z.string().min(4),
});

const inputSchema = z.object({ files: z.array(fileSchema).min(1).max(200) });

const MAX_BYTES = 60 * 1024 * 1024;
const REPO_LIMIT = 10 * 1024 * 1024;

function safeExt(name: string): string | null {
  const ext = name.split(".").pop()?.toLowerCase() ?? "";
  return [...IMAGE_EXT, ...VIDEO_EXT].includes(ext as never) ? ext : null;
}

function slugify(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase()
    .slice(0, 70);
}

export type SaveResult = {
  saved: { refName: string; title: string; category: string; kind: "image" | "video" }[];
  skipped: { name: string; reason: string }[];
};

export const saveMediaBatch = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => inputSchema.parse(data))
  .handler(async ({ data }): Promise<SaveResult> => {
    if (process.env["NODE_ENV"] !== "development") {
      throw new Error(
        "Media uploads only work inside the Lovable editor preview, where project files are writable.",
      );
    }

    const fs = await import("node:fs/promises");
    const path = await import("node:path");
    const crypto = await import("node:crypto");
    const { execFile } = await import("node:child_process");

    const root = process.cwd();
    const assetsRoot = path.join(root, "src", "assets");
    const manifestPath = path.join(root, "src", "data", "uploaded-media.manifest.json");

    type ManifestEntry = {
      id: string;
      title: string;
      category: string;
      file: string; // relative to src/assets
      kind: "image" | "video";
      hash: string;
    };

    let manifest: ManifestEntry[] = [];
    try {
      manifest = JSON.parse(await fs.readFile(manifestPath, "utf8")) as ManifestEntry[];
    } catch {
      manifest = [];
    }

    // Hash everything already in src/assets so we never store the same photo twice.
    const existingHashes = new Set<string>();
    async function walk(dir: string) {
      let entries: import("node:fs").Dirent[] = [];
      try {
        entries = await fs.readdir(dir, { withFileTypes: true });
      } catch {
        return;
      }
      for (const entry of entries) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          await walk(full);
        } else if (safeExt(entry.name)) {
          const buf = await fs.readFile(full);
          existingHashes.add(crypto.createHash("sha256").update(buf).digest("hex"));
        }
      }
    }
    await walk(assetsRoot);

    const result: SaveResult = { saved: [], skipped: [] };

    for (const file of data.files) {
      const ext = safeExt(file.name);
      if (!ext) {
        result.skipped.push({ name: file.name, reason: "Unsupported file type" });
        continue;
      }

      let buffer: Buffer;
      try {
        buffer = Buffer.from(file.content, "base64");
      } catch {
        result.skipped.push({ name: file.name, reason: "Could not read file data" });
        continue;
      }
      if (buffer.byteLength === 0 || buffer.byteLength > MAX_BYTES) {
        result.skipped.push({ name: file.name, reason: "File is empty or larger than 60 MB" });
        continue;
      }

      const hash = crypto.createHash("sha256").update(buffer).digest("hex");
      if (existingHashes.has(hash)) {
        result.skipped.push({ name: file.name, reason: "Already in the gallery" });
        continue;
      }

      const kind: "image" | "video" = (VIDEO_EXT as readonly string[]).includes(ext)
        ? "video"
        : "image";
      const folder = CATEGORY_FOLDERS[file.category]!;
      const dir = path.join(assetsRoot, folder);
      await fs.mkdir(dir, { recursive: true });

      const base = slugify(file.title) || slugify(file.name.replace(/\.[^.]+$/, "")) || "item";
      let fileName = `${base}.${ext}`;
      let counter = 2;
      while (
        await fs
          .stat(path.join(dir, fileName))
          .then(() => true)
          .catch(() => false)
      ) {
        fileName = `${base}-${counter++}.${ext}`;
      }
      let target = path.join(dir, fileName);
      await fs.writeFile(target, buffer);

      // Keep every committed file under the 10 MB repository limit.
      if (kind === "video" && buffer.byteLength > REPO_LIMIT) {
        const compressed = target.replace(/\.[^.]+$/, "-compressed.mp4");
        const ok = await new Promise<boolean>((resolve) => {
          execFile(
            "ffmpeg",
            ["-y", "-i", target, "-c:v", "libx264", "-crf", "30", "-preset", "veryfast",
              "-vf", "scale='min(1280,iw)':-2", "-c:a", "aac", "-b:a", "96k", compressed],
            (error) => resolve(!error),
          );
        }).catch(() => false);

        const smallEnough =
          ok &&
          (await fs
            .stat(compressed)
            .then((s) => s.size > 0 && s.size < REPO_LIMIT)
            .catch(() => false));

        if (smallEnough) {
          await fs.rm(target);
          target = compressed;
          fileName = path.basename(compressed);
        } else {
          await fs.rm(target).catch(() => undefined);
          await fs.rm(compressed).catch(() => undefined);
          result.skipped.push({
            name: file.name,
            reason: "Video is over 10 MB and could not be compressed automatically",
          });
          continue;
        }
      }

      existingHashes.add(hash);
      const relative = `${folder}/${fileName}`;
      let id = `up-${slugify(file.title) || base}`;
      while (manifest.some((m) => m.id === id)) id = `${id}-x`;
      manifest.push({ id, title: file.title, category: file.category, file: relative, kind, hash });
      result.saved.push({ refName: relative, title: file.title, category: file.category, kind });
    }

    if (result.saved.length > 0) {
      await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
      await fs.writeFile(
        path.join(root, "src", "data", "uploaded-media.ts"),
        renderModule(manifest),
        "utf8",
      );
    }

    return result;

    function renderModule(entries: ManifestEntry[]) {
      const imports = entries
        .map((entry, index) => `import m${index} from "@/assets/${entry.file}";`)
        .join("\n");
      const line = (entry: ManifestEntry, index: number) =>
        `  { id: ${JSON.stringify(entry.id)}, title: ${JSON.stringify(entry.title)}, category: ${JSON.stringify(entry.category)}, ${entry.kind === "video" ? "src" : "image"}: m${index} },`;
      const images = entries
        .map((entry, index) => (entry.kind === "image" ? line(entry, index) : null))
        .filter(Boolean)
        .join("\n");
      const vids = entries
        .map((entry, index) => (entry.kind === "video" ? line(entry, index) : null))
        .filter(Boolean)
        .join("\n");

      return `// AUTO-GENERATED by the /upload page (editor preview only). Do not reorder entries:
// Reference IDs are assigned from this order and must stay stable.
${imports ? `${imports}\n` : ""}
export type UploadedItem = {
  id: string;
  title: string;
  category: string;
  image?: string;
  src?: string;
};

export const uploadedProjects: UploadedItem[] = [
${images}
];

export const uploadedVideos: UploadedItem[] = [
${vids}
];
`;
    }
  });
