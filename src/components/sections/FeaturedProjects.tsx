import { Play } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section id="projects" className="bg-[var(--color-espresso)] py-24 text-[var(--color-ivory)] md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[var(--color-brass)]">
              <span className="inline-block h-px w-10 bg-[var(--color-brass)]" />
              <span>Featured Projects</span>
            </div>
            <h2 className="font-display text-4xl leading-tight md:text-6xl">
              Recent commissions from the workshop.
            </h2>
            <p className="mt-5 text-base text-[var(--color-ivory)]/75 md:text-lg">
              A growing portfolio of bespoke builds. Currently featuring TV Console
              projects — sofa, wardrobe and kitchen builds will be added as new
              footage is finished.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <article className="group relative aspect-[3/4] overflow-hidden border border-[var(--color-ivory)]/10 bg-[var(--color-walnut)]">
                {p.video && p.poster ? (
                  <video
                    src={p.video}
                    poster={p.poster}
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div
                    className="flex h-full w-full items-center justify-center"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 30% 30%, oklch(0.4 0.05 50), oklch(0.18 0.025 45))",
                    }}
                  >
                    <Play className="h-12 w-12 text-[var(--color-brass)]/80" />
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-[var(--color-espresso)] to-transparent p-6">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.28em] text-[var(--color-brass)]">
                      {p.category}
                    </div>
                    <h3 className="mt-1 font-display text-xl leading-tight text-[var(--color-ivory)]">
                      {p.title}
                    </h3>
                  </div>
                  {p.comingSoon ? (
                    <span className="shrink-0 border border-[var(--color-ivory)]/40 px-2 py-1 text-[10px] uppercase tracking-[0.22em] text-[var(--color-ivory)]/80">
                      Soon
                    </span>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
