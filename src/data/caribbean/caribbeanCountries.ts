export type CaribbeanCountry = {
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

  culturalSpotlight?: {
    title: string;
    image: string;
    description: string;
  };

  facts: string[];
};
export const caribbeanCountries = [
  {
    slug: "jamaica",
    name: "Jamaica",
    flag: "🇯🇲",

    capital: "Kingston",
    population: "2.8 million",
    languages: ["English", "Jamaican Patois"],
    currency: "Jamaican Dollar",

    heroImage:
      "/images/continents/caribbean/countries/jamaica/Flag_of_Jamaica.svg",

    intro:
      "Jamaica is known around the world for music, athletics, storytelling, food, and cultural identity.",

    overview:
      "From reggae music and Carnival celebrations to the Blue Mountains and powerful history of resistance, Jamaica has had a huge global cultural impact far beyond its size.",

    tags: ["Music", "Identity", "Resistance", "Carnival", "Sport"],

    theme: {
      primary: "#1B5E20",
      secondary: "#F9A825",
      accent: "#FF6F00",
      background: "linear-gradient(180deg, #fff9e8 0%, #ffe0b2 100%)",
      card: "rgba(255,255,255,0.88)",
      text: "#3e2723",
      timeline: "#2E7D32",
    },

    factFile: {
      capital: {
        image:
          "/images/continents/caribbean/countries/jamaica/fact-file/kingston.jpg",

        title: "Kingston",

        description:
          "Kingston is the capital city of Jamaica and an important centre for music, culture, and Caribbean history.",
      },

      food: {
        image:
          "/images/continents/caribbean/countries/jamaica/fact-file/jerk-chicken.jpg",

        title: "Jerk Cooking",

        description:
          "Jerk cooking is one of Jamaica’s most famous food traditions, using spices, smoky flavours, and slow cooking methods.",
      },

      wildlife: {
        image:
          "/images/continents/caribbean/countries/jamaica/fact-file/doctor-bird.jpg",

        title: "Doctor Bird",

        description:
          "The Doctor Bird is Jamaica’s national bird and is known for its colourful feathers and fast movement.",
      },

      culture: {
        image:
          "/images/continents/caribbean/countries/jamaica/fact-file/culture.jpg",

        title: "Jamaican Culture",

        description:
          "Jamaican culture has influenced music, fashion, sport, language, and storytelling around the world.",
      },
    },

    timeline: [],

    places: [
      {
        title: "Blue Mountains",
        tag: "Nature",

        image:
          "/images/continents/caribbean/countries/jamaica/places/blue-mountains.jpg",

        description:
          "The Blue Mountains are famous for their forests, hiking trails, coffee farming, and beautiful views across Jamaica.",
      },

      {
        title: "Kingston",
        tag: "Capital City",

        image:
          "/images/continents/caribbean/countries/jamaica/places/kingston1.jpg",

        description:
          "Kingston is Jamaica’s capital city and an important centre for music, history, art, and Caribbean culture.",
      },

      {
        title: "Dunn’s River Falls",
        tag: "Landmark",

        image:
          "/images/continents/caribbean/countries/jamaica/places/dunns-river-falls.jpg",

        description:
          "Dunn’s River Falls is one of Jamaica’s most famous natural landmarks with waterfalls flowing into the Caribbean Sea.",
      },

      {
        title: "Port Royal",
        tag: "History",

        image:
          "/images/continents/caribbean/countries/jamaica/places/port-royal.jpg",

        description:
          "Port Royal was once an important trading port known for piracy, trade, and colonial history in the Caribbean.",
      },
    ],
    influentialFigures: [
      {
        name: "Bob Marley",
        role: "Musician",
        image:
          "/images/continents/caribbean/countries/jamaica/figures/bob-marley.jpg",

        description:
          "Bob Marley helped spread reggae music around the world and became a global symbol of Jamaican culture and identity.",
      },

      {
        name: "Usain Bolt",
        role: "Athlete",
        image:
          "/images/continents/caribbean/countries/jamaica/figures/usain-bolt.jpg",

        description:
          "Usain Bolt became one of the fastest sprinters in history and inspired millions through athletics and Jamaican pride.",
      },

      {
        name: "Marcus Garvey",
        role: "Political Activist",
        image:
          "/images/continents/caribbean/countries/jamaica/figures/marcus-garvey.jpg",

        description:
          "Marcus Garvey was an important activist who promoted Black pride, unity, and empowerment across the world.",
      },

      {
        name: "Nanny of the Maroons",
        role: "National Hero",
        image:
          "/images/continents/caribbean/countries/jamaica/figures/nanny.jpg",

        description:
          "Nanny of the Maroons was a leader of resistance movements against slavery and is remembered as a Jamaican national hero.",
      },
    ],

    facts: [],
  },
  {
    slug: "antigua-and-barbuda",

    name: "Antigua and Barbuda",

    flag: "🇦🇬",

    capital: "Saint John's",

    population: "100,000",

    languages: ["English"],

    currency: "East Caribbean Dollar",

    heroImage:
      "/images/continents/caribbean/countries/antigua-and-barbuda/hero/Flag_of_Antigua_and_Barbuda.svg",

    intro:
      "Antigua and Barbuda is a Caribbean island nation known for beaches, sailing, coral reefs, and vibrant island culture.",

    overview:
      "Made up of two main islands, Antigua and Barbuda has a rich Caribbean identity shaped by African heritage, colonial history, music, festivals, and life connected closely to the sea.",

    tags: ["Islands", "Carnival", "Sailing", "Culture", "Caribbean Sea"],

    theme: {
      primary: "#c62828",

      secondary: "#ffb300",

      accent: "#0097a7",

      background: "linear-gradient(180deg, #fff8e1 0%, #ffe0b2 100%)",

      card: "rgba(255,255,255,0.88)",

      text: "#4e342e",

      timeline: "#00838f",
    },

    factFile: {
      capital: {
        image:
          "/images/continents/caribbean/countries/antigua-and-barbuda/fact-file/st-johns.jpg",

        title: "Saint John's",

        description:
          "Saint John's is the capital city of Antigua and Barbuda and an important centre for trade, tourism, and Caribbean culture.",
      },

      food: {
        image:
          "/images/continents/caribbean/countries/antigua-and-barbuda/fact-file/fungee.jpg",

        title: "Fungee and Pepperpot",

        description:
          "Fungee and pepperpot is a traditional dish made with cornmeal and rich vegetable stew.",
      },

      wildlife: {
        image:
          "/images/continents/caribbean/countries/antigua-and-barbuda/fact-file/frigatebird.jpg",

        title: "Frigatebird",

        description:
          "The frigatebird is known for its huge wingspan and can be seen around Antigua and Barbuda’s coastline and lagoons.",
      },
      culture: {
        image:
          "/images/continents/caribbean/countries/antigua-and-barbuda/fact-file/cricket.jpg",

        title: "Cricket Culture",

        description:
          "Cricket is an important part of Caribbean culture and identity, with Antigua and Barbuda producing famous players such as Viv Richards.",
      },
    },

    places: [
      {
        title: "Nelson’s Dockyard",

        tag: "History",

        image:
          "/images/continents/caribbean/countries/antigua-and-barbuda/places/nelsons-dockyard.jpg",

        description:
          "Nelson’s Dockyard is a historic naval dockyard connected to British colonial history and Caribbean trade routes.",
      },

      {
        title: "Barbuda Beaches",

        tag: "Nature",

        image:
          "/images/continents/caribbean/countries/antigua-and-barbuda/places/barbuda-beach.jpg",

        description:
          "Barbuda is famous for pink sand beaches, clear waters, and important coastal wildlife habitats.",
      },

      {
        title: "Shirley Heights",

        tag: "Landmark",

        image:
          "/images/continents/caribbean/countries/antigua-and-barbuda/places/shirley-heights.jpg",

        description:
          "Shirley Heights offers views across the island and is known for music, gatherings, and Caribbean celebrations.",
      },
    ],

    influentialFigures: [
      {
        name: "Viv Richards",

        role: "Cricketer",

        image:
          "/images/continents/caribbean/countries/antigua-and-barbuda/figures/viv-richards.jpg",

        description:
          "Viv Richards became one of the most famous cricketers in history and represented Caribbean sporting excellence.",
      },

      {
        name: "Heather Doram",

        role: "Artist",

        image:
          "/images/continents/caribbean/countries/antigua-and-barbuda/figures/heather-doram.jpg",

        description:
          "Heather Doram is known for celebrating Antiguan and Barbudan identity through art, design, and culture.",
      },

      {
        name: "Tim Hector",

        role: "Activist",

        image:
          "/images/continents/caribbean/countries/antigua-and-barbuda/figures/tim-hector.jpg",

        description:
          "Tim Hector was an important writer and activist who spoke about Caribbean politics, identity, and freedom.",
      },
    ],

    facts: [
      "Antigua is sometimes called the 'Land of 365 Beaches'.",

      "Cricket is one of the most popular sports in Antigua and Barbuda.",

      "Carnival is one of the country’s biggest celebrations each year.",
    ],
  },
  {
    slug: "bahamas",

    name: "Bahamas",

    flag: "🇧🇸",

    capital: "Nassau",

    population: "400,000",

    languages: ["English"],

    currency: "Bahamian Dollar",

    heroImage:
      "/images/continents/caribbean/countries/bahamas/hero/bahamas-hero.jpg",

    intro:
      "The Bahamas is a Caribbean island nation famous for turquoise waters, coral reefs, Junkanoo celebrations, and a history shaped by trade, piracy, migration, and island life.",

    overview:
      "Made up of around 700 islands and cays, the Bahamas has a culture deeply connected to the sea. African heritage, British colonial history, fishing traditions, music, tourism, and colourful festivals all help shape modern Bahamian identity. The country is also known for coral reef ecosystems, marine wildlife, and historic pirate stories connected to Nassau and the Caribbean trade routes.",

    tags: ["Junkanoo", "Pirates", "Marine Life", "Tourism", "Islands"],

    theme: {
      primary: "#0288d1",

      secondary: "#ffca28",

      accent: "#00897b",

      background: "linear-gradient(180deg, #e1f5fe 0%, #b2ebf2 100%)",

      card: "rgba(255,255,255,0.88)",

      text: "#263238",

      timeline: "#0277bd",
    },

    factFile: {
      history: {
        image:
          "/images/continents/caribbean/countries/bahamas/fact-file/pirates.jpg",

        title: "Pirate History",

        description:
          "During the Golden Age of Piracy, the Bahamas became one of the Caribbean’s most famous pirate regions and was connected to important Atlantic trade routes. Pirates such as Blackbeard operated around Nassau before the islands later developed into a major centre for tourism and trade.",
      },

      food: {
        image:
          "/images/continents/caribbean/countries/bahamas/fact-file/conch-salad.jpg",

        title: "Conch Salad",

        description:
          "Conch salad is one of the Bahamas’ most famous dishes and is closely connected to the country’s fishing traditions and coastal life. Fresh conch is mixed with lime juice, peppers, onions, and tomatoes across many islands.",
      },

      wildlife: {
        image:
          "/images/continents/caribbean/countries/bahamas/fact-file/flamingo.jpg",

        title: "Marine Wildlife",

        description:
          "The Bahamas is home to coral reefs, sea turtles, tropical fish, sharks, dolphins, and Caribbean flamingos. Marine ecosystems are important for tourism, fishing, and environmental protection across the islands.",
      },

      culture: {
        image:
          "/images/continents/caribbean/countries/bahamas/fact-file/junkanoo.jpg",

        title: "Junkanoo Festival",

        description:
          "Junkanoo is the Bahamas’ most famous cultural festival and includes music, dancing, drumming, colourful costumes, and large street parades. The celebration reflects African heritage, creativity, and Bahamian cultural identity.",
      },
    },

    places: [
      {
        title: "Nassau",

        tag: "History",

        image:
          "/images/continents/caribbean/countries/bahamas/places/nassau.jpg",

        description:
          "Nassau became one of the Caribbean’s most famous pirate centres during the Golden Age of Piracy and was connected to trade routes across the Atlantic Ocean. Today it is the capital of the Bahamas and an important centre for tourism, culture, and Caribbean history.",
      },

      {
        title: "Pig Beach",

        tag: "Tourism",

        image:
          "/images/continents/caribbean/countries/bahamas/places/exuma-cays.jpg",

        description:
          "Pig Beach, located in the Exuma Cays, became internationally famous because wild swimming pigs live on the island and interact with visitors. The beach is now one of the Bahamas’ best-known tourist attractions.",
      },

      {
        title: "Andros Barrier Reef",

        tag: "Marine Life",

        image:
          "/images/continents/caribbean/countries/bahamas/places/andros-reef.jpg",

        description:
          "The Andros Barrier Reef is one of the largest coral reef systems in the world and supports sea life including tropical fish, sharks, turtles, and coral ecosystems. The surrounding waters are also famous for underwater blue holes explored by divers and scientists.",
      },
    ],

    influentialFigures: [
      {
        name: "Sidney Poitier",

        role: "Actor",

        image:
          "/images/continents/caribbean/countries/bahamas/figures/sidney-poitier.jpg",

        description:
          "Sidney Poitier became the first Black man to win the Academy Award for Best Actor and helped break racial barriers in Hollywood cinema. He became one of the Bahamas’ most internationally recognised cultural figures.",
      },

      {
        name: "Lenny Kravitz",

        role: "Musician",

        image:
          "/images/continents/caribbean/countries/bahamas/figures/lenny-kravitz.jpg",

        description:
          "Lenny Kravitz is a Bahamian-American musician known for combining rock, funk, soul, and Caribbean influences in his music. His work helped introduce Bahamian cultural connections to international audiences.",
      },

      {
        name: "Myles Munroe",

        role: "Writer and Speaker",

        image:
          "/images/continents/caribbean/countries/bahamas/figures/myles-munroe.jpg",

        description:
          "Myles Munroe became internationally known for leadership teaching, writing, and motivational speaking. His books and speeches reached audiences across many countries.",
      },
    ],

    facts: [
      "The Bahamas is made up of around 700 islands and cays.",

      "Nassau was once known as a pirate stronghold during the Golden Age of Piracy.",

      "The Bahamas is home to one of the world’s largest coral reef systems.",

      "Junkanoo celebrations include music, dancing, drumming, and elaborate costumes.",

      "Tourism and marine environments are important parts of the Bahamian economy.",
    ],
  },
  {
    slug: "barbados",

    name: "Barbados",

    flag: "🇧🇧",

    capital: "Bridgetown",

    population: "280,000",

    languages: ["English", "Bajan Creole"],

    currency: "Barbadian Dollar",

    heroImage:
      "/images/continents/caribbean/countries/barbados/hero/barbados-hero.jpg",

    intro:
      "Barbados is a Caribbean island nation known for cricket, music, coral beaches, festivals, and a history shaped by the Atlantic sugar trade and British colonial rule.",

    overview:
      "Barbados has a strong Caribbean identity shaped by African heritage, colonial history, music, storytelling, sport, and island traditions. The country became one of Britain’s most important Caribbean colonies during the sugar plantation era and later developed a modern culture recognised around the world through cricket, tourism, festivals, and global figures such as Rihanna.",

    tags: [
      "Cricket",
      "Crop Over",
      "Music",
      "Colonial History",
      "Caribbean Culture",
    ],

    theme: {
      primary: "#1565c0",

      secondary: "#ffb300",

      accent: "#00897b",

      background: "linear-gradient(180deg, #fff8e1 0%, #ffe0b2 100%)",

      card: "rgba(255,255,255,0.88)",

      text: "#3e2723",

      timeline: "#1976d2",
    },

    factFile: {
      history: {
        image:
          "/images/continents/caribbean/countries/barbados/fact-file/history.jpg",

        title: "Plantations and Independence",

        description:
          "Barbados became one of Britain’s most important Caribbean colonies during the sugar plantation era. Enslaved Africans were forced to work on plantations across the island before Barbados later gained independence from Britain in 1966 and became a republic in 2021.",
      },

      food: {
        image:
          "/images/continents/caribbean/countries/barbados/fact-file/cou-cou.jpg",

        title: "Cou-Cou and Flying Fish",

        description:
          "Cou-cou and flying fish is Barbados’ national dish and reflects the island’s fishing traditions and Caribbean food culture. Flying fish are commonly found in the waters around Barbados.",
      },

      wildlife: {
        image:
          "/images/continents/caribbean/countries/barbados/fact-file/turtles.jpg",

        title: "Sea Turtles",

        description:
          "Barbados is known for sea turtles, coral reefs, tropical fish, and marine ecosystems. Hawksbill turtles can often be seen nesting on beaches around the island.",
      },

      culture: {
        image:
          "/images/continents/caribbean/countries/barbados/fact-file/crop-over.jpg",

        title: "Crop Over Festival",

        description:
          "Crop Over is Barbados’ most famous cultural festival and began during the sugar cane harvest period. The celebration includes music, dancing, colourful costumes, parades, and Caribbean traditions.",
      },
    },

    places: [
      {
        title: "Bridgetown",

        tag: "History",

        image:
          "/images/continents/caribbean/countries/barbados/places/bridgetown.jpg",

        description:
          "Bridgetown is the capital of Barbados and became an important trading port during the colonial period. Historic buildings, military sites, and old harbour areas help tell the story of Barbados’ connection to the Atlantic trade routes.",
      },

      {
        title: "Carlisle Bay",

        tag: "Nature",

        image:
          "/images/continents/caribbean/countries/barbados/places/carlisle-bay.jpg",

        description:
          "Carlisle Bay is famous for white sand beaches, calm Caribbean waters, coral reefs, and sea turtle habitats. The bay is also popular for snorkelling and exploring shipwrecks underwater.",
      },

      {
        title: "St Nicholas Abbey",

        tag: "Colonial History",

        image:
          "/images/continents/caribbean/countries/barbados/places/st-nicholas-abbey.jpg",

        description:
          "St Nicholas Abbey is one of the oldest plantation houses in the Caribbean and helps teach visitors about Barbados’ colonial history, sugar plantations, and rum production.",
      },

      {
        title: "Bathsheba",

        tag: "Landscape",

        image:
          "/images/continents/caribbean/countries/barbados/places/bathsheba.jpg",

        description:
          "Bathsheba is known for dramatic rock formations, Atlantic Ocean waves, and coastal scenery. The area is popular with surfers and is one of Barbados’ most recognisable landscapes.",
      },
    ],

    influentialFigures: [
      {
        name: "Rihanna",

        role: "Musician",

        image:
          "/images/continents/caribbean/countries/barbados/figures/rihanna.jpg",

        description:
          "Rihanna became one of the world’s most famous music artists and entrepreneurs. She has helped bring international attention to Barbadian culture and was named a National Hero of Barbados.",
      },

      {
        name: "Sir Garfield Sobers",

        role: "Cricketer",

        image:
          "/images/continents/caribbean/countries/barbados/figures/garfield-sobers.jpg",

        description:
          "Sir Garfield Sobers is considered one of the greatest cricketers in history and represented Barbados as part of the famous West Indies cricket team.",
      },

      {
        name: "Bussa",

        role: "Freedom Fighter",

        image:
          "/images/continents/caribbean/countries/barbados/figures/bussa.jpg",

        description:
          "Bussa led one of the largest slave rebellions in Barbadian history in 1816. He became an important symbol of resistance and freedom in Barbados.",
      },
    ],

    facts: [
      "Barbados became a republic in 2021 while remaining part of the Commonwealth.",

      "Crop Over celebrations began during the sugar cane harvest period.",

      "Barbados is famous for cricket and has produced legendary West Indies players.",

      "Rihanna was born in Barbados and became a National Hero of the country.",

      "Flying fish are strongly connected to Barbadian food and culture.",
    ],
  },
  {
    slug: "cuba",

    name: "Cuba",

    flag: "🇨🇺",

    capital: "Havana",

    population: "11 million",

    languages: ["Spanish"],

    currency: "Cuban Peso",

    heroImage: "/images/continents/caribbean/countries/cuba/hero/cuba-hero.jpg",

    intro:
      "Cuba is known for revolutionary history, music, dance, classic cars, baseball, and vibrant Caribbean culture shaped by African and Spanish influences.",

    overview:
      "Cuba is the largest island in the Caribbean and has a rich identity shaped by colonial history, revolution, music, migration, and artistic expression. African, Spanish, and Caribbean traditions all helped shape Cuban culture, which became internationally famous through salsa music, Havana’s historic streets, baseball, literature, and political history connected to the Cold War and the Cuban Revolution.",

    tags: [
      "Revolution",
      "Music",
      "Classic Cars",
      "Baseball",
      "Caribbean Culture",
    ],

    theme: {
      primary: "#c62828",

      secondary: "#1565c0",

      accent: "#ffb300",

      background: "linear-gradient(180deg, #fff3e0 0%, #ffe0b2 100%)",

      card: "rgba(255,255,255,0.88)",

      text: "#3e2723",

      timeline: "#b71c1c",
    },

    factFile: {
      history: {
        image:
          "/images/continents/caribbean/countries/cuba/fact-file/revolution.jpg",

        title: "Revolution and Independence",

        description:
          "Cuba was controlled by Spain before gaining independence in 1902. In 1959, Fidel Castro and revolutionary groups overthrew the government during the Cuban Revolution, an event that later connected Cuba closely to Cold War politics and shaped modern Cuban identity.",
      },

      food: {
        image:
          "/images/continents/caribbean/countries/cuba/fact-file/ropa-vieja.jpg",

        title: "Ropa Vieja",

        description:
          "Ropa vieja is one of Cuba’s most famous traditional dishes and is commonly made using shredded beef, tomatoes, peppers, onions, and spices. Cuban food reflects Spanish, African, and Caribbean influences.",
      },

      wildlife: {
        image:
          "/images/continents/caribbean/countries/cuba/fact-file/crocodile.jpg",

        title: "Cuban Wildlife",

        description:
          "Cuba is home to coral reefs, tropical birds, sea turtles, and the endangered Cuban crocodile, which is found mainly in wetland regions such as the Zapata Swamp.",
      },

      culture: {
        image:
          "/images/continents/caribbean/countries/cuba/fact-file/salsa.jpg",

        title: "Music and Dance",

        description:
          "Cuba became internationally famous for salsa music, Afro-Cuban rhythms, jazz, and dance traditions. Music and dance remain important parts of Cuban celebrations, identity, and everyday life.",
      },
    },

    places: [
      {
        title: "Havana",

        tag: "Capital City",

        image: "/images/continents/caribbean/countries/cuba/places/havana.jpg",

        description:
          "Havana is Cuba’s capital city and is famous for colourful colonial buildings, vintage American cars, music-filled streets, and important historical landmarks connected to the Cuban Revolution.",
      },

      {
        title: "Viñales Valley",

        tag: "Landscape",

        image: "/images/continents/caribbean/countries/cuba/places/vinales.jpg",

        description:
          "Viñales Valley is known for dramatic limestone hills, tobacco farms, caves, and rural landscapes. The region is important for traditional Cuban agriculture and cigar production.",
      },

      {
        title: "Malecón",

        tag: "Culture",

        image: "/images/continents/caribbean/countries/cuba/places/malecon.jpg",

        description:
          "The Malecón is a famous seaside walkway in Havana where people gather to socialise, fish, play music, and enjoy views across the Caribbean Sea.",
      },

      {
        title: "Trinidad",

        tag: "Colonial History",

        image:
          "/images/continents/caribbean/countries/cuba/places/trinidad.jpg",

        description:
          "Trinidad is one of Cuba’s best-preserved colonial towns and is known for cobbled streets, colourful buildings, sugar plantation history, and Spanish colonial architecture.",
      },
    ],

    influentialFigures: [
      {
        name: "José Martí",

        role: "Writer and Revolutionary",

        image:
          "/images/continents/caribbean/countries/cuba/figures/jose-marti.jpg",

        description:
          "José Martí became one of Cuba’s most important national heroes after campaigning for Cuban independence from Spain through writing, activism, and political leadership.",
      },

      {
        name: "Celia Cruz",

        role: "Singer",

        image:
          "/images/continents/caribbean/countries/cuba/figures/celia-cruz.jpg",

        description:
          "Celia Cruz became internationally famous as the ‘Queen of Salsa’ and helped spread Cuban and Afro-Caribbean music around the world.",
      },

      {
        name: "Fidel Castro",

        role: "Political Leader",

        image:
          "/images/continents/caribbean/countries/cuba/figures/fidel-castro.jpg",

        description:
          "Fidel Castro led the Cuban Revolution in 1959 and later became one of the most influential and controversial political leaders of the Cold War era.",
      },

      {
        name: "Compay Segundo",

        role: "Musician",

        image:
          "/images/continents/caribbean/countries/cuba/figures/compay-segundo.jpg",

        description:
          "Compay Segundo helped introduce traditional Cuban music to global audiences through the Buena Vista Social Club movement.",
      },
    ],

    facts: [
      "Cuba is the largest island in the Caribbean.",

      "Vintage American cars became closely associated with Cuban streets after trade restrictions during the Cold War.",

      "Baseball is one of the most popular sports in Cuba.",

      "Cuban music helped influence salsa, jazz, and Latin music around the world.",

      "Havana’s old town is recognised as a UNESCO World Heritage Site.",
    ],
  },
  {
    slug: "dominica",

    name: "Dominica",

    flag: "🇩🇲",

    capital: "Roseau",

    population: "72,000",

    languages: ["English", "Dominican Creole"],

    currency: "East Caribbean Dollar",

    heroImage:
      "/images/continents/caribbean/countries/dominica/hero/dominica-hero.jpg",

    intro:
      "Dominica is known for rainforests, waterfalls, volcanoes, and strong connections to Indigenous Kalinago heritage and Caribbean nature.",

    overview:
      "Dominica is often called the ‘Nature Island of the Caribbean’ because of its mountains, rainforests, volcanic landscapes, rivers, and hot springs. The island has a strong cultural identity shaped by African, French, British, and Kalinago influences alongside traditions connected closely to nature and community life.",

    tags: [
      "Rainforests",
      "Volcanoes",
      "Nature",
      "Kalinago Heritage",
      "Caribbean Culture",
    ],

    theme: {
      primary: "#2e7d32",

      secondary: "#ffb300",

      accent: "#00897b",

      background: "linear-gradient(180deg, #e8f5e9 0%, #c8e6c9 100%)",

      card: "rgba(255,255,255,0.88)",

      text: "#2f3e2f",

      timeline: "#1b5e20",
    },

    factFile: {
      history: {
        image:
          "/images/continents/caribbean/countries/dominica/fact-file/kalinago.jpg",

        title: "Kalinago Heritage",

        description:
          "Dominica is home to the Kalinago Territory, one of the last remaining Indigenous Caribbean communities in the region. Kalinago culture, traditions, crafts, and history remain important parts of Dominican identity.",
      },
      food: {
        image:
          "/images/continents/caribbean/countries/dominica/fact-file/callaloo.jpg",

        title: "Callaloo Soup",

        description:
          "Callaloo soup is a traditional Caribbean dish made using leafy greens, vegetables, herbs, and local seasonings. Dominican food is shaped by African, Creole, and island cooking traditions.",
      },

      wildlife: {
        image:
          "/images/continents/caribbean/countries/dominica/fact-file/sisserou.jpg",

        title: "Sisserou Parrot",

        description:
          "The endangered Sisserou Parrot is Dominica’s national bird and lives mainly in the island’s mountain rainforests. It has become an important national symbol.",
      },

      culture: {
        image:
          "/images/continents/caribbean/countries/dominica/fact-file/carnival-d.jpg",

        title: "Creole Culture",

        description:
          "Dominican culture includes Creole music, dancing, storytelling, Carnival celebrations, and traditions shaped by African, French, and Caribbean influences.",
      },
    },

    places: [
      {
        title: "Boiling Lake",

        tag: "Volcanoes",

        image:
          "/images/continents/caribbean/countries/dominica/places/boiling-lake.jpg",

        description:
          "Boiling Lake is one of the largest hot lakes in the world and was formed by volcanic activity beneath Dominica’s mountains and rainforest landscapes.",
      },

      {
        title: "Morne Trois Pitons",

        tag: "Nature",

        image:
          "/images/continents/caribbean/countries/dominica/places/morne-trois-pitons.jpg",

        description:
          "Morne Trois Pitons National Park is a UNESCO World Heritage Site known for volcanoes, waterfalls, hot springs, tropical forests, and hiking trails.",
      },

      {
        title: "Trafalgar Falls",

        tag: "Landmark",

        image:
          "/images/continents/caribbean/countries/dominica/places/trafalgar-falls.jpg",

        description:
          "Trafalgar Falls is one of Dominica’s most famous natural landmarks and is surrounded by rainforest, rivers, and volcanic hot springs.",
      },

      {
        title: "Kalinago Territory",

        tag: "Culture",

        image:
          "/images/continents/caribbean/countries/dominica/places/kalinago-territory.jpg",

        description:
          "The Kalinago Territory helps preserve Indigenous Caribbean traditions, crafts, language, and cultural history on the island.",
      },
    ],

    influentialFigures: [
      {
        name: "Jean Rhys",

        role: "Writer",

        image:
          "/images/continents/caribbean/countries/dominica/figures/jean-rhys.jpg",

        description:
          "Jean Rhys became internationally known for novels exploring identity, colonial history, and Caribbean life.",
      },

      {
        name: "Ophelia Marie",

        role: "Musician",

        image:
          "/images/continents/caribbean/countries/dominica/figures/ophelia-marie.jpg",

        description:
          "Ophelia Marie became known as the ‘Lady of Creole Music’ and helped promote Dominican Creole culture and Caribbean music traditions.",
      },

      {
        name: "Alwin Bully",

        role: "Artist and Cultural Leader",

        image:
          "/images/continents/caribbean/countries/dominica/figures/alwin-bully.jpg",

        description:
          "Alwin Bully became known for theatre, art, and helping design Dominica’s national flag and cultural identity.",
      },
    ],

    facts: [
      "Dominica is known as the ‘Nature Island of the Caribbean’.",

      "The island has volcanoes, rainforests, waterfalls, and hot springs.",

      "Dominica is home to one of the Caribbean’s last remaining Kalinago communities.",

      "The Sisserou Parrot is featured on Dominica’s national flag.",
    ],
  },
  {
    slug: "dominican-republic",

    name: "Dominican Republic",

    flag: "🇩🇴",

    capital: "Santo Domingo",

    population: "11.3 million",

    languages: ["Spanish"],

    currency: "Dominican Peso",

    heroImage:
      "/images/continents/caribbean/countries/dominican-republic/hero/dominican-republic-hero.jpg",

    intro:
      "The Dominican Republic is known for baseball, merengue music, beaches, mountain landscapes, and one of the oldest European cities in the Americas.",

    overview:
      "The Dominican Republic shares the island of Hispaniola with Haiti and has a culture shaped by Spanish colonial history, African heritage, Caribbean traditions, music, sport, and tourism. The country became internationally recognised for merengue music, baseball talent, tropical landscapes, and the historic city of Santo Domingo.",

    tags: [
      "Baseball",
      "Merengue",
      "Colonial History",
      "Mountains",
      "Caribbean Culture",
    ],

    theme: {
      primary: "#1565c0",

      secondary: "#c62828",

      accent: "#ffb300",

      background: "linear-gradient(180deg, #fff8e1 0%, #ffe0b2 100%)",

      card: "rgba(255,255,255,0.88)",

      text: "#3e2723",

      timeline: "#0d47a1",
    },

    factFile: {
      history: {
        image:
          "/images/continents/caribbean/countries/dominican-republic/fact-file/history1.jpg",

        title: "Colonial History",

        description:
          "Santo Domingo became one of the first major European settlements in the Americas after Spanish arrival in the Caribbean. Colonial buildings, forts, and churches from this period still remain important parts of Dominican history.",
      },

      food: {
        image:
          "/images/continents/caribbean/countries/dominican-republic/fact-file/mangu.jpg",

        title: "Mangú",

        description:
          "Mangú is a traditional Dominican dish made from mashed plantains and is commonly eaten with onions, eggs, cheese, or salami. Plantains are important ingredients across Caribbean cooking.",
      },

      culture: {
        image:
          "/images/continents/caribbean/countries/dominican-republic/fact-file/merengue.jpg",

        title: "Merengue Music",

        description:
          "Merengue music and dance became important symbols of Dominican culture and identity. The fast rhythms and dancing styles became popular across the Caribbean and Latin America.",
      },

      wildlife: {
        image:
          "/images/continents/caribbean/countries/dominican-republic/fact-file/humpback-whale.jpg",

        title: "Marine Wildlife",

        description:
          "The Dominican Republic is known for tropical forests, coral reefs, and marine wildlife including humpback whales that migrate through Caribbean waters near the island each year.",
      },
    },

    places: [
      {
        title: "Santo Domingo",

        tag: "History",

        image:
          "/images/continents/caribbean/countries/dominican-republic/places/santo-domingo.jpg",

        description:
          "Santo Domingo is one of the oldest European-founded cities in the Americas and is known for colonial architecture, plazas, cathedrals, and important Caribbean history.",
      },

      {
        title: "Pico Duarte",

        tag: "Mountains",

        image:
          "/images/continents/caribbean/countries/dominican-republic/places/pico-duarte.jpg",

        description:
          "Pico Duarte is the highest mountain in the Caribbean and is surrounded by forests, rivers, and hiking trails across the Dominican Republic’s mountain landscapes.",
      },

      {
        title: "Punta Cana",

        tag: "Tourism",

        image:
          "/images/continents/caribbean/countries/dominican-republic/places/punta-cana.jpg",

        description:
          "Punta Cana became internationally famous for beaches, resorts, tourism, and tropical Caribbean coastlines.",
      },

      {
        title: "Los Haitises National Park",

        tag: "Nature",

        image:
          "/images/continents/caribbean/countries/dominican-republic/places/los-haitises.jpg",

        description:
          "Los Haitises National Park is known for mangrove forests, caves, islands, and rich wildlife ecosystems connected to Caribbean nature and conservation.",
      },
    ],

    influentialFigures: [
      {
        name: "Juan Luis Guerra",

        role: "Musician",

        image:
          "/images/continents/caribbean/countries/dominican-republic/figures/juan-luis-guerra.jpg",

        description:
          "Juan Luis Guerra became internationally famous for merengue and Latin music that helped spread Dominican culture around the world.",
      },

      {
        name: "Pedro Martínez",

        role: "Baseball Player",

        image:
          "/images/continents/caribbean/countries/dominican-republic/figures/pedro-martinez.jpg",

        description:
          "Pedro Martínez became one of the Dominican Republic’s most successful baseball players and inspired generations of Caribbean athletes.",
      },

      {
        name: "Óscar de la Renta",

        role: "Fashion Designer",

        image:
          "/images/continents/caribbean/countries/dominican-republic/figures/oscar-de-la-renta.jpg",

        description:
          "Óscar de la Renta became one of the world’s most famous fashion designers and helped bring international attention to Dominican creativity and design.",
      },
    ],

    facts: [
      "The Dominican Republic shares the island of Hispaniola with Haiti.",

      "Baseball is one of the country’s most popular sports.",

      "Merengue music became an important symbol of Dominican culture.",

      "Santo Domingo is one of the oldest European-founded cities in the Americas.",

      "Pico Duarte is the highest mountain in the Caribbean.",
    ],
  },
  {
    slug: "grenada",

    name: "Grenada",

    flag: "🇬🇩",

    capital: "Saint George's",

    population: "125,000",

    languages: ["English", "Grenadian Creole"],

    currency: "East Caribbean Dollar",

    heroImage:
      "/images/continents/caribbean/countries/grenada/hero/grenada-hero.jpg",

    intro:
      "Grenada is known for spices, rainforests, waterfalls, Caribbean beaches, and a strong cultural identity shaped by African heritage and island traditions.",

    overview:
      "Grenada is often called the ‘Spice Isle’ because of its production of nutmeg, cinnamon, cloves, and other spices exported around the world. The island’s culture is shaped by African, French, British, and Caribbean influences alongside traditions connected to farming, fishing, music, and Carnival celebrations.",

    tags: ["Spices", "Rainforests", "Carnival", "Nature", "Caribbean Culture"],

    theme: {
      primary: "#2e7d32",

      secondary: "#ff8f00",

      accent: "#c62828",

      background: "linear-gradient(180deg, #fff8e1 0%, #ffe082 100%)",

      card: "rgba(255,255,255,0.88)",

      text: "#3e2723",

      timeline: "#1b5e20",
    },

    factFile: {
      history: {
        image:
          "/images/continents/caribbean/countries/grenada/fact-file/spice-market.jpg",

        title: "Spice Markets",

        description:
          "Grenada became known as the ‘Spice Isle’ because of its production of nutmeg, cinnamon, cloves, and cocoa. Spice markets and farming remain important parts of Grenadian trade, culture, and identity.",
      },

      food: {
        image:
          "/images/continents/caribbean/countries/grenada/fact-file/oil-down.jpg",

        title: "Oil Down",

        description:
          "Oil down is Grenada’s national dish and is made using breadfruit, coconut milk, vegetables, dumplings, and meat or fish cooked together in one pot.",
      },

      wildlife: {
        image:
          "/images/continents/caribbean/countries/grenada/fact-file/grenada-dove.jpg",

        title: "Grenada Dove",

        description:
          "The Grenada Dove is a rare bird found only on the island and is considered Grenada’s national bird. Protecting its forest habitat became an important part of wildlife conservation in Grenada.",
      },

      culture: {
        image:
          "/images/continents/caribbean/countries/grenada/fact-file/carnival-spice.jpg",

        title: "Spicemas Carnival",

        description:
          "Spicemas Carnival is Grenada’s biggest cultural celebration and includes music, dancing, steelpan performances, colourful costumes, and Caribbean traditions.",
      },
    },

    places: [
      {
        title: "Saint George's",

        tag: "Capital City",

        image:
          "/images/continents/caribbean/countries/grenada/places/st-georges.jpg",

        description:
          "Saint George’s is Grenada’s capital city and is known for its harbour, colourful hillside buildings, markets, and colonial forts overlooking the Caribbean Sea.",
      },

      {
        title: "Grand Anse Beach",

        tag: "Tourism",

        image:
          "/images/continents/caribbean/countries/grenada/places/grand-anse.jpg",

        description:
          "Grand Anse Beach became famous for white sand beaches, calm waters, tourism, and Caribbean coastal scenery.",
      },

      {
        title: "Annandale Falls",

        tag: "Nature",

        image:
          "/images/continents/caribbean/countries/grenada/places/annandale-falls.jpg",

        description:
          "Annandale Falls is surrounded by rainforest vegetation and is one of Grenada’s best-known natural landmarks.",
      },

      {
        title: "Underwater Sculpture Park",

        tag: "Art",

        image:
          "/images/continents/caribbean/countries/grenada/places/sculpture-park.jpg",

        description:
          "Grenada’s underwater sculpture park combines art and marine conservation through underwater sculptures placed beneath the Caribbean Sea.",
      },
    ],

    influentialFigures: [
      {
        name: "Kirani James",

        role: "Athlete",

        image:
          "/images/continents/caribbean/countries/grenada/figures/kirani-james.jpg",

        description:
          "Kirani James became Grenada’s first Olympic gold medal winner and inspired Caribbean athletes through international athletics.",
      },

      {
        name: "The Mighty Sparrow",

        role: "Musician",

        image:
          "/images/continents/caribbean/countries/grenada/figures/mighty-sparrow.jpg",

        description:
          "The Mighty Sparrow was born in Grenada before becoming one of the Caribbean’s most famous calypso musicians and cultural performers.",
      },

      {
        name: "Jason deCaires Taylor",

        role: "Artist",

        image:
          "/images/continents/caribbean/countries/grenada/figures/jason-decaires.jpg",

        description:
          "Jason deCaires Taylor became internationally known for underwater sculpture art connected to Grenada’s marine environments.",
      },
    ],

    facts: [
      "Grenada is often called the ‘Spice Isle’.",

      "Nutmeg is one of Grenada’s most important exports.",

      "Oil down is considered Grenada’s national dish.",

      "Grenada has an underwater sculpture park beneath the Caribbean Sea.",

      "Spicemas is Grenada’s biggest Carnival celebration.",
    ],
  },
  {
    slug: "haiti",

    name: "Haiti",

    flag: "🇭🇹",

    capital: "Port-au-Prince",

    population: "11.5 million",

    languages: ["French", "Haitian Creole"],

    currency: "Haitian Gourde",

    heroImage:
      "/images/continents/caribbean/countries/haiti/hero/haiti-hero.jpg",

    intro:
      "Haiti is known for revolutionary history, art, music, mountain landscapes, and becoming the first independent Black republic in the world.",

    overview:
      "Haiti has a powerful history shaped by African heritage, French colonialism, revolution, resilience, religion, and artistic expression. The Haitian Revolution became one of the most important events in world history after enslaved people successfully fought for freedom and independence from France.",

    tags: ["Revolution", "Art", "History", "Mountains", "Culture"],

    theme: {
      primary: "#1565c0",

      secondary: "#c62828",

      accent: "#ffb300",

      background: "linear-gradient(180deg, #fff8e1 0%, #ffe0b2 100%)",

      card: "rgba(255,255,255,0.88)",

      text: "#3e2723",

      timeline: "#0d47a1",
    },

    factFile: {
      history: {
        image:
          "/images/continents/caribbean/countries/haiti/fact-file/haitian-revolution.jpg",

        title: "The Haitian Revolution",

        description:
          "The Haitian Revolution led to Haiti becoming the first independent Black republic in the world in 1804 after enslaved people successfully fought against French colonial rule.",
      },

      food: {
        image:
          "/images/continents/caribbean/countries/haiti/fact-file/griot.jpg",

        title: "Griot",

        description:
          "Griot is a traditional Haitian dish made using seasoned fried pork often served with rice, plantains, and spicy sauces connected to Haitian food traditions.",
      },

      culture: {
        image:
          "/images/continents/caribbean/countries/haiti/fact-file/haitian-art.jpg",

        title: "Haitian Art",

        description:
          "Haiti became internationally known for colourful paintings, murals, metalwork, storytelling, music, and artistic traditions inspired by African and Caribbean culture.",
      },

      wildlife: {
        image:
          "/images/continents/caribbean/countries/haiti/fact-file/hispaniolan-trogon.jpg",

        title: "Hispaniolan Trogon",

        description:
          "The Hispaniolan Trogon is a colourful bird found only on the island of Hispaniola, which Haiti shares with the Dominican Republic. It became an important symbol of Caribbean biodiversity and tropical forest wildlife.",
      },
    },

    places: [
      {
        title: "Citadelle Laferrière",

        tag: "History",

        image:
          "/images/continents/caribbean/countries/haiti/places/citadelle.jpg",

        description:
          "Citadelle Laferrière is one of the largest fortresses in the Americas and became a symbol of Haitian independence and resistance after the revolution.",
      },

      {
        title: "Port-au-Prince",

        tag: "Capital City",

        image:
          "/images/continents/caribbean/countries/haiti/places/port-au-prince.jpg",

        description:
          "Port-au-Prince is Haiti’s capital city and is known for markets, street art, music, history, and cultural life connected to Haitian identity.",
      },

      {
        title: "Bassin Bleu",

        tag: "Nature",

        image:
          "/images/continents/caribbean/countries/haiti/places/bassin-bleu.jpg",

        description:
          "Bassin Bleu is famous for waterfalls, jungle scenery, blue pools, and tropical landscapes surrounded by mountains and forests.",
      },

      {
        title: "Jacmel",

        tag: "Art and Culture",

        image: "/images/continents/caribbean/countries/haiti/places/jacmel.jpg",

        description:
          "Jacmel became known for colourful architecture, Haitian art, Carnival masks, music, and creative cultural traditions.",
      },
    ],

    influentialFigures: [
      {
        name: "Toussaint Louverture",

        role: "Revolutionary Leader",

        image:
          "/images/continents/caribbean/countries/haiti/figures/toussaint-louverture.jpg",

        description:
          "Toussaint Louverture became one of the most important leaders of the Haitian Revolution and played a major role in the fight against slavery and colonial rule.",
      },

      {
        name: "Jean-Michel Basquiat",

        role: "Artist",

        image:
          "/images/continents/caribbean/countries/haiti/figures/basquiat.jpg",

        description:
          "Jean-Michel Basquiat was a globally influential artist with Haitian heritage whose artwork helped shape modern art and street art culture.",
      },

      {
        name: "Wyclef Jean",

        role: "Musician",

        image:
          "/images/continents/caribbean/countries/haiti/figures/wyclef-jean.jpg",

        description:
          "Wyclef Jean helped bring Haitian and Caribbean musical influences to global audiences through hip-hop, reggae, and world music.",
      },
    ],

    facts: [
      "Haiti became the first independent Black republic in the world in 1804.",

      "The Haitian Revolution became one of the most important anti-slavery revolutions in history.",

      "Haitian Creole is widely spoken across the country.",

      "Haiti shares the island of Hispaniola with the Dominican Republic.",

      "Haitian art and music became internationally recognised for colour and creativity.",
    ],
  },
  {
    slug: "saint-kitts-and-nevis",

    name: "Saint Kitts and Nevis",

    flag: "🇰🇳",

    capital: "Basseterre",

    population: "48,000",

    languages: ["English"],

    currency: "East Caribbean Dollar",

    heroImage:
      "/images/continents/caribbean/countries/saint-kitts-and-nevis/hero/st-kitts-hero.jpg",

    intro:
      "Saint Kitts and Nevis is known for volcanic mountains, railway history, Caribbean beaches, cricket culture, and one of the oldest colonial settlements in the Caribbean.",

    overview:
      "Saint Kitts and Nevis is made up of two volcanic Caribbean islands shaped by African heritage, British colonial history, sugar plantations, music, festivals, and coastal traditions. The country became important during the colonial sugar trade and later developed a strong cultural identity connected to Carnival, cricket, tourism, and island life.",

    tags: [
      "Volcanoes",
      "Sugar History",
      "Cricket",
      "Carnival",
      "Caribbean Culture",
    ],

    theme: {
      primary: "#2e7d32",

      secondary: "#c62828",

      accent: "#ffb300",

      background: "linear-gradient(180deg, #fff8e1 0%, #ffe082 100%)",

      card: "rgba(255,255,255,0.88)",

      text: "#3e2723",

      timeline: "#1b5e20",
    },

    factFile: {
      history: {
        image:
          "/images/continents/caribbean/countries/saint-kitts-and-nevis/fact-file/sugar-plantation.jpg",

        title: "Sugar Plantation History",

        description:
          "Saint Kitts became one of the Caribbean’s earliest British colonies and developed large sugar plantations worked by enslaved Africans. Sugar production shaped the country’s economy, culture, and colonial history for centuries.",
      },

      food: {
        image:
          "/images/continents/caribbean/countries/saint-kitts-and-nevis/fact-file/goat-water.jpg",

        title: "Goat Water",

        description:
          "Goat water is a traditional stew made using meat, spices, vegetables, and bread. The dish became an important part of local food traditions across Saint Kitts and Nevis.",
      },

      wildlife: {
        image:
          "/images/continents/caribbean/countries/saint-kitts-and-nevis/fact-file/vervet-monkey.jpg",

        title: "Vervet Monkeys",

        description:
          "Green vervet monkeys live across Saint Kitts and Nevis after originally being brought to the Caribbean centuries ago. They later became one of the islands’ most recognisable animals.",
      },

      culture: {
        image:
          "/images/continents/caribbean/countries/saint-kitts-and-nevis/fact-file/sugar-mas.jpg",

        title: "Sugar Mas Festival",

        description:
          "Sugar Mas is the country’s major Carnival celebration and includes music, dancing, steelpan performances, colourful costumes, and Caribbean cultural traditions.",
      },
    },

    places: [
      {
        title: "Brimstone Hill Fortress",

        tag: "History",

        image:
          "/images/continents/caribbean/countries/saint-kitts-and-nevis/places/brimstone-hill.jpg",

        description:
          "Brimstone Hill Fortress became one of the Caribbean’s most important military forts during the colonial period and is now recognised as a UNESCO World Heritage Site.",
      },

      {
        title: "Mount Liamuiga",

        tag: "Volcano",

        image:
          "/images/continents/caribbean/countries/saint-kitts-and-nevis/places/mount-liamuiga.jpg",

        description:
          "Mount Liamuiga is a dormant volcano surrounded by rainforest, hiking trails, and tropical wildlife on Saint Kitts.",
      },

      {
        title: "Basseterre",

        tag: "Capital City",

        image:
          "/images/continents/caribbean/countries/saint-kitts-and-nevis/places/basseterre.jpg",

        description:
          "Basseterre is the capital city of Saint Kitts and Nevis and became an important colonial trading port connected to Caribbean shipping and sugar exports.",
      },

      {
        title: "Saint Kitts Scenic Railway",

        tag: "Railway History",

        image:
          "/images/continents/caribbean/countries/saint-kitts-and-nevis/places/scenic-railway.jpg",

        description:
          "The Saint Kitts Scenic Railway was originally built to transport sugar cane around the island before later becoming one of the Caribbean’s best-known railway tourist attractions.",
      },
    ],

    influentialFigures: [
      {
        name: "Kim Collins",

        role: "Athlete",

        image:
          "/images/continents/caribbean/countries/saint-kitts-and-nevis/figures/kim-collins.jpg",

        description:
          "Kim Collins became one of the Caribbean’s most successful sprinters and represented Saint Kitts and Nevis in international athletics competitions.",
      },

      {
        name: "Joan Armatrading",

        role: "Singer and Songwriter",

        image:
          "/images/continents/caribbean/countries/saint-kitts-and-nevis/figures/joan-armatrading.jpg",

        description:
          "Joan Armatrading is an internationally recognised singer-songwriter with family roots connected to Saint Kitts and Nevis.",
      },
    ],

    facts: [
      "Saint Kitts and Nevis is the smallest sovereign state in the Americas by population.",

      "The islands were shaped by volcanic activity and mountainous landscapes.",

      "Sugar production played a major role in the country’s colonial history.",

      "Vervet monkeys are commonly seen across Saint Kitts.",

      "Brimstone Hill Fortress became one of the Caribbean’s most important colonial forts.",
    ],
  },

  {
    slug: "saint-lucia",

    name: "Saint Lucia",

    flag: "🇱🇨",

    capital: "Castries",

    population: "180,000",

    languages: ["English", "Saint Lucian Creole French"],

    currency: "East Caribbean Dollar",

    heroImage:
      "/images/continents/caribbean/countries/saint-lucia/hero/st-lucia-hero.jpg",

    intro:
      "Saint Lucia is known for volcanic mountains, Creole culture, rainforests, music, and the famous Pitons rising above the Caribbean Sea.",

    overview:
      "Saint Lucia has a strong Caribbean identity shaped by African heritage, French and British colonial history, Creole traditions, music, fishing communities, and volcanic landscapes. The island became internationally recognised for the Pitons, tropical rainforests, artistic culture, and important literary figures such as Derek Walcott.",

    tags: [
      "Pitons",
      "Volcanoes",
      "Creole Culture",
      "Rainforests",
      "Caribbean Sea",
    ],

    theme: {
      primary: "#2e7d32",

      secondary: "#1565c0",

      accent: "#ffb300",

      background: "linear-gradient(180deg, #e8f5e9 0%, #c8e6c9 100%)",

      card: "rgba(255,255,255,0.88)",

      text: "#2f3e2f",

      timeline: "#1b5e20",
    },

    factFile: {
      history: {
        image:
          "/images/continents/caribbean/countries/saint-lucia/fact-file/pitons-landscape.jpg",

        title: "The Pitons",

        description:
          "The Pitons are two volcanic mountains that became the most famous natural landmarks in Saint Lucia. The dramatic peaks rising beside the Caribbean Sea helped make the island internationally recognised for its volcanic landscapes and rainforest scenery.",
      },

      food: {
        image:
          "/images/continents/caribbean/countries/saint-lucia/fact-file/green-fig-saltfish.jpg",

        title: "Green Fig and Saltfish",

        description:
          "Green fig and saltfish became one of Saint Lucia’s best-known traditional dishes using green bananas, salted fish, spices, and vegetables connected to Caribbean food traditions.",
      },

      wildlife: {
        image:
          "/images/continents/caribbean/countries/saint-lucia/fact-file/saint-lucia-parrot.jpg",

        title: "Saint Lucia Parrot",

        description:
          "The Saint Lucia Parrot is a rare colourful bird found only on the island and became an important national symbol connected to rainforest conservation.",
      },

      culture: {
        image:
          "/images/continents/caribbean/countries/saint-lucia/fact-file/jounen-kweyol.jpg",

        title: "Jounen Kwéyòl",

        description:
          "Jounen Kwéyòl celebrates Saint Lucian Creole culture through music, dancing, storytelling, traditional clothing, and Caribbean food traditions.",
      },
    },

    places: [
      {
        title: "Gros Piton",

        tag: "Volcanoes",

        image:
          "/images/continents/caribbean/countries/saint-lucia/places/gros-piton.jpg",

        description:
          "Gros Piton is one of Saint Lucia’s famous volcanic mountains and is surrounded by rainforest trails, tropical wildlife, and Caribbean coastal views.",
      },

      {
        title: "Soufrière",

        tag: "Volcanic Landscape",

        image:
          "/images/continents/caribbean/countries/saint-lucia/places/soufriere.jpg",

        description:
          "Soufrière is known for volcanic springs, rainforest scenery, fishing traditions, and views of the Pitons beside the Caribbean Sea.",
      },

      {
        title: "Sulphur Springs",

        tag: "Nature",

        image:
          "/images/continents/caribbean/countries/saint-lucia/places/sulphur-springs.jpg",

        description:
          "Sulphur Springs became famous for geothermal activity, bubbling volcanic pools, and one of the Caribbean’s only drive-in volcano experiences.",
      },

      {
        title: "Marigot Bay",

        tag: "Coastline",

        image:
          "/images/continents/caribbean/countries/saint-lucia/places/marigot-bay.jpg",

        description:
          "Marigot Bay became internationally recognised for tropical scenery, sailing boats, palm-lined coastlines, and Caribbean tourism.",
      },
    ],

    influentialFigures: [
      {
        name: "Derek Walcott",

        role: "Poet and Writer",

        image:
          "/images/continents/caribbean/countries/saint-lucia/figures/derek-walcott.jpg",

        description:
          "Derek Walcott won the Nobel Prize in Literature and became one of the Caribbean’s most important poets and writers.",
      },

      {
        name: "Arthur Lewis",

        role: "Economist",

        image:
          "/images/continents/caribbean/countries/saint-lucia/figures/arthur-lewis.jpg",

        description:
          "Sir Arthur Lewis became the first Black person to win the Nobel Prize in Economics and helped shape global economic thinking.",
      },

      {
        name: "Julien Alfred",

        role: "Athlete",

        image:
          "/images/continents/caribbean/countries/saint-lucia/figures/julien-alfred.jpg",

        description:
          "Julien Alfred became one of Saint Lucia’s most successful international sprinters and inspired Caribbean athletes through global athletics competitions.",
      },

      {
        name: "Teddyson John",

        role: "Musician",

        image:
          "/images/continents/caribbean/countries/saint-lucia/figures/teddyson-john.jpg",

        description:
          "Teddyson John became known for music blending Creole culture, Caribbean rhythms, and Saint Lucian identity.",
      },
    ],

    facts: [
      "The Pitons are UNESCO World Heritage landmarks.",

      "Saint Lucia has a strong Creole cultural identity.",

      "The island was shaped by volcanic activity and rainforest landscapes.",

      "Derek Walcott won the Nobel Prize in Literature.",

      "Saint Lucia is known for sailing, fishing, and Caribbean tourism.",
    ],
  },
  {
    slug: "trinidad-and-tobago",

    name: "Trinidad and Tobago",

    flag: "🇹🇹",

    capital: "Port of Spain",

    population: "1.5 million",

    languages: ["English", "Trinidadian Creole"],

    currency: "Trinidad and Tobago Dollar",

    heroImage:
      "/images/continents/caribbean/countries/trinidad-and-tobago/hero/trinidad-flag.jpg",

    intro:
      "Trinidad and Tobago is known for Carnival, steelpan music, calypso, doubles street food, oil production, and one of the Caribbean’s richest musical cultures.",

    overview:
      "Trinidad and Tobago has a vibrant cultural identity shaped by African, Indian, European, Chinese, and Middle Eastern influences alongside Caribbean traditions. The country became internationally famous for Carnival celebrations, steelpan music, soca, calypso, cricket, and energetic street culture. Trinidad also developed one of the Caribbean’s largest oil and natural gas industries while Tobago became known for beaches, coral reefs, and rainforest landscapes.",

    tags: ["Carnival", "Steelpan", "Soca", "Oil Industry", "Music"],

    theme: {
      primary: "#c62828",

      secondary: "#ffb300",

      accent: "#212121",

      background: "linear-gradient(180deg, #fff3e0 0%, #ffe082 100%)",

      card: "rgba(255,255,255,0.88)",

      text: "#3e2723",

      timeline: "#b71c1c",
    },

    factFile: {
      history: {
        image:
          "/images/continents/caribbean/countries/trinidad-and-tobago/fact-file/steelpan-band.jpg",

        title: "Steelpan Music",

        description:
          "Steelpan music was developed in Trinidad and became one of the Caribbean’s most important musical inventions. Steel bands later became internationally recognised symbols of Trinidadian culture and Carnival celebrations.",
      },

      food: {
        image:
          "/images/continents/caribbean/countries/trinidad-and-tobago/fact-file/doubles-street-food.jpg",

        title: "Doubles",

        description:
          "Doubles became one of Trinidad and Tobago’s most famous street foods using curried chickpeas served inside fried flatbread. The dish reflects strong Indian-Caribbean cultural influences.",
      },

      wildlife: {
        image:
          "/images/continents/caribbean/countries/trinidad-and-tobago/fact-file/scarlet-ibis.jpg",

        title: "Scarlet Ibis",

        description:
          "The Scarlet Ibis is Trinidad and Tobago’s national bird and is known for its bright red feathers. Large groups can often be seen in the Caroni wetlands.",
      },

      culture: {
        image:
          "/images/continents/caribbean/countries/trinidad-and-tobago/fact-file/trinidad-carnival-costumes.jpg",

        title: "Carnival Culture",

        description:
          "Trinidad Carnival became one of the world’s most famous Carnival celebrations with elaborate costumes, soca music, dancing, steelpan performances, and street parades across Port of Spain.",
      },
    },

    places: [
      {
        title: "Port of Spain",

        tag: "Capital City",

        image:
          "/images/continents/caribbean/countries/trinidad-and-tobago/places/port-of-spain.jpg",

        description:
          "Port of Spain is the capital city of Trinidad and Tobago and became internationally recognised for Carnival celebrations, music culture, cricket, and Caribbean street life.",
      },

      {
        title: "Pitch Lake",

        tag: "Natural Wonder",

        image:
          "/images/continents/caribbean/countries/trinidad-and-tobago/places/pitch-lake.jpg",

        description:
          "Pitch Lake is one of the world’s largest natural asphalt lakes and became an important industrial and geological landmark in Trinidad.",
      },

      {
        title: "Caroni Bird Sanctuary",

        tag: "Wildlife",

        image:
          "/images/continents/caribbean/countries/trinidad-and-tobago/places/caroni-bird-sanctuary.jpg",

        description:
          "The Caroni wetlands are famous for mangroves, tropical wildlife, and large flocks of Scarlet Ibises returning to the trees at sunset.",
      },

      {
        title: "Pigeon Point",

        tag: "Beaches",

        image:
          "/images/continents/caribbean/countries/trinidad-and-tobago/places/pigeon-point.jpg",

        description:
          "Pigeon Point in Tobago became famous for white sand beaches, coral reefs, turquoise waters, and Caribbean tourism.",
      },
    ],

    influentialFigures: [
      {
        name: "Machel Montano",

        role: "Musician",

        image:
          "/images/continents/caribbean/countries/trinidad-and-tobago/figures/machel-montano.jpg",

        description:
          "Machel Montano became one of the Caribbean’s most famous soca artists and helped bring Trinidadian music and Carnival culture to international audiences.",
      },

      {
        name: "Brian Lara",

        role: "Cricketer",

        image:
          "/images/continents/caribbean/countries/trinidad-and-tobago/figures/brian-lara.jpg",

        description:
          "Brian Lara became one of the greatest cricketers in history and represented Trinidad and Tobago as part of the famous West Indies cricket team.",
      },

      {
        name: "The Mighty Sparrow",

        role: "Calypso Musician",

        image:
          "/images/continents/caribbean/countries/trinidad-and-tobago/figures/mighty-sparrow.jpg",

        description:
          "The Mighty Sparrow became one of the Caribbean’s most influential calypso musicians and helped shape Trinidad’s musical identity.",
      },

      {
        name: "Nicki Minaj",

        role: "Musician",

        image:
          "/images/continents/caribbean/countries/trinidad-and-tobago/figures/nicki-minaj.jpg",

        description:
          "Nicki Minaj was born in Trinidad and later became one of the world’s most famous rap artists and performers.",
      },
    ],

    facts: [
      "Steelpan music was invented in Trinidad and Tobago.",

      "Trinidad Carnival became one of the world’s most famous Carnival celebrations.",

      "Pitch Lake is one of the world’s largest natural asphalt lakes.",

      "The Scarlet Ibis is the national bird of Trinidad and Tobago.",

      "Trinidad and Tobago has one of the Caribbean’s largest oil and gas industries.",
    ],
  },
];
