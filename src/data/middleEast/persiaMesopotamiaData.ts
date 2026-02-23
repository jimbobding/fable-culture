// data/middleEast/persiaMesopotamiaData.ts
export const persiaMesopotamiaData = {
  region: "Persia-Mesopotamia",

  regionFacts: [
    "Mesopotamia is often called the Cradle of Civilization.",
    "The earliest known writing system, cuneiform, developed here.",
    "Ancient Persia was ruled by powerful empires such as the Achaemenids.",
    "The Tigris and Euphrates rivers supported early farming societies.",
    "Cities like Babylon, Ur, and Persepolis were major centres of learning and power.",
  ],

  countries: [
    {
      name: "Iran",
      capital: "Tehran",
      languages: ["Persian (Farsi)"],
      population: "87 million",
      note: "Heart of ancient Persia.",
      extra: "Zoroastrianism, Persian cuisine",
      flag: "🇮🇷",
    },
    {
      name: "Iraq",
      capital: "Baghdad",
      languages: ["Arabic", "Kurdish"],
      population: "44 million",
      note: "Part of ancient Mesopotamia; historically overlaps Levant region.",
      extra: "Mesopotamian ruins, diverse ethnic groups",
      flag: "🇮🇶",
      link: "/middle-east/levant", // cross-reference
    },
    {
      name: "Kuwait",
      capital: "Kuwait City",
      languages: ["Arabic"],
      population: "4.3 million",
      note: "Located at the northern tip of the Arabian Gulf.",
      extra: "Oil wealth, desert traditions",
      flag: "🇰🇼",
      link: "/middle-east/arabian", // cross-reference
    },
    {
      name: "Syria (northern)",
      capital: "Damascus",
      languages: ["Arabic"],
      population: "18 million",
      note: "Ancient trade hub; northern areas overlap Levant.",
      extra: "Ancient cities and ruins",
      flag: "🇸🇾",
      link: "/middle-east/levant", // cross-reference
    },
  ],
};
