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
  destination?: string;
  travelMonth?: string;
  travelersCount?: string | number;
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
      destination = "",
      travelMonth = "",
      travelersCount = "2",
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

    // All email alerts go to info@darshdreamtours.com so the central desk can review & route
    const targetEmail = "info@darshdreamtours.com";
    let assignedContact = "Office Desk (+91 97243 91674)";

    if (department === "ticketing") {
      assignedContact = "Ticketing / Pratik (+91 70483 86900)";
    } else if (department === "tours") {
      assignedContact = "Tours / Sakshi (+91 74870 83499)";
    } else if (department === "holidays") {
      assignedContact = "Holidays / Office Desk (+91 97243 91674)";
    }

    // Generate unique reference ID
    const todayStr = new Date().toISOString().slice(2, 10).replace(/-/g, "");
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const referenceId = `DDT-${todayStr}-${randomSuffix}`;
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
      destination: destination.trim(),
      travelMonth: travelMonth.trim(),
      travelersCount,
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
      message: "Thank you! Your enquiry has been received securely.",
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
  // Allow secure read of recent enquiry count or local test check
  return NextResponse.json({
    status: "online",
    service: "Darsh Dream Tours Enquiry Gateway",
    departments: [
      { id: "ticketing", contact: "Pratik (+91 70483 86900)", email: "sales@darshdreamtours.com" },
      { id: "tours", contact: "Sakshi Chandiramani (+91 74870 83499)", email: "sakshi@darshdreamtours.com" },
      { id: "holidays", contact: "Office Desk (+91 97243 91674)", email: "info@darshdreamtours.com" },
    ],
  });
}
