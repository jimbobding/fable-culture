export type EastAsiaCountry = {
  slug: string;
  name: string;
  flag: string;

  capital: string;
  population: string;
  languages: string[];
  currency: string;

  heroImage: string;

  intro: string;
  overview: string;

  tags: string[];

  theme: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    card: string;
    text: string;
    timeline: string;
  };

  factFile: {
    capital?: {
      image: string;
      title: string;
      description: string;
    };

    history?: {
      image: string;
      title: string;
      description: string;
    };

    food?: {
      image: string;
      title: string;
      description: string;
    };

    wildlife?: {
      image: string;
      title: string;
      description: string;
    };

    culture?: {
      image: string;
      title: string;
      description: string;
    };
  };

  timeline: {
    year: string;
    title: string;
    text: string;
    periodKey?: string;
    isGap?: boolean;
    prompt?: string;
    questions?: string[];
  }[];

  places: {
    title: string;
    tag: string;
    image: string;
    description: string;
  }[];

  influentialFigures: {
    name: string;
    role: string;
    image: string;
    description: string;
  }[];

  culturalSpotlights?: {
    title: string;
    image: string;
    description: string;
  }[];

  facts: string[];
};

export const eastAsiaCountries: EastAsiaCountry[] = [
  {
    slug: "china",
    name: "China",
    flag: "🇨🇳",

    capital: "Beijing",
    population: "1.4+ billion",
    languages: [
      "Mandarin Chinese",
      "Other Chinese languages and regional languages",
    ],
    currency: "Renminbi (Yuan)",

    heroImage: "/images/continents/east-asia/countries/china/hero.jpg",

    intro:
      "China is one of the world's largest countries, with a history stretching back thousands of years and a huge variety of landscapes, traditions, languages, food, art, and modern cities.",

    overview:
      "From ancient dynasties and the Great Wall to giant modern cities, high-speed rail, traditional festivals, martial arts, food, art, and technology, China has a long and complex history and continues to have a major influence on the world today.",

    tags: ["History", "Food", "Traditions", "Technology", "Art", "Wildlife"],

    theme: {
      primary: "#a61f24", // strong Chinese red
      secondary: "#4a1718", // deep dark red
      accent: "#d4af37", // gold
      background: "linear-gradient(180deg, #f2dfc2 0%, #d8b98b 100%)",
      card: "rgba(255,245,225,0.90)",
      text: "#2c1b17",
      timeline: "#a61f24",
    },

    factFile: {
      capital: {
        image:
          "/images/continents/east-asia/countries/china/fact-file/beijing.jpg",

        title: "Beijing",

        description:
          "Beijing is the capital of China and has been an important political and cultural centre for centuries. It is home to historic sites alongside a vast modern city.",
      },

      history: {
        image:
          "/images/continents/east-asia/countries/china/fact-file/terracotta-army.jpg",

        title: "Terracotta Army",

        description:
          "The Terracotta Army is a huge collection of ancient clay soldiers created more than 2,000 years ago to guard the tomb of China's first emperor, Qin Shi Huang.",
      },

      food: {
        image:
          "/images/continents/east-asia/countries/china/fact-file/chinese-food.jpg",

        title: "Chinese Cuisine",

        description:
          "China has many different regional cuisines. Ingredients, flavours and cooking methods vary greatly between different parts of the country.",
      },

      wildlife: {
        image:
          "/images/continents/east-asia/countries/china/fact-file/giant-panda.jpg",

        title: "Giant Panda",

        description:
          "The giant panda is native to China and mainly lives in mountainous bamboo forests. It has become one of the world's most recognisable conservation symbols.",
      },

      culture: {
        image:
          "/images/continents/east-asia/countries/china/fact-file/lunar-new-year.jpg",

        title: "Lunar New Year",

        description:
          "Lunar New Year is an important celebration in China, with traditions that can include family gatherings, special foods, decorations and performances.",
      },
    },

    timeline: [
      {
        year: "c. 1600–1046 BCE",
        title: "Shang Dynasty",
        text: "The Shang ruled parts of northern China and developed sophisticated bronze working, cities and an early form of Chinese writing recorded on oracle bones.",
      },

      {
        year: "1046–256 BCE",
        title: "Zhou Dynasty",
        text: "The Zhou dynasty became China's longest-lasting dynasty. The idea of the Mandate of Heaven developed to explain why rulers had the right to govern.",
      },

      {
        year: "551–479 BCE",
        title: "Confucius",
        text: "The philosopher Confucius taught ideas about education, family, morality, responsibility and good government that profoundly influenced Chinese and East Asian societies.",
      },

      // STUDENT GAP 1
      {
        periodKey: "china-qin-unification",
        year: "221 BCE",
        title: "🔍 Your Investigation: China is Unified",
        text: "In 221 BCE, the ruler of Qin defeated rival kingdoms and created a unified Chinese empire.",
        isGap: true,
        prompt:
          "Investigate Qin Shi Huang and the unification of China. What did he change, and why is his reign still remembered?",
        questions: [
          "Who was Qin Shi Huang?",
          "How did he change China?",
          "What was the Terracotta Army?",
        ],
      },

      {
        year: "206 BCE–220 CE",
        title: "Han Dynasty",
        text: "The Han dynasty expanded the empire and strengthened government. Developments in science, technology and trade helped shape Chinese society for centuries.",
      },

      {
        year: "2nd Century BCE onwards",
        title: "The Silk Roads",
        text: "Trade networks connected China with Central Asia and regions much farther west. Silk and other goods travelled alongside technologies, religions and ideas.",
      },

      {
        year: "618–907",
        title: "Tang Dynasty",
        text: "Tang China became wealthy, powerful and highly connected with other parts of Asia. Chang'an was one of the world's great cities and poetry and art flourished.",
      },

      {
        year: "960–1279",
        title: "Song Dynasty",
        text: "The Song era saw major developments in trade, cities, printing, science and technology. Gunpowder, the compass and movable-type printing were developed or advanced in China.",
      },

      {
        year: "1271–1368",
        title: "Yuan Dynasty",
        text: "Kublai Khan established the Yuan dynasty after the Mongol conquest of China. China became part of the enormous Mongol-led network stretching across much of Eurasia.",
      },

      {
        year: "1368–1644",
        title: "Ming Dynasty",
        text: "The Ming restored Chinese rule after the Yuan dynasty. The period saw major construction, artistic production and overseas voyages.",
      },

      {
        year: "1405–1433",
        title: "Voyages of Zheng He",
        text: "Admiral Zheng He commanded enormous fleets that travelled through Southeast Asia and across the Indian Ocean, reaching ports in Arabia and eastern Africa.",
      },

      {
        year: "1420",
        title: "The Forbidden City",
        text: "The enormous imperial palace complex in Beijing was completed during the Ming dynasty and became the political centre of imperial China.",
      },

      {
        year: "1644–1912",
        title: "Qing Dynasty",
        text: "The Manchu-led Qing became China's final imperial dynasty. At its height, the Qing Empire controlled a vast territory and governed hundreds of millions of people.",
      },

      {
        year: "1839–1842",
        title: "First Opium War",
        text: "Conflict with Britain ended in Chinese defeat and the Treaty of Nanjing. China was forced to open ports to foreign trade and cede Hong Kong to Britain.",
      },

      {
        year: "1850–1864",
        title: "Taiping Rebellion",
        text: "A huge civil war challenged Qing rule and devastated large areas of China. Tens of millions of people are estimated to have died.",
      },

      {
        year: "1899–1901",
        title: "Boxer Rebellion",
        text: "An anti-foreign and anti-Christian movement attacked foreign interests in China. An international military force intervened and defeated the uprising.",
      },

      {
        year: "1911–1912",
        title: "Chinese Revolution",
        text: "Revolution brought down the Qing dynasty and ended more than two thousand years of imperial government. The Republic of China was established.",
      },

      {
        year: "1921",
        title: "Chinese Communist Party Founded",
        text: "The Chinese Communist Party was established in Shanghai. It would later become one of the main forces competing for control of China.",
      },

      {
        year: "1934–1935",
        title: "The Long March",
        text: "Communist forces undertook a vast military retreat across China while fighting Nationalist forces. The Long March later became an important part of Communist Party history and Mao Zedong's rise.",
      },

      {
        year: "1937–1945",
        title: "Second Sino-Japanese War",
        text: "Japan's invasion led to years of devastating warfare across China. Millions of Chinese soldiers and civilians died during the conflict.",
      },

      // STUDENT GAP 2
      {
        periodKey: "china-prc-1949",
        year: "1949",
        title: "🔍 Your Investigation: The People's Republic of China",
        text: "After years of civil war, a new government was proclaimed in Beijing on 1 October 1949.",
        isGap: true,
        prompt:
          "Investigate the Chinese Communist Revolution and the creation of the People's Republic of China.",
        questions: [
          "Who was Mao Zedong?",
          "Who were the Communists fighting?",
          "What happened in China in 1949?",
        ],
      },

      {
        year: "1958–1962",
        title: "The Great Leap Forward",
        text: "Mao's government attempted to transform agriculture and industry extremely rapidly. The policies contributed to a catastrophic famine in which millions of people died.",
      },

      // STUDENT GAP 3
      {
        periodKey: "china-cultural-revolution",
        year: "1966–1976",
        title: "🔍 Your Investigation: The Cultural Revolution",
        text: "For a decade, China experienced enormous political and social upheaval as Mao attempted to reshape society and remove perceived opponents.",
        isGap: true,
        prompt:
          "Research the Cultural Revolution and explain how it affected people, education, culture and historic objects in China.",
        questions: [
          "Who were the Red Guards?",
          "What were the Four Olds?",
          "How were ordinary people's lives affected?",
        ],
      },

      {
        year: "1976",
        title: "Death of Mao Zedong",
        text: "Mao died after leading Communist China since 1949. His death was followed by major changes in China's political and economic direction.",
      },

      {
        year: "1978 onwards",
        title: "Reform and Opening Up",
        text: "Under Deng Xiaoping, China introduced major economic reforms, expanded international trade and allowed more market activity while remaining under Communist Party rule.",
      },

      {
        year: "1989",
        title: "Tiananmen Square",
        text: "Large demonstrations calling for political reform took place in Beijing. On 3–4 June, the government used military force to suppress the protests, causing deaths and injuries.",
      },

      {
        year: "1997",
        title: "Hong Kong Handover",
        text: "Britain transferred sovereignty over Hong Kong to China. Hong Kong became a Special Administrative Region under the 'one country, two systems' framework.",
      },

      {
        year: "2001",
        title: "China Joins the WTO",
        text: "China joined the World Trade Organization, accelerating its integration into the global economy and its growth as a manufacturing and trading power.",
      },

      {
        year: "2008",
        title: "Beijing Olympics",
        text: "Beijing hosted the Summer Olympic Games in an event widely viewed as a demonstration of China's growing international influence.",
      },

      {
        year: "2010s",
        title: "A Global Economic Power",
        text: "China became the world's second-largest economy and expanded its influence in global manufacturing, infrastructure, technology and trade.",
      },

      {
        year: "2022",
        title: "Beijing Winter Olympics",
        text: "Beijing became the first city to have hosted both the Summer and Winter Olympic Games.",
      },

      {
        year: "Today",
        title: "Modern China",
        text: "China is one of the world's largest economies and most populous countries, with major influence in manufacturing, technology, trade and international affairs while remaining governed by the Chinese Communist Party.",
      },
    ],

    places: [
      {
        title: "The Great Wall",
        tag: "Historic Landmark",

        image:
          "/images/continents/east-asia/countries/china/places/great-wall.jpg",

        description:
          "The Great Wall is a vast network of fortifications built and rebuilt over many centuries across northern China.",
      },

      {
        title: "Forbidden City",
        tag: "History",

        image:
          "/images/continents/east-asia/countries/china/places/forbidden-city.jpg",

        description:
          "The Forbidden City in Beijing was the imperial palace of Chinese emperors for almost 500 years and contains hundreds of historic buildings.",
      },

      {
        title: "Zhangjiajie",
        tag: "Nature",

        image:
          "/images/continents/east-asia/countries/china/places/zhangjiajie.jpg",

        description:
          "Zhangjiajie is famous for its dramatic sandstone pillars, forests and mountain scenery.",
      },

      {
        title: "Shanghai",
        tag: "Modern City",

        image:
          "/images/continents/east-asia/countries/china/places/shanghai.jpg",

        description:
          "Shanghai is one of China's largest cities and is known for its skyline, international connections, history, business and modern architecture.",
      },
    ],

    influentialFigures: [
      {
        name: "Jackie Chan",
        role: "Film & Martial Arts",

        image:
          "/images/continents/east-asia/countries/china/figures/jackie-chan.jpg",

        description:
          "Became internationally famous for combining martial arts, comedy and incredible stunt work in action films.",
      },

      {
        name: "Yao Ming",
        role: "Sport",

        image:
          "/images/continents/east-asia/countries/china/figures/yao-ming.jpg",

        description:
          "A 7 ft 6 in basketball star who became one of the most famous Chinese athletes in the world and played in the NBA.",
      },

      {
        name: "Confucius",
        role: "Philosophy",

        image:
          "/images/continents/east-asia/countries/china/figures/confucius.jpg",

        description:
          "An ancient teacher and philosopher whose ideas about education, family and society have influenced people for more than 2,000 years.",
      },

      {
        name: "Bruce Lee",
        role: "Film & Martial Arts",

        image:
          "/images/continents/east-asia/countries/china/figures/bruce-lee.jpg",

        description:
          "A legendary martial artist and film star who helped make Chinese martial arts famous to audiences around the world.",
      },
    ],

    culturalSpotlights: [
      {
        title: "Chinese Calligraphy",

        image:
          "/images/continents/east-asia/countries/china/cultural-spotlight/calligraphy.jpg",

        description:
          "Chinese calligraphy turns written characters into an expressive visual art. Different styles of brushwork have developed over centuries, connecting writing, history and artistic expression.",
      },
    ],

    facts: [
      "China is one of the largest countries in the world by land area.",
      "The Yangtze is the longest river in China and Asia.",
      "China is home to giant pandas in the wild.",
      "Chinese writing has a history stretching back thousands of years.",
      "China has many regional cuisines with very different ingredients and flavours.",
    ],
  },
  {
    slug: "japan",
    name: "Japan",
    flag: "🇯🇵",

    capital: "Tokyo",
    population: "About 123 million",
    languages: ["Japanese"],
    currency: "Japanese Yen",

    heroImage: "/images/continents/east-asia/countries/japan/hero.jpg",

    intro:
      "Japan is an island country in East Asia known for its long history, distinctive traditions, modern cities, food, art, technology, and globally influential popular culture.",

    overview:
      "Japan combines centuries-old traditions with modern life. Historic temples, castles, festivals and traditional arts exist alongside high-speed trains, huge cities, advanced technology, anime, manga, gaming and contemporary fashion. Japan is made up of thousands of islands, with most people living on the four main islands.",

    tags: [
      "Traditions",
      "Technology",
      "Food",
      "Anime & Gaming",
      "Art",
      "History",
    ],

    theme: {
      primary: "#b33a3a", // vermilion red
      secondary: "#272b29", // ink black
      accent: "#c5a45d", // muted gold
      background: "linear-gradient(180deg, #faf7f0 0%, #eee7dc 100%)",
      card: "rgba(255,255,255,0.88)",
      text: "#292d2a",
      timeline: "#b33a3a",
    },

    factFile: {
      capital: {
        image:
          "/images/continents/east-asia/countries/japan/fact-file/tokyo.jpg",

        title: "Tokyo",


        description:
          "Tokyo is the capital of Japan and one of the world's largest urban areas. It is known for its busy neighbourhoods, transport networks, technology, food, shopping and cultural attractions.",
      },

      history: {
        image:
          "/images/continents/east-asia/countries/japan/fact-file/samurai.jpg",

        title: "Samurai",

        description:
          "Samurai were members of Japan's warrior class. For centuries they played important military and political roles and became closely associated with Japanese history.",
      },

      food: {
        image:
          "/images/continents/east-asia/countries/japan/fact-file/sushi.jpg",

        title: "Japanese Food",

        description:
          "Japanese cuisine includes a huge range of dishes such as sushi, ramen, tempura and yakitori, with ingredients and specialities varying between regions.",
      },

      wildlife: {
        image:
          "/images/continents/east-asia/countries/japan/fact-file/snow-monkeys.jpg",

        title: "Japanese Macaque",

        description:
          "Japanese macaques are native to Japan and are sometimes called snow monkeys because some populations live in cold, snowy mountain regions.",
      },

      culture: {
        image:
          "/images/continents/east-asia/countries/japan/fact-file/anime-manga.jpg",

        title: "Anime & Manga",

        description:
          "Japanese animation and comics have become hugely popular around the world, influencing entertainment, art, fashion and gaming.",
      },
    },

    timeline: [
      {
        year: "c. 10,000 BCE",
        title: "Jōmon Japan",
        text: "The Jōmon period lasted for thousands of years and is associated with hunter-gatherer communities, settled villages and distinctive pottery. Some of the world's earliest known pottery was produced in prehistoric Japan.",
      },

      {
        year: "c. 300 BCE",
        title: "The Yayoi Period",
        text: "New farming methods, including wet-rice agriculture, spread through parts of Japan. Metalworking and increasingly complex settlements also developed.",
      },

      {
        year: "c. 250–538",
        title: "The Kofun Period",
        text: "Powerful rulers constructed enormous burial mounds known as kofun. During this period the Yamato state grew in influence and helped form the foundations of the Japanese imperial system.",
      },

      {
        year: "6th Century",
        title: "Buddhism Arrives in Japan",
        text: "Buddhist ideas, art and practices reached Japan from the Asian mainland, particularly through Korea. Buddhism became deeply influential in Japanese religion, art and architecture.",
      },

      {
        year: "710",
        title: "Nara Becomes the Capital",
        text: "A permanent imperial capital was established at Nara. The city was influenced by Chinese urban planning and became an important centre of government, Buddhism and culture.",
      },

      {
        year: "794",
        title: "The Heian Period Begins",
        text: "The imperial capital moved to Heian-kyō, modern Kyoto. Court culture flourished and distinctive Japanese forms of literature, poetry, painting and architecture developed.",
      },

      {
        year: "c. 1008",
        title: "The Tale of Genji",
        text: "Murasaki Shikibu wrote The Tale of Genji during the Heian period. It provides a remarkable picture of aristocratic life and is often described as one of the world's earliest novels.",
      },

      {
        year: "1185",
        title: "The Age of the Samurai",
        text: "Following years of conflict between powerful warrior families, the Minamoto clan emerged victorious. Samurai warriors increasingly became central to Japanese government and society.",
      },

      {
        year: "1192",
        title: "Kamakura Shogunate",
        text: "Minamoto no Yoritomo became shogun and established a military government at Kamakura. Although an emperor remained, much political power rested with warrior governments.",
      },

      {
        year: "1274 & 1281",
        title: "Mongol Invasions",
        text: "Forces of the Mongol-led Yuan dynasty attempted to invade Japan twice. Both invasions failed, with severe storms contributing to the destruction of invading fleets.",
      },

      {
        year: "1467–1477",
        title: "The Ōnin War",
        text: "A major civil war devastated much of Kyoto and weakened central authority. It helped begin the Sengoku period, when rival regional warlords competed for power.",
      },

      {
        year: "1543",
        title: "Europeans Arrive",
        text: "Portuguese traders reached Japan and introduced new goods and technologies, including firearms. European merchants and Christian missionaries became increasingly active.",
      },

      {
        year: "1600",
        title: "Battle of Sekigahara",
        text: "Tokugawa Ieyasu defeated a coalition of rivals at Sekigahara. The victory allowed him to establish control after generations of warfare between competing lords.",
      },

      {
        year: "1603",
        title: "Tokugawa Shogunate",
        text: "Tokugawa Ieyasu became shogun. The Tokugawa family governed Japan for more than 250 years from Edo, the city now known as Tokyo.",
      },

      {
        year: "1630s",
        title: "Japan Restricts Foreign Contact",
        text: "The Tokugawa government introduced strict controls on overseas travel, Christianity and foreign trade. Japan was not completely isolated, but international contact was carefully controlled.",
      },

      {
        year: "1600s–1800s",
        title: "Culture of the Edo Period",
        text: "Long periods of internal peace allowed cities and popular culture to flourish. Kabuki theatre, haiku poetry and ukiyo-e woodblock prints became important parts of Japanese cultural life.",
      },

      {
        year: "1831",
        title: "The Great Wave",
        text: "Katsushika Hokusai published The Great Wave off Kanagawa as part of his Thirty-Six Views of Mount Fuji series. It later became one of the world's most recognisable works of Japanese art.",
      },

      {
        year: "1853",
        title: "Commodore Perry Arrives",
        text: "American naval commander Matthew Perry arrived with warships and demanded that Japan open ports to American ships, increasing pressure on the Tokugawa government.",
      },

      // STUDENT GAP 1
      {
        periodKey: "japan-meiji-restoration",
        year: "1868",
        title: "🔍 Your Investigation: The Meiji Restoration",
        text: "Something happened in 1868 that completely changed how Japan was governed and began a period of enormous modernisation.",
        isGap: true,
        prompt:
          "Research the Meiji Restoration. What changed in Japan, and why was it such an important turning point?",
        questions: [
          "What happened to the Tokugawa shogunate?",
          "Who was Emperor Meiji?",
          "How did Japan begin to modernise?",
        ],
      },

      {
        year: "1889",
        title: "Meiji Constitution",
        text: "Japan adopted a new constitution as part of its transformation into a modern state. A national parliament, known as the Imperial Diet, was established.",
      },

      {
        year: "1894–1895",
        title: "First Sino-Japanese War",
        text: "Japan defeated Qing China in a conflict largely concerning influence over Korea. The victory demonstrated Japan's emergence as a major regional military power.",
      },

      {
        year: "1904–1905",
        title: "Russo-Japanese War",
        text: "Japan defeated the Russian Empire in a war fought over influence in East Asia. The result strengthened Japan's position as an international power.",
      },

      {
        year: "1910",
        title: "Korea Annexed",
        text: "Japan formally annexed Korea following years of increasing control. Japanese colonial rule continued until 1945.",
      },

      {
        year: "1931",
        title: "Invasion of Manchuria",
        text: "Japanese forces occupied Manchuria in northeastern China. Japan's military expansion on the Asian mainland continued during the following years.",
      },

      {
        year: "1937",
        title: "War with China",
        text: "Full-scale war broke out between Japan and China. The conflict caused enormous suffering and included atrocities committed against civilians and prisoners of war.",
      },

      {
        year: "1941",
        title: "Pacific War",
        text: "Japan attacked Pearl Harbor and other Allied positions across Asia and the Pacific, bringing the United States directly into the Second World War.",
      },

      // STUDENT GAP 2
      {
        periodKey: "japan-1945",
        year: "1945",
        title: "🔍 Your Investigation: Hiroshima & Nagasaki",
        text: "In August 1945, two Japanese cities experienced events that changed the course of the Second World War and the nuclear age.",
        isGap: true,
        prompt:
          "Research what happened to Hiroshima and Nagasaki in August 1945 and explain why these events remain historically important.",
        questions: [
          "What happened to the two cities?",
          "What was the human impact?",
          "How did these events relate to the end of the war?",
        ],
      },

      {
        year: "1945",
        title: "Japan Surrenders",
        text: "Japan announced its surrender in August 1945, bringing the Second World War to an end. The country subsequently came under Allied occupation led by the United States.",
      },

      {
        year: "1947",
        title: "New Constitution",
        text: "A new constitution established a parliamentary democracy, guaranteed a range of rights and included Japan's renunciation of war as a sovereign right.",
      },

      // STUDENT GAP 3
      {
        periodKey: "japan-economic-miracle",
        year: "1950s–1970s",
        title: "🔍 Your Investigation: Japan's Economic Miracle",
        text: "Within a few decades of the devastation of the Second World War, Japan had become one of the world's largest economies.",
        isGap: true,
        prompt:
          "Investigate Japan's post-war economic miracle. How did the country become a global industrial and technological power?",
        questions: [
          "Which Japanese industries became successful?",
          "What products did Japan export?",
          "How did everyday life in Japan change?",
        ],
      },

      {
        year: "1964",
        title: "Tokyo Olympics & Shinkansen",
        text: "Tokyo hosted the Summer Olympics and Japan's first Shinkansen high-speed railway opened between Tokyo and Osaka, becoming symbols of modern Japan.",
      },

      {
        year: "1970s–1980s",
        title: "Japanese Technology Goes Global",
        text: "Japanese companies became internationally famous for cars, cameras, televisions, music players and electronics.",
      },

      {
        year: "1983",
        title: "Nintendo Famicom",
        text: "Nintendo released the Family Computer, later adapted internationally as the Nintendo Entertainment System. Japanese video games became increasingly important globally.",
      },

      {
        year: "1990s",
        title: "Anime and Gaming Expand Worldwide",
        text: "Japanese video games, manga and anime developed enormous international audiences. Franchises such as Pokémon introduced a new generation to Japanese popular culture.",
      },

      {
        year: "2011",
        title: "Earthquake, Tsunami and Fukushima",
        text: "A massive earthquake caused a devastating tsunami and triggered a serious nuclear accident at Fukushima Daiichi. Thousands lost their lives and communities were severely affected.",
      },

      {
        year: "2021",
        title: "Tokyo Hosts the Olympics Again",
        text: "The delayed Tokyo 2020 Olympic and Paralympic Games were held in 2021 under restrictions caused by the COVID-19 pandemic.",
      },

      {
        year: "Today",
        title: "Japan's Global Cultural Influence",
        text: "Japan remains internationally influential in technology, design, food, film, fashion, animation, manga and gaming while maintaining many older cultural traditions.",
      },
    ],

    places: [
      {
        title: "Mount Fuji",
        tag: "Nature",

        image:
          "/images/continents/east-asia/countries/japan/places/mount-fuji.jpg",

        description:
          "Mount Fuji is Japan's highest mountain and one of the country's most recognisable landmarks. It has also inspired artists and writers for centuries.",
      },

      {
        title: "Kyoto",
        tag: "Culture & History",

        image: "/images/continents/east-asia/countries/japan/places/kyoto.jpg",

        description:
          "Kyoto was Japan's imperial capital for more than a thousand years and is famous for its temples, shrines, gardens and historic neighbourhoods.",
      },

      {
        title: "Hiroshima Peace Memorial",
        tag: "History",

        image:
          "/images/continents/east-asia/countries/japan/places/hiroshima.jpg",

        description:
          "The Hiroshima Peace Memorial preserves part of the city affected by the atomic bombing of 1945 and is now a place for remembrance and education about peace.",
      },
      {
        title: "Nara",
        tag: "History & Culture",

        image: "/images/continents/east-asia/countries/japan/places/nara.jpg",

        description:
          "Nara was an early capital of Japan and is known for its ancient temples, shrines and historic park, where hundreds of free-roaming deer have become a symbol of the city.",
      },
    ],

    influentialFigures: [
      {
        name: "Hayao Miyazaki",
        role: "Film & Animation",

        image:
          "/images/continents/east-asia/countries/japan/figures/hayao-miyazaki.jpg",

        description:
          "An internationally celebrated animator and filmmaker behind some of the world's best-known Japanese animated films.",
      },

      {
        name: "Shigeru Miyamoto",
        role: "Video Games",

        image:
          "/images/continents/east-asia/countries/japan/figures/shigeru-miyamoto.jpg",

        description:
          "A video-game designer who helped create some of gaming's most recognisable characters and series, including Mario and The Legend of Zelda.",
      },

      {
        name: "Naomi Osaka",
        role: "Sport",

        image:
          "/images/continents/east-asia/countries/japan/figures/naomi-osaka.jpg",

        description:
          "A Grand Slam-winning tennis player who became one of the most internationally recognised Japanese athletes of her generation.",
      },

      {
        name: "Yoko Ono",
        role: "Art & Music",

        image:
          "/images/continents/east-asia/countries/japan/figures/yoko-ono.jpg",

        description:
          "An internationally known artist, musician and activist associated with experimental art, music and peace activism, as well as her creative partnership with John Lennon.",
      },
    ],

    culturalSpotlights: [
      {
        title: "The Great Wave",

        image:
          "/images/continents/east-asia/countries/japan/cultural-spotlight/great-wave.jpg",

        description:
          "Created by Katsushika Hokusai in the early 1830s, The Great Wave off Kanagawa is one of the most recognisable works of Japanese art in the world. The print is part of a series showing views of Mount Fuji.",
      },

      {
        title: "Cherry Blossom Season",

        image:
          "/images/continents/east-asia/countries/japan/cultural-spotlight/cherry-blossom.jpg",

        description:
          "Each spring, people across Japan enjoy cherry blossom viewing, known as hanami. Friends and families gather beneath flowering cherry trees, continuing a tradition with a long history in Japanese culture.",
      },
    ],

    facts: [
      "Japan is an island country made up of thousands of islands.",
      "The four largest islands are Honshu, Hokkaido, Kyushu and Shikoku.",
      "Mount Fuji is the highest mountain in Japan.",
      "Japan's Shinkansen trains are famous for high-speed rail travel.",
      "Anime, manga and Japanese video games have become popular around the world.",
    ],
  },
  {
    slug: "south-korea",
    name: "South Korea",
    flag: "🇰🇷",

    capital: "Seoul",
    population: "About 52 million",
    languages: ["Korean"],
    currency: "South Korean Won",

    heroImage: "/images/continents/east-asia/countries/south-korea/hero.jpg",

    intro:
      "South Korea is an East Asian country known for its long history, modern cities, food, technology, music, film, sport, and distinctive cultural traditions.",

    overview:
      "South Korea combines historic palaces, temples, traditional neighbourhoods and centuries-old customs with some of the world's most modern cities. In recent decades, Korean music, television, film, food, beauty, fashion and technology have become increasingly influential around the world.",

    tags: ["K-Pop", "Technology", "Food", "History", "Film & TV", "Traditions"],

    theme: {
      primary: "#17365d",
      secondary: "#b52b32",
      accent: "#467aa3",
      background: "linear-gradient(180deg, #f8f8f5 0%, #e8edf0 100%)",
      card: "rgba(255,255,255,0.90)",
      text: "#202a33",
      timeline: "#17365d",
    },

    factFile: {
      capital: {
        image:
          "/images/continents/east-asia/countries/south-korea/fact-file/seoul.jpg",

        title: "Seoul",


        description:
          "Seoul is the capital and largest city of South Korea. Historic palaces and traditional neighbourhoods sit alongside skyscrapers, major technology companies, shopping districts and entertainment centres.",
      },

      history: {
        image:
          "/images/continents/east-asia/countries/south-korea/fact-file/gyeongbokgung.jpg",

        title: "Joseon Dynasty",

        description:
          "The Joseon Dynasty ruled Korea for more than five centuries. This period had a major influence on Korean government, education, architecture, art and cultural traditions.",
      },

      food: {
        image:
          "/images/continents/east-asia/countries/south-korea/fact-file/kimchi.jpg",

        title: "Kimchi",

        description:
          "Kimchi is one of Korea's best-known foods. Vegetables such as cabbage and radish are seasoned and fermented, with many different recipes and regional varieties.",
      },

      wildlife: {
        image:
          "/images/continents/east-asia/countries/south-korea/fact-file/red-crowned-crane.jpg",

        title: "Red-Crowned Crane",

        description:
          "The red-crowned crane is an important symbol in Korean culture, traditionally associated with longevity and peace. The species can be seen in parts of the Korean Peninsula.",
      },

      culture: {
        image:
          "/images/continents/east-asia/countries/south-korea/fact-file/k-pop.jpg",

        title: "K-Pop",

        description:
          "South Korean popular music has developed a huge international audience, combining music, dance, fashion, performance and highly produced visual entertainment.",
      },
    },

    timeline: [
      {
        year: "57 BCE–668 CE",
        title: "The Three Kingdoms",
        text: "Goguryeo, Baekje and Silla competed for control of the Korean Peninsula. The kingdoms developed distinctive cultures while exchanging ideas with China and Japan.",
      },

      {
        year: "668",
        title: "Unified Silla",
        text: "Silla gained control over much of the Korean Peninsula. Buddhism, art, architecture and international trade flourished during this period.",
      },

      {
        year: "918",
        title: "Goryeo Dynasty",
        text: "The Goryeo dynasty was founded. The modern name Korea comes from Goryeo, and the kingdom became famous for ceramics, Buddhism, art and printing.",
      },

      {
        year: "1230s",
        title: "Movable Metal Type",
        text: "Korean printers developed movable metal type, allowing texts to be reproduced using reusable metal characters centuries before printing became widespread in Europe.",
      },

      {
        year: "1392",
        title: "Joseon Dynasty Begins",
        text: "The Joseon dynasty was established and ruled for more than 500 years. Confucian ideas became particularly important in government, education and society.",
      },

      // STUDENT GAP 1
      {
        periodKey: "korea-hangul",
        year: "1443–1446",
        title: "🔍 Your Investigation: The Creation of Hangul",
        text: "During the reign of King Sejong, Korea developed a new way of writing its language.",
        isGap: true,
        prompt:
          "Investigate why Hangul was created and why it became so important to Korean culture and identity.",
        questions: [
          "Who was King Sejong?",
          "Why was a new alphabet needed?",
          "How did Hangul make reading and writing more accessible?",
        ],
      },

      {
        year: "1592–1598",
        title: "Japanese Invasions",
        text: "Japanese forces invaded Korea during the Imjin War. Korean resistance included famous naval victories led by Admiral Yi Sun-sin and his fleet.",
      },

      {
        year: "1897",
        title: "Korean Empire",
        text: "King Gojong declared the Korean Empire during a period of growing international pressure and attempts to modernise Korea.",
      },

      // STUDENT GAP 2
      {
        periodKey: "korea-japanese-rule",
        year: "1910–1945",
        title: "🔍 Your Investigation: Korea Under Japanese Rule",
        text: "For 35 years Korea was governed as part of the Japanese Empire, a period that continues to affect relations and historical memory today.",
        isGap: true,
        prompt:
          "Investigate what happened in Korea during Japanese colonial rule and how Koreans resisted.",
        questions: [
          "How did Japanese rule affect Korean culture and society?",
          "What was the March First Movement?",
          "When and why did colonial rule end?",
        ],
      },

      {
        year: "1919",
        title: "March First Movement",
        text: "Large demonstrations took place across Korea calling for independence from Japanese rule. The movement became an important symbol of Korean resistance.",
      },

      {
        year: "1945",
        title: "Liberation and Division",
        text: "Japanese colonial rule ended after the Second World War. The peninsula was divided around the 38th parallel, with Soviet forces occupying the north and American forces the south.",
      },

      {
        year: "1948",
        title: "Republic of Korea Established",
        text: "The Republic of Korea was established in the south. The Democratic People's Republic of Korea was established separately in the north.",
      },

      // STUDENT GAP 3
      {
        periodKey: "korea-war",
        year: "1950–1953",
        title: "🔍 Your Investigation: The Korean War",
        text: "Only two years after separate governments were established, war broke out across the Korean Peninsula.",
        isGap: true,
        prompt:
          "Investigate the Korean War. Find out why it began, who became involved and how it ended.",
        questions: [
          "Why did North and South Korea go to war?",
          "Which other countries became involved?",
          "Why are North and South Korea still technically not at peace?",
        ],
      },

      {
        year: "1953",
        title: "The DMZ",
        text: "The Korean Armistice Agreement stopped most fighting and a Demilitarized Zone was established between North and South Korea. A formal peace treaty was never signed.",
      },

      {
        year: "1960",
        title: "April Revolution",
        text: "Student-led demonstrations against electoral fraud and authoritarian government forced President Syngman Rhee to resign.",
      },

      {
        year: "1960s–1980s",
        title: "Rapid Industrial Growth",
        text: "South Korea transformed from a relatively poor, largely agricultural country into a major industrial economy. Electronics, cars, shipbuilding and manufacturing expanded rapidly.",
      },

      {
        year: "1980",
        title: "Gwangju Uprising",
        text: "Citizens in Gwangju protested against military rule. Government forces violently suppressed the uprising, which later became an important symbol in South Korea's democratic movement.",
      },

      {
        year: "1987",
        title: "Democratic Reforms",
        text: "Large nationwide demonstrations helped bring major democratic reforms, including direct presidential elections and greater political freedoms.",
      },

      {
        year: "1988",
        title: "Seoul Olympics",
        text: "Seoul hosted the Summer Olympic Games, bringing international attention to South Korea's rapid economic and social transformation.",
      },

      {
        year: "1997",
        title: "Asian Financial Crisis",
        text: "South Korea was badly affected by a major regional financial crisis. Economic restructuring followed and the country recovered strongly.",
      },

      {
        year: "2002",
        title: "Football World Cup",
        text: "South Korea and Japan jointly hosted the FIFA World Cup. South Korea reached the semi-finals, creating huge national celebrations.",
      },

      {
        year: "2000s",
        title: "The Korean Wave",
        text: "Korean television dramas, music and films attracted increasingly large audiences overseas. This international spread became known as Hallyu, or the Korean Wave.",
      },

      {
        year: "2012",
        title: "Gangnam Style Goes Global",
        text: "PSY's Gangnam Style became a worldwide hit and its music video became the first YouTube video to reach one billion views.",
      },

      {
        year: "2019–2020",
        title: "Korean Film Makes History",
        text: "Parasite became an international success and won four Academy Awards, including Best Picture — the first non-English-language film to win the award.",
      },

      {
        year: "Today",
        title: "South Korea's Global Influence",
        text: "South Korea is a major economy and cultural exporter. Korean music, television, film, food, gaming, beauty and technology now reach audiences around the world.",
      },
    ],

    places: [
      {
        title: "Gyeongbokgung Palace",
        tag: "History",

        image:
          "/images/continents/east-asia/countries/south-korea/places/gyeongbokgung-palace.jpg",

        description:
          "Gyeongbokgung was the main royal palace of the Joseon Dynasty and remains one of Seoul's most important historic landmarks.",
      },

      {
        title: "Jeju Island",
        tag: "Nature",

        image:
          "/images/continents/east-asia/countries/south-korea/places/jeju-island.jpg",

        description:
          "Jeju is a volcanic island south of the Korean Peninsula known for its dramatic coastline, lava landscapes, waterfalls and Hallasan mountain.",
      },

      {
        title: "Bukchon Hanok Village",
        tag: "Culture",

        image:
          "/images/continents/east-asia/countries/south-korea/places/bukchon.jpg",

        description:
          "This historic Seoul neighbourhood contains traditional Korean houses known as hanok and offers a glimpse of older architectural styles within the modern city.",
      },

      {
        title: "Busan",
        tag: "Coastal City",

        image:
          "/images/continents/east-asia/countries/south-korea/places/busan.jpg",

        description:
          "Busan is South Korea's second-largest city and an important port, known for its coastline, beaches, markets, temples and international film festival.",
      },
    ],

    influentialFigures: [
      {
        name: "PSY",
        role: "Music",

        image:
          "/images/continents/east-asia/countries/south-korea/figures/psy.jpg",

        description:
          "A singer and performer whose humorous music video and distinctive horse-riding dance became a worldwide phenomenon and one of the first enormous global K-pop hits.",
      },

      {
        name: "Son Heung-min",
        role: "Football",

        image:
          "/images/continents/east-asia/countries/south-korea/figures/son-heung-min.jpg",

        description:
          "An internationally successful footballer who became one of Asia's most recognisable sporting stars through his career in the English Premier League.",
      },

      {
        name: "Bong Joon-ho",
        role: "Film",

        image:
          "/images/continents/east-asia/countries/south-korea/figures/bong-joon-ho.jpg",

        description:
          "An internationally acclaimed filmmaker whose darkly comic thriller about two very different families became the first non-English-language film to win the Academy Award for Best Picture.",
      },

      {
        name: "Jennie Kim",
        role: "Music & Fashion",

        image:
          "/images/continents/east-asia/countries/south-korea/figures/jennie-kim.jpg",

        description:
          "A singer and performer who became internationally famous as a member of one of the world's biggest K-pop girl groups and later developed a successful solo career.",
      },
    ],

    culturalSpotlights: [
      {
        title: "Hangul",

        image:
          "/images/continents/east-asia/countries/south-korea/cultural-spotlight/hangul.jpg",

        description:
          "Hangul is the Korean alphabet. It was developed during the reign of King Sejong in the 15th century with the aim of creating a writing system that ordinary people could learn more easily.",
      },

      {
        title: "Hanbok",

        image:
          "/images/continents/east-asia/countries/south-korea/cultural-spotlight/hanbok.jpg",

        description:
          "Hanbok is traditional Korean clothing recognised by its distinctive shapes, flowing lines and colours. Today it is particularly associated with celebrations, ceremonies and cultural events.",
      },
    ],

    facts: [
      "South Korea occupies the southern part of the Korean Peninsula.",
      "Hangul is the alphabet used to write the Korean language.",
      "South Korea hosted the Summer Olympic Games in Seoul in 1988.",
      "Kimchi can be made using many different vegetables and recipes.",
      "South Korean music, television and film have developed audiences around the world.",
    ],
  },
  {
    slug: "north-korea",
    name: "North Korea",
    flag: "🇰🇵",

    capital: "Pyongyang",
    population: "About 26 million",
    languages: ["Korean"],
    currency: "North Korean Won",

    heroImage: "/images/continents/east-asia/countries/north-korea/hero.jpg",

    intro:
      "North Korea, officially the Democratic People's Republic of Korea, occupies the northern part of the Korean Peninsula and has one of the world's most tightly controlled political systems.",

    overview:
      "North Korea shares thousands of years of Korean history and culture with South Korea, but the division of the Korean Peninsula after the Second World War placed the two countries on very different paths. Since its establishment in 1948, North Korea has been governed by three generations of the Kim family. Its government places strong restrictions on political activity, media, travel and access to outside information, while the country's military and nuclear programmes have played a major role in its international relationships.",

    tags: [
      "Korean History",
      "Division",
      "Politics",
      "Culture",
      "Military",
      "Modern History",
    ],

    theme: {
      primary: "#a51d2d",
      secondary: "#17355c",
      accent: "#d8d8d2",
      background: "linear-gradient(180deg, #ece9df 0%, #d8d4ca 100%)",
      card: "rgba(247,245,238,0.92)",
      text: "#24272a",
      timeline: "#a51d2d",
    },

    factFile: {
      capital: {
        image:
          "/images/continents/east-asia/countries/north-korea/fact-file/pyongyang.jpg",

        title: "Pyongyang",


        description:
          "Pyongyang is North Korea's capital and largest city. It is the country's political centre and contains government buildings, monuments, large public squares and distinctive monumental architecture.",
      },

      history: {
        image:
          "/images/continents/east-asia/countries/north-korea/fact-file/history.jpg",

        title: "A Divided Peninsula",

        description:
          "North and South Korea share a much longer history than their modern division. For centuries the peninsula was governed by Korean kingdoms and dynasties before division followed the end of Japanese colonial rule in 1945.",
      },

      food: {
        image:
          "/images/continents/east-asia/countries/north-korea/fact-file/naengmyeon.jpg",

        title: "Pyongyang Naengmyeon",

        description:
          "Pyongyang is particularly associated with naengmyeon, a dish of thin noodles traditionally served in a chilled broth. Different versions of cold noodles are eaten across the Korean Peninsula.",
      },

      wildlife: {
        image:
          "/images/continents/east-asia/countries/north-korea/fact-file/amur-leopard.jpg",

        title: "Amur Leopard",

        description:
          "The extremely rare Amur leopard is native to parts of northeastern Asia. The forests and mountains around the borders of North Korea, China and Russia form part of its historic range.",
      },

      culture: {
        image:
          "/images/continents/east-asia/countries/north-korea/fact-file/arirang.jpg",

        title: "Arirang",

        description:
          "Arirang is the name given to a family of traditional Korean folk songs that have been sung for generations. There are many different versions, often expressing feelings of love, separation, sadness and hope. Arirang is especially important because it is part of the shared cultural heritage of both North and South Korea.",
      },
    },

    timeline: [
      {
        year: "37 BCE–668 CE",
        title: "Goguryeo",
        text: "Goguryeo was one of the Three Kingdoms of Korea and controlled large areas of the northern Korean Peninsula and parts of Manchuria. Its history remains an important part of Korean cultural heritage.",
      },

      {
        year: "918–1392",
        title: "Goryeo Dynasty",
        text: "The Goryeo dynasty eventually ruled a unified Korean kingdom. The modern word Korea comes from the name Goryeo.",
      },

      {
        year: "1392–1897",
        title: "Joseon Dynasty",
        text: "Joseon ruled Korea for more than five centuries. Confucian ideas strongly influenced government, education and society, while important cultural developments included the creation of Hangul.",
      },

      {
        year: "1910",
        title: "Japan Annexes Korea",
        text: "Japan formally annexed Korea following years of increasing control. The Korean Peninsula remained under Japanese colonial rule until the end of the Second World War.",
      },

      {
        year: "1919",
        title: "March First Movement",
        text: "Large demonstrations calling for Korean independence took place across the peninsula. Japanese authorities suppressed the protests, but the movement became an important symbol of Korean resistance.",
      },

      {
        year: "1930s–1945",
        title: "Korean Resistance",
        text: "Different Korean groups resisted Japanese colonial rule. Communist guerrilla movements operated in areas of Manchuria, and North Korea would later place particular importance on Kim Il Sung's claimed role in this resistance.",
      },

      // STUDENT GAP 1
      {
        periodKey: "north-korea-division",
        year: "1945",
        title: "🔍 Your Investigation: Korea is Divided",
        text: "Japanese colonial rule ended in 1945 — but instead of immediately becoming one independent Korean state, the peninsula was divided.",
        isGap: true,
        prompt:
          "Investigate why Korea was divided after the Second World War and how this eventually produced North and South Korea.",
        questions: [
          "What was the 38th parallel?",
          "Why were Soviet and American forces in Korea?",
          "Was the division originally intended to be permanent?",
        ],
      },

      {
        year: "1948",
        title: "North Korea is Established",
        text: "The Democratic People's Republic of Korea was established in the north with Kim Il Sung as its leader. The Republic of Korea had been established in the south earlier that year.",
      },

      // STUDENT GAP 2
      {
        periodKey: "north-korea-korean-war",
        year: "1950–1953",
        title: "🔍 Your Investigation: The Korean War",
        text: "In June 1950, North Korean forces crossed the 38th parallel and invaded South Korea. The conflict quickly became an international war.",
        isGap: true,
        prompt:
          "Investigate the Korean War and explain how a conflict on the Korean Peninsula involved countries from around the world.",
        questions: [
          "Why did North Korea invade South Korea?",
          "What roles did the United States, United Nations and China play?",
          "How did the war end?",
        ],
      },

      {
        year: "1953",
        title: "The Armistice and DMZ",
        text: "An armistice stopped most fighting, but a peace treaty was never signed. A heavily guarded Demilitarized Zone, or DMZ, separated North and South Korea.",
      },

      {
        year: "1950s–1960s",
        title: "Rebuilding North Korea",
        text: "North Korea rebuilt cities and industry following enormous wartime destruction. With assistance from other socialist states, heavy industry developed rapidly during the early post-war decades.",
      },

      {
        year: "1950s–1970s",
        title: "Kim Il Sung Consolidates Power",
        text: "Kim Il Sung increasingly eliminated political rivals and concentrated power around himself and the Workers' Party of Korea. A powerful personality cult developed around the country's leader.",
      },

      {
        year: "1972",
        title: "Juche in the Constitution",
        text: "North Korea's constitution formally incorporated Juche, an ideology strongly associated with political independence and national self-reliance and closely connected with the leadership of Kim Il Sung.",
      },

      {
        year: "1980",
        title: "Kim Jong Il Emerges as Successor",
        text: "Kim Jong Il was publicly elevated within the Workers' Party, making increasingly clear that leadership would eventually pass from father to son.",
      },

      {
        year: "1991",
        title: "North Korea Joins the United Nations",
        text: "North and South Korea were admitted separately to the United Nations, reflecting the continued existence of two Korean states.",
      },

      {
        year: "1994",
        title: "Death of Kim Il Sung",
        text: "Kim Il Sung died after leading North Korea since its establishment. His son Kim Jong Il became the country's supreme leader, creating an unusual hereditary succession within a communist political system.",
      },

      // STUDENT GAP 3
      {
        periodKey: "north-korea-famine",
        year: "1990s",
        title: "🔍 Your Investigation: The North Korean Famine",
        text: "During the 1990s, North Korea experienced an enormous food crisis in which large numbers of people died.",
        isGap: true,
        prompt:
          "Investigate the North Korean famine, sometimes officially referred to as the Arduous March. What caused it and how did it affect ordinary people?",
        questions: [
          "What happened to North Korea's food supply?",
          "How did the collapse of the Soviet Union affect the country?",
          "Why is it difficult to know exactly how many people died?",
        ],
      },

      {
        year: "1998",
        title: "Military-First Politics",
        text: "Under Kim Jong Il, the military received an increasingly important position within North Korean politics through a policy commonly known as Songun, or military-first politics.",
      },

      {
        year: "2006",
        title: "First Nuclear Test",
        text: "North Korea announced that it had carried out its first nuclear weapons test. Its nuclear programme subsequently became one of the most important sources of international tension involving the country.",
      },

      {
        year: "2011",
        title: "Kim Jong Un Becomes Leader",
        text: "Kim Jong Il died and his son Kim Jong Un succeeded him, becoming the third generation of the Kim family to lead North Korea.",
      },

      {
        year: "2017",
        title: "Missile and Nuclear Developments",
        text: "North Korea conducted major missile tests and its sixth nuclear test, sharply increasing tensions with the United States, South Korea and neighbouring countries.",
      },

      {
        year: "2018",
        title: "Inter-Korean Summit",
        text: "Kim Jong Un and South Korean president Moon Jae-in met at the border village of Panmunjom. The meeting briefly raised hopes of improved relations between the two Koreas.",
      },

      {
        year: "2018–2019",
        title: "Meetings with the United States",
        text: "Kim Jong Un met US President Donald Trump in a series of unprecedented summits focused on nuclear weapons and relations between the two countries, although no lasting nuclear agreement resulted.",
      },

      {
        year: "Today",
        title: "North Korea Today",
        text: "North Korea remains a highly centralised state governed by the Workers' Party of Korea under Kim Jong Un. Access to independent media and outside information is heavily restricted, while nuclear weapons, economic sanctions and relations with neighbouring countries remain major international issues.",
      },
    ],

    places: [
      {
        title: "Mount Paektu",
        tag: "Nature",

        image:
          "/images/continents/east-asia/countries/north-korea/places/mount-paektu.jpg",

        description:
          "Mount Paektu is a volcanic mountain on the border between North Korea and China. It has enormous cultural importance in Korean history and mythology.",
      },

      {
        title: "DMZ",
        tag: "History",

        image:
          "/images/continents/east-asia/countries/north-korea/places/dmz.jpg",

        description:
          "The Korean Demilitarized Zone stretches across the peninsula and separates North and South Korea. Despite its name, the surrounding border is one of the world's most heavily guarded.",
      },

      {
        title: "Kaesong",
        tag: "Historic City",

        image:
          "/images/continents/east-asia/countries/north-korea/places/kaesong.jpg",

        description:
          "Kaesong was the capital of the Goryeo dynasty and contains important historic sites connected with Korea's medieval history.",
      },

      {
        title: "Myohyang Mountains",
        tag: "Nature",

        image:
          "/images/continents/east-asia/countries/north-korea/places/myohyang.jpg",

        description:
          "The Myohyang mountain region is known for dramatic forested landscapes, waterfalls, hiking routes and historic Buddhist sites.",
      },
    ],

    influentialFigures: [
      {
        name: "Kim Il Sung",
        role: "Politics",

        image:
          "/images/continents/east-asia/countries/north-korea/figures/kim-il-sung.jpg",

        description:
          "The founding leader of the country who governed from its establishment in 1948 until his death in 1994 and became the centre of an extensive personality cult.",
      },

      {
        name: "Kim Jong Un",
        role: "Politics",

        image:
          "/images/continents/east-asia/countries/north-korea/figures/kim-jong-un.jpg",

        description:
          "The country's current leader and the third generation of the same family to hold supreme power, becoming internationally recognised through nuclear tensions and meetings with foreign leaders.",
      },

      {
        name: "Ri Sol-ju",
        role: "Public Figure",

        image:
          "/images/continents/east-asia/countries/north-korea/figures/ri-sol-ju.jpg",

        description:
          "A prominent public figure frequently seen at major ceremonies and diplomatic events alongside the country's current leader.",
      },

      {
        name: "Ri Chun-hee",
        role: "Television",

        image:
          "/images/continents/east-asia/countries/north-korea/figures/ri-chun-hee.jpg",

        description:
          "A television newsreader who became internationally recognisable for an unusually dramatic broadcasting style while announcing some of the country's most important events.",
      },
    ],

    culturalSpotlights: [
      {
        title: "Mass Games",

        image:
          "/images/continents/east-asia/countries/north-korea/cultural-spotlight/mass-games.jpg",

        description:
          "North Korea has staged enormous coordinated performances involving thousands of participants using gymnastics, dance, music and huge changing backgrounds. They demonstrate remarkable coordination while also reflecting the government's emphasis on collective identity and political messaging.",
      },

      {
        title: "Chosŏn-ot — Traditional Dress",

        image:
          "/images/continents/east-asia/countries/north-korea/cultural-spotlight/choson-ot.jpg",

        description:
          "Traditional Korean clothing is known in North Korea as chosŏn-ot. Its colourful jackets, long skirts and flowing shapes can still be seen at weddings, festivals, performances and important celebrations. It shares its historical roots with the clothing known as hanbok in South Korea, but North Korea has developed its own styles and traditions.",
      },
    ],

    facts: [
      "North Korea's official name is the Democratic People's Republic of Korea.",
      "Pyongyang is the capital and largest city.",
      "North and South Korea share the Korean language and thousands of years of history.",
      "The Korean War ended with an armistice rather than a peace treaty.",
      "The Korean Demilitarized Zone separates North and South Korea.",
      "Three generations of the Kim family have led North Korea.",
    ],
  },
  {
    slug: "mongolia",
    name: "Mongolia",
    flag: "🇲🇳",

    capital: "Ulaanbaatar",
    population: "About 3.5 million",
    languages: ["Mongolian"],
    currency: "Mongolian Tögrög",

    heroImage: "/images/continents/east-asia/countries/mongolia/hero.jpg",

    intro:
      "Mongolia is a vast landlocked country of grasslands, mountains and desert, famous for its nomadic traditions and its extraordinary place in world history.",

    overview:
      "Located between Russia and China, Mongolia is one of the least densely populated countries in the world. Its history is closely connected with the great nomadic societies of the Eurasian steppe and the rise of the Mongol Empire under Genghis Khan. Today, Mongolia combines ancient traditions such as herding, horse riding and life in gers with modern cities, democracy, mining and a growing contemporary cultural scene.",

    tags: [
      "Nomadic Culture",
      "Mongol Empire",
      "Horses",
      "Steppe",
      "Naadam",
      "History",
    ],

    theme: {
      primary: "#1f4f73",
      secondary: "#b3262d",
      accent: "#d6a72c",
      background: "linear-gradient(180deg, #eef4f1 0%, #e6dcc3 100%)",
      card: "rgba(255,255,255,0.90)",
      text: "#26352f",
      timeline: "#b3262d",
    },

    factFile: {
      capital: {
        image:
          "/images/continents/east-asia/countries/mongolia/fact-file/ulaanbaatar.jpg",

        title: "Ulaanbaatar",


        description:
          "Ulaanbaatar is Mongolia's capital and largest city. A large proportion of the country's population lives there, making it the centre of Mongolian government, business, education and modern culture.",
      },

      history: {
        image:
          "/images/continents/east-asia/countries/mongolia/fact-file/mongol-empire.jpg",

        title: "The Mongol Empire",

        description:
          "During the 13th century, Mongol armies created the largest contiguous land empire in history. At its height, Mongol-controlled territories stretched across huge areas of Asia and Europe.",
      },

      food: {
        image:
          "/images/continents/east-asia/countries/mongolia/fact-file/buuz.jpg",

        title: "Buuz",

        description:
          "Buuz are steamed dumplings traditionally filled with seasoned meat. They are eaten throughout Mongolia and are especially associated with Tsagaan Sar, the Mongolian Lunar New Year.",
      },

      wildlife: {
        image:
          "/images/continents/east-asia/countries/mongolia/fact-file/przewalskis-horse.jpg",

        title: "Przewalski's Horse",

        description:
          "Przewalski's horse, known in Mongolia as takhi, is a rare wild horse native to Central Asia. After disappearing from the wild, conservation programmes successfully reintroduced the species to Mongolia.",
      },

      culture: {
        image:
          "/images/continents/east-asia/countries/mongolia/fact-file/naadam.jpg",

        title: "Naadam",

        description:
          "Naadam is Mongolia's famous national festival centred around three traditional sports: wrestling, horse racing and archery. The celebrations are closely connected with Mongolian history and identity.",
      },
    },

    timeline: [
      {
        year: "c. 3rd Century BCE",
        title: "The Xiongnu Confederation",
        text: "Powerful nomadic groups formed large political confederations across the Mongolian steppe. Among the most important were the Xiongnu, who became major rivals of China's Han dynasty.",
      },

      {
        year: "6th–8th Centuries",
        title: "Turkic Empires of the Steppe",
        text: "Powerful Turkic khaganates controlled large areas of Mongolia and Central Asia. Their surviving inscriptions provide important evidence about the languages, rulers and societies of the medieval steppe.",
      },

      {
        year: "8th–9th Centuries",
        title: "Uyghur Khaganate",
        text: "The Uyghur Khaganate established its centre in what is now Mongolia. Its capital, Ordu-Baliq, became an important political and trading centre on the steppe.",
      },

      {
        year: "10th–12th Centuries",
        title: "Tribes of the Mongolian Steppe",
        text: "Different Mongol and Turkic-speaking tribes competed and formed alliances across the steppe. Leadership depended heavily on family connections, military ability and control of animals and grazing land.",
      },

      {
        year: "c. 1162",
        title: "Temüjin is Born",
        text: "A boy named Temüjin was born into a Mongol clan. After a difficult childhood, he gradually built alliances and defeated rival leaders across the Mongolian steppe.",
      },

      // STUDENT GAP 1
      {
        periodKey: "mongolia-genghis-khan",
        year: "1206",
        title: "🔍 Your Investigation: Genghis Khan",
        text: "In 1206, Mongol leaders gathered at a great assembly and recognised Temüjin as the supreme leader of a newly united Mongol people.",
        isGap: true,
        prompt:
          "Investigate how Temüjin became Genghis Khan and how he managed to unite many of the tribes of the Mongolian steppe.",
        questions: [
          "Who was Temüjin?",
          "What does the title Genghis Khan represent?",
          "How did he unite rival Mongol groups?",
        ],
      },

      {
        year: "1206–1227",
        title: "The Mongol Conquests Begin",
        text: "Under Genghis Khan, Mongol armies expanded rapidly into northern China, Central Asia and Persia. Highly mobile cavalry, organisation and communication helped make the Mongol armies extremely effective.",
      },

      {
        year: "1227",
        title: "Death of Genghis Khan",
        text: "Genghis Khan died during a military campaign. Instead of collapsing, the empire continued expanding under his sons and grandsons.",
      },

      {
        year: "1235",
        title: "Karakorum",
        text: "Karakorum developed as an imperial capital in the Orkhon Valley. Visitors described a diverse city containing merchants, craftspeople and religious communities from across the Mongol Empire.",
      },

      {
        year: "1236–1242",
        title: "Mongol Expansion into Europe",
        text: "Mongol armies conquered territories across what is now Russia and Ukraine and campaigned into Central Europe, defeating several European armies.",
      },

      {
        year: "1258",
        title: "The Capture of Baghdad",
        text: "Mongol forces led by Hülegü captured Baghdad, bringing the Abbasid Caliphate's rule in the city to an end. The conquest became one of the most famous and destructive episodes of Mongol expansion.",
      },

      {
        year: "1260s",
        title: "The Empire Divides",
        text: "The enormous Mongol Empire gradually developed into several major khanates governed by different branches of Genghis Khan's family.",
      },

      {
        year: "1271",
        title: "Kublai Khan Establishes the Yuan Dynasty",
        text: "Genghis Khan's grandson Kublai Khan declared the Yuan dynasty in China. He later completed the conquest of the Southern Song and ruled from a capital at what is now Beijing.",
      },

      {
        year: "1270s–1300s",
        title: "Trade Across the Mongol World",
        text: "Mongol rule connected enormous areas of Eurasia. Merchants, diplomats, craftspeople, technologies and ideas travelled across long-distance routes linking East Asia, the Middle East and Europe.",
      },

      {
        year: "1368",
        title: "Yuan Rule Ends in China",
        text: "The Yuan dynasty lost control of China to the newly established Ming dynasty. Mongol rulers retreated north, while different Mongol groups continued to control the steppe.",
      },

      {
        year: "1578",
        title: "Tibetan Buddhism Expands",
        text: "Altan Khan formed an important relationship with the Tibetan Buddhist leader Sonam Gyatso and granted him the title Dalai Lama. Tibetan Buddhism became increasingly influential in Mongolian society.",
      },

      {
        year: "1639",
        title: "Zanabazar",
        text: "Zanabazar was recognised as the first Jebtsundamba Khutuktu, becoming an important Buddhist leader. He was also celebrated as an artist, sculptor and scholar.",
      },

      {
        year: "1691",
        title: "Mongolia Under Qing Rule",
        text: "Khalkha Mongol nobles formally submitted to the Qing emperor. Much of what is now Mongolia remained within the Qing Empire for more than two centuries.",
      },

      // STUDENT GAP 2
      {
        periodKey: "mongolia-independence",
        year: "1911",
        title: "🔍 Your Investigation: Mongolia Declares Independence",
        text: "The collapse of Qing rule in China created an opportunity for Mongolian leaders to attempt to establish an independent state.",
        isGap: true,
        prompt:
          "Investigate Mongolia's 1911 declaration of independence and the role of the Bogd Khan.",
        questions: [
          "Why was Qing rule weakening?",
          "Who was the Bogd Khan?",
          "Was Mongolia immediately recognised as fully independent?",
        ],
      },

      {
        year: "1919",
        title: "Chinese Forces Occupy Mongolia",
        text: "Chinese troops moved into Mongolia and attempted to end its autonomy during a period of political instability following the collapse of the Qing dynasty.",
      },

      {
        year: "1921",
        title: "Mongolian Revolution",
        text: "Mongolian revolutionaries, supported by Soviet forces, defeated occupying forces. The revolution became a defining event in the creation of modern Mongolia.",
      },

      {
        year: "1924",
        title: "Mongolian People's Republic",
        text: "After the death of the Bogd Khan, the Mongolian People's Republic was proclaimed. Mongolia became closely aligned with the Soviet Union and developed a socialist political system.",
      },

      {
        year: "1930s",
        title: "Collectivisation and Political Control",
        text: "The socialist government attempted to transform Mongolia's traditional herding economy and society. Soviet influence over Mongolian politics became increasingly powerful.",
      },

      {
        year: "1937–1939",
        title: "The Great Purges",
        text: "Political repression intensified dramatically. Thousands of people were executed or imprisoned, and Buddhist monasteries were destroyed or closed as religion was heavily suppressed.",
      },

      {
        year: "1939",
        title: "Battle of Khalkhin Gol",
        text: "Mongolian and Soviet forces fought Japanese and Manchukuo troops near the eastern Mongolian border. The Soviet-Mongolian forces won a major victory.",
      },

      {
        year: "1945",
        title: "Independence Referendum",
        text: "Mongolians voted overwhelmingly for independence in a referendum. China subsequently recognised the independence of the Mongolian People's Republic.",
      },

      {
        year: "1961",
        title: "Mongolia Joins the United Nations",
        text: "Mongolia became a member of the United Nations, strengthening its international recognition as an independent state.",
      },

      {
        year: "1960s–1980s",
        title: "Socialist Mongolia",
        text: "Mongolia remained closely connected to the Soviet Union. Education, healthcare, industry and urban development expanded while political life remained controlled by the ruling communist party.",
      },

      // STUDENT GAP 3
      {
        periodKey: "mongolia-democratic-revolution",
        year: "1990",
        title: "🔍 Your Investigation: The Democratic Revolution",
        text: "Peaceful demonstrations in Ulaanbaatar challenged Mongolia's one-party political system and demanded democratic change.",
        isGap: true,
        prompt:
          "Investigate Mongolia's 1990 democratic revolution and explain how the country's political system changed.",
        questions: [
          "What were protesters demanding?",
          "Was the revolution peaceful?",
          "What changed after 1990?",
        ],
      },

      {
        year: "1992",
        title: "A New Constitution",
        text: "A new constitution established Mongolia as a democratic republic with political rights, competitive elections and a market-based economy.",
      },

      {
        year: "1990s–2000s",
        title: "Economic Transformation",
        text: "Mongolia moved away from its Soviet-style planned economy. The transition brought new opportunities but also unemployment, inequality and major economic disruption.",
      },

      {
        year: "2000s–Today",
        title: "Mining and Modern Mongolia",
        text: "Mongolia's enormous reserves of coal, copper, gold and other minerals have become increasingly important to its economy and its relationships with neighbouring China and Russia.",
      },

      {
        year: "Today",
        title: "Tradition and Modern Life",
        text: "Modern Mongolia combines a rapidly growing capital city with traditions rooted in the steppe. Herding, horses, gers, Naadam, music and Buddhist heritage remain important parts of Mongolian identity.",
      },
    ],

    places: [
      {
        title: "Gobi Desert",
        tag: "Nature",

        image:
          "/images/continents/east-asia/countries/mongolia/places/gobi-desert.jpg",

        description:
          "The Gobi stretches across southern Mongolia and northern China. Its landscapes include rocky plains, mountains and enormous sand dunes, and the region has produced important dinosaur fossil discoveries.",
      },

      {
        title: "Orkhon Valley",
        tag: "History",

        image:
          "/images/continents/east-asia/countries/mongolia/places/orkhon-valley.jpg",

        description:
          "The Orkhon Valley has been an important centre of steppe civilisation for centuries. It contains archaeological remains connected with Turkic, Uyghur and Mongol empires.",
      },

      {
        title: "Khuvsgul Lake",
        tag: "Nature",

        image:
          "/images/continents/east-asia/countries/mongolia/places/khuvsgul-lake.jpg",

        description:
          "Khuvsgul Lake is a huge freshwater lake surrounded by mountains and forests in northern Mongolia. It is sometimes called the Blue Pearl of Mongolia.",
      },

      {
        title: "Erdene Zuu Monastery",
        tag: "Culture",

        image:
          "/images/continents/east-asia/countries/mongolia/places/erdene-zuu.jpg",

        description:
          "Erdene Zuu is one of Mongolia's oldest surviving Buddhist monasteries. It was established near the ruins of Karakorum, the former capital of the Mongol Empire.",
      },
    ],

    influentialFigures: [
      {
        name: "Genghis Khan",
        role: "Leadership",

        image:
          "/images/continents/east-asia/countries/mongolia/figures/genghis-khan.jpg",

        description:
          "Rose from a difficult childhood on the Mongolian steppe to unite rival tribes and establish an empire that would eventually stretch across much of Eurasia.",
      },

      {
        name: "Kublai Khan",
        role: "Leadership",

        image:
          "/images/continents/east-asia/countries/mongolia/figures/kublai-khan.jpg",

        description:
          "A grandson of the founder of the Mongol Empire who became a powerful ruler, conquered the Southern Song and established the Yuan dynasty in China.",
      },

      {
        name: "Damdin Sükhbaatar",
        role: "Revolution",

        image:
          "/images/continents/east-asia/countries/mongolia/figures/damdin-sukhbaatar.jpg",

        description:
          "A revolutionary leader associated with the events of 1921 who became one of the most prominent national figures of twentieth-century Mongolia.",
      },

      {
        name: "The HU",
        role: "Music",

        image:
          "/images/continents/east-asia/countries/mongolia/figures/the-hu.jpg",

        description:
          "A modern rock group that combines heavy rock music with traditional Mongolian instruments and throat singing, building an international audience far beyond Mongolia.",
      },
    ],

    culturalSpotlights: [
      {
        title: "Eagle Hunters",

        image:
          "/images/continents/east-asia/countries/mongolia/cultural-spotlight/eagle-hunters.jpg",

        description:
          "In western Mongolia, some Kazakh families continue a centuries-old tradition of training golden eagles to hunt. The skills are passed between generations and are celebrated at eagle festivals.",
      },

      {
        title: "Life in a Ger",

        image:
          "/images/continents/east-asia/countries/mongolia/cultural-spotlight/ger-life.jpg",

        description:
          "The ger is a circular portable home designed for life on the steppe. Its wooden frame and felt covering can be assembled, dismantled and transported as herding families move between seasonal grazing areas.",
      },
    ],

    facts: [
      "Mongolia is one of the least densely populated countries in the world.",
      "A large proportion of Mongolia's population lives in Ulaanbaatar.",
      "The Mongol Empire became the largest contiguous land empire in history.",
      "Horses have played an important role in Mongolian transport, herding, warfare and sport.",
      "Traditional Mongolian throat singing can produce more than one audible pitch at the same time.",
      "Naadam traditionally features wrestling, horse racing and archery.",
      "The Gobi Desert stretches across both Mongolia and China.",
      "Mongolia became a multiparty democracy following the peaceful revolution of 1990.",
    ],
  },
  {
    slug: "taiwan",
    name: "Taiwan",
    flag: "🇹🇼",

    capital: "Taipei",
    population: "About 23 million",
    languages: [
      "Mandarin Chinese",
      "Taiwanese Hokkien",
      "Hakka",
      "Indigenous languages",
    ],
    currency: "New Taiwan Dollar",

    heroImage: "/images/continents/east-asia/countries/taiwan/hero.jpg",

    intro:
      "Taiwan is an island in East Asia with a rich mixture of Indigenous heritage, Chinese cultural influences, Japanese history and a vibrant modern democratic society.",

    overview:
      "Taiwan lies off the southeastern coast of mainland China and has been home to Indigenous peoples for thousands of years. Its history has included European colonial settlements, Qing rule, Japanese rule and the arrival of the Republic of China government after the Second World War. Taiwan later transformed from authoritarian rule into a multiparty democracy and became a major global centre for technology and semiconductor manufacturing. Its political status and relationship with the People's Republic of China remain important and contested international issues.",

    tags: [
      "Indigenous Heritage",
      "Island",
      "Democracy",
      "Technology",
      "Food",
      "History",
    ],

    theme: {
      primary: "#1f4e3d",
      secondary: "#b32632",
      accent: "#d4a72c",
      background: "linear-gradient(180deg, #f5efe4 0%, #e5eee8 100%)",
      card: "rgba(255,255,255,0.90)",
      text: "#293832",
      timeline: "#b32632",
    },

    factFile: {
      capital: {
        image:
          "/images/continents/east-asia/countries/taiwan/fact-file/taipei.jpg",

        title: "Taipei",


        description:
          "Taipei is Taiwan's capital and an important centre for government, business, technology and culture. Its skyline includes Taipei 101, which was the world's tallest building when it opened.",
      },

      history: {
        image:
          "/images/continents/east-asia/countries/taiwan/fact-file/indigenous-peoples.jpg",

        title: "Indigenous Taiwan",

        description:
          "Indigenous peoples lived in Taiwan for thousands of years before large-scale migration from mainland China. Taiwan's Indigenous communities belong to the wider Austronesian family of peoples found across the Pacific and Southeast Asia.",
      },

      food: {
        image:
          "/images/continents/east-asia/countries/taiwan/fact-file/beef-noodle-soup.jpg",

        title: "Beef Noodle Soup",

        description:
          "Beef noodle soup is one of Taiwan's best-known dishes. It usually combines noodles, slow-cooked beef and a rich broth flavoured with spices, soy sauce and other seasonings.",
      },

      wildlife: {
        image:
          "/images/continents/east-asia/countries/taiwan/fact-file/formosan-black-bear.jpg",

        title: "Formosan Black Bear",

        description:
          "The Formosan black bear is a subspecies of Asian black bear found only in Taiwan. Its distinctive white chest marking has helped make it an important symbol of Taiwanese wildlife.",
      },

      culture: {
        image:
          "/images/continents/east-asia/countries/taiwan/fact-file/night-markets.jpg",

        title: "Night Markets",

        description:
          "Taiwan's night markets combine food, shopping, games and social life. Visitors can find dishes such as dumplings, oyster omelettes, fried chicken, noodles and many different snacks.",
      },
    },

    timeline: [
      {
        year: "Thousands of years ago",
        title: "Indigenous Taiwan",
        text: "Austronesian Indigenous peoples lived across Taiwan long before the arrival of European colonists or large-scale migration from mainland China. Their descendants continue to maintain distinct languages, traditions and identities.",
      },

      {
        year: "c. 4000–3000 BCE onwards",
        title: "Austronesian Connections",
        text: "Archaeological and linguistic evidence connects Taiwan with the wider history of Austronesian-speaking peoples. Languages belonging to the Austronesian family eventually spread across enormous areas of Southeast Asia and the Pacific.",
      },

      {
        year: "1500s",
        title: "European Sailors Encounter Taiwan",
        text: "European sailors increasingly travelled through waters around Taiwan as maritime trade expanded across East Asia. Portuguese sailors referred to the island as Formosa, meaning beautiful.",
      },

      {
        year: "1624",
        title: "Dutch Rule Begins",
        text: "The Dutch East India Company established a colonial base in southern Taiwan. The Dutch developed trade, encouraged migration from mainland China and attempted to extend their control over Indigenous communities.",
      },

      {
        year: "1626",
        title: "Spanish Settlement in Northern Taiwan",
        text: "Spanish forces established settlements in northern Taiwan as part of competition for trade and influence in East Asia.",
      },

      {
        year: "1642",
        title: "Dutch Defeat the Spanish",
        text: "Dutch forces removed the Spanish from northern Taiwan, leaving the Dutch East India Company as the main European colonial power on the island.",
      },

      {
        year: "1662",
        title: "Zheng Chenggong Takes Taiwan",
        text: "Zheng Chenggong, also known in Western sources as Koxinga, defeated the Dutch and established a base in Taiwan while remaining loyal to China's defeated Ming dynasty.",
      },

      {
        year: "1683",
        title: "Taiwan Comes Under Qing Rule",
        text: "Qing forces defeated the Zheng government and incorporated Taiwan into the Qing Empire. Migration from mainland China increased significantly during the following centuries.",
      },

      {
        year: "1700s–1800s",
        title: "Migration and Settlement",
        text: "Large numbers of migrants, particularly from Fujian and Guangdong, settled in Taiwan. New towns and farming communities developed while conflicts occurred between settlers and Indigenous peoples and among different migrant groups.",
      },

      {
        year: "1885",
        title: "Taiwan Becomes a Province",
        text: "The Qing government formally made Taiwan a province and introduced modernisation projects including railways, communications and new administrative systems.",
      },

      // STUDENT GAP 1
      {
        periodKey: "taiwan-japanese-rule",
        year: "1895–1945",
        title: "🔍 Your Investigation: Taiwan Under Japanese Rule",
        text: "Following China's defeat in the First Sino-Japanese War, Taiwan entered a completely different period of its history that lasted for fifty years.",
        isGap: true,
        prompt:
          "Investigate Taiwan under Japanese rule. Find out how the island changed between 1895 and 1945 and how Taiwanese people experienced colonial rule.",
        questions: [
          "Why did Taiwan come under Japanese control?",
          "What infrastructure and industries developed?",
          "How did colonial rule affect Taiwanese culture and identity?",
        ],
      },

      {
        year: "1895",
        title: "Resistance to Japanese Rule",
        text: "The transfer of Taiwan to Japan was resisted by people on the island. Armed resistance continued in different forms during the early years of Japanese colonial government.",
      },

      {
        year: "1895–1930s",
        title: "Colonial Modernisation",
        text: "The Japanese colonial government expanded railways, ports, schools, public health systems and industries. These developments modernised infrastructure while taking place within an unequal colonial system.",
      },

      {
        year: "1930",
        title: "Musha Incident",
        text: "Seediq Indigenous fighters rebelled against Japanese colonial authorities in central Taiwan. Japanese forces responded with a major military campaign.",
      },

      {
        year: "1937–1945",
        title: "Taiwan During the Second World War",
        text: "As Japan's war in Asia expanded, Taiwan became increasingly integrated into the Japanese war effort. Taiwanese people served in different military and labour roles across the Japanese Empire.",
      },

      {
        year: "1945",
        title: "Japanese Rule Ends",
        text: "Following Japan's defeat in the Second World War, administration of Taiwan was transferred to the Republic of China government led by the Kuomintang.",
      },

      // STUDENT GAP 2
      {
        periodKey: "taiwan-228-incident",
        year: "1947",
        title: "🔍 Your Investigation: The 228 Incident",
        text: "On 28 February 1947, tensions between local people and the new authorities developed into widespread protests and violent repression.",
        isGap: true,
        prompt:
          "Investigate the 228 Incident and explain why it became such an important event in modern Taiwanese history.",
        questions: [
          "What caused the protests?",
          "How did the government respond?",
          "Why is 28 February remembered in Taiwan today?",
        ],
      },

      {
        year: "1949",
        title: "Chinese Civil War Changes Taiwan",
        text: "The Chinese Communist Party established the People's Republic of China on the mainland after defeating the Republic of China government in the Chinese Civil War. Chiang Kai-shek and the ROC government relocated to Taiwan along with soldiers and many civilians.",
      },

      {
        year: "1949–1987",
        title: "Martial Law",
        text: "Taiwan remained under martial law for almost four decades. The Kuomintang controlled political life and restrictions were placed on opposition, protest and freedom of expression.",
      },

      {
        year: "1950s–1980s",
        title: "The White Terror",
        text: "Thousands of people were arrested, imprisoned and in some cases executed for alleged political opposition or connections with communism. This period of political repression became known as the White Terror.",
      },

      {
        year: "1950s–1960s",
        title: "Land Reform and Industrialisation",
        text: "Economic reforms and investment helped transform Taiwan's economy. Agriculture became more productive while manufacturing and exports expanded rapidly.",
      },

      {
        year: "1971",
        title: "Taiwan Loses its UN Seat",
        text: "United Nations General Assembly Resolution 2758 recognised representatives of the People's Republic of China as China's representatives at the UN. The Republic of China consequently lost its seat.",
      },

      {
        year: "1970s–1980s",
        title: "The Taiwan Miracle",
        text: "Rapid industrial growth transformed Taiwan into one of East Asia's major export economies. Electronics and increasingly advanced manufacturing became especially important.",
      },

      {
        year: "1979",
        title: "United States Changes Diplomatic Recognition",
        text: "The United States formally established diplomatic relations with the People's Republic of China and ended formal diplomatic recognition of the Republic of China, while maintaining substantial unofficial relations with Taiwan.",
      },

      {
        year: "1979",
        title: "Kaohsiung Incident",
        text: "A pro-democracy demonstration in Kaohsiung led to arrests of prominent opposition activists. The event became an important moment in Taiwan's growing democracy movement.",
      },

      // STUDENT GAP 3
      {
        periodKey: "taiwan-democratisation",
        year: "1987–1996",
        title: "🔍 Your Investigation: Taiwan Becomes a Democracy",
        text: "During less than a decade, Taiwan underwent an enormous political transformation from decades of authoritarian rule towards competitive democratic elections.",
        isGap: true,
        prompt:
          "Investigate Taiwan's democratic transformation and explain what changed between the end of martial law and the first direct presidential election.",
        questions: [
          "When was martial law lifted?",
          "How did political freedoms expand?",
          "What happened in Taiwan's 1996 presidential election?",
        ],
      },

      {
        year: "1987",
        title: "Martial Law Ends",
        text: "Martial law was lifted after 38 years. Political organisations, newspapers and public debate gradually gained much greater freedom.",
      },

      {
        year: "1990",
        title: "Wild Lily Student Movement",
        text: "Thousands of students demonstrated in Taipei calling for democratic reform. The peaceful movement became an important symbol of Taiwan's democratic transition.",
      },

      {
        year: "1996",
        title: "First Direct Presidential Election",
        text: "Taiwan held its first direct presidential election, marking a major stage in its transition to full electoral democracy.",
      },

      {
        year: "2000",
        title: "First Peaceful Transfer of Political Power",
        text: "Chen Shui-bian won the presidential election, ending decades of Kuomintang presidential rule and demonstrating that political power could change through elections.",
      },

      {
        year: "2000s",
        title: "Semiconductor Powerhouse",
        text: "Taiwan became increasingly important to the global technology industry, particularly through companies producing advanced semiconductor chips used in computers, phones, vehicles and other electronics.",
      },

      {
        year: "2014",
        title: "Sunflower Movement",
        text: "Students and activists occupied Taiwan's legislature while protesting against a proposed trade agreement with mainland China and demanding greater transparency in the political process.",
      },

      {
        year: "2016",
        title: "First Female President",
        text: "Tsai Ing-wen became Taiwan's first female president following victory in the presidential election.",
      },

      {
        year: "2019",
        title: "Same-Sex Marriage Legalised",
        text: "Taiwan became the first jurisdiction in Asia to legalise same-sex marriage, following years of campaigning and a constitutional court ruling.",
      },

      {
        year: "Today",
        title: "Taiwan Today",
        text: "Taiwan is a multiparty democracy and one of the world's most important centres for advanced semiconductor manufacturing. The People's Republic of China claims Taiwan as part of its territory, while Taiwan has its own elected government, military, currency and institutions. Questions surrounding Taiwan's political status remain internationally contested.",
      },
    ],

    places: [
      {
        title: "Taroko Gorge",
        tag: "Nature",

        image:
          "/images/continents/east-asia/countries/taiwan/places/taroko-gorge.jpg",

        description:
          "Taroko Gorge is famous for its dramatic marble cliffs, mountains, rivers and tunnels. The surrounding landscape forms part of one of Taiwan's best-known natural areas.",
      },

      {
        title: "Sun Moon Lake",
        tag: "Nature",

        image:
          "/images/continents/east-asia/countries/taiwan/places/sun-moon-lake.jpg",

        description:
          "Sun Moon Lake is Taiwan's largest natural lake and is surrounded by forested mountains. The area is also closely connected with the Indigenous Thao people.",
      },

      {
        title: "Alishan",
        tag: "Mountains",

        image:
          "/images/continents/east-asia/countries/taiwan/places/alishan.jpg",

        description:
          "Alishan is a mountainous region known for forests, mountain railways, tea growing and spectacular views across Taiwan's central mountains.",
      },

      {
        title: "Jiufen",
        tag: "Historic Town",

        image:
          "/images/continents/east-asia/countries/taiwan/places/jiufen.jpg",

        description:
          "Jiufen is a historic hillside town that grew during Taiwan's gold-mining era. Its narrow streets, teahouses and mountain views have made it one of Taiwan's most recognisable destinations.",
      },
    ],

    influentialFigures: [
      {
        name: "Ang Lee",
        role: "Film",

        image:
          "/images/continents/east-asia/countries/taiwan/figures/ang-lee.jpg",

        description:
          "An internationally successful filmmaker whose work has crossed languages and genres, directing acclaimed films including martial-arts epics, dramas and major Hollywood productions.",
      },

      {
        name: "Jay Chou",
        role: "Music",

        image:
          "/images/continents/east-asia/countries/taiwan/figures/jay-chou.jpg",

        description:
          "A hugely successful singer, songwriter, musician and actor who helped shape modern Mandarin-language pop music and developed an enormous following across Asia.",
      },

      {
        name: "Tsai Ing-wen",
        role: "Politics",

        image:
          "/images/continents/east-asia/countries/taiwan/figures/tsai-ing-wen.jpg",

        description:
          "A politician and former law professor who made history by becoming Taiwan's first female president and served two terms in office.",
      },

      {
        name: "Jeremy Lin",
        role: "Sport",

        image:
          "/images/continents/east-asia/countries/taiwan/figures/jeremy-lin.jpg",

        description:
          "A Taiwanese-American basketball player who became an international sporting sensation during an extraordinary run of performances in the NBA that became known as 'Linsanity'.",
      },
    ],

    culturalSpotlights: [
      {
        title: "Taiwan Lantern Festival",

        image:
          "/images/continents/east-asia/countries/taiwan/cultural-spotlight/lantern-festival.jpg",

        description:
          "Lantern celebrations take place around Taiwan during the Lunar New Year period. Huge illuminated displays combine traditional lantern customs with modern art, technology and performances.",
      },

      {
        title: "Taiwan's Indigenous Cultures",

        image:
          "/images/continents/east-asia/countries/taiwan/cultural-spotlight/indigenous-culture.jpg",

        description:
          "Taiwan is home to numerous officially recognised Indigenous peoples, each with their own histories, languages and cultural traditions. Their Austronesian heritage connects Taiwan culturally and linguistically with communities spread across the Pacific and Southeast Asia.",
      },
    ],

    facts: [
      "Taiwan is an island roughly 180 kilometres from the southeastern coast of mainland China.",
      "Indigenous peoples have lived in Taiwan for thousands of years.",
      "Taiwan was known historically in many Western sources as Formosa.",
      "Taiwan was under Japanese rule from 1895 until 1945.",
      "Martial law lasted from 1949 until 1987.",
      "Taiwan held its first direct presidential election in 1996.",
      "Taiwan is one of the world's most important producers of advanced semiconductor chips.",
      "Taiwan became the first place in Asia to legalise same-sex marriage in 2019.",
    ],
  },
];
