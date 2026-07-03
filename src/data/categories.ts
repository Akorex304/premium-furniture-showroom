import tvConsole1 from "@/assets/tv-console-1.jpg.asset.json";
import bedroomCover from "@/assets/bedroom/bedroom-13.jpg.asset.json";
import sofaCover from "@/assets/bedroom/bedroom-16.jpg.asset.json";

export type Category = {
  slug: string;
  name: string;
  description: string;
  image?: string;
};

export const categories: Category[] = [
  {
    slug: "sofa-chairs",
    name: "Sofa Chairs",
    description: "Luxurious sofa sets and accent chairs upholstered in premium fabrics.",
    image: sofaCover.url,
  },
  {
    slug: "tv-consoles",
    name: "TV Consoles",
    description: "Bespoke media units that anchor a living space with quiet authority.",
    image: tvConsole1.url,
  },
  {
    slug: "wardrobes",
    name: "Wardrobes",
    description: "Floor-to-ceiling storage built around your room and your wardrobe.",
  },
  {
    slug: "doors",
    name: "Doors",
    description: "Solid hardwood doors with handcrafted detailing and lasting finishes.",
  },
  {
    slug: "dining-tables",
    name: "Dining Tables",
    description: "Heirloom dining sets crafted to host generations of gatherings.",
  },
  {
    slug: "kitchen-cabinets",
    name: "Kitchen Cabinets",
    description: "Full kitchen joinery, precision-fitted with premium hardware.",
  },
  {
    slug: "bedroom-furniture",
    name: "Bedroom Furniture",
    description: "Beds, nightstands and dressers designed as a quiet, considered suite.",
  },
  {
    slug: "office-furniture",
    name: "Office Furniture",
    description: "Executive desks, boardroom tables and workstations for the modern office.",
  },
];
