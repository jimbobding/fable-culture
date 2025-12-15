// src/data/africa/jollofGallery.ts
export type JollofRecipe = {
  hero: string; // main hero image
  title: string; // recipe name or type
  description?: string; // optional description
  images: string[]; // smaller images underneath
};

export const jollofGallery: JollofRecipe[] = [
  {
    hero: "/images/continents/africa/gallery/jollof/kenya-hero.jpg",
    title: "Kenyan Jollof",
    description: "A spicy and vibrant Kenyan Jollof rice recipe.",
    images: [
      "/images/continents/africa/gallery/jollof/100_0493.JPG",
      "/images/continents/africa/gallery/jollof/100_0495.JPG",
      "/images/continents/africa/gallery/jollof/100_0501.JPG",
      "/images/continents/africa/gallery/jollof/100_0509.JPG",
    ],
  },
  {
    hero: "/images/continents/africa/gallery/jollof/ghana-hero.jpg",
    title: "Ghanaian Jollof",
    description:
      "The famous Ghanaian Jollof rice, rich in flavor and tradition.",
    images: [
      "/images/continents/africa/gallery/jollof/100_0477.JPG",
      "/images/continents/africa/gallery/jollof/100_0490.JPG",
      "/images/continents/africa/gallery/jollof/100_0516.JPG",
      "/images/continents/africa/gallery/jollof/100_0518.JPG",
    ],
  },
];
