import type { HistoryDetectiveConfig, HistoryInvestigation } from "./types";

const investigations: HistoryInvestigation[] = [
  {
    id: "lapita",
    icon: "🏺",
    location: "Vanuatu",
    title: "The Mystery of the Pottery",
    evidence:
      "Archaeologists have discovered decorated Lapita pottery at sites across parts of the Pacific, including Teouma in Vanuatu.",
    question: "What can this pottery help archaeologists investigate?",
    options: [
      "The exact names of the people who made it",
      "Early settlement and connections between communities",
      "The precise weather on the day it was made",
    ],
    correct: 1,
    hint: "Think about what similar objects found in different places might tell us.",
    explanation:
      "Pottery styles and archaeological contexts help researchers investigate early Pacific settlement, craftsmanship and connections between communities.",
  },
  {
    id: "fale",
    image:
      "/images/continents/oceania/countries/samoa/fact-file/traditional-samoan-fale.jpg",
    imageAlt: "Traditional Samoan fale building",
    icon: "🛖",
    location: "Samoa",
    title: "A Building Full of Stories",
    evidence:
      "Traditional Samoan fale are built using specialised knowledge. Different types of fale serve different purposes, including community gatherings.",
    question: "What can studying a fale help us understand?",
    options: [
      "How architecture reflects community life",
      "That every Pacific island used identical buildings",
      "That buildings reveal nothing about culture",
    ],
    correct: 0,
    hint: "Consider how people use different spaces in their communities.",
    explanation:
      "The design and uses of Samoan fale provide evidence of architecture, social relationships and cultural knowledge.",
  },
  {
    id: "tonga",
    image:
      "/images/continents/oceania/countries/tonga/fact-file/haamonga-a-maui.jpg",
    imageAlt: "Haʻamonga ʻa Maui stone monument in Tonga",
    icon: "🗿",
    location: "Tonga",
    title: "The Mystery of the Stone Monument",
    evidence:
      "Haʻamonga ʻa Maui is an ancient stone monument associated with the historic chiefly centre at Heketā. Researchers have proposed different interpretations of its purpose.",
    question: "What should a careful historian do when explanations differ?",
    options: [
      "Choose whichever story sounds most exciting",
      "Claim that nobody can learn anything about the monument",
      "Compare archaeological evidence, traditions and interpretations",
    ],
    correct: 2,
    hint: "Historians investigate evidence rather than simply guessing.",
    explanation:
      "Historians compare different forms of evidence and acknowledge uncertainty when the original purpose of a monument is not established.",
  },
];

export const oceaniaDetective: HistoryDetectiveConfig = {
  title: "The Pacific History Detective",
  introduction: "Explore evidence from three different Pacific communities.",
  completionMessage:
    "You've investigated archaeological objects, architecture and a historic monument. Each provides different clues about Pacific history.",
  completionButton: "Sail to the Next Island →",
  investigations,
};
