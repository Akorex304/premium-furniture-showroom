import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useRef, useState } from "react";
import { unzip } from "fflate";
import { Loader2, Upload, CheckCircle2, AlertTriangle } from "lucide-react";
import {
  CATEGORY_NAMES,
  guessCategory,
  isVideoExt,
  safeExt,
  titleFromFilename,
  type SaveResult,
} from "@/lib/media-categories";
import { saveMediaBatch } from "@/lib/media-upload.functions";

export const Route = createFileRoute("/upload")({
  head: () => ({
    meta: [
      { title: "Upload Media — Eniola Furnitures Studio Tools" },
      {
        name: "description",
        content:
          "Internal studio tool for adding furniture photos and videos to the Eniola Furnitures gallery.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Upload Media — Eniola Furnitures Studio Tools" },
      {
        property: "og:description",
        content: "Internal studio tool for adding gallery photos and videos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: UploadPage,
});

type Candidate = {
  key: string;
  name: string;
  path: string;
  size: number;
  kind: "image" | "video";
  title: string;
  category: string;
  include: boolean;
  bytes: Uint8Array;
};

const KB = 1024;
function formatSize(bytes: number) {
  if (bytes > KB * KB) return `${(bytes / (KB * KB)).toFixed(1)} MB`;
  return `${Math.max(1, Math.round(bytes / KB))} KB`;
}

function toBase64(bytes: Uint8Array) {
  let binary = "";
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
  }
  return btoa(binary);
}

function UploadPage() {
  const isEditor = import.meta.env.DEV;
  const save = useServerFn(saveMediaBatch);
  const inputRef = useRef<HTMLInputElement>(null);

  const [reading, setReading] = useState(false);
  const [items, setItems] = useState<Candidate[]>([]);
  const [ignored, setIgnored] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState({ done: 0, total: 0 });
  const [result, setResult] = useState<SaveResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleZip(file: File) {
    setError(null);
    setResult(null);
    setReading(true);
    try {
      const buffer = new Uint8Array(await file.arrayBuffer());
      const entries = await new Promise<Record<string, Uint8Array>>((resolve, reject) => {
        unzip(buffer, (err, data) => (err ? reject(err) : resolve(data)));
      });

      const next: Candidate[] = [];
      const skipped: string[] = [];
      for (const [zipPath, bytes] of Object.entries(entries)) {
        const name = zipPath.split("/").pop() ?? zipPath;
        if (!bytes.length || name.startsWith(".") || zipPath.includes("__MACOSX")) continue;
        const ext = safeExt(name);
        if (!ext) {
          skipped.push(zipPath);
          continue;
        }
        next.push({
          key: zipPath,
          name,
          path: zipPath,
          size: bytes.length,
          kind: isVideoExt(ext) ? "video" : "image",
          title: titleFromFilename(name),
          category: guessCategory(zipPath) ?? CATEGORY_NAMES[0]!,
          include: true,
          bytes,
        });
      }
      next.sort((a, b) => a.path.localeCompare(b.path));
      setItems(next);
      setIgnored(skipped);
    } catch {
      setError("That file could not be read as a ZIP archive. Please export the folder again.");
    } finally {
      setReading(false);
    }
  }

  function patch(key: string, changes: Partial<Candidate>) {
    setItems((prev) => prev.map((item) => (item.key === key ? { ...item, ...changes } : item)));
  }

  async function submit() {
    const selected = items.filter((item) => item.include);
    if (selected.length === 0) return;
    setBusy(true);
    setError(null);
    const merged: SaveResult = { saved: [], skipped: [] };
    setProgress({ done: 0, total: selected.length });
    try {
      for (let i = 0; i < selected.length; i += 4) {
        const batch = selected.slice(i, i + 4);
        const response = await save({
          data: {
            files: batch.map((item) => ({
              name: item.name,
              title: item.title.trim() || titleFromFilename(item.name),
              category: item.category,
              content: toBase64(item.bytes),
            })),
          },
        });
        merged.saved.push(...response.saved);
        merged.skipped.push(...response.skipped);
        setProgress({ done: Math.min(i + batch.length, selected.length), total: selected.length });
      }
      setResult(merged);
      setItems([]);
      if (inputRef.current) inputRef.current.value = "";
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  const includedCount = items.filter((item) => item.include).length;

  return (
    <main className="mx-auto max-w-5xl px-5 py-14 md:px-10 md:py-20">
      <p className="text-[10px] uppercase tracking-[0.32em] text-[var(--color-clay)]">
        Studio Tool
      </p>
      <h1 className="mt-3 font-display text-3xl text-[var(--color-espresso)] md:text-4xl">
        Upload a folder of photos &amp; videos
      </h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-walnut)]">
        Zip a folder of furniture media and drop it here. Files are saved straight into the project
        as local files, so they are committed with the site and pushed to GitHub. Each item receives
        a permanent Reference ID automatically.
      </p>

      {!isEditor ? (
        <div className="mt-10 rounded-lg border border-[var(--color-border)] bg-white/60 p-6 text-sm text-[var(--color-walnut)]">
          <AlertTriangle className="mb-3 h-5 w-5 text-[var(--color-brass)]" />
          This tool is only available inside the Lovable editor preview, where project files can be
          written. Open the preview to add media.
        </div>
      ) : (
        <>
          <label className="mt-10 flex cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-[var(--color-border)] bg-white/50 px-6 py-12 text-center transition-colors hover:border-[var(--color-brass)]">
            <Upload className="h-6 w-6 text-[var(--color-brass)]" />
            <span className="text-sm text-[var(--color-walnut)]">
              {reading ? "Reading archive…" : "Choose a .zip file (any folder structure)"}
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-clay)]">
              JPG · PNG · WEBP · MP4 · MOV · WEBM
            </span>
            <input
              ref={inputRef}
              type="file"
              accept=".zip,application/zip"
              className="hidden"
              onChange={(event) => {
                const file = event.target.files?.[0];
                if (file) void handleZip(file);
              }}
            />
          </label>

          {error ? (
            <p className="mt-4 text-sm text-red-700">{error}</p>
          ) : null}

          {ignored.length > 0 ? (
            <p className="mt-4 text-xs text-[var(--color-clay)]">
              {ignored.length} file{ignored.length === 1 ? "" : "s"} in the archive were ignored
              (unsupported type).
            </p>
          ) : null}

          {items.length > 0 ? (
            <div className="mt-10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-sm text-[var(--color-walnut)]">
                  {includedCount} of {items.length} files selected
                </p>
                <div className="flex items-center gap-3">
                  <select
                    aria-label="Set category for all files"
                    defaultValue=""
                    className="rounded-md border border-[var(--color-border)] bg-white px-3 py-2 text-xs text-[var(--color-walnut)]"
                    onChange={(event) => {
                      const value = event.target.value;
                      if (!value) return;
                      setItems((prev) => prev.map((item) => ({ ...item, category: value })));
                    }}
                  >
                    <option value="">Set all to…</option>
                    {CATEGORY_NAMES.map((name) => (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                  <button
                    type="button"
                    disabled={busy || includedCount === 0}
                    onClick={() => void submit()}
                    className="inline-flex items-center gap-2 rounded-md bg-[var(--color-espresso)] px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-white transition-opacity disabled:opacity-50"
                  >
                    {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                    {busy ? `Saving ${progress.done}/${progress.total}` : "Add to gallery"}
                  </button>
                </div>
              </div>

              <ul className="mt-6 divide-y divide-[var(--color-border)]/70 rounded-lg border border-[var(--color-border)] bg-white/60">
                {items.map((item) => (
                  <li key={item.key} className="flex flex-wrap items-center gap-3 p-4">
                    <input
                      type="checkbox"
                      checked={item.include}
                      aria-label={`Include ${item.name}`}
                      onChange={(event) => patch(item.key, { include: event.target.checked })}
                      className="h-4 w-4 accent-[var(--color-brass)]"
                    />
                    <span className="w-14 shrink-0 text-[10px] uppercase tracking-[0.18em] text-[var(--color-clay)]">
                      {item.kind}
                    </span>
                    <input
                      value={item.title}
                      onChange={(event) => patch(item.key, { title: event.target.value })}
                      aria-label={`Title for ${item.name}`}
                      className="min-w-[12rem] flex-1 rounded-md border border-[var(--color-border)] bg-white px-3 py-2 text-sm text-[var(--color-espresso)]"
                    />
                    <select
                      value={item.category}
                      aria-label={`Category for ${item.name}`}
                      onChange={(event) => patch(item.key, { category: event.target.value })}
                      className="rounded-md border border-[var(--color-border)] bg-white px-3 py-2 text-xs text-[var(--color-walnut)]"
                    >
                      {CATEGORY_NAMES.map((name) => (
                        <option key={name} value={name}>
                          {name}
                        </option>
                      ))}
                    </select>
                    <span className="w-16 shrink-0 text-right text-[11px] text-[var(--color-clay)]">
                      {formatSize(item.size)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {result ? (
            <div className="mt-10 rounded-lg border border-[var(--color-border)] bg-white/60 p-6">
              <p className="flex items-center gap-2 font-display text-lg text-[var(--color-espresso)]">
                <CheckCircle2 className="h-5 w-5 text-[var(--color-brass)]" />
                {result.saved.length} item{result.saved.length === 1 ? "" : "s"} added
              </p>
              {result.saved.length > 0 ? (
                <ul className="mt-4 space-y-1 text-xs text-[var(--color-walnut)]">
                  {result.saved.map((entry) => (
                    <li key={entry.refName}>
                      {entry.title} — {entry.category} · {entry.refName}
                    </li>
                  ))}
                </ul>
              ) : null}
              {result.skipped.length > 0 ? (
                <>
                  <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[var(--color-clay)]">
                    Skipped
                  </p>
                  <ul className="mt-2 space-y-1 text-xs text-[var(--color-clay)]">
                    {result.skipped.map((entry) => (
                      <li key={`${entry.name}-${entry.reason}`}>
                        {entry.name} — {entry.reason}
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
            </div>
          ) : null}
        </>
      )}
    </main>
  );
}
