import type { JourneyConfig } from "@/components/shared/deep-dive/journey/types";

export const amazonJourney: JourneyConfig = {
  slug: "amazon",

  regionName: "South America",
  regionHref: "/south-america",

  title: "FOLLOW THE AMAZON",
  titleAccent: "From the Andes to the Atlantic",

  eyebrow: "Fable Culture • River Expedition",

  intro:
    "Follow the water across South America. Listen to the rainforest, discover animals hiding beside the river and meet some of the people and places connected by this enormous water system.",

  startLabel: "The Andes",
  endLabel: "The Atlantic Ocean",

  visualStyle: "river",

  theme: {
    background: "#F5E7B8",
    surface: "#FFF8DC",

    text: "#17382C",
    mutedText: "#617066",

    primary: "#16745B",
    secondary: "#199DB0",
    accent: "#F4B942",
    dark: "#0B3D35",

    path: "#159CB5",
    pathLight: "#70D5D9",
    pathDark: "#086B7B",
  },

  /* =====================================================
     ILLUSTRATED MAP SCENERY

     These percentages place the animals down the entire
     expedition rather than attaching them to cards.

     Most are hidden on mobile so the clean phone layout
     we already fixed stays clean.
  ====================================================== */

  decorations: [
    {
      id: "mountain-eagle",
      content: "🦅",
      top: 2.5,
      left: 67,
      size: "medium",
      rotation: 8,
      hideOnMobile: true,
    },
    {
      id: "early-leaves",
      content: "🌿",
      top: 8,
      left: 53,
      size: "large",
      rotation: -12,
      opacity: 0.8,
      hideOnMobile: true,
    },
    {
      id: "butterfly-one",
      content: "🦋",
      top: 13,
      left: 73,
      size: "small",
      rotation: 12,
      hideOnMobile: true,
    },
    {
      id: "macaw-one",
      content: "🦜",
      top: 18,
      left: 27,
      size: "medium",
      rotation: -8,
      hideOnMobile: true,
    },
    {
      id: "monkey-one",
      content: "🐒",
      top: 23,
      left: 70,
      size: "medium",
      rotation: 6,
      hideOnMobile: true,
    },
    {
      id: "frog-one",
      content: "🐸",
      top: 29,
      left: 45,
      size: "small",
      rotation: -5,
      hideOnMobile: true,
    },
    {
      id: "fish-one",
      content: "🐟",
      top: 33,
      left: 52,
      size: "small",
      rotation: -8,
      opacity: 0.9,
      hideOnMobile: true,
    },
    {
      id: "caiman-one",
      content: "🐊",
      top: 38,
      left: 48,
      size: "large",
      rotation: 7,
      hideOnMobile: true,
    },
    {
      id: "butterfly-two",
      content: "🦋",
      top: 42,
      left: 78,
      size: "small",
      rotation: -15,
      hideOnMobile: true,
    },
    {
      id: "turtle-one",
      content: "🐢",
      top: 47,
      left: 43,
      size: "medium",
      rotation: -6,
      hideOnMobile: true,
    },
    {
      id: "frog-two",
      content: "🐸",
      top: 51,
      left: 69,
      size: "medium",
      rotation: 8,
      hideOnMobile: true,
    },
    {
      id: "rainforest-leaf-one",
      content: "🌿",
      top: 55,
      left: 21,
      size: "giant",
      rotation: -18,
      opacity: 0.72,
      hideOnMobile: true,
    },
    {
      id: "dolphin-one",
      content: "🐬",
      top: 60,
      left: 51,
      size: "large",
      rotation: -9,
      hideOnMobile: true,
    },
    {
      id: "fish-two",
      content: "🐟",
      top: 62,
      left: 58,
      size: "small",
      rotation: 12,
      opacity: 0.85,
      hideOnMobile: true,
    },
    {
      id: "river-leaf-two",
      content: "🌱",
      top: 66,
      left: 75,
      size: "medium",
      rotation: 14,
      hideOnMobile: true,
    },
    {
      id: "macaw-two",
      content: "🦜",
      top: 70,
      left: 28,
      size: "medium",
      rotation: 7,
      hideOnMobile: true,
    },
    {
      id: "dolphin-two",
      content: "🐬",
      top: 75,
      left: 47,
      size: "medium",
      rotation: 10,
      hideOnMobile: true,
    },
    {
      id: "caiman-two",
      content: "🐊",
      top: 80,
      left: 54,
      size: "medium",
      rotation: -8,
      hideOnMobile: true,
    },
    {
      id: "butterfly-three",
      content: "🦋",
      top: 84,
      left: 24,
      size: "small",
      rotation: 18,
      hideOnMobile: true,
    },
    {
      id: "fish-three",
      content: "🐟",
      top: 89,
      left: 48,
      size: "small",
      rotation: -5,
      hideOnMobile: true,
    },
    {
      id: "turtle-two",
      content: "🐢",
      top: 93,
      left: 55,
      size: "medium",
      rotation: 8,
      hideOnMobile: true,
    },
    {
      id: "final-bird",
      content: "🦜",
      top: 96,
      left: 72,
      size: "medium",
      rotation: -9,
      hideOnMobile: true,
    },
  ],

  /* =====================================================
     BIG MAP FACTS

     These sit in the scenery rather than creating another
     information-heavy section.
  ====================================================== */

  mapFacts: [
    {
      id: "river-storage",
      value: "38%",
      label: "of the world's river-water storage",
      detail: "NASA estimate for the Amazon basin, averaged across 1980–2009.",
      icon: "💧",
      top: 15,
      left: 80,
      align: "center",
      size: "large",
      rotation: 2,
    },
    {
      id: "amazon-people",
      value: "47M",
      label: "people live across the Amazon region",
      detail: "The Amazon is home as well as rainforest.",
      icon: "🏠",
      top: 57,
      left: 18,
      align: "center",
      size: "large",
      rotation: -2,
    },
    {
      id: "indigenous-groups",
      value: "410",
      label: "Indigenous ethnic groups",
      detail: "Nearly 2.2 million Indigenous people live across the region.",
      icon: "🛶",
      top: 65,
      left: 81,
      align: "center",
      size: "medium",
      rotation: 2,
    },
    {
      id: "languages",
      value: "300",
      label: "languages spoken across the region",
      detail: "A reminder of the Amazon's extraordinary cultural diversity.",
      icon: "🗣️",
      top: 72,
      left: 18,
      align: "center",
      size: "medium",
      rotation: -2,
    },
    {
      id: "ocean-discharge",
      value: "18%",
      label: "of global river discharge to the oceans",
      detail: "NASA estimate for the Amazon basin, averaged across 1980–2009.",
      icon: "🌊",
      top: 91,
      left: 80,
      align: "center",
      size: "large",
      rotation: 2,
    },
  ],

  stops: [
    /* =====================================================
       01 — ANDES
    ====================================================== */

    {
      type: "landmark",
      id: "andes",

      side: "left",

      marker: "⛰️",
      eyebrow: "The journey begins",
      title: "Follow the water.",

      text: "Our journey starts high in the west of South America. Water from the Andes feeds streams and rivers that eventually become part of the enormous Amazon system.",

      largeLabel: "THE ANDES",
    },

    /* =====================================================
       02 — HEADWATERS
    ====================================================== */

    {
      type: "ambient",
      id: "mountain-water",

      side: "right",

      marker: "💧",
      eyebrow: "Sound stop",
      title: "Hear the journey begin.",

      text: "Before the Amazon becomes an enormous river, water begins its journey through much smaller streams and waterways.",

      audioSrc: "/audio/south-america/deep-dives/amazon/mountain-stream.mp3",

      buttonLabel: "Hear the water",

      prompt:
        "Close your eyes for a moment. What clues tell you that this is moving water?",
    },

    /* =====================================================
       03 — RIVER SYSTEM
    ====================================================== */

    {
      type: "fact",
      id: "rivers-join",

      side: "left",

      marker: "🗺️",
      eyebrow: "The river grows",
      title: "Rivers join rivers.",

      text: "Waterways from across the basin join larger rivers as the journey continues east. The Amazon is not simply one long channel — it is an enormous connected river system.",

      highlight: "Tributaries keep feeding the system as we travel downstream.",
    },

    /* =====================================================
       04 — RAINFOREST
    ====================================================== */

    {
      type: "ambient",
      id: "enter-rainforest",

      side: "right",

      marker: "🌿",
      eyebrow: "Entering the forest",
      title: "The soundtrack changes.",

      text: "Dense tropical forest now surrounds the waterways. Birds, insects, frogs and mammals can all contribute to the rainforest soundscape.",

      audioSrc: "/audio/south-america/deep-dives/amazon/rainforest-day.mp3",

      buttonLabel: "Enter the rainforest",

      prompt:
        "How many different sounds can you pick out? Don't worry about naming them yet.",
    },

    /* =====================================================
       05 — HOWLER MONKEY
    ====================================================== */

    {
      type: "sound",
      id: "howler-monkey",

      side: "left",

      marker: "👂",
      eyebrow: "Mystery sound #1",
      title: "Something is shouting in the trees...",

      text: "Dense forest can make animals difficult to see. Sometimes hearing them is much easier.",

      audioSrc: "/audio/south-america/deep-dives/amazon/howler-monkey.mp3",

      question: "What do you think made that enormous noise?",

      answers: [
        {
          id: "jaguar",
          label: "Jaguar",
        },
        {
          id: "howler",
          label: "Howler monkey",
          correct: true,
        },
        {
          id: "macaw",
          label: "Macaw",
        },
        {
          id: "frog",
          label: "Frog",
        },
      ],

      revealIcon: "🐒",
      revealTitle: "Howler monkey!",

      revealText:
        "Howler monkeys are famous for extremely powerful calls. Our recording was made in Costa Rica, so it demonstrates a howler monkey's sound rather than claiming to be a recording from this exact point on the Amazon.",
    },

    /* =====================================================
       06 — FOREST LAYERS
    ====================================================== */

    {
      type: "reveal",
      id: "forest-layers",

      side: "right",

      marker: "🌳",
      eyebrow: "Look up!",
      title: "The forest has different levels.",

      text: "Conditions change dramatically as you travel from the forest floor towards the tops of the tallest trees. Tap each level.",

      items: [
        {
          id: "floor",
          icon: "🍂",
          title: "Forest floor",
          reveal:
            "Only limited sunlight reaches the ground beneath dense vegetation. Fallen material is broken down and nutrients are recycled.",
        },
        {
          id: "understory",
          icon: "🌿",
          title: "Understory",
          reveal:
            "Below the canopy, plants grow in lower light and animals move through dense vegetation.",
        },
        {
          id: "canopy",
          icon: "🌳",
          title: "Canopy",
          reveal:
            "Branches and leaves form a huge roof over much of the forest. Fruit, flowers and leaves support an enormous variety of life.",
        },
        {
          id: "emergent",
          icon: "☀️",
          title: "Emergent layer",
          reveal:
            "Some of the tallest trees rise above the main canopy into stronger sunlight and wind.",
        },
      ],
    },

    /* =====================================================
       07 — MACAW
    ====================================================== */

    {
      type: "sound",
      id: "macaw",

      side: "left",

      marker: "🪶",
      eyebrow: "Mystery sound #2",
      title: "There's noise above us.",

      text: "We're looking towards the canopy now. Listen before you choose.",

      audioSrc: "/audio/south-america/deep-dives/amazon/macaw.mp3",

      question: "Which animal could be calling above the river?",

      answers: [
        {
          id: "sloth",
          label: "Sloth",
        },
        {
          id: "caiman",
          label: "Caiman",
        },
        {
          id: "macaw",
          label: "Macaw",
          correct: true,
        },
        {
          id: "dolphin",
          label: "River dolphin",
        },
      ],

      revealIcon: "🦜",
      revealTitle: "Macaw!",

      revealText:
        "Macaws are large parrots. Their loud calls help them communicate in an environment where dense vegetation can make other birds difficult to see.",
    },

    /* =====================================================
       08 — WATER SCALE
    ====================================================== */

    {
      type: "fact",
      id: "river-scale",

      side: "right",

      marker: "💦",
      eyebrow: "Look at the river now",
      title: "This is getting enormous.",

      text: "A NASA-led study estimated that the Amazon basin holds about 38% of the water stored in the world's rivers — more than any other hydrological region evaluated.",

      highlight:
        "The little waterways we started beside are now part of a vast continental system.",
    },

    /* =====================================================
       09 — RAIN
    ====================================================== */

    {
      type: "ambient",
      id: "rainstorm",

      side: "left",

      marker: "🌧️",
      eyebrow: "Weather incoming",
      title: "Here comes the rain.",

      text: "The river is only one part of the water story. Rainfall, vegetation, soils, waterways and the atmosphere are connected.",

      audioSrc: "/audio/south-america/deep-dives/amazon/tropical-rain.mp3",

      buttonLabel: "Hear the storm",

      prompt: "Listen for rain, wind and anything else happening behind them.",
    },

    /* =====================================================
       10 — FROG
    ====================================================== */

    {
      type: "sound",
      id: "three-striped-poison-frog",

      side: "right",

      marker: "❓",
      eyebrow: "Mystery sound #3",
      title: "What on earth is THAT?",

      text: "Forget the classic cartoon 'ribbit'. Rainforest animals don't always sound how you expect.",

      audioSrc:
        "/audio/south-america/deep-dives/amazon/three-striped-poison-frog.mp3",

      question: "What kind of animal is making this strange call?",

      answers: [
        {
          id: "bird",
          label: "Bird",
        },
        {
          id: "insect",
          label: "Insect",
        },
        {
          id: "frog",
          label: "Frog",
          correct: true,
        },
        {
          id: "monkey",
          label: "Monkey",
        },
      ],

      revealIcon: "🐸",
      revealTitle: "Three-striped poison frog!",

      revealText:
        "Ameerega trivittata occurs in parts of the Amazon basin. Its unusual call is a good reminder that frogs can sound very different from the familiar 'ribbit'.",
    },

    /* =====================================================
       11 — NIGHT
    ====================================================== */

    {
      type: "ambient",
      id: "amazon-night",

      side: "left",

      marker: "🌙",
      eyebrow: "Night falls",
      title: "Don't guess this one. Just listen.",

      text: "The forest doesn't become silent when daylight disappears. A different collection of animals becomes easier to hear.",

      audioSrc: "/audio/south-america/deep-dives/amazon/rainforest-night.mp3",

      buttonLabel: "Hear the forest at night",

      prompt: "Give it ten seconds. How many separate sounds can you notice?",
    },

    /* =====================================================
       12 — FLOODED FOREST
    ====================================================== */

    {
      type: "reveal",
      id: "flooded-forest",

      side: "right",

      marker: "🌊",
      eyebrow: "The river rises",
      title: "The forest can become part of the river.",

      text: "Seasonal flooding transforms parts of the Amazon floodplain. Tap below to see why that matters.",

      items: [
        {
          id: "trees",
          icon: "🌳",
          title: "Flooded trees",
          reveal:
            "In seasonally flooded várzea, rising water can move through areas that are dry or much shallower at other times of year.",
        },
        {
          id: "fish",
          icon: "🐟",
          title: "Fish move in",
          reveal:
            "Changing water levels alter where fish can travel and feed, reshaping the habitat available to aquatic animals.",
        },
        {
          id: "dolphins",
          icon: "🐬",
          title: "Even dolphins",
          reveal:
            "Research at Mamirauá in Brazil found Amazon river dolphins using seasonal floodplain habitats. Females and calves were especially associated with some flooded-forest areas.",
        },
      ],
    },

    /* =====================================================
       13 — PEOPLE
    ====================================================== */

    {
      type: "landmark",
      id: "people-live-here",

      side: "left",

      marker: "🛶",
      eyebrow: "A very important stop",
      title: "The Amazon is someone's home.",

      text: "The Amazon is not an empty wilderness. Around 47 million people live across the region, including Indigenous peoples, river communities and people living in towns and cities.",

      largeLabel: "PEOPLE + RIVER",
    },

    /* =====================================================
       14 — CULTURAL DIVERSITY
    ====================================================== */

    {
      type: "reveal",
      id: "amazon-people",

      side: "right",

      marker: "🗣️",
      eyebrow: "Many peoples, many cultures",
      title: "There isn't one 'Amazon culture'.",

      text: "The region contains extraordinary cultural and linguistic diversity. Tap to discover more.",

      items: [
        {
          id: "indigenous-population",
          icon: "🛶",
          title: "Nearly 2.2 million",
          reveal:
            "The Science Panel for the Amazon reports nearly 2.2 million Indigenous people across the Amazon region.",
        },
        {
          id: "groups",
          icon: "🌎",
          title: "410 ethnic groups",
          reveal:
            "Indigenous peoples across the region belong to hundreds of distinct groups, each with their own histories and identities.",
        },
        {
          id: "languages",
          icon: "🗣️",
          title: "Around 300 languages",
          reveal:
            "Hundreds of languages reflect the extraordinary cultural diversity of the Amazon region.",
        },
      ],
    },

    /* =====================================================
       15 — LIFE BESIDE THE WATER
    ====================================================== */

    {
      type: "reveal",
      id: "river-life",

      side: "left",

      marker: "🏠",
      eyebrow: "Life beside the water",
      title: "Why can the river matter to people?",

      text: "Life differs enormously across the Amazon, but waterways can play important roles for many communities.",

      items: [
        {
          id: "travel",
          icon: "🛶",
          title: "Travel",
          reveal:
            "In many places, rivers are major transport routes connecting communities separated by huge distances.",
        },
        {
          id: "food",
          icon: "🐟",
          title: "Food",
          reveal:
            "Rivers and floodplain environments support fisheries and other food systems.",
        },
        {
          id: "home",
          icon: "🏠",
          title: "Home",
          reveal:
            "The Amazon includes Indigenous territories, riverside settlements, towns and major cities.",
        },
        {
          id: "knowledge",
          icon: "🌱",
          title: "Knowledge",
          reveal:
            "Knowledge of plants, animals, waterways and seasons can be developed and passed between generations.",
        },
      ],
    },

    /* =====================================================
       16 — RIVER WATER
    ====================================================== */

    {
      type: "ambient",
      id: "river-water",

      side: "right",

      marker: "🛶",
      eyebrow: "Back on the water",
      title: "The river is our road.",

      text: "We've travelled a long way from the small waterways near the beginning of our journey. Listen to the water around us now.",

      audioSrc: "/audio/south-america/deep-dives/amazon/river-water.mp3",

      buttonLabel: "Hear the river",

      prompt:
        "Imagine travelling here by boat. What might you notice along the banks?",
    },

    /* =====================================================
       17 — RIVER DOLPHIN
    ====================================================== */

    {
      type: "reveal",
      id: "river-dolphin",

      side: "left",

      marker: "〰️",
      eyebrow: "Something moved!",
      title: "Did you see that in the water?",

      text: "Not all rainforest wildlife lives among the trees. Tap the ripple.",

      items: [
        {
          id: "dolphin",
          icon: "🐬",
          title: "Reveal the animal",
          reveal:
            "The boto, or Amazon river dolphin, is a freshwater dolphin. Research shows just how closely its movements can be connected to seasonal changes in river and floodplain habitats.",
        },
      ],
    },

    /* =====================================================
       18 — CHANGING FOREST
    ====================================================== */

    {
      type: "reveal",
      id: "changing-forest",

      side: "right",

      marker: "🌳",
      eyebrow: "The landscape changes",
      title: "The Amazon faces difficult pressures.",

      text: "The future of the region involves forests, rivers, livelihoods, land, resources and the rights and needs of people who live there.",

      items: [
        {
          id: "forest",
          icon: "🌳",
          title: "Forest",
          reveal:
            "Forest protection matters for habitats, water systems, carbon storage and communities whose lives and territories are connected to these landscapes.",
        },
        {
          id: "farming",
          icon: "🐄",
          title: "Agriculture",
          reveal:
            "Agricultural expansion, including cattle pasture, has contributed to forest loss in parts of the Amazon.",
        },
        {
          id: "mining",
          icon: "⛏️",
          title: "Mining",
          reveal:
            "Mining can provide economic activity while also creating serious pressures on forests, waterways and communities.",
        },
        {
          id: "roads",
          icon: "🛣️",
          title: "Infrastructure",
          reveal:
            "Infrastructure can connect people and economies while also opening previously remote areas to further development.",
        },
      ],
    },

    /* =====================================================
       19 — APPROACHING ATLANTIC
    ====================================================== */

    {
      type: "fact",
      id: "near-atlantic",

      side: "left",

      marker: "🌊",
      eyebrow: "Nearly there",
      title: "Now look at the size of it.",

      text: "The Amazon basin discharges more river water to the ocean than any other basin. NASA's study estimated about 18% of global river discharge to the oceans.",

      highlight:
        "Think back to the small mountain waterways where our journey began.",
    },

    /* =====================================================
       20 — FINAL CHOICE
    ====================================================== */

    {
      type: "choice",
      id: "future",

      side: "right",

      marker: "🧭",
      eyebrow: "Before we reach the ocean",
      title: "What would you protect?",

      text: "You've encountered water, forest, wildlife and people. Planning the future means thinking about several needs at the same time.",

      instruction: "Choose four priorities.",

      maxChoices: 4,

      options: [
        "Clean rivers",
        "Wildlife habitats",
        "Indigenous land rights",
        "Local communities",
        "Jobs and livelihoods",
        "Forest protection",
        "Food production",
        "Scientific research",
        "Transport",
        "Climate",
      ],

      completionText:
        "There isn't one simple issue here. The challenge is finding ways for people, wildlife, forests, rivers and livelihoods to have a future together.",
    },

    /* =====================================================
       21 — ATLANTIC
    ====================================================== */

    {
      type: "landmark",
      id: "atlantic",

      side: "left",

      marker: "🌊",
      eyebrow: "Journey complete",
      title: "The river meets the ocean.",

      text: "From high ground in the west, through forests, floodplains and communities, our journey has followed the water towards the Atlantic.",

      largeLabel: "ATLANTIC",
    },

    /* =====================================================
       22 — FINAL SOUND
    ====================================================== */

    {
      type: "ambient",
      id: "atlantic-sound",

      side: "right",

      marker: "🎧",
      eyebrow: "Final sound",
      title: "One last listen.",

      text: "We've reached the end of our route. The water we've been following is now meeting the Atlantic.",

      audioSrc: "/audio/south-america/deep-dives/amazon/atlantic-water.mp3",

      buttonLabel: "Hear the journey end",

      prompt:
        "Mountain water → rainforest → flooded forest → enormous river → ocean. You made it.",
    },
  ],
};

export default amazonJourney;
