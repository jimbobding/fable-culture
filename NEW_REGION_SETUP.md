Fable Culture --- New Region Build Brief

Use this document as the project-context prompt for building any new
Fable Culture region.

The core rule is:

Reuse the architecture, not the appearance.

New regions should use the existing Fable Culture systems wherever
possible. Do not rebuild systems that already work. Shared components
should remain region-neutral, while region-specific content, colours,
imagery, wording and cultural identity should come from regional
data/config.

1. Region Homepage

Each region homepage should follow the same broad reusable structure:

Hero / introduction

Region exploration / map

Culture Kitchen

Culture Gallery

Regional Timeline

Deep Dives

Student Discoveries

The structure is reusable, but the visual design should suit the region.

Do not make every region look the same.

The homepage should clearly link to: - each country or regional group -
Culture Kitchen - Culture Gallery - Regional Timeline - Deep Dives -
Student Discoveries

2. Country Pages

Use one dynamic route for the region:

src/app/{region}/[country]/page.tsx

Do not create a separate page file for every country.

Country pages should be powered by a regional data file, for example:

src/data/eastAsia/eastAsiaCountries.ts

Typical country data includes:

slug
name
flag
capital
population
languages
currency
heroImage
intro
overview
tags
theme
factFile
timeline
places
influentialFigures
culturalSpotlight
facts

Core rule:

The country page layout stays reusable. The country data changes.

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

capital

food

culture

wildlife

history

environment

identity

music

independence

geography

Country pages should feel distinct rather than interchangeable.

3. Regional Timeline

This is separate from individual country timelines.

Shared system:

src/components/shared/regional-timeline/

Important files include:

RegionalTimeline.tsx
RegionalTimelinePage.tsx
types.ts

Each region supplies its own timeline data/config.

Example:

src/data/eastAsia/timeline/timeline.ts

Example route:

src/app/east-asia/timeline/page.tsx

The shared component handles the timeline engine.

Regional data controls: - eras - events - filters - wording - theme -
region identity

Do not rebuild the timeline engine for each region.

4. Culture Kitchen

Shared system:

src/components/shared/culture-kitchen/

Important files:

CultureKitchen.tsx
CultureKitchenPage.tsx
CultureKitchenGallery.tsx
CultureKitchenSubmissionForm.tsx
types.ts

Each region gets its own recipe data.

Example:

src/data/eastAsia/cultureKitchen/cultureKitchen.ts

Example route:

src/app/east-asia/culture-kitchen/page.tsx

Reuse the same engine, but change:

recipes

countries

wording

colours

artwork

cultural feel

The submission form and gallery should remain shared.

5. Culture Gallery

Shared system:

src/components/shared/culture-gallery/

Important files:

CultureGallery.tsx
CultureGalleryPage.tsx
CultureGalleryCreations.tsx
CultureGallerySubmissionForm.tsx
types.ts

Each region supplies its own data/config.

Example:

src/data/eastAsia/cultureGallery/cultureGallery.ts

The Culture Gallery has two main areas:

Creative Culture

Examples, inspiration and cultural creativity.

Art Room

Practical classroom tasks.

artRoom is an array, so a region can have one or several active
activities without changing the shared component.

Student gallery work uses the existing moderated submission system.

Do not create a separate gallery engine for each region.

6. Student Discoveries

Shared component:

src/components/shared/StudentDiscoveries.tsx

Students can submit useful learning resources they find.

Current Firestore collection:

resourceSubmissions

Basic flow:

Student submits resource
→ Firestore
→ Admin moderation
→ Approved resource appears publicly

The shared component must contain no region-specific content.

Region-specific data/config provides: - countries - topics - region
name - titles - wording

7. Deep Dives

Shared Deep Dive system:

src/components/shared/deep-dive/

Important files include:

DeepDivePage.tsx
DeepDiveSection.tsx
DeepDiveSources.tsx
DeepDiveYourTurn.tsx
DeepDiveCommunityFeed.tsx
types.ts

