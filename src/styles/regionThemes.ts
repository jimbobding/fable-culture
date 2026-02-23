export type RegionTheme = {
  name: string;

  // hero
  heroOverlay: string;
  heroTitle: string;
  heroBorder: string;

  // intro / spiel section
  introBg: string;
  introTitle: string;
  introText: string;
  introGradient: string;

  // cards
  cardBg: string;
  cardBorder: string;
  cardShadow?: string;

  // text + inputs
  text: string;
  inputBg: string;

  // optional extras
  factsBg?: string;
  galleryBorder?: string;

  // timeline styling
  timeline: {
    sectionBg: string;
    line: string;
    year: string;
    text: string;
    cardBg: string;
  };

  layout?: {
    container: string; // max width + horizontal padding
    sectionPadding: string; // vertical spacing
    sectionGap: string; // inner spacing between elements
    title: string; // default H2 style
    body: string; // default paragraph style
    cardRadius: string;
    cardPadding: string;
  };
};

//////////////////////////////////////////////////////////
// LEVANT
//////////////////////////////////////////////////////////

export const levantTheme: RegionTheme = {
  name: "levant",

  heroOverlay:
    "bg-gradient-to-b from-amber-400/20 via-orange-400/20 to-red-400/10",
  heroTitle: "text-yellow-200",
  heroBorder: "border-yellow-400",

  introBg: "bg-gradient-to-r from-yellow-200 via-orange-300 to-red-200",
  introTitle: "text-orange-900",
  introText: "text-gray-800",
  introGradient: "bg-gradient-to-r from-yellow-200 via-orange-300 to-red-200",

  cardBg: "bg-[#fffaf3]",
  cardBorder: "border-yellow-400",
  cardShadow: "shadow-lg shadow-orange-200/40",

  text: "text-gray-800",
  inputBg: "bg-white/80",

  factsBg: "bg-orange-50",
  galleryBorder: "border-yellow-400",

  timeline: {
    sectionBg: "bg-orange-50",
    line: "bg-yellow-400",
    year: "text-orange-900",
    text: "text-gray-800",
    cardBg: "bg-[#fffaf3]",
  },
  layout: {
    container: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
    sectionPadding: "py-12 sm:py-16",
    sectionGap: "space-y-6",
    title: "text-3xl sm:text-4xl font-bold tracking-tight",
    body: "text-base sm:text-lg leading-relaxed",
    cardRadius: "rounded-2xl",
    cardPadding: "p-6 sm:p-8",
  },
};

//////////////////////////////////////////////////////////
// ARABIAN
//////////////////////////////////////////////////////////

export const arabianTheme: RegionTheme = {
  name: "arabian",

  heroOverlay:
    "bg-gradient-to-br from-[#EDC9AF]/40 via-[#D47C2A]/30 to-[#C75B12]/40",
  heroTitle: "text-[#FFF5E1]",
  heroBorder: "border-[#1FB7A6]",

  introBg: "bg-gradient-to-r from-[#F5E6D3] via-[#E8CFAF] to-[#D6A96C]",
  introTitle: "text-[#5A3A1C]",
  introText: "text-gray-800",
  introGradient: "bg-gradient-to-r from-[#F5E6D3] via-[#E8CFAF] to-[#D6A96C]",

  cardBg: "bg-[#fffaf5]",
  cardBorder: "border-[#1FB7A6]",
  cardShadow: "shadow-lg shadow-[#1FB7A6]/20",

  text: "text-gray-800",
  inputBg: "bg-white/80",

  factsBg: "bg-[#F7EFE5]",
  galleryBorder: "border-[#1FB7A6]",

  timeline: {
    sectionBg: "bg-[#F7EFE5]",
    line: "bg-[#1FB7A6]",
    year: "text-[#5A3A1C]",
    text: "text-gray-800",
    cardBg: "bg-[#fffaf5]",
  },
  layout: {
    container: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
    sectionPadding: "py-12 sm:py-16",
    sectionGap: "space-y-6",
    title: "text-3xl sm:text-4xl font-bold tracking-tight",
    body: "text-base sm:text-lg leading-relaxed",
    cardRadius: "rounded-2xl",
    cardPadding: "p-6 sm:p-8",
  },
};

//////////////////////////////////////////////////////////
// PERSIA / MESOPOTAMIA
//////////////////////////////////////////////////////////
export const persiaMesopotamiaTheme: RegionTheme = {
  name: "persia-mesopotamia",

  heroOverlay:
    "bg-gradient-to-br from-[#D0E6E3]/40 via-[#8CCFC2]/30 to-[#55B8A1]/30",
  heroTitle: "text-[#F7F1E5]",
  heroBorder: "border-[#55B8A1]",

  introBg: "bg-gradient-to-r from-[#E0F0EE] via-[#B3DED3] to-[#7BC4B4]",
  introTitle: "text-[#2E5F56]",
  introText: "text-gray-800",
  introGradient: "bg-gradient-to-r from-[#E0F0EE] via-[#B3DED3] to-[#7BC4B4]",

  cardBg: "bg-[#f8fffd]",
  cardBorder: "border-[#55B8A1]",
  cardShadow: "shadow-lg shadow-[#55B8A1]/20",

  text: "text-gray-800",
  inputBg: "bg-white/80",

  factsBg: "bg-[#E0F0EE]",
  galleryBorder: "border-[#55B8A1]",

  timeline: {
    sectionBg: "bg-[#E0F0EE]",
    line: "bg-[#55B8A1]",
    year: "text-[#2E5F56]",
    text: "text-gray-800",
    cardBg: "bg-[#f8fffd]",
  },

  layout: {
    container: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
    sectionPadding: "py-12 sm:py-16",
    sectionGap: "space-y-6",
    title: "text-3xl sm:text-4xl font-bold tracking-tight",
    body: "text-base sm:text-lg leading-relaxed",
    cardRadius: "rounded-2xl",
    cardPadding: "p-6 sm:p-8",
  },
};
