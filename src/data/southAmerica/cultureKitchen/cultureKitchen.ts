import type {
  CultureKitchenDish,
  CultureKitchenTheme,
} from "@/components/shared/culture-kitchen/types";

export const southAmericaCultureKitchenTheme: CultureKitchenTheme = {
  background: "#F4E5C4",
  surface: "#FFF8E8",
  surfaceAlt: "#EAD6AC",

  text: "#211F1B",
  mutedText: "#665F54",

  primary: "#B84432",
  secondary: "#168C9E",
  tertiary: "#153D2D",
  accent: "#F28C3C",

  border: "#C89C63",
  softBorder: "#DEC59D",

  cardShadow: "6px 8px 0 rgba(184,68,50,0.10), 0 12px 30px rgba(33,31,27,0.08)",

  cardHoverShadow:
    "8px 10px 0 rgba(184,68,50,0.15), 0 18px 40px rgba(33,31,27,0.12)",

  featureShadow:
    "7px 8px 0 rgba(21,61,45,0.12), 0 14px 35px rgba(33,31,27,0.08)",

  featureHoverShadow:
    "9px 10px 0 rgba(21,61,45,0.16), 0 20px 45px rgba(33,31,27,0.12)",
};

export const southAmericaCultureKitchen: CultureKitchenDish[] = [
  // =========================================================
  // SAUCES — ARGENTINA & URUGUAY
  // =========================================================

  {
    id: "argentina-uruguay-chimichurri",
    country: "Argentina & Uruguay",
    flag: "🇦🇷 🇺🇾",
    name: "Chimichurri",
    image:
      "/images/culture-kitchen/south-america/argentina-uruguay/chimichurri.webp",

    intro:
      "Make a fresh, punchy herb sauce with parsley, garlic, oregano, vinegar and olive oil. Chimichurri is especially associated with grilled meat and asado.",

    difficulty: 1,

    skills: [
      "Knife skills",
      "Measuring",
      "Mixing",
      "Seasoning",
      "Balancing flavours",
    ],

    ingredients: [
      "25g fresh flat-leaf parsley",
      "2 garlic cloves",
      "1 tsp dried oregano",
      "½ tsp chilli flakes",
      "2 tbsp red wine vinegar",
      "5 tbsp olive oil",
      "¼ tsp salt",
      "Pinch of black pepper",
    ],

    steps: [
      "Wash the parsley and pat it dry.",
      "Finely chop the parsley and put it into a bowl.",
      "Peel and finely chop the garlic, then add it to the parsley.",
      "Add the oregano, chilli flakes, salt and black pepper.",
      "Pour in the red wine vinegar and mix everything together.",
      "Add the olive oil and stir thoroughly.",
      "Taste the chimichurri and adjust the salt, vinegar or chilli if needed.",
      "Leave the sauce to stand for 10–15 minutes before serving so the flavours can combine.",
    ],

    culturalNote:
      "Chimichurri is strongly associated with Argentina and Uruguay, particularly with asado and grilled meats. Recipes vary between cooks and families, with different amounts of herbs, garlic, chilli, vinegar and oil.",

    studentChallenge:
      "Taste the chimichurri and describe its flavour. Can you identify something herby, sharp, spicy and garlicky? Change one ingredient slightly and explain how it changes the finished sauce.",
  },

  // =========================================================
  // SAUCES — URUGUAY
  // =========================================================

  {
    id: "uruguay-salsa-criolla",
    country: "Uruguay",
    flag: "🇺🇾",
    name: "Salsa Criolla",
    image: "/images/culture-kitchen/south-america/uruguay/salsa-criolla.webp",

    intro:
      "Prepare a colourful fresh salsa using tomato, peppers and onion with a simple vinegar and oil dressing. It makes a fresh accompaniment to grilled foods.",

    difficulty: 1,

    skills: ["Knife skills", "Dicing", "Measuring", "Mixing", "Seasoning"],

    ingredients: [
      "1 medium tomato",
      "½ red pepper",
      "½ small red onion",
      "1 tbsp red wine vinegar",
      "2 tbsp olive oil",
      "½ tsp dried oregano",
      "Small handful fresh parsley, finely chopped",
      "Pinch of salt",
      "Pinch of black pepper",
    ],

    steps: [
      "Wash the tomato and red pepper.",
      "Cut the tomato into small pieces and put it into a bowl.",
      "Remove the seeds from the pepper and dice it into small pieces.",
      "Peel the onion and finely dice it.",
      "Add the pepper and onion to the tomato.",
      "Add the chopped parsley and oregano.",
      "Pour over the red wine vinegar and olive oil.",
      "Season with a little salt and black pepper.",
      "Mix everything together thoroughly.",
      "Leave the salsa for about 10 minutes before tasting and serving.",
    ],

    culturalNote:
      "Salsa criolla is found in different forms across South America. In Uruguay and the wider Río de la Plata region, fresh versions made with onion, peppers and tomato can be served alongside grilled meats and other foods. Recipes vary considerably between households and regions.",

    studentChallenge:
      "Compare this salsa with chimichurri. Look at the colour and texture, then compare the smell and taste. Which ingredients make the two sauces different?",
  },

  // =========================================================
  // STARTER — ARGENTINA
  // =========================================================

  {
    id: "argentina-beef-empanadas",
    country: "Argentina",
    flag: "🇦🇷",
    name: "Beef Empanadas",
    image:
      "/images/culture-kitchen/south-america/argentina/beef-empanadas.webp",

    intro:
      "Fill, fold and bake individual pastry parcels with a savoury beef filling while practising chopping, frying and pastry skills.",

    difficulty: 2,

    skills: [
      "Knife skills",
      "Frying",
      "Seasoning",
      "Filling pastry",
      "Folding and sealing",
      "Baking",
    ],

    ingredients: [
      "1 tsp vegetable oil",
      "½ small onion, finely diced",
      "1 garlic clove, crushed",
      "150g lean beef mince",
      "½ tsp smoked paprika",
      "½ tsp ground cumin",
      "¼ tsp dried oregano",
      "1 tbsp tomato purée",
      "2 tbsp water",
      "Pinch of salt",
      "Pinch of black pepper",
      "1 sheet ready-rolled shortcrust pastry",
      "1 egg, beaten, for brushing",
    ],

    steps: [
      "Heat the vegetable oil in a frying pan over a medium heat.",
      "Add the onion and cook gently until it begins to soften.",
      "Add the garlic and cook for another minute.",
      "Add the beef mince and cook until it is browned all over, breaking it apart with a wooden spoon.",
      "Add the paprika, cumin, oregano and tomato purée.",
      "Add the water, mix well and cook until the filling is thick rather than watery.",
      "Season carefully with salt and black pepper, then leave the filling to cool.",
      "Heat the oven to 200°C, or 180°C fan.",
      "Cut circles from the pastry.",
      "Put a small spoonful of cooled filling onto one half of each circle, leaving space around the edge.",
      "Fold the pastry over the filling to make a half-moon shape.",
      "Press the edges together firmly and crimp them with a fork.",
      "Put the empanadas onto a lined baking tray and brush them with beaten egg.",
      "Bake for about 18–22 minutes until the pastry is crisp and golden and the filling is piping hot.",
    ],

    culturalNote:
      "Empanadas are eaten across many parts of Latin America, with different countries and regions developing their own fillings and styles. Argentina has particularly strong empanada traditions, and fillings can vary considerably between different provinces.",

    studentChallenge:
      "Design your own empanada filling. Think about flavour, colour and texture. What ingredients would you choose, and how would you make sure the filling is not too wet for the pastry?",
  },

  // =========================================================
  // MAIN — PERU
  // =========================================================

  {
    id: "peru-lomo-saltado",
    country: "Peru",
    flag: "🇵🇪",
    name: "Lomo Saltado",
    image: "/images/culture-kitchen/south-america/peru/lomo-saltado.webp",

    intro:
      "Cook strips of beef quickly with onion and tomato in a savoury sauce, then serve with chips and rice in one of Peru's best-known fusion dishes.",

    difficulty: 2,

    skills: [
      "Knife skills",
      "High-heat cooking",
      "Stir-frying",
      "Sauce making",
      "Timing",
      "Checking meat is cooked safely",
    ],

    ingredients: [
      "200g rump or sirloin steak",
      "½ red onion",
      "1 medium tomato",
      "1 garlic clove, crushed",
      "1 tbsp vegetable oil",
      "1½ tbsp soy sauce",
      "1 tbsp red wine vinegar",
      "½ tsp ground cumin",
      "Pinch of black pepper",
      "150g oven chips or fries",
      "Cooked rice, to serve",
      "Small handful fresh coriander, roughly chopped",
    ],

    steps: [
      "Cook the chips according to the packet instructions.",
      "Prepare the rice so it is ready at roughly the same time as the stir-fry.",
      "Cut the steak into thin strips.",
      "Slice the red onion into wedges.",
      "Cut the tomato into thick wedges so that it does not break down too quickly.",
      "Mix the soy sauce and vinegar together in a small bowl.",
      "Heat a frying pan or wok until very hot, then add the vegetable oil.",
      "Add the steak and stir-fry quickly until browned.",
      "Add the onion and cook for another 1–2 minutes.",
      "Add the garlic, cumin and black pepper and stir briefly.",
      "Add the tomato and cook quickly so that it warms and softens slightly but keeps some shape.",
      "Pour in the soy sauce and vinegar mixture and toss everything together.",
      "Check the beef is cooked to the required level before serving.",
      "Serve with the cooked rice and chips and finish with chopped coriander.",
    ],

    culturalNote:
      "Lomo saltado is a well-known Peruvian dish that combines Peruvian ingredients with stir-frying techniques connected to Chinese migration to Peru. This Chinese-Peruvian culinary tradition is often known as chifa. Lomo saltado is commonly served with both rice and fried potatoes.",

    studentChallenge:
      "This dish combines different culinary traditions. Identify something in the dish that reminds you of a stir-fry and something that feels different. Why do you think food changes when cultures meet?",
  },

  // =========================================================
  // DESSERT — ARGENTINA & URUGUAY
  // =========================================================

  {
    id: "argentina-uruguay-alfajores",
    country: "Argentina & Uruguay",
    flag: "🇦🇷 🇺🇾",
    name: "Alfajores",
    image:
      "/images/culture-kitchen/south-america/argentina-uruguay/alfajores.webp",

    intro:
      "Bake delicate sandwich biscuits and fill them with dulce de leche to make a sweet treat enjoyed in several South American countries.",

    difficulty: 2,

    skills: [
      "Measuring",
      "Mixing",
      "Making dough",
      "Rolling",
      "Cutting",
      "Baking",
      "Presentation",
    ],

    ingredients: [
      "100g unsalted butter, softened",
      "60g caster sugar",
      "1 egg yolk",
      "½ tsp vanilla extract",
      "100g plain flour",
      "100g cornflour",
      "½ tsp baking powder",
      "150g dulce de leche",
      "25g desiccated coconut, optional",
      "Icing sugar, optional, for finishing",
    ],

    steps: [
      "Heat the oven to 180°C, or 160°C fan.",
      "Beat the softened butter and caster sugar together until creamy.",
      "Mix in the egg yolk and vanilla extract.",
      "Add the plain flour, cornflour and baking powder.",
      "Mix until the ingredients come together into a soft dough.",
      "Lightly flour the work surface and gently roll the dough to about 5mm thick.",
      "Cut out small rounds and place them onto a lined baking tray.",
      "Bake for about 8–10 minutes. The biscuits should be cooked but remain quite pale.",
      "Leave the biscuits to cool completely.",
      "Spread dulce de leche onto the flat side of one biscuit.",
      "Place another biscuit on top and press very gently to make a sandwich.",
      "If using coconut, roll the exposed dulce de leche around the edge in desiccated coconut.",
      "Finish with a light dusting of icing sugar if you wish.",
    ],

    culturalNote:
      "Alfajores are popular in several South American countries, including Argentina and Uruguay. There are many varieties, but sandwich-style alfajores filled with dulce de leche are especially well known in the Río de la Plata region.",

    studentChallenge:
      "Think about presentation as well as flavour. Try one finishing technique such as coconut, icing sugar or a small amount of chocolate. Which finish makes your alfajor look most appealing?",
  },

  // =========================================================
  // SNACK — BRAZIL
  // =========================================================

  {
    id: "brazil-pao-de-queijo",
    country: "Brazil",
    flag: "🇧🇷",
    name: "Pão de Queijo",
    image: "/images/culture-kitchen/south-america/brazil/pao-de-queijo.webp",

    intro:
      "Make small Brazilian cheese breads with a crisp outside and chewy centre while discovering how tapioca starch behaves differently from ordinary wheat flour.",

    difficulty: 2,

    skills: [
      "Measuring",
      "Mixing",
      "Working with dough",
      "Shaping",
      "Baking",
      "Observing texture",
    ],

    ingredients: [
      "125g tapioca starch",
      "60ml milk",
      "30ml vegetable oil",
      "¼ tsp salt",
      "1 egg",
      "60g finely grated Parmesan",
      "40g grated mature cheddar",
    ],

    steps: [
      "Heat the oven to 200°C, or 180°C fan, and line a baking tray.",
      "Put the tapioca starch into a mixing bowl.",
      "Put the milk, vegetable oil and salt into a small saucepan.",
      "Heat the mixture until it is hot and just beginning to simmer.",
      "Carefully pour the hot liquid over the tapioca starch.",
      "Mix with a wooden spoon and leave it to cool for a few minutes.",
      "Add the egg and mix thoroughly. The mixture may look sticky at first.",
      "Add the Parmesan and cheddar and mix until everything is combined.",
      "With lightly oiled or damp hands, shape the mixture into small balls.",
      "Place them onto the lined baking tray with space between each one.",
      "Bake for about 18–22 minutes until puffed and lightly golden.",
      "Allow them to cool slightly before serving warm.",
    ],

    culturalNote:
      "Pão de queijo means 'cheese bread' in Portuguese and is particularly associated with the Brazilian state of Minas Gerais. It is made using cassava-derived starch rather than ordinary wheat flour, which helps give the bread its distinctive chewy texture.",

    studentChallenge:
      "Compare the texture of pão de queijo with an ordinary bread roll. What is different about the outside and the centre? Think about how using tapioca starch instead of wheat flour may affect the result.",
  },
];
