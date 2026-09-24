# DARSH DREAM TOURS — Official Website

> **"YOUR JOURNEY. YOUR DREAM. YOUR WORLD."**

A bespoke, production-ready travel agency website crafted for **Darsh Dream Tours**, founded and partnered by **Sakshi Chandiramani** in Vadodara, Gujarat.

Designed with an **editorial travel magazine aesthetic** that pairs cinematic storytelling with human boutique service, avoiding generic SaaS or template-like layouts.

---

## 🌟 Visual Art Direction & Architecture

1. **Continuous Narrative Journey (`Hero.tsx` & `IntroAnimation.tsx`)**
   - The opening airplane prologue and the hero live on the same **warm off-white canvas (`#F8F7F3`)**.
   - As the vector airplane glides along the sweeping bezier flight arc past **India**, **Dubai**, and **Europe**, the path connects directly across into the hero layout.
   - The left column reveals the large editorial headline (*Your Journey. Your Dream. Your World.*) while the right reveals the commanding editorial travel visual.
   - Guarded by `sessionStorage` (runs once per session), with **Skip Intro**, `prefers-reduced-motion` support, and a **Replay Opening Flight** option in the footer.

2. **Minimalist Floating Top Navigation (`Navbar.tsx`)**
   - Transparent over the warm off-white hero initially, transitioning on scroll to a frosted translucent bar with subtle blur and hairline border.
   - Left-aligned official brand logo (`/images/logo.jpg`), natural proportions preserved.
   - Desktop editorial links and "LET'S TALK" quick CTA; elegant full-screen mobile menu drawer.

3. **Editorial Destination Spread (`DestinationExplorer.tsx`)**
   - Replaces repetitive card grids with an asymmetrical magazine layout:
     - 1 large feature editorial spread (e.g. Dubai / Kashmir with full narrative, highlights, and itinerary link).
     - Staggered dual perspectives (Switzerland Alps & Bali sanctuaries) with varied aspect ratios.
     - Full-width panoramic horizon showcase (Kerala backwaters).
     - Asymmetrical supporting mosaic with typography living cleanly around the photography.

4. **Signature Interactive World Map (`WorldMap.tsx`)**
   - Serves as a dramatic **night contrast moment** (`#08152F`).
   - Vadodara, India established as the central departure hub.
   - Curved flight arcs sweeping to Dubai, Switzerland, Maldives, Bali, Singapore, Thailand.
   - Slow cruising vector airplane motif.
   - Interactive waypoint inspection cards with destination overview, best seasons, and one-click planner routing.

5. **Travel Styles & Experiences (`TravelCategories.tsx`)**
   - Dominant featured travel style spread (Honeymoon & Romantic Escapes) with narrative focus points.
   - Asymmetrical supporting gallery covering Beach Escapes, Family Holidays, Adventure & Discovery, International Travel, and Incredible India.

6. **Featured Journeys (`FeaturedJourneys.tsx`)**
   - Alternating luxury magazine spreads detailing signature journeys: **Dubai**, **Kashmir**, **Switzerland**, and **Kerala**.
   - Ethical luxury positioning: *"Plan This Journey"* instead of fabricated price tags.

7. **Editorial Principles Manifesto (`WhyDarshDream.tsx`)**
   - Numbered manifesto (`01`, `02`, `03`, `04`) connected by a subtle timeline rule:
     - *Personalized Itineraries*
     - *End-to-End Assistance*
     - *Travel Guidance*
     - *Memories Over Checklists*
   - Strictly authentic: zero fake statistics, fake awards, or exaggerated claims.

8. **Meet Sakshi (`AboutSakshi.tsx`)**
   - Human boutique agency spotlight on warm off-white background.
   - Partner **Sakshi Chandiramani**, Vadodara, Gujarat base.
   - Dedicated editorial portrait slot and authentic travel philosophy quote.
   - Direct click-to-chat WhatsApp button pre-filled for Sakshi (+91 97243 91674).

9. **Bespoke Consultation Suite (`JourneyPlanner.tsx`)**
   - 4-step progressive travel questionnaire:
     - **01 WHERE?**: Curated destinations + custom world input.
     - **02 WHEN?**: Season / month selector.
     - **03 WHO?**: Travel style & party size.
     - **04 PLAN**: Guest contact information and special requests.
   - Formats a pre-filled WhatsApp enquiry payload directly opening WhatsApp with Sakshi (+91 97243 91674) with a one-click email fallback.

10. **Testimonials Architecture (`Testimonials.tsx`)**
    - Strictly compliant with the no-fake-reviews policy: component is architected cleanly and hidden until verified reviews exist.

11. **Cinematic Final CTA & Footer (`FinalCTA.tsx` & `Footer.tsx`)**
    - Deep navy starlight closing section with cruising aircraft and direct CTAs.
    - Minimal luxury footer with verified Vadodara address, partner details, phone, email, and replay flight intro action.

12. **Floating WhatsApp Instant Connect (`WhatsAppButton.tsx`)**
    - Bottom-right floating action button with pulsing indicator and direct chat link.

---

## 🎨 Color Palette & Typography

| Token | Hex | Usage |
| :--- | :--- | :--- |
| **Warm Off-White** | `#F8F7F3` | Dominant editorial paper canvas |
| **Deep Navy** | `#08152F` | Night contrast sections (World Map, Final CTA, Footer) |
| **Royal Navy** | `#244586` | Brand accent from logo |
| **Copper** | `#9A5B2D` | Signature line and waypoint accent |
| **Warm Copper** | `#B87543` | Highlight and hover states |
| **Dark Text** | `#17213A` | High-contrast editorial body text |
| **Muted Text** | `#687080` | Subtle captions and metadata |
| **Headings** | `Cormorant Garamond` | Editorial serif (mixed case, generous line height) |
| **Body / UI** | `Manrope` | Modern, legible sans-serif |

---

## 🚀 Development & Build

```bash
# Run local development server
npm run dev

# Compile and optimize static pages
npm run build

# Start production server
npm start
```

---

## 📍 Business Details

- **Business**: DARSH DREAM TOURS
- **Partner**: SAKSHI CHANDIRAMANI
- **Phone / WhatsApp**: [+91 97243 91674](tel:+919724391674)
- **Email**: [sakshi@darshdreamtours.com](mailto:sakshi@darshdreamtours.com)
- **Website**: [www.darshdreamtours.com](https://www.darshdreamtours.com)
- **Address**: SFI Sun Complex, 1 Abhishek Colony, Gotri Road, Race Course, Vadodara 390007, Gujarat, India.
