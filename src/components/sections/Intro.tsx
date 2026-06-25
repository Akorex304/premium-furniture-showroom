import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";

export function Intro() {
  return (
    <section className="border-b border-[var(--color-border)]/60 bg-[var(--color-ivory)] py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12 md:px-10">
        <Reveal className="md:col-span-4">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[var(--color-clay)]">
            <span className="brass-rule" />
            <span>Our House</span>
          </div>
          <h2 className="mt-5 font-display text-4xl leading-tight text-[var(--color-espresso)] md:text-5xl">
            Furniture, built to outlive its first room.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-7 md:col-start-6">
          <p className="text-lg leading-relaxed text-[var(--color-muted-foreground)]">
            {site.description}
          </p>
          <p className="mt-6 text-lg leading-relaxed text-[var(--color-muted-foreground)]">
            We specialize in custom furniture solutions designed to match our clients'
            style, space and budget — from luxurious sofa sets and wardrobes to
            kitchen cabinets, TV consoles, doors, dining sets and complete room setups.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
