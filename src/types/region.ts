export type Country = {
  name: string;
  capital: string;
  languages: string[];
  population: string;
  note: string;
  extra: string;
  flag: string;
};

export type RegionData = {
  region: string;
  countries: Country[];
};

export type CultureGalleryPresentation = {
  heroStyle?: "studio" | "poster";
  headingStyle?: "classic" | "stacked";
  imageStyle?: "clean" | "print";
  layoutStyle?: "classic" | "freeform";
  patternStyle?: "none" | "textile";
  sectionStyle?: "classic" | "mural";
};
