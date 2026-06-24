export type Project = {
  id: string;
  title: string;
  category: string;
  poster?: string;
  video?: string; // path under src/assets/videos/
  comingSoon?: boolean;
};

// Add new projects here. To wire a video, drop the file into
// src/assets/videos/ and set `video: "/src/assets/videos/your-file.mp4"`,
// or upload via the assets pipeline and paste the CDN URL.
export const projects: Project[] = [
  {
    id: "tv-console-walnut",
    title: "Walnut Floating TV Console",
    category: "TV Consoles",
    comingSoon: true,
  },
  {
    id: "tv-console-oak",
    title: "Oak & Brass Media Unit",
    category: "TV Consoles",
    comingSoon: true,
  },
  {
    id: "tv-console-suite",
    title: "Full Living Suite Build",
    category: "TV Consoles",
    comingSoon: true,
  },
];
