export type Video = {
  id: string;
  title: string;
  category: string;
  src?: string; // mp4/webm path or CDN url
  poster?: string;
};

// Add TV Console videos and future workshop videos here.
export const videos: Video[] = [
  { id: "tvc-1", title: "TV Console — Build Walkthrough", category: "TV Consoles" },
  { id: "tvc-2", title: "TV Console — Finished Install", category: "TV Consoles" },
];
