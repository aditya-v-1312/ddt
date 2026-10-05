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
  subTagline:
    "Thoughtfully planned journeys across India and beyond.",
  partner: {
    name: "SAKSHI CHANDIRAMANI",
    role: "Partner",
    phone: "+91 97243 91674",
    whatsappNumber: "919724391674",
    email: "info@darshdreamtours.com",
    bioIntro:
      "Travel is personal. Every journey begins with understanding where you want to go, how you want to travel, and what you want to experience.",
  },
  contact: {
    phone: "+919724391674",
    phoneDisplay: "+91 97243 91674",
    whatsappNumber: "919724391674",
    email: "info@darshdreamtours.com",
    website: "darshdreamtours.vercel.app",
    address: {
      line1: "SFI Sun Complex, 1 Abhishek Colony",
      line2: "Gotri Road, Race Course",
      city: "Vadodara",
      pincode: "390007",
      full: "SFI Sun Complex, 1 Abhishek Colony, Gotri Road, Race Course, Vadodara 390007",
    },
  },
  social: {
    whatsappDefaultMessage:
      "Hello Darsh Dream Tours, I would like to enquire about planning a trip.",
  },
};

/**
 * Builds a direct WhatsApp URL with an encoded message.
 */
export function getWhatsAppUrl(
  message = "Hello Darsh Dream Tours,\n\nI came across your website and would like to plan a trip.\n\nCould you please help me with the details?\n\nThank you!",
) {
  const phone = "917487083499";

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
