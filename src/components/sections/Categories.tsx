import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { categories } from "@/data/categories";


export function Categories() {
  return (
    <section id="categories" className="bg-[var(--color-ivory)] py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Collections"
            title="A house of categories, crafted under one roof."
            description="Every piece is designed, built and finished in our workshop. Browse the collections — and tell us what you'd like made for your space."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.05}>
              <Link
                to="/category/$slug"
                params={{ slug: c.slug }}
                className="group flex h-full flex-col border border-[var(--color-border)] bg-[var(--color-card)] transition-colors hover:border-[var(--color-brass)]"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[var(--color-cream)]">
                  {c.image ? (
                    <img
                      src={c.image}
                      alt={c.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <CategoryPlaceholder name={c.name} />
                  )}
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-2xl text-[var(--color-espresso)]">
                      {c.name}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-[var(--color-clay)] transition-colors group-hover:text-[var(--color-brass)]" />
                  </div>
                  <p className="text-sm leading-relaxed text-[var(--color-muted-foreground)]">
                    {c.description}
                  </p>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.22em] text-[var(--color-clay)]">
                    View Collection
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryPlaceholder({ name }: { name: string }) {
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, oklch(0.92 0.022 80) 0 12px, oklch(0.945 0.018 80) 12px 24px)",
      }}
    >
      <span className="font-display text-3xl text-[var(--color-walnut)]/80">
        {name}
      </span>
      <span className="text-[10px] uppercase tracking-[0.28em] text-[var(--color-clay)]">
        Photography coming soon
      </span>
    </div>
  );
}
