# ZIP Batch Upload Page + Wardrobes & Shoe Rack Category

## What you'll get

A private **Upload** page on the website where you drop a single ZIP of folders containing photos and videos. The page unpacks the ZIP, shows you a preview of every file it found with the category it will go into, and then writes those files into the project as real local files in `src/assets/...` — exactly like the media already in the gallery, so everything is committed to the repo and exports to GitHub.

## Important limitation (please read)

Local project files can only be written while you are working in the Lovable editor/preview. The published live site runs on a serverless host with no writable project folder, so the Upload page will be **available in the editor preview only** and hidden on the published site. That is the only way to satisfy "everything stored locally and exported to GitHub" — a runtime uploader on the live site would have to store files in cloud storage, which never reaches GitHub.

So the flow is: you open the preview, upload a ZIP, media lands in `src/assets/`, gallery updates, and it ships with your next GitHub push.

## How the upload page works

1. Go to `/upload` in the preview.
2. Drag in one ZIP (or pick it). Any folder depth is fine.
3. The page reads the ZIP in the browser and lists each media file with:
   - filename and size
   - detected category, guessed from the folder name it sits in (e.g. `Wardrobes/`, `Doors/`, `TV Consoles/`, `Beds/`)
   - a dropdown to correct the category, plus a "set all to…" control
   - an editable display title (auto-generated from the filename, cleaned up)
   - a duplicate warning if a file with identical content already exists in the project — those are skipped by default so nothing appears twice
4. Press **Add to gallery**. Files are written to `src/assets/<category-folder>/`, images kept as-is, oversized videos compressed to stay under the 10 MB per-file repo limit.
5. Every new item is appended to the existing data files, so each gets a permanent Reference ID (`WRD-014`, `WRD-V003`, `DOR-016`, …) that never shifts for existing pieces.
6. The category cover image is filled in automatically for any category that doesn't have one yet.

Supported inside the ZIP: JPG, JPEG, PNG, WEBP, MP4, MOV, WEBM. Anything else (including nested ZIPs and system junk like `__MACOSX`, `.DS_Store`) is ignored and reported.

## Wardrobes category rename

The category becomes **Wardrobes and Shoe Rack** — shown on the homepage grid, the category page heading, and the site navigation. The URL stays `/category/wardrobes` and the Reference ID prefix stays `WRD`, so nothing already issued changes.

## Wardrobe media from your PDF

The wardrobe PDF you sent is 25 designs: wardrobes, children's wardrobes, shoe racks, storage cabinets and one storage bed. As part of this work I'll extract those photos into `src/assets/wardrobes/`, drop the duplicated page variants, file the storage bed under Bedroom Furniture, and put everything else (wardrobes, children's wardrobes, shoe racks, storage cabinets) under Wardrobes and Shoe Rack with fresh Ref IDs and clean display names.

## Technical notes

- New dep: a browser ZIP reader (`fflate`) for client-side extraction — no server unzip, no cloud storage.
- New route `src/routes/upload.tsx`, rendered only when `import.meta.env.DEV` is true; on the published build the route renders a short "editor only" notice and is left out of the navigation and sitemap (`robots: noindex`).
- New server function module `src/lib/media-upload.functions.ts`:
  - `saveMediaBatch` receives base64 file payloads + category/title metadata, validated with Zod (extension allowlist, size cap, filename sanitising, path-traversal rejection).
  - Writes with `node:fs/promises` into `src/assets/<folder>/`, hashes content to detect duplicates, and refuses to run unless `process.env.NODE_ENV === 'development'`.
  - Appends entries to `src/data/projects.ts` / `src/data/videos.ts` by generating a small companion module (`src/data/uploaded-media.ts`) that both files spread in — this avoids rewriting the hand-maintained arrays and keeps Ref ID ordering stable.
- `src/data/refIds.ts`: add the renamed category label mapping to the existing `WRD` prefix.
- `src/data/categories.ts`: rename the Wardrobes entry's `name`, keep `slug: "wardrobes"`, add a cover image.
- No changes to layout, styling, animations, or the existing gallery/enquiry behaviour.
