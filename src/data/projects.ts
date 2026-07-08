import tvConsole1 from "@/assets/tv-console-1.jpg.asset.json";
import tvConsole2 from "@/assets/tv-console-2.jpg.asset.json";
import tvConsole3 from "@/assets/tv-console-3.jpg.asset.json";
import tvConsole4 from "@/assets/tv-console-4.jpg.asset.json";
import tvConsole5 from "@/assets/tv-console-5.jpg.asset.json";
import tvConsole6 from "@/assets/tv-console-6.jpg.asset.json";
import tvConsole7 from "@/assets/tv-console-7.jpg.asset.json";
import tvcWa45 from "@/assets/tv-consoles/tvc-WA0045.jpg.asset.json";
import tvcWa46 from "@/assets/tv-consoles/tvc-WA0046_1.jpg.asset.json";
import tvcWa47 from "@/assets/tv-consoles/tvc-WA0047.jpg.asset.json";
import tvcWa48 from "@/assets/tv-consoles/tvc-WA0048_1.jpg.asset.json";
import tvcWa49 from "@/assets/tv-consoles/tvc-WA0049.jpg.asset.json";
import tvcWa50 from "@/assets/tv-consoles/tvc-WA0050.jpg.asset.json";
import tvcWa51 from "@/assets/tv-consoles/tvc-WA0051.jpg.asset.json";
import tvcWa53 from "@/assets/tv-consoles/tvc-WA0053.jpg.asset.json";
import tvcWa13 from "@/assets/tv-consoles/tvc-WA0013.jpg.asset.json";
import tvcWa16 from "@/assets/tv-consoles/tvc-WA0016.jpg.asset.json";
import tvcWa20 from "@/assets/tv-consoles/tvc-WA0020.jpg.asset.json";
import tvcWa22 from "@/assets/tv-consoles/tvc-WA0022.jpg.asset.json";
import tvcWa23 from "@/assets/tv-consoles/tvc-WA0023.jpg.asset.json";
import tvcWa24 from "@/assets/tv-consoles/tvc-WA0024.jpg.asset.json";
import tvcWa35 from "@/assets/tv-consoles/tvc-WA0035.jpg.asset.json";
import tvcWa37 from "@/assets/tv-consoles/tvc-WA0037.jpg.asset.json";
import door60 from "@/assets/doors/door-WA0060.jpg.asset.json";
import door61 from "@/assets/doors/door-WA0061.jpg.asset.json";
import door64 from "@/assets/doors/door-WA0064.jpg.asset.json";
import door66 from "@/assets/doors/door-WA0066.jpg.asset.json";
import door67 from "@/assets/doors/door-WA0067.jpg.asset.json";
import door68 from "@/assets/doors/door-WA0068.jpg.asset.json";
import door69 from "@/assets/doors/door-WA0069.jpg.asset.json";
import door70 from "@/assets/doors/door-WA0070.jpg.asset.json";
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
import bedroom08 from "@/assets/bedroom/bedroom-08.jpg.asset.json";
import bedroom09 from "@/assets/bedroom/bedroom-09.jpg.asset.json";
import bedroom11 from "@/assets/bedroom/bedroom-11.jpg.asset.json";
import bedroom20 from "@/assets/bedroom/bedroom-20.jpg.asset.json";
import bedroom22 from "@/assets/bedroom/bedroom-22.jpg.asset.json";
import bedroom23 from "@/assets/bedroom/bedroom-23.jpg.asset.json";
import bedroom25 from "@/assets/bedroom/bedroom-25.jpg.asset.json";
import bedroom26 from "@/assets/bedroom/bedroom-26.jpg.asset.json";
import bedroom27 from "@/assets/bedroom/bedroom-27.jpg.asset.json";
import bedroom28 from "@/assets/bedroom/bedroom-28.jpg.asset.json";
import bedroomWa33 from "@/assets/bedroom/bedroom-wa33.jpg.asset.json";
import bedroomWa36 from "@/assets/bedroom/bedroom-wa36.jpg.asset.json";
import bedroomWa37 from "@/assets/bedroom/bedroom-wa37.jpg.asset.json";
import bedroomWa38 from "@/assets/bedroom/bedroom-wa38.jpg.asset.json";
import bedroomWa39 from "@/assets/bedroom/bedroom-wa39.jpg.asset.json";
import bedroomWa40 from "@/assets/bedroom/bedroom-wa40.jpg.asset.json";
import bedroomWa41 from "@/assets/bedroom/bedroom-wa41.jpg.asset.json";
import bedroomWa42 from "@/assets/bedroom/bedroom-wa42.jpg.asset.json";
import bedroomWa43 from "@/assets/bedroom/bedroom-wa43.jpg.asset.json";
import bedroomWa44 from "@/assets/bedroom/bedroom-wa44.jpg.asset.json";
import bedroomWa82 from "@/assets/bedroom/bedroom-wa082.jpg.asset.json";
import bedroomWa96 from "@/assets/bedroom/bedroom-wa096.jpg.asset.json";
import bedroomWa108 from "@/assets/bedroom/bedroom-wa108.jpg.asset.json";
import bedroomWa134 from "@/assets/bedroom/bedroom-wa134.jpg.asset.json";
import bedroomWa145 from "@/assets/bedroom/bedroom-wa145.jpg.asset.json";
import bedroomWa146 from "@/assets/bedroom/bedroom-wa146.jpg.asset.json";
import bedroomWa152 from "@/assets/bedroom/bedroom-wa152.jpg.asset.json";
import bedroomWa159 from "@/assets/bedroom/bedroom-wa159.jpg.asset.json";
import bedroomWa161 from "@/assets/bedroom/bedroom-wa161.jpg.asset.json";
import bedroomWa166 from "@/assets/bedroom/bedroom-wa166.jpg.asset.json";

