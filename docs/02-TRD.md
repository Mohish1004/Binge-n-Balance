# Technical Requirements Document

## Binge N Balance — Website Development

---

# 1. Technical Stack

## Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.x | UI library |
| Vite | 5.x | Build tool / dev server |
| Tailwind CSS | 3.x | Utility-first styling |
| Framer Motion | 11.x | Animations / transitions |
| React Router | 6.x | Client-side routing |
| React Helmet Async | 2.x | SEO meta tags |

## Deployment

| Platform | Service |
|----------|---------|
| Vercel | Hosting + CI/CD |
| Vercel Analytics | Traffic monitoring |

## Optional (v1.1+)

| Tool | Purpose |
|------|---------|
| Hygraph / Sanity | Headless CMS for menu & events |
| SendGrid / Resend | Contact form email handling |
| Google Analytics 4 | Advanced analytics |

---

# 2. Project Structure

```
binge-n-balance/
├── public/
│   ├── favicon.ico
│   ├── og-image.png
│   ├── robots.txt
│   └── sitemap.xml
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── videos/
│   │   └── icons/
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Layout.jsx
│   │   │
│   │   ├── home/
│   │   │   ├── Hero.jsx
│   │   │   ├── Philosophy.jsx
│   │   │   ├── Experiences.jsx
│   │   │   ├── RecreationHub.jsx
│   │   │   ├── FounderVision.jsx
│   │   │   ├── Community.jsx
│   │   │   └── CTASection.jsx
│   │   │
│   │   ├── shared/
│   │   │   ├── Button.jsx
│   │   │   ├── SectionHeading.jsx
│   │   │   ├── WhatsAppFab.jsx
│   │   │   ├── ScrollToTop.jsx
│   │   │   └── ImageCard.jsx
│   │   │
│   │   └── ui/
│   │       ├── Card.jsx
│   │       ├── Badge.jsx
│   │       └── Modal.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Food.jsx
│   │   ├── Recreation.jsx
│   │   ├── Events.jsx
│   │   ├── Community.jsx
│   │   └── Contact.jsx
│   │
│   ├── hooks/
│   │   ├── useScrollAnimation.js
│   │   ├── useIntersectionObserver.js
│   │   └── useMediaQuery.js
│   │
│   ├── data/
│   │   ├── navigation.js
│   │   ├── experiences.js
│   │   ├── foodMenu.js
│   │   ├── recreation.js
│   │   ├── events.js
│   │   └── testimonials.js
│   │
│   ├── styles/
│   │   └── globals.css
│   │
│   ├── utils/
│   │   ├── cn.js
│   │   └── animations.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
├── package.json
├── vercel.json
└── README.md
```

---

# 3. Component Architecture

## Component Tree

```
App
├── Layout
│   ├── Navbar
│   ├── WhatsAppFab
│   └── Footer
│
└── Routes
    ├── Home
    │   ├── Hero
    │   ├── Philosophy
    │   ├── Experiences
    │   ├── RecreationHub
    │   ├── FounderVision
    │   ├── Community
    │   └── CTASection
    │
    ├── About
    │   ├── FounderStory
    │   ├── MissionVision
    │   └── BrandTimeline
    │
    ├── Food
    │   ├── BingeSection
    │   ├── BalanceSection
    │   └── SignatureDishes
    │
    ├── Recreation
    │   ├── PlayStationSection
    │   ├── SnookerSection
    │   ├── BilliardsSection
    │   ├── MiniPoolSection
    │   └── ReadingRoomSection
    │
    ├── Events
    │   ├── UpcomingEvents
    │   └── PastEvents
    │
    ├── Community
    │   ├── PhotoGrid
    │   └── MeetupHighlights
    │
    └── Contact
        ├── LocationMap
        ├── ContactForm
        └── ContactInfo
```

---

# 4. Data Flow

## Static Data

All content lives in `/src/data/` as JavaScript objects.

No backend API calls in v1.

### Data Modules

| Module | Exports | Used By |
|--------|---------|---------|
| navigation.js | navLinks array | Navbar, Footer |
| experiences.js | experienceCards array | Experiences section |
| foodMenu.js | bingeItems, balanceItems arrays | Food page |
| recreation.js | recreationItems array | Recreation page |
| events.js | upcomingEvents, pastEvents arrays | Events page |
| testimonials.js | testimonialCards array | Home testimonials |

## Form Submission

Contact form flow:

```
User fills form
    ↓
Client-side validation (zod or custom)
    ↓
POST to Formspree / Web3Forms
    ↓
Redirect to thank-you page
    ↓
Email notification to owner
```

---

# 5. Routing

## Route Table

| Path | Page | Component |
|------|------|-----------|
| `/` | Home | `Home.jsx` |
| `/about` | About | `About.jsx` |
| `/food` | Food & Drinks | `Food.jsx` |
| `/recreation` | Recreation | `Recreation.jsx` |
| `/events` | Events | `Events.jsx` |
| `/community` | Community | `Community.jsx` |
| `/contact` | Contact | `Contact.jsx` |

