# UI/UX Design Brief

## Binge N Balance – Lifestyle, Wellness & Recreation Hub

---

# 1. Project Overview

### Project Name

**Binge N Balance**

### Industry

Hospitality • Café • Wellness • Recreation • Community

### Location

Gangapur Road, Nashik

### Founder

Shubham Bhamare

### Website Type

Premium Brand Website + Experience Showcase

### Goal

Create a digital experience that positions Binge N Balance as:

> Nashik's premier lifestyle destination where food, wellness, recreation and community coexist.

The website should emotionally communicate the brand philosophy before showcasing products and services.

---

# 2. Brand Essence

### Core Philosophy

**Binge + Balance**

Enjoy life without compromise.

The brand bridges:

| Binge         | Balance      |
| ------------- | ------------ |
| Comfort Food  | Healthy Food |
| Entertainment | Wellness     |
| Gaming        | Productivity |
| Fun           | Growth       |
| Social Life   | Self Care    |

---

# 3. Business Objectives

### Primary Goals

- Establish brand authority
- Showcase founder vision
- Increase walk-in traffic
- Promote events
- Build community
- Increase social engagement

### Secondary Goals

- Event registrations
- Gaming bookings
- Table reservations
- Future membership system

---

# 4. Target Audience

## Primary: Young Adults (18–35)

Characteristics:

- Students
- Entrepreneurs
- Gamers
- Fitness enthusiasts
- Creators
- Young professionals

## Secondary: Families

Looking for:

- Comfortable dining
- Safe environment
- Recreation

## Tertiary: Community Builders

- Startup founders
- Readers
- Networking groups
- Event attendees

---

# 5. User Emotions

Users should feel:

| Stage   | Emotion     |
| ------- | ----------- |
| Arrival | Curiosity   |
| Browsing| Inspiration |
| Exploring| Belonging   |
| CTA     | Excitement  |
| Visit   | Anticipation|

---

# 6. Brand Personality

### Primary Traits

Premium, Modern, Welcoming, Energetic, Authentic, Community-driven

### Avoid

❌ Corporate · ❌ Overly luxurious · ❌ Cyberpunk gaming · ❌ Fast-food aesthetics · ❌ Dark nightclub vibe

---

# 7. Visual Direction

Inspired by:

| Brand | Inspiration |
|-------|-------------|
| **Apple** | Clean layouts, white space, strong typography |
| **Soho House** | Community feel, lifestyle photography |
| **Starbucks Reserve** | Premium hospitality, warm environments |

---

# 8. Design Language

### Style

Modern Lifestyle Luxury

### Design Principles

- Large imagery
- Strong storytelling
- Minimal UI
- Premium spacing
- Editorial feel

---

# 9. Color Palette

## Primary

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Primary | Forest Green | `#315A35` | Health, growth, nature, headings, primary buttons |
| Secondary | Deep Green | `#234227` | Stability, premium feel, dark sections, footer |
| Background | Warm Ivory | `#F7F5F0` | Page backgrounds, cards, sections |
| Accent | Muted Gold | `#C8A15A` | CTA buttons, highlights, decorative elements, use sparingly |
| Text | Charcoal | `#1E1E1E` | Body text, headings on light backgrounds |

## Usage Guidelines

```
Primary backgrounds:    Use Deep Green for dark sections
Light backgrounds:      Use Warm Ivory for main content
CTA buttons:            Use Muted Gold on deep backgrounds, or Forest Green on ivory
Text:                   Charcoal on ivory, White on deep green
Accents:                Muted Gold for borders, dividers, and hover states (max 10% of page)
```

---

# 10. Typography

## Headings

### Playfair Display

- Weights: 400 (Regular), 600 (Semi-Bold), 700 (Bold)
- Usage: Hero headlines, section titles, pull quotes
- Sizing: `text-4xl` to `text-7xl` depending on viewport

## Body

### Poppins

- Weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-Bold)
- Usage: Body text, navigation, buttons, captions
- Sizing: `text-sm` to `text-lg` for body; `text-xl` to `text-2xl` for subheadings

## Hierarchy

