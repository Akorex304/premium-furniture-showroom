import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

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
    <section className="bg-[var(--color-ivory)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Eight reasons clients return — and recommend us."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.04}>
              <div className="border-t border-[var(--color-brass)]/60 pt-6">
                <div className="font-display text-3xl text-[var(--color-brass)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-3 font-display text-xl text-[var(--color-espresso)]">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted-foreground)]">
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
