export interface HotelOption {
  name: string;
  stars: 2 | 3 | 4 | 5;
  location: string;
  tagline: string;
  features: string[];
  lastMinuteAvailable?: boolean;
}

export interface DestinationHotels {
  destinationId: string;
  destinationName: string;
  country: string;
  hotels: {
    star5: HotelOption[];
    star4: HotelOption[];
    star3: HotelOption[];
    star2: HotelOption[];
  };
}

export const destinationHotels: DestinationHotels[] = [
  {
    destinationId: "dubai",
    destinationName: "Dubai",
    country: "United Arab Emirates",
    hotels: {
      star5: [
        {
          name: "Atlantis The Royal / Atlantis The Palm",
          stars: 5,
          location: "Palm Jumeirah",
          tagline: "Ultra-luxury architectural icon with Michelin dining & Aquaventure access",
          features: ["Private Beach", "Sky Pool", "Butler Service", "Celebrity Restaurants"],
          lastMinuteAvailable: true,
        },
        {
          name: "Burj Al Arab Jumeirah",
          stars: 5,
          location: "Umm Suqeim Beach",
          tagline: "The world's most iconic 7-star standard royal all-suite hotel",
          features: ["Private Helipad", "Duplex Suites", "Hermès Amenities", "Chauffeur Rolls-Royce"],
          lastMinuteAvailable: true,
        },
        {
          name: "JW Marriott Marquis Hotel",
          stars: 5,
          location: "Business Bay / Downtown",
          tagline: "Twin-tower luxury with panoramic Burj Khalifa views and 12 award-winning dining venues",
          features: ["Saray Spa", "Heated Pool", "Direct Canal Walk", "VIP Executive Lounge"],
          lastMinuteAvailable: true,
        },
      ],
      star4: [
        {
          name: "Aloft Palm Jumeirah",
          stars: 4,
          location: "East Crescent, Palm Jumeirah",
          tagline: "Chic beachfront resort with vibrant rooftop lounge and private beach access",
          features: ["Private Beach Strip", "Luchador Rooftop", "Infinity Pool", "Kids Zone"],
          lastMinuteAvailable: true,
        },
        {
          name: "Novotel World Trade Centre",
          stars: 4,
          location: "Sheikh Zayed Road",
          tagline: "Prime central business & leisure hub connected to Dubai Metro",
          features: ["Outdoor Pool", "Metro Access", "Live Music Bar", "Executive Desks"],
          lastMinuteAvailable: true,
        },
        {
          name: "Millennium Place Dubai Marina",
          stars: 4,
          location: "Dubai Marina",
          tagline: "Overlooking marina yachts with walking distance to JBR Beach",
          features: ["Marina Views", "Infinity Pool", "MasterChef Dining", "Free Beach Shuttle"],
          lastMinuteAvailable: true,
        },
      ],
      star3: [
        {
          name: "Rove Downtown Dubai",
          stars: 3,
          location: "Downtown Dubai",
          tagline: "Trendy, contemporary lifestyle hotel facing Burj Khalifa & Dubai Mall",
          features: ["Reel Boutique Cinema", "Saltwater Pool", "24/7 Laundromat", "Late Check-out"],
          lastMinuteAvailable: true,
        },
        {
          name: "Holiday Inn Express Dubai Airport",
          stars: 3,
          location: "Opposite Terminal 3",
          tagline: "Reliable, comfortable transit stay with complimentary 24hr airport transfers",
          features: ["Free Airport Shuttle", "Hot Breakfast Included", "Fitness Centre", "Express Check-in"],
          lastMinuteAvailable: true,
        },
        {
          name: "Citymax Hotel Bur Dubai",
          stars: 3,
          location: "Bur Dubai Heritage District",
          tagline: "High-value central stay near traditional souks and Meena Bazaar",
          features: ["Rooftop Pool", "Sports Bar", "Indian Dining", "Metro Nearby"],
          lastMinuteAvailable: true,
        },
      ],
      star2: [
        {
          name: "Ibis One Central",
          stars: 2,
          location: "World Trade Centre",
          tagline: "Clean, modern, soundproofed value rooms next to metro station",
          features: ["Soundproof SweetBed", "Cuban Themed Bar", "Free High-Speed Wi-Fi", "24h Reception"],
          lastMinuteAvailable: true,
        },
        {
          name: "Holiday Inn Express Safa Park",
          stars: 2,
          location: "Sheikh Zayed Road",
          tagline: "Smart budget lodging close to Business Bay and Jumeirah Beach",
          features: ["Buffet Breakfast", "Business Kiosk", "Clean Workstations", "Metro Shuttle"],
          lastMinuteAvailable: true,
        },
      ],
    },
  },
  {
    destinationId: "europe",
    destinationName: "Switzerland & Europe",
    country: "Switzerland & France",
    hotels: {
      star5: [
        {
          name: "Badrutt's Palace Hotel / The Dolder Grand",
          stars: 5,
          location: "St. Moritz / Zurich",
          tagline: "Legendary alpine fairy-tale grandeur with world-class spa and private ski valet",
          features: ["Alpine Lake Views", "Michelin Star Dining", "Private Rolls-Royce", "Heated Outdoor Spa"],
          lastMinuteAvailable: true,
        },
        {
          name: "Victoria-Jungfrau Grand Hotel & Spa",
          stars: 5,
          location: "Interlaken",
          tagline: "Historic luxury nestled between Lake Thun and Lake Brienz facing Jungfrau peak",
          features: ["5,500m² Nescens Spa", "Grand Restaurant", "Private Mountain Guides", "Tennis Courts"],
          lastMinuteAvailable: true,
        },
        {
          name: "Ritz Paris / Four Seasons George V",
          stars: 5,
          location: "Place Vendôme, Paris",
          tagline: "The pinnacle of French haute-couture luxury and timeless aristocratic elegance",
          features: ["Chanel Spa", "Bar Hemingway", "Private Courtyard Gardens", "Bespoke Concierge"],
          lastMinuteAvailable: true,
        },
      ],
      star4: [
        {
          name: "Radisson Blu Hotel Zurich Airport",
          stars: 4,
          location: "Zurich Airport",
          tagline: "Directly connected to passenger terminals and high-speed rail to Zurich downtown",
          features: ["Wine Tower Show", "Soundproof Panoramic Rooms", "Airport Terminal Walkway", "Fitness Club"],
          lastMinuteAvailable: true,
        },
        {
          name: "Hotel Schweizerhof Luzern",
          stars: 4,
          location: "Lucerne Lake Promenade",
          tagline: "175-year-old family-run festival hotel overlooking Lake Lucerne and Mount Pilatus",
          features: ["Lakefront Balconies", "Historic Ballrooms", "Wellness Suite", "Rail Station 5min"],
          lastMinuteAvailable: true,
        },
        {
          name: "Mercure Paris Centre Tour Eiffel",
          stars: 4,
          location: "7th Arrondissement, Paris",
          tagline: "Steps away from Eiffel Tower with private garden terrace and Seine river proximity",
          features: ["Eiffel Tower Views", "Fitness Room", "Boutique Wine Bar", "Metro Bir-Hakeim 2min"],
          lastMinuteAvailable: true,
        },
      ],
      star3: [
        {
          name: "Hotel ibis Styles Luzern City",
          stars: 3,
          location: "Lucerne Old Town",
          tagline: "Vibrant, design-led boutique comfort near Lion Monument and Chapel Bridge",
          features: ["Complimentary Breakfast", "Modern Art Decor", "Family Rooms", "Historic Walkways"],
          lastMinuteAvailable: true,
        },
        {
          name: "Hotel Bernerhof Interlaken",
          stars: 3,
          location: "Interlaken West",
          tagline: "Swiss-chalet style traditional hotel right beside rail departures for Jungfrau",
          features: ["Opposite Train Station", "Swiss Breakfast Buffet", "Ski Storage", "Mountain Balconies"],
          lastMinuteAvailable: true,
        },
      ],
      star2: [
        {
          name: "Ibis Budget Zurich City West",
          stars: 2,
          location: "Zurich West",
          tagline: "Efficient, sparkling-clean Swiss budget stay with tram lines right at doorstep",
          features: ["24/7 Check-in", "SweetBed by Ibis", "High-speed Wi-Fi", "Tram into City Centre (10 min)"],
          lastMinuteAvailable: true,
        },
        {
          name: "B&B Hotel Paris Porte de la Villette",
          stars: 2,
          location: "Paris North / Metro",
          tagline: "Clean, quiet, and secure French budget lodging with air conditioning",
          features: ["Private Ensuite Bathrooms", "Soundproof Rooms", "Metro Direct to Châtelet", "Affordable Parking"],
          lastMinuteAvailable: true,
        },
      ],
    },
  },
  {
    destinationId: "maldives",
    destinationName: "Maldives",
    country: "Maldives",
    hotels: {
      star5: [
        {
          name: "Soneva Jani / Anantara Kihavah",
          stars: 5,
          location: "Noonu / Baa Atoll (UNESCO Reserve)",
          tagline: "Ultra-luxury water retreats with retractable roofs for stargazing and private ocean slides",
          features: ["Water Slides into Lagoon", "Undersea Restaurant", "Barefoot Butler", "Private Infinity Pool"],
          lastMinuteAvailable: true,
        },
        {
          name: "OZEN Life Maadhoo",
          stars: 5,
          location: "South Malé Atoll",
          tagline: "Exclusive luxury all-inclusive plan with underwater dining at M6m",
          features: ["All-Inclusive Champagne Plan", "Underwater Dining", "Speedboat Transfer", "Overwater Spa"],
          lastMinuteAvailable: true,
        },
      ],
      star4: [
        {
          name: "Centara Ras Fushi Resort & Spa",
          stars: 4,
          location: "North Malé Atoll",
          tagline: "Adult-oriented sanctuary ideal for honeymooners with vibrant coral reef snorkeling",
          features: ["Overwater Bungalows", "PADI Diving", "Sunset Ocean Bar", "Spa Cenvaree"],
          lastMinuteAvailable: true,
        },
        {
          name: "Adaaran Select Hudhuranfushi",
          stars: 4,
          location: "Lhohifushi Island",
          tagline: "Lush tropical island paradise celebrated for white beaches and premier surfing",
          features: ["Beach Villas", "Surfing & Snorkeling", "All-Inclusive Dining", "Kids Club"],
          lastMinuteAvailable: true,
        },
      ],
      star3: [
        {
          name: "Kaani Palm Beach",
          stars: 3,
          location: "Maafushi Island",
          tagline: "Premier beachfront lifestyle hotel with the tallest rooftop infinity pool in Maldives",
          features: ["Rooftop Ocean Pool", "Direct Bikini Beach", "Dolphin & Nurse Shark Tours", "Local Island Culture"],
          lastMinuteAvailable: true,
        },
        {
          name: "Arena Beach Hotel",
          stars: 3,
          location: "Maafushi Island",
          tagline: "High-energy beachfront resort offering watersports and romantic sandbank excursions",
          features: ["Beachside Buffet", "Scuba Diving Centre", "Deluxe Balcony Rooms", "Speedboat Transfer"],
          lastMinuteAvailable: true,
        },
      ],
      star2: [
        {
          name: "UI Hotels & Inn",
          stars: 2,
          location: "Hulhumale Beachfront",
          tagline: "Clean, friendly transit stay right along the turquoise Hulhumale shoreline",
          features: ["Airport Pickup (10 min)", "Rooftop Terrace", "Bicycle Rental", "Budget Island Excursions"],
          lastMinuteAvailable: true,
        },
        {
          name: "Beach Sunrise Inn",
          stars: 2,
          location: "Hulhumale",
          tagline: "Cozy local guesthouse steps from the public beach, ideal for transit or smart budget trips",
          features: ["Air Conditioned Rooms", "Free Wi-Fi", "Continental Breakfast", "Water Excursion Booking"],
          lastMinuteAvailable: true,
        },
      ],
    },
  },
  {
    destinationId: "bali",
    destinationName: "Bali",
    country: "Indonesia",
    hotels: {
      star5: [
        {
          name: "Bulgari Resort Bali / The Mulia Nusa Dua",
          stars: 5,
          location: "Uluwatu & Nusa Dua",
          tagline: "Dramatic 150m cliffside ocean luxury with private pools and secluded white sand beach",
          features: ["Funicular Beach Access", "Private Plunge Pools", "Italian Fine Dining", "Oceanfront Spa"],
          lastMinuteAvailable: true,
        },
        {
          name: "Viceroy Bali / Hanging Gardens Ubud",
          stars: 5,
          location: "Ubud Valley of the Kings",
          tagline: "Iconic multi-tiered jungle infinity pools overlooking sacred Petanu River gorge",
          features: ["Helipad", "Jungle Infinity Pools", "CasCades Fine Dining", "Private Yoga Pavilions"],
          lastMinuteAvailable: true,
        },
      ],
      star4: [
        {
          name: "Courtyard by Marriott Bali Seminyak Resort",
          stars: 4,
          location: "Seminyak",
          tagline: "Vibrant tropical retreat walking distance to Seminyak Beach and boutique dining",
          features: ["Tiered Lagoon Pool", "What The Truck Dining", "Kids Club", "Zanti The Retreat Spa"],
          lastMinuteAvailable: true,
        },
        {
          name: "Maya Ubud Resort & Spa",
          stars: 4,
          location: "Ubud River Sanctuary",
          tagline: "Peaceful 10-hectare rainforest sanctuary bordered by the Petanu River valley",
          features: ["River Valley Spa", "Infinity Pools", "Free Ubud Town Shuttle", "Organic Herbal Gardens"],
          lastMinuteAvailable: true,
        },
      ],
      star3: [
        {
          name: "Best Western Kuta Villa",
          stars: 3,
          location: "Kuta / Tuban",
          tagline: "Tranquil Balinese courtyard villas with private plunge pools at incredible value",
          features: ["Private Villa Plunge Pools", "Traditional Balinese Spa", "Chill Lounge", "Close to Airport"],
          lastMinuteAvailable: true,
        },
        {
          name: "Swiss-Belresort Watu Jimbar",
          stars: 3,
          location: "Sanur Coastal Village",
          tagline: "Relaxed coastal resort centered around a turquoise lagoon pool with swim-up bar",
          features: ["Lagoon Pool with Swim-up Bar", "Sanur Beach (5 min walk)", "Day Spa", "Spacious Balconies"],
          lastMinuteAvailable: true,
        },
      ],
      star2: [
        {
          name: "POP! Hotel Kuta Beach",
          stars: 2,
          location: "Kuta Beach Walk",
          tagline: "Fun, vibrant, eco-conscious budget rooms just 5 minutes stroll to surf breaks",
          features: ["Outdoor Dip Pool", "Free Morning Quick Bites", "Air Conditioned Pods", "Walking Distance to Beach"],
          lastMinuteAvailable: true,
        },
        {
          name: "Cara Cara Inn",
          stars: 2,
          location: "Kuta Central",
          tagline: "Boutique bohemian hostel-hotel with water slides, hammocks, and social cafe",
          features: ["Rooftop Pool & Slide", "Boutique Bunk & Private Rooms", "Luggage Storage", "24/7 Security"],
          lastMinuteAvailable: true,
        },
      ],
    },
  },
  {
    destinationId: "kashmir",
    destinationName: "Kashmir",
    country: "India",
    hotels: {
      star5: [
        {
          name: "The Khyber Himalayan Resort & Spa",
          stars: 5,
          location: "Gulmarg",
          tagline: "India's premier luxury ski resort located 8,825 feet high with heated glass pool facing Apharwat",
          features: ["Heated Glass Pool", "L'Occitane Spa", "Ski-in Ski-out Access", "Fine Dining Clove"],
          lastMinuteAvailable: true,
        },
        {
          name: "Vivanta Dal View Srinagar",
          stars: 5,
          location: "Kralsangri, Srinagar",
          tagline: "Perched high on Kralsangri hill with breathtaking 270-degree panoramic views of Dal Lake",
          features: ["Valley Infinity Pool", "Wazwan Specialties", "Heritage Architecture", "Private Pine Grounds"],
          lastMinuteAvailable: true,
        },
      ],
      star4: [
        {
          name: "Heritage Cedar Super Deluxe Houseboat",
          stars: 4,
          location: "Nigeen Lake / Dal Lake",
          tagline: "Handcrafted century-old cedarwood royal suites with private shikara and personal butler",
          features: ["Carved Walnut Wood Paneling", "Private Shikara Transfers", "Traditional Wazwan Cook", "Lake Sun-Deck"],
          lastMinuteAvailable: true,
        },
        {
          name: "Hotel Heevan Pahalgam",
          stars: 4,
          location: "Lidder River Bank, Pahalgam",
          tagline: "Nestled along the rushing Lidder river surrounded by fragrant pine hills",
          features: ["Lidder Riverbank Dining", "Heated Bedrooms", "Garden Fireplaces", "Lush Lawn Walks"],
          lastMinuteAvailable: true,
        },
      ],
      star3: [
        {
          name: "Hotel Pine Spring",
          stars: 3,
          location: "Gulmarg / Pahalgam",
          tagline: "Cozy mountain lodge with warm wooden interiors and central heating",
          features: ["Central Heating", "Multi-Cuisine Restaurant", "Mountain Views", "Gondola Assistance"],
          lastMinuteAvailable: true,
        },
        {
          name: "Grand Mumtaz Srinagar",
          stars: 3,
          location: "MA Road, Srinagar",
          tagline: "Centrally positioned near historic polo grounds and Lal Chowk markets",
          features: ["Kashmiri Craft Shop", "Heated Rooms", "24/7 Room Service", "Conference Hall"],
          lastMinuteAvailable: true,
        },
      ],
      star2: [
        {
          name: "Deluxe Family Houseboat (Vetted)",
          stars: 2,
          location: "Dal Lake Ghat 7",
          tagline: "Clean, authentic Kashmiri family houseboat with warm hospitality and lake views",
          features: ["Private Attached Bath", "Shikara Pick & Drop", "Homecooked Meals", "Hot Water Supply"],
          lastMinuteAvailable: true,
        },
        {
          name: "Hotel Mount View Pahalgam",
          stars: 2,
          location: "Pahalgam Market",
          tagline: "Clean budget hotel close to taxi stands and local market with pine views",
          features: ["Hot Water Supply", "Vegetarian Kitchen", "Travel Desk", "Quiet Valley Setting"],
          lastMinuteAvailable: true,
        },
      ],
    },
  },
  {
    destinationId: "kerala",
    destinationName: "Kerala",
    country: "India",
    hotels: {
      star5: [
        {
          name: "Kumarakom Lake Resort",
          stars: 5,
          location: "Vembanad Lake, Kumarakom",
          tagline: "Heritage villas reconstructed from traditional 16th-century ancestral Kerala manors",
          features: ["250m Meandering Pool", "Ayurmana Spa", "Private Plunge Pools", "Sunset Cruises"],
          lastMinuteAvailable: true,
        },
        {
          name: "Brunton Boatyard / The Leela Kovalam",
          stars: 5,
          location: "Fort Kochi & Kovalam",
          tagline: "Victorian shipyard grandeur with ocean-facing cliffside suites and seafood gastronomy",
          features: ["Cliffside Ocean Pools", "Ayurvedic Doctors", "Harbour Dolphin Views", "Colonial History"],
          lastMinuteAvailable: true,
        },
      ],
      star4: [
        {
          name: "Premium Air-Conditioned Private Houseboat",
          stars: 4,
          location: "Alleppey Backwaters",
          tagline: "Private kettuvallam cruise with onboard chef, glass-walled bedroom, and upper deck lounge",
          features: ["Private Onboard Chef", "AC Bedrooms", "Upper Observation Deck", "Canoe Village Safari"],
          lastMinuteAvailable: true,
        },
        {
          name: "Fragrant Nature Munnar",
          stars: 4,
          location: "Pothamedu, Munnar",
          tagline: "Boutique mountain sanctuary perched amidst mist-covered tea plantations with fireplaces",
          features: ["In-room Fireplaces", "Tea Garden Vistas", "Prana Spa", "Trekking Guides"],
          lastMinuteAvailable: true,
        },
      ],
      star3: [
        {
          name: "Abad Whispering Palms",
          stars: 3,
          location: "Kumarakom",
          tagline: "Lakeside cottages surrounded by swaying coconut palms and tranquil lagoons",
          features: ["Lakeview Swimming Pool", "Ayurveda Centre", "Children Play Area", "Bird Watching Tours"],
          lastMinuteAvailable: true,
        },
        {
          name: "Munnar Green Ridge",
          stars: 3,
          location: "Munnar Town",
          tagline: "Comfortable family hotel with mountain view balconies and multi-cuisine dining",
          features: ["Multi-cuisine Restaurant", "Balcony Mountain Views", "Sightseeing Coordination", "Wi-Fi"],
          lastMinuteAvailable: true,
        },
      ],
      star2: [
        {
          name: "Alleppey Backwater Homestay (Vetted)",
          stars: 2,
          location: "Punnamada, Alleppey",
          tagline: "Warm, authentic homestay right on the water canal with fresh traditional Kerala meals",
          features: ["Canal-side Sitout", "Authentic Fish Curry Meals", "Country Boat Rides", "AC Rooms Available"],
          lastMinuteAvailable: true,
        },
        {
          name: "Green View Holiday Inn Munnar",
          stars: 2,
          location: "Old Munnar",
          tagline: "Clean, budget-friendly rooms within walking distance of tea museum and town market",
          features: ["24hr Hot Water", "Tea Valley Views", "Jeep Safari Assistance", "Friendly Host"],
          lastMinuteAvailable: true,
        },
      ],
    },
  },
  {
    destinationId: "singapore",
    destinationName: "Singapore",
    country: "Singapore",
    hotels: {
      star5: [
        {
          name: "Marina Bay Sands / Raffles Singapore",
          stars: 5,
          location: "Marina Bay & Colonial District",
          tagline: "World's most famous rooftop infinity pool or legendary 1887 colonial butler suites",
          features: ["SkyPark Infinity Pool", "Raffles Butler Service", "The Shoppes MBS Access", "Long Bar Sling"],
          lastMinuteAvailable: true,
        },
      ],
      star4: [
        {
          name: "PARKROYAL COLLECTION Marina Bay",
          stars: 4,
          location: "Marina Square",
          tagline: "Singapore's first 'Garden-in-a-Hotel' with 2,400 plants and birdcage cabanas",
          features: ["Indoor Atrium Forest", "Mineral Water Pool", "Marina Square Linked", "Peppermint Restaurant"],
          lastMinuteAvailable: true,
        },
        {
          name: "Village Hotel Sentosa",
          stars: 4,
          location: "Sentosa Island",
          tagline: "Family haven with 4 themed lagoon pools right by Universal Studios and beaches",
          features: ["4 Themed Lagoon Pools", "Sentosa Monorail Access", "Kids Scavenger Hunt", "Beach Shuttle"],
          lastMinuteAvailable: true,
        },
      ],
      star3: [
        {
          name: "Hotel Boss Singapore",
          stars: 3,
          location: "Victoria Street / Lavender",
          tagline: "Modern high-rise hotel between Kampong Glam and Bugis with expansive outdoor pool",
          features: ["Outdoor Pool & Gym", "Lavender MRT 3 min", "Food Street Onsite", "City Skyline Views"],
          lastMinuteAvailable: true,
        },
        {
          name: "Holiday Inn Express Clarke Quay",
          stars: 3,
          location: "Clarke Quay",
          tagline: "Rooftop 40-meter glass pool overlooking Singapore river nightlife and dining",
          features: ["40m Rooftop Pool", "Free Express Breakfast", "Clarke Quay Nightlife Walk", "MRT Close"],
          lastMinuteAvailable: true,
        },
      ],
      star2: [
        {
          name: "Ibis Budget Singapore Clarke Quay",
          stars: 2,
          location: "Clarke Quay / Chinatown",
          tagline: "Sparkling clean compact rooms with rooftop pool right near Chinatown dining",
          features: ["Rooftop Swimming Pool", "Chinatown Food Street (5 min)", "Luggage Lockers", "High-Speed Wi-Fi"],
          lastMinuteAvailable: true,
        },
        {
          name: "Fragrance Hotel - Classic",
          stars: 2,
          location: "Balestier / Novena",
          tagline: "Simple, air-conditioned rooms near Balestier heritage food trails",
          features: ["Ensuite Bathrooms", "Tea/Coffee Maker", "Direct Bus to Orchard Road", "24/7 Front Desk"],
          lastMinuteAvailable: true,
        },
      ],
    },
  },
  {
    destinationId: "thailand",
    destinationName: "Thailand (Bangkok & Phuket)",
    country: "Thailand",
    hotels: {
      star5: [
        {
          name: "The Peninsula Bangkok / Banyan Tree Phuket",
          stars: 5,
          location: "Chao Phraya River / Bang Tao Beach",
          tagline: "Riverside royal Thai luxury with private ferry boats or secluded pool villas in Phuket",
          features: ["Riverfront Multi-tiered Pool", "Private Pool Villas", "Chao Phraya Boat Shuttle", "Signature Spas"],
          lastMinuteAvailable: true,
        },
      ],
      star4: [
        {
          name: "Amari Bangkok / Novotel Phuket Resort",
          stars: 4,
          location: "Pratunam & Patong Beach",
          tagline: "Prime shopping opposite CentralWorld or cliffside ocean views over Patong Bay",
          features: ["Breeze Spa", "3-Tier Cascading Pool", "Patong Bay Views", "Shopping District Walk"],
          lastMinuteAvailable: true,
        },
      ],
      star3: [
        {
          name: "Ibis Bangkok Riverside",
          stars: 3,
          location: "Chao Phraya River Bank",
          tagline: "Tranquil riverfront hotel with swimming pool and free shuttle to BTS Skytrain",
          features: ["Riverfront Swimming Pool", "BTS Skytrain Shuttle", "Pet-Friendly", "Riverside Dining"],
          lastMinuteAvailable: true,
        },
        {
          name: "Best Western Patong Beach",
          stars: 3,
          location: "Patong, Phuket",
          tagline: "Rooftop infinity pool in the heart of Patong, 5 minutes from Jungceylon and beach",
          features: ["Rooftop Infinity Pool", "Jungceylon Shopping 3min", "Mana Restaurant", "Modern Air-Con"],
          lastMinuteAvailable: true,
        },
      ],
      star2: [
        {
          name: "Lub d Bangkok Siam",
          stars: 2,
          location: "Siam Square",
          tagline: "Famous modern boutique design budget stay right at National Stadium BTS",
          features: ["Direct BTS Skytrain Access", "Siam Paragon 5min Walk", "Clean Private & Dorm Rooms", "Cafe Lounge"],
          lastMinuteAvailable: true,
        },
        {
          name: "Sleep Owl Patong Phuket",
          stars: 2,
          location: "Patong Beach",
          tagline: "Spotless, modern budget rooms with comfortable mattresses and beach proximity",
          features: ["Keycard Security", "24hr Coffee", "Patong Beach 7min", "Tour Assistance Desk"],
          lastMinuteAvailable: true,
        },
      ],
    },
  },
];

// Helper to find hotels by destination
export function getHotelsByDestination(destIdOrName: string): DestinationHotels | undefined {
  const query = destIdOrName.toLowerCase().trim();
  return destinationHotels.find(
    (dh) =>
      dh.destinationId.toLowerCase() === query ||
      dh.destinationName.toLowerCase().includes(query) ||
      query.includes(dh.destinationId.toLowerCase())
  );
}