```css
h1: Playfair Display 700, 3.5rem (56px) hero
h2: Playfair Display 600, 2.5rem (40px) section titles
h3: Playfair Display 600, 1.75rem (28px) card titles
h4: Poppins 600, 1.25rem (20px) subheadings
body: Poppins 400, 1rem (16px) paragraph text
small: Poppins 300, 0.875rem (14px) captions, meta
```

---

# 11. UX Strategy

Most cafés show:

```
Menu → Gallery → Contact
```

Binge N Balance should show:

```
Vision → Experience → Community → Food
```

This difference is critical. The website sells a lifestyle, not a menu.

---

# 12. Information Architecture

```
Home
├── Hero (video + headline + CTAs)
├── Philosophy (Binge ↔ Balance)
├── Experiences (Dine · Play · Read · Connect)
├── Recreation Hub (tables, PlayStation, reading)
├── Founder Vision (storytelling)
├── Community & Events (photo grid)
└── CTA (visit action)

About
├── Founder Story
├── Mission & Vision
└── Brand Timeline

Food & Drinks
├── Binge (indulgent)
├── Balance (healthy)
└── Signature Dishes

Recreation
├── Snooker & Billiards
├── Mini Pool
├── PlayStation
└── Reading Room

Events
├── Upcoming Events
└── Past Gallery

Community
├── Photo Grid
├── Meetups
└── Networking

Contact
├── Map
├── Contact Info
├── Inquiry Form
└── WhatsApp
```

---

# 13. Homepage Wireframe (Section-by-Section)

## 13.1 Hero

```
┌──────────────────────────────────────────────────┐
│  ┌──────────────────────────────────────────┐    │
│  │           FULL-SCREEN VIDEO              │    │
│  │                                          │    │
│  │                                          │    │
│  │     Where Health, Indulgence &           │    │
│  │     Recreation Meet                      │    │
│  │                                          │    │
│  │     Nashik's destination for food,       │    │
│  │     wellness, gaming, community and      │    │
│  │     unforgettable experiences.           │    │
│  │                                          │    │
│  │     [Explore Experiences] [Reserve]      │    │
│  │                                          │    │
│  └──────────────────────────────────────────┘    │
│                                                  │
│  NAVBAR (translucent, fixed)                     │
│  Logo    Home  About  Food  Recreation  ...      │
│                                                  │
└──────────────────────────────────────────────────┘
```

**Spacing:** Full viewport height (100vh)
**Overlay:** Dark gradient overlay on video for text readability
**Text color:** White

---

## 13.2 Philosophy

```
┌──────────────────────────────────────────────────┐
│              OUR PHILOSOPHY                       │
│    ───────────────────────────────────────       │
│                                                  │
│   ┌──────────────┐     ┌──────────────┐         │
│   │    BINGE      │     │   BALANCE    │         │
│   │               │     │              │         │
│   │  ┌──────┐     │     │ ┌──────┐     │         │
│   │  │ icon │     │     │ │ icon │     │         │
│   │  └──────┘     │     │ └──────┘     │         │
│   │               │     │              │         │
│   │  Awadhi       │     │ Healthy      │         │
│   │  Biryani      │     │ Bowls        │         │
│   │  Comfort Food │     │ Protein      │         │
│   │  Desserts     │     │ Nutritious   │         │
│   │               │     │              │         │
│   │  [Explore]    │     │ [Explore]    │         │
│   └──────────────┘     └──────────────┘         │
│                                                  │
│   ───────────────────────────────────────       │
│   Eat what you love. Stay who you want to be.    │
└──────────────────────────────────────────────────┘
```

**Layout:** Two columns, equal width
**Animation:** Hover reveals content on each side
**Background:** Warm Ivory
**Spacing:** py-24 (96px padding top and bottom)

---

## 13.3 Experiences

```
┌──────────────────────────────────────────────────┐
│            EXPERIENCES                            │
│    ───────────────────────────────────────       │
│                                                  │
│   ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐       │
│   │ DINE  │  │ PLAY  │  │ READ  │  │CONNECT│     │
│   │  🍽️  │  │  🎱  │  │  📚  │  │  🤝  │     │
│   │       │  │       │  │       │  │       │     │
│   │Healthy│  │Snooker│  │Quiet  │  │Events,│     │
│   │bowls  │  │PlaySt-│  │reading│  │meetups│     │
│   │to     │  │ation  │  │spaces │  │& comm-│     │
│   │indul- │  │Billi- │  │       │  │unity  │     │
│   │gent   │  │ards   │  │       │  │       │     │
│   │feasts │  │       │  │       │  │       │     │
│   └──────┘  └──────┘  └──────┘  └──────┘       │
│                                                  │
└──────────────────────────────────────────────────┘
```

