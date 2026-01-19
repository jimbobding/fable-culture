export type UKCountryKey =
  | "england"
  | "scotland"
  | "wales"
  | "northern-ireland";

const UK_FLAG_BASE_PATH = "/images/continents/uk/flags";
const UK_GALLERY_BASE_PATH = "/images/continents/uk";

export const ukCountries: Record<
  UKCountryKey,
  {
    title: string;
    intro: string;
    heroImage: string;
    quickFacts: string[];
    theme: {
      primary: string;
      secondary: string;
      accent: string;
    };
    gallery: {
      src: string;
      label: string;
    }[];
  }
> = {
  england: {
    title: "England",
    intro: "Home to London and rich in history, culture, and traditions.",
    heroImage: `${UK_FLAG_BASE_PATH}/england-flag.webp`,
    quickFacts: [
      "Capital city: London",
      "Largest country in the UK",
      "Royal residences located here",
    ],
    theme: {
      primary: "#CE1124",
      secondary: "#FFFFFF",
      accent: "#012169",
    },
    gallery: [
      { src: `${UK_GALLERY_BASE_PATH}/big-ben.jpg`, label: "Big Ben" },
      { src: `${UK_GALLERY_BASE_PATH}/stone-henge.avif`, label: "Stonehenge" },
      { src: `${UK_GALLERY_BASE_PATH}/fish-chips.jpg`, label: "Fish & Chips" },
      {
        src: `${UK_GALLERY_BASE_PATH}/old-trafford.jpeg`,
        label: "Old Trafford",
      },
    ],
  },

  scotland: {
    title: "Scotland",
    intro: "Known for mountains, castles, and a strong cultural identity.",
    heroImage: `${UK_FLAG_BASE_PATH}/scotland-flag.jpg`,
    quickFacts: [
      "Capital city: Edinburgh",
      "Famous for lochs and Highlands",
      "Distinct legal system",
    ],
    theme: {
      primary: "#0065BD",
      secondary: "#FFFFFF",
      accent: "#00205B",
    },
    gallery: [
      { src: `${UK_GALLERY_BASE_PATH}/bagpipes.jpg`, label: "Bagpipes" },
      {
        src: `${UK_GALLERY_BASE_PATH}/edinburgh-castle.jpg`,
        label: "Edinburgh Castle",
      },
      { src: `${UK_GALLERY_BASE_PATH}/loch-ness.jpg`, label: "Loch Ness" },
      { src: `${UK_GALLERY_BASE_PATH}/irn-bru.jpg`, label: "Irn-Bru" },
    ],
  },

  wales: {
    title: "Wales",
    intro: "Famous for its language, music, and community spirit.",
    heroImage: `${UK_FLAG_BASE_PATH}/wales-flag.png`,
    quickFacts: [
      "Capital city: Cardiff",
      "Welsh language widely spoken",
      "Strong musical traditions",
    ],
    theme: {
      primary: "#D30731",
      secondary: "#FFFFFF",
      accent: "#006A44",
    },
    gallery: [
      { src: `${UK_GALLERY_BASE_PATH}/welsh-rugby.jpg`, label: "Welsh Rugby" },
      {
        src: `${UK_GALLERY_BASE_PATH}/castle-cardiff.webp`,
        label: "Cardiff Castle",
      },
      { src: `${UK_GALLERY_BASE_PATH}/snowdonia.webp`, label: "Snowdonia" },
      { src: `${UK_GALLERY_BASE_PATH}/welsh-cakes.jpeg`, label: "Welsh Cakes" },
    ],
  },

  "northern-ireland": {
    title: "Northern Ireland",
    intro: "Part of the island of Ireland with deep history and resilience.",
    heroImage: `${UK_FLAG_BASE_PATH}/NI-flag.png`,
    quickFacts: [
      "Capital city: Belfast",
      "Giant’s Causeway UNESCO site",
      "Unique cultural mix",
    ],
    theme: {
      primary: "#009A44",
      secondary: "#FFFFFF",
      accent: "#FF883E",
    },
    gallery: [
      {
        src: `${UK_GALLERY_BASE_PATH}/george-best-mural-belfast.jpg`,
        label: "George Best Mural",
      },
      {
        src: `${UK_GALLERY_BASE_PATH}/giants-cause.jpg`,
        label: "Giant's Causeway",
      },
      {
        src: `${UK_GALLERY_BASE_PATH}/mourne-mountains.jpg`,
        label: "Mourne Mountains",
      },
      { src: `${UK_GALLERY_BASE_PATH}/soda-bread.jpg`, label: "Soda Bread" },
    ],
  },
};
