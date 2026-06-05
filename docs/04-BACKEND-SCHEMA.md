# Backend Schema Document

## Binge N Balance — Data Models & API Architecture

---

> **Note:** v1 of the website is fully static (no backend).
> This document defines schemas for future phases when a backend/CMS is introduced.

---

# 1. Architecture Overview

## Phase 1 (Current) — Static

```
Frontend (React) ← reads → Static JS Data Files (/src/data/*.js)
```

## Phase 2 — Headless CMS

```
Frontend (React) ← API calls → Headless CMS (Hygraph/Sanity)
```

## Phase 3 — Full Backend

```
Frontend (React) ← API → Node.js/Express Backend ← DB → PostgreSQL / MongoDB
```

---

# 2. Entity Relationship Diagram

```
┌──────────────┐       ┌──────────────┐
│   Category    │───────│  Menu Item    │
└──────────────┘       └──────────────┘
                              │
                              │
┌──────────────┐       ┌──────┴───────┐       ┌──────────────┐
│    Event      │       │  Testimonial  │       │  Recreation   │
└──────┬───────┘       └──────────────┘       └──────┬────────┘
       │                                             │
       │                                             │
┌──────┴───────┐                            ┌────────┴────────┐
│  Registration │                            │  Booking         │
└──────────────┘                            └─────────────────┘

┌──────────────┐
│   Contact     │
│   Inquiry     │
└──────────────┘

┌──────────────┐
│  Team Member  │
└──────────────┘

┌──────────────┐
│  Gallery      │
│  Image        │
└──────────────┘
```

---

# 3. Data Models

## 3.1 MenuItem

```javascript
MenuItem {
  id: string (UUID)
  name: string
  description: string
  price: number
  image: Image
  category: Category (reference)
  isSignature: boolean
  isAvailable: boolean
  dietaryTags: string[] // ["vegetarian", "vegan", "gluten-free", "protein-rich"]
  type: "binge" | "balance"
  createdAt: DateTime
  updatedAt: DateTime
}
```

### JSON Example

```json
{
  "id": "menu_001",
  "name": "Awadhi Chicken Biryani",
  "description": "Slow-cooked aromatic biryani with tender chicken and premium spices",
  "price": 299,
  "image": { "url": "https://...", "alt": "Awadhi Chicken Biryani" },
  "category": { "id": "cat_001", "name": "Biryani" },
  "isSignature": true,
  "isAvailable": true,
  "dietaryTags": ["non-vegetarian"],
  "type": "binge",
  "createdAt": "2026-01-15T10:00:00Z",
  "updatedAt": "2026-01-15T10:00:00Z"
}
```

---

## 3.2 Category

```javascript
Category {
  id: string (UUID)
  name: string
  slug: string
  description: string
  image: Image
  menuType: "binge" | "balance"
  order: number
  createdAt: DateTime
}
```

### JSON Example

```json
{
  "id": "cat_001",
  "name": "Biryani",
  "slug": "biryani",
  "description": "Premium handcrafted biryanis",
  "menuType": "binge",
  "order": 1
}
```

---

## 3.3 Recreation

```javascript
Recreation {
  id: string (UUID)
  name: string
  slug: string
  description: string
  longDescription: text
  images: Image[]
  category: "snooker" | "billiards" | "pool" | "playstation" | "reading-room"
  capacity: number
  pricing: string // "Per hour" / "Free with order" / "Membership"
  isAvailable: boolean
  features: string[] // e.g., ["Heated Table", "8 Antique Tables"]
  order: number
  createdAt: DateTime
  updatedAt: DateTime
}
```

### JSON Example

```json
{
  "id": "rec_001",
  "name": "Antique Snooker Table",
  "slug": "antique-snooker",
  "description": "Premium snooker experience on our antique heated tables",
  "category": "snooker",
  "capacity": 4,
  "pricing": "₹300/hour",
  "isAvailable": true,
  "features": ["Heated Table", "Antique Finish", "Professional Grade"],
  "order": 1
}
```

---

## 3.4 Event

```javascript
Event {
  id: string (UUID)
  title: string
  slug: string
  description: text
  shortDescription: string
  date: DateTime
  endDate: DateTime (optional)
  time: string
  location: string // "In-house" / specific venue
  images: Image[]
  category: "community" | "gaming" | "food" | "networking" | "special"
  registrationRequired: boolean
  maxAttendees: number (optional)
  currentAttendees: number (optional)
  isFeatured: boolean
  isPast: boolean
  status: "upcoming" | "ongoing" | "completed" | "cancelled"
  createdAt: DateTime
  updatedAt: DateTime
}
```

### JSON Example