Important rule:

Reuse the Deep Dive plumbing, not necessarily the visual page.

Examples:

Genghis Khan uses a Mongol steppe / empire visual identity

Anime uses a manga / comic visual identity

Future Deep Dives should use whatever visual treatment best suits
the subject

A Deep Dive should be a proper readable educational feature page.

It should not just be: - a timeline - a quiz - a collection of widgets

Interactive elements should support the story.

Deep Dives should use reliable sources.

Citations should appear throughout the page, with a full bibliography at
the bottom.

Deep Dive submissions

Current Firestore collection:

deepDiveSubmissions

Storage:

deep-dive-submissions/{region}/{deepDive}/...

Admin:

/admin/deep-dives

Deep Dive submissions must remain separate from Culture Gallery
submissions.

8. Facts System

Country facts use a hybrid model:

Static facts from regional data

- Approved student facts from Firestore

Current Firestore collection:

regionFacts

Only approved student facts should appear publicly.

Do not replace the hybrid system with a new facts system.

9. Shared Moderation Pattern

Student-facing contribution systems follow the same general pattern:

Student submits
→ Firestore status = "pending"
→ Admin reviews
→ Approve / edit / delete
→ Approved content appears publicly

Important existing collections include:

regionFacts
resourceSubmissions
cultureGallerySubmissions
deepDiveSubmissions

The global gallery has its own submission system.

Do not merge unrelated submission systems together simply because they
all use Firebase.

10. Admin / Dynamic Data Rule

If a page depends on data that can change without a deployment, caching
must be considered carefully.

Admin and moderation pages should use:

export const dynamic = "force-dynamic";

This avoids stale production data.

General rule:

If the data can change without a deploy, do not rely on static
caching.

11. Images

Use a consistent regional image structure.

Example:

public/images/continents/{region}/countries/{country}/

Rules:

lowercase filenames

no spaces

descriptive filenames

exact path matching

use suitable aspect ratios for the component

prefer strong landscape images for wide cards/heroes

avoid low-resolution or badly cropped images

Good examples:

machu-picchu-landscape.jpg
amazon-rainforest-river.jpg
rio-carnival-costumes.jpg

Avoid:

history.jpg
culture.jpg
image1.jpg

Vercel uses a case-sensitive filesystem, so file paths must match
exactly.

12. Visual Design Rule

This is one of the most important rules in the project:

Shared architecture does not mean shared appearance.

Reuse:

component behaviour

routing patterns

Firebase plumbing

data types

moderation systems

submission systems

broad page structure

Customise:

colours

typography feel

backgrounds

decorative elements

imagery

cultural storytelling

section presentation

Deep Dive art direction

Every region should feel culturally and visually distinct.

Every country should also have its own identity where possible.

Avoid generic tourism-style pages.

Images should help tell the educational story rather than acting only as
decoration.

13. Region-Specific Components

Shared components should stay under:

src/components/shared/

Region-specific components should stay under:

src/components/regions/{region}/

Example:

src/components/regions/east-asia/EastAsiaMap.tsx
src/components/regions/east-asia/anime/AnimeCommunityWall.tsx

Use a region-specific component when: - the visual treatment is unique -
the interaction is unique - the component would become awkward or
overloaded if forced into a generic shared component

Do not move genuinely region-specific visual logic into shared
components just for the sake of reuse.

14. Create Your Look

Reusable interactive game system:

create-your-look/

Main pieces include:

CreateYourLook.tsx
PreviewCanvas.tsx
OptionGroup.tsx
MultiOptionGroup.tsx
AccessoryControls.tsx
types.ts

The engine can support: - base selection - multiple accessories - drag
and drop - resize - rotate - layer ordering - randomise - reset -
backgrounds - uploaded photos

The engine should remain reusable.

Each region/topic supplies its own: - assets - clothing - masks -
accessories - backgrounds - educational context

