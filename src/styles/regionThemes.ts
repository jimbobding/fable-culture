// styles/regionThemes.ts

// src/styles/regionThemes.ts

export type RegionTheme = {
  name: string;

  // hero
  heroOverlay: string;
  heroTitle: string;
  heroBorder: string;

  // intro / speel
  introBg: string;
  introTitle: string;
  introText: string;
  introGradient: string;

  // timeline
  timeline: {
    sectionBg: string;
    line: string;
    year: string;
    text: string;
    cardBg: string;
  };

  // cards
  cardBg: string;
  cardBorder: string;

  // gallery
  galleryBorder: string;

  // facts
  factsBg: string;
};

export const levantTheme: RegionTheme = {
  name: "levant",

  heroOverlay:
    "bg-gradient-to-b from-amber-400/20 via-orange-400/20 to-red-400/10",
  heroTitle: "text-yellow-200",
  heroBorder: "border-yellow-400",

  introBg: "bg-gradient-to-r from-yellow-200 via-orange-300 to-red-200",
  introTitle: "text-red-900",
  introText: "text-red-900",
  introGradient: "bg-gradient-to-r from-yellow-200 via-orange-300 to-red-200",

  timeline: {
    sectionBg: "bg-orange-50",
    line: "bg-orange-500",
    year: "text-orange-600",
    text: "text-gray-700",
    cardBg: "bg-white",
  },

  cardBg: "bg-white",
  cardBorder: "border-yellow-400",

  galleryBorder: "border-yellow-400",

  factsBg: "bg-orange-50",
};

export const arabianTheme: RegionTheme = {
  name: "arabian",

  heroOverlay:
    "bg-gradient-to-br from-[#EDC9AF]/40 via-[#D47C2A]/30 to-[#C75B12]/40",
  heroTitle: "text-[#FFF5E1]",
  heroBorder: "border-[#1FB7A6]", // turquoise accent

  introBg: "bg-gradient-to-r from-[#F5E6D3] via-[#E8CFAF] to-[#D6A96C]", // different from levant
  introTitle: "text-[#7A3E0C]",
  introText: "text-[#5A2E08]",
  introGradient:
    "bg-gradient-to-r from-amber-900/40 via-orange-800/30 to-yellow-700/30",

  timeline: {
    sectionBg: "bg-[#F7EFE5]",
    line: "bg-[#1FB7A6]", // turquoise timeline
    year: "text-[#A5571A]",
    text: "text-gray-700",
    cardBg: "bg-white",
  },

  cardBg: "bg-white",
  cardBorder: "border-[#1FB7A6]",

  galleryBorder: "border-[#1FB7A6]",

  factsBg: "bg-[#F7EFE5]",
};
