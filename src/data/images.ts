/**
 * Centralized Travel Photography Repository
 * Curated from Unsplash under the Unsplash license (free to use for commercial and non-commercial).
 * High-resolution, cinematic, editorial, and non-generic.
 * Easily replace or customize any image URL here without touching UI components.
 */

export interface TravelImageItem {
  url: string;
  alt: string;
  credit?: {
    photographer: string;
    source: string;
  };
}

export const travelImages = {
  // Brand Logo
  logo: "/images/logo.jpg",
  businessCard: "/images/business_card.jpg",

  // Hero: Majestic mountain valley touching the clouds - evokes vast wanderlust
  hero: {
    url: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=2000&q=85",
    alt: "Tropical turquoise shoreline and dramatic ocean horizon",
    credit: { photographer: "Sean Oulashin", source: "Unsplash" },
  },
  heroAlternate: {
    url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2000&q=85",
    alt: "Airplane wing above golden sunset clouds",
    credit: { photographer: "Suhyeon Choi", source: "Unsplash" },
  },

  // Key Global Destinations
  dubai: {
    url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=85",
    alt: "Downtown Dubai skyline with Burj Khalifa glowing in golden hour",
    credit: { photographer: "David Rodrigo", source: "Unsplash" },
  },
  europe: {
    url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=85",
    alt: "Iconic Mediterranean coastal cliffs and whitewashed village",
    credit: { photographer: "Anthony DELANOIX", source: "Unsplash" },
  },
  kashmir: {
    url: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1600&q=85",
    alt: "Dal Lake in Kashmir with Himalayan peaks reflecting in still water",
    credit: { photographer: "Imad Clicks", source: "Unsplash" },
  },
  bali: {
    url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=85",
    alt: "Lush cascading rice terraces and tropical palms in Bali",
    credit: { photographer: "Oliver Sjöström", source: "Unsplash" },
  },
  maldives: {
    url: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1600&q=85",
    alt: "Luxury overwater bungalows over tranquil crystal turquoise water",
    credit: { photographer: "Colin Watts", source: "Unsplash" },
  },
  kerala: {
    url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=85",
    alt: "Serene traditional houseboat cruising through Kerala backwaters",
    credit: { photographer: "Vivek Kumar", source: "Unsplash" },
  },
  rajasthan: {
    url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=85",
    alt: "Majestic historic palace architecture in Udaipur, Rajasthan",
    credit: { photographer: "Annie Spratt", source: "Unsplash" },
  },
  singapore: {
    url: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1600&q=85",
    alt: "Singapore skyline and Marina Bay waterfront lights at twilight",
    credit: { photographer: "Hu Chen", source: "Unsplash" },
  },
  thailand: {
    url: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1600&q=85",
    alt: "Traditional longtail boat anchored beside dramatic karst cliffs in Thailand",
    credit: { photographer: "Matti Blume", source: "Unsplash" },
  },
  goa: {
    url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1600&q=85",
    alt: "Sun-drenched palms and golden sand beach along the Arabian Sea in Goa",
    credit: { photographer: "Ashutosh Saraswat", source: "Unsplash" },
  },
  andaman: {
    url: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1600&q=85",
    alt: "Pristine white sand beach and emerald green ocean in the Andaman Islands",
    credit: { photographer: "Tatiana Zhukova", source: "Unsplash" },
  },
  switzerland: {
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85",
    alt: "Alpine peaks and crystal clear glacial lake in the Swiss Alps",
    credit: { photographer: "Bailey Zindel", source: "Unsplash" },
  },

  // Travel Categories
  categories: {
    beach: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
      alt: "Pristine tropical beach with warm turquoise tide",
    },
    honeymoon: {
      url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85",
      alt: "Intimate private sunset over coastal cliffs",
    },
    family: {
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=85",
      alt: "Scenic lake boat ride amid alpine forests",
    },
    adventure: {
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
      alt: "Majestic mountain peaks reaching into crisp alpine skies",
    },
    international: {
      url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=85",
      alt: "Historic Parisian boulevard and elegant classic architecture",
    },
    india: {
      url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=85",
      alt: "Iconic marble dome and morning mist in India",
    },
  },

  // About Sakshi Section (Boutique Curator portrait/traveler slot)
  aboutSakshi: {
    url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
    alt: "Sakshi Chandiramani - Partner, Darsh Dream Tours (Editorial portrait slot)",
    caption: "Sakshi Chandiramani, Partner",
  },

  // Final CTA background
  ctaBackground: {
    url: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1800&q=85",
    alt: "Vintage map and compass with travel passport",
  },
};
