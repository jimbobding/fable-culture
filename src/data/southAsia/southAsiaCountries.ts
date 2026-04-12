export type TimelineItem = {
  year: string;
  title: string;
  text: string;
};

export type VisualItem = {
  image: string;
  title: string;
  description: string;
  tag?: string;
};

export type Country = {
  slug: string;
  name: string;
  flag: string;
  population: string;
  capital: string;
  intro: string;

  heroImage: string;

  languages: string[];
  currency: string;

  facts: string[];

  factFile: {
    capital: VisualItem;
    food: VisualItem;
    wildlife: VisualItem;
    culture: VisualItem;
  };

  places: VisualItem[];

  theme: {
    primary: string;
    secondary: string;
    accent: string;
  };
};

export const countries: Country[] = [
  {
    slug: "india",
    name: "India",
    flag: "🇮🇳",
    population: "1.4+ billion",
    capital: "New Delhi",
    intro:
      "India is one of the largest and most diverse countries in the world. It is known for its rich history, many languages, religions, and a wide variety of landscapes from the Himalayas to tropical coasts.",

    heroImage: "/images/south-asia/india/hero.jpg",

    languages: [
      "Hindi",
      "English",
      "Bengali",
      "Telugu",
      "Marathi",
      "Tamil",
      "Urdu",
      "Gujarati",
      "Kannada",
      "Malayalam",
      "Punjabi",
    ],
    currency: "Indian Rupee",

    facts: [
      "India has one of the largest populations in the world.",
      "Hundreds of languages are spoken across the country.",
      "The Himalayas are located in the north.",
      "India has a wide range of foods, traditions, and festivals.",
    ],

    factFile: {
      capital: {
        image:
          "/images/continents/south-asia/countries/india/capital/new-delhi.jpg",
        title: "New Delhi",
        description:
          "New Delhi is the capital of India and is home to government buildings, busy streets, markets, and important landmarks.",
      },
      food: {
        image:
          "/images/continents/south-asia/countries/india/food/india-dal.jpg",
        title: "Dal",
        description:
          "Dal is a popular dish made from lentils and spices. It is eaten across India and is a common part of everyday meals.",
      },
      wildlife: {
        image:
          "/images/continents/south-asia/countries/india/wildlife/india-bengal-tiger.jpg",
        title: "Bengal Tiger",
        description:
          "The Bengal tiger is one of India’s most famous animals and is known for its power, striped coat, and importance in wildlife conservation.",
      },
      culture: {
        image:
          "/images/continents/south-asia/countries/india/culture/india-diwali-festival-lights.jpg",
        title: "Diwali Festival Lights",
        description:
          "Diwali is a well-known festival of lights. People celebrate with lamps, decorations, family gatherings, and special food.",
      },
    },

    places: [
      {
        image:
          "/images/continents/south-asia/countries/india/places/jaipur.avif",
        title: "Jaipur",
        description:
          "Jaipur is known as the Pink City and is famous for its palaces, forts, and colourful buildings.",
        tag: "City",
      },
      {
        image:
          "/images/continents/south-asia/countries/india/places/kerala-backwaters.jpeg",
        title: "Kerala Backwaters",
        description:
          "The Kerala backwaters are a network of lagoons and waterways surrounded by tropical scenery and village life.",
        tag: "Landscape",
      },
      {
        image:
          "/images/continents/south-asia/countries/india/places/varanasi.jpeg",
        title: "Varanasi",
        description:
          "Varanasi is one of the oldest cities in the world and is an important place of religion and culture.",
        tag: "Sacred City",
      },
      {
        image:
          "/images/continents/south-asia/countries/india/places/taj-mahal.jpg",
        title: "Taj Mahal",
        description:
          "The Taj Mahal is one of India’s most famous landmarks, built from white marble and known around the world.",
        tag: "Historic Landmark",
      },
    ],

    theme: {
      primary: "#c2410c",
      secondary: "#7f1d1d",
      accent: "#f97316",
    },
  },

  {
    slug: "pakistan",
    name: "Pakistan",
    flag: "🇵🇰",
    population: "240+ million",
    capital: "Islamabad",
    intro:
      "Pakistan is a country of mountains, rivers, and rich cultural traditions. It has a long history connected to ancient civilisations and important trade routes.",

    heroImage: "/images/south-asia/pakistan/hero.jpg",

    languages: ["Urdu", "Punjabi", "Sindhi", "Pashto", "Balochi", "English"],
    currency: "Pakistani Rupee",

    facts: [
      "Pakistan is home to some of the world's highest mountains.",
      "The Indus River runs through the country.",
      "It has a rich mix of cultures and traditions.",
    ],

    factFile: {
      capital: {
        image:
          "/images/continents/south-asia/countries/pakistan/capital/islamabad-plateau-view.webp",
        title: "Islamabad",
        description:
          "Islamabad is the capital of Pakistan and is known for its planned layout, green spaces, and views of nearby hills.",
      },
      food: {
        image:
          "/images/continents/south-asia/countries/pakistan/food/pakistan-nihari.jpg",
        title: "Nihari",
        description:
          "Nihari is a rich, slow-cooked meat dish with spices. It is one of Pakistan’s best-known traditional foods.",
      },
      wildlife: {
        image:
          "/images/continents/south-asia/countries/pakistan/wildlife/pakistan-markhor.webp",
        title: "Markhor",
        description:
          "The markhor is a wild mountain goat with long twisted horns. It is a famous animal of Pakistan’s mountainous regions.",
      },
      culture: {
        image:
          "/images/continents/south-asia/countries/pakistan/culture/pakistan-pakistani-truck-art.jpg",
        title: "Truck Art",
        description:
          "Pakistani truck art is bright, detailed, and colourful. It is a well-known part of modern visual culture in Pakistan.",
      },
    },

    places: [
      {
        image:
          "/images/continents/south-asia/countries/pakistan/places/badshahi-mosque-lahore.avif",
        title: "Badshahi Mosque",
        description:
          "The Badshahi Mosque in Lahore is one of the largest and most famous historic mosques in South Asia.",
        tag: "Religious Site",
      },
      {
        image:
          "/images/continents/south-asia/countries/pakistan/places/Faisal-Mosque-Islamabad.jpeg",
        title: "Faisal Mosque",
        description:
          "Faisal Mosque is a famous landmark in Islamabad, known for its modern design and mountain backdrop.",
        tag: "Religious Site",
      },
      {
        image:
          "/images/continents/south-asia/countries/pakistan/places/hunza-valley.jpg",
        title: "Hunza Valley",
        description:
          "Hunza Valley is known for dramatic mountain scenery, rivers, and villages surrounded by high peaks.",
        tag: "Landscape",
      },
      {
        image:
          "/images/continents/south-asia/countries/pakistan/places/Mohenjo-daro-ancient ruins.jpg",
        title: "Mohenjo-daro",
        description:
          "Mohenjo-daro is an ancient city from the Indus Valley Civilisation and shows how early urban people lived.",
        tag: "Ancient Site",
      },
    ],

    theme: {
      primary: "#065f46",
      secondary: "#064e3b",
      accent: "#10b981",
    },
  },

  {
    slug: "bangladesh",
    name: "Bangladesh",
    flag: "🇧🇩",
    population: "170+ million",
    capital: "Dhaka",
    intro:
      "Bangladesh is a country shaped by rivers and fertile land. It has a strong cultural identity and is known for its history, language, and traditions.",

    heroImage: "/images/south-asia/bangladesh/hero.jpg",

    languages: ["Bengali"],
    currency: "Bangladeshi Taka",

    facts: [
      "Bangladesh has many rivers and fertile land.",
      "It is one of the most densely populated countries.",
      "Rice and fishing are important parts of life.",
    ],

    factFile: {
      capital: {
        image:
          "/images/continents/south-asia/countries/bangladesh/capital/dhaka.jpg",
        title: "Dhaka",
        description:
          "Dhaka is the capital of Bangladesh and is a busy city known for trade, transport, and daily life along the river system.",
      },
      food: {
        image:
          "/images/continents/south-asia/countries/bangladesh/food/bangladesh-hilsa-curry.jpeg",
        title: "Hilsa Curry",
        description:
          "Hilsa curry is a popular fish dish in Bangladesh. Fish and rice are important parts of many meals.",
      },
      wildlife: {
        image:
          "/images/continents/south-asia/countries/bangladesh/wildlife/bangladesh-bengal-tiger.avif",
        title: "Bengal Tiger",
        description:
          "The Bengal tiger is one of the most famous animals linked with Bangladesh, especially in the Sundarbans mangrove forest.",
      },
      culture: {
        image:
          "/images/continents/south-asia/countries/bangladesh/culture/bangladesh-pohela-boishakh.jpg",
        title: "Pohela Boishakh",
        description:
          "Pohela Boishakh is the Bengali New Year celebration, marked by music, traditional clothes, and colourful parades.",
      },
    },

    places: [
      {
        image:
          "/images/continents/south-asia/countries/bangladesh/places/Cox’s-Bazar-Beach.jpg",
        title: "Cox’s Bazar",
        description:
          "Cox’s Bazar is famous for its long sandy beach and is one of Bangladesh’s best-known coastal places.",
        tag: "Coast",
      },
      {
        image:
          "/images/continents/south-asia/countries/bangladesh/places/Lalbagh-Fort-Dhaka.jpeg",
        title: "Lalbagh Fort",
        description:
          "Lalbagh Fort is a historic Mughal fort in Dhaka and helps tell the story of Bangladesh’s past.",
        tag: "Historic Landmark",
      },
      {
        image:
          "/images/continents/south-asia/countries/bangladesh/places/Sundarbans-Mangrove-Forest.jpg",
        title: "Sundarbans",
        description:
          "The Sundarbans is a huge mangrove forest known for wildlife, waterways, and the Bengal tiger.",
        tag: "Nature",
      },
      {
        image:
          "/images/continents/south-asia/countries/bangladesh/places/sixty-dome-mosque.jpeg",
        title: "Sixty Dome Mosque",
        description:
          "The Sixty Dome Mosque is one of the most important historic buildings in Bangladesh and is known for its architecture.",
        tag: "Religious Site",
      },
    ],

    theme: {
      primary: "#166534",
      secondary: "#7f1d1d",
      accent: "#dc2626",
    },
  },

  {
    slug: "nepal",
    name: "Nepal",
    flag: "🇳🇵",
    population: "30+ million",
    capital: "Kathmandu",
    intro:
      "Nepal is a mountainous country best known for the Himalayas, including Mount Everest. It has a rich culture and strong traditions.",

    heroImage: "/images/south-asia/nepal/hero.jpg",

    languages: ["Nepali"],
    currency: "Nepalese Rupee",

    facts: [
      "Mount Everest is located in Nepal.",
      "The country is mostly mountainous.",
      "Tourism and trekking are important.",
    ],

    factFile: {
      capital: {
        image:
          "/images/continents/south-asia/countries/nepal/capital/kathmandu.png",
        title: "Kathmandu",
        description:
          "Kathmandu is the capital of Nepal and is known for temples, markets, and important cultural sites.",
      },
      food: {
        image:
          "/images/continents/south-asia/countries/nepal/food/nepal-dal-bhat.webp",
        title: "Dal Bhat",
        description:
          "Dal bhat is a common meal in Nepal made with lentils and rice. It is eaten by many families across the country.",
      },
      wildlife: {
        image:
          "/images/continents/south-asia/countries/nepal/wildlife/nepal-cow.webp",
        title: "Cow",
        description:
          "The cow is an important and respected animal in Nepal and is often linked to religion and everyday life.",
      },
      culture: {
        image:
          "/images/continents/south-asia/countries/nepal/culture/nepal-prayer-flags-nepal.jpg",
        title: "Prayer Flags",
        description:
          "Prayer flags are often seen in Nepal, especially in mountain areas, and are linked to religious beliefs and traditions.",
      },
    },

    places: [
      {
        image:
          "/images/continents/south-asia/countries/nepal/places/Lumbini-birthplace-Buddha.jpeg",
        title: "Lumbini",
        description:
          "Lumbini is known as the birthplace of the Buddha and is an important religious and historical site.",
        tag: "Religious Site",
      },
      {
        image:
          "/images/continents/south-asia/countries/nepal/places/Pokhara-lakes- mountains.jpg",
        title: "Pokhara",
        description:
          "Pokhara is known for its lakes, mountain views, and as a starting point for trekking in the Himalayas.",
        tag: "Landscape",
      },
      {
        image:
          "/images/continents/south-asia/countries/nepal/places/Mount-Everest.webp",
        title: "Mount Everest",
        description:
          "Mount Everest is the highest mountain in the world and is one of Nepal’s most famous natural landmarks.",
        tag: "Mountain",
      },
      {
        image:
          "/images/continents/south-asia/countries/nepal/places/kathamandu-durbar-square.jpg",
        title: "Kathmandu Durbar Square",
        description:
          "Kathmandu Durbar Square is a historic area filled with temples, palaces, and traditional architecture.",
        tag: "Historic Site",
      },
    ],

    theme: {
      primary: "#7f1d1d",
      secondary: "#1e3a8a",
      accent: "#dc2626",
    },
  },

  {
    slug: "sri-lanka",
    name: "Sri Lanka",
    flag: "🇱🇰",
    population: "22+ million",
    capital: "Sri Jayawardenepura Kotte",
    intro:
      "Sri Lanka is an island nation known for its beaches, tea plantations, and rich history.",

    heroImage: "/images/south-asia/sri-lanka/hero.jpg",

    languages: ["Sinhala", "Tamil"],
    currency: "Sri Lankan Rupee",

    facts: [
      "Sri Lanka is famous for tea production.",
      "It has beautiful beaches and wildlife.",
      "It has a long history of kingdoms.",
    ],

    factFile: {
      capital: {
        image:
          "/images/continents/south-asia/countries/sri-lanka/capital/colombo-sri-lanka.jpg",
        title: "Colombo",
        description:
          "Colombo is Sri Lanka’s largest city and an important centre for business, transport, and daily life.",
      },
      food: {
        image:
          "/images/continents/south-asia/countries/sri-lanka/food/sri-lanka-rice-and-curry.jpg",
        title: "Rice and Curry",
        description:
          "Rice and curry is a well-known Sri Lankan meal, often served with vegetables, spices, and different side dishes.",
      },
      wildlife: {
        image:
          "/images/continents/south-asia/countries/sri-lanka/wildlife/sri-lanka-sri-lankan-elephant.jpg",
        title: "Sri Lankan Elephant",
        description:
          "The Sri Lankan elephant is one of the island’s most famous animals and is an important part of its wildlife.",
      },
      culture: {
        image:
          "/images/continents/south-asia/countries/sri-lanka/culture/sri-lanka-kandyan-dancers.jpg",
        title: "Kandyan Dancers",
        description:
          "Kandyan dance is a traditional performance style from Sri Lanka, known for costumes, movement, and drumming.",
      },
    },

    places: [
      {
        image:
          "/images/continents/south-asia/countries/sri-lanka/places/Ella-tea hills-Nine-Arch-Bridge.jpg",
        title: "Ella and Nine Arch Bridge",
        description:
          "Ella is known for green hills, tea plantations, and the famous Nine Arch Bridge.",
        tag: "Landscape",
      },
      {
        image:
          "/images/continents/south-asia/countries/sri-lanka/places/galle-fort.jpeg",
        title: "Galle Fort",
        description:
          "Galle Fort is a historic coastal fort with old buildings, sea views, and a long colonial history.",
        tag: "Historic Landmark",
      },
      {
        image:
          "/images/continents/south-asia/countries/sri-lanka/places/sigiriya-rock-fortress.webp",
        title: "Sigiriya",
        description:
          "Sigiriya is a giant rock fortress and one of Sri Lanka’s most famous historic landmarks.",
        tag: "Historic Landmark",
      },
      {
        image:
          "/images/continents/south-asia/countries/sri-lanka/places/Temple-of-the-Tooth-Kandy.webp",
        title: "Temple of the Tooth",
        description:
          "The Temple of the Tooth in Kandy is one of the most important religious sites in Sri Lanka.",
        tag: "Religious Site",
      },
    ],

    theme: {
      primary: "#92400e",
      secondary: "#78350f",
      accent: "#facc15",
    },
  },

  {
    slug: "bhutan",
    name: "Bhutan",
    flag: "🇧🇹",
    population: "800k+",
    capital: "Thimphu",
    intro:
      "Bhutan is a small mountainous country known for its focus on happiness and preserving culture.",

    heroImage: "/images/south-asia/bhutan/hero.jpg",

    languages: ["Dzongkha"],
    currency: "Ngultrum",

    facts: [
      "Bhutan measures success with happiness.",
      "It has strong cultural traditions.",
      "The country protects its environment.",
    ],

    factFile: {
      capital: {
        image:
          "/images/continents/south-asia/countries/bhutan/capital/Thimphu-capital.webp",
        title: "Thimphu",
        description:
          "Thimphu is the capital of Bhutan and is known for mountain scenery, traditional buildings, and important government sites.",
      },
      food: {
        image:
          "/images/continents/south-asia/countries/bhutan/food/bhutan-ema-datshi.jpeg",
        title: "Ema Datshi",
        description:
          "Ema datshi is a famous Bhutanese dish made with chilli peppers and cheese, and it is a popular national food.",
      },
      wildlife: {
        image:
          "/images/continents/south-asia/countries/bhutan/wildlife/bhutan-takin.jpg",
        title: "Takin",
        description:
          "The takin is Bhutan’s national animal and is known for its unusual shape and thick coat.",
      },
      culture: {
        image:
          "/images/continents/south-asia/countries/bhutan/culture/bhutan-tshechu-festival-dancers.jpg",
        title: "Tshechu Festival Dancers",
        description:
          "Tshechu festivals include traditional masked dances, colourful clothing, and important religious celebrations.",
      },
    },

    places: [
      {
        image:
          "/images/continents/south-asia/countries/bhutan/places/dochula-pass.jpg",
        title: "Dochula Pass",
        description:
          "Dochula Pass is known for mountain views and rows of memorial chortens along the road.",
        tag: "Mountain Pass",
      },
      {
        image:
          "/images/continents/south-asia/countries/bhutan/places/punakha-dzong.jpeg",
        title: "Punakha Dzong",
        description:
          "Punakha Dzong is a large fortress-monastery and one of Bhutan’s most famous historic buildings.",
        tag: "Religious Site",
      },
      {
        image:
          "/images/continents/south-asia/countries/bhutan/places/Tigers-Nest-Monastery-Paro-Taktsang-Bhutan-1140x550-1.jpg",
        title: "Tiger’s Nest Monastery",
        description:
          "Tiger’s Nest Monastery sits high on a cliff and is one of the most iconic places in Bhutan.",
        tag: "Sacred Site",
      },
      {
        image:
          "/images/continents/south-asia/countries/bhutan/places/paro-valley.jpg",
        title: "Paro Valley",
        description:
          "Paro Valley is known for its peaceful scenery, rivers, and traditional Bhutanese villages surrounded by mountains.",
        tag: "Landscape",
      },
    ],

    theme: {
      primary: "#ca8a04",
      secondary: "#92400e",
      accent: "#f97316",
    },
  },

  {
    slug: "afghanistan",
    name: "Afghanistan",
    flag: "🇦🇫",
    population: "40+ million",
    capital: "Kabul",
    intro:
      "Afghanistan is a landlocked country with mountains, valleys, and a long history connected to trade routes.",

    heroImage: "/images/south-asia/afghanistan/hero.jpg",

    languages: ["Pashto", "Dari"],
    currency: "Afghan Afghani",

    facts: [
      "Afghanistan has many mountains and valleys.",
      "It has been part of important trade routes.",
      "It has a rich cultural history.",
    ],

    factFile: {
      capital: {
        image:
          "/images/continents/south-asia/countries/afghanistan/capital/kabul.jpg",
        title: "Kabul",
        description:
          "Kabul is the capital of Afghanistan and is surrounded by mountains, with a long history as an important city.",
      },
      food: {
        image:
          "/images/continents/south-asia/countries/afghanistan/food/afghanistan-kabuli-pulao.jpg",
        title: "Kabuli Pulao",
        description:
          "Kabuli pulao is a traditional rice dish often made with meat, carrots, raisins, and spices.",
      },
      wildlife: {
        image:
          "/images/continents/south-asia/countries/afghanistan/wildlife/afghanistan-snow-leopard.jpg",
        title: "Snow Leopard",
        description:
          "The snow leopard is a rare mountain animal that lives in cold, rocky regions and is linked with Afghanistan’s highlands.",
      },
      culture: {
        image:
          "/images/continents/south-asia/countries/afghanistan/culture/afghanistan-attan-dance.webp",
        title: "Attan Dance",
        description:
          "Attan is a traditional Afghan dance often performed in groups during celebrations and cultural events.",
      },
    },

    places: [
      {
        image:
          "/images/continents/south-asia/countries/afghanistan/places/Bamiyan-Valley-Buddha site.webp",
        title: "Bamiyan Valley",
        description:
          "Bamiyan Valley is known for its dramatic landscape and important archaeological history.",
        tag: "Historic Valley",
      },
      {
        image:
          "/images/continents/south-asia/countries/afghanistan/places/Blue-Mosque-Mazar-i-Sharif.jpeg",
        title: "Blue Mosque",
        description:
          "The Blue Mosque in Mazar-i-Sharif is one of Afghanistan’s best-known religious landmarks.",
        tag: "Religious Site",
      },
      {
        image:
          "/images/continents/south-asia/countries/afghanistan/places/band-e-amir-national-park.jpg",
        title: "Band-e Amir National Park",
        description:
          "Band-e Amir is famous for its bright blue lakes and striking natural scenery.",
        tag: "Nature",
      },
      {
        image:
          "/images/continents/south-asia/countries/afghanistan/places/herat-citadel.jpeg",
        title: "Herat Citadel",
        description:
          "Herat Citadel is a historic fortress that shows Afghanistan’s long and important past.",
        tag: "Historic Fortress",
      },
    ],

    theme: {
      primary: "#78350f",
      secondary: "#1f2937",
      accent: "#b91c1c",
    },
  },

  {
    slug: "maldives",
    name: "Maldives",
    flag: "🇲🇻",
    population: "500k+",
    capital: "Malé",
    intro:
      "The Maldives is a group of islands in the Indian Ocean known for its beaches and clear waters.",

    heroImage: "/images/south-asia/maldives/hero.jpg",

    languages: ["Dhivehi"],
    currency: "Maldivian Rufiyaa",

    facts: [
      "The Maldives is made up of many small islands.",
      "It is known for tourism and beaches.",
      "It is one of the lowest-lying countries in the world.",
    ],

    factFile: {
      capital: {
        image:
          "/images/continents/south-asia/countries/maldives/capital/male-capital-island.webp",
        title: "Malé",
        description:
          "Malé is the capital of the Maldives and is a busy island city surrounded by the Indian Ocean.",
      },
      food: {
        image:
          "/images/continents/south-asia/countries/maldives/food/maldives-mas-huni.jpg",
        title: "Mas Huni",
        description:
          "Mas huni is a traditional Maldivian dish made with tuna, coconut, onion, and chilli, often eaten for breakfast.",
      },
      wildlife: {
        image:
          "/images/continents/south-asia/countries/maldives/wildlife/maldives-yellowfin-tuna.jpg",
        title: "Yellowfin Tuna",
        description:
          "Yellowfin tuna is an important sea animal in the Maldives and is closely linked to fishing and island life.",
      },
      culture: {
        image:
          "/images/continents/south-asia/countries/maldives/culture/maldives-bodu-beru-drumming.jpg",
        title: "Bodu Beru Drumming",
        description:
          "Bodu Beru is a traditional performance with drumming, rhythm, and movement that is important in Maldivian culture.",
      },
    },

    places: [
      {
        image:
          "/images/continents/south-asia/countries/maldives/places/Coral-reefs-maldives.webp",
        title: "Coral Reefs",
        description:
          "The Maldives is famous for coral reefs filled with colourful sea life and clear blue water.",
        tag: "Nature",
      },
      {
        image:
          "/images/continents/south-asia/countries/maldives/places/sandbanks-maldives.jpeg",
        title: "Sandbanks",
        description:
          "Sandbanks are tiny sandy islands surrounded by shallow sea and are a striking part of the Maldivian landscape.",
        tag: "Coast",
      },
      {
        image:
          "/images/continents/south-asia/countries/maldives/places/Overwater-villas-maldives.jpg",
        title: "Overwater Villas",
        description:
          "Overwater villas are a famous image of the Maldives and show how tourism shapes many islands.",
        tag: "Modern Landmark",
      },
      {
        image:
          "/images/continents/south-asia/countries/maldives/places/vaadhoo-island.jpg",
        title: "Vaadhoo Island",
        description:
          "Vaadhoo Island is known for glowing beaches caused by tiny organisms in the water that light up at night.",
        tag: "Natural Wonder",
      },
    ],

    theme: {
      primary: "#0f766e",
      secondary: "#164e63",
      accent: "#06b6d4",
    },
  },
];
