import type { EncounterEvidence } from "@/components/shared/history/chapter-3-encounters/HistoryEncounterScene";
import type { PerspectiveMatch } from "@/components/shared/history/chapter-3-encounters/HistoryPerspectiveChallenge";

export const oceaniaEncounter = {
  sceneImage: "/images/continents/oceania/history/encounter-scene.png",
  sceneAlt:
    "Illustrated Pacific shoreline with a canoe, European sailing ship and a person recording observations",

  title: "When Worlds Met: The Encounter Room",
  introduction:
    "Explore three kinds of evidence to understand how encounters between Pacific communities and European voyagers changed history.",

  perspectiveMatches: [
    {
      id: "pacific-communities",
      icon: "🛶",
      title: "Pacific Communities",
      question:
        "Who had established communities and ocean knowledge before European ships arrived?",
      explanation:
        "Pacific communities had rich cultures, leadership systems and sophisticated navigation knowledge long before European expeditions arrived.",
    },
    {
      id: "european-voyagers",
      icon: "⛵",
      title: "European Voyagers",
      question:
        "Whose expeditions included exploration, trade and imperial ambitions?",
      explanation:
        "European voyages had different motivations, including exploration, trade, scientific research and imperial expansion.",
    },
    {
      id: "historical-records",
      icon: "📜",
      title: "Historical Records",
      question: "What helps historians compare different accounts of the past?",
      explanation:
        "Historians examine journals, maps, archaeology, oral histories and Indigenous knowledge to understand different perspectives.",
    },
  ] satisfies PerspectiveMatch[],

  evidence: [
    {
      id: "pacific-communities",
      position: { x: 35, y: 47 },
      icon: "🛶",
      title: "Pacific Communities",
      description:
        "Pacific peoples had established communities, languages, leadership systems and sophisticated ocean knowledge long before European ships arrived. Encounters differed across islands and communities, and local people made their own decisions about how to respond.",
    },
    {
      id: "european-voyagers",
      position: { x: 69, y: 28 },
      icon: "⛵",
      title: "European Voyagers",
      description:
        "European expeditions travelled through the Pacific for exploration, trade, scientific research and imperial ambitions. Their journals and maps provide historical evidence, but they reflect the perspectives and assumptions of the people who created them.",
    },
    {
      id: "historical-records",
      position: { x: 77, y: 76 },
      icon: "📜",
      title: "Historical Records",
      description:
        "Historians compare ship journals, maps, archaeological discoveries, oral histories and Indigenous knowledge. Different sources can reveal different experiences, and some perspectives were recorded less often than others.",
    },
  ] satisfies EncounterEvidence[],
};