**Layout:** 4-column card grid (responsive: 2-col on tablet, 1-col on mobile)
**Animation:** Cards fade up on scroll, hover elevation
**Cards:** White background, image or icon, title, short description

---

## 13.4 Recreation Hub

```
┌──────────────────────────────────────────────────┐
│  ┌──────────────────────────────────────────┐    │
│  │         RECREATION HUB                   │    │
│  │                                          │    │
│  │  8 Antique Tables  │  Heated Tables      │    │
│  │  Snooker           │  Billiards          │    │
│  │  Mini Pool         │  PlayStation        │    │
│  │  Reading Room      │                     │    │
│  │                                          │    │
│  │  [Explore Recreation →]                  │    │
│  └──────────────────────────────────────────┘    │
│                                                  │
│  Background image: Snooker table close-up        │
│  Overlay: Dark green gradient                    │
└──────────────────────────────────────────────────┘
```

**Layout:** Full-width section with background image
**Text color:** White
**Animation:** Stats/features fade in on scroll

---

## 13.5 Founder's Vision

```
┌──────────────────────────────────────────────────┐
│                                                  │
│   ┌──────────────┐  ┌──────────────────────┐    │
│   │              │  │                      │    │
│   │   Portrait   │  │  "Binge N Balance    │    │
│   │   of         │  │  was created to      │    │
│   │   Shubham    │  │  prove that you      │    │
│   │   Bhamare    │  │  don't have to       │    │
│   │              │  │  choose between      │    │
│   │              │  │  enjoying life and   │    │
│   │              │  │  taking care of      │    │
│   │              │  │  yourself."          │    │
│   │              │  │                      │    │
│   │              │  │  — Shubham Bhamare   │    │
│   │              │  │  Founder             │    │
│   │              │  │                      │    │
│   │              │  │  [Read Full Story]   │    │
│   └──────────────┘  └──────────────────────┘    │
│                                                  │
└──────────────────────────────────────────────────┘
```

**Layout:** Two columns (image left, text right) — reversed on mobile
**Background:** Warm Ivory
**Quote typography:** Playfair Display, italic, larger size

---

## 13.6 Community

```
┌──────────────────────────────────────────────────┐
│           OUR COMMUNITY                           │
│    ───────────────────────────────────────       │
│                                                  │
│   ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐              │
│   │photo│ │photo│ │photo│ │photo│              │
│   │  1  │ │  2  │ │  3  │ │  4  │              │
│   └─────┘ └─────┘ └─────┘ └─────┘              │
│                                                  │
│   ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐              │
│   │photo│ │photo│ │photo│ │photo│              │
│   │  5  │ │  6  │ │  7  │ │  8  │              │
│   └─────┘ └─────┘ └─────┘ └─────┘              │
│                                                  │
│   [Follow us on Instagram]                       │
└──────────────────────────────────────────────────┘
```

**Layout:** Masonry or grid photo layout
**Background:** Deep Green or White based on spacing needs
**Animation:** Photos fade in staggered

---

## 13.7 CTA

```
┌──────────────────────────────────────────────────┐
│                                                  │
│           Ready to Experience Balance?           │
│                                                  │
│   Visit us on Gangapur Road, Nashik              │
│                                                  │
│   [Visit Binge N Balance →]                      │
│                                                  │
│   ─── or ───                                     │
│                                                  │
│   ☎  +91-XXXXXXXXXX                              │
│   💬  WhatsApp                                   │
│                                                  │
└──────────────────────────────────────────────────┘
```

**Layout:** Centered content
**Background:** Forest Green or Deep Green
**Text color:** White
**CTA button:** Muted Gold

---

# 14. Motion Design

Subtle and premium.

### Use

- Fade reveals on scroll (opacity + y-translate)
- Parallax scrolling for hero background
- Smooth image transitions between sections
- Hover elevation and scale on cards
- Staggered children for grid sections
- Page transition fade between routes

### Avoid

