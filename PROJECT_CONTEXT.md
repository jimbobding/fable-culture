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

## 👉 This prevents duplication and ensures consistency across the site

## 🌏 South Asia Implementation (REFERENCE MODEL)

South Asia is now the first fully implemented region following the intended system design.

It acts as the **reference model for future regions**.

### What has been implemented

- Region landing page (`/south-asia`)
- Dynamic country routing:
  - `/south-asia/[country]`
- Data-driven country pages
- Shared layout structure across all countries

---

### Country page structure (CURRENT STANDARD)

Each country page now includes:

- Overview section (top of page, replaces heavy hero reliance)
- Quick facts section:
  - Population
  - Capital
  - Languages
  - Currency
- Timeline (shared component)
- Fact File Visual Section:
  - Capital
  - Food
  - Culture
  - Wildlife
- Facts section:
  - Static facts (from data file)
  - Dynamic facts (Firestore submissions)

---

### Key UX changes introduced

- Reduced reliance on large hero images
- Moved towards **content-first layout**
- Improved readability and flow
- Replaced gallery-first approach with structured learning sections
- Introduced clickable intro cards for deeper exploration

---

### Timeline system (UPDATED IMPLEMENTATION)

The timeline system has now been visually enhanced:

- Alternating left/right layout
- Central vertical timeline line
- Year-based structure (required in data)
- Designed for readability and classroom discussion

---

### Facts system (CONFIRMED PATTERN)

Facts now follow a hybrid model:

- Static facts defined in data files
- Dynamic facts submitted by students (Firestore)
- Combined at render level

👉 This pattern is now the standard across all regions.

---

### Navigation update (REQUIRED)

South Asia now needs a **clear entry point on the homepage**.

👉 This establishes the pattern:

- Homepage → Region → Country → Content

This navigation structure will apply to all future regions.

---

## ⚠️ Known limitations (POST-LAUNCH)

- Timeline depth is currently uneven across countries
- Some country timelines are too shallow (e.g. Bhutan, Maldives)
- Intro deep-dive pages are placeholders:
  - `/south-asia/geography`
  - `/south-asia/culture`
  - `/south-asia/importance`
- Image selection is functional but not optimised for learning

---

## 🎯 Next development phase

The next phase focuses on **content depth and educational quality**, not system building.

Priority order:

1. Improve region timeline content (South Asia)
2. Deepen weakest country timelines:
   - Bhutan
   - Maldives
   - Afghanistan
   - Nepal
3. Build out intro deep-dive pages:
   - Geography
   - Culture
   - Importance
4. Improve image quality and consistency
5. Add homepage entry points for regions

---

## 🧠 Key architectural confirmation

The following systems are now **proven and stable**:

- Data-driven country pages
- Shared timeline component
- Hybrid facts system (static + Firestore)
- Region-based component structure

👉 These should now be reused for all future regions without redesign.

## Timeline System — Compatibility Layer (IMPORTANT UPDATE)

The timeline system now supports **two data formats**:

### Legacy format (older regions)

```ts
{ year: string, event: string }
```

### New format (current standard)

```ts
{
  year: string,
  title: string,
  text: string,
  periodKey: string
}
```

---

### How this is handled

A **normalisation layer** has been introduced in `RegionContent`:

- Converts legacy timeline items into the new format
- Prevents breaking existing regions (e.g. Middle East)
- Allows gradual migration without rewriting all data

---

### Purpose

- Maintain backward compatibility
- Avoid rushed refactors
- Support stable deployment while improving systems

---

## Timeline Depth Standard (NEW RULE)

All country timelines should now:

- Include **minimum 10 events**
- Follow clear chronological order
- Use student-friendly language
- Include:

  - emoji (visual cue)
  - guided questions
  - research gap at the end

---

### Purpose

- Improve educational value
- Encourage discussion and critical thinking
- Move beyond surface-level timelines

---

## South Asia — Confirmed Reference Model (UPDATED)

South Asia is now the **fully implemented reference model** for the entire platform.

It demonstrates:

- Data-driven country pages
- Fully structured timelines (10+ events)
- Hybrid facts system (static + Firebase)
- Content-first layout design
- Improved UX and readability

---

### Key implication

All future regions must:

- Follow the South Asia structure
- Match its content depth
- Reuse its component patterns

---

## Post-Launch Reality (CONFIRMED)

The system is now:

- Stable
- Scalable
- Reusable across regions

---

### Focus has shifted to:

- Content quality
- Educational depth
- Visual clarity
- Consistency across regions

---

## Key architectural confirmation (UPDATED)

The following systems are now **fully proven**:

- Data-driven country pages
- Shared timeline component (with compatibility support)
- Hybrid facts system (static + Firestore)
- Region-based component structure
- Timeline depth model (10+ structured events)

---

👉 These systems should now be reused without redesign across all future regions.

## Branching & Workflow (IMPORTANT)

This project follows a structured Git workflow to keep development safe, clean, and scalable.

