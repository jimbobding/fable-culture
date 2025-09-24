// src/data/resources.ts
export type Resource = {
  href: string;
  label: string;
};

export type ResourceCategory = {
  category: string;
  slug: string;
  resources: Resource[];
};

export const resourceCategories: ResourceCategory[] = [
  {
    category: "Food / Recipes",
    slug: "food-recipes",
    resources: [
      {
        href: "/resource/a-recipe-a-day-seven-kwanzaa-recipes_ver_1.pdf",
        label: "A Recipe a Day: Seven Kwanzaa Recipes",
      },
      {
        href: "/resource/kwanzaa-benne-cakes-recipe_ver_5.pdf",
        label: "Kwanzaa Benne Cakes Recipe",
      },
      {
        href: "/resource/t-h-752-egyptian-bread-recipe-information-card_ver_2.pdf",
        label: "Egyptian Bread Recipe Information Card",
      },
      {
        href: "/resource/t-par-1639727889-moroccan-couscous-recipe_ver_1.pdf",
        label: "Moroccan Couscous Recipe",
      },
      {
        href: "/resource/t2-e-41465-uks2-moroccan-vegetable-tagine-healthy-eating-recipe_ver_7.pdf",
        label: "Moroccan Vegetable Tagine Recipe",
      },
      {
        href: "/resource/za2-m-7-milk-tart-recipe-activity-sheet_ver_3.pdf",
        label: "Milk Tart Recipe Activity Sheet",
      },
    ],
  },
  {
    category: "Art / Craft / Activities",
    slug: "art-activities",
    resources: [
      {
        href: "/resource/roi-va-1744011341-african-art-colour-with-patterns-activity_ver_1 (2).pdf",
        label: "African Art Colour with Patterns Activity",
      },
      {
        href: "/resource/t-tp-1625736924-african-silhouette-art-activity_ver_5.pdf",
        label: "African Silhouette Art Activity",
      },
      {
        href: "/resource/us-t-252396-kwanzaa-mat-craft-instructions_ver_3.pdf",
        label: "Kwanzaa Mat Craft Instructions",
      },
      {
        href: "/resource/t-tc-1742468922-african-safari-animal-weaving-pack_ver_1.pdf",
        label: "African Safari Animal Weaving Pack",
      },
    ],
  },
  {
    category: "Culture / History / Geography",
    slug: "culture-history",
    resources: [
      {
        href: "/resource/t-g-1646823398-kenyan-animal-habitats-cut-and-stick-activity_ver_2.pdf",
        label: "Kenyan Animal Habitats Cut and Stick Activity",
      },
      {
        href: "/resource/t-g-1649407843-africa-mind-map_ver_4.pdf",
        label: "Africa Mind Map",
      },
      {
        href: "/resource/t-g-1675716448-africa-fact-cards_ver_3.pdf",
        label: "Africa Fact Cards",
      },
      {
        href: "/resource/t-g-1743749367-south-africa-imports-and-exports_ver_1.pdf",
        label: "South Africa Imports and Exports",
      },
      {
        href: "/resource/t-h-1650285343-ancient-egyptians-fact-file-template_ver_2.pdf",
        label: "Ancient Egyptians Fact File Template",
      },
      {
        href: "/resource/t-par-1657111109-explore-egypt-booklet-ks2_ver_3.pdf",
        label: "Explore Egypt Booklet KS2",
      },
      {
        href: "/resource/t-t-2516-ancient-egypt-word-mat_ver_4.pdf",
        label: "Ancient Egypt Word Mat",
      },
      {
        href: "/resource/t-tp-1709843849-black-representation-ks2-nigeria-information-sheet_ver_1.pdf",
        label: "Black Representation KS2 Nigeria Information Sheet",
      },
      {
        href: "/resource/t-tp-1721989776-african-animal-crossword-puzzle_ver_2.pdf",
        label: "African Animal Crossword Puzzle",
      },
      {
        href: "/resource/T-TP-6942-KS1-Life-in-Egypt-Photo-Pack-_ver_2.pdf",
        label: "KS1 Life in Egypt Photo Pack",
      },
      {
        href: "/resource/t-tp-7594-african-animal-footprint-matching-activity-_ver_2.pdf",
        label: "African Animal Footprint Matching Activity",
      },
      {
        href: "/resource/t-tp-8035-ks1-life-in-morocco-photo-pack-_ver_1.pdf",
        label: "KS1 Life in Morocco Photo Pack",
      },
      {
        href: "/resource/t2-g-639-africa-map-with-and-without-names-activity-sheets_ver_8.pdf",
        label: "Africa Map with and without Names Activity Sheets",
      },
      {
        href: "/resource/t2-h-033-ancient-egypt-ks2-timeline-poster_ver_3.pdf",
        label: "Ancient Egypt KS2 Timeline Poster",
      },
      {
        href: "/resource/t2-h-4436-design-an-ancient-egyptian-mask-activity-_ver_2.pdf",
        label: "Design an Ancient Egyptian Mask Activity",
      },
      {
        href: "/resource/t2-h-5793-egypt-landmarks-worksheet--_ver_3.pdf",
        label: "Egypt Landmarks Worksheet",
      },
      {
        href: "/resource/za-m-349-sa-money-coins-and-notes-word-mat_ver_1.pdf",
        label: "SA Money Coins and Notes Word Mat",
      },
      {
        href: "/resource/za-kps-1721111490-food-from-south-africa-mind-map_ver_1.pdf",
        label: "Food from South Africa Mind Map",
      },
    ],
  },
  {
    category: "Worksheets / Fact Files",
    slug: "worksheets",
    resources: [
      {
        href: "/resource/Cultural Development at Fable House.pdf",
        label: "Cultural Development at Fable House",
      },
      {
        href: "/resource/SMSC+Cultural+Development+Plan.pdf",
        label: "SMSC & Cultural Development Plan",
      },
      {
        href: "/resource/za-ss-58-africa-our-continent-comprehension_ver_4.pdf",
        label: "Africa Our Continent Comprehension",
      },
    ],
  },
  {
    category: "Food / Display Cards",
    slug: "food-display",
    resources: [
      {
        href: "/resource/ca-ss-1742068403-foods-across-africa-display-cards_ver_1.pdf",
        label: "Foods Across Africa Display Cards",
      },
      {
        href: "/resource/t-fd-1741252548-fruits-of-africa-instant-photo-style-display-images_ver_1.pdf",
        label: "Fruits of Africa Instant Photo-Style Display Images",
      },
    ],
  },
  {
    category: "Videos",
    slug: "videos",
    resources: [
      {
        href: "https://www.youtube.com/watch?v=WnXOQKNKjAE",
        label:
          "11 Traditional African Clothing That Identifies African Tribes At A Glance",
      },
    ],
  },
];
