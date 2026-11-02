"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type DepartmentType = "ticketing" | "tours" | "holidays";
export type ServiceType = "holiday" | "last_minute_hotel" | "ticketing" | "hotel_only";

export interface InquiryInitialData {
  department?: DepartmentType;
  serviceType?: ServiceType;
  destination?: string;
  packageId?: string;
  packageTitle?: string;
  starRating?: 2 | 3 | 4 | 5;
  hotelName?: string;
  travelMonth?: string;
  travelersCount?: string | number;
  message?: string;
  urgentLastMinute?: boolean;
}

interface InquiryContextType {
  isOpen: boolean;
  initialData: InquiryInitialData;
  openInquiry: (data?: InquiryInitialData) => void;
  closeInquiry: () => void;
  openLastMinuteHotelDesk: (city?: string) => void;
  openPackageInquiry: (packageTitle: string, destination: string, starRating?: 2 | 3 | 4 | 5) => void;
}

const InquiryContext = createContext<InquiryContextType | undefined>(undefined);

export const InquiryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [initialData, setInitialData] = useState<InquiryInitialData>({
    department: "tours",
  });

  const openInquiry = (data?: InquiryInitialData) => {
    setInitialData({
      department: data?.department || (data?.urgentLastMinute ? "ticketing" : "tours"),
      serviceType: data?.serviceType || (data?.urgentLastMinute ? "last_minute_hotel" : "holiday"),
      destination: data?.destination || "",
      packageId: data?.packageId || "",
      packageTitle: data?.packageTitle || "",
      starRating: data?.starRating,
      hotelName: data?.hotelName || "",
      travelMonth: data?.travelMonth || "",
      travelersCount: data?.travelersCount || "2",
      message: data?.message || "",
      urgentLastMinute: data?.urgentLastMinute || false,
    });
    setIsOpen(true);
  };

  const openLastMinuteHotelDesk = (city?: string) => {
    openInquiry({
      department: "ticketing",
      serviceType: "last_minute_hotel",
      destination: city || "",
      urgentLastMinute: true,
      message: "Urgent Last-Minute Hotel Desk Booking Request",
    });
  };

  const openPackageInquiry = (packageTitle: string, destination: string, starRating?: 2 | 3 | 4 | 5) => {
    openInquiry({
      department: "tours",
      serviceType: "holiday",
      destination,
      packageTitle,
      starRating,
      message: `Inquiry for curated package: ${packageTitle}`,
    });
  };

  const closeInquiry = () => {
    setIsOpen(false);
  };

  return (
    <InquiryContext.Provider
      value={{
        isOpen,
        initialData,
        openInquiry,
        closeInquiry,
        openLastMinuteHotelDesk,
        openPackageInquiry,
      }}
    >
      {children}
    </InquiryContext.Provider>
  );
};

export function useInquiry() {
  const context = useContext(InquiryContext);
  if (!context) {
    throw new Error("useInquiry must be used within an InquiryProvider");
  }
  return context;
}
