# Darsh Dream Tours — Secure Enquiry System, Google Sheets & Email Setup

## 1. Overview
The website features an interactive **Personal Travel Concierge Chatbot** that conversationally collects trip preferences, packages, 2★ to 5★ hotel choices, and contact details with international country codes.

Inquiries are captured and routed as follows:
- **Local Fallback Storage:** Automatically saved to `src/data/enquiries.json` (zero lead loss, offline-safe).
- **Google Sheets Integration:** Automatically appends a new row to your Google Sheet with timestamp, reference ID, customer contact info, destination, package, hotel choice, and notes.
- **Instant Email Alerts:** Automatically sends formatted email notifications exclusively to `info@darshdreamtours.com` so the central desk can review and assign/forward the inquiry to the appropriate department.
- **No Direct WhatsApp:** All communication is routed securely without exposing private staff numbers.

---

## 2. Preventing `#ERROR!` in Google Sheets / Excel on Country Codes

### Why `#ERROR! Formula parse error.` Occurred:
In Microsoft Excel and Google Sheets, **any cell starting with `+` (such as `+91 7016841389`) is automatically intercepted as an addition formula** (`=+91 7016841389`). Because the country code is followed by a space and 10 digits, the spreadsheet formula engine tries to compute an arithmetic operation, fails, and outputs:
```
Error
Formula parse error. 
+91 7016841389
```

### How We Permanently Solved It:
1. **Parentheses Country Code Standardization (`(+91) 7016841389`):**
   The application (`/api/enquiry` and `TravelChatbot.tsx`) automatically standardizes all phone numbers into the international standard format:
   `(+91) 7016841389` (or `(+971) 50 1234567`, `(+44) 7911 123456`, `(+1) 415 555 2671`).
   Because the first character is `(`, Excel and Google Sheets **never** treat it as a mathematical formula operator (`+`, `-`, `=`). It evaluates as 100% pure text without `#ERROR!`.
2. **Interactive Country Code Selector in Chatbot:**
   The concierge asks for the client's country code with 1-tap quick buttons (`🇮🇳 +91`, `🇦🇪 +971`, `🇬🇧 +44`, `🇺🇸 +1`, `🇸🇬 +65`, `🇦🇺 +61`, `🇸🇦 +966`, `🇶🇦 +974`), pre-filling `(+91) ` so clients know their country code is registered.
3. **Google Apps Script Plain Text Format:**
   [`scripts/google-sheets-script.js`](file:///Users/aditya/Documents/DARSH%20TOURS/scripts/google-sheets-script.js) explicitly formats Column G (Phone) with `.setNumberFormat("@")` and converts any raw `+` prefix into `(+code)` automatically before appending.
4. **Smart Dialing Preserved:**
   Phone dialers, iOS, macOS, Android, and `tel:` links automatically strip parentheses, dialing `+917016841389` seamlessly.

### If You Have Existing Rows in Google Sheets Showing `#ERROR!`:
1. In your Google Sheet, click the letter **G** header at the top to select the entire **Phone** column.
2. In the top menu, click **Format → Number → Plain text**.
3. For any cell currently displaying `#ERROR!`, simply replace the text with `(+91) 7016841389` or type an apostrophe `'` before `+91` (e.g. `'+91 7016841389`).
4. In **Extensions → Apps Script**, copy and re-paste the updated code from [`scripts/google-sheets-script.js`](file:///Users/aditya/Documents/DARSH%20TOURS/scripts/google-sheets-script.js), then click **Save** and **Deploy > Manage deployments > Edit > New version > Deploy**.

---

## 3. Dedicated Department Contact Desks
The 3 dedicated numbers and contact details are organized in the exact order requested:

| Order | Department | Contact Person | Phone Number | Direct Email | Specialization |
|---|---|---|---|---|---|
| **1st** | **Ticketing** | Pratik | `+91 70483 86900` | `sales@darshdreamtours.com` | Flights, visas, express rail & Urgent Last-Minute Hotel Desk |
| **2nd** | **Tours** | Sakshi Chandiramani | `+91 74870 83499` | `sakshi@darshdreamtours.com` | Custom luxury itineraries, private bespoke tours across India & worldwide |
| **3rd** | **Holidays** | Office Desk | `+91 97243 91674` | `info@darshdreamtours.com` | Curated vacation packages, family holidays & honeymoon retreats |

### Official Accreditation & Legal Details:
- **Entity Name:** DARSH DREAM TOURS LLP
- **IATA Accredited No:** 14039896
- **GSTIN:** 24AAZFD6999A1ZU
- **PAN:** AAZFD6999A
- **Address:** SF-1, Sun Complex, 1 Abhishek Colony, Gotri Road, Race Course, Vadodara, Gujarat 390007

---

## 4. How to Connect Google Sheets & Email Notifications (2-Minute Setup)

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

### Step 4: Add to your `.env.local` or Vercel Environment Variables
In `.env.local` or Vercel Settings > Environment Variables:
```env
GOOGLE_SHEETS_WEBHOOK_URL="https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec"
```
Every time a client finishes chatting with the concierge:
1. It automatically appends a formatted row to your Google Sheet with:
   `Timestamp | Reference ID | Urgent? | Department | Assigned Desk | Customer Name | Phone (With Country Code) | Email | Destination | Service/Package | Hotel Category (2★-5★) | Hotel Name | Travel Month | Travelers | Special Requests | Status`
2. It automatically sends an email alert with full trip details exclusively to **`info@darshdreamtours.com`**.
