/**
 * ============================================================================
 * DARSH DREAM TOURS - GOOGLE APPS SCRIPT FOR GOOGLE SHEETS & EMAIL ENQUIRIES
 * Supports: Packages, 2★ to 5★ Hotel Preferences, & Urgent Last-Minute Bookings
 * ============================================================================
 * 
 * Central Email Destination: info@darshdreamtours.com
 * (All alerts route exclusively to info desk for central review & delegation)
 * ============================================================================
 */

function doPost(e) {
  try {
    var lock = LockService.getScriptLock();
    lock.waitLock(30000); // Wait up to 30s for concurrent processes

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Ensure header row exists
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Reference ID",
        "Urgent?",
        "Department",
        "Assigned Desk",
        "Customer Name",
        "Phone / WhatsApp",
        "Email",
        "Destination",
        "Service / Package",
        "Hotel Category (2★-5★)",
        "Preferred Hotel",
        "Travel Month / Timing",
        "Travelers",
        "Special Requests",
        "Status"
      ]);
      sheet.getRange(1, 1, 1, 16).setFontWeight("bold").setBackground("#07101F").setFontColor("#FFFFFF");
      sheet.setFrozenRows(1);
    }

    var data = JSON.parse(e.postData.contents);

    var isUrgent = data.urgentLastMinute || (data.serviceType === "last_minute_hotel");

    // Map department to readable label
    var deptLabels = {
      ticketing: "Ticketing (Pratik: +91 70483 86900)",
      tours: "Tours (Sakshi Chandiramani: +91 74870 83499)",
      holidays: "Holidays (Office: +91 97243 91674)"
    };
    var deptName = deptLabels[data.department] || data.department || "General Enquiry";
    if (isUrgent) {
      deptName = "⚡ URGENT LAST-MINUTE DESK (Pratik: +91 70483 86900)";
    }

    // 1. APPEND ROW TO GOOGLE SHEET
    sheet.appendRow([
      new Date(),
      data.id || "",
      isUrgent ? "⚡ YES (LAST MINUTE)" : "Normal",
      (data.department || "").toUpperCase(),
      deptName,
      data.name || "",
      data.phone || "",
      data.email || "",
      data.destination || "Not specified",
      data.packageTitle || data.serviceType || "Custom Travel",
      data.hotelRating || "Not specified",
      data.hotelName || "Any suitable",
      data.travelMonth || "Flexible",
      data.travelersCount || "2",
      data.message || "",
      "New"
    ]);

    // 2. SEND INSTANT EMAIL NOTIFICATION EXCLUSIVELY TO INFO@DARSHDREAMTOURS.COM
    try {
      var recipientEmail = "info@darshdreamtours.com";

      var subjectPrefix = isUrgent ? "🚨 [URGENT 24-48 HR HOTEL/FLIGHT] " : "✨ New Travel Consultation ";
      var subject = subjectPrefix + "[" + (data.id || "DDT") + "] - " + (data.name || "Client") + " (" + (data.destination || "Travel") + ")";

      var urgencyBadge = isUrgent
        ? "<div style='background: #DC2626; color: #FFFFFF; padding: 10px 16px; border-radius: 6px; font-weight: bold; text-align: center; margin-bottom: 16px;'>⚡ PRIORITY: LAST-MINUTE BOOKING DESK REQUEST (Call within 15 mins)</div>"
        : "";

      var htmlBody = ""
        + "<div style='font-family: Arial, sans-serif; max-width: 620px; margin: 0 auto; border: 1px solid #E5E7EB; border-radius: 12px; overflow: hidden;'>"
        + "  <div style='background: #07101F; padding: 24px; color: #FFFFFF; text-align: center;'>"
        + "    <h2 style='margin: 0; font-size: 20px; letter-spacing: 2px; color: #E2B18D;'>DARSH DREAM TOURS</h2>"
        + "    <p style='margin: 6px 0 0; font-size: 13px; color: #9CA3AF;'>Personal Travel Concierge & Lead Notification</p>"
        + "  </div>"
        + "  <div style='padding: 24px; background: #FFFFFF; color: #1F2937; line-height: 1.6;'>"
        +      urgencyBadge
        + "    <div style='background: #F3F4F6; padding: 12px 16px; border-radius: 8px; margin-bottom: 20px;'>"
        + "      <p style='margin: 0; font-size: 11px; color: #6B7280; text-transform: uppercase;'>REFERENCE ID</p>"
        + "      <p style='margin: 2px 0 0; font-size: 16px; font-weight: bold; color: #B87543;'>" + (data.id || "") + "</p>"
        + "    </div>"
        + "    <table style='width: 100%; border-collapse: collapse; font-size: 14px;'>"
        + "      <tr><td style='padding: 8px 0; color: #6B7280; width: 170px;'>Requested Service:</td><td style='font-weight: 600; color: #B87543;'>" + deptName + "</td></tr>"
        + "      <tr><td style='padding: 8px 0; color: #6B7280;'>Customer Name:</td><td style='font-weight: 600;'>" + (data.name || "") + "</td></tr>"
        + "      <tr><td style='padding: 8px 0; color: #6B7280;'>Phone / WhatsApp:</td><td style='font-weight: 600;'><a href='tel:" + (data.phone || "") + "'>" + (data.phone || "") + "</a></td></tr>"
        + "      <tr><td style='padding: 8px 0; color: #6B7280;'>Email:</td><td><a href='mailto:" + (data.email || "") + "'>" + (data.email || "") + "</a></td></tr>"
        + "      <tr><td style='padding: 8px 0; color: #6B7280;'>Destination:</td><td style='font-weight: 600;'>" + (data.destination || "Not specified") + "</td></tr>"
        + "      <tr><td style='padding: 8px 0; color: #6B7280;'>Curated Package:</td><td>" + (data.packageTitle || "Custom Itinerary") + "</td></tr>"
        + "      <tr><td style='padding: 8px 0; color: #6B7280;'>Hotel Category:</td><td style='font-weight: 600; color: #047857;'>" + (data.hotelRating || "Open to recommendation") + "</td></tr>"
        + "      <tr><td style='padding: 8px 0; color: #6B7280;'>Preferred Hotel:</td><td>" + (data.hotelName || "None selected") + "</td></tr>"
        + "      <tr><td style='padding: 8px 0; color: #6B7280;'>Travel Timing / Dates:</td><td>" + (data.travelMonth || "Flexible") + "</td></tr>"
        + "      <tr><td style='padding: 8px 0; color: #6B7280;'>Travelers:</td><td>" + (data.travelersCount || "2") + "</td></tr>"
        + "      <tr><td style='padding: 8px 0; color: #6B7280; vertical-align: top;'>Special Requests:</td><td>" + (data.message ? data.message.replace(/\n/g, "<br/>") : "None") + "</td></tr>"
        + "    </table>"
        + "    <div style='margin-top: 24px; padding: 12px; background: #FEF3C7; border-radius: 6px; font-size: 12px; color: #92400E; text-align: center;'>"
        + "      ℹ️ <strong>Action:</strong> Central desk please review and dispatch to Ticketing (Pratik), Tours (Sakshi), or Holidays (Office)."
        + "    </div>"
        + "    <div style='margin-top: 20px; padding-top: 16px; border-top: 1px solid #E5E7EB; font-size: 12px; color: #9CA3AF; text-align: center;'>"
        + "      Darsh Dream Tours LLP · IATA: 14039896 · SF-1, Sun Complex, Race Course, Vadodara"
        + "    </div>"
        + "  </div>"
        + "</div>";

      MailApp.sendEmail({
        to: recipientEmail,
        replyTo: data.email || undefined,
        subject: subject,
        htmlBody: htmlBody
      });
    } catch (mailError) {
      Logger.log("Email sending error: " + mailError.toString());
    }

    lock.releaseLock();

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Row added to Google Sheet and email notification sent."
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "online",
    message: "Darsh Dream Tours Enquiry Webhook is active."
  })).setMimeType(ContentService.MimeType.JSON);
}
