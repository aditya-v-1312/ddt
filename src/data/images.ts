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

  // Hero: Expansive coastal cliffs overlooking the ocean in golden natural light
  hero: {
    url: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1800&q=85",
    alt: "Coastal cliffline and turquoise waters bathed in warm natural light",
    credit: { photographer: "Sean Oulashin", source: "Unsplash" },
  },

  // Key Global Destinations
  dubai: {
    url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=85",
    alt: "Dubai skyline rising through twilight golden haze",
    credit: { photographer: "David Rodrigo", source: "Unsplash" },
  },
  kashmir: {
    url: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1600&q=85",
    alt: "Dal Lake in Kashmir reflecting Himalayan peaks at dawn",
    credit: { photographer: "Imad Clicks", source: "Unsplash" },
  },
  maldives: {
    url: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1600&q=85",
    alt: "Overwater wooden villas over crystalline turquoise lagoon",
    credit: { photographer: "Colin Watts", source: "Unsplash" },
  },
  switzerland: {
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85",
    alt: "Snow-crowned Swiss alpine peaks reflected in a crystal lake",
    credit: { photographer: "Bailey Zindel", source: "Unsplash" },
  },
  bali: {
    url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=85",
    alt: "Lush cascading rice terraces and palm trees in Bali",
    credit: { photographer: "Oliver Sjöström", source: "Unsplash" },
  },
  kerala: {
    url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=85",
    alt: "Traditional houseboat cruising through peaceful Kerala backwaters",
    credit: { photographer: "Vivek Kumar", source: "Unsplash" },
  },
  rajasthan: {
    url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=85",
    alt: "Historic palace architecture overlooking lake waters in Udaipur",
    credit: { photographer: "Annie Spratt", source: "Unsplash" },
  },
  singapore: {
    url: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1600&q=85",
    alt: "Marina Bay waterfront lights in Singapore at twilight",
    credit: { photographer: "Hu Chen", source: "Unsplash" },
  },
  thailand: {
    url: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1600&q=85",
    alt: "Limestone karsts and turquoise waters in Thailand",
    credit: { photographer: "Matti Blume", source: "Unsplash" },
  },
  goa: {
    url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1600&q=85",
    alt: "Golden hour sunset along the quiet beaches of South Goa",
    credit: { photographer: "Ashutosh Saraswat", source: "Unsplash" },
  },
  andaman: {
    url: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1600&q=85",
    alt: "Pristine white sand beach and turquoise sea in Andaman",
    credit: { photographer: "Tatiana Zhukova", source: "Unsplash" },
  },

  // Travel Categories (Art-directed editorial themes)
  categories: {
    beach: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
      alt: "Pristine turquoise tides gently meeting golden sand",
    },
    honeymoon: {
      url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85",
      alt: "Private romantic sunset over coastal cliffs",
    },
    family: {
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=85",
      alt: "Scenic lake boat ride amid alpine forest shores",
    },
    adventure: {
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
      alt: "Majestic granite mountain peak stretching into clear blue sky",
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

  // About Sakshi Section (Authentic atmospheric travel photograph - no fake portrait person)
  aboutSakshi: {
    url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=85",
    alt: "Traveler standing overlooking an expansive open valley horizon at sunrise",
    caption: "Darsh Dream Tours — Curated Travel Architecture",
  },

  // Final CTA background
  ctaBackground: {
    url: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1800&q=85",
    alt: "Vintage map and compass in soft ambient light",
  },
};
