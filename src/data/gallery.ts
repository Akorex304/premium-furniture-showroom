import tvConsole1 from "@/assets/tv-console-1.jpg.asset.json";
import tvConsole2 from "@/assets/tv-console-2.jpg.asset.json";

export type GalleryItem = {
  id: string;
  category: string;
  image: string;
  alt: string;
};

export const gallery: GalleryItem[] = [
  {
    id: "tvc-1",
    category: "TV Consoles",
    image: tvConsole1.url,
    alt: "Custom TV console with backlit circular mirror and wood feature wall",
  },
  {
    id: "tvc-2",
    category: "TV Consoles",
    image: tvConsole2.url,
    alt: "Fluted wood TV wall with floating console and accent lighting",
  },
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
