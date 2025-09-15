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
  regionImage: string; // high-res preview for region selection
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

export type RegionKey = "north" | "west" | "east" | "central" | "southern";

export const africaRegions: Record<RegionKey, Region> = {
  north: {
    title: "North Africa",
    fact: [
      "The Sahara Desert is the largest hot desert in the world.",
      "The Nile River flows through Egypt and Sudan.",
      "North Africa has a Mediterranean climate along the coast.",
    ],
    blurb:
      "North Africa is known for ancient civilizations, deserts, and Mediterranean culture.",
    regionImage: "/images/region/north-region.jpg",
    images: [
      {
        src: `${africaImagePaths.north}/north-berberVillagePic-culture.jpg`,
        caption: "Berber village in Morocco",
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
      {
        src: `${africaImagePaths.north}/north-tagine-food.jpg`,
        caption: "Tagine dish from Morocco",
      },
      {
        src: `${africaImagePaths.north}/north-painting-art.jpg`,
        caption: "Traditional Nubian wall painting in Sudan",
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
    music: "/music/north.app.mp3",
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
    regionImage: "/images/region/west-region.jpg",
    images: [
      {
        src: `${africaImagePaths.west}/west-weaving-culture.jpg`,
        caption: "Traditional weaving in West Africa",
      },
      {
        src: `${africaImagePaths.west}/west-lagos-modern.jpg`,
        caption: "Modern skyline of Lagos",
      },
      {
        src: `${africaImagePaths.west}/west-gambiaHippo-wildlife.webp`,
        caption: "Hippos in Gambia",
      },
      {
        src: `${africaImagePaths.west}/west-independenceSquare.jpg`,
        caption: "Place de l'Independance (Independence Square), Tunis",
      },
      {
        src: `${africaImagePaths.west}/west-stew-food.jpg`,
        caption: "West African stew dish",
      },
      {
        src: `${africaImagePaths.west}/west-mask-art.webp`,
        caption: " Burkina Faso’s Festival of African Masks",
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
    music: "/music/west.app.mp3",
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
    regionImage: "/images/region/east-region.jpeg",
    images: [
      {
        src: `${africaImagePaths.east}/east-massai-culture.jpg`,
        caption: "Maasai culture",
      },
      {
        src: `${africaImagePaths.east}/east-narobiStreetArt-art.jpg`,
        caption: "Street art in Nairobi",
      },
      {
        src: `${africaImagePaths.east}/east-gorilla-wildlife.jpeg`,
        caption: "Mountain gorilla",
      },
      {
        src: `${africaImagePaths.east}/east-matoke-food.jpeg`,
        caption: "Matoke dish",
      },
      {
        src: `${africaImagePaths.east}/east-kilamanjaro-landmark.jpeg`,
        caption: "Mount Kilimanjaro",
      },
      {
        src: `${africaImagePaths.east}/east-lakeVictoria.webp`,
        caption: "Lake Victoria",
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
    regionImage: "/images/region/central-region.jpg",
    images: [
      {
        src: `${africaImagePaths.central}/cental-bakasCongo-cultural.jpeg`,
        caption: "Baka people in the Congo",
      },
      {
        src: `${africaImagePaths.central}/central-La Nouvelle Liberte-modern.jpg`,
        caption: "La Nouvelle Liberte monument",
      },
      {
        src: `${africaImagePaths.central}/central-okapi-wildlfe.jpeg`,
        caption: "Okapi in the rainforest",
      },
      {
        src: `${africaImagePaths.central}/central-congoRiver-landmark.jpeg`,
        caption: "Congo River landmark",
      },
      {
        src: `${africaImagePaths.central}/central-gabonGrilledFish-food.avif`,
        caption: "Grilled fish dish from Gabon",
      },
      {
        src: `${africaImagePaths.central}/cnetral-The_Flame_of_Peace_sculpture-art.jpg`,
        caption: "The Flame of Peace sculpture",
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
    regionImage: "/images/region/south-region.jpg",
    images: [
      {
        src: `${africaImagePaths.southern}/south-kwaZulu-cultural.jpeg`,
        caption: "KwaZulu cultural heritage",
      },
      {
        src: `${africaImagePaths.southern}/south-capetown-modern.jpeg`,
        caption: "Modern Cape Town cityscape",
      },
      {
        src: `${africaImagePaths.southern}/south-lions-wildlife.jpeg`,
        caption: "Lions in the wild",
      },
      {
        src: `${africaImagePaths.southern}/south-victoria-landmark.jpeg`,
        caption: "Victoria Falls",
      },
      {
        src: `${africaImagePaths.southern}/south-bobotie-food.jpeg`,
        caption: "Traditional Bobotie dish",
      },
      {
        src: `${africaImagePaths.southern}/south-marimbaZimbabwe-music.webp`,
        caption: "Marimba performance in Zimbabwe",
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
    music: "/music/south.mp3",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_SOUTH",
  },
};
