import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.darshdreamtours.com"),
  title: "Darsh Dream Tours | Curated Travel Experiences",
  description:
    "Darsh Dream Tours helps you plan memorable journeys across India and international destinations. Tailored itineraries, end-to-end guidance, and boutique travel care.",
  keywords: [
    "Darsh Dream Tours",
    "Sakshi Chandiramani",
    "Vadodara travel agency",
    "custom travel itinerary",
    "Dubai luxury packages",
    "Kashmir tour",
    "Switzerland holiday",
    "Kerala backwaters",
    "boutique travel planner",
  ],
  authors: [{ name: "Darsh Dream Tours" }, { name: "Sakshi Chandiramani" }],
  openGraph: {
    title: "Darsh Dream Tours | Curated Travel Experiences",
    description:
      "Your Journey. Your Dream. Your World. Curated journeys, unforgettable experiences, and travel planned around you.",
    url: "https://www.darshdreamtours.com",
    siteName: "Darsh Dream Tours",
    images: [
      {
        url: "/images/logo.jpg",
        width: 846,
        height: 596,
        alt: "Darsh Dream Tours Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/images/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased selection:bg-[#9A5B2D] selection:text-white">
        {children}
      </body>
    </html>
  );
}
