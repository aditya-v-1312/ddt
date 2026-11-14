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
          "Arrive at Hong Kong International Airport. Our representative will meet & greet you at arrivals and transfer you to your hotel in Hong Kong using SIC scheduled transfers. On arrival, check-in at your hotel in Hong Kong & rest of the evening is at leisure to explore Victoria Harbour and this vibrant world city.",
        image: "/images/packages/hong-kong-macau/image1.jpeg",
      },
      {
        day: 2,
        title: "Ngong Ping 360, Big Buddha & Hong Kong by Night",
        location: "Hong Kong City & Lantau Island",
        morning: "Breakfast. Visit Ngong Ping 360, Big Buddha & Po Lin Monastery",
        noonToEvening: "Explore Lantau Island",
        evening: "Peak Tram, Madame Tussauds, Star Ferry & Night Market. Overnight in Hong Kong",
        description:
          "Enjoy breakfast at hotel. Embark on a scenic excursion to Ngong Ping 360 with shared transfers. Enjoy a breathtaking cable car ride offering panoramic views of lush mountains, the South China Sea, and HKIA. Explore Ngong Ping Village, serene Po Lin Monastery, and the majestic Tian Tan Buddha. In the evening, explore Hong Kong by Night: Peak Tram funicular to Victoria Peak, Madame Tussauds wax museum, and the iconic Star Ferry harbour cruise.",
        image: "/images/packages/hong-kong-macau/image2.jpeg",
      },
      {
        day: 3,
        title: "Hong Kong Disneyland Full-Day Magic",
        location: "Hong Kong City",
        morning: "Breakfast & transfer to Disneyland",
        noonToEvening: "Enjoy rides, shows & attractions",
        evening: "Return to hotel and Overnight in Hong Kong",
        description:
          "Embark on a magical full-day excursion to Hong Kong Disneyland with shared return transfers. Experience enchanting themed lands, thrilling attractions, spectacular live entertainment, beloved Disney characters, and dazzling evening fireworks.",
        image: "/images/packages/hong-kong-macau/image3.jpeg",
      },
      {
        day: 4,
        title: "Ocean Park Hong Kong Full-Day Adventure",
        location: "Hong Kong City",
        morning: "Breakfast & transfer to Ocean Park",
        noonToEvening: "Enjoy thrill rides, marine life & shows",
        evening: "Return to hotel and Overnight in Hong Kong",
        description:
          "Full-day excursion to Ocean Park Hong Kong with shared return transfers. Explore world-class marine exhibits, thrill coasters, giant pandas, wildlife encounters, and scenic cable car views overlooking the South China Sea.",
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
          "After breakfast, check out and proceed to the ferry terminal for your high-speed ferry transfer to Macau across the Pearl River Delta. Check into your hotel and spend the rest of the day exploring the 'Las Vegas of Asia' with its grand casino resorts and Portuguese heritage.",
        image: "/images/packages/hong-kong-macau/image5.jpeg",
      },
      {
        day: 6,
        title: "Macau Half-Day City Sightseeing Tour",
        location: "Macau",
        morning: "Breakfast & half-day city tour",
        noonToEvening: "Visit St. Paul's Ruins, Senado Square, A-Ma Temple & Macau Tower",
        evening: "Free at leisure and Overnight in Macau",
        description:
          "Discover Macau's rich Portuguese-Chinese heritage: iconic Ruins of St. Paul's, Senado Square, ancient A-Ma Temple, and a photo stop at the towering Macau Tower before an evening at leisure.",
        image: "/images/packages/hong-kong-macau/image6.jpeg",
      },
      {
        day: 7,
        title: "Macau to Hong Kong Airport & Departure",
        location: "Macau / Hong Kong Airport",
        morning: "Breakfast, check out & ferry to Hong Kong Airport",
        noonToEvening: "Board flight for onward journey",
        evening: "Tour ends with wonderful memories",
        description:
          "After breakfast, check out from hotel and proceed to the ferry terminal for your direct return ferry to Hong Kong International Airport to catch your flight home.",
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
          "Upon arrival at Vienna International Airport, you'll be transferred to your hotel. Spend the rest of the day relaxing or exploring this elegant imperial city on your own, enjoying traditional Austrian cafes and historic streets.",
        image: "/images/packages/central-europe/image1.jpeg",
      },
      {
        day: 2,
        title: "Vienna City Tour & Grinzing Village",
        location: "Vienna, Austria",
        fullDay: "Vienna City Tour & Grinzing Village",
        evening: "Overnight in Vienna",
        description:
          "Guided panoramic tour of Vienna along the majestic Ringstrasse, State Opera, Hofburg Palace, Parliament, and St. Stephen's Cathedral. In the evening, enjoy a transfer to the charming Grinzing district known for wine taverns and local dining.",
        image: "/images/packages/central-europe/image2.jpeg",
      },
      {
        day: 3,
        title: "Transfer to Budapest & Danube Boat Cruise",
        location: "Budapest, Hungary",
        fullDay: "Transfer to Budapest & Explore with lunch",
        evening: "Overnight in Budapest",
        description:
          "Drive to Budapest, capital of Hungary. Free time for lunch in the lively Váci Utca area. Later, experience a scenic boat cruise on the Danube River with vistas of Buda and Pest, followed by a city tour of Heroes' Square, Buda Castle, and Parliament.",
        image: "/images/packages/central-europe/image3.jpeg",
      },
      {
        day: 4,
        title: "Bratislava & Transfer to Prague",
        location: "Bratislava, Slovakia & Prague, Czech Republic",
        fullDay: "Explore Bratislava & Prague",
        evening: "Overnight in Prague",
        description:
          "Depart early for Bratislava on the Danube. Stroll through the charming Old Town, admire Michael's Gate, and have lunch at a local restaurant. Continue onwards to Prague, the Baroque jewel, and spend the evening in Old Town Square.",
        image: "/images/packages/central-europe/image4.jpeg",
      },
      {
        day: 5,
        title: "Prague City Tour & Vltava River Cruise",
        location: "Prague, Czech Republic",
        fullDay: "Prague City Tour & Vltava River Cruise",
        evening: "Overnight in Prague",
        description:
          "Guided city tour of Prague Castle (entrance included), St. Vitus Cathedral, Charles Bridge, and Astronomical Clock. Enjoy a relaxing boat cruise on the Vltava River (included), with the afternoon free for cobblestone boutiques.",
        image: "/images/packages/central-europe/image5.jpeg",
      },
      {
        day: 6,
        title: "Pilsen, Romantic Road & Frankfurt",
        location: "Pilsen (Czech Republic) & Frankfurt (Germany)",
        fullDay: "Transfer to Frankfurt via Pilsen and Rothenburg",
        evening: "Overnight in Frankfurt",
        description:
          "Depart for Bohemian Pilsen to see its historic Town Hall and Cathedral. Continue along the scenic Romantic Road to Rothenburg ob der Tauber, a fairy-tale medieval town with half-timbered houses. Conclude the drive in Frankfurt at Römer Square.",
        image: "/images/packages/central-europe/image6.jpeg",
      },
      {
        day: 7,
        title: "Frankfurt Departure",
        location: "Frankfurt, Germany",
        morning: "Departure from Frankfurt Airport",
        description:
          "After breakfast, check out of your hotel. Transfer to Frankfurt Airport for your flight back home with unforgettable memories.",
        image: "/images/packages/central-europe/image7.jpeg",
      },
    ],
  },

  // 3. AUSTRALIA (Melbourne · Cairns · Sydney)
  {
    id: "australia-melbourne-cairns-sydney-9d",
    destinationId: "australia",
    destinationName: "Australia",
    title: "Melbourne, Cairns & Sydney Highlights",
    duration: "9 Days / 8 Nights",
    type: "Explorer",
    tagline:
      "Melbourne MCG, Great Ocean Road, Cairns Great Barrier Reef Catamaran & Sydney Blue Mountains",
    description:
      "The definitive Australian trilogy: Melbourne's sporting heritage, Eureka Skydeck & 12 Apostles Great Ocean Road; tropical Cairns with Kuranda Rainforest Skyrail & Green Island Reef Catamaran; culminating in Sydney's Harbour, Blue Mountains sunset & Merlin 4-in-1 attractions.",
    inclusions: [
      "3 Nights accommodation in Melbourne (Mercure Southbank / Rendezvous / Crowne Metropol)",
      "3 Nights accommodation in Cairns (Coral Tree Inn / Mercure / Cairns Plaza)",
      "2 Nights accommodation in Sydney (Holiday Inn Darling Harbour / Novotel Central)",
      "Daily breakfast at all hotels (except arrival day)",
      "Return airport transfers in Melbourne, Cairns & Sydney on SIC basis",
      "75 Mins Guided Tour with entrance to Melbourne Cricket Ground (MCG)",
      "Observation deck entrance ticket at Eureka Skydeck 88th floor",
      "Phillip Island Day Tour with Moonlit Sanctuary & famous Penguin Parade (SIC)",
      "Full Day Excursion to Great Ocean Road, 12 Apostles & Loch Ard Gorge (SIC)",
      "Full Day Kuranda Rainforest Skyrail Experience & Scenic Railway (ex-Cairns)",
      "Full Day Green Island Reef Cruise aboard luxurious 'Big Cat' Catamaran with buffet lunch & snorkeling gear or glass-bottom boat",
      "Excursion to Sunset Blue Mountains National Park with SIC transfers",
      "Merlin 4-in-1 Sydney Pass: Sydney Tower Eye, WILD LIFE Zoo, SEA LIFE Aquarium & Madame Tussauds",
    ],
    startingStar: 3,
    priceNote: "Customizable with 3★, 4★, and 5★ Australian luxury stays",
    popular: true,
    coverImage: "/images/packages/australia/image2.jpeg",
    itinerary: [
      {
        day: 1,
        title: "Welcome to Melbourne & Southbank Leisure",
        location: "Melbourne, Australia",
        morning: "Arrival at Melbourne Airport and transfer to hotel",
        noonToEvening: "Check-in at Mercure Southbank and relax",
        evening: "Free time at leisure to explore Melbourne's vibrant food scene",
        description:
          "On arrival at Melbourne Airport, our representative will transfer you to your hotel. Melbourne is Australia's culinary and cultural capital. Settle in and enjoy free time strolling along the Yarra River and Southbank promenades.",
        image: "/images/packages/australia/image2.jpeg",
      },
      {
        day: 2,
        title: "MCG Tour, Eureka Skydeck & Phillip Island Penguin Parade",
        location: "Melbourne & Phillip Island",
        morning: "Breakfast at hotel, free tram to Melbourne Cricket Ground (MCG) for guided tour",
        noonToEvening: "Eureka Skydeck 88th floor panoramic views, then drive to Moonlit Sanctuary Wildlife Conservation Park",
        evening: "Phillip Island world-famous Penguin Parade, return to Rendezvous Melbourne",
        description:
          "Visit the hallowed Melbourne Cricket Ground for an exclusive guided tour of player rooms and the Long Room. Take in 360-degree views from the Eureka Skydeck. In the afternoon, head southeast to Moonlit Sanctuary to meet kangaroos and koalas, ending with the enchanting sunset Penguin Parade on Phillip Island.",
        image: "/images/packages/australia/image3.jpeg",
      },
      {
        day: 3,
        title: "Full Day Great Ocean Road & 12 Apostles",
        location: "Great Ocean Road, Victoria",
        morning: "Early pick-up from CBD hotel for full-day Great Ocean Road tour",
        noonToEvening: "Surf beaches, wild koalas, guided rainforest walk at Apollo Bay",
        evening: "Marvel at the Gibson Steps, Loch Ard Gorge & 12 Apostles, overnight in Crowne Metropol",
        description:
          "Experience one of the world's greatest coastal road journeys. Drive along rugged cliffs and golden surf beaches, spot koalas in eucalyptus forests, visit historic Apollo Bay, and witness the majestic limestone rock formations of the 12 Apostles and Loch Ard Gorge.",
        image: "/images/packages/australia/image4.jpeg",
      },
      {
        day: 4,
        title: "Fly to Cairns & Tropical Rainforest Haven",
        location: "Cairns, Queensland",
        morning: "Breakfast at hotel and transfer to airport for flight to Cairns",
        noonToEvening: "Arrive in Cairns and transfer to Coral Tree Inn",
        evening: "Immerse in tropical Cairns night markets and esplanade",
        description:
          "Fly from Melbourne to Cairns, the gateway to Australia's Great Barrier Reef and ancient Daintree rainforest. Relax at your resort or wander the Cairns Esplanade Lagoon.",
        image: "/images/packages/australia/image5.jpeg",
      },
      {
        day: 5,
        title: "Kuranda Rainforest Skyrail & Barron Falls",
        location: "Kuranda & Barron Gorge",
        morning: "Pickup for Kuranda Skyrail Rainforest Cableway excursion",
        noonToEvening: "Glide above World Heritage rainforest canopy, explore Kuranda Village and Barron Falls",
        evening: "Kuranda Scenic Railway return journey, overnight in Mercure Cairns",
        description:
          "Glide effortlessly above Australia's ancient Wet Tropics World Heritage rainforest on the Skyrail Cableway. Explore the vibrant arts and crafts village of Kuranda, and witness the dramatic cascading beauty of Barron Falls from deep within the forest.",
        image: "/images/packages/australia/image6.jpeg",
      },
      {
        day: 6,
        title: "Green Island Great Barrier Reef Catamaran Cruise",
        location: "Green Island, Great Barrier Reef",
        morning: "Board the luxury 35-meter 'Big Cat' catamaran from Cairns Marina",
        noonToEvening: "Cruise to Green Island coral cay with buffet lunch, snorkeling or glass-bottom boat tour",
        evening: "Return to Cairns Plaza hotel with evening at leisure",
        description:
          "Set sail across the turquoise waters of the Great Barrier Reef to Green Island. Spend the day swimming, snorkeling among vibrant coral reefs, or exploring marine life aboard a glass-bottom boat, accompanied by a delicious tropical buffet lunch.",
        image: "/images/packages/australia/image7.jpeg",
      },
      {
        day: 7,
        title: "Fly to Sydney & Sunset Blue Mountains Excursion",
        location: "Sydney & Blue Mountains",
        morning: "Breakfast in Cairns and transfer to airport for flight to Sydney",
        noonToEvening: "Arrive in Sydney, transfer to Holiday Inn Darling Harbour, then proceed to Blue Mountains National Park",
        evening: "Private viewing of the breathtaking Blue Mountains sunset over the Three Sisters",
        description:
          "Arrive in glittering Sydney and head west into the Blue Mountains National Park. Watch the sky turn into a golden kaleidoscope of sunset colors over the dramatic sandstone cliffs of the Three Sisters and Jamison Valley.",
        image: "/images/packages/australia/image8.jpeg",
      },
      {
        day: 8,
        title: "Sydney Merlin 4-in-1 Attractions Showcase",
        location: "Sydney Harbour & Darling Harbour",
        morning: "Breakfast at hotel, visit Sydney Tower Eye for 360-degree skyline vistas",
        noonToEvening: "WILD LIFE Sydney Zoo, SEA LIFE Sydney Aquarium & Madame Tussauds at Darling Harbour",
        evening: "Evening at leisure around Darling Harbour, overnight at Novotel Central City Centre",
        description:
          "Enjoy Sydney's premier attractions using your Merlin 4-in-1 Pass: ascend the Sydney Tower Eye, encounter koalas and crocodiles at WILD LIFE Sydney, discover 13,000 marine animals at SEA LIFE Aquarium, and pose with stars at Madame Tussauds.",
        image: "/images/packages/australia/image9.jpeg",
      },
      {
        day: 9,
        title: "Sydney Departure",
        location: "Sydney, Australia",
        morning: "Breakfast at hotel, check out and transfer to Sydney Airport",
        noonToEvening: "Board flight for onward journey home",
        description:
          "After breakfast, check out of your hotel and transfer to Sydney International Airport for your flight back home, carrying unforgettable Australian memories.",
        image: "/images/packages/australia/image9.jpeg",
      },
    ],
  },

  // 4. AZERBAIJAN (Baku & Beyond)
  {
    id: "azerbaijan-baku-5d",
    destinationId: "azerbaijan",
    destinationName: "Azerbaijan",
    title: "Amazing Azerbaijan: Baku, Mountains & Fire Temples",
    duration: "5 Days / 4 Nights",
    type: "Explorer",
    tagline:
      "Baku Old Town, Shahdag Snowy Mountain Resort, Gobustan Mud Volcanoes & Yanardag Burning Fire",
    description:
      "Explore the Land of Fire: futuristic Flame Towers and UNESCO Old City of Baku, thrilling cable cars and alpine coasters in Shahdag / Gabala, ancient petroglyphs at Gobustan, bubbling mud volcanoes, and eternal flames at Atashgah Zoroastrian Fire Temple.",
    inclusions: [
      "4 Nights accommodation in Baku (Parkway Inn or similar)",
      "Daily breakfast at hotel",
      "Return airport transfers on private basis",
      "Private air-conditioned sedan car transportation throughout",
      "Full day Baku City Tour: Old Town, Caspian Seaside Boulevard, Little Venice & Upland Park",
      "Full day excursion to Shahdag Mountain Resort (or Gabala Resort) in the Caucasus Mountains",
      "Full day excursion to Gobustan National Preserve (UNESCO Petroglyphs) & Mud Volcanoes",
      "Entrance tickets: Atashgah Fire Temple, Yanardag Burning Hill & Gobustan Preserve",
      "English-speaking professional driver-guide",
      "24-Hour concierge travel desk support",
      "All local taxes & service charges included",
    ],
    startingStar: 3,
    priceNote: "Available in 3★, 4★, and 5★ Baku luxury hotel choices",
    popular: true,
    coverImage: "/images/packages/azerbaijan/image2.jpeg",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Baku & Caspian Breeze",
        location: "Baku, Azerbaijan",
        morning: "Arrival at Baku International Airport, meet & greet in arrivals hall",
        noonToEvening: "Private comfortable transfer to Parkway Inn or similar, check-in",
        evening: "Free evening to explore Baku's illuminated boulevards and fountains at leisure",
        description:
          "Welcome to Azerbaijan! Upon landing at Heydar Aliyev International Airport, your personal driver will escort you to your hotel. Settle in and enjoy an unhurried evening soaking up the glamorous European-inspired architecture and Caspian seafront.",
        image: "/images/packages/azerbaijan/image2.jpeg",
      },
      {
        day: 2,
        title: "Baku City Tour: Old Town, Boulevard & Flame Towers",
        location: "Baku, Azerbaijan",
        morning: "Breakfast at hotel, guided walking tour of atmospheric UNESCO Old Town (Icherisheher)",
        noonToEvening: "Stroll along Caspian Seaside Boulevard, Little Venice and Carpet Museum",
        evening: "Upland Park for breathtaking panoramic sunset vistas of Baku Bay and the iconic Flame Towers",
        description:
          "Experience Baku's blend of ancient Silk Road history and modern glamour. Walk the cobblestone lanes of the Maiden Tower and Shirvanshahs Palace, stroll through Little Venice canals along the Caspian Sea, and take in the panoramic sunset skyline from Upland Park.",
        image: "/images/packages/azerbaijan/image3.jpeg",
      },
      {
        day: 3,
        title: "Shahdag Mountain Resort or Gabala Excursion",
        location: "Caucasus Mountains, Azerbaijan",
        morning: "09:00 AM departure for Shahdag Mountain Resort (or Gabala Resort) in the Greater Caucasus",
        noonToEvening: "Cable car ride over alpine peaks, Alpine Coaster, zip-line & mountain scenery",
        evening: "Return to Baku with scenic photo stops, overnight in Parkway Inn",
        description:
          "Embark on a full-day adventure into the Greater Caucasus Mountains. Ascend to Shahdag Mountain Resort for crisp mountain air, panoramic cable car rides, alpine coasters, and exhilarating outdoor activities.",
        image: "/images/packages/azerbaijan/image4.jpeg",
      },
      {
        day: 4,
        title: "Gobustan Mud Volcanoes, Fire Temple & Yanardag",
        location: "Gobustan & Absheron Peninsula",
        morning: "08:30 AM excursion to Gobustan National Preserve (6,000+ ancient petroglyphs) and bubbling Mud Volcanoes",
        noonToEvening: "Visit seaside Bibi-Heybat Mosque and historical oil fields",
        evening: "Atashgah 17th-century Zoroastrian Fire Temple and naturally burning Yanardag Fire Mountain",
        description:
          "Discover why Azerbaijan is known as the 'Land of Fire'. Inspect 40,000-year-old rock engravings in Gobustan, explore rare bubbling mud volcanoes, visit the sacred eternal flames of Atashgah Zoroastrian Fire Temple, and marvel at Yanardag's burning hillside.",
        image: "/images/packages/azerbaijan/image5.jpeg",
      },
      {
        day: 5,
        title: "Baku Departure",
        location: "Baku, Azerbaijan",
        morning: "Breakfast at hotel, check out and private transfer to Baku International Airport",
        noonToEvening: "Depart with wonderful memories of Azerbaijan",
        description:
          "After breakfast, check out of your hotel. Your private chauffeur will transfer you to Baku International Airport for your flight back home.",
        image: "/images/packages/azerbaijan/image6.jpeg",
      },
    ],
  },

  // 5. BALI WITH MALAYSIA (Bali · Kuala Lumpur · Genting)
  {
    id: "bali-malaysia-8d",
    destinationId: "bali-malaysia",
    destinationName: "Bali & Malaysia",
    title: "Bali with Malaysia: Beaches, Temples & Genting Highlands",
    duration: "8 Days / 7 Nights",
    type: "Explorer",
    tagline:
      "Ubud & Kintamani Volcano, Tanjung Benoa Watersports, Kuala Lumpur City & Genting Hilltop Resort",
    description:
      "A dual-country Southeast Asian escape combining 4 Nights in Bali (terraced rice fields, Kintamani volcano, sacred Tanah Lot temple, and watersports at Tanjung Benoa) with 3 Nights in Malaysia (Kuala Lumpur skyline, King's Palace, Batu Caves, and Genting Highlands cable cars).",
    inclusions: [
      "4 Nights accommodation in Bali (Fave Kuta Kartika Plaza or selected hotel)",
      "2 Nights accommodation in Kuala Lumpur (Metro Hotel Bukit Bintang or selected hotel)",
      "1 Night accommodation in Genting Highlands (First World Hotel)",
      "Daily breakfast at all hotels",
      "Return airport transfers in Bali on private basis",
      "Return airport transfers in Kuala Lumpur on SIC basis",
      "Full Day Ubud & Kintamani Volcano Tour (SIC)",
      "Half Day Watersports Package at Tanjung Benoa Beach (1 ride Banana Boat, Flying Fish & Jet Ski)",
      "Half Day Tanah Lot Sunset Temple Tour on private basis",
      "Half Day Kuala Lumpur City Tour: King's Palace, National Monument & KL Tower (SIC)",
      "Full Day Genting Highlands Tour with Two-Way Scenic Cable Car ride & Batu Caves stop",
    ],
    startingStar: 3,
    priceNote: "Customizable across 3★, 4★, and 5★ private pool villa options",
    popular: true,
    coverImage: "/images/packages/bali-malaysia/image2.jpeg",
    itinerary: [
      {
        day: 1,
        title: "Welcome to Bali, Island of the Gods",
        location: "Kuta, Bali",
        morning: "Arrival at Denpasar International Airport in Bali",
        noonToEvening: "Private transfer to Fave Kuta Kartika Plaza, check-in and relax",
        evening: "Spend the rest of the day at leisure exploring sandy beaches and local markets",
        description:
          "Arrive in paradise! On arrival at Bali's Ngurah Rai Airport, you will be warmly received by our representative and transferred to your resort. Spend the day unwinding by the pool or exploring the bustling streets of Kuta.",
        image: "/images/packages/bali-malaysia/image2.jpeg",
      },
      {
        day: 2,
        title: "Full Day Ubud Art Villages & Kintamani Volcano",
        location: "Ubud & Kintamani, Bali",
        morning: "Breakfast at hotel, depart for full day tour to Celuk and Mas artisan villages",
        noonToEvening: "Magnificent panoramic view of Mount and Lake Batur with smoky Mount Agung volcano",
        evening: "Visit Goa Gajah (Elephant Cave) and sacred holy springs of Tirta Empul at Tampaksiring",
        description:
          "Explore Bali's cultural heartland: silverwork at Celuk, woodcarving in Mas, traditional Balinese paintings in Ubud, and lunch overlooking the majestic volcanic caldera of Mount Batur.",
        image: "/images/packages/bali-malaysia/image3.jpeg",
      },
      {
        day: 3,
        title: "Half Day Tanah Lot Sunset Temple Tour",
        location: "Tanah Lot, Bali",
        morning: "Morning free at leisure for shopping, cafes, or spa",
        noonToEvening: "Afternoon drive to the ancient rock formation temple of Pura Tanah Lot",
        evening: "Marvel at the dramatic waves crashing against the temple during golden sunset",
        description:
          "Visit one of Bali's seven sacred sea temples. Perched dramatically on an offshore rock formation, Tanah Lot is steeped in Balinese Hindu mythology and offers one of the most photographed sunsets on earth.",
        image: "/images/packages/bali-malaysia/image4.jpeg",
      },
      {
        day: 4,
        title: "Tanjung Benoa Watersports Thrills",
        location: "Tanjung Benoa, Nusa Dua",
        morning: "Breakfast at hotel, transfer to Tanjung Benoa beach",
        noonToEvening: "Enjoy exhilarating watersports: banana boat, flying fish, and jet ski with safety gear",
        evening: "Return to resort with evening at leisure for beachfront dining",
        description:
          "Head to Nusa Dua's water adventure playground. Skim across turquoise waters on a jet ski, glide through the air on the flying fish, and enjoy group laughs on a high-speed banana boat ride.",
        image: "/images/packages/bali-malaysia/image5.jpeg",
      },
      {
        day: 5,
        title: "Fly to Kuala Lumpur, Malaysia",
        location: "Kuala Lumpur, Malaysia",
        morning: "Breakfast in Bali, check out and transfer to airport for flight to Kuala Lumpur",
        noonToEvening: "Arrive in Kuala Lumpur, meet & greet and transfer to Metro Hotel Bukit Bintang",
        evening: "Explore the bustling street food and neon-lit avenues of Bukit Bintang",
        description:
          "Fly from Bali to Malaysia's dynamic capital. Transfer to your central hotel and spend the evening shopping along the Golden Triangle or dining at Jalan Alor.",
        image: "/images/packages/bali-malaysia/image6.jpeg",
      },
      {
        day: 6,
        title: "Kuala Lumpur Highlights City Tour",
        location: "Kuala Lumpur, Malaysia",
        morning: "Breakfast at hotel, embark on half-day city tour",
        noonToEvening: "Visit King's Palace (Istana Negara), National Monument, Independence Square & National Mosque",
        evening: "Photo stop at the iconic Petronas Twin Towers and KL Tower, evening at leisure",
        description:
          "Tour Malaysia's grand capital: view the golden-domed King's Palace, the National Monument commemorating independence, the historic Sultan Abdul Samad building at Merdeka Square, and the world-famous Petronas Twin Towers.",
        image: "/images/packages/bali-malaysia/image7.jpeg",
      },
      {
        day: 7,
        title: "Genting Highlands Hilltop Resort & Batu Caves",
        location: "Genting Highlands & Batu Caves",
        morning: "Breakfast at hotel, depart for Genting Highlands via scenic Batu Caves",
        noonToEvening: "En route visit the towering golden Lord Murugan statue at Batu Caves, ascend Genting via cable car",
        evening: "Enjoy indoor theme parks, Snow World, Casino de Genting, overnight at First World Hotel",
        description:
          "Climb the 272 rainbow steps at Batu Caves, then ascend into the cool mountain mist of Genting Highlands via the Awana SkyWay cable car. Enjoy premier entertainment at First World Hotel and SkyAvenue.",
        image: "/images/packages/bali-malaysia/image8.jpeg",
      },
      {
        day: 8,
        title: "Kuala Lumpur Departure",
        location: "Kuala Lumpur, Malaysia",
        morning: "Breakfast at hotel, check out and transfer to Kuala Lumpur International Airport",
        noonToEvening: "Depart with bags full of souvenirs and unforgettable memories",
        description:
          "Check out from your hotel and transfer to KLIA for your return flight home, concluding an incredible multi-country holiday.",
        image: "/images/packages/bali-malaysia/image8.jpeg",
      },
    ],
  },

  // 6. BALI ISLAND ESCAPE (4N/5D)
  {
    id: "bali-island-5d",
    destinationId: "bali",
    destinationName: "Bali",
    title: "Bali Tropical Island Escape",
    duration: "5 Days / 4 Nights",
    type: "Explorer",
    tagline:
      "Kuta Beach Resort, Ubud Artisan Villages, Mount Batur Volcano, Tanah Lot & Watersports",
    description:
      "A fast, sun-drenched Balinese getaway: pristine sandy beaches, Ubud's sacred temples and artistic heart, Mount Batur volcanic panoramas, the magical sunset of Tanah Lot, and watersports at Tanjung Benoa.",
    inclusions: [
      "4 Nights accommodation in Bali with breakfast (Fave Kuta Kartika Plaza or selected hotel)",
      "Air-conditioned vehicle during tours & transfers with English-speaking guide",
      "Return airport transfers in Bali on private basis",
      "Full Day Ubud & Kintamani Volcano Tour on private basis",
      "Sunset Tanah Lot Temple Tour on private basis",
      "Water-sports package at Tanjung Benoa Beach (1 ride Banana Boat, Flying Fish & Jet Ski on SIC)",
      "All entrance fees to temples and monuments as per itinerary",
    ],
    startingStar: 2,
    priceNote: "Available in 2★ budget smart to 5★ private pool villas",
    popular: true,
    coverImage: "/images/packages/bali/image2.jpeg",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Bali & Resort Welcome",
        location: "Kuta, Bali",
        morning: "Arrival at Ngurah Rai International Airport",
        noonToEvening: "Private transfer to Fave Kuta Kartika Plaza, check-in",
        evening: "Leisure on Kuta Beach watching the golden sunset",
        description:
          "Welcome to Indonesia! Arrive in Denpasar where our representative will transfer you to your hotel. Spend the rest of the day relaxing on Bali's world-famous sandy beaches.",
        image: "/images/packages/bali/image2.jpeg",
      },
      {
        day: 2,
        title: "Full Day Ubud & Mount Batur Kintamani Tour",
        location: "Ubud & Kintamani, Bali",
        morning: "Breakfast at hotel, tour Celuk gold/silver village and Mas woodcarvings",
        noonToEvening: "View of Mount and Lake Batur with Mount Agung volcano, visit Goa Gajah",
        evening: "Holy springs of Tirta Empul at Tampaksiring, return to hotel",
        description:
          "Discover the cultural treasures of Bali: traditional handicrafts in Celuk, wood carvings in Mas, holy spring baths of Tirta Empul, and the sweeping caldera vistas of Mount Batur.",
        image: "/images/packages/bali/image3.jpeg",
      },
      {
        day: 3,
        title: "Half Day Tanah Lot Sunset Temple Tour",
        location: "Tanah Lot, Bali",
        morning: "Morning free at leisure for relaxation or local cafes",
        noonToEvening: "Afternoon departure to Pura Tanah Lot sea temple",
        evening: "Sunset viewing at Tanah Lot rock formation, overnight in Kuta",
        description:
          "Witness Bali's most iconic sea temple perched dramatically on an offshore reef formation as the setting sun paints the sky in shades of gold and violet.",
        image: "/images/packages/bali/image4.jpeg",
      },
      {
        day: 4,
        title: "Tanjung Benoa Watersports Day",
        location: "Tanjung Benoa Beach, Bali",
        morning: "Breakfast at hotel, transfer to Tanjung Benoa beach",
        noonToEvening: "Participate in banana boat, jet ski, and flying fish water sports",
        evening: "Relax on white sand beach, return to resort for final evening in Bali",
        description:
          "Enjoy high-octane water adventures in the warm turquoise waters of Tanjung Benoa with full safety gear and certified instructors.",
        image: "/images/packages/bali/image5.jpeg",
      },
      {
        day: 5,
        title: "Bali Departure",
        location: "Bali, Indonesia",
        morning: "Breakfast at hotel, check out and transfer to airport",
        noonToEvening: "Depart Bali with cherished island memories",
        description:
          "Transfer to Denpasar Airport for your onward journey home with wonderful memories of the Island of the Gods.",
        image: "/images/packages/bali/image5.jpeg",
      },
    ],
  },

  // 7. JAPAN (Tokyo & Osaka)
  {
    id: "japan-tokyo-osaka-6d",
    destinationId: "japan",
    destinationName: "Japan",
    title: "Japan Golden Route: Tokyo, Mt. Fuji, Hakone & Osaka",
    duration: "6 Days / 5 Nights",
    type: "Explorer",
    tagline:
      "Shinjuku & Tokyo Tower, Mt. Fuji 5th Station, Lake Ashi Cruise, Shinkansen Bullet Train & Osaka Castle",
    description:
      "Japan's premier cultural and modern odyssey: Tokyo's vibrant neon avenues, Imperial Palace & Senso-Ji Temple; iconic Mount Fuji 5th Station & Lake Ashi ropeway; speeding across the countryside on the Shinkansen bullet train; and discovering Osaka Castle and the Floating Garden Observatory.",
    inclusions: [
      "3 Nights accommodation in Tokyo (Hotel Wing International / Premium Tokyo Yotsuya)",
      "2 Nights accommodation in Osaka (New Hankyu Osaka)",
      "Daily breakfast at all hotels + 3 Local Japanese lunches",
      "Arrival transfer from Narita Airport to Tokyo hotel on SIC basis (Airport Limousine bus)",
      "1-Day Tokyo Panoramic Tour by Hato Bus: Shinjuku, Meiji Shrine, Imperial Palace, Senso-Ji & Tokyo Tower",
      "Full Day Mt. Fuji & Hakone Excursion: Mt. Fuji 5th Station, Lake Ashi cruise & Komagatake ropeway",
      "Shinkansen Bullet Train ticket from Tokyo to Shin-Osaka (reserved sector)",
      "1-Day Osaka City Walking Tour: Umeda Floating Garden, Aqua Liner River Cruise & Osaka Castle Park",
      "Departure transfer from Osaka hotel to Kansai Airport on private basis",
      "All transfers, entrance fees and sightseeing as per itinerary",
    ],
    startingStar: 3,
    priceNote: "Available in 3★, 4★, and 5★ luxury Ryokan/Hotel options",
    popular: true,
    coverImage: "/images/packages/japan/image2.jpeg",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Tokyo & City Welcome",
        location: "Tokyo, Japan",
        morning: "Arrival at Narita International Airport",
        noonToEvening: "Transfer to Hotel Wing International by Airport Limousine bus, check-in",
        evening: "Day free at leisure to explore vibrant Tokyo nightlife",
        description:
          "Welcome to Tokyo! Meet the scheduled Airport Limousine transfer to your hotel. Spend your first evening exploring the buzzing neon-lit avenues, ramen bars, and futuristic streetscapes of Tokyo.",
        image: "/images/packages/japan/image2.jpeg",
      },
      {
        day: 2,
        title: "1-Day Tokyo Panoramic Tour by Hato Bus",
        location: "Tokyo, Japan",
        morning: "08:40 AM departure from Shinjuku: Meiji Shrine, Imperial Palace & Senso-Ji Temple",
        noonToEvening: "Western style lunch, Rainbow Bridge, Odaiba, Toyosu Market & Hamarikyu Gardens",
        evening: "Tokyo Tower Main Deck observation views, tour ends at Tokyo Station, overnight in Yotsuya",
        description:
          "Tour Tokyo's most iconic landmarks on the famous Hato Bus: stroll the serene forests of Meiji Shrine, the Imperial Palace plaza, the ancient halls of Senso-Ji Temple in Asakusa, and take in the panoramic skyline from Tokyo Tower's Main Deck.",
        image: "/images/packages/japan/image3.jpeg",
      },
      {
        day: 3,
        title: "Mt. Fuji 5th Station, Lake Ashi & Komagatake Ropeway",
        location: "Mt. Fuji & Hakone",
        morning: "08:15 AM departure from Keio Plaza Hotel to Mt. Fuji 5th Station",
        noonToEvening: "Japanese lunch, 15-minute Lake Ashi Cruise Sorakaze, Mt. Komagatake 7-minute ropeway",
        evening: "Courier heavy luggage to Osaka, tour concludes at Shinjuku, overnight in New Hankyu",
        description:
          "Ascend to the 5th Station of majestic Mount Fuji (2,300m above sea level). Cruise across serene Lake Ashi with views of Fuji's snow-capped peak, and ride the Komagatake Ropeway high above the Hakone volcanic valley.",
        image: "/images/packages/japan/image4.jpeg",
      },
      {
        day: 4,
        title: "Shinkansen Bullet Train to Osaka",
        location: "Tokyo to Osaka",
        morning: "Breakfast at hotel, check out and head to Tokyo Station",
        noonToEvening: "Board the world-famous Shinkansen bullet train to Shin-Osaka",
        evening: "Check in at New Hankyu Osaka, spend the evening exploring Dotonbori food district",
        description:
          "Experience the speed and precision of Japan's Shinkansen bullet train whisking you through the Japanese countryside to Osaka, the nation's culinary kitchen. Settle in and sample takoyaki along Dotonbori.",
        image: "/images/packages/japan/image5.jpeg",
      },
      {
        day: 5,
        title: "1-Day Osaka City Tour & River Cruise",
        location: "Osaka, Japan",
        morning: "Walk to Umeda Sky Building Floating Garden Observatory (60 mins)",
        noonToEvening: "Western style lunch, board the Aqua Liner river cruise (50 mins)",
        evening: "Visit Osaka Castle & Osaka Castle Park (90 mins), return to hotel",
        description:
          "Take in 360-degree open-air views from the Floating Garden Observatory bridging the twin Umeda Sky towers. Cruise along the Okawa River aboard the Aqua Liner, and explore the historic stone ramparts and museum of Osaka Castle.",
        image: "/images/packages/japan/image6.jpeg",
      },
      {
        day: 6,
        title: "Osaka Departure",
        location: "Osaka, Japan",
        morning: "Breakfast at hotel, check out",
        noonToEvening: "Private car transfer to Kansai International Airport (KIX)",
        description:
          "Your private car will escort you directly from your Osaka hotel to Kansai International Airport for your flight back home, completing an unforgettable Japanese journey.",
        image: "/images/packages/japan/image6.jpeg",
      },
    ],
  },

  // 8. CHINA (Beijing · Xi'an · Guilin · Shanghai)
  {
    id: "china-beijing-xian-guilin-shanghai-10d",
    destinationId: "china",
    destinationName: "China",
    title: "China Imperial & Scenic Wonders",
    duration: "10 Days / 9 Nights",
    type: "Explorer",
    tagline:
      "Great Wall of China, Forbidden City, Xi'an Terracotta Army, Guilin Li River Cruise & Shanghai Bund",
    description:
      "The ultimate 10-day grand expedition across China: Beijing's imperial palaces, Tiananmen & Great Wall; Xi'an's 2,200-year-old Terracotta Warriors; Guilin's karst limestone mountains & Li River cruise; ending in the futuristic skyline and historic Bund of Shanghai.",
    inclusions: [
      "3 Nights accommodation in Beijing (Super House Beijing International / Hampton by Hilton)",
      "2 Nights accommodation in Xi'an (Ibis Daminggong / Shanghai Zhongjian Selected)",
      "2 Nights accommodation in Guilin / Yangshuo",
      "2 Nights accommodation in Shanghai (Shanghai Zhongjian Selected Suisse Place)",
      "Daily buffet breakfast at all hotels",
      "High-speed bullet train from Beijing to Xi'an (2nd Class reserved seats)",
      "Internal domestic flight transfers (Xi'an to Guilin, Guilin to Shanghai)",
      "Private air-conditioned vehicle transfers with English-speaking local guides",
      "Full Day Great Wall of China excursion at Juyong Pass & Olympic Bird's Nest stadium",
      "Tiananmen Square, Forbidden City, Summer Palace & Hongqiao Market",
      "UNESCO Terracotta Warriors Museum, Ancient City Wall & Muslim Street in Xi'an",
      "Scenic Li River Cruise from Guilin to Yangshuo & West Street stroll",
      "Shanghai tour: People's Square, Jade Buddha Temple, Jinmao Tower 88th floor & The Bund",
      "All entrance tickets and local service charges included",
    ],
    startingStar: 3,
    priceNote: "Customizable across 3★, 4★, and 5★ international hotels",
    popular: true,
    coverImage: "/images/packages/china/image2.jpeg",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Beijing",
        location: "Beijing, China",
        morning: "Arrival at Beijing Capital International Airport",
        noonToEvening: "Meet & greet by local representative, transfer to Super House Beijing International Hotel",
        evening: "Day free at leisure to explore Beijing",
        description:
          "Welcome to China! Meet your representative and transfer to your hotel. Beijing has been the political and cultural heart of China for over 3,000 years.",
        image: "/images/packages/china/image2.jpeg",
      },
      {
        day: 2,
        title: "The Great Wall at Juyong Pass & Olympic Bird's Nest",
        location: "Beijing, China",
        morning: "Breakfast at hotel, drive to the Great Wall at Juyong Pass",
        noonToEvening: "Hike the ancient stone ramparts, visit Beijing Dragon Land Jade Gallery",
        evening: "Photo stop at the iconic Bird's Nest Olympic Stadium, return to hotel",
        description:
          "Ascend the legendary Great Wall of China at Juyong Pass nestled within the Guangou Valley. Learn the ancient craft of jade carving and view the 2008 Olympic Bird's Nest stadium.",
        image: "/images/packages/china/image3.jpeg",
      },
      {
        day: 3,
        title: "Tiananmen Square, Forbidden City & Summer Palace",
        location: "Beijing, China",
        morning: "Visit Tiananmen Square and the majestic Forbidden City imperial palace",
        noonToEvening: "Explore the Summer Palace UNESCO imperial lakeside gardens",
        evening: "Shopping at Hongqiao Market (pearls, silk & tea), overnight in Beijing",
        description:
          "Walk through the halls of the Ming and Qing emperors in the Forbidden City, stroll the classical pavilions and marble boat of the Summer Palace, and browse the lively Hongqiao Market.",
        image: "/images/packages/china/image4.jpeg",
      },
      {
        day: 4,
        title: "Bullet Train to Xi'an & Musical Fountain Show",
        location: "Xi'an, China",
        morning: "Transfer to Beijing railway station for high-speed bullet train to Xi'an",
        noonToEvening: "Arrive in Xi'an, cradle of 13 ancient dynasties, transfer to hotel",
        evening: "Big Wild Goose Pagoda North Square musical water and light fountain show",
        description:
          "Experience the ultra-smooth Chinese high-speed railway to Xi'an, the ancient starting point of the Silk Road. In the evening, witness Asia's largest musical fountain show against the historic Big Wild Goose Pagoda.",
        image: "/images/packages/china/image5.jpeg",
      },
      {
        day: 5,
        title: "UNESCO Terracotta Warriors & Muslim Quarter",
        location: "Xi'an, China",
        morning: "Visit the world-famous UNESCO Terracotta Army Museum and Crockery Factory",
        noonToEvening: "Marvel at 8,000 life-sized terracotta soldiers, chariots and horses",
        evening: "Photo stop at the Ancient City Wall and street food stroll in the vibrant Muslim Quarter",
        description:
          "Stand before the archaeological wonder of Emperor Qin Shi Huang's subterranean army, buried for over 2,200 years. Later, stroll the bustling food stalls and handicraft souks of the Muslim Quarter.",
        image: "/images/packages/china/image6.jpeg",
      },
      {
        day: 6,
        title: "Fly to Guilin, Elephant Trunk Hill & Tea Plantation",
        location: "Guilin, China",
        morning: "Transfer to Xi'an airport for flight to Guilin",
        noonToEvening: "Arrive in scenic Guilin, transfer to hotel",
        evening: "Visit Elephant Trunk Hill landmark at the confluence of Li and Taohua rivers",
        description:
          "Fly south to Guilin, renowned for its dramatic karst limestone landscape. View the natural landmark of Elephant Trunk Hill drinking from the river and visit an authentic green tea plantation.",
        image: "/images/packages/china/image7.jpeg",
      },
      {
        day: 7,
        title: "Li River Cruise to Yangshuo & West Street",
        location: "Yangshuo, Guilin",
        morning: "Embark on an 83-km scenic cruise along the Li River from Guilin to Yangshuo",
        noonToEvening: "Admire surreal karst peaks, water buffaloes and bamboo groves",
        evening: "Explore Yangshuo West Street with its cafes, boutiques and vibrant nightlife",
        description:
          "Drift along the world-renowned Li River through scenes straight out of a traditional Chinese watercolor painting, concluding on the lively pedestrian avenue of Yangshuo West Street.",
        image: "/images/packages/china/image7.jpeg",
      },
      {
        day: 8,
        title: "Fly to Shanghai, China's Modern Megacity",
        location: "Shanghai, China",
        morning: "Transfer to Guilin Airport for flight to Shanghai",
        noonToEvening: "Arrive in Shanghai, transfer to Shanghai Zhongjian Selected Suisse Place",
        evening: "Evening at leisure along the dazzling Huangpu River",
        description:
          "Fly to Shanghai, China's largest cosmopolitan financial hub where colonial heritage meets futuristic hyper-modernity.",
        image: "/images/packages/china/image7.jpeg",
      },
      {
        day: 9,
        title: "Shanghai City Tour: Jade Buddha, Jinmao 88th Floor & The Bund",
        location: "Shanghai, China",
        morning: "Visit People's Square and the serene Jade Buddha Temple with Song Dynasty architecture",
        noonToEvening: "Ascend to the 88th floor observation deck of Jinmao Tower in Pudong for 360-degree views",
        evening: "Historic Bund promenade with evening skyline views of the Oriental Pearl Tower",
        description:
          "Explore Shanghai's highlights: sacred white jade statues at the Jade Buddha Temple, sky-high vistas from Jinmao Tower, and an evening stroll along the historic waterfront Bund.",
        image: "/images/packages/china/image7.jpeg",
      },
      {
        day: 10,
        title: "Shanghai Departure",
        location: "Shanghai, China",
        morning: "Breakfast at hotel, check out and transfer to Shanghai Pudong Airport",
        noonToEvening: "Depart for onward journey home",
        description:
          "Transfer to the airport for your flight home, concluding a magnificent 10-day journey across imperial and modern China.",
        image: "/images/packages/china/image7.jpeg",
      },
    ],
  },

  // 9. DUBAI (4N/5D)
  {
    id: "dubai-signature-5d",
    destinationId: "dubai",
    destinationName: "Dubai",
    title: "Dubai City Lights, Desert Dunes & Marina Dhow Cruise",
    duration: "5 Days / 4 Nights",
    type: "Luxury",
    tagline:
      "Burj Khalifa 124th Floor, 4x4 Desert Safari BBQ, Marina Dhow Cruise & Gold Souks",
    description:
      "A quintessential Arabian escape: futuristic architecture, entry to Burj Khalifa's 124th floor observation deck, thrilling 4x4 desert dune bashing with starlit BBQ dinner & Tanoura show, and a luxury Dubai Marina dinner cruise.",
    inclusions: [
      "4 Nights hotel accommodation in Dubai (selected hotel category)",
      "Daily continental buffet breakfast at hotel",
      "Meet & assist at Dubai International Airport",
      "Return airport transfers on private basis",
      "Half-day Dubai city tour with English-speaking DTCM licensed guide on sharing basis",
      "Entrance ticket to Burj Khalifa 124th floor observation deck (non-prime)",
      "Dubai Marina Dhow Cruise with buffet dinner & return shared transfers",
      "4x4 Desert Safari with dune bashing, camel ride, BBQ dinner, Belly Dance & Tanoura show",
      "Dubai VAT @ 5% included",
    ],
    startingStar: 3,
    priceNote: "Available in 3★, 4★, and 5★ Palm & Downtown luxury stays",
    popular: true,
    coverImage: "/images/packages/dubai/image1.jpeg",
    itinerary: [
      {
        day: 1,
        title: "Marhabaan & Welcome to Dubai",
        location: "Dubai, UAE",
        morning: "Arrival at Dubai International Airport",
        noonToEvening: "Private transfer to hotel, check-in and relax",
        evening: "Spend the evening at leisure exploring world-class malls and city lights",
        description:
          "Welcome to Dubai! Our representative will meet you at the airport and transfer you to your hotel. Settle into your luxurious room and enjoy the evening exploring one of the most glamorous cities in the world.",
        image: "/images/packages/dubai/image1.jpeg",
      },
      {
        day: 2,
        title: "Half-Day City Tour & Burj Khalifa 124th Floor",
        location: "Dubai, UAE",
        morning: "Breakfast at hotel, guided city tour covering modern and traditional sights",
        noonToEvening: "Photo stops at Jumeirah Mosque, Burj Al Arab, drive through Palm Jumeirah, Gold & Spice Souks",
        evening: "Ascend to the 124th floor observation deck of Burj Khalifa for panoramic sunset vistas",
        description:
          "Tour Dubai's iconic architecture: Jumeirah Mosque, the sail-shaped Burj Al Arab, and the aromatic spice and glittering gold souks. Conclude at the summit of Burj Khalifa, the tallest building on earth.",
        image: "/images/packages/dubai/image2.jpeg",
      },
      {
        day: 3,
        title: "4x4 Desert Safari, Dune Bashing & Starlit BBQ",
        location: "Arabian Desert, Dubai",
        morning: "Morning free for shopping or relaxation at the hotel pool",
        noonToEvening: "Afternoon 4x4 pickup for desert safari: thrilling dune bashing, sandboarding and camel rides",
        evening: "Barbecue dinner under the stars at Bedouin desert camp with belly dancing and Tanoura performances",
        description:
          "Experience the timeless magic of the Arabian desert. Skim across red dunes in a 4x4, sip authentic Arabic coffee and dates, and feast on a lavish BBQ dinner with live traditional Emirati music and dance.",
        image: "/images/packages/dubai/image3.jpeg",
      },
      {
        day: 4,
        title: "Dubai Marina Dhow Cruise with Dinner",
        location: "Dubai Marina, UAE",
        morning: "Breakfast at hotel, free day for shopping at Dubai Mall or Mall of the Emirates",
        noonToEvening: "Explore luxury brand boutiques, indoor ski slopes or traditional souks",
        evening: "Board a traditional wooden Dhow cruise through Dubai Marina with an international buffet dinner",
        description:
          "Sail gently past the illuminated skyscrapers, superyachts, and waterfront promenades of Dubai Marina while enjoying an international buffet dinner on a floating restaurant.",
        image: "/images/packages/dubai/image4.jpeg",
      },
      {
        day: 5,
        title: "Dubai Departure",
        location: "Dubai, UAE",
        morning: "Breakfast at hotel, check out",
        noonToEvening: "Private transfer to Dubai International Airport for departure",
        description:
          "Check out from your hotel and transfer to the airport with bags full of souvenirs and wonderful memories of Dubai.",
        image: "/images/packages/dubai/image5.jpeg",
      },
    ],
  },

  // 10. EGYPT (Cairo · Aswan · Luxor · Abu Simbel)
  {
    id: "egypt-cairo-nile-aswan-luxor-8d",
    destinationId: "egypt",
    destinationName: "Egypt",
    title: "Egypt & Wonders of the Nile: Cairo, Aswan & Luxor",
    duration: "8 Days / 7 Nights",
    type: "Explorer",
    tagline:
      "Giza Pyramids & Sphinx, Nile Sleeper Train, Abu Simbel Temples & Valley of the Kings",
    description:
      "Walk in the footsteps of Pharaohs: the Great Pyramids of Giza, Sphinx & Egyptian Museum; overnight sleeper train along the Nile; Aswan High Dam & Ramses II's colossal Abu Simbel; Luxor's Karnak Temple & Valley of the Kings tombs.",
    inclusions: [
      "2 Nights accommodation in Cairo on Bed & Breakfast (Soluxe Cairo Hotel)",
      "2 Nights accommodation in Aswan on Bed & Breakfast (Obelisk Nile Hotel)",
      "1 Night accommodation in Luxor on Bed & Breakfast (Temple Luxor Hotel)",
      "2 Nights in Tourist Sleeper Train (Cairo-Aswan & Luxor-Cairo) on Half Board (Breakfast & Dinner)",
      "Meet & assist at Cairo International Airport + private AC transfers",
      "Full day tour in Cairo to Pyramids of Giza, Sphinx, Valley Temple & Egyptian Museum",
      "Full day tour in Aswan: High Dam & Hatshepsut Unfinished Obelisk",
      "Excursion to colossal Abu Simbel Temple with private guide & transport",
      "1st Class seat train transfer from Aswan to Luxor",
      "Tours in Luxor: Karnak Temple, Valley of the Kings, Queen Hatshepsut Temple & Colossi of Memnon",
      "All entrance fees, private English-speaking Egyptologist guides, and service charges",
    ],
    startingStar: 3,
    priceNote: "Available in 3★, 4★, and 5★ Nile view hotels",
    popular: true,
    coverImage: "/images/packages/egypt/image2.jpeg",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Cairo & Pyramids Welcome",
        location: "Cairo, Egypt",
        morning: "Arrival at Cairo International Airport, meet & assist",
        noonToEvening: "Private transfer to Soluxe Cairo Hotel, check-in",
        evening: "Optional Pyramids Sound & Light Show narrating pharaonic history",
        description:
          "Welcome to Egypt! Arrive at Cairo airport where our representative will escort you to your hotel near the Giza plateau. In the evening, optionally witness the sphinx narrating ancient secrets at the Sound & Light show.",
        image: "/images/packages/egypt/image2.jpeg",
      },
      {
        day: 2,
        title: "Great Pyramids of Giza, Sphinx & Sleeper Train to Aswan",
        location: "Giza & Sleeper Train",
        morning: "Breakfast at hotel, visit the three Pyramids of Cheops, Chephren and Mykerinus",
        noonToEvening: "Panoramic photos, visit the Great Sphinx and Valley Temple, explore Egyptian Museum",
        evening: "Transfer to Giza railway station for 1st-class Sleeper Train to Aswan with dinner onboard",
        description:
          "Marvel at human history's greatest monument: the Pyramids of Giza and the enigmatic Sphinx. Browse Tutankhamun's gold treasures at the Egyptian Museum before boarding the overnight sleeper train south along the Nile.",
        image: "/images/packages/egypt/image3.jpeg",
      },
      {
        day: 3,
        title: "Aswan High Dam & Hatshepsut Unfinished Obelisk",
        location: "Aswan, Egypt",
        morning: "Arrive at Aswan train station, meet & assist",
        noonToEvening: "Excursion to Aswan High Dam and the colossal Unfinished Obelisk of Queen Hatshepsut",
        evening: "Check-in at Obelisk Nile Hotel, optional evening Sound & Light show at Philae Temple",
        description:
          "Arrive in sunny Nubian Aswan. Visit the modern engineering marvel of the High Dam and inspect the massive granite obelisk carved directly into ancient bedrock before relaxing by the Nile.",
        image: "/images/packages/egypt/image4.jpeg",
      },
      {
        day: 4,
        title: "Colossal Abu Simbel Sun Temples Excursion",
        location: "Abu Simbel & Aswan",
        morning: "04:00 AM departure with breakfast box through the Nubian desert to Abu Simbel",
        noonToEvening: "Explore the jaw-dropping rock-carved Temples of Ramses II and Queen Nefertiti",
        evening: "Scenic return drive to Aswan, overnight in hotel",
        description:
          "Be awestruck by one of the world's most dramatic sights: four 20-meter seated statues of Pharaoh Ramses II guarding the sun temple at Abu Simbel, salvaged from rising waters by UNESCO.",
        image: "/images/packages/egypt/image5.jpeg",
      },
      {
        day: 5,
        title: "Train to Luxor & Karnak Temple",
        location: "Luxor, Egypt",
        morning: "Breakfast at hotel, transfer to train station for scenic train to Luxor",
        noonToEvening: "Arrive in Luxor, the world's greatest open-air museum, visit grand Karnak Temple",
        evening: "Check-in at Temple Luxor Hotel, optional Sound & Light show at Karnak",
        description:
          "Journey north along the Nile to ancient Thebes (Luxor). Walk through the towering stone columns of the Hypostyle Hall at Karnak, the largest religious temple complex ever constructed.",
        image: "/images/packages/egypt/image6.jpeg",
      },
      {
        day: 6,
        title: "Valley of the Kings, Hatshepsut Temple & Sleeper Train to Cairo",
        location: "Luxor West Bank & Sleeper Train",
        morning: "Breakfast, cross to West Bank: discover royal tombs in the Valley of the Kings",
        noonToEvening: "Temple of Queen Hatshepsut at Deir el-Bahari and the towering Colossi of Memnon",
        evening: "Transfer to Luxor station for overnight Tourist Sleeper Train to Cairo with dinner",
        description:
          "Explore the West Bank necropolis where pharaohs were buried in secret cliff tombs. Visit Queen Hatshepsut's terraced colonnaded temple and the giant stone Colossi of Memnon before taking the train back to Cairo.",
        image: "/images/packages/egypt/image7.jpeg",
      },
      {
        day: 7,
        title: "Arrive in Cairo / Optional Alexandria Day Trip",
        location: "Cairo / Alexandria",
        morning: "Arrive at Giza station, transfer to Soluxe Cairo Hotel",
        noonToEvening: "Day at leisure or optional day excursion to Alexandria (Catacombs, Qaitbay Citadel & Library)",
        evening: "Optional evening Nile River dinner cruise with live folklore show and belly dancing",
        description:
          "Arrive back in Cairo. Relax or take an optional coastal tour to Mediterranean Alexandria, visiting the Catacombs of Kom El-Shokafa, Qaitbay Citadel, and modern Bibliotheca Alexandrina.",
        image: "/images/packages/egypt/image8.jpeg",
      },
      {
        day: 8,
        title: "Cairo Departure",
        location: "Cairo, Egypt",
        morning: "Breakfast at hotel, check out and private transfer to Cairo International Airport",
        noonToEvening: "Fly home with memories of ancient wonders",
        description:
          "Say goodbye to Egypt as your representative transfers you to Cairo International Airport for your return flight home.",
        image: "/images/packages/egypt/image9.jpeg",
      },
    ],
  },

  // 11. GEORGIA (Tbilisi · Gudauri · Kazbegi)
  {
    id: "georgia-tbilisi-gudauri-kazbegi-6d",
    destinationId: "georgia",
    destinationName: "Georgia",
    title: "Georgia: Historic Tbilisi, Wine Cradle & Caucasus Mountains",
    duration: "6 Days / 5 Nights",
    type: "Explorer",
    tagline:
      "Old Tbilisi Cable Car, Kakheti Wine Region, Uplistsikhe Cave Town & Gergeti Trinity Church Kazbegi",
    description:
      "A journey through the crossroads of Europe and Asia: Old Tbilisi's sulfur bath district and Narikala cable car; the 8,000-year-old wine cradle of Kakheti with artisan cheese and wine tastings; ancient rock-hewn cave cities of Uplistsikhe; and a 4x4 mountain drive to Gergeti Church beneath Mount Kazbek.",
    inclusions: [
      "3 Nights accommodation in Tbilisi (Graphica Hotel / Vista Hotel)",
      "1 Night accommodation in Gudauri (Pine Chalet Gudauri)",
      "1 Night accommodation in Tbilisi (Vista Hotel)",
      "Daily breakfast at all hotels",
      "Roundtrip airport transfers on private basis",
      "All tours and transfers on private basis with English-speaking guide/driver",
      "Old Tbilisi walking tour with Return Cable Car ticket to Narikala Fortress",
      "Full day Kakheti Wine Tour: Badiauri bread & cheese tasting, Sighnaghi & KTW Winery tasting",
      "Excursion to Uplistsikhe ancient cave town (entrance ticket included) & Ananuri Fortress",
      "4x4 vehicle drive to Gergeti Trinity Church in Kazbegi & Dariali Gorge",
      "Complimentary bottle of water per person per day & 24hr emergency assistance",
      "All local taxes and service charges included",
    ],
    startingStar: 3,
    priceNote: "Available in boutique 3★, 4★, and 5★ mountain chalets",
    popular: true,
    coverImage: "/images/packages/georgia/image2.jpeg",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Tbilisi, the Warm Capital",
        location: "Tbilisi, Georgia",
        morning: "Arrival at Shota Rustaveli Tbilisi International Airport",
        noonToEvening: "Private transfer to Graphica Hotel, check-in and relax",
        evening: "Day free at leisure to stroll through atmospheric Old Town alleys",
        description:
          "Welcome to Georgia! Nestled in the dramatic valley of the Mtkvari River, Tbilisi has been a crossroads of cultures since the 4th millennium BC. Enjoy your first evening discovering its warm hospitality and cafes.",
        image: "/images/packages/georgia/image2.jpeg",
      },
      {
        day: 2,
        title: "Old Tbilisi Walking Tour, Cable Car & Sulphur Baths",
        location: "Tbilisi, Georgia",
        morning: "Walking tour from Europe Square: Metekhi Church, Cable Car to Narikala Fortress",
        noonToEvening: "Mother of Georgia monument, walk down to Abano sulfur bath district & Legvtakhevi waterfall",
        evening: "Cross the glass Bridge of Peace, Holy Trinity Cathedral, Rustaveli Avenue & Dry Bridge Flea Market",
        description:
          "Ascend by aerial cable car to ancient Narikala Fortress overlooking the whole city. Walk through the domed brick sulfur baths of Abanotubani, take photos at the hidden waterfall, and browse antique treasures at the Dry Bridge market.",
        image: "/images/packages/georgia/image3.jpeg",
      },
      {
        day: 3,
        title: "Kakheti Wine Cradle: Badiauri, Sighnaghi & Bodbe",
        location: "Kakheti Region, Georgia",
        morning: "10:00 AM drive to Kakheti, the world's oldest winemaking region",
        noonToEvening: "Stop at Badiauri village to taste warm clay-oven bread with artisan cheese, visit Sighnaghi City of Love",
        evening: "Visit sacred Bodbe Monastery, wine tasting at KTW Winery, return to Vista Hotel in Tbilisi",
        description:
          "Experience Georgia's 8,000-year winemaking heritage. Taste freshly baked puri bread and salty cheese in Badiauri, stroll the fortified hilltop town of Sighnaghi with views of the Alazani Valley, and enjoy premium Georgian wines.",
        image: "/images/packages/georgia/image4.jpeg",
      },
      {
        day: 4,
        title: "Uplistsikhe Cave Town, Ananuri Fortress & Gudauri",
        location: "Gori & Gudauri",
        morning: "10:00 AM drive to Uplistsikhe ancient rock-cut cave city near Gori",
        noonToEvening: "Survey the antique streets carved in stone, visit Ananuri Fortress & turquoise Jinvali Reservoir",
        evening: "Drive along Georgian Military Highway to Gudauri, check into Pine Chalet and admire Caucasus peaks",
        description:
          "Explore the pagan-era rock-hewn dwellings and secret tunnels of Uplistsikhe. Stop at fairy-tale 17th-century Ananuri Fortress overlooking Jinvali Lake, and ascend into the snowy Caucasus to the ski resort of Gudauri.",
        image: "/images/packages/georgia/image5.jpeg",
      },
      {
        day: 5,
        title: "Kazbegi 4x4 Gergeti Trinity Church & Dariali Gorge",
        location: "Kazbegi (Stepantsminda)",
        morning: "10:00 AM mountain drive to Kazbegi, switch to rugged 4x4 vehicle",
        noonToEvening: "Ascend to Gergeti Trinity Church at 2,170m beneath Mount Kazbek glacier",
        evening: "Visit Dariali Gorge at the Russian border, return to Tbilisi, overnight at Vista Hotel",
        description:
          "Take a 4x4 mountain drive to Georgia's most iconic postcard sight: the 14th-century Gergeti Trinity Church framed against the towering 5,047m peak of Mount Kazbek. Explore the granite canyon of Dariali Gorge before returning to Tbilisi.",
        image: "/images/packages/georgia/image6.jpeg",
      },
      {
        day: 6,
        title: "Tbilisi Departure",
        location: "Tbilisi, Georgia",
        morning: "Breakfast at hotel, check out",
        noonToEvening: "Private transfer to Tbilisi Airport for onward flight home",
        description:
          "After breakfast, check out of your hotel. Your private chauffeur will transfer you to Tbilisi International Airport for your flight home with wonderful memories of Georgia.",
        image: "/images/packages/georgia/image6.jpeg",
      },
    ],
  },

  // 12. MAURITIUS (Manisa Hotel 4N/5D)
  {
    id: "mauritius-free-and-easy-5d",
    destinationId: "mauritius",
    destinationName: "Mauritius",
    title: "Mauritius Tropical Paradise with Manisa Hotel",
    duration: "5 Days / 4 Nights",
    type: "Honeymoon",
    tagline:
      "Manisa Hotel Beachfront, Port Louis North Tour, Chamarel 23 Coloured Earths & Île aux Cerfs Speedboat",
    description:
      "A sun-soaked tropical island retreat on Half Board: stay at Manisa Hotel along the west coast; explore Port Louis Citadel and Caudan Waterfront; discover the volcanic 23 colored earths and waterfalls of the South Island; and ride a thrilling speedboat to the turquoise lagoons and white sands of Île aux Cerfs.",
    inclusions: [
      "4 Nights accommodation at Manisa Hotel in Standard Room",
      "Meal Plan: Half Board Basis (Daily Breakfast & Dinner at hotel)",
      "Meet & assist at Mauritius International Airport by local representative",
      "Return airport transfers on Seat In Coach (SIC) basis",
      "Full Day City Tour of North Island: Caudan Waterfront, Port Louis, Citadel Fort & Bagatelle Mall (SIC)",
      "Full Day South Island Tour: Grand Bassin Shivji Temple, Ship Model Factory & Valley of Colours 23 Coloured Earths (SIC)",
      "Full Day Île aux Cerfs Tour with exhilarating shuttle speedboat transfers (SIC)",
      "Packed lunch per person included during Île aux Cerfs excursion",
      "All local taxes and hotel service charges included",
    ],
    startingStar: 3,
    priceNote: "Includes Half Board (Breakfast & Dinner) at Manisa Hotel",
    popular: true,
    coverImage: "/images/packages/mauritius/image2.jpeg",
    itinerary: [
      {
        day: 1,
        title: "Welcome to Mauritius & Turquoise Lagoon",
        location: "Flic-en-Flac / Port Louis",
        morning: "Arrival at Sir Seewoosagur Ramgoolam International Airport",
        noonToEvening: "Meet & assist in arrivals, transfer to Manisa Hotel, check-in",
        evening: "Spend the rest of the day at leisure exploring fine white sand beaches, dinner at hotel",
        description:
          "Welcome to Mauritius, a sparkling crystal in the turquoise waters of the Indian Ocean! Arrive at your beachfront resort, unpack, and unwind along the calm waters of the western coast.",
        image: "/images/packages/mauritius/image2.jpeg",
      },
      {
        day: 2,
        title: "Full Day North Island Tour & Caudan Waterfront",
        location: "Port Louis, Mauritius",
        morning: "Breakfast at hotel, depart for full-day city tour of the North",
        noonToEvening: "Visit Caudan Waterfront, World Unique Tea Factory, Port Louis City & Citadel Fort",
        evening: "Shopping at Bagatelle Mall of Mauritius, return to hotel for dinner",
        description:
          "Explore the rich French and British colonial history of Port Louis. Stroll beneath the colorful umbrella canopy of Caudan Waterfront, visit the historic hilltop Citadel Fort for panoramic harbor views, and shop at Bagatelle Mall.",
        image: "/images/packages/mauritius/image3.jpeg",
      },
      {
        day: 3,
        title: "Full Day South Island Tour & Valley of Colours",
        location: "South Mauritius & Chamarel",
        morning: "Breakfast at hotel, depart for full-day exotic tour of the South",
        noonToEvening: "Visit sacred Grand Bassin Shivji Temple, Adams Duty Free & historic Ship Model Factory",
        evening: "Marvel at the spectacular Valley of Colours with its 23 coloured earths and waterfalls, dinner at hotel",
        description:
          "Discover the natural wonders of the south: the giant Lord Shiva statue and sacred crater lake of Grand Bassin (Ganga Talao), intricate handcrafted wooden sailing ships, and the mesmerizing natural phenomenon of the 23 Coloured Earths.",
        image: "/images/packages/mauritius/image4.jpeg",
      },
      {
        day: 4,
        title: "Full Day Île aux Cerfs Speedboat Tour",
        location: "Île aux Cerfs Island",
        morning: "Breakfast at hotel, transfer to eastern jetty for thrilling speedboat ride to Île aux Cerfs",
        noonToEvening: "Revel in fine white sand beaches, crystal clear lagoon, parasailing, kayaking & packed lunch",
        evening: "Speedboat ride back to mainland, transfer to hotel for final evening dinner",
        description:
          "Experience Mauritius' most famous island paradise. Speed across the emerald bay to Île aux Cerfs to swim in crystal-clear waters, stroll along powder-soft sands, or participate in watersports like parasailing and undersea walks.",
        image: "/images/packages/mauritius/image5.jpeg",
      },
      {
        day: 5,
        title: "Mauritius Departure",
        location: "Mauritius",
        morning: "Hearty breakfast at hotel, check out",
        noonToEvening: "Transfer to Mauritius International Airport in time for flight back home",
        description:
          "After breakfast, check out of your hotel and transfer to the airport for your flight back home, carrying memories of an idyllic island holiday.",
        image: "/images/packages/mauritius/image5.jpeg",
      },
    ],
  },
  // 13. MOROCCO
  {
    id: "morocco-imperial-cities-9d",
    destinationId: "morocco",
    destinationName: "Morocco",
    title: "Morocco Imperial Cities & Blue Pearl",
    duration: "9 Days / 8 Nights",
    type: "Explorer",
    tagline: "Casablanca, Tangier Kasbah, Chefchaouen Blue Pearl, Fes El Bali, Rabat & Marrakech Souks",
    description: "An immersive imperial journey across Morocco: from Casablanca's grand Hassan II Mosque and the coastal art haven of Asilah, to Tangier's Kasbah, the enchanting cobalt-blue alleys of Chefchaouen, UNESCO Fes El Bali medina, Rabat's royal monuments, and vibrant Marrakech with its Majorelle Garden and legendary Jemaa el-Fnaa square.",
    inclusions: [
      "1 Night accommodation in Casablanca (Campanile Hotel or similar)",
      "1 Night accommodation in Tangier (MIA Urban Detroit Hotel or similar)",
      "1 Night accommodation in Chefchaouen (Dar Annasr Hotel or similar)",
      "2 Nights accommodation in Fes (Zahrat Al Jabal Hotel or similar)",
      "1 Night accommodation in Rabat (Malak Hotel or similar)",
      "2 Nights accommodation in Marrakech (LeCaspien Hotel or similar)",
      "Daily breakfast at all hotels",
      "Private air-conditioned vehicle transfers throughout with professional chauffeur",
      "Guided tour of Casablanca: Hassan II Mosque exterior, The Corniche & Mohammed V Square",
      "Asilah coastal art town & Atlantic ramparts promenade",
      "Tangier Kasbah district, Grand Socco & Cape Spartel where the Mediterranean meets Atlantic",
      "Chefchaouen walking tour: Place Outa el Hammam, Kasbah & Spanish Mosque panoramic view",
      "Full-day guided tour of UNESCO Fes El Bali: Bab Bou Jeloud Blue Gate, Chouara Tannery & Al-Qarawiyyin",
      "Meknes Imperial City, Bab Mansour Gate & Volubilis Roman ruins UNESCO site",
      "Rabat sightseeing: Royal Palace exterior, Kasbah of the Udayas & Hassan Tower",
      "Full-day guided tour of Marrakech: Menara Gardens, Bahia Palace, Majorelle Garden & Jemaa el-Fnaa",
      "Airport arrival and departure transfers"
    ],
    startingStar: 3,
    priceNote: "Customizable across 2★, 3★, 4★, and 5★ luxury riad tiers",
    popular: true,
    coverImage: "/images/packages/morocco/image1.jpeg",
    itinerary: [
      {
        day: 1,
        title: "Casablanca Arrival & Corniche Promenade",
        location: "Casablanca, Morocco",
        morning: "Meet & greet at Mohammed V International Airport, private transfer to hotel",
        noonToEvening: "Check-in at Campanile Hotel, leisure stroll along the Atlantic Corniche",
        evening: "Visit Morocco Mall and Aqua Dream aquarium, welcome Moroccan mint tea",
        description: "Welcome to Morocco! Arrive at Casablanca Mohammed V Airport, meet your private chauffeur, and transfer to your hotel. Spend the afternoon strolling along the lively Atlantic beachfront Corniche.",
        image: "/images/packages/morocco/image1.jpeg"
      },
      {
        day: 2,
        title: "Casablanca Highlights to Tangier via Artistic Asilah",
        location: "Tangier, Morocco",
        morning: "Breakfast at hotel, visit iconic oceanfront Hassan II Mosque (exterior)",
        noonToEvening: "Drive to seaside art town Asilah; admire whitewashed houses, vibrant murals & ramparts",
        evening: "Arrive in Tangier, gateway between Europe and Africa, check-in at MIA Urban Detroit",
        description: "Admire Casablanca's monumental Hassan II Mosque perched over the Atlantic. Continue along the scenic coastline to Asilah, renowned for artistic murals and ocean views, before reaching Tangier.",
        image: "/images/packages/morocco/image2.png"
      },
      {
        day: 3,
        title: "Tangier Kasbah & Scenic Rif Mountains to Chefchaouen",
        location: "Chefchaouen, Morocco",
        morning: "Explore Tangier Kasbah, Old Medina, Grand Socco & dramatic Cape Spartel lighthouse",
        noonToEvening: "Scenic drive through the green peaks of the Rif Mountains",
        evening: "Arrive in Chefchaouen, the 'Blue Pearl of Morocco', check-in at Dar Annasr Hotel",
        description: "Discover Tangier where the Mediterranean meets the Atlantic, then ascend through the Rif Mountains to magical Chefchaouen, nestled under dramatic mountain peaks.",
        image: "/images/packages/morocco/image3.jpeg"
      },
      {
        day: 4,
        title: "Chefchaouen Blue Pearl Discovery to Imperial Fes",
        location: "Fes, Morocco",
        morning: "Guided walking tour through picturesque cobalt-blue alleys & Place Outa el Hammam",
        noonToEvening: "Hike up to the historic Spanish Mosque for panoramic views over the blue valley",
        evening: "Depart for Fes, Morocco's spiritual and culinary capital, check-in at Zahrat Al Jabal",
        description: "Spend a magical morning photographing Chefchaouen's world-famous blue stairs and doorways. Take in the valley vista from the Spanish Mosque before driving to imperial Fes.",
        image: "/images/packages/morocco/image4.jpeg"
      },
      {
        day: 5,
        title: "UNESCO Fes El Bali Medina, Chouara Tannery & Royal Gates",
        location: "Fes, Morocco",
        morning: "Full-day guided walking tour through UNESCO-listed Fes El Bali (9,000 alleys)",
        noonToEvening: "Bab Bou Jeloud (Blue Gate), Attarine Madrasa, ancient Chouara Tannery & Al-Qarawiyyin",
        evening: "Visit Royal Palace 7 bronze gates and Borj Sud fortress for sunset skyline views",
        description: "Step back into the Middle Ages in the world's largest car-free urban area. Marvel at intricate tilework, fragrant spice souks, leather tanneries, and historic madrasas.",
        image: "/images/packages/morocco/image5.png"
      },
      {
        day: 6,
        title: "Meknes Imperial Gates & Volubilis Roman Ruins to Rabat",
        location: "Rabat, Morocco",
        morning: "Breakfast, drive to Meknes; explore Bab Mansour Gate & Heri es-Souani royal stables",
        noonToEvening: "Explore ancient Roman UNESCO city of Volubilis: triumphal arches & mosaic floors",
        evening: "Scenic drive to Morocco's coastal capital Rabat, check-in at Malak Hotel",
        description: "Discover the colossal 17th-century ramparts of Meknes and walk among the preserved Roman columns and mosaic courtyards of Volubilis, then continue to graceful Rabat.",
        image: "/images/packages/morocco/image6.jpeg"
      },
      {
        day: 7,
        title: "Rabat Royal Landmarks to Marrakech 'Red City'",
        location: "Marrakech, Morocco",
        morning: "Rabat sightseeing: Royal Palace, Kasbah of the Udayas ocean cliffs & Hassan Tower",
        noonToEvening: "Scenic drive through central Moroccan plains toward Marrakech",
        evening: "Arrive in Marrakech, check-in at LeCaspien Hotel, evening at leisure",
        description: "Tour Rabat's serene Andalusian Gardens and the 12th-century Hassan Tower, then travel south to legendary Marrakech, the historic oasis of caravans.",
        image: "/images/packages/morocco/image7.jpeg"
      },
      {
        day: 8,
        title: "Marrakech Guided Exploration: Majorelle Garden & Jemaa el-Fnaa",
        location: "Marrakech, Morocco",
        morning: "Guided tour of serene Menara Gardens, Bahia Palace & cobalt-blue Majorelle Garden",
        noonToEvening: "Admire Koutoubia Mosque minaret and wander the bustling artisan souks",
        evening: "Experience the carnival energy of Jemaa el-Fnaa Square with storytellers & musicians",
        description: "Immerse in the sensory magic of Marrakech: Yves Saint Laurent's Majorelle Garden, palace courtyards, aromatic spice markets, and the legendary open-air theater of Jemaa el-Fnaa.",
        image: "/images/packages/morocco/image8.jpeg"
      },
      {
        day: 9,
        title: "Marrakech Departure / Airport Transfer",
        location: "Marrakech, Morocco",
        morning: "Breakfast at hotel, leisure morning for last-minute souvenir shopping in the Medina",
        noonToEvening: "Private transfer to Marrakech Menara Airport (or Casablanca) for your return flight",
        description: "Savor a final Moroccan breakfast and mint tea before your private car escorts you to the airport, concluding an unforgettable 9-day imperial Moroccan odyssey.",
        image: "/images/packages/morocco/image9.jpeg"
      }
    ]
  },

  // 14. PHUKET & KRABI
  {
    id: "thailand-phuket-krabi-5d",
    destinationId: "phuket-krabi",
    destinationName: "Phuket & Krabi",
    title: "Tropical Thailand: Phuket & Krabi Island Escapes",
    duration: "5 Days / 4 Nights",
    type: "Honeymoon",
    tagline: "Patong Beach, Phi Phi Islands Speedboat, Krabi 4-Island Tour & Emerald Lagoons",
    description: "The quintessential southern Thai island escape: unwind along Phuket's Patong coastline, cruise across turquoise Andaman waters to the iconic limestone cliffs of Phi Phi Islands, and explore Krabi's famous 4-Island archipelago (Koh Poda, Chicken Island, Tup Island, Phra Nang Cave Beach).",
    inclusions: [
      "2 Nights accommodation in Phuket (Best Western Patong or similar)",
      "2 Nights accommodation in Krabi (Anda Sea Tales Resort or similar)",
      "Daily buffet breakfast at hotels + 2 Island tour buffet lunches",
      "Phuket airport pickup and scenic transfer to Krabi",
      "Full-day Krabi 4-Island speedboat tour (Koh Poda, Chicken Island, Tup Island & Pranang Cave)",
      "Full-day Phi Phi Islands & Maya Bay excursion by speedboat with snorkeling equipment",
      "All inter-city transfers and airport departure transfers"
    ],
    startingStar: 3,
    priceNote: "Customizable across 3★, 4★, and 5★ beachfront resort tiers",
    popular: true,
    coverImage: "/images/packages/phuket-krabi/image1.jpeg",
    itinerary: [
      {
        day: 1,
        title: "Arrival Phuket & Scenic Transfer to Krabi",
        location: "Krabi, Thailand",
        morning: "Arrival at Phuket International Airport, meet driver",
        noonToEvening: "Scenic coastal drive past Phang Nga karst cliffs to Ao Nang, Krabi",
        evening: "Check-in at Anda Sea Tales Resort, leisure evening by the Andaman beach",
        description: "Arrive in tropical Thailand and enjoy a scenic cross-province drive to Krabi's majestic limestone coastline. Settle into your resort and watch the sunset over Ao Nang bay.",
        image: "/images/packages/phuket-krabi/image1.jpeg"
      },
      {
        day: 2,
        title: "Krabi 4-Island Speedboat Tour with Picnic Lunch",
        location: "Krabi, Thailand",
        morning: "Speedboat pickup to explore Koh Poda, Tup Island sandbar & Chicken Island",
        noonToEvening: "Snorkeling among tropical fish, visit sacred Phra Nang Cave Beach, picnic lunch",
        evening: "Return to resort, evening seafood dining along Ao Nang walking street",
        description: "Set sail across Krabi's emerald waters: walk on the natural sandbank connecting Tup and Mor Islands, snorkel vibrant coral reefs, and relax under the limestone cliffs of Phra Nang.",
        image: "/images/packages/phuket-krabi/image2.png"
      },
      {
        day: 3,
        title: "Krabi to Phuket Transfer & Patong Beach Sunset",
        location: "Phuket, Thailand",
        morning: "Breakfast at resort, check-out and private transfer back to Phuket",
        noonToEvening: "Check-in at Best Western Patong, afternoon relaxation or shopping at Jungceylon",
        evening: "Experience the vibrant energy and street food of Bangla Road and Patong Beach",
        description: "Journey back across the bridge to Phuket, Thailand's largest tropical island. Spend the evening enjoying golden sands, sunset cocktails, and lively night markets in Patong.",
        image: "/images/packages/phuket-krabi/image3.jpeg"
      },
      {
        day: 4,
        title: "Full-Day Phi Phi Island & Maya Bay Tour with Lunch",
        location: "Phi Phi Islands, Thailand",
        morning: "Speedboat excursion to Phi Phi Don and Phi Phi Leh; cruise past Maya Bay",
        noonToEvening: "Swim in emerald Pileh Lagoon, visit Viking Cave and Monkey Beach, buffet lunch",
        evening: "Return to Phuket pier and transfer back to hotel for your final evening",
        description: "Experience the Andaman Sea's crown jewels: dramatic soaring limestone peaks, crystal-clear turquoise waters in Pileh Lagoon, and world-class snorkeling around Phi Phi Islands.",
        image: "/images/packages/phuket-krabi/image4.jpeg"
      },
      {
        day: 5,
        title: "Phuket Leisure & Airport Departure",
        location: "Phuket, Thailand",
        morning: "Breakfast at hotel, free time for beach stroll or souvenir shopping",
        noonToEvening: "Private transfer to Phuket International Airport for flight back home",
        description: "Enjoy a final morning by the Andaman Sea before checking out and transferring to Phuket International Airport with bags full of memories.",
        image: "/images/packages/phuket-krabi/image5.jpeg"
      }
    ]
  },

  // 15. RUSSIA
  {
    id: "russia-imperial-capitals-7d",
    destinationId: "russia",
    destinationName: "Russia",
    title: "Russia: Moscow & St. Petersburg Imperial Splendors",
    duration: "7 Days / 6 Nights",
    type: "Luxury",
    tagline: "Moscow Red Square, Kremlin, Hermitage Museum & Sapsan High-Speed Express to St. Petersburg",
    description: "A majestic journey through Russia's two great imperial capitals: Moscow's iconic Red Square, Saint Basil's Cathedral, Kremlin palaces, and opulent metro stations, followed by the lightning-fast Sapsan bullet train to St. Petersburg for the State Hermitage Museum, Peterhof fountain cascades, and Neva River canals.",
    inclusions: [
      "3 Nights accommodation in Moscow (Holiday Inn Suchevsky / Lesnaya or similar)",
      "3 Nights accommodation in St. Petersburg (Holiday Inn Vorota / Park Inn Pribaltiiskaya or similar)",
      "Daily international buffet breakfast at hotels",
      "One-way Sapsan high-speed express train ticket (Moscow to St. Petersburg)",
      "Guided Moscow city tour: Red Square, St. Basil's, GUM, Alexander Garden & Christ the Saviour",
      "Moscow Kremlin territory & historic Cathedrals tour",
      "Famous Moscow Metro architecture & Arbat Street walking tour",
      "St. Petersburg Grand City Tour: Peter & Paul Fortress, St. Isaac's & Church on Spilled Blood",
      "Guided tour of the State Hermitage Museum (Winter Palace)",
      "Peterhof Grand Palace and lower fountain gardens excursion",
      "All private airport and railway station transfers"
    ],
    startingStar: 4,
    priceNote: "Customizable across 3★, 4★, and 5★ imperial palace tiers",
    popular: true,
    coverImage: "/images/packages/russia/image1.jpeg",
    itinerary: [
      {
        day: 1,
        title: "Welcome to Moscow / Transfer to Hotel",
        location: "Moscow, Russia",
        morning: "Arrival at Moscow International Airport, meet your private guide & driver",
        noonToEvening: "Private transfer to Holiday Inn Suchevsky, check-in and refresh",
        evening: "Evening orientation stroll along the vibrant pedestrian Arbat Street",
        description: "Welcome to the capital of Russia! Meet your chauffeur upon arrival and transfer to your hotel. Begin your adventure with an evening walk along historic Arbat Street.",
        image: "/images/packages/russia/image1.jpeg"
      },
      {
        day: 2,
        title: "Moscow Red Square, St. Basil's & Kremlin Territory",
        location: "Moscow, Russia",
        morning: "Guided walking tour of Red Square: Saint Basil's Cathedral, Lenin's Mausoleum & GUM",
        noonToEvening: "Tour the historic Moscow Kremlin territory, Tsar Bell, Tsar Cannon & Cathedrals",
        evening: "Visit Cathedral of Christ the Saviour and enjoy panoramic views from Patriarch Bridge",
        description: "Discover Russia's political and spiritual epicenter. Walk cobblestone Red Square, gaze at St. Basil's vibrant onion domes, and enter the Kremlin's medieval cathedral square.",
        image: "/images/packages/russia/image2.png"
      },
      {
        day: 3,
        title: "Moscow Metro Palaces & Sapsan Bullet Train to St. Petersburg",
        location: "St. Petersburg, Russia",
        morning: "Tour the famous Moscow Underground 'Palaces for the People' with stained glass & chandeliers",
        noonToEvening: "Board the high-speed Sapsan train whisking through Russian countryside in 3.5 hours",
        evening: "Arrive at Moskovsky Station in St. Petersburg, transfer to Holiday Inn Vorota",
        description: "Marvel at Moscow's museum-like metro stations before boarding the cutting-edge Sapsan bullet train to Peter the Great's grand northern Venice on the Baltic Sea.",
        image: "/images/packages/russia/image3.jpeg"
      },
      {
        day: 4,
        title: "St. Petersburg Imperial Highlights & Peter & Paul Fortress",
        location: "St. Petersburg, Russia",
        morning: "Grand city tour: Nevsky Prospekt, Kazan Cathedral, St. Isaac's Cathedral & Bronze Horseman",
        noonToEvening: "Explore Peter and Paul Fortress, birthplace of the city and Romanov burial site",
        evening: "Admire the intricate mosaic domes of the Church of the Savior on Spilled Blood",
        description: "Immerse in the breathtaking baroque and neoclassical splendor of St. Petersburg along the Neva River, surrounded by grand palaces, bridges, and gilded cathedral domes.",
        image: "/images/packages/russia/image4.png"
      },
      {
        day: 5,
        title: "State Hermitage Museum Winter Palace Discovery",
        location: "St. Petersburg, Russia",
        morning: "Guided tour through the opulent state rooms of the Winter Palace",
        noonToEvening: "View masterworks by Leonardo da Vinci, Rembrandt, Raphael, and Impressionist masters",
        evening: "Leisure evening on Palace Square or optional Neva River canal cruise",
        description: "Explore one of the world's greatest art museums, housed inside the gilded former winter residence of Russian Tsars containing over 3 million masterpieces.",
        image: "/images/packages/russia/image5.jpeg"
      },
      {
        day: 6,
        title: "Peterhof Grand Palace & Fountain Gardens Excursion",
        location: "Peterhof, Russia",
        morning: "Excursion to the seaside Peterhof Palace, known as the 'Russian Versailles'",
        noonToEvening: "Marvel at the Grand Cascade fountains powered entirely by natural water pressure",
        evening: "Return to St. Petersburg for a farewell Russian imperial dinner",
        description: "Travel to the Gulf of Finland to witness the dazzling gold statues and water cascades of Peterhof, celebrating Peter the Great's naval triumphs.",
        image: "/images/packages/russia/image6.jpeg"
      },
      {
        day: 7,
        title: "St. Petersburg Canal Stroll & Airport Departure",
        location: "St. Petersburg, Russia",
        morning: "Breakfast at hotel, morning stroll along the Moika and Fontanka canal bridges",
        noonToEvening: "Transfer to Pulkovo International Airport for your flight back home",
        description: "Enjoy a final morning taking in the grand vistas of the Neva River before your private transfer to Pulkovo Airport for your departure flight.",
        image: "/images/packages/russia/image7.jpeg"
      }
    ]
  },

  // 16. SINGAPORE & MALAYSIA (7N/8D)
  {
    id: "singapore-malaysia-twin-8d",
    destinationId: "singapore-malaysia",
    destinationName: "Singapore & Malaysia",
    title: "Singapore & Malaysia Twin Nation Odyssey",
    duration: "8 Days / 7 Nights",
    type: "Family",
    tagline: "Singapore Marina Bay, Universal Studios, Genting Cable Car & Kuala Lumpur Petronas Towers",
    description: "A comprehensive 8-day dual-nation holiday: 4 nights in futuristic Singapore experiencing Sentosa Island, Universal Studios, and Gardens by the Bay, combined with 3 nights in vibrant Kuala Lumpur exploring the iconic Petronas Twin Towers, Batu Caves, and misty Genting Highlands.",
    inclusions: [
      "4 Nights in Singapore (Ibis Budget Imperial / J8 Hotel or similar)",
      "3 Nights in Kuala Lumpur (Cosmo Hotel / Furama Bukit Bintang or similar)",
      "Daily breakfast at all hotels",
      "Singapore Half-Day City Tour (Merlion Park, Chinatown, Little India)",
      "Universal Studios Singapore full-day pass (7 themed zones)",
      "Sentosa Island tour with Cable Car Sky Network & S.E.A. Aquarium",
      "Gardens by the Bay (Flower Dome & Cloud Forest cooled conservatories)",
      "Cross-border deluxe coach transfer from Singapore to Kuala Lumpur",
      "Kuala Lumpur Half-Day City Tour: Petronas Towers photo stop, King's Palace, National Mosque",
      "Full-day Genting Highlands tour with Batu Caves photo stop and 2-way Awana SkyWay cable car",
      "Return airport transfers in Singapore and Kuala Lumpur"
    ],
    startingStar: 3,
    priceNote: "Customizable across 3★, 4★, and 5★ dual-country hotel tiers",
    popular: true,
    coverImage: "/images/packages/singapore-malaysia/image1.jpeg",
    itinerary: [
      {
        day: 1,
        title: "Arrival Singapore & Evening Night Safari",
        location: "Singapore",
        morning: "Arrival at Singapore Changi Airport, meet driver and transfer to hotel",
        noonToEvening: "Check-in at Ibis Budget Imperial, afternoon refresh",
        evening: "Evening excursion to the world-first Singapore Night Safari with guided tram ride",
        description: "Welcome to the Lion City! Arrive at world-renowned Changi Airport and transfer to your hotel. In the evening, journey into the Mandai rainforest for the famous Night Safari.",
        image: "/images/packages/singapore-malaysia/image1.jpeg"
      },
      {
        day: 2,
        title: "Full-Day Universal Studios Singapore Adventure",
        location: "Sentosa, Singapore",
        morning: "Transfer to Resorts World Sentosa for Universal Studios Singapore",
        noonToEvening: "Experience cutting-edge rides: Battlestar Galactica, Transformers 3D, Jurassic Park",
        evening: "Explore Hollywood and New York themed zones, return to hotel in evening",
        description: "Spend a full day immersed in cinematic magic at Southeast Asia's only Universal Studios theme park featuring 24 exhilarating rides, shows, and attractions.",
        image: "/images/packages/singapore-malaysia/image2.png"
      },
      {
        day: 3,
        title: "Sentosa Island Cable Car, S.E.A. Aquarium & Wings of Time",
        location: "Sentosa, Singapore",
        morning: "Scenic ride on the Singapore Cable Car Sky Network from Mount Faber to Sentosa",
        noonToEvening: "Explore S.E.A. Aquarium / Oceanarium with 100,000+ marine creatures, Skyline Luge",
        evening: "Spectacular Wings of Time multimedia laser & fireworks show on Siloso Beach",
        description: "Soar above the harbour on the cable car to Sentosa Island. Discover the wonders of the deep at S.E.A. Aquarium and zoom down the Skyline Luge tracks before the evening fireworks.",
        image: "/images/packages/singapore-malaysia/image3.png"
      },
      {
        day: 4,
        title: "Singapore City Tour & Gardens by the Bay",
        location: "Singapore",
        morning: "City orientation: Merlion Park, Padang, historic Parliament House & Chinatown",
        noonToEvening: "Visit Gardens by the Bay: explore the cooled Flower Dome & misty Cloud Forest waterfall",
        evening: "Marvel at the Supertree Grove Light and Sound Show (Garden Rhapsody)",
        description: "Photograph the iconic Merlion spouting water into Marina Bay, explore vibrant heritage enclaves, and enter the futuristic glass biomes of Gardens by the Bay.",
        image: "/images/packages/singapore-malaysia/image4.jpeg"
      },
      {
        day: 5,
        title: "Scenic Coach Transfer to Kuala Lumpur",
        location: "Kuala Lumpur, Malaysia",
        morning: "Breakfast at hotel, check-out and board deluxe executive cross-border coach",
        noonToEvening: "Scenic journey through southern Peninsular Malaysia, cross border into Kuala Lumpur",
        evening: "Check-in at Cosmo Hotel Kuala Lumpur, evening exploration of Jalan Alor street food",
        description: "Cross the Johor Strait into Malaysia and travel through lush tropical landscapes to Kuala Lumpur. Settle in and sample satay and dim sum at bustling Jalan Alor.",
        image: "/images/packages/singapore-malaysia/image5.png"
      },
      {
        day: 6,
        title: "Kuala Lumpur City Tour & Petronas Twin Towers",
        location: "Kuala Lumpur, Malaysia",
        morning: "City tour: photo stop at iconic 88-storey Petronas Twin Towers & King's Palace",
        noonToEvening: "Visit National Monument, National Mosque & Independence Square (Dataran Merdeka)",
        evening: "Shopping at Suria KLCC or Bukit Bintang fashion malls",
        description: "Discover Malaysia's dynamic capital: gaze up at the gleaming stainless-steel spires of the Petronas Towers and explore rich Moorish colonial architecture.",
        image: "/images/packages/singapore-malaysia/image6.png"
      },
      {
        day: 7,
        title: "Batu Caves & Genting Highlands Awana SkyWay Cable Car",
        location: "Genting Highlands, Malaysia",
        morning: "Drive to sacred Batu Caves: climb the 272 colourful stairs past the golden Lord Murugan",
        noonToEvening: "Board the Awana SkyWay cable car gliding above 130-million-year-old rainforest to Genting",
        evening: "Explore SkyAvenue casino, indoor theme parks, and return to Kuala Lumpur",
        description: "Ascend to the limestone caverns of Batu Caves, then ride high into the misty Titiwangsa mountains on the Awana SkyWay cable car for entertainment at Resorts World Genting.",
        image: "/images/packages/singapore-malaysia/image7.jpeg"
      },
      {
        day: 8,
        title: "Kuala Lumpur Shopping & Airport Departure",
        location: "Kuala Lumpur, Malaysia",
        morning: "Breakfast at hotel, free time for last-minute shopping at Central Market",
        noonToEvening: "Private transfer to Kuala Lumpur International Airport (KLIA) for return flight",
        description: "Enjoy a leisurely morning picking up pewterware and batik souvenirs before your private transfer to KLIA, concluding a memorable dual-country Asian journey.",
        image: "/images/packages/singapore-malaysia/image8.jpeg"
      }
    ]
  },

  // 17. SINGAPORE FULLY LOADED (4N/5D)
  {
    id: "singapore-fully-loaded-5d",
    destinationId: "singapore",
    destinationName: "Singapore",
    title: "Singapore Fully Loaded Family & Adventure Escape",
    duration: "5 Days / 4 Nights",
    type: "Family",
    tagline: "Night Safari, Universal Studios, Sentosa Skyline Luge, Cable Car & Gardens by the Bay",
    description: "The definitive 5-day Singapore family and adventure package: experience the nocturnal wonders of Night Safari in Mandai, immerse in blockbuster thrills at Universal Studios, soar across Sentosa on the Singapore Cable Car, zoom down the Skyline Luge tracks, and marvel at Gardens by the Bay's Cloud Forest.",
    inclusions: [
      "4 Nights in Singapore (J8 Hotel / Ibis Budget Imperial / Ibis Budget Selegie or similar)",
      "Daily breakfast at hotel",
      "Singapore Night Safari with tram ride (or Bird Paradise)",
      "Universal Studios Singapore 1-Day Pass (all 7 themed zones)",
      "Sentosa Island pass: Singapore Cable Car Sky Network from Mount Faber",
      "Singapore Oceanarium / S.E.A. Aquarium admission",
      "Skyline Luge & Skyride (3 rides combo)",
      "Wings of Time laser & fireworks multimedia night show",
      "Half-day Singapore city tour: Merlion Park, Padang, Chinatown, Little India",
      "Gardens by the Bay double conservatories (Flower Dome & Cloud Forest)",
      "Return airport transfers in private / shared AC coach"
    ],
    startingStar: 3,
    priceNote: "Customizable across 2★ Smart Budget to 5★ Marina Bay Sands luxury",
    popular: true,
    coverImage: "/images/packages/singapore/image1.jpeg",
    itinerary: [
      {
        day: 1,
        title: "Arrival Singapore & World-First Night Safari",
        location: "Singapore",
        morning: "Arrival at Changi Airport, meet chauffeur and transfer to hotel",
        noonToEvening: "Check-in at J8 Hotel / Ibis Budget, afternoon leisure to unpack",
        evening: "Evening excursion to the Mandai Night Safari, exploring nocturnal wildlife via tram",
        description: "Welcome to Singapore! Arrive at Changi Airport and transfer to your hotel. In the evening, journey into the lush Mandai rainforest to witness over 2,500 animals in their nocturnal habitats.",
        image: "/images/packages/singapore/image1.jpeg"
      },
      {
        day: 2,
        title: "Full-Day Universal Studios Singapore Adventure",
        location: "Sentosa, Singapore",
        morning: "Transfer to Resorts World Sentosa for Universal Studios Singapore",
        noonToEvening: "Experience high-adrenaline rides: Battlestar Galactica, Transformers 3D, Jurassic Rapids",
        evening: "Explore Far Far Away castle, meet beloved characters, return to hotel",
        description: "Enjoy an action-packed full day at Southeast Asia's premier theme park with 7 immersive zones based on blockbuster Hollywood films and television series.",
        image: "/images/packages/singapore/image2.png"
      },
      {
        day: 3,
        title: "Sentosa Cable Car, Oceanarium, Skyline Luge & Wings of Time",
        location: "Sentosa, Singapore",
        morning: "Soar over the harbour on the Singapore Cable Car Sky Network from Faber Peak",
        noonToEvening: "Explore S.E.A. Aquarium's 22 themed zones, race down 4 Skyline Luge tracks",
        evening: "Witness the award-winning Wings of Time water, laser, and fire multimedia spectacle",
        description: "A complete day of Sentosa magic: aerial cable car views, walking through shark tunnels at the Oceanarium, downhill luge gravity racing, and an outdoor beach fireworks finale.",
        image: "/images/packages/singapore/image3.png"
      },
      {
        day: 4,
        title: "Singapore City Tour & Gardens by the Bay Domes",
        location: "Singapore",
        morning: "City sightseeing: Merlion Park, Fountain of Wealth, Chinatown, Little India, City Hall",
        noonToEvening: "Visit Gardens by the Bay: walk beneath the 35m indoor waterfall in Cloud Forest & Flower Dome",
        evening: "Watch the Supertrees light up during the dazzling Garden Rhapsody evening show",
        description: "Capture classic photos with the Merlion overlooking Marina Bay Sands, explore multicultural heritage enclaves, and enter the climate-controlled conservatories of Gardens by the Bay.",
        image: "/images/packages/singapore/image4.jpeg"
      },
      {
        day: 5,
        title: "Orchard Road Shopping & Changi Jewel Airport Departure",
        location: "Singapore",
        morning: "Breakfast at hotel, free time for shopping on Orchard Road or Bugis Junction",
        noonToEvening: "Transfer to Changi Airport; visit Jewel Changi's indoor Rain Vortex before departure",
        description: "Spend your final hours shopping before transferring to Changi Airport. Gaze at the world's tallest indoor waterfall at Jewel before boarding your flight back home.",
        image: "/images/packages/singapore/image5.png"
      }
    ]
  },

  // 18. GRAND ASIA PANORAMA (10N/11D)
  {
    id: "grand-asia-panorama-11d",
    destinationId: "grand-asia",
    destinationName: "Grand Asia",
    title: "Grand Asia Panorama: Singapore, Malaysia & Thailand",
    duration: "11 Days / 10 Nights",
    type: "Explorer",
    tagline: "Singapore Night Safari, Genting Highlands, KL Towers, Pattaya Coral Island & Bangkok Temples",
    description: "The ultimate 11-day multi-country Southeast Asian adventure covering 3 legendary countries: Singapore's futuristic skyline and Night Safari, Malaysia's buzzing Kuala Lumpur and misty Genting Highlands, and Thailand's sun-soaked Pattaya beaches and bustling Bangkok temples.",
    inclusions: [
      "2 Nights in Singapore (Value Hotel Thomson / Ibis Budget or similar)",
      "2 Nights in Kuala Lumpur (Cosmo Hotel / Furama or similar)",
      "1 Night in Genting Highlands (First World Hotel or similar)",
      "2 Nights in Pattaya (Sunbeam Hotel / Golden Beach or similar)",
      "3 Nights in Bangkok (Ecotel Bangkok / Gusto Pratunam or similar)",
      "Daily breakfast at all hotels",
      "Singapore Night Safari & Singapore Half-Day City Tour",
      "Cross-border transfer from Singapore to Kuala Lumpur",
      "Kuala Lumpur city tour + Batu Caves excursion",
      "Genting Highlands cable car ride (Awana SkyWay)",
      "Flight / Transfer from Malaysia to Thailand",
      "Pattaya Coral Island speedboat excursion with Indian buffet lunch",
      "Alcazar Cabaret Show VIP admission",
      "Bangkok city and temple tour: Golden Buddha (Wat Traimit) & Marble Temple",
      "Chao Phraya River Princess dinner cruise",
      "All airport, ferry, and intercity coach transfers"
    ],
    startingStar: 3,
    priceNote: "Customizable across 3★, 4★, and 5★ multi-nation tiers",
    popular: true,
    coverImage: "/images/packages/grand-asia/image1.jpeg",
    itinerary: [
      {
        day: 1,
        title: "Welcome to Singapore & Evening Night Safari",
        location: "Singapore",
        morning: "Arrival at Singapore Changi Airport, private transfer to hotel",
        noonToEvening: "Check-in at Value Hotel Thomson, relax and unpack",
        evening: "Evening transfer to Mandai Night Safari with guided tram tour",
        description: "Begin your grand tri-nation odyssey in Singapore. Transfer to your hotel and spend the evening discovering the world's first nocturnal zoo in the Mandai rainforest.",
        image: "/images/packages/grand-asia/image1.jpeg"
      },
      {
        day: 2,
        title: "Singapore City Highlights & Sentosa Island",
        location: "Singapore",
        morning: "City tour: Merlion Park, Padang, historic City Hall, Chinatown & Little India",
        noonToEvening: "Afternoon at Sentosa Island: Cable car ride, S.E.A. Aquarium & Siloso Beach",
        evening: "Spectacular Wings of Time night show, return to hotel",
        description: "Explore the vibrant cultural quarters of Singapore and spend an exhilarating afternoon on resort island Sentosa enjoying world-class marine life and evening pyrotechnics.",
        image: "/images/packages/grand-asia/image2.png"
      },
      {
        day: 3,
        title: "Scenic Transfer to Kuala Lumpur / Evening Bukit Bintang",
        location: "Kuala Lumpur, Malaysia",
        morning: "Breakfast, check-out and board deluxe coach to Kuala Lumpur",
        noonToEvening: "Cross the international causeway, scenic drive through rubber & palm plantations",
        evening: "Arrive in Kuala Lumpur, check-in at Cosmo Hotel, evening dining in Bukit Bintang",
        description: "Cross into Malaysia and journey through scenic tropical country to capital Kuala Lumpur. Spend the evening exploring the golden triangle shopping and dining precinct.",
        image: "/images/packages/grand-asia/image3.jpeg"
      },
      {
        day: 4,
        title: "Kuala Lumpur City Tour & Petronas Twin Towers",
        location: "Kuala Lumpur, Malaysia",
        morning: "City highlights: Petronas Towers photo stop, King's Palace & National Monument",
        noonToEvening: "Independence Square (Dataran Merdeka), National Mosque & Cocoa Boutique",
        evening: "Leisure evening at Suria KLCC and Lake Symphony water fountains",
        description: "Discover the architectural wonders of Kuala Lumpur, from colonial heritage squares to the futuristic stainless-steel spires of the Petronas Twin Towers.",
        image: "/images/packages/grand-asia/image4.jpeg"
      },
      {
        day: 5,
        title: "Batu Caves & Skyway Cable Car to Genting Highlands",
        location: "Genting Highlands, Malaysia",
        morning: "Drive to sacred Batu Caves: climb 272 steps past the giant golden Murugan statue",
        noonToEvening: "Ride the Awana SkyWay gondola above prehistoric rainforest to Genting",
        evening: "Check-in at First World Hotel, enjoy high-altitude casinos, malls & indoor theme parks",
        description: "Climb the colorful temple steps of Batu Caves, then soar into the cool mountain air of Genting Highlands for a fun-filled night of entertainment above the clouds.",
        image: "/images/packages/grand-asia/image5.png"
      },
      {
        day: 6,
        title: "Fly to Bangkok & Coastal Drive to Pattaya",
        location: "Pattaya, Thailand",
        morning: "Transfer to Kuala Lumpur Airport (KLIA) for short flight to Bangkok",
        noonToEvening: "Arrive at Suvarnabhumi Airport, meet Thai chauffeur and drive directly to Pattaya",
        evening: "Check-in at Sunbeam Hotel Pattaya, evening stroll along the lively Pattaya Beach Road",
        description: "Fly to Thailand and enjoy a comfortable highway drive to the seaside resort city of Pattaya. Settle in and enjoy warm Gulf of Thailand sea breezes.",
        image: "/images/packages/grand-asia/image6.png"
      },
      {
        day: 7,
        title: "Pattaya Coral Island Speedboat & Alcazar Cabaret Show",
        location: "Pattaya, Thailand",
        morning: "Speedboat ride to Coral Island (Koh Larn): parasailing, sea walking & banana boat",
        noonToEvening: "Relax on white sandy beaches, Indian buffet lunch, return to Pattaya pier",
        evening: "VIP admission to the world-famous Alcazar Cabaret theatrical show",
        description: "Speed across turquoise waters to Coral Island for thrilling watersports and pristine beaches, then enjoy an evening of dazzling glamour at the legendary Alcazar Cabaret.",
        image: "/images/packages/grand-asia/image7.jpeg"
      },
      {
        day: 8,
        title: "Pattaya to Bangkok Transfer & Gems Gallery",
        location: "Bangkok, Thailand",
        morning: "Breakfast at hotel, check-out and visit World's Biggest Gems Gallery with dark ride",
        noonToEvening: "Scenic drive to Bangkok, check-in at Ecotel Bangkok / Gusto Pratunam",
        evening: "Evening shopping at Pratunam wholesale garment market or Platinum Fashion Mall",
        description: "Journey from the coast to Thailand's vibrant royal capital, Bangkok. Enjoy world-class shopping in Pratunam and savor mouth-watering Thai street food.",
        image: "/images/packages/grand-asia/image8.jpeg"
      },
      {
        day: 9,
        title: "Bangkok City & Ancient Temples Tour",
        location: "Bangkok, Thailand",
        morning: "Guided temple tour: Wat Traimit (Golden Buddha) & Wat Benchamabophit (Marble Temple)",
        noonToEvening: "Drive past Chinatown, Flower Market, Democracy Monument & Royal Grand Palace",
        evening: "Chao Phraya River Princess dinner cruise with live international band",
        description: "Marvel at Bangkok's sacred golden temples and glide along the Chao Phraya River on a luxury dinner cruise past illuminated monuments like Wat Arun.",
        image: "/images/packages/grand-asia/image9.jpeg"
      },
      {
        day: 10,
        title: "Safari World & Marine Park Excursion with Buffet Lunch",
        location: "Bangkok, Thailand",
        morning: "Drive-through open Safari Park: lions, tigers, zebras, giraffes & rhinos roaming free",
        noonToEvening: "Marine Park stunt shows: Dolphin Show, Sea Lion Show, Spy War & buffet lunch",
        evening: "Return to hotel, final evening for souvenir shopping at Asiatique The Riverfront",
        description: "An unforgettable full day at Thailand's greatest open zoo and marine park featuring heart-stopping animal stunts, live action shows, and close wildlife encounters.",
        image: "/images/packages/grand-asia/image10.png"
      },
      {
        day: 11,
        title: "Bangkok Shopping & Suvarnabhumi Airport Departure",
        location: "Bangkok, Thailand",
        morning: "Breakfast at hotel, check-out, free time for last-minute shopping at MBK or CentralWorld",
        noonToEvening: "Private transfer to Suvarnabhumi International Airport for return flight",
        description: "Savor your final Thai delicacies before your private car escorts you to the airport, concluding a monumental 11-day multi-country Grand Asia odyssey.",
        image: "/images/packages/grand-asia/image11.jpeg"
      }
    ]
  },

  // 19. SOUTH KOREA (7N/8D)
  {
    id: "south-korea-cultural-odyssey-8d",
    destinationId: "south-korea",
    destinationName: "South Korea",
    title: "South Korea Cultural Odyssey & Coastal Vistas",
    duration: "8 Days / 7 Nights",
    type: "Explorer",
    tagline: "Seoul Gyeongbokgung Palace, Jeonju Hanok Village, Yeosu Coastal Cable Car & Busan Haeundae",
    description: "A rich cultural journey from South Korea's high-tech capital to its ancient heritage and stunning southern coast: explore Seoul's royal Joseon palaces, experience traditional timber Hanok living in Jeonju, take in panoramic ocean vistas on the Yeosu marine cable car, and unwind along Busan's coastal temples and vibrant Jagalchi seafood markets.",
    inclusions: [
      "3 Nights in Seoul (Swiss Grand Hotel Seoul / Four Points by Sheraton or similar)",
      "1 Night in Jeonju (Jeonju Lahan Hotel or similar)",
      "1 Night in Yeosu (Yeosu Ramada Plaza or similar)",
      "2 Nights in Busan (Signiel Busan / Grand Josun or similar)",
      "Daily breakfast at all hotels",
      "Seoul City Tour: Gyeongbokgung Palace, Blue House, Insadong antique street & N Seoul Tower",
      "Jeonju Hanok Village guided cultural walking tour with Hanbok rental experience",
      "Yeosu Coastal Marine Cable Car & Odongdo Island camellia forest",
      "Busan Highlights: Haeundae Beach, Haedong Yonggungsa seaside temple & Gamcheon Culture Village",
      "KTX Bullet Train / Deluxe express coach transfers throughout",
      "Airport arrival and departure transfers"
    ],
    startingStar: 4,
    priceNote: "Customizable across 3★, 4★, and 5★ Korean luxury tiers",
    popular: true,
    coverImage: "/images/packages/south-korea/image1.jpeg",
    itinerary: [
      {
        day: 1,
        title: "Arrival Seoul & Incheon Airport Welcome",
        location: "Seoul, South Korea",
        morning: "Arrival at Incheon International Airport, meet English-speaking guide",
        noonToEvening: "Private transfer to Swiss Grand Hotel Seoul, check-in and refresh",
        evening: "Evening orientation walk in Hongdae youth culture and street art district",
        description: "Welcome to South Korea! Meet your chauffeur at Incheon and transfer to your hotel. Soak in the trendy café culture and vibrant street performances in Hongdae.",
        image: "/images/packages/south-korea/image1.jpeg"
      },
      {
        day: 2,
        title: "Royal Seoul: Gyeongbokgung Palace & Insadong Alleyways",
        location: "Seoul, South Korea",
        morning: "Witness Royal Guard Changing Ceremony at Gyeongbokgung Palace; visit National Folk Museum",
        noonToEvening: "Pass the Blue House, explore Bukchon Hanok Village traditional tiled roofs",
        evening: "Stroll Insadong antique art street and ascend N Seoul Tower for 360-degree night views",
        description: "Step into the Joseon dynasty at Seoul's grandest royal palace. Wander preservation alleys of Bukchon and take in the sparkling sea of city lights from N Seoul Tower.",
        image: "/images/packages/south-korea/image2.png"
      },
      {
        day: 3,
        title: "Scenic Drive to Jeonju & Historic Hanok Village Living",
        location: "Jeonju, South Korea",
        morning: "Scenic highway transfer to Jeonju, the UNESCO City of Gastronomy",
        noonToEvening: "Check-in at Jeonju Lahan Hotel, don traditional Hanbok attire for photos",
        evening: "Savor authentic Jeonju Bibimbap, explore over 800 preserved timber Hanok houses",
        description: "Journey south to Jeonju, celebrated for traditional Korean food and heritage architecture. Walk the cobblestone lanes of the historic Hanok Village in silk Hanbok.",
        image: "/images/packages/south-korea/image3.jpeg"
      },
      {
        day: 4,
        title: "Coastal Drive to Yeosu & Ocean Marine Cable Car",
        location: "Yeosu, South Korea",
        morning: "Drive to the southern coastal port city of Yeosu",
        noonToEvening: "Check-in at Yeosu Ramada, ride the Yeosu Ocean Cable Car gliding above the harbour",
        evening: "Stroll across Odongdo Island lighthouse trail, evening Big-O show or oceanfront seafood",
        description: "Travel to beautiful Yeosu on the southern sea. Glide over turquoise waters on the marine cable car and walk among the ancient camellia forests of Odongdo Island.",
        image: "/images/packages/south-korea/image4.jpeg"
      },
      {
        day: 5,
        title: "Yeosu to Coastal Busan & Haeundae Beach Sunset",
        location: "Busan, South Korea",
        morning: "Scenic coastal transfer to Busan, South Korea's vibrant second metropolis",
        noonToEvening: "Check-in at Signiel Busan / Grand Josun, stroll along pristine Haeundae Beach",
        evening: "Walk across the curving Songdo Cloud Trails skywalk over crashing ocean waves",
        description: "Arrive in Busan, famed for dynamic beaches, coastal bridges, and mountains. Relax on Haeundae's soft sand and enjoy an evening stroll along the illuminated waterfront.",
        image: "/images/packages/south-korea/image5.jpeg"
      },
      {
        day: 6,
        title: "Busan Cultural Wonders: Gamcheon Village & Haedong Temple",
        location: "Busan, South Korea",
        morning: "Visit cliffside Haedong Yonggungsa Temple, rare Buddhist sanctuary facing the open sea",
        noonToEvening: "Explore colourful hillside Gamcheon Culture Village ('Santorini of the East')",
        evening: "Visit Jagalchi Fish Market, South Korea's largest seafood market, and BIFF Square",
        description: "Experience the unique contrast of ancient Buddhist sea temples and vibrant rainbow houses in Gamcheon, followed by fresh seafood dining at bustling Jagalchi Market.",
        image: "/images/packages/south-korea/image6.png"
      },
      {
        day: 7,
        title: "KTX High-Speed Train Back to Seoul & Myeongdong Shopping",
        location: "Seoul, South Korea",
        morning: "Board the KTX bullet train traveling up to 305 km/h back to Seoul in under 2.5 hours",
        noonToEvening: "Check-in at Swiss Grand Hotel, afternoon shopping in Myeongdong cosmetics haven",
        evening: "Farewell Korean BBQ dinner and night shopping at Dongdaemun Design Plaza (DDP)",
        description: "Speed across the length of South Korea on the ultra-smooth KTX bullet train. Spend your final evening indulging in K-beauty shopping and world-famous Korean BBQ.",
        image: "/images/packages/south-korea/image7.jpeg"
      },
      {
        day: 8,
        title: "Seoul Farewell & Incheon Airport Transfer",
        location: "Seoul, South Korea",
        morning: "Breakfast at hotel, check-out, free time for last-minute supermarket snack shopping",
        noonToEvening: "Private transfer to Incheon International Airport for departure flight",
        description: "Bid farewell to the Land of the Morning Calm before your private transfer to Incheon Airport, concluding an enriching 8-day Korean adventure.",
        image: "/images/packages/south-korea/image8.jpeg"
      }
    ]
  },

  // 20. SRI LANKA (3N/4D)
  {
    id: "sri-lanka-short-break-4d",
    destinationId: "sri-lanka",
    destinationName: "Sri Lanka",
    title: "Sri Lanka Island Serenity: Kandy, Tea Hills & Bentota Beach",
    duration: "4 Days / 3 Nights",
    type: "Explorer",
    tagline: "Pinnawala Elephant Sanctuary, Sacred Kandy Temple, Nuwara Eliya Tea Hills & Bentota Beach",
    description: "An enchanting tropical break in Sri Lanka: witness orphaned elephants bathing in Pinnawala, pay homage at the Temple of the Sacred Tooth Relic in misty Kandy, wander the verdant tea plantations of Nuwara Eliya, and unwind along Bentota's palm-fringed golden beaches with water sports.",
    inclusions: [
      "1 Night in Kandy (Royal Classic Hotel or similar)",
      "1 Night in Nuwara Eliya (Single Tree Mount or similar)",
      "1 Night in Bentota (Hibiscus Beach Hotel or similar)",
      "Daily breakfast at all hotels",
      "Pinnawala Elephant Orphanage visit en route to Kandy",
      "Kandy Temple of the Sacred Tooth Relic & Kandy Lake drive",
      "Scenic drive through tea plantations, visit to working Ceylon Tea Factory & Ramboda Falls",
      "Bentota Beach & Madu River boat safari with cinnamon island stop",
      "Colombo city orientation & shopping tour en route to airport",
      "Private air-conditioned car with English-speaking chauffeur guide throughout"
    ],
    startingStar: 3,
    priceNote: "Customizable across 3★, 4★, and 5★ colonial tea estate tiers",
    popular: true,
    coverImage: "/images/packages/sri-lanka/image1.jpeg",
    itinerary: [
      {
        day: 1,
        title: "Colombo Airport to Kandy via Pinnawala Elephant Sanctuary",
        location: "Kandy, Sri Lanka",
        morning: "Meet chauffeur at Bandaranaike International Airport, drive toward Kandy",
        noonToEvening: "Stop at Pinnawala Elephant Orphanage to watch elephants bathing in the river",
        evening: "Arrive in hill capital Kandy, check-in at Royal Classic Hotel, cultural dance show",
        description: "Arrive in Sri Lanka and travel into the lush central highlands. Watch dozens of elephants splashing in the river at Pinnawala before reaching royal hill capital Kandy.",
        image: "/images/packages/sri-lanka/image1.jpeg"
      },
      {
        day: 2,
        title: "Kandy Tooth Relic Temple to Misty Nuwara Eliya Tea Country",
        location: "Nuwara Eliya, Sri Lanka",
        morning: "Visit sacred Temple of the Tooth Relic (Sri Dalada Maligawa) & Kandy Lake",
        noonToEvening: "Scenic mountain drive past Ramboda Falls; tour a working Ceylon tea factory",
        evening: "Check-in at Single Tree Mount Nuwara Eliya ('Little England'), Gregory Lake walk",
        description: "Pay respects at Buddhism's most revered shrine in Kandy, then wind through emerald mountain passes blanketed in world-renowned Ceylon tea bushes to cool Nuwara Eliya.",
        image: "/images/packages/sri-lanka/image2.png"
      },
      {
        day: 3,
        title: "Nuwara Eliya Waterfalls to Tropical Bentota Coast",
        location: "Bentota, Sri Lanka",
        morning: "Scenic descent from the central highlands to the southwestern coastline",
        noonToEvening: "Check-in at Hibiscus Beach Hotel Bentota, relax on golden palm-lined beaches",
        evening: "Sunset walk along Bentota beach, fresh seafood dinner by the Indian Ocean",
        description: "Descend from the misty highlands to Sri Lanka's sun-drenched golden coast. Unwind on the wide sandy beaches of Bentota with soothing ocean breezes.",
        image: "/images/packages/sri-lanka/image3.jpeg"
      },
      {
        day: 4,
        title: "Madu River Safari, Colombo Highlights & Airport Departure",
        location: "Colombo, Sri Lanka",
        morning: "Boat safari through mangrove tunnels on Madu River; visit cinnamon plantation",
        noonToEvening: "Drive to Colombo: Gangaramaya Temple, Galle Face Green & Odel shopping",
        evening: "Transfer to Bandaranaike International Airport for your departure flight",
        description: "Glide through the mangrove eco-system of Madu River, take in the colonial architecture and seaside promenade of Colombo, and transfer to the airport with sweet island memories.",
        image: "/images/packages/sri-lanka/image4.jpeg"
      }
    ]
  },

  // 21. THAILAND: BANGKOK & PATTAYA (4N/5D)
  {
    id: "thailand-bangkok-pattaya-5d",
    destinationId: "thailand",
    destinationName: "Thailand",
    title: "Thailand Splendors: Bangkok & Pattaya Beach Escape",
    duration: "5 Days / 4 Nights",
    type: "Explorer",
    tagline: "Pattaya Coral Island Speedboat, Alcazar Show, Safari World & Grand Bangkok Temples",
    description: "The classic, action-packed holiday in the Land of Smiles: 2 nights in beachside Pattaya enjoying speedboats to Coral Island and glamorous cabaret entertainment, paired with 2 nights in Bangkok discovering ancient gilded temples, Safari World wildlife adventures, and world-class retail markets.",
    inclusions: [
      "2 Nights in Pattaya (Sunbeam Hotel / Golden Beach or similar)",
      "2 Nights in Bangkok (Ecotel Bangkok / Gusto Pratunam / Anya Hotel or similar)",
      "Daily breakfast at hotels + 2 Special buffet lunches",
      "Bangkok Suvarnabhumi / Don Mueang Airport to Pattaya private transfer",
      "Full-Day Coral Island (Koh Larn) speedboat tour with watersports & Indian lunch",
      "Alcazar Cabaret Show standard / VIP admission",
      "Bangkok City & Temple Tour: Wat Traimit (Golden Buddha) & Wat Benchamabophit",
      "Safari World & Marine Park full-day tour with international buffet lunch",
      "Bangkok hotel to airport departure transfer"
    ],
    startingStar: 3,
    priceNote: "Customizable across 3★, 4★, and 5★ luxury hotel tiers",
    popular: true,
    coverImage: "/images/packages/thailand/image1.jpeg",
    itinerary: [
      {
        day: 1,
        title: "Arrival Bangkok, Drive to Pattaya & Alcazar Cabaret Show",
        location: "Pattaya, Thailand",
        morning: "Arrival at Bangkok Airport, meet private driver and transfer directly to Pattaya",
        noonToEvening: "Check-in at Pattaya hotel, afternoon relaxation by the pool",
        evening: "Evening VIP admission to the world-famous Alcazar Cabaret theatrical show",
        description: "Arrive in Thailand and travel down the eastern gulf coast to vibrant Pattaya. Settle into your hotel and enjoy an evening of music, dance, and glamour at the Alcazar show.",
        image: "/images/packages/thailand/image1.jpeg"
      },
      {
        day: 2,
        title: "Pattaya Coral Island Speedboat Excursion with Lunch",
        location: "Pattaya, Thailand",
        morning: "Speedboat across turquoise Gulf of Thailand waters to Coral Island (Koh Larn)",
        noonToEvening: "Enjoy parasailing, underwater sea walking, swimming, Indian buffet lunch",
        evening: "Return to Pattaya pier, free evening for nightlife and Walking Street",
        description: "Speed across the bay to pristine Coral Island. Relax on powdery white sands, participate in watersports, and enjoy a delicious hot Indian buffet lunch.",
        image: "/images/packages/thailand/image2.png"
      },
      {
        day: 3,
        title: "Scenic Transfer to Bangkok & Gems Gallery",
        location: "Bangkok, Thailand",
        morning: "Breakfast, check-out and visit World's Biggest Gems Gallery with theme park dark ride",
        noonToEvening: "Scenic drive to Bangkok, check-in at Ecotel Bangkok / Gusto Pratunam",
        evening: "Evening at leisure for shopping in Pratunam wholesale markets or Platinum Mall",
        description: "Journey back to Thailand's buzzing royal metropolis. Explore the master gem cutters at Gems Gallery and check in to your central Bangkok hotel.",
        image: "/images/packages/thailand/image3.jpeg"
      },
      {
        day: 4,
        title: "Full-Day Safari World & Marine Park Adventure with Lunch",
        location: "Bangkok, Thailand",
        morning: "Drive through open Safari Park: see lions, tigers, giraffes and zebras in wild habitat",
        noonToEvening: "Marine Park stunt shows: Dolphin show, Hollywood Cowboy Stunt, Spy War & buffet lunch",
        evening: "Return to hotel, evening street food tour or optional Chao Phraya dinner cruise",
        description: "Experience Thailand's greatest open zoo and entertainment park. Feed towering giraffes, watch world-class dolphin acrobatics, and enjoy an international buffet lunch.",
        image: "/images/packages/thailand/image4.jpeg"
      },
      {
        day: 5,
        title: "Bangkok Temples, Pratunam Shopping & Airport Transfer",
        location: "Bangkok, Thailand",
        morning: "City & temple tour: Wat Traimit (Solid Gold Buddha) & Wat Benchamabophit (Marble Temple)",
        noonToEvening: "Last-minute souvenir shopping before private transfer to airport for departure",
        description: "Marvel at Bangkok's revered golden temples before completing your shopping and transferring to Bangkok Airport with happy memories and bags full of souvenirs.",
        image: "/images/packages/thailand/image5.jpeg"
      }
    ]
  },

  // 22. UNITED KINGDOM (7N/8D)
  {
    id: "united-kingdom-royal-britain-8d",
    destinationId: "united-kingdom",
    destinationName: "United Kingdom",
    title: "United Kingdom: Historic England & Scenic Scotland",
    duration: "8 Days / 7 Nights",
    type: "Explorer",
    tagline: "London Big Ben & Thames, Historic Durham Castle, Royal Edinburgh & Scottish Highlands Glasgow",
    description: "A quintessential British odyssey linking England's royal heritage with Scotland's dramatic lochs and castles: explore London's Tower Bridge and Buckingham Palace, journey north through the medieval cathedral city of Durham, walk Edinburgh's Royal Mile and castle rock, and conclude in vibrant Glasgow.",
    inclusions: [
      "3 Nights in London (Ibis London Earls Court / Novotel or similar)",
      "1 Night in Durham (Radisson Blu Durham or similar)",
      "2 Nights in Edinburgh (Moxy Edinburgh Airport / Holiday Inn or similar)",
      "1 Night in Glasgow (Novotel Glasgow Centre or similar)",
      "Daily English breakfast at all hotels",
      "Hop-on Hop-off London city tour: Big Ben, London Eye, Tower of London, St. Paul's Cathedral",
      "Thames River cruise pass",
      "Guided orientation tour of UNESCO Durham Cathedral and Castle",
      "Edinburgh Castle admission & Royal Mile walking tour",
      "Excursion to Loch Lomond & the Trossachs National Park",
      "High-speed rail ticket or executive coach transport across Britain",
      "All airport and railway station transfers"
    ],
    startingStar: 4,
    priceNote: "Customizable across 3★, 4★, and 5★ British luxury tiers",
    popular: true,
    coverImage: "/images/packages/united-kingdom/image1.jpeg",
    itinerary: [
      {
        day: 1,
        title: "Welcome to London & Thames River Sunset",
        location: "London, England",
        morning: "Arrival at London Heathrow Airport, meet driver and transfer to hotel",
        noonToEvening: "Check-in at Ibis London Earls Court, unpack and refresh",
        evening: "Evening stroll along South Bank overlooking the illuminated London Eye & Big Ben",
        description: "Welcome to the capital of the United Kingdom! Transfer to your hotel and spend your first evening taking in iconic views along the River Thames.",
        image: "/images/packages/united-kingdom/image1.jpeg"
      },
      {
        day: 2,
        title: "London Royal Heritage: Buckingham Palace, Big Ben & Westminster",
        location: "London, England",
        morning: "Witness Changing of the Guard at Buckingham Palace, stroll St. James's Park",
        noonToEvening: "View Westminster Abbey, Houses of Parliament, Big Ben & ride the London Eye",
        evening: "Thames River sightseeing cruise gliding beneath Tower Bridge",
        description: "Experience London's most famous royal and political monuments, from Buckingham Palace to the historic clock tower of Big Ben and grand Westminster Abbey.",
        image: "/images/packages/united-kingdom/image2.png"
      },
      {
        day: 3,
        title: "Tower of London, Covent Garden & Evening West End",
        location: "London, England",
        morning: "Explore the historic Tower of London and gaze upon the priceless Crown Jewels",
        noonToEvening: "Stroll vibrant Covent Garden market, street performers, and British Museum",
        evening: "Experience London's world-famous West End theater district",
        description: "Step into centuries of royal history at the Tower of London, guarded by Yeoman Warders, and soak in the cultural buzz of Covent Garden and theaterland.",
        image: "/images/packages/united-kingdom/image3.jpeg"
      },
      {
        day: 4,
        title: "Scenic Rail Journey to Medieval Durham & Cathedral Tour",
        location: "Durham, England",
        morning: "Board high-speed train traveling north through the English countryside to Durham",
        noonToEvening: "Check-in at Radisson Blu Durham, explore UNESCO Durham Cathedral & Norman Castle",
        evening: "Walk along the picturesque River Wear and cobblestone market place",
        description: "Travel north to one of Britain's most spectacular medieval cities. Gaze in awe at the Romanesque rib vaults of 11th-century Durham Cathedral perched above the river.",
        image: "/images/packages/united-kingdom/image4.jpeg"
      },
      {
        day: 5,
        title: "Cross the Scottish Border to Historic Edinburgh & Royal Mile",
        location: "Edinburgh, Scotland",
        morning: "Train / coach journey crossing the dramatic Scottish border into Edinburgh",
        noonToEvening: "Check-in at Moxy Edinburgh, walk down the historic cobblestones of the Royal Mile",
        evening: "Take in the sunset skyline view from Calton Hill over the Firth of Forth",
        description: "Enter Scotland and arrive in its breathtaking capital, Edinburgh. Walk past medieval closes and wynds along the Royal Mile connecting the castle to Holyroodhouse.",
        image: "/images/packages/united-kingdom/image5.jpeg"
      },
      {
        day: 6,
        title: "Edinburgh Castle Discovery & Excursion to Holyroodhouse",
        location: "Edinburgh, Scotland",
        morning: "Tour Edinburgh Castle perched atop Castle Rock, view the Scottish Crown Jewels",
        noonToEvening: "Visit Palace of Holyroodhouse (King's official Scottish residence) & Arthur's Seat",
        evening: "Traditional Scottish dining with bagpipes and Scotch whisky tasting",
        description: "Explore the ancient fortress of Edinburgh Castle holding the Stone of Destiny and Mons Meg cannon, followed by royal palace grounds and volcanic crags.",
        image: "/images/packages/united-kingdom/image6.jpeg"
      },
      {
        day: 7,
        title: "Scottish Highlands & Loch Lomond Excursion to Glasgow",
        location: "Glasgow, Scotland",
        morning: "Scenic coach excursion into the Trossachs National Park & shores of Loch Lomond",
        noonToEvening: "Drive to Glasgow, check-in at Novotel Glasgow Centre, George Square walking tour",
        evening: "Explore Glasgow's vibrant live music scene, Victorian architecture, and Buchanan Street",
        description: "Experience the romance of the Scottish Highlands around legendary Loch Lomond before arriving in Scotland's cultural and design powerhouse, Glasgow.",
        image: "/images/packages/united-kingdom/image7.jpeg"
      },
      {
        day: 8,
        title: "Glasgow Architectural Stroll & Airport Departure",
        location: "Glasgow, Scotland",
        morning: "Breakfast at hotel, visit Glasgow Cathedral or Kelvingrove Art Gallery",
        noonToEvening: "Private transfer to Glasgow Airport (or Edinburgh Airport) for departure flight",
        description: "Enjoy a final morning admiring Charles Rennie Mackintosh architecture before transferring to the airport for your return flight home.",
        image: "/images/packages/united-kingdom/image8.jpeg"
      }
    ]
  },

  // 23. UTTARAKHAND (7N/8D)
  {
    id: "uttarakhand-himalayan-retreat-8d",
    destinationId: "uttarakhand",
    destinationName: "Uttarakhand",
    title: "Uttarakhand Himalayan Foothills & Wildlife Retreat",
    duration: "8 Days / 7 Nights",
    type: "Explorer",
    tagline: "Har Ki Pauri Maha Aarti, Rishikesh Ganga Ghats, Mussoorie Hills, Jim Corbett Safari & Nainital Lakes",
    description: "The ultimate Himalayan foothill journey through Devbhoomi Uttarakhand: witness the celestial evening Ganga Aarti at Haridwar's Har Ki Pauri, explore yoga ashrams and iconic suspension bridges in Rishikesh, enjoy cool mountain breezes and Kempty Falls in Mussoorie, embark on wildlife safaris in Jim Corbett, and boat on emerald Naini Lake.",
    inclusions: [
      "1 Night in Haridwar (Hotel Blue Pine or similar)",
      "1 Night in Rishikesh (Hotel NV Rishikesh or similar)",
      "2 Nights in Mussoorie (Value & Spa Mussoorie or similar)",
      "1 Night in Jim Corbett (Hotel Blue Pine Resort or similar)",
      "2 Nights in Nainital (Vaapi Comfort Inn Naukuchiatal or similar)",
      "Daily breakfast and dinner (MAP plan) at all hotels",
      "Private air-conditioned vehicle from New Delhi to New Delhi",
      "Haridwar sightseeing: Har Ki Pauri Ganga Aarti, Mansa Devi & Chandi Devi ropeway",
      "Rishikesh sightseeing: Ram Jhula, Laxman Jhula, Triveni Ghat, Parmarth Niketan",
      "Mussoorie sightseeing: Kempty Falls, Bhatta Falls, Mussoorie Lake, Lal Tibba, Mall Road",
      "Jim Corbett National Park visit: Corbett Museum, Garjia Devi Temple & Corbett Falls",
      "Nainital Lake tour: Naini Lake boating, Naina Devi Temple, Snow View Point, Eco Cave Garden"
    ],
    startingStar: 3,
    priceNote: "Customizable across 3★, 4★, and 5★ Himalayan resort tiers",
    popular: true,
    coverImage: "/images/packages/uttarakhand/image1.jpeg",
    itinerary: [
      {
        day: 1,
        title: "New Delhi to Holy Haridwar & Har Ki Pauri Evening Aarti",
        location: "Haridwar, Uttarakhand",
        morning: "Morning pickup from New Delhi Airport / Railway Station, scenic drive to Haridwar",
        noonToEvening: "Check-in at Hotel Blue Pine Haridwar, visit Mansa Devi & Chandi Devi temples",
        evening: "Experience the spellbinding evening Maha Ganga Aarti at sacred Har Ki Pauri",
        description: "Depart Delhi for holy Haridwar on the sacred banks of the Ganges. In the evening, witness thousands of floating leaf lamps and chiming temple bells during the magnificent Ganga Aarti.",
        image: "/images/packages/uttarakhand/image1.jpeg"
      },
      {
        day: 2,
        title: "Haridwar to Rishikesh: Ashrams, Ghats & Jhula Bridges",
        location: "Rishikesh, Uttarakhand",
        morning: "Scenic drive from Haridwar to Rishikesh, the world capital of Yoga",
        noonToEvening: "Check-in at Hotel NV Rishikesh; walk across Ram Jhula, Laxman Jhula & Janki Jhula",
        evening: "Visit Gita Bhawan, Parmarth Niketan Ashram and attend Triveni Ghat evening aarti",
        description: "Travel to peaceful Rishikesh where the holy Ganga emerges from the Shivalik hills. Explore historic spiritual ashrams and suspension bridges with panoramic river vistas.",
        image: "/images/packages/uttarakhand/image2.png"
      },
      {
        day: 3,
        title: "Rishikesh to Mussoorie 'Queen of the Hills' & Mall Road",
        location: "Mussoorie, Uttarakhand",
        morning: "Breakfast at hotel, ascend through winding mountain pine forests to Mussoorie",
        noonToEvening: "Check-in at Value & Spa Mussoorie, drive up to Lal Tibba highest viewpoint",
        evening: "Enjoy a scenic evening stroll along vibrant Mall Road and Kulri Bazaar",
        description: "Climb into the crisp mountain air of Mussoorie, perched along a 15km horseshoe ridge. Gaze upon distant snow peaks from Lal Tibba and shop for wooden crafts on Mall Road.",
        image: "/images/packages/uttarakhand/image3.png"
      },
      {
        day: 4,
        title: "Mussoorie Cascades: Kempty Fall, Bhatta Fall & Himalayan Views",
        location: "Mussoorie, Uttarakhand",
        morning: "Excursion to the thundering cascades of Kempty Falls with pool swim / ropeway",
        noonToEvening: "Visit peaceful Bhatta Falls, Mussoorie Lake, and Gun Hill viewpoint",
        evening: "Return to hotel for a warm buffet dinner overlooking the twinkling Doon Valley",
        description: "Spend a full day exploring Mussoorie's famous mountain waterfalls and scenic spots, taking in panoramic vistas of the Himalayan snowline and forested ridges.",
        image: "/images/packages/uttarakhand/image4.png"
      },
      {
        day: 5,
        title: "Scenic Mountain Drive to Jim Corbett Wildlife Sanctuary",
        location: "Jim Corbett, Uttarakhand",
        morning: "Breakfast at hotel, drive down into the forested foothills of Corbett",
        noonToEvening: "Check-in at Hotel Blue Pine Resort Jim Corbett, relax in jungle resort gardens",
        evening: "Visit Corbett Falls, historic Corbett Museum, and riverside Garjia Devi Temple",
        description: "Travel to India's oldest and most prestigious national park. Pay homage at Garjia Devi Temple situated on a colossal rock in the Kosi River surrounded by sal forests.",
        image: "/images/packages/uttarakhand/image5.png"
      },
      {
        day: 6,
        title: "Jim Corbett Safari & Transfer to Nainital Lake District",
        location: "Nainital, Uttarakhand",
        morning: "Optional early morning open Jeep Safari into Corbett Tiger Reserve (Bijrani/Jhirna)",
        noonToEvening: "Breakfast at resort, check-out and scenic mountain drive to Nainital lake district",
        evening: "Check-in at Vaapi Comfort Inn Naukuchiatal, peaceful lake walk",
        description: "Spot spotted deer, wild elephants, and elusive Bengal tigers in Corbett's sal forests before ascending to the tranquil emerald lakes of Nainital.",
        image: "/images/packages/uttarakhand/image6.png"
      },
      {
        day: 7,
        title: "Full-Day Nainital Sightseeing: Naini Lake, Snow View & Eco Caves",
        location: "Nainital, Uttarakhand",
        morning: "Boating on crescent-shaped Naini Lake, visit historic Naina Devi Temple",
        noonToEvening: "Bara Pathar horse trail, Tiffin Top, Snow View Point ropeway & Eco Cave Gardens",
        evening: "Stroll along Mall Road, visit Nainital High Altitude Zoo, evening lake dinner",
        description: "Discover the jewel of Kumaon: glide on vibrant wooden boats on Naini Lake, crawl through natural rock caves, and gaze out at Trishul and Nanda Devi peaks from Snow View.",
        image: "/images/packages/uttarakhand/image7.jpeg"
      },
      {
        day: 8,
        title: "Nainital to New Delhi Drop / Tour Concludes",
        location: "New Delhi, India",
        morning: "Breakfast at hotel, check-out and commence return drive to New Delhi",
        noonToEvening: "Comfortable drive through plains, drop at New Delhi Airport / Railway Station",
        description: "Descend from the Kumaon hills and travel back to New Delhi where you are dropped off with cherished memories of the Himalayan valleys and lakes.",
        image: "/images/packages/uttarakhand/image8.jpeg"
      }
    ]
  },

  // 24. VAISHNO DEVI & KASHMIR (7N/8D)
  {
    id: "kashmir-vaishnodevi-paradise-8d",
    destinationId: "kashmir",
    destinationName: "Vaishno Devi & Kashmir",
    title: "Vaishno Devi Holy Shrine & Kashmir Paradise",
    duration: "8 Days / 7 Nights",
    type: "Family",
    tagline: "Mata Vaishno Devi Bhawan, Dal Lake Luxury Houseboat, Gulmarg Gondola & Pahalgam Valleys",
    description: "A spiritually fulfilling and scenic holiday combining holy darshan at Shri Mata Vaishno Devi Shrine in Katra with the alpine wonders of Kashmir: glide across Dal Lake in a traditional shikara, stay in a heritage cedar-wood houseboat, ride the world-famous Gulmarg Gondola to snowcapped peaks, and stroll through Pahalgam's Betaab Valley.",
    inclusions: [
      "1 Night in Katra (Hotel Durga Residency / Royal Tirath or similar)",
      "4 Nights in Srinagar (New Classic Luxury Resort / North Land Residency or similar)",
      "2 Nights on Dal Lake (Marcopolo Group of Deluxe Houseboats or similar)",
      "Daily breakfast and dinner at all hotels and houseboat",
      "Pickup from Jammu Railway Station / Airport & drop at Srinagar Airport",
      "Vaishno Devi Yatra assistance (helicopter / battery car guidance)",
      "1-Hour complimentary Shikara boat ride on world-famous Dal Lake",
      "Srinagar Mughal Gardens tour: Nishat Bagh, Shalimar Bagh & Chashme Shahi",
      "Full-day excursion to Sonamarg 'Meadow of Gold' & Thajiwas Glacier",
      "Full-day excursion to Gulmarg with Gondola cable car ride assistance",
      "Full-day excursion to Pahalgam: Saffron fields, Awantipura ruins & Betaab Valley",
      "Private vehicle for all transfers and sightseeing throughout"
    ],
    startingStar: 3,
    priceNote: "Customizable across 3★, 4★, and 5★ luxury houseboat tiers",
    popular: true,
    coverImage: "/images/packages/kashmir/image1.jpeg",
    itinerary: [
      {
        day: 1,
        title: "Arrival Jammu / Katra & Check-in",
        location: "Katra, Jammu & Kashmir",
        morning: "Meet representative at Jammu Tawi Railway Station / Airport, transfer to Katra",
        noonToEvening: "Check-in at Hotel Durga Residency / Royal Tirath, rest and prepare for yatra",
        evening: "Collect Yatra Parchi / RFID card, evening preparation for holy trek",
        description: "Arrive at the gateway to the sacred Trikuta mountains. Settle into your hotel in Katra and prepare for the holy pilgrimage to the shrine of Mata Vaishno Devi.",
        image: "/images/packages/kashmir/image1.jpeg"
      },
      {
        day: 2,
        title: "Shri Mata Vaishno Devi Darshan & Evening Transfer to Srinagar",
        location: "Srinagar, Kashmir",
        morning: "Early morning trek / helicopter / battery car to Vaishno Devi Bhawan for sacred Darshan",
        noonToEvening: "Descend back to Katra, board vehicle for scenic drive to Srinagar through Banihal tunnel",
        evening: "Arrive in Srinagar, check-in at New Classic Luxury Resort, warm dinner",
        description: "Receive the divine blessings of Mata Vaishno Devi at the Holy Bhawan, then travel north across the Pir Panjal mountain range to the paradise valley of Srinagar.",
        image: "/images/packages/kashmir/image2.png"
      },
      {
        day: 3,
        title: "Heritage Srinagar Mughal Gardens & Dal Lake Shikara Ride",
        location: "Srinagar, Kashmir",
        morning: "Check-in to Marcopolo Deluxe Houseboat on Dal Lake, welcome Kahwa tea",
        noonToEvening: "Tour royal Mughal Gardens: Shalimar Bagh, Nishat Bagh 'Garden of Bliss', Chashme Shahi",
        evening: "Sunset Shikara ride on Dal Lake, visiting floating gardens and Nehru Park",
        description: "Check into a carved cedar-wood luxury houseboat on Dal Lake. Stroll beneath terraced fountains and chinar trees in the Mughal Gardens before a tranquil sunset shikara ride.",
        image: "/images/packages/kashmir/image3.png"
      },
      {
        day: 4,
        title: "Srinagar Local Sights & Shankaracharya Hilltop Temple",
        location: "Srinagar, Kashmir",
        morning: "Ascend Shankaracharya Hill to the ancient 9th-century Shiva temple for valley vistas",
        noonToEvening: "Visit Jamia Masjid, Hazratbal Shrine on Dal Lake, and old downtown markets",
        evening: "Explore Kashmiri handicraft workshops: pashmina shawls, walnut wood carving, carpets",
        description: "Take in the panoramic 360-degree view of Srinagar city from Shankaracharya Temple and immerse in centuries of Kashmiri artisan craft in the historic bazaar.",
        image: "/images/packages/kashmir/image4.png"
      },
      {
        day: 5,
        title: "Full-Day Alpine Excursion to Sonamarg 'Meadow of Gold'",
        location: "Sonamarg, Kashmir",
        morning: "Scenic 3-hour drive along the Sindh River flanked by towering mountain crags to Sonamarg",
        noonToEvening: "Pony ride / local union cab to snowclad Thajiwas Glacier, Zero Point at Zojila Pass",
        evening: "Return to Srinagar for a warm traditional Kashmiri dinner at your hotel",
        description: "Travel to Sonamarg at 2,740m altitude, the gateway to Ladakh. Play in year-round snow at the foot of Thajiwas Glacier surrounded by pine-covered peaks.",
        image: "/images/packages/kashmir/image5.png"
      },
      {
        day: 6,
        title: "Gulmarg Day Tour: Gondola Ride & Snowcapped Khilanmarg",
        location: "Gulmarg, Kashmir",
        morning: "Drive through apple orchards and sheep pastures to Gulmarg 'Meadow of Flowers'",
        noonToEvening: "Ride the world's 2nd-highest cable car (Gondola Phase 1 & 2) up to 13,780 ft at Apharwat Peak",
        evening: "Visit historic Maharani Shiv Temple, return to Srinagar hotel for dinner",
        description: "Ascend to premier ski resort Gulmarg. Ride the famous cable car above the clouds to Apharwat Peak for breathtaking vistas of Nanga Parbat and Pir Panjal glaciers.",
        image: "/images/packages/kashmir/image6.png"
      },
      {
        day: 7,
        title: "Pahalgam Valley of Shepherds: Saffron Fields & Betaab Valley",
        location: "Pahalgam, Kashmir",
        morning: "Scenic drive along Lidder River; stop at purple saffron fields of Pampore & Awantipura ruins",
        noonToEvening: "Explore Pahalgam 'Valley of Shepherds': excursion to Betaab Valley, Aru Valley & Chandanwari",
        evening: "Return to Srinagar hotel for farewell dinner and packing",
        description: "Visit fragrant saffron fields and 1,100-year-old temple ruins en route to Pahalgam. Wander through lush alpine meadows along the gushing Lidder River.",
        image: "/images/packages/kashmir/image7.jpeg"
      },
      {
        day: 8,
        title: "Srinagar Morning Breakfast & Airport Departure",
        location: "Srinagar, Kashmir",
        morning: "Breakfast at hotel, leisure morning for last-minute Kashmiri dry fruits & saffron shopping",
        noonToEvening: "Transfer to Srinagar International Airport for departure flight",
        description: "Bid farewell to the heavenly valley of Kashmir before your private transfer to Srinagar Airport for your return flight home.",
        image: "/images/packages/kashmir/image8.jpeg"
      }
    ]
  },

  // 25. GRAND EUROPEAN EXPLORER (8N/9D)
  {
    id: "grand-europe-5-capitals-9d",
    destinationId: "grand-europe",
    destinationName: "Grand Europe",
    title: "Grand European Explorer: 5 Iconic Capitals",
    duration: "9 Days / 8 Nights",
    type: "Explorer",
    tagline: "Vienna Hofburg, Budapest Danube, Prague Astronomical Clock, Frankfurt & Amsterdam Canals",
    description: "An epic grand rail and coach journey connecting 5 of Europe's greatest cultural capitals: imperial Vienna, radiant Budapest on the Danube, fairy-tale Prague, financial powerhouse Frankfurt on the Main, and the world-famous canal-ringed city of Amsterdam.",
    inclusions: [
      "2 Nights in Vienna (Moxy Vienna City East or similar)",
      "2 Nights in Budapest (Mercure Budapest Castle Hill or similar)",
      "2 Nights in Prague (Panorama Hotel Prague or similar)",
      "1 Night in Frankfurt (Ibis Frankfurt City Messe or similar)",
      "1 Night in Amsterdam (Ibis Amsterdam City West or similar)",
      "Daily European buffet breakfast at all hotels",
      "Guided city tours of Vienna, Budapest, and Prague",
      "Danube River panoramic cruise in Budapest",
      "Vltava River cruise in Prague",
      "Scenic drive along the Rhine River Valley with Frankfurt orientation",
      "Amsterdam 1-Hour glass-topped Canal Cruise & Zaanse Schans windmill tour",
      "All luxury intercity coach transfers and airport transfers"
    ],
    startingStar: 3,
    priceNote: "Customizable across 3★, 4★, and 5★ European grand hotel tiers",
    popular: true,
    coverImage: "/images/packages/grand-europe/image1.jpeg",
    itinerary: [
      {
        day: 1,
        title: "Welcome to Vienna / Transfer to Hotel",
        location: "Vienna, Austria",
        morning: "Arrival at Vienna International Airport, meet driver and transfer to hotel",
        noonToEvening: "Check-in at Moxy Vienna City East, unpack and refresh",
        evening: "Evening orientation stroll along Kärntner Strasse to St. Stephen's Cathedral",
        description: "Welcome to Austria's imperial capital. Transfer to your hotel and spend your first evening soaking in Vienna's classical coffeehouse elegance and Gothic cathedral plazas.",
        image: "/images/packages/grand-europe/image1.jpeg"
      },
      {
        day: 2,
        title: "Vienna Imperial Ringstrasse, Schönbrunn & Grinzing",
        location: "Vienna, Austria",
        morning: "Guided panoramic tour along the Ringstrasse: State Opera, Hofburg Palace & Parliament",
        noonToEvening: "Visit Schönbrunn Palace gardens, summer imperial residence of the Habsburgs",
        evening: "Transfer to traditional wine-tavern district Grinzing for local dining",
        description: "Discover Vienna's imperial majesty, from grand boulevard monuments to the opulent baroque gardens of Empress Maria Theresa at Schönbrunn.",
        image: "/images/packages/grand-europe/image2.png"
      },
      {
        day: 3,
        title: "Scenic Drive to Budapest & Danube Evening River Cruise",
        location: "Budapest, Hungary",
        morning: "Scenic highway transfer across the Hungarian plains to radiant Budapest",
        noonToEvening: "Check-in at Mercure Budapest Castle Hill, walk along the Danube promenade",
        evening: "Illuminated Danube River evening cruise past the glowing Hungarian Parliament Building",
        description: "Travel east along the Danube to the 'Pearl of the Danube'. Watch Budapest's monumental bridges and neo-Gothic Parliament light up during a romantic evening cruise.",
        image: "/images/packages/grand-europe/image3.jpeg"
      },
      {
        day: 4,
        title: "Budapest Castle Hill, Parliament & Transfer to Prague",
        location: "Prague, Czech Republic",
        morning: "Guided tour of Buda Castle, Fisherman's Bastion & Matthias Church with river panoramas",
        noonToEvening: "Heroes' Square and St. Stephen's Basilica, cross Slovakia to the Czech Republic",
        evening: "Arrive in Prague 'City of a Hundred Spires', check-in at Panorama Hotel Prague",
        description: "Take in the fairy-tale turrets of Fisherman's Bastion before traveling across Central Europe to the Gothic and Baroque wonderland of Prague.",
        image: "/images/packages/grand-europe/image4.jpeg"
      },
      {
        day: 5,
        title: "Prague Fairy-Tale Discovery: Old Town Square & Charles Bridge",
        location: "Prague, Czech Republic",
        morning: "Walking tour through Old Town Square: watch the 600-year-old Astronomical Clock chime",
        noonToEvening: "Stroll across statue-lined Charles Bridge over the Vltava River, explore Jewish Quarter",
        evening: "Vltava River cruise with dinner views of illuminated Prague Castle on the hill",
        description: "Immerse in Prague's magical medieval heart. Cross iconic Charles Bridge, wander cobblestone alleyways, and admire gothic spires rising over the river.",
        image: "/images/packages/grand-europe/image5.jpeg"
      },
      {
        day: 6,
        title: "Prague Castle Stroll & Cross Germany to Frankfurt",
        location: "Frankfurt, Germany",
        morning: "Visit colossal Prague Castle complex and St. Vitus Cathedral",
        noonToEvening: "Cross the German border, scenic drive through Bavaria into Hesse to Frankfurt",
        evening: "Check-in at Ibis Frankfurt City Messe, evening stroll along the River Main skyline",
        description: "Explore the ancient stronghold of Bohemian kings at Prague Castle before traveling into Germany to Frankfurt, Europe's dynamic financial and cultural gateway.",
        image: "/images/packages/grand-europe/image6.jpeg"
      },
      {
        day: 7,
        title: "Frankfurt Roemerberg Plaza to Amsterdam Dutch Canals",
        location: "Amsterdam, Netherlands",
        morning: "Morning walking tour of historic Frankfurt: half-timbered Roemerberg square & cathedral",
        noonToEvening: "Scenic coach journey following the Rhine valley north across the Dutch border",
        evening: "Arrive in Amsterdam, check-in at Ibis Amsterdam City West, evening canal stroll",
        description: "Discover Frankfurt's restored medieval town hall before driving through lush river landscapes into the Netherlands to the charming canal-lined capital of Amsterdam.",
        image: "/images/packages/grand-europe/image7.jpeg"
      },
      {
        day: 8,
        title: "Amsterdam Glass-Topped Canal Cruise & Dam Square",
        location: "Amsterdam, Netherlands",
        morning: "1-Hour classic glass-topped Canal Cruise through UNESCO Golden Age waterways",
        noonToEvening: "Explore historic Dam Square, Royal Palace, flower market & Museumplein (Rijksmuseum)",
        evening: "Farewell Dutch dinner, evening stroll along the illuminated Jordaan bridges",
        description: "Experience Amsterdam from its iconic waterways, gliding past 17th-century merchant mansions, stone humpback bridges, houseboats, and lively market plazas.",
        image: "/images/packages/grand-europe/image8.jpeg"
      },
      {
        day: 9,
        title: "Amsterdam Schiphol Airport Departure / Tour Concludes",
        location: "Amsterdam, Netherlands",
        morning: "Breakfast at hotel, leisure morning for last-minute Dutch cheese and tulip bulb shopping",
        noonToEvening: "Transfer to Amsterdam Schiphol Airport for your flight back home",
        description: "Savor your final Dutch pastries before your private coach transfer to Schiphol Airport, concluding an epic multi-capital grand European journey.",
        image: "/images/packages/grand-europe/image9.jpeg"
      }
    ]
  },

  // 26. VIETNAM NORTH TO SOUTH (5N/6D)
  {
    id: "vietnam-north-to-south-6d",
    destinationId: "vietnam",
    destinationName: "Vietnam",
    title: "Vietnam North to South Heritage & Dynamic Metropolis",
    duration: "6 Days / 5 Nights",
    type: "Explorer",
    tagline: "Hanoi French Quarter, Halong Bay Overnight Cruise, Saigon Cu Chi Tunnels & Mekong Delta",
    description: "From Hanoi's ancient merchant guilds and the emerald waters of Halong Bay to the buzzing boulevards of Ho Chi Minh City: cruise among limestone karst towers aboard a luxury junk boat, explore the historic Cu Chi guerrilla tunnels, and navigate the floating coconut waterways of the Mekong Delta.",
    inclusions: [
      "1 Night in Hanoi (Moonview Hotel or similar)",
      "1 Night aboard Luxury Halong Bay Cruise (La Regina Classic Cruise with private balcony cabin)",
      "3 Nights in Ho Chi Minh City (White Lotus Hotel or similar)",
      "Daily breakfast + 3 Special Vietnamese lunches + 1 Seafood cruise dinner",
      "Full Halong Bay cruise itinerary: kayaking, Sung Sot Cave & sunset cooking class",
      "Domestic flight ticket from Hanoi to Ho Chi Minh City",
      "Cu Chi Tunnels half-day guided underground tour",
      "Full-Day Mekong Delta excursion (My Tho, Ben Tre & sampan boat ride)",
      "All airport and harbor transfers in private AC vehicle"
    ],
    startingStar: 4,
    priceNote: "Customizable across 3★, 4★, and 5★ colonial heritage tiers",
    popular: true,
    coverImage: "/images/packages/vietnam/image1.jpeg",
    itinerary: [
      {
        day: 1,
        title: "Welcome to Hanoi & Old Quarter Cyclo Ride",
        location: "Hanoi, Vietnam",
        morning: "Arrival at Noi Bai International Airport, meet English-speaking guide and transfer",
        noonToEvening: "Check-in at Moonview Hotel Hanoi, rest after your flight",
        evening: "1-Hour traditional cyclo ride through the bustling 36 Streets of Hanoi Old Quarter",
        description: "Welcome to Vietnam! Settle into your hotel and embark on a quintessential cyclo ride through the ancient guild streets of Hanoi's vibrant Old Quarter around Hoan Kiem Lake.",
        image: "/images/packages/vietnam/image1.jpeg"
      },
      {
        day: 2,
        title: "Scenic Drive to Halong Bay & Overnight Luxury Cruise",
        location: "Halong Bay, Vietnam",
        morning: "Scenic drive through the Red River Delta to Tuan Chau Marina, Halong Bay",
        noonToEvening: "Board La Regina Classic Cruise, welcome drink, seafood buffet lunch while cruising",
        evening: "Kayaking through karst grottos, swim at Ti Top beach, sunset cooking demonstration & gala dinner",
        description: "Sail into the UNESCO World Heritage wonderland of Halong Bay among thousands of towering limestone pillars. Kayak through hidden sea grottos and sleep under the stars aboard your luxury cruiser.",
        image: "/images/packages/vietnam/image2.png"
      },
      {
        day: 3,
        title: "Halong Dawn Tai Chi, Fly to Ho Chi Minh City",
        location: "Ho Chi Minh City, Vietnam",
        morning: "Sunrise Tai Chi on sundeck, explore Sung Sot (Surprise) Cave's colossal chambers",
        noonToEvening: "Brunch while cruising back to port, transfer to Hanoi airport for flight to Saigon",
        evening: "Arrive in Ho Chi Minh City, check-in at White Lotus Hotel, evening stroll along Dong Khoi",
        description: "Greet the dawn over misty karst peaks with Tai Chi before exploring Surprise Cave. Fly south to dynamic Ho Chi Minh City (Saigon) and discover its French-colonial boulevards.",
        image: "/images/packages/vietnam/image3.jpeg"
      },
      {
        day: 4,
        title: "Historic Cu Chi Tunnels & Saigon City Tour",
        location: "Ho Chi Minh City, Vietnam",
        morning: "Guided underground excursion to the famous 250km network of Cu Chi Tunnels",
        noonToEvening: "Return to Saigon: visit War Remnants Museum, Reunification Palace, Notre Dame Cathedral",
        evening: "Photograph the French-designed Central Post Office and Opera House, local dinner",
        description: "Crawl into the legendary wartime guerrilla tunnel network of Cu Chi, then return to central Saigon to marvel at historic colonial architecture and moving wartime exhibitions.",
        image: "/images/packages/vietnam/image4.png"
      },
      {
        day: 5,
        title: "Full-Day Mekong Delta River Safari with Lunch",
        location: "Mekong Delta, Vietnam",
        morning: "Scenic drive to My Tho in the fertile heart of the Mekong Delta river basin",
        noonToEvening: "Cruise the Mekong River, take a hand-rowed wooden sampan through shaded palm canals",
        evening: "Visit coconut candy workshops, enjoy tropical fruit tasting, traditional folk music & lunch",
        description: "Experience the vibrant river life of the Mekong Delta. Drift beneath water coconut palms in a traditional wooden sampan, visit honeybee farms, and savor elephant-ear fish.",
        image: "/images/packages/vietnam/image5.jpeg"
      },
      {
        day: 6,
        title: "Ben Thanh Market Souvenirs & Airport Transfer",
        location: "Ho Chi Minh City, Vietnam",
        morning: "Breakfast at hotel, shopping for Vietnamese coffee, silk, and ceramics at Ben Thanh Market",
        noonToEvening: "Check-out and private transfer to Tan Son Nhat International Airport for flight home",
        description: "Enjoy a final Vietnamese iced coffee (Ca Phe Sua Da) and pick up handcraft souvenirs before your private transfer to the airport concludes an incredible journey.",
        image: "/images/packages/vietnam/image6.png"
      }
    ]
  },

  // 27. VIETNAM: HANOI & HALONG BAY (4N/5D)
  {
    id: "vietnam-hanoi-halong-bay-5d",
    destinationId: "vietnam-hanoi-halong",
    destinationName: "Vietnam - Hanoi & Halong",
    title: "Hanoi Highlights & Halong Bay Luxury Cruise",
    duration: "5 Days / 4 Nights",
    type: "Luxury",
    tagline: "Hanoi French Boulevards, Ninh Binh Trang An Waterways & 5-Star Halong Cruise",
    description: "The premier northern Vietnam getaway: immerse in the street food and French-colonial charm of Hanoi's 36 Old Quarter streets, row through the dramatic river caves of Ninh Binh Trang An (the 'Inland Halong Bay'), and spend a magical night cruising emerald Halong Bay aboard a 5-star ship.",
    inclusions: [
      "3 Nights in Hanoi (Moonview Hotel / The Ann Hanoi or similar)",
      "1 Night aboard Luxury Halong Bay Cruise (La Regina Classic Cruise)",
      "Daily breakfast + 3 authentic Vietnamese lunches + 1 Gala cruise dinner",
      "Hanoi city tour: Ho Chi Minh Mausoleum, One Pillar Pagoda & Temple of Literature",
      "Full-day Ninh Binh Trang An boat tour & Hang Mua Dragon Peak climb",
      "Overnight Halong Bay Cruise: Ti Top Island beach, kayaking & pearl farm visit",
      "Round-trip luxury limousine coach transfers between Hanoi and Halong Bay",
      "Noi Bai Hanoi Airport round-trip transfers"
    ],
    startingStar: 4,
    priceNote: "Customizable across 3★, 4★, and 5★ boutique luxury tiers",
    popular: true,
    coverImage: "/images/packages/vietnam-hanoi-halong/image1.jpeg",
    itinerary: [
      {
        day: 1,
        title: "Arrival Hanoi & Hoan Kiem Lake Stroll",
        location: "Hanoi, Vietnam",
        morning: "Arrival at Noi Bai Airport, welcome by local guide and transfer to hotel",
        noonToEvening: "Check-in at Moonview Hotel, leisure afternoon around Hoan Kiem Lake & Ngoc Son Temple",
        evening: "Evening street food tasting tour through the bustling Old Quarter alleyways",
        description: "Welcome to thousand-year-old Hanoi. Walk around serene Sword Lake, cross the red wooden Huc Bridge to Ngoc Son Temple, and savor steaming bowls of authentic pho.",
        image: "/images/packages/vietnam-hanoi-halong/image1.jpeg"
      },
      {
        day: 2,
        title: "Full-Day Ninh Binh Trang An River Caves & Hang Mua Peak",
        location: "Ninh Binh, Vietnam",
        morning: "Scenic drive south to UNESCO-listed Trang An eco-tourism complex",
        noonToEvening: "Rowed bamboo boat through mystical river water caves, climb Hang Mua Dragon Peak",
        evening: "Enjoy panoramic views over Tam Coc valleys, return to Hanoi for dinner",
        description: "Discover the breathtaking limestone landscape of 'Inland Halong Bay'. Drift on quiet emerald rivers through cavernous tunnels and ascend 500 stone steps for epic mountain views.",
        image: "/images/packages/vietnam-hanoi-halong/image2.png"
      },
      {
        day: 3,
        title: "Journey to Halong Bay & Luxury Overnight Cruise",
        location: "Halong Bay, Vietnam",
        morning: "Luxury limousine transfer through rural rice paddies to Halong Bay marina",
        noonToEvening: "Board La Regina Cruise, enjoy welcome drink and gourmet lunch cruising among karst islands",
        evening: "Kayaking around Luon Cave, beach time on Ti Top Island, sunset party & seafood dinner",
        description: "Board an opulent cruise vessel and glide across tranquil emerald waters surrounded by thousands of limestone formations. Kayak under sea arches and swim off sandy island shores.",
        image: "/images/packages/vietnam-hanoi-halong/image3.png"
      },
      {
        day: 4,
        title: "Morning Tai Chi, Sung Sot Cave & Return to Hanoi",
        location: "Hanoi, Vietnam",
        morning: "Sundeck Tai Chi class at sunrise, explore colossal stalactites of Sung Sot (Surprise) Cave",
        noonToEvening: "Brunch while sailing past Fighting Cocks islet, disembark and limousine transfer to Hanoi",
        evening: "Check-in at Moonview Hotel, evening shopping at Dong Xuan Night Market",
        description: "Marvel at cathedral-sized chambers inside Sung Sot Cave before sailing back to harbor. Relax in comfort on the express highway return to your Hanoi hotel.",
        image: "/images/packages/vietnam-hanoi-halong/image4.png"
      },
      {
        day: 5,
        title: "Hanoi French Quarter Highlights & Airport Departure",
        location: "Hanoi, Vietnam",
        morning: "Visit Ho Chi Minh Mausoleum complex, One Pillar Pagoda & Temple of Literature",
        noonToEvening: "Stroll tree-lined French Quarter boulevards before private transfer to airport",
        description: "Tour Vietnam's first imperial university (Temple of Literature) and royal pagodas before your private transfer to Noi Bai Airport completes an unforgettable getaway.",
        image: "/images/packages/vietnam-hanoi-halong/image5.png"
      }
    ]
  }
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
