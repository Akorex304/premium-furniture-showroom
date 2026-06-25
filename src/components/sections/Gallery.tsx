import { useMemo, useState } from "react";
import { ZoomIn } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ImageLightbox } from "@/components/Lightbox";
import { gallery, galleryCategories } from "@/data/gallery";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [filter, setFilter] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const items = useMemo(
    () => (filter === "All" ? gallery : gallery.filter((g) => g.category === filter)),
    [filter],
  );

  const slides = useMemo(
    () => items.map((g) => ({ src: g.image, alt: g.alt })),
    [items],
  );

  return (
    <section id="gallery" className="bg-[var(--color-cream)] py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Gallery"
            title="A growing archive of finished work."
            description="Tap any image to view in full screen, zoom into the detail, and swipe through the collection."
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
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((g, i) => (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  className="group relative block aspect-[4/5] w-full overflow-hidden bg-[var(--color-ivory)]"
                  aria-label={`Open ${g.alt} in lightbox`}
                >
                  <img
                    src={g.image}
                    alt={g.alt}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-espresso)]/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="pointer-events-none absolute right-4 top-4 grid h-10 w-10 place-items-center bg-[var(--color-ivory)]/90 text-[var(--color-espresso)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ZoomIn className="h-4 w-4" />
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <ImageLightbox
        open={lightboxIndex !== null}
        index={lightboxIndex ?? 0}
        slides={slides}
        onClose={() => setLightboxIndex(null)}
      />
    </section>
  );
}
