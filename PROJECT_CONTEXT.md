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

## 🚨 Production vs Local Behaviour (CRITICAL SYSTEM RULE)

### Overview

Fable Culture runs in two different environments:

- Local development (your machine)
- Production (Vercel)

These environments behave differently due to **Next.js caching**.

---

### Key Issue

By default, Next.js may **cache pages at build time** in production.

This means:

- Data is fetched once during deployment
- The page does NOT update when Firestore data changes

---

### Real Example (IMPORTANT)

Admin pages previously:

- Showed old data on live site
- Did NOT show new submissions
- Appeared “broken” despite working locally

---

### Root Cause

Pages were being **statically cached by Vercel**

---

### Solution (MANDATORY RULE FOR ADMIN)

ALL admin pages MUST include:

```ts
export const dynamic = "force-dynamic";
```

---

### Why this matters

This forces:

- Fresh data on every request
- No caching
- Live data always matches Firestore

---

### Where this MUST be used

| Page Type                    | Rule               |
| ---------------------------- | ------------------ |
| Admin pages (`/admin/...`)   | ✅ ALWAYS dynamic  |
| Moderation pages             | ✅ ALWAYS dynamic  |
| Student-driven content views | ⚠️ Usually dynamic |
| Static region pages          | ❌ DO NOT use      |

---

### Key Principle

👉 **If data can change without a deploy, DO NOT cache it**

---

### Developer Rule (IMPORTANT)

Before debugging live issues:

- Always consider caching
- Always compare local vs production behaviour

---

👉 This rule prevents:

- “Works locally but not live” bugs
- Stale admin data
- Moderation failures

---

## 🎯 Admin System Stability Rule (NEW)

To prevent production issues:

- Admin systems MUST always use dynamic rendering
- Admin UI must reflect real-time Firestore data
- No admin functionality should rely on cached pages

---

👉 This ensures:

- Safe moderation
- Reliable student submissions
- Accurate live data

---

## 🌍 Region Expansion Strategy (NEW)

### Core Principle

New regions are NOT built from scratch.

They are created using the **South Asia reference model**.

---

### Build Approach

Each new region should follow:

1. Reuse existing components
2. Reuse data structure
3. Reuse page layouts
4. Focus on content, not system building

---

### Development Phases (MANDATORY)

#### 🟢 Phase 1 — Structure First (FAST BUILD)

- Create region landing page
- Create dynamic country pages
- Add base facts
- Add initial timelines
- Use existing components only

👉 Goal: **Get region live quickly**

---

#### 🟡 Phase 2 — Content Enhancement

- Improve descriptions
- Add better images
- Add video content (YouTube embeds etc.)
- Improve educational value

---

#### 🔴 Phase 3 — Interactivity (ADVANCED)

- Audio/music features
- Interactive maps
- Student activities

⚠️ WARNING:

- This phase is time-heavy
- Must NOT block Phase 1 completion

---

### Key Rule

👉 **Do NOT introduce new systems during Phase 1**

---

### Time Expectation

Compared to South Asia:

- Region setup is significantly faster
- System work is already complete

---

👉 Focus shifts from **building** → **expanding**

## 🌟 Student Discoveries System (NEW FEATURE)

### Overview

The Student Discoveries system allows students to contribute useful external resources (websites) to support learning across regions.

It introduces a new type of content:

👉 student-led research and shared resources

---

### How it works (Current Implementation)

- Discoveries are stored in region-specific data files
- Rendered using a shared reusable component
- Displayed on region landing pages

---

### Data Structure

Each discovery item includes:

- title
- description
- topic (e.g. Geography, Culture)
- country
- href (external link or placeholder)

---

### Dual-purpose design

The system supports two types of entries:

#### 🟢 Real Discoveries

- Student finds a useful website
- Link is added to the page
- Other students can access it

#### 🟡 Guided Discovery Tasks

- Placeholder prompts (e.g. “Find a website about rivers”)
- Encourages independent research
- Supports classroom activities

---

### Component Architecture (IMPORTANT)

Shared component:

components/shared/StudentDiscoveries.tsx

Region-specific data:

data/southAsia/discoveries.ts
data/caribbean/discoveries.ts

---

### Key Design Rule

