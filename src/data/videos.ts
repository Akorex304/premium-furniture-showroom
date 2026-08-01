import v1 from "@/assets/videos/tv-console-1.mp4";
import v2 from "@/assets/videos/tv-console-2.mp4";
import v3 from "@/assets/videos/tv-console-3.mp4";
import v4 from "@/assets/videos/tv-console-4.mp4";
import v20 from "@/assets/videos/tvc-vid-WA0020.mp4";
import v21 from "@/assets/videos/tvc-vid-WA0021.mp4";
import v48 from "@/assets/videos/tvc-vid-WA0048.mp4";

import { assignRefIds } from "./refIds";

export type Video = {
  id: string;
  title: string;
  category: string;
  src?: string;
  poster?: string;
  refId: string;
};

const rawVideos = [
  { id: "tvc-v1", title: "TV Console — Project Walkthrough", category: "TV Consoles", src: v1 },
  { id: "tvc-v2", title: "TV Console — Finished Install", category: "TV Consoles", src: v2 },
  { id: "tvc-v3", title: "TV Console — Detail Tour", category: "TV Consoles", src: v3 },
  { id: "tvc-v4", title: "TV Console — Site Reveal", category: "TV Consoles", src: v4 },
  { id: "tvc-v-wa20", title: "TV Console — Feature Wall Reveal", category: "TV Consoles", src: v20 },
  { id: "tvc-v-wa21", title: "TV Console — Room Walkthrough", category: "TV Consoles", src: v21 },
  { id: "tvc-v-wa48", title: "TV Console — Gloss Panel Install", category: "TV Consoles", src: v48 },
];

export const videos: Video[] = assignRefIds(rawVideos, "video");
