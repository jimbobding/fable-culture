# Fable Culture — New Region Build Brief

Use this document as the project-context prompt for building any new Fable Culture region.

The core rule is:

**Reuse the architecture, not the appearance.**

New regions should use the existing Fable Culture systems wherever possible.

Do not rebuild systems that already work.

Shared components should remain region-neutral, while region-specific content, colours, imagery, wording and cultural identity should come from regional data/config.

# 1. Region Homepage

Each region homepage should follow the same broad reusable structure:

Hero / introduction

Region exploration / map

Culture Kitchen

Culture Gallery

Regional Timeline

Deep Dives

Student Discoveries

The structure is reusable, but the visual design should suit the region.

**Do not make every region look the same.**

The homepage should clearly link to:

- each country or regional group
- Culture Kitchen
- Culture Gallery
- Regional Timeline
- Deep Dives
- Student Discoveries

# 2. Country Pages

Use one dynamic route for the region:

`src/app/{region}/[country]/page.tsx`

Do not create a separate page file for every country.

Country pages should be powered by a regional data file, for example:

`src/data/eastAsia/eastAsiaCountries.ts`

Typical country data includes:

- slug
- name
- flag
- capital
- population
- languages
- currency
- heroImage
- intro
- overview
- tags
- theme
- factFile
- timeline
- places
- influentialFigures
- culturalSpotlight
- facts

Core rule:

**The country page layout stays reusable. The country data changes.**

A typical country page journey is:

Hero

→ Quick Facts

→ Overview

→ Fact File

→ Timeline

→ Influential Figures

→ Cultural Spotlight

→ Places

→ Facts

The exact content can flex where appropriate.

Fact File sections do not have to be identical for every country.

Categories can include things such as:

- capital
- food
- culture
- wildlife
- history
- environment
- identity
- music
- independence
- geography

Country pages should feel distinct rather than interchangeable.

# 3. Regional Timeline

This is separate from individual country timelines.

## Shared system

`src/components/shared/regional-timeline/`

Important files include:

- `RegionalTimeline.tsx`
- `RegionalTimelinePage.tsx`
- `types.ts`

Each region supplies its own timeline data/config.

Example:

`src/data/eastAsia/timeline/timeline.ts`

Example route:

`src/app/east-asia/timeline/page.tsx`

The shared component handles the timeline engine.

Regional data controls:

- eras
- events
- filters
- wording
- theme
- region identity

**Do not rebuild the timeline engine for each region.**

## Regional Timeline System

**Status: Reusable shared component already built.**

The Regional Timeline system provides one reusable interactive historical timeline engine for Fable Culture.

Each region supplies its own timeline data/config while the shared component controls presentation, filtering, chronological ordering and timeline layout.

## Current implementation

East Asia already uses the shared system through:

`eastAsiaTimeline`

The East Asia configuration demonstrates the intended architecture and includes:

- region information
- timeline title and introduction
- return route
- country/place filters
- historical eras
- chronological events
- region-specific theme

## Event structure

A timeline event can currently contain:

- `id`
- `date`
- `sortYear`
- `title`
- `summary`
- `places`
- `era`
- optional `image`
- optional `imageAlt`
- optional `significance`

`sortYear` controls chronological ordering independently from the human-readable date.

`places` connects an event to the timeline filters.

`era` connects an event to one of the configured historical periods.

## Filtering

The shared timeline automatically provides an **All** filter plus the filters supplied by the regional configuration.

Events can belong to more than one place.

This allows the timeline to show historical connections across borders rather than treating each country's history separately.

## Eras

Events are grouped into configured historical eras.

Each era can contain:

- `id`
- `title`
- optional `subtitle`

The timeline automatically hides an era when the current filter leaves it with no visible events.

## Progressive-disclosure upgrade

Timeline events should show only a concise amount of information initially.

### Collapsed view

- date
- title
- place/country tags
- short summary
- `Discover more` interaction

### Expanded view

Can reveal:

- significance / **Why it matters**
- fuller detail
- image where available
- additional learning content
- optional link to a relevant Deep Dive

This allows regional timelines to contain substantial educational detail without overwhelming the main page.

## South America Timeline

South America should use the existing Regional Timeline system rather than creating another timeline component.

The South America configuration should provide:

- South America-specific eras
- country filters
- approximately 20–25 carefully selected historical events
- short summaries for the collapsed view
- deeper educational information for the expanded view
- links to relevant Deep Dives where appropriate

Core rule:

**Reuse the timeline engine, not another region's timeline content.**

Shared:

`RegionalTimeline.tsx`

`types.ts`

