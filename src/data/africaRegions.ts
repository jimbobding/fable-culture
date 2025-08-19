// src/data/africaRegions.ts

export type Region = {
  title: string;
  fact: string[]; // array of top facts
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
    fact: [
      "The Sahara Desert is the largest hot desert in the world.",
      "The Nile River flows through Egypt and Sudan.",
      "North Africa has a Mediterranean climate along the coast.",
    ],
    blurb:
      "North Africa is known for ancient civilizations, deserts, and Mediterranean culture.",
    images: [
      `${africaImagePaths.north}/market.jpeg`,
      `${africaImagePaths.north}/pyramids.jpg`,
      `${africaImagePaths.north}/sahara.jpeg`,
      `${africaImagePaths.north}/leptis.avif`,
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
    fact: [
      "West Africa is home to over 500 languages.",
      "The Niger River is a major waterway.",
      "Ancient kingdoms like Mali and Ghana thrived here.",
    ],
    blurb: "Vibrant music, history, and cultural diversity define this region.",
    images: [
      `${africaImagePaths.west}/festival.jpeg`,
      `${africaImagePaths.west}/lagos.jpg`,
      `${africaImagePaths.west}/savanna.jpg`,
      `${africaImagePaths.west}/fish-vil.jpg`,
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
    fact: [
      "The Great Rift Valley is one of the most significant geological features in the world.",
      "Mount Kilimanjaro is Africa’s highest peak.",
      "Lake Victoria is Africa’s largest lake by area.",
    ],
    blurb:
      "East Africa is famous for wildlife safaris, stunning landscapes, and diverse cultures.",
    images: [
      `${africaImagePaths.east}/lake.png`,
      `${africaImagePaths.east}/mountain.webp`,
      `${africaImagePaths.east}/serengeti.jpeg`,
      `${africaImagePaths.east}/maasai.webp`,
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
    fact: [
      "Central Africa is home to the Congo Basin, the world's second-largest rainforest.",
      "The Congo River is a vital transportation route.",
      "Mount Cameroon is the highest peak in the region.",
    ],
    blurb:
      "Dense jungles, rich biodiversity, and unique cultures make this region special.",
    images: [
      `${africaImagePaths.central}/diamond.jpg`,
      `${africaImagePaths.central}/gorrila.jpeg`,
      `${africaImagePaths.central}/river.jpeg`,
      `${africaImagePaths.central}/rainforest.jpg`,
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
    fact: [
      "Southern Africa is home to the world's largest waterfall — Victoria Falls.",
      "Kruger National Park is famous for its wildlife.",
      "The region has diverse landscapes including deserts and coasts.",
    ],
    blurb:
      "Diverse landscapes, wildlife, and vibrant cities define Southern Africa.",
    images: [
      `${africaImagePaths.southern}/cape.jpeg`,
      `${africaImagePaths.southern}/elephants.jpeg`,
      `${africaImagePaths.southern}/nelson_mandela.jpg`,
      `${africaImagePaths.southern}/victoria-falls.jpg`,
    ],
    color: "#FFB6B9",
    countries: ["Botswana", "Eswatini", "Lesotho", "Namibia", "South Africa"],
  },
};

export type RegionKey = keyof typeof africaRegions;
