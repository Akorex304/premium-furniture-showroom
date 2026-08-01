import tvConsole1 from "@/assets/tv-console-1.jpg";
import tvConsole2 from "@/assets/tv-console-2.jpg";
import tvConsole3 from "@/assets/tv-console-3.jpg";
import tvConsole4 from "@/assets/tv-console-4.jpg";
import tvConsole5 from "@/assets/tv-console-5.jpg";
import tvConsole6 from "@/assets/tv-console-6.jpg";
import tvConsole7 from "@/assets/tv-console-7.jpg";
import tvcWa45 from "@/assets/tv-consoles/tvc-WA0045.jpg";
import tvcWa46 from "@/assets/tv-consoles/tvc-WA0046_1.jpg";
import tvcWa47 from "@/assets/tv-consoles/tvc-WA0047.jpg";
import tvcWa48 from "@/assets/tv-consoles/tvc-WA0048_1.jpg";
import tvcWa49 from "@/assets/tv-consoles/tvc-WA0049.jpg";
import tvcWa50 from "@/assets/tv-consoles/tvc-WA0050.jpg";
import tvcWa51 from "@/assets/tv-consoles/tvc-WA0051.jpg";
import tvcWa53 from "@/assets/tv-consoles/tvc-WA0053.jpg";
import tvcWa13 from "@/assets/tv-consoles/tvc-WA0013.jpg";
import tvcWa16 from "@/assets/tv-consoles/tvc-WA0016.jpg";
import tvcWa20 from "@/assets/tv-consoles/tvc-WA0020.jpg";
import tvcWa22 from "@/assets/tv-consoles/tvc-WA0022.jpg";
import tvcWa23 from "@/assets/tv-consoles/tvc-WA0023.jpg";
import tvcWa24 from "@/assets/tv-consoles/tvc-WA0024.jpg";
import tvcWa35 from "@/assets/tv-consoles/tvc-WA0035.jpg";
import tvcWa37 from "@/assets/tv-consoles/tvc-WA0037.jpg";
import door60 from "@/assets/doors/door-WA0060.jpg";
import door61 from "@/assets/doors/door-WA0061.jpg";
import door64 from "@/assets/doors/door-WA0064.jpg";
import door66 from "@/assets/doors/door-WA0066.jpg";
import door67 from "@/assets/doors/door-WA0067.jpg";
import door68 from "@/assets/doors/door-WA0068.jpg";
import door69 from "@/assets/doors/door-WA0069.jpg";
import door70 from "@/assets/doors/door-WA0070.jpg";
import door55 from "@/assets/doors/door-WA0055.jpg";
import door57 from "@/assets/doors/door-WA0057.jpg";
import door58 from "@/assets/doors/door-WA0058.jpg";
import door65 from "@/assets/doors/door-WA0065.jpg";
import tvcWa20b from "@/assets/tv-consoles/tvc-WA0020-2.jpg";
import tvcWa22b from "@/assets/tv-consoles/tvc-WA0022-2.jpg";
import tvcWa23b from "@/assets/tv-consoles/tvc-WA0023-2.jpg";
import tvcWa24b from "@/assets/tv-consoles/tvc-WA0024-2.jpg";
import tvcWa35b from "@/assets/tv-consoles/tvc-WA0035-2.jpg";
import bedroom5 from "@/assets/bedroom/bedroom-5.jpg";
import bedroom6 from "@/assets/bedroom/bedroom-6.jpg";
import bedroom10 from "@/assets/bedroom/bedroom-10.jpg";
import bedroom12 from "@/assets/bedroom/bedroom-12.jpg";
import bedroom13 from "@/assets/bedroom/bedroom-13.jpg";
import bedroom14 from "@/assets/bedroom/bedroom-14.jpg";
import bedroom15 from "@/assets/bedroom/bedroom-15.jpg";
import bedroom30 from "@/assets/bedroom/bedroom-30.jpg";
import sofa16 from "@/assets/bedroom/bedroom-16.jpg";
import sofa29 from "@/assets/bedroom/bedroom-29.jpg";
import bedroom08 from "@/assets/bedroom/bedroom-08.jpg";
import bedroom09 from "@/assets/bedroom/bedroom-09.jpg";
import bedroom11 from "@/assets/bedroom/bedroom-11.jpg";
import bedroom20 from "@/assets/bedroom/bedroom-20.jpg";
import bedroom22 from "@/assets/bedroom/bedroom-22.jpg";
import bedroom23 from "@/assets/bedroom/bedroom-23.jpg";
import bedroom25 from "@/assets/bedroom/bedroom-25.jpg";
import bedroom26 from "@/assets/bedroom/bedroom-26.jpg";
import bedroom27 from "@/assets/bedroom/bedroom-27.jpg";
import bedroom28 from "@/assets/bedroom/bedroom-28.jpg";
import bedroomWa33 from "@/assets/bedroom/bedroom-wa33.jpg";
import bedroomWa36 from "@/assets/bedroom/bedroom-wa36.jpg";
import bedroomWa37 from "@/assets/bedroom/bedroom-wa37.jpg";
import bedroomWa38 from "@/assets/bedroom/bedroom-wa38.jpg";
import bedroomWa39 from "@/assets/bedroom/bedroom-wa39.jpg";
import bedroomWa40 from "@/assets/bedroom/bedroom-wa40.jpg";
import bedroomWa41 from "@/assets/bedroom/bedroom-wa41.jpg";
import bedroomWa42 from "@/assets/bedroom/bedroom-wa42.jpg";
import bedroomWa43 from "@/assets/bedroom/bedroom-wa43.jpg";
import bedroomWa44 from "@/assets/bedroom/bedroom-wa44.jpg";
import bedroomWa82 from "@/assets/bedroom/bedroom-wa082.jpg";
import bedroomWa96 from "@/assets/bedroom/bedroom-wa096.jpg";
import bedroomWa108 from "@/assets/bedroom/bedroom-wa108.jpg";
import bedroomWa134 from "@/assets/bedroom/bedroom-wa134.jpg";
import bedroomWa145 from "@/assets/bedroom/bedroom-wa145.jpg";
import bedroomWa146 from "@/assets/bedroom/bedroom-wa146.jpg";
import bedroomWa152 from "@/assets/bedroom/bedroom-wa152.jpg";
import bedroomWa159 from "@/assets/bedroom/bedroom-wa159.jpg";
import bedroomWa161 from "@/assets/bedroom/bedroom-wa161.jpg";
import bedroomWa166 from "@/assets/bedroom/bedroom-wa166.jpg";

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
  { id: "tv-console-mirror", title: "TV Console with Backlit Mirror", category: "TV Consoles", image: tvConsole1 },
  { id: "tv-console-fluted", title: "Fluted Wood Feature TV Wall", category: "TV Consoles", image: tvConsole2 },
  { id: "tv-console-brick", title: "Brick Accent TV Console", category: "TV Consoles", image: tvConsole3 },
  { id: "tv-console-backlit", title: "Backlit Panel TV Wall", category: "TV Consoles", image: tvConsole4 },
  { id: "tv-console-marble", title: "Marble-Top Floating Console", category: "TV Consoles", image: tvConsole5 },
  { id: "tv-console-luxury", title: "Luxury Marble Feature Wall", category: "TV Consoles", image: tvConsole6 },
  { id: "tv-console-gloss", title: "High-Gloss Fireplace TV Wall", category: "TV Consoles", image: tvConsole7 },
  { id: "tv-console-wa45-marble-gold", title: "White Marble Console with Gold Trim", category: "TV Consoles", image: tvcWa45 },
  { id: "tv-console-wa46-champagne-panel", title: "Champagne Gloss Panel TV Wall", category: "TV Consoles", image: tvcWa46 },
  { id: "tv-console-wa47-slat-mirror", title: "Slat Wall with Sculptural Mirror Feature", category: "TV Consoles", image: tvcWa47 },
  { id: "tv-console-wa48-champagne-black", title: "Champagne & Black Marble TV Wall", category: "TV Consoles", image: tvcWa48 },
  { id: "tv-console-wa49-marble-walnut", title: "Marble & Walnut TV Wall with Display Shelf", category: "TV Consoles", image: tvcWa49 },
  { id: "tv-console-wa50-black-slat-gloss", title: "Black Slat Wall with Gloss Panel TV Feature", category: "TV Consoles", image: tvcWa50 },
  { id: "tv-console-wa51-marble-walnut-suite", title: "Marble & Walnut TV Suite with Display", category: "TV Consoles", image: tvcWa51 },
  { id: "tv-console-wa53-marble-walnut-luxe", title: "Luxe Marble & Walnut TV Feature Wall", category: "TV Consoles", image: tvcWa53 },
  { id: "tv-console-wa13-panel-cove", title: "Ivory Panel TV Wall with Cove Lighting", category: "TV Consoles", image: tvcWa13 },
  { id: "tv-console-wa16-gold-lounge", title: "Gold Feature TV Wall with Lounge Suite", category: "TV Consoles", image: tvcWa16 },
  { id: "tv-console-wa20-white-floral", title: "White Floating TV Panel on Floral Wall", category: "TV Consoles", image: tvcWa20 },
  { id: "tv-console-wa22-walnut-white-panel", title: "Walnut & White Panel TV Unit with Drawers", category: "TV Consoles", image: tvcWa22 },
  { id: "tv-console-wa23-walnut-white-floating", title: "Walnut Panel with White Floating Console", category: "TV Consoles", image: tvcWa23 },
  { id: "tv-console-wa24-walnut-panel", title: "Warm Walnut Panel TV Wall", category: "TV Consoles", image: tvcWa24 },
  { id: "tv-console-wa35-marble-fireplace", title: "Marble TV Wall with Backlit Fireplace", category: "TV Consoles", image: tvcWa35 },
  { id: "tv-console-wa37-gloss-slat", title: "White Gloss TV Panel with Charcoal Slat Wall", category: "TV Consoles", image: tvcWa37 },
  { id: "tv-console-wa20b-white-floral", title: "Compact White Floating TV Panel", category: "TV Consoles", image: tvcWa20b },
  { id: "tv-console-wa22b-walnut-white-drawers", title: "Walnut Panel TV Wall with White Drawer Console", category: "TV Consoles", image: tvcWa22b },
  { id: "tv-console-wa23b-walnut-floating-white", title: "Walnut Slat Wall with Floating White Console", category: "TV Consoles", image: tvcWa23b },
  { id: "tv-console-wa24b-walnut-shelf", title: "Walnut TV Wall with Overhead Display Shelf", category: "TV Consoles", image: tvcWa24b },
  { id: "tv-console-wa35b-marble-fireplace-slat", title: "Marble Fireplace TV Wall with Slat Display Towers", category: "TV Consoles", image: tvcWa35b },

  { id: "door-wa60-black-chrome-stripe", title: "Black Door with Chrome Stripe Detail", category: "Doors", image: door60 },
  { id: "door-wa61-frame-install", title: "Hardwood Door Frame Installation", category: "Doors", image: door61 },
  { id: "door-wa64-walnut-chrome", title: "Walnut Door with Twin Chrome Inlay", category: "Doors", image: door64 },
  { id: "door-wa66-black-satin-nickel", title: "Matte Black Door with Satin Nickel Handle", category: "Doors", image: door66 },
  { id: "door-wa67-walnut-gloss", title: "High-Gloss Walnut Panel Door", category: "Doors", image: door67 },
  { id: "door-wa68-walnut-chrome-stripes", title: "Walnut Door with Quad Chrome Stripes", category: "Doors", image: door68 },
  { id: "door-wa69-stone-marble", title: "Stone-Effect Marble Feature Door", category: "Doors", image: door69 },
  { id: "door-wa70-black-minimal", title: "Minimal Matte Black Interior Door", category: "Doors", image: door70 },
  { id: "door-wa55-black-chrome-5stripe", title: "Espresso Door with Five Chrome Stripes", category: "Doors", image: door55 },
  { id: "door-wa57-geometric-white", title: "White Door with Geometric Black Line Inlay", category: "Doors", image: door57 },
  { id: "door-wa58-walnut-twin-chrome", title: "Warm Walnut Door with Twin Chrome Bars", category: "Doors", image: door58 },
  { id: "door-wa65-oak-black-grooves", title: "Light Oak Door with Black Groove Detail", category: "Doors", image: door65 },

  { id: "bed-channel-grey", title: "Channel-Tufted Grey Upholstered Bed", category: "Bedroom Furniture", image: bedroom5 },
  { id: "bed-royal-blue", title: "Royal Blue Velvet Panel Bed", category: "Bedroom Furniture", image: bedroom6 },
  { id: "bed-black-storage", title: "Black Upholstered Storage Bed", category: "Bedroom Furniture", image: bedroom10 },
  { id: "bed-cream-geometric", title: "Cream Geometric Feature Headboard", category: "Bedroom Furniture", image: bedroom12 },
  { id: "bed-grey-vertical", title: "Grey Vertical Channel Bed", category: "Bedroom Furniture", image: bedroom13 },
  { id: "bed-taupe-fluted", title: "Taupe Fluted Panel Bed", category: "Bedroom Furniture", image: bedroom14 },
  { id: "bed-black-gold", title: "Black & Gold Statement Bed", category: "Bedroom Furniture", image: bedroom15 },
  { id: "bed-grey-slat-wall", title: "Grey Bed with Slat Feature Wall", category: "Bedroom Furniture", image: bedroom30 },
  { id: "bed-grey-classic-nailhead", title: "Grey Classic Bed with Nailhead Trim", category: "Bedroom Furniture", image: bedroom28 },
  { id: "bed-dark-grey-panel", title: "Dark Grey Fluted Panel Bed", category: "Bedroom Furniture", image: bedroom22 },
  { id: "bed-boucle-cloud", title: "Boucle Cloud Upholstered Bed", category: "Bedroom Furniture", image: bedroom25 },
  { id: "bed-boucle-minimal", title: "Minimal Boucle Platform Bed", category: "Bedroom Furniture", image: bedroom23 },
  { id: "bed-arched-boucle", title: "Arched Boucle Headboard Bed", category: "Bedroom Furniture", image: bedroom26 },
  { id: "bed-charcoal-suite", title: "Charcoal Bed Suite with Ottomans", category: "Bedroom Furniture", image: bedroom11 },
  { id: "bed-grey-channel-suite", title: "Grey Channel Bed Suite", category: "Bedroom Furniture", image: bedroom20 },
  { id: "bed-grey-marble-suite", title: "Grey Bed with Marble Floor Suite", category: "Bedroom Furniture", image: bedroom27 },
  { id: "bed-grey-minimal-headboard", title: "Grey Minimal Split-Headboard Bed", category: "Bedroom Furniture", image: bedroom08 },
  { id: "bed-charcoal-platform", title: "Charcoal Low-Profile Platform Bed", category: "Bedroom Furniture", image: bedroom09 },
  { id: "bed-wa33-oak", title: "Warm Oak Storage Bed with Nightstands", category: "Bedroom Furniture", image: bedroomWa33 },
  { id: "bed-wa36-customized", title: "Customized Espresso Storage Bed", category: "Bedroom Furniture", image: bedroomWa36 },
  { id: "bed-wa37-geometric-gold", title: "Geometric Gold-Trim Feature Wall Suite", category: "Bedroom Furniture", image: bedroomWa37 },
  { id: "bed-wa38-panel-ivory", title: "Ivory Panelled Feature Wall Bed", category: "Bedroom Furniture", image: bedroomWa38 },
  { id: "bed-wa39-grey-channel-ottoman", title: "Grey Channel Ottoman Bed", category: "Bedroom Furniture", image: bedroomWa39 },
  { id: "bed-wa40-cream-full-height", title: "Cream Full-Height Upholstered Bed", category: "Bedroom Furniture", image: bedroomWa40 },
  { id: "bed-wa41-sage-channel", title: "Sage Channel-Tufted Bed", category: "Bedroom Furniture", image: bedroomWa41 },
  { id: "bed-wa42-taupe-gold", title: "Taupe Panelled Bed with Gold Inlay", category: "Bedroom Furniture", image: bedroomWa42 },
  { id: "bed-wa43-mahogany", title: "Mahogany High-Gloss Storage Bed", category: "Bedroom Furniture", image: bedroomWa43 },
  { id: "bed-wa44-teal-velvet", title: "Teal Velvet Panelled Feature Bed", category: "Bedroom Furniture", image: bedroomWa44 },
  { id: "bed-wa82-black-channel", title: "Black Channel-Tufted Bed with Ottoman", category: "Bedroom Furniture", image: bedroomWa82 },
  { id: "bed-wa96-mustard-marble", title: "Mustard Velvet Bed with Marble Feature Wall", category: "Bedroom Furniture", image: bedroomWa96 },
  { id: "bed-wa108-timber-white", title: "Timber & White Gloss Panel Bed", category: "Bedroom Furniture", image: bedroomWa108 },
  { id: "bed-wa134-mustard-stone", title: "Mustard Headboard with Stone Feature Wall", category: "Bedroom Furniture", image: bedroomWa134 },
  { id: "bed-wa145-grey-geometric", title: "Grey Geometric Panelled Feature Wall Bed", category: "Bedroom Furniture", image: bedroomWa145 },
  { id: "bed-wa146-marble-scallop", title: "Black Marble Wall with Scallop Headboard", category: "Bedroom Furniture", image: bedroomWa146 },
  { id: "bed-wa152-grey-slat", title: "Grey Bed with Timber Slat Wall", category: "Bedroom Furniture", image: bedroomWa152 },
  { id: "bed-wa159-cream-gold-diamond", title: "Cream & Gold Diamond Panel Bed", category: "Bedroom Furniture", image: bedroomWa159 },
  { id: "bed-wa161-ivory-gold-luxury", title: "Ivory & Gold Luxury Suite with Coffered Ceiling", category: "Bedroom Furniture", image: bedroomWa161 },
  { id: "bed-wa166-walnut-stripe", title: "Walnut Headboard with Chrome Stripe Detail", category: "Bedroom Furniture", image: bedroomWa166 },

  { id: "sofa-curved-beige", title: "Curved Beige Velvet Sofa Suite", category: "Sofa Chairs", image: sofa16 },
  { id: "sofa-gold-accent", title: "Beige Sofa with Gold Trim Detail", category: "Sofa Chairs", image: sofa29 },
];

export const projects: Project[] = assignRefIds(rawProjects, "image");

export function findByRefId(refId: string): Project | undefined {
  const q = refId.trim().toUpperCase();
  return projects.find((p) => p.refId === q);
}

