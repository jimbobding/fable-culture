export type IncaChapter = {
  id: string;
  number: string;
  kicker: string;
  title: string;
  question: string;
  intro: string;
  discovery: string;
  fact: string;
};

export type IncaSource = {
  label: string;
  organisation: string;
  href: string;
};

export const incaDeepDive = {
  slug: "inca",

  hero: {
    eyebrow: "Fable Culture · South America · Deep Dive",
    title: "The Great Road of the Andes",
    subtitle: "An illustrated journey through Tawantinsuyu",
    intro:
      "Travel through the Andes and investigate how the Inca connected communities across one of the most challenging landscapes on Earth.",
    openingQuestion:
      "How do you hold together an enormous state without cars, trains, telephones or the internet?",
  },

  opening: {
    date: "Around 1500",
    lines: ["No cars.", "No trains.", "No telephones.", "No internet."],
    reveal:
      "Yet an enormous network connected communities, farms, storehouses, administrative centres and sacred places across the Andes.",
    challenge: "Your journey begins in Cusco.",
  },

  chapters: [
    {
      id: "road",
      number: "01",
      kicker: "Engineering challenge",
      title: "Build the Great Road",
      question:
        "Your road has reached steep Andean terrain. How do you keep going?",
      intro:
        "The Qhapaq Ñan crossed some of the most difficult landscapes in South America. There was no single road design that worked everywhere.",
      discovery:
        "Road builders adapted to the landscape. Surviving sections include stone paving, stairways, retaining walls, drainage channels and bridges.",
      fact: "UNESCO describes a network of more than 30,000 kilometres at its greatest extent.",
    },

    {
      id: "messengers",
      number: "02",
      kicker: "Communication challenge",
      title: "Carry the Message",
      question:
        "A message needs to travel across the empire. How can information move quickly without vehicles?",
      intro:
        "Roads were useful because people could move along them. Messengers formed part of a much larger system connecting settlements and administrative centres.",
      discovery:
        "Relay messengers could carry information along sections of the road network rather than one person completing an enormous journey alone.",
      fact: "UNESCO records messengers, travellers, caravans and armies among the people who used the Qhapaq Ñan.",
    },

    {
      id: "khipu",
      number: "03",
      kicker: "Information challenge",
      title: "Read the Knots",
      question:
        "What if important information was stored in cords, colours and knots?",
      intro:
        "Khipus were arrangements of cords and knots used by Inca officials to record information.",
      discovery:
        "Knots and their positions could represent numerical information. Khipus helped administrators keep records including quantities, households, labour and stored goods.",
      fact: "Surviving khipus are valuable historical sources, but scholars cannot simply translate every khipu as though it were alphabetic writing.",
    },

    {
      id: "food",
      number: "04",
      kicker: "Supply challenge",
      title: "Feed the State",
      question:
        "How do you move and store supplies across mountains, valleys and deserts?",
      intro:
        "Connecting a large state involved more than moving messages. Food, textiles and other resources also needed to travel and be stored.",
      discovery:
        "The wider road system included infrastructure associated with production, accommodation and storage.",
      fact: "UNESCO identifies storage and accommodation structures as important parts of the Qhapaq Ñan system.",
    },

    {
      id: "stone",
      number: "05",
      kicker: "Construction challenge",
      title: "Build in Stone",
      question:
        "How can buildings and walls be constructed successfully in a mountainous landscape?",
      intro:
        "Inca builders are famous for carefully worked stone architecture, but construction varied according to purpose, location and available materials.",
      discovery:
        "At important sites, precisely shaped stones could be fitted closely together. Elsewhere, builders used different techniques suited to local conditions.",
      fact: "The surviving architecture of the Qhapaq Ñan demonstrates engineering adapted to dramatically different environments.",
    },

    {
      id: "four-regions",
      number: "06",
      kicker: "Map challenge",
      title: "Four Regions, One State",
      question: "What happens when we zoom out and look at the whole network?",
      intro:
        "The Inca state was known as Tawantinsuyu. Cusco sat at the centre of a system connecting different parts of the Andes.",
      discovery:
        "Four principal routes extended from Cusco and connected into many smaller routes and local networks.",
      fact: "Today the World Heritage Qhapaq Ñan crosses Argentina, Bolivia, Chile, Colombia, Ecuador and Peru.",
    },

    {
      id: "change",
      number: "07",
      kicker: "History changes",
      title: "An Empire Transformed",
      question:
        "What happens when invasion, conflict and disease collide with an existing political crisis?",
      intro:
        "In the sixteenth century, Spanish invasion occurred during a period of severe internal conflict in Tawantinsuyu.",
      discovery:
        "Spanish conquest transformed political power across the Andes, but conquest did not erase Andean peoples, knowledge or culture.",
      fact: "The end of Inca imperial rule was not the end of Andean history.",
    },

    {
      id: "legacy",
      number: "08",
      kicker: "The story continues",
      title: "The Road Is Still Here",
      question: "Is the Qhapaq Ñan only an archaeological monument?",
      intro:
        "Parts of the road survive physically, but its importance is not limited to stones left in the landscape.",
      discovery:
        "Communities along sections of Qhapaq Ñan continue to safeguard knowledge, traditions, languages and relationships connected with the Andean landscape.",
      fact: "UNESCO describes local communities as continuing guardians and custodians of parts of the road system.",
    },
  ] satisfies IncaChapter[],

  sources: [
    {
      label: "Qhapaq Ñan, Andean Road System",
      organisation: "UNESCO World Heritage Centre",
      href: "https://whc.unesco.org/en/list/1459/",
    },
    {
      label: "Main Andean Road – Qhapaq Ñan",
      organisation: "UNESCO World Heritage Centre",
      href: "https://whc.unesco.org/en/qhapaqnan/",
    },
    {
      label: "Inka khipu",
      organisation: "National Museum of the American Indian",
      href: "https://americanindian.si.edu/exhibitions/infinityofnations/andes/143866.html",
    },
  ] satisfies IncaSource[],
};
