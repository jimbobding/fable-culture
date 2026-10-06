export type RETheme = {
  background: string;
  surface: string;
  surfaceAlt: string;
  text: string;
  mutedText: string;
  primary: string;
  secondary: string;
  accent: string;
};

/* =========================================================
   HERO
========================================================= */

export type REHero = {
  eyebrow?: string;
  title: string;
  intro: string;
  enquiryQuestion: string;
  image: string;
  imageAlt: string;
};

/* =========================================================
   BELIEF / WORLDVIEW EXPLORER
========================================================= */

export type REBelief = {
  id: string;
  title: string;
  subtitle?: string;
  summary: string;

  image?: string;
  imageAlt?: string;

  keyIdeas: string[];

  importantNote?: string;

  places?: string[];
};

/* =========================================================
   LOOK → THINK → DISCOVER ENQUIRY
========================================================= */

export type REEnquiry = {
  id: string;
  title: string;

  image: string;
  imageAlt: string;

  lookPrompt: string;
  thinkPrompt: string;

  revealTitle: string;
  revealText: string;

  bigQuestion?: string;

  relatedBeliefIds?: string[];
};

/* =========================================================
   BELIEF IN PRACTICE
========================================================= */

export type REPractice = {
  id: string;
  title: string;
  category:
    | "Celebration"
    | "Worship"
    | "Ritual"
    | "Food"
    | "Clothing"
    | "Music"
    | "Community"
    | "Pilgrimage"
    | "Other";

  summary: string;

  image?: string;
  imageAlt?: string;

  whyItMatters?: string;

  beliefIds?: string[];
  places?: string[];
};

/* =========================================================
   SACRED PLACE / OBJECT
========================================================= */

export type RESacredItem = {
  id: string;

  type: "place" | "object";

  title: string;
  subtitle?: string;

  image: string;
  imageAlt: string;

  summary: string;
  significance: string;

  question?: string;

  beliefIds?: string[];
  places?: string[];
};

/* =========================================================
   COMPARISON
========================================================= */

export type REComparisonSide = {
  title: string;
  beliefId?: string;

  points: string[];
};

export type REComparison = {
  id: string;

  title: string;
  question: string;

  left: REComparisonSide;
  right: REComparisonSide;

  sharedIdeas?: string[];

  reflection?: string;
};

/* =========================================================
   BIG QUESTIONS
========================================================= */

export type REBigQuestion = {
  id: string;

  question: string;

  context?: string;

  prompts?: string[];
};

/* =========================================================
   SOURCES
========================================================= */

export type RESource = {
  label: string;
  href: string;
  organisation?: string;
};

/* =========================================================
   COMPLETE REGIONAL RE CONFIG
========================================================= */

export type REConfig = {
  region: string;
  regionName: string;

  backHref: string;

  hero: REHero;

  beliefs: REBelief[];

  enquiries: REEnquiry[];

  practices: REPractice[];

  sacredItems: RESacredItem[];

  comparisons: REComparison[];

  bigQuestions: REBigQuestion[];

  sources?: RESource[];

  theme: RETheme;
};
