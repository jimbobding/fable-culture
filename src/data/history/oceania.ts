import type { HistoryExpedition } from "./types";

export const oceaniaHistory: HistoryExpedition = {
  region: "oceania",
  title: "The Pacific Time Expedition",
  subtitle: "A journey through Oceania's history",
  introduction:
    "Explore the journeys, communities, encounters and changes that have shaped Oceania. Follow historical evidence and discover the stories behind the Pacific.",

  heroImage: "",

  theme: {
    primary: "#123F49",
    secondary: "#1B6470",
    accent: "#E6BF7D",
    background: "#F4EBDD",
    surface: "#E5D9C4",
    text: "#203E40",
  },

  sources: [
    {
      id: "auckland-settlement",
      title: "Human Settlement of the Pacific",
      organisation: "University of Auckland",
      url: "https://www.lenscience.auckland.ac.nz/en/about/teaching-and-learning-resources/senior-biology-learning-resources/rethinking-polynesian-origins/human-settlement-of-the-pacific.html",
      notes: "Background on Pacific settlement, migration and Lapita archaeology.",
    },
    {
      id: "hawaii-navigation",
      title: "Wayfinding and Navigation",
      organisation: "University of Hawaiʻi at Mānoa",
      url: "https://manoa.hawaii.edu/exploringourfluidearth/physical/navigation-and-transportation/wayfinding-and-navigation",
      notes: "Educational material on traditional Pacific navigation.",
    },
    {
      id: "hokulea-wayfinding",
      title: "Polynesian Wayfinding",
      organisation: "Polynesian Voyaging Society",
      url: "https://worldwidevoyage.hokulea.com/education-at-sea/polynesian-navigation/polynesian-non-instrument-wayfinding/",
      notes: "Navigation knowledge shared through contemporary Pacific voyaging.",
    },
  ],

  chapters: [
    {
      id: "great-voyage",
      title: "The Great Voyage",
      subtitle: "Navigating the world's largest ocean",
      period: "Ancient Pacific settlement and navigation",
      introduction:
        "Long before modern navigation equipment, Pacific voyagers crossed enormous distances using their knowledge of the ocean and sky.",
      heroImage: "",
      facts: [
        {
          id: "navigation-knowledge",
          text: "Traditional Pacific navigators used observations of stars, ocean swells, winds and other natural signs to guide voyages.",
          sourceIds: ["hawaii-navigation", "hokulea-wayfinding"],
        },
        {
          id: "lapita-settlement",
          text: "Archaeological evidence links Lapita communities with early settlement across parts of Remote Oceania.",
          sourceIds: ["auckland-settlement"],
          context:
            "Distinctive Lapita pottery is an important source of archaeological evidence.",
        },
        {
          id: "knowledge-revival",
          text: "Traditional Pacific wayfinding continues to be taught and practised through modern voyaging projects.",
          sourceIds: ["hawaii-navigation", "hokulea-wayfinding"],
        },
      ],
      challenges: [
        {
          id: "navigation-clues",
          type: "multiple-choice",
          question:
            "Which clues could a skilled traditional Pacific navigator use?",
          instructions: "Choose the best answer.",
          options: [
            { id: "stars", text: "The stars" },
            { id: "swells", text: "Ocean swells" },
            { id: "birds", text: "Natural signs, including birds" },
            { id: "all", text: "All of these clues together" },
          ],
          correctOptionIds: ["all"],
          explanation:
            "Navigators combined different observations to help determine direction and recognise signs of nearby land.",
          sourceIds: ["hawaii-navigation", "hokulea-wayfinding"],
        },
      ],
    },
    {
      id: "pacific-worlds",
      title: "Worlds Across the Ocean",
      subtitle: "Communities, cultures and kingdoms",
      period: "Early Pacific societies",
      introduction: "",
      heroImage: "",
      facts: [],
      challenges: [],
    },
    {
      id: "worlds-met",
      title: "When Worlds Met",
      subtitle: "Encounters and different perspectives",
      period: "European encounters",
      introduction: "",
      heroImage: "",
      facts: [],
      challenges: [],
    },
    {
      id: "resistance-change",
      title: "Resistance and Change",
      subtitle: "Colonisation, resistance and independence",
      period: "Colonial era and independence movements",
      introduction:
        "Across Oceania, communities responded to colonisation in different ways. Explore historical evidence from Fiji, New Caledonia and Samoa to discover how Pacific peoples defended their land, cultures and rights.",
      heroImage: "",
      facts: [],
      challenges: [],
    },
    {
      id: "living-history",
      title: "Living History",
      subtitle: "Heritage, identity and cultural revival",
      period: "Modern Oceania",
      introduction:
        "Oceania's history is still alive today! Discover how Pacific communities preserve and share their knowledge through traditional voyaging, art, storytelling and cultural celebrations.",
      heroImage: "",
      facts: [],
      challenges: [],
    },
  ],
};
