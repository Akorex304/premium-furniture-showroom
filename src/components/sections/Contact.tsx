import { useState, type FormEvent } from "react";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site, primaryWhatsApp } from "@/data/site";
import { categories } from "@/data/categories";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // TODO: wire up persistent storage (Lovable Cloud) when ready.
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thank you — we'll be in touch within 24 hours.");
    }, 600);
  }

  return (
    <section id="contact" className="bg-[var(--color-cream)] py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Request a quote or visit our workshop."
            description="Tell us about your space and we'll respond with a tailored proposal."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-5">
            <div className="space-y-8">
              <InfoRow icon={<Phone className="h-4 w-4" />} label="Phone">
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-[var(--color-brass)]">
                  {site.phone}
                </a>
              </InfoRow>
              <InfoRow icon={<MessageCircle className="h-4 w-4" />} label="WhatsApp">
                <div className="flex flex-col gap-1">
                  {site.whatsapp.map((w) => (
                    <a
                      key={w.number}
                      href={`https://wa.me/${w.number}`}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="hover:text-[var(--color-brass)]"
                    >
                      {w.label}
                    </a>
                  ))}
                </div>
              </InfoRow>
              <InfoRow icon={<MapPin className="h-4 w-4" />} label="Address">
                {site.address}
              </InfoRow>

              <a
                href={primaryWhatsApp}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 bg-[var(--color-walnut)] px-6 py-3 text-sm uppercase tracking-[0.18em] text-[var(--color-ivory)] transition-colors hover:bg-[var(--color-espresso)]"
              >
                <MessageCircle className="h-4 w-4" />
                Message us on WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-5 border border-[var(--color-border)] bg-[var(--color-ivory)] p-6 md:grid-cols-2 md:p-10"
            >
              <Field label="Full name" name="name" required />
              <Field label="Phone or WhatsApp" name="phone" required />
              <Field label="Email (optional)" name="email" type="email" />
              <div className="flex flex-col gap-2">
                <label className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-clay)]">
                  Category of interest
                </label>
                <select
                  name="category"
                  className="border border-[var(--color-input)] bg-transparent px-3 py-3 text-sm text-[var(--color-espresso)] focus:border-[var(--color-walnut)] focus:outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>Select a category</option>
                  {categories.map((c) => (
                    <option key={c.slug} value={c.name}>{c.name}</option>
                  ))}
                  <option value="Custom build">Custom build</option>
                </select>
              </div>
              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-clay)]">
                  Tell us about your project
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="border border-[var(--color-input)] bg-transparent px-3 py-3 text-sm text-[var(--color-espresso)] focus:border-[var(--color-walnut)] focus:outline-none"
                  placeholder="Dimensions, materials, inspiration, timeline…"
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 bg-[var(--color-walnut)] px-8 py-3 text-sm uppercase tracking-[0.18em] text-[var(--color-ivory)] transition-colors hover:bg-[var(--color-espresso)] disabled:opacity-60"
                >
                  {submitting ? "Sending…" : "Request a Quote"}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4">
      <div className="mt-1 grid h-9 w-9 shrink-0 place-items-center border border-[var(--color-border)] text-[var(--color-walnut)]">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-[0.28em] text-[var(--color-clay)]">{label}</div>
        <div className="mt-1 font-display text-xl text-[var(--color-espresso)]">{children}</div>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-clay)]">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="border border-[var(--color-input)] bg-transparent px-3 py-3 text-sm text-[var(--color-espresso)] focus:border-[var(--color-walnut)] focus:outline-none"
      />
    </div>
  );
}