### Core branches

- `main` → Production (live site on Vercel)
- `dev` → Main development branch (staging before production)

---

### Region branches

Each region has its own working branch:

- `south-asia`
- `africa`
- `europe`
- etc.

👉 Purpose:

- Acts as a **development branch for that specific region**
- All feature work for that region branches from here

---

### Feature branches

All new work is created from the relevant region branch:

Example:

- `feature/geography-page`
- `feature/culture-page`
- `feature/image-updates`

Workflow:

1. Branch from region branch (e.g. `south-asia`)
2. Complete the feature
3. Merge back into the region branch
4. Delete the feature branch after completion

---

### Cleanup branches

If small tweaks or fixes are needed after a feature is merged:

- Create a short-lived cleanup branch:

  `cleanup/...`

👉 Purpose:

- Avoid keeping old feature branches alive
- Keep repository clean and organised

---

### Merge flow

Final flow of work:

feature → region (e.g. south-asia) → dev → main

---

### Critical rules

- NEVER work directly on `main`
- NEVER skip `dev` when promoting changes
- ALWAYS branch from the correct region branch
- DELETE feature branches after merging
- Use cleanup branches instead of keeping old branches alive

---

### Sync rule (VERY IMPORTANT)

Before starting any new work:

👉 Ensure `main` and `dev` are at the SAME level

This prevents:

- merge conflicts
- missing features in production
- deployment inconsistencies

## 🛠️ Admin & Moderation Systems (SHARED ARCHITECTURE)

### Overview

Fable Culture includes multiple admin systems that allow **safe student contribution and content moderation** across the platform.

These systems follow a **shared moderation pattern** and are designed to be reused across all regions and content types.

---

## Core Principle (IMPORTANT)

All admin systems follow the same workflow:

1. User submits content → stored in Firestore with `status: "pending"`
2. Admin reviews content via admin interface
3. Admin can:

   - Approve → content becomes visible on the site
   - Delete → content is permanently removed

4. UI updates instantly (no page reload)

---

## 1️⃣ Student Upload System (Gallery Moderation)

### What it does

- Allows students to upload images to the platform

### Data flow

- Image → Firebase Storage
- Metadata → Firestore (`gallerySubmissions`)

### Stored fields include:

- title
- description
- imageUrl
- storagePath
- region
- submittedAt
- status (`pending` / `approved`)

---

### Admin capabilities

- View pending submissions
- Approve uploads → visible in public gallery
- Delete uploads:

  - Removes image from Storage
  - Removes document from Firestore

---

### Key purpose

- Enables student participation
- Maintains safe, moderated gallery content
- Prevents inappropriate uploads from being public

---

## 2️⃣ Facts System (Fact Moderation)

### What it does

- Allows users to submit cultural or regional facts

### Data stored in:

- Firestore collection: `regionFacts`

### Structure includes:

- fact
- continent
- regionKey
- status (`pending` / `approved`)

---

### Admin capabilities

- View pending facts
- Approve → displayed on region/country pages
- Delete → removed permanently

---

### Rendering pattern

Facts displayed on pages are a combination of:

- Static facts (from data files)
- Approved dynamic facts (from Firestore)

---

### Key purpose

- Expands content dynamically
- Encourages student contribution
- Keeps information moderated and accurate

---

## 3️⃣ Timeline Submission System (ADVANCED SYSTEM)

### What it does

- Allows students to submit ideas for timeline events

### Data stored in Firestore includes:

- title
- explanation
- student name
- region
- country
- periodKey
- createdAt
- status (`pending` / `approved`)

---

### Admin capabilities

- Approve / delete submissions
- Filter by:

  - status
  - region
  - country
  - periodKey

- Search by:

  - title
  - explanation
  - student name

- Sort:

  - newest first

- View submission counts
- Instant UI updates (no reload)

---

### Integration with timeline

- Approved submissions are injected into timeline items
- Enhances timelines with real student contributions

---

### Key purpose

- Turns timelines into interactive learning tools
- Encourages research and engagement
- Maintains quality through moderation

---

## 🧠 Shared System Pattern (CRITICAL DESIGN RULE)

All admin systems:

- Use Firestore as the source of truth
- Use a `status` field for moderation control
- Separate submission from public display
- Require admin approval before visibility

---

## 🔁 Reusability

This moderation system is:

- NOT feature-specific
- NOT region-specific

👉 It is a **reusable pattern** that can be applied to:

- future regions
- new content types
- additional student interaction features

---

## 🚀 Future Expansion Potential

The admin system can be extended to support:

- Timeline editing tools
- Bulk moderation actions
- Content quality indicators
- Teacher/admin dashboards
- Additional submission types (e.g. quizzes, resources)

---

## 🧠 Architectural Significance

This system transforms Fable Culture from:

- A static educational website

into:

- A **moderated, student-driven content platform**

---

👉 This is now a core part of the project architecture and should be maintained across all future development.
