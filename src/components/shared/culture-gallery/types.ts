export type CreativeCultureFeature = {
  id: string;
  title: string;

  country?: string;
  image?: string;
  description?: string;
  culturalNote?: string;
};

export type ArtRoomProject = {
  id: string;
  title: string;

  country?: string;
  image?: string;
  description?: string;
  task?: string;

  materials?: string[];
  instructions?: string[];
};

export type CultureGalleryTheme = {
  background: string;
  surface: string;

  text: string;
  mutedText: string;

  palette: string[];
};

export type CultureGalleryConfig = {
  intro?: string;

  creativeCulture?: CreativeCultureFeature[];
  artRoom?: ArtRoomProject[];
};

export type CultureGallerySubmissionType = "created" | "discovered";
