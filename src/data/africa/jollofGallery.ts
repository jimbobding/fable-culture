// src/data/africa/jollofGallery.ts
export type JollofRecipe = {
  hero: string; // main hero image
  title: string; // recipe name or type
  description?: string; // optional description
  recipeUrl?: string; // link to web recipe
  images: string[]; // smaller images underneath
};

export const jollofGallery: JollofRecipe[] = [
  {
    hero: "/images/continents/africa/gallery/jollof/kenya-hero.jpg",
    title: "Kenyan Jollof",
    description: "A spicy and vibrant Kenyan Jollof rice recipe.",
    recipeUrl:
      "https://www.allrecipes.com/chef-johns-jollof-rice-recipe-7499757",
    images: [
      "/images/continents/africa/gallery/jollof/100_0493.jpg",
      "/images/continents/africa/gallery/jollof/100_0495.jpg",
      "/images/continents/africa/gallery/jollof/100_0501.jpg",
      "/images/continents/africa/gallery/jollof/100_0509.jpg",
    ],
  },
  {
    hero: "/images/continents/africa/gallery/jollof/ghana-hero.jpg",
    title: "Ghanaian Jollof",
    description:
      "The famous Ghanaian Jollof rice, rich in flavor and tradition.",
    recipeUrl: "https://www.curiouscuisiniere.com/jollof-rice-ghana/",
    images: [
      "/images/continents/africa/gallery/jollof/100_0477.jpg",
      "/images/continents/africa/gallery/jollof/100_0490.jpg",
      "/images/continents/africa/gallery/jollof/100_0516.jpg",
      "/images/continents/africa/gallery/jollof/100_0518.jpg",
    ],
  },
];
