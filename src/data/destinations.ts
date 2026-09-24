import { travelImages } from "./images";

export interface Destination {
  id: string;
  name: string;
  region: "india" | "international";
  subtitle: string;
  tagline: string;
  description: string;
  highlights: string[];
  bestTimeToVisit: string;
  image: string;
  mapCoords: { x: number; y: number }; // percentage on 1000x500 map canvas
  featured?: boolean;
  editorialSize?: "large" | "medium" | "horizontal" | "tall";
}

export const destinations: Destination[] = [
  {
    id: "dubai",
    name: "Dubai",
    region: "international",
    subtitle: "United Arab Emirates",
    tagline: "Luxury • Desert Splendour • Architectural Marvels",
    description:
      "Where golden desert dunes meet futuristic horizons, world-class hospitality, and boundless modern wonders.",
    highlights: ["Burj Khalifa Sky Lounge", "Private Arabian Desert Safari", "Old Dubai Creek & Souks"],
    bestTimeToVisit: "November – April",
    image: travelImages.dubai.url,
    mapCoords: { x: 61, y: 44 },
    featured: true,
    editorialSize: "large",
  },
  {
    id: "kashmir",
    name: "Kashmir",
    region: "india",
    subtitle: "The Crown of India",
    tagline: "Himalayan Vistas • Tranquil Waters • Alpine Serenity",
    description:
      "A valley of timeless poetic wonder, snow-draped pine ridges, quiet shikara glides on Dal Lake, and blooming saffron meadows.",
    highlights: ["Shikara dawn cruise on Dal Lake", "Gulmarg snow peaks & gondola", "Pahalgam pine valleys"],
    bestTimeToVisit: "March – October",
    image: travelImages.kashmir.url,
    mapCoords: { x: 68, y: 35 },
    featured: true,
    editorialSize: "tall",
  },
  {
    id: "europe",
    name: "Switzerland & Europe",
    region: "international",
    subtitle: "Alpine Heart of Europe",
    tagline: "Glacial Horizons • Scenic Railways • Classic Romance",
    description:
      "Crisp alpine air, storybook lakeside towns, world-famous mountain rail journeys, and unforgettable European vistas.",
    highlights: ["Glacier Express panoramic rail", "Lake Geneva & Lucerne", "Historic cobblestone villages"],
    bestTimeToVisit: "May – October & Dec – Feb",
    image: travelImages.switzerland.url,
    mapCoords: { x: 50, y: 30 },
    featured: true,
    editorialSize: "horizontal",
  },
  {
    id: "maldives",
    name: "Maldives",
    region: "international",
    subtitle: "Indian Ocean Paradise",
    tagline: "Overwater Living • Turquoise Lagoons • Pure Seclusion",
    description:
      "Crystalline atolls floating like scattered jewels across a sapphire sea, curated for tranquil restorative escapes.",
    highlights: ["Private ocean overwater suites", "Vibrant coral reef snorkeling", "Candlelit sandbank dining"],
    bestTimeToVisit: "November – April",
    image: travelImages.maldives.url,
    mapCoords: { x: 67, y: 60 },
    editorialSize: "medium",
  },
  {
    id: "bali",
    name: "Bali",
    region: "international",
    subtitle: "Island of the Gods",
    tagline: "Tropical Sanctuaries • Spiritual Temples • Cliffside Sunsets",
    description:
      "Lush emerald terraces, sacred water temples, artistic village craft, and dramatic ocean cliffs carved by warm tides.",
    highlights: ["Ubud rainforest villas", "Uluwatu sunset cliffs", "Seminyak coastal dining"],
    bestTimeToVisit: "April – October",
    image: travelImages.bali.url,
    mapCoords: { x: 82, y: 64 },
    editorialSize: "medium",
  },
  {
    id: "kerala",
    name: "Kerala",
    region: "india",
    subtitle: "God's Own Country",
    tagline: "Backwater Rhythms • Verdant Tea Mist • Coastal Heritage",
    description:
      "Drift silently through water-lily canal paths on a handcrafted kettuvallam, surrounded by swaying palms and mist-laden spice hills.",
    highlights: ["Alleppey private houseboat cruise", "Munnar rolling tea plantations", "Fort Kochi art & spice trails"],
    bestTimeToVisit: "September – March",
    image: travelImages.kerala.url,
    mapCoords: { x: 69, y: 55 },
    editorialSize: "tall",
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    region: "india",
    subtitle: "Land of Royalty",
    tagline: "Historic Palaces • Golden Sands • Living Heritage",
    description:
      "Walk the marble courtyards of Udaipur, gaze across the blue roofs of Jodhpur, and witness golden desert horizons under starlight.",
    highlights: ["Udaipur Lake Palace views", "Jaisalmer Thar desert camps", "Jaipur royal fortresses"],
    bestTimeToVisit: "October – March",
    image: travelImages.rajasthan.url,
    mapCoords: { x: 67, y: 41 },
    editorialSize: "horizontal",
  },
  {
    id: "singapore",
    name: "Singapore",
    region: "international",
    subtitle: "Garden City of the Future",
    tagline: "Futuristic Canopy • Epicurean Culture • Modern Wonder",
    description:
      "An immaculate blend of lush tropical greenery, awe-inspiring architecture, world-renowned gastronomy, and vibrant districts.",
    highlights: ["Gardens by the Bay Supertrees", "Marina Bay waterfront", "Changi Jewel & Sentosa Island"],
    bestTimeToVisit: "Year-Round",
    image: travelImages.singapore.url,
    mapCoords: { x: 78, y: 53 },
    editorialSize: "medium",
  },
  {
    id: "thailand",
    name: "Thailand",
    region: "international",
    subtitle: "Kingdom of Smiles",
    tagline: "Limestone Bays • Golden Sanctuaries • Island Warmth",
    description:
      "Sail amidst dramatic limestone monoliths of Phang Nga, wander peaceful Buddhist temples, and savor legendary culinary flair.",
    highlights: ["Phuket & Krabi island hopping", "Bangkok Grand Palace & river", "Koh Samui luxury wellness"],
    bestTimeToVisit: "November – April",
    image: travelImages.thailand.url,
    mapCoords: { x: 75, y: 46 },
    editorialSize: "medium",
  },
  {
    id: "andaman",
    name: "Andaman Islands",
    region: "india",
    subtitle: "Untouched Tropical Archipelago",
    tagline: "Powder Beaches • Pristine Corals • Coastal Solitude",
    description:
      "Pristine turquoise bays fringed by ancient rainforests, Radhanagar's legendary sunsets, and peaceful island escapism.",
    highlights: ["Radhanagar Beach sunsets", "Havelock scuba & snorkeling", "Neil Island quiet shores"],
    bestTimeToVisit: "October – May",
    image: travelImages.andaman.url,
    mapCoords: { x: 75, y: 51 },
    editorialSize: "medium",
  },
  {
    id: "goa",
    name: "Goa",
    region: "india",
    subtitle: "Sun, Sea & Portuguese Heritage",
    tagline: "Golden Shores • Latin Quarters • Coastal Ease",
    description:
      "Sip tender coconut water along tranquil South Goa coves, explore Fontainhas pastel villas, and embrace the gentle coastal tempo.",
    highlights: ["South Goa secluded sands", "Fontainhas heritage walk", "Mandovi River sunset cruises"],
    bestTimeToVisit: "November – February",
    image: travelImages.goa.url,
    mapCoords: { x: 68, y: 49 },
    editorialSize: "medium",
  },
];
