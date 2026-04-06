# Current Focus — Student Upload System, Homepage Entry Point, and South Asia Build

## Goal

Stabilise and polish the Student Upload System, improve how students access it, and actively build the South Asia region as the next major content expansion.

---

## Current status

### Student Upload System

- Student uploads are working:

  - Upload image
  - Save to Firebase Storage
  - Save submission to Firestore

- Admin moderation is working:

  - Approve submissions
  - Delete submissions

- Public gallery display is in place
- Upload form styling has been improved
- Homepage now includes a clearer upload entry point

---

### Production issue fixed

- The old “delete removes image but not card” issue on live was traced to stale page data on the admin submissions page
- The fix was to make the admin submissions page dynamic instead of allowing stale cached output on production
- Fresh live submissions now appear and delete correctly

---

### Homepage improvements

- Upload entry point has been moved to a better place on the homepage
- Homepage also includes April event cards and a featured month section

---

## 🌏 South Asia — CURRENT BUILD STATE

### What is already built

- South Asia landing page
- Interactive SVG map with clickable country regions
- Dynamic routing:

  - `/south-asia/[country]`

- Data-driven country system:

  - slug-based routing
  - country dataset powering pages

- Initial country page layout:

  - Hero section (with native name support)
  - Quick facts
  - Timeline
  - Gallery
  - Facts section

---

### Image system (IMPORTANT — DO NOT CHANGE WITHOUT ASKING)

public/images/continents/south-asia/countries/{country}/

Each country contains:

- capital/1.jpg → capital city image (must show city, not landmark)
- food/1.jpg
- culture/1.jpg
- wildlife/1.jpg
- places/1.jpg → 4.jpg

This will power:

- Fact File Visual section (capital, food, culture, wildlife)
- Places gallery section

---

### Design direction

Moving away from:

- repetitive boxed card layouts

Towards:

- more flowy page structure
- overlapping sections
- split layouts
- strong hero sections
- image-led learning

---

### New feature in progress

#### Fact File Visual Section

Replacing generic gallery with:

- Capital (city image)
- Food
- Wildlife
- Culture

Each includes:

- image
- title
- short educational description

---

## Current priority

1. Final polish on Student Upload pages and flow
2. Build South Asia country pages properly (data + layout)
3. Implement Fact File Visual section
4. Improve layout flow (less boxy, more immersive)
5. Review and refine folder structure

---

## Folder structure direction

Current concern:

- The main `components` folder is becoming too large and too mixed

Planned direction:

- Keep shared reusable components in a shared location
- Move region-specific components into region-based folders
- Use South Asia as the first clean example of the improved structure

---

## Next steps

1. Confirm Student Upload pages are styled and working as expected
2. Continue South Asia country page build
3. Implement Fact File Visual section using image folders
4. Improve layout flow and visual hierarchy
5. Start a new chat focused on:

   - South Asia polish
   - folder restructure plan
   - shared vs region-specific component organisation