```json
{
  "id": "evt_001",
  "title": "Summer Burnout 2026",
  "slug": "summer-burnout-2026",
  "description": "Our biggest summer event featuring live music, special menu, and gaming tournaments",
  "shortDescription": "Nashik's summer bash at Binge N Balance",
  "date": "2026-06-20T00:00:00Z",
  "time": "18:00 - 23:00",
  "category": "community",
  "registrationRequired": true,
  "maxAttendees": 100,
  "currentAttendees": 45,
  "isFeatured": true,
  "isPast": false,
  "status": "upcoming"
}
```

---

## 3.5 EventRegistration

```javascript
EventRegistration {
  id: string (UUID)
  event: Event (reference)
  name: string
  email: string
  phone: string
  numberOfGuests: number
  message: text (optional)
  status: "confirmed" | "waitlisted" | "cancelled"
  createdAt: DateTime
}
```

### JSON Example

```json
{
  "id": "reg_001",
  "event": { "id": "evt_001", "title": "Summer Burnout 2026" },
  "name": "Rahul Sharma",
  "email": "rahul@example.com",
  "phone": "+91-9876543210",
  "numberOfGuests": 2,
  "status": "confirmed",
  "createdAt": "2026-05-28T14:30:00Z"
}
```

---

## 3.6 Booking (Recreation)

```javascript
Booking {
  id: string (UUID)
  recreation: Recreation (reference)
  customerName: string
  customerPhone: string
  customerEmail: string (optional)
  date: Date
  timeSlot: string
  duration: number // hours
  numberOfPlayers: number
  notes: text (optional)
  status: "pending" | "confirmed" | "cancelled" | "completed"
  createdAt: DateTime
  updatedAt: DateTime
}
```

### JSON Example

```json
{
  "id": "book_001",
  "recreation": { "id": "rec_001", "name": "Antique Snooker Table" },
  "customerName": "Amit Patel",
  "customerPhone": "+91-9876543210",
  "date": "2026-06-10",
  "timeSlot": "18:00-19:00",
  "duration": 1,
  "numberOfPlayers": 2,
  "status": "confirmed",
  "createdAt": "2026-06-01T11:00:00Z"
}
```

---

## 3.7 ContactInquiry

```javascript
ContactInquiry {
  id: string (UUID)
  name: string
  email: string
  phone: string (optional)
  purpose: "dining" | "gaming" | "events" | "partnership" | "general"
  message: text
  status: "new" | "read" | "replied" | "archived"
  createdAt: DateTime
}
```

### JSON Example

```json
{
  "id": "inq_001",
  "name": "Priya Deshmukh",
  "email": "priya@example.com",
  "phone": "+91-9876543210",
  "purpose": "events",
  "message": "I want to host my birthday party at your venue. Please share packages.",
  "status": "new",
  "createdAt": "2026-06-02T09:15:00Z"
}
```

---

## 3.8 Testimonial

```javascript
Testimonial {
  id: string (UUID)
  name: string
  role: string (optional) // e.g., "Regular Customer", "Food Blogger"
  avatar: Image (optional)
  content: text
  rating: number (1-5)
  isFeatured: boolean
  createdAt: DateTime
}
```

### JSON Example

```json
{
  "id": "test_001",
  "name": "Neha Joshi",
  "role": "Food Blogger",
  "content": "Finally, a place in Nashik that takes both taste and health seriously. The biryani was incredible and the protein bowls were just as good!",
  "rating": 5,
  "isFeatured": true,
  "createdAt": "2026-05-20T00:00:00Z"
}
```

---

## 3.9 GalleryImage

```javascript
GalleryImage {
  id: string (UUID)
  image: Image
  caption: string (optional)
  category: "food" | "interior" | "gaming" | "events" | "community"
  isFeatured: boolean
  order: number
  createdAt: DateTime
}
```

### JSON Example

```json
{
  "id": "gal_001",
  "image": { "url": "https://...", "alt": "Snooker Table Setup" },
  "caption": "Our premium antique snooker table",
  "category": "gaming",
  "isFeatured": true,
  "order": 1
}
```

---

## 3.10 TeamMember

```javascript
TeamMember {
  id: string (UUID)
  name: string
  role: string
  bio: text (optional)
  image: Image (optional)
  isFounder: boolean
  order: number
  socialLinks: {
    instagram: string (optional),
    linkedin: string (optional),
    twitter: string (optional)
  }
  createdAt: DateTime
}
```

### JSON Example

```json
{
  "id": "team_001",
  "name": "Shubham Bhamare",
  "role": "Founder & Visionary",
  "bio": "Believer in balance. Creator of spaces where people don't have to choose between health and happiness.",
  "isFounder": true,
  "order": 1,
  "socialLinks": {
    "instagram": "https://instagram.com/shubham",
    "linkedin": "https://linkedin.com/in/shubham"
  }
}
```

