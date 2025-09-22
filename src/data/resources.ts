// src/data/resources.ts
export type Resource = {
  href: string;
  label: string;
};

export type ResourceCategory = {
  category: string;
  resources: Resource[];
};

export const resourceCategories: ResourceCategory[] = [
  {
    category: "Internal Resources",
    resources: [
      {
        href: "/resource/Cultural Development at Fable House.pdf",
        label: "Cultural Development at Fable House",
      },
      {
        href: "/resource/SMSC+Cultural+Development+Plan.pdf",
        label: "SMSC & Cultural Development Plan",
      },
    ],
  },
  {
    category: "Twinkl Resources",
    resources: [
      {
        href: "https://www.twinkl.co.uk/resource/africa-our-continent-comprehension-za-ss-58",
        label: "Africa Our Continent Comprehension",
      },
      {
        href: "https://www.twinkl.co.uk/resource/t2-g-208-africa-worksheet",
        label: "KS2 Africa Facts Worksheet",
      },
      {
        href: "https://www.twinkl.co.uk/resource/africa-fact-file-template-t-g-1664273192",
        label: "KS2 Africa Fact File",
      },
      {
        href: "/resource/roi-va-1744011341-african-art-colour-with-patterns-activity_ver_1 (2).pdf",
        label: "African Art Colour with Patterns Activity",
      },
      {
        href: "/resource/african-countries-quiz_ver_1.pdf",
        label: "African Countries Quiz",
      },
      {
        href: "/resoutrce/a-recipe-a-day-seven-kwanzaa-recipes_ver_1.pdf",
        label: "A Recipe a Day: Seven Kwanzaa Recipes",
      },
    ],
  },
  {
    category: "External Resources",
    resources: [
      {
        href: "https://www.nationalgeographic.com/search?q=africa&location=inline&type=manual&typeaheadId=0&typedTerm=afric",
        label: "National Geographic: Africa",
      },
    ],
  },
];
