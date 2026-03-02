# Current Focus — Celebration Boards (Option 1: Staff-controlled captions)

## Goal

Create a Celebration Boards section under /gallery where:

- Each folder under public/images/celebration-boards becomes a “board”
- /gallery/celebration-boards shows tiles (one per board)
- /gallery/celebration-boards/[slug] shows images for that board
- Optional meta.json supports header/description/captions

## Current status

- Folder: public/images/celebration-boards/2025-11-12-czech-biscuits/ (images added, lowercase)
- Manifest generator script updated to include:
  - header, description
  - images as objects: { src, caption }
- Manifest outputs correctly to src/data/celebrationBoardsManifest.ts

## Next steps

1. Create pages:
   - src/app/gallery/celebration-boards/page.tsx
   - src/app/gallery/celebration-boards/[slug]/page.tsx
2. Update these pages to match manifest image shape:
   - board.images[0]?.src for cover
   - board.images.map(img => img.src / img.caption)
3. Add optional meta.json to one board and confirm captions render
4. Test navigation within /gallery so auth cookie isn’t cleared when moving between /gallery routes
