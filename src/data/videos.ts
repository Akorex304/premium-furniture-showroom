import v1 from "@/assets/videos/tv-console-1.mp4.asset.json";
import v2 from "@/assets/videos/tv-console-2.mp4.asset.json";
import v3 from "@/assets/videos/tv-console-3.mp4.asset.json";
import v4 from "@/assets/videos/tv-console-4.mp4.asset.json";

export type Video = {
  id: string;
  title: string;
  category: string;
  src?: string;
  poster?: string;
};

export const videos: Video[] = [
  { id: "tvc-v1", title: "TV Console — Project Walkthrough", category: "TV Consoles", src: v1.url },
  { id: "tvc-v2", title: "TV Console — Finished Install", category: "TV Consoles", src: v2.url },
  { id: "tvc-v3", title: "TV Console — Detail Tour", category: "TV Consoles", src: v3.url },
  { id: "tvc-v4", title: "TV Console — Site Reveal", category: "TV Consoles", src: v4.url },
];
