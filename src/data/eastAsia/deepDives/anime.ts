import type { DeepDiveConfig } from "@/components/shared/deep-dive/types";

/**
 * ANIME DEEP DIVE
 *
 * This first version deliberately uses styled image placeholders rather than
 * hard-coding copyrighted anime artwork. When you source an image, add it to:
 *
 * /public/images/east-asia/deep-dives/anime/
 *
 * The custom Anime page can then read the image suggestions below and replace
 * the placeholders one by one.
 */

export const animeImagePlan = [
  {
    id: "hero",
    title: "Hero collage",
    subject: "A bold collage of recognisable anime imagery",
    suggestedFile: "/images/east-asia/deep-dives/anime/anime-hero.webp",
    ratio: "16:9",
  },
  {
    id: "astro-boy",
    title: "Astro Boy",
    subject: "Astro Boy / Tetsuwan Atom",
    suggestedFile: "/images/east-asia/deep-dives/anime/astro-boy.webp",
    ratio: "4:3",
  },
  {
    id: "dragon-ball",
    title: "Dragon Ball",
    subject: "Dragon Ball",
    suggestedFile: "/images/east-asia/deep-dives/anime/dragon-ball.webp",
    ratio: "4:5",
  },
  {
    id: "sailor-moon",
    title: "Sailor Moon",
    subject: "Sailor Moon",
    suggestedFile: "/images/east-asia/deep-dives/anime/sailor-moon.webp",
    ratio: "4:5",
  },
  {
    id: "pokemon",
    title: "Pokémon",
    subject: "Pokémon animation",
    suggestedFile: "/images/east-asia/deep-dives/anime/pokemon.webp",
    ratio: "4:3",
  },
  {
    id: "spirited-away",
    title: "Spirited Away",
    subject: "Official Studio Ghibli still from Spirited Away",
    suggestedFile: "/images/east-asia/deep-dives/anime/spirited-away.webp",
    ratio: "16:9",
  },
  {
    id: "naruto",
    title: "Naruto",
    subject: "Naruto",
    suggestedFile: "/images/east-asia/deep-dives/anime/naruto.webp",
    ratio: "4:5",
  },
  {
    id: "one-piece",
    title: "One Piece",
    subject: "One Piece",
    suggestedFile: "/images/east-asia/deep-dives/anime/one-piece.webp",
    ratio: "4:5",
  },
  {
    id: "demon-slayer",
    title: "Demon Slayer",
    subject: "Demon Slayer",
    suggestedFile: "/images/east-asia/deep-dives/anime/demon-slayer.webp",
    ratio: "4:5",
  },
  {
    id: "my-hero-academia",
    title: "My Hero Academia",
    subject: "My Hero Academia",
    suggestedFile: "/images/east-asia/deep-dives/anime/my-hero-academia.webp",
    ratio: "4:5",
  },
] as const;

export const animeFeaturedTitles = [
  {
    name: "Astro Boy",
    note: "A landmark television anime associated with Osamu Tezuka and the growth of TV anime in the 1960s.",
    imageId: "astro-boy",
  },
  {
    name: "Dragon Ball",
    note: "Action, adventure, comedy and spectacular battles helped turn Dragon Ball into an international phenomenon.",
    imageId: "dragon-ball",
  },
  {
    name: "Sailor Moon",
    note: "A hugely influential magical-girl series mixing friendship, comedy, romance and superhero-style action.",
    imageId: "sailor-moon",
  },
  {
    name: "Pokémon",
    note: "Games, animation, cards and characters combined into one of the world's best-known entertainment franchises.",
    imageId: "pokemon",
  },
  {
    name: "Spirited Away",
    note: "Studio Ghibli's fantasy film follows Chihiro through a mysterious spirit world.",
    imageId: "spirited-away",
  },
  {
    name: "Naruto",
    note: "A ninja adventure built around rivalry, friendship, perseverance and spectacular techniques.",
    imageId: "naruto",
  },
  {
    name: "One Piece",
    note: "A vast pirate adventure about Monkey D. Luffy and his crew searching for the legendary One Piece.",
    imageId: "one-piece",
  },
  {
    name: "Demon Slayer",
    note: "A modern hit known for dramatic sword fights, supernatural threats and highly polished animation.",
    imageId: "demon-slayer",
  },
] as const;

