import { travelImages } from "./images";

export interface TravelCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
  curatedFocus: string;
  suggestedDestinations: string[];
}

export const travelCategories: TravelCategory[] = [
  {
    id: "beach-escapes",
    title: "Beach Escapes",
    subtitle: "Sun, Turquoise Tides & Barefoot Luxury",
    description:
      "Drift away to warm ocean breezes, tranquil overwater retreats, and private coastal sanctuaries designed for deep unwinding.",
    image: travelImages.categories.beach.url,
    badge: "Restorative Coastal",
    curatedFocus: "Private shoreline resorts, sunset cruises & island hopping",
    suggestedDestinations: ["Maldives", "Bali", "Goa", "Andaman", "Phuket"],
  },
  {
    id: "honeymoon-journeys",
    title: "Honeymoon Journeys",
    subtitle: "Intimate Memories in Extraordinary Settings",
    description:
      "Handcrafted journeys curated for two — secluded candlelight dinners, romantic scenic hideaways, and unforgettable moments together.",
    image: travelImages.categories.honeymoon.url,
    badge: "Curated For Two",
    curatedFocus: "Secluded suites, private transfers & bespoke celebrations",
    suggestedDestinations: ["Switzerland", "Maldives", "Kashmir", "Bali", "Kerala"],
  },
  {
    id: "family-holidays",
    title: "Family Holidays",
    subtitle: "Seamless Travel For All Generations",
    description:
      "Stress-free vacations balanced with comfort, engaging explorations, kid-friendly leisure, and spacious accommodations for everyone.",
    image: travelImages.categories.family.url,
    badge: "All Generations",
    curatedFocus: "Connected suites, child-friendly pacing & dependable private transport",
    suggestedDestinations: ["Dubai", "Singapore", "Kerala", "Europe", "Rajasthan"],
  },
  {
    id: "adventure-discovery",
    title: "Adventure & Discovery",
    subtitle: "Elevate Your Horizons",
    description:
      "From high Himalayan mountain passes and alpine trails to desert expeditions, awaken your spirit of discovery in pure comfort.",
    image: travelImages.categories.adventure.url,
    badge: "Active Exploration",
    curatedFocus: "Glacier viewpoints, desert glamping, wildlife sanctuaries & alpine rails",
    suggestedDestinations: ["Kashmir", "Swiss Alps", "Dubai Desert", "Ladakh"],
  },
  {
    id: "international-travel",
    title: "International Travel",
    subtitle: "Cross Borders With Confidence",
    description:
      "Global destinations brought within effortless reach through personalized itinerary design, visa guidance, and 24/7 travel clarity.",
    image: travelImages.categories.international.url,
    badge: "Global Horizons",
    curatedFocus: "Visa document advisory, premium flight routings & verified boutique hotels",
    suggestedDestinations: ["Europe", "Dubai", "Singapore", "Thailand", "Bali"],
  },
  {
    id: "incredible-india",
    title: "Incredible India",
    subtitle: "Timeless Heritage & Untamed Beauty",
    description:
      "Explore the majestic tapestry of our homeland — from royal Rajasthani palaces to mist-kissed southern hills and northern peaks.",
    image: travelImages.categories.india.url,
    badge: "Heritage & Soul",
    curatedFocus: "Palace heritage stays, private river houseboats & artisanal culinary trails",
    suggestedDestinations: ["Rajasthan", "Kashmir", "Kerala", "Andaman", "Goa"],
  },
];
