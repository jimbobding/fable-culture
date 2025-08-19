// src/data/africaRegions.ts

export type Region = {
  title: string;
  fact: string;
  blurb: string;
  images: string[];
  color: string;
  countries: string[];
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
    fact: "The Sahara Desert is the largest hot desert in the world.",
    blurb:
      "North Africa is known for ancient civilizations, deserts, and Mediterranean culture.",
    images: [
      `${africaImagePaths.north}/market.jpeg`,
      `${africaImagePaths.north}/pyramids.jpg`,
      `${africaImagePaths.north}/sahara.jpeg`,
    ],
    color: "#EAE2B7",
    countries: [
      "Algeria",
      "Egypt",
      "Libya",
      "Morocco",
      "Sudan",
      "Tunisia",
      "Western Sahara",
    ],
  },
  west: {
    title: "West Africa",
    fact: "West Africa is home to over 500 languages.",
    blurb: "Vibrant music, history, and cultural diversity define this region.",
    images: [
      `${africaImagePaths.west}/festival.jpeg`,
      `${africaImagePaths.west}/lagos.jpg`,
      `${africaImagePaths.west}/savanna.jpg`,
    ],
    color: "#FFD6A5",
    countries: [
      "Benin",
      "Burkina Faso",
      "Cape Verde",
      "Côte d'Ivoire",
      "Gambia",
      "Ghana",
      "Guinea",
      "Guinea-Bissau",
      "Liberia",
      "Mali",
      "Mauritania",
      "Niger",
      "Nigeria",
      "Senegal",
      "Sierra Leone",
      "Togo",
    ],
  },
  east: {
    title: "East Africa",
    fact: "The Great Rift Valley is one of the most significant geological features in the world.",
    blurb:
      "East Africa is famous for wildlife safaris, stunning landscapes, and diverse cultures.",
    images: [
      `${africaImagePaths.east}/lake.png`,
      `${africaImagePaths.east}/mountain.webp`,
      `${africaImagePaths.east}/serengeti.jpeg`,
    ],
    color: "#CDEAC0",
    countries: [
      "Burundi",
      "Comoros",
      "Djibouti",
      "Eritrea",
      "Ethiopia",
      "Kenya",
      "Madagascar",
      "Malawi",
      "Mauritius",
      "Mozambique",
      "Rwanda",
      "Seychelles",
      "Somalia",
      "South Sudan",
      "Tanzania",
      "Uganda",
      "Zambia",
      "Zimbabwe",
    ],
  },
  central: {
    title: "Central Africa",
    fact: "Central Africa is home to the Congo Basin, the world's second-largest rainforest.",
    blurb:
      "Dense jungles, rich biodiversity, and unique cultures make this region special.",
    images: [
      `${africaImagePaths.central}/diamond.jpg`,
      `${africaImagePaths.central}/gorrila.jpeg`,
      `${africaImagePaths.central}/river.jpeg`,
    ],
    color: "#A0CED9",
    countries: [
      "Angola",
      "Cameroon",
      "Central African Republic",
      "Chad",
      "Republic of the Congo",
      "Democratic Republic of the Congo",
      "Equatorial Guinea",
      "Gabon",
      "São Tomé and Príncipe",
    ],
  },
  southern: {
    title: "Southern Africa",
    fact: "Southern Africa is home to the world's largest waterfall — Victoria Falls.",
    blurb:
      "Diverse landscapes, wildlife, and vibrant cities define Southern Africa.",
    images: [
      `${africaImagePaths.southern}/cape.jpeg`,
      `${africaImagePaths.southern}/elephants.jpeg`,
      `${africaImagePaths.southern}/nelson_mandela.jpg`,
    ],
    color: "#FFB6B9",
    countries: ["Botswana", "Eswatini", "Lesotho", "Namibia", "South Africa"],
  },
};

export type RegionKey = keyof typeof africaRegions;
