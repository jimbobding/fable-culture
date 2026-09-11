export type DeepDiveVisualStyle = "default" | "mongol-steppe" | "manga";

export type DeepDiveTheme = {
  background: string;
  surface: string;
  text: string;
  mutedText: string;
  primary: string;
  secondary: string;
  accent: string;
  dark: string;
};

export type DeepDiveSource = {
  id: string;
  name: string;
  title: string;
  url: string;
  description?: string;
};

export type DeepDiveSourceRef = {
  sourceId: string;
  label?: string;
};

export type DeepDiveArticleSection = {
  type: "article";
  id: string;
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  highlight?: string;
  sourceRefs?: DeepDiveSourceRef[];
};

export type DeepDiveBigDateSection = {
  type: "big-date";
  id: string;
  date: string;
  eyebrow?: string;
  title: string;
  text: string;
  sourceRefs?: DeepDiveSourceRef[];
};

export type DeepDiveFact = {
  icon?: string;
  title: string;
  text: string;
};

export type DeepDiveFactsSection = {
  type: "facts";
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  facts: DeepDiveFact[];
  dark?: boolean;
  sourceRefs?: DeepDiveSourceRef[];
};

export type DeepDiveRevealOption = {
  id: string;
  icon?: string;
  title: string;
  reveal: string;
};

export type DeepDiveRevealSection = {
  type: "reveal";
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  options: DeepDiveRevealOption[];
  sourceRefs?: DeepDiveSourceRef[];
};

export type DeepDiveTimelineItem = {
  date: string;
  title: string;
  text?: string;
};

export type DeepDiveTimelineSection = {
  type: "timeline";
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  items: DeepDiveTimelineItem[];
  sourceRefs?: DeepDiveSourceRef[];
};

export type DeepDiveStatementSection = {
  type: "statement";
  id: string;
  eyebrow?: string;
  title: string;
  text: string;
  questions?: string[];
  sourceRefs?: DeepDiveSourceRef[];
};

export type DeepDiveJourneyItem = {
  icon?: string;
  title: string;
  text?: string;
};

export type DeepDiveJourneySection = {
  type: "journey";
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  items: DeepDiveJourneyItem[];
  sourceRefs?: DeepDiveSourceRef[];
};

export type DeepDiveChoiceSection = {
  type: "choice";
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  instruction?: string;
  maxChoices?: number;
  options: string[];
  completionText?: string;
};

export type DeepDiveSection =
  | DeepDiveArticleSection
  | DeepDiveBigDateSection
  | DeepDiveFactsSection
  | DeepDiveRevealSection
  | DeepDiveTimelineSection
  | DeepDiveStatementSection
  | DeepDiveJourneySection
  | DeepDiveChoiceSection;

export type DeepDiveConfig = {
  slug: string;

  region: string;
  regionName: string;
  regionHref: string;

  category?: string;

  title: string;
  titleAccent?: string;
  strapline: string;

  heroEyebrow?: string;
  heroSymbol?: string;

  visualStyle?: DeepDiveVisualStyle;

  theme: DeepDiveTheme;

  sections: DeepDiveSection[];

  sources: DeepDiveSource[];
};
