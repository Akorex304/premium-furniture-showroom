import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";

type Props = {
  /** Optional category name to personalise the enquiry message. */
  categoryName?: string;
  className?: string;
};

export function CategoryCta({ categoryName, className }: Props) {
  const message = categoryName
    ? `Hello Eniola Furnitures and Interiors, I don't see exactly what I want in ${categoryName}. Please help me build a custom piece.`
    : "Hello Eniola Furnitures and Interiors, I'm looking for something I didn't see on your website. Can you build it for me?";

  return (
    <Reveal>
      <div
        className={`border-t border-[var(--color-border)]/60 bg-[var(--color-cream)]/40 px-6 py-14 text-center md:px-12 md:py-16 ${className ?? ""}`}
      >
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-[var(--color-brass)]">
            <span className="inline-block h-px w-8 bg-[var(--color-brass)]" />
            <span>Looking for something else?</span>
          </div>
          <h2 className="font-display text-3xl leading-tight text-[var(--color-espresso)] md:text-4xl">
            Don't see your choice?
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-[var(--color-muted-foreground)] md:text-base">
            Message us and we'll build it for you. Share your inspiration,
            preferred design or dimensions and our craftsmen will create a piece
            tailored to your space.
          </p>
          <WhatsAppButton label="Message us to build it" message={message} className="mt-4" />
        </div>
      </div>
    </Reveal>
  );
}
