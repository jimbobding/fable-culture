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

## 👉 These should now be reused for all future regions without redesign.

## 🌴 Caribbean — NEXT DEVELOPMENT PHASE (NEW FOCUS)

### Overview

South Asia is now **COMPLETE as a system and reference model**.

The next region to be built is:

👉 **The Caribbean**

---

### Core Strategy (CRITICAL)

The Caribbean must follow:

👉 **“Same system, faster build, improved quality”**

This means:

- Reuse ALL existing systems
- Do NOT rebuild core architecture
- Focus on content and expansion

---

### Key Principle

👉 **The system is already built — we are now applying it**

---

## 🟢 Phase 1 — STRUCTURE FIRST (FAST BUILD)

### Goal

Get the Caribbean region live **quickly and cleanly**

---

### What MUST be done

- Create `/caribbean` landing page

- Create dynamic route:

  `/caribbean/[country]`

- Build country data file (same structure as South Asia)

- Add:

  - overview content
  - quick facts
  - base timelines
  - fact file sections

---

### What MUST NOT be done

- ❌ Do NOT redesign layout
- ❌ Do NOT rebuild components
- ❌ Do NOT introduce new systems

---

### Expected outcome

👉 Fully working Caribbean region using existing architecture

---

## 🟡 Phase 2 — CONTENT ENHANCEMENT

Once structure is complete:

- Improve descriptions
- Improve educational clarity
- Upgrade images
- Add video content (safe embeds only)

---

## 🔴 Phase 3 — INTERACTIVITY (CONTROLLED)

Only AFTER stability:

- Audio/music integration
- Interactive maps
- Student activities

---

### ⚠️ Critical Warning

Interactivity can:

- Increase complexity
- Introduce bugs
- Slow development

👉 Must NOT block Phase 1 completion

---

## 🧠 Development Reality

Compared to South Asia:

- System work = DONE
- Build time = SIGNIFICANTLY FASTER

👉 Focus shifts from:

**building systems → scaling content**

---

## 🧠 Development Rules (ENFORCED)

### System rule

👉 Reuse before creating anything new

---

### Admin rule (CRITICAL)

👉 ALL admin pages MUST:

```ts
export const dynamic = "force-dynamic";
```

👉 This is NON-NEGOTIABLE

---

### Branching rule (STRICT)

Workflow MUST always follow:

```
feature → region → dev → main
```

---

### Sync rule

Before starting ANY work:

- `main` and `dev` MUST be aligned

---

### File-first rule

ALL development must:

- Identify exact file before editing
- Avoid “blind edits”
- Follow existing structure

---

## 🚀 Caribbean — STARTUP CHECKLIST (FOR NEW CHAT)

When starting Caribbean work, the assistant MUST ask:

---

### 1. Branching

- Are `main` and `dev` synced?
- What branch are you currently on?
- Create new branch:

```bash
git checkout south-asia
git pull
git checkout -b caribbean
```

---

### 2. File creation (CONFIRM BEFORE WRITING CODE)

- `/app/caribbean/page.tsx`
- `/app/caribbean/[country]/page.tsx`
- `/data/caribbeanCountries.ts`

---

### 3. Data structure

- Confirm structure matches South Asia
- Confirm fields:

  - name
  - population
  - capital
  - languages
  - currency
  - facts
  - timeline

---

### 4. Component reuse

- Use existing:

  - `RegionContent`
  - `Timeline`
  - `FactsSection`

👉 DO NOT duplicate components

---

### 5. Image system

- Confirm correct path:

```
/public/images/continents/caribbean/countries/{country}/
```

- Ensure:

  - lowercase
  - no spaces
  - exact match

---

### 6. First working goal

👉 “Can we load ONE country page correctly?”

---

### 7. Then scale

- Add more countries
- Add timelines
- Improve content

---

## 🧠 Assistant Behaviour Rule (FOR FUTURE CHATS)

The assistant MUST:

- Ask what file is being edited BEFORE giving code
- Confirm structure BEFORE changes
- Avoid large refactors
- Work step-by-step
- Keep changes safe and reversible

---

## 🎯 Immediate Next Step

👉 Begin Caribbean Phase 1:

- Create region branch
- Set up landing page
- Set up dynamic country route
- Create initial data file

---

👉 DO NOT jump ahead to interactivity yet
