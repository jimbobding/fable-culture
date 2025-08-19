// src/data/africaRegions.js

export type Region = {
  title: string;
  fact: string;
  blurb: string;
  images: string[];
  color: string;
  countries: string[];
};

export const africaRegions = {
  north: {
    title: "North Africa",
    fact: "The Sahara Desert is the largest hot desert in the world.",
    blurb:
      "North Africa is known for ancient civilizations, deserts, and Mediterranean culture.",
    images: ["/images/north1.jpg", "/images/north2.jpg", "/images/north3.jpg"],
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
    images: ["/images/west1.jpg", "/images/west2.jpg", "/images/west3.jpg"],
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
    images: ["/images/east1.jpg", "/images/east2.jpg", "/images/east3.jpg"],
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
      "/images/central1.jpg",
      "/images/central2.jpg",
      "/images/central3.jpg",
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
      "/images/southern1.jpg",
      "/images/southern2.jpg",
      "/images/southern3.jpg",
    ],
    color: "#FFB6B9",
    countries: ["Botswana", "Eswatini", "Lesotho", "Namibia", "South Africa"],
  },
};
export type RegionKey = keyof typeof africaRegions;