---

## 3.11 SiteSettings

```javascript
SiteSettings {
  id: string (UUID)
  siteName: string
  tagline: string
  description: string
  logo: Image
  favicon: Image
  ogImage: Image
  address: {
    street: string,
    area: string,
    city: string,
    state: string,
    pincode: string
  }
  contact: {
    phone: string,
    email: string,
    whatsapp: string
  }
  socialLinks: {
    instagram: string,
    facebook: string,
    youtube: string (optional)
  }
  hours: {
    weekday: string,
    weekend: string
  }
  googleMapsEmbedUrl: string
}
```

### JSON Example

```json
{
  "siteName": "Binge N Balance",
  "tagline": "Where Health, Indulgence & Recreation Meet",
  "address": {
    "street": "Gangapur Road",
    "city": "Nashik",
    "state": "Maharashtra",
    "pincode": "422013"
  },
  "contact": {
    "phone": "+91-XXXXXXXXXX",
    "whatsapp": "https://wa.me/91XXXXXXXXXX"
  },
  "hours": {
    "weekday": "11:00 AM – 11:00 PM",
    "weekend": "10:00 AM – 12:00 AM"
  }
}
```

---

# 4. API Endpoints (Future Phase)

## Base URL

```
https://api.bingenbalance.com/v1
```

## Menu

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/menu-items` | List all menu items |
| GET | `/menu-items/:id` | Get single menu item |
| GET | `/menu-items?type=binge` | Filter by type |
| GET | `/menu-items?category=biryani` | Filter by category |
| GET | `/categories` | List all categories |

## Recreation

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/recreation` | List all recreation options |
| GET | `/recreation/:slug` | Get single recreation detail |
| POST | `/bookings` | Create a booking |
| GET | `/bookings?phone=...` | Get customer bookings |

## Events

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/events` | List events (upcoming as default) |
| GET | `/events?status=past` | Filter past events |
| GET | `/events/:slug` | Get single event detail |
| POST | `/events/:id/register` | Register for event |

## Contact

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/inquiries` | Submit contact form |

## Content

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/testimonials` | List testimonials |
| GET | `/gallery` | List gallery images |
| GET | `/team` | List team members |
| GET | `/settings` | Get site settings |

---

# 5. Admin Dashboard (Future)

## Required Modules

| Module | Features |
|--------|----------|
| Menu Manager | CRUD for menu items and categories |
| Event Manager | Create/edit events, view registrations |
| Booking Manager | View/confirm/cancel recreation bookings |
| Inquiry Manager | Read/reply to contact inquiries |
| Gallery Manager | Upload and organize images |
| Site Settings | Update contact info, hours, social links |

## Access Control

| Role | Permissions |
|------|-------------|
| Admin | Full access |
| Manager | Menu, events, bookings, inquiries |
| Staff | Read-only view of schedules |

---

# 6. Data Validation Rules

| Field | Rule |
|-------|------|
| Email | Valid email format |
| Phone | Indian mobile: 10 digits, optional +91 |
| Price | Positive number, max 2 decimals |
| Rating | Integer, 1-5 |
| Slug | Lowercase, hyphens only, no spaces |
| Date | ISO 8601 format |
| Images | Max 5MB, JPEG/PNG/WebP |
| Status | Must match enum values defined in schema |

---

# 7. Static Data Structure (v1)

Since v1 uses static JS files, here is the exact structure for each data file:

### `/src/data/navigation.js`
```javascript
export const navLinks = [
  { label: "Home", path: "/" },
  // ...
];
```

### `/src/data/experiences.js`
```javascript
export const experienceCards = [
  {
    icon: "🍽️",
    title: "Dine",
    description: "...",
    link: "/food",
  },
  // ...
];
```

### `/src/data/foodMenu.js`
```javascript
export const bingeItems = [
  { name: "Awadhi Chicken Biryani", description: "..." },
  // ...
];

export const balanceItems = [
  { name: "Quinoa Protein Bowl", description: "..." },
  // ...
];
```

### `/src/data/recreation.js`
```javascript
export const recreationItems = [
  {
    name: "Snooker",
    description: "...",
    features: ["8 Antique Tables", "Heated Tables"],
  },
  // ...
];
```

### `/src/data/events.js`
```javascript
export const upcomingEvents = [
  {
    title: "Summer Burnout 2026",
    date: "2026-06-20",
    description: "...",
    registrationLink: "#",
  },
  // ...
];

export const pastEvents = [];
```

### `/src/data/testimonials.js`
```javascript
export const testimonials = [
  {
    name: "Neha Joshi",
    role: "Food Blogger",
    content: "...",
    rating: 5,
  },
  // ...
];
```
