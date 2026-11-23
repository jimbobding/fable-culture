import type {
  DocumentClue,
  DocumentChallenge,
} from "@/components/shared/history/chapter-4-resistance/HistoryDocumentDetective";

export type HistoryDocumentInvestigation = {
  id: string;
  documentTitle: string;
  documentDate: string;
  introduction: string;
  sourceUrl: string;
  sourceLabel: string;
  clues: DocumentClue[];
  challenge: DocumentChallenge;
};

export const oceaniaFijiDocument: HistoryDocumentInvestigation = {
  id: "fiji-cession",

  documentTitle: "The Deed of Cession",
  documentDate: "Fiji · 10 October 1874",

  introduction:
    "In 1874, leading Fijian chiefs signed an agreement transferring sovereignty over Fiji to Britain. Examine this educational reconstruction to discover what the agreement tells us — and what it leaves unanswered.",

  sourceUrl:
    "https://www.fijijournal.com/wp-content/uploads/2023/10/The-Deed-of-Cession-of-Fiji-to-Great-Britain.pdf",

  sourceLabel: "Deed of Cession — reproduced document",

  clues: [
    {
      id: "signatories",
      label: "The Signatories",
      heading: "Who signed the agreement?",
      passage:
        "On 10 October 1874, thirteen leading Fijian chiefs signed the Deed of Cession. Sir Hercules Robinson accepted the agreement on behalf of Queen Victoria.",
      discovery:
        "The signatures identify the chiefs who formally agreed to the cession. However, they do not establish that every person or community in Fiji supported the decision.",
      historianQuestion:
        "Whose agreement can we identify from this document, and whose views would require other evidence?",
    },
    {
      id: "sovereignty",
      label: "The Transfer",
      heading: "What was being transferred?",
      passage:
        "The agreement transferred sovereignty over the Fiji Islands to the British Crown, placing Fiji under British colonial rule.",
      discovery:
        "Sovereignty means the authority to govern a territory. The agreement gave Britain ultimate political authority, although Fijian chiefs continued to hold important roles within colonial administration.",
      historianQuestion:
        "How might transferring sovereignty change who makes decisions about laws, land and government?",
    },
    {
      id: "missing-voices",
      label: "The Missing Voices",
      heading: "What does the document leave unanswered?",
      passage:
        "The agreement records the actions of its signatories. It does not record the individual opinions of every Fijian community affected by the transfer of sovereignty.",
      discovery:
        "Historical documents reflect particular people, purposes and moments. To understand how different communities experienced colonial rule, historians must investigate additional sources and perspectives.",
      historianQuestion:
        "What other evidence could help us understand how people outside the group of signatories felt about the agreement?",
    },
  ],

  challenge: {
    question:
      "Which two statements can a historian support using the Deed of Cession and the evidence you investigated?",

    statements: [
      {
        id: "transfer",
        text: "The agreement transferred sovereignty over Fiji to Britain.",
        correct: true,
      },
      {
        id: "everyone-agreed",
        text: "Every person in Fiji supported the agreement.",
        correct: false,
      },
      {
        id: "signatories",
        text: "The document identifies chiefs who formally signed the agreement.",
        correct: true,
      },
      {
        id: "no-changes",
        text: "The agreement had no effect on how Fiji was governed.",
        correct: false,
      },
    ],

    feedback:
      "Excellent investigation! You identified what the document records without assuming it represents the views of every Fijian community.",
  },
};
