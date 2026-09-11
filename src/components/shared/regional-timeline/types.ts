export type RegionalTimelineEvent = {
  id: string;

  /**
   * Text displayed to the user.
   * Examples:
   * "c. 1600 BCE"
   * "1206"
   * "1945–1949"
   */
  date: string;

  /**
   * Numeric value used to put events into chronological order.
   * BCE dates should be negative.
   */
  sortYear: number;

  title: string;
  summary: string;

  /**
   * Places connected to the event.
   * These should match filter IDs.
   */
  places: string[];

  /**
   * ID of the era this event belongs to.
   */
  era: string;

  image?: string;

  imageAlt?: string;

  /**
   * Optional explanation of why this event matters
   * to the wider regional story.
   */
  significance?: string;
};

export type RegionalTimelineEra = {
  id: string;
  title: string;
  subtitle?: string;
};

export type RegionalTimelineFilter = {
  id: string;
  label: string;
};

export type RegionalTimelineTheme = {
  background: string;
  surface: string;
  text: string;
  mutedText: string;
  primary: string;
  secondary: string;
  accent: string;
};

export type RegionalTimelineConfig = {
  region: string;
  regionName: string;

  title: string;
  intro: string;

  backHref: string;

  filters: RegionalTimelineFilter[];
  eras: RegionalTimelineEra[];
  events: RegionalTimelineEvent[];

  theme: RegionalTimelineTheme;
};
