export interface DepartmentContact {
  id: "ticketing" | "tours" | "holidays";
  title: string;
  badge: string;
  person: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  subTagline: string;
  legal: {
    entityName: string;
    gstin: string;
    pan: string;
    iataAccreditedNo: string;
  };
  departments: DepartmentContact[];
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
  legal: {
    entityName: "DARSH DREAM TOURS LLP",
    gstin: "24AAZFD6999A1ZU",
    pan: "AAZFD6999A",
    iataAccreditedNo: "14039896",
  },
  departments: [
    {
      id: "ticketing",
      title: "Ticketing",
      badge: "Flights · Rail · Visas",
      person: "Pratik",
      phone: "+917048386900",
      phoneDisplay: "+91 70483 86900",
      email: "sales@darshdreamtours.com",
      description: "Domestic & international flight bookings, train ticketing & expedited visa processing.",
    },
    {
      id: "tours",
      title: "Tours",
      badge: "Curated · Bespoke Itineraries",
      person: "Sakshi Chandiramani (Co-Founder)",
      phone: "+917487083499",
      phoneDisplay: "+91 74870 83499",
      email: "sakshi@darshdreamtours.com",
      description: "Custom luxury travel, bespoke India & global itineraries planned personally around you.",
    },
    {
      id: "holidays",
      title: "Holidays",
      badge: "Vacations · Honeymoons · Office Desk",
      person: "Office Desk",
      phone: "+919724391674",
      phoneDisplay: "+91 97243 91674",
      email: "info@darshdreamtours.com",
      description: "All-inclusive holiday escapes, honeymoon packages & comprehensive travel assistance.",
    },
  ],
  partner: {
    name: "SAKSHI CHANDIRAMANI",
    role: "Co-Founder",
    phone: "+91 74870 83499",
    whatsappNumber: "917487083499",
    email: "sakshi@darshdreamtours.com",
    bioIntro:
      "Travel is personal. Every journey begins with understanding where you want to go, how you want to travel, and what you want to experience.",
  },
  contact: {
    phone: "+919724391674",
    phoneDisplay: "+91 97243 91674",
    whatsappNumber: "917487083499",
    email: "info@darshdreamtours.com",
    website: "www.darshdreamtours.com",
    address: {
      line1: "SF-1, Sun Complex, 1 Abhishek Colony",
      line2: "Gotri Road, Race Course",
      city: "Vadodara, Gujarat",
      pincode: "390007",
      full: "SF-1, Sun Complex, 1 Abhishek Colony, Gotri Road, Race Course, Vadodara, Gujarat 390007",
    },
  },
  social: {
    whatsappDefaultMessage:
      "Hello Darsh Dream Tours, I would like to enquire about planning a trip.",
  },
};

/**
 * Builds a direct WhatsApp URL with an encoded message (fallback).
 */
export function getWhatsAppUrl(
  message = "Hello Darsh Dream Tours,\n\nI came across your website and would like to plan a trip.\n\nCould you please help me with the details?\n\nThank you!",
) {
  const phone = "917487083499";

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
