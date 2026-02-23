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
