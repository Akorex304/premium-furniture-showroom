import founderAsset from "@/assets/founder-portrait.jpg.asset.json";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";

const stats = [
  { value: "30+", label: "Years of craftsmanship" },
  { value: "1000+", label: "Pieces delivered" },
  { value: "100%", label: "Custom built to order" },
];

export function Founder() {
  return (
    <section
      id="founder"
      className="bg-[var(--color-cream)] py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-12 md:gap-16 md:px-10">
        <Reveal className="md:col-span-5">
          <div className="relative">
            <div className="absolute -left-3 -top-3 hidden h-full w-full border border-[var(--color-brass)]/60 md:block" />
            <img
              src={founderAsset.url}
              alt={`${site.founder.name}, founder of Eniola Furnitures`}
              width={1024}
              height={1280}
              loading="lazy"
              className="relative h-[520px] w-full object-cover object-center md:h-[640px]"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-7">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[var(--color-clay)]">
            <span className="brass-rule" />
            <span>Meet the Founder</span>
          </div>
          <h2 className="mt-5 font-display text-4xl leading-tight text-[var(--color-espresso)] md:text-6xl">
            {site.founder.name}
          </h2>
          <p className="mt-3 text-sm uppercase tracking-[0.22em] text-[var(--color-walnut)]">
            {site.founder.title}
          </p>

          <p className="mt-8 text-lg leading-relaxed text-[var(--color-muted-foreground)]">
            {site.founder.story}
          </p>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-start border border-[var(--color-border)] bg-[var(--color-ivory)] p-8 transition-colors hover:border-[var(--color-brass)]"
              >
                <div className="font-display text-5xl leading-none text-[var(--color-walnut)] md:text-6xl">
                  {s.value}
                </div>
                <div className="mt-5 h-px w-10 bg-[var(--color-brass)]" />
                <div className="mt-4 text-[11px] uppercase tracking-[0.22em] text-[var(--color-clay)]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