- Component MUST remain fully reusable
- NO region-specific content inside component
- ALL content must come from data files

- Follows the same architectural pattern as Timeline:
  - shared component
  - data-driven content
  - no region-specific logic inside component

---

### Purpose

- Encourage independent research
- Increase student engagement
- Allow students to contribute beyond facts and uploads
- Build a shared bank of learning resources

---

### Future Expansion (Planned)

The system may evolve into:

- Firestore-backed submissions
- Student-submitted links
- Admin moderation (approve/delete)
- Filtering by topic or country

---

### Educational Impact

This system supports:

- curiosity
- research skills
- ownership of learning
- collaborative knowledge building

---

## 🔗 Global Navigation — Logo Link (NEW UX RULE)

### Overview

A clickable logo has been added to pages to improve navigation and usability.

---

### Behaviour

- Logo appears at the top of pages
- Clicking the logo returns the user to the Homepage (Landing Page)

---

### Implementation (Current)

- Added to South Asia country pages
- Positioned above the hero section
- Styled for visibility and consistency

---

### Purpose

- Provides a clear navigation reset point
- Prevents users getting lost in deep page navigation
- Improves usability for:

  - students
  - staff
  - SEND learners

---

### Design Rule (IMPORTANT)

- Logo should be:

  - visible
  - consistent across pages
  - clickable

- Must always link to: /

---

### Future Improvement

The logo should be moved into a shared component:

components/shared/Header.tsx

This will allow:

- reuse across all regions
- consistent global navigation
- easier maintenance

---

### UX Principle

👉 Users should always have a simple way back to the start

## Caribbean Region System (Current Expansion)

The Caribbean region is now being developed using a more advanced, data-driven structure inspired by the South Asia rebuild.

### Current architecture direction

- Dynamic country routing via:

  - `/caribbean/[country]`

- Shared typed country data structure:

  - `src/data/caribbean/caribbeanCountries.ts`

- Topic/deep-dive pages separated from country routes:
  - `/caribbean/topics/carnival`
  - future:
    - `/caribbean/topics/windrush`
    - `/caribbean/topics/music`

This prevents conflicts between dynamic country pages and fixed educational topic pages.

### Caribbean design direction

The Caribbean pages are shifting toward:

- immersive cultural storytelling
- museum/exhibit-style educational layouts
- visually rich section design
- layered gradients and themed visuals
- stronger emotional and historical storytelling

The Carnival page established a new visual direction using:

- floating circular image cards
- rotated colourful character layouts
- dynamic gradients
- cultural storytelling sections
- UK/local Caribbean cultural connections

### Educational direction

The Caribbean content focuses on:

- identity
- resistance
- celebration
- oral traditions
- cultural preservation
- migration and diaspora connections

rather than purely tourism-style country summaries.

### Planned Caribbean systems

Planned reusable systems include:

- fact file layouts
- timeline integration
- discoveries integration
- themed country pages
- local cultural connections
- interactive student experiences

### Interactive concepts being explored

Potential future interactive features include:

- “Design Your Own Mas” Carnival activity
- clickable Carnival maps
- character exploration systems
- culture/storytelling interaction pages

## 🌍 Caribbean Region — Educational & Visual Standards (NEW)

### Core Direction

The Caribbean region now follows a stronger educational storytelling approach focused on:

- identity
- resistance
- celebration
- migration
- music
- colonial history
- cultural preservation

The goal is to avoid shallow tourism-style summaries.

---

## 🧠 Country Identity Rule (IMPORTANT)

Each country must have a clear and distinct identity.

Country pages should avoid:

- repeated wildlife
- repeated visuals
- generic “beaches and culture” summaries
- interchangeable fact file content

Instead, each country should highlight:

- unique history
- recognisable landmarks
- important cultural traditions
- famous people
- distinct environmental features
- educational talking points

---

## 🖼️ Image Philosophy (MAJOR UPDATE)

Images are no longer treated as simple decoration.

They are now considered:

👉 educational storytelling tools

### Image goals

Images should:

- feel cinematic and immersive
- support educational understanding
- visually communicate country identity
- work well across responsive layouts
- avoid low-quality tourist stock imagery

---

