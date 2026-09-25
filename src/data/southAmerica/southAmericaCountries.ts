export type SouthAmericaCountry = {
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

export const southAmericaCountries: SouthAmericaCountry[] = [
  {
    slug: "brazil",
    name: "Brazil",
    flag: "🇧🇷",

    capital: "Brasília",
    population: "More than 200 million",
    languages: ["Portuguese", "Hundreds of Indigenous languages"],
    currency: "Brazilian Real (BRL)",

    heroImage:
      "/images/continents/south-america/countries/brazil/brazil-landscape.jpg",

    intro:
      "Brazil is the largest country in South America, stretching from the Amazon rainforest and the wetlands of the Pantanal to huge cities and more than 7,000 kilometres of Atlantic coastline. Its people, languages, music, food and traditions reflect thousands of years of Indigenous history alongside African, European, Asian and Middle Eastern influences.",

    overview:
      "Brazil's story began thousands of years before Europeans arrived. Hundreds of Indigenous peoples developed communities, languages, farming systems, trade networks and detailed knowledge of environments including the Amazon. Portuguese colonisation began in the 1500s and Brazil became one of the largest destinations in the Atlantic slave trade, with millions of enslaved Africans forcibly transported there. Brazil declared independence from Portugal in 1822, abolished slavery in 1888 and became a republic in 1889. The twentieth century brought industrial growth, migration, dictatorship, democratic movements and enormous urban change. Modern Brazil is famous internationally for music, football, Carnival and the Amazon, but understanding the country also means exploring its Indigenous nations, Afro-Brazilian heritage, regional differences and complex history.",

    tags: [
      "Indigenous History",
      "African Heritage",
      "Portuguese Colonisation",
      "Amazon",
      "Slavery & Resistance",
      "Music",
      "Football",
      "Biodiversity",
    ],

    theme: {
      primary: "#2f6f4e",
      secondary: "#294936",
      accent: "#d6aa3c",
      background: "linear-gradient(180deg, #e8efe4 0%, #d5e3d2 100%)",
      card: "rgba(255,255,255,0.90)",
      text: "#24352c",
      timeline: "#2f6f4e",
    },

    factFile: {
      capital: {
        image:
          "/images/continents/south-america/countries/brazil/fact-file/brasilia-national-congress.jpg",

        title: "Brasília",

        description:
          "Brasília became Brazil's capital in 1960, replacing Rio de Janeiro. Built in the country's interior as part of a huge modernisation project, the city's overall plan was created by Lúcio Costa and many of its most famous public buildings were designed by architect Oscar Niemeyer. Its dramatic modernist architecture made Brasília one of the world's most famous planned capitals.",
      },

      history: {
        image:
          "/images/continents/south-america/countries/brazil/fact-file/serra-da-capivara-rock-art.jpg",

        title: "Serra da Capivara",

        description:
          "Serra da Capivara National Park in northeastern Brazil contains hundreds of archaeological sites, including rock shelters covered with prehistoric paintings. The images show animals, hunting, dancing and scenes of human life and provide extraordinary evidence that people were living in this region thousands of years before European colonisation.",
      },

      food: {
        image:
          "/images/continents/south-america/countries/brazil/fact-file/mandioca-cassava.jpg",

        title: "Mandioca — Cassava",

        description:
          "Cassava, known in Brazil as mandioca, aipim or macaxeira depending on the region, has been cultivated by Indigenous peoples in South America for thousands of years. Indigenous communities developed sophisticated methods for safely processing the plant. Today cassava remains central to Brazilian cooking and is used to make foods including farinha, tapioca and pão de queijo.",
      },

      wildlife: {
        image:
          "/images/continents/south-america/countries/brazil/fact-file/pantanal-jaguar-wetlands.jpg",

        title: "The Pantanal",

        description:
          "The Pantanal is one of the world's largest tropical wetlands. Seasonal flooding creates habitats for an extraordinary variety of wildlife including jaguars, giant otters, capybaras, caimans, giant anteaters and hundreds of bird species. Parts of the Pantanal are protected as a UNESCO World Heritage Site.",
      },

      culture: {
        image:
          "/images/continents/south-america/countries/brazil/fact-file/capoeira-roda.jpg",

        title: "Capoeira",

        description:
          "Capoeira is an Afro-Brazilian cultural practice combining movement, martial skill, music, rhythm and ritual. It developed among people of African descent in Brazil during and after slavery. Players form a circle called a roda while musicians play instruments including the berimbau. Once suppressed by authorities, capoeira is now practised around the world and is recognised by UNESCO as intangible cultural heritage.",
      },
    },

    timeline: [
      {
        year: "Thousands of years ago",
        title: "People Across Ancient Brazil",
        text: "People lived across the lands that now form Brazil thousands of years before European arrival. Different communities adapted to environments ranging from Amazon rainforest and Atlantic coast to grasslands and dry interior regions.",
      },

      {
        year: "Prehistoric Brazil",
        title: "Serra da Capivara",
        text: "Communities living in what is now northeastern Brazil left thousands of paintings and other archaeological remains at Serra da Capivara. The site preserves some of the most important evidence for early human life in South America.",
      },

      {
        year: "Before 1500",
        title: "Hundreds of Indigenous Peoples",
        text: "Before Portuguese colonisation, the region contained hundreds of Indigenous peoples speaking many different languages. Communities including Tupi-speaking peoples, Macro-Jê-speaking peoples and many others had their own political systems, spiritual beliefs, farming traditions and extensive knowledge of local environments.",
      },

      {
        periodKey: "brazil-portuguese-arrival",
        year: "1500",
        title: "🔍 Your Investigation: The Portuguese Arrive",
        text: "In April 1500, a Portuguese fleet commanded by Pedro Álvares Cabral reached the coast of what is now Brazil. Portuguese colonisation did not happen all at once, but this encounter began centuries of enormous change.",
        isGap: true,
        prompt:
          "Investigate the Portuguese arrival in Brazil and what it meant for the Indigenous peoples already living there.",
        questions: [
          "Who was Pedro Álvares Cabral?",
          "Who was already living in Brazil?",
          "Why did Portugal become interested in the land?",
        ],
      },

      {
        year: "Early 1500s",
        title: "Brazilwood Trade",
        text: "Portuguese traders began exploiting pau-brasil, or brazilwood, a tree valued in Europe for producing red dye. The tree eventually gave Brazil its name. Europeans initially relied heavily on trade and labour involving Indigenous communities.",
      },

      {
        year: "1530s onwards",
        title: "Portuguese Colonisation Expands",
        text: "Portugal began establishing more permanent settlements and divided large areas into hereditary captaincies. Colonisation gradually expanded along the Atlantic coast while Indigenous communities resisted invasion, displacement and enslavement.",
      },

      {
        year: "1549",
        title: "Salvador Becomes the Colonial Capital",
        text: "Salvador was established as the capital of Portuguese Brazil. Its position on the Atlantic made it an important administrative centre, port and later one of the major destinations for ships carrying enslaved Africans.",
      },

      {
        year: "1500s–1800s",
        title: "The Atlantic Slave Trade",
        text: "Brazil became the largest destination in the Atlantic slave trade. Millions of African people were forcibly transported across the Atlantic and enslaved on plantations, in mines, in cities and in households. African knowledge, religion, food, music and languages profoundly shaped Brazilian culture despite brutal attempts to control enslaved communities.",
      },

      {
        year: "1600s",
        title: "Quilombos and Resistance",
        text: "People escaped slavery and formed communities known as quilombos. These settlements varied greatly in size and organisation and often included people of African and Indigenous ancestry. Some survived for decades while resisting attacks from colonial forces.",
      },

      {
        year: "c. 1605–1694",
        title: "Palmares",
        text: "Palmares became the largest and most famous quilombo in colonial Brazil. Located in the northeast, it developed into a network of settlements containing thousands of inhabitants and resisted repeated military expeditions for much of the seventeenth century.",
      },

      {
        year: "c. 1655–1695",
        title: "Zumbi dos Palmares",
        text: "Zumbi became one of the best-known leaders associated with Palmares and resistance to slavery. He was killed in 1695 and later became an important symbol of Afro-Brazilian resistance and the struggle against racism.",
      },

      {
        year: "Late 1600s–1700s",
        title: "Gold in Minas Gerais",
        text: "Major gold discoveries in the interior transformed colonial Brazil. Large numbers of people moved into Minas Gerais and enslaved Africans were forced to work in mines and related industries. Wealth from mining helped create towns such as Ouro Preto.",
      },

      {
        year: "1763",
        title: "Capital Moves to Rio de Janeiro",
        text: "Portugal moved the colonial capital from Salvador to Rio de Janeiro. Rio's position was increasingly important for trade, mining wealth and connections with southern Brazil.",
      },

      {
        year: "1789",
        title: "Inconfidência Mineira",
        text: "A group in Minas Gerais planned a rebellion against Portuguese colonial rule, influenced partly by Enlightenment ideas and resentment over taxation. The conspiracy was uncovered before it could begin. Joaquim José da Silva Xavier, known as Tiradentes, was executed and later became a national symbol.",
      },

      {
        year: "1808",
        title: "The Portuguese Royal Court Arrives",
        text: "Portugal's royal family and government fled to Rio de Janeiro after Napoleon's forces invaded Portugal. For the unusual period that followed, Rio became the centre of the Portuguese Empire and Brazil's ports were opened more widely to international trade.",
      },

      {
        year: "1815",
        title: "Brazil Becomes a Kingdom",
        text: "Brazil's political status was raised when the United Kingdom of Portugal, Brazil and the Algarves was created. Brazil was no longer officially treated simply as a Portuguese colony.",
      },

      {
        periodKey: "brazil-independence",
        year: "1822",
        title: "🔍 Your Investigation: Brazil Becomes Independent",
        text: "On 7 September 1822, Pedro declared Brazil's independence from Portugal. Unlike many neighbouring countries, independent Brazil initially became an empire rather than a republic.",
        isGap: true,
        prompt:
          "Investigate Brazilian independence and find out why Pedro, a member of the Portuguese royal family, became the first emperor of Brazil.",
        questions: [
          "Who was Pedro I?",
          "What happened on 7 September 1822?",
          "How was Brazil's independence different from some neighbouring countries?",
        ],
      },

      {
        year: "1822–1889",
        title: "The Empire of Brazil",
        text: "Independent Brazil was governed as a constitutional monarchy. Pedro I became the first emperor and was later succeeded by his son Pedro II. During this period Brazil expanded economically, but slavery remained fundamental to much of the economy.",
      },

      {
        year: "1835–1840",
        title: "The Cabanagem",
        text: "A major rebellion erupted in the Amazonian province of Grão-Pará. Indigenous people, mixed-race communities and poorer inhabitants played important roles in the revolt. Fighting and repression caused an enormous loss of life.",
      },

      {
        year: "1835",
        title: "Malê Revolt",
        text: "Enslaved and free African Muslims organised an uprising in Salvador. Although the revolt was defeated, it demonstrated the organisation, literacy, religious networks and resistance present within African communities in nineteenth-century Brazil.",
      },

      {
        year: "1864–1870",
        title: "War of the Triple Alliance",
        text: "Brazil joined Argentina and Uruguay in a devastating war against Paraguay. The conflict became the largest interstate war in South American history and caused enormous loss of life, particularly in Paraguay.",
      },

      {
        year: "1871",
        title: "Law of the Free Womb",
        text: "A law declared that children born to enslaved women after its introduction would be legally free, although many remained under the control of their mothers' enslavers for years. It was one step in Brazil's slow process toward abolition.",
      },

      {
        year: "1880s",
        title: "Abolitionist Movement Grows",
        text: "Black activists, formerly enslaved people, journalists, lawyers, writers and other campaigners increased pressure for an end to slavery. Enslaved people themselves resisted through escape, rebellion and the creation of independent lives.",
      },

      {
        periodKey: "brazil-abolition",
        year: "1888",
        title: "🔍 Your Investigation: Slavery is Abolished",
        text: "Brazil became the last country in the Americas to formally abolish slavery. The Lei Áurea, or Golden Law, was signed on 13 May 1888.",
        isGap: true,
        prompt:
          "Investigate the abolition of slavery in Brazil. Look beyond the signing of the law and find out who had fought against slavery and what happened to formerly enslaved people afterwards.",
        questions: [
          "What was the Lei Áurea?",
          "Who fought for abolition?",
          "Did abolition immediately create equality for Black Brazilians?",
        ],
      },

      {
        year: "1889",
        title: "Brazil Becomes a Republic",
        text: "A military coup removed Emperor Pedro II and ended the Brazilian monarchy. Brazil was declared a republic, beginning a new political era.",
      },

      {
        year: "Late 1800s–early 1900s",
        title: "Mass Migration",
        text: "Millions of migrants arrived in Brazil from countries including Italy, Portugal, Spain, Germany and Japan, as well as from the Middle East and elsewhere. Migration reshaped cities, agriculture, industry and Brazilian culture.",
      },

      {
        year: "1908",
        title: "Japanese Migration to Brazil",
        text: "The ship Kasato Maru arrived in Santos carrying Japanese migrants. Over the following decades Brazil became home to the largest population of Japanese descent outside Japan.",
      },

      {
        year: "1930",
        title: "Getúlio Vargas Comes to Power",
        text: "A political and military movement brought Getúlio Vargas to power and ended the political system of the First Republic. Vargas would dominate Brazilian politics for much of the following fifteen years.",
      },

      {
        year: "1937–1945",
        title: "Estado Novo",
        text: "Vargas established the Estado Novo, an authoritarian dictatorship. Political parties were suppressed, censorship increased and the government promoted industrial development and a strong central state.",
      },

      {
        year: "1942–1945",
        title: "Brazil in the Second World War",
        text: "Brazil joined the Allied side during the Second World War. The Brazilian Expeditionary Force fought in Italy, making Brazil the only independent South American country to send ground combat troops overseas during the war.",
      },

      {
        year: "1956–1960",
        title: "Building Brasília",
        text: "President Juscelino Kubitschek's government constructed a new capital in Brazil's interior. Lúcio Costa designed the urban plan and Oscar Niemeyer designed many major public buildings. Brasília officially became the capital in 1960.",
      },

      {
        year: "1960",
        title: "Brasília Becomes the Capital",
        text: "The federal government moved from Rio de Janeiro to the newly constructed Brasília. The project became an international symbol of modernist architecture and Brazil's ambitions for development in the country's interior.",
      },

      {
        periodKey: "brazil-military-dictatorship",
        year: "1964–1985",
        title: "🔍 Your Investigation: Military Dictatorship",
        text: "A military coup removed President João Goulart in 1964. Brazil was then governed by military-led authoritarian governments for more than twenty years.",
        isGap: true,
        prompt:
          "Investigate Brazil's military dictatorship and how it affected political freedom, the media and people who opposed the government.",
        questions: [
          "What happened in the 1964 coup?",
          "How did censorship affect Brazil?",
          "How did people resist military rule?",
        ],
      },

      {
        year: "1968",
        title: "AI-5",
        text: "The military government introduced Institutional Act Number Five, usually called AI-5. It gave authorities sweeping powers, intensified censorship and was followed by some of the harshest repression of the dictatorship.",
      },

      {
        year: "1970",
        title: "Brazil Wins a Third World Cup",
        text: "Brazil won the FIFA World Cup in Mexico with a team featuring Pelé. The victory became one of the most famous moments in football history, although it occurred while Brazil was under military dictatorship.",
      },

      {
        year: "1984",
        title: "Diretas Já",
        text: "Huge demonstrations called Diretas Já — 'Direct Elections Now' — demanded the restoration of direct presidential elections. Although the immediate proposal failed, the movement became an important symbol of Brazil's transition away from military rule.",
      },

      {
        year: "1985",
        title: "Civilian Government Returns",
        text: "Military rule ended and civilian government returned. The transition opened the way for a new democratic constitution and restoration of political rights.",
      },

      {
        year: "1988",
        title: "New Constitution",
        text: "Brazil adopted a new democratic constitution. It expanded civil and social rights and recognised important rights of Indigenous peoples to their cultures, languages and traditionally occupied lands.",
      },

      {
        year: "1992",
        title: "Rio Earth Summit",
        text: "Rio de Janeiro hosted the United Nations Conference on Environment and Development, commonly called the Earth Summit. Governments from around the world met to discuss environmental protection and sustainable development.",
      },

      {
        year: "2000s",
        title: "Brazil's Global Role Expands",
        text: "Brazil became increasingly prominent internationally as a major agricultural producer, industrial economy and member of groups such as BRICS. At the same time, debates continued over inequality, land, Indigenous rights and environmental protection.",
      },

      {
        year: "2014",
        title: "Brazil Hosts the World Cup",
        text: "Brazil hosted the FIFA World Cup for the second time. Matches took place across the country and the tournament drew enormous international attention.",
      },

      {
        year: "2016",
        title: "Rio Olympic Games",
        text: "Rio de Janeiro hosted the Summer Olympic and Paralympic Games, becoming the first South American city to host the Summer Olympics.",
      },

      {
        year: "Today",
        title: "Modern Brazil",
        text: "Brazil is South America's largest country by both area and population and one of the world's major economies. It is home to enormous cultural and environmental diversity, while questions involving inequality, Indigenous rights, racial equality, urban development and protection of ecosystems such as the Amazon and Pantanal continue to shape national life.",
      },
    ],

    places: [
      {
        title: "Serra da Capivara",
        tag: "Archaeology",

        image:
          "/images/continents/south-america/countries/brazil/places/serra-da-capivara.jpg",

        description:
          "Serra da Capivara National Park in Piauí contains hundreds of archaeological sites and thousands of prehistoric rock paintings. The images include animals, hunting, dancing and other scenes of human activity, providing remarkable evidence about communities that lived in the region thousands of years ago.",
      },

      {
        title: "Salvador",
        tag: "Afro-Brazilian Heritage",

        image:
          "/images/continents/south-america/countries/brazil/places/salvador.jpg",

        description:
          "Founded in 1549, Salvador became the first capital of Portuguese Brazil. It was also a major port in the Atlantic slave trade, and the city's history and culture remain deeply connected to Afro-Brazilian communities. Salvador is particularly known for music, food, religion, Carnival and the colourful historic district of Pelourinho.",
      },

      {
        title: "Valongo Wharf",
        tag: "Slavery & Memory",

        image:
          "/images/continents/south-america/countries/brazil/places/valongo-wharf.jpg",

        description:
          "Valongo Wharf in Rio de Janeiro was built in 1811 as a landing place for enslaved Africans. UNESCO estimates that as many as 900,000 African captives entered the Americas through Valongo. Rediscovered during construction work in the twenty-first century, the site is now an important place of memory for the history of slavery and the African diaspora.",
      },

      {
        title: "The Pantanal",
        tag: "Wetlands & Wildlife",

        image:
          "/images/continents/south-america/countries/brazil/places/pantanal.jpg",

        description:
          "The Pantanal is an enormous tropical wetland extending across western Brazil and into neighbouring Bolivia and Paraguay. Seasonal floods create habitats for spectacular wildlife including jaguars, caimans, capybaras, giant otters and hundreds of bird species.",
      },

      {
        title: "Brasília",
        tag: "Modern Architecture",

        image:
          "/images/continents/south-america/countries/brazil/places/brasilia.jpg",

        description:
          "Brasília was purpose-built in the late 1950s to become Brazil's new capital. Urban planner Lúcio Costa designed its famous layout while Oscar Niemeyer created many of its futuristic government buildings. The city became one of the world's most ambitious examples of twentieth-century modernist planning.",
      },

      {
        title: "Ouro Preto",
        tag: "Colonial History",

        image:
          "/images/continents/south-america/countries/brazil/places/ouro-preto.jpg",

        description:
          "Ouro Preto grew during the eighteenth-century gold rush in Minas Gerais. Its steep streets, churches and colonial buildings reflect the enormous wealth created by mining, but that wealth depended heavily on the forced labour of enslaved Africans. The town therefore tells both an architectural and a human story about colonial Brazil.",
      },

      {
        title: "Meeting of the Waters",
        tag: "Amazon Rivers",

        image:
          "/images/continents/south-america/countries/brazil/places/manaus-meeting-of-waters.jpg",

        description:
          "Near Manaus, the dark waters of the Rio Negro meet the lighter, sediment-rich Solimões River. Because the rivers have different temperatures, speeds and densities, their waters can flow alongside one another for kilometres before fully mixing. Their meeting marks the beginning of the river commonly known as the Amazon.",
      },
    ],

    influentialFigures: [
      {
        name: "Machado de Assis",
        role: "Literature",

        image:
          "/images/continents/south-america/countries/brazil/figures/machado-de-assis.jpg",

        description:
          "Machado de Assis was a novelist, poet and short-story writer born in Rio de Janeiro in 1839. The grandson of formerly enslaved people and from a poor background, he became one of the most important writers in Brazilian literature. His novels often used irony and unusual narrators to examine class, ambition, relationships and Brazilian society.",
      },

      {
        name: "Davi Kopenawa Yanomami",
        role: "Indigenous Leadership",

        image:
          "/images/continents/south-america/countries/brazil/figures/davi-kopenawa-yanomami.jpg",

        description:
          "Davi Kopenawa is a Yanomami leader, shaman, writer and campaigner from the Amazon. He has spent decades speaking internationally about Yanomami culture and defending Indigenous territory from threats including illegal mining, disease and environmental destruction. His work has helped bring worldwide attention to the relationship between Indigenous rights and protection of the Amazon.",
      },

      {
        name: "Carolina Maria de Jesus",
        role: "Writing",

        image:
          "/images/continents/south-america/countries/brazil/figures/carolina-maria-de-jesus.jpg",

        description:
          "Carolina Maria de Jesus was a Black Brazilian writer who lived for many years in the Canindé favela in São Paulo and supported her family by collecting recyclable materials. She recorded everyday life, hunger, poverty and inequality in notebooks. Her diary was published in 1960 as Quarto de Despejo and became an international success, giving readers a powerful account of life that was rarely represented in Brazilian literature at the time.",
      },

      {
        name: "Pelé",
        role: "Football",

        image:
          "/images/continents/south-america/countries/brazil/figures/pele.jpg",

        description:
          "Pelé, born Edson Arantes do Nascimento in 1940, became one of the most famous footballers in history. He helped Brazil win the FIFA World Cup in 1958, 1962 and 1970 and became a global symbol of Brazilian football. His international fame helped establish Brazil's reputation for creative, attacking football.",
      },
    ],

    culturalSpotlights: [
      {
        title: "Samba de Roda",

        image:
          "/images/continents/south-america/countries/brazil/cultural-spotlight/samba-de-roda.jpg",

        description:
          "Samba de roda developed in Bahia, particularly in the Recôncavo region. Participants form a circle around musicians while individuals enter the centre to dance. Singing, clapping and instruments accompany the performance. Its history is strongly connected to Afro-Brazilian communities and it helped influence later forms of Brazilian samba.",
      },

      {
        title: "Wajãpi Kusiwa Art",

        image:
          "/images/continents/south-america/countries/brazil/cultural-spotlight/wajapi-kusiwa-art.jpg",

        description:
          "Kusiwa is a system of graphic designs and oral knowledge practised by the Wajãpi Indigenous people of the northern Amazon. Designs can be painted onto bodies and objects using natural materials. The patterns connect people with animals, spirits, stories and understandings of the world and are passed between generations.",
      },

      {
        title: "Literatura de Cordel",

        image:
          "/images/continents/south-america/countries/brazil/cultural-spotlight/literatura-de-cordel.jpg",

        description:
          "Literatura de cordel is a popular literary tradition particularly associated with northeastern Brazil. Stories and poems are printed in inexpensive booklets, often with distinctive woodcut illustrations on their covers. The works can tell romances, legends, humorous stories, historical events and commentary on everyday life.",
      },

      {
        title: "Bumba-meu-boi",

        image:
          "/images/continents/south-america/countries/brazil/cultural-spotlight/bumba-meu-boi.jpg",

        description:
          "Bumba-meu-boi is a colourful performance tradition combining music, dance, costume, theatre and storytelling around the symbolic death and return to life of an ox. Different regions have their own versions, with Maranhão particularly famous for elaborate celebrations. The tradition reflects Indigenous, African and European cultural influences.",
      },
    ],

    facts: [
      "Brazil is the largest country in South America by both land area and population.",
      "Brazil is the only country in the Americas where Portuguese is the main national language.",
      "The name Brazil comes from pau-brasil, or brazilwood, which was heavily traded during the early colonial period.",
      "A large part of the Amazon rainforest lies inside Brazil, but the Amazon also extends into several neighbouring countries.",
      "Brazil was the largest destination in the Atlantic slave trade and received millions of enslaved Africans.",
      "Brazil was the last country in the Americas to formally abolish slavery, in 1888.",
      "Brasília replaced Rio de Janeiro as Brazil's capital in 1960.",
      "Brazil is home to the largest population of Japanese descent outside Japan.",
      "The Pantanal is one of the world's largest tropical wetland regions.",
      "Brazil has won the men's FIFA World Cup five times.",
    ],
  },
  {
    slug: "argentina",
    name: "Argentina",
    flag: "🇦🇷",

    capital: "Buenos Aires",
    population: "About 46 million",
    languages: [
      "Spanish",
      "Indigenous languages including Guaraní, Quechua and Mapudungun",
    ],
    currency: "Argentine Peso (ARS)",

    heroImage:
      "/images/continents/south-america/countries/argentina/argentina-patagonia-andes-landscape.jpg",

    intro:
      "Argentina is the second-largest country in South America, stretching from subtropical forests in the north to the mountains, glaciers and windswept landscapes of Patagonia in the south. Its culture has been shaped by Indigenous peoples, Spanish colonisation, African heritage, enormous waves of immigration and distinctive regional traditions.",

    overview:
      "Argentina has a history stretching back thousands of years. Indigenous peoples developed communities across environments ranging from the Andes and Gran Chaco to Patagonia and Tierra del Fuego long before Spanish colonisation began in the sixteenth century. Argentina declared independence from Spain in 1816, but the new country experienced decades of conflict over political power and the organisation of the state. During the late nineteenth and early twentieth centuries, millions of immigrants arrived, particularly from Europe, transforming cities such as Buenos Aires. Argentina later experienced periods of democracy and military rule, including the brutal dictatorship of 1976–1983. Today the country is internationally associated with tango, football, literature, mate and dramatic landscapes, while its culture remains strongly regional and diverse.",

    tags: [
      "Indigenous History",
      "Andes",
      "Patagonia",
      "Immigration",
      "Tango",
      "Football",
      "Literature",
      "Human Rights",
    ],

    theme: {
      primary: "#5d94b8",
      secondary: "#355f7b",
      accent: "#d6aa3c",
      background: "linear-gradient(180deg, #eaf4f8 0%, #d9e8ee 100%)",
      card: "rgba(255,255,255,0.90)",
      text: "#243642",
      timeline: "#5d94b8",
    },

    factFile: {
      capital: {
        image:
          "/images/continents/south-america/countries/argentina/fact-file/buenos-aires.jpg",

        title: "Buenos Aires",

        description:
          "Buenos Aires is Argentina's capital and largest city. Located beside the Río de la Plata, it grew into one of Latin America's great port cities and was transformed by large-scale immigration during the nineteenth and twentieth centuries. Its neighbourhoods became important centres for literature, theatre, football and music, including the development of tango.",
      },

      history: {
        image:
          "/images/continents/south-america/countries/argentina/fact-file/cueva-de-las-manos.jpg",

        title: "Cueva de las Manos",

        description:
          "Cueva de las Manos, or Cave of the Hands, lies in Patagonia and preserves an extraordinary collection of prehistoric rock art. The best-known images are hundreds of stencilled human hands, alongside animals and hunting scenes. Some of the artwork is thousands of years old and provides remarkable evidence of the people who lived in Patagonia long before European colonisation.",
      },

      food: {
        image:
          "/images/continents/south-america/countries/argentina/fact-file/mate.jpg",

        title: "Mate",

        description:
          "Mate is a drink made by steeping dried yerba mate leaves in hot water. It is traditionally drunk from a container also called a mate using a metal straw called a bombilla. Sharing mate is an important social custom in Argentina and neighbouring countries, with the same vessel commonly passed between friends or family members.",
      },

      wildlife: {
        image:
          "/images/continents/south-america/countries/argentina/fact-file/andean-condor.jpg",

        title: "Andean Condor",

        description:
          "The Andean condor is one of the world's largest flying birds and can be found along the Andes, including western Argentina. Its enormous wings allow it to soar for long periods using rising air currents. Condors have also held cultural significance for Andean peoples for centuries.",
      },

      culture: {
        image:
          "/images/continents/south-america/countries/argentina/fact-file/filete-porteno.jpg",

        title: "Filete Porteño",

        description:
          "Filete porteño is a decorative painting tradition associated with Buenos Aires. It combines bright colours, elaborate lettering, flowers, ribbons and ornamental designs. Originally particularly associated with carts, trucks and buses, filete became a recognisable part of the visual identity of Buenos Aires and is recognised by UNESCO as intangible cultural heritage.",
      },
    },

    timeline: [
      {
        year: "Thousands of years ago",
        title: "The First Communities",
        text: "People lived across the lands that now form Argentina thousands of years before European arrival. Communities adapted to very different environments including the Andes, Pampas, Gran Chaco, Patagonia and Tierra del Fuego.",
      },

      {
        year: "c. 7300 BCE onwards",
        title: "Cueva de las Manos",
        text: "Hunter-gatherer communities created extraordinary rock art in what is now Santa Cruz province. The site known as Cueva de las Manos preserves hand stencils, animals and hunting scenes produced over thousands of years.",
      },

      {
        year: "Before 1500",
        title: "Many Indigenous Peoples",
        text: "The territory of modern Argentina was home to many different Indigenous societies. These included peoples now known as the Diaguita, Guaraní, Qom, Wichí, Mapuche, Tehuelche, Selk'nam and others, each with their own languages, economies, traditions and relationships with the land.",
      },

      {
        year: "1400s",
        title: "The Inca Empire Expands South",
        text: "The Inca Empire extended into parts of what is now northwestern Argentina. Roads, settlements and administrative centres connected these areas with a huge Andean network stretching north through modern Bolivia, Peru and Ecuador.",
      },

      {
        year: "1516",
        title: "Spanish Exploration",
        text: "The expedition of Juan Díaz de Solís entered the Río de la Plata while searching for a route through South America. Spanish expeditions and attempts at settlement increased during the following decades.",
      },

      {
        year: "1536",
        title: "First Settlement at Buenos Aires",
        text: "Pedro de Mendoza led a Spanish expedition that established a settlement at the site of modern Buenos Aires. Conflict, hunger and difficulties obtaining supplies led to its abandonment a few years later.",
      },

      {
        year: "1580",
        title: "Buenos Aires Re-established",
        text: "Juan de Garay established a permanent Spanish settlement at Buenos Aires. Its location on the Río de la Plata eventually helped it develop into an increasingly important port.",
      },

      {
        year: "1600s–1700s",
        title: "Colonial Argentina",
        text: "Spanish settlements expanded while Indigenous peoples continued to control large areas beyond the colonial frontier. Colonial society developed around farming, livestock, trade and forced Indigenous and African labour.",
      },

      {
        year: "1600s–1700s",
        title: "African Argentines",
        text: "Thousands of enslaved Africans were transported into the Río de la Plata region. Africans and their descendants became an important part of colonial society and contributed to Argentina's culture, labour, military history and musical traditions, although their role was often minimised in later national histories.",
      },

      {
        year: "1776",
        title: "Viceroyalty of the Río de la Plata",
        text: "Spain created the Viceroyalty of the Río de la Plata, with Buenos Aires as its capital. The decision increased the city's political and economic importance and placed a huge region of southern South America under its administration.",
      },

      {
        year: "1806–1807",
        title: "British Invasions",
        text: "British forces twice attempted to capture Buenos Aires and surrounding areas during the Napoleonic Wars. Local forces helped defeat the invasions, increasing confidence that residents could defend themselves without direct Spanish assistance.",
      },

      {
        periodKey: "argentina-may-revolution",
        year: "1810",
        title: "🔍 Your Investigation: The May Revolution",
        text: "In May 1810, political leaders in Buenos Aires removed the Spanish viceroy and created a new governing junta. It became a crucial step towards independence, although years of warfare followed.",
        isGap: true,
        prompt:
          "Investigate the May Revolution and explain why events in Spain and Buenos Aires led to a challenge to colonial government.",
        questions: [
          "What was happening in Spain at the time?",
          "What happened during the week of 18–25 May 1810?",
          "Why is 25 May still important in Argentina?",
        ],
      },

      {
        year: "1812",
        title: "Manuel Belgrano and the Flag",
        text: "Revolutionary leader Manuel Belgrano created a blue-and-white flag for forces fighting against Spanish rule. These colours later became the basis of Argentina's national flag.",
      },

      {
        periodKey: "argentina-independence",
        year: "1816",
        title: "🔍 Your Investigation: Independence",
        text: "Representatives meeting at the Congress of Tucumán formally declared independence from Spain on 9 July 1816.",
        isGap: true,
        prompt:
          "Investigate Argentina's declaration of independence and the people involved in securing it.",
        questions: [
          "What happened at the Congress of Tucumán?",
          "Why is José de San Martín important?",
          "How was Argentina's independence connected to independence movements elsewhere in South America?",
        ],
      },

      {
        year: "1817",
        title: "San Martín Crosses the Andes",
        text: "José de San Martín led the Army of the Andes across the mountains into Chile. The difficult campaign helped defeat Spanish royalist forces and became part of a wider struggle for independence in southern South America.",
      },

      {
        year: "1820s–1850s",
        title: "Conflict Over the New Country",
        text: "Independence did not immediately create a stable national government. Political groups disagreed over how power should be divided between Buenos Aires and the provinces, leading to decades of conflict between Unitarians and Federalists.",
      },

      {
        year: "1829–1852",
        title: "Juan Manuel de Rosas",
        text: "Juan Manuel de Rosas became the dominant political figure in Buenos Aires and exercised enormous influence over the Argentine Confederation. His supporters presented him as a defender of federalism, while opponents condemned political repression under his rule.",
      },

      {
        year: "1853",
        title: "A New Constitution",
        text: "A national constitution established a federal system of government and became the foundation of Argentina's modern constitutional structure. Buenos Aires initially remained separate before later rejoining the federation.",
      },

      {
        year: "1861–1880",
        title: "National Government Consolidates",
        text: "Following decades of civil conflict, the national government gradually strengthened its authority. Buenos Aires eventually became the federal capital in 1880.",
      },

      {
        year: "1865–1870",
        title: "War of the Triple Alliance",
        text: "Argentina joined Brazil and Uruguay in a devastating war against Paraguay. The conflict caused enormous casualties and had lasting consequences throughout the Río de la Plata region.",
      },

      {
        year: "1870s–1880s",
        title: "Expansion into Indigenous Lands",
        text: "The Argentine state expanded military control across Patagonia and the Pampas in campaigns commonly known as the Conquest of the Desert. Indigenous communities were killed, displaced, captured and dispossessed as enormous areas were transferred to state and private ownership.",
      },

      {
        year: "1880–1914",
        title: "Mass Immigration",
        text: "Millions of immigrants arrived in Argentina, especially from Italy and Spain but also from many other parts of Europe and the wider world. Buenos Aires expanded dramatically and Argentina became one of the world's major destinations for European migration.",
      },

      {
        year: "Late 1800s",
        title: "Argentina's Export Boom",
        text: "Railways, refrigerated shipping and fertile agricultural land helped Argentina become a major exporter of beef and grain. Buenos Aires grew rapidly and enormous wealth was created, although it was distributed very unevenly.",
      },

      {
        year: "Late 1800s–early 1900s",
        title: "Tango Develops",
        text: "Tango developed around Buenos Aires and Montevideo in communities shaped by African, European and local influences. Music, dance and lyrics evolved together before tango spread from the Río de la Plata to audiences around the world.",
      },

      {
        year: "1912",
        title: "Electoral Reform",
        text: "The Sáenz Peña Law introduced secret and compulsory voting for male Argentine citizens, helping transform national politics and reducing some forms of electoral manipulation.",
      },

      {
        year: "1916",
        title: "Hipólito Yrigoyen Elected",
        text: "Hipólito Yrigoyen became president following the electoral reforms. His election marked an important change from the conservative political order that had dominated national government.",
      },

      {
        year: "1930",
        title: "Military Coup",
        text: "A military coup removed President Yrigoyen. It began a period in which military intervention became a recurring feature of Argentine politics.",
      },

      {
        year: "1930s",
        title: "The Infamous Decade",
        text: "Argentina experienced conservative governments, electoral fraud and political repression during a period often called the Década Infame, or Infamous Decade.",
      },

      {
        year: "1943",
        title: "Another Military Coup",
        text: "Military officers overthrew the government. Colonel Juan Domingo Perón emerged from the new regime as an increasingly important political figure, particularly through his work involving labour and social policy.",
      },

      {
        year: "1946",
        title: "Juan Perón Becomes President",
        text: "Juan Domingo Perón won the presidency with strong support from many workers and trade unions. His government expanded social programmes and labour rights while also concentrating political power and placing pressure on some opponents and media organisations.",
      },

      {
        year: "1940s–1950s",
        title: "Eva Perón",
        text: "Eva Perón became one of Argentina's most recognisable political figures. She campaigned for social programmes, worked closely with organised labour and supported women's suffrage. Admired by many supporters and strongly criticised by opponents, her legacy remains politically significant.",
      },

      {
        year: "1947",
        title: "Women Gain the National Vote",
        text: "Argentina introduced women's suffrage for national elections. Women voted in a national election for the first time in 1951.",
      },

      {
        year: "1955",
        title: "Perón Overthrown",
        text: "A military uprising removed Juan Perón from power. Peronism was subsequently restricted, but it remained a powerful political movement and Perón eventually returned to Argentina.",
      },

      {
        year: "1973",
        title: "Perón Returns",
        text: "After years in exile, Juan Perón returned to Argentina and was elected president again. He died in 1974 and was succeeded by Vice President Isabel Perón.",
      },

      {
        periodKey: "argentina-dictatorship",
        year: "1976–1983",
        title: "🔍 Your Investigation: Dictatorship and the Disappeared",
        text: "The armed forces seized power in March 1976 and established a dictatorship. Thousands of people were illegally detained, tortured, murdered or forcibly disappeared during state repression known as the Dirty War.",
        isGap: true,
        prompt:
          "Investigate Argentina's military dictatorship and the human-rights movements that challenged it.",
        questions: [
          "What does the term 'disappeared' mean in this history?",
          "Who are the Mothers and Grandmothers of Plaza de Mayo?",
          "How did Argentina return to democratic government?",
        ],
      },

      {
        year: "1977 onwards",
        title: "Mothers of Plaza de Mayo",
        text: "Mothers whose children had disappeared began gathering publicly in Buenos Aires to demand information about them. Their white headscarves became an internationally recognised symbol of the struggle for truth and human rights.",
      },

      {
        year: "1982",
        title: "Falklands / Malvinas War",
        text: "Argentine forces occupied the Falkland Islands, known in Argentina as the Islas Malvinas, whose sovereignty is disputed between Argentina and the United Kingdom. Britain sent a military task force and regained control after a short war. The conflict caused hundreds of Argentine and British military deaths as well as civilian deaths.",
      },

      {
        year: "1983",
        title: "Democracy Returns",
        text: "Raúl Alfonsín became president following democratic elections, ending the military dictatorship. His government began investigations into human-rights abuses committed under military rule.",
      },

      {
        year: "1985",
        title: "Trial of the Juntas",
        text: "Senior leaders of the former military dictatorship were prosecuted in civilian courts for serious human-rights abuses. The trial became an important moment in Argentina's efforts to confront the crimes of the dictatorship.",
      },

      {
        year: "1994",
        title: "Constitutional Reform",
        text: "Argentina reformed its constitution. Among other changes, the reforms explicitly recognised the pre-existence of Indigenous peoples and rights connected with their identity, communities and traditionally occupied lands.",
      },

      {
        year: "2001–2002",
        title: "Economic Crisis",
        text: "A severe economic and political crisis brought unemployment, poverty, bank restrictions and large demonstrations. Argentina defaulted on public debt and went through several presidents in a short period.",
      },

      {
        year: "2000s",
        title: "Human-Rights Trials Resume",
        text: "Legal changes allowed many prosecutions relating to dictatorship-era crimes to resume. Former military and security officials were tried for kidnapping, torture, murder and other offences.",
      },

      {
        year: "2022",
        title: "World Cup Victory",
        text: "Argentina won the men's FIFA World Cup in Qatar, defeating France in the final. Captain Lionel Messi lifted the trophy as huge celebrations took place across Argentina.",
      },

      {
        year: "Today",
        title: "Modern Argentina",
        text: "Argentina is a federal republic and one of South America's largest countries. Its modern identity reflects Indigenous heritage, immigration, regional cultures and powerful traditions in literature, music, art and sport, while debates over the economy, inequality, historical memory and Indigenous rights continue to shape national life.",
      },
    ],

    places: [
      {
        title: "Cueva de las Manos",
        tag: "Archaeology",

        image:
          "/images/continents/south-america/countries/argentina/places/cueva-de-las-manos.jpg",

        description:
          "Hidden within the dramatic landscape of Patagonia, Cueva de las Manos contains one of South America's most extraordinary collections of prehistoric rock art. Hundreds of hand stencils appear alongside animals and hunting scenes, preserving evidence of communities that lived in the region thousands of years ago.",
      },

      {
        title: "Quebrada de Humahuaca",
        tag: "Andean Culture & History",

        image:
          "/images/continents/south-america/countries/argentina/places/quebrada-de-humahuaca.jpg",

        description:
          "Quebrada de Humahuaca is a spectacular mountain valley in Jujuy in northwestern Argentina. People have used the valley as a route through the Andes for thousands of years, and its archaeology and settlements reflect Indigenous, Inca and Spanish colonial history. Its colourful mountains and continuing Andean traditions make it one of Argentina's most distinctive cultural landscapes.",
      },

      {
        title: "Iguazú National Park",
        tag: "Waterfalls & Rainforest",

        image:
          "/images/continents/south-america/countries/argentina/places/iguazu-national-park.jpg",

        description:
          "Iguazú National Park protects subtropical rainforest surrounding the enormous Iguazú Falls on the border between Argentina and Brazil. Hundreds of individual waterfalls stretch across the river system, including the immense Garganta del Diablo, or Devil's Throat. The surrounding forest supports toucans, monkeys, coatis, jaguars and many other species.",
      },

      {
        title: "Los Glaciares National Park",
        tag: "Patagonia & Ice",

        image:
          "/images/continents/south-america/countries/argentina/places/los-glaciares-national-park.jpg",

        description:
          "Los Glaciares National Park protects a vast region of mountains, lakes and ice fields in Argentine Patagonia. Its best-known feature is the Perito Moreno Glacier, but the park contains numerous glaciers flowing from the Southern Patagonian Ice Field and dramatic peaks including Mount Fitz Roy.",
      },
    ],

    influentialFigures: [
      {
        name: "Diego Maradona",
        role: "Football",

        image:
          "/images/continents/south-america/countries/argentina/figures/diego-maradona.jpg",

        description:
          "Diego Maradona became one of the most famous footballers in history. Raised in a working-class neighbourhood near Buenos Aires, he captained Argentina to victory at the 1986 FIFA World Cup and became particularly associated with Boca Juniors and Napoli. His extraordinary skill, controversial moments and connection with supporters made him a major figure in Argentine popular culture far beyond football.",
      },

      {
        name: "José de San Martín",
        role: "Independence Leader",

        image:
          "/images/continents/south-america/countries/argentina/figures/jose-de-san-martin.jpg",

        description:
          "José de San Martín was a soldier and one of the central leaders of the independence movements in southern South America. He organised the Army of the Andes and led the famous crossing into Chile in 1817 before continuing the struggle against Spanish royalist power towards Peru. He is remembered as one of Argentina's most important independence figures.",
      },

      {
        name: "Jorge Luis Borges",
        role: "Literature",

        image:
          "/images/continents/south-america/countries/argentina/figures/jorge-luis-borges.jpg",

        description:
          "Jorge Luis Borges was an Argentine writer, poet and essayist whose short stories explored ideas including infinity, memory, identity, dreams and imaginary worlds. Works such as The Library of Babel and The Garden of Forking Paths influenced writers around the world and helped make him one of the most internationally recognised Latin American authors of the twentieth century.",
      },

      {
        name: "Mercedes Sosa",
        role: "Music",

        image:
          "/images/continents/south-america/countries/argentina/figures/mercedes-sosa.jpg",

        description:
          "Mercedes Sosa was one of Latin America's most celebrated folk singers. Known for her powerful voice, she became closely associated with the Nueva Canción movement and performed songs about social justice, workers and human rights. Her political views led to harassment and exile during Argentina's military dictatorship, but she later returned and remained an important cultural figure.",
      },
    ],

    culturalSpotlights: [
      {
        title: "Argentine Tango",

        image:
          "/images/continents/south-america/countries/argentina/cultural-spotlight/argentine-tango.jpg",

        description:
          "Tango developed during the late nineteenth century around the Río de la Plata, particularly in Buenos Aires and Montevideo. Its music and dance emerged from communities shaped by European immigration, African heritage and local traditions. Tango later travelled internationally and became one of the world's most recognisable South American cultural forms.",
      },

      {
        title: "Chamamé",

        image:
          "/images/continents/south-america/countries/argentina/cultural-spotlight/chamame.jpg",

        description:
          "Chamamé is a music and dance tradition particularly associated with Corrientes and northeastern Argentina. Its development reflects Guaraní, European and African influences. Accordions and guitars are commonly heard, while dancers traditionally move together in a close embrace. Chamamé was added to UNESCO's Representative List of Intangible Cultural Heritage in 2020.",
      },

      {
        title: "Filete Porteño",

        image:
          "/images/continents/south-america/countries/argentina/cultural-spotlight/filete-porteno.jpg",

        description:
          "Filete porteño is a distinctive decorative art form from Buenos Aires combining flowing lines, brilliant colours, elaborate lettering and ornamental images. It became particularly associated with carts, trucks, buses and shop signs before spreading into many other forms of design. UNESCO recognises the tradition as intangible cultural heritage.",
      },

      {
        title: "The Social Ritual of Mate",

        image:
          "/images/continents/south-america/countries/argentina/cultural-spotlight/mate-social-ritual.jpg",

        description:
          "Mate is much more than a drink for many Argentines. One person usually prepares and serves the mate, repeatedly filling the gourd with hot water before passing it to another person to drink through the bombilla. Sharing the same mate can turn an everyday drink into a social ritual connected with conversation, friendship and hospitality.",
      },
    ],

    facts: [
      "Argentina is the second-largest country in South America after Brazil.",
      "The Andes form much of Argentina's western border with Chile.",
      "Aconcagua, in Argentina, is the highest mountain in the Americas.",
      "Argentina stretches from subtropical regions in the north to Patagonia and Tierra del Fuego in the south.",
      "Cueva de las Manos contains rock art created over thousands of years.",
      "Buenos Aires became one of the major destinations for European immigration during the late nineteenth and early twentieth centuries.",
      "Tango developed around the Río de la Plata in Argentina and Uruguay.",
      "Yerba mate is widely shared socially using a gourd and a metal straw called a bombilla.",
      "Argentina won the men's FIFA World Cup in 1978, 1986 and 2022.",
      "Argentina and the United Kingdom both claim sovereignty over the Falkland Islands / Islas Malvinas; the islands are administered by the United Kingdom.",
    ],
  },
  {
    slug: "bolivia",
    name: "Bolivia",
    flag: "🇧🇴",

    capital: "Sucre",
    population: "About 12 million",
    languages: [
      "Spanish",
      "Quechua",
      "Aymara",
      "Guaraní",
      "Many other recognised Indigenous languages",
    ],
    currency: "Boliviano (BOB)",

    heroImage:
      "/images/continents/south-america/countries/bolivia/bolivia-altiplano-andes-landscape.jpg",

    intro:
      "Bolivia is a landlocked country in the heart of South America, where the high Andes and Altiplano meet valleys, salt flats, tropical lowlands and Amazonian forests. It has one of the continent's largest Indigenous populations, and Indigenous languages, beliefs, music, clothing, farming traditions and political movements remain central to Bolivian life.",

    overview:
      "Bolivia's history reaches back thousands of years and includes some of South America's most influential ancient societies. Tiwanaku developed near Lake Titicaca into a major political and ceremonial centre whose influence spread across the Andes. Parts of modern Bolivia later became incorporated into the Inca Empire before Spanish conquest began in the sixteenth century. The discovery of enormous silver deposits at Potosí made the region crucial to the Spanish Empire, while Indigenous and African workers endured harsh systems of forced labour. Bolivia became independent in 1825 but experienced territorial wars, political upheaval and deep social inequality. Indigenous and workers' movements played major roles in events such as the 1952 National Revolution and later struggles over land, resources and political representation. Modern Bolivia officially describes itself as the Plurinational State of Bolivia, recognising the country's many Indigenous nations and cultures.",

    tags: [
      "Indigenous History",
      "Andes",
      "Tiwanaku",
      "Inca",
      "Silver",
      "Indigenous Resistance",
      "Revolution",
      "Living Traditions",
    ],

    theme: {
      primary: "#8b4938",
      secondary: "#56382f",
      accent: "#d6a33c",
      background: "linear-gradient(180deg, #f3e8d5 0%, #e6d4b8 100%)",
      card: "rgba(255,255,255,0.90)",
      text: "#382c27",
      timeline: "#8b4938",
    },

    factFile: {
      capital: {
        image:
          "/images/continents/south-america/countries/bolivia/fact-file/sucre.jpg",

        title: "Sucre",

        description:
          "Sucre is Bolivia's constitutional capital and the seat of its Supreme Court, while the national government and legislature operate from La Paz. Known historically as Chuquisaca and La Plata, Sucre became an important Spanish colonial administrative centre and later played a major role in the independence movement. Its whitewashed historic centre reflects a mixture of Indigenous and European influences.",
      },

      history: {
        image:
          "/images/continents/south-america/countries/bolivia/fact-file/tiwanaku.jpg",

        title: "Tiwanaku",

        description:
          "Tiwanaku developed near Lake Titicaca into one of the most important civilisations of the ancient Andes. At its height, roughly between 500 and 900 CE, its political and cultural influence extended across a large part of the southern Andes. Monumental structures such as the Akapana, Kalasasaya and the famous Gateway of the Sun demonstrate sophisticated stoneworking, engineering and religious traditions.",
      },

      food: {
        image:
          "/images/continents/south-america/countries/bolivia/fact-file/andean-potatoes.jpg",

        title: "Andean Potatoes",

        description:
          "The Andes are one of the original homes of the potato. Indigenous farmers developed many varieties adapted to different altitudes, climates, colours and uses. Bolivian communities continue to cultivate an extraordinary range of potatoes, while traditional preservation methods such as making chuño by repeatedly freezing and drying potatoes allow food to be stored for long periods.",
      },

      wildlife: {
        image:
          "/images/continents/south-america/countries/bolivia/fact-file/vicuna.jpg",

        title: "Vicuña",

        description:
          "The vicuña is a wild relative of the llama and alpaca that lives at high altitude in the Andes. Its exceptionally fine wool has been valued since pre-Columbian times. Vicuñas are adapted to cold, dry mountain environments and remain culturally and economically important in parts of the Andes.",
      },

      culture: {
        image:
          "/images/continents/south-america/countries/bolivia/fact-file/wiphala.jpg",

        title: "The Wiphala",

        description:
          "The Wiphala is a square emblem made from a seven-by-seven grid of coloured squares and is strongly associated with Indigenous Andean identity. Different versions have been used in the Andes, and today the Wiphala is particularly visible among Aymara and Quechua communities. Bolivia's 2009 Constitution recognises it as one of the symbols of the state.",
      },
    },

    timeline: [
      {
        year: "Thousands of years ago",
        title: "Early Communities of the Andes",
        text: "People lived around Lake Titicaca, the Altiplano, valleys and tropical lowlands of present-day Bolivia thousands of years before European arrival. Communities developed farming, herding, fishing and trade suited to dramatically different environments.",
      },

      {
        year: "c. 1500 BCE onwards",
        title: "Communities Around Lake Titicaca",
        text: "Settled communities developed around the Lake Titicaca basin. Farmers cultivated crops including potatoes and quinoa while herders raised llamas and alpacas, animals that provided transport, fibre, meat and other resources.",
      },

      {
        year: "c. 400–900 CE",
        title: "Tiwanaku Flourishes",
        text: "Tiwanaku grew into a planned city and powerful political and ceremonial centre near Lake Titicaca. Its influence spread across large areas of the southern Andes through religion, exchange, agriculture and political connections.",
      },

      {
        year: "c. 500–900 CE",
        title: "Monumental Tiwanaku",
        text: "Builders at Tiwanaku constructed enormous ceremonial spaces and precisely cut stone monuments. Raised-field agriculture around Lake Titicaca helped communities produce food in the difficult high-altitude environment.",
      },

      {
        year: "c. 1000–1100",
        title: "Tiwanaku Declines",
        text: "Tiwanaku's political system fragmented after centuries of influence. The exact causes remain debated, but environmental pressures, drought and political change may all have contributed. Regional Aymara-speaking societies later became powerful across the Altiplano.",
      },

      {
        year: "1200s–1400s",
        title: "Aymara Kingdoms",
        text: "A number of Aymara-speaking kingdoms and lordships controlled parts of the Altiplano after Tiwanaku. Communities maintained farming, herding and trade networks linking highland and lower-altitude environments.",
      },

      {
        periodKey: "bolivia-inca",
        year: "1400s",
        title: "🔍 Your Investigation: The Inca Arrive",
        text: "The expanding Inca Empire incorporated much of the western and central territory of modern Bolivia into Qullasuyu, the southeastern quarter of Tawantinsuyu.",
        isGap: true,
        prompt:
          "Investigate how the Inca Empire expanded into what is now Bolivia and what changed — or remained — for the peoples already living there.",
        questions: [
          "What was Qullasuyu?",
          "Which peoples were already living in the region?",
          "How did roads help the Inca govern such a large territory?",
        ],
      },

      {
        year: "1530s",
        title: "Spanish Conquest Reaches the Andes",
        text: "Spanish forces moved into the region following the invasion of the Inca Empire. Indigenous resistance continued, but Spanish colonial institutions were gradually imposed across much of the territory.",
      },

      {
        year: "1538",
        title: "La Plata is Established",
        text: "Spanish colonists established the city later known as Chuquisaca and today called Sucre. It became an important administrative, religious and judicial centre of Spanish rule in the Andes.",
      },

      {
        periodKey: "bolivia-potosi",
        year: "1545",
        title: "🔍 Your Investigation: Silver at Potosí",
        text: "Huge silver deposits were exploited at Cerro Rico beside Potosí. The mountain became one of the Spanish Empire's most important sources of silver and transformed the regional and global economy.",
        isGap: true,
        prompt:
          "Investigate Potosí and discover where its extraordinary wealth came from — and who paid the human cost of producing it.",
        questions: [
          "What is Cerro Rico?",
          "What was the mita labour system?",
          "Where did Potosí's silver travel?",
        ],
      },

      {
        year: "1500s–1700s",
        title: "The Colonial Mita",
        text: "Spanish authorities adapted an earlier Andean labour obligation into a colonial forced-labour system known as the mita. Thousands of Indigenous men were required to work in and around the mines of Potosí under extremely dangerous conditions.",
      },

      {
        year: "1500s–1800s",
        title: "African Labour in Colonial Bolivia",
        text: "Enslaved Africans were also transported into the region. Some were forced to work in mining and urban occupations. Afro-Bolivian communities later became particularly established in the Yungas valleys, where Afro-Bolivian culture continues today.",
      },

      {
        year: "1600s",
        title: "Potosí Becomes a Global City",
        text: "Potosí grew into one of the largest and wealthiest cities in the Americas. Silver extracted there entered international trade networks linking South America with Europe and, through the Spanish Empire, markets as distant as Asia.",
      },

      {
        year: "1690s",
        title: "Jesuit Missions in Chiquitos",
        text: "Jesuit missionaries established missions among Indigenous communities in the Chiquitos region of eastern Bolivia. The surviving churches later became famous for their distinctive architecture and musical heritage.",
      },

      {
        year: "1780–1781",
        title: "Great Andean Rebellions",
        text: "A major wave of Indigenous rebellion spread across the Andes against colonial exploitation. In Upper Peru, Aymara leaders including Túpac Katari and Bartolina Sisa mobilised thousands of supporters.",
      },

      {
        year: "1781",
        title: "Túpac Katari and Bartolina Sisa",
        text: "Forces led by Túpac Katari, Bartolina Sisa and other Indigenous leaders besieged La Paz during the great anti-colonial uprisings. Spanish colonial forces eventually defeated the rebellion and executed its leaders, but Katari and Sisa later became powerful symbols of Indigenous resistance.",
      },

      {
        year: "1809",
        title: "Rebellions in Chuquisaca and La Paz",
        text: "Political uprisings broke out in Chuquisaca and La Paz during the crisis of the Spanish monarchy. These movements became part of the wider independence struggles developing across Spanish South America.",
      },

      {
        year: "1809–1825",
        title: "War for Independence",
        text: "Fighting between royalist and independence forces continued for years across the territory then known as Upper Peru. Guerrilla groups and local communities played important roles alongside larger independence armies.",
      },

      {
        periodKey: "bolivia-independence",
        year: "1825",
        title: "🔍 Your Investigation: Bolivia Becomes Independent",
        text: "After the defeat of major Spanish royalist forces elsewhere in South America, representatives declared the independence of Upper Peru on 6 August 1825. The new country was named Bolivia in honour of Simón Bolívar.",
        isGap: true,
        prompt:
          "Investigate Bolivia's independence and why the new country was named after Simón Bolívar.",
        questions: [
          "Who was Simón Bolívar?",
          "What role did Antonio José de Sucre play?",
          "Why did Upper Peru become a separate country?",
        ],
      },

      {
        year: "1826",
        title: "Sucre Becomes President",
        text: "Antonio José de Sucre became an early president of Bolivia and helped establish institutions for the new republic. The city of Chuquisaca was later officially renamed Sucre in his honour.",
      },

      {
        year: "1800s",
        title: "A New Republic, Old Inequalities",
        text: "Independence ended Spanish colonial government but did not immediately create equality. Indigenous communities continued to face discrimination, loss of land and economic exploitation, while political power remained concentrated among relatively small elites.",
      },

      {
        year: "1879–1884",
        title: "War of the Pacific",
        text: "Bolivia and Peru fought Chile in the War of the Pacific. Bolivia lost control of its Pacific coastal territory to Chile and became landlocked. Access to the sea remains an important issue in Bolivian national memory.",
      },

      {
        year: "Late 1800s–early 1900s",
        title: "Tin Replaces Silver",
        text: "As silver mining declined in relative importance, tin became one of Bolivia's most valuable exports. Powerful mine owners accumulated enormous wealth while miners often worked in difficult and dangerous conditions.",
      },

      {
        year: "1899",
        title: "Federal War",
        text: "A civil conflict known as the Federal War shifted the centre of political power towards La Paz. Sucre remained Bolivia's constitutional capital, but the executive and legislative branches of government became based in La Paz.",
      },

      {
        year: "1932–1935",
        title: "The Chaco War",
        text: "Bolivia fought Paraguay over the Gran Chaco region. Tens of thousands of soldiers died in one of twentieth-century South America's bloodiest wars. The experience exposed deep social divisions within Bolivia and contributed to demands for political change.",
      },

      {
        year: "1942",
        title: "Catavi Massacre",
        text: "Government forces fired on striking mine workers and their families at Catavi. The deaths intensified anger over working conditions and strengthened the political importance of organised miners.",
      },

      {
        periodKey: "bolivia-1952-revolution",
        year: "1952",
        title: "🔍 Your Investigation: The National Revolution",
        text: "An uprising brought the Revolutionary Nationalist Movement, or MNR, to power. The 1952 National Revolution transformed Bolivian politics and society.",
        isGap: true,
        prompt:
          "Investigate the 1952 National Revolution and decide which of its changes had the biggest effect on ordinary Bolivians.",
        questions: [
          "Why were miners important to the revolution?",
          "What happened to voting rights?",
          "What did land reform and mine nationalisation change?",
        ],
      },

      {
        year: "1952",
        title: "Universal Adult Suffrage",
        text: "Voting rights were dramatically expanded. Literacy and property restrictions that had excluded much of the Indigenous and working-class population were removed, greatly increasing political participation.",
      },

      {
        year: "1952",
        title: "The Tin Mines are Nationalised",
        text: "The government nationalised the major tin mines, transferring them from powerful private owners into the state mining corporation COMIBOL. Organised mine workers became an especially influential political force.",
      },

      {
        year: "1953",
        title: "Agrarian Reform",
        text: "Land reform broke up many large estates and redistributed land to rural communities. It altered traditional systems of rural power, although access to land remained unequal and reforms affected different regions in different ways.",
      },

      {
        year: "1964",
        title: "Military Rule Returns",
        text: "A military coup removed President Víctor Paz Estenssoro. Bolivia subsequently experienced a succession of military governments and coups.",
      },

      {
        year: "1967",
        title: "Che Guevara in Bolivia",
        text: "Cuban revolutionary Ernesto 'Che' Guevara attempted to organise a guerrilla insurgency in Bolivia. Bolivian forces captured and killed him near La Higuera in October 1967.",
      },

      {
        year: "1967",
        title: "San Juan Massacre",
        text: "Soldiers attacked mining communities during the military government of René Barrientos, killing workers and civilians. Mining communities remained important centres of opposition to authoritarian rule.",
      },

      {
        year: "1970s",
        title: "Dictatorship and Resistance",
        text: "Military governments restricted political activity and targeted opponents. Trade unions, miners, Indigenous organisations, students and human-rights campaigners became important sources of resistance.",
      },

      {
        year: "1977",
        title: "Women Begin a Hunger Strike",
        text: "A small group of women associated with mining communities, including Domitila Barrios de Chungara, began a hunger strike demanding political freedoms and an amnesty for exiled and imprisoned activists. The protest grew and helped increase pressure on the military government.",
      },

      {
        year: "1982",
        title: "Democracy Returns",
        text: "Civilian democratic government was restored after years of coups and military rule. Bolivia has remained under constitutional civilian government since then despite periods of major political and social conflict.",
      },

      {
        year: "1985",
        title: "Mining Crisis",
        text: "Economic reforms and the collapse of international tin prices led to the closure or restructuring of many state mines. Thousands of miners lost their jobs and many families moved to cities or agricultural regions.",
      },

      {
        year: "1990",
        title: "Indigenous March for Territory and Dignity",
        text: "Indigenous peoples from Bolivia's eastern lowlands organised a major march from the Beni region towards La Paz. The movement demanded recognition of Indigenous territories, cultures and political rights.",
      },

      {
        year: "2000",
        title: "Cochabamba Water Conflict",
        text: "Large protests erupted in Cochabamba following changes to the city's water system and rising concerns over affordability and private control. The dispute became internationally known as the Cochabamba Water War.",
      },

      {
        year: "2003",
        title: "The Gas Conflict",
        text: "Large protests over plans involving Bolivia's natural-gas resources developed into a wider political crisis. Dozens of people were killed during clashes and President Gonzalo Sánchez de Lozada resigned.",
      },

      {
        year: "2006",
        title: "Evo Morales Takes Office",
        text: "Evo Morales became Bolivia's first president from the country's Indigenous majority. His Movement for Socialism government promoted greater state involvement in natural resources and placed Indigenous identity and rights prominently within national politics.",
      },

      {
        year: "2009",
        title: "The Plurinational State",
        text: "A new constitution came into force and the country became officially known as the Plurinational State of Bolivia. The constitution expanded recognition of Indigenous nations, languages, legal traditions and forms of autonomy.",
      },

      {
        year: "2019",
        title: "Political Crisis",
        text: "A disputed presidential election led to protests, an audit by the Organization of American States, police and military pressure, and the resignation of President Evo Morales. Jeanine Áñez became interim president. The causes and characterisation of the crisis remain politically contested.",
      },

      {
        year: "2020",
        title: "New Elections",
        text: "Bolivia held new presidential elections. Luis Arce of the Movement for Socialism won the presidency, returning the party to national government.",
      },

      {
        year: "Today",
        title: "Modern Bolivia",
        text: "Bolivia is officially a plurinational state whose population includes many Indigenous nations and communities. Mining, agriculture and natural resources remain economically important, while debates about political representation, regional differences, Indigenous rights, land and the environment continue to shape the country.",
      },
    ],

    places: [
      {
        title: "Tiwanaku",
        tag: "Ancient Civilisation",

        image:
          "/images/continents/south-america/countries/bolivia/places/tiwanaku.jpg",

        description:
          "Tiwanaku stands on the Altiplano near Lake Titicaca at about 3,850 metres above sea level. Once the centre of a powerful pre-Hispanic civilisation, the site contains monumental ceremonial structures including Kalasasaya, the Akapana platform and intricately carved stone monuments. UNESCO describes Tiwanaku as the spiritual and political centre of a civilisation whose influence spread widely across the southern Andes.",
      },

      {
        title: "Potosí & Cerro Rico",
        tag: "Mining & Colonial History",

        image:
          "/images/continents/south-america/countries/bolivia/places/potosi-cerro-rico.jpg",

        description:
          "The city of Potosí grew beneath Cerro Rico, the 'Rich Mountain', after huge silver deposits began to be exploited in the sixteenth century. Silver from Potosí helped finance the Spanish Empire and circulated through global trade networks. The city's extraordinary wealth was built on dangerous labour performed particularly by Indigenous workers under the colonial mita system, as well as enslaved Africans.",
      },

      {
        title: "Lake Titicaca",
        tag: "Andean Landscape & Culture",

        image:
          "/images/continents/south-america/countries/bolivia/places/lake-titicaca.jpg",

        description:
          "Lake Titicaca lies high in the Andes on the border between Bolivia and Peru. Communities have lived around its shores for thousands of years, and the lake was central to societies including Tiwanaku and later the Inca. It remains culturally important to Aymara and Quechua communities and features prominently in Andean traditions and origin stories.",
      },

      {
        title: "Salar de Uyuni",
        tag: "Salt Flats",

        image:
          "/images/continents/south-america/countries/bolivia/places/salar-de-uyuni.jpg",

        description:
          "Salar de Uyuni is the world's largest salt flat, covering more than 10,000 square kilometres of southwestern Bolivia. It formed from prehistoric lakes that dried up and left enormous deposits of salt and minerals. During the rainy season, a thin layer of water can turn the surface into a vast natural mirror. Beneath the salt lies lithium-rich brine, making the region economically important as well as visually spectacular.",
      },
    ],

    influentialFigures: [
      {
        name: "Túpac Katari",
        role: "Indigenous Resistance Leader",

        image:
          "/images/continents/south-america/countries/bolivia/figures/tupac-katari.jpg",

        description:
          "Túpac Katari was the name adopted by Julián Apaza, an Aymara leader of the great Indigenous rebellions against Spanish colonial rule in 1781. His forces helped surround La Paz for months before the rebellion was defeated and Katari was captured and executed. He later became one of Bolivia's most powerful symbols of Indigenous resistance and political mobilisation.",
      },

      {
        name: "Bartolina Sisa",
        role: "Aymara Resistance Leader",

        image:
          "/images/continents/south-america/countries/bolivia/figures/bartolina-sisa.jpg",

        description:
          "Bartolina Sisa was an Aymara leader who played a major organisational and military role in the 1781 uprisings against Spanish colonial rule. She commanded forces and helped organise the siege of La Paz alongside Túpac Katari and other leaders. Captured and executed by colonial authorities, she is now widely remembered as a symbol of Indigenous resistance and the leadership of Indigenous women.",
      },

      {
        name: "Marina Núñez del Prado",
        role: "Sculpture",

        image:
          "/images/continents/south-america/countries/bolivia/figures/marina-nunez-del-prado.jpg",

        description:
          "Marina Núñez del Prado was one of Bolivia's most internationally recognised twentieth-century artists. Born in La Paz in 1910, she became known for sculptures with flowing, rounded forms inspired by the human body, Indigenous women and the landscapes of the Andes. She worked with materials including native woods, granite and onyx and exhibited internationally.",
      },

      {
        name: "Domitila Barrios de Chungara",
        role: "Workers' & Women's Activism",

        image:
          "/images/continents/south-america/countries/bolivia/figures/domitila-barrios-de-chungara.jpg",

        description:
          "Domitila Barrios de Chungara grew up in a Bolivian mining community and became an influential campaigner for workers, democracy and women's participation. Through the Housewives' Committee of the Siglo XX mining district she challenged dangerous working conditions and military repression. Her activism and testimony brought international attention to the lives and political struggles of Bolivian mining families.",
      },
    ],

    culturalSpotlights: [
      {
        title: "Carnival of Oruro",

        image:
          "/images/continents/south-america/countries/bolivia/cultural-spotlight/carnival-of-oruro.jpg",

        description:
          "The Carnival of Oruro is one of Bolivia's largest cultural celebrations. Its dances, masks, costumes and music combine layers of Indigenous Andean traditions and Catholic religious practice that developed during the colonial period. Thousands of musicians and dancers participate, with the spectacular Diablada, or Dance of the Devils, among its best-known performances.",
      },

      {
        title: "Kallawaya Knowledge",

        image:
          "/images/continents/south-america/countries/bolivia/cultural-spotlight/kallawaya-knowledge.jpg",

        description:
          "The Kallawaya are an Andean community particularly known for traditions of healing and detailed knowledge of medicinal plants. Travelling healers historically carried medicines across long distances and combined botanical knowledge with ritual and spiritual understandings of health. UNESCO recognises the Andean cosmovision of the Kallawaya as intangible cultural heritage.",
      },

      {
        title: "Pujllay & Ayarichi",

        image:
          "/images/continents/south-america/countries/bolivia/cultural-spotlight/pujllay-ayarichi.jpg",

        description:
          "Pujllay and Ayarichi are musical and dance traditions of the Yampara people. Pujllay is associated with the rainy season, renewal and abundance, while Ayarichi is connected with the dry season and religious festivals. Music, elaborate clothing, dance and community participation transmit Yampara identity and knowledge between generations.",
      },

      {
        title: "Alasita",

        image:
          "/images/continents/south-america/countries/bolivia/cultural-spotlight/alasita.jpg",

        description:
          "During Alasita in La Paz, people acquire tiny models representing things they hope for in the future — perhaps a house, a qualification, money, food or a vehicle. These miniatures can be blessed through ritual practices associated with Ekeko, an Andean figure connected with abundance. The tradition brings together Indigenous Andean beliefs and later religious influences.",
      },
    ],

    facts: [
      "Bolivia has two important seats of national government: Sucre is the constitutional capital, while the executive and legislative branches operate from La Paz.",
      "Bolivia recognises Spanish and 36 Indigenous languages in its Constitution.",
      "Tiwanaku was already an important Andean civilisation centuries before the Inca Empire reached the region.",
      "Potosí became one of the most important silver-mining centres of the Spanish Empire.",
      "Bolivia lost its Pacific coastline following the War of the Pacific and has been landlocked ever since.",
      "Lake Titicaca lies between Bolivia and Peru at more than 3,800 metres above sea level.",
      "Salar de Uyuni is the world's largest salt flat.",
      "The potato was domesticated in the Andes, and Bolivian farmers cultivate many different varieties.",
      "Bolivia officially became the Plurinational State of Bolivia under its 2009 Constitution.",
      "The Carnival of Oruro, Kallawaya knowledge, Pujllay and Ayarichi, and Alasita traditions are all recognised by UNESCO as intangible cultural heritage.",
    ],
  },
  {
    slug: "chile",
    name: "Chile",
    flag: "🇨🇱",

    capital: "Santiago",
    population: "About 20 million",
    languages: [
      "Spanish",
      "Mapudungun",
      "Aymara",
      "Rapa Nui",
      "Other Indigenous languages",
    ],
    currency: "Chilean Peso (CLP)",

    heroImage:
      "/images/continents/south-america/countries/chile/chile-andes-pacific-landscape.jpg",

    intro:
      "Chile is a long, narrow country stretching for more than 4,000 kilometres along South America's Pacific coast. Its extraordinary geography includes the Atacama Desert, fertile central valleys, the Andes, temperate forests, fjords, glaciers and remote Pacific islands. Chile's culture has been shaped by Indigenous peoples including the Mapuche, Aymara and Rapa Nui, Spanish colonisation, migration and strong regional traditions.",

    overview:
      "People have lived in the lands that now form Chile for thousands of years. In the far north, the Chinchorro developed some of the world's earliest known deliberate mummification traditions, while later Andean societies connected northern Chile with cultures across the mountains. Mapuche communities successfully resisted both Inca expansion and Spanish conquest across much of south-central Chile for centuries. Chile declared independence from Spain in 1818 and later expanded its territory during the War of the Pacific. The nineteenth and twentieth centuries brought mining wealth, industrialisation, urban growth and powerful workers' movements. In 1973 a military coup overthrew President Salvador Allende and General Augusto Pinochet led a dictatorship marked by severe human-rights abuses. Democratic government returned in 1990. Modern Chile combines Indigenous, Latin American and Pacific identities and has produced internationally influential literature, music and art.",

    tags: [
      "Indigenous History",
      "Mapuche",
      "Rapa Nui",
      "Pacific",
      "Andes",
      "Atacama",
      "Literature",
      "Human Rights",
    ],

    theme: {
      primary: "#446b86",
      secondary: "#29495e",
      accent: "#c66b55",
      background: "linear-gradient(180deg, #e8f0f2 0%, #d9e3e2 100%)",
      card: "rgba(255,255,255,0.90)",
      text: "#263740",
      timeline: "#446b86",
    },

    factFile: {
      capital: {
        image:
          "/images/continents/south-america/countries/chile/fact-file/santiago.jpg",

        title: "Santiago",

        description:
          "Santiago is Chile's capital and largest metropolitan area, lying in a valley between the Andes and the Chilean Coastal Range. The Spanish founded the city in 1541 in a region that had already been inhabited by Indigenous communities. Today Santiago is Chile's main political, economic and cultural centre, with the snow-covered Andes forming a dramatic backdrop to the city.",
      },

      history: {
        image:
          "/images/continents/south-america/countries/chile/fact-file/chinchorro-mummies.jpg",

        title: "The Chinchorro",

        description:
          "The Chinchorro were hunter-gatherer communities who lived along the Pacific coast of what is now northern Chile and southern Peru. Thousands of years ago they developed sophisticated methods of deliberately preserving the bodies of the dead. Their mummification tradition began earlier than the famous mummies of ancient Egypt and provides remarkable evidence about some of South America's earliest coastal communities.",
      },

      food: {
        image:
          "/images/continents/south-america/countries/chile/fact-file/curanto-chiloe.jpg",

        title: "Curanto of Chiloé",

        description:
          "Curanto is strongly associated with the Chiloé Archipelago in southern Chile. Traditionally, seafood, meat, potatoes and other ingredients can be layered over heated stones in a pit in the ground, covered with large leaves and allowed to steam together. The dish reflects Chiloé's close relationship with the sea, agriculture and community gatherings.",
      },

      wildlife: {
        image:
          "/images/continents/south-america/countries/chile/fact-file/huemul.jpg",

        title: "Huemul",

        description:
          "The huemul is an endangered deer native to the southern Andes of Chile and Argentina. Adapted to rugged mountain environments, it once occupied a much wider range but declined because of habitat loss, hunting and other pressures. The huemul appears alongside the Andean condor on Chile's national coat of arms.",
      },

      culture: {
        image:
          "/images/continents/south-america/countries/chile/fact-file/mapuche-textiles.jpg",

        title: "Mapuche Textiles",

        description:
          "Mapuche weaving is a living artistic tradition passed between generations, particularly through women. Wool is spun, dyed and woven into textiles whose colours, patterns and forms can communicate regional identity, family traditions and cultural knowledge. Mapuche textile traditions survived centuries of political and social change and remain an important expression of Indigenous identity.",
      },
    },

    timeline: [
      {
        year: "Thousands of years ago",
        title: "Early Peoples of Chile",
        text: "People settled different parts of the territory now called Chile thousands of years ago. Communities developed ways of life suited to environments ranging from the dry Pacific coast and Atacama Desert to fertile valleys, forests, mountains and the far south.",
      },

      {
        year: "c. 7000 BCE onwards",
        title: "The Chinchorro Tradition",
        text: "Chinchorro communities lived along the Pacific coast of northern Chile and southern Peru. They depended heavily on the rich resources of the sea and developed remarkably sophisticated traditions for preserving the bodies of their dead.",
      },

      {
        year: "c. 5000 BCE onwards",
        title: "Chinchorro Mummification",
        text: "The Chinchorro deliberately mummified members of their communities thousands of years before similar practices became famous in ancient Egypt. Different techniques were developed over time to reconstruct and preserve bodies.",
      },

      {
        year: "Ancient Chile",
        title: "Life in the Atacama",
        text: "Communities in northern Chile developed trade networks that connected the Pacific coast with the Andes and high-altitude regions. Llama caravans carried goods between environments with very different resources.",
      },

      {
        year: "c. 1000–1400s",
        title: "Mapuche Societies",
        text: "Mapuche-speaking communities lived across much of south-central Chile. Rather than forming a single centralised state, communities were organised through local family and territorial networks with their own leaders and traditions.",
      },

      {
        year: "1400s",
        title: "Inca Expansion",
        text: "The Inca Empire expanded southwards into northern and central parts of present-day Chile. Roads, settlements and administrative centres connected the region with the enormous Andean empire of Tawantinsuyu.",
      },

      {
        year: "1400s",
        title: "Mapuche Resistance to the Inca",
        text: "Inca expansion did not bring all of central and southern Chile under permanent control. Mapuche resistance helped limit the empire's southern expansion.",
      },

      {
        year: "c. 1200–1600",
        title: "The Moai of Rapa Nui",
        text: "On the remote Pacific island of Rapa Nui, Polynesian communities developed an extraordinary tradition of monumental stone sculpture. Hundreds of moai were carved and many were raised on ceremonial platforms known as ahu.",
      },

      {
        periodKey: "chile-rapa-nui",
        year: "Before European contact",
        title: "🔍 Your Investigation: Rapa Nui",
        text: "Thousands of kilometres from mainland South America, Rapa Nui developed a distinctive Polynesian society famous for its monumental moai.",
        isGap: true,
        prompt:
          "Investigate Rapa Nui and find out what archaeologists and Rapa Nui traditions tell us about the moai and the people who created them.",
        questions: [
          "Who are the Rapa Nui people?",
          "Why were moai created?",
          "How were enormous stone statues transported around the island?",
        ],
      },

      {
        year: "1520",
        title: "Magellan Reaches Southern Chile",
        text: "The expedition led by Ferdinand Magellan navigated the strait between mainland South America and Tierra del Fuego. The route became known as the Strait of Magellan and provided a passage between the Atlantic and Pacific Oceans.",
      },

      {
        year: "1536",
        title: "Spanish Forces Enter Chile",
        text: "Spanish forces led by Diego de Almagro travelled south from Peru into Chile but failed to establish lasting control. A more permanent attempt at conquest followed several years later.",
      },

      {
        year: "1541",
        title: "Santiago is Founded",
        text: "Pedro de Valdivia established Santiago as a Spanish settlement. Indigenous resistance began almost immediately, and the new town was attacked later that year.",
      },

      {
        periodKey: "chile-mapuche-resistance",
        year: "1550s",
        title: "🔍 Your Investigation: Lautaro and Mapuche Resistance",
        text: "Spanish attempts to conquer Mapuche territory led to generations of warfare. Lautaro became one of the best-known Mapuche military leaders of the early resistance.",
        isGap: true,
        prompt:
          "Investigate Lautaro and the early Mapuche resistance to Spanish conquest.",
        questions: [
          "Who was Lautaro?",
          "What did the Mapuche learn about Spanish military tactics?",
          "Why did Spain struggle to conquer Mapuche territory?",
        ],
      },

      {
        year: "1553",
        title: "Battle of Tucapel",
        text: "Mapuche forces led by Lautaro defeated Spanish forces at Tucapel. Pedro de Valdivia was captured and killed. The victory became one of the defining events of early Mapuche resistance.",
      },

      {
        year: "1500s–1800s",
        title: "The Arauco War",
        text: "Conflict between Spanish colonial forces and Mapuche communities continued for centuries in south-central Chile. Neither side maintained complete control of the frontier, and periods of warfare alternated with negotiation and trade.",
      },

      {
        year: "1641",
        title: "Parliament of Quilín",
        text: "Spanish and Mapuche representatives reached an important agreement at Quilín. Although later relations remained complicated and conflict continued, Spanish authorities effectively recognised Mapuche control over territory south of the Biobío River.",
      },

      {
        year: "1700s",
        title: "Colonial Chile",
        text: "Spanish colonial society developed around towns, agriculture, livestock and trade. Indigenous peoples, people of African descent, Europeans and people of mixed ancestry all formed part of colonial Chilean society.",
      },

      {
        year: "1722",
        title: "European Contact with Rapa Nui",
        text: "Dutch navigator Jacob Roggeveen reached Rapa Nui on Easter Sunday in 1722, producing the island's European name, Easter Island. Later encounters brought increasing outside interference, disease and exploitation.",
      },

      {
        year: "1810",
        title: "First National Government",
        text: "As Spain faced political crisis during the Napoleonic Wars, leaders in Santiago formed a governing junta. The event is traditionally regarded as the beginning of Chile's independence process.",
      },

      {
        year: "1814",
        title: "Spanish Rule Restored",
        text: "Royalist forces defeated Chilean independence supporters at the Battle of Rancagua, temporarily restoring Spanish control. Many independence leaders fled across the Andes to Mendoza.",
      },

      {
        periodKey: "chile-independence",
        year: "1817–1818",
        title: "🔍 Your Investigation: Chilean Independence",
        text: "The Army of the Andes crossed from Argentina into Chile and defeated major royalist forces. Chile formally declared independence in 1818.",
        isGap: true,
        prompt:
          "Investigate the campaign for Chilean independence and the roles played by Bernardo O'Higgins and José de San Martín.",
        questions: [
          "Why did the Army of the Andes cross the mountains?",
          "What happened at Chacabuco and Maipú?",
          "Who became the leading figure in Chile's new government?",
        ],
      },

      {
        year: "1817",
        title: "Battle of Chacabuco",
        text: "The Army of the Andes led by José de San Martín, together with Chilean independence supporters including Bernardo O'Higgins, defeated royalist forces at Chacabuco and entered Santiago.",
      },

      {
        year: "1818",
        title: "Independence Declared",
        text: "Chile formally declared independence from Spain. Victory over royalist forces at the Battle of Maipú later that year helped secure the new state's position in central Chile.",
      },

      {
        year: "1833",
        title: "A New Constitution",
        text: "Chile adopted a constitution that created a strongly centralised presidential system. It provided the political framework for much of the nineteenth century.",
      },

      {
        year: "1840s–1870s",
        title: "Mining and Economic Growth",
        text: "Mining exports including copper and silver helped expand Chile's economy. Valparaíso grew into a major Pacific port linking Chile with international trade.",
      },

      {
        year: "1860s–1880s",
        title: "Occupation of Mapuche Territory",
        text: "The Chilean state expanded military control into the autonomous Mapuche territories of Araucanía. Mapuche communities lost large areas of land and were forced onto reduced territories, producing consequences that remain important in modern debates over land and Indigenous rights.",
      },

      {
        year: "1879–1884",
        title: "War of the Pacific",
        text: "Chile fought Bolivia and Peru in the War of the Pacific. Chile gained mineral-rich northern territories, while Bolivia lost its Pacific coastline. The conflict permanently changed the borders and politics of all three countries.",
      },

      {
        year: "Late 1800s",
        title: "The Nitrate Boom",
        text: "The newly acquired northern territories contained enormous deposits of sodium nitrate, widely used in fertiliser and explosives. Nitrate exports brought major income to Chile while thousands of workers lived and worked in isolated desert mining communities.",
      },

      {
        year: "1888",
        title: "Rapa Nui and Chile",
        text: "Chile formally annexed Rapa Nui. The island's Indigenous population subsequently experienced severe restrictions over land and movement, and debates over Rapa Nui autonomy and land rights continue into the present.",
      },

      {
        year: "1907",
        title: "Santa María de Iquique Massacre",
        text: "Thousands of nitrate workers and their families gathered in Iquique during a strike over wages and working conditions. Soldiers fired on the gathering at the Santa María school, killing an uncertain but substantial number of people. The event became an enduring symbol of Chile's labour movement.",
      },

      {
        year: "1920s–1930s",
        title: "Political and Social Change",
        text: "Rapid urbanisation, organised labour and demands for social reform transformed Chilean politics. Governments increasingly faced questions about working conditions, education and the role of the state in the economy.",
      },

      {
        year: "1945",
        title: "Gabriela Mistral Wins the Nobel Prize",
        text: "Poet and educator Gabriela Mistral became the first Latin American author to receive the Nobel Prize in Literature. Her writing explored childhood, love, grief, identity and the landscapes and peoples of Latin America.",
      },

      {
        year: "1960",
        title: "The Great Chilean Earthquake",
        text: "A magnitude 9.5 earthquake struck southern Chile near Valdivia. It remains the strongest earthquake ever instrumentally recorded and generated a tsunami that travelled across the Pacific Ocean.",
      },

      {
        year: "1960s",
        title: "Nueva Canción Chilena",
        text: "Musicians including Violeta Parra helped inspire the Nueva Canción Chilena movement, which combined folk traditions with songs addressing social life, inequality, identity and political change.",
      },

      {
        year: "1970",
        title: "Salvador Allende Elected",
        text: "Salvador Allende won the presidency as the candidate of the Popular Unity coalition. His government pursued major socialist reforms, including nationalisation and redistribution policies, amid intense domestic political conflict and international Cold War pressures.",
      },

      {
        periodKey: "chile-1973-coup",
        year: "1973",
        title: "🔍 Your Investigation: Coup and Dictatorship",
        text: "On 11 September 1973, Chile's armed forces overthrew President Salvador Allende. General Augusto Pinochet emerged as head of a military dictatorship that lasted until 1990.",
        isGap: true,
        prompt:
          "Investigate the 1973 coup and what life under military dictatorship meant for Chileans.",
        questions: [
          "What happened on 11 September 1973?",
          "What happened to political opponents during the dictatorship?",
          "How did Chile eventually return to democratic government?",
        ],
      },

      {
        year: "1973–1990",
        title: "Military Dictatorship",
        text: "The military regime dissolved Congress, restricted political activity and censored opponents. Thousands of people were killed, forcibly disappeared, imprisoned, tortured or forced into exile. The dictatorship also introduced major free-market economic reforms.",
      },

      {
        year: "1980",
        title: "New Constitution",
        text: "A new constitution was approved during military rule in a referendum conducted without normal democratic conditions. The document created an institutional framework that continued, with numerous later reforms, after the return to democracy.",
      },

      {
        year: "1988",
        title: "The Plebiscite",
        text: "Chileans voted in a national plebiscite on whether Augusto Pinochet should remain in power for another presidential term. The 'No' campaign won, opening the way for competitive presidential elections.",
      },

      {
        year: "1990",
        title: "Democratic Government Returns",
        text: "Patricio Aylwin became president in March 1990 as civilian democratic government returned. Chile subsequently began a long process of investigating dictatorship-era human-rights abuses and reforming political institutions.",
      },

      {
        year: "1990s–2000s",
        title: "Memory and Human Rights",
        text: "Official investigations documented victims of execution, disappearance, political imprisonment and torture during military rule. Families, survivors and human-rights organisations continued campaigning for truth, justice and remembrance.",
      },

      {
        year: "2006",
        title: "Michelle Bachelet Becomes President",
        text: "Michelle Bachelet became Chile's first woman president. A former political prisoner whose father died after being detained following the 1973 coup, she later served a second presidential term and held senior roles at the United Nations.",
      },

      {
        year: "2010",
        title: "The Chile Earthquake",
        text: "A magnitude 8.8 earthquake struck central Chile, followed by a tsunami. Hundreds of people died and extensive damage affected communities across a large part of the country.",
      },

      {
        year: "2010",
        title: "The Atacama Mine Rescue",
        text: "Thirty-three miners became trapped deep underground after a collapse at the San José mine in the Atacama region. All were rescued after 69 days in an operation watched around the world.",
      },

      {
        year: "2019",
        title: "Mass Protests",
        text: "A rise in Santiago Metro fares helped trigger nationwide protests that developed into wider demands concerning inequality, pensions, public services and political representation. The demonstrations led to a process of debating constitutional change.",
      },

      {
        year: "2020–2023",
        title: "Constitutional Debate",
        text: "Chile held votes and elected bodies to consider replacing the constitution inherited from the Pinochet era. Two proposed replacement constitutions were rejected by voters, so the amended 1980 Constitution remained in force.",
      },

      {
        year: "Today",
        title: "Modern Chile",
        text: "Chile is a democratic republic extending from the Atacama Desert to Patagonia and including Pacific territories such as Rapa Nui. Copper mining remains economically important, while Indigenous rights, inequality, environmental protection, historical memory and constitutional reform continue to influence national debate.",
      },
    ],

    places: [
      {
        title: "Chinchorro Archaeological Sites",
        tag: "Ancient History",

        image:
          "/images/continents/south-america/countries/chile/places/chinchorro-archaeological-sites.jpg",

        description:
          "The Chinchorro archaeological sites in northern Chile preserve settlements, cemeteries and evidence of one of the world's oldest known traditions of deliberate human mummification. The communities lived in the extremely dry Atacama region but built their lives around the rich resources of the nearby Pacific Ocean. Their archaeological remains reveal sophisticated beliefs and practices dating back thousands of years.",
      },

      {
        title: "Rapa Nui National Park",
        tag: "Polynesian Heritage",

        image:
          "/images/continents/south-america/countries/chile/places/rapa-nui-national-park.jpg",

        description:
          "Rapa Nui lies around 3,700 kilometres west of continental Chile and is one of the world's most isolated inhabited islands. Its Indigenous Polynesian culture created hundreds of monumental moai and ceremonial platforms called ahu. The statues are connected with ancestors, communities and a remarkable cultural landscape that continues to hold deep importance for Rapa Nui people.",
      },

      {
        title: "Atacama Desert",
        tag: "Desert & Astronomy",

        image:
          "/images/continents/south-america/countries/chile/places/atacama-desert.jpg",

        description:
          "Northern Chile's Atacama is one of the driest non-polar deserts on Earth. Salt flats, volcanoes, high-altitude lagoons and extraordinary rock formations create a dramatic landscape. Its exceptionally dry atmosphere, high altitude and clear skies have also made the region one of the world's most important locations for astronomical observatories.",
      },

      {
        title: "Torres del Paine",
        tag: "Patagonia",

        image:
          "/images/continents/south-america/countries/chile/places/torres-del-paine.jpg",

        description:
          "Torres del Paine National Park lies in Chilean Patagonia and is famous for granite towers, mountains, glaciers, lakes and open grasslands. Wildlife includes guanacos, condors and pumas. The park demonstrates just how dramatically Chile's landscape changes between the Atacama in the far north and Patagonia in the south.",
      },
    ],

    influentialFigures: [
      {
        name: "Lautaro",
        role: "Mapuche Resistance Leader",

        image:
          "/images/continents/south-america/countries/chile/figures/lautaro.jpg",

        description:
          "Lautaro was a Mapuche military leader who became one of the most famous figures in Indigenous resistance to Spanish conquest. As a young man he spent time among the Spanish and learned about their horses and military methods. After returning to the Mapuche, he helped adapt tactics used against Spanish forces and led major victories including the Battle of Tucapel in 1553. His resistance made him an enduring symbol of Mapuche history.",
      },

      {
        name: "Gabriela Mistral",
        role: "Poetry & Education",

        image:
          "/images/continents/south-america/countries/chile/figures/gabriela-mistral.jpg",

        description:
          "Gabriela Mistral was a poet, teacher and diplomat born in Chile's Elqui Valley in 1889. Her poetry explored love, loss, childhood, nature and Latin American identity. In 1945 she became the first Latin American author to receive the Nobel Prize in Literature. Education was also central to her life, and she worked on educational projects in Chile and abroad.",
      },

      {
        name: "Violeta Parra",
        role: "Music, Art & Folklore",

        image:
          "/images/continents/south-america/countries/chile/figures/violeta-parra.jpg",

        description:
          "Violeta Parra was a singer, songwriter, artist and researcher who travelled through Chile collecting traditional songs and learning directly from rural musicians. She transformed these traditions into new work and became a foundational influence on the Nueva Canción movement. Her song 'Gracias a la Vida' became internationally known, while her visual art included embroidery, painting and sculpture.",
      },

      {
        name: "Elicura Chihuailaf",
        role: "Mapuche Poetry & Literature",

        image:
          "/images/continents/south-america/countries/chile/figures/elicura-chihuailaf.jpg",

        description:
          "Elicura Chihuailaf is a Mapuche poet and writer whose work draws on Mapuche language, oral traditions, memory, landscape and spirituality. He writes in both Mapudungun and Spanish and has helped bring Mapuche literature to wider audiences in Chile and internationally. His work demonstrates that Indigenous culture in Chile is not simply part of the past but a living and evolving tradition.",
      },
    ],

    culturalSpotlights: [
      {
        title: "Rapa Nui Moai & Ahu",

        image:
          "/images/continents/south-america/countries/chile/cultural-spotlight/rapa-nui-moai-ahu.jpg",

        description:
          "The moai of Rapa Nui are enormous stone figures created by Polynesian islanders, particularly between roughly the tenth and sixteenth centuries. Many were positioned on ceremonial stone platforms known as ahu and represented important ancestors. Rather than being mysterious objects from a vanished people, the moai form part of the living cultural heritage of today's Rapa Nui community.",
      },

      {
        title: "Nueva Canción Chilena",

        image:
          "/images/continents/south-america/countries/chile/cultural-spotlight/nueva-cancion-chilena.jpg",

        description:
          "Nueva Canción Chilena developed during the 1960s as musicians combined Chilean and wider Latin American folk traditions with contemporary songwriting. Artists used instruments such as guitars, charangos and Andean flutes while addressing identity, workers' lives, inequality and political change. Violeta Parra was a foundational influence, while artists including Víctor Jara and groups such as Inti-Illimani became strongly associated with the movement.",
      },

      {
        title: "Wooden Churches of Chiloé",

        image:
          "/images/continents/south-america/countries/chile/cultural-spotlight/chiloe-wooden-architecture.jpg",

        description:
          "The Chiloé Archipelago developed a remarkable tradition of wooden architecture. Local builders adapted European church designs to island materials and woodworking traditions, creating structures made largely from native timber rather than stone. Sixteen Churches of Chiloé are inscribed together on UNESCO's World Heritage List.",
      },

      {
        title: "Mapuche Silverwork",

        image:
          "/images/continents/south-america/countries/chile/cultural-spotlight/mapuche-silverwork.jpg",

        description:
          "Mapuche silversmithing became particularly important during the eighteenth and nineteenth centuries. Skilled smiths created jewellery and ornaments including large chest pieces, earrings, pins and head decorations. Silver objects could communicate identity, status and family connections, and historic designs continue to influence contemporary Mapuche artists and craftspeople.",
      },
    ],

    facts: [
      "Chile stretches for more than 4,000 kilometres from north to south but is unusually narrow from east to west.",
      "The Atacama is one of the driest non-polar deserts on Earth.",
      "The Chinchorro developed deliberate mummification traditions thousands of years ago.",
      "Rapa Nui lies about 3,700 kilometres from continental Chile.",
      "Chile is one of the world's leading producers of copper.",
      "The magnitude 9.5 Valdivia earthquake of 1960 is the strongest earthquake ever instrumentally recorded.",
      "Gabriela Mistral became the first Latin American author to win the Nobel Prize in Literature in 1945.",
      "The huemul and Andean condor appear together on Chile's coat of arms.",
      "Mapuche communities resisted attempts by both the Inca and Spanish empires to control their territories.",
      "Chile's landscape includes desert, Mediterranean-style valleys, temperate rainforest, mountains, fjords, glaciers and Pacific islands.",
    ],
  },
  {
    slug: "ecuador",
    name: "Ecuador",
    flag: "🇪🇨",

    capital: "Quito",
    population: "About 18 million",
    languages: ["Spanish", "Kichwa", "Shuar", "Other Indigenous languages"],
    currency: "United States Dollar (USD)",

    heroImage:
      "/images/continents/south-america/countries/ecuador/cotopaxi-and-andean-highlands.jpg",

    intro:
      "Ecuador may be one of South America's smaller countries, but it contains an extraordinary variety of landscapes and cultures. The Andes run through its centre, the Amazon stretches across the east, the Pacific coast lies to the west and the Galápagos Islands sit far offshore. Indigenous nations, Afro-Ecuadorian communities, Spanish colonial history and distinctive regional traditions all form important parts of modern Ecuador.",

    overview:
      "People have lived in the territory of modern Ecuador for thousands of years, developing societies along the Pacific coast, in the Andes and throughout the Amazon. Long-distance trade connected different environments, while cultures produced sophisticated ceramics, metalwork, textiles and agricultural systems. During the fifteenth century, the Inca expanded north into Ecuador, but their rule was relatively brief before Spanish conquest began in the 1530s. Colonial rule brought disease, forced labour, Christianity and major changes to Indigenous society, while enslaved Africans and their descendants created important communities, particularly around Esmeraldas. Ecuador became part of the independence struggles led by figures including Antonio José de Sucre and Simón Bolívar before becoming a separate republic in 1830. Since then, struggles over land, political power, Indigenous rights, labour and natural resources have repeatedly shaped the country. Modern Ecuador officially recognises itself as an intercultural and plurinational state and contains some of the most biologically diverse environments on Earth.",

    tags: [
      "Indigenous History",
      "Andes",
      "Amazon",
      "Galápagos",
      "Afro-Ecuadorian Heritage",
      "Inca",
      "Cacao",
      "Living Traditions",
    ],

    theme: {
      primary: "#4f7b67",
      secondary: "#35584e",
      accent: "#d4a343",
      background: "linear-gradient(180deg, #e9f0e5 0%, #dce7df 100%)",
      card: "rgba(255,255,255,0.90)",
      text: "#293c35",
      timeline: "#4f7b67",
    },

    factFile: {
      capital: {
        image:
          "/images/continents/south-america/countries/ecuador/fact-file/quito.jpg",

        title: "Quito",

        description:
          "Quito is Ecuador's capital and stands high in the Andes near the slopes of the Pichincha volcano. Indigenous settlements existed in the region before Inca and Spanish rule, while the Spanish established their colonial city in 1534. Quito's historic centre contains churches, monasteries, plazas and architecture where European and Indigenous artistic traditions interacted. In 1978, Quito became one of the first places inscribed on UNESCO's World Heritage List.",
      },

      history: {
        image:
          "/images/continents/south-america/countries/ecuador/fact-file/ingapirca.jpg",

        title: "Ingapirca",

        description:
          "Ingapirca is the best-known Inca archaeological complex in Ecuador. The site was constructed in a region associated with the Cañari people after Inca expansion into the northern Andes. Its buildings demonstrate both Inca influence and interaction with existing local traditions. The distinctive elliptical structure usually called the Temple of the Sun was built from carefully shaped stone fitted together without mortar.",
      },

      food: {
        image:
          "/images/continents/south-america/countries/ecuador/fact-file/cacao.jpg",

        title: "Cacao",

        description:
          "Cacao has an exceptionally long history in Ecuador. Archaeological evidence from the upper Amazon region shows that people were using and cultivating cacao thousands of years ago. Ecuador later became an important exporter of cacao, particularly during the nineteenth and early twentieth centuries. Fine-aroma cacao remains one of the country's internationally recognised agricultural products.",
      },

      wildlife: {
        image:
          "/images/continents/south-america/countries/ecuador/fact-file/galapagos-islands.jpg",

        title: "Galápagos Islands",

        description:
          "The Galápagos are a volcanic archipelago around 1,000 kilometres from mainland Ecuador. Their isolation allowed unusual animals and plants to evolve, including giant tortoises, marine iguanas, flightless cormorants and many distinctive finches. Observations made by Charles Darwin after visiting the islands in 1835 later contributed to the development of his ideas about evolution by natural selection.",
      },

      culture: {
        image:
          "/images/continents/south-america/countries/ecuador/fact-file/toquilla-straw-hat.jpg",

        title: "Toquilla Straw Hat",

        description:
          "The famous finely woven hat often called a 'Panama hat' actually has deep roots in Ecuador. Artisans weave the hats from fibres of the toquilla palm, particularly in coastal and Andean communities. The finest hats can take months to complete. UNESCO recognises the traditional knowledge and skills involved in Ecuadorian toquilla straw hat weaving as intangible cultural heritage.",
      },
    },

    timeline: [
      {
        year: "Thousands of years ago",
        title: "The First Ecuadorians",
        text: "People lived in what is now Ecuador thousands of years before European arrival. Communities developed along the Pacific coast, throughout the Andes and within the Amazon rainforest.",
      },

      {
        year: "c. 3500–1500 BCE",
        title: "Valdivia Culture",
        text: "Communities associated with the Valdivia culture lived along Ecuador's Pacific coast. They produced some of the earliest widely known pottery traditions in the Americas and depended on farming, fishing and gathering.",
      },

      {
        year: "More than 5,000 years ago",
        title: "Ancient Cacao",
        text: "Archaeological evidence from southeastern Ecuador indicates that people of the upper Amazon were using cacao thousands of years ago. This has helped reshape understanding of the early history of the plant that eventually became the basis of chocolate.",
      },

      {
        year: "c. 500 BCE–500 CE",
        title: "Regional Cultures Flourish",
        text: "Different societies developed across Ecuador's coast and highlands. Skilled craftspeople produced ceramics, textiles and metalwork, while trade networks connected communities living in very different environments.",
      },

      {
        year: "c. 500–1500 CE",
        title: "Complex Regional Societies",
        text: "Before Inca expansion, Ecuador contained numerous politically independent societies including the Cañari, Caranqui, Quitu, Manteño and others. Coastal communities participated in long-distance maritime trade while Andean societies developed intensive agriculture.",
      },

      {
        year: "1400s",
        title: "Inca Expansion North",
        text: "Inca armies expanded north from Peru into the territory of modern Ecuador. Conquest was not immediate, and some Indigenous societies resisted Inca control for years.",
      },

      {
        periodKey: "ecuador-inca-canari",
        year: "Late 1400s",
        title: "🔍 Your Investigation: Inca & Cañari",
        text: "The Inca incorporated Cañari territories into Tawantinsuyu, but existing communities and traditions did not simply disappear.",
        isGap: true,
        prompt:
          "Investigate the relationship between the Inca and Cañari and use Ingapirca to explore how cultures can influence one another.",
        questions: [
          "Who were the Cañari?",
          "How did the Inca expand into Ecuador?",
          "What can Ingapirca tell us about both cultures?",
        ],
      },

      {
        year: "Early 1500s",
        title: "An Inca Civil War",
        text: "Following the death of the Inca ruler Huayna Capac, a struggle developed between his sons Huáscar and Atahualpa. Atahualpa's power base was closely connected with the northern Andes, including the region around Quito.",
      },

      {
        year: "1532",
        title: "Atahualpa Captured",
        text: "Atahualpa defeated Huáscar but was captured shortly afterwards by Spanish forces led by Francisco Pizarro at Cajamarca in present-day Peru. His capture severely disrupted Inca political authority.",
      },

      {
        year: "1533",
        title: "Atahualpa is Executed",
        text: "Despite providing a huge ransom of precious metals, Atahualpa was executed by the Spanish. Spanish forces and their Indigenous allies subsequently expanded their control through the Andes.",
      },

      {
        year: "1534",
        title: "Spanish Quito",
        text: "Spanish forces established the colonial city of San Francisco de Quito. It became an important centre of Spanish government and Christianity in the northern Andes.",
      },

      {
        year: "1500s",
        title: "Disease and Colonial Rule",
        text: "Epidemics of diseases introduced from Europe caused catastrophic population losses among Indigenous peoples. Spanish authorities imposed new systems of government, taxation, religion and labour.",
      },

      {
        year: "1500s–1700s",
        title: "Indigenous Labour",
        text: "Colonial systems required many Indigenous people to provide labour and tribute. Textile workshops known as obrajes became particularly important in the highlands, where workers often experienced harsh conditions.",
      },

      {
        year: "1500s",
        title: "Africans Reach Ecuador",
        text: "Enslaved Africans were brought into Spanish-controlled territories. In the Esmeraldas region, Africans who escaped slavery and their descendants established communities that developed a distinctive Afro-Ecuadorian culture.",
      },

      {
        year: "1550s onwards",
        title: "Afro-Ecuadorian Esmeraldas",
        text: "African-descended communities gained significant autonomy in parts of the northwestern coastal region. Over generations, African, Indigenous and European influences contributed to distinctive cultures including musical traditions centred on the marimba.",
      },

      {
        year: "1563",
        title: "Royal Audience of Quito",
        text: "The Spanish Crown created the Real Audiencia de Quito. Its territory was governed within the wider structures of Spain's American empire and Quito became an important administrative and cultural centre.",
      },

      {
        year: "1600s–1700s",
        title: "The Quito School of Art",
        text: "Artists in colonial Quito developed a distinctive tradition of painting, sculpture and religious art. Indigenous and mestizo artists combined European artistic forms with local techniques, materials and imagery.",
      },

      {
        year: "1736",
        title: "Measuring the Equator",
        text: "A French-led scientific expedition arrived in the region to measure part of the Earth's meridian near the equator. The work contributed to scientific understanding of the Earth's shape.",
      },

      {
        year: "1809",
        title: "Quito Challenges Spanish Rule",
        text: "Political leaders in Quito formed a governing junta during the crisis of the Spanish monarchy. Spanish royalist forces later restored control, but the events became an important part of Ecuador's independence story.",
      },

      {
        year: "1810",
        title: "Repression in Quito",
        text: "A number of independence supporters imprisoned after the 1809 uprising were killed during violence in Quito. Independence movements nevertheless continued to develop.",
      },

      {
        year: "1820",
        title: "Guayaquil Declares Independence",
        text: "Guayaquil declared independence from Spanish rule on 9 October 1820. The city became an important base for military campaigns aimed at liberating the rest of the territory.",
      },

      {
        periodKey: "ecuador-pichincha",
        year: "1822",
        title: "🔍 Your Investigation: Battle of Pichincha",
        text: "Independence forces led by Antonio José de Sucre defeated Spanish royalist troops on the slopes of Pichincha volcano above Quito on 24 May 1822.",
        isGap: true,
        prompt:
          "Investigate the Battle of Pichincha and why a battle fought on a volcano helped secure Ecuador's independence.",
        questions: [
          "Who was Antonio José de Sucre?",
          "Why was Quito strategically important?",
          "What happened to Ecuador after the victory?",
        ],
      },

      {
        year: "1822",
        title: "Ecuador Joins Gran Colombia",
        text: "Following independence from Spain, the territory became part of Gran Colombia, the republic that also included modern Colombia, Venezuela and Panama.",
      },

      {
        year: "1822",
        title: "Manuela Sáenz",
        text: "Quito-born Manuela Sáenz became deeply involved in the South American independence movement. She worked as a political activist and intelligence operative and became closely associated with Simón Bolívar.",
      },

      {
        year: "1830",
        title: "The Republic of Ecuador",
        text: "Gran Colombia broke apart and Ecuador became a separate republic. Quito became its capital.",
      },

      {
        year: "1832",
        title: "Galápagos Becomes Part of Ecuador",
        text: "Ecuador formally took possession of the Galápagos Islands. The remote archipelago had previously been visited by sailors, whalers and pirates.",
      },

      {
        year: "1835",
        title: "Charles Darwin Visits Galápagos",
        text: "Charles Darwin visited the Galápagos during the voyage of HMS Beagle. His observations of differences between animals on different islands later contributed to his thinking about evolution.",
      },

      {
        year: "1840s–1920s",
        title: "The Cacao Economy",
        text: "Ecuador became an important producer and exporter of cacao. Wealth from cacao helped transform Guayaquil and the coastal economy, although plantation labourers often received little of the wealth generated by exports.",
      },

      {
        year: "1851",
        title: "Slavery is Abolished",
        text: "Ecuador abolished slavery under President José María Urbina. Afro-Ecuadorians nevertheless continued to experience discrimination, poverty and unequal access to land and political power.",
      },

      {
        year: "1895",
        title: "The Liberal Revolution",
        text: "A political movement led by Eloy Alfaro took power and introduced major reforms intended to reduce the influence of the Catholic Church over the state and expand secular public institutions.",
      },

      {
        year: "1908",
        title: "Railway Across the Andes",
        text: "The railway connecting Guayaquil with Quito was completed. Crossing steep Andean terrain was an enormous engineering challenge and helped strengthen connections between Ecuador's coast and highlands.",
      },

      {
        year: "1920s",
        title: "Indigenous and Workers' Movements",
        text: "Workers and Indigenous communities increasingly organised around wages, land and working conditions. These movements became important forces in Ecuadorian politics during the twentieth century.",
      },

      {
        year: "1924",
        title: "Matilde Hidalgo Votes",
        text: "Physician and campaigner Matilde Hidalgo became the first woman known to vote in a national election in Ecuador and one of the first women to vote in Latin America. Her challenge helped establish women's voting rights in the country.",
      },

      {
        year: "1930s–1960s",
        title: "Dolores Cacuango",
        text: "Kichwa leader Dolores Cacuango became a major campaigner for Indigenous land rights, workers and education. She helped organise Indigenous communities and supported the creation of schools teaching in both Kichwa and Spanish.",
      },

      {
        year: "1941",
        title: "War with Peru",
        text: "Long-running territorial disagreements between Ecuador and Peru contributed to armed conflict in 1941. Border disputes continued for decades afterwards.",
      },

      {
        year: "1942",
        title: "Rio Protocol",
        text: "Ecuador, Peru and international guarantor countries signed the Rio Protocol in an attempt to settle the territorial dispute. Disagreement over parts of the border nevertheless continued.",
      },

      {
        year: "1964",
        title: "Agrarian Reform",
        text: "Land reform attempted to change systems of large estates and dependent agricultural labour. Indigenous organisations continued campaigning for stronger land rights and political representation.",
      },

      {
        year: "1972–1979",
        title: "Military Government and Oil",
        text: "Military governments ruled Ecuador during much of the 1970s as large-scale petroleum exports transformed the national economy. Oil brought major state revenue but also increased environmental and social pressures in the Amazon.",
      },

      {
        year: "1978",
        title: "Quito & Galápagos Recognised",
        text: "Quito and the Galápagos Islands were included among the first twelve properties placed on UNESCO's new World Heritage List.",
      },

      {
        year: "1979",
        title: "Democracy Returns",
        text: "A new constitution came into force and civilian government returned after years of military rule.",
      },

      {
        year: "1986",
        title: "CONAIE is Founded",
        text: "Indigenous organisations came together to establish the Confederation of Indigenous Nationalities of Ecuador, known as CONAIE. It became one of the country's most influential Indigenous political and social organisations.",
      },

      {
        periodKey: "ecuador-indigenous-uprising",
        year: "1990",
        title: "🔍 Your Investigation: Indigenous Uprising",
        text: "Indigenous communities organised a major national mobilisation demanding land rights, recognition of Indigenous nations, bilingual education and political change.",
        isGap: true,
        prompt:
          "Investigate Ecuador's 1990 Indigenous uprising and how Indigenous organisations changed national politics.",
        questions: [
          "What is CONAIE?",
          "What were Indigenous communities demanding?",
          "Why was the uprising important for Ecuador's national identity?",
        ],
      },

      {
        year: "1995",
        title: "Cenepa War",
        text: "Ecuador and Peru fought a short conflict in the disputed Cenepa Valley. The fighting demonstrated that their long-running border disagreement had still not been fully resolved.",
      },

      {
        year: "1998",
        title: "Peace with Peru",
        text: "Ecuador and Peru signed agreements that formally settled their remaining border dispute, ending a territorial disagreement that had affected relations for generations.",
      },

      {
        year: "2000",
        title: "Ecuador Adopts the US Dollar",
        text: "Following a severe economic and banking crisis, Ecuador replaced the sucre with the United States dollar as its official currency.",
      },

      {
        year: "2008",
        title: "A New Constitution",
        text: "Ecuador adopted a new constitution describing the country as intercultural and plurinational. It expanded recognition of Indigenous peoples and became internationally notable for recognising constitutional rights of nature.",
      },

      {
        year: "2008",
        title: "Zápara Heritage Recognised",
        text: "UNESCO inscribed the oral heritage and cultural manifestations of the Zápara people of Ecuador and Peru on the Representative List of the Intangible Cultural Heritage of Humanity.",
      },

      {
        year: "2012",
        title: "Toquilla Weaving Recognised",
        text: "UNESCO recognised the traditional weaving of the Ecuadorian toquilla straw hat as intangible cultural heritage, highlighting knowledge transmitted through generations of artisan families.",
      },

      {
        year: "2015",
        title: "Marimba Heritage Recognised",
        text: "Marimba music, traditional chants and dances of Esmeraldas in Ecuador and Colombia's South Pacific region were jointly recognised by UNESCO as intangible cultural heritage.",
      },

      {
        year: "2021",
        title: "Pasillo Recognised",
        text: "UNESCO added Ecuadorian pasillo song and poetry to the Representative List of the Intangible Cultural Heritage of Humanity.",
      },

      {
        year: "Today",
        title: "Modern Ecuador",
        text: "Modern Ecuador brings together Andean, Amazonian, Pacific and Galápagos environments and many different cultural identities. Indigenous nations and Afro-Ecuadorian communities remain central to national life, while questions involving natural resources, biodiversity, inequality, political representation and environmental protection continue to shape the country.",
      },
    ],

    places: [
      {
        title: "Historic Centre of Quito",
        tag: "History & Architecture",

        image:
          "/images/continents/south-america/countries/ecuador/places/quito-historic-centre.jpg",

        description:
          "Quito's historic centre sits high in the Andes beneath the Pichincha volcano. Churches, monasteries, plazas and colonial buildings preserve the work of European, Indigenous and mestizo architects and artists. The famous Quito School developed a distinctive artistic tradition combining influences from different cultures. Quito was one of the first twelve properties inscribed on UNESCO's World Heritage List in 1978.",
      },

      {
        title: "Ingapirca",
        tag: "Inca & Cañari History",

        image:
          "/images/continents/south-america/countries/ecuador/places/ingapirca.jpg",

        description:
          "Ingapirca is Ecuador's best-known Inca archaeological complex and lies in a region historically associated with the Cañari people. Its buildings include carefully constructed stone walls and the distinctive elliptical structure known as the Temple of the Sun. The site provides an excellent example of how Inca expansion interacted with cultures that already existed in Ecuador.",
      },

      {
        title: "Galápagos Islands",
        tag: "Evolution & Wildlife",

        image:
          "/images/continents/south-america/countries/ecuador/places/galapagos-islands.jpg",

        description:
          "The Galápagos are a chain of volcanic islands isolated in the Pacific Ocean. Giant tortoises, marine iguanas, sea lions, penguins and distinctive birds evolved in environments separated from mainland South America. The islands became internationally important to the history of evolutionary science and today remain one of the world's most famous conservation areas.",
      },

      {
        title: "Yasuní",
        tag: "Amazon Rainforest",

        image:
          "/images/continents/south-america/countries/ecuador/places/yasuni.jpg",

        description:
          "Yasuní National Park lies in Ecuador's Amazon region and protects an extraordinary concentration of plants and animals. The wider region is also home to Indigenous peoples including Waorani communities and Indigenous groups living in voluntary isolation. Oil reserves beneath parts of the forest have made Yasuní a major focus of debate about Indigenous rights, conservation and natural-resource extraction.",
      },
    ],

    influentialFigures: [
      {
        name: "Manuela Sáenz",
        role: "Independence & Politics",

        image:
          "/images/continents/south-america/countries/ecuador/figures/manuela-saenz.jpg",

        description:
          "Manuela Sáenz was born in Quito and became an active participant in the South American independence movement. She gathered political intelligence, supported military campaigns and became closely associated with Simón Bolívar. In 1828 she helped Bolívar escape an assassination attempt, leading him to call her the 'Liberator of the Liberator'. Her political contribution was often overshadowed by discussion of their personal relationship, but she is now widely studied as an independence activist in her own right.",
      },

      {
        name: "Matilde Hidalgo",
        role: "Medicine & Women's Rights",

        image:
          "/images/continents/south-america/countries/ecuador/figures/matilde-hidalgo.jpg",

        description:
          "Matilde Hidalgo was a physician, poet and campaigner who challenged restrictions placed on women's education and political participation. She became the first woman in Ecuador to complete secondary school and one of the country's first female doctors. In 1924 she successfully registered to vote, helping establish Ecuador as an early Latin American country to recognise women's suffrage.",
      },

      {
        name: "Dolores Cacuango",
        role: "Indigenous Rights & Education",

        image:
          "/images/continents/south-america/countries/ecuador/figures/dolores-cacuango.jpg",

        description:
          "Dolores Cacuango was a Kichwa leader who campaigned for Indigenous land rights, workers and access to education. Born into a community living under the hacienda system, she became an influential organiser and helped establish the Ecuadorian Federation of Indians. She also supported pioneering bilingual schools where children could learn in both Kichwa and Spanish.",
      },

      {
        name: "Oswaldo Guayasamín",
        role: "Art",

        image:
          "/images/continents/south-america/countries/ecuador/figures/oswaldo-guayasamin.jpg",

        description:
          "Oswaldo Guayasamín was one of Ecuador's most internationally recognised artists. Born in Quito in 1919, he used painting and sculpture to explore poverty, racism, violence, Indigenous experience and human suffering. His distinctive portraits and expressive hands became central features of his work, and his Capilla del Hombre in Quito was conceived as a monument to the peoples of Latin America.",
      },
    ],

    culturalSpotlights: [
      {
        title: "Esmeraldas Marimba",

        image:
          "/images/continents/south-america/countries/ecuador/cultural-spotlight/esmeraldas-marimba.jpg",

        description:
          "In Ecuador's Esmeraldas province, Afro-Ecuadorian communities maintain musical traditions centred on wooden marimbas, drums, singing and dance. These traditions have deep African roots while developing in the distinctive cultural environment of the Pacific coast. Music accompanies celebrations and community events and is passed between generations through participation and performance.",
      },

      {
        title: "Toquilla Straw Hat Weaving",

        image:
          "/images/continents/south-america/countries/ecuador/cultural-spotlight/toquilla-straw-hat-weaving.jpg",

        description:
          "Toquilla hats are woven from fibres taken from a palm native to Ecuador's coast. Farmers prepare the plant fibres before skilled artisans weave the crown and brim by hand. Depending on its fineness, a single hat can take from a day to many months to produce. Although internationally nicknamed the 'Panama hat', the weaving tradition is Ecuadorian and is passed through generations of artisan families.",
      },

      {
        title: "Pasillo Music",

        image:
          "/images/continents/south-america/countries/ecuador/cultural-spotlight/pasillo-music.jpg",

        description:
          "Pasillo is an important Ecuadorian musical and poetic tradition. Songs are commonly performed with guitars and other stringed instruments and often explore love, memory, landscape, family and national identity. Different regional styles developed over time, and pasillo became deeply connected with Ecuadorian ideas of identity and belonging.",
      },

      {
        title: "Zápara Oral Heritage",

        image:
          "/images/continents/south-america/countries/ecuador/cultural-spotlight/zapara-oral-heritage.jpg",

        description:
          "The Zápara people live in the Amazon region spanning Ecuador and Peru. Their oral heritage contains detailed knowledge of rainforest plants, animals and medicinal practices alongside stories, rituals and spiritual traditions. The Zápara language is itself an important store of this knowledge. UNESCO recognition has highlighted both the richness of this heritage and the serious threats facing its continued transmission.",
      },
    ],

    facts: [
      "Ecuador takes its name from the equator, which passes through the country.",
      "Quito stands roughly 2,850 metres above sea level, making it one of the world's highest national capitals.",
      "Quito and the Galápagos Islands were among the first twelve properties inscribed on UNESCO's World Heritage List in 1978.",
      "The Galápagos Islands lie around 1,000 kilometres west of mainland Ecuador.",
      "The famous 'Panama hat' is traditionally made in Ecuador from toquilla palm fibres.",
      "Ecuador uses the United States dollar as its official currency.",
      "Archaeological evidence from Ecuador's upper Amazon has helped show that people were using cacao thousands of years ago.",
      "Ecuador contains Pacific coast, Andes, Amazon rainforest and the Galápagos Islands within one country.",
      "Ecuador's Constitution describes the country as intercultural and plurinational and recognises rights of nature.",
      "Esmeraldas is an important centre of Afro-Ecuadorian history and culture, including distinctive marimba music and dance traditions.",
    ],
  },
  {
    slug: "ecuador",
    name: "Ecuador",
    flag: "🇪🇨",

    capital: "Quito",
    population: "About 18 million",
    languages: ["Spanish", "Kichwa", "Shuar", "Other Indigenous languages"],
    currency: "United States Dollar (USD)",

    heroImage:
      "/images/continents/south-america/countries/ecuador/cotopaxi-and-andean-highlands.jpg",

    intro:
      "Ecuador may be one of South America's smaller countries, but it contains an extraordinary variety of landscapes and cultures. The Andes run through its centre, the Amazon stretches across the east, the Pacific coast lies to the west and the Galápagos Islands sit far offshore. Indigenous nations, Afro-Ecuadorian communities, Spanish colonial history and distinctive regional traditions all form important parts of modern Ecuador.",

    overview:
      "People have lived in the territory of modern Ecuador for thousands of years, developing societies along the Pacific coast, in the Andes and throughout the Amazon. Long-distance trade connected different environments, while cultures produced sophisticated ceramics, metalwork, textiles and agricultural systems. During the fifteenth century, the Inca expanded north into Ecuador, but their rule was relatively brief before Spanish conquest began in the 1530s. Colonial rule brought disease, forced labour, Christianity and major changes to Indigenous society, while enslaved Africans and their descendants created important communities, particularly around Esmeraldas. Ecuador became part of the independence struggles led by figures including Antonio José de Sucre and Simón Bolívar before becoming a separate republic in 1830. Since then, struggles over land, political power, Indigenous rights, labour and natural resources have repeatedly shaped the country. Modern Ecuador officially recognises itself as an intercultural and plurinational state and contains some of the most biologically diverse environments on Earth.",

    tags: [
      "Indigenous History",
      "Andes",
      "Amazon",
      "Galápagos",
      "Afro-Ecuadorian Heritage",
      "Inca",
      "Cacao",
      "Living Traditions",
    ],

    theme: {
      primary: "#4f7b67",
      secondary: "#35584e",
      accent: "#d4a343",
      background: "linear-gradient(180deg, #e9f0e5 0%, #dce7df 100%)",
      card: "rgba(255,255,255,0.90)",
      text: "#293c35",
      timeline: "#4f7b67",
    },

    factFile: {
      capital: {
        image:
          "/images/continents/south-america/countries/ecuador/fact-file/quito.jpg",

        title: "Quito",

        description:
          "Quito is Ecuador's capital and stands high in the Andes near the slopes of the Pichincha volcano. Indigenous settlements existed in the region before Inca and Spanish rule, while the Spanish established their colonial city in 1534. Quito's historic centre contains churches, monasteries, plazas and architecture where European and Indigenous artistic traditions interacted. In 1978, Quito became one of the first places inscribed on UNESCO's World Heritage List.",
      },

      history: {
        image:
          "/images/continents/south-america/countries/ecuador/fact-file/ingapirca.jpg",

        title: "Ingapirca",

        description:
          "Ingapirca is the best-known Inca archaeological complex in Ecuador. The site was constructed in a region associated with the Cañari people after Inca expansion into the northern Andes. Its buildings demonstrate both Inca influence and interaction with existing local traditions. The distinctive elliptical structure usually called the Temple of the Sun was built from carefully shaped stone fitted together without mortar.",
      },

      food: {
        image:
          "/images/continents/south-america/countries/ecuador/fact-file/cacao.jpg",

        title: "Cacao",

        description:
          "Cacao has an exceptionally long history in Ecuador. Archaeological evidence from the upper Amazon region shows that people were using and cultivating cacao thousands of years ago. Ecuador later became an important exporter of cacao, particularly during the nineteenth and early twentieth centuries. Fine-aroma cacao remains one of the country's internationally recognised agricultural products.",
      },

      wildlife: {
        image:
          "/images/continents/south-america/countries/ecuador/fact-file/galapagos-islands.jpg",

        title: "Galápagos Islands",

        description:
          "The Galápagos are a volcanic archipelago around 1,000 kilometres from mainland Ecuador. Their isolation allowed unusual animals and plants to evolve, including giant tortoises, marine iguanas, flightless cormorants and many distinctive finches. Observations made by Charles Darwin after visiting the islands in 1835 later contributed to the development of his ideas about evolution by natural selection.",
      },

      culture: {
        image:
          "/images/continents/south-america/countries/ecuador/fact-file/toquilla-straw-hat.jpg",

        title: "Toquilla Straw Hat",

        description:
          "The famous finely woven hat often called a 'Panama hat' actually has deep roots in Ecuador. Artisans weave the hats from fibres of the toquilla palm, particularly in coastal and Andean communities. The finest hats can take months to complete. UNESCO recognises the traditional knowledge and skills involved in Ecuadorian toquilla straw hat weaving as intangible cultural heritage.",
      },
    },

    timeline: [
      {
        year: "Thousands of years ago",
        title: "The First Ecuadorians",
        text: "People lived in what is now Ecuador thousands of years before European arrival. Communities developed along the Pacific coast, throughout the Andes and within the Amazon rainforest.",
      },

      {
        year: "c. 3500–1500 BCE",
        title: "Valdivia Culture",
        text: "Communities associated with the Valdivia culture lived along Ecuador's Pacific coast. They produced some of the earliest widely known pottery traditions in the Americas and depended on farming, fishing and gathering.",
      },

      {
        year: "More than 5,000 years ago",
        title: "Ancient Cacao",
        text: "Archaeological evidence from southeastern Ecuador indicates that people of the upper Amazon were using cacao thousands of years ago. This has helped reshape understanding of the early history of the plant that eventually became the basis of chocolate.",
      },

      {
        year: "c. 500 BCE–500 CE",
        title: "Regional Cultures Flourish",
        text: "Different societies developed across Ecuador's coast and highlands. Skilled craftspeople produced ceramics, textiles and metalwork, while trade networks connected communities living in very different environments.",
      },

      {
        year: "c. 500–1500 CE",
        title: "Complex Regional Societies",
        text: "Before Inca expansion, Ecuador contained numerous politically independent societies including the Cañari, Caranqui, Quitu, Manteño and others. Coastal communities participated in long-distance maritime trade while Andean societies developed intensive agriculture.",
      },

      {
        year: "1400s",
        title: "Inca Expansion North",
        text: "Inca armies expanded north from Peru into the territory of modern Ecuador. Conquest was not immediate, and some Indigenous societies resisted Inca control for years.",
      },

      {
        periodKey: "ecuador-inca-canari",
        year: "Late 1400s",
        title: "🔍 Your Investigation: Inca & Cañari",
        text: "The Inca incorporated Cañari territories into Tawantinsuyu, but existing communities and traditions did not simply disappear.",
        isGap: true,
        prompt:
          "Investigate the relationship between the Inca and Cañari and use Ingapirca to explore how cultures can influence one another.",
        questions: [
          "Who were the Cañari?",
          "How did the Inca expand into Ecuador?",
          "What can Ingapirca tell us about both cultures?",
        ],
      },

      {
        year: "Early 1500s",
        title: "An Inca Civil War",
        text: "Following the death of the Inca ruler Huayna Capac, a struggle developed between his sons Huáscar and Atahualpa. Atahualpa's power base was closely connected with the northern Andes, including the region around Quito.",
      },

      {
        year: "1532",
        title: "Atahualpa Captured",
        text: "Atahualpa defeated Huáscar but was captured shortly afterwards by Spanish forces led by Francisco Pizarro at Cajamarca in present-day Peru. His capture severely disrupted Inca political authority.",
      },

      {
        year: "1533",
        title: "Atahualpa is Executed",
        text: "Despite providing a huge ransom of precious metals, Atahualpa was executed by the Spanish. Spanish forces and their Indigenous allies subsequently expanded their control through the Andes.",
      },

      {
        year: "1534",
        title: "Spanish Quito",
        text: "Spanish forces established the colonial city of San Francisco de Quito. It became an important centre of Spanish government and Christianity in the northern Andes.",
      },

      {
        year: "1500s",
        title: "Disease and Colonial Rule",
        text: "Epidemics of diseases introduced from Europe caused catastrophic population losses among Indigenous peoples. Spanish authorities imposed new systems of government, taxation, religion and labour.",
      },

      {
        year: "1500s–1700s",
        title: "Indigenous Labour",
        text: "Colonial systems required many Indigenous people to provide labour and tribute. Textile workshops known as obrajes became particularly important in the highlands, where workers often experienced harsh conditions.",
      },

      {
        year: "1500s",
        title: "Africans Reach Ecuador",
        text: "Enslaved Africans were brought into Spanish-controlled territories. In the Esmeraldas region, Africans who escaped slavery and their descendants established communities that developed a distinctive Afro-Ecuadorian culture.",
      },

      {
        year: "1550s onwards",
        title: "Afro-Ecuadorian Esmeraldas",
        text: "African-descended communities gained significant autonomy in parts of the northwestern coastal region. Over generations, African, Indigenous and European influences contributed to distinctive cultures including musical traditions centred on the marimba.",
      },

      {
        year: "1563",
        title: "Royal Audience of Quito",
        text: "The Spanish Crown created the Real Audiencia de Quito. Its territory was governed within the wider structures of Spain's American empire and Quito became an important administrative and cultural centre.",
      },

      {
        year: "1600s–1700s",
        title: "The Quito School of Art",
        text: "Artists in colonial Quito developed a distinctive tradition of painting, sculpture and religious art. Indigenous and mestizo artists combined European artistic forms with local techniques, materials and imagery.",
      },

      {
        year: "1736",
        title: "Measuring the Equator",
        text: "A French-led scientific expedition arrived in the region to measure part of the Earth's meridian near the equator. The work contributed to scientific understanding of the Earth's shape.",
      },

      {
        year: "1809",
        title: "Quito Challenges Spanish Rule",
        text: "Political leaders in Quito formed a governing junta during the crisis of the Spanish monarchy. Spanish royalist forces later restored control, but the events became an important part of Ecuador's independence story.",
      },

      {
        year: "1810",
        title: "Repression in Quito",
        text: "A number of independence supporters imprisoned after the 1809 uprising were killed during violence in Quito. Independence movements nevertheless continued to develop.",
      },

      {
        year: "1820",
        title: "Guayaquil Declares Independence",
        text: "Guayaquil declared independence from Spanish rule on 9 October 1820. The city became an important base for military campaigns aimed at liberating the rest of the territory.",
      },

      {
        periodKey: "ecuador-pichincha",
        year: "1822",
        title: "🔍 Your Investigation: Battle of Pichincha",
        text: "Independence forces led by Antonio José de Sucre defeated Spanish royalist troops on the slopes of Pichincha volcano above Quito on 24 May 1822.",
        isGap: true,
        prompt:
          "Investigate the Battle of Pichincha and why a battle fought on a volcano helped secure Ecuador's independence.",
        questions: [
          "Who was Antonio José de Sucre?",
          "Why was Quito strategically important?",
          "What happened to Ecuador after the victory?",
        ],
      },

      {
        year: "1822",
        title: "Ecuador Joins Gran Colombia",
        text: "Following independence from Spain, the territory became part of Gran Colombia, the republic that also included modern Colombia, Venezuela and Panama.",
      },

      {
        year: "1822",
        title: "Manuela Sáenz",
        text: "Quito-born Manuela Sáenz became deeply involved in the South American independence movement. She worked as a political activist and intelligence operative and became closely associated with Simón Bolívar.",
      },

      {
        year: "1830",
        title: "The Republic of Ecuador",
        text: "Gran Colombia broke apart and Ecuador became a separate republic. Quito became its capital.",
      },

      {
        year: "1832",
        title: "Galápagos Becomes Part of Ecuador",
        text: "Ecuador formally took possession of the Galápagos Islands. The remote archipelago had previously been visited by sailors, whalers and pirates.",
      },

      {
        year: "1835",
        title: "Charles Darwin Visits Galápagos",
        text: "Charles Darwin visited the Galápagos during the voyage of HMS Beagle. His observations of differences between animals on different islands later contributed to his thinking about evolution.",
      },

      {
        year: "1840s–1920s",
        title: "The Cacao Economy",
        text: "Ecuador became an important producer and exporter of cacao. Wealth from cacao helped transform Guayaquil and the coastal economy, although plantation labourers often received little of the wealth generated by exports.",
      },

      {
        year: "1851",
        title: "Slavery is Abolished",
        text: "Ecuador abolished slavery under President José María Urbina. Afro-Ecuadorians nevertheless continued to experience discrimination, poverty and unequal access to land and political power.",
      },

      {
        year: "1895",
        title: "The Liberal Revolution",
        text: "A political movement led by Eloy Alfaro took power and introduced major reforms intended to reduce the influence of the Catholic Church over the state and expand secular public institutions.",
      },

      {
        year: "1908",
        title: "Railway Across the Andes",
        text: "The railway connecting Guayaquil with Quito was completed. Crossing steep Andean terrain was an enormous engineering challenge and helped strengthen connections between Ecuador's coast and highlands.",
      },

      {
        year: "1920s",
        title: "Indigenous and Workers' Movements",
        text: "Workers and Indigenous communities increasingly organised around wages, land and working conditions. These movements became important forces in Ecuadorian politics during the twentieth century.",
      },

      {
        year: "1924",
        title: "Matilde Hidalgo Votes",
        text: "Physician and campaigner Matilde Hidalgo became the first woman known to vote in a national election in Ecuador and one of the first women to vote in Latin America. Her challenge helped establish women's voting rights in the country.",
      },

      {
        year: "1930s–1960s",
        title: "Dolores Cacuango",
        text: "Kichwa leader Dolores Cacuango became a major campaigner for Indigenous land rights, workers and education. She helped organise Indigenous communities and supported the creation of schools teaching in both Kichwa and Spanish.",
      },

      {
        year: "1941",
        title: "War with Peru",
        text: "Long-running territorial disagreements between Ecuador and Peru contributed to armed conflict in 1941. Border disputes continued for decades afterwards.",
      },

      {
        year: "1942",
        title: "Rio Protocol",
        text: "Ecuador, Peru and international guarantor countries signed the Rio Protocol in an attempt to settle the territorial dispute. Disagreement over parts of the border nevertheless continued.",
      },

      {
        year: "1964",
        title: "Agrarian Reform",
        text: "Land reform attempted to change systems of large estates and dependent agricultural labour. Indigenous organisations continued campaigning for stronger land rights and political representation.",
      },

      {
        year: "1972–1979",
        title: "Military Government and Oil",
        text: "Military governments ruled Ecuador during much of the 1970s as large-scale petroleum exports transformed the national economy. Oil brought major state revenue but also increased environmental and social pressures in the Amazon.",
      },

      {
        year: "1978",
        title: "Quito & Galápagos Recognised",
        text: "Quito and the Galápagos Islands were included among the first twelve properties placed on UNESCO's new World Heritage List.",
      },

      {
        year: "1979",
        title: "Democracy Returns",
        text: "A new constitution came into force and civilian government returned after years of military rule.",
      },

      {
        year: "1986",
        title: "CONAIE is Founded",
        text: "Indigenous organisations came together to establish the Confederation of Indigenous Nationalities of Ecuador, known as CONAIE. It became one of the country's most influential Indigenous political and social organisations.",
      },

      {
        periodKey: "ecuador-indigenous-uprising",
        year: "1990",
        title: "🔍 Your Investigation: Indigenous Uprising",
        text: "Indigenous communities organised a major national mobilisation demanding land rights, recognition of Indigenous nations, bilingual education and political change.",
        isGap: true,
        prompt:
          "Investigate Ecuador's 1990 Indigenous uprising and how Indigenous organisations changed national politics.",
        questions: [
          "What is CONAIE?",
          "What were Indigenous communities demanding?",
          "Why was the uprising important for Ecuador's national identity?",
        ],
      },

      {
        year: "1995",
        title: "Cenepa War",
        text: "Ecuador and Peru fought a short conflict in the disputed Cenepa Valley. The fighting demonstrated that their long-running border disagreement had still not been fully resolved.",
      },

      {
        year: "1998",
        title: "Peace with Peru",
        text: "Ecuador and Peru signed agreements that formally settled their remaining border dispute, ending a territorial disagreement that had affected relations for generations.",
      },

      {
        year: "2000",
        title: "Ecuador Adopts the US Dollar",
        text: "Following a severe economic and banking crisis, Ecuador replaced the sucre with the United States dollar as its official currency.",
      },

      {
        year: "2008",
        title: "A New Constitution",
        text: "Ecuador adopted a new constitution describing the country as intercultural and plurinational. It expanded recognition of Indigenous peoples and became internationally notable for recognising constitutional rights of nature.",
      },

      {
        year: "2008",
        title: "Zápara Heritage Recognised",
        text: "UNESCO inscribed the oral heritage and cultural manifestations of the Zápara people of Ecuador and Peru on the Representative List of the Intangible Cultural Heritage of Humanity.",
      },

      {
        year: "2012",
        title: "Toquilla Weaving Recognised",
        text: "UNESCO recognised the traditional weaving of the Ecuadorian toquilla straw hat as intangible cultural heritage, highlighting knowledge transmitted through generations of artisan families.",
      },

      {
        year: "2015",
        title: "Marimba Heritage Recognised",
        text: "Marimba music, traditional chants and dances of Esmeraldas in Ecuador and Colombia's South Pacific region were jointly recognised by UNESCO as intangible cultural heritage.",
      },

      {
        year: "2021",
        title: "Pasillo Recognised",
        text: "UNESCO added Ecuadorian pasillo song and poetry to the Representative List of the Intangible Cultural Heritage of Humanity.",
      },

      {
        year: "Today",
        title: "Modern Ecuador",
        text: "Modern Ecuador brings together Andean, Amazonian, Pacific and Galápagos environments and many different cultural identities. Indigenous nations and Afro-Ecuadorian communities remain central to national life, while questions involving natural resources, biodiversity, inequality, political representation and environmental protection continue to shape the country.",
      },
    ],

    places: [
      {
        title: "Historic Centre of Quito",
        tag: "History & Architecture",

        image:
          "/images/continents/south-america/countries/ecuador/places/quito-historic-centre.jpg",

        description:
          "Quito's historic centre sits high in the Andes beneath the Pichincha volcano. Churches, monasteries, plazas and colonial buildings preserve the work of European, Indigenous and mestizo architects and artists. The famous Quito School developed a distinctive artistic tradition combining influences from different cultures. Quito was one of the first twelve properties inscribed on UNESCO's World Heritage List in 1978.",
      },

      {
        title: "Ingapirca",
        tag: "Inca & Cañari History",

        image:
          "/images/continents/south-america/countries/ecuador/places/ingapirca.jpg",

        description:
          "Ingapirca is Ecuador's best-known Inca archaeological complex and lies in a region historically associated with the Cañari people. Its buildings include carefully constructed stone walls and the distinctive elliptical structure known as the Temple of the Sun. The site provides an excellent example of how Inca expansion interacted with cultures that already existed in Ecuador.",
      },

      {
        title: "Galápagos Islands",
        tag: "Evolution & Wildlife",

        image:
          "/images/continents/south-america/countries/ecuador/places/galapagos-islands.jpg",

        description:
          "The Galápagos are a chain of volcanic islands isolated in the Pacific Ocean. Giant tortoises, marine iguanas, sea lions, penguins and distinctive birds evolved in environments separated from mainland South America. The islands became internationally important to the history of evolutionary science and today remain one of the world's most famous conservation areas.",
      },

      {
        title: "Yasuní",
        tag: "Amazon Rainforest",

        image:
          "/images/continents/south-america/countries/ecuador/places/yasuni.jpg",

        description:
          "Yasuní National Park lies in Ecuador's Amazon region and protects an extraordinary concentration of plants and animals. The wider region is also home to Indigenous peoples including Waorani communities and Indigenous groups living in voluntary isolation. Oil reserves beneath parts of the forest have made Yasuní a major focus of debate about Indigenous rights, conservation and natural-resource extraction.",
      },
    ],

    influentialFigures: [
      {
        name: "Manuela Sáenz",
        role: "Independence & Politics",

        image:
          "/images/continents/south-america/countries/ecuador/figures/manuela-saenz.jpg",

        description:
          "Manuela Sáenz was born in Quito and became an active participant in the South American independence movement. She gathered political intelligence, supported military campaigns and became closely associated with Simón Bolívar. In 1828 she helped Bolívar escape an assassination attempt, leading him to call her the 'Liberator of the Liberator'. Her political contribution was often overshadowed by discussion of their personal relationship, but she is now widely studied as an independence activist in her own right.",
      },

      {
        name: "Matilde Hidalgo",
        role: "Medicine & Women's Rights",

        image:
          "/images/continents/south-america/countries/ecuador/figures/matilde-hidalgo.jpg",

        description:
          "Matilde Hidalgo was a physician, poet and campaigner who challenged restrictions placed on women's education and political participation. She became the first woman in Ecuador to complete secondary school and one of the country's first female doctors. In 1924 she successfully registered to vote, helping establish Ecuador as an early Latin American country to recognise women's suffrage.",
      },

      {
        name: "Dolores Cacuango",
        role: "Indigenous Rights & Education",

        image:
          "/images/continents/south-america/countries/ecuador/figures/dolores-cacuango.jpg",

        description:
          "Dolores Cacuango was a Kichwa leader who campaigned for Indigenous land rights, workers and access to education. Born into a community living under the hacienda system, she became an influential organiser and helped establish the Ecuadorian Federation of Indians. She also supported pioneering bilingual schools where children could learn in both Kichwa and Spanish.",
      },

      {
        name: "Oswaldo Guayasamín",
        role: "Art",

        image:
          "/images/continents/south-america/countries/ecuador/figures/oswaldo-guayasamin.jpg",

        description:
          "Oswaldo Guayasamín was one of Ecuador's most internationally recognised artists. Born in Quito in 1919, he used painting and sculpture to explore poverty, racism, violence, Indigenous experience and human suffering. His distinctive portraits and expressive hands became central features of his work, and his Capilla del Hombre in Quito was conceived as a monument to the peoples of Latin America.",
      },
    ],

    culturalSpotlights: [
      {
        title: "Esmeraldas Marimba",

        image:
          "/images/continents/south-america/countries/ecuador/cultural-spotlight/esmeraldas-marimba.jpg",

        description:
          "In Ecuador's Esmeraldas province, Afro-Ecuadorian communities maintain musical traditions centred on wooden marimbas, drums, singing and dance. These traditions have deep African roots while developing in the distinctive cultural environment of the Pacific coast. Music accompanies celebrations and community events and is passed between generations through participation and performance.",
      },

      {
        title: "Toquilla Straw Hat Weaving",

        image:
          "/images/continents/south-america/countries/ecuador/cultural-spotlight/toquilla-straw-hat-weaving.jpg",

        description:
          "Toquilla hats are woven from fibres taken from a palm native to Ecuador's coast. Farmers prepare the plant fibres before skilled artisans weave the crown and brim by hand. Depending on its fineness, a single hat can take from a day to many months to produce. Although internationally nicknamed the 'Panama hat', the weaving tradition is Ecuadorian and is passed through generations of artisan families.",
      },

      {
        title: "Pasillo Music",

        image:
          "/images/continents/south-america/countries/ecuador/cultural-spotlight/pasillo-music.jpg",

        description:
          "Pasillo is an important Ecuadorian musical and poetic tradition. Songs are commonly performed with guitars and other stringed instruments and often explore love, memory, landscape, family and national identity. Different regional styles developed over time, and pasillo became deeply connected with Ecuadorian ideas of identity and belonging.",
      },

      {
        title: "Zápara Oral Heritage",

        image:
          "/images/continents/south-america/countries/ecuador/cultural-spotlight/zapara-oral-heritage.jpg",

        description:
          "The Zápara people live in the Amazon region spanning Ecuador and Peru. Their oral heritage contains detailed knowledge of rainforest plants, animals and medicinal practices alongside stories, rituals and spiritual traditions. The Zápara language is itself an important store of this knowledge. UNESCO recognition has highlighted both the richness of this heritage and the serious threats facing its continued transmission.",
      },
    ],

    facts: [
      "Ecuador takes its name from the equator, which passes through the country.",
      "Quito stands roughly 2,850 metres above sea level, making it one of the world's highest national capitals.",
      "Quito and the Galápagos Islands were among the first twelve properties inscribed on UNESCO's World Heritage List in 1978.",
      "The Galápagos Islands lie around 1,000 kilometres west of mainland Ecuador.",
      "The famous 'Panama hat' is traditionally made in Ecuador from toquilla palm fibres.",
      "Ecuador uses the United States dollar as its official currency.",
      "Archaeological evidence from Ecuador's upper Amazon has helped show that people were using cacao thousands of years ago.",
      "Ecuador contains Pacific coast, Andes, Amazon rainforest and the Galápagos Islands within one country.",
      "Ecuador's Constitution describes the country as intercultural and plurinational and recognises rights of nature.",
      "Esmeraldas is an important centre of Afro-Ecuadorian history and culture, including distinctive marimba music and dance traditions.",
    ],
  },
  {
    slug: "guyana",
    name: "Guyana",
    flag: "🇬🇾",

    capital: "Georgetown",
    population: "About 800,000",
    languages: ["English", "Guyanese Creole", "Indigenous languages"],
    currency: "Guyanese Dollar (GYD)",

    heroImage:
      "/images/continents/south-america/countries/guyana/kaieteur-falls-rainforest.jpg",

    intro:
      "Guyana lies on South America's northern Atlantic coast but has especially strong historical and cultural connections with the Caribbean. It is the only sovereign country in South America where English is the official language. Much of Guyana is covered by rainforest, rivers and savannah, while its population reflects Indigenous, African, Indian, European, Chinese and Portuguese histories.",

    overview:
      "The lands now called Guyana have been home to Indigenous peoples for thousands of years. Communities including Lokono, Kalinago, Wapichan, Makushi, Patamona, Wai Wai and others developed societies connected to the rivers, forests, savannahs and coast. European colonisation began with Dutch settlements and plantation colonies before Britain gained lasting control in the early nineteenth century. Enslaved Africans were forced to work on plantations, but resistance was constant and included the major Berbice uprising led by Cuffy in 1763 and the Demerara rebellion of 1823. After emancipation, colonial plantation owners brought large numbers of indentured workers from India, as well as migrants from other parts of the world. Guyana became independent in 1966 and a republic in 1970. Modern Guyana combines South American geography with powerful Caribbean cultural connections, while its enormous forests and more recent development of offshore oil have placed questions about natural resources and the environment at the centre of its future.",

    tags: [
      "Indigenous History",
      "Caribbean Connections",
      "Slavery & Resistance",
      "Indenture",
      "Rainforest",
      "Independence",
      "Cultural Diversity",
      "Rivers & Savannah",
    ],

    theme: {
      primary: "#39705a",
      secondary: "#244c43",
      accent: "#d1a348",
      background: "linear-gradient(180deg, #e3eee7 0%, #d5e4dd 100%)",
      card: "rgba(255,255,255,0.90)",
      text: "#263b35",
      timeline: "#39705a",
    },

    factFile: {
      capital: {
        image:
          "/images/continents/south-america/countries/guyana/fact-file/georgetown.jpg",

        title: "Georgetown",

        description:
          "Georgetown is Guyana's capital and largest city, standing on the low Atlantic coastal plain beside the Demerara River. Much of the city lies close to or below high-tide level, so canals, sluices and sea defences are essential to controlling water. Its urban landscape reflects Dutch approaches to drainage alongside later British colonial architecture, including distinctive wooden buildings.",
      },

      history: {
        image:
          "/images/continents/south-america/countries/guyana/fact-file/dutch-british-guiana.jpg",

        title: "Dutch & British Guiana",

        description:
          "Before becoming an independent country, the region passed through different periods of European colonial rule. Dutch colonies developed along rivers including the Essequibo, Berbice and Demerara before Britain gained lasting control. In 1831 the colonies were combined as British Guiana. Plantation agriculture created enormous wealth for colonial owners but depended first on enslaved African labour and later heavily on indentured workers.",
      },

      food: {
        image:
          "/images/continents/south-america/countries/guyana/fact-file/pepperpot-cassareep.jpg",

        title: "Pepperpot & Cassareep",

        description:
          "Pepperpot is one of Guyana's best-known dishes and has Indigenous roots. Meat is slowly cooked with spices and cassareep, a dark liquid traditionally produced from processed bitter cassava. Cassava has been cultivated by Indigenous peoples of the Guianas for generations, and the techniques needed to safely process bitter cassava demonstrate detailed knowledge passed between generations.",
      },

      wildlife: {
        image:
          "/images/continents/south-america/countries/guyana/fact-file/rupununi.jpg",

        title: "The Rupununi",

        description:
          "The Rupununi region of southern Guyana contains enormous savannahs, wetlands, forests and rivers. Wildlife includes giant anteaters, giant river otters, black caimans, jaguars and hundreds of bird species. Indigenous communities including Makushi and Wapichan peoples have longstanding relationships with these landscapes and continue to play important roles in conservation.",
      },

      culture: {
        image:
          "/images/continents/south-america/countries/guyana/fact-file/guyanese-masquerade.jpg",

        title: "Guyanese Masquerade",

        description:
          "Guyanese masquerade is a performance tradition with strong Afro-Guyanese roots. Groups combine drumming, dancing, costumes, characters and street performance, particularly around the Christmas season. Characters and performance styles developed through the experiences of Africans and their descendants during and after slavery, making masquerade an important expression of cultural memory as well as celebration.",
      },
    },

    timeline: [
      {
        year: "Thousands of years ago",
        title: "Indigenous Guyana",
        text: "Indigenous peoples lived across the forests, rivers, coast and savannahs of the Guiana region for thousands of years before European colonisation. Communities developed extensive knowledge of plants, animals, waterways and different environments.",
      },

      {
        year: "Before European colonisation",
        title: "Many Indigenous Nations",
        text: "The region was home to different Indigenous peoples with their own languages and traditions. Indigenous nations living in modern Guyana include Lokono, Kalinago, Warao, Patamona, Makushi, Wapichan, Wai Wai, Akawaio and Arekuna communities.",
      },

      {
        year: "Ancient Guyana",
        title: "Cassava Knowledge",
        text: "Cassava became a crucial food across the Guianas. Indigenous communities developed sophisticated methods for processing bitter cassava, which naturally contains substances that must be removed before it can be safely eaten.",
      },

      {
        year: "1499",
        title: "European Exploration",
        text: "Spanish navigator Alonso de Ojeda explored parts of the Guiana coastline. Spain claimed large areas but established relatively little permanent control in the region that became Guyana.",
      },

      {
        year: "1600s",
        title: "Dutch Colonies Develop",
        text: "Dutch traders and colonists established settlements and plantations along major rivers. Colonies developed around Essequibo, Berbice and later Demerara.",
      },

      {
        year: "1600s–1700s",
        title: "Plantation Economy",
        text: "Dutch colonists expanded plantations producing crops including sugar and coffee. Enslaved Africans were forcibly transported across the Atlantic and made to perform much of the plantation labour.",
      },

      {
        year: "1600s–1700s",
        title: "Indigenous-European Trade",
        text: "Relationships between Indigenous communities and European colonists varied between trade, alliance, negotiation and conflict. Indigenous knowledge of rivers and the interior was extremely important to Europeans attempting to operate in the region.",
      },

      {
        periodKey: "guyana-berbice-rebellion",
        year: "1763",
        title: "🔍 Your Investigation: The Berbice Rebellion",
        text: "Enslaved Africans in the Dutch colony of Berbice launched a major rebellion. Led by figures including Cuffy, the uprising threatened colonial control for many months.",
        isGap: true,
        prompt:
          "Investigate the Berbice rebellion and why Cuffy became one of Guyana's most important national figures.",
        questions: [
          "What conditions did enslaved people face on the plantations?",
          "Who was Cuffy?",
          "How close did the rebellion come to taking control of Berbice?",
        ],
      },

      {
        year: "1763–1764",
        title: "Cuffy and the Rebels",
        text: "Thousands of enslaved Africans joined the Berbice uprising. Rebel forces captured plantations and controlled large areas before divisions within the rebellion and reinforcements for the Dutch helped colonial forces regain control.",
      },

      {
        year: "1781–1814",
        title: "Colonial Control Changes",
        text: "The colonies changed hands several times during conflicts involving European powers. British forces increasingly took control of the Dutch colonies during the revolutionary and Napoleonic wars.",
      },

      {
        year: "1814",
        title: "British Control Confirmed",
        text: "The Netherlands formally transferred Essequibo, Demerara and Berbice to Britain. British colonial rule then shaped the region for more than 150 years.",
      },

      {
        periodKey: "guyana-demerara-rebellion",
        year: "1823",
        title: "🔍 Your Investigation: The Demerara Rebellion",
        text: "Thousands of enslaved people on plantations in Demerara joined a major uprising. Quamina, an enslaved man and Christian deacon, became one of its best-known leaders.",
        isGap: true,
        prompt:
          "Investigate the Demerara rebellion and how it affected the wider campaign against slavery in the British Empire.",
        questions: [
          "Who was Quamina?",
          "What were the rebels demanding?",
          "How did British abolitionists respond to news of the rebellion?",
        ],
      },

      {
        year: "1823",
        title: "Quamina",
        text: "Quamina attempted to organise resistance while urging that widespread killing be avoided. Colonial forces violently suppressed the rebellion. Quamina was killed and many other participants were executed.",
      },

      {
        year: "1831",
        title: "British Guiana",
        text: "Britain combined the colonies of Demerara-Essequibo and Berbice to form British Guiana. Georgetown, then developing from the earlier settlement of Stabroek, became its capital.",
      },

      {
        year: "1834",
        title: "Slavery is Legally Abolished",
        text: "Slavery was abolished across most of the British Empire. Formerly enslaved people initially entered an apprenticeship system that continued to restrict their freedom.",
      },

      {
        year: "1838",
        title: "Full Emancipation",
        text: "The apprenticeship system ended. Many Afro-Guyanese people left plantation labour and established independent villages, sometimes purchasing former plantation land collectively.",
      },

      {
        year: "1838",
        title: "Indian Indentured Workers Arrive",
        text: "The first indentured workers from India arrived in British Guiana. Plantation owners increasingly used indentured labour after emancipation to maintain the sugar industry.",
      },

      {
        periodKey: "guyana-indenture",
        year: "1838–1917",
        title: "🔍 Your Investigation: Indian Indenture",
        text: "Hundreds of thousands of people travelled from India to British Guiana under contracts of indenture. Their descendants became a major part of Guyanese society.",
        isGap: true,
        prompt:
          "Investigate the indenture system and compare it carefully with slavery.",
        questions: [
          "Why did plantation owners recruit workers from India after emancipation?",
          "What did an indenture contract require?",
          "Which parts of modern Guyanese culture reflect Indo-Guyanese heritage?",
        ],
      },

      {
        year: "1800s",
        title: "A Diverse Colony",
        text: "Alongside African and Indian communities, migrants arrived from places including Madeira, China and other Caribbean territories. Guyana developed into an exceptionally diverse society with different religions, languages, foods and cultural traditions.",
      },

      {
        year: "1840s onwards",
        title: "The Village Movement",
        text: "Formerly enslaved Afro-Guyanese families pooled resources to purchase plantation land and establish independent villages. The movement created communities outside direct plantation control and became an important part of post-emancipation society.",
      },

      {
        year: "1860s–1900s",
        title: "Georgetown Expands",
        text: "Georgetown developed into the colony's administrative and commercial centre. Canals, wooden buildings, markets, churches and government institutions shaped a city adapted to its extremely low-lying coastal environment.",
      },

      {
        year: "1889",
        title: "Georgetown City Hall",
        text: "Georgetown's wooden City Hall was completed in the late nineteenth century. Its elaborate Gothic Revival design became one of the capital's most distinctive historic buildings.",
      },

      {
        year: "1917",
        title: "Indian Indenture Ends",
        text: "The system of Indian indentured migration was formally ended. Indo-Guyanese communities were by then permanently established and became central to the country's agriculture, politics, religion, food and culture.",
      },

      {
        year: "1928",
        title: "A New Colonial Constitution",
        text: "Britain introduced a new constitution that increased direct colonial control over British Guiana. Demands for political representation and workers' rights continued to grow.",
      },

      {
        year: "1930s–1940s",
        title: "Workers Organise",
        text: "Trade unions and political organisations grew as sugar workers, dock workers and other labourers demanded improved wages, conditions and political rights.",
      },

      {
        year: "1948",
        title: "Enmore Martyrs",
        text: "Police fired on striking sugar workers at Enmore, killing five men. Their deaths became an important symbol of Guyana's labour movement and the struggle for political change.",
      },

      {
        year: "1950",
        title: "People's Progressive Party",
        text: "Cheddi Jagan, Janet Jagan, Forbes Burnham and others helped establish the People's Progressive Party, which campaigned for workers' interests, greater self-government and independence.",
      },

      {
        year: "1953",
        title: "Elections and British Intervention",
        text: "The People's Progressive Party won elections held under a new constitution. Britain suspended the constitution only months later and sent troops, citing concerns about the government's political direction during the Cold War.",
      },

      {
        year: "1950s–1960s",
        title: "Political Division",
        text: "Political rivalry increasingly developed between movements associated with Cheddi Jagan and Forbes Burnham. Political competition became intertwined with ethnic tensions between sections of the Indo-Guyanese and Afro-Guyanese populations.",
      },

      {
        year: "1962–1964",
        title: "Violence and Unrest",
        text: "Strikes, political demonstrations and communal violence caused deaths and displacement during the final years before independence. Cold War politics also influenced international involvement in British Guiana.",
      },

      {
        periodKey: "guyana-independence",
        year: "1966",
        title: "🔍 Your Investigation: Guyanese Independence",
        text: "British Guiana became the independent country of Guyana on 26 May 1966.",
        isGap: true,
        prompt:
          "Investigate Guyana's journey to independence and the political leaders who shaped the new country.",
        questions: [
          "Who were Cheddi Jagan and Forbes Burnham?",
          "Why was British Guiana important during the Cold War?",
          "What changed when Guyana became independent?",
        ],
      },

      {
        year: "1966",
        title: "Guyana Becomes Independent",
        text: "Guyana became an independent state within the Commonwealth with Forbes Burnham as prime minister. The new country's name came from an Indigenous term commonly interpreted as referring to a land of many waters.",
      },

      {
        year: "1970",
        title: "The Co-operative Republic",
        text: "Guyana became a republic and adopted the official name Co-operative Republic of Guyana. Arthur Chung became the country's first president.",
      },

      {
        year: "1970s",
        title: "State Control of the Economy",
        text: "The government expanded state ownership across major parts of the economy, including the sugar and bauxite industries. Burnham's government promoted a programme described as cooperative socialism.",
      },

      {
        year: "1978",
        title: "Jonestown",
        text: "More than 900 members of the US-based Peoples Temple movement and others died at the remote Jonestown settlement in northwestern Guyana. Although the community was established by an American religious movement, the tragedy made the name Guyana internationally known for reasons largely unrelated to Guyanese society itself.",
      },

      {
        year: "1980",
        title: "Walter Rodney is Killed",
        text: "Historian and political activist Walter Rodney was killed by an explosive device in Georgetown. Rodney had become a prominent critic of the government and remains one of Guyana's most internationally influential intellectual figures.",
      },

      {
        year: "1985",
        title: "Desmond Hoyte Becomes President",
        text: "Desmond Hoyte became president following the death of Forbes Burnham. His government gradually moved away from some earlier state-controlled economic policies.",
      },

      {
        year: "1992",
        title: "Cheddi Jagan Elected President",
        text: "Cheddi Jagan became president after elections observed internationally as part of Guyana's return to more competitive electoral politics.",
      },

      {
        year: "2000s",
        title: "Forest Conservation",
        text: "Guyana became increasingly involved in international programmes exploring how protecting forests could support both climate goals and economic development. Most of the country's territory remains forested.",
      },

      {
        year: "2015",
        title: "Major Offshore Oil Discovery",
        text: "A major petroleum discovery was announced in waters off Guyana's Atlantic coast. Further discoveries followed, transforming expectations for the country's economy.",
      },

      {
        year: "2019",
        title: "Oil Production Begins",
        text: "Commercial offshore oil production began, rapidly creating a new source of national revenue and making management of petroleum wealth an important issue for Guyana's future.",
      },

      {
        year: "Today",
        title: "Modern Guyana",
        text: "Guyana is an English-speaking South American republic with strong Caribbean connections. Indigenous, Afro-Guyanese, Indo-Guyanese, mixed and other communities contribute to an exceptionally diverse culture, while rainforest conservation, development, inequality and management of natural resources remain major national questions.",
      },
    ],

    places: [
      {
        title: "Kaieteur Falls",
        tag: "Waterfall & Rainforest",

        image:
          "/images/continents/south-america/countries/guyana/places/kaieteur-falls.jpg",

        description:
          "Kaieteur Falls lies on the Potaro River deep within Guyana's interior. Water plunges more than 200 metres in a single main drop from the edge of the Guiana Shield into a forested gorge. The surrounding landscape supports distinctive wildlife and plants, while the falls are also connected with Indigenous Patamona traditions. Its combination of enormous water volume, height and remote rainforest setting makes Kaieteur one of Guyana's most spectacular landscapes.",
      },

      {
        title: "Iwokrama Forest",
        tag: "Rainforest & Conservation",

        image:
          "/images/continents/south-america/countries/guyana/places/iwokrama-forest.jpg",

        description:
          "The Iwokrama Forest protects hundreds of thousands of hectares of tropical forest in central Guyana. Scientists and local communities use the area to study biodiversity and approaches to sustainable forest management. Jaguars, giant river otters, black caimans, monkeys and hundreds of bird species live within the wider ecosystem.",
      },

      {
        title: "Rupununi",
        tag: "Savannah & Indigenous Culture",

        image:
          "/images/continents/south-america/countries/guyana/places/rupununi.jpg",

        description:
          "The Rupununi stretches across a vast region of savannah, wetlands, rivers and forest in southern Guyana. Makushi, Wapichan and other Indigenous communities live throughout the region. Seasonal flooding transforms parts of the landscape and supports extraordinary wildlife including giant anteaters, giant river otters, caimans and jaguars.",
      },

      {
        title: "Georgetown",
        tag: "Capital & Colonial History",

        image:
          "/images/continents/south-america/countries/guyana/places/georgetown.jpg",

        description:
          "Georgetown grew from settlements developed on former Dutch plantation land beside the Demerara River. Its canals and drainage layout reflect Dutch water-management traditions, while many surviving nineteenth-century wooden buildings reflect later British colonial architecture. St George's Cathedral, markets, government buildings and traditional wooden houses create a distinctive urban landscape.",
      },
    ],

    influentialFigures: [
      {
        name: "Cuffy",
        role: "Resistance to Slavery",

        image:
          "/images/continents/south-america/countries/guyana/figures/cuffy.jpg",

        description:
          "Cuffy, also written Kofi, was an enslaved African who became a major leader of the Berbice rebellion of 1763. The uprising brought thousands of enslaved people together against Dutch colonial rule and temporarily gained control over much of the colony. Cuffy attempted to organise the rebels politically as well as militarily. He is remembered as a national hero of Guyana, and the anniversary of the rebellion is connected with Guyana's Republic Day.",
      },

      {
        name: "Quamina",
        role: "Resistance to Slavery",

        image:
          "/images/continents/south-america/countries/guyana/figures/quamina.jpg",

        description:
          "Quamina was an enslaved man and Christian deacon who became one of the leaders of the 1823 Demerara rebellion. He helped organise enslaved workers while arguing that the uprising should avoid unnecessary violence. Colonial forces brutally suppressed the rebellion and Quamina was killed. The events drew significant attention in Britain and became part of the wider history of opposition to slavery.",
      },

      {
        name: "Walter Rodney",
        role: "Historian & Political Activist",

        image:
          "/images/continents/south-america/countries/guyana/figures/walter-rodney.jpg",

        description:
          "Walter Rodney was a Guyanese historian, scholar and political activist whose work examined slavery, colonialism and the economic history of Africa and the Caribbean. His book How Europe Underdeveloped Africa became internationally influential. After returning to Guyana he became involved in opposition politics and was killed in Georgetown in 1980.",
      },

      {
        name: "Martin Carter",
        role: "Poetry & Literature",

        image:
          "/images/continents/south-america/countries/guyana/figures/martin-carter.jpg",

        description:
          "Martin Carter was one of Guyana's most important poets. His writing explored colonialism, freedom, political struggle, identity and everyday life. Carter was politically active during the movement towards independence and was detained by the British colonial authorities in the 1950s. His poetry later became influential across the Caribbean.",
      },
    ],

    culturalSpotlights: [
      {
        title: "Mashramani",

        image:
          "/images/continents/south-america/countries/guyana/cultural-spotlight/mashramani.jpg",

        description:
          "Mashramani is Guyana's major Republic Day celebration, held around 23 February. Parades feature elaborate costumes, music, dancing and competitions. The celebration developed after Guyana became a republic in 1970, and its name is derived from an Indigenous Arawak/Lokono term associated with celebration after cooperative work.",
      },

      {
        title: "Guyanese Masquerade",

        image:
          "/images/continents/south-america/countries/guyana/cultural-spotlight/guyanese-masquerade.jpg",

        description:
          "Masquerade combines street theatre, dance, drumming, costumes and distinctive characters. The tradition has strong roots in the experiences and cultural creativity of Africans and Afro-Guyanese communities during and after slavery. Performers traditionally appear particularly during the Christmas season, although safeguarding organisations are working to keep the tradition active among younger generations.",
      },

      {
        title: "Phagwah",

        image:
          "/images/continents/south-america/countries/guyana/cultural-spotlight/phagwah.jpg",

        description:
          "Phagwah is the Guyanese name commonly used for the Hindu festival of Holi. Indo-Guyanese communities celebrate with coloured powders and liquids, music, food and gatherings. The festival demonstrates how traditions brought by Indian indentured migrants became deeply rooted parts of Guyana's modern cultural landscape.",
      },

      {
        title: "Indigenous Cassava Traditions",

        image:
          "/images/continents/south-america/countries/guyana/cultural-spotlight/indigenous-cassava.jpg",

        description:
          "Cassava has been central to Indigenous life in the Guianas for generations. Bitter cassava must be grated, pressed and processed correctly to remove naturally occurring toxins. Indigenous communities developed specialised tools and techniques to transform it into foods including cassava bread and drinks, as well as cassareep used in Guyanese pepperpot. The tradition demonstrates detailed environmental and culinary knowledge passed between generations.",
      },
    ],

    facts: [
      "Guyana is the only sovereign country in South America with English as its official language.",
      "Guyana is geographically South American but has strong cultural and political connections with the Caribbean.",
      "Most of Guyana's territory is covered by forest.",
      "Kaieteur Falls has a single main drop of more than 200 metres.",
      "Guyana's name is commonly interpreted as meaning 'land of many waters', reflecting its enormous network of rivers.",
      "Cuffy led the major Berbice uprising against Dutch slavery in 1763.",
      "After emancipation, large numbers of indentured workers were brought from India to work on Guyana's plantations.",
      "Pepperpot uses cassareep, an Indigenous-derived ingredient made from processed cassava.",
      "Guyana became independent from Britain in 1966 and a republic in 1970.",
      "Major offshore oil discoveries since 2015 have rapidly changed Guyana's economy.",
    ],
  },
  {
    slug: "paraguay",
    name: "Paraguay",
    flag: "🇵🇾",

    capital: "Asunción",
    population: "About 7 million",
    languages: ["Spanish", "Guaraní"],
    currency: "Paraguayan Guaraní (PYG)",

    heroImage:
      "/images/continents/south-america/countries/paraguay/paraguay-river-and-landscape.jpg",

    intro:
      "Paraguay is a landlocked country at the heart of South America, divided by the Paraguay River into the more densely populated eastern region and the vast Gran Chaco to the west. Guaraní language and culture remain unusually visible in everyday national life, alongside Spanish and traditions shaped by Indigenous peoples, colonisation, migration and some of the most destructive wars in South American history.",

    overview:
      "Long before European arrival, the region of modern Paraguay was home to Indigenous peoples including Guaraní-speaking communities in the east and many different peoples of the Gran Chaco. Spanish colonists established Asunción in 1537, and relationships between Europeans and Indigenous communities shaped the emerging colonial society. During the seventeenth and eighteenth centuries, Jesuit missions brought thousands of Guaraní people into organised settlements where Christianisation, European institutions and Indigenous language, agriculture, music and craftsmanship interacted. Paraguay became independent from Spain in 1811 and developed under a succession of powerful governments. The War of the Triple Alliance from 1864 to 1870 devastated the country and caused enormous loss of life. Paraguay later fought Bolivia in the Chaco War from 1932 to 1935. Much of the twentieth century was shaped by political instability and then the long dictatorship of Alfredo Stroessner from 1954 to 1989. Modern Paraguay is a bilingual republic where Guaraní remains central to national identity and living traditions such as tereré, guarania music, weaving and pottery continue to connect present-day culture with older histories.",

    tags: [
      "Guaraní Culture",
      "Indigenous History",
      "Jesuit Missions",
      "War & Recovery",
      "Gran Chaco",
      "Bilingualism",
      "Music",
      "Living Heritage",
    ],

    theme: {
      primary: "#6f6652",
      secondary: "#3f574c",
      accent: "#c28b47",
      background: "linear-gradient(180deg, #eee8da 0%, #e1e5d9 100%)",
      card: "rgba(255,255,255,0.90)",
      text: "#34382f",
      timeline: "#6f6652",
    },

    factFile: {
      capital: {
        image:
          "/images/continents/south-america/countries/paraguay/fact-file/asuncion-lopez-palace.jpg",

        title: "Asunción",

        description:
          "Asunción stands beside the Paraguay River and is one of the oldest continuously inhabited European-founded cities in South America. Spanish colonists established it in 1537, and it became an important base for further settlement across the Río de la Plata region. The Palacio de los López, begun in the nineteenth century, is one of the capital's most recognisable buildings and today serves as the seat of Paraguay's presidency.",
      },

      history: {
        image:
          "/images/continents/south-america/countries/paraguay/fact-file/jesuit-mission-trinidad.jpg",

        title: "Jesuit-Guaraní Missions",

        description:
          "During the seventeenth and eighteenth centuries, Jesuit missionaries established settlements known as reducciones among Guaraní communities. Residents lived in planned towns centred around large churches, workshops and plazas. The missions promoted Christianity but also preserved and adapted aspects of Guaraní language, agriculture, music and craftsmanship. The surviving missions at Trinidad and Jesús are now Paraguay's only UNESCO World Heritage property.",
      },

      food: {
        image:
          "/images/continents/south-america/countries/paraguay/fact-file/terere-herbs-guampa.jpg",

        title: "Tereré & Pohã Ñana",

        description:
          "Tereré is a cold drink made by pouring chilled water through yerba mate leaves in a cup traditionally called a guampa and drinking it through a metal straw called a bombilla. Fresh medicinal and aromatic plants known as pohã ñana may be crushed and added to the water. Preparing and sharing tereré is a deeply social tradition, and UNESCO recognises the practices and knowledge surrounding it as intangible cultural heritage.",
      },

      wildlife: {
        image:
          "/images/continents/south-america/countries/paraguay/fact-file/chaco-taguar-peccary.jpg",

        title: "Chacoan Peccary",

        description:
          "The Chacoan peccary, also called the taguá, is a pig-like mammal native to the dry Gran Chaco. Scientists originally knew the species only from fossils and believed it was extinct before living animals were documented in the 1970s. It is now endangered, with habitat loss and hunting among the threats to its survival.",
      },

      culture: {
        image:
          "/images/continents/south-america/countries/paraguay/fact-file/guarani-spanish-bilingual-culture.jpg",

        title: "Guaraní & Spanish",

        description:
          "Paraguay is unusual in Latin America because an Indigenous language is spoken widely across Indigenous and non-Indigenous society. Guaraní and Spanish are both official languages, and many Paraguayans use both in everyday life. Speakers may also move fluidly between the two languages, creating forms of mixed speech commonly called Jopará. Guaraní appears in conversation, music, humour, place names, media and national traditions.",
      },
    },

    timeline: [
      {
        year: "Thousands of years ago",
        title: "Indigenous Paraguay",
        text: "People lived across the forests, rivers, grasslands and dry Chaco of present-day Paraguay thousands of years before European arrival. Different communities developed ways of life suited to very different environments.",
      },

      {
        year: "Before European arrival",
        title: "Guaraní Communities",
        text: "Guaraní-speaking peoples lived across large parts of eastern Paraguay and neighbouring regions. Communities cultivated crops including maize, cassava and sweet potatoes while also hunting, fishing and gathering.",
      },

      {
        year: "Before European arrival",
        title: "Peoples of the Chaco",
        text: "The Gran Chaco was home to many Indigenous peoples with languages and traditions distinct from those of Guaraní communities farther east. Their knowledge allowed communities to survive in an environment of extreme heat, seasonal drought and flooding.",
      },

      {
        year: "1520s",
        title: "European Expeditions",
        text: "European expeditions began exploring the great river systems of the Río de la Plata basin. Rivers became the principal routes through which Spanish explorers attempted to reach the interior.",
      },

      {
        year: "1537",
        title: "Asunción is Established",
        text: "Spanish colonists established Asunción beside the Paraguay River. Its location made it an important base for Spanish expansion into the interior of South America.",
      },

      {
        year: "1500s",
        title: "Spanish & Guaraní Society",
        text: "Spanish settlers formed alliances and relationships with Guaraní communities, while colonial systems also exploited Indigenous labour. Over generations, Indigenous and European influences contributed to the development of a distinctive Paraguayan society.",
      },

      {
        year: "1500s–1700s",
        title: "The Encomienda",
        text: "Spanish colonial authorities used the encomienda system to claim Indigenous labour and tribute. Although officially presented as a system of protection and Christian instruction, it frequently resulted in severe exploitation.",
      },

      {
        periodKey: "paraguay-jesuit-missions",
        year: "1600s",
        title: "🔍 Your Investigation: The Jesuit-Guaraní Missions",
        text: "Jesuit missionaries established organised settlements known as reducciones among Guaraní communities across the Río de la Plata region.",
        isGap: true,
        prompt:
          "Investigate the Jesuit missions and decide whether they should be understood mainly as protection, cultural exchange, colonial control — or a complicated mixture of all three.",
        questions: [
          "Why were the missions created?",
          "Which Guaraní traditions continued inside the missions?",
          "How did life in a reducción differ from life under the encomienda system?",
        ],
      },

      {
        year: "1609 onwards",
        title: "The Reducciones",
        text: "Jesuits established missions where Guaraní residents lived in planned settlements organised around churches, plazas, homes and workshops. Music, agriculture, craftsmanship and education became important parts of mission life.",
      },

      {
        year: "1600s–1700s",
        title: "Guaraní in the Missions",
        text: "The missions attempted to convert Indigenous communities to Christianity, but Guaraní remained widely used and aspects of Indigenous culture continued. Mission life therefore involved both cultural preservation and major colonial change.",
      },

      {
        year: "1685",
        title: "Jesús de Tavarangue",
        text: "The Jesuit reducción later known as Jesús de Tavarangue was founded. Its surviving monumental church was never fully completed but remains one of the most impressive examples of mission architecture in Paraguay.",
      },

      {
        year: "1706",
        title: "Santísima Trinidad del Paraná",
        text: "The mission of La Santísima Trinidad del Paraná was established. Its surviving complex includes remains of churches, workshops, homes, a school, cemetery and central plaza.",
      },

      {
        year: "1767",
        title: "The Jesuits are Expelled",
        text: "The Spanish Crown expelled the Jesuits from its American territories. The mission system declined, although Guaraní communities and cultural traditions continued beyond the end of Jesuit administration.",
      },

      {
        year: "1776",
        title: "Viceroyalty of the Río de la Plata",
        text: "Paraguay became part of the new Viceroyalty of the Río de la Plata, governed from Buenos Aires as Spain reorganised administration in southern South America.",
      },

      {
        year: "1810",
        title: "Buenos Aires Revolution",
        text: "Revolutionaries in Buenos Aires removed the Spanish viceroy and attempted to extend their authority across the former viceroyalty. Paraguay did not accept control from Buenos Aires.",
      },

      {
        year: "1811",
        title: "Paraguayan Forces Resist",
        text: "Paraguayan forces defeated an expedition sent from Buenos Aires. Political leaders in Paraguay subsequently moved against the remaining Spanish colonial authorities.",
      },

      {
        periodKey: "paraguay-independence",
        year: "1811",
        title: "🔍 Your Investigation: Paraguay Becomes Independent",
        text: "In May 1811, Paraguayan leaders removed Spanish colonial authority and established an independent government without becoming part of the government based in Buenos Aires.",
        isGap: true,
        prompt:
          "Investigate why Paraguay followed a different path to independence from many of its neighbours.",
        questions: [
          "Why did Paraguay reject control from Buenos Aires?",
          "How was Spanish authority removed?",
          "Who governed Paraguay after independence?",
        ],
      },

      {
        year: "1814–1840",
        title: "José Gaspar Rodríguez de Francia",
        text: "José Gaspar Rodríguez de Francia became Paraguay's dominant political leader. His government concentrated power, limited foreign influence and pursued policies that left Paraguay unusually isolated from many neighbouring countries.",
      },

      {
        year: "1844",
        title: "Carlos Antonio López",
        text: "Carlos Antonio López became president and gradually increased Paraguay's international connections. His government invested in infrastructure, industry, education and military development.",
      },

      {
        year: "1850s",
        title: "Railways and Industry",
        text: "Paraguay developed railways, shipbuilding facilities, foundries and other state-supported infrastructure. The railway from Asunción became one of the earliest in South America.",
      },

      {
        year: "1862",
        title: "Francisco Solano López",
        text: "Francisco Solano López became president after the death of his father, Carlos Antonio López. Regional tensions soon drew Paraguay into a catastrophic war.",
      },

      {
        periodKey: "paraguay-triple-alliance",
        year: "1864–1870",
        title: "🔍 Your Investigation: The War of the Triple Alliance",
        text: "Paraguay fought Brazil, Argentina and Uruguay in the War of the Triple Alliance. The conflict became one of the most destructive wars in Latin American history.",
        isGap: true,
        prompt:
          "Investigate the War of the Triple Alliance and why its consequences were so devastating for Paraguay.",
        questions: [
          "Why did the war begin?",
          "Which countries formed the Triple Alliance?",
          "How did the war change Paraguay's population, territory and economy?",
        ],
      },

      {
        year: "1865",
        title: "The Triple Alliance",
        text: "Brazil, Argentina and Uruguay formally allied against Paraguay. Fighting took place across rivers, wetlands, fortifications and towns throughout the region.",
      },

      {
        year: "1866",
        title: "Battle of Tuyutí",
        text: "Paraguayan forces attacked the Allied army at Tuyutí. The resulting battle was one of the largest and bloodiest military engagements in South American history.",
      },

      {
        year: "1868",
        title: "Asunción Occupied",
        text: "Allied forces advanced into Paraguay and occupied Asunción. Fighting continued as Francisco Solano López and remaining Paraguayan forces retreated into the interior.",
      },

      {
        year: "1870",
        title: "The War Ends",
        text: "Francisco Solano López was killed at Cerro Corá on 1 March 1870, bringing the final stage of the war to an end. Paraguay had suffered catastrophic population loss, economic destruction and territorial losses.",
      },

      {
        year: "1870s",
        title: "Rebuilding Paraguay",
        text: "The country faced the enormous task of rebuilding after the war. Women played particularly important roles in sustaining families, agriculture, trade and communities during a period when much of the adult male population had been lost.",
      },

      {
        year: "Late 1800s",
        title: "Land Changes",
        text: "Large areas of state land were sold to private owners and foreign companies as governments sought revenue after the war. These changes contributed to long-lasting inequalities in land ownership.",
      },

      {
        year: "Late 1800s–early 1900s",
        title: "Immigration and Recovery",
        text: "New migrants arrived while Paraguay slowly rebuilt its population and economy. Agriculture, yerba mate, timber and livestock remained important.",
      },

      {
        year: "1900s",
        title: "Guaraní Remains Strong",
        text: "Despite centuries of colonial rule and political change, Guaraní remained widely spoken across Paraguay and continued to influence storytelling, music and everyday communication.",
      },

      {
        year: "1920s",
        title: "José Asunción Flores and Guarania",
        text: "Musician José Asunción Flores developed the musical genre known as guarania. Its slower rhythms and expressive melodies became strongly associated with Paraguayan identity.",
      },

      {
        periodKey: "paraguay-chaco-war",
        year: "1932–1935",
        title: "🔍 Your Investigation: The Chaco War",
        text: "Paraguay and Bolivia fought over control of the Gran Chaco. Harsh terrain, extreme heat, disease and shortages of water made the war especially difficult for soldiers.",
        isGap: true,
        prompt:
          "Investigate why Paraguay and Bolivia fought over the Chaco and how soldiers survived its difficult environment.",
        questions: [
          "Why did both countries claim the Chaco?",
          "Why was water so important during the war?",
          "How did the conflict change the border?",
        ],
      },

      {
        year: "1935",
        title: "Fighting Ends",
        text: "A ceasefire ended major fighting in the Chaco War. Paraguay gained control of most of the disputed territory.",
      },

      {
        year: "1938",
        title: "Peace Settlement",
        text: "A peace treaty formally settled the conflict between Paraguay and Bolivia and established the international boundary across the Chaco.",
      },

      {
        year: "1947",
        title: "Paraguayan Civil War",
        text: "Political tensions erupted into civil war between the government and a coalition of opponents. The government's victory strengthened the Colorado Party, which subsequently dominated national politics for decades.",
      },

      {
        year: "1954",
        title: "Alfredo Stroessner Takes Power",
        text: "General Alfredo Stroessner took power following a military coup. He remained president for nearly 35 years.",
      },

      {
        year: "1954–1989",
        title: "The Stroessner Dictatorship",
        text: "Stroessner's government combined military power with Colorado Party control. Political opponents faced surveillance, imprisonment, torture, exile and disappearance, while the regime maintained close anti-communist alliances during the Cold War.",
      },

      {
        year: "1973",
        title: "Itaipú Agreement",
        text: "Paraguay and Brazil agreed to construct the enormous Itaipú hydroelectric project on the Paraná River. The dam later became one of the world's largest producers of hydroelectricity.",
      },

      {
        year: "1984",
        title: "Itaipú Begins Generating Power",
        text: "Electricity generation began at Itaipú. Paraguay's share of the enormous hydroelectric output became an important part of the national economy.",
      },

      {
        year: "1989",
        title: "Stroessner is Overthrown",
        text: "A military coup led by General Andrés Rodríguez removed Alfredo Stroessner from power, ending one of Latin America's longest twentieth-century dictatorships.",
      },

      {
        year: "1992",
        title: "New Constitution",
        text: "Paraguay adopted a democratic constitution that established new protections for rights and formally recognised both Spanish and Guaraní as official languages.",
      },

      {
        year: "1993",
        title: "Jesuit Missions Become World Heritage",
        text: "UNESCO inscribed the Jesuit Missions of La Santísima Trinidad de Paraná and Jesús de Tavarangue on the World Heritage List.",
      },

      {
        year: "2000s",
        title: "Indigenous Rights and Land",
        text: "Indigenous communities continued campaigns concerning ancestral territories, cultural rights and access to services. Land ownership remained one of Paraguay's major social and economic issues.",
      },

      {
        year: "2020",
        title: "Tereré Recognised",
        text: "UNESCO recognised the practices and traditional knowledge surrounding tereré and pohã ñana as intangible cultural heritage.",
      },

      {
        year: "2023",
        title: "Poncho Para’í Recognised",
        text: "The traditional techniques used to create the Poncho Para’í de 60 Listas of Piribebuy were added to UNESCO's List of Intangible Cultural Heritage in Need of Urgent Safeguarding.",
      },

      {
        year: "2024",
        title: "Guarania Recognised",
        text: "UNESCO inscribed guarania, a musical genre developed in Paraguay during the twentieth century, on the Representative List of the Intangible Cultural Heritage of Humanity.",
      },

      {
        year: "2025",
        title: "Ñai’ũpo Pottery Recognised",
        text: "UNESCO added Ñai’ũpo, an ancestral Paraguayan ceramic tradition, to the List of Intangible Cultural Heritage in Need of Urgent Safeguarding.",
      },

      {
        year: "Today",
        title: "Modern Paraguay",
        text: "Paraguay is a landlocked bilingual republic whose society remains strongly shaped by Guaraní language and culture. Agriculture and hydroelectric power are economically important, while questions surrounding land ownership, Indigenous rights, environmental protection and the memory of dictatorship continue to influence national life.",
      },
    ],

    places: [
      {
        title: "Jesuit Missions of Trinidad & Jesús",
        tag: "Guaraní & Colonial History",

        image:
          "/images/continents/south-america/countries/paraguay/places/jesuit-missions-trinidad-jesus.jpg",

        description:
          "La Santísima Trinidad de Paraná and Jesús de Tavarangue preserve the remains of two Jesuit-Guaraní missions. Their churches, plazas, workshops and residential areas reveal how mission communities were organised during the seventeenth and eighteenth centuries. The surviving art and architecture combine Indigenous elements with Christian and European forms. Together they form Paraguay's only property currently inscribed on UNESCO's World Heritage List.",
      },

      {
        title: "Cerro Corá",
        tag: "History & Landscape",

        image:
          "/images/continents/south-america/countries/paraguay/places/cerro-cora-landscape.jpg",

        description:
          "Cerro Corá is a landscape of hills, forest and waterways near Paraguay's border with Brazil. It is closely associated with the final battle of the War of the Triple Alliance, where President Francisco Solano López was killed in 1870. The wider national park also contains Indigenous rock art and protects important natural habitats, giving the area archaeological, historical and environmental significance.",
      },

      {
        title: "Gran Chaco",
        tag: "Wildlife & Indigenous Heritage",

        image:
          "/images/continents/south-america/countries/paraguay/places/gran-chaco-dry-forest.jpg",

        description:
          "The Paraguayan Chaco forms part of one of South America's largest dry-forest regions. Temperatures can be extreme and water can be scarce, yet the landscape supports jaguars, giant armadillos, peccaries and many bird species. Indigenous peoples including Ayoreo, Nivaclé, Enxet and others have deep connections with the region. Agricultural expansion and deforestation now place major pressure on its ecosystems.",
      },

      {
        title: "Itaipú",
        tag: "Energy & Engineering",

        image:
          "/images/continents/south-america/countries/paraguay/places/itaipu-hydroelectric-dam.jpg",

        description:
          "Itaipú is a huge hydroelectric power station on the Paraná River shared by Paraguay and Brazil. Construction transformed the river landscape and required the relocation of communities while flooding a large area upstream. Its turbines generate enormous quantities of renewable electricity, and Paraguay exports much of the power it does not use domestically.",
      },
    ],

    influentialFigures: [
      {
        name: "Serafina Dávalos",
        role: "Women's Rights & Law",

        image:
          "/images/continents/south-america/countries/paraguay/figures/serafina-davalos.jpg",

        description:
          "Serafina Dávalos was a pioneering Paraguayan lawyer, educator and campaigner for women's rights. In 1907 she became Paraguay's first female law graduate. Her academic work challenged legal and social inequalities affecting women, and she participated in organisations advocating greater educational, civic and political opportunities.",
      },

      {
        name: "Agustín Barrios Mangoré",
        role: "Classical Guitar & Composition",

        image:
          "/images/continents/south-america/countries/paraguay/figures/agustin-barrios-mangore.jpg",

        description:
          "Agustín Barrios Mangoré was a Paraguayan classical guitarist and composer whose music became internationally influential. He combined European classical guitar traditions with musical ideas and rhythms from Latin America. Barrios sometimes performed using the name Mangoré and presented himself in ways that referenced Indigenous Guaraní identity. His compositions remain part of the international classical-guitar repertoire.",
      },

      {
        name: "José Asunción Flores",
        role: "Music & Guarania",

        image:
          "/images/continents/south-america/countries/paraguay/figures/jose-asuncion-flores.jpg",

        description:
          "José Asunción Flores was the composer most closely associated with the creation of guarania during the 1920s. The style slowed and reshaped existing Paraguayan musical forms to create expressive melodies suited to songs about love, landscape, memory and social experience. Guarania became a powerful musical symbol of Paraguay and was recognised by UNESCO in 2024.",
      },

      {
        name: "Augusto Roa Bastos",
        role: "Literature",

        image:
          "/images/continents/south-america/countries/paraguay/figures/augusto-roa-bastos.jpg",

        description:
          "Augusto Roa Bastos was one of Paraguay's most internationally recognised writers. His novels and stories explored power, dictatorship, language, memory and Paraguayan history. His best-known novel, I the Supreme, uses the historical ruler José Gaspar Rodríguez de Francia to examine authoritarian power and the way history itself is written.",
      },
    ],

    culturalSpotlights: [
      {
        title: "Tereré & Pohã Ñana",

        image:
          "/images/continents/south-america/countries/paraguay/cultural-spotlight/terere-poha-nana.jpg",

        description:
          "Tereré is much more than a cold drink. Preparing it involves knowledge of yerba mate, water, medicinal and aromatic plants known as pohã ñana, and the social customs surrounding sharing a guampa and bombilla. Knowledge of plants may be passed through families and specialist sellers. UNESCO recognised these practices as intangible cultural heritage in 2020.",
      },

      {
        title: "Guarania",

        image:
          "/images/continents/south-america/countries/paraguay/cultural-spotlight/guarania-musicians.jpg",

        description:
          "Guarania is a Paraguayan musical genre developed by José Asunción Flores during the 1920s. Usually slower and more reflective than the Paraguayan polka, its melodies and lyrics often explore love, longing, landscape and national identity. Songs may be performed in Spanish, Guaraní or both languages. UNESCO recognised guarania as intangible cultural heritage in 2024.",
      },

      {
        title: "Poncho Para’í de 60 Listas",

        image:
          "/images/continents/south-america/countries/paraguay/cultural-spotlight/poncho-parai-weaving.jpg",

        description:
          "The Poncho Para’í de 60 Listas is a finely woven traditional garment associated especially with the city of Piribebuy. Its name refers to its distinctive pattern of many narrow stripes. Producing one requires specialist knowledge of preparing thread, dyeing, arranging the loom and weaving complex patterns. UNESCO placed the tradition on its Urgent Safeguarding List in 2023 because very few master practitioners remained.",
      },

      {
        title: "Ñai’ũpo Pottery",

        image:
          "/images/continents/south-america/countries/paraguay/cultural-spotlight/naiupo-clay-pottery.jpg",

        description:
          "Ñai’ũpo is an ancestral Paraguayan ceramic tradition maintained particularly by women potters. Knowledge includes identifying and gathering suitable clay, preparing it by hand and shaping vessels without industrial production methods. Skills and cultural meanings are passed between generations. UNESCO placed Ñai’ũpo on the List of Intangible Cultural Heritage in Need of Urgent Safeguarding in 2025.",
      },
    ],

    facts: [
      "Paraguay is one of only two landlocked countries in South America; the other is Bolivia.",
      "Spanish and Guaraní are both official languages, and Guaraní is widely spoken by Indigenous and non-Indigenous Paraguayans.",
      "Paraguay's currency is also called the guaraní.",
      "The Paraguay River divides the country between the more populated eastern region and the vast western Chaco.",
      "The Jesuit Missions of Trinidad and Jesús form Paraguay's only UNESCO World Heritage property.",
      "The War of the Triple Alliance from 1864 to 1870 caused catastrophic loss of life and destruction in Paraguay.",
      "Paraguay defeated Bolivia in the Chaco War and gained control of most of the disputed Chaco territory.",
      "Tereré is traditionally served cold, unlike the hot mate commonly associated with neighbouring Argentina and Uruguay.",
      "The Itaipú hydroelectric project is shared by Paraguay and Brazil and produces enormous quantities of electricity.",
      "UNESCO has recognised Paraguayan tereré, Poncho Para’í weaving, guarania music and Ñai’ũpo pottery as forms of intangible cultural heritage.",
    ],
  },
  {
    slug: "peru",
    name: "Peru",
    flag: "🇵🇪",

    capital: "Lima",
    population: "About 34 million",
    languages: ["Spanish", "Quechua", "Aymara", "Other Indigenous languages"],
    currency: "Peruvian Sol (PEN)",

    heroImage:
      "/images/continents/south-america/countries/peru/andes-sacred-valley-landscape.jpg",

    intro:
      "Peru stretches from the Pacific coast across the Andes and into the Amazon rainforest. It was home to some of the earliest complex societies in the Americas and later became the centre of the enormous Inca Empire. Modern Peru is shaped by Indigenous Andean and Amazonian cultures, Spanish colonial history, African heritage, migration from Europe and Asia, and distinctive regional traditions in food, music, textiles and festivals.",

    overview:
      "Peru's history reaches back thousands of years before the Inca. The ancient city of Caral developed around 5,000 years ago, while later societies including Chavín, Nazca, Moche, Wari and Chimú created monumental architecture, irrigation systems, ceramics, textiles and extraordinary works of art. During the fifteenth century, the Inca built Tawantinsuyu into the largest empire in the pre-Columbian Americas, connecting huge areas of the Andes through roads, administration and systems of labour and exchange. Spanish forces captured the Inca ruler Atahualpa in 1532 and established colonial rule, bringing warfare, epidemic disease, Christianity, forced labour and the enslavement of Africans. Peru declared independence in 1821 and secured it through further fighting in 1824. Since independence, the country has experienced political upheaval, wars, economic change, Indigenous and workers' movements and periods of authoritarian rule and internal conflict. Today Peru remains one of South America's most culturally and environmentally diverse countries, where Quechua, Aymara, Afro-Peruvian and numerous Amazonian traditions continue alongside modern urban life.",

    tags: [
      "Ancient Civilisations",
      "Indigenous History",
      "Inca",
      "Andes",
      "Amazon",
      "Afro-Peruvian Heritage",
      "Archaeology",
      "Living Traditions",
    ],

    theme: {
      primary: "#9a5c4b",
      secondary: "#554b3e",
      accent: "#c69a4b",
      background: "linear-gradient(180deg, #f1e8dc 0%, #e4ddd0 100%)",
      card: "rgba(255,255,255,0.90)",
      text: "#382f2b",
      timeline: "#9a5c4b",
    },

    factFile: {
      capital: {
        image:
          "/images/continents/south-america/countries/peru/fact-file/lima-plaza-mayor.jpg",

        title: "Lima",

        description:
          "Lima is Peru's capital and largest city, standing on the Pacific coastal plain beside the Rímac River. Spanish conquistador Francisco Pizarro founded the colonial city in 1535, but the surrounding region had been inhabited for thousands of years and contains much older archaeological sites. Lima became the political centre of the Spanish Viceroyalty of Peru and today combines pre-Hispanic archaeology, colonial architecture and a vast modern metropolis.",
      },

      history: {
        image:
          "/images/continents/south-america/countries/peru/fact-file/caral-pyramids-supe-valley.jpg",

        title: "Caral-Supe",

        description:
          "Caral developed in the Supe Valley around 5,000 years ago and is one of the oldest known urban centres in the Americas. Its inhabitants constructed monumental platform mounds, sunken circular plazas and planned residential areas. Archaeologists have also found evidence of complex trade, music and systems for recording information. Caral demonstrates that large organised societies developed in Peru thousands of years before the Inca.",
      },

      food: {
        image:
          "/images/continents/south-america/countries/peru/fact-file/peruvian-potato-varieties.jpg",

        title: "The Potato",

        description:
          "Potatoes were domesticated in the Andes thousands of years ago. Peru remains home to an extraordinary diversity of native potato varieties adapted to different altitudes, climates, colours and soils. Andean communities also developed methods such as producing chuño — freeze-dried potato — allowing food to be stored for long periods in high mountain environments.",
      },

      wildlife: {
        image:
          "/images/continents/south-america/countries/peru/fact-file/spectacled-bear-cloud-forest.jpg",

        title: "Spectacled Bear",

        description:
          "The spectacled bear is South America's only native bear species. It lives mainly in Andean forests and high grasslands from Venezuela to Bolivia, including Peru's cloud forests. Individual bears have different pale markings around their faces and eyes, which can resemble spectacles. Habitat loss and conflict with humans threaten populations in parts of their range.",
      },

      culture: {
        image:
          "/images/continents/south-america/countries/peru/fact-file/taquile-textile-weaving.jpg",

        title: "Taquile Textile Art",

        description:
          "The people of Taquile Island in Lake Titicaca maintain a celebrated textile tradition in which weaving and knitting form important parts of community identity. Men traditionally knit while women weave using looms. Clothing can communicate information about age, marital status and community identity. UNESCO recognises Taquile and its textile art as intangible cultural heritage.",
      },
    },

    timeline: [
      {
        year: "More than 12,000 years ago",
        title: "The First Peruvians",
        text: "People lived in the territory of modern Peru thousands of years before cities or empires developed. Communities adapted to the Pacific coast, high Andes, valleys and Amazonian environments.",
      },

      {
        year: "c. 8000–3000 BCE",
        title: "Plants and Farming",
        text: "Communities gradually domesticated and cultivated plants suited to different Peruvian environments. Potatoes, quinoa, beans, squash and other crops became important parts of Andean agriculture.",
      },

      {
        year: "c. 3000–1800 BCE",
        title: "Caral-Supe Civilisation",
        text: "Large settlements developed in Peru's Supe Valley. Caral became the most famous, with monumental architecture, sunken circular courts and organised residential areas.",
      },

      {
        periodKey: "peru-caral",
        year: "c. 2600 BCE",
        title: "🔍 Your Investigation: Ancient Caral",
        text: "Caral was flourishing around the same broad period as some of the earliest cities of ancient Egypt and Mesopotamia.",
        isGap: true,
        prompt:
          "Investigate Caral and find out what archaeologists have discovered about one of the earliest complex societies in the Americas.",
        questions: [
          "What buildings did the people of Caral construct?",
          "How did people living in the valley obtain food?",
          "What evidence suggests Caral was part of a complex society?",
        ],
      },

      {
        year: "c. 1200–400 BCE",
        title: "Chavín",
        text: "The ceremonial centre of Chavín de Huántar became influential across parts of the Andes. Its stone carvings, underground galleries and religious imagery reveal connections between people living across different regions.",
      },

      {
        year: "c. 200 BCE–600 CE",
        title: "The Nazca",
        text: "Nazca communities flourished in Peru's dry southern coastal valleys. They developed sophisticated irrigation systems and produced colourful ceramics and textiles.",
      },

      {
        year: "c. 200 BCE–600 CE",
        title: "Nazca Lines",
        text: "People created enormous geoglyphs across the desert surface around Nazca and Palpa. Designs include straight lines, geometric forms and figures representing animals and plants.",
      },

      {
        year: "c. 100–800 CE",
        title: "The Moche",
        text: "Moche societies developed along Peru's northern coast. They constructed enormous adobe monuments, engineered irrigation systems and produced exceptionally detailed ceramics and metalwork.",
      },

      {
        year: "c. 600–1000 CE",
        title: "The Wari",
        text: "The Wari state expanded across large parts of the Peruvian Andes. Roads, planned administrative centres and systems of provincial control anticipated some features later developed on an even larger scale by the Inca.",
      },

      {
        year: "c. 900–1470",
        title: "The Chimú",
        text: "The Chimú kingdom controlled much of Peru's northern coast from its capital at Chan Chan. Skilled craftspeople produced textiles and metalwork, while large irrigation networks supported agriculture in the desert.",
      },

      {
        year: "c. 1200s",
        title: "Inca Cusco",
        text: "The Inca developed around Cusco in the southern Andes. Early Inca rulers controlled a relatively small territory before rapid expansion began during the fifteenth century.",
      },

      {
        year: "1430s–1470s",
        title: "Pachacuti and Inca Expansion",
        text: "Under Pachacuti and his successors, the Inca transformed their kingdom into Tawantinsuyu, an empire stretching along much of western South America.",
      },

      {
        year: "1400s",
        title: "Qhapaq Ñan",
        text: "The Inca expanded a vast Andean road system connecting cities, villages, administrative centres and sacred places across thousands of kilometres. Runners carried information while llama caravans transported goods.",
      },

      {
        year: "1400s",
        title: "Machu Picchu",
        text: "Machu Picchu was constructed high in the Andes during the height of the Inca Empire. Its terraces, buildings, ceremonial spaces and carefully fitted stonework demonstrate sophisticated engineering and adaptation to steep mountain terrain.",
      },

      {
        year: "1400s–1500s",
        title: "Life in Tawantinsuyu",
        text: "The Inca governed millions of people speaking many languages. Communities supplied labour to the state, while administrators organised agriculture, roads, armies, storehouses and the movement of resources.",
      },

      {
        year: "1520s",
        title: "Disease Reaches the Andes",
        text: "Diseases introduced to the Americas from Europe spread ahead of some Spanish expeditions and caused severe population loss. Inca ruler Huayna Capac died during this period.",
      },

      {
        year: "1529–1532",
        title: "Inca Civil War",
        text: "A struggle for power developed between Huáscar and Atahualpa, sons of Huayna Capac. Atahualpa emerged victorious shortly before encountering Spanish forces.",
      },

      {
        periodKey: "peru-spanish-conquest",
        year: "1532",
        title: "🔍 Your Investigation: Atahualpa and the Spanish",
        text: "Francisco Pizarro and a small Spanish force met the Inca ruler Atahualpa at Cajamarca and captured him during a surprise attack.",
        isGap: true,
        prompt:
          "Investigate how a relatively small Spanish expedition was able to capture Atahualpa and eventually defeat the Inca state.",
        questions: [
          "What condition was the Inca Empire in when the Spanish arrived?",
          "What happened at Cajamarca?",
          "Which Indigenous groups allied with the Spanish and why?",
        ],
      },

      {
        year: "1533",
        title: "Atahualpa is Executed",
        text: "Atahualpa provided an enormous ransom of gold and silver while imprisoned but was nevertheless executed. Spanish forces then advanced towards Cusco.",
      },

      {
        year: "1533",
        title: "Spanish Forces Enter Cusco",
        text: "Spanish forces and Indigenous allies captured Cusco. Resistance continued, however, and Spanish control of the former Inca territories remained contested.",
      },

      {
        year: "1535",
        title: "Lima is Founded",
        text: "Francisco Pizarro established the Spanish city of Lima near the Pacific coast. Its location allowed easier communication with Spain than the highland city of Cusco.",
      },

      {
        year: "1536",
        title: "Manco Inca's Rebellion",
        text: "Manco Inca led a major uprising against Spanish rule and besieged Cusco. Although the siege ultimately failed, organised Inca resistance continued from the Vilcabamba region.",
      },

      {
        year: "1542",
        title: "Viceroyalty of Peru",
        text: "Spain created the Viceroyalty of Peru, with Lima as its capital. For generations it became one of the most important centres of Spanish power in South America.",
      },

      {
        year: "1500s–1700s",
        title: "Colonial Forced Labour",
        text: "Spanish authorities adapted existing Andean labour obligations into colonial systems that forced many Indigenous men to work in mines and other industries. The silver mines of Potosí became especially important to the colonial economy.",
      },

      {
        year: "1500s onwards",
        title: "Africans in Colonial Peru",
        text: "Enslaved Africans were forcibly transported to Peru and worked in agriculture, workshops, households and cities. African descendants became an important part of Peruvian society, particularly along the coast.",
      },

      {
        year: "1572",
        title: "The Last Inca State Falls",
        text: "Spanish forces captured Vilcabamba and executed Túpac Amaru, the final ruler of the independent Neo-Inca state. Organised resistance and Indigenous uprisings nevertheless continued throughout the colonial period.",
      },

      {
        year: "1600s–1700s",
        title: "Colonial Peru",
        text: "Lima became a wealthy administrative, religious and commercial centre. Indigenous, African, European and mixed communities all contributed to colonial society while living within strongly unequal political and racial hierarchies.",
      },

      {
        year: "1780",
        title: "Túpac Amaru II Rebellion",
        text: "José Gabriel Condorcanqui, who took the name Túpac Amaru II, led a huge uprising against colonial abuses. The rebellion spread across the southern Andes before Spanish forces defeated it.",
      },

      {
        year: "1781",
        title: "Micaela Bastidas",
        text: "Micaela Bastidas played a central organisational and strategic role in the rebellion alongside Túpac Amaru II. Both were captured and executed by Spanish authorities in Cusco.",
      },

      {
        year: "Early 1800s",
        title: "Independence Movements",
        text: "Revolutionary movements spread across Spanish South America. Peru remained an important royalist stronghold for longer than many neighbouring regions.",
      },

      {
        periodKey: "peru-independence",
        year: "1821–1824",
        title: "🔍 Your Investigation: Peruvian Independence",
        text: "José de San Martín declared Peru's independence in Lima in 1821, but major royalist armies remained. Fighting continued until decisive victories in 1824.",
        isGap: true,
        prompt:
          "Investigate why declaring independence in 1821 did not immediately end Spanish power in Peru.",
        questions: [
          "What role did José de San Martín play?",
          "What role did Simón Bolívar and Antonio José de Sucre play?",
          "Why was the Battle of Ayacucho so important?",
        ],
      },

      {
        year: "1821",
        title: "Independence Declared",
        text: "José de San Martín entered Lima and proclaimed Peruvian independence on 28 July 1821. The new state still faced powerful royalist forces in the Andes.",
      },

      {
        year: "1824",
        title: "Battle of Ayacucho",
        text: "Independence forces commanded by Antonio José de Sucre defeated the main royalist army at Ayacucho. The victory effectively ended Spanish military power in Peru and most of mainland South America.",
      },

      {
        year: "1820s–1840s",
        title: "Building the Republic",
        text: "The early republic experienced repeated changes of government and conflicts between military and political leaders while attempting to build new national institutions.",
      },

      {
        year: "1840s–1870s",
        title: "The Guano Boom",
        text: "Enormous deposits of seabird guano from Peru's coastal islands became valuable fertiliser exports. Guano generated major government income but wealth was distributed unevenly and the state accumulated substantial debts.",
      },

      {
        year: "1854",
        title: "Slavery is Abolished",
        text: "President Ramón Castilla abolished slavery in Peru. Afro-Peruvian communities nevertheless continued to face discrimination and social inequality after emancipation.",
      },

      {
        year: "1849–1870s",
        title: "Chinese Migration",
        text: "Large numbers of Chinese workers travelled to Peru, many under highly exploitative labour contracts. Chinese-Peruvian communities later became an important part of Peruvian urban life and cuisine.",
      },

      {
        year: "1879–1883",
        title: "War of the Pacific",
        text: "Peru and Bolivia fought Chile in the War of the Pacific. Chilean forces occupied Lima during the conflict, and Peru lost territory following the war.",
      },

      {
        year: "Late 1800s",
        title: "Reconstruction",
        text: "Peru rebuilt after the War of the Pacific while exports, mining and agriculture continued to shape the economy. Indigenous rural communities remained politically and economically marginalised.",
      },

      {
        year: "1911",
        title: "Machu Picchu Gains International Attention",
        text: "Hiram Bingham's expedition brought Machu Picchu to wide international attention, although local Indigenous communities already knew of the site and families were living and farming nearby.",
      },

      {
        year: "1920s–1930s",
        title: "Indigenous Culture and Politics",
        text: "Writers, artists and political movements increasingly debated Indigenous identity, land inequality and the place of Andean communities within the Peruvian nation.",
      },

      {
        year: "1940s–1970s",
        title: "Migration to the Cities",
        text: "Large numbers of people moved from rural Andean communities to Lima and other cities. Urban Peru grew rapidly and Andean music, language, food and traditions became increasingly visible in coastal cities.",
      },

      {
        year: "1968",
        title: "Military Government",
        text: "General Juan Velasco Alvarado took power in a military coup. His government introduced major economic and social reforms, including land redistribution and increased state control of important industries.",
      },

      {
        year: "1969",
        title: "Agrarian Reform",
        text: "A major agrarian reform broke up many large estates and reorganised land ownership. The reforms attempted to change longstanding inequalities in the countryside but produced varied results across different regions.",
      },

      {
        year: "1975",
        title: "Quechua Recognition",
        text: "The government gave Quechua official recognition, reflecting growing attention to Peru's Indigenous languages and cultures.",
      },

      {
        year: "1980",
        title: "Civilian Government Returns",
        text: "Peru returned to elected civilian government after twelve years of military rule.",
      },

      {
        periodKey: "peru-internal-conflict",
        year: "1980–2000",
        title: "🔍 Your Investigation: Peru's Internal Conflict",
        text: "Peru experienced a devastating internal armed conflict involving the Maoist organisation Shining Path, other armed actors and state security forces. Rural Indigenous communities were particularly heavily affected.",
        isGap: true,
        prompt:
          "Investigate Peru's internal conflict using sources that include the experiences of victims and rural communities.",
        questions: [
          "What was the Shining Path?",
          "Why were rural Quechua-speaking communities particularly affected?",
          "What did Peru's later Truth and Reconciliation Commission investigate?",
        ],
      },

      {
        year: "1980s",
        title: "Shining Path Violence",
        text: "The Shining Path launched an armed campaign against the Peruvian state and committed massacres, assassinations and other attacks. State security forces also committed serious human-rights abuses during counterinsurgency operations.",
      },

      {
        year: "1990",
        title: "Alberto Fujimori Becomes President",
        text: "Alberto Fujimori became president during a period of economic crisis and internal conflict. His government introduced sweeping economic reforms and intensified operations against armed insurgent groups.",
      },

      {
        year: "1992",
        title: "Constitutional Breakdown",
        text: "President Fujimori dissolved Congress and suspended parts of the existing constitutional order with support from the armed forces. A new constitution was subsequently approved in 1993.",
      },

      {
        year: "1992",
        title: "Abimael Guzmán Captured",
        text: "Peruvian police captured Shining Path leader Abimael Guzmán. His arrest severely weakened the organisation, although violence did not immediately disappear.",
      },

      {
        year: "2000",
        title: "Fujimori Government Ends",
        text: "The Fujimori government collapsed amid a major corruption scandal and political crisis. A transitional government organised new elections.",
      },

      {
        year: "2001–2003",
        title: "Truth and Reconciliation Commission",
        text: "Peru's Truth and Reconciliation Commission investigated violence committed during the internal conflict. Its work documented the enormous impact on rural, poor and Indigenous communities and examined abuses committed by both insurgent organisations and state forces.",
      },

      {
        year: "2009",
        title: "Caral Becomes World Heritage",
        text: "UNESCO inscribed the Sacred City of Caral-Supe on the World Heritage List, recognising its importance to understanding the rise of complex society in the Americas.",
      },

      {
        year: "2010",
        title: "Scissors Dance Recognised",
        text: "UNESCO recognised Peru's Scissors Dance as intangible cultural heritage. The competitive ritual performance combines dancers with violin and harp musicians and is rooted in Quechua communities of the south-central Andes.",
      },

      {
        year: "2013",
        title: "Q’eswachaka Bridge Tradition Recognised",
        text: "UNESCO recognised the knowledge, skills and rituals involved in the annual renewal of the Q’eswachaka suspension bridge over the Apurímac River.",
      },

      {
        year: "Today",
        title: "Modern Peru",
        text: "Modern Peru is a multicultural republic spanning Pacific desert, high Andes and Amazon rainforest. Ancient archaeological heritage exists alongside living Indigenous and Afro-Peruvian cultures, while debates over inequality, political institutions, mining, environmental protection and Indigenous rights continue to shape national life.",
      },
    ],

    places: [
      {
        title: "Sacred City of Caral-Supe",
        tag: "Ancient Civilisation",

        image:
          "/images/continents/south-america/countries/peru/places/caral-supe-pyramids.jpg",

        description:
          "Caral lies on a desert terrace overlooking the Supe Valley and developed around 5,000 years ago. Its monumental platform mounds, sunken circular courts and planned urban spaces reveal an extraordinarily complex early society. UNESCO describes Caral-Supe as the oldest known centre of civilisation in the Americas, making it crucial to understanding that Peru's remarkable history began thousands of years before the Inca.",
      },

      {
        title: "Machu Picchu",
        tag: "Inca Heritage",

        image:
          "/images/continents/south-america/countries/peru/places/machu-picchu.jpg",

        description:
          "Machu Picchu stands more than 2,400 metres above sea level where the Andes meet the upper Amazon basin. Inca builders created terraces, temples, residences, water channels and carefully fitted stone structures across a steep mountain ridge. Its extraordinary architecture and surrounding ecosystem make it both a cultural and natural UNESCO World Heritage property.",
      },

      {
        title: "Nazca Lines",
        tag: "Archaeology & Mystery",

        image:
          "/images/continents/south-america/countries/peru/places/nazca-lines-hummingbird.jpg",

        description:
          "Hundreds of enormous lines and figures cover the desert around Nazca and Palpa. Ancient communities created them by removing darker surface stones to expose lighter ground underneath. Designs include hummingbirds, monkeys, spiders, plants and geometric forms. Their exact functions continue to be studied, but archaeologists connect them with the beliefs, landscapes and ceremonial practices of the people who created them.",
      },

      {
        title: "Manú National Park",
        tag: "Amazon & Biodiversity",

        image:
          "/images/continents/south-america/countries/peru/places/manu-amazon-rainforest.jpg",

        description:
          "Manú protects an enormous range of environments descending from high Andean grasslands through cloud forest into lowland Amazon rainforest. This dramatic change in altitude supports exceptional biodiversity, including jaguars, giant otters, spectacled bears, monkeys and hundreds of bird species. Indigenous communities also live within the wider region. UNESCO inscribed Manú as a natural World Heritage property in 1987.",
      },
    ],

    influentialFigures: [
      {
        name: "Micaela Bastidas",
        role: "Indigenous Resistance",

        image:
          "/images/continents/south-america/countries/peru/figures/micaela-bastidas.jpg",

        description:
          "Micaela Bastidas was one of the central leaders of the great Andean rebellion of 1780–1781. Working alongside her husband, Túpac Amaru II, she organised supplies, communications, recruitment and military strategy. Her surviving letters demonstrate her political and strategic importance to the movement. Spanish authorities captured and executed her in Cusco in 1781.",
      },

      {
        name: "José María Arguedas",
        role: "Literature & Indigenous Culture",

        image:
          "/images/continents/south-america/countries/peru/figures/jose-maria-arguedas.jpg",

        description:
          "José María Arguedas was a novelist, anthropologist and scholar whose work explored relationships between Indigenous Andean culture and Spanish-speaking Peru. He grew up speaking Quechua as well as Spanish and brought Quechua language, storytelling and ways of seeing the world into his literary work. His writing challenged the idea that Indigenous culture belonged only to Peru's past.",
      },

      {
        name: "Victoria Santa Cruz",
        role: "Afro-Peruvian Culture & Performance",

        image:
          "/images/continents/south-america/countries/peru/figures/victoria-santa-cruz.jpg",

        description:
          "Victoria Santa Cruz was a choreographer, composer, performer and major figure in the revival and celebration of Afro-Peruvian culture. Through theatre, music, dance and education she explored African-descended identity and challenged racism. Her work helped bring greater national and international attention to the importance of Afro-Peruvian heritage.",
      },

      {
        name: "Maria Reiche",
        role: "Archaeology & Conservation",

        image:
          "/images/continents/south-america/countries/peru/figures/maria-reiche.jpg",

        description:
          "Maria Reiche was a German-born mathematician and researcher who devoted much of her life to studying and protecting the Nazca Lines. From the 1940s onwards she measured, mapped and publicised the geoglyphs while campaigning to protect them from damage. Her interpretations have been debated and revised, but her conservation work played an important role in preserving the site.",
      },
    ],

    culturalSpotlights: [
      {
        title: "Taquile Textile Art",

        image:
          "/images/continents/south-america/countries/peru/cultural-spotlight/taquile-textile-art.jpg",

        description:
          "On Taquile Island in Lake Titicaca, textile-making forms part of everyday social and cultural life. Men traditionally knit distinctive hats while women spin wool and weave other textiles. Designs and clothing can communicate identity and social information, and techniques are taught within families from childhood. UNESCO recognises Taquile and its textile art as intangible cultural heritage.",
      },

      {
        title: "Scissors Dance",

        image:
          "/images/continents/south-america/countries/peru/cultural-spotlight/scissors-dance.jpg",

        description:
          "The Scissors Dance is a competitive ritual performance rooted in Quechua communities of Peru's south-central Andes. A dancer performs demanding steps and acrobatics while striking two polished metal blades together in rhythm with a violinist and harpist. Competing groups can perform for many hours, testing musical skill, stamina and physical ability. UNESCO recognised the tradition in 2010.",
      },

      {
        title: "Q’eswachaka Rope Bridge",

        image:
          "/images/continents/south-america/countries/peru/cultural-spotlight/qeswachaka-rope-bridge.jpg",

        description:
          "Each year, Quechua communities work together to renew the Q’eswachaka suspension bridge across the Apurímac River using traditional plant-fibre ropes. Families prepare rope, specialist bridge builders direct construction and the old bridge is replaced through communal work and ceremony. The practice preserves engineering knowledge connected with the wider Andean bridge traditions once used across the Inca road system.",
      },

      {
        title: "Afro-Peruvian Cajón Music",

        image:
          "/images/continents/south-america/countries/peru/cultural-spotlight/afro-peruvian-cajon-music.jpg",

        description:
          "Afro-Peruvian musical traditions developed particularly along Peru's coast among communities descended from enslaved Africans. The cajón — a wooden box played by striking its front surface with the hands — became one of the country's most recognisable instruments. It appears in Afro-Peruvian genres including festejo and has since travelled far beyond Peru, becoming especially influential in modern flamenco and world music.",
      },
    ],

    facts: [
      "Peru contains Pacific desert, some of the highest parts of the Andes and vast areas of Amazon rainforest.",
      "Caral developed around 5,000 years ago and is one of the oldest known urban centres in the Americas.",
      "The Inca called their empire Tawantinsuyu, often translated as the 'land of the four parts'.",
      "Machu Picchu stands more than 2,400 metres above sea level.",
      "Potatoes were domesticated in the Andes, and Peru is home to an extraordinary diversity of native varieties.",
      "The Nazca Lines include enormous representations of animals, plants, geometric shapes and long straight lines.",
      "Quechua is not simply an ancient Inca language — varieties of Quechua continue to be spoken by millions of people today.",
      "Peru has 13 properties on UNESCO's World Heritage List.",
      "Afro-Peruvian culture has made major contributions to Peruvian music, dance, literature and food.",
      "Communities still rebuild the Q’eswachaka suspension bridge using plant fibres and knowledge passed between generations.",
    ],
  },
  {
    slug: "suriname",
    name: "Suriname",
    flag: "🇸🇷",

    capital: "Paramaribo",
    population: "About 650,000",
    languages: [
      "Dutch",
      "Sranan Tongo",
      "Sarnami Hindustani",
      "Javanese",
      "Indigenous and Maroon languages",
    ],
    currency: "Surinamese Dollar (SRD)",

    heroImage:
      "/images/continents/south-america/countries/suriname/suriname-river-rainforest.jpg",

    intro:
      "Suriname sits on South America's Atlantic coast between Guyana and French Guiana. Although it is the smallest sovereign country in South America, its population contains an extraordinary mixture of Indigenous, African, Indian, Javanese, Chinese, European and mixed cultural traditions. Most of the country's interior is covered by tropical rainforest, while the majority of the population lives along the northern coastal region.",

    overview:
      "Indigenous peoples lived in the Guiana region for thousands of years before European colonisation. Dutch plantation colonies later developed along Suriname's rivers, using the forced labour of enslaved Africans to produce sugar, coffee and other crops. Many enslaved people escaped into the rainforest, where they established independent Maroon communities and fought long campaigns against colonial forces. After slavery was abolished, plantation owners recruited indentured workers from British India and Java, while migrants from China and elsewhere also contributed to the country's increasingly diverse society. Suriname remained a Dutch colony until independence in 1975. Today Dutch is the official language, but many other languages are spoken, and Hindu temples, mosques, churches and synagogues form part of the country's cultural landscape. Beyond the populated coast lies an enormous rainforest interior inhabited by Indigenous and Maroon communities with distinctive languages, knowledge and traditions.",

    tags: [
      "Indigenous History",
      "Maroon Heritage",
      "Slavery & Resistance",
      "Indenture",
      "Rainforest",
      "Migration",
      "Religious Diversity",
      "Cultural Diversity",
    ],

    theme: {
      primary: "#52705b",
      secondary: "#3e4f44",
      accent: "#b8814c",
      background: "linear-gradient(180deg, #e6ede4 0%, #d9e3d9 100%)",
      card: "rgba(255,255,255,0.90)",
      text: "#303b32",
      timeline: "#52705b",
    },

    factFile: {
      capital: {
        image:
          "/images/continents/south-america/countries/suriname/fact-file/paramaribo-waterkant.jpg",

        title: "Paramaribo",

        description:
          "Paramaribo is Suriname's capital and largest city, standing beside the Suriname River near the Atlantic coast. Its historic centre contains a distinctive mixture of Dutch-influenced street planning and predominantly wooden architecture adapted to a tropical South American environment. Buildings, religious sites and public spaces also reflect the city's African, Asian, European and Indigenous histories.",
      },

      history: {
        image:
          "/images/continents/south-america/countries/suriname/fact-file/fort-nieuw-amsterdam.jpg",

        title: "Colonial Suriname",

        description:
          "Dutch colonists developed plantation settlements along Suriname's rivers, where enslaved Africans were forced to produce crops including sugar and coffee. Fort Nieuw Amsterdam was constructed during the eighteenth century near the meeting of the Suriname and Commewijne rivers to defend the plantation colony. The colonial economy created enormous wealth for plantation owners while enslaved people experienced violence, forced labour and family separation.",
      },

      food: {
        image:
          "/images/continents/south-america/countries/suriname/fact-file/pom-surinamese-dish.jpg",

        title: "Pom",

        description:
          "Pom is one of Suriname's best-known dishes and demonstrates the country's multicultural history. It is usually made using grated pomtajer root baked with meat and citrus-flavoured seasoning. The dish developed within Suriname's Jewish community but incorporates ingredients and techniques shaped by the country's wider cultural environment. Today pom is eaten across communities and is particularly associated with celebrations and family gatherings.",
      },

      wildlife: {
        image:
          "/images/continents/south-america/countries/suriname/fact-file/central-suriname-rainforest.jpg",

        title: "Rainforest Interior",

        description:
          "Most of Suriname remains covered by tropical forest. The interior supports jaguars, giant armadillos, monkeys, tapirs, giant river otters and hundreds of bird species. Rivers provide major travel routes through regions where roads are limited. Indigenous and Maroon communities have developed detailed knowledge of the forest's plants, animals and waterways over generations.",
      },

      culture: {
        image:
          "/images/continents/south-america/countries/suriname/fact-file/maroon-pangi-textile.jpg",

        title: "Maroon Pangi Textiles",

        description:
          "Pangi cloth is strongly associated with Suriname's Maroon communities. Bright fabrics are worn and adapted into clothing, wraps and decorative textiles, with colours and patterns carrying social and aesthetic meaning. Maroon textile traditions developed within communities founded by Africans who escaped slavery and created independent societies in Suriname's forested interior.",
      },
    },

    timeline: [
      {
        year: "Thousands of years ago",
        title: "Indigenous Suriname",
        text: "Indigenous peoples lived throughout the Guiana region for thousands of years before European colonisation. Communities developed detailed knowledge of rivers, rainforest plants, animals, soils and seasonal changes.",
      },

      {
        year: "Before European arrival",
        title: "Many Indigenous Peoples",
        text: "Different Indigenous peoples lived in the region, including ancestors of communities such as the Lokono, Kalina, Trio and Wayana. Languages, political organisation and ways of life varied between coastal and interior communities.",
      },

      {
        year: "Before European arrival",
        title: "Cassava Culture",
        text: "Cassava became an important food throughout the Guianas. Indigenous peoples developed specialist techniques for processing bitter cassava safely and transforming it into bread, drinks and other foods.",
      },

      {
        year: "1490s–1500s",
        title: "European Exploration",
        text: "European expeditions began exploring the Guiana coast. Spanish, Portuguese, English, French and Dutch interests all competed for influence in the wider region.",
      },

      {
        year: "1600s",
        title: "European Settlements",
        text: "English and Dutch colonists attempted to establish permanent settlements and plantation agriculture along Suriname's rivers and coastal lowlands.",
      },

      {
        year: "1650",
        title: "English Colony",
        text: "English settlers established a plantation colony under the leadership of Francis Willoughby. Sugar plantations expanded along the rivers using enslaved African labour.",
      },

      {
        year: "1667",
        title: "Dutch Suriname",
        text: "Dutch forces captured Suriname during war between England and the Dutch Republic. Dutch control was confirmed through agreements that followed the conflict.",
      },

      {
        year: "Late 1600s",
        title: "Plantations Expand",
        text: "Sugar, coffee, cacao and other plantation crops became important to the colonial economy. Enslaved Africans were forcibly transported across the Atlantic in increasing numbers.",
      },

      {
        year: "1600s–1700s",
        title: "Escape from Slavery",
        text: "Many enslaved Africans escaped plantations and travelled into the forested interior. There they formed communities that became known as Maroons.",
      },

      {
        periodKey: "suriname-maroon-resistance",
        year: "1700s",
        title: "🔍 Your Investigation: Maroon Resistance",
        text: "Maroon communities fought long campaigns against Dutch colonial forces while defending settlements deep within Suriname's interior.",
        isGap: true,
        prompt:
          "Investigate Suriname's Maroon communities and how people escaping slavery created independent societies in the rainforest.",
        questions: [
          "How did people escape the plantations?",
          "How did Maroon communities survive in the rainforest?",
          "Why did the Dutch eventually make treaties with some Maroon groups?",
        ],
      },

      {
        year: "1700s",
        title: "Maroon Societies",
        text: "Different Maroon peoples developed, including the Ndyuka, Saramaka, Matawai and others. Their societies combined African cultural inheritance with knowledge developed in the South American rainforest.",
      },

      {
        year: "1730s–1760s",
        title: "War Against the Plantations",
        text: "Maroon fighters attacked plantations, freed enslaved people and resisted military expeditions sent into the interior. Their knowledge of rivers and rainforest terrain made colonial campaigns extremely difficult.",
      },

      {
        year: "1760",
        title: "Treaty with the Ndyuka",
        text: "Dutch colonial authorities concluded a peace treaty with the Ndyuka Maroons. The agreement recognised a significant degree of autonomy in exchange for an end to attacks on plantations.",
      },

      {
        year: "1762",
        title: "Treaty with the Saramaka",
        text: "The Dutch reached a similar agreement with the Saramaka. These treaties recognised the reality that major Maroon societies had successfully maintained independence from direct plantation control.",
      },

      {
        year: "1760s–1790s",
        title: "Boni's Resistance",
        text: "A Maroon leader known as Boni became one of the most important figures in resistance to Dutch colonial rule. His fighters used fortified forest settlements and guerrilla tactics while continuing to challenge plantations and colonial forces.",
      },

      {
        year: "1793",
        title: "Death of Boni",
        text: "Boni was killed after years of warfare. He later became an important symbol of resistance to slavery and colonial rule in Surinamese history.",
      },

      {
        year: "1799–1816",
        title: "British Occupation",
        text: "Britain occupied Suriname during conflicts associated with the French Revolutionary and Napoleonic wars. Dutch colonial control was restored in the early nineteenth century.",
      },

      {
        year: "1816",
        title: "Dutch Rule Restored",
        text: "Suriname returned to Dutch colonial administration. Plantation agriculture and slavery continued for several more decades.",
      },

      {
        year: "1800s",
        title: "Plantation Slavery Continues",
        text: "Enslaved Africans and their descendants continued to labour on plantations producing sugar, coffee and other crops. Resistance, escape and the maintenance of African-derived cultural traditions continued throughout this period.",
      },

      {
        periodKey: "suriname-emancipation",
        year: "1863",
        title: "🔍 Your Investigation: Emancipation",
        text: "The Netherlands legally abolished slavery in Suriname on 1 July 1863, freeing tens of thousands of enslaved people.",
        isGap: true,
        prompt:
          "Investigate what emancipation changed — and what did not immediately change — for formerly enslaved Surinamese people.",
        questions: [
          "What is Keti Koti?",
          "What happened to plantation owners after emancipation?",
          "Why were formerly enslaved people still required to work under state supervision?",
        ],
      },

      {
        year: "1863",
        title: "Keti Koti",
        text: "Slavery was legally abolished on 1 July. The anniversary became known as Keti Koti, often translated from Sranan Tongo as 'the chains are cut', and remains an important annual commemoration.",
      },

      {
        year: "1863–1873",
        title: "State Supervision",
        text: "Emancipation did not immediately bring complete freedom. Many formerly enslaved people were required to continue working under a ten-year system of state supervision.",
      },

      {
        year: "1873",
        title: "Indian Indentured Workers Arrive",
        text: "After state supervision ended, plantation owners increasingly recruited indentured workers from British India. The first large organised group arrived in Suriname in 1873.",
      },

      {
        year: "1873–1916",
        title: "Indian Indenture",
        text: "Thousands of workers travelled from British India under labour contracts. Many remained permanently after their contracts ended, forming the foundation of Suriname's large Hindustani community.",
      },

      {
        year: "1890",
        title: "Javanese Migration Begins",
        text: "Workers began arriving from Java in the Dutch East Indies, now Indonesia. Dutch colonial authorities recruited them to work particularly in agriculture and on plantations.",
      },

      {
        periodKey: "suriname-migration",
        year: "Late 1800s–early 1900s",
        title: "🔍 Your Investigation: A Multicultural Suriname",
        text: "African-descended, Indian, Javanese, Chinese, Indigenous, European and mixed communities increasingly formed the population of Suriname.",
        isGap: true,
        prompt:
          "Investigate how colonial migration created the extraordinary mixture of languages, religions and foods found in Suriname today.",
        questions: [
          "Why did people arrive from India and Java?",
          "Which religions came with different migrant communities?",
          "Which foods, languages or celebrations remain part of Surinamese culture today?",
        ],
      },

      {
        year: "1900s",
        title: "Paramaribo's Diverse Society",
        text: "Paramaribo developed as a city where Christian churches, Hindu temples, mosques and a synagogue served different communities. Dutch remained the colonial language while many other languages flourished.",
      },

      {
        year: "Early 1900s",
        title: "Bauxite",
        text: "Large deposits of bauxite, the main ore used to produce aluminium, were developed commercially. Mining became increasingly important to Suriname's economy.",
      },

      {
        year: "1930s",
        title: "Anton de Kom",
        text: "Writer and activist Anton de Kom challenged colonialism and racism and documented the history of slavery and resistance in Suriname. Dutch colonial authorities arrested and expelled him from the colony.",
      },

      {
        year: "1940–1945",
        title: "Suriname and the Second World War",
        text: "Suriname's bauxite became strategically important because aluminium was essential for aircraft production. Allied forces protected mining and shipping infrastructure during the war.",
      },

      {
        year: "1949",
        title: "Universal Suffrage",
        text: "Voting rights were expanded as Suriname moved towards greater internal self-government after the Second World War.",
      },

      {
        year: "1954",
        title: "Greater Self-Government",
        text: "Under a new Charter for the Kingdom of the Netherlands, Suriname gained substantial control over its internal affairs while remaining part of the Dutch kingdom.",
      },

      {
        year: "1960s–1970s",
        title: "Debate About Independence",
        text: "Political leaders debated whether Suriname should remain within the Kingdom of the Netherlands or become fully independent. The question produced significant political disagreement.",
      },

      {
        periodKey: "suriname-independence",
        year: "1975",
        title: "🔍 Your Investigation: Suriname Becomes Independent",
        text: "Suriname became an independent republic on 25 November 1975 after centuries of European colonial rule.",
        isGap: true,
        prompt:
          "Investigate Suriname's transition to independence and why many Surinamese people migrated to the Netherlands around this period.",
        questions: [
          "Who negotiated Suriname's independence?",
          "Why did some people support independence while others were uncertain?",
          "Why did migration to the Netherlands increase?",
        ],
      },

      {
        year: "1975",
        title: "Independence",
        text: "The Republic of Suriname became independent from the Netherlands. Johan Ferrier became the country's first president.",
      },

      {
        year: "1975",
        title: "Migration to the Netherlands",
        text: "Large numbers of Surinamese people moved to the Netherlands before and around independence. As a result, strong family, cultural and linguistic connections continue between the two countries.",
      },

      {
        year: "1980",
        title: "Military Coup",
        text: "A group of military officers led by Desi Bouterse overthrew the elected government. Military rule followed and democratic institutions were severely weakened.",
      },

      {
        year: "1982",
        title: "December Killings",
        text: "Fifteen critics of the military government, including journalists, lawyers, academics and union figures, were killed at Fort Zeelandia. The killings became one of the most significant human-rights cases in Suriname's modern history.",
      },

      {
        year: "1986–1992",
        title: "Interior War",
        text: "Armed conflict developed between the Surinamese military and the Jungle Commando, whose membership and support were strongly connected with Maroon communities in the interior. Villages were attacked and thousands of people were displaced.",
      },

      {
        year: "1986",
        title: "Moiwana",
        text: "Soldiers attacked the Maroon village of Moiwana, killing civilians and forcing survivors to flee. The massacre became one of the best-known atrocities of Suriname's Interior War.",
      },

      {
        year: "1987",
        title: "A New Constitution",
        text: "A new constitution was approved and elections helped restore civilian political institutions, although military influence remained significant.",
      },

      {
        year: "1992",
        title: "Peace Agreement",
        text: "A peace agreement formally brought the Interior War to an end. Maroon and Indigenous communities continued to campaign over land rights and political recognition.",
      },

      {
        year: "2000",
        title: "Central Suriname Nature Reserve",
        text: "UNESCO inscribed the Central Suriname Nature Reserve on the World Heritage List. The enormous protected area preserves tropical rainforest, rivers, mountains and exceptional biodiversity.",
      },

      {
        year: "2002",
        title: "Historic Paramaribo Recognised",
        text: "UNESCO inscribed the Historic Inner City of Paramaribo on the World Heritage List, recognising its distinctive colonial town plan and architecture.",
      },

      {
        year: "2010s",
        title: "Maroon and Indigenous Land Rights",
        text: "Indigenous and Maroon communities continued campaigning for legal recognition of collective territories and greater control over lands traditionally used by their communities.",
      },

      {
        year: "2023",
        title: "Jodensavanne Recognised",
        text: "UNESCO inscribed the Jodensavanne Archaeological Site on the World Heritage List. The site preserves evidence of a Jewish settlement established in the seventeenth century alongside the remains of the Cassipora Creek cemetery.",
      },

      {
        year: "Today",
        title: "Modern Suriname",
        text: "Modern Suriname is a multilingual and multi-religious republic with exceptionally diverse cultural roots. Most people live along the Atlantic coastal region, while much of the interior remains forested and is home to Indigenous and Maroon communities. Mining, rainforest conservation, land rights and preserving cultural traditions remain important national issues.",
      },
    ],

    places: [
      {
        title: "Historic Inner City of Paramaribo",
        tag: "Architecture & Cultural Diversity",

        image:
          "/images/continents/south-america/countries/suriname/places/paramaribo-historic-centre.jpg",

        description:
          "Paramaribo's historic centre developed from a Dutch colonial settlement beside the Suriname River. Its street plan and predominantly wooden buildings combine European architectural ideas with adaptations to a tropical South American environment. Religious buildings and neighbourhoods also reflect the city's extraordinary cultural diversity. UNESCO inscribed the historic centre on the World Heritage List in 2002.",
      },

      {
        title: "Central Suriname Nature Reserve",
        tag: "Rainforest & Biodiversity",

        image:
          "/images/continents/south-america/countries/suriname/places/central-suriname-nature-reserve.jpg",

        description:
          "The Central Suriname Nature Reserve protects around 1.6 million hectares of largely undisturbed tropical forest in the country's interior. Its landscapes range from lowland rainforest to granite formations and mountains. Jaguars, giant armadillos, giant river otters, monkeys and remarkable birdlife live within the reserve, which UNESCO inscribed as a natural World Heritage property in 2000.",
      },

      {
        title: "Upper Suriname River",
        tag: "Maroon Communities",

        image:
          "/images/continents/south-america/countries/suriname/places/upper-suriname-river-maroon-village.jpg",

        description:
          "Villages along the Upper Suriname River are home particularly to Saramaka Maroon communities descended from Africans who escaped slavery centuries ago. Rivers remain crucial transport routes between settlements. Languages, social organisation, woodcarving, textiles, music, food and spiritual traditions preserve distinctive cultural knowledge developed through generations of life in the rainforest.",
      },

      {
        title: "Jodensavanne",
        tag: "Jewish & Colonial History",

        image:
          "/images/continents/south-america/countries/suriname/places/jodensavanne-synagogue-ruins.jpg",

        description:
          "Jodensavanne developed as a Jewish settlement in colonial Suriname during the seventeenth century. The archaeological site contains the remains of the Beracha VeSalom synagogue, cemeteries and other evidence of community life. Its history is also inseparable from the plantation economy and enslaved African labour on which much colonial wealth depended. UNESCO added Jodensavanne to the World Heritage List in 2023.",
      },
    ],

    influentialFigures: [
      {
        name: "Boni",
        role: "Maroon Resistance",

        image:
          "/images/continents/south-america/countries/suriname/figures/boni.jpg",

        description:
          "Boni was an eighteenth-century Maroon leader who became one of the most important figures in resistance to Dutch plantation slavery. His fighters established fortified settlements in the rainforest, attacked plantations and helped enslaved people escape. Dutch colonial forces fought lengthy campaigns against him and his followers. Boni was killed in 1793 but remains an important symbol of resistance and freedom.",
      },

      {
        name: "Anton de Kom",
        role: "Writer & Anti-Colonial Activist",

        image:
          "/images/continents/south-america/countries/suriname/figures/anton-de-kom.jpg",

        description:
          "Anton de Kom was a Surinamese writer and anti-colonial activist who challenged racism and Dutch colonial rule. His influential book We Slaves of Suriname retold the country's history from the perspective of enslaved and colonised people rather than colonial authorities. During the Second World War he joined the Dutch resistance against Nazi occupation. He was arrested and died in a German concentration camp in 1945.",
      },

      {
        name: "Sophie Redmond",
        role: "Medicine & Social Change",

        image:
          "/images/continents/south-america/countries/suriname/figures/sophie-redmond.jpg",

        description:
          "Sophie Redmond became the first Black woman to qualify as a doctor in Suriname. She provided medical care while also using theatre, radio and public activity to discuss health, education, poverty and women's lives. Her work made her an important figure in Surinamese social and cultural history.",
      },

      {
        name: "Cynthia McLeod",
        role: "Literature & History",

        image:
          "/images/continents/south-america/countries/suriname/figures/cynthia-mcleod.jpg",

        description:
          "Cynthia McLeod is a Surinamese novelist and historian whose work has helped bring the country's colonial and slavery history to a broad audience. Her historical fiction explores the lives of people living within Suriname's plantation society, particularly experiences that were often absent from traditional colonial accounts.",
      },
    ],

    culturalSpotlights: [
      {
        title: "Maroon Woodcarving & Textiles",

        image:
          "/images/continents/south-america/countries/suriname/cultural-spotlight/maroon-woodcarving-textiles.jpg",

        description:
          "Suriname's Maroon peoples developed distinctive artistic traditions in communities established by Africans who escaped plantation slavery. Men have traditionally produced elaborately carved wooden objects while women created colourful textile designs, including decorated clothing and wraps. Styles differ between Maroon peoples and continue to develop rather than remaining fixed in the past.",
      },

      {
        title: "Keti Koti",

        image:
          "/images/continents/south-america/countries/suriname/cultural-spotlight/keti-koti-celebration.jpg",

        description:
          "Keti Koti commemorates the abolition of slavery in Suriname on 1 July 1863. Its name is commonly translated from Sranan Tongo as 'the chains are cut'. Commemorations can include ceremonies, music, food, traditional clothing and remembrance of enslaved ancestors. The day celebrates freedom while also encouraging reflection on the continuing legacy of slavery.",
      },

      {
        title: "Javanese-Surinamese Gamelan",

        image:
          "/images/continents/south-america/countries/suriname/cultural-spotlight/javanese-surinamese-gamelan.jpg",

        description:
          "Javanese people arrived in Suriname from the Dutch East Indies beginning in the late nineteenth century. Their descendants maintained and adapted traditions including food, dance, language and gamelan music. Gamelan ensembles use instruments such as gongs and metallophones, demonstrating how an Indonesian musical tradition became part of South American cultural life.",
      },

      {
        title: "Baithak Gana",

        image:
          "/images/continents/south-america/countries/suriname/cultural-spotlight/baithak-gana-musicians.jpg",

        description:
          "Baithak gana developed within Suriname's Indo-Surinamese community from musical traditions brought by migrants from northern India. Singing is accompanied by instruments commonly including harmonium, dholak and dhantal. Over generations the style developed its own Surinamese identity and became an important part of celebrations, social gatherings and Indo-Surinamese cultural life.",
      },
    ],

    facts: [
      "Suriname is the smallest sovereign country in South America by land area.",
      "Dutch is Suriname's official language, making it the only independent Dutch-speaking country in South America.",
      "Most of Suriname is covered by tropical forest, while the majority of its population lives near the Atlantic coast.",
      "Maroon communities were founded by Africans who escaped plantation slavery and established independent societies in the rainforest.",
      "Slavery was legally abolished in Suriname in 1863, but formerly enslaved people remained under state supervision for another ten years.",
      "Large communities in Suriname trace their ancestry to indentured workers brought from India and Java after slavery.",
      "Paramaribo contains mosques, Hindu temples, Christian churches and a historic synagogue, reflecting the country's religious diversity.",
      "Sranan Tongo developed as an important creole language and continues to be widely used alongside Dutch and other languages.",
      "The Central Suriname Nature Reserve protects around 1.6 million hectares of tropical forest.",
      "Suriname became independent from the Netherlands on 25 November 1975.",
    ],
  },
  {
    slug: "uruguay",
    name: "Uruguay",
    flag: "🇺🇾",

    capital: "Montevideo",
    population: "About 3.4 million",
    languages: [
      "Spanish",
      "Uruguayan Sign Language",
      "Portuguese-influenced varieties near the Brazilian border",
    ],
    currency: "Uruguayan Peso (UYU)",

    heroImage:
      "/images/continents/south-america/countries/uruguay/uruguayan-pampas-coast-landscape.jpg",

    intro:
      "Uruguay lies between Argentina and Brazil on the Atlantic coast and the Río de la Plata. Much of its landscape consists of rolling grasslands rather than high mountains or rainforest, and cattle ranching has played a major role in its history. Indigenous Charrúa and other peoples, Spanish and Portuguese colonisation, African-descended communities and waves of European immigration all contributed to modern Uruguayan culture. Today traditions including candombe, tango, mate, carnival and football are deeply woven into national life.",

    overview:
      "The territory of modern Uruguay was inhabited by Indigenous peoples for thousands of years before European colonisation. Spanish and Portuguese powers competed for the region because of its strategic position beside the Río de la Plata, while cattle introduced by Europeans transformed the grasslands and encouraged the development of a rural horse-riding culture associated with the gaucho. During the early nineteenth century, José Gervasio Artigas became the central figure in a revolutionary movement that promoted regional autonomy and a federal political system. Uruguay eventually emerged as an independent state in 1828. Immigration, expanding livestock exports and urban growth transformed the country during the nineteenth and early twentieth centuries, while Afro-Uruguayan communities played a crucial role in the development of candombe and the cultural life of Montevideo. Reforms associated particularly with José Batlle y Ordóñez helped build an extensive secular and social state. Uruguay later experienced economic difficulties, political violence and a civic-military dictatorship from 1973 to 1985. Since the restoration of democracy, debates surrounding dictatorship, human rights, inequality and national identity have continued alongside Uruguay's strong traditions in literature, music, football and social life.",

    tags: [
      "Indigenous History",
      "Afro-Uruguayan Heritage",
      "Independence",
      "Grasslands",
      "Candombe",
      "Tango",
      "Football",
      "Human Rights",
    ],

    theme: {
      primary: "#557b8f",
      secondary: "#3f5967",
      accent: "#d0a74e",
      background: "linear-gradient(180deg, #e7eef0 0%, #dde6e2 100%)",
      card: "rgba(255,255,255,0.90)",
      text: "#2d3b40",
      timeline: "#557b8f",
    },

    factFile: {
      capital: {
        image:
          "/images/continents/south-america/countries/uruguay/fact-file/montevideo-ciudad-vieja.jpg",

        title: "Montevideo",

        description:
          "Montevideo is Uruguay's capital and largest city, standing on the Río de la Plata. Spanish authorities established a permanent settlement there during the eighteenth century as Spain and Portugal competed for control of the region. The modern city contains colonial buildings, nineteenth- and twentieth-century architecture, markets, beaches and an enormous waterfront promenade known as the Rambla. Montevideo is also one of the historic centres of both candombe and tango.",
      },

      history: {
        image:
          "/images/continents/south-america/countries/uruguay/fact-file/charrua-indigenous-history.jpg",

        title: "Charrúa & Indigenous Uruguay",

        description:
          "Indigenous peoples including the Charrúa, Chaná and Guaraní lived in the territory of modern Uruguay before European colonisation. Their populations were severely reduced through disease, warfare, displacement and colonial expansion. In 1831 government forces attacked Charrúa groups at Salsipuedes, an event that became central to debates about Indigenous history in Uruguay. Indigenous ancestry and identity continue to be researched and reclaimed today.",
      },

      food: {
        image:
          "/images/continents/south-america/countries/uruguay/fact-file/mate-gourd-thermos.jpg",

        title: "Mate",

        description:
          "Mate is prepared by placing dried yerba mate leaves inside a small vessel, adding hot water and drinking through a metal straw called a bombilla. The plant and its use have Indigenous Guaraní roots and the drink spread widely across southern South America. In Uruguay, people commonly carry a mate together with a thermos of hot water, making the drink a highly visible part of everyday social life.",
      },

      wildlife: {
        image:
          "/images/continents/south-america/countries/uruguay/fact-file/pampas-deer-grassland.jpg",

        title: "Pampas Deer",

        description:
          "Uruguay's natural grasslands form part of the wider South American Pampas ecosystem. One of their characteristic mammals is the pampas deer, which once ranged widely across the continent's open grasslands. Agriculture, livestock farming and habitat change greatly reduced its populations. Uruguay still supports important surviving groups and the species has become a symbol of grassland conservation.",
      },

      culture: {
        image:
          "/images/continents/south-america/countries/uruguay/fact-file/candombe-drummers-montevideo.jpg",

        title: "Candombe",

        description:
          "Candombe is an Afro-Uruguayan musical and social tradition centred on groups of drums called tambores. It developed particularly among communities of African descent in Montevideo and carries memories of slavery, resistance, neighbourhood identity and community life. Comparsas of drummers and dancers remain central to carnival and the llamadas. UNESCO recognises candombe and its socio-cultural space as intangible cultural heritage.",
      },
    },

    timeline: [
      {
        year: "Thousands of years ago",
        title: "The First Uruguayans",
        text: "People lived in the grasslands, wetlands and river valleys of present-day Uruguay thousands of years before European arrival. Communities hunted, gathered, fished and adapted to the region's open landscapes.",
      },

      {
        year: "Before European colonisation",
        title: "Indigenous Peoples",
        text: "Different Indigenous peoples lived in and moved through the region, including Charrúa, Chaná and Guaraní communities. Their societies had their own languages, territories and cultural traditions.",
      },

      {
        year: "1516",
        title: "European Expedition",
        text: "The Spanish expedition led by Juan Díaz de Solís entered the Río de la Plata. Early European attempts to control the region remained limited.",
      },

      {
        year: "1600s",
        title: "Cattle Transform the Grasslands",
        text: "European settlers introduced cattle and horses, which multiplied across Uruguay's extensive grasslands. Wild cattle attracted hunters and traders and later became the basis of an important ranching economy.",
      },

      {
        year: "1600s–1700s",
        title: "The Gaucho",
        text: "A mobile horse-riding culture developed across the grasslands of Uruguay, Argentina and southern Brazil. Gauchos worked with cattle and became important figures in rural life, warfare, literature and national identity.",
      },

      {
        year: "1680",
        title: "Colonia del Sacramento",
        text: "Portuguese settlers founded Colonia del Sacramento opposite Buenos Aires on the Río de la Plata. Spain and Portugal repeatedly fought and negotiated over control of this strategically important settlement.",
      },

      {
        year: "1720s",
        title: "Montevideo is Established",
        text: "Spanish authorities established Montevideo partly to prevent further Portuguese expansion. Its sheltered harbour helped it develop into an important military and trading centre.",
      },

      {
        year: "1700s",
        title: "Enslaved Africans",
        text: "Enslaved Africans were transported to Montevideo and the wider Río de la Plata region. African-descended people worked in households, trades, ports, agriculture and other forms of labour while maintaining and developing cultural traditions.",
      },

      {
        year: "Late 1700s–1800s",
        title: "Afro-Uruguayan Communities",
        text: "African and Afro-descended communities created mutual-aid organisations, religious practices, celebrations, music and dance. These histories contributed to traditions that eventually developed into modern candombe.",
      },

      {
        year: "1806–1807",
        title: "British Invasions",
        text: "British forces attacked the Río de la Plata and temporarily occupied Montevideo. Local resistance across the region contributed to growing political confidence among people born in the colonies.",
      },

      {
        year: "1810",
        title: "Revolution in the Río de la Plata",
        text: "Revolution began in Buenos Aires against Spanish colonial authority. Political conflict quickly spread across the region that included modern Uruguay.",
      },

      {
        year: "1811",
        title: "José Gervasio Artigas",
        text: "José Gervasio Artigas emerged as the leading revolutionary figure in the Banda Oriental, the region that became Uruguay. His forces defeated Spanish troops at the Battle of Las Piedras.",
      },

      {
        periodKey: "uruguay-artigas",
        year: "1811–1820",
        title: "🔍 Your Investigation: Artigas and the Federal League",
        text: "Artigas argued that the provinces of the Río de la Plata should cooperate through a federal system rather than being controlled by a powerful central government in Buenos Aires.",
        isGap: true,
        prompt:
          "Investigate José Gervasio Artigas and why he became Uruguay's most important national hero even though Uruguay did not yet exist as an independent country.",
        questions: [
          "What political system did Artigas support?",
          "What was the Federal League?",
          "Why is Artigas remembered as the 'Protector of Free Peoples'?",
        ],
      },

      {
        year: "1811",
        title: "The Oriental Exodus",
        text: "Thousands of civilians followed Artigas and his forces away from territory controlled by Spanish authorities. The movement became an important event in Uruguay's national historical memory.",
      },

      {
        year: "1813",
        title: "Instructions of the Year XIII",
        text: "Representatives associated with Artigas demanded independence, republican government, greater provincial autonomy and a federal political system.",
      },

      {
        year: "1815",
        title: "The Federal League",
        text: "Artigas became the leading figure in a federation of provinces opposed to centralised control from Buenos Aires. His influence extended beyond the territory of modern Uruguay.",
      },

      {
        year: "1815",
        title: "Land Regulation",
        text: "Artigas introduced a land programme intended to redistribute confiscated land, with preference given to groups including poor families, formerly enslaved people and Indigenous people.",
      },

      {
        year: "1816",
        title: "Portuguese Invasion",
        text: "Portuguese forces invaded from Brazil. After years of fighting, Artigas was defeated and eventually went into exile in Paraguay.",
      },

      {
        year: "1821",
        title: "Cisplatina",
        text: "The territory was incorporated into the Portuguese-controlled Kingdom of Brazil as the Cisplatina Province and remained under Brazilian control after Brazil became independent.",
      },

      {
        year: "1825",
        title: "The Thirty-Three Orientals",
        text: "A revolutionary group traditionally known as the Thirty-Three Orientals crossed into the territory and helped launch an uprising against Brazilian rule.",
      },

      {
        year: "1825",
        title: "Independence Declared",
        text: "Revolutionary representatives declared independence from Brazil and political union with the United Provinces of the Río de la Plata, contributing to war between Brazil and the United Provinces.",
      },

      {
        periodKey: "uruguay-independence",
        year: "1828",
        title: "🔍 Your Investigation: Why Did Uruguay Become Independent?",
        text: "A peace settlement between Brazil and the United Provinces created an independent state between the two regional powers.",
        isGap: true,
        prompt:
          "Investigate how war, local independence movements and rivalry between Brazil and Argentina contributed to the creation of Uruguay.",
        questions: [
          "Who were the Thirty-Three Orientals?",
          "Why were Brazil and the United Provinces fighting?",
          "What role did Britain play in the peace negotiations?",
        ],
      },

      {
        year: "1828",
        title: "Independent Uruguay",
        text: "The Preliminary Peace Convention established the territory as an independent state between Brazil and the United Provinces.",
      },

      {
        year: "1830",
        title: "First Constitution",
        text: "Uruguay's first constitution came into force and the new republic began establishing its national political institutions.",
      },

      {
        year: "1831",
        title: "Salsipuedes",
        text: "Government forces under President Fructuoso Rivera attacked Charrúa groups at Salsipuedes. People were killed, captured and dispersed. The event became a central symbol of the violent destruction and displacement experienced by Indigenous communities in nineteenth-century Uruguay.",
      },

      {
        year: "1839–1851",
        title: "The Great War",
        text: "Uruguay experienced a long civil and international conflict involving the Colorado and Blanco political movements as well as neighbouring Argentina and Brazil and European powers.",
      },

      {
        year: "1840s",
        title: "Abolition of Slavery",
        text: "Slavery was abolished through measures introduced during the Great War. Afro-Uruguayans nevertheless continued to experience discrimination and social inequality after legal emancipation.",
      },

      {
        year: "Mid–late 1800s",
        title: "European Immigration",
        text: "Large numbers of immigrants arrived, particularly from Spain and Italy. Immigration transformed Montevideo and contributed to major changes in language, food, work, architecture and popular culture.",
      },

      {
        year: "1860s–1900s",
        title: "Meat and the World Economy",
        text: "Uruguay's enormous cattle herds connected the country increasingly with international markets. New technologies allowed meat to be processed, preserved and eventually refrigerated for export.",
      },

      {
        year: "1865 onwards",
        title: "Fray Bentos",
        text: "Industrial meat production expanded at Fray Bentos on the Uruguay River. Meat extract and later corned and frozen beef were exported internationally from the enormous industrial complex.",
      },

      {
        year: "Late 1800s",
        title: "Candombe Evolves",
        text: "Afro-Uruguayan communities in Montevideo continued developing candombe traditions involving drumming, procession and dance. Neighbourhoods including Sur, Palermo and Cordón became particularly important centres.",
      },

      {
        year: "Late 1800s–early 1900s",
        title: "Tango Emerges",
        text: "Tango developed in the urban world of the Río de la Plata, particularly Montevideo and Buenos Aires. African-descended communities, European immigrants and local criollo cultures all contributed to the environment in which the music and dance emerged.",
      },

      {
        year: "1903–1907",
        title: "First Batlle Presidency",
        text: "José Batlle y Ordóñez served his first term as president during a period of political and social reform. His governments sought to strengthen state institutions and reduce older patterns of political conflict.",
      },

      {
        year: "1904",
        title: "Battle of Masoller",
        text: "Government forces defeated a Blanco rebellion led by Aparicio Saravia. The conflict is generally regarded as the last major nineteenth-style civil war between Uruguay's traditional political factions.",
      },

      {
        year: "1911–1915",
        title: "Second Batlle Presidency",
        text: "During Batlle's second presidency, Uruguay expanded social legislation and the role of the state in public services and economic life.",
      },

      {
        year: "Early 1900s",
        title: "Social Reform",
        text: "Uruguay introduced reforms involving labour protections, education, secular government and social welfare. These changes helped shape the country's reputation for an unusually extensive social state in Latin America.",
      },

      {
        year: "1917",
        title: "A New Constitution",
        text: "A new constitution reformed Uruguay's political system and reflected continuing debates about how executive power should be organised.",
      },

      {
        year: "1924",
        title: "Olympic Football Champions",
        text: "Uruguay won the football tournament at the Paris Olympic Games, bringing international attention to the quality of South American football.",
      },

      {
        year: "1928",
        title: "Olympic Champions Again",
        text: "Uruguay retained its Olympic football title in Amsterdam, defeating Argentina in the final.",
      },

      {
        year: "1930",
        title: "The First FIFA World Cup",
        text: "Uruguay hosted the first FIFA World Cup and defeated Argentina in the final at Montevideo's Estadio Centenario to become the first world champions.",
      },

      {
        year: "1933",
        title: "Terra's Coup",
        text: "President Gabriel Terra dissolved the existing political arrangements and established an authoritarian government. A new constitution followed in 1934.",
      },

      {
        year: "1940s–1950s",
        title: "Welfare and Prosperity",
        text: "Strong agricultural exports supported relatively high living standards and extensive public services. Uruguay was sometimes described as unusually prosperous and socially developed compared with much of the region.",
      },

      {
        year: "1950",
        title: "The Maracanazo",
        text: "Uruguay defeated Brazil in the decisive match of the 1950 World Cup at Rio de Janeiro's Maracanã Stadium. The victory became one of the most famous moments in international football history.",
      },

      {
        year: "1950s–1960s",
        title: "Economic Difficulties",
        text: "Falling export advantages, inflation and economic stagnation contributed to increasing labour unrest and political tension.",
      },

      {
        year: "1960s",
        title: "Tupamaros",
        text: "The left-wing National Liberation Movement, commonly known as the Tupamaros, carried out robberies, kidnappings and other armed actions as political violence increased.",
      },

      {
        year: "Late 1960s–early 1970s",
        title: "Growing State Repression",
        text: "Governments increasingly used emergency powers while security forces confronted armed groups and political unrest. Reports of torture and other abuses increased during the period.",
      },

      {
        periodKey: "uruguay-dictatorship",
        year: "1973–1985",
        title: "🔍 Your Investigation: Uruguay's Dictatorship",
        text: "In 1973 President Juan María Bordaberry dissolved parliament with military support. Uruguay entered more than a decade of civic-military dictatorship.",
        isGap: true,
        prompt:
          "Investigate how dictatorship changed everyday life in Uruguay and how the country later dealt with questions of memory and human rights.",
        questions: [
          "What happened to parliament and political parties?",
          "What happened to political prisoners and opponents?",
          "How did Uruguay return to democratic government?",
        ],
      },

      {
        year: "1973",
        title: "Parliament is Dissolved",
        text: "President Bordaberry dissolved parliament with support from the armed forces. Political organisations were restricted and the military gained extensive power.",
      },

      {
        year: "1970s",
        title: "Political Imprisonment",
        text: "Thousands of Uruguayans were imprisoned for political reasons, while others experienced torture, exile or disappearance. Uruguay became known for having an exceptionally large political-prisoner population relative to its size.",
      },

      {
        year: "1970s",
        title: "Operation Condor",
        text: "Uruguay's dictatorship participated in Operation Condor, through which several South American military regimes cooperated in tracking, abducting and repressing political opponents across national borders.",
      },

      {
        year: "1980",
        title: "Constitutional Referendum",
        text: "The military government proposed a new constitution intended to formalise its political system. Voters rejected the proposal, marking an important challenge to continued authoritarian rule.",
      },

      {
        year: "1984",
        title: "Negotiated Transition",
        text: "Political negotiations and elections prepared the way for a return to civilian constitutional government.",
      },

      {
        year: "1985",
        title: "Democracy Returns",
        text: "Julio María Sanguinetti became president as elected civilian government was restored after twelve years of dictatorship.",
      },

      {
        year: "1980s onwards",
        title: "Memory and Human Rights",
        text: "Uruguay continued to debate how crimes committed during dictatorship should be investigated and remembered. Families and human-rights organisations have continued searching for information about people who disappeared.",
      },

      {
        year: "1995",
        title: "Colonia Becomes World Heritage",
        text: "UNESCO inscribed the Historic Quarter of Colonia del Sacramento on the World Heritage List, recognising the city's distinctive Portuguese and Spanish colonial history.",
      },

      {
        year: "2009",
        title: "Candombe Recognised",
        text: "UNESCO recognised candombe and its socio-cultural space as intangible cultural heritage, particularly highlighting the traditions of the Sur, Palermo and Cordón neighbourhoods of Montevideo.",
      },

      {
        year: "2009",
        title: "Tango Recognised",
        text: "Argentina and Uruguay jointly secured UNESCO recognition for tango as intangible cultural heritage, reflecting its shared development around Buenos Aires and Montevideo.",
      },

      {
        year: "2015",
        title: "Fray Bentos Becomes World Heritage",
        text: "UNESCO inscribed the Fray Bentos Industrial Landscape, recognising an industrial complex that connected Uruguay's livestock economy with international food production and trade.",
      },

      {
        year: "2021",
        title: "Eladio Dieste's Architecture Recognised",
        text: "UNESCO inscribed the Church of Atlántida designed by Uruguayan engineer Eladio Dieste. Its innovative curved brick construction demonstrated how ordinary materials could be used to create remarkable architecture.",
      },

      {
        year: "Today",
        title: "Modern Uruguay",
        text: "Modern Uruguay is a highly urbanised country where most people live in or around the southern coastal region. Candombe, tango, mate, carnival, literature and football remain important cultural traditions, while the country's Indigenous and Afro-Uruguayan histories and the legacy of dictatorship continue to be researched, discussed and remembered.",
      },
    ],

    places: [
      {
        title: "Colonia del Sacramento",
        tag: "Colonial History",

        image:
          "/images/continents/south-america/countries/uruguay/places/colonia-del-sacramento.jpg",

        description:
          "Portuguese settlers founded Colonia del Sacramento in 1680 directly across the Río de la Plata from Buenos Aires. Portugal and Spain repeatedly fought over the town, leaving a historic centre where different colonial planning and architectural traditions can still be seen. Cobblestone streets, defensive remains and historic buildings survive within the UNESCO World Heritage area.",
      },

      {
        title: "Fray Bentos Industrial Landscape",
        tag: "Industry & Global Trade",

        image:
          "/images/continents/south-america/countries/uruguay/places/fray-bentos-industrial-landscape.jpg",

        description:
          "Fray Bentos became a major centre of industrial food production beside the Uruguay River. From the nineteenth century, factories processed cattle from the surrounding grasslands into meat extract, corned beef and later frozen meat for international markets. The surviving industrial buildings, machinery and workers' facilities show how Uruguay became connected to a global food-production network.",
      },

      {
        title: "Montevideo & the Rambla",
        tag: "Capital & Coast",

        image:
          "/images/continents/south-america/countries/uruguay/places/montevideo-rambla-city.jpg",

        description:
          "Montevideo stretches along the Río de la Plata behind a waterfront promenade known as the Rambla. The city contains the historic Ciudad Vieja, markets, beaches, parks, football stadiums and neighbourhoods central to candombe and tango. The Rambla itself runs for many kilometres and is used for walking, cycling, fishing, exercise, socialising and drinking mate.",
      },

      {
        title: "Cabo Polonio",
        tag: "Coast & Wildlife",

        image:
          "/images/continents/south-america/countries/uruguay/places/cabo-polonio-coast.jpg",

        description:
          "Cabo Polonio lies on Uruguay's Atlantic coast among dunes, beaches and rocky headlands. The settlement is isolated from the conventional road network and surrounded by protected coastal landscapes. Large colonies of South American sea lions and fur seals use the offshore rocks and islands, making the area important for wildlife as well as tourism.",
      },
    ],

    influentialFigures: [
      {
        name: "José Gervasio Artigas",
        role: "Independence & Federalism",

        image:
          "/images/continents/south-america/countries/uruguay/figures/jose-gervasio-artigas.jpg",

        description:
          "José Gervasio Artigas became the leading revolutionary figure of the Banda Oriental during the struggle against Spanish rule. Rather than simply seeking an independent Uruguay, Artigas promoted a wider federal system in which provinces would retain substantial autonomy. He also supported a land redistribution programme. Although defeated and forced into exile in Paraguay, he later became Uruguay's central national hero.",
      },

      {
        name: "José Batlle y Ordóñez",
        role: "Politics & Social Reform",

        image:
          "/images/continents/south-america/countries/uruguay/figures/jose-batlle-ordonez.jpg",

        description:
          "José Batlle y Ordóñez served twice as president and became one of the most influential political figures in modern Uruguayan history. His era was associated with an expanded role for the state, labour protections, social legislation, secularisation and public services. The political tradition connected with his ideas became known as Batllismo and strongly influenced Uruguay's twentieth-century development.",
      },

      {
        name: "Mario Benedetti",
        role: "Literature & Poetry",

        image:
          "/images/continents/south-america/countries/uruguay/figures/mario-benedetti.jpg",

        description:
          "Mario Benedetti was one of Uruguay's best-known writers and produced poetry, novels, short stories, essays and journalism. His writing explored love, ordinary urban life, politics, exile and memory. During Uruguay's dictatorship he lived abroad for many years, and the experience of exile became an important theme in his later work.",
      },

      {
        name: "Eduardo Galeano",
        role: "Writing & Latin American History",

        image:
          "/images/continents/south-america/countries/uruguay/figures/eduardo-galeano.jpg",

        description:
          "Eduardo Galeano was a Uruguayan journalist and writer whose books examined Latin American history, inequality, colonialism, politics, culture and football. Following the 1973 coup he went into exile. His distinctive writing often combined history, journalism, memory and short literary fragments, making his work influential far beyond Uruguay.",
      },
    ],

    culturalSpotlights: [
      {
        title: "Candombe & the Llamadas",

        image:
          "/images/continents/south-america/countries/uruguay/cultural-spotlight/candombe-llamada-drummers.jpg",

        description:
          "Candombe developed within Afro-Uruguayan communities and is centred on ensembles of barrel-shaped drums known as chico, repique and piano. In Montevideo, groups gather to tune their drums around fires before marching through neighbourhood streets. The famous llamadas bring comparsas of drummers and dancers together in powerful processions. Candombe carries memories of African ancestry, slavery, resistance and neighbourhood identity and was recognised by UNESCO in 2009.",
      },

      {
        title: "Montevideo Tango",

        image:
          "/images/continents/south-america/countries/uruguay/cultural-spotlight/montevideo-tango-dancers.jpg",

        description:
          "Tango belongs to the shared cultural world of the Río de la Plata rather than to Argentina alone. It developed among the urban working classes of both Buenos Aires and Montevideo in environments shaped by European immigration, African-descended communities and local criollo culture. Music, poetry and partnered dance all became parts of the tradition. Argentina and Uruguay jointly nominated tango for UNESCO recognition in 2009.",
      },

      {
        title: "Uruguayan Murga",

        image:
          "/images/continents/south-america/countries/uruguay/cultural-spotlight/uruguayan-murga-carnival.jpg",

        description:
          "Murga is one of the distinctive sounds of Uruguayan carnival. Groups of performers wearing colourful costumes and theatrical makeup sing powerful choral arrangements accompanied by percussion. Performances combine humour, satire, storytelling and commentary on events from the previous year. Competition between murgas forms an important part of Montevideo's famously long carnival season.",
      },

      {
        title: "Mate & the Thermos",

        image:
          "/images/continents/south-america/countries/uruguay/cultural-spotlight/uruguayan-mate-thermos.jpg",

        description:
          "Mate is shared across several South American countries, but it has a particularly visible place in everyday Uruguayan life. People commonly carry a mate in one hand and a thermos of hot water under an arm while walking, talking or sitting with friends. The custom has Indigenous Guaraní roots and demonstrates how an ancient regional plant tradition became part of modern urban culture.",
      },
    ],

    facts: [
      "Uruguay is one of the smallest sovereign countries in South America.",
      "More than half of Uruguay's population lives in the wider Montevideo metropolitan area.",
      "Uruguay's landscape is dominated by grasslands and low rolling countryside rather than high mountain ranges.",
      "The Indigenous Charrúa and other peoples lived in the region long before Spanish and Portuguese colonisation.",
      "Colonia del Sacramento changed between Portuguese and Spanish control several times because of its strategic position on the Río de la Plata.",
      "Uruguay hosted and won the first FIFA World Cup in 1930.",
      "Uruguay also won the 1950 World Cup after defeating Brazil at the Maracanã in one of football's most famous matches.",
      "Candombe developed from Afro-Uruguayan communities and remains a major part of Montevideo's cultural life.",
      "Tango is shared heritage between Uruguay and Argentina and developed in both Montevideo and Buenos Aires.",
      "Uruguay currently has three UNESCO World Heritage properties: Colonia del Sacramento, Fray Bentos Industrial Landscape and Eladio Dieste's Church of Atlántida.",
    ],
  },
  {
    slug: "venezuela",
    name: "Venezuela",
    flag: "🇻🇪",

    capital: "Caracas",
    population: "About 29 million",
    languages: [
      "Spanish",
      "Wayuunaiki",
      "Warao",
      "Pemón",
      "Other Indigenous languages",
    ],
    currency: "Venezuelan Bolívar (VES)",

    heroImage:
      "/images/continents/south-america/countries/venezuela/canaima-tepuis-waterfalls.jpg",

    intro:
      "Venezuela stretches from the Caribbean coast through the Andes and vast Llanos grasslands to the forests, rivers and ancient table mountains of the Guiana Highlands. Indigenous peoples including the Wayuu, Warao, Pemón and many others remain important parts of the country's cultural landscape, alongside African, European and mixed heritage. Venezuela has also produced distinctive traditions in music, dance, food, art and literature.",

    overview:
      "People lived across the territory of modern Venezuela for thousands of years before European colonisation. Indigenous communities developed societies adapted to environments ranging from Caribbean islands and coastal lagoons to the Orinoco Delta, Llanos and Guiana Highlands. Spanish colonisation began during the sixteenth century and brought warfare, epidemic disease, forced labour, Christianity and the enslavement of Africans. Indigenous resistance continued, with leaders including Guaicaipuro remembered for opposing Spanish expansion around Caracas. During the nineteenth century, Venezuela became one of the main centres of the Spanish American independence struggle and the birthplace of Simón Bolívar. The new republic later experienced regional conflicts, authoritarian governments and the growing importance of petroleum. Large oil discoveries transformed Venezuela during the twentieth century and made it one of the world's major petroleum exporters. Modern Venezuela has experienced profound political, economic and social upheaval, while Indigenous traditions, joropo, Afro-Venezuelan celebrations, cassava knowledge and other cultural practices continue across the country.",

    tags: [
      "Indigenous History",
      "Caribbean",
      "Orinoco",
      "Independence",
      "Llanos",
      "Oil",
      "Afro-Venezuelan Heritage",
      "Living Traditions",
    ],

    theme: {
      primary: "#63754c",
      secondary: "#435c5c",
      accent: "#d09a45",
      background: "linear-gradient(180deg, #e8eadb 0%, #dbe5df 100%)",
      card: "rgba(255,255,255,0.90)",
      text: "#303b34",
      timeline: "#63754c",
    },

    factFile: {
      capital: {
        image:
          "/images/continents/south-america/countries/venezuela/fact-file/caracas-avila-mountain.jpg",

        title: "Caracas",

        description:
          "Caracas is Venezuela's capital and largest urban centre. It lies in a mountain valley close to the Caribbean coast, separated from the sea by the steep range known as El Ávila or Waraira Repano. The Spanish founded the city in 1567 in a region where Indigenous communities had resisted colonial expansion. Caracas later became closely connected with the independence movement and was the birthplace of Simón Bolívar.",
      },

      history: {
        image:
          "/images/continents/south-america/countries/venezuela/fact-file/coro-colonial-architecture.jpg",

        title: "Coro & its Port",

        description:
          "Coro was founded by Spanish colonists in 1527 and became one of the earliest European colonial cities in northern South America. Its historic architecture is unusual because local earthen-building traditions interacted with Spanish Mudéjar and Dutch influences. Coro and the nearby port of La Vela were inscribed on UNESCO's World Heritage List in 1993.",
      },

      food: {
        image:
          "/images/continents/south-america/countries/venezuela/fact-file/casabe-cassava-bread.jpg",

        title: "Casabe",

        description:
          "Casabe is a thin, crisp bread made from cassava and has Indigenous roots stretching back long before European colonisation. Preparing bitter cassava requires specialist knowledge because naturally occurring toxins must be removed through grating, pressing and cooking. Indigenous communities across the Caribbean and northern South America developed these techniques over generations, and cassava bread remains part of Venezuelan food culture.",
      },

      wildlife: {
        image:
          "/images/continents/south-america/countries/venezuela/fact-file/canaima-tepui-landscape.jpg",

        title: "Canaima & the Tepuis",

        description:
          "Canaima National Park protects an enormous landscape of rainforest, savannah, rivers and flat-topped mountains called tepuis. These ancient sandstone formations rise dramatically above the surrounding landscape and support unusual plants and animals, some found nowhere else. The region is also part of the ancestral homeland of Pemón Indigenous communities.",
      },

      culture: {
        image:
          "/images/continents/south-america/countries/venezuela/fact-file/joropo-harp-cuatro-maracas.jpg",

        title: "Joropo",

        description:
          "Joropo is one of Venezuela's most recognisable musical and dance traditions. Different regional forms use combinations of instruments including the harp, cuatro, maracas and bandola. Dancing involves rapid, rhythmic footwork performed by couples. The tradition is especially associated with the Llanos but has developed regional forms across Venezuela. UNESCO inscribed joropo on the Representative List of the Intangible Cultural Heritage of Humanity in 2025.",
      },
    },

    timeline: [
      {
        year: "Thousands of years ago",
        title: "The First Venezuelans",
        text: "People lived across the territory of modern Venezuela thousands of years before European arrival. Communities adapted to environments including the Caribbean coast, Andes, Llanos, Orinoco basin and Guiana Highlands.",
      },

      {
        year: "Before European colonisation",
        title: "Many Indigenous Nations",
        text: "Numerous Indigenous peoples developed their own languages, political systems and traditions. Their descendants include Wayuu, Warao, Pemón, Kariña, Yanomami, Piaroa, Ye'kwana and many other communities.",
      },

      {
        year: "Before European colonisation",
        title: "The Orinoco",
        text: "The enormous Orinoco River and its tributaries supported travel, fishing, farming and trade. River systems connected communities across forests, wetlands, savannahs and the delta.",
      },

      {
        year: "Before European colonisation",
        title: "Cassava Knowledge",
        text: "Indigenous peoples developed sophisticated methods for cultivating and processing cassava. Bitter varieties require careful preparation to remove naturally occurring toxins before the flour can be cooked into foods such as casabe.",
      },

      {
        year: "1498",
        title: "Columbus Reaches Venezuela",
        text: "During his third voyage, Christopher Columbus reached the coast of present-day Venezuela and encountered the enormous flow of freshwater entering the Gulf of Paria from the Orinoco system.",
      },

      {
        year: "1499",
        title: "The Name Venezuela",
        text: "An expedition led by Alonso de Ojeda explored the coast. European accounts later connected houses built over water around Lake Maracaibo with the name Venezuela, meaning 'Little Venice', although the history of the name has been debated.",
      },

      {
        year: "Early 1500s",
        title: "Pearls and Forced Labour",
        text: "Spanish colonists exploited pearl fisheries around Cubagua and Margarita. Indigenous people were subjected to violent forced labour and slave-raiding as Europeans sought wealth from the Caribbean coast.",
      },

      {
        year: "1527",
        title: "Coro is Founded",
        text: "Spanish colonists established Coro on Venezuela's Caribbean coast. It became an early centre of colonial administration and religious activity.",
      },

      {
        year: "1528–1546",
        title: "The Welser Colony",
        text: "The Spanish Crown granted colonial rights in Venezuela to the German Welser banking family. Expeditions searched the interior for wealth and the legendary El Dorado before Spanish authorities ended the arrangement.",
      },

      {
        year: "1500s",
        title: "African Slavery",
        text: "Enslaved Africans were forcibly transported to Venezuela and made to work on plantations, in mines, in households and in other forms of labour. African-descended communities became an important part of Venezuelan society and culture.",
      },

      {
        periodKey: "venezuela-guaicaipuro",
        year: "1560s",
        title: "🔍 Your Investigation: Guaicaipuro",
        text: "Indigenous leader Guaicaipuro organised resistance against Spanish expansion in the central region around present-day Caracas.",
        isGap: true,
        prompt:
          "Investigate Guaicaipuro and how Indigenous communities resisted Spanish colonisation.",
        questions: [
          "Which Indigenous communities lived around the Caracas region?",
          "Why did they resist Spanish settlement?",
          "Why is Guaicaipuro remembered in Venezuela today?",
        ],
      },

      {
        year: "1567",
        title: "Caracas is Founded",
        text: "Spanish colonists established Santiago de León de Caracas after years of Indigenous resistance in the surrounding region.",
      },

      {
        year: "1600s–1700s",
        title: "Cacao Economy",
        text: "Cacao became one of colonial Venezuela's most important exports. Plantations relied heavily on enslaved African labour, particularly in fertile coastal valleys.",
      },

      {
        year: "1600s–1700s",
        title: "Escaped Communities",
        text: "Some enslaved Africans escaped plantations and established independent communities, often known as cumbes. These settlements became centres of resistance to slavery and colonial authority.",
      },

      {
        year: "1730",
        title: "Juan Francisco de León's Revolt",
        text: "Settlers and farmers rebelled against the trading power of the Royal Guipuzcoan Company, which held extensive commercial privileges in colonial Venezuela.",
      },

      {
        year: "1795",
        title: "Coro Rebellion",
        text: "José Leonardo Chirino led a rebellion involving enslaved and free people near Coro. The movement challenged slavery and colonial inequality but was defeated by colonial authorities.",
      },

      {
        year: "1797",
        title: "Gual and España Conspiracy",
        text: "Manuel Gual and José María España participated in a movement seeking republican government and an end to Spanish colonial rule. The conspiracy was discovered before it could succeed.",
      },

      {
        year: "1806",
        title: "Francisco de Miranda",
        text: "Venezuelan revolutionary Francisco de Miranda attempted to launch an independence movement from the Caribbean coast. The expedition failed but became an important precursor to later independence struggles.",
      },

      {
        year: "1810",
        title: "Caracas Rejects Spanish Authority",
        text: "Political leaders in Caracas removed the Spanish captain-general and established a governing junta during the crisis of the Spanish monarchy.",
      },

      {
        periodKey: "venezuela-independence",
        year: "1811",
        title: "🔍 Your Investigation: Venezuela Declares Independence",
        text: "Representatives declared Venezuela independent from Spain on 5 July 1811, creating one of the earliest independent republics in Spanish South America.",
        isGap: true,
        prompt:
          "Investigate why Venezuela's first attempt at independence collapsed and why the war continued for another decade.",
        questions: [
          "Who supported independence and who opposed it?",
          "What happened to the First Republic?",
          "How did Simón Bolívar become a major leader of the independence movement?",
        ],
      },

      {
        year: "1811",
        title: "First Republic",
        text: "Venezuela's First Republic attempted to establish an independent government, but political divisions, military defeats and other crises quickly weakened it.",
      },

      {
        year: "1812",
        title: "Earthquake and Collapse",
        text: "A devastating earthquake struck Venezuelan cities during the independence conflict. Royalist forces subsequently regained control and the First Republic collapsed.",
      },

      {
        year: "1813",
        title: "Bolívar's Admirable Campaign",
        text: "Simón Bolívar led a military campaign from New Granada into Venezuela and entered Caracas. A Second Republic was established but also proved unable to survive the wider conflict.",
      },

      {
        year: "1814",
        title: "The Second Republic Falls",
        text: "Royalist forces, including large numbers of Llanero horsemen, defeated republican armies. Warfare caused widespread destruction and displacement.",
      },

      {
        year: "1815",
        title: "Spanish Reconquest",
        text: "A major Spanish expedition arrived to restore royal authority across northern South America. Independence leaders regrouped in exile and in areas outside Spanish control.",
      },

      {
        year: "1816",
        title: "Slavery and Independence",
        text: "Bolívar promised freedom to enslaved people who joined the independence cause. The relationship between emancipation and independence became increasingly important as the war continued.",
      },

      {
        year: "1817",
        title: "Guayana Becomes a Revolutionary Base",
        text: "Independence forces secured control of the Guayana region along the Orinoco, giving them access to an important river network, resources and a secure political base.",
      },

      {
        year: "1819",
        title: "Congress of Angostura",
        text: "Representatives met at Angostura, modern Ciudad Bolívar, to organise a new republican government while the independence war continued.",
      },

      {
        year: "1819",
        title: "Gran Colombia",
        text: "Venezuela became part of the new Republic of Colombia, commonly called Gran Colombia, alongside territories corresponding to modern Colombia, Ecuador and Panama.",
      },

      {
        year: "1821",
        title: "Battle of Carabobo",
        text: "Republican forces led by Simón Bolívar defeated a major Spanish royalist army at Carabobo. The victory secured independence across most of Venezuela.",
      },

      {
        year: "1823",
        title: "Battle of Lake Maracaibo",
        text: "A republican naval victory on Lake Maracaibo helped end the remaining major Spanish military presence in Venezuela.",
      },

      {
        year: "1830",
        title: "Venezuela Leaves Gran Colombia",
        text: "Political disagreements contributed to the breakup of Gran Colombia. Venezuela became a separate republic with José Antonio Páez as a dominant early political figure.",
      },

      {
        year: "1830s–1850s",
        title: "Regional Power",
        text: "Powerful regional military and landowning leaders, often described as caudillos, played major roles in the young republic. Political institutions remained unstable.",
      },

      {
        year: "1854",
        title: "Slavery is Abolished",
        text: "President José Gregorio Monagas abolished slavery in Venezuela. Afro-Venezuelans nevertheless continued to experience racial and economic inequalities after emancipation.",
      },

      {
        year: "1859–1863",
        title: "Federal War",
        text: "Liberals and conservatives fought a devastating civil war over political power, federalism and social grievances. Large areas of the country were affected.",
      },

      {
        year: "1864",
        title: "Federal Constitution",
        text: "A new constitution reorganised Venezuela as a federal republic following the Federal War.",
      },

      {
        year: "1870s–1880s",
        title: "Guzmán Blanco Era",
        text: "Antonio Guzmán Blanco dominated Venezuelan politics during much of this period. His governments promoted centralisation, infrastructure, public education and efforts to modernise Caracas.",
      },

      {
        year: "1899",
        title: "Cipriano Castro Takes Power",
        text: "Cipriano Castro seized power after marching from the Andes with an armed movement. Venezuela entered another period of highly centralised rule.",
      },

      {
        year: "1908",
        title: "Juan Vicente Gómez",
        text: "Juan Vicente Gómez took power and dominated Venezuela until his death in 1935. His authoritarian government strengthened central control while petroleum transformed the country's economy.",
      },

      {
        periodKey: "venezuela-oil",
        year: "1910s–1920s",
        title: "🔍 Your Investigation: Venezuela Becomes an Oil Country",
        text: "Large petroleum discoveries transformed Venezuela from an economy dominated by agricultural exports into one of the world's major oil producers.",
        isGap: true,
        prompt:
          "Investigate how petroleum changed Venezuela's economy, population and relationship with the wider world.",
        questions: [
          "Where were major oil discoveries made?",
          "Why did foreign companies invest in Venezuela?",
          "How did oil change where Venezuelans lived and worked?",
        ],
      },

      {
        year: "1914",
        title: "Zumaque I",
        text: "Commercial production at the Zumaque I well in western Venezuela helped demonstrate the scale of the country's petroleum resources.",
      },

      {
        year: "1922",
        title: "Barroso No. 2",
        text: "A dramatic oil blowout at the Barroso No. 2 well near Lake Maracaibo attracted international attention and accelerated foreign investment in Venezuela's petroleum industry.",
      },

      {
        year: "1920s–1930s",
        title: "Oil Changes Venezuela",
        text: "Petroleum rapidly overtook coffee and cacao as Venezuela's dominant export. People increasingly moved towards oil-producing areas and growing cities.",
      },

      {
        year: "1935",
        title: "Gómez Dies",
        text: "The death of Juan Vicente Gómez ended nearly three decades of authoritarian rule and opened a gradual period of political change.",
      },

      {
        year: "1947",
        title: "Universal Suffrage",
        text: "A new constitution expanded democratic participation and established universal direct voting for adult citizens.",
      },

      {
        year: "1948",
        title: "Military Coup",
        text: "The elected government of Rómulo Gallegos was overthrown by military officers only months after he took office.",
      },

      {
        year: "1952–1958",
        title: "Pérez Jiménez Dictatorship",
        text: "Marcos Pérez Jiménez ruled as an authoritarian military leader. His government invested heavily in major infrastructure while political opponents faced censorship, imprisonment, exile and repression.",
      },

      {
        year: "1958",
        title: "Dictatorship Ends",
        text: "Military and civilian opposition forced Pérez Jiménez from power. Venezuela returned to elected civilian government.",
      },

      {
        year: "1960",
        title: "OPEC",
        text: "Venezuela became one of the five founding members of the Organization of the Petroleum Exporting Countries, reflecting its major role in the global oil industry.",
      },

      {
        year: "1976",
        title: "Oil Industry Nationalised",
        text: "The Venezuelan state nationalised the petroleum industry and created the state oil company PDVSA.",
      },

      {
        year: "1980s",
        title: "Economic Pressures",
        text: "Falling oil revenues, debt, inflation and economic difficulties placed increasing pressure on a system heavily dependent on petroleum income.",
      },

      {
        year: "1989",
        title: "Caracazo",
        text: "Economic measures were followed by major protests and unrest in Caracas and other cities. Security forces responded with lethal force, and the number of people killed remains disputed.",
      },

      {
        year: "1998",
        title: "Hugo Chávez Elected",
        text: "Hugo Chávez won the presidential election after campaigning for major political and constitutional change.",
      },

      {
        year: "1999",
        title: "New Constitution",
        text: "A new constitution renamed the country the Bolivarian Republic of Venezuela and introduced significant changes to its political institutions.",
      },

      {
        year: "2000s",
        title: "Oil, Social Programmes and Political Conflict",
        text: "High oil revenues supported expanded government social programmes, while political polarisation increased. Supporters highlighted social investment and political participation, while opponents criticised concentration of power and weakening institutions.",
      },

      {
        year: "2010s",
        title: "Severe Economic and Political Crisis",
        text: "Venezuela experienced severe economic contraction, shortages, inflation and political conflict. Millions of Venezuelans subsequently left the country, creating one of the largest displacement and migration movements in modern Latin American history.",
      },

      {
        year: "2012",
        title: "Dancing Devils Recognised",
        text: "UNESCO inscribed Venezuela's Dancing Devils of Corpus Christi on the Representative List of the Intangible Cultural Heritage of Humanity.",
      },

      {
        year: "2014",
        title: "Mapoyo Heritage Recognised",
        text: "UNESCO placed the Mapoyo oral tradition and its symbolic reference points within ancestral territory on the List of Intangible Cultural Heritage in Need of Urgent Safeguarding.",
      },

      {
        year: "2016",
        title: "El Callao Carnival Recognised",
        text: "UNESCO recognised the Carnival of El Callao as intangible cultural heritage, highlighting a tradition shaped by the history of migration, mining and Afro-Caribbean culture.",
      },

      {
        year: "2024",
        title: "Cassava Bread Knowledge Recognised",
        text: "Traditional knowledge and practices surrounding the making and consumption of cassava bread were jointly inscribed by Venezuela and several Caribbean countries on UNESCO's Representative List.",
      },

      {
        year: "2025",
        title: "Joropo Recognised",
        text: "UNESCO inscribed joropo in Venezuela on the Representative List of the Intangible Cultural Heritage of Humanity, recognising the music, dance and community knowledge surrounding the tradition.",
      },

      {
        year: "Today",
        title: "Modern Venezuela",
        text: "Venezuela remains a country of extraordinary cultural and environmental diversity, stretching from the Caribbean and Andes to the Llanos, Orinoco and Guiana Highlands. Its recent history has been marked by serious economic, political and humanitarian challenges, while Venezuelan communities at home and abroad continue to maintain distinctive music, food, celebrations, Indigenous knowledge and cultural traditions.",
      },
    ],

    places: [
      {
        title: "Canaima National Park",
        tag: "Tepuis & Rainforest",

        image:
          "/images/continents/south-america/countries/venezuela/places/canaima-national-park-tepuis.jpg",

        description:
          "Canaima National Park covers around three million hectares of southeastern Venezuela. Roughly two-thirds of the park is dominated by tepuis — enormous flat-topped sandstone mountains separated by cliffs, forests, rivers and waterfalls. The landscape has exceptional geological and biological importance and forms part of the ancestral territory of Pemón communities. UNESCO inscribed Canaima as a natural World Heritage property in 1994.",
      },

      {
        title: "Kerepakupai Vená",
        tag: "Waterfall & Pemón Heritage",

        image:
          "/images/continents/south-america/countries/venezuela/places/kerepakupai-vena-waterfall.jpg",

        description:
          "Kerepakupai Vená, internationally widely known as Angel Falls, plunges from Auyán-tepui within Canaima National Park and is the world's highest uninterrupted waterfall. Its Indigenous Pemón name connects the landmark with the people whose ancestral homeland surrounds the tepuis. Water drops hundreds of metres from the summit before reaching the forest below.",
      },

      {
        title: "Coro & La Vela",
        tag: "Colonial Architecture",

        image:
          "/images/continents/south-america/countries/venezuela/places/coro-la-vela-colonial-buildings.jpg",

        description:
          "Coro and its port of La Vela preserve an unusual architectural landscape created through interaction between local building traditions and Spanish Mudéjar and Dutch techniques. Many historic structures were constructed from earth. UNESCO inscribed the property in 1993. It has remained on the World Heritage in Danger list since 2005 because of conservation threats including damage to its earthen architecture.",
      },

      {
        title: "Orinoco Delta",
        tag: "Warao Culture & Wetlands",

        image:
          "/images/continents/south-america/countries/venezuela/places/orinoco-delta-warao-community.jpg",

        description:
          "The Orinoco breaks into a huge network of channels, wetlands and islands before reaching the Atlantic. Warao communities have lived throughout this watery environment for generations, traditionally using rivers as major transport routes and developing detailed knowledge of fishing, plants and wetland ecosystems. Houses in some communities are constructed on stilts beside the waterways.",
      },
    ],

    influentialFigures: [
      {
        name: "Guaicaipuro",
        role: "Indigenous Resistance",

        image:
          "/images/continents/south-america/countries/venezuela/figures/guaicaipuro.jpg",

        description:
          "Guaicaipuro was an Indigenous leader who became one of the best-known figures in resistance to Spanish colonisation around the Caracas region during the sixteenth century. He helped organise alliances among Indigenous communities attempting to stop the expansion of Spanish settlements and mining. Although Spanish forces eventually defeated the resistance, Guaicaipuro became an enduring national symbol of Indigenous opposition to colonial conquest.",
      },

      {
        name: "Teresa Carreño",
        role: "Music & Piano",

        image:
          "/images/continents/south-america/countries/venezuela/figures/teresa-carreno.jpg",

        description:
          "Teresa Carreño was a Venezuelan pianist, composer, singer and conductor who achieved international fame during the nineteenth and early twentieth centuries. Born in Caracas in 1853, she performed publicly as a child and later appeared at major concert venues across the Americas and Europe. Her remarkable career made her one of Venezuela's most internationally celebrated classical musicians.",
      },

      {
        name: "Armando Reverón",
        role: "Art",

        image:
          "/images/continents/south-america/countries/venezuela/figures/armando-reveron.jpg",

        description:
          "Armando Reverón was one of Venezuela's most influential twentieth-century artists. He became particularly known for paintings exploring the intense tropical light of the Caribbean coast. Reverón experimented with colour, texture and materials and created an unusual working environment at his home and studio known as El Castillete.",
      },

      {
        name: "Simón Díaz",
        role: "Music & Llanero Culture",

        image:
          "/images/continents/south-america/countries/venezuela/figures/simon-diaz.jpg",

        description:
          "Simón Díaz was a singer, composer and performer who helped bring the musical traditions of Venezuela's Llanos to audiences across the country and internationally. His work drew heavily on the lives and songs of cattle-working communities. His composition 'Caballo Viejo' became internationally famous and has been interpreted by musicians around the world.",
      },
    ],

    culturalSpotlights: [
      {
        title: "Joropo",

        image:
          "/images/continents/south-america/countries/venezuela/cultural-spotlight/joropo-musicians-dancers.jpg",

        description:
          "Joropo combines music, poetry and energetic partnered dance and is one of Venezuela's most important cultural traditions. Llanero joropo commonly features harp or bandola, the small four-stringed cuatro and maracas. Dancers use rapid footwork known as zapateo while musicians and singers improvise and interact. Different regions have developed their own joropo styles. UNESCO recognised joropo in Venezuela as intangible cultural heritage in 2025.",
      },

      {
        title: "Dancing Devils of Corpus Christi",

        image:
          "/images/continents/south-america/countries/venezuela/cultural-spotlight/dancing-devils-corpus-christi.jpg",

        description:
          "In several Venezuelan communities, masked dancers dressed as devils take part in celebrations for the Catholic feast of Corpus Christi. Participants wear elaborate costumes and masks before symbolically submitting to the Blessed Sacrament, representing the triumph of good over evil. Brotherhoods maintain distinct local forms of the tradition, which combines Catholic practice with cultural influences shaped over generations. UNESCO recognised the Dancing Devils in 2012.",
      },

      {
        title: "Carnival of El Callao",

        image:
          "/images/continents/south-america/countries/venezuela/cultural-spotlight/el-callao-carnival.jpg",

        description:
          "The Carnival of El Callao developed in a mining town where migrants from Caribbean islands interacted with Venezuelan communities during the nineteenth century. Parades combine music, dance, colourful costumes and distinctive characters. Calypso became particularly important to the celebration, reflecting strong Afro-Caribbean influences. UNESCO recognised the carnival as intangible cultural heritage in 2016.",
      },

      {
        title: "Mapoyo Oral Tradition",

        image:
          "/images/continents/south-america/countries/venezuela/cultural-spotlight/mapoyo-oral-tradition.jpg",

        description:
          "The Mapoyo people maintain oral traditions that connect historical stories with particular places across their ancestral territory. Elders transmit accounts of community origins, events and relationships with the landscape through spoken narratives. Because relatively few people continue to hold and transmit this knowledge, UNESCO placed the Mapoyo oral tradition on its Urgent Safeguarding List in 2014.",
      },
    ],

    facts: [
      "Venezuela has a Caribbean coastline as well as Andes, Llanos grasslands, Amazonian forests and the Guiana Highlands.",
      "The Orinoco is one of South America's largest river systems and forms an enormous delta before reaching the Atlantic Ocean.",
      "Canaima National Park covers about three million hectares and around 65% of it is occupied by tepui formations.",
      "Kerepakupai Vená, widely known internationally as Angel Falls, is the world's highest uninterrupted waterfall.",
      "Venezuela became one of the five founding members of OPEC in 1960.",
      "Coro's architecture combines local earthen construction with Spanish Mudéjar and Dutch influences.",
      "Casabe cassava bread comes from Indigenous food knowledge that existed long before European colonisation.",
      "The cuatro is a small four-stringed instrument central to many Venezuelan musical traditions.",
      "Venezuela currently has three UNESCO World Heritage properties: Coro and its Port, Canaima National Park and Ciudad Universitaria de Caracas.",
      "UNESCO added Venezuelan joropo to its Representative List of Intangible Cultural Heritage in 2025.",
    ],
  },
];
