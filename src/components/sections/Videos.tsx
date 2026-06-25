import { Play } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { videos } from "@/data/videos";

export function Videos() {
  return (
    <section id="videos" className="bg-[var(--color-ivory)] py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Workshop & Projects"
            title="Watch the work, frame by frame."
            description="A film-led look at the workshop and finished installs. We're starting with TV Console builds — more category videos will land here as they're filmed."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {videos.map((v, i) => (
            <Reveal key={v.id} delay={i * 0.08}>
              <figure>
                <div className="relative aspect-video w-full overflow-hidden bg-[var(--color-walnut)]">
                  {v.src ? (
                    <video
                      src={v.src}
                      poster={v.poster}
                      controls
                      playsInline
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div
                      className="flex h-full w-full items-center justify-center"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 30% 40%, oklch(0.4 0.05 50), oklch(0.18 0.025 45))",
                      }}
                    >
                      <div className="flex flex-col items-center gap-3 text-center">
                        <Play className="h-14 w-14 text-[var(--color-brass)]/80" />
                        <span className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-ivory)]/70">
                          Video coming soon
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                <figcaption className="mt-4 flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl text-[var(--color-espresso)]">
                    {v.title}
                  </h3>
                  <span className="text-[10px] uppercase tracking-[0.28em] text-[var(--color-clay)]">
                    {v.category}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