## 📁 Image Naming Convention (CRITICAL RULE)

Generic filenames are no longer allowed.

❌ BAD:

```txt
history.jpg
culture.jpg
food.jpg
```

✅ GOOD:

```txt
pitons-landscape.jpg
spice-market.jpg
vincy-mas-costumes.jpg
green-fig-saltfish.jpg
```

### Key rule

Filenames should match:

👉 what would realistically be searched into Google

---

## 🧱 Fact File System (UPDATED ARCHITECTURE)

Fact File cards are now flexible.

The system is no longer restricted to:

- capital
- food
- wildlife
- culture

Countries may now include:

- history
- environment
- identity
- music
- independence
- industry
- geography

### Purpose

Allows stronger country distinctiveness and avoids repetitive layouts.

---

## 🎨 Visual Distinctiveness Rule

Each country page should feel visually unique.

Examples:

- Grenada → spice markets / nutmeg / colour
- Trinidad → Carnival / steelpan / energy
- Saint Lucia → volcanic elegance / rainforest
- Saint Vincent → sailing / volcanoes / adventure

---

## 🧭 Country Build Workflow (NEW STANDARD)

Each country should now be completed in this order:

1. Dataset
2. Hero image
3. Fact file images
4. Places images
5. Influential figures images

👉 Complete the FULL country before moving to the next one.

---

## 🖼️ Image Selection Standards

Preferred image traits:

- wide landscape composition
- cinematic framing
- educational focus
- clear subjects
- strong colour balance
- recognisable landmarks/features

Avoid:

- blurry images
- screenshots
- portrait crops for landscape cards
- oversaturated AI-looking edits
- low-resolution photos

---

## 🧠 Educational Content Rule

Descriptions should now include:

- historical context
- cultural significance
- why the subject matters
- stronger educational detail

Avoid:

- shallow one-line descriptions
- filler content
- repeated phrasing across countries

---

## 🌟 Caribbean Expansion Direction

The Caribbean region now acts as the most visually ambitious region on the platform.

Focus areas include:

- exhibit-style storytelling
- cultural immersion
- layered educational sections
- emotional and historical connection
- stronger visual identity between countries

## 🌍 Student Discoveries System (NEW)

Fable Culture now includes a moderated student resource contribution system designed to allow students to help expand educational content across regions.

---

### Purpose

The system is designed to:

- encourage independent research
- allow students to contribute educational resources
- build collaborative learning
- expand region content organically over time
- keep all resources teacher-reviewed before publication

The feature is intended to feel like:

- a curated educational discovery platform
- not a generic comments or forum system

---

## 🧠 Resource Philosophy

Student Discoveries should only contain:

- real educational resources
- accessible websites
- museum pages
- articles
- videos
- cultural archives
- music/history resources
- safe learning content

The section should NOT contain:

- placeholder cards
- fake tasks
- empty “idea” boxes
- non-clickable content
- generic prompts pretending to be resources

All visible discovery cards should link to real external resources.

---

## 🔥 Moderation Pipeline

Resource flow:

Student Submission
↓
Firestore `resourceSubmissions`
↓
Admin moderation
↓
Approved resources become publicly visible

Only approved resources appear publicly.

---

## 📁 Firestore Collection

Collection:

```txt
resourceSubmissions
```

# Create Your Look System

## Purpose

Create Your Look is a reusable interactive game system for Fable Culture.

The aim is for students to explore cultural clothing, costumes, masks, accessories, traditions, and celebrations by creating their own designs using drag-and-drop elements.

Rather than building a separate game for each country or region, the system should be powered by datasets and images so the same game engine can be reused across the website.

Examples:

- Caribbean Carnival Mask Creator
- Australian Festival Outfit Creator
- African Traditional Dress Creator
- South Asian Celebration Creator

The game should be educational while remaining fun and creative.

## Current Structure

create-your-look/

- CreateYourLook.tsx
- PreviewCanvas.tsx
- OptionGroup.tsx
- MultiOptionGroup.tsx
- types.ts

## Features Working

- Base selection
- Multiple accessory selection
- Drag and drop positioning
- Resize accessories
- Rotate accessories
- Layer ordering (Forward / Back)
- Randomise design
- Reset design

## Features Removed

