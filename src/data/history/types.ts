export type HistorySource = {
  id: string;
  title: string;
  organisation: string;
  url: string;
  accessedAt?: string;
  notes?: string;
};

export type HistoryFact = {
  id: string;
  text: string;
  sourceIds: string[];
  context?: string;
  disputed?: boolean;
};

export type HistoryChallenge = {
  id: string;
  type: "multiple-choice" | "evidence" | "timeline" | "navigation";
  question: string;
  instructions?: string;
  options?: {
    id: string;
    text: string;
  }[];
  correctOptionIds?: string[];
  explanation: string;
  sourceIds: string[];
};

export type HistoryChapter = {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  introduction: string;
  heroImage: string;
  facts: HistoryFact[];
  challenges: HistoryChallenge[];
};

export type HistoryExpedition = {
  detective?: HistoryDetectiveConfig;
  region: string;
  title: string;
  subtitle: string;
  introduction: string;
  heroImage: string;

  theme: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
  };

  sources: HistorySource[];
  chapters: HistoryChapter[];
};

export type HistoryInvestigation = {
  id: string;
  icon: string;
  location: string;
  title: string;
  evidence: string;
  question: string;
  options: string[];
  correct: number;
  hint: string;
  explanation: string;
  sourceIds?: string[];
  image?: string;
  imageAlt?: string;
};

export type HistoryDetectiveConfig = {
  title: string;
  introduction: string;
  completionMessage: string;
  completionButton: string;
  investigations: HistoryInvestigation[];
};