## Navigation

```javascript
const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Food & Drinks", path: "/food" },
  { label: "Recreation", path: "/recreation" },
  { label: "Events", path: "/events" },
  { label: "Community", path: "/community" },
  { label: "Contact", path: "/contact" },
];
```

---

# 6. State Management

## No Global State Library

v1 does not require Redux, Zustand, or Context.

Local component state is sufficient.

### State Categories

| State | Location | Type |
|-------|----------|------|
| Mobile menu open/closed | Navbar | useState |
| Active section (scroll spy) | Navbar | useEffect + IntersectionObserver |
| Form fields | ContactForm | useState |
| Form submission status | ContactForm | useState |
| Animation triggers | Various | useInView (Framer Motion) |

---

# 7. Animations

## Framer Motion Configuration

### Scroll Animations

```javascript
// fadeInUp — used across sections
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
};
```

### Stagger Children

```javascript
// staggerContainer — for card grids
const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true }
};
```

### Hover Effects

| Element | Effect |
|---------|--------|
| Cards | Scale 1.02 + shadow elevation |
| Buttons | Background shift + subtle scale |
| Nav links | Underline slide animation |
| Images | Gentle zoom on hover |

### Page Transitions

Fade transition between routes (optional):

```javascript
const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.4 }
};
```

---

# 8. Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 640px | Single column, hamburger menu |
| Tablet | 640–1024px | 2-column grids, collapsed nav |
| Desktop | 1024–1440px | Full layout, horizontal nav |
| Wide | > 1440px | Max-width container, larger spacing |

---

# 9. Performance Budget

| Asset Type | Limit |
|------------|-------|
| Total page weight | < 2MB |
| HTML | < 50KB |
| CSS (gzipped) | < 20KB |
| JavaScript (gzipped) | < 100KB |
| Hero video | < 5MB (optimized) |
| Images | < 200KB each (WebP) |
| Fonts | < 50KB total |

---

# 10. SEO Requirements

## Per-Page Meta

```javascript
// React Helmet Async usage
<Helmet>
  <title>Binge N Balance — Nashik's Lifestyle Destination</title>
  <meta name="description" content="..." />
  <meta property="og:title" content="..." />
  <meta property="og:description" content="..." />
  <meta property="og:image" content="/og-image.png" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</Helmet>
```

## Structured Data

```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Binge N Balance",
  "servesCuisine": ["Indian", "Awadhi", "Healthy", "Continental"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Gangapur Road",
    "addressLocality": "Nashik",
    "addressRegion": "Maharashtra"
  },
  "hasMenu": "...",
  "parentOrganization": {
    "@type": "Organization",
    "name": "Binge N Balance",
    "founder": {
      "@type": "Person",
      "name": "Shubham Bhamare"
    }
  }
}
```

---

# 11. Error Handling

| Scenario | Behavior |
|----------|----------|
| Image fails to load | Show placeholder with brand color |
| Form submission fails | Show error toast, retry option |
| Route not found | 404 page with navigation back to home |
| Video fails to autoplay | Fallback to image static hero |
| Slow network | Skeleton loaders for content sections |

---

# 12. Browser Support

| Browser | Support |
|---------|---------|
| Chrome (last 2 versions) | Full |
| Firefox (last 2 versions) | Full |
| Safari (last 2 versions) | Full |
| Edge (last 2 versions) | Full |
| Samsung Internet | Full |
| Opera | Full |
| IE 11 | Not supported |

---

# 13. Deployment Pipeline

## Vercel Configuration

```json
// vercel.json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

## CI/CD Flow

```
Push to main branch
    ↓
Vercel detects change
    ↓
Runs: npm install
    ↓
Runs: npm run build
    ↓
Deploys to production URL
    ↓
Slack/email notification
```

---

# 14. Dependencies

## Production

```json
{
  "react": "^18.3.0",
  "react-dom": "^18.3.0",
  "react-router-dom": "^6.26.0",
  "framer-motion": "^11.5.0",
  "react-helmet-async": "^2.0.0"
}
```

## Dev Dependencies

```json
{
  "vite": "^5.4.0",
  "@vitejs/plugin-react": "^4.3.0",
  "tailwindcss": "^3.4.0",
  "postcss": "^8.4.0",
  "autoprefixer": "^10.4.0",
  "eslint": "^9.0.0",
  "eslint-plugin-react": "^7.35.0"
}
```

---

# 15. Code Quality

| Tool | Purpose |
|------|---------|
| ESLint | Code linting |
| Prettier | Code formatting |
| Husky | Pre-commit hooks (optional) |
| lint-staged | Staged file linting (optional) |

## NPM Scripts

```json
{
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "lint": "eslint src/**/*.{js,jsx}",
  "format": "prettier --write src/**/*.{js,jsx,css}"
}
```
