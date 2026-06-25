import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  variant?: "dark" | "light";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  variant = "dark",
  className,
}: Props) {
  const isLight = variant === "light";

  return (
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className,
      )}
    >
      {eyebrow ? (
        <div
          className={cn(
            "mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.28em]",
            isLight ? "text-[var(--color-ivory)]/80" : "text-[var(--color-clay)]",
            align === "center" && "justify-center",
          )}
        >
          <span
            className={cn(
              "inline-block h-px w-10",
              isLight ? "bg-[var(--color-ivory)]/60" : "bg-[var(--color-brass)]",
            )}
          />
          <span>{eyebrow}</span>
          <span
            className={cn(
              "inline-block h-px w-10",
              isLight ? "bg-[var(--color-ivory)]/60" : "bg-[var(--color-brass)]",
            )}
          />
        </div>
      ) : null}
      <h2
        className={cn(
          "font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl",
          isLight ? "text-[var(--color-ivory)]" : "text-[var(--color-espresso)]",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed md:text-lg",
            isLight ? "text-[var(--color-ivory)]/80" : "text-[var(--color-muted-foreground)]",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

