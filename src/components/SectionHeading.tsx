type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: Props) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl"
      }
    >
      {eyebrow ? (
        <div
          className={
            "mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[var(--color-clay)]" +
            (align === "center" ? " justify-center" : "")
          }
        >
          <span className="brass-rule" />
          <span>{eyebrow}</span>
          <span className="brass-rule" />
        </div>
      ) : null}
      <h2 className="font-display text-4xl leading-[1.05] text-[var(--color-espresso)] sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-[var(--color-muted-foreground)] md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
