# Web Flow Document

## Binge N Balance — User Journey & Navigation Architecture

---

# 1. Entry Points

```
┌─────────────────────────────────────────────────────┐
│                   ENTRY POINTS                       │
├─────────────────────────────────────────────────────┤
│                                                       │
│  1. Direct URL (bingenb以赴alance.com)               │
│  2. Google Search (organic)                          │
│  3. Instagram Link (bio → website)                   │
│  4. WhatsApp Share (link forwarding)                 │
│  5. Google Maps (website button)                     │
│  6. QR Code (in-store posters)                       │
│                                                       │
└─────────────────────────────────────────────────────┘
```

---

# 2. User Flow Diagram

```
                            ENTRY
                               │
                               ▼
                        ┌──────────────┐
                        │    HOMEPAGE   │
                        └──────┬───────┘
                               │
                    ┌──────────┼──────────┐
                    │          │          │
                    ▼          ▼          ▼
              ┌──────────┐ ┌────────┐ ┌────────┐
              │  HERO     │ │PHILO-  │ │EXPER-  │
              │ SECTION   │ │SOPHY   │ │IENCES  │
              └────┬──────┘ └────────┘ └────┬───┘
                   │                         │
                   ▼                         ▼
              ┌──────────┐             ┌──────────┐
              │RECREATION│             │  DINE    │
              │  HUB     │             │  PLAY    │
              └────┬──────┘             │  READ    │
                   │                    │  CONNECT │
                   ▼                    └──────────┘
              ┌──────────┐
              │ FOUNDER  │
              │  VISION  │
              └────┬──────┘
                   │
                   ▼
              ┌──────────┐
              │COMMUNITY │
              └────┬──────┘
                   │
                   ▼
              ┌──────────┐
              │  CTA     │
              └──────────┘
```

---

# 3. Page-by-Page User Flow

## 3.1 Homepage Flow

```
LAND ON HOMEPAGE
       │
       ▼
  ┌─────────────────────────────────┐
  │          HERO SECTION            │
  │  Video background (autoplay)     │
  │  Headline: "Where Health,        │
  │  Indulgence & Recreation Meet"   │
  │  Subheadline                     │
  │  [Explore Experiences] [Reserve] │
  └──────────┬──────────────────────┘
             │
    ┌────────┴────────┐
    │                  │
    ▼                  ▼
┌──────────┐    ┌──────────────┐
│ Click    │    │ Click        │
│ Explore  │    │ Reserve      │
│  ↓       │    │  ↓           │
│ Scroll   │    │ WhatsApp /   │
│ to       │    │ Contact      │
│ Exper-   │    │ Page         │
│ iences   │    └──────────────┘
└──────────┘
             │
             ▼
    ┌─────────────────────────────────┐
    │  PHILOSOPHY SECTION              │
    │  Binge (left)  ↔  Balance (right)│
    │  Interactive split with hover    │
    │  [Explore Menu → Food Page]      │
    └──────────┬──────────────────────┘
             │
             ▼
    ┌─────────────────────────────────┐
    │  EXPERIENCES SECTION             │
    │  4 Cards: Dine / Play / Read /   │
    │  Connect                         │
    │  Each card → respective page     │
    └──────────┬──────────────────────┘
             │
             ▼
    ┌─────────────────────────────────┐
    │  RECREATION HUB                  │
    │  Visual highlight of tables,     │
    │  PlayStation, reading room       │
    │  [Explore Recreation → Page]     │
    └──────────┬──────────────────────┘
             │
             ▼
    ┌─────────────────────────────────┐
    │  FOUNDER'S VISION                │
    │  Portrait + quote                │
    │  [Read Full Story → About]       │
    └──────────┬──────────────────────┘
             │
             ▼
    ┌─────────────────────────────────┐
    │  COMMUNITY STRIP                 │
    │  Photo grid + event preview      │
    │  [Join Community → Community]    │
    └──────────┬──────────────────────┘
             │
             ▼
    ┌─────────────────────────────────┐
    │  CTA SECTION                     │
    │  "Ready to Experience Balance?"  │
    │  [Visit Binge N Balance]         │
    │  → Opens Google Maps / Contact   │
    └─────────────────────────────────┘
```

---

## 3.2 About Page Flow

