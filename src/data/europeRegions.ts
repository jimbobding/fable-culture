// src/data/europeRegions.ts

export type Country = {
  name: string;
  emojiFlag: string;
};

export type ImageWithCaption = {
  src: string;
  caption: string;
};

export type Region = {
  title: string;
  fact: string[];
  blurb: string;
  regionImage: string; // high-res preview for region selection
  images: ImageWithCaption[];
  color: string;
  countries: Country[];
  music?: string;
  videoUrl?: string;
};

// ✅ base path for all region card images
const europeCardBase = "/images/continents/europe/region-cards";

export const europeImagePaths = {
  northern: `${europeCardBase}/NE-region.jpeg`,
  southern: `${europeCardBase}/SE-region.jpeg`,
  eastern: `${europeCardBase}/EU-region.jpeg`,
  western: `${europeCardBase}/WE-region.jpeg`,
  central: `${europeCardBase}/CE-region.jpg`,
} as const;

export type RegionKey =
  | "northern"
  | "southern"
  | "eastern"
  | "western"
  | "central";

export const europeRegions: Record<RegionKey, Region> = {
  northern: {
    title: "Northern Europe",
    fact: [],
    blurb: "",
    regionImage: europeImagePaths.northern,
    images: [],
    color: "#EAE2B7",
    countries: [],
    music: "",
    videoUrl: "",
  },
  southern: {
    title: "Southern Europe",
    fact: [],
    blurb: "",
    regionImage: europeImagePaths.southern,
    images: [],
    color: "#FFD6A5",
    countries: [],
    music: "",
    videoUrl: "",
  },
  eastern: {
    title: "Eastern Europe",
    fact: [],
    blurb: "",
    regionImage: europeImagePaths.eastern,
    images: [],
    color: "#CDEAC0",
    countries: [],
    music: "",
    videoUrl: "",
  },
  western: {
    title: "Western Europe",
    fact: [],
    blurb: "",
    regionImage: europeImagePaths.western,
    images: [],
    color: "#A0CED9",
    countries: [],
    music: "",
    videoUrl: "",
  },
  central: {
    title: "Central Europe",
    fact: [],
    blurb: "",
    regionImage: europeImagePaths.central,
    images: [],
    color: "#FFB6B9",
    countries: [],
    music: "",
    videoUrl: "",
  },
};
