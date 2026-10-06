import type { REConfig } from "@/components/shared/re/types";

export const southAmericaRE: REConfig = {
  region: "south-america",
  regionName: "South America",
  backHref: "/south-america",

  hero: {
    eyebrow: "RE · Belief · Identity · Meaning",
    title: "Belief across South America",
    intro:
      "Across South America, belief has been shaped by Indigenous traditions, Christianity, African-diaspora religions, migration, family and changing ideas about religion. Explore some of these stories and consider how belief can connect people to community, history and place.",
    enquiryQuestion:
      "How can different beliefs shape the way people understand the world and their place within it?",
    image:
      "/images/continents/south-america/countries/peru/andes-sacred-valley-landscape.jpg",
    imageAlt: "Mountain landscape in Peru's Sacred Valley in the Andes",
  },

  beliefs: [
    {
      id: "andean-worldviews",
      title: "Andean worldviews",
      subtitle: "People, landscape and the sacred",
      summary:
        "There is no single Indigenous religion shared by all peoples of the Andes. Different communities have their own traditions and histories. In some Andean traditions, however, relationships between people, ancestors and the natural world are deeply important. Mountains and other features of the landscape can carry spiritual meaning, and traditions that began before European colonisation continue alongside and sometimes together with Christianity.",
      image:
        "/images/continents/south-america/countries/peru/andes-sacred-valley-landscape.jpg",
      imageAlt: "The Sacred Valley and Andes mountains in Peru",
      keyIdeas: [
        "Relationship with place",
        "Community",
        "Ancestors",
        "Sacred landscapes",
        "Living traditions",
      ],
      importantNote:
        "The Andes are home to many different Indigenous peoples and communities. These examples should not be treated as one belief system shared by every Indigenous person.",
      places: ["Peru", "Bolivia", "Ecuador"],
    },

    {
      id: "christianity",
      title: "Christianity",
      subtitle: "A major tradition with many different expressions",
      summary:
        "Christianity has had a major influence across South America since the colonial period. Catholic traditions remain especially important in many countries, while Protestant and Evangelical churches are also significant. Christianity is not experienced in exactly the same way everywhere: worship, festivals and local traditions can reflect different histories and communities.",
      image:
        "/images/continents/south-america/countries/brazil/places/ouro-preto.jpg",
      imageAlt: "Historic Ouro Preto in Brazil",
      keyIdeas: [
        "Jesus",
        "Prayer",
        "Church",
        "Community",
        "Catholic traditions",
        "Protestant traditions",
      ],
      importantNote:
        "Christianity contains many denominations and traditions. Christians do not all worship, practise or understand their faith in exactly the same way.",
      places: [
        "Brazil",
        "Peru",
        "Argentina",
        "Colombia",
        "Chile",
        "Across South America",
      ],
    },

    {
      id: "afro-brazilian-traditions",
      title: "Afro-Brazilian traditions",
      subtitle: "Candomblé and traditions of African origin",
      summary:
        "African religious traditions survived and developed in Brazil through communities whose ancestors endured enslavement and displacement. Candomblé is one important Afro-Brazilian religion. Communities may place importance on ancestry, sacred spaces, the natural world, music, ritual and relationships within the religious community. Different Candomblé traditions have their own histories and practices.",
      image:
        "/images/continents/south-america/countries/brazil/places/salvador.jpg",
      imageAlt: "Salvador in Bahia, Brazil",
      keyIdeas: [
        "Ancestry",
        "Community",
        "Sacred space",
        "Nature",
        "Ritual",
        "African heritage",
      ],
      importantNote:
        "Candomblé is a living religion, not simply a historical tradition or festival. There are different Candomblé nations and communities, so practices should not be presented as identical everywhere.",
      places: ["Brazil", "Bahia", "Salvador"],
    },

    {
      id: "belief-today",
      title: "Belief today",
      subtitle: "Religious, non-religious and changing identities",
      summary:
        "South America today includes Catholics, Protestants and other Christians, followers of Indigenous and African-diaspora traditions, people belonging to other religions, and people who identify with no religion. Religious identity is also changing. Some people change religion during their lives, while others describe themselves as atheist, agnostic or as having no particular religion.",
      image:
        "/images/continents/south-america/countries/brazil/places/brasilia.jpg",
      imageAlt: "Brasilia, the capital of Brazil",
      keyIdeas: [
        "Diversity",
        "Change",
        "Religious identity",
        "Non-religious worldviews",
        "Personal choice",
      ],
      importantNote:
        "A country's largest religious group does not tell us what every individual believes. Religious identity can differ between generations, families, communities and individuals.",
      places: [
        "Argentina",
        "Brazil",
        "Chile",
        "Colombia",
        "Peru",
        "Across South America",
      ],
    },
  ],

  enquiries: [
    {
      id: "qoylluriti",
      title: "A sacred journey into the Andes",
      image:
        "/images/continents/south-america/countries/peru/andes-sacred-valley-landscape.jpg",
      imageAlt: "Mountain landscape in the Peruvian Andes",
      lookPrompt:
        "Look at the landscape. What features might make a place like this feel powerful, important or sacred to a community?",
      thinkPrompt:
        "Imagine thousands of people travelling together into a mountain landscape for a religious pilgrimage. Why might the journey itself be as important as reaching the destination?",
      revealTitle: "The pilgrimage of Qoyllur Rit’i",
      revealText:
        "Each year, communities travel to the sanctuary of the Lord of Qoyllur Rit’i near Cusco in Peru. UNESCO describes the pilgrimage as combining elements of Catholicism with traditions connected to pre-Hispanic Andean nature deities. The pilgrimage includes crosses, Christian religious images, processions, music and many different dances. It brings together communities from across the Cusco region and shows how religious traditions can meet, continue and change over time.",
      bigQuestion:
        "Can one religious tradition contain ideas and practices that come from different histories?",
      relatedBeliefIds: ["andean-worldviews", "christianity"],
    },

    {
      id: "salvador-afro-brazilian",
      title: "What can a city tell us about belief?",
      image:
        "/images/continents/south-america/countries/brazil/places/salvador.jpg",
      imageAlt: "Salvador in Bahia, Brazil",
      lookPrompt:
        "Look carefully at this place. What clues might help you investigate the different communities, histories and traditions that have shaped it?",
      thinkPrompt:
        "Brazil was deeply affected by the transatlantic slave trade. What might happen to people's beliefs and traditions when communities are forcibly moved to another part of the world?",
      revealTitle: "African traditions in Brazil",
      revealText:
        "African religious traditions were carried to Brazil by people who were enslaved and forcibly transported across the Atlantic. Their descendants preserved and developed traditions that became part of Brazil's religious landscape. Bahia is particularly important in the history of Candomblé. Religious communities known as terreiros can be places of worship, community, memory and cultural continuity.",
      bigQuestion:
        "How can belief help a community preserve identity when its history includes displacement and oppression?",
      relatedBeliefIds: ["afro-brazilian-traditions"],
    },

    {
      id: "changing-belief",
      title: "Does a continent have one religion?",
      image:
        "/images/continents/south-america/countries/brazil/places/brasilia.jpg",
      imageAlt: "Urban landscape in Brasilia, Brazil",
      lookPrompt:
        "Imagine trying to work out what everybody in this city believes just by looking at one photograph. What could you know — and what could you not know?",
      thinkPrompt:
        "If a country has a religious majority, does that mean everyone living there shares that religion or practises it in the same way?",
      revealTitle: "A changing religious landscape",
      revealText:
        "Christianity remains highly influential across much of South America, but the picture is more varied than a single label suggests. Recent research in several large Latin American countries shows differences between Catholic, Protestant and religiously unaffiliated populations, as well as changes between generations. Other religious traditions are also part of the region. Statistics can help us understand patterns, but they cannot tell us exactly what an individual person believes.",
      bigQuestion:
        "Which tells us more about belief: statistics about a country, or the experiences of individual people?",
      relatedBeliefIds: ["christianity", "belief-today"],
    },
  ],

  practices: [],

  sacredItems: [],

  comparisons: [],

  bigQuestions: [],

  sources: [
    {
      label: "Pilgrimage to the sanctuary of the Lord of Qoyllur Rit’i",
      organisation: "UNESCO Intangible Cultural Heritage",
      href: "https://ich.unesco.org/en/RL/pilgrimage-to-the-sanctuary-of-the-lord-of-qoyllurit-i-00567",
    },
    {
      label: "Religious affiliation in Latin America",
      organisation: "Pew Research Center",
      href: "https://www.pewresearch.org/religion/2026/01/21/religious-affiliation-in-latin-america/",
    },
    {
      label: "Povos e Comunidades Tradicionais",
      organisation: "Brazilian Ministry of the Environment and Climate Change",
      href: "https://www.gov.br/mma/pt-br/assuntos/povos-e-comunidades-tradicionais",
    },
    {
      label: "Iphan recognises Candomblé terreiro in the Recôncavo Baiano",
      organisation: "Instituto do Patrimônio Histórico e Artístico Nacional",
      href: "https://www.gov.br/iphan/pt-br/assuntos/noticias/iphan-aprova-tombamento-de-terreiro-de-candomble-do-reconcavo-baiano/",
    },
  ],

  theme: {
    background: "#F4E5C4",
    surface: "#FFF9EA",
    surfaceAlt: "#E9D6AD",
    text: "#211F1B",
    mutedText: "#5F594F",
    primary: "#153D2D",
    secondary: "#168C9E",
    accent: "#F4C542",
  },
};
