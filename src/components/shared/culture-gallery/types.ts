export type CreativeCultureFeature = {
  id: string;
  title: string;

  country?: string;
  image?: string;
  description?: string;
  culturalNote?: string;
};

export type ArtRoomExampleImage = {
  src: string;
  alt?: string;
  caption?: string;
};

export type ArtRoomProject = {
  id: string;
  title: string;

  country?: string;
  image?: string;
  description?: string;
  task?: string;

  /*
    Optional inspiration / example pictures for the task.

    These appear underneath the "Try it" task description.

    You can use:
    - no pictures
    - one picture
    - several pictures

    Each picture can also have an optional caption.
  */
  exampleImages?: ArtRoomExampleImage[];

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
