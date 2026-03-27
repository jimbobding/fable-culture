# Current Focus — Student Upload System, Homepage Entry Point, and South Asia Prep

## Goal

Stabilise and polish the Student Upload System, improve how students access it, and prepare the project for the next region build: South Asia.

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

### Production issue fixed

- The old “delete removes image but not card” issue on live was traced to stale page data on the admin submissions page
- The fix was to make the admin submissions page dynamic instead of allowing stale cached output on production
- Fresh live submissions now appear and delete correctly

### Homepage improvements

- Upload entry point has been moved to a better place on the homepage
- Homepage also includes April event cards and a featured month section

## Current priority

1. Final polish on Student Upload pages and flow
2. Review and update project context before starting a fresh chat
3. Begin South Asia region build using the same overall structure as Middle East
4. Review folder structure so region-specific components are organised more cleanly

## Folder structure direction

Current concern:

- The main `components` folder is becoming too large and too mixed

Planned direction:

- Keep shared reusable components in a shared location
- Move region-specific components into region-based folders
- Use South Asia as the first clean example of the improved structure

## Next steps

1. Confirm Student Upload pages are styled and working as expected
2. Update project context summary
3. Start a new chat focused on:
   - South Asia region scaffold
   - folder restructure plan
   - shared vs region-specific component organisation
