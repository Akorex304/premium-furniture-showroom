import tvConsole1 from "@/assets/tv-console-1.jpg";
import bedroomCover from "@/assets/bedroom/bedroom-13.jpg";
import sofaCover from "@/assets/bedroom/bedroom-16.jpg";
import doorCover from "@/assets/doors/door-WA0065.jpg";
import wardrobeCover from "@/assets/wardrobes/wardrobe-12-charcoal-gold-three-section.jpg";
import kitchenCover from "@/assets/kitchen/kitchen-cover.jpg";

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
    image: sofaCover,
  },
  {
    slug: "tv-consoles",
    name: "TV Consoles",
    description: "Bespoke media units that anchor a living space with quiet authority.",
    image: tvConsole1,
  },
  {
    slug: "wardrobes",
    name: "Wardrobes and Shoe Rack",
    description:
      "Floor-to-ceiling wardrobes and shoe racks built around your room and your storage.",
    image: wardrobeCover,
  },
  {
    slug: "doors",
    name: "Doors",
    description: "Solid hardwood doors with handcrafted detailing and lasting finishes.",
    image: doorCover,
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
    image: bedroomCover,
  },
  {
    slug: "office-furniture",
    name: "Office Furniture",
    description: "Executive desks, boardroom tables and workstations for the modern office.",
  },
];