Do not rebuild the game engine for each region.

15. Homepage Navigation

The main Fable Culture homepage should contain a clear card/button for
every live region.

The region-card layout should remain responsive rather than growing into
one long row.

Basic journey:

Main Homepage
→ Region
→ Country / Activity
→ Content

Users should always have an obvious way to return to: - the region
homepage - the main Fable Culture homepage

16. Development Style

When working on this project:

work one file or one feature at a time where practical

provide exact file paths

prefer full copy-paste files over partial code surgery

avoid unrelated refactors

do not redesign working shared systems unnecessarily

reuse existing components before creating new ones

inspect the closest existing implementation before building anything
new

The goal for a new region is primarily:

Add content and regional identity to proven systems rather than
inventing new systems.

17. Git Workflow

Core branches:

main = production
dev = development / staging

Each region should have its own region branch.

Feature work should branch from the relevant region branch.

Promotion flow:

feature
→ region
→ dev
→ main
→ Vercel

Example:

feature/south-america-homepage
→ south-america
→ dev
→ main

Before production promotion run:

npm run build

Keep main and dev aligned before starting major new work.

18. New Region Build Order

Recommended order for a new region:

Phase 1 --- Core Structure

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

Phase 2 --- Shared Region Features

Add regional interactive map/exploration

Add Culture Kitchen

Add Culture Gallery

Add Regional Timeline

Add Student Discoveries

Add Deep Dive links / first Deep Dives

Phase 3 --- Student Interaction

Confirm submissions work

Confirm admin moderation works

Confirm approved content appears publicly

Test Firebase Storage uploads

Test production behaviour

Phase 4 --- Finish

Add main homepage region card

Run build

Fix blockers only

Merge feature → region → dev → main

Confirm Vercel production deployment

19. Do Not Over-Engineer During Region Builds

Do not stop a region build to perform large architecture refactors
unless something is genuinely broken.

Known large files can be split later.

The current priority is:

Build regions
→ get the full site working
→ then do a dedicated cleanup/refactor pass

Future cleanup should include: - splitting very large components -
removing duplication - cleaning dead code - improving types - reviewing
Firebase security - reviewing performance - updating deprecated Next.js
configuration

Do not change functionality or visual design during that cleanup unless
deliberately planned.

Quick Start Prompt for a Fresh Chat

Use this when starting a new region:

We are adding a new region to Fable Culture.

Use the existing Fable Culture architecture and do not rebuild
established systems.

Reuse the existing data-driven country-page pattern, shared Culture
Kitchen, shared Culture Gallery, shared Regional Timeline, Student
Discoveries, hybrid Facts system and shared Deep Dive infrastructure.

Shared components must remain region-neutral. Region-specific content,
colours, imagery, wording and cultural identity must come from
regional data/config or region-specific components.

Reuse architecture, not appearance.

The new region must have its own culturally appropriate visual
identity.

Country pages should broadly follow:

Hero → Quick Facts → Overview → Fact File → Timeline → Influential
Figures → Cultural Spotlight → Places → Facts.

Region homepages should broadly follow:

Hero/Intro → Explore/Map → Culture Kitchen → Culture Gallery →
Regional Timeline → Deep Dives → Student Discoveries.

Deep Dives must be proper educational feature pages with reliable
sources and visible citations. Shared Deep Dive plumbing can be
reused, but bespoke visual designs are encouraged.

Student submissions must use the existing moderated Firebase systems
rather than creating duplicate systems.

Work one file/feature at a time, give exact file paths, provide full
copy-paste files rather than partial surgery, avoid unrelated
refactors, and run npm run build before merging.

Git promotion is:

feature → region → dev → main → Vercel.

Before building anything new, inspect the closest existing
implementation and reuse it where appropriate.

Core Principle

Build the system once. Reuse it everywhere. Let the data, culture
and visual identity make each region different.
