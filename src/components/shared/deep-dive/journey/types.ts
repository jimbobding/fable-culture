export type JourneySide = "left" | "right";

/* =========================================================
   DECORATIONS

   Decorative objects scattered around the journey map.

   These do not contain learning content and are not
   interactive. Region data decides what appears.

   Examples:
   river  → caiman, dolphin, frog, plants
   forest → owl, mushrooms, trees
   city   → taxi, bicycle, street signs
========================================================= */

export type JourneyDecoration = {
  id: string;

  content: string;

  top: number;
  left: number;

  size?: "small" | "medium" | "large" | "giant";

  rotation?: number;
  opacity?: number;

  hideOnMobile?: boolean;
};

/* =========================================================
   MAP FACTS

   Large educational facts that become part of the
   illustrated journey rather than another information card.

   Examples:
   38%
   OF THE WORLD'S RIVER WATER

   300+
   INDIGENOUS LANGUAGES
========================================================= */

export type JourneyMapFact = {
  id: string;

  value: string;
  label: string;

  detail?: string;
  icon?: string;

  top: number;
  left: number;

  align?: "left" | "center" | "right";

  rotation?: number;

  size?: "small" | "medium" | "large";

  hideOnMobile?: boolean;
};

/* =========================================================
   VISUAL STYLE
========================================================= */

export type JourneyVisualStyle =
  | "default"
  | "river"
  | "forest"
  | "city"
  | "trail";

/* =========================================================
   THEME
========================================================= */

export type JourneyTheme = {
  background: string;
  surface: string;

  text: string;
  mutedText: string;

  primary: string;
  secondary: string;
  accent: string;
  dark: string;

  path: string;
  pathLight: string;
  pathDark: string;
};

/* =========================================================
   ANSWERS
========================================================= */

export type JourneyAnswer = {
  id: string;
  label: string;
  correct?: boolean;
};

/* =========================================================
   BASE STOP
========================================================= */

export type JourneyBaseStop = {
  id: string;

  side?: JourneySide;

  eyebrow?: string;
  title: string;
  text?: string;

  marker?: string;
};

/* =========================================================
   FACT

   A small information stop encountered along the journey.
========================================================= */

export type JourneyFactStop = JourneyBaseStop & {
  type: "fact";

  highlight?: string;
};

/* =========================================================
   REVEAL

   Tap different items to discover information.
========================================================= */

export type JourneyRevealItem = {
  id: string;

  icon?: string;
  title: string;
  reveal: string;
};

export type JourneyRevealStop = JourneyBaseStop & {
  type: "reveal";

  items: JourneyRevealItem[];
};

/* =========================================================
   SOUND

   Listen, guess, then reveal.
========================================================= */

export type JourneySoundStop = JourneyBaseStop & {
  type: "sound";

  audioSrc: string;

  question: string;
  answers: JourneyAnswer[];

  revealTitle: string;
  revealText: string;

  revealIcon?: string;
};

/* =========================================================
   AMBIENT

   Atmospheric audio with no correct answer.
========================================================= */

export type JourneyAmbientStop = JourneyBaseStop & {
  type: "ambient";

  audioSrc: string;

  buttonLabel?: string;
  prompt?: string;
};

/* =========================================================
   LANDMARK

   A major moment/location along the journey.
========================================================= */

export type JourneyLandmarkStop = JourneyBaseStop & {
  type: "landmark";

  largeLabel?: string;
};

/* =========================================================
   CHOICE

   Reflective interaction. No correct answer required.
========================================================= */

export type JourneyChoiceStop = JourneyBaseStop & {
  type: "choice";

  instruction?: string;

  options: string[];
  maxChoices?: number;

  completionText?: string;
};

/* =========================================================
   ALL STOPS
========================================================= */

export type JourneyStop =
  | JourneyFactStop
  | JourneyRevealStop
  | JourneySoundStop
  | JourneyAmbientStop
  | JourneyLandmarkStop
  | JourneyChoiceStop;

/* =========================================================
   COMPLETE JOURNEY
========================================================= */

export type JourneyConfig = {
  slug: string;

  regionName: string;
  regionHref: string;

  title: string;
  titleAccent?: string;

  eyebrow?: string;
  intro: string;

  startLabel?: string;
  endLabel?: string;

  visualStyle?: JourneyVisualStyle;

  theme: JourneyTheme;

  /*
    Decorative scenery.

    Amazon:
    🐊 🐬 🐸 🦜 🌿

    City:
    🚕 🚲 🏮 🏙️
  */
  decorations?: JourneyDecoration[];

  /*
    Big educational information displayed as part of
    the illustrated map rather than as journey cards.
  */
  mapFacts?: JourneyMapFact[];

  stops: JourneyStop[];
};
