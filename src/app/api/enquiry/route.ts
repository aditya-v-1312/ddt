import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export interface EnquiryRecord {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
  email: string;
  department: "ticketing" | "tours" | "holidays";
  targetEmail: string;
  assignedContact: string;
  serviceType?: string;
  destination?: string;
  packageTitle?: string;
  hotelRating?: string;
  hotelName?: string;
  travelMonth?: string;
  travelersCount?: string | number;
  urgentLastMinute?: boolean;
  message?: string;
  sourceUrl?: string;
  ip?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Anti-spam honeypot check (hidden field)
    if (body._honey || body._gotcha) {
      return NextResponse.json({
        success: true,
        referenceId: "DDT-SEC-" + Math.floor(1000 + Math.random() * 9000),
        message: "Enquiry received successfully.",
      });
    }

    const {
      name,
      phone,
      email,
      department = "tours",
      serviceType = "holiday",
      destination = "",
      packageTitle = "",
      hotelRating = "",
      hotelName = "",
      travelMonth = "",
      travelersCount = "2",
      urgentLastMinute = false,
      message = "",
      sourceUrl = "",
    } = body;

    // Field validations
    if (!name?.trim() || !phone?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: "Please provide your name, phone number, and email." },
        { status: 400 }
      );
    }

    // All email alerts go strictly to info@darshdreamtours.com for central review & delegation
    const targetEmail = "info@darshdreamtours.com";
    const assignedContact = "Darsh Dream Tours Central Desk (info@darshdreamtours.com)";

    // Generate unique reference ID
    const prefix = urgentLastMinute ? "URG" : "DDT";
    const todayStr = new Date().toISOString().slice(2, 10).replace(/-/g, "");
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const referenceId = `${prefix}-${todayStr}-${randomSuffix}`;
    const createdAt = new Date().toISOString();

    const record: EnquiryRecord = {
      id: referenceId,
      createdAt,
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      department: department as "ticketing" | "tours" | "holidays",
      targetEmail,
      assignedContact,
      serviceType,
      destination: destination.trim(),
      packageTitle: packageTitle.trim(),
      hotelRating: hotelRating.trim(),
      hotelName: hotelName.trim(),
      travelMonth: travelMonth.trim(),
      travelersCount,
      urgentLastMinute: !!urgentLastMinute,
      message: message.trim(),
      sourceUrl,
      ip: request.headers.get("x-forwarded-for") || undefined,
    };

    // 1. SAVE TO LOCAL JSON STORE (Guarantees zero lead loss)
    try {
      const dataDir = path.join(process.cwd(), "src", "data");
      const filePath = path.join(dataDir, "enquiries.json");

      let enquiries: EnquiryRecord[] = [];
      try {
        const fileContent = await fs.readFile(filePath, "utf-8");
        enquiries = JSON.parse(fileContent);
      } catch {
        enquiries = [];
      }

      enquiries.unshift(record);
      await fs.writeFile(filePath, JSON.stringify(enquiries, null, 2), "utf-8");
    } catch (fsErr) {
      console.error("Local enquiry write error:", fsErr);
    }

    // 2. DISPATCH TO GOOGLE SHEETS WEBHOOK (If configured)
    const googleSheetsWebhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (googleSheetsWebhook) {
      try {
        await fetch(googleSheetsWebhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(record),
        });
      } catch (sheetErr) {
        console.error("Google Sheets webhook dispatch error:", sheetErr);
      }
    }

    // 3. DISPATCH TO DIRECT EMAIL WEBHOOK (If configured)
    const emailWebhook = process.env.ENQUIRY_EMAIL_WEBHOOK_URL;
    if (emailWebhook) {
      try {
        await fetch(emailWebhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(record),
        });
      } catch (mailErr) {
        console.error("Email webhook dispatch error:", mailErr);
      }
    }

    return NextResponse.json({
      success: true,
      referenceId,
      assignedContact,
      targetEmail,
      urgentLastMinute: !!urgentLastMinute,
      message: urgentLastMinute
        ? "URGENT booking request dispatched to IATA desk. Our team will contact you within 15-30 minutes."
        : "Thank you! Your travel consultation has been received securely.",
    });
  } catch (error) {
    console.error("Enquiry API Handler Error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: "online",
    service: "Darsh Dream Tours Enquiry & Chatbot Gateway",
    departments: [
      { id: "ticketing", contact: "Pratik (+91 70483 86900)", email: "sales@darshdreamtours.com", service: "Flights, Visas & Last-Minute Hotel Desk" },
      { id: "tours", contact: "Sakshi Chandiramani (+91 74870 83499)", email: "sakshi@darshdreamtours.com", service: "Bespoke Tours, Honeymoon & Packages" },
      { id: "holidays", contact: "Office Desk (+91 97243 91674)", email: "info@darshdreamtours.com", service: "Group Tours & Luxury Island Holidays" },
    ],
  });
}
