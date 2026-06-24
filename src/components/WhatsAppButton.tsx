import { MessageCircle } from "lucide-react";
import { primaryWhatsApp } from "@/data/site";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  label?: string;
  message?: string;
  variant?: "solid" | "outline" | "ghost";
};

export function WhatsAppButton({
  className,
  label = "Chat on WhatsApp",
  message,
  variant = "solid",
}: Props) {
  const href = message
    ? `${primaryWhatsApp}?text=${encodeURIComponent(message)}`
    : primaryWhatsApp;

  const base =
    "inline-flex items-center gap-2 px-6 py-3 text-sm uppercase tracking-[0.18em] transition-colors";
  const styles =
    variant === "solid"
      ? "bg-[var(--color-walnut)] text-[var(--color-ivory)] hover:bg-[var(--color-espresso)]"
      : variant === "outline"
        ? "border border-[var(--color-walnut)] text-[var(--color-walnut)] hover:bg-[var(--color-walnut)] hover:text-[var(--color-ivory)]"
        : "text-[var(--color-walnut)] hover:text-[var(--color-espresso)]";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={cn(base, styles, className)}
    >
      <MessageCircle className="h-4 w-4 shrink-0" />
      <span>{label}</span>
    </a>
  );
}