Region-specific:

`East Asia config`

`South America config`

`Middle East config`

etc.

Before creating any new timeline feature, check this shared system first and extend it when the required behaviour would benefit other regions.

# 4. Culture Kitchen

Shared system:

`src/components/shared/culture-kitchen/`

Important files:

- `CultureKitchen.tsx`
- `CultureKitchenPage.tsx`
- `CultureKitchenGallery.tsx`
- `CultureKitchenSubmissionForm.tsx`
- `types.ts`

Each region gets its own recipe data.

Example:

`src/data/eastAsia/cultureKitchen/cultureKitchen.ts`

Example route:

`src/app/east-asia/culture-kitchen/page.tsx`

Reuse the same engine, but change:

- recipes
- countries
- wording
- colours
- artwork
- cultural feel

The submission form and gallery should remain shared.

# 5. Culture Gallery

Shared system:

`src/components/shared/culture-gallery/`

Important files:

- `CultureGallery.tsx`
- `CultureGalleryPage.tsx`
- `CultureGalleryCreations.tsx`
- `CultureGallerySubmissionForm.tsx`
- `types.ts`

Each region supplies its own data/config.

Example:

`src/data/eastAsia/cultureGallery/cultureGallery.ts`

The Culture Gallery has two main areas:

## Creative Culture

Examples, inspiration and cultural creativity.

## Art Room

Practical classroom tasks.

`artRoom` is an array, so a region can have one or several active activities without changing the shared component.

Student gallery work uses the existing moderated submission system.

**Do not create a separate gallery engine for each region.**

# 6. Student Discoveries

Shared component:

`src/components/shared/StudentDiscoveries.tsx`

Students can submit useful learning resources they find.

Current Firestore collection:

`resourceSubmissions`

Basic flow:

Student submits resource

→ Firestore

→ Admin moderation

→ Approved resource appears publicly

The shared component must contain no region-specific content.

Region-specific data/config provides:

- countries
- topics
- region name
- titles
- wording

# 7. Deep Dives

Shared Deep Dive system:

`src/components/shared/deep-dive/`

Important files include:

- `DeepDivePage.tsx`
- `DeepDiveSection.tsx`
- `DeepDiveSources.tsx`
- `DeepDiveYourTurn.tsx`
- `DeepDiveCommunityFeed.tsx`
- `types.ts`

Important rule:

**Reuse the Deep Dive plumbing, not necessarily the visual page.**

Examples:

Genghis Khan uses a Mongol steppe / empire visual identity.

Anime uses a manga / comic visual identity.

Future Deep Dives should use whatever visual treatment best suits the subject.

A Deep Dive should be a proper readable educational feature page.

It should not just be:

- a timeline
- a quiz
- a collection of widgets

Interactive elements should support the story.

Deep Dives should use reliable sources.

Citations should appear throughout the page, with a full bibliography at the bottom.

## Deep Dive submissions

Current Firestore collection:

`deepDiveSubmissions`

Storage:

`deep-dive-submissions/{region}/{deepDive}/...`

Admin:

`/admin/deep-dives`

Deep Dive submissions must remain separate from Culture Gallery submissions.

# 8. Interactive Journey System

Reusable interactive storytelling system:

`src/components/shared/deep-dive/journey/`

Important files include:

- `JourneyPage.tsx`
- `types.ts`

The Journey system is designed for immersive, step-by-step educational experiences inside Deep Dives and other suitable Fable Culture content.

A journey can combine:

- fact stops
- reveal interactions
- sound identification
- ambient audio
- landmarks
- reflective choices
- decorative environmental elements

Journey content is supplied through region/topic-specific data rather than being hard-coded into the shared component.

A Journey config can control:

- title and introduction
- region name and return route
- visual style
- colour theme
- journey stops
- audio
- markers
- decorative environmental objects

Current visual styles include:

- default
- river
- forest
- city
- trail

## Audio

Journey audio should live under:

`public/audio/`

Audio can be used for:

- wildlife calls
- environmental sound
- rivers and water
- weather
- atmospheric soundscapes
- listen-and-identify activities

The Amazon Journey currently establishes the reusable pattern for combining environmental audio with educational interactions.

## Journey core rule

**Reuse the Journey engine, not the journey itself.**

Do not create a new journey component for every topic.

Instead:

`Shared Journey engine`

→ `topic-specific Journey config`

→ `unique content, theme, sounds and decorations`

A rainforest journey, historical journey, city journey or migration journey should therefore be able to feel completely different while using the same underlying system.

Journey interactions should support the educational story rather than becoming disconnected games.