export const animeUsefulLinks = {
  drawing: [
    {
      label: "VIZ — Manga Creation 101",
      url: "https://www.viz.com/blog/posts/manga-creation-101",
      note: "A practical guide covering ideas, character designs, thumbnails, pencils, inks, tones and lettering.",
    },
    {
      label: "VIZ — Shonen Jump Guide to Making Manga",
      url: "https://www.viz.com/shonen-jump-guide-to-making-manga",
      note: "Advice and examples connected to creators and editors behind major manga series.",
    },
  ],
  images: [
    {
      label: "Studio Ghibli — Official Works Archive",
      url: "https://www.ghibli.jp/works/",
      note: "Official film pages and still-image galleries. A strong place to source a Ghibli image with a clear credit.",
    },
    {
      label: "Studio Ghibli — Spirited Away",
      url: "https://www.ghibli.jp/works/chihiro/",
      note: "Official Spirited Away page with a still-image gallery.",
    },
  ],
  games: [
    {
      label: "Pokémon — Video Games & Apps",
      url: "https://parents.pokemon.com/en-gb/video-games-and-apps/",
      note: "Official Pokémon overview aimed at families, with games and apps.",
    },
    {
      label: "Bandai Namco — Anime Games",
      url: "https://en.bandainamcoent.eu/games",
      note: "Official games catalogue including Naruto, One Piece, Dragon Ball, My Hero Academia and other anime-based games.",
    },
  ],
} as const;

