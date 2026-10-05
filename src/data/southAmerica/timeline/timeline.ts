import type { RegionalTimelineConfig } from "@/components/shared/regional-timeline/types";

export const southAmericaTimeline: RegionalTimelineConfig = {
  region: "south-america",
  regionName: "South America",

  title: "South America Through Time",

  intro:
    "Travel through thousands of years of South American history. Explore ancient societies, empires, colonisation, independence, migration, political change and the continent today. Use the country filters to follow one place, or explore the connections that cross modern borders.",

  backHref: "/south-america",

  filters: [
    { id: "argentina", label: "Argentina" },
    { id: "bolivia", label: "Bolivia" },
    { id: "brazil", label: "Brazil" },
    { id: "chile", label: "Chile" },
    { id: "colombia", label: "Colombia" },
    { id: "ecuador", label: "Ecuador" },
    { id: "guyana", label: "Guyana" },
    { id: "paraguay", label: "Paraguay" },
    { id: "peru", label: "Peru" },
    { id: "suriname", label: "Suriname" },
    { id: "uruguay", label: "Uruguay" },
    { id: "venezuela", label: "Venezuela" },
  ],

  eras: [
    {
      id: "first-peoples",
      title: "First Peoples & Early Worlds",
      subtitle:
        "Long before modern countries existed, communities across South America developed different ways of living in rainforests, mountains, grasslands, deserts and along the coast.",
    },
    {
      id: "ancient-societies",
      title: "Cities, Cultures & Kingdoms",
      subtitle:
        "Complex societies developed across the Andes and beyond, creating cities, art, farming systems, trade networks and powerful states.",
    },
    {
      id: "inca-world",
      title: "The Inca World",
      subtitle:
        "During the 1400s, the Inca state expanded across a huge area of western South America and connected many different peoples.",
    },
    {
      id: "colonisation",
      title: "Conquest & Colonisation",
      subtitle:
        "European conquest transformed the continent, while Indigenous communities resisted, adapted and survived. Millions of enslaved Africans were also forcibly brought across the Atlantic.",
    },
    {
      id: "independence",
      title: "Revolution & Independence",
      subtitle:
        "During the early nineteenth century, independence movements challenged Spanish and Portuguese colonial rule and new states emerged.",
    },
    {
      id: "nations",
      title: "Building Nations",
      subtitle:
        "The new countries faced conflicts over borders, government, slavery, land, resources and national identity.",
    },
    {
      id: "modern",
      title: "Modern South America",
      subtitle:
        "The twentieth and twenty-first centuries brought rapid urban growth, migration, political upheaval, democratic change and increasing regional cooperation.",
    },
  ],

  events: [
    // =========================================================
    // FIRST PEOPLES & EARLY WORLDS
    // =========================================================

    {
      id: "first-peoples-south-america",
      date: "More than 12,000 years ago",
      sortYear: -10000,
      title: "People Across a Continent",
      summary:
        "Human communities were living across South America thousands of years before the modern countries on our maps existed.",
      places: [
        "argentina",
        "bolivia",
        "brazil",
        "chile",
        "colombia",
        "ecuador",
        "guyana",
        "paraguay",
        "peru",
        "suriname",
        "uruguay",
        "venezuela",
      ],
      era: "first-peoples",
      significance:
        "South American history did not begin with the Inca or with European arrival. Indigenous peoples developed thousands of distinct communities, languages and ways of understanding their environments.",
      details: [
        "Communities adapted to dramatically different landscapes, including the Andes, Amazon rainforest, Caribbean coast, Atlantic forests, deserts and southern grasslands.",
        "There was never one single Indigenous South American culture. Different peoples developed their own languages, technologies, beliefs and political systems.",
        "Many Indigenous nations and communities continue these histories today.",
      ],
    },

    {
      id: "early-farming-andes",
      date: "From c. 8000 BCE",
      sortYear: -8000,
      title: "Farming Changes Everyday Life",
      summary:
        "People gradually domesticated plants and animals that would become important far beyond South America.",
      places: ["peru", "bolivia", "ecuador", "chile"],
      era: "first-peoples",
      significance:
        "South American peoples helped develop foods that are now eaten around the world, including potatoes and many varieties of chilli, while Andean communities also domesticated llamas and alpacas.",
      details: [
        "Farming developed gradually rather than appearing at one single moment.",
        "High-altitude communities developed techniques suited to difficult mountain environments.",
        "Agriculture helped support larger and increasingly settled communities.",
      ],
    },

    {
      id: "caral",
      date: "c. 3000–1800 BCE",
      sortYear: -3000,
      title: "Caral and the Norte Chico",
      summary:
        "Large ceremonial and urban centres developed on Peru's Pacific coast thousands of years before the Inca.",
      places: ["peru"],
      era: "first-peoples",
      significance:
        "Caral helps show just how deep the history of complex societies in the Andes really is.",
      details: [
        "Monumental architecture and planned settlements appeared in the region very early.",
        "Communities connected coastal resources with agriculture from inland river valleys.",
        "The site challenges the idea that complex American societies appeared only shortly before European arrival.",
      ],
    },

    // =========================================================
    // CITIES, CULTURES & KINGDOMS
    // =========================================================

    {
      id: "chavin",
      date: "c. 1000–500 BCE",
      sortYear: -1000,
      title: "The Chavín World",
      summary:
        "Chavín religious imagery and artistic styles spread across parts of the central Andes.",
      places: ["peru"],
      era: "ancient-societies",
      significance:
        "Chavín shows that ideas, art and religious traditions could connect communities across large areas long before a single empire controlled them.",
      details: [
        "Chavín de Huántar became an important ceremonial centre.",
        "Distinctive images of animals and supernatural beings appeared in sculpture, pottery and other objects.",
        "Its influence can be seen across different Andean regions.",
      ],
    },

    {
      id: "nazca-moche",
      date: "c. 100–800 CE",
      sortYear: 100,
      title: "Nazca and Moche Worlds",
      summary:
        "Powerful cultures flourished along Peru's Pacific coast, creating extraordinary art, engineering and ceremonial landscapes.",
      places: ["peru"],
      era: "ancient-societies",
      significance:
        "The Nazca and Moche demonstrate the variety and sophistication of societies that existed in the Andes before the Inca.",
      details: [
        "The Nazca are especially associated with the enormous geoglyphs now known as the Nazca Lines.",
        "Moche artists created highly detailed ceramics and metalwork.",
        "Both developed in environments where managing scarce water was extremely important.",
      ],
    },

    {
      id: "tiwanaku-wari",
      date: "c. 400–1100 CE",
      sortYear: 400,
      title: "Tiwanaku and Wari",
      summary:
        "Two major powers developed in the Andes and influenced territories far beyond their main centres.",
      places: ["bolivia", "peru", "chile"],
      era: "ancient-societies",
      significance:
        "These states developed large settlements, road connections, agricultural systems and political networks centuries before the Inca Empire.",
      details: [
        "Tiwanaku developed near Lake Titicaca in today's Bolivia.",
        "Wari grew around its capital near modern Ayacucho in Peru.",
        "Their influence spread through trade, settlement, religion and political power.",
      ],
    },

    {
      id: "chimu-chan-chan",
      date: "c. 1150–1470",
      sortYear: 1150,
      title: "The Chimú Kingdom and Chan Chan",
      summary:
        "The Chimú built a powerful coastal kingdom centred on the enormous adobe city of Chan Chan.",
      places: ["peru"],
      era: "ancient-societies",
      significance:
        "Chan Chan was one of the great urban centres of pre-Columbian South America and later became part of the expanding Inca state.",
      details: [
        "The city contained huge walled compounds, workshops, storage areas and ceremonial spaces.",
        "Chimú rulers controlled much of Peru's northern coast.",
        "The kingdom was eventually conquered by the Inca.",
      ],
    },

    // =========================================================
    // THE INCA WORLD
    // =========================================================

    {
      id: "inca-expansion",
      date: "1438–1532",
      sortYear: 1438,
      title: "Tawantinsuyu — The Inca State",
      summary:
        "From its centre at Cusco, the Inca state expanded across much of the Andes.",
      places: ["peru", "bolivia", "ecuador", "chile", "argentina"],
      era: "inca-world",
      significance:
        "Tawantinsuyu became the largest state in the Americas before European conquest, linking many peoples across thousands of kilometres.",
      details: [
        "The Inca called their realm Tawantinsuyu, often translated as the Land of the Four Quarters.",
        "An enormous road system connected settlements, farms, storehouses, religious sites and administrative centres.",
        "The empire contained many different peoples and languages rather than one single culture.",
        "Local communities could retain parts of their identity while also being incorporated into the Inca political system.",
      ],
      deepDiveHref: "/south-america/deep-dives/inca",
    },

    {
      id: "machu-picchu",
      date: "c. 1450",
      sortYear: 1450,
      title: "Machu Picchu",
      summary:
        "A remarkable Inca settlement was constructed high in the Andes above the Urubamba Valley.",
      places: ["peru"],
      era: "inca-world",
      significance:
        "Machu Picchu demonstrates Inca skill in architecture, landscape design, farming and stone construction.",
      details: [
        "Buildings and agricultural terraces were carefully fitted into a steep mountain landscape.",
        "The site is strongly associated with the reign of Pachakuti.",
        "Its exact functions remain the subject of archaeological study.",
      ],
      deepDiveHref: "/south-america/deep-dives/inca",
    },

    {
      id: "inca-road-network",
      date: "1400s–1500s",
      sortYear: 1470,
      title: "A Continent-Spanning Road Network",
      summary:
        "Thousands of kilometres of roads helped connect communities across mountains, deserts and valleys.",
      places: ["colombia", "ecuador", "peru", "bolivia", "chile", "argentina"],
      era: "inca-world",
      significance:
        "The road system helped move information, armies, goods and officials through an extremely challenging landscape.",
      details: [
        "Sections of the wider Andean road system existed before the Inca and were incorporated and expanded.",
        "Runners known as chasquis could carry messages along the network.",
        "Bridges, steps and mountain paths allowed movement through difficult terrain.",
      ],
      deepDiveHref: "/south-america/deep-dives/inca",
    },

    // =========================================================
    // CONQUEST & COLONISATION
    // =========================================================

    {
      id: "tordesillas",
      date: "1494",
      sortYear: 1494,
      title: "A Line Drawn Across a Map",
      summary:
        "Spain and Portugal agreed to divide claims to newly encountered lands through the Treaty of Tordesillas.",
      places: ["brazil"],
      era: "colonisation",
      significance:
        "The agreement helps explain why Portuguese rather than Spanish became the dominant European language in Brazil.",
      details: [
        "The treaty was an agreement between European monarchies and did not involve the Indigenous peoples whose lands they claimed.",
        "Portuguese expansion eventually extended far beyond the original treaty line.",
        "Its consequences can still be seen in South America's modern linguistic geography.",
      ],
    },

    {
      id: "portuguese-brazil",
      date: "1500",
      sortYear: 1500,
      title: "Portuguese Arrival on the Brazilian Coast",
      summary:
        "Pedro Álvares Cabral's expedition reached the coast of what is now Brazil.",
      places: ["brazil"],
      era: "colonisation",
      significance:
        "Portuguese colonisation would transform the region through settlement, forced labour, plantation agriculture and the Atlantic slave trade.",
      details: [
        "Numerous Indigenous peoples were already living across the territory.",
        "Early Portuguese interests included extracting brazilwood.",
        "Colonisation expanded gradually rather than taking control of the entire modern country immediately.",
      ],
    },

    {
      id: "inca-conquest",
      date: "1532–1542",
      sortYear: 1532,
      title: "Conquest of the Inca State",
      summary:
        "Spanish forces entered an Inca world already weakened by civil conflict and devastating disease.",
      places: ["peru", "ecuador", "bolivia", "chile"],
      era: "colonisation",
      significance:
        "The conquest brought enormous political, demographic and cultural change, but Indigenous resistance continued long afterwards.",
      details: [
        "Francisco Pizarro's forces captured the Inca ruler Atahualpa at Cajamarca in 1532.",
        "Spanish success depended on alliances with Indigenous groups as well as military force.",
        "European diseases caused catastrophic population losses.",
        "Inca resistance continued from centres including Vilcabamba for decades.",
      ],
      deepDiveHref: "/south-america/deep-dives/inca",
    },

    {
      id: "atlantic-slavery",
      date: "1500s–1800s",
      sortYear: 1550,
      title: "The Atlantic Slave Trade",
      summary:
        "Millions of Africans were forcibly transported to South America as part of the transatlantic slave trade.",
      places: [
        "brazil",
        "guyana",
        "suriname",
        "colombia",
        "venezuela",
        "ecuador",
        "peru",
        "uruguay",
        "argentina",
      ],
      era: "colonisation",
      significance:
        "African peoples and their descendants profoundly shaped South American culture, language, religion, music, food and identity despite the violence of enslavement.",
      details: [
        "Brazil received more enslaved Africans than any other territory in the Americas.",
        "Enslaved people were forced to work in plantations, mines, towns, ports and households.",
        "Resistance took many forms, including escape, rebellion and the creation of independent communities.",
        "African cultural traditions survived, changed and combined with Indigenous and European traditions.",
      ],
    },

    {
      id: "quilombo-palmares",
      date: "1600s",
      sortYear: 1650,
      title: "Palmares and Resistance to Slavery",
      summary:
        "Palmares became one of the best-known communities created by people escaping slavery in colonial Brazil.",
      places: ["brazil"],
      era: "colonisation",
      significance:
        "Palmares reminds us that enslaved people were not passive victims: resistance was a continuous part of the history of slavery.",
      details: [
        "Communities formed by people escaping slavery are often called quilombos in Brazil.",
        "Palmares survived for decades and included several settlements.",
        "Zumbi became one of its best-known leaders and later an important symbol of Black resistance in Brazil.",
      ],
    },

    // =========================================================
    // REVOLUTION & INDEPENDENCE
    // =========================================================

    {
      id: "independence-movements",
      date: "1810–1826",
      sortYear: 1810,
      title: "Independence Sweeps Spanish South America",
      summary:
        "Revolutionary movements challenged Spanish rule across much of the continent.",
      places: [
        "argentina",
        "bolivia",
        "chile",
        "colombia",
        "ecuador",
        "paraguay",
        "peru",
        "uruguay",
        "venezuela",
      ],
      era: "independence",
      significance:
        "Within a relatively short period, most Spanish colonies in South America became independent states.",
      details: [
        "Independence was not one single revolution but a series of interconnected wars and political movements.",
        "Different groups supported independence for different reasons.",
        "Independence did not automatically produce political equality or end social divisions inherited from colonial rule.",
      ],
    },

    {
      id: "bolivar",
      date: "1810s–1820s",
      sortYear: 1813,
      title: "Simón Bolívar and Northern Independence",
      summary:
        "Bolívar became one of the most influential leaders in independence campaigns across northern South America.",
      places: ["venezuela", "colombia", "ecuador", "peru", "bolivia"],
      era: "independence",
      significance:
        "Campaigns associated with Bolívar helped end Spanish rule across a huge area, although his hopes for lasting political unity proved difficult to achieve.",
      details: [
        "Bolívar was born in Caracas in present-day Venezuela.",
        "His campaigns were connected to the independence of Venezuela, Colombia, Ecuador, Peru and Bolivia.",
        "The state of Bolivia was named in his honour.",
        "His political legacy remains important and debated across Latin America.",
      ],
    },

    {
      id: "san-martin",
      date: "1817–1822",
      sortYear: 1817,
      title: "San Martín Crosses the Andes",
      summary:
        "José de San Martín led an army across the Andes as part of campaigns against Spanish rule.",
      places: ["argentina", "chile", "peru"],
      era: "independence",
      significance:
        "The campaign linked independence struggles on both sides of the Andes and became one of the most famous military operations of the independence era.",
      details: [
        "San Martín organised the Army of the Andes in the Río de la Plata region.",
        "His forces crossed from Argentina into Chile in 1817.",
        "After helping secure Chilean independence, the campaign continued by sea toward Peru.",
      ],
    },

    {
      id: "brazil-independence",
      date: "1822",
      sortYear: 1822,
      title: "Brazil Declares Independence",
      summary:
        "Brazil separated from Portugal and became an independent empire.",
      places: ["brazil"],
      era: "independence",
      significance:
        "Brazil followed a different political path from most former Spanish colonies, becoming an empire under Pedro I rather than immediately forming a republic.",
      details: [
        "Independence was declared in 1822.",
        "Pedro I became Brazil's first emperor.",
        "Slavery remained legal after independence and continued for decades.",
      ],
    },

    // =========================================================
    // BUILDING NATIONS
    // =========================================================

    {
      id: "paraguayan-war",
      date: "1864–1870",
      sortYear: 1864,
      title: "The Paraguayan War",
      summary:
        "Paraguay fought a devastating war against an alliance of Brazil, Argentina and Uruguay.",
      places: ["paraguay", "brazil", "argentina", "uruguay"],
      era: "nations",
      significance:
        "The conflict caused enormous destruction and population loss in Paraguay and reshaped politics and power in the southern part of the continent.",
      details: [
        "The war is also known as the War of the Triple Alliance.",
        "Its causes involved regional rivalries, borders and political struggles around the Río de la Plata.",
        "Paraguay suffered particularly severe human and economic losses.",
      ],
    },

    {
      id: "war-pacific",
      date: "1879–1884",
      sortYear: 1879,
      title: "The War of the Pacific",
      summary:
        "Chile fought Peru and Bolivia in a conflict centred on territory and valuable resources in the Atacama region.",
      places: ["chile", "peru", "bolivia"],
      era: "nations",
      significance:
        "The war permanently changed national borders and left Bolivia without a sovereign Pacific coastline.",
      details: [
        "The Atacama Desert contained economically valuable nitrate deposits.",
        "Chile gained territory following victory.",
        "The consequences of the conflict continue to influence regional memory and diplomacy.",
      ],
    },

    {
      id: "abolition-brazil",
      date: "1888",
      sortYear: 1888,
      title: "Brazil Abolishes Slavery",
      summary:
        "The Lei Áurea, or Golden Law, formally abolished slavery in Brazil.",
      places: ["brazil"],
      era: "nations",
      significance:
        "Brazil was the last country in the Americas to formally abolish slavery, ending a system that had shaped the country for centuries.",
      details: [
        "Abolition followed decades of resistance by enslaved people and campaigning by abolitionists.",
        "Freedom did not come with equal access to land, wealth or political power.",
        "The legacies of slavery continued to shape Brazilian society after 1888.",
      ],
    },

    {
      id: "brazil-republic",
      date: "1889",
      sortYear: 1889,
      title: "Brazil Becomes a Republic",
      summary:
        "The Brazilian monarchy was overthrown one year after the abolition of slavery.",
      places: ["brazil"],
      era: "nations",
      significance:
        "The change ended nearly seven decades of imperial government and began Brazil's republican era.",
      details: [
        "Emperor Pedro II was removed from power.",
        "Brazil had been an independent empire since 1822.",
        "The new republic did not immediately create broad democratic participation.",
      ],
    },

    // =========================================================
    // MODERN SOUTH AMERICA
    // =========================================================

    {
      id: "urbanisation",
      date: "1900s",
      sortYear: 1900,
      title: "Cities Grow at Extraordinary Speed",
      summary:
        "South America became increasingly urban as millions of people moved into rapidly expanding towns and cities.",
      places: [
        "argentina",
        "bolivia",
        "brazil",
        "chile",
        "colombia",
        "ecuador",
        "guyana",
        "paraguay",
        "peru",
        "suriname",
        "uruguay",
        "venezuela",
      ],
      era: "modern",
      significance:
        "Urbanisation transformed work, housing, culture, transport and everyday life across the continent.",
      details: [
        "Cities such as São Paulo, Buenos Aires, Lima, Bogotá and Santiago expanded dramatically.",
        "Migration took place both within countries and internationally.",
        "Rapid growth created new opportunities but also major challenges involving inequality, housing and infrastructure.",
      ],
    },

    {
      id: "military-dictatorships",
      date: "1960s–1980s",
      sortYear: 1964,
      title: "Dictatorship and Political Repression",
      summary:
        "Several South American countries experienced military governments and severe political repression.",
      places: [
        "argentina",
        "bolivia",
        "brazil",
        "chile",
        "paraguay",
        "peru",
        "uruguay",
      ],
      era: "modern",
      significance:
        "This period left lasting debates about democracy, human rights, justice and historical memory.",
      details: [
        "The exact experiences and dates differed significantly between countries.",
        "Political opponents, activists and civilians were imprisoned, tortured, killed or disappeared under several regimes.",
        "Human-rights organisations and families campaigned for information, accountability and democratic government.",
      ],
    },

    {
      id: "return-democracy",
      date: "1980s–1990s",
      sortYear: 1983,
      title: "Democratic Government Returns",
      summary:
        "Across much of South America, military governments gave way to elected civilian governments.",
      places: [
        "argentina",
        "bolivia",
        "brazil",
        "chile",
        "paraguay",
        "peru",
        "uruguay",
      ],
      era: "modern",
      significance:
        "The transitions reshaped political life and opened continuing debates about accountability for abuses committed under authoritarian rule.",
      details: [
        "Countries followed different paths and transitioned at different times.",
        "New democratic institutions had to operate alongside major economic and social challenges.",
        "Questions of memory, justice and human rights remained important long after transitions occurred.",
      ],
    },

    {
      id: "mercosur",
      date: "1991",
      sortYear: 1991,
      title: "MERCOSUR Is Founded",
      summary:
        "Argentina, Brazil, Paraguay and Uruguay signed the Treaty of Asunción and created a new regional integration project.",
      places: ["argentina", "brazil", "paraguay", "uruguay"],
      era: "modern",
      significance:
        "MERCOSUR created a major framework for economic and political cooperation between South American countries.",
      details: [
        "The Treaty of Asunción was signed on 26 March 1991.",
        "The organisation sought greater economic integration between its members.",
        "Its institutions and membership arrangements have developed significantly since its creation.",
      ],
    },

    {
      id: "indigenous-rights-environment",
      date: "Late 1900s–today",
      sortYear: 2000,
      title: "Land, Indigenous Rights and the Environment",
      summary:
        "Indigenous organisations and environmental movements have become increasingly visible in debates about land, resources and development.",
      places: [
        "bolivia",
        "brazil",
        "chile",
        "colombia",
        "ecuador",
        "guyana",
        "peru",
        "suriname",
        "venezuela",
      ],
      era: "modern",
      significance:
        "Some of South America's biggest modern questions involve balancing economic development, Indigenous rights, biodiversity and the protection of ecosystems.",
      details: [
        "Mining, logging, farming, energy projects and infrastructure can create conflicts over land and resources.",
        "Indigenous communities are not one group and may hold different views about particular projects.",
        "The Amazon has become a major global focus, but environmental issues also affect the Andes, wetlands, forests, coasts and grasslands.",
      ],
      deepDiveHref: "/south-america/deep-dives/amazon",
    },

    {
      id: "south-america-today",
      date: "Today",
      sortYear: 2026,
      title: "South America Today",
      summary:
        "More than 430 million people live across a continent shaped by thousands of years of movement, creativity, conflict and cultural exchange.",
      places: [
        "argentina",
        "bolivia",
        "brazil",
        "chile",
        "colombia",
        "ecuador",
        "guyana",
        "paraguay",
        "peru",
        "suriname",
        "uruguay",
        "venezuela",
      ],
      era: "modern",
      significance:
        "Modern South America cannot be understood through one story. Indigenous, African, European, Asian and many other histories have helped shape the continent.",
      details: [
        "The continent contains enormous linguistic, cultural and environmental diversity.",
        "Spanish and Portuguese are widely spoken, while Dutch, English, Indigenous languages and many migrant languages are also part of South American life.",
        "The histories in this timeline continue to influence identity, inequality, politics, food, music, religion and culture today.",
      ],
    },
  ],

  theme: {
    background: "#F4E5C4",
    surface: "#FFF9EC",
    text: "#211F1B",
    mutedText: "#655E53",
    primary: "#153D2D",
    secondary: "#168C9E",
    accent: "#F28C3C",
  },
};
