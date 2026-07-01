import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const links = [
  { href: "#founder", label: "Founder" },
  { href: "#categories", label: "Categories" },
  { href: "#videos", label: "Videos" },
  { href: "#contact", label: "Contact" },
];


export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)]/60 bg-[var(--color-ivory)]/85 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:px-10 md:py-5">
        <a href="#top" className="min-w-0">
          <div className="font-display text-xl leading-none text-[var(--color-espresso)] md:text-2xl">
            {site.name}
          </div>
          <div className="mt-1 text-[10px] uppercase tracking-[0.32em] text-[var(--color-clay)]">
            Est. Craftsmanship · 30 Years
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs uppercase tracking-[0.22em] text-[var(--color-walnut)] transition-colors hover:text-[var(--color-brass)]"
            >
              {l.label}
            </a>
          ))}
          <WhatsAppButton label="WhatsApp" className="px-5 py-2.5" />
        </nav>

        <button
          aria-label="Toggle menu"
          className="inline-flex h-10 w-10 items-center justify-center text-[var(--color-walnut)] lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-[var(--color-border)]/60 bg-[var(--color-ivory)] lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm uppercase tracking-[0.22em] text-[var(--color-walnut)]"
              >
                {l.label}
              </a>
            ))}
            <WhatsAppButton label="WhatsApp" className="mt-2 w-fit" />
          </div>
        </div>
      ) : null}
    </header>
  );
}
