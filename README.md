# Staycore — Hotel Booking Platform

> **One platform for every hotel booking — yours, theirs, and everyone else’s.**

Built with **React**, **Vite**, and a bespoke **Dark Luxury** aesthetic (inspired by the AMBER Interiors design style: obsidian charcoal, muted sage green accents, warm champagne gold highlights, and editorial serif typography).

---

## 📁 Repository Structure

```
stay core website/
├── .gitignore                   # Comprehensive ignore rules (dependencies, build, env, OS, cache)
├── package.json                 # Project scripts and dependencies (React 18, React Router, Lucide)
├── vite.config.js               # Vite configuration (port 3000)
├── index.html                   # Vite HTML entrypoint with luxury typography
├── README.md                    # Project documentation
│
├── public/                      # Static assets served directly by Vite
│   └── assets/
│       └── images/              # High-resolution dark luxury hotel photography
│           ├── hero-suite.jpg
│           ├── hotel-lounge.jpg
│           └── hotel-villa.jpg
│
├── src/                         # Application source code
│   ├── main.jsx                 # React root entrypoint with BrowserRouter
│   ├── App.jsx                  # Main layout, routing, scroll restoration, and toast handler
│   ├── index.css                # Luxury design tokens, glassmorphism, and responsive utilities
│   │
│   ├── components/              # Modular, reusable UI components
│   │   ├── Navbar.jsx           # Fixed frosted glass header, mobile drawer, active routing
│   │   ├── Footer.jsx           # Sitemap links, COAB branding line ("Built by COAB")
│   │   ├── HeroDashboardPreview.jsx # Clickable room matrix, live occupancy calculator, OTA feed
│   │   ├── OtaComparison.jsx    # Interactive Before vs. After OTA email parser toggle
│   │   ├── DirectBookingPreview.jsx # Direct booking bar with STAYDIRECT promo code
│   │   ├── PricingCalculator.jsx # Dynamic room count slider (5-150 keys) with ROI calculation
│   │   ├── FaqAccordion.jsx     # Smooth collapsible FAQ accordion
│   │   ├── DemoBookingWidget.jsx # Calendly-style interactive date picker & booking form
│   │   └── Toast.jsx            # Dynamic micro-notification feedback
│   │
│   └── pages/                   # Application views
│       ├── Home.jsx             # Home page (/)
│       ├── Features.jsx         # Features deep-dive (/features)
│       ├── WebsiteOnly.jsx      # Website-Only Plan (/website-only)
│       ├── Pricing.jsx          # Pricing & ROI calculator (/pricing)
│       ├── About.jsx            # About & COAB story (/about)
│       ├── Resources.jsx        # Guides & Knowledge Hub (/resources)
│       ├── GuideDetail.jsx      # Individual Guide Page (/resources/:slug)
│       └── Contact.jsx          # Demo booking & contact channels (/contact)
```

---

## 🚀 Available Scripts

### Run Development Server
```bash
npm run dev
```
Starts the Vite development server with Hot Module Replacement (HMR) at `http://localhost:3000/`.

### Run Production Build & Validation Test
```bash
npm run test
# or
npm run build
```
Compiles the application for production, performs module validation, and outputs optimized static bundles into `dist/`.

### Preview Production Build
```bash
npm run preview
```
Spins up a local server to preview the production build output from `dist/`.

---

## 🎨 Design System

- **Background Palette**: Deep obsidian and charcoal (`#07080a`, `#0a0c0f`, `#101318`, `#161a22`)
- **Accent System**:
  - Muted Sage Green: `--accent-sage` (`#5e8172`), `--accent-sage-light` (`#779c8d`)
  - Warm Champagne Gold: `--accent-gold` (`#c7ad85`), `--accent-gold-light` (`#e0cca8`)
- **Typography**:
  - Headings: `Manrope` (Clean, Modern High-Tech SaaS Headings)
  - Interface & Body: `Inter` (Crisp, High-legibility Modern SaaS Body)
- **Glassmorphism**: Translucent card panels with backdrop blur (`16px–24px`) and micro-borders (`1px solid rgba(255, 255, 255, 0.07)`).

---

## 🏢 Built by COAB

Staycore is engineered by **COAB** — product-first software creators behind **SkoolPay** and **SkoolWay**.
