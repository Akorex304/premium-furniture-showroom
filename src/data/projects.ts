import tvConsole1 from "@/assets/tv-console-1.jpg.asset.json";
import tvConsole2 from "@/assets/tv-console-2.jpg.asset.json";
import tvConsole3 from "@/assets/tv-console-3.jpg.asset.json";
import tvConsole4 from "@/assets/tv-console-4.jpg.asset.json";
import tvConsole5 from "@/assets/tv-console-5.jpg.asset.json";
import tvConsole6 from "@/assets/tv-console-6.jpg.asset.json";
import tvConsole7 from "@/assets/tv-console-7.jpg.asset.json";
import bedroom5 from "@/assets/bedroom/bedroom-5.jpg.asset.json";
import bedroom6 from "@/assets/bedroom/bedroom-6.jpg.asset.json";
import bedroom10 from "@/assets/bedroom/bedroom-10.jpg.asset.json";
import bedroom12 from "@/assets/bedroom/bedroom-12.jpg.asset.json";
import bedroom13 from "@/assets/bedroom/bedroom-13.jpg.asset.json";
import bedroom14 from "@/assets/bedroom/bedroom-14.jpg.asset.json";
import bedroom15 from "@/assets/bedroom/bedroom-15.jpg.asset.json";
import bedroom30 from "@/assets/bedroom/bedroom-30.jpg.asset.json";
import sofa16 from "@/assets/bedroom/bedroom-16.jpg.asset.json";
import sofa29 from "@/assets/bedroom/bedroom-29.jpg.asset.json";

export type Project = {
  id: string;
  title: string;
  category: string;
  poster?: string;
  image?: string;
  video?: string;
  comingSoon?: boolean;
};

export const projects: Project[] = [
  { id: "tv-console-mirror", title: "TV Console with Backlit Mirror", category: "TV Consoles", image: tvConsole1.url },
  { id: "tv-console-fluted", title: "Fluted Wood Feature TV Wall", category: "TV Consoles", image: tvConsole2.url },
  { id: "tv-console-brick", title: "Brick Accent TV Console", category: "TV Consoles", image: tvConsole3.url },
  { id: "tv-console-backlit", title: "Backlit Panel TV Wall", category: "TV Consoles", image: tvConsole4.url },
  { id: "tv-console-marble", title: "Marble-Top Floating Console", category: "TV Consoles", image: tvConsole5.url },
  { id: "tv-console-luxury", title: "Luxury Marble Feature Wall", category: "TV Consoles", image: tvConsole6.url },
  { id: "tv-console-gloss", title: "High-Gloss Fireplace TV Wall", category: "TV Consoles", image: tvConsole7.url },

  { id: "bed-channel-grey", title: "Channel-Tufted Grey Upholstered Bed", category: "Bedroom Furniture", image: bedroom5.url },
  { id: "bed-royal-blue", title: "Royal Blue Velvet Panel Bed", category: "Bedroom Furniture", image: bedroom6.url },
  { id: "bed-black-storage", title: "Black Upholstered Storage Bed", category: "Bedroom Furniture", image: bedroom10.url },
  { id: "bed-cream-geometric", title: "Cream Geometric Feature Headboard", category: "Bedroom Furniture", image: bedroom12.url },
  { id: "bed-grey-vertical", title: "Grey Vertical Channel Bed", category: "Bedroom Furniture", image: bedroom13.url },
  { id: "bed-taupe-fluted", title: "Taupe Fluted Panel Bed", category: "Bedroom Furniture", image: bedroom14.url },
  { id: "bed-black-gold", title: "Black & Gold Statement Bed", category: "Bedroom Furniture", image: bedroom15.url },
  { id: "bed-grey-slat-wall", title: "Grey Bed with Slat Feature Wall", category: "Bedroom Furniture", image: bedroom30.url },

  { id: "sofa-curved-beige", title: "Curved Beige Velvet Sofa Suite", category: "Sofa Chairs", image: sofa16.url },
  { id: "sofa-gold-accent", title: "Beige Sofa with Gold Trim Detail", category: "Sofa Chairs", image: sofa29.url },
];
