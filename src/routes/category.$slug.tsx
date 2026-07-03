import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { categories } from "@/data/categories";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/category/$slug")({
  head: ({ params }) => {
    const cat = categories.find((c) => c.slug === params.slug);
    const title = cat ? `${cat.name} — Eniola Furnitures` : "Category — Eniola Furnitures";
    const description = cat?.description ?? "Browse our bespoke furniture collection.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  loader: ({ params }) => {
    const category = categories.find((c) => c.slug === params.slug);
    if (!category) throw notFound();
    return { category };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-[var(--color-ivory)]">
      <Header />
      <main className="mx-auto max-w-3xl px-5 py-40 text-center md:px-10">
        <h1 className="font-display text-4xl text-[var(--color-espresso)]">Category not found</h1>
        <Link
          to="/"
          className="mt-8 inline-block text-sm uppercase tracking-[0.22em] text-[var(--color-walnut)] hover:text-[var(--color-brass)]"
        >
          ← Back home
        </Link>
      </main>
      <Footer />
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="min-h-screen bg-[var(--color-ivory)] px-5 py-40 text-center">
      <p className="text-[var(--color-espresso)]">Something went wrong.</p>
      <button onClick={reset} className="mt-4 underline">Try again</button>
    </div>
  ),
  component: CategoryPage,
});

function CategoryPage() {
  const { slug } = Route.useParams();
  const category = categories.find((c) => c.slug === slug)!;
  const items = projects.filter((p) => p.category === category.name && p.image);
  const [index, setIndex] = useState(-1);

  const slides = items.map((p) => ({ src: p.image!, alt: p.title, title: p.title }));

  const enquiryMessage = `Hello Eniola Furnitures, I'd like to make an enquiry about ${category.name}.`;

  return (
    <div className="min-h-screen bg-[var(--color-ivory)]">
      <Header />
      <main>
        <section className="border-b border-[var(--color-border)]/60 bg-[var(--color-cream)]/40 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <Link
              to="/"
              hash="categories"
              className="mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[var(--color-walnut)] hover:text-[var(--color-brass)]"
            >
              <ArrowLeft className="h-4 w-4" /> All Categories
            </Link>
            <SectionHeading
              eyebrow="Collection"
              title={category.name}
              description={category.description}
            />
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            {items.length === 0 ? (
              <Reveal>
                <div className="mx-auto max-w-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-card)] p-16 text-center">
                  <p className="font-display text-2xl text-[var(--color-espresso)]">
                    Photography coming soon
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted-foreground)]">
                    We're preparing a curated collection of our {category.name.toLowerCase()}. In the meantime, get in touch and we'll share available pieces directly.
                  </p>
                  <div className="mt-8 flex justify-center">
                    <WhatsAppButton label="Make an Enquiry" message={enquiryMessage} />
                  </div>
                </div>
              </Reveal>
            ) : (
              <>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((p, i) => (
                    <Reveal key={p.id} delay={i * 0.04}>
                      <button
                        type="button"
                        onClick={() => setIndex(i)}
                        className="group block w-full overflow-hidden bg-[var(--color-cream)]"
                      >
                        <div className="relative aspect-[4/5] w-full overflow-hidden">
                          <img
                            src={p.image}
                            alt={p.title}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-4 text-left">
                          <p className="font-display text-lg text-[var(--color-espresso)]">
                            {p.title}
                          </p>
                          <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-[var(--color-clay)]">
                            Tap to view · Zoom
                          </p>
                        </div>
                      </button>
                    </Reveal>
                  ))}
                </div>

                <Reveal>
                  <div className="mt-24 flex flex-col items-center gap-4 border-t border-[var(--color-border)]/60 pt-16 text-center">
                    <p className="font-display text-2xl text-[var(--color-espresso)] md:text-3xl">
                      Like what you see?
                    </p>
                    <p className="max-w-xl text-sm leading-relaxed text-[var(--color-muted-foreground)]">
                      Chat with us on WhatsApp to discuss dimensions, finishes and a piece tailored to your space.
                    </p>
                    <WhatsAppButton
                      label="Make an Enquiry"
                      message={enquiryMessage}
                      className="mt-4"
                    />
                  </div>
                </Reveal>
              </>
            )}
          </div>
        </section>

        <Lightbox
          open={index >= 0}
          index={index >= 0 ? index : 0}
          close={() => setIndex(-1)}
          slides={slides}
          plugins={[Zoom, Thumbnails, Counter]}
          zoom={{ maxZoomPixelRatio: 4, scrollToZoom: true }}
        />
      </main>
      <Footer />
    </div>
  );
}