- Colour Energy system

This was removed because it added complexity without meaningfully improving the experience.

## Export Status

Save My Look was attempted using html2canvas.

The feature currently experiences colour parsing issues caused by Tailwind CSS gradients using lab/oklab colour functions.

Export functionality is currently paused until a more reliable solution is implemented.

## Long-Term Vision

The final system should support:

- Data-driven content
- Country-specific assets
- Reusable architecture
- Student creativity
- Cultural learning

Future features include:

- Background selection
- Uploading a photo of the user
- Placing masks/costumes over uploaded photos
- Saving creations
- Submitting creations to Firebase
- Admin approval workflow
- Public gallery of approved designs

The system should become a reusable Fable Culture game engine rather than a one-off Caribbean feature.

# Fable Culture — Master Architecture Update

**26 November 2026**

This update supersedes earlier statements where architectural decisions, implementation status or security requirements have changed.

---

## 1. Platform evolution

Fable Culture is evolving from a regional educational website into an interactive, collaborative learning platform.

The platform now supports:

- Cultural exploration.
- Interactive geography.
- Historical investigations.
- Museum-style educational experiences.
- Independent pupil research.
- Moderated pupil contributions.
- Collaborative knowledge building.
- Creative educational games.
- Recognition of pupil achievements.

The long-term goal is for pupils to actively contribute to educational resources that future pupils can use.

## 2. Reusable engines and regional datasets

### Critical architectural rule

Separate the functionality of an educational experience from its regional content.

**Shared engine:**

- Components.
- Interaction logic.
- Navigation.
- Submission handling.
- Validation.
- Moderation.
- Publication.
- Feedback.
- Reusable TypeScript types.

**Regional dataset:**

- Historical information.
- Cultural information.
- Geographical locations.
- Images.
- Flag information.
- Questions.
- Annotation coordinates.
- Colour themes.
- Educational explanations.

Build the functionality once and reuse it across regions.

Do not create separate versions of an entire system simply because the educational content changes.

Before building a new feature, investigate whether an existing engine can support it.

## 3. Oceania development

Oceania represents a more advanced stage of the Fable Culture platform.

Development includes:

- Regional homepage.
- Interactive geographical map.
- Country pages.
- Distinct country colour themes.
- Map comparison activities.
- History Expedition.
- Flag Museum.

Oceania should establish reusable patterns for future interactive educational experiences.

### Geographical consistency

Geographical scope must be considered across:

- Interactive maps.
- Country pages.
- History activities.
- Flag museums.
- Regional navigation.
- Educational datasets.

Do not introduce or remove countries and territories from individual activities without considering the wider regional experience.

Where geographical coverage differs, provide a clear educational reason.

Distinguish independent countries, territories and self-governing states accurately.

## 4. History Expedition engine

The History Expedition introduces interactive historical storytelling.

Rather than simply reading a timeline, pupils explore historical events through journeys, visual scenes and investigations.

### Components developed

- HistoryExpedition.tsx
- HistoryVoyageMap.tsx
- HistoryEncounterScene.tsx
- HistoryPerspectiveChallenge.tsx

### Regional data

- `src/data/history/oceania.ts`
- `src/data/history/oceaniaEncounter.ts`

### Educational capabilities

- Interactive historical journeys.
- Geographical expedition stops.
- Historical encounter scenes.
- Clickable visual clues.
- Guided investigation questions.
- Historical perspective challenges.
- Explanatory feedback.

### Long-term direction

The History Expedition should become a reusable educational engine.

Other regions should be able to provide their own historical journeys, images, encounters and questions without rebuilding the underlying functionality.

Historical content should encourage pupils to consider different perspectives rather than presenting history exclusively from the viewpoint of explorers or colonial powers.

## 5. Flag Museum engine

The Flag Museum is a reusable interactive educational museum.

Its purpose is to teach pupils about national and territorial flags, their symbolism, historical origins and cultural significance.

### Core experience

- Museum entrance.
- Geographical exhibition rooms.
- Framed flag displays.
- Individual flag exhibits.
- Interactive symbol annotations.
- Flag adoption dates.
- Research investigations.
- Pupil curator contributions.

### Exhibit types