Not every Deep Dive requires a Journey.

Use the system only when travelling through places, environments, events or ideas genuinely improves the learning experience.

# 9. Facts System

Country facts use a hybrid model:

- Static facts from regional data
- Approved student facts from Firestore

Current Firestore collection:

`regionFacts`

Only approved student facts should appear publicly.

Do not replace the hybrid system with a new facts system.

For South America, country pages currently show a small starter selection of static facts so learners have room to contribute additional discoveries.

Student-added facts can be visually distinguished from built-in Fable Culture facts.

The intended visual language is:

**Fable starter fact**

→ standard fact-card styling

**Student Discovery**

→ visually distinct learner-contribution styling

This makes learner contributions visible as part of the growing Fable Culture site.

# 10. Shared Moderation Pattern

Student-facing contribution systems follow the same general pattern:

Student submits

→ Firestore status = `pending`

→ Admin reviews

→ Approve / edit / delete

→ Approved content appears publicly

Important existing collections include:

- `regionFacts`
- `resourceSubmissions`
- `cultureGallerySubmissions`
- `deepDiveSubmissions`

The global gallery has its own submission system.

Do not merge unrelated submission systems together simply because they all use Firebase.

# 11. Admin / Dynamic Data Rule

If a page depends on data that can change without a deployment, caching must be considered carefully.

Admin and moderation pages should use:

`export const dynamic = "force-dynamic";`

This avoids stale production data.

General rule:

**If the data can change without a deploy, do not rely on static caching.**

# 12. Images

Use a consistent regional image structure.

Example:

`public/images/continents/{region}/countries/{country}/`

Rules:

- lowercase filenames
- no spaces
- descriptive filenames
- exact path matching
- use suitable aspect ratios for the component
- prefer strong landscape images for wide cards/heroes
- avoid low-resolution or badly cropped images

Good examples:

`machu-picchu-landscape.jpg`

`amazon-rainforest-river.jpg`

`rio-carnival-costumes.jpg`

Avoid:

`history.jpg`

`culture.jpg`

`image1.jpg`

Vercel uses a case-sensitive filesystem, so file paths must match exactly.

# 13. Visual Design Rule

This is one of the most important rules in the project:

**Shared architecture does not mean shared appearance.**

Reuse:

- component behaviour
- routing patterns
- Firebase plumbing
- data types
- moderation systems
- submission systems
- broad page structure

Customise:

- colours
- typography feel
- backgrounds
- decorative elements
- imagery
- cultural storytelling
- section presentation
- Deep Dive art direction

Every region should feel culturally and visually distinct.

Every country should also have its own identity where possible.

Avoid generic tourism-style pages.

Images should help tell the educational story rather than acting only as decoration.

# 14. Region-Specific Components

Shared components should stay under:

`src/components/shared/`

Region-specific components should stay under:

`src/components/regions/{region}/`

Example:

`src/components/regions/east-asia/EastAsiaMap.tsx`

`src/components/regions/east-asia/anime/AnimeCommunityWall.tsx`

Use a region-specific component when:

- the visual treatment is unique
- the interaction is unique
- the component would become awkward or overloaded if forced into a generic shared component

Do not move genuinely region-specific visual logic into shared components just for the sake of reuse.

# 15. Create Your Look

Reusable interactive game system:

`create-your-look/`

Main pieces include:

- `CreateYourLook.tsx`
- `PreviewCanvas.tsx`
- `OptionGroup.tsx`
- `MultiOptionGroup.tsx`
- `AccessoryControls.tsx`
- `types.ts`

The engine can support:

- base selection
- multiple accessories
- drag and drop
- resize
- rotate
- layer ordering
- randomise
- reset
- backgrounds
- uploaded photos

The engine should remain reusable.

Each region/topic supplies its own:

- assets
- clothing
- masks
- accessories
- backgrounds
- educational context

Do not rebuild the game engine for each region.

# 16. Homepage Navigation

The main Fable Culture homepage should contain a clear card/button for every live region.

The region-card layout should remain responsive rather than growing into one long row.

Basic journey:

Main Homepage

→ Region

→ Country / Activity

→ Content

Users should always have an obvious way to return to:

- the region homepage
- the main Fable Culture homepage

# 17. Development Style

When working on this project:

- work one file or one feature at a time where practical
- provide exact file paths
- prefer full copy-paste files over partial code surgery
- avoid unrelated refactors
- do not redesign working shared systems unnecessarily
- reuse existing components before creating new ones
- inspect the closest existing implementation before building anything new

The goal for a new region is primarily:

**Add content and regional identity to proven systems rather than inventing new systems.**

