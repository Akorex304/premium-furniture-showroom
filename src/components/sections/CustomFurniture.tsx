import craftImg from "@/assets/craft.jpg";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function CustomFurniture() {
  return (
    <section className="bg-[var(--color-walnut)] py-24 text-[var(--color-ivory)] md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-12 md:gap-16 md:px-10">
        <Reveal className="md:col-span-6">
          <img
            src={craftImg}
            alt="Custom furniture craftsmanship"
            width={1280}
            height={896}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
        </Reveal>
        <Reveal delay={0.15} className="md:col-span-6">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[var(--color-brass)]">
            <span className="inline-block h-px w-10 bg-[var(--color-brass)]" />
            <span>Custom Builds</span>
          </div>
          <h2 className="mt-5 font-display text-4xl leading-tight md:text-6xl">
            Don't see your style? <br />
            <span className="text-[var(--color-brass)]">We'll build it for you.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-ivory)]/80 md:text-lg">
            If you don't find exactly what you're looking for in our categories,
            contact us. Share your inspiration, preferred design or furniture
            idea, and our experienced craftsmen will create a custom piece
            tailored specifically to your needs.
          </p>
          <div className="mt-8">
            <WhatsAppButton
              label="Start your custom build"
              className="bg-[var(--color-brass)] text-[var(--color-espresso)] hover:bg-[var(--color-ivory)]"
              message="Hello Eniola Furnitures, I'd like to discuss a custom build."
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
