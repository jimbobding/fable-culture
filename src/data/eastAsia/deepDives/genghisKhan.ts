import type { DeepDiveConfig } from "@/components/shared/deep-dive/types";

export const genghisKhanDeepDive: DeepDiveConfig = {
  slug: "genghis-khan",

  region: "east-asia",
  regionName: "East Asia",
  regionHref: "/east-asia",

  category: "History",

  title: "GENGHIS",
  titleAccent: "KHAN",

  strapline:
    "From Temüjin of the Mongolian steppe to the founder of an empire that transformed Eurasia.",

  heroEyebrow: "Deep Dive • Mongolia • History",
  heroSymbol: "🐎",

  visualStyle: "mongol-steppe",

  theme: {
    background: "#F1E7D2",
    surface: "#FAF3E3",
    text: "#202724",
    mutedText: "#5C625B",

    primary: "#236A8C",
    secondary: "#C9A34E",
    accent: "#D9A62E",

    dark: "#173844",
  },

  sources: [
    {
      id: "iranica-genghis",
      name: "Encyclopaedia Iranica",
      title: "Čengīz Khan",
      url: "https://www.iranicaonline.org/articles/cengiz-khan/",
      description:
        "Historian David O. Morgan's scholarly biography of Genghis Khan, including discussion of the difficulties surrounding evidence for his early life.",
    },

    {
      id: "smithsonian-nomads",
      name: "Smithsonian Institution",
      title: "Nomads — Geography & History",
      url: "https://festival.si.edu/2002/the-silk-road/nomads-geography-and-history/smithsonian",
      description:
        "Smithsonian material on the Mongolian steppe, Genghis Khan, government and the later Mongol realms.",
    },

    {
      id: "smithsonian-book",
      name: "Smithsonian Institution",
      title: "Genghis Khan and the Mongol Empire",
      url: "https://repository.si.edu/server/api/core/bitstreams/3b527b70-7323-470d-904f-bf1f03c9f8b5/content",
      description:
        "A substantial Smithsonian publication exploring Mongol history, archaeology, society and empire.",
    },

    {
      id: "met-legacy",
      name: "The Metropolitan Museum of Art",
      title: "The Legacy of Genghis Khan",
      url: "https://www.metmuseum.org/ja/essays/the-legacy-of-genghis-khan",
      description:
        "Used for Mongol conquest, military organisation, administration, communication, cultural exchange and the successor states.",
    },

    {
      id: "british-museum",
      name: "British Museum",
      title: "Mongol — Collection Overview",
      url: "https://www.britishmuseum.org/collection/term/x23190",
      description:
        "British Museum chronology and collection information relating to Mongol expansion.",
    },
  ],

  sections: [
    /* =====================================================
       WHO WAS HE?
    ====================================================== */

    {
      type: "article",
      id: "who-was-genghis-khan",

      eyebrow: "Meet Genghis Khan",

      title: "Who was Genghis Khan?",

      paragraphs: [
        "Genghis Khan was the founder of the Mongol Empire and one of the most important — and controversial — rulers in world history. Before he was known as Genghis Khan, his name was Temüjin.",

        "Even something as basic as the year of his birth is uncertain. Different historians have suggested different dates. The Metropolitan Museum of Art gives about 1162, while historian David O. Morgan argues that he was probably born around 1167.",

        "There is another problem for historians: much of what we know about Temüjin's early life comes from The Secret History of the Mongols. It was written close to his lifetime, but separating historical fact from later storytelling and legend is not always easy.",

        "What historians can reconstruct is the extraordinary rise of a man who began as the son of a relatively minor Mongol leader and eventually established a new political power across the Mongolian steppe.",
      ],

      highlight:
        "Deep Dive rule #1: history isn't always certain. Good historians tell us when the evidence is complicated.",

      sourceRefs: [
        {
          sourceId: "iranica-genghis",
          label: "Encyclopaedia Iranica",
        },
        {
          sourceId: "met-legacy",
          label: "The Met",
        },
      ],
    },

    /* =====================================================
       CHILDHOOD
    ====================================================== */

    {
      type: "article",
      id: "temujin-childhood",

      eyebrow: "Before the empire",

      title: "Temüjin's difficult beginning.",

      paragraphs: [
        "According to the surviving accounts, Temüjin's father Yesügei was a minor Mongol chieftain. He was killed when Temüjin was still a child.",

        "Temüjin, his mother and other members of the family were then abandoned by many of their father's followers. The Secret History presents the following years as a period of serious hardship.",

        "As Temüjin grew older, however, he began attracting followers of his own. Alliances became extremely important. So did his ability to defeat — and sometimes absorb — rival groups.",

        "Over time his power grew. Temüjin fought and negotiated his way through the complicated politics of the steppe until he had established supremacy over the major rival groups in Mongolia.",
      ],

      highlight:
        "The future founder of the Mongol Empire did not begin life as the ruler of a united Mongolia.",

      sourceRefs: [
        {
          sourceId: "iranica-genghis",
          label: "Biography: Encyclopaedia Iranica",
        },
      ],
    },

    /* =====================================================
       1206
    ====================================================== */

    {
      type: "big-date",
      id: "1206",

      date: "1206",

      eyebrow: "The turning point",

      title: "Temüjin becomes Genghis Khan.",

      text: "In 1206, an assembly recognised Temüjin's supremacy. He emerged as Genghis Khan, leader of a newly consolidated Mongol power. The Smithsonian describes him as having brought most of the nomads of the steppe together and created an extraordinarily disciplined army.",

      sourceRefs: [
        {
          sourceId: "iranica-genghis",
          label: "Encyclopaedia Iranica",
        },
        {
          sourceId: "smithsonian-nomads",
          label: "Smithsonian",
        },
      ],
    },

    /* =====================================================
       STEPPE WORLD
    ====================================================== */

    {
      type: "article",
      id: "steppe-world",

      eyebrow: "His world",

      title: "What was the Mongolian steppe?",

      paragraphs: [
        "The steppe is a vast grassland environment stretching across large parts of Eurasia. The societies that lived there developed ways of life suited to huge distances, changing seasons and the need to find pasture for livestock.",

        "Pastoral communities depended heavily on animals and mobility. Horses were particularly important. They were useful for transport, herding and warfare, and horse-based movement helped people communicate across enormous distances.",

        "This did not mean that steppe societies were isolated from settled societies. Trade, diplomacy, conflict and cultural exchange connected nomadic communities with neighbouring cities and states.",

        "The Mongol Empire grew from this steppe world. Its ability to organise movement, horses and communication across huge areas would later become one of its greatest strengths.",
      ],

      sourceRefs: [
        {
          sourceId: "smithsonian-book",
          label: "Smithsonian publication",
        },
        {
          sourceId: "smithsonian-nomads",
          label: "Smithsonian Folklife",
        },
      ],
    },

    {
      type: "reveal",
      id: "steppe-challenge",

      eyebrow: "Explore",

      title: "What mattered on the steppe?",

      intro:
        "Tap each object. Think about what would be useful to a highly mobile pastoral society.",

      options: [
        {
          id: "horse",
          icon: "🐎",
          title: "Horses",
          reveal:
            "Vital. Horses supported transport, herding, communication and warfare across the enormous distances of the steppe.",
        },
        {
          id: "livestock",
          icon: "🐑",
          title: "Livestock",
          reveal:
            "Pastoral communities depended on herds for food, materials and wealth.",
        },
        {
          id: "mobility",
          icon: "⛺",
          title: "Mobility",
          reveal:
            "Moving between seasonal pastures was an important part of pastoral life. Permanent settlement was not the only way to build a sophisticated society.",
        },
        {
          id: "castle",
          icon: "🏰",
          title: "Stone castles",
          reveal:
            "Much less useful to a highly mobile pastoral community. Steppe life developed around different needs from those of settled agricultural societies.",
        },
      ],

      sourceRefs: [
        {
          sourceId: "smithsonian-book",
          label: "Smithsonian",
        },
      ],
    },

    /* =====================================================
       EMPIRE
    ====================================================== */

    {
      type: "article",
      id: "building-empire",

      eyebrow: "Conquest begins",

      title: "How did Genghis Khan build an empire?",

      paragraphs: [
        "After establishing his authority in Mongolia, Genghis Khan turned increasingly towards conquest outside the steppe. Mongol armies campaigned in northern China and later moved west into Central Asia.",

        "Military success came from more than simply having large numbers of horses. The Mongols combined exceptional mobility with mounted archery, organisation, discipline and effective leadership.",

        "The political situation outside Mongolia mattered too. The Metropolitan Museum of Art points to weakened states across Asia as another factor that helped Mongol expansion.",

        "But Mongol conquest was also extremely violent. Military organisation and political achievement cannot be separated from the destruction inflicted on many of the societies the Mongols attacked.",
      ],

      highlight:
        "The Mongols were formidable because they were organised — not because they were simply an uncontrolled 'horde'.",

      sourceRefs: [
        {
          sourceId: "met-legacy",
          label: "The Metropolitan Museum of Art",
        },
        {
          sourceId: "smithsonian-nomads",
          label: "Smithsonian",
        },
      ],
    },

    {
      type: "facts",
      id: "military",

      eyebrow: "How did it work?",

      title: "Inside the Mongol military machine.",

      dark: true,

      intro:
        "Several advantages worked together. No single one explains Mongol success.",

      facts: [
        {
          icon: "🐎",
          title: "Mobility",
          text: "Mounted forces could travel rapidly over enormous distances.",
        },
        {
          icon: "🏹",
          title: "Archery",
          text: "Mongol armies included highly effective mounted archers.",
        },
        {
          icon: "⚔️",
          title: "Discipline",
          text: "Strong military organisation helped armies coordinate complex campaigns.",
        },
        {
          icon: "🧠",
          title: "Leadership",
          text: "Genghis Khan's leadership and organisational ability were crucial to the new Mongol state.",
        },
      ],

      sourceRefs: [
        {
          sourceId: "met-legacy",
          label: "The Met",
        },
        {
          sourceId: "smithsonian-nomads",
          label: "Smithsonian",
        },
      ],
    },

    /* =====================================================
       WHERE DID THEY GO?
    ====================================================== */

    {
      type: "article",
      id: "expansion",

      eyebrow: "Across Asia",

      title: "The conquests spread.",

      paragraphs: [
        "Mongol forces attacked the Jin state in northern China. The British Museum records the capture of Beijing in 1215.",

        "Genghis Khan also turned west. Conflict with the Khwarazmian Empire led to a huge campaign in Central Asia. The British Museum records Genghis Khan capturing Bukhara in 1220.",

        "By the time of his death, Mongol power extended across an enormous territory. Yet the familiar map showing the Mongol Empire at its maximum size can be misleading if we label all of it 'Genghis Khan's empire'.",

        "His descendants continued the conquests. The Metropolitan Museum of Art states that the Mongol Empire reached its greatest extent two generations after Genghis Khan.",
      ],

      highlight:
        "Genghis Khan founded the empire. He did NOT personally conquer everything shown on maps of the Mongol Empire at its maximum size.",

      sourceRefs: [
        {
          sourceId: "british-museum",
          label: "British Museum",
        },
        {
          sourceId: "met-legacy",
          label: "The Met",
        },
      ],
    },

    {
      type: "timeline",
      id: "expansion-timeline",

      eyebrow: "Four moments",

      title: "Watch the story move.",

      intro: "This is only a snapshot of a much larger series of campaigns.",

      items: [
        {
          date: "1206",
          title: "A new Mongol power",
          text: "Temüjin is recognised as Genghis Khan.",
        },
        {
          date: "1215",
          title: "Beijing",
          text: "Mongol forces capture Beijing during the campaigns in northern China.",
        },
        {
          date: "1220",
          title: "Bukhara",
          text: "Genghis Khan captures Bukhara during the Central Asian campaign.",
        },
        {
          date: "1227",
          title: "Genghis Khan dies",
          text: "His descendants continue Mongol expansion.",
        },
      ],

      sourceRefs: [
        {
          sourceId: "british-museum",
          label: "British Museum chronology",
        },
        {
          sourceId: "iranica-genghis",
          label: "Encyclopaedia Iranica",
        },
      ],
    },

    /* =====================================================
       VIOLENCE
    ====================================================== */

    {
      type: "statement",
      id: "cost",

      eyebrow: "The human cost",

      title: "CONQUEST HAD A COST.",

      text: "The Mongol conquests caused immense destruction and bloodshed. Settlements were attacked and populations suffered devastating violence. The Metropolitan Museum of Art explicitly places havoc and devastation alongside leadership and military organisation when explaining the creation of the empire.",

      questions: ["CONQUEROR?", "RULER?", "DESTROYER?", "CONNECTOR?"],

      sourceRefs: [
        {
          sourceId: "met-legacy",
          label: "The Metropolitan Museum of Art",
        },
        {
          sourceId: "smithsonian-book",
          label: "Smithsonian",
        },
      ],
    },

    /* =====================================================
       GOVERNMENT
    ====================================================== */

    {
      type: "article",
      id: "governing",

      eyebrow: "Beyond warfare",

      title: "How do you rule an empire?",

      paragraphs: [
        "Conquering territory was only part of the problem. Mongol rulers also had to govern cities and populations whose languages, religions and political traditions were very different from their own.",

        "Genghis Khan did not attempt to do everything using Mongols alone. Smithsonian material explains that he used local officials from conquered territories, including Uyghurs and people from northern China, to advise him on government.",

        "Later Mongol rulers continued adapting administrative systems from conquered societies. The Metropolitan Museum of Art describes former local officials handling everyday administration while Mongols occupied many of the highest positions.",

        "Communication was another challenge. Under later Mongol rule, networks of relay stations and mounted messengers helped written orders travel thousands of miles across the empire.",
      ],

      highlight:
        "An empire could be conquered on horseback — but governing one required administrators, information and communication.",

      sourceRefs: [
        {
          sourceId: "smithsonian-nomads",
          label: "Smithsonian",
        },
        {
          sourceId: "met-legacy",
          label: "The Met",
        },
      ],
    },

    /* =====================================================
       CONNECTION
    ====================================================== */

    {
      type: "article",
      id: "connections",

      eyebrow: "An unexpected consequence",

      title: "Did the Mongol Empire connect distant worlds?",

      paragraphs: [
        "Conquest brought terrible destruction, but the enormous political network created by the Mongols also changed how people and objects moved across Eurasia.",

        "The Metropolitan Museum of Art describes active trade and the movement or resettlement of artists and craftspeople along major routes. Artistic ideas from distant societies began influencing one another.",

        "This was particularly visible between East Asia, Central Asia and Iran. Designs, technologies, objects and skilled people travelled across political and cultural boundaries.",

        "That does not erase the violence of conquest. Both developments belong to the same complicated history: devastating warfare could be followed by periods of increased communication and exchange.",
      ],

      sourceRefs: [
        {
          sourceId: "met-legacy",
          label: "The Metropolitan Museum of Art",
        },
        {
          sourceId: "smithsonian-book",
          label: "Smithsonian",
        },
      ],
    },

    {
      type: "journey",
      id: "movement",

      eyebrow: "Across Eurasia",

      title: "What was moving?",

      intro:
        "The Mongol world became a route through which many different things travelled.",

      items: [
        {
          icon: "🧑‍🤝‍🧑",
          title: "People",
        },
        {
          icon: "🏺",
          title: "Objects",
        },
        {
          icon: "🧑‍🎨",
          title: "Artists",
        },
        {
          icon: "🧵",
          title: "Textiles",
        },
        {
          icon: "💰",
          title: "Trade",
        },
        {
          icon: "💡",
          title: "Ideas",
        },
      ],

      sourceRefs: [
        {
          sourceId: "met-legacy",
          label: "The Met",
        },
      ],
    },

    /* =====================================================
       DEATH AND AFTERMATH
    ====================================================== */

    {
      type: "big-date",
      id: "1227",

      date: "1227",

      eyebrow: "The founder dies",

      title: "Genghis Khan dies — the empire doesn't.",

      text: "Genghis Khan died in 1227 during his final campaigns. Mongol expansion continued under his family, and some conquests associated with the Mongol Empire were completed only after his death.",

      sourceRefs: [
        {
          sourceId: "iranica-genghis",
          label: "Encyclopaedia Iranica",
        },
      ],
    },

    {
      type: "article",
      id: "after-genghis",

      eyebrow: "The next generations",

      title: "His descendants built something even bigger.",

      paragraphs: [
        "Genghis Khan's successors continued expanding Mongol power. Northern China was not fully conquered during his lifetime, and later generations pushed Mongol rule much farther across Eurasia.",

        "Eventually the enormous empire divided into several major Mongol realms. These included the Golden Horde, the Chagatai Khanate, the Ilkhanate and the Yuan dynasty.",

        "The Yuan dynasty brings the story directly back to East Asia. Its founder, Kublai Khan, was Genghis Khan's grandson. Under Kublai, Mongol rule extended across China.",

        "The Met describes the Mongol Empire as reaching its greatest extent two generations after Genghis Khan. His historical importance therefore lies not only in what he conquered personally, but in the political system and ruling dynasty he created.",
      ],

      sourceRefs: [
        {
          sourceId: "smithsonian-nomads",
          label: "Smithsonian",
        },
        {
          sourceId: "met-legacy",
          label: "The Met",
        },
      ],
    },

    {
      type: "facts",
      id: "successor-states",

      eyebrow: "After the united empire",

      title: "Four major Mongol realms.",

      facts: [
        {
          icon: "🏯",
          title: "Yuan Dynasty",
          text: "Founded in China by Genghis Khan's grandson Kublai Khan.",
        },
        {
          icon: "🐎",
          title: "Chagatai Khanate",
          text: "A major Mongol realm centred in Central Asia.",
        },
        {
          icon: "🌾",
          title: "Golden Horde",
          text: "A Mongol realm stretching across the western Eurasian steppe and into areas of Russia and Europe.",
        },
        {
          icon: "🏺",
          title: "Ilkhanate",
          text: "The Mongol dynasty that ruled Iran and surrounding territories.",
        },
      ],

      sourceRefs: [
        {
          sourceId: "met-legacy",
          label: "The Met",
        },
        {
          sourceId: "smithsonian-nomads",
          label: "Smithsonian",
        },
      ],
    },

    /* =====================================================
       FINAL ENQUIRY
    ====================================================== */

    {
      type: "choice",
      id: "judgement",

      eyebrow: "Your turn",

      title: "How should history remember Genghis Khan?",

      intro:
        "You've now seen more than one side of the story. Choose the three parts of his legacy that you think are most important.",

      instruction: "Choose exactly three pieces of evidence.",

      maxChoices: 3,

      options: [
        "Military conquest",
        "Destruction and loss of life",
        "Leadership",
        "Political organisation",
        "The empire created by his family",
        "Trade and communication",
        "Movement of people and ideas",
        "Cultural exchange",
      ],

      completionText:
        "There isn't one simple label that captures the whole story. A strong historical judgement explains which evidence matters most — and why.",
    },
  ],
};
