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
  // =========================================================
  // CHINA
  // =========================================================
  {
    id: "china-stir-fry",
    country: "China",
    flag: "🇨🇳",
    name: "Chicken Stir-Fry",
    image: "/images/culture-kitchen/east-asia/china/stir-fry.webp",

    intro:
      "Practise the fast-paced cooking technique of stir-frying with chicken, colourful vegetables and a simple homemade sauce.",

    difficulty: 2,

    skills: [
      "Knife skills",
      "Stir-frying",
      "High-heat cooking",
      "Sauce making",
      "Checking chicken is safely cooked",
    ],

    ingredients: [
      "1 large chicken breast, sliced into bite-sized pieces",
      "1 tbsp cornflour",
      "Pinch of salt",
      "Pinch of black pepper",
      "1 tbsp vegetable oil",
      "50g sugar snap peas",
      "½ red pepper, sliced",
      "½ yellow pepper, sliced",
      "1 garlic clove, crushed",
      "2 tbsp soy sauce",
      "1 tbsp Chinese rice vinegar",
      "1½ tbsp brown sugar",
      "1½ tbsp sweet chilli sauce",
      "1 tbsp tomato ketchup",
      "2 spring onions, sliced",
      "½ small red chilli, sliced (optional)",
      "Cooked rice or noodles, to serve",
    ],

    steps: [
      "Put the chicken in a bowl and coat it with the cornflour, salt and pepper.",
      "Heat the vegetable oil in a wok or large frying pan over a high heat.",
      "Add the chicken and stir-fry for about 5–6 minutes, turning it regularly.",
      "Add the sugar snap peas and peppers and stir-fry for another 2 minutes.",
      "Add the garlic and stir everything together.",
      "Pour in the soy sauce, rice vinegar, brown sugar, sweet chilli sauce and tomato ketchup.",
      "Keep everything moving over the high heat until the sauce is hot and glossy.",
      "Check a large piece of chicken by cutting into it. It should be completely cooked through with no pink in the centre.",
      "Add the spring onions and optional chilli and cook for another minute.",
      "Serve with cooked rice or noodles.",
    ],

    culturalNote:
      "Stir-frying is a cooking technique strongly associated with Chinese cuisine. Ingredients are cut into small pieces and cooked quickly over a high heat while being constantly moved around the wok. There are many different styles of stir-fry across China, using different meats, vegetables and sauces.",

    studentChallenge:
      "Choose one different vegetable to add or swap. Think about how thinly you need to cut it so that it cooks quickly.",
  },

  // =========================================================
  // JAPAN
  // =========================================================
  {
    id: "japan-simple-sushi",
    country: "Japan",
    flag: "🇯🇵",
    name: "Simple Sushi Rolls",
    image: "/images/culture-kitchen/east-asia/japan/simple-sushi.webp",

    intro:
      "Learn how to prepare seasoned sushi rice and roll your own simple Japanese-style sushi with a choice of fillings.",

    difficulty: 2,

    skills: [
      "Measuring",
      "Knife skills",
      "Preparing rice",
      "Rolling",
      "Presentation",
    ],

    ingredients: [
      "100g sushi rice",
      "35ml rice vinegar",
      "2 tsp caster sugar",
      "1 tbsp mayonnaise",
      "1 tsp rice vinegar",
      "½ tsp soy sauce",
      "2 nori sheets",
      "Cucumber, cut into thin strips",
      "Red pepper, cut into thin strips",
      "Avocado, cut into thin strips",
      "Canned tuna or smoked salmon (optional)",
      "Soy sauce, to serve",
    ],

    steps: [
      "Cook the sushi rice according to the packet instructions.",
      "Mix the 35ml rice vinegar with the caster sugar.",
      "Gently mix the vinegar mixture through the cooked rice.",
      "Spread the rice out and allow it to cool completely.",
      "Mix the mayonnaise with 1 tsp rice vinegar and ½ tsp soy sauce.",
      "Put a nori sheet shiny-side down on a sushi mat.",
      "With slightly damp hands, spread a thin layer of rice over the nori, leaving a strip clear along the far edge.",
      "Spread a little of the mayonnaise mixture across the middle of the rice.",
      "Add a thin line of your chosen fillings.",
      "Use the mat to roll everything tightly towards the empty edge.",
      "Wet the empty edge slightly and finish rolling to seal the sushi.",
      "Place the roll on a chopping board and carefully slice it into pieces.",
      "Serve with a little soy sauce.",
    ],

    culturalNote:
      "Sushi is a famous part of Japanese cuisine, but there are many different types. This activity introduces maki-style sushi, where seasoned rice and fillings are wrapped in nori seaweed and sliced into individual pieces.",

    studentChallenge:
      "Experiment with different fillings and arrange your finished sushi carefully. Can you create a colourful combination with different tastes and textures?",
  },

  // =========================================================
  // SOUTH KOREA — QUICK KIMCHI
  // =========================================================
  {
    id: "south-korea-quick-kimchi",
    country: "South Korea",
    flag: "🇰🇷",
    name: "Quick Kimchi",
    image: "/images/culture-kitchen/east-asia/south-korea/quick-kimchi.jpg",

    intro:
      "Make a quick classroom version of one of Korea's best-known foods using crunchy cabbage, vegetables and a spicy, tangy seasoning.",

    difficulty: 1,

    skills: ["Knife skills", "Grating", "Measuring", "Mixing", "Seasoning"],

    ingredients: [
      "¼ Chinese cabbage",
      "¾ tsp salt",
      "1 small garlic clove, crushed",
      "½ tsp grated ginger",
      "½ tbsp fish sauce (optional)",
      "½ tbsp sriracha or chilli paste",
      "¾ tsp caster sugar",
      "2 tsp rice vinegar",
      "2 radishes, grated",
      "½ carrot, grated or cut into thin strips",
      "1 spring onion, finely sliced",
    ],

    steps: [
      "Slice the cabbage into roughly 2–3cm strips.",
      "Put the cabbage into a bowl, mix it with the salt and leave for 1 hour.",
      "While the cabbage is resting, mix the garlic, ginger, optional fish sauce, chilli sauce, sugar and rice vinegar in a small bowl.",
      "Rinse the salted cabbage thoroughly under cold running water.",
      "Drain the cabbage and dry it well.",
      "Put the cabbage into a clean bowl with the radish, carrot and spring onion.",
      "Add the spicy seasoning mixture.",
      "Toss everything together thoroughly until the vegetables are evenly coated.",
      "The quick kimchi can be eaten straight away or refrigerated for later.",
    ],

    culturalNote:
      "Kimchi is an important part of Korean food culture and includes many different fermented vegetable dishes. Traditional kimchi develops its flavour through fermentation. This is a simplified quick classroom version designed to introduce some of its ingredients and flavours.",

    studentChallenge:
      "Taste the finished dish carefully. Can you identify sweet, salty, sour and spicy flavours?",
  },

  // =========================================================
  // NORTH KOREA
  // =========================================================
  {
    id: "north-korea-pyongyang-cold-noodles",
    country: "North Korea",
    flag: "🇰🇵",
    name: "Pyongyang-Style Cold Noodles",
    image: "/images/culture-kitchen/east-asia/north-korea/cold-noodles.webp",

    intro:
      "Discover a famous cold noodle dish associated with Pyongyang, served with chilled broth, cucumber, radish and egg.",

    difficulty: 2,

    skills: [
      "Boiling",
      "Knife skills",
      "Cooling noodles",
      "Preparing toppings",
      "Presentation",
    ],

    ingredients: [
      "2 portions naengmyeon or buckwheat noodles",
      "500ml good-quality beef stock",
      "1 tsp soy sauce",
      "½ tsp sugar",
      "Pinch of salt",
      "½ cucumber",
      "1 boiled egg",
      "4 tbsp thinly sliced radish",
      "1 tbsp rice vinegar",
      "2 tsp sugar",
      "Small pinch of salt",
      "A few thin slices of pear (optional)",
      "Rice vinegar, to serve",
      "Hot mustard, to serve (optional)",
    ],

    steps: [
      "Mix the beef stock with the soy sauce and ½ tsp sugar. Taste and add a small amount of salt if needed.",
      "Put the stock in the fridge so that it becomes very cold.",
      "Mix the sliced radish with 1 tbsp rice vinegar, 2 tsp sugar and a small pinch of salt. Leave it while you prepare the other ingredients.",
      "Boil the egg, cool it, peel it and cut it in half.",
      "Thinly slice the cucumber.",
      "Cook the noodles according to the packet instructions.",
      "Drain the noodles immediately and rinse them thoroughly under very cold water. An ice bath can be used to cool them quickly.",
      "Drain the noodles well and divide them between two bowls.",
      "Arrange the cucumber, radish, optional pear and half an egg over each bowl.",
      "Pour the chilled broth around the noodles.",
      "Serve immediately with rice vinegar and optional hot mustard.",
    ],

    culturalNote:
      "Naengmyeon means 'cold noodles'. Pyongyang-style mul naengmyeon is associated with the North Korean city of Pyongyang and traditionally combines thin, chewy noodles with a clear, chilled broth. Traditional versions can use buckwheat noodles and broth made from beef and dongchimi.",

    studentChallenge:
      "Most noodle soups are served hot. Think about how serving the noodles and broth cold changes the flavour, texture and experience of eating the dish.",
  },

  // =========================================================
  // MONGOLIA
  // =========================================================
  {
    id: "mongolia-flatbread",
    country: "Mongolia",
    flag: "🇲🇳",
    name: "Mongolian Flatbread",
    image: "/images/culture-kitchen/east-asia/mongolia/flatbread.webp",

    intro:
      "Mix, prove and pan-cook a simple yeast flatbread while learning how yeast changes a dough or batter.",

    difficulty: 2,

    skills: [
      "Measuring",
      "Mixing",
      "Working with yeast",
      "Proving",
      "Pan frying",
    ],

    ingredients: [
      "180g plain flour",
      "1 tsp sugar",
      "½ sachet dried yeast (about 3.5g)",
      "½ tsp salt",
      "90ml warm milk",
      "60ml warm water",
      "1 tsp vegetable oil, for frying",
    ],

    steps: [
      "Put the flour, sugar, yeast and salt into a large mixing bowl.",
      "Make a well in the centre.",
      "Gradually add the warm milk and water while mixing.",
      "Beat the mixture thoroughly until you have a smooth, thick batter.",
      "Cover the bowl and leave it somewhere warm for about 1 hour, until the mixture looks bubbly and risen.",
      "Give the batter another good mix.",
      "Heat a small amount of vegetable oil in a non-stick frying pan over a medium-low heat.",
      "Spoon a small ladleful of batter into the pan and gently spread it into a round.",
      "Cook for a few minutes until the underside is browned.",
      "Carefully turn the flatbread over and cook the other side.",
      "Repeat with the remaining batter.",
      "Serve the flatbreads warm.",
    ],

    culturalNote:
      "This activity introduces a simple flatbread recipe presented as Mongolian-style. The focus of the activity is on bread-making skills, particularly using yeast, allowing batter to prove and cooking bread in a frying pan.",

    studentChallenge:
      "Look at the batter before and after it rests. What changes can you see? Think about what the yeast has done during the hour.",
  },

  // =========================================================
  // TAIWAN
  // =========================================================
  {
    id: "taiwan-cucumber-salad",
    country: "Taiwan",
    flag: "🇹🇼",
    name: "Taiwanese Cucumber Salad",
    image: "/images/culture-kitchen/east-asia/taiwan/cucumber-salad.webp",

    intro:
      "Make a refreshing Taiwanese-style cucumber salad with a sweet, sour and nutty dressing.",

    difficulty: 1,

    skills: [
      "Knife skills",
      "Measuring",
      "Salting",
      "Making a dressing",
      "Presentation",
    ],

    ingredients: [
      "½ large cucumber or 2 small cucumbers",
      "¼ tsp salt",
      "1 small garlic clove, crushed or finely chopped",
      "1 tbsp rice vinegar",
      "1½ tsp mirin",
      "1½ tsp caster sugar",
      "½ tsp toasted sesame oil",
      "½ tsp chilli crisp (optional)",
      "½ tsp sesame seeds",
    ],

    steps: [
      "Cut the cucumber into roughly 1cm-thick rounds.",
      "Put the cucumber in a colander, sprinkle it with the salt and mix.",
      "Leave the cucumber for 20 minutes while you prepare the dressing.",
      "Mix the garlic, rice vinegar, mirin, sugar, sesame oil and optional chilli crisp until the sugar has dissolved.",
      "Rinse the cucumber under cold running water and pat it dry.",
      "Add the cucumber to the dressing and mix thoroughly.",
      "For a classroom tasting, leave it to sit in the dressing for about 10 minutes.",
      "Sprinkle with sesame seeds and serve.",
    ],

    culturalNote:
      "Cold, crunchy vegetable side dishes are found in Taiwanese cuisine. This salad combines cucumber with rice vinegar, sesame oil, garlic and other seasonings to create contrasting sweet, sour, savoury and spicy flavours.",

    studentChallenge:
      "Taste the dressing and identify its different flavours. Can you find something sweet, sour, salty, spicy and nutty?",
  },
];
