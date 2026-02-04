// Single country info
export type CountryFact = {
  name: string;
  capital?: string;
  languages?: string[];
  note?: string;
};

// Region contains multiple countries
export type RegionData = {
  countries: CountryFact[];
};

// Actual Levant data
export const levantData = {
  countries: [
    {
      name: "Jordan",
      flag: "🇯🇴",
      capital: "Amman",
      population: 10000000,
      languages: ["Arabic"],
      note: "Historically connected to trade routes across the Levant.",
    },
    {
      name: "Lebanon",
      flag: "🇱🇧",
      capital: "Beirut",
      population: 6000000,
      languages: ["Arabic", "French"],
    },
    {
      name: "Syria",
      flag: "🇸🇾",
      capital: "Damascus",
      population: 17500000,
      languages: ["Arabic"],
    },
  ],
};
