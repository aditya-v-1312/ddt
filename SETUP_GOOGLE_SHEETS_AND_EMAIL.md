# Darsh Dream Tours — Secure Enquiry System, Google Sheets & Email Setup

## 1. Overview
Direct WhatsApp links have been replaced with a **secure travel inquiry form** across the entire website. This prevents exposing client numbers, avoids spam, and ensures all leads are structured and recorded.

Inquiries are captured and routed as follows:
- **Local Fallback Storage:** Automatically saved to `src/data/enquiries.json` (zero lead loss, completely offline-safe).
- **Google Sheets Integration:** Automatically appends a new row to your Google Sheet with timestamp, reference ID, customer contact info, destination, and requirements.
- **Instant Email Alerts:** Automatically sends formatted email notifications exclusively to `info@darshdreamtours.com` so the central desk can review and assign/forward the inquiry to the appropriate department.

---

## 2. Dedicated Department Contact Desks
The 3 dedicated numbers and contact details are organized in the exact order requested:

| Order | Department | Contact Person | Phone Number | Direct Email | Specialization |
|---|---|---|---|---|---|
| **1st** | **Ticketing** | Pratik | `+91 70483 86900` | `sales@darshdreamtours.com` | Domestic & international flights, visa assistance & express rail bookings |
| **2nd** | **Tours** | Sakshi Chandiramani (Co-Founder) | `+91 74870 83499` | `sakshi@darshdreamtours.com` | Custom luxury itineraries, private bespoke tours across India & worldwide |
| **3rd** | **Holidays** | Office Desk | `+91 97243 91674` | `info@darshdreamtours.com` | Curated vacation packages, family holidays & honeymoon retreats |

### Official Accreditation & Legal Details:
- **Entity Name:** DARSH DREAM TOURS LLP
- **IATA Accredited No:** 14039896
- **GSTIN:** 24AAZFD6999A1ZU
- **PAN:** AAZFD6999A
- **Address:** SF-1, Sun Complex, 1 Abhishek Colony, Gotri Road, Race Course, Vadodara, Gujarat 390007

---

## 3. How to Connect Google Sheets & Email Notifications (2-Minute Setup)

You do **not** need complex Google Cloud Service Accounts or API keys. We have provided a ready-to-run Google Apps Script in [`scripts/google-sheets-script.js`](file:///Users/aditya/Documents/DARSH%20TOURS/scripts/google-sheets-script.js).

### Step 1: Create Your Google Sheet
1. Go to [Google Sheets](https://sheets.new) and create a new sheet.
2. Name it **"Darsh Dream Tours Enquiries"**.

### Step 2: Add the Apps Script
1. In Google Sheets top menu, click **Extensions > Apps Script**.
2. Delete any default code in `Code.gs`.
3. Open [`scripts/google-sheets-script.js`](file:///Users/aditya/Documents/DARSH%20TOURS/scripts/google-sheets-script.js) from this project, copy the entire contents, and paste it into the editor.
4. Click the **Save** icon (disk).

### Step 3: Deploy as Web App
1. Click the blue **Deploy** button at top right > choose **New deployment**.
2. Click the gear icon next to "Select type" and select **Web app**.
3. Set the following settings:
   - **Description:** `Darsh Dream Tours Webhook`
   - **Execute as:** `Me (your email)`
   - **Who has access:** `Anyone` *(required so your website can send leads)*
4. Click **Deploy**. Google will ask you to authorize access; accept the permissions.
5. Copy the generated **Web app URL** (looks like: `https://script.google.com/macros/s/.../exec`).

### Step 4: Add to your `.env.local`
In your website project root, open `.env.local` (or create it) and add:
```env
GOOGLE_SHEETS_WEBHOOK_URL="https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec"
```
That's it! Every time someone submits an inquiry on the website:
1. It immediately appends a formatted row to your Google Sheet with:
   `Timestamp | Reference ID | Department | Customer Name | Phone | Email | Destination | Timing | Travelers | Message`
2. It automatically sends an email alert with full trip details exclusively to **`info@darshdreamtours.com`** (the central desk person can then review and forward it to Ticketing or Tours accordingly).

---

## 4. Key Security & Privacy Enhancements
1. **No Client Number Leakage:** Website visitors fill a structured form over SSL/HTTPS instead of launching raw WhatsApp links.
2. **Spam & Bot Protection:** Invisible honeypot field (`_honey`) silently filters out automated spam submissions.
3. **Local Audit Trail:** All enquiries are timestamped and preserved in `src/data/enquiries.json`.
4. **Git Policy:** All changes remain strictly on your local machine. Nothing has been pushed to GitHub.
