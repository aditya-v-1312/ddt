"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type DepartmentType = "ticketing" | "tours" | "holidays";

export interface InquiryInitialData {
  department?: DepartmentType;
  destination?: string;
  travelMonth?: string;
  travelersCount?: string | number;
  message?: string;
}

interface InquiryContextType {
  isOpen: boolean;
  initialData: InquiryInitialData;
  openInquiry: (data?: InquiryInitialData) => void;
  closeInquiry: () => void;
}

const InquiryContext = createContext<InquiryContextType | undefined>(undefined);

export const InquiryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [initialData, setInitialData] = useState<InquiryInitialData>({
    department: "tours",
  });

  const openInquiry = (data?: InquiryInitialData) => {
    setInitialData({
      department: data?.department || "tours",
      destination: data?.destination || "",
      travelMonth: data?.travelMonth || "",
      travelersCount: data?.travelersCount || "2",
      message: data?.message || "",
    });
    setIsOpen(true);
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
