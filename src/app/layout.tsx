import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Script from "next/script";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://darshdreamtours.vercel.app"),
  title: "Darsh Dream Tours | Curated Travel Experiences",
  description:
    "Darsh Dream Tours helps you plan memorable journeys across India and international destinations. Thoughtful travel curation, personalized itineraries, and boutique travel care.",
  keywords: [
    "Darsh Dream Tours",
    "Sakshi Chandiramani",
    "Vadodara travel agency",
    "curated travel itineraries",
    "Dubai travel",
    "Kashmir journey",
    "Switzerland tour",
    "boutique travel planner",
  ],
  authors: [{ name: "Darsh Dream Tours" }, { name: "Sakshi Chandiramani" }],
  openGraph: {
    title: "Darsh Dream Tours | Curated Travel Experiences",
    description:
      "Your Journey. Your Dream. Your World. Curated journeys, unforgettable experiences, and travel planned around you.",
    url: "https://darshdreamtours.vercel.app",
    siteName: "Darsh Dream Tours",
    images: [
      {
        url: "/images/logo.png",
        width: 517,
        height: 332,
        alt: "Darsh Dream Tours Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} scroll-smooth`}
    >
      <body className="antialiased selection:bg-[#9A5B2D] selection:text-white font-sans bg-[#F8F7F3] text-[#17213A]">
        <GoogleAnalytics />
        {children}
      </body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XF7FVCBWX2"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XF7FVCBWX2');
        `}
      </Script>
    </html>
  );
}
