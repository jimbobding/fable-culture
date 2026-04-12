# Current Focus — South Asia Polish, UX Refinement, and System Stabilisation

## Goal

With core systems now complete (student uploads, facts, timeline submissions, and admin tools), the focus shifts to refining user experience, improving content quality, and preparing the project for scale across multiple regions.

---

## Current status

### Student Upload System

- Fully functional:
  - Upload image
  - Save to Firebase Storage
  - Save submission to Firestore
- Admin moderation:
  - Approve submissions
  - Delete submissions
  - Instant UI updates (no reload)
- Public gallery display working
- Upload entry point improved on homepage

---

### Timeline System (COMPLETED)

- Timeline is now a shared reusable component
- Timeline data separated by region
- Supports:
  - Year ranges
  - Titles and descriptions
  - Emojis
  - Guided questions
  - Research gaps

---

### Timeline Submission System (NEW — COMPLETED)

- Students can submit timeline ideas with:

  - title
  - explanation
  - student name
  - region
  - country
  - periodKey
  - createdAt timestamp
  - status (pending / approved)

- Admin system includes:

  - Approve / delete submissions
  - Instant updates (no reload)
  - Filters (status, region, country, period)
  - Search (title, name, explanation)
  - Sorting (newest first)
  - Submission counts

- Approved ideas now display inside timeline items

---

### Homepage improvements

- Upload entry point repositioned for clarity
- Featured month and event cards added

---

## 🌏 South Asia — CURRENT BUILD STATE

### What is already built

- South Asia landing page
- Interactive SVG map
- Dynamic country routing (`/south-asia/[country]`)
- Data-driven country system
- Country pages include:
  - Hero
  - Quick facts
  - Timeline (shared)
  - Gallery (to be refined)
  - Facts (Firestore)

---

### Fact File Visual Section (IN PROGRESS)

- Replacing gallery as primary visual learning section
- Includes:
  - Capital
  - Food
  - Culture
  - Wildlife
- Uses structured image folders
- Will become standard across all regions

---

### ⚠️ Known issue

- Middle East timeline not rendering correctly after shared timeline changes
- Deferred until after South Asia polish phase

---

## Design direction

Moving away from:

- Box-heavy layouts

Towards:

- Flow-based layouts
- Strong visual hierarchy
- Image-led learning
- Cleaner section transitions

---

## Current priority

1. South Asia country page polish

   - Clean layout and spacing
   - Improve structure consistency
   - Remove weak or unused sections

2. Finalise Fact File Visual Section

   - Ensure consistency across all countries
   - Improve educational descriptions

3. Improve overall layout flow

   - Reduce boxiness
   - Improve visual transitions

4. Component structure scaling

   - Introduce feature-based folders (e.g. admin/timeline)
   - Maintain shared vs region separation

5. Stability check
   - Ensure timeline system works across regions

---

## Folder structure direction

components/
shared/ → reusable components
regions/{region}/ → region-specific components
admin/
timeline/ → timeline admin components

---

## Next steps

1. Merge completed timeline system into south-asia branch
2. Create new feature branch for polish (`feature/south-asia-polish`)
3. Clean and refine South Asia country pages
4. Finalise Fact File Visual section
5. Improve layout flow and visuals
6. Prepare for next region or homepage improvements

---

## 🌏 South Asia — POST-LAUNCH STATE

### What is now complete

- South Asia page is live
- Timeline structure improved:
  - Alternating layout (left/right)
  - Central vertical line added
  - Year-based timeline entries now supported
- Intro cards (Geography, Culture, Why it matters):
  - Now fully clickable
  - Ready for future deep-dive pages
- Facts system integrated into country pages:
  - Static + Firebase facts combined
  - Student submissions working
- Quick facts updated:
  - Languages added
  - Currency added
  - Layout refined

---

## ⚠️ Known limitations (accepted for launch)

- Timeline content is still shallow in some areas
- Country timelines need deeper historical coverage
- Geography / Culture / Importance pages are placeholders
- Some images are functional but not optimised for learning

---

## 🎯 Immediate next priorities (post-launch)

1. Add South Asia entry point to homepage

   - Clear button or section linking to `/south-asia`
   - Make it visually consistent with other entry points

2. Improve South Asia timeline content

   - Replace basic entries with deeper, more meaningful history
   - Keep student-friendly language
   - Maintain chronological clarity

3. Rebuild weakest country timelines first

   - Bhutan
   - Maldives
   - Afghanistan
   - Nepal

4. Build out clickable intro pages

   - `/south-asia/geography`
   - `/south-asia/culture`
   - `/south-asia/importance`

5. Image upgrade pass

   - Replace generic images with purposeful learning visuals
   - Ensure naming consistency with project structure

6. Final homepage polish

   - Improve layout flow
   - Check spacing and visual hierarchy
   - Ensure South Asia sits naturally within site structure

---

## 🧠 Development note

This phase prioritises:

- Shipping working features over perfection
- Improving content depth after release
- Maintaining reusable systems for scaling to future regions
