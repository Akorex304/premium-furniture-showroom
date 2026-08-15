import { motion } from "motion/react";
import heroImg from "@/assets/hero.jpg";
import { site } from "@/data/site";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="relative h-[88vh] min-h-[640px] w-full">
        <motion.img
          src={heroImg}
          alt="Eniola Furnitures and Interiors luxury living room showcase"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-espresso)]/55 via-[var(--color-espresso)]/35 to-[var(--color-espresso)]/75" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-16 md:px-10 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-3xl text-[var(--color-ivory)]"
          >
            <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-[var(--color-ivory)]/80">
              <span className="h-px w-10 bg-[var(--color-brass)]" />
              <span>Eniola Furnitures and Interiors · Since 1995</span>
            </div>
            <h1 className="font-display text-5xl leading-[0.98] sm:text-6xl md:text-7xl lg:text-8xl">
              {site.tagline}
            </h1>
            <p className="mt-6 max-w-xl text-base text-[var(--color-ivory)]/85 md:text-lg">
              Bespoke furniture, handcrafted for the homes, offices and spaces that
              define a life of quality — for over three decades.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <WhatsAppButton
                label="Chat on WhatsApp"
                className="bg-[var(--color-brass)] text-[var(--color-espresso)] hover:bg-[var(--color-ivory)]"
                message="Hello Eniola Furnitures and Interiors, I'd like to enquire about a piece."
              />
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-[var(--color-ivory)]/70 px-6 py-3 text-sm uppercase tracking-[0.18em] text-[var(--color-ivory)] transition-colors hover:bg-[var(--color-ivory)] hover:text-[var(--color-espresso)]"
              >
                Request a Quote
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
