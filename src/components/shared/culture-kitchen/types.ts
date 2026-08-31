export type CultureKitchenDish = {
  id: string;
  country: string;
  flag: string;

  name: string;
  image: string;

  intro: string;

  difficulty: 1 | 2 | 3;

  skills: string[];
  ingredients: string[];
  steps: string[];

  culturalNote: string;
  studentChallenge: string;
};
export type CultureKitchenSubmission = {
  id?: string;

  creatorName: string;
  dishName: string;

  inspiration: string;
  description: string;

  keyIngredients: string;
  adaptation: string;

  makeAgain: "yes" | "maybe" | "no";

  imageUrl?: string;

  region: string;

  status: "pending" | "approved" | "rejected";
};
export type CultureKitchenTheme = {
  background: string;
  surface: string;
  surfaceAlt: string;

  text: string;
  mutedText: string;

  primary: string;
  secondary: string;
  tertiary: string;
  accent: string;

  border: string;
  softBorder: string;

  cardShadow: string;
  cardHoverShadow: string;
  featureShadow: string;
  featureHoverShadow: string;
};
