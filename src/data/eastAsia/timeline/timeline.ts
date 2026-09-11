import type { RegionalTimelineConfig } from "@/components/shared/regional-timeline/types";

export const eastAsiaTimeline: RegionalTimelineConfig = {
  region: "east-asia",
  regionName: "East Asia",

  title: "East Asia Through Time",

  intro:
    "Travel through thousands of years of East Asian history. See kingdoms rise, ideas travel, empires expand, borders change and modern nations emerge — while exploring how the histories of the region connect.",

  backHref: "/east-asia",

  filters: [
    { id: "china", label: "China" },
    { id: "japan", label: "Japan" },
    { id: "korea", label: "Korea" },
    { id: "mongolia", label: "Mongolia" },
    { id: "taiwan", label: "Taiwan" },
  ],

  eras: [
    {
      id: "early-worlds",
      title: "Early Worlds",
      subtitle:
        "Early settlements, societies and civilisations begin to develop across the region.",
    },
    {
      id: "kingdoms-dynasties",
      title: "Kingdoms & Dynasties",
      subtitle:
        "Powerful kingdoms and dynasties grow, while ideas, religions and technologies travel between societies.",
    },
    {
      id: "empires-exchange",
      title: "Empires & Exchange",
      subtitle:
        "Conquest, trade and cultural exchange reshape East Asia and connect it with a much wider world.",
    },
    {
      id: "change-conflict",
      title: "Change & Conflict",
      subtitle:
        "Industrialisation, imperial expansion and political upheaval transform the region.",
    },
    {
      id: "division-rebuilding",
      title: "Division & Rebuilding",
      subtitle:
        "War, revolution and new political borders reshape East Asia during the twentieth century.",
    },
    {
      id: "modern-east-asia",
      title: "Modern East Asia",
      subtitle:
        "Rapid economic, technological and social change creates the East Asia we recognise today.",
    },
  ],

  events: [
    {
      id: "shang-dynasty",
      date: "c. 1600 BCE",
      sortYear: -1600,
      title: "The Shang Dynasty",
      summary:
        "The Shang ruled parts of the Yellow River valley and left some of the earliest surviving written records from ancient China.",
      places: ["china"],
      era: "early-worlds",
      significance:
        "Shang inscriptions provide important evidence about early Chinese writing, government, religion and society.",
    },

    {
      id: "zhou-dynasty",
      date: "c. 1046 BCE",
      sortYear: -1046,
      title: "The Zhou Dynasty begins",
      summary:
        "The Zhou defeated the Shang and established a dynasty that would last for centuries.",
      places: ["china"],
      era: "early-worlds",
      significance:
        "Ideas that became deeply influential in Chinese political thought developed during the Zhou period.",
    },

    {
      id: "qin-unification",
      date: "221 BCE",
      sortYear: -221,
      title: "China is unified under the Qin",
      summary:
        "Qin Shi Huang defeated rival states and became the first emperor of a unified Chinese empire.",
      places: ["china"],
      era: "early-worlds",
      significance:
        "The Qin helped establish systems of government and standardisation that influenced later Chinese dynasties.",
    },

    {
      id: "han-dynasty",
      date: "206 BCE – 220 CE",
      sortYear: -206,
      title: "The Han Dynasty",
      summary:
        "The Han ruled a powerful empire and expanded political and trading connections across Asia.",
      places: ["china"],
      era: "early-worlds",
      significance:
        "Trade networks associated with the Silk Roads helped move goods, technologies, beliefs and ideas across Eurasia.",
    },

    {
      id: "three-kingdoms-korea",
      date: "c. 1st century BCE – 7th century CE",
      sortYear: -50,
      title: "Korea's Three Kingdoms",
      summary:
        "Goguryeo, Baekje and Silla became major kingdoms on the Korean Peninsula and surrounding areas.",
      places: ["korea"],
      era: "kingdoms-dynasties",
      significance:
        "The kingdoms developed distinct cultures while maintaining important connections with neighbouring China and Japan.",
    },

    {
      id: "buddhism-east-asia",
      date: "1st–6th centuries CE",
      sortYear: 100,
      title: "Buddhism spreads across East Asia",
      summary:
        "Buddhism travelled from South and Central Asia into China and later became influential in Korea and Japan.",
      places: ["china", "korea", "japan"],
      era: "kingdoms-dynasties",
      significance:
        "The movement of Buddhism shows how religious ideas, art, texts and architecture travelled between societies.",
    },

    {
      id: "tang-dynasty",
      date: "618–907",
      sortYear: 618,
      title: "Tang China",
      summary:
        "The Tang Dynasty ruled during a period of major cultural, political and economic influence.",
      places: ["china", "korea", "japan"],
      era: "kingdoms-dynasties",
      significance:
        "Tang China became an important cultural centre whose writing, government, religion, art and urban culture influenced neighbouring societies.",
    },

    {
      id: "silla-unification",
      date: "668",
      sortYear: 668,
      title: "Silla controls most of the Korean Peninsula",
      summary:
        "With Tang assistance, Silla defeated rival kingdoms and came to control much of the Korean Peninsula.",
      places: ["korea", "china"],
      era: "kingdoms-dynasties",
    },

    {
      id: "heian-period",
      date: "794–1185",
      sortYear: 794,
      title: "Japan's Heian period",
      summary:
        "The imperial court at Heian-kyo, modern Kyoto, became the centre of an influential period of Japanese court culture.",
      places: ["japan"],
      era: "kingdoms-dynasties",
      significance:
        "Literature and artistic traditions flourished, including works such as The Tale of Genji.",
    },

    {
      id: "genghis-khan",
      date: "1206",
      sortYear: 1206,
      title: "Genghis Khan and the Mongol Empire",
      summary:
        "Temüjin was proclaimed Genghis Khan after uniting many Mongol groups and began building a vast empire.",
      places: ["mongolia", "china", "korea"],
      era: "empires-exchange",
      significance:
        "Mongol expansion transformed politics and connections across East Asia and much of Eurasia.",
    },

    {
      id: "yuan-dynasty",
      date: "1271–1368",
      sortYear: 1271,
      title: "The Yuan Dynasty",
      summary:
        "Kublai Khan established the Yuan Dynasty and eventually conquered the Southern Song.",
      places: ["mongolia", "china", "korea"],
      era: "empires-exchange",
      significance:
        "The Yuan period formed part of the wider Mongol imperial world, strengthening long-distance connections across Eurasia.",
    },

    {
      id: "ming-dynasty",
      date: "1368–1644",
      sortYear: 1368,
      title: "The Ming Dynasty",
      summary:
        "The Ming replaced the Yuan and ruled China for nearly three centuries.",
      places: ["china"],
      era: "empires-exchange",
      significance:
        "The period included major developments in trade, cities, arts and state power.",
    },

    {
      id: "joseon-dynasty",
      date: "1392–1910",
      sortYear: 1392,
      title: "The Joseon Dynasty",
      summary:
        "Joseon became the dominant Korean dynasty and ruled for more than five centuries.",
      places: ["korea"],
      era: "empires-exchange",
      significance:
        "Joseon shaped many aspects of Korean government, culture and society.",
    },

    {
      id: "hangul",
      date: "1443–1446",
      sortYear: 1443,
      title: "Hangul is created",
      summary:
        "King Sejong and scholars developed a new writing system for the Korean language.",
      places: ["korea"],
      era: "empires-exchange",
      significance:
        "Hangul made written Korean more accessible and remains the writing system used for Korean today.",
    },

    {
      id: "tokugawa",
      date: "1603–1868",
      sortYear: 1603,
      title: "The Tokugawa shogunate",
      summary:
        "The Tokugawa shogunate established a long period of political stability under military government in Japan.",
      places: ["japan"],
      era: "empires-exchange",
      significance:
        "Cities, commerce and distinctive forms of popular culture grew significantly during the Edo period.",
    },

    {
      id: "qing-dynasty",
      date: "1644–1912",
      sortYear: 1644,
      title: "The Qing Dynasty",
      summary:
        "The Manchu-led Qing became China's final imperial dynasty and ruled a large multi-ethnic empire.",
      places: ["china", "mongolia", "taiwan"],
      era: "empires-exchange",
      significance:
        "The Qing period played a major role in shaping the political geography of modern East Asia.",
    },

    {
      id: "qing-taiwan",
      date: "1683",
      sortYear: 1683,
      title: "Taiwan comes under Qing rule",
      summary:
        "Qing forces defeated the Zheng regime and incorporated Taiwan into the Qing Empire.",
      places: ["taiwan", "china"],
      era: "empires-exchange",
    },

    {
      id: "meiji-restoration",
      date: "1868",
      sortYear: 1868,
      title: "The Meiji Restoration",
      summary:
        "Political change restored imperial rule in Japan and began a period of rapid modernisation and industrialisation.",
      places: ["japan"],
      era: "change-conflict",
      significance:
        "Japan rapidly transformed its government, military, economy and industry and became a major regional power.",
    },

    {
      id: "japan-taiwan",
      date: "1895",
      sortYear: 1895,
      title: "Taiwan comes under Japanese rule",
      summary:
        "Following China's defeat in the First Sino-Japanese War, the Qing ceded Taiwan to Japan.",
      places: ["taiwan", "japan", "china"],
      era: "change-conflict",
      significance:
        "Taiwan remained under Japanese colonial rule until the end of the Second World War.",
    },

    {
      id: "korea-annexed",
      date: "1910",
      sortYear: 1910,
      title: "Japan annexes Korea",
      summary:
        "Japan formally annexed Korea after years of increasing political and military control.",
      places: ["korea", "japan"],
      era: "change-conflict",
      significance:
        "Japanese colonial rule lasted until 1945 and had profound political, social and cultural consequences.",
    },

    {
      id: "republic-china",
      date: "1912",
      sortYear: 1912,
      title: "The Republic of China is established",
      summary:
        "The Qing Dynasty ended following revolution, bringing more than two thousand years of imperial government in China to a close.",
      places: ["china", "taiwan"],
      era: "change-conflict",
    },

    {
      id: "mongolian-independence",
      date: "1911–1921",
      sortYear: 1911,
      title: "Mongolia moves towards independence",
      summary:
        "Mongolia declared independence from Qing rule in 1911, with revolutionary change in 1921 helping establish lasting separation from China.",
      places: ["mongolia", "china"],
      era: "change-conflict",
    },

    {
      id: "second-world-war",
      date: "1937–1945",
      sortYear: 1937,
      title: "War spreads across East Asia",
      summary:
        "Full-scale war between China and Japan began in 1937 and later became part of the wider Second World War in Asia and the Pacific.",
      places: ["china", "japan", "korea", "taiwan"],
      era: "change-conflict",
      significance:
        "The conflict caused enormous destruction and loss of life and profoundly changed the political future of the region.",
    },

    {
      id: "korea-divided",
      date: "1945–1948",
      sortYear: 1945,
      title: "Korea is divided",
      summary:
        "After Japanese colonial rule ended in 1945, the Korean Peninsula was divided into Soviet and American occupation zones. Separate governments emerged in 1948.",
      places: ["korea"],
      era: "division-rebuilding",
      significance:
        "The division created the foundations of today's North Korea and South Korea.",
    },

    {
      id: "taiwan-1945",
      date: "1945",
      sortYear: 1945.1,
      title: "Japanese rule of Taiwan ends",
      summary:
        "At the end of the Second World War, administration of Taiwan passed from Japan to the Republic of China government.",
      places: ["taiwan", "japan"],
      era: "division-rebuilding",
    },

    {
      id: "prc-roc",
      date: "1949",
      sortYear: 1949,
      title: "Two governments across the Taiwan Strait",
      summary:
        "The Chinese Communist Party established the People's Republic of China on the mainland. The Republic of China government relocated to Taiwan after losing the Chinese Civil War.",
      places: ["china", "taiwan"],
      era: "division-rebuilding",
      significance:
        "The events of 1949 remain central to understanding relations across the Taiwan Strait today.",
    },

    {
      id: "korean-war",
      date: "1950–1953",
      sortYear: 1950,
      title: "The Korean War",
      summary:
        "War broke out between North and South Korea and drew in forces from several other countries.",
      places: ["korea", "china"],
      era: "division-rebuilding",
      significance:
        "The 1953 armistice stopped the fighting but did not create a peace treaty. The peninsula remains divided.",
    },

    {
      id: "japan-postwar",
      date: "1950s–1980s",
      sortYear: 1955,
      title: "Japan's rapid economic growth",
      summary:
        "Post-war Japan experienced decades of rapid industrial and economic growth.",
      places: ["japan"],
      era: "modern-east-asia",
      significance:
        "Japan became one of the world's largest economies and a major centre for technology, manufacturing and popular culture.",
    },

    {
      id: "south-korea-growth",
      date: "1960s–1990s",
      sortYear: 1960,
      title: "South Korea transforms",
      summary:
        "South Korea experienced rapid industrialisation and economic development, followed by a transition towards democratic government.",
      places: ["korea"],
      era: "modern-east-asia",
      significance:
        "South Korea later became a major global economy and an influential centre for technology and popular culture.",
    },

    {
      id: "china-reform",
      date: "From 1978",
      sortYear: 1978,
      title: "Economic reform in China",
      summary:
        "China introduced major economic reforms that expanded market activity, international trade and foreign investment.",
      places: ["china"],
      era: "modern-east-asia",
      significance:
        "The reforms contributed to enormous economic growth and transformed China's role in the global economy.",
    },

    {
      id: "taiwan-democratisation",
      date: "1980s–1990s",
      sortYear: 1987,
      title: "Taiwan democratises",
      summary:
        "Taiwan moved away from decades of authoritarian rule and developed a competitive democratic political system.",
      places: ["taiwan"],
      era: "modern-east-asia",
      significance:
        "Taiwan held its first direct presidential election in 1996.",
    },

    {
      id: "east-asia-today",
      date: "21st century",
      sortYear: 2000,
      title: "East Asia today",
      summary:
        "East Asia is home to major global economies, rapidly changing cities, powerful cultural industries and hundreds of millions of people whose lives connect the region to the wider world.",
      places: ["china", "japan", "korea", "mongolia", "taiwan"],
      era: "modern-east-asia",
      significance:
        "The region continues to change while carrying forward histories and traditions stretching back thousands of years.",
    },
  ],

  theme: {
    background: "#f3eee2",
    surface: "#fffdf7",
    text: "#202721",
    mutedText: "#647066",

    primary: "#1e2b25",
    secondary: "#a03932",
    accent: "#d6b76f",
  },
};
