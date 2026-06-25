import tvConsole1 from "@/assets/tv-console-1.jpg.asset.json";
import tvConsole2 from "@/assets/tv-console-2.jpg.asset.json";

export type Project = {
  id: string;
  title: string;
  category: string;
  poster?: string;
  image?: string;
  video?: string;
  comingSoon?: boolean;
};

// To wire a video, drop the file under src/assets/videos/ and set
// `video: "/src/assets/videos/your-file.mp4"`, or upload via lovable-assets.
export const projects: Project[] = [
  {
    id: "tv-console-mirror",
    title: "TV Console with Backlit Mirror",
    category: "TV Consoles",
    image: tvConsole1.url,
  },
  {
    id: "tv-console-fluted",
    title: "Fluted Wood Feature TV Wall",
    category: "TV Consoles",
    image: tvConsole2.url,
  },
  {
    id: "tv-console-more",
    title: "More Projects Coming Soon",
    category: "TV Consoles",
    comingSoon: true,
  },
];
