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
      id: "colourful-full-mask",
      label: "Colourful Mask",
      emoji: "🎭",
      asset: "/images/games/carnival/mask/colourful-full-mask.png",
      description: "A colourful Carnival mask.",
      defaultPosition: { x: 0, y: -10 },
      layer: 5,
    },
    {
      id: "mask-base1",
      label: "Classic Mask",
      emoji: "🎭",
      asset: "/images/games/carnival/mask/mask-base1.png",
      description: "A classic Carnival mask.",
      defaultPosition: { x: 0, y: -10 },
      layer: 5,
    },
    {
      id: "mask-gold",
      label: "Gold Mask",
      emoji: "🎭",
      asset: "/images/games/carnival/mask/mask-gold.webp",
      description: "A bright gold Carnival mask.",
      defaultPosition: { x: 0, y: -10 },
      layer: 5,
    },
  ],

  accessoryOptions: [
    {
      id: "red-feathers",
      label: "Red Feathers",
      emoji: "🪶",
      asset: "/images/games/carnival/accessory/red-feathers.webp",
      description: "Bright feathers used in Carnival costumes.",
      defaultPosition: { x: 40, y: -20 },
      layer: 3,
    },
    {
      id: "colourful-feather",
      label: "Colourful Feather",
      emoji: "🦚",
      asset: "/images/games/carnival/accessory/colourful-feather.webp",
      description: "A colourful Carnival decoration.",
      defaultPosition: { x: -40, y: -20 },
      layer: 3,
    },
    {
      id: "colourful-crown",
      label: "Colourful Crown",
      emoji: "👑",
      asset: "/images/games/carnival/accessory/colourful-crown.webp",
      description: "A vibrant Carnival crown.",
      defaultPosition: { x: 0, y: -60 },
      layer: 4,
    },
  ],

  backgroundOptions: [
    {
      id: "parade",
      label: "Carnival Parade",
      background: "linear-gradient(135deg, #f97316, #ec4899, #8b5cf6)",
    },
    {
      id: "beach",
      label: "Beach",
      background: "linear-gradient(135deg, #38bdf8, #fef3c7)",
    },
    {
      id: "stage",
      label: "Festival Stage",
      background: "linear-gradient(135deg, #111827, #7c3aed)",
    },
  ],

  finalMessage:
    "Carnival celebrations across the Caribbean combine music, dance, costume and community. Every costume is unique and helps tell a story.",
};
