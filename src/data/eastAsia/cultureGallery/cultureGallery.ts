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
    =========================================================
    CREATIVE CULTURE
    =========================================================

    Permanent regional creative-culture features.

    These can stay on the Culture Gallery throughout
    the East Asia term.

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
    =========================================================
    ART ROOM
    =========================================================

    Current projects happening in the Art Room.

    Add, remove or change these projects as the term
    progresses.

    You can have one project, two projects, three projects
    or more.

    If this array is empty, the Art Room section
    will not appear on the Culture Gallery page.
  */

  artRoom: [
    {
      id: "design-chinese-vase",
      title: "Design Your Own Chinese Vase",
      country: "China",

      description:
        "Create your own vase design inspired by Chinese blue-and-white porcelain.",

      task: "Choose patterns, animals and flowers for your vase. Then personalise your design by adding your name using the character guide.",

      materials: [
        "Vase template",
        "Pattern and picture ideas",
        "Character guide",
        "Pencil",
        "Blue pens or pencils",
      ],
    },
  ],
};
