import type {
  CultureGalleryConfig,
  CultureGalleryTheme,
} from "@/components/shared/culture-gallery/types";

export const southAmericaCultureGalleryTheme: CultureGalleryTheme = {
  background: "#F3D7A1",

  // bright gallery-paper surface
  surface: "#FFF4D6",

  // almost-black ink
  text: "#17251F",

  // earthy secondary copy
  mutedText: "#6D493A",

  palette: [
    "#E4472E", // chilli / mural red
    "#F2A900", // marigold yellow
    "#087F5B", // rainforest green
    "#126E82", // Amazon / Atlantic blue
    "#D83A78", // festival pink
    "#713C8C", // woven purple
    "#EF6C28", // burnt orange
    "#8CBF3F", // tropical leaf
  ],
};

export const southAmericaCultureGallery: CultureGalleryConfig = {
  intro:
    "Explore art, craft, design and creative traditions from across South America. Discover what inspires people across the continent, then add your own discoveries and creations to our growing gallery.",

  // Add curated South American art, craft and creative
  // traditions here as we explore the region.
  creativeCulture: [],

  // Art Room projects will appear automatically when
  // projects are added through the existing system.
  artRoom: [],
};