```
ABOUT PAGE
     │
     ▼
┌─────────────────────────────┐
│  FOUNDER STORY               │
│  Portrait + journey          │
│  Shubham's vision & beliefs  │
│  Why Binge N Balance exists  │
└──────────┬──────────────────┘
           │
           ▼
┌─────────────────────────────┐
│  MISSION & VISION            │
│  Brand purpose               │
│  Future goals                │
└──────────┬──────────────────┘
           │
           ▼
┌─────────────────────────────┐
│  BRAND TIMELINE              │
│  Visual journey              │
│  Past → Present → Future     │
└──────────┬──────────────────┘
           │
           ▼
┌─────────────────────────────┐
│  CTA: Explore Our Menu       │
│  → Navigate to Food Page     │
└─────────────────────────────┘
```

---

## 3.3 Food Page Flow

```
FOOD & DRINKS PAGE
     │
     ▼
┌─────────────────────────────┐
│  BINGE SECTION               │
│  Awadhi Cuisine              │
│  Biryani                     │
│  Comfort Food                │
│  Desserts                    │
│  [View Full Menu → PDF]     │
└──────────┬──────────────────┘
           │
           ▼
┌─────────────────────────────┐
│  BALANCE SECTION              │
│  Healthy Bowls               │
│  Protein Meals               │
│  Nutritious Choices          │
│  Fitness-friendly options    │
└──────────┬──────────────────┘
           │
           ▼
┌─────────────────────────────┐
│  SIGNATURE DISHES            │
│  Chef specials               │
│  Most ordered items          │
│  (Image-heavy layout)        │
└──────────┬──────────────────┘
           │
           ▼
┌─────────────────────────────┐
│  CTA: Reserve Your Table     │
│  → Contact Page / WhatsApp   │
└─────────────────────────────┘
```

---

## 3.4 Recreation Page Flow

```
RECREATION PAGE
     │
     ▼
┌─────────────────────────────────┐
│  HERO: "Where the Games Begin"  │
│  Cinematic gaming shots         │
└──────────┬──────────────────────┘
           │
           ▼
┌─────────────────────────────────┐
│  CUE SPORTS SPOTLIGHT            │
│  8 Antique Tables (featured)    │
│  Heated Tables                  │
│  Snooker                        │
│  Billiards                      │
│  Mini Pool                      │
│  Each has: image + desc + specs │
└──────────┬──────────────────────┘
           │
           ▼
┌─────────────────────────────────┐
│  PLAYSTATION ZONE                │
│  Console setup                   │
│  Games available                 │
│  Seating capacity                │
└──────────┬──────────────────────┘
           │
           ▼
┌─────────────────────────────────┐
│  READING ROOM                    │
│  Quiet space                     │
│  Book collection                 │
│  Ambiance photos                 │
└──────────┬──────────────────────┘
           │
           ▼
┌─────────────────────────────────┐
│  CTA: Book a Slot                │
│  → WhatsApp / Contact Form       │
└─────────────────────────────────┘
```

---

## 3.5 Events Page Flow

```
EVENTS PAGE
     │
     ▼
┌─────────────────────────────┐
│  UPCOMING EVENTS             │
│  Card layout:                │
│  - Event name                │
│  - Date & time               │
│  - Description               │
│  - [Register] button         │
└──────────┬──────────────────┘
           │
           ▼
┌─────────────────────────────┐
│  PAST EVENTS / GALLERY       │
│  Photo grid                  │
│  - Summer Burnout            │
│  - Founder gatherings        │
│  - Community meetups         │
└──────────┬──────────────────┘
           │
           ▼
┌─────────────────────────────┐
│  CTA: Host Your Event        │
│  → Contact for bookings      │
└─────────────────────────────┘
```

---

## 3.6 Community Page Flow

```
COMMUNITY PAGE
     │
     ▼
┌─────────────────────────────┐
│  PHOTO GRID                  │
│  Visual highlights           │
│  People, events, moments     │
└──────────┬──────────────────┘
           │
           ▼
┌─────────────────────────────┐
│  MEETUP HIGHLIGHTS            │
│  Founder networking sessions │
│  Student groups              │
│  Gaming tournaments          │
└──────────┬──────────────────┘
           │
           ▼
┌─────────────────────────────┐
│  INSTAGRAM FEED              │
│  (Optional integration)      │
│  Social proof                │
└──────────┬──────────────────┘
           │
           ▼
┌─────────────────────────────┐
│  CTA: Follow Us              │
│  Instagram / Facebook links  │
└─────────────────────────────┘
```

---

## 3.7 Contact Page Flow

