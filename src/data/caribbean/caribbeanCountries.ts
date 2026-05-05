export type CaribbeanCountry = {
  name: string;
  slug: string;
  flag: string;
  population: string;
  capital: string;
  languages: string[];
  currency: string;
  intro: string;
  theme: {
    primary: string;
    secondary: string;
  };
  facts: string[];
  places: any[];
};

export const caribbeanCountries: CaribbeanCountry[] = [
  {
    name: "Jamaica",
    slug: "jamaica",
    flag: "🇯🇲",
    population: "2.8 million",
    capital: "Kingston",
    languages: ["English", "Jamaican Patois"],
    currency: "Jamaican Dollar",
    intro: "Jamaica is known for its music, culture, mountains, and beaches.",
    theme: {
      primary: "#16a34a",
      secondary: "#facc15",
    },
    facts: [],
    places: [],
  },
  {
    name: "Barbados",
    slug: "barbados",
    flag: "🇧🇧",
    population: "281,000",
    capital: "Bridgetown",
    languages: ["English"],
    currency: "Barbadian Dollar",
    intro: "Barbados is an island known for beaches, culture, and history.",
    theme: {
      primary: "#2563eb",
      secondary: "#facc15",
    },
    facts: [],
    places: [],
  },
  {
    name: "Bahamas",
    slug: "bahamas",
    flag: "🇧🇸",
    population: "400,000",
    capital: "Nassau",
    languages: ["English"],
    currency: "Bahamian Dollar",
    intro: "The Bahamas is made up of hundreds of islands with clear waters.",
    theme: {
      primary: "#0ea5e9",
      secondary: "#facc15",
    },
    facts: [],
    places: [],
  },
  {
    name: "Cuba",
    slug: "cuba",
    flag: "🇨🇺",
    population: "11 million",
    capital: "Havana",
    languages: ["Spanish"],
    currency: "Cuban Peso",
    intro:
      "Cuba is the largest Caribbean island with rich history and culture.",
    theme: {
      primary: "#dc2626",
      secondary: "#2563eb",
    },
    facts: [],
    places: [],
  },
  {
    name: "Haiti",
    slug: "haiti",
    flag: "🇭🇹",
    population: "11.5 million",
    capital: "Port-au-Prince",
    languages: ["Haitian Creole", "French"],
    currency: "Gourde",
    intro: "Haiti has a powerful history and was the first Black republic.",
    theme: {
      primary: "#1d4ed8",
      secondary: "#dc2626",
    },
    facts: [],
    places: [],
  },
  {
    name: "Dominican Republic",
    slug: "dominican-republic",
    flag: "🇩🇴",
    population: "11 million",
    capital: "Santo Domingo",
    languages: ["Spanish"],
    currency: "Dominican Peso",
    intro: "The Dominican Republic shares an island with Haiti.",
    theme: {
      primary: "#2563eb",
      secondary: "#dc2626",
    },
    facts: [],
    places: [],
  },
  {
    name: "Trinidad and Tobago",
    slug: "trinidad-and-tobago",
    flag: "🇹🇹",
    population: "1.4 million",
    capital: "Port of Spain",
    languages: ["English"],
    currency: "Trinidad and Tobago Dollar",
    intro: "Known for Carnival, music, and energy industries.",
    theme: {
      primary: "#dc2626",
      secondary: "#000000",
    },
    facts: [],
    places: [],
  },
  {
    name: "Saint Lucia",
    slug: "saint-lucia",
    flag: "🇱🇨",
    population: "180,000",
    capital: "Castries",
    languages: ["English"],
    currency: "East Caribbean Dollar",
    intro: "Famous for its twin volcanic peaks, the Pitons.",
    theme: {
      primary: "#0284c7",
      secondary: "#facc15",
    },
    facts: [],
    places: [],
  },
  {
    name: "Grenada",
    slug: "grenada",
    flag: "🇬🇩",
    population: "125,000",
    capital: "St. George’s",
    languages: ["English"],
    currency: "East Caribbean Dollar",
    intro: "Known as the Spice Island for its nutmeg production.",
    theme: {
      primary: "#16a34a",
      secondary: "#dc2626",
    },
    facts: [],
    places: [],
  },
  {
    name: "Dominica",
    slug: "dominica",
    flag: "🇩🇲",
    population: "72,000",
    capital: "Roseau",
    languages: ["English"],
    currency: "East Caribbean Dollar",
    intro: "A mountainous island known for nature and rainforests.",
    theme: {
      primary: "#15803d",
      secondary: "#facc15",
    },
    facts: [],
    places: [],
  },
  {
    name: "Saint Kitts and Nevis",
    slug: "saint-kitts-and-nevis",
    flag: "🇰🇳",
    population: "47,000",
    capital: "Basseterre",
    languages: ["English"],
    currency: "East Caribbean Dollar",
    intro: "A small twin-island nation with rich history.",
    theme: {
      primary: "#15803d",
      secondary: "#dc2626",
    },
    facts: [],
    places: [],
  },
  {
    name: "Saint Vincent and the Grenadines",
    slug: "saint-vincent-and-the-grenadines",
    flag: "🇻🇨",
    population: "110,000",
    capital: "Kingstown",
    languages: ["English"],
    currency: "East Caribbean Dollar",
    intro: "A chain of islands known for beaches and sailing.",
    theme: {
      primary: "#16a34a",
      secondary: "#2563eb",
    },
    facts: [],
    places: [],
  },
  {
    name: "Antigua and Barbuda",
    slug: "antigua-and-barbuda",
    flag: "🇦🇬",
    population: "93,000",
    capital: "St. John’s",
    languages: ["English"],
    currency: "East Caribbean Dollar",
    intro: "Known for its many beaches and coastal beauty.",
    theme: {
      primary: "#dc2626",
      secondary: "#facc15",
    },
    facts: [],
    places: [],
  },
];