1. Completed exhibits.
2. Partially completed exhibits.
3. Unfinished exhibits.

Teachers can use unfinished exhibits to encourage independent research.

### Oceania implementation

The museum contains 22 flags across four exhibition rooms:

- Australia and New Zealand.
- Melanesia.
- Polynesia.
- Micronesia.

Fiji is the completed demonstration exhibit.

Tonga is the unfinished demonstration exhibit.

Further annotations should be developed following staff feedback about which research opportunities should be left for pupils.

### Shared component architecture

`src/components/shared/flag-museum/`

- FlagMuseum.tsx
- FlagGallery.tsx
- FlagExhibit.tsx
- CuratorContribution.tsx
- flagExhibitTypes.ts

### Regional data architecture

`src/data/oceania/flagMuseum/`

- regions.ts
- flags.ts
- exhibits.ts
- flagDates.ts

### Architecture improvement outstanding

The shared exhibit currently references Oceania-specific adoption dates directly.

This should eventually be replaced by passing dates through regional data or component properties.

Shared components should remain region-neutral.

## 6. Museum Curator contribution system

Pupils become museum curators by researching unfinished flag annotations.

The workflow is:

1. Select an unfinished annotation.
2. Research its historical or cultural meaning.
3. Write an explanation in their own words.
4. Record research sources.
5. Enter initials.
6. Submit research.
7. Teacher reviews and edits the contribution.
8. Teacher approves publication.
9. Approved research becomes part of the museum.

### Essential publication requirements

Published research must support:

- Approved explanation.
- Authorised pupil initials.
- Reviewed research sources.

These are core educational requirements, not optional interface decorations.

Sources must be retained throughout submission, moderation and publication.

Initials should only be publicly displayed when appropriately authorised.

### Educational purpose

- Independent research.
- Paraphrasing.
- Source evaluation.
- Cultural understanding.
- Ownership of learning.
- Recognition of pupil achievement.
- Collaborative educational resource building.

## 7. Private and public database separation

### New architectural standard

Private pupil submissions and public educational content should be stored separately.

The public website should not need access to private pupil records.

### Private collection

`flagContributions`

Contains:

- Original research.
- Pupil initials.
- Research sources.
- Moderation status.
- Submission timestamps.
- Review information.

Access must be restricted to authorised staff, except for validated creation of pending submissions.

### Public collection

`flagExplanations`

Contains:

- Region identifier.
- Flag identifier.
- Annotation identifier.
- Approved explanation.
- Reviewed sources.
- Authorised published initials.
- Publication timestamps.

Only information specifically approved for public display should enter this collection.

### Deterministic document identifiers

Published explanations use:

`regionId__flagId__annotationId`

Example:

`oceania__tonga__red-background`

This ensures a consistent publication location for each annotation.

### Transactions

Firestore transactions are used during approval to coordinate changes to private contributions and public explanations.

A transaction allows related database operations to succeed together rather than leaving the system partially updated.

This pattern should be considered for other moderation systems.

## 8. Firebase repository architecture

Database operations should increasingly be separated from visual components.

Current Flag Museum repositories:

- `src/lib/flag-museum/contributionRepository.ts`
- `src/lib/flag-museum/moderationRepository.ts`
- `src/lib/flag-museum/publicationRepository.ts`

### Responsibilities

Contribution repository:

- Validate and submit pupil research.

Moderation repository:

- Review, approve and reject submissions.
- Coordinate publication transactions.

Publication repository:

- Retrieve published educational content.
- Subscribe to live database changes.

### Purpose

- Keep components manageable.
- Reduce duplicated database logic.
- Improve testability.
- Make security responsibilities clearer.
- Support future regional expansion.

Avoid unnecessary abstraction, but separate responsibilities when files become difficult to maintain.

## 9. Admin system evolution

The existing central admin dashboard remains the main staff management interface.

The Flag Museum has introduced a dedicated moderation page:

`/admin/flag-contributions`

### New capabilities

- Teacher authentication.
- Pending research review.
- Explanation editing.
- Research source editing.
- Approval and publication.
- Rejection.
- Published research management.
- Published initials management.
- Removal of published research.

Removing a publication should reopen the corresponding research investigation.

### Outstanding architecture improvements

