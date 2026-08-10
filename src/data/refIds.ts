// Deterministic Reference IDs for gallery items.
// The prefix is tied to the furniture category; the number is assigned by the
// order items appear in the source arrays and MUST remain stable so the
// business owner can identify each piece by its Reference ID.

export const categoryPrefix: Record<string, string> = {
  "TV Consoles": "TVC",
  "Bedroom Furniture": "BED",
  "Sofa Chairs": "SOF",
  Wardrobes: "WRD",
  "Wardrobes and Shoe Rack": "WRD",
  Doors: "DOR",
  "Dining Tables": "DIN",
  "Kitchen Cabinets": "KIT",
  "Office Furniture": "OFF",
};

const pad = (n: number) => n.toString().padStart(3, "0");

export function assignRefIds<T extends { category: string }>(
  items: T[],
  kind: "image" | "video" = "image",
): (T & { refId: string })[] {
  const counters: Record<string, number> = {};
  return items.map((item) => {
    const prefix = categoryPrefix[item.category] ?? "REF";
    const key = `${prefix}:${kind}`;
    counters[key] = (counters[key] ?? 0) + 1;
    const refId =
      kind === "video"
        ? `${prefix}-V${pad(counters[key])}`
        : `${prefix}-${pad(counters[key])}`;
    return { ...item, refId };
  });
}
