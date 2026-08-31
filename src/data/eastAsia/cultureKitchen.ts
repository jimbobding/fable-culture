import type {
  CultureKitchenDish,
  CultureKitchenTheme,
} from "@/components/shared/culture-kitchen/types";

export const eastAsiaCultureKitchenTheme: CultureKitchenTheme = {
  background: "#f3efe5",
  surface: "#faf7ef",
  surfaceAlt: "#efe6d2",

  text: "#263129",
  mutedText: "#657067",

  primary: "#a63d35",
  secondary: "#354d5c",
  tertiary: "#4f7463",
  accent: "#c4a55b",

  border: "#c7b98f",
  softBorder: "#d8cdb4",

  cardShadow: "6px 8px 0 rgba(45,61,74,0.10), 0 12px 30px rgba(54,46,34,0.08)",

  cardHoverShadow:
    "8px 10px 0 rgba(45,61,74,0.13), 0 18px 40px rgba(54,46,34,0.12)",

  featureShadow:
    "7px 8px 0 rgba(79,116,99,0.12), 0 14px 35px rgba(54,46,34,0.08)",

  featureHoverShadow:
    "9px 10px 0 rgba(79,116,99,0.16), 0 20px 45px rgba(54,46,34,0.12)",
};

export const eastAsiaCultureKitchen: CultureKitchenDish[] = [
  {
    id: "china-dumplings",
    country: "China",
    flag: "🇨🇳",

    name: "Chinese Dumplings",

    image: "/images/continents/east-asia/culture-kitchen/china-dumplings.jpg",

    intro:
      "Dumplings are eaten across China in many different forms and are especially associated with family meals and celebrations.",

    difficulty: 2,

    skills: ["Measuring", "Mixing", "Folding", "Safe pan cooking"],

    ingredients: [
      "Dumpling wrappers",
      "Minced meat or vegetable filling",
      "Spring onion",
      "Garlic",
      "Soy sauce",
      "Ginger",
    ],

    steps: [
      "Prepare the filling.",
      "Place a small amount of filling in each wrapper.",
      "Fold and seal the dumplings.",
      "Cook using the chosen method.",
      "Serve with a dipping sauce.",
    ],

    culturalNote:
      "Dumplings have a long history in China and different regions have their own fillings, shapes and cooking methods.",

    studentChallenge:
      "Can you create your own dumpling filling and explain why you chose the ingredients?",
  },

  {
    id: "japan-okonomiyaki",
    country: "Japan",
    flag: "🇯🇵",

    name: "Okonomiyaki",

    image: "/images/continents/east-asia/culture-kitchen/japan-okonomiyaki.jpg",

    intro:
      "Okonomiyaki is a savoury Japanese pancake made with batter, cabbage and a range of toppings.",

    difficulty: 2,

    skills: ["Chopping", "Mixing", "Pan cooking", "Flipping"],

    ingredients: [
      "Cabbage",
      "Flour",
      "Egg",
      "Water or stock",
      "Spring onion",
      "Chosen toppings",
    ],

    steps: [
      "Finely slice the cabbage.",
      "Make the batter.",
      "Mix the cabbage into the batter.",
      "Cook the mixture in a frying pan.",
      "Flip carefully and cook the second side.",
      "Add toppings and serve.",
    ],

    culturalNote:
      "Different regions of Japan have their own styles of okonomiyaki, particularly Osaka and Hiroshima.",

    studentChallenge: "Design your own okonomiyaki topping combination.",
  },

  {
    id: "south-korea-bibimbap",
    country: "South Korea",
    flag: "🇰🇷",

    name: "Bibimbap",

    image:
      "/images/continents/east-asia/culture-kitchen/south-korea-bibimbap.jpg",

    intro:
      "Bibimbap is a Korean rice dish served with vegetables and other toppings arranged together in a bowl.",

    difficulty: 2,

    skills: [
      "Knife skills",
      "Cooking rice",
      "Preparing vegetables",
      "Presentation",
    ],

    ingredients: [
      "Rice",
      "Carrot",
      "Spinach",
      "Mushrooms",
      "Egg",
      "Gochujang or alternative sauce",
    ],

    steps: [
      "Cook the rice.",
      "Prepare and cook the vegetables separately.",
      "Cook the egg.",
      "Arrange the ingredients over the rice.",
      "Add sauce.",
      "Mix together before eating.",
    ],

    culturalNote:
      "Bibimbap means mixed rice and can be made using many different combinations of vegetables, meat and sauces.",

    studentChallenge:
      "Can you arrange your bowl so that the different colours are clearly visible before mixing it?",
  },

  {
    id: "north-korea-naengmyeon",
    country: "North Korea",
    flag: "🇰🇵",

    name: "Pyongyang Naengmyeon",

    image:
      "/images/continents/east-asia/culture-kitchen/north-korea-naengmyeon.jpg",

    intro:
      "Pyongyang naengmyeon is a cold noodle dish traditionally associated with North Korea's capital.",

    difficulty: 3,

    skills: [
      "Preparing noodles",
      "Knife skills",
      "Building flavours",
      "Presentation",
    ],

    ingredients: [
      "Buckwheat-style noodles",
      "Cold broth",
      "Cucumber",
      "Radish",
      "Egg",
      "Optional meat or vegetable toppings",
    ],

    steps: [
      "Prepare the broth and allow it to chill.",
      "Cook the noodles.",
      "Cool the noodles thoroughly.",
      "Prepare the toppings.",
      "Place the noodles into a bowl.",
      "Pour over the cold broth and arrange the toppings.",
    ],

    culturalNote:
      "Cold noodles from Pyongyang are one of the best-known dishes associated with northern Korean food traditions.",

    studentChallenge:
      "What is different about eating a cold noodle soup compared with a hot noodle dish?",
  },

  {
    id: "mongolia-buuz",
    country: "Mongolia",
    flag: "🇲🇳",

    name: "Buuz",

    image: "/images/continents/east-asia/culture-kitchen/mongolia-buuz.jpg",

    intro:
      "Buuz are steamed Mongolian dumplings traditionally filled with seasoned meat.",

    difficulty: 2,

    skills: ["Making dough", "Mixing", "Shaping", "Steaming"],

    ingredients: [
      "Flour",
      "Water",
      "Minced meat or alternative filling",
      "Onion",
      "Garlic",
      "Seasoning",
    ],

    steps: [
      "Make and rest the dough.",
      "Prepare the filling.",
      "Roll small pieces of dough into circles.",
      "Add filling and fold the dough.",
      "Steam until cooked.",
    ],

    culturalNote:
      "Buuz are particularly associated with Tsagaan Sar, the Mongolian Lunar New Year.",

    studentChallenge:
      "Practise different ways of folding and sealing your dumplings.",
  },

  {
    id: "taiwan-beef-noodle-soup",
    country: "Taiwan",
    flag: "🇹🇼",

    name: "Taiwanese Beef Noodle Soup",

    image:
      "/images/continents/east-asia/culture-kitchen/taiwan-beef-noodle-soup.jpg",

    intro:
      "Beef noodle soup is one of Taiwan's best-known dishes, combining noodles, beef and a richly flavoured broth.",

    difficulty: 3,

    skills: ["Simmering", "Knife skills", "Cooking noodles", "Seasoning"],

    ingredients: [
      "Beef",
      "Noodles",
      "Stock",
      "Soy sauce",
      "Garlic",
      "Ginger",
      "Spring onion",
    ],

    steps: [
      "Prepare the beef and vegetables.",
      "Build the broth.",
      "Simmer the beef until tender.",
      "Cook the noodles separately.",
      "Add noodles to bowls.",
      "Top with beef and broth.",
    ],

    culturalNote:
      "Beef noodle soup is strongly associated with Taiwanese food culture and there are many different versions of the dish.",

    studentChallenge:
      "Taste your broth and decide what it needs more of: saltiness, sweetness, acidity or spice.",
  },
];
