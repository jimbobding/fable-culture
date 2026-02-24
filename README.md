This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# 🌍 Fable Culture

An educational website designed to showcase world cultures for students through interactive regions, galleries, timelines, and facts.

---

## 📌 Project Purpose

Fable Culture is built to:

- Teach students about global cultures in a visual and engaging way
- Support classroom learning
- Provide rich media (photos, videos, facts, timelines)
- Be simple and accessible for staff and students

---

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router, v16+ with Turbopack)
- **Language:** TypeScript
- **Frontend:** React
- **Styling:** Tailwind CSS
- **Database:** Firebase (facts & dynamic content)
- **Hosting:** Vercel
- **Version Control:** Git & GitHub

---

## 🌿 Git Branch Workflow

Main branches:

- `main` → Live production
- `dev` → Testing / staging
- `feature/*` → New features

Examples:

- `feature/password-protection`
- `feature/gallery-page-clean2`
- `continent/middle-east`

### Workflow

```
Feature → dev → main → Vercel
```

---

## 📁 Project Structure (Simplified)

```
src/
  app/
    africa/
    europe/
    middle-east/
    gallery/
    password/
  components/
    Gallery.tsx
    Timeline.tsx
    FactsSection.tsx
    RegionContent.tsx
  data/
    africa/
    middleEast/
    britishValues.ts
public/
  images/
    continents/
```

---

## ✅ Implemented Features

### 1. Region Pages

Each region includes:

- Hero section
- Intro text
- Timeline
- Gallery
- Facts section (Firebase-powered)

---

### 2. Global Gallery Page (`/gallery`)

Displays multiple themed galleries:

- African Drumming
- Black History Month
- Jollof Showdown
- (More planned)

Uses reusable components and data files.

---

### 3. Password Protection (Gallery Only)

- Only `/gallery` is protected
- Middleware redirects to `/password`
- After login, user returns to gallery
- Leaving gallery requires re-login
- Uses secure server actions + cookies
- Works locally and on Vercel

---

### 4. Custom Password Page

- Styled to match site theme
- Logo + gradient background
- Card UI
- Error handling
- Redirect support
- Wrapped in `Suspense` for production builds

---

## 🐛 Issues Solved

### Password System

- Fixed client-side environment variable issues
- Migrated to server actions
- Fixed cookie handling
- Resolved Vercel deployment errors
- Added Suspense for `useSearchParams`

---

### Gallery Errors

- Fixed missing imports
- Resolved branch conflicts
- Recovered deleted gallery components
- Corrected routing issues

---

### Missing Images on Vercel

**Cause:**

- `.JPG` vs `.jpg` filename case sensitivity
- Linux servers are strict

**Fix Plan:**

- Rename all images to lowercase
- Update data references
- Use `git mv` for renaming

---

## 🚧 Current Development Focus

- Standardising image filenames
- Final deployment to `main`
- Domain setup on Vercel
- UX improvements
- Performance optimisation
- Learning React fundamentals

---

## 🧠 Learning & Development Approach

Preferred working style:

- Step-by-step guidance
- Real-world explanations
- Clear reasoning behind solutions
- No unnecessary code dumping
- Focus on understanding

---

## 🎯 Planned Next Steps

- Finish image cleanup
- Merge to `dev` and `main`
- Configure custom domain
- Expand gallery content
- Add more regions
- Improve accessibility
- Deepen React knowledge (hooks, state, effects)

---

## 📦 Deployment

### Local

```bash
npm run dev
npm run build
npm run start
```

### Production

- Automatic deploy via Vercel on `main`
- Environment variables configured in Vercel dashboard

---

## 🔐 Environment Variables

Required:

```
SITE_PASSWORD=your_password_here
```

Optional (legacy):

```
NEXT_PUBLIC_SITE_PASSWORD=your_password_here
```

---

## 📖 Notes

- Always test with `npm run build` before pushing
- Check image casing before deployment
- Use feature branches for new work
- Keep `dev` stable

---

## 👤 Author

Built and maintained by Jimmy

---

_This README is a living document and should be updated as the project evolves._
