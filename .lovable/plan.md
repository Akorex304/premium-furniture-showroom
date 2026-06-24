# Eniola Furnitures — Premium Showroom Website

A single-page premium furniture site for Eniola Furnitures with a warm editorial aesthetic (cream/ivory, deep walnut, brass accents, Cormorant serif + Karla body). Structure is built now; placeholders sit where future photos/videos will go, with clearly labeled drop-in slots so adding media later is trivial.

## Design direction

- Palette: ivory `#F7F3EC`, warm cream `#EFE7D8`, deep walnut `#3B2A1E`, espresso `#1C140E`, brass `#B08A4A`, muted clay `#A8704E`.
- Type: Cormorant Garamond (display, headings) + Karla (body, UI). Loaded via `<link>` in `__root.tsx`; family names declared as `--font-display` / `--font-sans` in `@theme`.
- Motion: gentle fade/slide-up on scroll, slow hero parallax, image hover zoom — restrained, not flashy. Implemented with Motion (framer-motion).
- Spacing: generous section padding (py-24 / py-32 md), max-w 6xl/7xl, asymmetric editorial layouts (zigzag for Founder + Custom sections, magazine grid for categories).

## Sections (single page, anchored nav)

1. **Sticky header** — wordmark "Eniola Furnitures", anchor links (Founder, Categories, Projects, Gallery, Contact), WhatsApp CTA.
2. **Hero** — full-bleed warm image placeholder, serif headline "Where Experience Meets Excellence", subhead with 30-years line, two CTAs: WhatsApp + Request a Quote.
3. **Intro** — short editorial paragraph from the business description.
4. **Meet the Founder** — large portrait slot (placeholder), name "Akorede Eniola", "30+ Years of Craftsmanship", story paragraph, three stat tiles (30+ yrs, 1000+ pieces, custom builds).
5. **Furniture Categories** — 8 cards in magazine grid: Sofa Chairs, TV Consoles, Wardrobes, Doors, Dining Tables, Kitchen Cabinets, Bedroom Furniture, Office Furniture. Each card uses a typed `CategoryCard` reading from a single `categories.ts` data file — add an `image` field later and the card swaps from placeholder to photo automatically.
6. **Featured Projects** — premium portfolio strip; renders the TV Console video(s). Data lives in `projects.ts`; empty slots show "Coming soon" tiles for other categories.
7. **Gallery** — category-filtered grid scaffold reading from `gallery.ts` (empty arrays per category for now); shows tasteful empty state per filter.
8. **Why Choose Us** — 8 items with serif numerals + brass divider.
9. **Custom Furniture** — "Don't See Your Style? We'll Build It For You" with the provided copy and a WhatsApp button on a warm clay background block.
10. **Videos** — dedicated workshop/project video section, currently rendering TV Console video(s) from `videos.ts`.
11. **Contact** — split layout: left = phone, two WhatsApp numbers, address (No. 9 Liberty Road, Ajanla), business hours placeholder; right = Quote Request form (name, phone, category select, message) — non-functional submit for now (toast confirmation), wired so we can connect Lovable Cloud later.
12. **Footer** — wordmark, quick links, contact line, "Website Designed & Developed by Akorex Co".

## Media drop-in strategy (so you can add later easily)

- `src/data/categories.ts`, `projects.ts`, `gallery.ts`, `videos.ts` are the only files you edit to add media.
- `src/assets/` holds generated placeholder hero/founder/category images.
- TV Console video: drop the file under `src/assets/videos/` and reference its path in `videos.ts` and `projects.ts`. If you share the file in the next turn I'll wire it in; otherwise the section ships with a styled placeholder poster + "Video coming soon" state.

## Technical notes

- Stack as-is: TanStack Start, Tailwind v4, shadcn. Single route `src/routes/index.tsx` with section components under `src/components/sections/`.
- Tokens added to `src/styles.css` under `:root` + `@theme inline` (no hex in components).
- `head()` on the index route: title "Eniola Furnitures — 30 Years of Craftsmanship", meta description, OG tags.
- Phone numbers rendered as `tel:` / `wa.me` links; WhatsApp uses `https://wa.me/2349078236989`.
- Generated placeholder imagery (warm editorial furniture photography style) for hero + founder + category cards via `imagegen` (fast tier).
- Mobile-first responsive with the grid + min-w-0 + shrink-0 pattern for header/founder rows.

## Out of scope (this build)

- Backend / form submission persistence (left as a TODO comment + toast).
- Auth, CMS, payments.
- Real photos for non-TV-Console categories — placeholders only.

Approve to build.