# Fable Culture — Project Context (Master)

## What it is

Fable Culture is a school-based educational website designed to showcase world cultures and related learning in a visual, engaging way for students and staff.

It supports classroom learning and SMSC by presenting:

- Region/continent pages (hero + intro + timeline + gallery + facts)
- A global gallery to showcase work (photos/videos) from terms and events
- Celebration board galleries (monthly/dated displays)

## Core goals

- Easy for staff/students to navigate
- Easy to add new content each term
- Reliable on Vercel (Linux/case-sensitive file system)
- Reusable components so new regions and galleries are quick to build
- Safe access controls for gallery content

## Tech Stack

- Next.js (App Router) + Turbopack (dev)
- React + TypeScript
- Tailwind CSS
- Firebase (Firestore for facts; Storage used/planned for uploads)
- Vercel (hosting/deployment)
- Git/GitHub (version control)
- Namecheap (domain registrar)

Domain: https://www.fable-culture.co.uk

## Git workflow

- main: production/live
- dev: staging/testing
- feature/\*: work branches
  Workflow: feature → dev → main → Vercel

## Project structure (simplified)

src/
app/
gallery/ # global gallery hub
gallery/celebration-boards/ # celebration boards hub (tiles)
gallery/celebration-boards/[slug]/ # individual board page
africa/
europe/
middle-east/
components/
Gallery.tsx
Timeline.tsx
FactsSection.tsx
RegionContent.tsx
data/
...gallery data...
celebrationBoardsManifest.ts # auto-generated (do not hand edit)
public/
images/
continents/
celebration-boards/ # one folder per board

scripts/
generateCelebrationBoardsManifest.mjs

## Gallery system

- /gallery is password-protected (middleware + server actions + cookies)
- Gallery page currently renders a set of gallery components (e.g. Drumming, Black History, Jollof)

## Celebration boards system (build-time manifest)

Goal: staff-friendly workflow:

- Add a new folder under `public/images/celebration-boards/<YYYY-MM-DD-topic>/`
- Drop images into folder (lowercase extensions)
- Optional: add meta.json for header/description/captions
- Commit/push → Vercel rebuild → board appears automatically

### Manifest pattern

Because Vercel serverless can’t reliably read folders at runtime, we generate a build-time “manifest”:

- Script scans folders + images
- Writes `src/data/celebrationBoardsManifest.ts`
- Next.js pages import this data (fast/static)

package.json includes:

- "prebuild": "node scripts/generateCelebrationBoardsManifest.mjs"

### Naming rules (important)

- Use lowercase filenames and extensions (.jpg not .JPG)
- Use ISO folder dates: YYYY-MM-DD-topic
- Avoid spaces/special characters in filenames/folders

## Known lessons / issues solved

- Vercel/Linux is case-sensitive (JPG vs jpg breaks)
- Password protection moved server-side for reliability
- Suspense wrapper used to avoid Next build issues
- Domain/DNS configured and live

## Next planned feature

User-submitted images:

- Likely Firebase Storage upload + Firestore metadata
- “pending approval” moderation before images appear publicly
- School-safe access model (staff-only or moderated student submissions)

## Current Feature: Student Upload System (Gallery Submissions)

### Overview

A Firebase-backed system allowing students/staff to upload images of work, which are then moderated before appearing publicly.

### Routes

- `/upload` → StudentUploadForm (image upload page)
- `/admin/submissions` → Admin moderation page (approve/delete)
- `/gallery/student-uploads` → Public gallery of approved uploads

### Flow

1. User uploads image via form
2. Image stored in Firebase Storage under:
   `student-uploads/`
3. Firestore document created in:
   `gallerySubmissions`
4. Document starts with:
   `status: "pending"`
5. Admin reviews submissions:
   - Approve → sets `status: "approved"`
   - Delete → removes Firestore doc + Storage image
6. Public gallery displays only:
   `status === "approved"`

### Data structure (Firestore)

Collection: `gallerySubmissions`

Fields:

- title (string)
- region (string)
- description (string)
- imageUrl (string)
- storagePath (string)
- status ("pending" | "approved")
- submittedAt (timestamp)

### Components

- `StudentUploadForm.tsx` → handles uploads
- `AdminSubmissionCard.tsx` → approve/delete UI
- `StudentUploadGalleryCard.tsx` → public gallery card (with rotate)

### Notes / Lessons

- Storage delete requires separate rule (`allow delete`)
- Some older submissions may not have `storagePath`
- Guard required before calling `deleteObject`
- UI uses reload after actions (future improvement: state updates instead)

### Next Improvements

- Protect `/admin/submissions` with password/middleware
- Add navigation links to:
  - `/gallery/student-uploads`
  - `/admin/submissions`
- Improve styling consistency (logo, colours, layout)
- Possibly reuse `RotatableImageCard.tsx` for consistency
- Add upload success feedback UX (instead of alert)