- Synchronise private moderation records with public publication changes.
- Preserve original pupil research separately from teacher-edited versions.
- Establish reliable publication-to-contribution relationships.
- Introduce appropriate review history.
- Add approved and rejected contribution management.
- Add a live pending contribution count to the central dashboard.
- Establish appropriate data retention and deletion procedures.

The latest published research editing and deletion interface has been supplied but still requires complete browser testing.

## 10. Firebase Authentication

Firebase Authentication is now part of the technology stack.

### Purpose

- Establish authenticated staff identities.
- Restrict database operations.
- Prevent unauthorised moderation.
- Protect private pupil submissions.

The Flag Museum currently uses Firebase email and password authentication.

Firestore permissions are restricted using an authorised teacher UID.

### Long-term direction

Develop a unified authentication and authorisation system for the entire platform.

Avoid maintaining separate passwords and authentication systems for individual admin features.

Future permissions should follow the principle of least privilege: users receive only the access necessary for their responsibilities.

## 11. Security architecture — critical update

This section supersedes previous statements suggesting that all existing moderation systems are secure.

### Discovered legacy weaknesses

Inspection of existing systems revealed:

- Passwords exposed through NEXT_PUBLIC environment variables.
- Page protection relying on client-managed password cookies.
- Excessively permissive Firestore rules in older collections.
- Excessively permissive Firebase Storage access and deletion rules.

These are significant security weaknesses.

No exploitation has been established, but the risks require attention.

### Important distinction

Protecting an admin webpage does not automatically protect its underlying database.

Database permissions must be enforced independently of the interface.

### Required security principles

- Deny access by default.
- Authenticate staff.
- Authorise privileged operations.
- Validate submitted data.
- Minimise stored pupil information.
- Separate private and public content.
- Never expose secrets through client-side environment variables.
- Never rely on hidden buttons as security controls.
- Avoid logging pupil information.
- Consider shared school computer session security.
- Establish appropriate retention and deletion policies.

### Migration strategy

Existing systems must be migrated carefully to avoid breaking working classroom features.

However, preserving functionality must not justify leaving sensitive pupil information exposed.

Where necessary, prioritise temporary containment and involve the school's appropriate data protection lead.

The new Flag Museum permissions do not automatically secure legacy collections.

### Security testing

Test each protected feature as:

- An unauthenticated visitor.
- An authenticated but unauthorised user.
- An authorised staff member.

Confirm actual database permissions, not merely interface behaviour.

Use fictional test data until protections have been verified.

## 12. Pupil information and recognition

Fable Culture should minimise the collection and publication of personal information.

### Principles

- Avoid publishing full pupil names.
- Use initials only where appropriate and authorised.
- Recognise that initials can still constitute personal information.
- Review explanations and sources for identifying information.
- Keep original submissions private.
- Publish only reviewed educational content.
- Follow school safeguarding and data protection policies.

Older systems that collect pupil names should be reviewed against these principles.

## 13. Production rendering and live data

The earlier requirement for dynamic admin rendering remains relevant, but implementation should depend on the page architecture.

Server-rendered admin pages must not accidentally serve stale database information.

Client-side Firestore subscriptions can provide live updates without requiring the entire page to be dynamically rendered on every request.

Use the appropriate rendering strategy for each feature.

Do not apply force-dynamic indiscriminately without understanding how the page retrieves its data.

Always test both local and production behaviour.

## 14. Educational content consistency

### Country identity

Each country must have its own distinct educational identity.

Avoid duplicating featured:

- Animals.
- Places.
- Cultural traditions.
- Food items.
- Influential figures.
- Environmental features.

This applies across countries within a regional dataset.

### Historical accuracy

Distinguish between:

- Independence.
- Colonisation.
- Self-government.
- Territorial status.
- Flag adoption.
- First use.
- Official recognition.
- Changes to flag designs.

Historical claims and dates must be verified before classroom publication.

### Accessibility

Fable Culture is designed for an alternative education setting and should support pupils with different learning needs.

Prioritise:

- Clear instructions.
- Readable text.
- Consistent navigation.
- Visual learning.
- Immediate feedback.
- Manageable research tasks.
- Responsive layouts.
- Accessible interaction controls.

