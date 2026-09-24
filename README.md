# DARSH DREAM TOURS — Official Website

> **"YOUR JOURNEY. YOUR DREAM. YOUR WORLD."**

A bespoke, production-ready travel agency website crafted for **Darsh Dream Tours**, founded and partnered by **Sakshi Chandiramani** in Vadodara, Gujarat.

Designed with an editorial, magazine-grade aesthetic that pairs cinematic storytelling with human boutique service.

---

## 🌟 Signature Features & Architecture

1. **Cinematic Opening Airplane Sequence (`IntroAnimation.tsx`)**
   - Elegant 4–5 second journey prologue introducing the brand logo and sweeping curved flight arc (`INDIA → DUBAI → EUROPE`).
   - Pure vector SVG aircraft calculated with dynamic mathematical tangent rotation.
   - Smooth transition into the homepage.
   - `sessionStorage` guard ensures it runs once per browser session.
   - Respects `prefers-reduced-motion` for accessibility.
   - Interactive **Skip Intro** control and **Replay Opening Flight** option in the footer.

2. **Editorial Hero Section (`Hero.tsx`)**
   - High-impact serif headline: *YOUR JOURNEY. YOUR DREAM. YOUR WORLD.*
   - Authentic Vadodara origin waypoint and quick action CTAs (*Explore Destinations*, *Plan My Journey*).
   - Subtle recurring flight arc motif reinforcing brand identity.

3. **Interactive Signature World Map (`WorldMap.tsx`)**
   - Deep navy canvas (`#08152F`) with luxury latitude/longitude navigation grid.
   - Vadodara, India established as the central departure hub.
   - Interactive copper waypoints across India and global destinations (Dubai, Switzerland, Maldives, Bali, Singapore, Thailand, Kashmir, Kerala).
   - Real-time waypoint previews with destination tags, ideal travel season, and one-click planner routing.

4. **Editorial Destination Explorer (`DestinationExplorer.tsx`)**
   - Asymmetrical magazine grid avoiding repetitive card templates.
   - Region filter tabs (*All Escapes*, *Incredible India*, *International*).
   - Interactive quick-view cards highlighting curated travel experiences.

5. **Travel Styles & Experiences (`TravelCategories.tsx`)**
   - Visual photography collage covering Beach Escapes, Honeymoon Journeys, Family Holidays, Adventure & Discovery, International Travel, and Incredible India.

6. **Featured Journeys (`FeaturedJourneys.tsx`)**
   - Alternating editorial magazine spreads detailing signature journeys: Dubai, Kashmir, Switzerland, and Kerala.
   - Ethical luxury positioning: "Enquire For Itinerary" instead of fabricated price tags.

7. **Why Darsh Dream Tours (`WhyDarshDream.tsx`)**
   - 4 authentic brand trust pillars: *Personalized Itineraries*, *End-to-End Assistance*, *Travel Guidance*, and *Memories Over Checklists*.
   - Strictly authentic: zero fake statistics, fake awards, or exaggerated claims.

8. **Meet Sakshi (`AboutSakshi.tsx`)**
   - Human boutique spotlight for Partner **Sakshi Chandiramani**.
   - Grounded in personal travel philosophy and authentic Vadodara roots.
   - Direct click-to-chat WhatsApp button pre-filled for Sakshi (+91 97243 91674).

9. **Bespoke Journey Planner (`JourneyPlanner.tsx`)**
   - 4-step interactive conversion experience:
     - **01 WHERE?**: Destination picker + custom input.
     - **02 WHEN?**: Travel month / season selector.
     - **03 WHO?**: Travel style (Solo, Couple, Family, Friends, Group, Honeymoon) & traveler count.
     - **04 LET'S PLAN**: Guest contact information and personal requests.
   - Generates an instant confirmation state with a formatted WhatsApp enquiry payload directly opening WhatsApp with Sakshi, alongside a one-click mailto fallback.

10. **Floating WhatsApp Instant Connect (`WhatsAppButton.tsx`)**
    - Bottom-right luxury floating action button with pulsing status dot and dismissible tooltip.

---

## 🎨 Brand Design System

