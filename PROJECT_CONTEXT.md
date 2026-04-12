# Fable Culture — Project Context (Master)

## What it is

Fable Culture is a school-based educational website designed to showcase world cultures and related learning in a visual, engaging way for students and staff.

It supports classroom learning and SMSC by presenting:

- Region/continent pages (hero + intro + timeline + structured learning sections)
- A global gallery to showcase work (photos/videos)
- Celebration board galleries (monthly/dated displays)
- A moderated student upload system

---

## Core goals

- Easy for staff/students to navigate
- Easy to add new content each term
- Reliable on Vercel (Linux/case-sensitive file system)
- Reusable components without over-engineering
- Safe access controls for gallery content
- Visually engaging but still school-friendly

---

## Tech Stack (WITH PURPOSE)

### Next.js (framework)

- The main framework running the site

👉 Purpose:

- Handles page routing (e.g. `/south-asia/[country]`)
- Manages server + client rendering
- Improves performance and structure

---

### React (UI library)

- Used inside Next.js to build the interface

👉 Purpose:

- Creates reusable components (Fact File, Timeline, layouts)
- Keeps UI consistent and modular

---

### TypeScript (programming language)

- Strongly typed version of JavaScript

👉 Purpose:

- Prevents errors in structured data (e.g. country objects)
- Makes large datasets safer and easier to manage
- Improves long-term maintainability

---

### Tailwind CSS (styling framework)

- Utility-first CSS system used directly in components

👉 Purpose:

- Fast and consistent styling
- No need for separate CSS files
- Keeps design system uniform

---

### Firebase (backend platform)

#### Firestore (database)

- Stores structured data

👉 Purpose:

- Stores facts, submissions, and metadata
- Enables dynamic content

#### Firebase Storage (file storage)

- Stores uploaded images

👉 Purpose:

- Handles image uploads separately from data
- Scales easily for user content

---

### Vercel (hosting & deployment platform)

- Hosts and deploys the website

👉 Purpose:

- Automatically deploys from GitHub
- Handles production environment
- Important:
  - Uses Linux → case-sensitive file system

---

### Git (version control system)

- Tracks code changes locally

👉 Purpose:

- Allows safe editing and rollback
- Supports branching workflow

---

### GitHub (code hosting platform)

- Stores your repository online

👉 Purpose:

- Enables collaboration
- Connects to Vercel for deployment
- Manages branches (main / dev / feature)

---

### Namecheap (domain provider)

- Manages your domain name

👉 Purpose:

- Controls domain (fable-culture.co.uk)
- Connects domain to Vercel

---

## Project structure (SIMPLIFIED DIRECTION)

- Shared components → global reusable components
- Region-specific components → grouped by region

Example (South Asia used as first clean model):

src/
components/
regions/
south-asia/
SouthAsiaFactFile.tsx
SouthAsiaTimeline.tsx (planned)

👉 Important:
This structure is NOT limited to South Asia — it is the pattern for ALL regions.

---

## Region system (GENERAL PATTERN)

Each region (e.g. South Asia, Africa, Europe) follows:

- Landing page
- Country pages (dynamic routing)
- Shared structure

Example:

- `/south-asia/[country]` (example only — applies to all regions)

---

## Data-driven country page system (IMPORTANT)

Country pages are built using a single shared dynamic route:

- `/south-asia/[country]`

Each country is rendered using a structured data object.

This data includes:

- content (text, facts, descriptions)
- theme (colours, styling)
- image paths (matching the image folder system)

---

### Purpose

- Avoids creating separate pages for each country
- Ensures consistency across all country pages
- Makes it easy to scale to new countries and regions
- Allows layout and structure to remain reusable while content changes

---

### Key concept

The page is fixed.

The data changes.

👉 This is a core architectural pattern used across regions.

## Image system (IMPORTANT — GENERAL RULE)

Images are stored using a consistent structure so components can remain reusable.

Example structure:

public/images/continents/{region}/countries/{country}/

Example (South Asia only as reference):
public/images/continents/south-asia/countries/india/

---

### Rules (CRITICAL)

- filenames must be lowercase
- no spaces in filenames
- file paths must EXACTLY match data file
- consistent folder structure across all countries

---

### Why this exists

This system ensures:

- images load correctly in production (Vercel is case-sensitive)
- no 404 errors from mismatched paths
- components can dynamically load content without special logic

---

### Key concept

This is NOT country-specific logic.

It is a **repeatable structure applied to ALL countries and regions**.

## 👉 Example pattern:

## Timeline System (NEW SHARED FEATURE)

### Overview

A reusable timeline system has been introduced to improve how historical content is displayed across all regions.

### Structure

- Timeline component is shared:

  - `components/shared/Timeline.tsx`

- Timeline data is separated by region:

  - Example: `/data/southAsia/timelines.ts`

---

### Timeline capabilities

Each timeline item supports:

- Year or time range (e.g. 1947–2000)
- Title (event or theme)
- Descriptive text
- Optional emoji (visual cue)
- Guided questions (student thinking prompts)
- Research gaps (areas for enquiry)

---

### Purpose

- Make timelines easier to follow for students
- Encourage critical thinking and discussion
- Move away from static “fact-only” timelines
- Support classroom use and SMSC engagement

---

### Timeline submission system (planned)

A shared submission system will allow:

- Students to submit ideas about timeline periods
- Submissions stored in Firestore
- Moderation via admin interface

This will follow the same pattern as:

- Fact submission system
- Student upload system

---

### Key design rule

The timeline system is:

- NOT region-specific
- Built once
- Reused across ALL regions

👉 This prevents duplication and ensures consistency across the site
