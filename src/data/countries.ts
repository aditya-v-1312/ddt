export interface Location {
  id: string;
  city: string;
  country: string;
  title: string;
  subtitle: string;
  lat: number;
  lng: number;
  color?: string;
  description: string;
  highlights: string[];
  department?: "tours" | "ticketing" | "holidays";
}

export const originLocation: Location = {
  id: "vadodara",
  city: "Vadodara",
  country: "India",
  title: "Darsh Dream Tours Hub",
  subtitle: "Origin & Consultation Headquarters",
  lat: 22.3072,
  lng: 73.1812,
  color: "#E2B18D",
  description:
    "Our boutique headquarters in Sun Complex, Race Course, Vadodara. The starting point for every bespoke itinerary across India and the globe.",
  highlights: ["Official IATA Accredited Hub", "Ticketing & Visa Desk", "Private Tour Curation"],
  department: "tours",
};

export const locations: Location[] = [
  {
    id: "dubai",
    city: "Dubai",
    country: "United Arab Emirates",
    title: "Dubai & Emirates",
    subtitle: "Modern Luxury & Golden Desert Horizons",
    lat: 25.2048,
    lng: 55.2708,
    color: "#E2B18D",
    description:
      "Futuristic architecture, private desert sunset dunes, world-class luxury shopping, and marina superyacht cruises.",
    highlights: ["Burj Khalifa VIP", "Desert Stargazing Safari", "Palm Jumeirah Stays"],
    department: "tours",
  },
  {
    id: "switzerland",
    city: "Zurich & Alps",
    country: "Switzerland",
    title: "Swiss Alpine Wonders",
    subtitle: "Glacier Trains & Storybook Lakes",
    lat: 47.3769,
    lng: 8.5417,
    color: "#E2B18D",
    description:
      "Panoramic Glacier Express rides, crystal-clear Lake Lucerne, snowy peaks of Zermatt, and boutique chalet retreats.",
    highlights: ["Glacier Express", "Matterhorn Views", "Lucerne Lake Cruises"],
    department: "tours",
  },
  {
    id: "paris",
    city: "Paris",
    country: "France",
    title: "Paris & Romance",
    subtitle: "Art, High Gastronomy & Seine Lights",
    lat: 48.8566,
    lng: 2.3522,
    color: "#E2B18D",
    description:
      "Timeless Parisian boulevards, private Louvre access, Seine champagne cruises, and countryside chateaux getaways.",
    highlights: ["Private Museum Access", "Seine River Cruise", "Michelin Dining"],
    department: "tours",
  },
  {
    id: "london",
    city: "London",
    country: "United Kingdom",
    title: "London & Great Britain",
    subtitle: "Royal Heritage & Cosmopolitan Energy",
    lat: 51.5074,
    lng: -0.1278,
    color: "#E2B18D",
    description:
      "Historic royal palaces, world-class West End theatre, scenic Cotswolds country escapes, and luxury shopping.",
    highlights: ["West End Shows", "The Cotswolds", "Bespoke Royal Heritage"],
    department: "ticketing",
  },
  {
    id: "maldives",
    city: "Malé Atolls",
    country: "Maldives",
    title: "Maldivian Overwater Atolls",
    subtitle: "Pure Turquoise Sanctuaries",
    lat: 3.2028,
    lng: 73.2207,
    color: "#E2B18D",
    description:
      "Private villas perched over crystalline lagoons, bespoke sandbank dining, vibrant coral reefs, and unhurried luxury.",
    highlights: ["Overwater Bungalows", "Manta Ray Snorkeling", "Private Island Dinners"],
    department: "holidays",
  },
  {
    id: "bali",
    city: "Bali",
    country: "Indonesia",
    title: "Bali Island Retreat",
    subtitle: "Ubud Jungles & Coastal Sunsets",
    lat: -8.4095,
    lng: 115.1889,
    color: "#E2B18D",
    description:
      "Lush terraced emerald valleys, spiritual temple sunrises, cliffside beach clubs, and serene private pool villas.",
    highlights: ["Ubud Private Villas", "Uluwatu Sunset Cliffs", "Sacred Water Temples"],
    department: "holidays",
  },
  {
    id: "singapore",
    city: "Singapore",
    country: "Singapore",
    title: "Singapore Garden City",
    subtitle: "Modern Splendour & Family Entertainment",
    lat: 1.3521,
    lng: 103.8198,
    color: "#E2B18D",
    description:
      "Illuminated Supertrees at Gardens by the Bay, luxury Marina Bay Sands infinity views, and Sentosa Island attractions.",
    highlights: ["Gardens by the Bay", "Marina Bay Sands", "Sentosa Luxury Stays"],
    department: "holidays",
  },
  {
    id: "tokyo",
    city: "Tokyo",
    country: "Japan",
    title: "Tokyo & Kyoto",
    subtitle: "Ancient Shrines & Ultra-Modern Neon",
    lat: 35.6762,
    lng: 139.6503,
    color: "#E2B18D",
    description:
      "Shinkansen bullet trains, serene Kyoto bamboo groves, Mount Fuji views, and Michelin-starred culinary artistry.",
    highlights: ["Kyoto Bamboo Grove", "Bullet Train Rail Passes", "Mount Fuji Tours"],
    department: "tours",
  },
  {
    id: "newyork",
    city: "New York",
    country: "United States",
    title: "New York & Americas",
    subtitle: "The Iconic Skyline & Manhattan Culture",
    lat: 40.7128,
    lng: -74.006,
    color: "#E2B18D",
    description:
      "Broadway theatre nights, Central Park morning walks, panoramic skyline observatories, and luxury shopping.",
    highlights: ["Broadway Premieres", "Summit One Vanderbilt", "Express US Visa Care"],
    department: "ticketing",
  },
  {
    id: "sydney",
    city: "Sydney",
    country: "Australia",
    title: "Sydney & The Great Barrier Reef",
    subtitle: "Harbour Sunsets & Coastal Wonders",
    lat: -33.8688,
    lng: 151.2093,
    color: "#E2B18D",
    description:
      "Sydney Opera House harbour cruises, private Great Barrier Reef helicopters, and dramatic Blue Mountains lookouts.",
    highlights: ["Harbour Yacht Charters", "Great Barrier Reef", "Blue Mountains"],
    department: "tours",
  },
  {
    id: "nairobi",
    city: "Nairobi & Masai Mara",
    country: "Kenya",
    title: "Great African Safari",
    subtitle: "Untamed Savannah & Wildlife Spectacle",
    lat: -1.2921,
    lng: 36.8219,
    color: "#E2B18D",
    description:
      "Witness the legendary Great Migration across the golden savannah, sunrise hot air balloon rides, and luxury tented camps.",
    highlights: ["Masai Mara Safari", "Sunrise Hot Air Balloon", "Luxury Tented Lodges"],
    department: "tours",
  },
];
