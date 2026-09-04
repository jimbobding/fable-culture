export const eastAsiaPostcardData = {
  title: "Create Your East Asia Postcard",

  canvasShape: "postcard" as const,
  photoMode: "object" as const,

  intro:
    "Build your own East Asia postcard using cultural objects, food, wildlife, landmarks and traditional designs from across the region. Drag, resize, rotate and layer the pieces to create something unique.",

  theme: {
    primary: "#a83f35",
    secondary: "#263c32",
    background:
      "linear-gradient(135deg, #f4eddf 0%, #eee4ce 50%, #dce7df 100%)",
  },

  baseOptions: [],

  accessoryOptions: [
    // =========================================================
    // CHINA
    // =========================================================
    {
      id: "china-panda",
      label: "Panda",
      emoji: "🐼",
      group: "China",
      asset: "/images/games/east-asia-postcard/pieces/china/china-panda.png",
      description:
        "The giant panda is native to China and has become one of the country's most recognisable animals.",
      defaultPosition: { x: -60, y: 20 },
      layer: 5,
    },
    {
      id: "china-lantern",
      label: "Chinese Lantern",
      emoji: "🏮",
      group: "China",
      asset: "/images/games/east-asia-postcard/pieces/china/china-lantern.png",
      description:
        "Red lanterns are used in celebrations and festivals across China.",
      defaultPosition: { x: 60, y: -50 },
      layer: 6,
    },
    {
      id: "china-dragon",
      label: "Chinese Dragon",
      emoji: "🐉",
      group: "China",
      asset: "/images/games/east-asia-postcard/pieces/china/china-dragon.png",
      description:
        "Dragons are important symbols in Chinese culture and are associated with power, good fortune and strength.",
      defaultPosition: { x: 20, y: 0 },
      layer: 4,
    },
    {
      id: "china-fan",
      label: "Folding Fan",
      emoji: "🪭",
      group: "China",
      asset: "/images/games/east-asia-postcard/pieces/china/china-fan.png",
      description:
        "Folding fans have a long history in East Asian art, fashion and performance.",
      defaultPosition: { x: -70, y: 60 },
      layer: 7,
    },
    {
      id: "china-dumplings",
      label: "Dumplings",
      emoji: "🥟",
      group: "China",
      asset:
        "/images/games/east-asia-postcard/pieces/china/china-dumplings.png",
      description:
        "Dumplings are eaten across China and are especially associated with family meals and celebrations.",
      defaultPosition: { x: 70, y: 60 },
      layer: 7,
    },

    // =========================================================
    // JAPAN
    // =========================================================
    {
      id: "japan-torii",
      label: "Torii Gate",
      emoji: "⛩️",
      group: "Japan",
      asset: "/images/games/east-asia-postcard/pieces/japan/japan-torii.png",
      description:
        "Torii gates traditionally mark the entrance to sacred spaces at Shinto shrines in Japan.",
      defaultPosition: { x: -50, y: 0 },
      layer: 4,
    },
    {
      id: "japan-sakura",
      label: "Cherry Blossom",
      emoji: "🌸",
      group: "Japan",
      asset: "/images/games/east-asia-postcard/pieces/japan/japan-sakura.png",
      description:
        "Cherry blossom season is celebrated across Japan and is closely connected with springtime hanami traditions.",
      defaultPosition: { x: 60, y: -55 },
      layer: 6,
    },
    {
      id: "japan-sushi",
      label: "Sushi",
      emoji: "🍣",
      group: "Japan",
      asset: "/images/games/east-asia-postcard/pieces/japan/japan-sushi.png",
      description:
        "Sushi is one of Japan's best-known food traditions and includes many different regional and modern varieties.",
      defaultPosition: { x: 65, y: 55 },
      layer: 7,
    },
    {
      id: "japan-koinobori",
      label: "Koinobori",
      emoji: "🎏",
      group: "Japan",
      asset:
        "/images/games/east-asia-postcard/pieces/japan/japan-koinobori.png",
      description:
        "Koinobori are colourful carp-shaped streamers displayed in Japan around Children's Day.",
      defaultPosition: { x: -65, y: -45 },
      layer: 6,
    },
    {
      id: "japan-fuji",
      label: "Mount Fuji",
      emoji: "🗻",
      group: "Japan",
      asset: "/images/games/east-asia-postcard/pieces/japan/japan-fuji.png",
      description:
        "Mount Fuji is Japan's highest mountain and one of the country's most recognisable landmarks.",
      defaultPosition: { x: 0, y: 35 },
      layer: 3,
    },

    // =========================================================
    // SOUTH KOREA
    // =========================================================
    {
      id: "south-korea-hanbok",
      label: "Hanbok",
      emoji: "👘",
      group: "South Korea",
      asset:
        "/images/games/east-asia-postcard/pieces/south-korea/south-korea-hanbok.png",
      description:
        "Hanbok is traditional Korean clothing, recognised for its flowing shapes, colours and distinctive design.",
      defaultPosition: { x: -55, y: 10 },
      layer: 6,
    },
    {
      id: "south-korea-kimchi",
      label: "Kimchi",
      emoji: "🥬",
      group: "South Korea",
      asset:
        "/images/games/east-asia-postcard/pieces/south-korea/south-korea-kimchi.png",
      description:
        "Kimchi is a fermented vegetable dish with many regional varieties and an important place in Korean food culture.",
      defaultPosition: { x: 60, y: 55 },
      layer: 7,
    },
    {
      id: "south-korea-palace",
      label: "Korean Palace",
      emoji: "🏯",
      group: "South Korea",
      asset:
        "/images/games/east-asia-postcard/pieces/south-korea/south-korea-palace.png",
      description:
        "Historic Korean palaces preserve architecture connected with the Joseon dynasty and Korea's royal history.",
      defaultPosition: { x: 0, y: 20 },
      layer: 3,
    },
    {
      id: "south-korea-drum",
      label: "Traditional Drum",
      emoji: "🥁",
      group: "South Korea",
      asset:
        "/images/games/east-asia-postcard/pieces/south-korea/south-korea-drum.png",
      description:
        "Traditional drums are used in Korean music, performance and celebrations.",
      defaultPosition: { x: -60, y: 55 },
      layer: 7,
    },
    {
      id: "south-korea-magpie",
      label: "Korean Magpie",
      emoji: "🐦",
      group: "South Korea",
      asset:
        "/images/games/east-asia-postcard/pieces/south-korea/south-korea-magpie.png",
      description:
        "The magpie appears in Korean folklore and traditional art and is often associated with good news.",
      defaultPosition: { x: 65, y: -45 },
      layer: 6,
    },

    // =========================================================
    // NORTH KOREA
    // =========================================================
    {
      id: "north-korea-paektu",
      label: "Mount Paektu",
      emoji: "🏔️",
      group: "North Korea",
      asset:
        "/images/games/east-asia-postcard/pieces/north-korea/north-korea-paektu.png",
      description:
        "Mount Paektu is a volcanic mountain on the North Korea–China border with deep cultural significance across Korea.",
      defaultPosition: { x: 0, y: 30 },
      layer: 3,
    },
    {
      id: "north-korea-magnolia",
      label: "Magnolia",
      emoji: "🌸",
      group: "North Korea",
      asset:
        "/images/games/east-asia-postcard/pieces/north-korea/north-korea-magnolia.png",
      description:
        "The magnolia is closely associated with North Korea and is used as a national floral symbol.",
      defaultPosition: { x: 55, y: -50 },
      layer: 6,
    },
    {
      id: "north-korea-choson-ot",
      label: "Chosŏn-ot",
      emoji: "👘",
      group: "North Korea",
      asset:
        "/images/games/east-asia-postcard/pieces/north-korea/north-korea-choson-ot.png",
      description:
        "Traditional Korean clothing is commonly known in North Korea as chosŏn-ot.",
      defaultPosition: { x: -55, y: 10 },
      layer: 6,
    },
    {
      id: "north-korea-naengmyeon",
      label: "Pyongyang Naengmyeon",
      emoji: "🍜",
      group: "North Korea",
      asset:
        "/images/games/east-asia-postcard/pieces/north-korea/north-korea-naengmyeon.png",
      description:
        "Pyongyang-style naengmyeon is a cold noodle dish strongly associated with the North Korean capital.",
      defaultPosition: { x: 60, y: 55 },
      layer: 7,
    },
    {
      id: "north-korea-arch-of-triumph",
      label: "Arch of Triumph",
      emoji: "🏛️",
      group: "North Korea",
      asset:
        "/images/games/east-asia-postcard/pieces/north-korea/north-korea-arch-of-triumph.png",
      description:
        "Pyongyang's Arch of Triumph is one of the city's most recognisable monumental landmarks.",
      defaultPosition: { x: -10, y: 20 },
      layer: 4,
    },

    // =========================================================
    // MONGOLIA
    // =========================================================
    {
      id: "mongolia-horse",
      label: "Mongolian Horse",
      emoji: "🐎",
      group: "Mongolia",
      asset:
        "/images/games/east-asia-postcard/pieces/mongolia/mongolia-horse.png",
      description:
        "Horses have played a central role in Mongolian transport, herding, sport and history for centuries.",
      defaultPosition: { x: -45, y: 25 },
      layer: 6,
    },
    {
      id: "mongolia-eagle",
      label: "Golden Eagle",
      emoji: "🦅",
      group: "Mongolia",
      asset:
        "/images/games/east-asia-postcard/pieces/mongolia/mongolia-eagle.png",
      description:
        "Golden eagles are used by some Kazakh hunters in western Mongolia in a tradition passed through generations.",
      defaultPosition: { x: 60, y: -50 },
      layer: 7,
    },
    {
      id: "mongolia-ger",
      label: "Ger",
      emoji: "⛺",
      group: "Mongolia",
      asset:
        "/images/games/east-asia-postcard/pieces/mongolia/mongolia-ger.png",
      description:
        "A ger is a portable circular home designed for life on the Mongolian steppe.",
      defaultPosition: { x: 20, y: 30 },
      layer: 4,
    },
    {
      id: "mongolia-bow",
      label: "Mongolian Bow",
      emoji: "🏹",
      group: "Mongolia",
      asset:
        "/images/games/east-asia-postcard/pieces/mongolia/mongolia-bow.png",
      description:
        "Archery has a long history in Mongolia and remains one of the traditional sports of Naadam.",
      defaultPosition: { x: -60, y: 55 },
      layer: 7,
    },
    {
      id: "mongolia-camel",
      label: "Bactrian Camel",
      emoji: "🐫",
      group: "Mongolia",
      asset:
        "/images/games/east-asia-postcard/pieces/mongolia/mongolia-camel.png",
      description:
        "Two-humped Bactrian camels are well adapted to the harsh climate of Mongolia's Gobi region.",
      defaultPosition: { x: 60, y: 45 },
      layer: 6,
    },
    {
      id: "mongolia-hat",
      label: "Traditional Mongolian Hat",
      emoji: "🎩",
      group: "Mongolia",
      asset:
        "/images/games/east-asia-postcard/pieces/mongolia/mongolia-hat.png",
      description:
        "Traditional Mongolian hats come in a variety of shapes and styles and can reflect region, occasion and heritage.",
      defaultPosition: { x: -40, y: -45 },
      layer: 7,
    },

    // =========================================================
    // TAIWAN
    // =========================================================
    {
      id: "taiwan-black-bear",
      label: "Formosan Black Bear",
      emoji: "🐻",
      group: "Taiwan",
      asset:
        "/images/games/east-asia-postcard/pieces/taiwan/taiwan-black-bear.png",
      description:
        "The Formosan black bear is found only in Taiwan and is recognised by its distinctive white chest marking.",
      defaultPosition: { x: -50, y: 25 },
      layer: 6,
    },
    {
      id: "taiwan-bubble-tea",
      label: "Bubble Tea",
      emoji: "🧋",
      group: "Taiwan",
      asset:
        "/images/games/east-asia-postcard/pieces/taiwan/taiwan-bubble-tea.png",
      description:
        "Bubble tea developed in Taiwan and has since become popular around the world.",
      defaultPosition: { x: 60, y: 50 },
      layer: 7,
    },
    {
      id: "taiwan-lantern",
      label: "Taiwanese Lantern",
      emoji: "🏮",
      group: "Taiwan",
      asset:
        "/images/games/east-asia-postcard/pieces/taiwan/taiwan-lantern.png",
      description:
        "Lanterns feature in celebrations across Taiwan, including major annual lantern festivals.",
      defaultPosition: { x: 60, y: -50 },
      layer: 6,
    },
    {
      id: "taiwan-pineapple",
      label: "Pineapple",
      emoji: "🍍",
      group: "Taiwan",
      asset:
        "/images/games/east-asia-postcard/pieces/taiwan/taiwan-pineapple.png",
      description:
        "Pineapples are grown in Taiwan and also appear in popular Taiwanese foods such as pineapple cakes.",
      defaultPosition: { x: -60, y: 55 },
      layer: 7,
    },
    {
      id: "taiwan-temple",
      label: "Taiwanese Temple",
      emoji: "🏯",
      group: "Taiwan",
      asset: "/images/games/east-asia-postcard/pieces/taiwan/taiwan-temple.png",
      description:
        "Taiwan is home to colourful temples with elaborate roofs, carvings and decorations connected with different religious traditions.",
      defaultPosition: { x: 0, y: 20 },
      layer: 3,
    },

    // =========================================================
    // STAMPS
    // Only one stamp can be selected at a time
    // =========================================================
    {
      id: "china-stamp",
      label: "China Stamp",
      emoji: "📮",
      description: "An illustrated postage stamp inspired by China.",
      asset:
        "/images/games/east-asia-postcard/pieces/stamps/china/china-stamp.png",
      group: "Stamps",
      exclusiveGroup: "postage-stamp",
      layer: 10,
    },
    {
      id: "china-flag-stamp",
      label: "China Flag Stamp",
      emoji: "📮",
      description: "A postage stamp featuring the flag of China.",
      asset:
        "/images/games/east-asia-postcard/pieces/stamps/china/china-flag-stamp.png",
      group: "Stamps",
      exclusiveGroup: "postage-stamp",
      layer: 10,
    },
    {
      id: "japan-stamp",
      label: "Japan Stamp",
      emoji: "📮",
      description: "An illustrated postage stamp inspired by Japan.",
      asset:
        "/images/games/east-asia-postcard/pieces/stamps/japan/japan-stamp.png",
      group: "Stamps",
      exclusiveGroup: "postage-stamp",
      layer: 10,
    },
    {
      id: "japan-flag-stamp",
      label: "Japan Flag Stamp",
      emoji: "📮",
      description: "A postage stamp featuring the flag of Japan.",
      asset:
        "/images/games/east-asia-postcard/pieces/stamps/japan/japan-flag-stamp.png",
      group: "Stamps",
      exclusiveGroup: "postage-stamp",
      layer: 10,
    },
    {
      id: "south-korea-stamp",
      label: "South Korea Stamp",
      emoji: "📮",
      description: "An illustrated postage stamp inspired by South Korea.",
      asset:
        "/images/games/east-asia-postcard/pieces/stamps/south-korea/south-korea-stamp.png",
      group: "Stamps",
      exclusiveGroup: "postage-stamp",
      layer: 10,
    },
    {
      id: "south-korea-flag-stamp",
      label: "South Korea Flag Stamp",
      emoji: "📮",
      description: "A postage stamp featuring the flag of South Korea.",
      asset:
        "/images/games/east-asia-postcard/pieces/stamps/south-korea/south-korea-flag-stamp.png",
      group: "Stamps",
      exclusiveGroup: "postage-stamp",
      layer: 10,
    },
    {
      id: "north-korea-stamp",
      label: "North Korea Stamp",
      emoji: "📮",
      description: "An illustrated postage stamp inspired by North Korea.",
      asset:
        "/images/games/east-asia-postcard/pieces/stamps/north-korea/north-korea-stamp.png",
      group: "Stamps",
      exclusiveGroup: "postage-stamp",
      layer: 10,
    },
    {
      id: "north-korea-flag-stamp",
      label: "North Korea Flag Stamp",
      emoji: "📮",
      description: "A postage stamp featuring the flag of North Korea.",
      asset:
        "/images/games/east-asia-postcard/pieces/stamps/north-korea/north-korea-flag-stamp.png",
      group: "Stamps",
      exclusiveGroup: "postage-stamp",
      layer: 10,
    },
    {
      id: "mongolia-stamp",
      label: "Mongolia Stamp",
      emoji: "📮",
      description: "An illustrated postage stamp inspired by Mongolia.",
      asset:
        "/images/games/east-asia-postcard/pieces/stamps/mongolia/mongolia-stamp.png",
      group: "Stamps",
      exclusiveGroup: "postage-stamp",
      layer: 10,
    },
    {
      id: "mongolia-flag-stamp",
      label: "Mongolia Flag Stamp",
      emoji: "📮",
      description: "A postage stamp featuring the flag of Mongolia.",
      asset:
        "/images/games/east-asia-postcard/pieces/stamps/mongolia/mongolia-flag-stamp.png",
      group: "Stamps",
      exclusiveGroup: "postage-stamp",
      layer: 10,
    },
    {
      id: "taiwan-stamp",
      label: "Taiwan Stamp",
      emoji: "📮",
      description: "An illustrated postage stamp inspired by Taiwan.",
      asset:
        "/images/games/east-asia-postcard/pieces/stamps/taiwan/taiwan-stamp.png",
      group: "Stamps",
      exclusiveGroup: "postage-stamp",
      layer: 10,
    },
    {
      id: "taiwan-flag-stamp",
      label: "Taiwan Flag Stamp",
      emoji: "📮",
      description: "A postage stamp featuring the flag of Taiwan.",
      asset:
        "/images/games/east-asia-postcard/pieces/stamps/taiwan/taiwan-flag-stamp.png",
      group: "Stamps",
      exclusiveGroup: "postage-stamp",
      layer: 10,
    },
  ],

  backgroundOptions: [
    {
      id: "china",
      label: "China",
      background: "linear-gradient(135deg, #b33a32 0%, #d6b76f 100%)",
    },
    {
      id: "japan",
      label: "Japan",
      background: "linear-gradient(135deg, #f7f2e8 0%, #d88f8b 100%)",
    },
    {
      id: "south-korea",
      label: "South Korea",
      background: "linear-gradient(135deg, #f4f6f7 0%, #7893ad 100%)",
    },
    {
      id: "north-korea",
      label: "North Korea",
      background: "linear-gradient(135deg, #a52b35 0%, #314e70 100%)",
    },
    {
      id: "mongolia",
      label: "Mongolia",
      background: "linear-gradient(135deg, #6da4c7 0%, #d7b56d 100%)",
    },
    {
      id: "taiwan",
      label: "Taiwan",
      background: "linear-gradient(135deg, #467d68 0%, #c36a62 100%)",
    },
  ],

  finalMessage:
    "East Asia is home to many different cultures, landscapes, foods, traditions and histories. Your postcard can combine pieces from across the region while helping you discover where each object comes from.",

  labels: {
    base: "Postcard Style",
    accessories: "Postcard Pieces",
    randomise: "Randomise Postcard",
    reset: "Reset Postcard",
    save: "Save My Postcard",
    selfieTitle: "📷 Add Yourself",
    uploadHelp:
      "Upload a photo or take a selfie if you want to become part of your East Asia postcard.",
    emptyMessage: "Choose some East Asia pieces and build your postcard.",
  },

  activity: "east-asia-postcard",

  downloadFilename: "east-asia-postcard.png",

  submissionMessage:
    "Your East Asia postcard has been submitted and is waiting for approval.",
};
