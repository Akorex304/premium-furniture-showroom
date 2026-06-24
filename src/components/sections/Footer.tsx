import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-[var(--color-espresso)] text-[var(--color-ivory)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <div className="font-display text-2xl">{site.name}</div>
          <div className="mt-2 text-[10px] uppercase tracking-[0.32em] text-[var(--color-brass)]">
            30 Years of Craftsmanship
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-[var(--color-ivory)]/70">
            Bespoke furniture for homes, offices, hotels and commercial spaces — built
            to last generations.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="text-[10px] uppercase tracking-[0.28em] text-[var(--color-brass)]">Explore</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#founder" className="hover:text-[var(--color-brass)]">Founder</a></li>
            <li><a href="#categories" className="hover:text-[var(--color-brass)]">Categories</a></li>
            <li><a href="#projects" className="hover:text-[var(--color-brass)]">Projects</a></li>
            <li><a href="#gallery" className="hover:text-[var(--color-brass)]">Gallery</a></li>
            <li><a href="#videos" className="hover:text-[var(--color-brass)]">Videos</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="text-[10px] uppercase tracking-[0.28em] text-[var(--color-brass)]">Visit / Contact</div>
          <ul className="mt-4 space-y-2 text-sm text-[var(--color-ivory)]/80">
            <li>{site.address}</li>
            <li><a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-[var(--color-brass)]">{site.phone}</a></li>
            {site.whatsapp.map((w) => (
              <li key={w.number}>
                <a href={`https://wa.me/${w.number}`} target="_blank" rel="noreferrer noopener" className="hover:text-[var(--color-brass)]">
                  WhatsApp · {w.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--color-ivory)]/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-5 py-6 text-[11px] uppercase tracking-[0.22em] text-[var(--color-ivory)]/60 md:flex-row md:items-center md:px-10">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span>{site.credit}</span>
        </div>
      </div>
    </footer>
  );
}
