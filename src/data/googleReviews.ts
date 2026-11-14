export interface GoogleReviewItem {
  id: string;
  author: string;
  initials: string;
  avatarColor?: string;
  rating: number;
  relativeTime: string;
  text: string;
  tripContext?: string;
  verified: boolean;
  photoUrl?: string;
}

export interface GoogleReviewsData {
  businessName: string;
  rating: number;
  maxRating: number;
  reviewCountDisplay: string;
  totalReviewsCount: number;
  googleShareUrl: string;
  googleSearchUrl: string;
  writeReviewUrl: string;
  location: string;
  reviews: GoogleReviewItem[];
}

export const googleReviewsData: GoogleReviewsData = {
  businessName: "Darsh Dream Tours LLP",
  rating: 5.0,
  maxRating: 5,
  reviewCountDisplay: "5.0 ★★★★★",
  totalReviewsCount: 15,
  googleShareUrl: "https://share.google/OlYuLJq6by9vZTVDD",
  googleSearchUrl: "https://www.google.com/search?q=Darsh+Dream+Tours+LLP",
  writeReviewUrl: "https://share.google/OlYuLJq6by9vZTVDD",
  location: "Vadodara, Gujarat",
  reviews: [
    {
      id: "rev-rishi",
      author: "Rishi Rathod",
      initials: "RR",
      avatarColor: "bg-[#1C448C]",
      rating: 5,
      relativeTime: "Recent",
      text: "We recently travelled to Thailand with a group of 7 friends from 23rd to 27th Oct for 4 Nights / 5 Days, and honestly, we had a wonderful experience! Everything was well organized and completely hassle-free.",
      tripContext: "Thailand Group Tour · 7 Guests",
      verified: true,
    },
    {
      id: "rev-divyaraj",
      author: "Rana Divyarajsinh",
      initials: "RD",
      avatarColor: "bg-[#B87543]",
      rating: 5,
      relativeTime: "A month ago",
      text: "We had an absolute 5-star experience booking our trip through this agency. From the very first online enquiry, the team was incredibly responsive and customised the itinerary exactly to our preferences. The hotels selected were outstanding, and the entire logistics execution was completely hassle-free.",
      tripContext: "Custom Curated Itinerary",
      verified: true,
    },
    {
      id: "rev-nishant",
      author: "Nishant",
      initials: "N",
      avatarColor: "bg-[#2D6A4F]",
      rating: 5,
      relativeTime: "A month ago",
      text: "We had a very good experience with this travel agency. Everything was well arranged, and the team was very helpful. Hotel and travel arrangements were excellent. Thank you for making our trip enjoyable. Highly recommended! 😊",
      tripContext: "Holiday Package & Stays",
      verified: true,
    },
    {
      id: "rev-anil",
      author: "Anil Bandhiya",
      initials: "AB",
      avatarColor: "bg-[#6D3B47]",
      rating: 5,
      relativeTime: "A month ago",
      text: "Excellent service and professional support from Darsh Dream Tours. The team was helpful and made the travel planning process easy. I personally suggest and highly recommend them for all travel-related services ✨",
      tripContext: "Travel Planning & Stays",
      verified: true,
    },
    {
      id: "rev-jayesh",
      author: "Jayesh Lotani",
      initials: "JL",
      avatarColor: "bg-[#1F3A60]",
      rating: 5,
      relativeTime: "A month ago",
      text: "We had an amazing experience with Darsh Dream Tours. The service was excellent, everything was very well organized, and we truly enjoyed our trip. I will definitely choose Darsh Dream Tours again for my next holiday package.",
      tripContext: "Bespoke Holiday Package",
      verified: true,
    },
    {
      id: "rev-midisidappa",
      author: "Midisidappa Pujari",
      initials: "MP",
      avatarColor: "bg-[#3D5A80]",
      rating: 5,
      relativeTime: "A month ago",
      text: "A wonderful experience with Darsh Dream Tours and Travels! Great hospitality, good coordination, and reliable service. A great choice for planning your next trip. ✈️✈️",
      tripContext: "Flight & Tour Coordination",
      verified: true,
    },
    {
      id: "rev-monish",
      author: "Monish Talreja",
      initials: "MT",
      avatarColor: "bg-[#588157]",
      rating: 5,
      relativeTime: "A month ago",
      text: "Had a great experience with Darsh Dream Tours LLP. Highly recommended for travel services and luxury arrangements.",
      tripContext: "Travel Services Desk",
      verified: true,
    },
    {
      id: "rev-aditya",
      author: "Aditya",
      initials: "A",
      avatarColor: "bg-[#B87543]",
      rating: 5,
      relativeTime: "A month ago",
      text: "Amazing service and timely responses. Seamless coordination from start to finish.",
      tripContext: "Custom Travel Desk",
      verified: true,
    },
    {
      id: "rev-hirva",
      author: "Hirva",
      initials: "H",
      avatarColor: "bg-[#7209B7]",
      rating: 5,
      relativeTime: "Recent",
      text: "My experience coordinating with Darsh Dream Tours has been excellent. Highly dedicated, professional approach, and great hospitality in planning travel journeys.",
      tripContext: "Travel Curation & Desk",
      verified: true,
    },
    {
      id: "rev-ayaan",
      author: "Ayaan Barodawala",
      initials: "AB",
      avatarColor: "bg-[#005F73]",
      rating: 5,
      relativeTime: "A month ago",
      text: "Very smooth travel booking and great hotel choices. Everything was taken care of seamlessly by the team. Wonderful experience with Darsh Dream Tours.",
      tripContext: "Hotel Bookings & Logistics",
      verified: true,
    },
    {
      id: "rev-shruti",
      author: "Shruti Suthar",
      initials: "SS",
      avatarColor: "bg-[#9C6644]",
      rating: 5,
      relativeTime: "A month ago",
      text: "Best travel agency in Vadodara. Very prompt, supportive, and dedicated to client comfort.",
      tripContext: "Verified Traveler",
      verified: true,
    },
    {
      id: "rev-mitanshu",
      author: "Mitanshu Nayak",
      initials: "MN",
      avatarColor: "bg-[#2B2D42]",
      rating: 5,
      relativeTime: "A month ago",
      text: "Best tours and travels organization. Perfect for planning your destination trips.",
      tripContext: "Destination Planning",
      verified: true,
    },
    {
      id: "rev-akshay",
      author: "Akshay Ahuja",
      initials: "AA",
      avatarColor: "bg-[#4A4E69]",
      rating: 5,
      relativeTime: "A month ago",
      text: "Very reliable service. Prompt assistance with travel details and bookings.",
      tripContext: "Corporate & Leisure Desk",
      verified: true,
    },
    {
      id: "rev-ranaji",
      author: "The Ranaji",
      initials: "TR",
      avatarColor: "bg-[#8338EC]",
      rating: 5,
      relativeTime: "A month ago",
      text: "Great coordination and reliable travel arrangements throughout. Highly recommended for family vacations.",
      tripContext: "Family Tour",
      verified: true,
    },
    {
      id: "rev-tpz",
      author: "Tpz Top",
      initials: "TT",
      avatarColor: "bg-[#3A5A40]",
      rating: 5,
      relativeTime: "A month ago",
      text: "Professional travel team, quick assistance, and seamless execution of our travel plans.",
      tripContext: "Ticketing & Tour Desk",
      verified: true,
    },
  ],
};
