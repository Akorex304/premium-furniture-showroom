import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import interiorBg from "@/assets/interior-bg.jpg.asset.json";

const reasons = [
  { title: "Over 30 Years of Experience", body: "Three decades of design, build and install across homes, offices, schools and hotels." },
  { title: "Custom Furniture Solutions", body: "Every commission is sized, finished and styled around your space." },
  { title: "Premium Quality Materials", body: "Solid hardwoods, durable upholstery and hardware specified to last." },
  { title: "Skilled Craftsmanship", body: "Joinery and finishing handled by a long-tenured workshop team." },
  { title: "Attention to Detail", body: "From mitre joints to drawer slides — the small things, done correctly." },
  { title: "Professional Installation", body: "Site preparation, delivery and fitting handled end-to-end." },
  { title: "Reliable Customer Service", body: "Clear communication from quote to handover, and beyond." },
  { title: "Timely Project Delivery", body: "Honest timelines, met. We respect your schedule." },
];

export function WhyChooseUs() {
  return (
    <section className="relative isolate overflow-hidden py-28 md:py-40">
      <img
        src={interiorBg.url}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--color-ivory)]/95 via-[var(--color-ivory)]/92 to-[var(--color-ivory)]/96"
      />

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Eight reasons clients return — and recommend us."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.04}>
              <div className="flex h-full flex-col border border-[var(--color-border)] bg-[var(--color-ivory)]/85 p-7 backdrop-blur-sm transition-colors hover:border-[var(--color-brass)]">
                <div className="font-display text-3xl text-[var(--color-brass)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 font-display text-xl text-[var(--color-espresso)]">
                  {r.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted-foreground)]">
                  {r.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
