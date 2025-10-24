// src/data/europeRegions.ts

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

// ✅ base path for all region card images
const europeCardBase = "/images/continents/europe/region-cards";

export const europeImagePaths = {
  northern: `${europeCardBase}/NE-region.jpeg`,
  southern: `${europeCardBase}/SE-region.jpeg`,
  eastern: `${europeCardBase}/EU-region.jpeg`,
  western: `${europeCardBase}/WE-region.jpeg`,
} as const;

export type RegionKey = "northern" | "southern" | "eastern" | "western";

const northernEuropePath = "/images/continents/europe/regions/northern-europe";
const southernEuropePath = "/images/continents/europe/regions/southern-europe";
const easternEuropePath = "/images/continents/europe/regions/eastern-europe";
const westernEuropePath = "/images/continents/europe/regions/western-europe";

export const europeRegions: Record<RegionKey, Region> = {
  northern: {
    title: "Northern Europe",
    fact: [
      "Northern Europe is known for stunning natural landscapes, fjords, and historic cities.",
      "It has long winters with snow in many regions and midnight sun in the north.",
      "The region is rich in Viking history and modern culture.",
    ],
    blurb:
      "Northern Europe combines dramatic scenery, charming cities, and rich cultural heritage.",
    regionImage: europeImagePaths.northern,
    images: [
      {
        src: `${northernEuropePath}/winter-iceland-road.jpg`,
        caption: "Winter Road, Iceland",
      },
      {
        src: `${northernEuropePath}/Nor-Geirangerfjord.jpg`,
        caption: "Geirangerfjord, Norway",
      },
      {
        src: `${northernEuropePath}/est-OldTown.jpeg`,
        caption: "Tallinn Old Town, Estonia",
      },
      {
        src: `${northernEuropePath}/fin-NorthLights.jpg`,
        caption: "Northern Lights, Finland",
      },
      {
        src: `${northernEuropePath}/swee-Gamla Stan.jpg`,
        caption: "Gamla Stan, Stockholm, Sweden",
      },
      {
        src: `${northernEuropePath}/uk-OldTrafford.jpeg`,
        caption: "Old Trafford Stadium, Manchester United Kingdom, (heaven)",
      },
      {
        src: `${northernEuropePath}/den-NyhavnCope.jpg`,
        caption: "Nyhavn Harbour, Copenhagen, Denmark",
      },
      {
        src: `${northernEuropePath}/ire-CliifsMoher.jpg`,
        caption: "Cliffs of Moher, Ireland",
      },
      {
        src: `${northernEuropePath}/lith-IslandCast.jpg`,
        caption: "Trakai Island Castle, Lithuania",
      },
      {
        src: `${northernEuropePath}/lat-HouseBlackhead.jpg`,
        caption: "House of the Blackheads, Riga, Latvia",
      },
    ],
    color: "#EAE2B7",
    countries: [
      { name: "Iceland", emojiFlag: "🇮🇸" },
      { name: "Norway", emojiFlag: "🇳🇴" },
      { name: "Estonia", emojiFlag: "🇪🇪" },
      { name: "Finland", emojiFlag: "🇫🇮" },
      { name: "Sweden", emojiFlag: "🇸🇪" },
      { name: "United Kingdom", emojiFlag: "🇬🇧" },
      { name: "Denmark", emojiFlag: "🇩🇰" },
      { name: "Ireland", emojiFlag: "🇮🇪" },
      { name: "Lithuania", emojiFlag: "🇱🇹" },
      { name: "Latvia", emojiFlag: "🇱🇻" },
    ],
    music: "",
    videoUrl: "",
  },

  southern: {
    title: "Southern Europe",
    fact: [
      "Southern Europe has a Mediterranean climate with hot, dry summers.",
      "It is famous for cuisine, art, and ancient ruins.",
      "Tourism is a major economic driver in the region.",
    ],
    blurb:
      "Southern Europe is rich in history, sunny beaches, and cultural landmarks.",
    regionImage: europeImagePaths.southern,
    images: [
      {
        src: `${southernEuropePath}/alb-KasBeach.jpg`,
        caption: "Ksamil Beach, Albania",
      },
      {
        src: `${southernEuropePath}/Cyprus-AphroRock.jpg`,
        caption: "Aphrodite's Rock, Cyprus",
      },
      {
        src: `${southernEuropePath}/nmac-ChurchKaneo.jpg`,
        caption: "Church of St. John Kaneo, North Macedonia",
      },
      {
        src: `${southernEuropePath}/serb-ChurchSaint.jpg`,
        caption: "Church of Saint Sava, Serbia",
      },
      {
        src: `${southernEuropePath}/and-PyranesseMoun.jpg`,
        caption: "Pyrenees Mountains, Andorra",
      },
      {
        src: `${southernEuropePath}/holys-BasilicaVcity.jpeg`,
        caption: "St. Peter's Basilica, Vatican City",
      },
      {
        src: `${southernEuropePath}/Portugal-BelemLis.jpg`,
        caption: "Belém Tower, Lisbon, Portugal",
      },
      {
        src: `${southernEuropePath}/slov-LakeBled.png`,
        caption: "Lake Bled & Bled Castle, Slovenia",
      },
      {
        src: `${southernEuropePath}/bosher-Bridge.jpg`,
        caption: "Stari Most Bridge, Mostar, Bosnia & Herzegovina",
      },
      {
        src: `${southernEuropePath}/italy-ColoRome.jpg`,
        caption: "Colosseum, Rome, Italy",
      },
      {
        src: `${southernEuropePath}/sanm-GuaitaTow.jpg`,
        caption: "Guaita Tower, San Marino",
      },
      {
        src: `${southernEuropePath}/Spain-SagradaFam.jpg`,
        caption: "Sagrada Familia, Barcelona, Spain",
      },
      {
        src: `${southernEuropePath}/cro-DubrvonikWalls.jpg`,
        caption: "Dubrovnik City Walls, Croatia",
      },
      {
        src: `${southernEuropePath}/Malta-MidinaOld.jpg`,
        caption: "Mdina Old Town, Malta",
      },
      {
        src: `${southernEuropePath}/Santorini-whiteHouses.jpg`,
        caption: "White Houses, Santorini, Greece",
      },
      {
        src: `${southernEuropePath}/mne-BayKotor.jpg`,
        caption: "Bay of Kotor, Montenegro",
      },
    ],
    color: "#FFD6A5",
    countries: [
      { name: "Albania", emojiFlag: "🇦🇱" },
      { name: "Cyprus", emojiFlag: "🇨🇾" },
      { name: "North Macedonia", emojiFlag: "🇲🇰" },
      { name: "Serbia", emojiFlag: "🇷🇸" },
      { name: "Andorra", emojiFlag: "🇦🇩" },
      { name: "Holy See", emojiFlag: "🇻🇦" },
      { name: "Portugal", emojiFlag: "🇵🇹" },
      { name: "Slovenia", emojiFlag: "🇸🇮" },
      { name: "Bosnia & Herzegovina", emojiFlag: "🇧🇦" },
      { name: "Italy", emojiFlag: "🇮🇹" },
      { name: "San Marino", emojiFlag: "🇸🇲" },
      { name: "Spain", emojiFlag: "🇪🇸" },
      { name: "Croatia", emojiFlag: "🇭🇷" },
      { name: "Malta", emojiFlag: "🇲🇹" },
      { name: "Greece", emojiFlag: "🇬🇷" },
      { name: "Montenegro", emojiFlag: "🇲🇪" },
    ],
    music: "",
    videoUrl: "",
  },

  eastern: {
    title: "Eastern Europe",
    fact: [
      "Eastern Europe has a mix of Slavic, Baltic, and Balkan cultures.",
      "The region has vast plains and historic cities.",
      "It has experienced complex political histories over centuries.",
    ],
    blurb:
      "Eastern Europe is full of history, architecture, and natural beauty.",
    regionImage: europeImagePaths.eastern,
    images: [
      {
        src: `${easternEuropePath}/bela-NatLibr.jpg`,
        caption: "National Library, Belarus",
      },
      {
        src: `${easternEuropePath}/hun-ParlimentBuild.jpg`,
        caption: "Parliament Building, Hungary",
      },
      {
        src: `${easternEuropePath}/pra-CharlesBri.jpeg`,
        caption: "Charles Bridge, Prague, Czech Republic",
      },
      {
        src: `${easternEuropePath}/slo-BratsCastle.jpg`,
        caption: "Bratislava Castle, Slovakia",
      },
      {
        src: `${easternEuropePath}/pol-WawelCas.avif`,
        caption: "Wawel Castle, Poland",
      },
      {
        src: `${easternEuropePath}/Rom-TransHigh.jpg`,
        caption: "Transfagarasan Highway, Romania",
      },
      {
        src: `${easternEuropePath}/ukr-SaintSophCath.jpg`,
        caption: "Saint Sophia Cathedral, Ukraine",
      },
      {
        src: `${easternEuropePath}/bul-RilaMones.jpg`,
        caption: "Rila Monastery, Bulgaria",
      },
      {
        src: `${easternEuropePath}/rus-StBasil.jpg`,
        caption: "Saint Basil's Cathedral, Moscow, Russia",
      },
      {
        src: `${easternEuropePath}/mda-OrheiulVechi.jpg`,
        caption: "Orheiul Vechi Monastery, Moldova",
      },
    ],
    color: "#CDEAC0",
    countries: [
      { name: "Belarus", emojiFlag: "🇧🇾" },
      { name: "Hungary", emojiFlag: "🇭🇺" },
      { name: "Czech Republic", emojiFlag: "🇨🇿" },
      { name: "Slovakia", emojiFlag: "🇸🇰" },
      { name: "Poland", emojiFlag: "🇵🇱" },
      { name: "Romania", emojiFlag: "🇷🇴" },
      { name: "Ukraine", emojiFlag: "🇺🇦" },
      { name: "Bulgaria", emojiFlag: "🇧🇬" },
      { name: "Russia", emojiFlag: "🇷🇺" },
      { name: "Moldova", emojiFlag: "🇲🇩" },
    ],
    music: "",
    videoUrl: "",
  },

  western: {
    title: "Western Europe",
    fact: [
      "Western Europe is densely populated with a high standard of living.",
      "It has strong economies and famous cultural centers.",
      "The region is home to iconic landmarks like the Eiffel Tower and Mont Blanc.",
    ],
    blurb: "Western Europe blends history, culture, and modern infrastructure.",
    regionImage: europeImagePaths.western,
    images: [
      {
        src: `${westernEuropePath}/fra-EiffelTow.jpg`,
        caption: "Eiffel Tower, France",
      },
      {
        src: `${westernEuropePath}/ger-NeuschCast.jpg`,
        caption: "Neuschwanstein Castle, Germany",
      },
      {
        src: `${westernEuropePath}/bru-GrandPala.jpg`,
        caption: "Grand Place, Brussels, Belgium",
      },
      {
        src: `${westernEuropePath}/neth-KinderdijkWind.jpg`,
        caption: "Windmills at Kinderdijk, Netherlands",
      },
      {
        src: `${westernEuropePath}/lux-BockCas.webp`,
        caption: "Bock Casemates, Luxembourg",
      },
      {
        src: `${westernEuropePath}/lie-VaduzCast.jpeg`,
        caption: "Vaduz Castle, Liechtenstein",
      },
      {
        src: `${westernEuropePath}/mon-MonteCarl.jpeg`,
        caption: "Monte Carlo, Monaco",
      },
      {
        src: `${westernEuropePath}/vie-SchonbrunnPal.jpg`,
        caption: "Schönbrunn Palace, Austria",
      },
      {
        src: `${westernEuropePath}/swiss-MontBlanc.jpg`,
        caption: "Mont Blanc, Switzerland",
      },
    ],
    color: "#A0CED9",
    countries: [
      { name: "France", emojiFlag: "🇫🇷" },
      { name: "Germany", emojiFlag: "🇩🇪" },
      { name: "Belgium", emojiFlag: "🇧🇪" },
      { name: "Netherlands", emojiFlag: "🇳🇱" },
      { name: "Luxembourg", emojiFlag: "🇱🇺" },
      { name: "Liechtenstein", emojiFlag: "🇱🇮" },
      { name: "Monaco", emojiFlag: "🇲🇨" },
      { name: "Austria", emojiFlag: "🇦🇹" },
      { name: "Switzerland", emojiFlag: "🇨🇭" },
    ],

    music: "",
    videoUrl: "",
  },
};
