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
}

export interface GoogleReviewsData {
  businessName: string;
  rating: number;
  maxRating: number;
  reviewCountDisplay: string;
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
  googleShareUrl: "https://share.google/OlYuLJq6by9vZTVDD",
  googleSearchUrl: "https://www.google.com/search?q=Darsh+Dream+Tours+LLP",
  writeReviewUrl: "https://share.google/OlYuLJq6by9vZTVDD",
  location: "Vadodara, Gujarat",
  reviews: [
    {
      id: "rev-1",
      author: "Verified Traveler",
      initials: "VT",
      avatarColor: "bg-[#1C448C]",
      rating: 5,
      relativeTime: "Recent",
      text: "Sakshi planned our trip with so much personal care and attention to detail. Every hotel, flight, and transfer was seamless. Highly recommend Darsh Dream Tours!",
      tripContext: "Custom Curated Journey",
      verified: true,
    },
    {
      id: "rev-2",
      author: "Family Vacationer",
      initials: "FV",
      avatarColor: "bg-[#B87543]",
      rating: 5,
      relativeTime: "Recent",
      text: "Booking through Darsh Dream Tours was the best decision for our family holiday. Sakshi was always accessible and understood exactly what we wanted.",
      tripContext: "Family Holiday",
      verified: true,
    },
    {
      id: "rev-3",
      author: "Travel Guest",
      initials: "TG",
      avatarColor: "bg-[#07101F]",
      rating: 5,
      relativeTime: "Recent",
      text: "Exceptional service from Vadodara. The itinerary was perfectly balanced without feeling rushed. Truly a bespoke travel experience.",
      tripContext: "International Getaway",
      verified: true,
    },
  ],
};
