import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";
import { ArrowLeft, Image as ImageIcon, Video as VideoIcon, Play, MessageCircle, Search } from "lucide-react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CategoryCta } from "@/components/CategoryCta";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { categories } from "@/data/categories";
import { projects, findByRefId } from "@/data/projects";
import { videos } from "@/data/videos";
import { primaryWhatsApp } from "@/data/site";

function buildEnquiryUrl(refId: string) {
  const message = `Hello Eniola Furnitures and Interiors, I'd like to enquire about this furniture.\n\nReference ID: ${refId}`;
  return `${primaryWhatsApp}?text=${encodeURIComponent(message)}`;
}

export const Route = createFileRoute("/category/$slug")({
  head: ({ params }) => {
    const cat = categories.find((c) => c.slug === params.slug);
    const title = cat ? `${cat.name} — Eniola Furnitures and Interiors` : "Category — Eniola Furnitures and Interiors";
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
  const navigate = useNavigate();
  const category = categories.find((c) => c.slug === slug)!;
  const allItems = useMemo(
    () => projects.filter((p) => p.category === category.name && p.image),
    [category.name],
  );
  const allVideos = useMemo(
    () => videos.filter((v) => v.category === category.name && v.src),
    [category.name],
  );
  const [index, setIndex] = useState(-1);
  const [query, setQuery] = useState("");
  const [searchError, setSearchError] = useState<string | null>(null);

  const q = query.trim().toLowerCase();
  const items = q
    ? allItems.filter(
        (p) => p.refId.toLowerCase().includes(q) || p.title.toLowerCase().includes(q),
      )
    : allItems;
  const categoryVideos = q
    ? allVideos.filter(
        (v) => v.refId.toLowerCase().includes(q) || v.title.toLowerCase().includes(q),
      )
    : allVideos;

  const slides = items.map((p) => ({
    src: p.image!,
    alt: p.title,
    title: p.title,
    description: `Reference ID: ${p.refId}`,
  }));

  const enquiryMessage = `Hello Eniola Furnitures and Interiors, I'd like to make an enquiry about ${category.name}.`;

  const hasContent = allItems.length > 0 || allVideos.length > 0;

  function onSearchSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSearchError(null);
    const raw = query.trim();
    if (!raw) return;
    // If it looks like a Reference ID, try to jump to the correct category.
    const upper = raw.toUpperCase();
    if (/^[A-Z]{3}-(V)?\d{1,4}$/.test(upper)) {
      const match = findByRefId(upper);
      if (match) {
        const targetCat = categories.find((c) => c.name === match.category);
        if (targetCat && targetCat.slug !== slug) {
          navigate({ to: "/category/$slug", params: { slug: targetCat.slug } });
          return;
        }
      } else {
        setSearchError(`No item found for "${upper}".`);
      }
    }
  }

  return (
    <div className="min-h-screen bg-[var(--color-ivory)]">
      <Header />
      <main>
        {/* Sticky sub-header: Back button + category name, always visible while scrolling */}
        <div className="sticky top-[64px] z-40 border-b border-[var(--color-border)]/60 bg-[var(--color-ivory)]/90 backdrop-blur-md md:top-[72px]">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-3 md:px-10">
            <Link
              to="/"
              hash="categories"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)]/70 bg-[var(--color-cream)]/70 px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-[var(--color-walnut)] transition-colors hover:border-[var(--color-brass)] hover:text-[var(--color-brass)] md:px-4 md:py-2 md:text-xs"
              aria-label="Back to all categories"
            >
              <ArrowLeft className="h-3.5 w-3.5 md:h-4 md:w-4" />
              <span className="hidden sm:inline">All Categories</span>
              <span className="sm:hidden">Back</span>
            </Link>
            <p className="truncate text-[11px] uppercase tracking-[0.22em] text-[var(--color-clay)] md:text-xs">
              {category.name}
            </p>
          </div>
        </div>

        <section className="border-b border-[var(--color-border)]/60 bg-[var(--color-cream)]/40 py-12 md:py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
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
                  <div className="sticky top-[112px] z-30 -mx-5 mb-10 border-b border-[var(--color-border)]/60 bg-[var(--color-ivory)]/90 px-5 py-3 backdrop-blur-md md:top-[128px] md:-mx-10 md:px-10">
                    <div className="mx-auto flex w-full max-w-3xl flex-col items-stretch gap-3 md:flex-row md:items-center md:justify-between">
                      <TabsList className="grid h-auto w-full grid-cols-2 gap-1 rounded-full border border-[var(--color-border)]/60 bg-[var(--color-cream)]/60 p-1 md:w-auto">
                        <TabsTrigger
                          value="images"
                          className="flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-xs uppercase tracking-[0.22em] text-[var(--color-walnut)] data-[state=active]:bg-[var(--color-espresso)] data-[state=active]:text-[var(--color-ivory)] data-[state=active]:shadow-none"
                        >
                          <ImageIcon className="h-4 w-4" /> Images
                          <span className="ml-1 text-[10px] opacity-70">({allItems.length})</span>
                        </TabsTrigger>
                        <TabsTrigger
                          value="videos"
                          className="flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-xs uppercase tracking-[0.22em] text-[var(--color-walnut)] data-[state=active]:bg-[var(--color-espresso)] data-[state=active]:text-[var(--color-ivory)] data-[state=active]:shadow-none"
                        >
                          <VideoIcon className="h-4 w-4" /> Videos
                          <span className="ml-1 text-[10px] opacity-70">({allVideos.length})</span>
                        </TabsTrigger>
                      </TabsList>

                      <form
                        onSubmit={onSearchSubmit}
                        className="flex w-full items-center gap-2 md:w-64"
                        role="search"
                      >
                        <div className="relative flex-1">
                          <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[var(--color-clay)]" />
                          <input
                            type="search"
                            value={query}
                            onChange={(e) => {
                              setQuery(e.target.value);
                              setSearchError(null);
                            }}
                            placeholder="Search Reference ID"
                            aria-label="Search by Reference ID or name"
                            className="w-full rounded-full border border-[var(--color-border)]/60 bg-[var(--color-ivory)] py-2 pl-9 pr-3 text-xs uppercase tracking-[0.18em] text-[var(--color-espresso)] placeholder:text-[var(--color-clay)] focus:border-[var(--color-brass)] focus:outline-none"
                          />
                        </div>
                      </form>
                    </div>
                    {searchError ? (
                      <p className="mx-auto mt-2 max-w-3xl text-center text-[11px] uppercase tracking-[0.18em] text-[var(--color-brass)]">
                        {searchError}
                      </p>
                    ) : null}
                  </div>

                  <TabsContent value="images">
                    {items.length === 0 ? (
                      <p className="py-16 text-center text-sm text-[var(--color-muted-foreground)]">
                        {q ? `No images match "${query}".` : "Photos for this category are coming soon."}
                      </p>
                    ) : (
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {items.map((p, i) => (
                          <Reveal key={p.id} delay={i * 0.04}>
                            <button
                              type="button"
                              onClick={() => setIndex(i)}
                              className="group block w-full overflow-hidden bg-[var(--color-cream)] text-left"
                            >
                              <div className="relative aspect-[4/5] w-full overflow-hidden">
                                <img
                                  src={p.image}
                                  alt={p.title}
                                  loading="lazy"
                                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <span className="absolute right-3 top-3 rounded-full bg-[var(--color-espresso)]/85 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-ivory)] backdrop-blur-sm">
                                  {p.refId}
                                </span>
                              </div>
                              <div className="p-4">
                                <p className="font-display text-lg text-[var(--color-espresso)]">
                                  {p.title}
                                </p>
                                <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-[var(--color-clay)]">
                                  Ref: {p.refId} · Tap to zoom
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
                          {q ? `No videos match "${query}".` : "Videos coming soon"}
                        </p>
                        {!q ? (
                          <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
                            We're filming this collection now — check back shortly.
                          </p>
                        ) : null}
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
                                <span className="absolute right-3 top-3 rounded-full bg-[var(--color-espresso)]/85 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-ivory)] backdrop-blur-sm">
                                  {v.refId}
                                </span>
                              </div>
                              <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-3">
                                <div>
                                  <h3 className="font-display text-xl text-[var(--color-espresso)]">
                                    {v.title}
                                  </h3>
                                  <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-[var(--color-clay)]">
                                    Ref: {v.refId}
                                  </p>
                                </div>
                                <a
                                  href={buildEnquiryUrl(v.refId)}
                                  target="_blank"
                                  rel="noreferrer noopener"
                                  className="inline-flex items-center gap-2 border border-[var(--color-walnut)] px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[var(--color-walnut)] transition-colors hover:bg-[var(--color-walnut)] hover:text-[var(--color-ivory)]"
                                >
                                  <MessageCircle className="h-3.5 w-3.5" /> Make an Enquiry
                                </a>
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

        <CategoryCta categoryName={category.name} />


        <Lightbox
          open={index >= 0}
          index={index >= 0 ? index : 0}
          close={() => setIndex(-1)}
          slides={slides}
          plugins={[Zoom, Thumbnails, Counter]}
          zoom={{ maxZoomPixelRatio: 4, scrollToZoom: true }}
          render={{
            slideFooter: ({ slide }) => {
              const refId =
                (slide as { description?: string }).description?.replace(/^Reference ID:\s*/i, "") ??
                "";
              if (!refId) return null;
              return (
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[9999] flex flex-col items-center gap-2 pb-6">
                  <span className="pointer-events-none rounded-full bg-[var(--color-espresso)]/90 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[var(--color-ivory)]">
                    Ref: {refId}
                  </span>
                  <a
                    href={buildEnquiryUrl(refId)}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="pointer-events-auto inline-flex items-center gap-2 bg-[var(--color-walnut)] px-5 py-2.5 text-xs uppercase tracking-[0.22em] text-[var(--color-ivory)] shadow-lg transition-colors hover:bg-[var(--color-espresso)]"
                  >
                    <MessageCircle className="h-4 w-4" /> Make an Enquiry
                  </a>
                </div>
              );
            },
          }}
        />
      </main>
      <Footer />
    </div>
  );
}