# 18. Git Workflow

Core branches:

`main` = production

`dev` = development / staging

Each region should have its own region branch.

Feature work should branch from the relevant region branch.

Promotion flow:

`feature`

→ `region`

→ `dev`

→ `main`

→ `Vercel`

Example:

`feature/south-america-homepage`

→ `south-america`

→ `dev`

→ `main`

Before production promotion run:

`npm run build`

Keep `main` and `dev` aligned before starting major new work.

# 19. New Region Build Order

Recommended order for a new region:

## Phase 1 — Core Structure

Create region branch

Create region homepage

Create regional data structure

Create dynamic country route

Add countries / regional groups

Add hero images

Add Quick Facts / Overview / Fact File

Add country timelines

Add Places / Influential Figures / Cultural Spotlight

Confirm navigation works

## Phase 2 — Shared Region Features

Add regional interactive map/exploration

Add Culture Kitchen

Add Culture Gallery

Add Regional Timeline

Add Student Discoveries

Add Deep Dive links / first Deep Dives

## Phase 3 — Student Interaction

Confirm submissions work

Confirm admin moderation works

Confirm approved content appears publicly

Test Firebase Storage uploads

Test production behaviour

## Phase 4 — Finish

Add main homepage region card

Run build

Fix blockers only

Merge:

`feature → region → dev → main`

Confirm Vercel production deployment

# 20. Do Not Over-Engineer During Region Builds

Do not stop a region build to perform large architecture refactors unless something is genuinely broken.

Known large files can be split later.

The current priority is:

Build regions

→ get the full site working

→ then do a dedicated cleanup/refactor pass

Future cleanup should include:

- splitting very large components
- removing duplication
- cleaning dead code
- improving types
- reviewing Firebase security
- reviewing performance
- updating deprecated Next.js configuration

Do not change functionality or visual design during that cleanup unless deliberately planned.

# Reusable Component Check

Before creating a new component or system, check whether Fable Culture already has a reusable version.

Current important reusable systems include:

| System              | Shared location                                | Status |
| ------------------- | ---------------------------------------------- | ------ |
| Regional Timeline   | `src/components/shared/regional-timeline/`     | Built  |
| Deep Dive           | `src/components/shared/deep-dive/`             | Built  |
| Interactive Journey | `src/components/shared/deep-dive/journey/`     | Built  |
| Culture Kitchen     | `src/components/shared/culture-kitchen/`       | Built  |
| Culture Gallery     | `src/components/shared/culture-gallery/`       | Built  |
| Facts               | `src/components/shared/FactsSection.tsx`       | Built  |
| Student Discoveries | `src/components/shared/StudentDiscoveries.tsx` | Built  |
| Create Your Look    | `create-your-look/`                            | Built  |

**Before building something new, inspect this list and the closest existing implementation first.**

# Quick Start Prompt for a Fresh Chat

Use this when starting a new region:

We are adding a new region to Fable Culture.

Use the existing Fable Culture architecture and do not rebuild established systems.

Reuse the existing data-driven country-page pattern, shared Culture Kitchen, shared Culture Gallery, shared Regional Timeline, Student Discoveries, hybrid Facts system, shared Deep Dive infrastructure and Interactive Journey system where appropriate.

Shared components must remain region-neutral.

Region-specific content, colours, imagery, wording and cultural identity must come from regional data/config or region-specific components.

**Reuse architecture, not appearance.**

The new region must have its own culturally appropriate visual identity.

Country pages should broadly follow:

Hero → Quick Facts → Overview → Fact File → Timeline → Influential Figures → Cultural Spotlight → Places → Facts.

Region homepages should broadly follow:

Hero/Intro → Explore/Map → Culture Kitchen → Culture Gallery → Regional Timeline → Deep Dives → Student Discoveries.

Deep Dives must be proper educational feature pages with reliable sources and visible citations.

Shared Deep Dive plumbing can be reused, but bespoke visual designs are encouraged.

Interactive Journeys should use the existing shared Journey engine when travelling through places, environments, events or ideas genuinely improves the educational experience.

Student submissions must use the existing moderated Firebase systems rather than creating duplicate systems.

Work one file/feature at a time.

Give exact file paths.

Prefer full copy-paste files rather than partial surgery.

Avoid unrelated refactors.

Run `npm run build` before merging.

Git promotion is:

`feature → region → dev → main → Vercel`

Before building anything new, inspect the closest existing implementation and the reusable component registry.

# Core Principle

**Build the system once. Reuse it everywhere. Let the data, culture and visual identity make each region different.**
