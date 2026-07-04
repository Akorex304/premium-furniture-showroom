import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";
import { ArrowLeft, Image as ImageIcon, Video as VideoIcon, Play } from "lucide-react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { categories } from "@/data/categories";
import { projects } from "@/data/projects";
import { videos } from "@/data/videos";

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
  const categoryVideos = videos.filter((v) => v.category === category.name && v.src);
  const [index, setIndex] = useState(-1);

  const slides = items.map((p) => ({ src: p.image!, alt: p.title, title: p.title }));

  const enquiryMessage = `Hello Eniola Furnitures, I'd like to make an enquiry about ${category.name}.`;

  const hasContent = items.length > 0 || categoryVideos.length > 0;

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

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            {!hasContent ? (
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
                <Tabs defaultValue="images" className="w-full">
                  <TabsList className="mx-auto mb-10 grid h-auto w-full max-w-md grid-cols-2 gap-1 rounded-full border border-[var(--color-border)]/60 bg-[var(--color-cream)]/60 p-1">
                    <TabsTrigger
                      value="images"
                      className="flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-xs uppercase tracking-[0.22em] text-[var(--color-walnut)] data-[state=active]:bg-[var(--color-espresso)] data-[state=active]:text-[var(--color-ivory)] data-[state=active]:shadow-none"
                    >
                      <ImageIcon className="h-4 w-4" /> Images
                      <span className="ml-1 text-[10px] opacity-70">({items.length})</span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="videos"
                      className="flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-xs uppercase tracking-[0.22em] text-[var(--color-walnut)] data-[state=active]:bg-[var(--color-espresso)] data-[state=active]:text-[var(--color-ivory)] data-[state=active]:shadow-none"
                    >
                      <VideoIcon className="h-4 w-4" /> Videos
                      <span className="ml-1 text-[10px] opacity-70">({categoryVideos.length})</span>
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="images">
                    {items.length === 0 ? (
                      <p className="py-16 text-center text-sm text-[var(--color-muted-foreground)]">
                        Photos for this category are coming soon.
                      </p>
                    ) : (
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
                    )}
                  </TabsContent>

                  <TabsContent value="videos">
                    {categoryVideos.length === 0 ? (
                      <div className="mx-auto max-w-xl border border-dashed border-[var(--color-border)] bg-[var(--color-card)] p-12 text-center">
                        <Play className="mx-auto h-10 w-10 text-[var(--color-brass)]/80" />
                        <p className="mt-4 font-display text-xl text-[var(--color-espresso)]">
                          Videos coming soon
                        </p>
                        <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
                          We're filming this collection now — check back shortly.
                        </p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {categoryVideos.map((v, i) => (
                          <Reveal key={v.id} delay={i * 0.06}>
                            <figure>
                              <div className="relative aspect-video w-full overflow-hidden bg-[var(--color-walnut)]">
                                <video
                                  src={v.src}
                                  poster={v.poster}
                                  controls
                                  playsInline
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <figcaption className="mt-4">
                                <h3 className="font-display text-xl text-[var(--color-espresso)]">
                                  {v.title}
                                </h3>
                              </figcaption>
                            </figure>
                          </Reveal>
                        ))}
                      </div>
                    )}
                  </TabsContent>
                </Tabs>

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
