/**
 * ============================================================================
 * DARSH DREAM TOURS - GOOGLE APPS SCRIPT FOR GOOGLE SHEETS & EMAIL ENQUIRIES
 * Handles International Country Codes (+91, +971, +44, +1, etc.) without #ERROR!
 * ============================================================================
 * 
 * Central Email Destination: info@darshdreamtours.com
 * (All alerts route exclusively to central info desk for review & delegation)
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
        "Phone / Mobile (With Country Code)",
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
      // Format entire column 7 (Phone) as Plain Text
      sheet.getRange("G:G").setNumberFormat("@");
    }

    var data = JSON.parse(e.postData.contents);

    var isUrgent = data.urgentLastMinute || (data.serviceType === "last_minute_hotel");

    // Map department to readable central label
    var deptLabels = {
      ticketing: "Ticketing & Flights Desk",
      tours: "Tours & Curated Packages Desk",
      holidays: "Holidays & Group Tours Desk"
    };
    var deptName = deptLabels[data.department] || data.department || "Central Consultation Desk";
    if (isUrgent) {
      deptName = "⚡ URGENT LAST-MINUTE HOTEL DESK";
    }

    // ========================================================================
    // CRITICAL FIX FOR EXCEL & GOOGLE SHEETS #ERROR! ON PHONE NUMBERS:
    // In Excel & Google Sheets, any value starting with '+' (e.g. '+91 7016841389')
    // is automatically interpreted as an invalid formula, causing #ERROR!
    // Prepending an apostrophe (') forces Sheets/Excel to treat it as Plain Text
    // without displaying the apostrophe in the cell.
    // ========================================================================
    var rawPhone = (data.phone || "").toString().trim();
    var safePhone = rawPhone;
    if (safePhone && safePhone.charAt(0) !== "'") {
      safePhone = "'" + safePhone;
    }

    // 1. APPEND ROW TO GOOGLE SHEET
    sheet.appendRow([
      new Date(),
      data.id || "",
      isUrgent ? "⚡ YES (LAST MINUTE)" : "Normal",
      (data.department || "").toUpperCase(),
      deptName,
      data.name || "",
      safePhone,
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

    // Force the Phone cell in the new row to Plain Text
    var newRow = sheet.getLastRow();
    sheet.getRange(newRow, 7).setNumberFormat("@");

    // 2. SEND INSTANT EMAIL NOTIFICATION EXCLUSIVELY TO INFO@DARSHDREAMTOURS.COM
    try {
      var recipientEmail = "info@darshdreamtours.com";

      var cleanPhoneDisplay = rawPhone.replace(/^'/, "");
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
        + "      <tr><td style='padding: 8px 0; color: #6B7280; width: 180px;'>Requested Service:</td><td style='font-weight: 600; color: #B87543;'>" + deptName + "</td></tr>"
        + "      <tr><td style='padding: 8px 0; color: #6B7280;'>Customer Name:</td><td style='font-weight: 600;'>" + (data.name || "") + "</td></tr>"
        + "      <tr><td style='padding: 8px 0; color: #6B7280;'>Phone (With Country Code):</td><td style='font-weight: 600;'><a href='tel:" + cleanPhoneDisplay.replace(/\s+/g, '') + "'>" + cleanPhoneDisplay + "</a></td></tr>"
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
        + "      ℹ️ <strong>Action:</strong> Central desk please review and delegate this lead to the relevant team specialist."
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
