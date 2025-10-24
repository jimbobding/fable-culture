// src/data/europeResources.ts

export type Resource = {
  href: string;
  label: string;
};

export type ResourceCategory = {
  category: string;
  slug: string;
  resources: Resource[];
};

export const europeResourceCategories: ResourceCategory[] = [
  {
    category: "Geography and Landmarks",
    slug: "geography-landmarks",
    resources: [
      {
        href: "https://www.twinkl.co.uk/resource/t2-g-272-europe-geography-countries-landmarks-and-natural-features-teaching-pack",
        label: "European Geography and Landmarks - Landmark Activity Pack",
      },
      {
        href: "https://kids.nationalgeographic.com/geography/countries/article/greece",
        label: "Greece Country Profile - National Geographic Kids (Southern)",
      },
      {
        href: "https://kids.nationalgeographic.com/geography/countries/article/ukraine",
        label: "Ukraine - National Geographic Kids (Eastern)",
      },
      {
        href: "https://kids.nationalgeographic.com/geography/countries/article/netherlands",
        label: "Netherlands - National Geographic Kids (Western)",
      },
      {
        href: "https://kids.nationalgeographic.com/geography/countries/article/finland",
        label: "Finland - National Geographic Kids (Northern)",
      },
      {
        href: "https://kids.nationalgeographic.com/geography/countries/article/russia",
        label: "Russia - National Geographic Kids (Largest)",
      },
      {
        href: "https://kids.nationalgeographic.com/geography/countries/article/Hungary",
        label: "Hungary - National Geographic Kids (Central)",
      },
    ],
  },
  {
    category: "Recipes",
    slug: "recipes",
    resources: [
      {
        href: "https://www.recipesfromeurope.com/ragu-sauce/",
        label: "Ragu Sauce (Italian Meat Sauce) - Recipes From Europe",
      },
      {
        href: "https://www.recipesfromeurope.com/german-pretzel-recipe/",
        label: "German Pretzel Recipe (Laugenbrezeln) - Recipes From Europe",
      },
      {
        href: "https://www.recipesfromeurope.com/ukrainian-apple-pancakes/",
        label: "Ukrainian Apple Stuffed Pancakes - Recipes From Europe",
      },
      {
        href: "https://www.recipesfromeurope.com/spanish-omelette/",
        label: "Spanish Omelette (Tortilla de Patatas) - Recipes From Europe",
      },
      {
        href: "https://www.recipesfromeurope.com/",
        label:
          "Hundreds of Recipes From Europe - Delicious European-Inspired Recipes",
      },
    ],
  },
  {
    category: "Traditional Clothing",
    slug: "clothing",
    resources: [
      {
        href: "https://www.twinkl.co.uk/resource/t-t-10403-european-countries-traditional-clothing-display-photos",
        label: "European Countries Traditional Clothing Display Photos",
      },
    ],
  },
  {
    category: "Animals of Europe",
    slug: "animals",
    resources: [
      {
        href: "https://www.twinkl.co.uk/resource/t-t-2567133-alpine-animals-and-plants-fact-file",
        label: "Alpine Animals and Plants Fact File",
      },
      {
        href: "https://www.twinkl.co.uk/resource/t-t-2567127-alpine-animals-and-plants-powerpoint",
        label: "Alpine Animals and Plants PowerPoint",
      },
      {
        href: "https://www.twinkl.co.uk/resource/european-animals-word-search-t-sc-1680528833",
        label: "European Animals Word Search",
      },
      {
        href: "https://kids.nationalgeographic.com/animals",
        label: "National Animals of European Countries",
      },
    ],
  },
  {
    category: "BBC Learning",
    slug: "bbc-learning",
    resources: [
      {
        href: "https://www.bbc.co.uk/bitesize/articles/zgrtp4j",
        label: "Let's Explore Europe - BBC Bitesize",
      },
    ],
  },
  {
    category: "Crafts",
    slug: "crafts",
    resources: [
      {
        href: "https://www.twinkl.co.uk/resource/how-to-start-french-knitting-t-tc-1642078165",
        label: "How To Start French Knitting Video Instructions - Twinkl",
      },
    ],
  },
];
