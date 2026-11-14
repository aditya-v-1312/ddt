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
