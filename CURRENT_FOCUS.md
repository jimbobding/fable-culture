# Current Focus — Student Upload System, Homepage Entry Point, South Asia Build, and Timeline System

## Goal

Stabilise and polish the Student Upload System, improve how students access it, actively build the South Asia region, and introduce a reusable timeline system with future student interaction.

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
  - Timeline (NOW SHARED COMPONENT)
  - Gallery
  - Facts section

---

### 🧠 Timeline system (NEW — IMPORTANT)

- Timeline has been extracted into a **shared reusable component**
- Timeline data has been separated into:

  - `/data/southAsia/timelines.ts`

- Timeline now supports:

  - Year ranges (e.g. 1947–2000)
  - Title + descriptive text
  - Emoji icons
  - Guided learning questions per time period
  - Research gaps (student enquiry prompts)

👉 Purpose:

- Make timelines easier to understand for students
- Encourage thinking, not just reading
- Create a reusable system for all regions

---

### 🚧 Timeline submission system (PLANNED)

A new feature will allow:

- Students to submit ideas about what happened in a time period
- Submissions linked to:

  - region
  - country
  - timeline period (year range)

- Admin moderation (same pattern as facts system)

👉 Important:

- This will be built as a **shared reusable component**
- It must work across:
  - South Asia
  - Middle East
  - All future regions

---

### ⚠️ Known issue

- Middle East timeline component is currently not rendering correctly after timeline system changes
- This will be reviewed AFTER timeline submission system is introduced

---

### Image system (IMPORTANT — DO NOT CHANGE WITHOUT ASKING)

public/images/continents/south-asia/countries/{country}/

Each country contains:

- capital/1.jpg → capital city image (must show city, not landmark)
- food/1.jpg
- culture/1.jpg
- wildlife/1.jpg
- places/1.jpg → 4.jpg

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
5. Implement timeline submission system (shared + moderated)
6. Ensure timeline system works across multiple regions

---

## Folder structure direction

Current concern:

- The main `components` folder is becoming too large and too mixed

Planned direction:

- Shared reusable components → `/components/shared`
- Region-specific components → `/components/regions/{region}`

👉 Timeline is now a **shared component baseline**

---

## Next steps

1. Confirm Student Upload pages are styled and working as expected
2. Continue South Asia country page build
3. Implement Fact File Visual section using image folders
4. Build timeline submission system (shared + reusable)
5. Fix Middle East timeline compatibility
6. Start a new chat focused on:

   - Timeline system + submissions
   - South Asia polish
   - Shared vs region component architecture