## 15. Development and debugging standards

### Inspect before editing

Always establish the current state of the relevant files.

Do not assume previously supplied code was successfully installed.

### Diagnose before changing

When a feature fails, investigate:

1. User interface.
2. Application logic.
3. Database operations.
4. Stored data.
5. Permissions.
6. Production rendering and caching.

Identify the actual cause before repeatedly modifying components.

### Lesson from the Flag Museum

The missing initials and sources were caused by incomplete public Firestore documents.

Repeated interface changes did not solve the problem.

Inspecting the actual returned database records established the cause.

This evidence-led debugging approach should be used throughout the platform.

### Verification

A successful TypeScript check does not prove that a feature works.

Verification should include:

- TypeScript compilation.
- Relevant browser interactions.
- Database inspection where appropriate.
- Permission testing.
- Refresh and persistence checks.
- Production build.
- Production behaviour where appropriate.

Clearly distinguish between implemented, tested and fully verified features.

## 16. Development collaboration preferences

- Use UK English.
- Provide exact project-relative file paths.
- Use targeted replacement blocks for small changes.
- Provide complete replacement files for substantial changes.
- Group related changes into meaningful development batches.
- Preserve existing working functionality.
- Avoid unrelated feature development while resolving bugs.
- Explain technical concepts in everyday language.
- Keep files modular and maintainable.
- Do not invent test results, file links or citations.
- Clearly disclose assumptions, limitations and architectural shortcuts.

## 17. Python development and automation

Python is increasingly useful as a supporting development tool.

It does not replace the existing TypeScript and React application stack.

Current uses include:

- Targeted file modifications.
- Repetitive code updates.
- Data processing.
- File inspection.
- Image organisation.
- Development automation.

Python scripts that modify existing files should verify their expected targets before writing changes.

Where possible, scripts should fail clearly rather than silently making incomplete changes.

Continue introducing Python concepts gradually during development.

## 18. Git safety and release workflow

Retain the established merge direction:

feature → region → dev → main

Before starting work:

- Inspect the current branch.
- Inspect the working tree.
- Check relevant branch differences.
- Understand uncommitted changes.

Main and dev may legitimately differ while development is ongoing. Do not force them to match or overwrite unfinished work.

Before committing:

- Review changed files.
- Exclude temporary backups.
- Exclude debugging code.
- Exclude secrets.
- Run appropriate tests.
- Stage relevant files explicitly.

Avoid indiscriminate use of git add .

Do not merge into production without approval.

## 19. Documentation and project organisation

Maintain three complementary documentation layers.

### Master Project Context

Permanent architectural principles, educational vision, technology choices and development standards.

### Feature documentation

Detailed descriptions of individual systems, their components, data structures and responsibilities.

### Development handovers

Current branch, recent changes, verified functionality, outstanding bugs, testing requirements and immediate next steps.

Development handovers should be dated.

Older implementation statements should be treated as historical where superseded by newer updates.

## 20. Chat management

Use separate conversations within the Fable Culture Project for substantial development areas.

Suggested areas:

- Architecture.
- Regional content.
- History Expedition.
- Flag Museum.
- Firebase security and administration.
- Educational games.
- Deployment and Git.

Every five assistant responses, provide a brief conversation-length check.

Prepare comprehensive handovers before conversations become excessively long.

Do not rely exclusively on chat history for permanent technical documentation.

End development responses with:

🐍 DON'T FORGET ABOUT PYTHON BABBBBY!

## 21. Current development position

As of 26 November 2026:

### Confirmed

- Flag Museum entrance and gallery navigation.
- Interactive flag annotations.
- Pupil research submission.
- Teacher authentication.
- Teacher approval and publication.
- Public display of explanations, authorised initials and sources on a repaired test exhibit.

### Requires verification or completion

- Published research editing and deletion.
- Fresh end-to-end publication of all required fields.
- Removal of fictional test data.
- Removal of diagnostic logging.
- Final Flag Museum security testing.
- Legacy security remediation.
- Historical date verification.
- Dashboard pending contribution count.
- Git milestone and deployment preparation.

The detailed dated Flag Museum handover should be used for the immediate development tasks.

This master document establishes the long-term direction of the platform.
