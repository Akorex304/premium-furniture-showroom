import tvConsole1 from "@/assets/tv-console-1.jpg.asset.json";
import tvConsole2 from "@/assets/tv-console-2.jpg.asset.json";
import tvConsole3 from "@/assets/tv-console-3.jpg.asset.json";
import tvConsole4 from "@/assets/tv-console-4.jpg.asset.json";
import tvConsole5 from "@/assets/tv-console-5.jpg.asset.json";
import tvConsole6 from "@/assets/tv-console-6.jpg.asset.json";
import tvConsole7 from "@/assets/tv-console-7.jpg.asset.json";

export type GalleryItem = {
  id: string;
  category: string;
  image: string;
  alt: string;
};

export const gallery: GalleryItem[] = [
  { id: "tvc-1", category: "TV Consoles", image: tvConsole1.url, alt: "Custom TV console with backlit circular mirror and wood feature wall" },
  { id: "tvc-2", category: "TV Consoles", image: tvConsole2.url, alt: "Fluted wood TV wall with floating console and accent lighting" },
  { id: "tvc-3", category: "TV Consoles", image: tvConsole3.url, alt: "Modern TV console with brick accent and warm LED lighting" },
  { id: "tvc-4", category: "TV Consoles", image: tvConsole4.url, alt: "Backlit panel TV wall with glass display cabinet and floating console" },
  { id: "tvc-5", category: "TV Consoles", image: tvConsole5.url, alt: "Marble-top TV console with fluted dark panels and ambient lighting" },
  { id: "tvc-6", category: "TV Consoles", image: tvConsole6.url, alt: "Luxury marble TV wall with chandelier and statement ceiling" },
  { id: "tvc-7", category: "TV Consoles", image: tvConsole7.url, alt: "High-gloss TV feature wall with built-in fireplace and display column" },
];

export const galleryCategories = [
  "All",
  "Sofa Chairs",
  "TV Consoles",
  "Wardrobes",
  "Doors",
  "Dining Tables",
  "Kitchen Cabinets",
  "Bedroom Furniture",
  "Office Furniture",
];
