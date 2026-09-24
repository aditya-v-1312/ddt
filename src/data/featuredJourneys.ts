import { travelImages } from "./images";

export interface FeaturedJourney {
  id: string;
  tag: string;
  title: string;
  headline: string;
  subheadline: string;
  narrative: string[];
  daysSuggested: string;
  image: string;
  imageAlt: string;
  curatedExperiences: string[];
  accentColor?: string;
  slug: string;
}

export const featuredJourneys: FeaturedJourney[] = [
  {
    id: "journey-dubai",
    tag: "SIGNATURE CITY & DESERT",
    title: "DUBAI",
    headline: "A city that never stops moving.",
    subheadline: "From the quiet stillness of Arabian dunes to architectural marvels touching the sky.",
    narrative: [
      "Dubai presents an extraordinary contrast where ancient trade routes meet futuristic ambition. Spend your mornings wandering the fragrant spice souks of Deira, your afternoons in high-fashion districts, and your evenings under a starlit Arabian desert sky.",
      "Every itinerary is tailored around your pace — whether you seek private desert glamping with falconry, VIP skydeck experiences, or leisurely yacht cruises along the Dubai Marina.",
    ],
    daysSuggested: "5 – 7 Days Curated Itinerary",
    image: travelImages.dubai.url,
    imageAlt: "Futuristic Dubai skyline illuminated during twilight",
    curatedExperiences: [
      "Private 4x4 desert safari with sunset dinner under desert stars",
      "Fast-track access to Burj Khalifa sky observation lounges",
      "Private sunset yacht charter along Dubai Marina & Palm Jumeirah",
      "Curated shopping & dining reservations at DIFC and Downtown",
    ],
    slug: "dubai",
  },
  {
    id: "journey-kashmir",
    tag: "HIMALAYAN SANCTUARY",
    title: "KASHMIR",
    headline: "Mountains, calm and unforgettable landscapes.",
    subheadline: "Where snow-crowned peaks embrace still lakes and pine-scented mountain air.",
    narrative: [
      "Known through centuries as paradise on earth, Kashmir touches the traveler's heart like nowhere else. Wake to the soft ripples of Dal Lake in a handcrafted wooden houseboat, watch floating lotus gardens glide past, and ascend into the alpine meadows of Gulmarg.",
      "Designed with true respect for your comfort and safety, we orchestrate seamless transfers, warm Kashmiri hospitality, and private local hosts who reveal the quiet soul of the valley.",
    ],
    daysSuggested: "6 – 8 Days Curated Itinerary",
    image: travelImages.kashmir.url,
    imageAlt: "Serene Shikara floating peacefully on Dal Lake against mountain backdrop",
    curatedExperiences: [
      "Heritage cedar-wood houseboat stay on Nigeen / Dal Lake",
      "Gulmarg high-altitude Gondola ride up to Apharwat peak",
      "Private nature walks through Pahalgam Betaab & Aru Valleys",
      "Authentic Kashmiri Wazwan and saffron kahwa tasting",
    ],
    slug: "kashmir",
  },
  {
    id: "journey-switzerland",
    tag: "ALPINE MAJESTY",
    title: "SWITZERLAND",
    headline: "Timeless European romance and glacial grandeur.",
    subheadline: "Panoramic rail journeys weaving through snow-capped valleys and crystal lakes.",
    narrative: [
      "Nothing matches the pristine elegance of the Swiss Alps. Board legendary panoramic rail coaches where glass ceilings reveal soaring granite spires, emerald pine forests, and cascading waterfalls.",
      "From the serene lakeside promenade of Lucerne to the heights of Jungfraujoch and the tranquil mountain village of Zermatt beneath the Matterhorn, every moment feels like a living painting.",
    ],
    daysSuggested: "7 – 10 Days Curated Itinerary",
    image: travelImages.switzerland.url,
    imageAlt: "Breathtaking Swiss alpine lake surrounded by dramatic snow mountains",
    curatedExperiences: [
      "Panoramic Glacier Express / GoldenPass rail pass coordination",
      "Ascent to Top of Europe at Jungfraujoch & Mt. Titlis rotair",
      "Private boat cruise across Lake Lucerne with alpine vistas",
      "Charming stays in historic chalet villages and lakeside retreats",
    ],
    slug: "switzerland",
  },
  {
    id: "journey-kerala",
    tag: "TROPICAL HARMONY",
    title: "KERALA",
    headline: "Whispering backwaters and mist-veiled tea gardens.",
    subheadline: "A slow-paced restorative journey through South India's lush green soul.",
    narrative: [
      "Step into a sanctuary where time gently slows. Drift along palm-fringed lagoons on a private air-conditioned houseboat, listening to church bells and village birds across the water.",
      "Ascend into Munnar's rolling emerald tea plantations blanketed in crisp morning mist, before descending into historic Fort Kochi to uncover spice warehouses, Portuguese art, and Chinese fishing nets.",
    ],
    daysSuggested: "6 – 8 Days Curated Itinerary",
    image: travelImages.kerala.url,
    imageAlt: "Traditional Kerala houseboat sailing on tranquil palm-fringed backwaters",
    curatedExperiences: [
      "Private luxury kettuvallam cruise with private onboard chef",
      "Munnar boutique tea plantation bungalow stay and tea tasting",
      "Revitalizing authentic Ayurvedic spa therapies",
      "Heritage walking tour through Fort Kochi and Mattancherry",
    ],
    slug: "kerala",
  },
];
