import type {
  CultureGalleryConfig,
  CultureGalleryTheme,
} from "@/components/shared/culture-gallery/types";

export const eastAsiaCultureGalleryTheme: CultureGalleryTheme = {
  background: "#F7F3EA",
  surface: "#FFFDF8",

  text: "#20201E",
  mutedText: "#66645F",

  palette: ["#D84A42", "#E6B94A", "#397C83", "#745DA8", "#D87845", "#59845F"],
};

export const eastAsiaCultureGallery: CultureGalleryConfig = {
  intro:
    "Explore art, craft, design and creative traditions from across East Asia, and discover what our own artists have been creating.",

  /*
    Permanent regional creative-culture features.

    Example:

    creativeCulture: [
      {
        id: "example",
        title: "Ink Painting",
        country: "China",
        image: "/images/culture-gallery/east-asia/china/example.webp",
        description:
          "A short introduction to the art form.",
        culturalNote:
          "Extra cultural information can go here.",
      },
    ],
  */

  creativeCulture: [],

  /*
    Current Art Room projects.

    This section is temporary and changes as activities
    in the Art Room change.

    If this array is empty, the Art Room section
    will not appear on the page at all.

    Example:

    artRoom: [
      {
        id: "example-project",
        title: "Ink Painting Experiment",
        country: "China",
        description:
          "We are experimenting with brush pressure, line and tone.",
        task:
          "Create a landscape using only black ink.",
        materials: [
          "Paper",
          "Black ink",
          "Brushes",
        ],
      },
    ],
  */

  artRoom: [],
};
