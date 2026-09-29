/**
 * Google Analytics 4 (GA4) Integration Helper
 * Darsh Dream Tours
 */

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-XF7FVCBWX2";

declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "js",
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

// Log page views
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Generic event logging
export interface GTagEvent {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  [key: string]: any;
}

export const event = ({ action, category, label, value, ...rest }: GTagEvent) => {
  if (typeof window !== "undefined" && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
      ...rest,
    });
  }
};

// Specialized event trackers for Darsh Dream Tours
export const trackWhatsAppClick = (source: string) => {
  event({
    action: "whatsapp_enquiry_click",
    category: "engagement",
    label: source,
  });
};

export const trackPlannerSubmission = (destination: string, travelMonth: string) => {
  event({
    action: "journey_planner_submission",
    category: "conversion",
    label: destination || "Flexible",
    travel_month: travelMonth,
  });
};

export const trackDestinationClick = (destinationName: string) => {
  event({
    action: "destination_card_click",
    category: "browse",
    label: destinationName,
  });
};

export const trackGoogleReviewClick = () => {
  event({
    action: "google_review_link_click",
    category: "social_proof",
    label: "Darsh Dream Tours Google Review",
  });
};