```
CONTACT PAGE
     │
     ▼
┌─────────────────────────────┐
│  MAP (Google Maps embed)     │
│  Location on Gangapur Road   │
└──────────┬──────────────────┘
           │
           ▼
┌─────────────────────────────┐
│  CONTACT INFO                │
│  Address                     │
│  Phone number                │
│  Email                       │
│  Operating hours             │
│  [WhatsApp] [Call] [Email]   │
└──────────┬──────────────────┘
           │
           ▼
┌─────────────────────────────┐
│  INQUIRY FORM                │
│  Name                        │
│  Email / Phone               │
│  Purpose (Dining / Gaming /  │
│  Events / Other)             │
│  Message                     │
│  [Submit]                    │
└──────────┬──────────────────┘
           │
           ▼
┌─────────────────────────────┐
│  THANK YOU (after submit)    │
│  Confirmation message        │
│  Back to Home button         │
└─────────────────────────────┘
```

---

# 4. Navigation Architecture

## 4.1 Primary Navigation (Desktop)

```
[Logo]  Home  About  Food & Drinks  Recreation  Events  Community  Contact
```

- Sticky navbar
- Background becomes solid on scroll
- Active page highlighted
- Smooth scroll for anchor links on homepage

## 4.2 Mobile Navigation

```
[Hamburger Icon]  [Logo]

Slide-in drawer on click:
┌─────────────────────────┐
│  Home                   │
│  About                  │
│  Food & Drinks          │
│  Recreation             │
│  Events                 │
│  Community              │
│  Contact                │
│  ─────────────────────  │
│  [Reserve Your Visit]   │
│  [WhatsApp]             │
└─────────────────────────┘
```

- Close on link click
- Close on overlay tap
- Close on Escape key

## 4.3 Footer Navigation

```
┌─────────────────────────────────────────────┐
│  Logo + tagline                              │
│                                              │
│  Quick Links      Experiences     Follow     │
│  Home             Dine            Instagram  │
│  About            Play            Facebook   │
│  Food             Read            YouTube    │
│  Recreation       Connect                    │
│  Events                                      │
│  Community                                   │
│  Contact                                     │
│                                              │
│  Address  |  Phone  |  Email  |  Hours      │
│  ─────────────────────────────────────────   │
│  © 2026 Binge N Balance. All rights reserved │
└─────────────────────────────────────────────┘
```

---

# 5. Conversion Paths

## Primary Conversion Paths

```
Path A: Walk-in Visit
  Home → Hero → CTA → Click "Reserve Your Visit" → Contact Page → WhatsApp → Visit

Path B: Event Registration
  Home → Events Section → Upcoming Event → Register → Form → Confirmation

Path C: Gaming Booking
  Home → Recreation Hub → Explore Recreation → Specific Activity → Book via WhatsApp

Path D: Menu Exploration
  Home → Philosophy → Binge/Balance → Explore Menu → Food Page → Reserve Table

Path E: Brand Connection
  Home → Founder Vision → Read Full Story → About → Mission/Vision → Community
```

---

# 6. Micro-Interactions & Feedback

| Interaction | Feedback |
|-------------|----------|
| Nav link hover | Underline slide animation |
| Button hover | Background darkens, subtle scale |
| Card hover | Elevation increase, scale 1.02 |
| Form submit | Loading spinner → success/error toast |
| Scroll | Progress bar (optional) |
| WhatsApp FAB | Pulse animation, tooltip on hover |
| Mobile menu toggle | Smooth slide + overlay fade |
| Philosophy hover | Content reveal on interactive section |

---

# 7. Edge Cases & Fallbacks

| Scenario | Behavior |
|----------|----------|
| Slow network | Skeleton placeholders, progressive image loading |
| JavaScript disabled | Basic HTML fallback message (minimal) |
| Video autoplay blocked | Static hero image with play icon overlay |
| Empty events list | "No upcoming events — check back soon" message |
| Form submission error | Error toast with "Try again" option |
| 404 page | Custom 404 with Binge N Balance branding and home link |

---

# 8. User Intent Mapping

| User Intent | Entry Page | Target Page | Conversion |
|-------------|------------|-------------|------------|
| "Where to eat in Nashik" | Home (SEO) | Food Page | Reserve table |
| "Snooker near me" | Recreation (SEO) | Recreation Page | Book slot |
| "Events this weekend" | Events (SEO) | Events Page | Register |
| "Binge N Balance review" | Home | Community | Follow social |
| "Healthy food Nashik" | Food (SEO) | Balance section | Visit café |
| "Cafes with gaming" | Recreation (SEO) | Recreation Page | Book slot |
| "Founder story" | About (search) | About Page | Brand connect |