export const animeDeepDive: DeepDiveConfig = {
  slug: "anime",
  region: "east-asia",
  regionName: "East Asia",
  regionHref: "/east-asia",
  category: "Culture",
  title: "ANIME",
  titleAccent: "!",
  strapline:
    "From hand-drawn television and cinema to global fandom, games and character design — explore how Japanese animation became a worldwide cultural force.",
  heroEyebrow: "Deep Dive • Japan • Animation",
  heroSymbol: "✦",
  visualStyle: "manga",

  theme: {
    background: "#FFF7E8",
    surface: "#FFFFFF",
    text: "#16151A",
    mutedText: "#5E5967",
    primary: "#08A9D6",
    secondary: "#FFD83D",
    accent: "#FF4F9A",
    dark: "#17131F",
  },

  sections: [
    {
      type: "article",
      id: "what-is-anime",
      eyebrow: "Start here",
      title: "Wait... what actually is anime?",
      paragraphs: [
        "Anime is the word commonly used outside Japan for animation from Japan. It is not one single genre or one single drawing style.",
        "Anime can be funny, frightening, romantic, sporty, historical, futuristic or completely fantastical. Some stories are made for children; others are made for teenagers or adults.",
        "That variety is important. Saying all anime looks the same would be a bit like saying every live-action film looks the same.",
      ],
      highlight: "ANIME IS A MEDIUM — NOT ONE SINGLE LOOK.",
      sourceRefs: [{ sourceId: "britannica-anime", label: "Background" }],
    },

    {
      type: "facts",
      id: "many-worlds",
      eyebrow: "Pick your world",
      title: "Anime can be almost anything",
      intro: "You do not have to like one kind of anime to enjoy another.",
      facts: [
        {
          icon: "⚡",
          title: "Action",
          text: "Battles, rivals, powers and big dramatic moments.",
        },
        {
          icon: "🌙",
          title: "Fantasy",
          text: "Spirits, magic, strange worlds and impossible creatures.",
        },
        {
          icon: "🏐",
          title: "Sport",
          text: "Competition, teamwork, training and trying to improve.",
        },
        {
          icon: "🍜",
          title: "Everyday life",
          text: "Friendship, school, family, food and quieter stories.",
        },
      ],
      sourceRefs: [],
    },

    {
      type: "big-date",
      id: "astro-boy-1963",
      date: "1963",
      eyebrow: "Television takes off",
      title: "Astro Boy reaches Japanese television",
      text: "Osamu Tezuka's Astro Boy became one of the landmark early Japanese television anime series and an important part of the story of anime made for TV.",
      sourceRefs: [{ sourceId: "britannica-tezuka", label: "Osamu Tezuka" }],
    },

    {
      type: "timeline",
      id: "anime-timeline",
      eyebrow: "Fast-forward",
      title: "From Japan to screens around the world",
      intro:
        "This is a quick route through a much bigger history — just enough to see how anime kept changing.",
      items: [
        {
          date: "1910s",
          title: "Early Japanese animation",
          text: "Japanese artists experiment with short animated films.",
        },
        {
          date: "1963",
          title: "Astro Boy",
          text: "Television becomes an increasingly important home for Japanese animation.",
        },
        {
          date: "1980s",
          title: "New audiences",
          text: "Television, home video and films help more styles and stories reach viewers.",
        },
        {
          date: "1990s",
          title: "Global favourites",
          text: "Series including Dragon Ball, Sailor Moon and Pokémon gain huge audiences outside Japan.",
        },
        {
          date: "2001",
          title: "Spirited Away",
          text: "Hayao Miyazaki and Studio Ghibli's fantasy film becomes an international landmark.",
        },
        {
          date: "Today",
          title: "Global fandom",
          text: "Streaming, games, conventions, fan art and online communities make anime easier to discover around the world.",
        },
      ],
      sourceRefs: [
        { sourceId: "britannica-anime", label: "Anime overview" },
        { sourceId: "ghibli-chihiro", label: "Spirited Away" },
      ],
    },

    {
      type: "reveal",
      id: "anime-language",
      eyebrow: "Look closer",
      title: "How can animation make a moment feel HUGE?",
      intro:
        "Tap the ideas. These are storytelling tools — not rules that every anime has to follow.",
      options: [
        {
          id: "close-up",
          icon: "👁️",
          title: "Close-up",
          reveal:
            "Moving close to a face or eye can make a reaction feel intense and pull our attention towards emotion.",
        },
        {
          id: "speed",
          icon: "💨",
          title: "Movement",
          reveal:
            "Lines, blurred backgrounds, camera movement and changing poses can make action feel faster than a still drawing.",
        },
        {
          id: "expression",
          icon: "😲",
          title: "Expression",
          reveal:
            "Animators can push facial expressions and body language to make fear, excitement, embarrassment or anger immediately readable.",
        },
        {
          id: "sound",
          icon: "💥",
          title: "Sound + impact",
          reveal:
            "Music, silence, voices and impact sounds work with the pictures to change how a scene feels.",
        },
      ],
      sourceRefs: [],
    },

    {
      type: "statement",
      id: "famous-wall",
      eyebrow: "Picture wall",
      title: "YOU MIGHT KNOW THESE...",
      text: "Pokémon. Dragon Ball. Sailor Moon. Naruto. One Piece. Studio Ghibli. Demon Slayer. My Hero Academia. They do not all look alike — and that is exactly the point.",
      questions: [
        "Which have you seen?",
        "Which art style grabs you?",
        "Which would you try next?",
      ],
      sourceRefs: [
        { sourceId: "pokemon-company", label: "Pokémon" },
        { sourceId: "ghibli-works", label: "Studio Ghibli" },
      ],
    },

    {
      type: "journey",
      id: "make-manga",
      eyebrow: "Your turn",
      title: "Make your own manga character",
      intro:
        "You do not need to be an expert artist. Start rough and build it up.",
      items: [
        {
          icon: "💡",
          title: "Idea",
          text: "Who are they and what do they want?",
        },
        {
          icon: "✏️",
          title: "Sketch",
          text: "Try loose shapes before worrying about detail.",
        },
        {
          icon: "🙂",
          title: "Expression",
          text: "Can we tell how they feel just by looking?",
        },
        {
          icon: "🧍",
          title: "Pose",
          text: "Use the whole body to show personality.",
        },
        {
          icon: "🖊️",
          title: "Ink",
          text: "Choose the lines you want to keep.",
        },
        {
          icon: "💬",
          title: "Panel",
          text: "Put your character into a tiny moment of story.",
        },
      ],
      sourceRefs: [
        { sourceId: "viz-manga-101", label: "Try the full VIZ guide" },
      ],
    },

    {
      type: "facts",
      id: "watch-draw-play",
      eyebrow: "Don't just read it",
      title: "Watch. Draw. Play.",
      intro:
        "The finished page will turn these into large visual launch points rather than ordinary information cards.",
      facts: [
        {
          icon: "▶️",
          title: "Watch",
          text: "Official trailers and clips can show movement, voices, music and animation in action.",
        },
        {
          icon: "✏️",
          title: "Draw",
          text: "Use the VIZ manga-making guide, then try your own face, pose, expression or mini panel.",
        },
        {
          icon: "🎮",
          title: "Play",
          text: "Explore official games based on anime and manga worlds, including Pokémon, Naruto, One Piece and Dragon Ball.",
        },
        {
          icon: "🖼️",
          title: "Explore",
          text: "Look closely at different visual styles. What changes between a soft fantasy film and a high-energy battle series?",
        },
      ],
      sourceRefs: [
        { sourceId: "viz-manga-101", label: "Drawing" },
        { sourceId: "pokemon-games", label: "Pokémon games" },
        { sourceId: "bandai-games", label: "Anime games" },
      ],
    },

    {
      type: "choice",
      id: "anime-challenge",
      eyebrow: "Final challenge",
      title: "Build your anime idea",
      intro:
        "Pick three ingredients. There is no correct combination — this is your story.",
      instruction: "Choose exactly 3.",
      maxChoices: 3,
      options: [
        "A reluctant hero",
        "A ridiculous rival",
        "A mysterious creature",
        "A secret power",
        "A sports tournament",
        "A strange new world",
        "A school mystery",
        "An impossible journey",
        "A powerful friendship",
        "A villain with a reason",
      ],
      completionText:
        "Now sketch one character and one panel that could belong in your idea.",
    },
  ],

  sources: [
    {
      id: "britannica-anime",
      name: "Encyclopaedia Britannica",
      title: "Anime",
      url: "https://www.britannica.com/art/anime-Japanese-animation",
      description:
        "Background reading on Japanese animation and its development.",
    },
    {
      id: "britannica-tezuka",
      name: "Encyclopaedia Britannica",
      title: "Tezuka Osamu",
      url: "https://www.britannica.com/biography/Tezuka-Osamu",
      description:
        "Background on Osamu Tezuka and his importance to manga and animation.",
    },
    {
      id: "ghibli-works",
      name: "Studio Ghibli",
      title: "Official Works Archive",
      url: "https://www.ghibli.jp/works/",
      description:
        "Official Studio Ghibli film archive and still-image galleries.",
    },
    {
      id: "ghibli-chihiro",
      name: "Studio Ghibli",
      title: "Spirited Away",
      url: "https://www.ghibli.jp/works/chihiro/",
      description:
        "Official film information and still-image gallery for Spirited Away.",
    },
    {
      id: "viz-manga-101",
      name: "VIZ Media",
      title: "Manga Creation 101",
      url: "https://www.viz.com/blog/posts/manga-creation-101",
      description:
        "A practical manga-making guide covering characters, thumbnails, pencils, inks, tones and lettering.",
    },
    {
      id: "viz-jump-guide",
      name: "VIZ Media",
      title: "The Shonen Jump Guide to Making Manga",
      url: "https://www.viz.com/shonen-jump-guide-to-making-manga",
      description:
        "Advice on manga creation from Weekly Shonen Jump creators and editors.",
    },
    {
      id: "pokemon-company",
      name: "The Pokémon Company International",
      title: "About Pokémon",
      url: "https://corporate.pokemon.com/en-gb/about/",
      description:
        "Official background on Pokémon animation, games and the wider franchise.",
    },
    {
      id: "pokemon-games",
      name: "The Pokémon Company International",
      title: "Pokémon Video Games and Apps",
      url: "https://parents.pokemon.com/en-gb/video-games-and-apps/",
      description: "Official family-facing overview of Pokémon games and apps.",
    },
    {
      id: "bandai-games",
      name: "Bandai Namco Entertainment",
      title: "Anime Games",
      url: "https://en.bandainamcoent.eu/games",
      description:
        "Official catalogue including games based on Naruto, One Piece, Dragon Ball and other anime/manga properties.",
    },
  ],
};

export default animeDeepDive;
