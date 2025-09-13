// src/data/africaRegions.ts

export type Country = {
  name: string;
  emojiFlag: string;
};

export type ImageWithCaption = {
  src: string;
  caption: string;
};

export type Region = {
  title: string;
  fact: string[];
  blurb: string;
  images: ImageWithCaption[];
  color: string;
  countries: Country[];
  music?: string;
  videoUrl?: string;
};

export const africaImagePaths = {
  north: "/images/north-africa",
  west: "/images/west-africa",
  east: "/images/east-africa",
  central: "/images/central-africa",
  southern: "/images/southern-africa",
} as const;

export const africaRegions = {
  north: {
    title: "North Africa",
    fact: [
      "The Sahara Desert is the largest hot desert in the world.",
      "The Nile River flows through Egypt and Sudan.",
      "North Africa has a Mediterranean climate along the coast.",
    ],
    blurb:
      "North Africa is known for ancient civilizations, deserts, and Mediterranean culture.",
    images: [
      {
        src: `${africaImagePaths.north}/north-carpet-culture.jpg`,
        caption: "Traditional carpet market in Morocco",
      },
      {
        src: `${africaImagePaths.north}/north-casa-modern.webp`,
        caption: "Modern architecture in Casablanca",
      },
      {
        src: `${africaImagePaths.north}/north-croc-wildlife.jpeg`,
        caption: "Crocodiles in the Nile",
      },
      {
        src: `${africaImagePaths.north}/north-pyramid-famous.jpeg`,
        caption: "The Pyramids of Giza",
      },
    ],
    color: "#EAE2B7",
    countries: [
      { name: "Algeria", emojiFlag: "🇩🇿" },
      { name: "Egypt", emojiFlag: "🇪🇬" },
      { name: "Libya", emojiFlag: "🇱🇾" },
      { name: "Morocco", emojiFlag: "🇲🇦" },
      { name: "Sudan", emojiFlag: "🇸🇩" },
      { name: "Tunisia", emojiFlag: "🇹🇳" },
      { name: "Western Sahara", emojiFlag: "🇪🇭" },
    ],
    music: "/music/north.mp3",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_NORTH",
  },
  west: {
    title: "West Africa",
    fact: [
      "West Africa is home to over 500 languages.",
      "The Niger River is a major waterway.",
      "Ancient kingdoms like Mali and Ghana thrived here.",
    ],
    blurb: "Vibrant music, history, and cultural diversity define this region.",
    images: [
      {
        src: `${africaImagePaths.west}/festival.jpeg`,
        caption: "Colorful festival in Lagos",
      },
      {
        src: `${africaImagePaths.west}/lagos.jpg`,
        caption: "Modern skyline of Lagos",
      },
      {
        src: `${africaImagePaths.west}/savanna.jpg`,
        caption: "Savanna wildlife",
      },
      {
        src: `${africaImagePaths.west}/west-africa-women.jpg`,
        caption: "Local culture and dress",
      },
    ],
    color: "#FFD6A5",
    countries: [
      { name: "Benin", emojiFlag: "🇧🇯" },
      { name: "Burkina Faso", emojiFlag: "🇧🇫" },
      { name: "Cape Verde", emojiFlag: "🇨🇻" },
      { name: "Côte d'Ivoire", emojiFlag: "🇨🇮" },
      { name: "Gambia", emojiFlag: "🇬🇲" },
      { name: "Ghana", emojiFlag: "🇬🇭" },
      { name: "Guinea", emojiFlag: "🇬🇳" },
      { name: "Guinea-Bissau", emojiFlag: "🇬🇼" },
      { name: "Liberia", emojiFlag: "🇱🇷" },
      { name: "Mali", emojiFlag: "🇲🇱" },
      { name: "Mauritania", emojiFlag: "🇲🇷" },
      { name: "Niger", emojiFlag: "🇳🇪" },
      { name: "Nigeria", emojiFlag: "🇳🇬" },
      { name: "Senegal", emojiFlag: "🇸🇳" },
      { name: "Sierra Leone", emojiFlag: "🇸🇱" },
      { name: "Togo", emojiFlag: "🇹🇬" },
    ],
    music: "/music/west.mp3",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_WEST",
  },
  east: {
    title: "East Africa",
    fact: [
      "The Great Rift Valley is one of the most significant geological features in the world.",
      "Mount Kilimanjaro is Africa’s highest peak.",
      "Lake Victoria is Africa’s largest lake by area.",
    ],
    blurb:
      "East Africa is famous for wildlife safaris, stunning landscapes, and diverse cultures.",
    images: [
      { src: `${africaImagePaths.east}/lake.png`, caption: "Lake Victoria" },
      {
        src: `${africaImagePaths.east}/mountain.webp`,
        caption: "Mount Kilimanjaro",
      },
      {
        src: `${africaImagePaths.east}/serengeti.jpeg`,
        caption: "Serengeti wildlife safari",
      },
      {
        src: `${africaImagePaths.east}/maasai.webp`,
        caption: "Maasai culture",
      },
    ],
    color: "#CDEAC0",
    countries: [
      { name: "Burundi", emojiFlag: "🇧🇮" },
      { name: "Comoros", emojiFlag: "🇰🇲" },
      { name: "Djibouti", emojiFlag: "🇩🇯" },
      { name: "Eritrea", emojiFlag: "🇪🇷" },
      { name: "Ethiopia", emojiFlag: "🇪🇹" },
      { name: "Kenya", emojiFlag: "🇰🇪" },
      { name: "Madagascar", emojiFlag: "🇲🇬" },
      { name: "Malawi", emojiFlag: "🇲🇼" },
      { name: "Mauritius", emojiFlag: "🇲🇺" },
      { name: "Mozambique", emojiFlag: "🇲🇿" },
      { name: "Rwanda", emojiFlag: "🇷🇼" },
      { name: "Seychelles", emojiFlag: "🇸🇨" },
      { name: "Somalia", emojiFlag: "🇸🇴" },
      { name: "South Sudan", emojiFlag: "🇸🇸" },
      { name: "Tanzania", emojiFlag: "🇹🇿" },
      { name: "Uganda", emojiFlag: "🇺🇬" },
      { name: "Zambia", emojiFlag: "🇿🇲" },
      { name: "Zimbabwe", emojiFlag: "🇿🇼" },
    ],
    music: "/music/east.mp3",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_EAST",
  },
  central: {
    title: "Central Africa",
    fact: [
      "Central Africa is home to the Congo Basin, the world's second-largest rainforest.",
      "The Congo River is a vital transportation route.",
      "Mount Cameroon is the highest peak in the region.",
    ],
    blurb:
      "Dense jungles, rich biodiversity, and unique cultures make this region special.",
    images: [
      {
        src: `${africaImagePaths.central}/diamond.jpg`,
        caption: "Central African diamond mines",
      },
      {
        src: `${africaImagePaths.central}/gorrila.jpeg`,
        caption: "Mountain gorilla",
      },
      { src: `${africaImagePaths.central}/river.jpeg`, caption: "Congo River" },
      {
        src: `${africaImagePaths.central}/rainforest.jpg`,
        caption: "Congo rainforest",
      },
    ],
    color: "#A0CED9",
    countries: [
      { name: "Angola", emojiFlag: "🇦🇴" },
      { name: "Cameroon", emojiFlag: "🇨🇲" },
      { name: "Central African Republic", emojiFlag: "🇨🇫" },
      { name: "Chad", emojiFlag: "🇹🇩" },
      { name: "Republic of the Congo", emojiFlag: "🇨🇬" },
      { name: "Democratic Republic of the Congo", emojiFlag: "🇨🇩" },
      { name: "Equatorial Guinea", emojiFlag: "🇬🇶" },
      { name: "Gabon", emojiFlag: "🇬🇦" },
      { name: "São Tomé and Príncipe", emojiFlag: "🇸🇹" },
    ],
    music: "/music/central.mp3",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_CENTRAL",
  },
  southern: {
    title: "Southern Africa",
    fact: [
      "Southern Africa is home to the world's largest waterfall — Victoria Falls.",
      "Kruger National Park is famous for its wildlife.",
      "The region has diverse landscapes including deserts and coasts.",
    ],
    blurb:
      "Diverse landscapes, wildlife, and vibrant cities define Southern Africa.",
    images: [
      {
        src: `${africaImagePaths.southern}/cape.jpeg`,
        caption: "Cape Town city view",
      },
      {
        src: `${africaImagePaths.southern}/elephants.jpeg`,
        caption: "Elephants in Kruger National Park",
      },
      {
        src: `${africaImagePaths.southern}/nelson_mandela.jpg`,
        caption: "Nelson Mandela statue",
      },
      {
        src: `${africaImagePaths.southern}/victoria-falls.jpg`,
        caption: "Victoria Falls",
      },
    ],
    color: "#FFB6B9",
    countries: [
      { name: "Botswana", emojiFlag: "🇧🇼" },
      { name: "Eswatini", emojiFlag: "🇸🇿" },
      { name: "Lesotho", emojiFlag: "🇱🇸" },
      { name: "Namibia", emojiFlag: "🇳🇦" },
      { name: "South Africa", emojiFlag: "🇿🇦" },
    ],
    music: "/music/southern.mp3",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_SOUTH",
  },
} as const;

export type RegionKey = keyof typeof africaRegions;
