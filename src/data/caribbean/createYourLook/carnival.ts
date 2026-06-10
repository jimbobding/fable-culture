export const carnivalLookData = {
  title: "Create Your Own Carnival Look",

  intro:
    "Carnival is a celebration of music, movement, colour and culture. Create your own Carnival-inspired look and discover how people express themselves through costume and creativity.",

  theme: {
    primary: "#f97316",
    secondary: "#7c3aed",
    background:
      "linear-gradient(135deg, #fff7ed 0%, #fef3c7 50%, #ede9fe 100%)",
  },

  baseOptions: [
    {
      id: "mask-base",
      label: "Carnival Mask",
      emoji: "🎭",
      asset: "/images/games/carnival/mask-base.png",
      description: "A traditional Carnival mask.",
    },

    {
      id: "mask-gold",
      label: "Golden Mask",
      emoji: "🎭",
      asset: "/images/games/carnival/mask-gold.webp",
      description: "A bright and colourful celebration mask.",
    },

    {
      id: "mask-scary",
      label: "Traditional Character Mask",
      emoji: "🎭",
      asset: "/images/games/carnival/mask-scary.png",
      description: "Inspired by traditional Carnival characters.",
    },
  ],

  accessoryOptions: [
    {
      id: "red-feathers",
      label: "Red Feathers",
      emoji: "🪶",
      asset: "/images/games/carnival/red-feathers.webp",
      description: "Bright feathers used in Carnival costumes.",
      defaultPosition: {
        x: 40,
        y: -20,
      },
      layer: 3,
    },

    {
      id: "colourful-feather",
      label: "Colourful Feather",
      emoji: "🦚",
      asset: "/images/games/carnival/coourful-feather.webp",
      description: "A colourful Carnival decoration.",
      defaultPosition: {
        x: -40,
        y: -20,
      },
      layer: 3,
    },

    {
      id: "colourful-crown",
      label: "Colourful Crown",
      emoji: "👑",
      asset: "/images/games/carnival/colourful-crown.webp",
      description: "A vibrant Carnival crown.",
      defaultPosition: {
        x: 0,
        y: -60,
      },
      layer: 4,
    },
  ],

  colourOptions: [
    {
      id: "gold",
      label: "Gold",
      emoji: "🟡",
      description: "Celebration and energy.",
    },
    {
      id: "red",
      label: "Red",
      emoji: "🔴",
      description: "Passion and excitement.",
    },
    {
      id: "green",
      label: "Green",
      emoji: "🟢",
      description: "Nature and growth.",
    },
    {
      id: "purple",
      label: "Purple",
      emoji: "🟣",
      description: "Creativity and imagination.",
    },
  ],

  finalMessage:
    "Carnival celebrations across the Caribbean combine music, dance, costume and community. Every costume is unique and helps tell a story.",
};
