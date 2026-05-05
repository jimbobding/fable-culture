# Current Focus — Caribbean Phase 1 (Structure Build)

## 🎯 Goal

Build the Caribbean region using the **existing Fable Culture system**.

👉 Focus on structure first — NOT new systems.

---

## 📍 Current Status

### ✅ Completed

- Caribbean landing page created (`/caribbean`)
- Core page sections built:

  - Hero
  - Intro (“What is the Caribbean?”)
  - Theme cards

- Timeline integrated (shared system)
- Student Discoveries integrated (shared system)
- Interactive map implemented (stable, region-specific)
- Country card grid implemented

---

### 🟡 In Progress

- Refining layout and visual flow
- Preparing for country page build

---

### 🔴 Next Steps (Immediate)

1. Create dynamic route:

```bash
/app/caribbean/[country]/page.tsx
```

2. Create Caribbean country data file:

```bash
/data/caribbeanCountries.ts
```

3. Build first working country page (ONE only):

- Example: Jamaica

👉 Goal:
“Can one country page fully render using existing systems?”

---

## 🧠 Development Rules (STRICT)

- Reuse existing systems:

  - Timeline
  - StudentDiscoveries
  - RegionContent (if used)

- ❌ Do NOT:

  - rebuild components
  - redesign layout
  - introduce new systems

- ✔️ Follow South Asia as the reference model

---

## 🗂️ File Targets (NEXT)

- `/app/caribbean/[country]/page.tsx`
- `/data/caribbeanCountries.ts`

---

## 🧪 Build Strategy

1. Build ONE country page
2. Confirm:

   - layout works
   - data structure works
   - components render correctly

3. Then scale to all countries

---

## 🌍 Map System (CONFIRMED)

- Map is region-specific (not shared)
- Map controls its own hover state
- Used for navigation only

👉 No further work needed at this stage

---

## 🚫 What NOT to Do

- Do NOT jump to:

  - advanced interactivity
  - animations
  - extra features

👉 Stay in Phase 1

---

## 🎯 Success Criteria

- Caribbean region loads correctly
- At least ONE country page fully working
- Systems reused correctly
- No new architecture introduced