import { assignRefIds } from "./refIds";

export type Project = {
  id: string;
  title: string;
  category: string;
  poster?: string;
  image?: string;
  video?: string;
  comingSoon?: boolean;
  refId: string;
};

const rawProjects = [
  { id: "tv-console-mirror", title: "TV Console with Backlit Mirror", category: "TV Consoles", image: tvConsole1.url },
  { id: "tv-console-fluted", title: "Fluted Wood Feature TV Wall", category: "TV Consoles", image: tvConsole2.url },
  { id: "tv-console-brick", title: "Brick Accent TV Console", category: "TV Consoles", image: tvConsole3.url },
  { id: "tv-console-backlit", title: "Backlit Panel TV Wall", category: "TV Consoles", image: tvConsole4.url },
  { id: "tv-console-marble", title: "Marble-Top Floating Console", category: "TV Consoles", image: tvConsole5.url },
  { id: "tv-console-luxury", title: "Luxury Marble Feature Wall", category: "TV Consoles", image: tvConsole6.url },
  { id: "tv-console-gloss", title: "High-Gloss Fireplace TV Wall", category: "TV Consoles", image: tvConsole7.url },
  { id: "tv-console-wa45-marble-gold", title: "White Marble Console with Gold Trim", category: "TV Consoles", image: tvcWa45.url },
  { id: "tv-console-wa46-champagne-panel", title: "Champagne Gloss Panel TV Wall", category: "TV Consoles", image: tvcWa46.url },
  { id: "tv-console-wa47-slat-mirror", title: "Slat Wall with Sculptural Mirror Feature", category: "TV Consoles", image: tvcWa47.url },
  { id: "tv-console-wa48-champagne-black", title: "Champagne & Black Marble TV Wall", category: "TV Consoles", image: tvcWa48.url },
  { id: "tv-console-wa49-marble-walnut", title: "Marble & Walnut TV Wall with Display Shelf", category: "TV Consoles", image: tvcWa49.url },
  { id: "tv-console-wa50-black-slat-gloss", title: "Black Slat Wall with Gloss Panel TV Feature", category: "TV Consoles", image: tvcWa50.url },
  { id: "tv-console-wa51-marble-walnut-suite", title: "Marble & Walnut TV Suite with Display", category: "TV Consoles", image: tvcWa51.url },
  { id: "tv-console-wa53-marble-walnut-luxe", title: "Luxe Marble & Walnut TV Feature Wall", category: "TV Consoles", image: tvcWa53.url },
  { id: "tv-console-wa13-panel-cove", title: "Ivory Panel TV Wall with Cove Lighting", category: "TV Consoles", image: tvcWa13.url },
  { id: "tv-console-wa16-gold-lounge", title: "Gold Feature TV Wall with Lounge Suite", category: "TV Consoles", image: tvcWa16.url },
  { id: "tv-console-wa20-white-floral", title: "White Floating TV Panel on Floral Wall", category: "TV Consoles", image: tvcWa20.url },
  { id: "tv-console-wa22-walnut-white-panel", title: "Walnut & White Panel TV Unit with Drawers", category: "TV Consoles", image: tvcWa22.url },
  { id: "tv-console-wa23-walnut-white-floating", title: "Walnut Panel with White Floating Console", category: "TV Consoles", image: tvcWa23.url },
  { id: "tv-console-wa24-walnut-panel", title: "Warm Walnut Panel TV Wall", category: "TV Consoles", image: tvcWa24.url },
  { id: "tv-console-wa35-marble-fireplace", title: "Marble TV Wall with Backlit Fireplace", category: "TV Consoles", image: tvcWa35.url },
  { id: "tv-console-wa37-gloss-slat", title: "White Gloss TV Panel with Charcoal Slat Wall", category: "TV Consoles", image: tvcWa37.url },

  { id: "door-wa60-black-chrome-stripe", title: "Black Door with Chrome Stripe Detail", category: "Doors", image: door60.url },
  { id: "door-wa61-frame-install", title: "Hardwood Door Frame Installation", category: "Doors", image: door61.url },
  { id: "door-wa64-walnut-chrome", title: "Walnut Door with Twin Chrome Inlay", category: "Doors", image: door64.url },
  { id: "door-wa66-black-satin-nickel", title: "Matte Black Door with Satin Nickel Handle", category: "Doors", image: door66.url },
  { id: "door-wa67-walnut-gloss", title: "High-Gloss Walnut Panel Door", category: "Doors", image: door67.url },
  { id: "door-wa68-walnut-chrome-stripes", title: "Walnut Door with Quad Chrome Stripes", category: "Doors", image: door68.url },
  { id: "door-wa69-stone-marble", title: "Stone-Effect Marble Feature Door", category: "Doors", image: door69.url },
  { id: "door-wa70-black-minimal", title: "Minimal Matte Black Interior Door", category: "Doors", image: door70.url },

  { id: "bed-channel-grey", title: "Channel-Tufted Grey Upholstered Bed", category: "Bedroom Furniture", image: bedroom5.url },
  { id: "bed-royal-blue", title: "Royal Blue Velvet Panel Bed", category: "Bedroom Furniture", image: bedroom6.url },
  { id: "bed-black-storage", title: "Black Upholstered Storage Bed", category: "Bedroom Furniture", image: bedroom10.url },
  { id: "bed-cream-geometric", title: "Cream Geometric Feature Headboard", category: "Bedroom Furniture", image: bedroom12.url },
  { id: "bed-grey-vertical", title: "Grey Vertical Channel Bed", category: "Bedroom Furniture", image: bedroom13.url },
  { id: "bed-taupe-fluted", title: "Taupe Fluted Panel Bed", category: "Bedroom Furniture", image: bedroom14.url },
  { id: "bed-black-gold", title: "Black & Gold Statement Bed", category: "Bedroom Furniture", image: bedroom15.url },
  { id: "bed-grey-slat-wall", title: "Grey Bed with Slat Feature Wall", category: "Bedroom Furniture", image: bedroom30.url },
  { id: "bed-grey-classic-nailhead", title: "Grey Classic Bed with Nailhead Trim", category: "Bedroom Furniture", image: bedroom28.url },
  { id: "bed-dark-grey-panel", title: "Dark Grey Fluted Panel Bed", category: "Bedroom Furniture", image: bedroom22.url },
  { id: "bed-boucle-cloud", title: "Boucle Cloud Upholstered Bed", category: "Bedroom Furniture", image: bedroom25.url },
  { id: "bed-boucle-minimal", title: "Minimal Boucle Platform Bed", category: "Bedroom Furniture", image: bedroom23.url },
  { id: "bed-arched-boucle", title: "Arched Boucle Headboard Bed", category: "Bedroom Furniture", image: bedroom26.url },
  { id: "bed-charcoal-suite", title: "Charcoal Bed Suite with Ottomans", category: "Bedroom Furniture", image: bedroom11.url },
  { id: "bed-grey-channel-suite", title: "Grey Channel Bed Suite", category: "Bedroom Furniture", image: bedroom20.url },
  { id: "bed-grey-marble-suite", title: "Grey Bed with Marble Floor Suite", category: "Bedroom Furniture", image: bedroom27.url },
  { id: "bed-grey-minimal-headboard", title: "Grey Minimal Split-Headboard Bed", category: "Bedroom Furniture", image: bedroom08.url },
  { id: "bed-charcoal-platform", title: "Charcoal Low-Profile Platform Bed", category: "Bedroom Furniture", image: bedroom09.url },
  { id: "bed-wa33-oak", title: "Warm Oak Storage Bed with Nightstands", category: "Bedroom Furniture", image: bedroomWa33.url },
  { id: "bed-wa36-customized", title: "Customized Espresso Storage Bed", category: "Bedroom Furniture", image: bedroomWa36.url },
  { id: "bed-wa37-geometric-gold", title: "Geometric Gold-Trim Feature Wall Suite", category: "Bedroom Furniture", image: bedroomWa37.url },
  { id: "bed-wa38-panel-ivory", title: "Ivory Panelled Feature Wall Bed", category: "Bedroom Furniture", image: bedroomWa38.url },
  { id: "bed-wa39-grey-channel-ottoman", title: "Grey Channel Ottoman Bed", category: "Bedroom Furniture", image: bedroomWa39.url },
  { id: "bed-wa40-cream-full-height", title: "Cream Full-Height Upholstered Bed", category: "Bedroom Furniture", image: bedroomWa40.url },
  { id: "bed-wa41-sage-channel", title: "Sage Channel-Tufted Bed", category: "Bedroom Furniture", image: bedroomWa41.url },
  { id: "bed-wa42-taupe-gold", title: "Taupe Panelled Bed with Gold Inlay", category: "Bedroom Furniture", image: bedroomWa42.url },
  { id: "bed-wa43-mahogany", title: "Mahogany High-Gloss Storage Bed", category: "Bedroom Furniture", image: bedroomWa43.url },
  { id: "bed-wa44-teal-velvet", title: "Teal Velvet Panelled Feature Bed", category: "Bedroom Furniture", image: bedroomWa44.url },
  { id: "bed-wa82-black-channel", title: "Black Channel-Tufted Bed with Ottoman", category: "Bedroom Furniture", image: bedroomWa82.url },
  { id: "bed-wa96-mustard-marble", title: "Mustard Velvet Bed with Marble Feature Wall", category: "Bedroom Furniture", image: bedroomWa96.url },
  { id: "bed-wa108-timber-white", title: "Timber & White Gloss Panel Bed", category: "Bedroom Furniture", image: bedroomWa108.url },
  { id: "bed-wa134-mustard-stone", title: "Mustard Headboard with Stone Feature Wall", category: "Bedroom Furniture", image: bedroomWa134.url },
  { id: "bed-wa145-grey-geometric", title: "Grey Geometric Panelled Feature Wall Bed", category: "Bedroom Furniture", image: bedroomWa145.url },
  { id: "bed-wa146-marble-scallop", title: "Black Marble Wall with Scallop Headboard", category: "Bedroom Furniture", image: bedroomWa146.url },
  { id: "bed-wa152-grey-slat", title: "Grey Bed with Timber Slat Wall", category: "Bedroom Furniture", image: bedroomWa152.url },
  { id: "bed-wa159-cream-gold-diamond", title: "Cream & Gold Diamond Panel Bed", category: "Bedroom Furniture", image: bedroomWa159.url },
  { id: "bed-wa161-ivory-gold-luxury", title: "Ivory & Gold Luxury Suite with Coffered Ceiling", category: "Bedroom Furniture", image: bedroomWa161.url },
  { id: "bed-wa166-walnut-stripe", title: "Walnut Headboard with Chrome Stripe Detail", category: "Bedroom Furniture", image: bedroomWa166.url },

  { id: "sofa-curved-beige", title: "Curved Beige Velvet Sofa Suite", category: "Sofa Chairs", image: sofa16.url },
  { id: "sofa-gold-accent", title: "Beige Sofa with Gold Trim Detail", category: "Sofa Chairs", image: sofa29.url },
];

export const projects: Project[] = assignRefIds(rawProjects, "image");

export function findByRefId(refId: string): Project | undefined {
  const q = refId.trim().toUpperCase();
  return projects.find((p) => p.refId === q);
}

