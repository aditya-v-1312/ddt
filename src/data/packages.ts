export interface ItineraryDay {
  day: number;
  title: string;
  location: string;
  morning?: string;
  noonToEvening?: string;
  evening?: string;
  fullDay?: string;
  description: string;
  image: string;
}

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
  coverImage?: string;
  itinerary: ItineraryDay[];
}

export const travelPackages: TravelPackage[] = [
  // 1. HONG KONG & MACAU
  {
    id: "hong-kong-macau-7d",
    destinationId: "hong-kong-macau",
    destinationName: "Hong Kong & Macau",
    title: "Hong Kong & Macau Signature Highlights",
    duration: "7 Days / 6 Nights",
    type: "Explorer",
    tagline:
      "Victoria Harbour, Ngong Ping 360 Big Buddha, Hong Kong Disneyland, Ocean Park & Historic Macau",
    description:
      "A complete 7-day dual-destination journey combining vibrant Victoria Harbour skyline, the majestic Tian Tan Buddha, world-class theme parks (Disneyland & Ocean Park), and the rich Portuguese-Chinese heritage, mega-resorts, and entertainment of Macau.",
    inclusions: [
      "4 Nights accommodation in Hong Kong (choice of 2★, 3★, 4★, or 5★)",
      "2 Nights accommodation in Macau (choice of 2★, 3★, 4★, or 5★)",
      "Daily international breakfast at hotels",
      "Arrival meet & greet with SIC (Seat in Coach) scheduled airport transfers",
      "Scenic Ngong Ping 360 Cable Car, Big Buddha & Po Lin Monastery excursion (shared transfers)",
      "Hong Kong by Night Tour: One-Way Peak Tram to Victoria Peak, Madame Tussauds wax museum & iconic Star Ferry harbour cruise",
      "Magical full-day excursion to Hong Kong Disneyland with shared return transfers",
      "Full-day excursion to Ocean Park Hong Kong with shared return transfers",
      "High-speed ferry transfer from Hong Kong to Macau",
      "Half-day Macau city sightseeing tour: Ruins of St. Paul's, Senado Square, A-Ma Temple & Macau Tower photo stop",
      "Return ferry transfer from Macau to Hong Kong International Airport (direct check-in)",
    ],
    startingStar: 3,
    priceNote: "Customizable across 2★ Budget Smart to 5★ Luxury Palace tiers",
    popular: true,
    coverImage: "/images/packages/hong-kong-macau/image1.jpeg",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Hong Kong & Leisure",
        location: "Hong Kong City",
        morning: "Arrive in Hong Kong & transfer to the hotel",
        noonToEvening: "Check-in and relax",
        evening: "Free at leisure and Overnight in Hong Kong",
        description:
          "Arrive at Hong Kong International Airport. Our representative will meet & greet you at arrivals and transfer you to your hotel in Hong Kong using SIC scheduled transfers. Hong Kong is a vibrant metropolis and a major gateway to Mainland China. Located at the south-eastern tip of China, Hong Kong covers Hong Kong Island, Lantau Island, the Kowloon Peninsula, and the New Territories, including 261 outlying islands. Between Hong Kong Island and the Kowloon Peninsula lies Victoria Harbour, one of the world's most renowned deep-water harbours. On arrival, check-in at your hotel in Hong Kong & rest of the evening is at leisure to explore this vibrant city on your own.",
        image: "/images/packages/hong-kong-macau/image1.jpeg",
      },
      {
        day: 2,
        title: "Ngong Ping 360, Big Buddha & Hong Kong by Night",
        location: "Hong Kong City & Lantau Island",
        morning: "Breakfast. Visit Ngong Ping 360, Big Buddha & Po Lin Monastery",
        noonToEvening: "Explore Lantau Island",
        evening:
          "Peak Tram, Madame Tussauds, Star Ferry & Night Market and Overnight in Hong Kong",
        description:
          "Enjoy breakfast at hotel. Today we embark on a scenic excursion to Ngong Ping 360 with shared transfers. Enjoy a breathtaking cable car ride offering panoramic views of lush mountains, the South China Sea, and Hong Kong International Airport. Upon arrival, explore the charming Ngong Ping Village, visit the serene Po Lin Monastery, and admire the majestic Tian Tan Buddha (Big Buddha), one of Hong Kong's most iconic landmarks. Later in the evening we have the opportunity to explore the vibrant and lively atmosphere of Hong Kong at night on our Hong Kong by Night Tour. The tour starts with an excursion to The Peak via the historic One-Way Peak Tram funicular railway, offering breathtaking panoramic night views of Hong Kong's skyline and Victoria Harbour. Next, proceed to Madame Tussauds wax museum to interact with lifelike celebrity figures. Conclude with a ride on the iconic Star Ferry cruising along Victoria Harbour, taking in Hong Kong's dazzling illuminated skyline.",
        image: "/images/packages/hong-kong-macau/image2.jpeg",
      },
      {
        day: 3,
        title: "Hong Kong Disneyland Full-Day Magic",
        location: "Hong Kong City",
        morning: "Breakfast & transfer to Disneyland",
        noonToEvening: "Enjoy rides, shows & attractions",
        evening: "Return to the hotel and Overnight in Hong Kong",
        description:
          "Enjoy breakfast at hotel. Today morning we embark on a magical full-day excursion to Hong Kong Disneyland with shared return transfers. Experience enchanting themed lands, thrilling attractions, spectacular live entertainment, beloved Disney characters, and dazzling parades. Create unforgettable memories as you immerse yourself in the magic of Disney before returning to your hotel for an overnight stay.",
        image: "/images/packages/hong-kong-macau/image3.jpeg",
      },
      {
        day: 4,
        title: "Ocean Park Hong Kong Full-Day Adventure",
        location: "Hong Kong City",
        morning: "Breakfast & transfer to Ocean Park",
        noonToEvening: "Enjoy rides, marine life & shows",
        evening: "Return to the hotel and Overnight in Hong Kong",
        description:
          "Enjoy a sumptuous breakfast at hotel. Enjoy a full-day excursion to Ocean Park Hong Kong with shared return transfers. Explore one of Hong Kong's most popular attractions, featuring thrilling rides, fascinating marine life exhibits, wildlife encounters, and exciting live shows. Take in breathtaking views from the scenic cable car and immerse yourself in a day filled with adventure and entertainment.",
        image: "/images/packages/hong-kong-macau/image4.jpeg",
      },
      {
        day: 5,
        title: "Ferry Transfer to Macau & Leisure",
        location: "Macau",
        morning: "Breakfast, check out & ferry to Macau",
        noonToEvening: "Check-in & free at leisure",
        evening: "Explore Macau on your own and Overnight in Macau",
        description:
          "After breakfast, check out from our hotel and proceed to the ferry terminal for your high-speed ferry transfer to Macau. Upon arrival, transfer to your hotel and complete check-in formalities. Spend the remainder of the day at leisure exploring the vibrant streets of Macau or relaxing at your hotel. Macau is a Special Administrative Region of China across the Pearl River Delta from Hong Kong. Known as the 'Las Vegas of Asia,' it is globally renowned for its mega-casinos, high-end entertainment, and rich fusion of Portuguese colonial heritage with traditional Chinese culture.",
        image: "/images/packages/hong-kong-macau/image5.jpeg",
      },
      {
        day: 6,
        title: "Macau Half-Day City Sightseeing Tour",
        location: "Macau",
        morning: "Breakfast & half-day city tour",
        noonToEvening:
          "Visit St. Paul's Ruins, Senado Square, A-Ma Temple & Macau Tower (photo stop)",
        evening: "Free at leisure and Overnight in Macau",
        description:
          "After breakfast, embark on a half-day sightseeing tour of Macau. Discover the city's rich Portuguese heritage as you visit the iconic Ruins of St. Paul's, stroll through the historic Senado Square, and explore the revered A-Ma Temple. Enjoy a photo stop at the towering Macau Tower before returning to your hotel. The remainder of the day is at leisure to experience Macau's dining and world-class resort promenades.",
        image: "/images/packages/hong-kong-macau/image6.jpeg",
      },
      {
        day: 7,
        title: "Macau to Hong Kong Airport & Departure",
        location: "Macau / Hong Kong Airport",
        morning:
          "Breakfast, check out & ferry to Hong Kong Airport and Departure",
        noonToEvening: "Board flight to onward destination",
        evening: "Journey concludes with wonderful memories",
        description:
          "After breakfast, check out from your hotel and proceed to the ferry terminal for your return ferry directly to Hong Kong International Airport. Upon arrival, proceed to international departures for your flight to your onward destination.",
        image: "/images/packages/hong-kong-macau/image7.jpeg",
      },
    ],
  },

  // 2. CENTRAL EUROPE
  {
    id: "central-europe-7d",
    destinationId: "central-europe",
    destinationName: "Central Europe",
    title: "Central European Grand Discovery",
    duration: "7 Days / 6 Nights",
    type: "Explorer",
    tagline:
      "Vienna Imperial Sights, Budapest Danube Cruise, Bratislava Old Town, Prague Castle & Romantic Road to Frankfurt",
    description:
      "A quintessential multi-country European journey across 5 countries and legendary capitals: Austria's imperial palaces, Hungary's Danube riverbanks, Slovakia's medieval gates, the Czech Republic's Baroque jewel Prague, and Germany's fairy-tale Romantic Road leading to Frankfurt.",
    inclusions: [
      "2 Nights hotel accommodation in Vienna (Austria)",
      "1 Night hotel accommodation in Budapest (Hungary)",
      "2 Nights hotel accommodation in Prague (Czech Republic)",
      "1 Night hotel accommodation in Frankfurt (Germany)",
      "Daily European buffet breakfast at all hotels",
      "Executive coach transfers between all cities & countries",
      "Arrival airport transfer at Vienna International Airport",
      "Guided panoramic tour of Vienna (Ringstrasse, State Opera, Hofburg Palace, St. Stephen's)",
      "Evening transfer to Vienna's historic Grinzing wine tavern district",
      "Scenic panoramic boat cruise on the Danube River in Budapest",
      "Budapest panoramic city tour (Heroes' Square, Buda Castle, Hungarian Parliament)",
      "Stopover in Bratislava, Slovakia: Danube banks, Old Town & Michael's Gate",
      "Guided Prague city tour with Prague Castle entrance included & Charles Bridge",
      "Scenic boat cruise on the Vltava River in Prague (included)",
      "Excursion to Pilsen (Bohemia) & Rothenburg ob der Tauber on Germany's Romantic Road",
      "Frankfurt Römer Square historic center visit",
    ],
    startingStar: 3,
    priceNote: "Customizable across 2★ Budget Smart to 5★ Luxury Palace tiers",
    popular: true,
    coverImage: "/images/packages/central-europe/image1.jpeg",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Vienna & Leisure",
        location: "Vienna, Austria",
        fullDay: "Arrival in Vienna and explore on your own",
        evening: "Overnight in Vienna",
        description:
          "Upon arrival at Vienna International Airport, you'll be transferred to your hotel. Spend the rest of the day relaxing or exploring this elegant imperial city on your own. In the afternoon and evening, enjoy the refined Austrian cafe culture and overnight in Vienna.",
        image: "/images/packages/central-europe/image1.jpeg",
      },
      {
        day: 2,
        title: "Vienna City Tour & Grinzing Village",
        location: "Vienna, Austria",
        fullDay: "Vienna City Tour & Grinzing Village",
        evening: "Overnight in Vienna",
        description:
          "After breakfast, we begin a guided panoramic tour of Vienna – a city famous for its imperial heritage, music, and architectural elegance. Explore the majestic Ringstrasse, State Opera, Hofburg Palace, Parliament, St. Stephen's Cathedral, and more. The afternoon is free for shopping or visiting museums and cafes. In the evening, enjoy a transfer to the charming Grinzing district, known for its traditional wine taverns and vibrant local dining. Overnight in Vienna.",
        image: "/images/packages/central-europe/image2.jpeg",
      },
      {
        day: 3,
        title: "Transfer to Budapest & Danube Boat Cruise",
        location: "Budapest, Hungary",
        fullDay: "Transfer to Budapest & Explore with lunch",
        evening: "Overnight in Budapest",
        description:
          "After breakfast, we drive to Budapest, the enchanting capital of Hungary. Upon arrival, enjoy free time for lunch in the lively Váci Utca area – the heart of shopping and culture. Later, experience a scenic boat cruise on the Danube River, offering stunning views of both Buda and Pest. We continue with a panoramic city tour, visiting landmarks like Heroes' Square, Buda Castle, and the Parliament Building. In the evening, you can opt to join a traditional Magyar folklore show with dinner (optional). Overnight in Budapest.",
        image: "/images/packages/central-europe/image3.jpeg",
      },
      {
        day: 4,
        title: "Bratislava & Transfer to Prague",
        location: "Bratislava, Slovakia & Prague, Czech Republic",
        fullDay: "Explore Bratislava & Prague",
        evening: "Overnight in Prague",
        description:
          "Today, we depart early for Bratislava, the charming capital of Slovakia, located on the banks of the Danube. Enjoy time to stroll through its Old Town, admire Michael's Gate, and have lunch at a local restaurant. Later, we continue our journey to Prague, the capital of the Czech Republic. Upon arrival in the evening, we'll enjoy a transfer to the Old Town Square, surrounded by cafes and restaurants offering global cuisines. Overnight in Prague.",
        image: "/images/packages/central-europe/image4.jpeg",
      },
      {
        day: 5,
        title: "Prague City Tour & Vltava River Cruise",
        location: "Prague, Czech Republic",
        fullDay: "Prague City Tour & Vltava River Cruise",
        evening: "Overnight in Prague",
        description:
          "After breakfast, enjoy a guided city tour of Prague – often called the Baroque Jewel of Europe. Visit Prague Castle (entrance included), St. Vitus Cathedral, Charles Bridge, and the Old Town Square with its famous Astronomical Clock. Later, enjoy a relaxing boat ride on the Vltava River (included), admiring the city's stunning skyline from the water. The afternoon is free to explore Prague's cobblestone streets, local boutiques, and cafes. Overnight in Prague.",
        image: "/images/packages/central-europe/image5.jpeg",
      },
      {
        day: 6,
        title: "Pilsen, Romantic Road (Rothenburg) & Frankfurt",
        location: "Pilsen (Czech Republic) & Frankfurt (Germany)",
        fullDay: "Transfer to Frankfurt & Explore Pilsen, Rothenburg",
        evening: "Overnight in Frankfurt",
        description:
          "After breakfast, depart for Pilsen, a picturesque Bohemian city known for its world-famous beer. Explore its Old Town Square, Cathedral, and Town Hall. Continue along the scenic Romantic Road of Germany to Rothenburg ob der Tauber, a fairy-tale medieval walled town with half-timbered houses and cobbled lanes. Afterward, drive to Frankfurt, Germany's financial capital. Spend the evening exploring the historic Römer Square or dining at one of the many international restaurants. Overnight in Frankfurt.",
        image: "/images/packages/central-europe/image6.jpeg",
      },
      {
        day: 7,
        title: "Frankfurt Departure",
        location: "Frankfurt, Germany",
        morning: "Departure from Frankfurt",
        description:
          "After breakfast, check out of your hotel. Your memorable Central European journey ends today with wonderful memories to take back home. End of Tour.",
        image: "/images/packages/central-europe/image7.jpeg",
      },
    ],
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
