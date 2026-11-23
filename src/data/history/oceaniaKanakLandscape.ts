import type { LandscapeClue } from "@/components/shared/history/chapter-4-resistance/HistoryLandscapeInvestigation";
import { oceaniaResistanceCases } from "./oceaniaResistance";

const kanakCase = oceaniaResistanceCases.find(
  (item) => item.id === "kanak-resistance"
);

if (!kanakCase) {
  throw new Error("New Caledonia resistance case not found.");
}

const evidenceById = (id: string) => {
  const evidence = kanakCase.evidence.find((item) => item.id === id);

  if (!evidence) {
    throw new Error(`Missing New Caledonia evidence: ${id}`);
  }

  return evidence;
};

const land = evidenceById("land");
const cattle = evidenceById("cattle");
const accounts = evidenceById("accounts");

export const oceaniaKanakLandscape: {
  title: string;
  introduction: string;
  clues: LandscapeClue[];
} = {
  title: "The Changing Land",

  introduction:
    "France annexed New Caledonia in 1853. Investigate how colonial expansion changed access to land, damaged food production and contributed to the tensions behind the 1878 uprising. This landscape is a simplified educational illustration, not a reconstruction of one specific location.",

  clues: [
    {
      id: "land",
      label: "The Disappearing Land",

      before:
        "Kanak communities maintained relationships with ancestral lands, gardens and places important to community life.",

      after:
        "Colonial settlement, land seizures and reserves restricted access to areas used by Kanak communities.",

      discovery: land.content,
      question: land.question,
      sourceUrl: land.sourceUrl,
      sourceLabel: land.sourceLabel,
    },
    {
      id: "cattle",
      label: "The Damaged Gardens",

      before:
        "Yam and taro gardens helped sustain Kanak communities and supported everyday life.",

      after:
        "Settlers' cattle sometimes entered gardens and damaged crops, increasing tensions over land and food supplies.",

      discovery: cattle.content,
      question: cattle.question,
      sourceUrl: cattle.sourceUrl,
      sourceLabel: cattle.sourceLabel,
    },
    {
      id: "accounts",
      label: "Whose Account?",

      before:
        "Kanak communities had their own experiences, grievances and understandings of changes to their land.",

      after:
        "Colonial reports often described events primarily from the perspectives of French officials and settlers.",

      discovery: accounts.content,
      question: accounts.question,
      sourceUrl: accounts.sourceUrl,
      sourceLabel: accounts.sourceLabel,
    },
  ],
};
