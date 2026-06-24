export type GalleryItem = {
  id: string;
  category: string; // matches Category.name
  image: string;
  alt: string;
};

// Drop project photos into src/assets/gallery/ and reference them here.
export const gallery: GalleryItem[] = [];

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
