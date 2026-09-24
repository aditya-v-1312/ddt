export interface SiteConfig {
  name: string;
  tagline: string;
  subTagline: string;
  partner: {
    name: string;
    role: string;
    phone: string;
    whatsappNumber: string;
    email: string;
    bioIntro: string;
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    whatsappNumber: string;
    email: string;
    website: string;
    address: {
      line1: string;
      line2: string;
      city: string;
      pincode: string;
      full: string;
    };
  };
  social: {
    whatsappDefaultMessage: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "DARSH DREAM TOURS",
  tagline: "YOUR JOURNEY. YOUR DREAM. YOUR WORLD.",
  subTagline: "Curated journeys, unforgettable experiences, and travel planned around you.",
  partner: {
    name: "SAKSHI CHANDIRAMANI",
    role: "Partner",
    phone: "+91 97243 91674",
    whatsappNumber: "919724391674",
    email: "sakshi@darshdreamtours.com",
    bioIntro:
      "Travel is personal. Every journey begins with understanding where you want to go, how you want to travel, and what you want to experience.",
  },
  contact: {
    phone: "+919724391674",
    phoneDisplay: "+91 97243 91674",
    whatsappNumber: "919724391674",
    email: "sakshi@darshdreamtours.com",
    website: "www.darshdreamtours.com",
    address: {
      line1: "SFI Sun Complex, 1 Abhishek Colony",
      line2: "Gotri Road, Race Course",
      city: "Vadodara",
      pincode: "390007",
      full: "SFI Sun Complex, 1 Abhishek Colony, Gotri Road, Race Course, Vadodara 390007",
    },
  },
  social: {
    whatsappDefaultMessage: "Hello Darsh Dream Tours, I would like to enquire about planning a trip.",
  },
};

/**
 * Builds a direct WhatsApp URL with an encoded message.
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || siteConfig.social.whatsappDefaultMessage;
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
