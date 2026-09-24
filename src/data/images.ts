/**
 * Centralized Travel Photography Repository
 * Curated from Unsplash under the Unsplash license (free to use for commercial and non-commercial).
 * Art Direction: Cinematic, natural light, high-contrast, editorial, human scale, generous negative space.
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
  // Brand Assets
  logo: "/images/logo.jpg",
  businessCard: "/images/business_card.jpg",

  // Hero Main Visual: Expansive golden Mediterranean / coastal cliff with warm natural light & distant horizon
  hero: {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=85",
    alt: "Pristine coastal shoreline meeting deep sapphire waters in warm daylight",
    credit: { photographer: "Sean Oulashin", source: "Unsplash" },
  },
  heroAlternate: {
    url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1800&q=85",
    alt: "Aircraft wing catching golden light above vast cloud layers",
    credit: { photographer: "Suhyeon Choi", source: "Unsplash" },
  },

  // Key Global Destinations (Editorial selection)
  dubai: {
    url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=85",
    alt: "Dubai skyline rising from the warm golden haze at twilight",
    credit: { photographer: "David Rodrigo", source: "Unsplash" },
  },
  kashmir: {
    url: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1600&q=85",
    alt: "Still waters of Dal Lake in Kashmir reflecting Himalayan peaks at dawn",
    credit: { photographer: "Imad Clicks", source: "Unsplash" },
  },
  europe: {
    url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=85",
    alt: "Dramatic Mediterranean cliffside architecture overlooking azure sea",
    credit: { photographer: "Anthony DELANOIX", source: "Unsplash" },
  },
  switzerland: {
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85",
    alt: "Snow-crowned alpine peaks reflected in a pristine glacial lake in Switzerland",
    credit: { photographer: "Bailey Zindel", source: "Unsplash" },
  },
  maldives: {
    url: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1600&q=85",
    alt: "Serene overwater villas perched above crystalline turquoise lagoon",
    credit: { photographer: "Colin Watts", source: "Unsplash" },
  },
  bali: {
    url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=85",
    alt: "Cascading emerald rice terraces surrounded by palm mist in Bali",
    credit: { photographer: "Oliver Sjöström", source: "Unsplash" },
  },
  kerala: {
    url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=85",
    alt: "Handcrafted houseboat gliding along peaceful palm-fringed Kerala backwaters",
    credit: { photographer: "Vivek Kumar", source: "Unsplash" },
  },
  rajasthan: {
    url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=85",
    alt: "Historic royal palace courtyards in Udaipur reflecting in lake water",
    credit: { photographer: "Annie Spratt", source: "Unsplash" },
  },
  singapore: {
    url: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1600&q=85",
    alt: "Modern Singapore skyline with waterfront lights reflecting at dusk",
    credit: { photographer: "Hu Chen", source: "Unsplash" },
  },
  thailand: {
    url: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1600&q=85",
    alt: "Traditional wooden boat moored beside dramatic limestone cliffs in Thailand",
    credit: { photographer: "Matti Blume", source: "Unsplash" },
  },
  andaman: {
    url: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1600&q=85",
    alt: "White sand beach framed by tropical jungle in Andaman",
    credit: { photographer: "Tatiana Zhukova", source: "Unsplash" },
  },
  goa: {
    url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1600&q=85",
    alt: "Golden sunset over calm Arabian Sea shores in South Goa",
    credit: { photographer: "Ashutosh Saraswat", source: "Unsplash" },
  },

  // Travel Categories (Art directed editorial compositions)
  categories: {
    beach: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
      alt: "Pristine turquoise tides gently meeting golden sand",
    },
    honeymoon: {
      url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85",
      alt: "Private romantic sunset overlooking coastal cliffs",
    },
    family: {
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=85",
      alt: "Peaceful alpine lake boat ride amid timeless forests",
    },
    adventure: {
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
      alt: "Majestic granite mountain ridge stretching into clear blue sky",
    },
    international: {
      url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=85",
      alt: "Historic European boulevard bathed in afternoon sunlight",
    },
    india: {
      url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=85",
      alt: "Architectural dome and morning mist in India",
    },
  },

  // About Sakshi Section (Curator portrait slot)
  aboutSakshi: {
    url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
    alt: "Sakshi Chandiramani, Partner - Darsh Dream Tours (Editorial portrait slot)",
    caption: "Sakshi Chandiramani, Partner",
  },

  // Final CTA cinematic background
  ctaBackground: {
    url: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1800&q=85",
    alt: "Vintage map and compass with travel passport in soft ambient light",
  },
};