❌ Flashy gaming animations
❌ Excessive neon effects
❌ Overwhelming motion
❌ Auto-playing carousels

### Animation Timing

| Type | Duration | Easing |
|------|----------|--------|
| Fade in | 0.6s | easeOut |
| Card hover | 0.3s | easeOut |
| Nav link | 0.2s | easeInOut |
| Page transition | 0.4s | easeInOut |
| Stagger delay | 0.1s per child | — |

---

# 15. Photography Style

### Guidelines

- Use only authentic, real photography from the venue
- Capture natural light where possible
- Focus on people interacting (eating, gaming, reading)
- Show both food genres: healthy bowls AND indulgent dishes
- Include wide shots of the space (ambiance)
- Capture the cue sports tables from multiple angles
- Community event photography should feel candid

### Must-Have Shots (Photoshoot Checklist)

| Category | Shots Needed |
|----------|--------------|
| Food | 5 Binge dishes, 5 Balance dishes, 3 signature items |
| Interior | 3 wide shots, 5 detail shots (decor, lighting) |
| Gaming | 3 snooker table shots, 2 PlayStation setup, 1 reading room |
| People | 3 group shots, 3 individual dining, 2 gaming in action |
| Events | 5 community event photos (from past events) |
| Founder | 1 professional portrait, 1 candid in venue |

---

# 16. Component States

| Component | States |
|-----------|--------|
| Button | Default, Hover, Active, Loading, Disabled |
| Card | Default, Hover, Focus |
| Input | Default, Focus, Error, Disabled, Success |
| Nav Link | Default, Active (current page), Hover |
| Image | Loading (skeleton), Loaded, Error (fallback) |
| Form | Empty, Filling, Submitting, Success, Error |
| Mobile Menu | Closed, Open (with overlay) |

---

# 17. Responsive Behavior

## Mobile (< 640px)

- Single column layout
- Hamburger menu replaces nav
- Hero text smaller (text-3xl headline)
- Philosophy section stacks vertically
- 4 experiences become single column
- Reduced padding (px-4 instead of px-8)
- Touch-friendly button sizes (min 44px height)

## Tablet (640–1024px)

- 2-column grids
- Nav collapses to hamburger or condensed
- Moderate padding (px-6)
- Hero text medium (text-5xl headline)

## Desktop (1024–1440px)

- Full layout as designed
- Horizontal navigation
- Max-width container 1280px
- Generous whitespace

## Wide (> 1440px)

- Content max-width 1280px, centered
- Larger hero text
- More spacing between sections

---

# 18. Loading States

| Element | Loading State |
|---------|---------------|
| Hero video | Placeholder still image, then crossfade to video |
| Images | Blur-up placeholder (low-res blurred version) |
| Page transition | Brief opacity fade |
| Form submit | Button shows spinner, fields disabled |
| Google Maps | Gray placeholder with location icon until loaded |

---

# 19. Error States

| Scenario | UI Response |
|----------|-------------|
| Image broken | Brand-colored placeholder with food/icon overlay |
| Form submission failed | Red toast: "Something went wrong. Please try again." |
| 404 page | Full-page branded 404 with navigation links |
| Slow network | Skeleton loaders in content areas |
| JavaScript disabled | Minimal message: "Please enable JavaScript to view this site" |

---

# 20. Accessibility

### Requirements

- All interactive elements keyboard-accessible
- Skip-to-content link for keyboard users
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text on all images
- ARIA labels on icon-only buttons
- Focus indicators visible
- Color contrast ratios meet WCAG AA:
  - Normal text: 4.5:1 minimum
  - Large text: 3:1 minimum
  - UI components: 3:1 minimum

### Color Contrast Check

| Combination | Ratio | Passes AA? |
|-------------|-------|------------|
| #315A35 on #F7F5F0 | ~6.5:1 | Yes |
| #C8A15A on #234227 | ~5.8:1 | Yes |
| #1E1E1E on #F7F5F0 | ~14:1 | Yes |
| White on #315A35 | ~5.2:1 | Yes |

---

# 21. Success Criteria

A visitor should leave the homepage thinking:

> "This isn't just a café."

and instead feel:

> "This is a place where I can eat, play, work, relax, meet people and belong."

That single perception shift should guide every UI and UX decision in the project.
