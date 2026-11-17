import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visa Assistance & Services in Vadodara | Darsh Dream Tours",
  description:
    "Hassle-free visa assistance from Darsh Dream Tours LLP in Vadodara. Expert document checklists, application filing, and appointment scheduling for Schengen, UK, US, Dubai, Singapore, and 50+ countries.",
  keywords: [
    "Visa assistance Vadodara",
    "Visa agents in Vadodara",
    "Schengen visa assistance Gujarat",
    "UK visitor visa Vadodara",
    "US visa appointment booking Vadodara",
    "Dubai tourist visa express",
    "Darsh Dream Tours visa services",
  ],
  openGraph: {
    title: "Visa Assistance & Services in Vadodara | Darsh Dream Tours",
    description:
      "Your Visa, Our Assistance! Simple, smooth, and hassle-free visa processing for tourist and business travel.",
    url: "https://www.darshdreamtours.com/visa",
    siteName: "Darsh Dream Tours",
    images: [
      {
        url: "/images/logo.png",
        width: 517,
        height: 332,
        alt: "Darsh Dream Tours Visa Services",
      },
    ],
  },
};

export default function VisaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