| Element | Specification | Hex Code |
| :--- | :--- | :--- |
| **Royal Navy** | Primary brand blue from logo | `#244586` |
| **Deep Navy** | Signature night canvas | `#08152F` |
| **Midnight** | Deepest background shade | `#050D20` |
| **Copper** | Signature accent from logo | `#9A5B2D` |
| **Warm Copper** | Highlight & hover accent | `#B87543` |
| **Warm Off-White** | Editorial day canvas | `#F8F7F3` |
| **Editorial Serif** | Headings & titles | `Cormorant Garamond` |
| **Clean Sans-Serif** | Body & interface UI | `Manrope` |

---

## 📁 Project Directory Structure

```text
darsh-dream-tours/
├── public/
│   └── images/
│       ├── logo.jpg               # Official Darsh Dream Tours brand logo
│       └── business_card.jpg      # Official business reference asset
├── src/
│   ├── app/
│   │   ├── globals.css            # Design tokens, smooth scrolling, typography
│   │   ├── layout.tsx             # Root layout, Google Fonts, SEO OpenGraph metadata
│   │   └── page.tsx               # Homepage assembling all sections and state
│   ├── components/
│   │   ├── IntroAnimation.tsx     # Cinematic SVG opening flight sequence
│   │   ├── VectorAirplane.tsx     # Luxury vector aircraft geometry
│   │   ├── Navbar.tsx             # Responsive navbar with blur and mobile drawer
│   │   ├── Hero.tsx               # Editorial headline & curated photography
│   │   ├── WorldMap.tsx           # Signature interactive deep navy world map
│   │   ├── DestinationExplorer.tsx# Asymmetrical global destination layouts
│   │   ├── TravelCategories.tsx   # Curated travel styles photo collage
│   │   ├── FeaturedJourneys.tsx   # Alternating luxury magazine spreads
│   │   ├── WhyDarshDream.tsx      # 4 authentic brand pillars
│   │   ├── AboutSakshi.tsx        # Partner spotlight & boutique philosophy
│   │   ├── JourneyPlanner.tsx     # 4-step bespoke multi-step enquiry form
│   │   ├── Testimonials.tsx       # Ready architecture (hidden until real reviews exist)
│   │   ├── FinalCTA.tsx           # Cinematic closing section with flight motif
│   │   ├── Footer.tsx             # Vadodara address, contact, replay intro
│   │   └── WhatsAppButton.tsx     # Floating quick-chat action
│   ├── data/
│   │   ├── siteConfig.ts          # Central business data, contact, phone, address
│   │   ├── destinations.ts        # Destination metadata, coordinates, highlights
│   │   ├── travelCategories.ts    # Categories and curated focus points
│   │   ├── featuredJourneys.ts    # Magazine spread copy and narrative
│   │   └── images.ts              # Centralized high-res Unsplash photography links
│   └── lib/
│       └── utils.ts               # Class merging utilities
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0 or later)
- npm or yarn

### Installation & Development

```bash
# 1. Install dependencies (if not already installed)
npm install

# 2. Run local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Compile and optimize static pages
npm run build

# Start production server
npm start
```

---

## 🛠 Centralized Customization Guide

### 1. Updating Business Information
All business information is decoupled from UI components. To update phone numbers, address, or email, edit:
`src/data/siteConfig.ts`

### 2. Replacing Photography
All travel photography is organized in:
`src/data/images.ts`
Simply replace any Unsplash URL with your own image or asset path without modifying any components.

### 3. Adding Verified Testimonials
In accordance with our strict no-fake-reviews policy, the testimonials section is currently hidden. Once Sakshi collects authentic traveler reviews, open `src/components/Testimonials.tsx`:
1. Add traveler quote objects into the `realTestimonials` array.
2. The section will automatically render beautifully.

---

## 📍 Contact & Business Details

- **Business**: DARSH DREAM TOURS
- **Partner**: SAKSHI CHANDIRAMANI
- **Phone / WhatsApp**: [+91 97243 91674](tel:+919724391674)
- **Email**: [sakshi@darshdreamtours.com](mailto:sakshi@darshdreamtours.com)
- **Website**: [www.darshdreamtours.com](https://www.darshdreamtours.com)
- **Address**: SFI Sun Complex, 1 Abhishek Colony, Gotri Road, Race Course, Vadodara 390007, Gujarat, India.
# ddt
