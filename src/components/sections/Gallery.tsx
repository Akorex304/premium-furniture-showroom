import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { gallery, galleryCategories } from "@/data/gallery";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [filter, setFilter] = useState<string>("All");

  const items = useMemo(
    () => (filter === "All" ? gallery : gallery.filter((g) => g.category === filter)),
    [filter],
  );

  return (
    <section id="gallery" className="bg-[var(--color-cream)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Gallery"
            title="A growing archive of finished work."
            description="Filter by category as soon as photography is added. The structure is ready — drop new images into the gallery data file at any time."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-2">
            {galleryCategories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={cn(
                  "border px-4 py-2 text-[11px] uppercase tracking-[0.22em] transition-colors",
                  filter === c
                    ? "border-[var(--color-walnut)] bg-[var(--color-walnut)] text-[var(--color-ivory)]"
                    : "border-[var(--color-border)] text-[var(--color-walnut)] hover:border-[var(--color-walnut)]",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12">
          {items.length === 0 ? (
            <Reveal>
              <div className="flex flex-col items-center justify-center border border-dashed border-[var(--color-border)] bg-[var(--color-ivory)]/60 px-6 py-24 text-center">
                <div className="font-display text-3xl text-[var(--color-walnut)]">
                  Photography coming soon
                </div>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--color-muted-foreground)]">
                  We're finalising the photo shoot for {filter === "All" ? "the gallery" : filter}. In the
                  meantime, send us a message on WhatsApp for reference photos of past work.
                </p>
              </div>
            </Reveal>
          ) : (
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
              {items.map((g) => (
                <img
                  key={g.id}
                  src={g.image}
                  alt={g.alt}
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
