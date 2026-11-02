export interface TravelPackage {
  id: string;
  destinationId: string;
  destinationName: string;
  title: string;
  duration: string;
  type: "Luxury" | "Honeymoon" | "Family" | "Explorer" | "Last-Minute Special";
  tagline: string;
  description: string;
  inclusions: string[];
  startingStar: 2 | 3 | 4 | 5;
  priceNote: string;
  popular?: boolean;
}

export const travelPackages: TravelPackage[] = [
  // DUBAI
  {
    id: "dubai-signature-5n",
    destinationId: "dubai",
    destinationName: "Dubai",
    title: "Dubai Signature City & Desert Dunes",
    duration: "5 Nights / 6 Days",
    type: "Luxury",
    tagline: "Burj Khalifa VIP, private desert sunset safari & marina yacht cruise",
    description:
      "A quintessential Arabian luxury escape combining high-fashion downtown, VIP observation decks, Arabian desert dining under starlight, and private marina cruising.",
    inclusions: [
      "5 Nights luxury hotel stay (2★, 3★, 4★, or 5★)",
      "Daily international breakfast",
      "Private airport transfers (luxury sedan)",
      "Burj Khalifa 124th/125th floor non-peak entry tickets",
      "Private 4x4 desert safari with BBQ dinner & live shows",
      "Dubai Marina sunset luxury yacht cruise",
      "Dubai Frame & Miracle Garden tours",
      "UAE tourist visa assistance",
    ],
    startingStar: 3,
    priceNote: "IATA Wholesale Package Rates Available",
    popular: true,
  },
  {
    id: "dubai-honeymoon-4n",
    destinationId: "dubai",
    destinationName: "Dubai",
    title: "Dubai Romantic Palm & Desert Mirage",
    duration: "4 Nights / 5 Days",
    type: "Honeymoon",
    tagline: "Romantic Palm Jumeirah resort, private sandbank dinner & helicopter skyline flight",
    description:
      "Tailored exclusively for couples seeking romance, bespoke dining, beachside cabanas, and private chauffeur-driven luxury.",
    inclusions: [
      "4 Nights in romantic 4★ or 5★ beachfront resort",
      "Honeymoon room decor, cake & sparkling beverage",
      "Private candlelit dunes dinner with personal butler",
      "Helicopter tour over Palm Jumeirah & Burj Al Arab",
      "Private luxury transfers throughout",
    ],
    startingStar: 4,
    priceNote: "Customized with 4★ or 5★ Palm Resorts",
    popular: true,
  },
  {
    id: "dubai-last-minute-express",
    destinationId: "dubai",
    destinationName: "Dubai",
    title: "Dubai Express Transit & Business Stay",
    duration: "3 Nights / 4 Days",
    type: "Last-Minute Special",
    tagline: "Urgent 24-48 hr booking desk with instant confirmation at 2★ to 5★ hotels",
    description:
      "Need to fly to Dubai on short notice for business, shopping, or transit? Our IATA desk guarantees room allocation and airport transfers immediately.",
    inclusions: [
      "Immediate hotel room allocation (2★, 3★, 4★, or 5★)",
      "Instant 24-hr UAE express visa care",
      "Airport pick & drop coordination",
      "Flexible check-in / late check-out support",
    ],
    startingStar: 2,
    priceNote: "Instant 2-hour confirmation guarantee",
  },

  // SWITZERLAND & EUROPE
  {
    id: "swiss-alps-7n",
    destinationId: "europe",
    destinationName: "Switzerland & Europe",
    title: "Swiss Alpine Glacier & Lakes Odyssey",
    duration: "7 Nights / 8 Days",
    type: "Luxury",
    tagline: "Glacier Express, Jungfraujoch Top of Europe, Lucerne & Zermatt",
    description:
      "Journey through Europe's grandest alpine vistas with first-class scenic Swiss rail passes, fairy-tale mountain towns, and pristine glacial lakes.",
    inclusions: [
      "7 Nights stay across Zurich, Lucerne & Interlaken (2★ to 5★)",
      "Daily Swiss alpine breakfast",
      "8-Day Swiss Travel Rail Pass (unlimited trains, boats & buses)",
      "Jungfraujoch – Top of Europe mountain cogwheel excursion",
      "Mount Titlis revolving cable car (Rotair) & Ice Cliff Walk",
      "Lake Lucerne panoramic paddle steamer cruise",
      "Schengen visa document curation & appointment care",
    ],
    startingStar: 3,
    priceNote: "Available in 2★ Budget Smart to 5★ Luxury Palace Tiers",
    popular: true,
  },
  {
    id: "paris-swiss-romantic-8n",
    destinationId: "europe",
    destinationName: "Switzerland & Europe",
    title: "Paris Lights & Swiss Alpine Splendour",
    duration: "8 Nights / 9 Days",
    type: "Honeymoon",
    tagline: "3 Nights Paris romance + 5 Nights scenic Swiss alpine chalet retreat",
    description:
      "The ultimate romantic European duo: private Seine river champagne cruise and Louvre access, followed by high-speed TGV rail into the heart of Switzerland.",
    inclusions: [
      "3 Nights Paris + 5 Nights Swiss boutique lodging",
      "High-speed TGV Lyria train ticket (Paris → Switzerland)",
      "Private Eiffel Tower & Seine evening illumination cruise",
      "Swiss mountain excursions (Mt. Pilatus / Titlis)",
      "Full Schengen visa documentation guidance",
    ],
    startingStar: 4,
    priceNote: "Handcrafted boutique honeymoon itinerary",
    popular: true,
  },

  // MALDIVES
  {
    id: "maldives-overwater-4n",
    destinationId: "maldives",
    destinationName: "Maldives",
    title: "Maldivian Overwater Villa Sanctuary",
    duration: "4 Nights / 5 Days",
    type: "Honeymoon",
    tagline: "Private water villa with direct turquoise lagoon access & all-inclusive dining",
    description:
      "Wake to crystalline waters right beneath your floorboards. Unwind with private overwater sun decks, sunset dolphin cruises, and restorative island spas.",
    inclusions: [
      "4 Nights in private overwater villa (or 2N Beach + 2N Water)",
      "All-Inclusive meal plan (Breakfast, Lunch, Dinner & Drinks)",
      "Combined return Speedboat or Seaplane transfers",
      "Sunset dolphin cruise excursion",
      "Complimentary snorkeling gear & non-motorized watersports",
      "Honeymoon floral bed decoration & fruit basket",
    ],
    startingStar: 4,
    priceNote: "Choice of 3★, 4★, or 5★ private island resorts",
    popular: true,
  },
  {
    id: "maldives-budget-smart-3n",
    destinationId: "maldives",
    destinationName: "Maldives",
    title: "Maldives Smart Island Explorer",
    duration: "3 Nights / 4 Days",
    type: "Explorer",
    tagline: "Experience real turquoise Maldivian atolls on local islands at accessible rates",
    description:
      "Enjoy the exact same crystal-clear waters and coral reefs with vetted 2★ or 3★ beachfront hotels on Maafushi or Hulhumale, with daily boat trips to sandbanks.",
    inclusions: [
      "3 Nights beachfront stay (2★ or 3★)",
      "Daily breakfast",
      "Return speedboat from Malé International Airport",
      "Guided coral reef snorkeling & sandbank lunch tour",
      "Nurse shark & stingray photo excursion",
    ],
    startingStar: 2,
    priceNote: "Incredible value starting from accessible budget rates",
  },

  // BALI
  {
    id: "bali-temples-villas-6n",
    destinationId: "bali",
    destinationName: "Bali",
    title: "Bali Sacred Temples & Private Pool Villas",
    duration: "6 Nights / 7 Days",
    type: "Luxury",
    tagline: "3 Nights Ubud jungle villa + 3 Nights Seminyak/Uluwatu beach resort",
    description:
      "Lush terraced rice paddies, sacred water temples, famous Bali swings, and sunset seafood dinners atop dramatic Uluwatu ocean cliffs.",
    inclusions: [
      "3 Nights Ubud private pool villa + 3 Nights beachfront resort",
      "Daily floating breakfast in private pool (Ubud)",
      "Private air-conditioned car & dedicated English-speaking driver",
      "Kintamani volcano, Tegalalang rice terrace & jungle swing tour",
      "Uluwatu sunset cliff temple & Kecak fire dance tickets",
      "Nusa Penida island day trip with speedboat transfers",
      "Watersports package at Tanjung Benoa (Banana boat, Jet Ski)",
    ],
    startingStar: 3,
    priceNote: "Available in 2★ budget lodges to 5★ private pool estates",
    popular: true,
  },

  // KASHMIR
  {
    id: "kashmir-paradise-5n",
    destinationId: "kashmir",
    destinationName: "Kashmir",
    title: "Kashmir Heavenly Valley & Shikara Serenade",
    duration: "5 Nights / 6 Days",
    type: "Family",
    tagline: "Dal Lake luxury cedar houseboat, Gulmarg snow gondola & Pahalgam pine valley",
    description:
      "Known as heaven on earth: drift gently on Dal Lake at sunrise, ride the world's highest gondola up snowy peaks, and stroll pine-scented valleys.",
    inclusions: [
      "1 Night Deluxe Houseboat on Dal Lake + 4 Nights scenic mountain hotels",
      "Daily Kashmiri breakfast & dinner (Wazwan / Indian)",
      "Private dedicated heating in rooms & vehicle",
      "Shikara cruise on Dal Lake with floating market visit",
      "Gulmarg Gondola Phase 1 & 2 ticket coordination",
      "Pahalgam Betaab Valley & Aru Valley excursion",
      "Dedicated local driver-guide throughout",
    ],
    startingStar: 3,
    priceNote: "Available in 2★, 3★, 4★, and 5★ Khyber Luxury options",
    popular: true,
  },

  // KERALA
  {
    id: "kerala-backwaters-5n",
    destinationId: "kerala",
    destinationName: "Kerala",
    title: "Kerala Backwaters & Mist-Veiled Munnar",
    duration: "5 Nights / 6 Days",
    type: "Family",
    tagline: "Munnar tea plantations, Thekkady spice wildlife & private AC houseboat cruise",
    description:
      "Restorative, lush greenery and slow rhythms: crisp mountain mist across tea hills, wild elephant boat safaris in Periyar, and private backwater cruising.",
    inclusions: [
      "2N Munnar + 1N Thekkady + 1N Alleppey Houseboat + 1N Kochi",
      "Private air-conditioned houseboat with private chef onboard",
      "Daily breakfast and all meals on houseboat",
      "Private air-conditioned sedan with chauffeur throughout",
      "Eravikulam National Park (Nilgiri Tahr) visit",
      "Periyar Lake spice plantation walk",
      "Fort Kochi heritage & Chinese fishing net tour",
    ],
    startingStar: 2,
    priceNote: "Available across all hotel star categories",
    popular: true,
  },

  // SINGAPORE
  {
    id: "singapore-wonders-4n",
    destinationId: "singapore",
    destinationName: "Singapore",
    title: "Singapore Garden City & Sentosa Thrills",
    duration: "4 Nights / 5 Days",
    type: "Family",
    tagline: "Universal Studios, Gardens by the Bay Supertrees & Night Safari",
    description:
      "A thrilling cosmopolitan escape for families and travelers: futuristic biodomes, island cable cars, and premier shopping along Orchard Road.",
    inclusions: [
      "4 Nights hotel in central Singapore (2★, 3★, 4★, or 5★ MBS)",
      "Daily buffet breakfast",
      "Return Changi Airport private transfers",
      "Gardens by the Bay (Flower Dome + Cloud Forest) tickets",
      "Sentosa Cable Car + Universal Studios Singapore Day Pass",
      "Singapore Night Safari with tram ride",
      "Singapore tourist visa assistance",
    ],
    startingStar: 3,
    priceNote: "Direct wholesale rates with optional Marina Bay Sands stay",
    popular: true,
  },

  // THAILAND
  {
    id: "thailand-combo-5n",
    destinationId: "thailand",
    destinationName: "Thailand",
    title: "Thailand Island Vibes & Bangkok City Lights",
    duration: "5 Nights / 6 Days",
    type: "Explorer",
    tagline: "3 Nights Phuket beach resort + 2 Nights Bangkok shopping & temples",
    description:
      "Tropical crystal beaches, Phi Phi island speedboat tours, vibrant night markets, and world-class retail in Bangkok.",
    inclusions: [
      "3 Nights Phuket + 2 Nights Bangkok hotel (2★ to 5★)",
      "Daily breakfast buffet",
      "Phi Phi Island full-day tour with speedboat & buffet lunch",
      "Phuket City & Big Buddha viewpoint tour",
      "Bangkok Chao Phraya evening dinner cruise",
      "Bangkok city temple tour (Wat Arun & Wat Traimit)",
      "All airport and domestic flight transfers",
    ],
    startingStar: 2,
    priceNote: "Highly customizable from backpacker budget to 5★ pool villas",
    popular: true,
  },
];

export function getPackagesByDestination(destIdOrName: string): TravelPackage[] {
  const query = destIdOrName.toLowerCase().trim();
  return travelPackages.filter(
    (pkg) =>
      pkg.destinationId.toLowerCase() === query ||
      pkg.destinationName.toLowerCase().includes(query) ||
      query.includes(pkg.destinationId.toLowerCase())
  );
}
