/**
 * ============================================================================
 * DARSH DREAM TOURS - GOOGLE APPS SCRIPT FOR GOOGLE SHEETS & EMAIL ENQUIRIES
 * ============================================================================
 * 
 * HOW TO SET THIS UP (Takes 2 minutes):
 * 1. Open Google Sheets (https://sheets.new) and name it "Darsh Dream Tours Enquiries".
 * 2. In the top menu, click Extensions > Apps Script.
 * 3. Delete any code in the editor, paste this entire script, and click "Save" (disk icon).
 * 4. Click the blue "Deploy" button at top right > "New deployment".
 * 5. Click the gear icon next to "Select type" > choose "Web app".
 * 6. Set:
 *    - Description: "Darsh Dream Tours Enquiry Webhook"
 *    - Execute as: "Me" (your email)
 *    - Who has access: "Anyone" (crucial for receiving website enquiries)
 * 7. Click "Deploy". Grant permissions when Google prompts you.
 * 8. Copy the "Web app URL" (looks like https://script.google.com/macros/s/.../exec).
 * 9. Paste that URL into your website's `.env.local` file:
 *    GOOGLE_SHEETS_WEBHOOK_URL="https://script.google.com/macros/s/.../exec"
 * ============================================================================
 */

function doPost(e) {
  try {
    var lock = LockService.getScriptLock();
    lock.waitLock(30000); // Wait up to 30s for other processes

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Ensure header row exists
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Reference ID",
        "Department",
        "Assigned Desk",
        "Customer Name",
        "Phone / WhatsApp",
        "Email",
        "Destination",
        "Travel Month / Timing",
        "Travelers Count",
        "Message / Details",
        "Status"
      ]);
      sheet.getRange(1, 1, 1, 12).setFontWeight("bold").setBackground("#07101F").setFontColor("#FFFFFF");
      sheet.setFrozenRows(1);
    }

    var data = JSON.parse(e.postData.contents);

    // Map department to readable label
    var deptLabels = {
      ticketing: "Ticketing (Pratik: +91 70483 86900)",
      tours: "Tours (Sakshi Chandiramani: +91 74870 83499)",
      holidays: "Holidays (Office: +91 97243 91674)"
    };
    var deptName = deptLabels[data.department] || data.department || "General Enquiry";

    // 1. APPEND ROW TO GOOGLE SHEET
    sheet.appendRow([
      new Date(),
      data.id || "",
      (data.department || "").toUpperCase(),
      deptName,
      data.name || "",
      data.phone || "",
      data.email || "",
      data.destination || "Not specified",
      data.travelMonth || "Flexible",
      data.travelersCount || "2",
      data.message || "",
      "New"
    ]);

    // 2. SEND INSTANT EMAIL NOTIFICATION ONLY TO CENTRAL INFO DESK
    try {
      // Central info mailbox receives all inquiries to avoid bothering department specialists
      // The info desk person reviews and forwards the enquiry accordingly
      var recipientEmail = "info@darshdreamtours.com";

      var subject = "✨ New Travel Enquiry [" + (data.id || "DDT") + "] - " + (data.name || "Client") + " (Desk: " + (data.department || "Tours").toUpperCase() + ")";

      var htmlBody = ""
        + "<div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #E5E7EB; border-radius: 12px; overflow: hidden;'>"
        + "  <div style='background: #07101F; padding: 24px; color: #FFFFFF; text-align: center;'>"
        + "    <h2 style='margin: 0; font-size: 20px; letter-spacing: 2px; color: #E2B18D;'>DARSH DREAM TOURS</h2>"
        + "    <p style='margin: 6px 0 0; font-size: 13px; color: #9CA3AF;'>New Website Travel Enquiry Received</p>"
        + "  </div>"
        + "  <div style='padding: 24px; background: #FFFFFF; color: #1F2937; line-height: 1.6;'>"
        + "    <div style='background: #F3F4F6; padding: 12px 16px; border-radius: 8px; margin-bottom: 20px;'>"
        + "      <p style='margin: 0; font-size: 12px; color: #6B7280;'>REFERENCE ID</p>"
        + "      <p style='margin: 2px 0 0; font-size: 16px; font-weight: bold; color: #B87543;'>" + (data.id || "") + "</p>"
        + "    </div>"
        + "    <table style='width: 100%; border-collapse: collapse; font-size: 14px;'>"
        + "      <tr><td style='padding: 8px 0; color: #6B7280; width: 150px;'>Requested Desk:</td><td style='font-weight: 600; color: #B87543;'>" + deptName + "</td></tr>"
        + "      <tr><td style='padding: 8px 0; color: #6B7280;'>Customer Name:</td><td style='font-weight: 600;'>" + (data.name || "") + "</td></tr>"
        + "      <tr><td style='padding: 8px 0; color: #6B7280;'>Phone / WhatsApp:</td><td style='font-weight: 600;'><a href='tel:" + (data.phone || "") + "'>" + (data.phone || "") + "</a></td></tr>"
        + "      <tr><td style='padding: 8px 0; color: #6B7280;'>Email:</td><td><a href='mailto:" + (data.email || "") + "'>" + (data.email || "") + "</a></td></tr>"
        + "      <tr><td style='padding: 8px 0; color: #6B7280;'>Destination:</td><td style='font-weight: 600;'>" + (data.destination || "Not specified") + "</td></tr>"
        + "      <tr><td style='padding: 8px 0; color: #6B7280;'>Travel Timing:</td><td>" + (data.travelMonth || "Flexible") + "</td></tr>"
        + "      <tr><td style='padding: 8px 0; color: #6B7280;'>Travelers:</td><td>" + (data.travelersCount || "2") + "</td></tr>"
        + "      <tr><td style='padding: 8px 0; color: #6B7280; vertical-align: top;'>Special Requests:</td><td>" + (data.message ? data.message.replace(/\n/g, "<br/>") : "None") + "</td></tr>"
        + "    </table>"
        + "    <div style='margin-top: 24px; padding: 12px; background: #FEF3C7; border-radius: 6px; font-size: 12px; color: #92400E; text-align: center;'>"
        + "      ℹ️ <strong>Action Required:</strong> Please review and forward this lead to the relevant department specialist (Ticketing: Pratik / Tours: Sakshi / Holidays: Office)."
        + "    </div>"
        + "    <div style='margin-top: 20px; padding-top: 16px; border-top: 1px solid #E5E7EB; font-size: 12px; color: #9CA3AF; text-align: center;'>"
        + "      Darsh Dream Tours LLP · SF-1, Sun Complex, Race Course, Vadodara · +91 97243 91674"
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
