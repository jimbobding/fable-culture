/**
 * Fable Culture — Oceania country data, aligned to the supplied South Asia schema.
 * Existing map and routes must be preserved; this file only supplies content.
 * Populations are approximate, non-live teaching figures; verify before publication.
 * Image paths use agreed filenames, not a verified local filesystem inventory.
 */
export type TimelineItem = { year: string; title: string; text: string };
export type VisualItem = { image: string; title: string; description: string; tag?: string };
export type Country = {
  slug: string; name: string; nativeName?: string; flag: string;
  population: string; capital: string; intro: string; heroImage: string;
  languages: string[]; currency: string; facts: string[];
  factFile: { capital: VisualItem; food: VisualItem; wildlife: VisualItem; culture: VisualItem };
  places: VisualItem[]; theme: { primary: string; secondary: string; accent: string; background: string; surface: string; text: string };
  pageType: "full" | "mini";
  extraFactFile: VisualItem[];
  figures: VisualItem[];
  culturalSpotlight: VisualItem[];
};

export const countries: Country[] = 
[
  {
    "slug": "australia",
    "name": "Australia",
    "flag": "🇦🇺",
    "population": "27+ million",
    "capital": "Canberra",
    "intro": "Australia is a vast country with diverse landscapes, wildlife, cities and the world’s oldest continuing living cultures.",
    "heroImage": "/images/continents/oceania/countries/australia/uluru-red-centre-landscape.jpg",
    "languages": [
      "English",
      "Aboriginal and Torres Strait Islander languages"
    ],
    "currency": "Australian dollar",
    "facts": [
      "Australia is both a country and a continent.",
      "The Great Barrier Reef is the world’s largest coral reef system.",
      "First Nations peoples have cared for Country for tens of thousands of years."
    ],
    "factFile": {
      "capital": {
        "image": "/images/continents/oceania/countries/australia/fact-file/canberra-parliament-house.jpg",
        "title": "Parliament House, Canberra",
        "description": "Canberra is Australia’s capital. Parliament House is where the national parliament meets."
      },
      "food": {
        "image": "/images/continents/oceania/countries/australia/fact-file/australian-bush-foods.jpg",
        "title": "Australian bush foods",
        "description": "Aboriginal and Torres Strait Islander food knowledge includes native plants and ingredients adapted to local environments."
      },
      "wildlife": {
        "image": "/images/continents/oceania/countries/australia/fact-file/platypus.jpg",
        "title": "Platypus",
        "description": "The platypus is an egg-laying mammal with a bill and webbed feet."
      },
      "culture": {
        "image": "/images/continents/oceania/countries/australia/fact-file/port-arthur-convict-site.jpg",
        "title": "Port Arthur",
        "description": "This historic Tasmanian site tells part of the story of Britain’s convict transportation to Australia."
      }
    },
    "places": [
      {
        "image": "/images/continents/oceania/countries/australia/places/great-barrier-reef.jpg",
        "title": "Great Barrier Reef",
        "description": "A vast coral reef ecosystem off Queensland, home to extraordinary marine life.",
        "tag": "Place"
      },
      {
        "image": "/images/continents/oceania/countries/australia/places/sydney-opera-house.jpg",
        "title": "Sydney Opera House",
        "description": "A famous performing arts venue recognised for its distinctive sail-like roofs.",
        "tag": "Place"
      },
      {
        "image": "/images/continents/oceania/countries/australia/places/purnululu-bungle-bungles.jpg",
        "title": "Purnululu National Park",
        "description": "Known for the striped sandstone domes of the Bungle Bungle Range.",
        "tag": "Place"
      },
      {
        "image": "/images/continents/oceania/countries/australia/places/melbourne-laneways-street-art.jpg",
        "title": "Melbourne laneways",
        "description": "City lanes known for colourful street art and creative culture.",
        "tag": "Place"
      },
      {
        "image": "/images/continents/oceania/countries/australia/places/kgari.jpg",
        "title": "K’gari",
        "description": "A large sand island off Queensland with freshwater lakes, forests and beaches.",
        "tag": "Place"
      }
    ],
    "theme": {
      "primary": "#49634B",
      "secondary": "#B66B43",
      "accent": "#D8B87A",
      "background": "#F4E8CF",
      "surface": "#E6D8B8",
      "text": "#283B30"
    },
    "pageType": "full",
    "extraFactFile": [
      {
        "image": "/images/continents/oceania/countries/australia/fact-file/great-barrier-reef-clownfish.jpg",
        "title": "Clownfish",
        "description": "Clownfish live among sea anemones on tropical coral reefs."
      },
      {
        "image": "/images/continents/oceania/countries/australia/fact-file/aboriginal-rock-art.jpg",
        "title": "Aboriginal rock art",
        "description": "Rock art preserves cultural knowledge and stories across many Aboriginal communities."
      }
    ],
    "figures": [
      {
        "image": "/images/continents/oceania/countries/australia/figures/steve-irwin.jpg",
        "title": "Steve Irwin",
        "description": "Wildlife educator and conservation advocate known for bringing animal stories to television."
      },
      {
        "image": "/images/continents/oceania/countries/australia/figures/shane-warne.jpg",
        "title": "Shane Warne",
        "description": "Australian cricketer widely recognised for his leg-spin bowling."
      },
      {
        "image": "/images/continents/oceania/countries/australia/figures/cathy-freeman.jpg",
        "title": "Cathy Freeman",
        "description": "Olympic champion sprinter who won gold in the 400 metres at Sydney 2000."
      },
      {
        "image": "/images/continents/oceania/countries/australia/figures/oodgeroo-noonuccal.jpg",
        "title": "Oodgeroo Noonuccal",
        "description": "Aboriginal poet, educator and campaigner for Indigenous rights."
      }
    ],
    "culturalSpotlight": [
      {
        "image": "/images/continents/oceania/countries/australia/cultural-spotlight/western-desert-art.jpg",
        "title": "Western Desert art",
        "description": "Aboriginal art traditions that use symbols, patterns and visual storytelling."
      },
      {
        "image": "/images/continents/oceania/countries/australia/cultural-spotlight/torres-strait-islander-dance.jpg",
        "title": "Torres Strait Islander dance",
        "description": "Dance traditions that share community stories, identity and heritage."
      },
      {
        "image": "/images/continents/oceania/countries/australia/cultural-spotlight/yidaki-performance.jpg",
        "title": "Yidaki performance",
        "description": "The yidaki is a traditional instrument associated with Yolŋu peoples of north-east Arnhem Land."
      },
      {
        "image": "/images/continents/oceania/countries/australia/cultural-spotlight/australian-surf-lifesaving.jpg",
        "title": "Surf lifesaving",
        "description": "Volunteer surf lifesavers help keep beachgoers safe along Australia’s coast."
      }
    ]
  },
  {
    "slug": "fiji",
    "name": "Fiji",
    "flag": "🇫🇯",
    "population": "900,000+",
    "capital": "Suva",
    "intro": "Fiji is a Pacific island country known for coral reefs, Indigenous Fijian traditions and a rich sporting heritage.",
    "heroImage": "/images/continents/oceania/countries/fiji/fiji-islands-tropical-landscape.jpg",
    "languages": [
      "English",
      "Fijian",
      "Fiji Hindi"
    ],
    "currency": "Fijian dollar",
    "facts": [
      "Fiji is made up of hundreds of islands.",
      "Rugby sevens is an important sport in Fiji.",
      "Traditional meke performances combine movement and storytelling."
    ],
    "factFile": {
      "capital": {
        "image": "/images/continents/oceania/countries/fiji/fact-file/suva-fiji.jpg",
        "title": "Suva",
        "description": "Suva is Fiji’s capital and a centre of government, education and commerce."
      },
      "food": {
        "image": "/images/continents/oceania/countries/fiji/fact-file/fijian-kokoda.jpg",
        "title": "Kokoda",
        "description": "A Fijian dish of fish marinated in citrus and often served with coconut cream."
      },
      "wildlife": {
        "image": "/images/continents/oceania/countries/fiji/fact-file/fiji-crested-iguana.jpg",
        "title": "Fiji crested iguana",
        "description": "A rare lizard native to Fiji, threatened by habitat loss and introduced predators."
      },
      "culture": {
        "image": "/images/continents/oceania/countries/fiji/fact-file/fijian-kava-ceremony.jpg",
        "title": "Kava ceremony",
        "description": "A traditional social and ceremonial gathering involving a drink made from kava root."
      }
    },
    "places": [
      {
        "image": "/images/continents/oceania/countries/fiji/places/sigatoka-sand-dunes.jpg",
        "title": "Sigatoka Sand Dunes",
        "description": "Coastal dunes that preserve evidence of Fiji’s long human history.",
        "tag": "Place"
      },
      {
        "image": "/images/continents/oceania/countries/fiji/places/taveuni-bouma-waterfall.jpg",
        "title": "Bouma Waterfall",
        "description": "A waterfall in Taveuni’s lush Bouma National Heritage Park.",
        "tag": "Place"
      },
      {
        "image": "/images/continents/oceania/countries/fiji/places/yasawa-islands.jpg",
        "title": "Yasawa Islands",
        "description": "An island chain known for volcanic landscapes and coral-fringed shores.",
        "tag": "Place"
      },
      {
        "image": "/images/continents/oceania/countries/fiji/places/great-astrolabe-reef.jpg",
        "title": "Great Astrolabe Reef",
        "description": "An extensive reef system supporting rich marine biodiversity.",
        "tag": "Place"
      }
    ],
    "theme": {
      "primary": "#087F8C",
      "secondary": "#174F65",
      "accent": "#F29B83",
      "background": "#FFF0D8",
      "surface": "#CBE9E5",
      "text": "#173F4B"
    },
    "pageType": "full",
    "extraFactFile": [
      {
        "image": "/images/continents/oceania/countries/fiji/fact-file/levuka-historic-town.jpg",
        "title": "Levuka",
        "description": "Levuka was Fiji’s first colonial capital and is recognised for its historic townscape."
      }
    ],
    "figures": [
      {
        "image": "/images/continents/oceania/countries/fiji/figures/waisale-serevi.jpg",
        "title": "Waisale Serevi",
        "description": "Rugby sevens star celebrated for his skill and influence on the sport."
      },
      {
        "image": "/images/continents/oceania/countries/fiji/figures/vijay-singh.jpg",
        "title": "Vijay Singh",
        "description": "Professional golfer from Fiji who became world number one."
      },
      {
        "image": "/images/continents/oceania/countries/fiji/figures/ratu-sir-lala-sukuna.jpg",
        "title": "Ratu Sir Lala Sukuna",
        "description": "Influential Fijian statesman and leader in the twentieth century."
      },
      {
        "image": "/images/continents/oceania/countries/fiji/figures/adi-litia-cakobau.jpg",
        "title": "Adi Litia Cakobau",
        "description": "Fijian chiefly figure and public leader."
      }
    ],
    "culturalSpotlight": [
      {
        "image": "/images/continents/oceania/countries/fiji/cultural-spotlight/fijian-meke.jpg",
        "title": "Meke",
        "description": "Traditional performance combining movement, music and storytelling."
      },
      {
        "image": "/images/continents/oceania/countries/fiji/cultural-spotlight/fijian-masi-tapa.jpg",
        "title": "Masi barkcloth",
        "description": "Decorated barkcloth used for ceremonial and cultural purposes."
      }
    ]
  },
  {
    "slug": "new-zealand",
    "name": "New Zealand",
    "flag": "🇳🇿",
    "population": "5+ million",
    "capital": "Wellington",
    "intro": "New Zealand combines dramatic mountains and geothermal landscapes with Māori heritage and modern creative culture.",
    "heroImage": "/images/continents/oceania/countries/new-zealand/milford-sound-landscape.jpg",
    "languages": [
      "English",
      "Māori",
      "New Zealand Sign Language"
    ],
    "currency": "New Zealand dollar",
    "facts": [
      "Aotearoa New Zealand has two main islands and many smaller ones.",
      "The kiwi is a flightless bird.",
      "Māori culture is an important part of the country’s identity."
    ],
    "factFile": {
      "capital": {
        "image": "/images/continents/oceania/countries/new-zealand/fact-file/wellington-beehive-parliament.jpg",
        "title": "Wellington Parliament",
        "description": "Wellington is the capital; the Beehive is part of the parliamentary complex."
      },
      "food": {
        "image": "/images/continents/oceania/countries/new-zealand/fact-file/waitangi-treaty-grounds.jpg",
        "title": "Waitangi Treaty Grounds",
        "description": "A historic site connected with the signing of Te Tiriti o Waitangi in 1840."
      },
      "wildlife": {
        "image": "/images/continents/oceania/countries/new-zealand/fact-file/new-zealand-kiwi-bird.jpg",
        "title": "Kiwi",
        "description": "A flightless bird native to New Zealand, famous for its long bill."
      },
      "culture": {
        "image": "/images/continents/oceania/countries/new-zealand/fact-file/maori-hangi-food.jpg",
        "title": "Hāngī",
        "description": "A Māori method of cooking food using heat from stones in an earth oven."
      }
    },
    "places": [
      {
        "image": "/images/continents/oceania/countries/new-zealand/places/wai-o-tapu-geothermal-pools.jpg",
        "title": "Wai-O-Tapu",
        "description": "A geothermal area with colourful mineral pools and steaming ground.",
        "tag": "Place"
      },
      {
        "image": "/images/continents/oceania/countries/new-zealand/places/aoraki-mount-cook.jpg",
        "title": "Aoraki / Mount Cook",
        "description": "New Zealand’s highest mountain, significant in Kāi Tahu traditions.",
        "tag": "Place"
      },
      {
        "image": "/images/continents/oceania/countries/new-zealand/places/hobbiton-movie-set.jpg",
        "title": "Hobbiton Movie Set",
        "description": "A film set built in the Waikato countryside for Middle-earth productions.",
        "tag": "Place"
      },
      {
        "image": "/images/continents/oceania/countries/new-zealand/places/waitomo-glowworm-caves.jpg",
        "title": "Waitomo Glowworm Caves",
        "description": "Caves where tiny glowworms illuminate the darkness.",
        "tag": "Place"
      }
    ],
    "theme": {
      "primary": "#315D50",
      "secondary": "#263F4A",
      "accent": "#B7A57A",
      "background": "#F0EEE5",
      "surface": "#D8E2D8",
      "text": "#243A35"
    },
    "pageType": "full",
    "extraFactFile": [
      {
        "image": "/images/continents/oceania/countries/new-zealand/fact-file/maori-marae-meeting-house.jpg",
        "title": "Marae",
        "description": "A marae is a Māori communal meeting place with important cultural protocols."
      }
    ],
    "figures": [
      {
        "image": "/images/continents/oceania/countries/new-zealand/figures/edmund-hillary.jpg",
        "title": "Edmund Hillary",
        "description": "Mountaineer who reached the summit of Everest with Tenzing Norgay in 1953."
      },
      {
        "image": "/images/continents/oceania/countries/new-zealand/figures/whina-cooper.jpg",
        "title": "Whina Cooper",
        "description": "Māori leader and campaigner for land rights."
      },
      {
        "image": "/images/continents/oceania/countries/new-zealand/figures/katherine-mansfield.jpg",
        "title": "Katherine Mansfield",
        "description": "Influential modernist short-story writer."
      },
      {
        "image": "/images/continents/oceania/countries/new-zealand/figures/chris-wood.jpg",
        "title": "Chris Wood",
        "description": "New Zealand international footballer."
      },
      {
        "image": "/images/continents/oceania/countries/new-zealand/figures/jonah-lomu.jpg",
        "title": "Jonah Lomu",
        "description": "Rugby union star who became internationally famous for his powerful running."
      }
    ],
    "culturalSpotlight": [
      {
        "image": "/images/continents/oceania/countries/new-zealand/cultural-spotlight/maori-kapa-haka.jpg",
        "title": "Kapa haka",
        "description": "Māori group performance involving song, movement and expression."
      },
      {
        "image": "/images/continents/oceania/countries/new-zealand/cultural-spotlight/maori-pounamu-carving.jpg",
        "title": "Pounamu carving",
        "description": "Carving of valued greenstone with cultural significance."
      },
      {
        "image": "/images/continents/oceania/countries/new-zealand/cultural-spotlight/maori-harakeke-weaving.jpg",
        "title": "Harakeke weaving",
        "description": "Weaving using New Zealand flax to create useful and decorative objects."
      }
    ]
  },
  {
    "slug": "papua-new-guinea",
    "name": "Papua New Guinea",
    "flag": "🇵🇬",
    "population": "10+ million",
    "capital": "Port Moresby",
    "intro": "Papua New Guinea is known for exceptional linguistic diversity, rainforest wildlife and vibrant cultural traditions.",
    "heroImage": "/images/continents/oceania/countries/papua-new-guinea/papua-new-guinea-highlands-landscape.jpg",
    "languages": [
      "English",
      "Tok Pisin",
      "Hiri Motu"
    ],
    "currency": "Papua New Guinean kina",
    "facts": [
      "Hundreds of languages are spoken in Papua New Guinea.",
      "The country has tropical rainforests and high mountains.",
      "Birds-of-paradise are famous for their colourful feathers."
    ],
    "factFile": {
      "capital": {
        "image": "/images/continents/oceania/countries/papua-new-guinea/fact-file/port-moresby.jpg",
        "title": "Port Moresby",
        "description": "Port Moresby is Papua New Guinea’s capital on the southern coast."
      },
      "food": {
        "image": "/images/continents/oceania/countries/papua-new-guinea/fact-file/kokoda-track-memorial.jpg",
        "title": "Kokoda Track memorial",
        "description": "The Kokoda campaign was an important part of the Second World War in the Pacific."
      },
      "wildlife": {
        "image": "/images/continents/oceania/countries/papua-new-guinea/fact-file/raggiana-bird-of-paradise.jpg",
        "title": "Raggiana bird-of-paradise",
        "description": "A spectacular bird featured on Papua New Guinea’s national flag."
      },
      "culture": {
        "image": "/images/continents/oceania/countries/papua-new-guinea/fact-file/sepik-spirit-house.jpg",
        "title": "Sepik spirit house",
        "description": "A ceremonial building associated with cultural traditions in parts of the Sepik region."
      }
    },
    "places": [
      {
        "image": "/images/continents/oceania/countries/papua-new-guinea/places/mount-wilhelm.jpg",
        "title": "Mount Wilhelm",
        "description": "The country’s highest mountain, in the central highlands.",
        "tag": "Place"
      },
      {
        "image": "/images/continents/oceania/countries/papua-new-guinea/places/rabaul-tavurvur-volcano.jpg",
        "title": "Tavurvur Volcano",
        "description": "An active volcano near Rabaul with a history of eruptions.",
        "tag": "Place"
      },
      {
        "image": "/images/continents/oceania/countries/papua-new-guinea/places/sepik-river.jpg",
        "title": "Sepik River",
        "description": "A major river supporting communities, transport and distinctive artistic traditions.",
        "tag": "Place"
      },
      {
        "image": "/images/continents/oceania/countries/papua-new-guinea/places/tufi-fjords.jpg",
        "title": "Tufi Fjords",
        "description": "Steep-sided coastal inlets formed in an ancient volcanic landscape.",
        "tag": "Place"
      }
    ],
    "theme": {
      "primary": "#8A3F32",
      "secondary": "#303B2C",
      "accent": "#D9A441",
      "background": "#F4E8D4",
      "surface": "#E4CEAF",
      "text": "#352D27"
    },
    "pageType": "full",
    "extraFactFile": [
      {
        "image": "/images/continents/oceania/countries/papua-new-guinea/fact-file/papua-new-guinea-mumu.jpg",
        "title": "Mumu",
        "description": "A traditional method of cooking food with heated stones, often in an earth oven."
      },
      {
        "image": "/images/continents/oceania/countries/papua-new-guinea/fact-file/matschies-tree-kangaroo.jpg",
        "title": "Matschie’s tree-kangaroo",
        "description": "A tree-dwelling marsupial native to mountain forests."
      },
      {
        "image": "/images/continents/oceania/countries/papua-new-guinea/fact-file/southern-cassowary.jpg",
        "title": "Southern cassowary",
        "description": "A large flightless rainforest bird that helps spread seeds."
      }
    ],
    "figures": [
      {
        "image": "/images/continents/oceania/countries/papua-new-guinea/figures/michael-somare.jpg",
        "title": "Michael Somare",
        "description": "A key independence leader and Papua New Guinea’s first Prime Minister."
      },
      {
        "image": "/images/continents/oceania/countries/papua-new-guinea/figures/carol-kidu.jpg",
        "title": "Carol Kidu",
        "description": "Former parliamentarian known for work on social issues and women’s rights."
      },
      {
        "image": "/images/continents/oceania/countries/papua-new-guinea/figures/dika-toua.jpg",
        "title": "Dika Toua",
        "description": "Weightlifter who represented Papua New Guinea at multiple Olympic Games."
      },
      {
        "image": "/images/continents/oceania/countries/papua-new-guinea/figures/john-momis.jpg",
        "title": "John Momis",
        "description": "Politician and leader associated with Papua New Guinea and Bougainville."
      }
    ],
    "culturalSpotlight": [
      {
        "image": "/images/continents/oceania/countries/papua-new-guinea/cultural-spotlight/goroka-sing-sing-festival.jpg",
        "title": "Goroka Show",
        "description": "A gathering showcasing traditional dress, music and dances from many communities."
      },
      {
        "image": "/images/continents/oceania/countries/papua-new-guinea/cultural-spotlight/huli-wigmen.jpg",
        "title": "Huli Wigmen",
        "description": "A cultural tradition involving elaborate wigs and ceremonial dress."
      },
      {
        "image": "/images/continents/oceania/countries/papua-new-guinea/cultural-spotlight/asaro-mudmen.jpg",
        "title": "Asaro Mudmen",
        "description": "Performers known for distinctive clay masks and body decoration."
      },
      {
        "image": "/images/continents/oceania/countries/papua-new-guinea/cultural-spotlight/papua-new-guinea-bilum-weaving.jpg",
        "title": "Bilum weaving",
        "description": "Traditional string bags made using looping techniques."
      }
    ]
  },
  {
    "slug": "samoa",
    "name": "Samoa",
    "flag": "🇼🇸",
    "population": "200,000+",
    "capital": "Apia",
    "intro": "Samoa is a Polynesian island country with rich communal traditions, volcanic landscapes and distinctive art.",
    "heroImage": "/images/continents/oceania/countries/samoa/samoa-upolu-island-landscape.jpg",
    "languages": [
      "Samoan",
      "English"
    ],
    "currency": "Samoan tālā",
    "facts": [
      "Samoa is made up of volcanic islands in Polynesia.",
      "Traditional fale buildings have open-sided designs.",
      "The country is known for its strong traditions of community and family."
    ],
    "factFile": {
      "capital": {
        "image": "/images/continents/oceania/countries/samoa/fact-file/apia-clock-tower.jpg",
        "title": "Apia Clock Tower",
        "description": "A landmark in Apia, the capital of Samoa."
      },
      "food": {
        "image": "/images/continents/oceania/countries/samoa/fact-file/samoan-palusami.jpg",
        "title": "Palusami",
        "description": "A dish commonly made using taro leaves and coconut cream."
      },
      "wildlife": {
        "image": "/images/continents/oceania/countries/samoa/fact-file/samoan-flying-fox.jpg",
        "title": "Samoan flying fox",
        "description": "A fruit bat that plays a role in forest pollination and seed dispersal."
      },
      "culture": {
        "image": "/images/continents/oceania/countries/samoa/fact-file/traditional-samoan-fale.jpg",
        "title": "Traditional fale",
        "description": "An open-sided Samoan building designed for communal living and gatherings."
      }
    },
    "places": [
      {
        "image": "/images/continents/oceania/countries/samoa/places/to-sua-ocean-trench.jpg",
        "title": "To Sua Ocean Trench",
        "description": "A dramatic swimming hole reached by a ladder on Upolu.",
        "tag": "Place"
      },
      {
        "image": "/images/continents/oceania/countries/samoa/places/afu-aau-waterfall.jpg",
        "title": "Afu Aau Waterfall",
        "description": "A waterfall on Savaiʻi surrounded by tropical vegetation.",
        "tag": "Place"
      },
      {
        "image": "/images/continents/oceania/countries/samoa/places/saleaula-lava-fields.jpg",
        "title": "Saleaula Lava Fields",
        "description": "A landscape formed by volcanic eruptions in the early twentieth century.",
        "tag": "Place"
      },
      {
        "image": "/images/continents/oceania/countries/samoa/places/lalomanu-beach.jpg",
        "title": "Lalomanu Beach",
        "description": "A sandy beach on the south-east coast of Upolu.",
        "tag": "Place"
      }
    ],
    "theme": {
      "primary": "#236A83",
      "secondary": "#9B3F45",
      "accent": "#E5B46D",
      "background": "#FFF0DF",
      "surface": "#DCE8E4",
      "text": "#303F49"
    },
    "pageType": "full",
    "extraFactFile": [
      {
        "image": "/images/continents/oceania/countries/samoa/fact-file/robert-louis-stevenson-museum.jpg",
        "title": "Robert Louis Stevenson Museum",
        "description": "The former home of the Scottish writer who spent his final years in Samoa."
      },
      {
        "image": "/images/continents/oceania/countries/samoa/fact-file/samoa-manumea-pigeon.jpg",
        "title": "Manumea",
        "description": "The tooth-billed pigeon is a critically endangered bird found only in Samoa."
      }
    ],
    "figures": [
      {
        "image": "/images/continents/oceania/countries/samoa/figures/malietoa-tanumafili-ii.jpg",
        "title": "Malietoa Tanumafili II",
        "description": "One of Samoa’s heads of state after independence, serving for decades."
      },
      {
        "image": "/images/continents/oceania/countries/samoa/figures/fiame-naomi-mataafa.jpg",
        "title": "Fiame Naomi Mataʻafa",
        "description": "Samoan political leader and the country’s first woman Prime Minister."
      },
      {
        "image": "/images/continents/oceania/countries/samoa/figures/david-tua.jpg",
        "title": "David Tua",
        "description": "Samoan-born heavyweight boxer who competed internationally."
      },
      {
        "image": "/images/continents/oceania/countries/samoa/figures/albert-wendt.jpg",
        "title": "Albert Wendt",
        "description": "Influential Samoan novelist, poet and educator."
      }
    ],
    "culturalSpotlight": [
      {
        "image": "/images/continents/oceania/countries/samoa/cultural-spotlight/samoan-traditional-tatau.jpg",
        "title": "Traditional tatau",
        "description": "Samoan tattooing traditions carry deep cultural and family significance."
      },
      {
        "image": "/images/continents/oceania/countries/samoa/cultural-spotlight/samoan-siva-afi.jpg",
        "title": "Siva afi",
        "description": "A modern performance using fire knives, linked to Samoan dance and knife traditions."
      },
      {
        "image": "/images/continents/oceania/countries/samoa/cultural-spotlight/samoan-siapo-barkcloth.jpg",
        "title": "Siapo barkcloth",
        "description": "Decorated barkcloth made from the paper mulberry tree."
      },
      {
        "image": "/images/continents/oceania/countries/samoa/cultural-spotlight/samoan-ava-ceremony.jpg",
        "title": "ʻAva ceremony",
        "description": "A formal ceremony that expresses welcome, respect and social relationships."
      }
    ]
  },
  {
    "slug": "solomon-islands",
    "name": "Solomon Islands",
    "flag": "🇸🇧",
    "population": "700,000+",
    "capital": "Honiara",
    "intro": "Solomon Islands is a Melanesian country with remarkable marine habitats, traditional arts and significant Pacific War history.",
    "heroImage": "/images/continents/oceania/countries/solomon-islands/solomon-islands-marovo-lagoon.jpg",
    "languages": [
      "English",
      "Solomon Islands Pijin",
      "Indigenous languages"
    ],
    "currency": "Solomon Islands dollar",
    "facts": [
      "The Solomon Islands is an archipelago east of Papua New Guinea.",
      "Guadalcanal was an important location in the Second World War.",
      "Many communities have traditions of carving and music."
    ],
    "factFile": {
      "capital": {
        "image": "/images/continents/oceania/countries/solomon-islands/fact-file/honiara-waterfront.jpg",
        "title": "Honiara",
        "description": "Honiara is the capital of Solomon Islands, on Guadalcanal."
      },
      "food": {
        "image": "/images/continents/oceania/countries/solomon-islands/fact-file/solomon-islands-cassava-pudding.jpg",
        "title": "Cassava pudding",
        "description": "A traditional food made using cassava, a widely grown root crop."
      },
      "wildlife": {
        "image": "/images/continents/oceania/countries/solomon-islands/fact-file/eclectus-parrot.jpg",
        "title": "Eclectus parrot",
        "description": "A colourful parrot whose males and females have strikingly different plumage."
      },
      "culture": {
        "image": "/images/continents/oceania/countries/solomon-islands/fact-file/guadalcanal-war-memorial.jpg",
        "title": "Guadalcanal War Memorial",
        "description": "A memorial connected to the major Second World War campaign fought here."
      }
    },
    "places": [
      {
        "image": "/images/continents/oceania/countries/solomon-islands/places/skull-island-vona-vona.jpg",
        "title": "Skull Island",
        "description": "A culturally significant ancestral shrine in the Vona Vona Lagoon area; visitors should treat it respectfully.",
        "tag": "Place"
      },
      {
        "image": "/images/continents/oceania/countries/solomon-islands/places/mataniko-falls.jpg",
        "title": "Mataniko Falls",
        "description": "Waterfalls and caves in the hills near Honiara.",
        "tag": "Place"
      },
      {
        "image": "/images/continents/oceania/countries/solomon-islands/places/kennedy-island.jpg",
        "title": "Kennedy Island",
        "description": "An island associated with John F. Kennedy’s Second World War survival story.",
        "tag": "Place"
      },
      {
        "image": "/images/continents/oceania/countries/solomon-islands/places/tinakula-volcano.jpg",
        "title": "Tinakula Volcano",
        "description": "An active volcanic island in the Santa Cruz group.",
        "tag": "Place"
      }
    ],
    "theme": {
      "primary": "#326B49",
      "secondary": "#275C75",
      "accent": "#E8BE59",
      "background": "#F2EBD4",
      "surface": "#D8E4C8",
      "text": "#284438"
    },
    "pageType": "full",
    "extraFactFile": [
      {
        "image": "/images/continents/oceania/countries/solomon-islands/fact-file/solomon-islands-giant-skink.jpg",
        "title": "Solomon Islands giant skink",
        "description": "A large tree-dwelling skink with a grasping tail."
      },
      {
        "image": "/images/continents/oceania/countries/solomon-islands/fact-file/solomon-islands-dugong.jpg",
        "title": "Dugong",
        "description": "A marine mammal that feeds on seagrass."
      },
      {
        "image": "/images/continents/oceania/countries/solomon-islands/fact-file/solomon-islands-shell-money.jpg",
        "title": "Shell money",
        "description": "Shell valuables have important ceremonial and exchange roles in some communities."
      }
    ],
    "figures": [
      {
        "image": "/images/continents/oceania/countries/solomon-islands/figures/peter-kenilorea.jpg",
        "title": "Peter Kenilorea",
        "description": "The first Prime Minister of the independent Solomon Islands."
      },
      {
        "image": "/images/continents/oceania/countries/solomon-islands/figures/henry-faarodo.jpg",
        "title": "Henry Fa’arodo",
        "description": "Former captain of the Solomon Islands national football team."
      },
      {
        "image": "/images/continents/oceania/countries/solomon-islands/figures/sharon-firisua.jpg",
        "title": "Sharon Firisua",
        "description": "Olympic athlete and distance runner."
      },
      {
        "image": "/images/continents/oceania/countries/solomon-islands/figures/jully-makini.jpg",
        "title": "Jully Makini",
        "description": "Poet and advocate for women’s rights."
      }
    ],
    "culturalSpotlight": [
      {
        "image": "/images/continents/oceania/countries/solomon-islands/cultural-spotlight/areare-panpipe-music.jpg",
        "title": "ʻAreʻare panpipe music",
        "description": "Bamboo panpipe ensembles are an important musical tradition in parts of Malaita."
      },
      {
        "image": "/images/continents/oceania/countries/solomon-islands/cultural-spotlight/nguzunguzu-canoe-carving.jpg",
        "title": "Nguzunguzu carving",
        "description": "Carved canoe prow figures associated with traditional voyaging and protection."
      },
      {
        "image": "/images/continents/oceania/countries/solomon-islands/cultural-spotlight/solomon-islands-basket-weaving.jpg",
        "title": "Basket weaving",
        "description": "Weaving traditions produce baskets and other everyday objects."
      },
      {
        "image": "/images/continents/oceania/countries/solomon-islands/cultural-spotlight/solomon-islands-bamboo-music.jpg",
        "title": "Bamboo music",
        "description": "Bamboo instruments create rhythmic performances in several island communities."
      }
    ]
  },
  {
    "slug": "tonga",
    "name": "Tonga",
    "flag": "🇹🇴",
    "population": "100,000+",
    "capital": "Nukuʻalofa",
    "intro": "Tonga is a Polynesian kingdom with a long royal history, rich cultural traditions and important whale habitats.",
    "heroImage": "/images/continents/oceania/countries/tonga/tonga-vavau-islands-landscape.jpg",
    "languages": [
      "Tongan",
      "English"
    ],
    "currency": "Tongan paʻanga",
    "facts": [
      "Tonga is a Polynesian kingdom.",
      "Humpback whales visit Tongan waters to breed and give birth.",
      "Lakalaka is a traditional performance combining dance and sung poetry."
    ],
    "factFile": {
      "capital": {
        "image": "/images/continents/oceania/countries/tonga/fact-file/nukualofa-royal-palace.jpg",
        "title": "Nukuʻalofa Royal Palace",
        "description": "The royal palace stands in Tonga’s capital, Nukuʻalofa."
      },
      "food": {
        "image": "/images/continents/oceania/countries/tonga/fact-file/tongan-lu-sipi.jpg",
        "title": "Lū sipi",
        "description": "A Tongan dish made with lamb, taro leaves and coconut cream."
      },
      "wildlife": {
        "image": "/images/continents/oceania/countries/tonga/fact-file/tongan-megapode.jpg",
        "title": "Tongan megapode",
        "description": "A rare bird that uses naturally heated ground to incubate eggs."
      },
      "culture": {
        "image": "/images/continents/oceania/countries/tonga/fact-file/tonga-langi-royal-tombs.jpg",
        "title": "Langi royal tombs",
        "description": "Monumental stone tombs connected with Tonga’s historic ruling dynasties."
      }
    },
    "places": [
      {
        "image": "/images/continents/oceania/countries/tonga/places/mapu-a-vaea-blowholes.jpg",
        "title": "Mapu ʻa Vaea Blowholes",
        "description": "Ocean waves force spray high into the air through holes in coastal rock.",
        "tag": "Place"
      },
      {
        "image": "/images/continents/oceania/countries/tonga/places/anahulu-cave.jpg",
        "title": "ʻAnahulu Cave",
        "description": "A limestone cave with a freshwater pool.",
        "tag": "Place"
      },
      {
        "image": "/images/continents/oceania/countries/tonga/places/haapai-islands.jpg",
        "title": "Haʻapai Islands",
        "description": "An island group with sandy beaches, reefs and small communities.",
        "tag": "Place"
      },
      {
        "image": "/images/continents/oceania/countries/tonga/places/hunga-tonga-volcano.jpg",
        "title": "Hunga Tonga–Hunga Haʻapai",
        "description": "An underwater volcano that produced a major eruption in January 2022.",
        "tag": "Place"
      }
    ],
    "theme": {
      "primary": "#8D303A",
      "secondary": "#533D50",
      "accent": "#D8A35D",
      "background": "#F5E5D3",
      "surface": "#E8D2CB",
      "text": "#402E38"
    },
    "pageType": "full",
    "extraFactFile": [
      {
        "image": "/images/continents/oceania/countries/tonga/fact-file/haamonga-a-maui.jpg",
        "title": "Haʻamonga ʻa Maui",
        "description": "An ancient stone trilithon associated with Tonga’s royal past."
      },
      {
        "image": "/images/continents/oceania/countries/tonga/fact-file/tonga-humpback-whales.jpg",
        "title": "Humpback whales",
        "description": "Humpback whales migrate to Tongan waters to breed and give birth."
      },
      {
        "image": "/images/continents/oceania/countries/tonga/fact-file/tongan-flying-fox.jpg",
        "title": "Pacific flying fox",
        "description": "A fruit bat that helps forests by spreading seeds."
      }
    ],
    "figures": [
      {
        "image": "/images/continents/oceania/countries/tonga/figures/queen-salote-tupou-iii.jpg",
        "title": "Queen Sālote Tupou III",
        "description": "Tongan monarch remembered for her leadership and international presence."
      },
      {
        "image": "/images/continents/oceania/countries/tonga/figures/king-tupou-vi.jpg",
        "title": "King Tupou VI",
        "description": "Tonga’s reigning monarch."
      },
      {
        "image": "/images/continents/oceania/countries/tonga/figures/pita-taufatofua.jpg",
        "title": "Pita Taufatofua",
        "description": "Olympian known for representing Tonga in taekwondo and cross-country skiing."
      },
      {
        "image": "/images/continents/oceania/countries/tonga/figures/paula-latu.jpg",
        "title": "Paula Latu",
        "description": "Tongan rugby player; confirm the intended individual and photo before publishing."
      }
    ],
    "culturalSpotlight": [
      {
        "image": "/images/continents/oceania/countries/tonga/cultural-spotlight/tongan-lakalaka-dance.jpg",
        "title": "Lakalaka",
        "description": "A traditional performance combining poetry, dance and music."
      },
      {
        "image": "/images/continents/oceania/countries/tonga/cultural-spotlight/tongan-ngatu-barkcloth.jpg",
        "title": "Ngatu barkcloth",
        "description": "Decorated barkcloth used in ceremonies and as valued gifts."
      },
      {
        "image": "/images/continents/oceania/countries/tonga/cultural-spotlight/tongan-taovala.jpg",
        "title": "Taʻovala",
        "description": "A woven mat worn around the waist as a sign of respect."
      },
      {
        "image": "/images/continents/oceania/countries/tonga/cultural-spotlight/tongan-faikava.jpg",
        "title": "Faikava",
        "description": "A social gathering centred on preparing and sharing kava."
      }
    ]
  },
  {
    "slug": "vanuatu",
    "name": "Vanuatu",
    "flag": "🇻🇺",
    "population": "300,000+",
    "capital": "Port Vila",
    "intro": "Vanuatu is a Melanesian archipelago known for volcanoes, cultural diversity and distinctive living traditions.",
    "heroImage": "/images/continents/oceania/countries/vanuatu/vanuatu-mount-yasur-landscape.jpg",
    "languages": [
      "Bislama",
      "English",
      "French",
      "Indigenous languages"
    ],
    "currency": "Vanuatu vatu",
    "facts": [
      "Vanuatu became independent in 1980.",
      "Mount Yasur is an active volcano on Tanna Island.",
      "Sand drawing is an important traditional form of communication and storytelling."
    ],
    "factFile": {
      "capital": {
        "image": "/images/continents/oceania/countries/vanuatu/fact-file/port-vila-harbour.jpg",
        "title": "Port Vila",
        "description": "Port Vila is the capital of Vanuatu, on Efate island."
      },
      "food": {
        "image": "/images/continents/oceania/countries/vanuatu/fact-file/vanuatu-laplap.jpg",
        "title": "Laplap",
        "description": "A traditional dish made with grated root crops and cooked in leaves."
      },
      "wildlife": {
        "image": "/images/continents/oceania/countries/vanuatu/fact-file/vanuatu-coconut-crab.jpg",
        "title": "Coconut crab",
        "description": "An enormous land crab that can climb trees and crack coconuts."
      },
      "culture": {
        "image": "/images/continents/oceania/countries/vanuatu/fact-file/vanuatu-tamtam-drums.jpg",
        "title": "Tamtam drums",
        "description": "Tall carved slit drums associated with ceremonies on some islands."
      }
    },
    "places": [
      {
        "image": "/images/continents/oceania/countries/vanuatu/places/champagne-beach.jpg",
        "title": "Champagne Beach",
        "description": "A beach on Espiritu Santo known for pale sand and clear water.",
        "tag": "Place"
      },
      {
        "image": "/images/continents/oceania/countries/vanuatu/places/nanda-blue-hole.jpg",
        "title": "Nanda Blue Hole",
        "description": "A vivid blue freshwater pool on Espiritu Santo.",
        "tag": "Place"
      },
      {
        "image": "/images/continents/oceania/countries/vanuatu/places/ss-president-coolidge-wreck.jpg",
        "title": "SS President Coolidge",
        "description": "A former ocean liner that sank during the Second World War and is now a dive site.",
        "tag": "Place"
      },
      {
        "image": "/images/continents/oceania/countries/vanuatu/places/millennium-cave.jpg",
        "title": "Millennium Cave",
        "description": "A large cave in the rainforest of Espiritu Santo.",
        "tag": "Place"
      }
    ],
    "theme": {
      "primary": "#245A45",
      "secondary": "#263B31",
      "accent": "#D76C39",
      "background": "#F2E5C9",
      "surface": "#D8D9B5",
      "text": "#253A30"
    },
    "pageType": "full",
    "extraFactFile": [
      {
        "image": "/images/continents/oceania/countries/vanuatu/fact-file/vanuatu-independence-1980.jpg",
        "title": "Independence in 1980",
        "description": "Vanuatu gained independence on 30 July 1980 after joint British and French administration."
      },
      {
        "image": "/images/continents/oceania/countries/vanuatu/fact-file/vanuatu-flying-fox.jpg",
        "title": "Vanuatu flying fox",
        "description": "A fruit bat native to Vanuatu that helps maintain forest ecosystems."
      },
      {
        "image": "/images/continents/oceania/countries/vanuatu/fact-file/vanuatu-rainbow-lorikeet.jpg",
        "title": "Rainbow lorikeet",
        "description": "A colourful parrot that feeds on nectar and pollen."
      }
    ],
    "figures": [
      {
        "image": "/images/continents/oceania/countries/vanuatu/figures/walter-lini.jpg",
        "title": "Walter Lini",
        "description": "Vanuatu’s first Prime Minister and an independence leader."
      },
      {
        "image": "/images/continents/oceania/countries/vanuatu/figures/grace-mera-molisa.jpg",
        "title": "Grace Mera Molisa",
        "description": "Poet and activist known for writing about women’s lives and political issues."
      },
      {
        "image": "/images/continents/oceania/countries/vanuatu/figures/ralph-regenvanu.jpg",
        "title": "Ralph Regenvanu",
        "description": "Politician, artist and advocate for cultural heritage."
      },
      {
        "image": "/images/continents/oceania/countries/vanuatu/figures/vanessa-quai.jpg",
        "title": "Vanessa Quai",
        "description": "Singer known for sharing Vanuatu and Pacific music."
      }
    ],
    "culturalSpotlight": [
      {
        "image": "/images/continents/oceania/countries/vanuatu/cultural-spotlight/vanuatu-naghol-land-diving.jpg",
        "title": "Naghol land diving",
        "description": "A traditional Pentecost Island ceremony in which divers leap from wooden towers using vines."
      },
      {
        "image": "/images/continents/oceania/countries/vanuatu/cultural-spotlight/vanuatu-sand-drawings.jpg",
        "title": "Sand drawings",
        "description": "Intricate drawings that transmit stories, knowledge and messages."
      },
      {
        "image": "/images/continents/oceania/countries/vanuatu/cultural-spotlight/vanuatu-rom-dance.jpg",
        "title": "Rom dance",
        "description": "A ceremonial performance on Ambrym featuring distinctive masks and costumes."
      },
      {
        "image": "/images/continents/oceania/countries/vanuatu/cultural-spotlight/vanuatu-water-music.jpg",
        "title": "Water music",
        "description": "A musical tradition in which performers create rhythms and tones by moving water."
      }
    ]
  },
  {
    "slug": "kiribati",
    "name": "Kiribati",
    "flag": "🇰🇮",
    "population": "130,000+",
    "capital": "South Tarawa",
    "intro": "Kiribati is a widely dispersed island nation of low-lying atolls, with strong ocean traditions and major climate challenges.",
    "heroImage": "/images/continents/oceania/countries/kiribati/kiribati-atoll-lagoon-landscape.jpg",
    "languages": [
      "Gilbertese (Kiribati)",
      "English"
    ],
    "currency": "Australian dollar",
    "facts": [
      "Kiribati consists of islands spread across a vast area of the Pacific.",
      "Many islands are low-lying coral atolls.",
      "Traditional dance is an important way to share stories."
    ],
    "factFile": {
      "capital": {
        "image": "/images/continents/oceania/countries/kiribati/fact-file/south-tarawa.jpg",
        "title": "South Tarawa",
        "description": "The main urban and government centre of Kiribati."
      },
      "food": {
        "image": "/images/continents/oceania/countries/kiribati/fact-file/battle-of-tarawa-memorial.jpg",
        "title": "Battle of Tarawa memorial",
        "description": "A reminder of fierce fighting during the Second World War."
      },
      "wildlife": {
        "image": "/images/continents/oceania/countries/kiribati/fact-file/kiribati-frigatebird.jpg",
        "title": "Frigatebird",
        "description": "A seabird with long wings, important in Kiribati’s natural and cultural identity."
      },
      "culture": {
        "image": "/images/continents/oceania/countries/kiribati/fact-file/kiribati-pumpkin-coconut-dish.jpg",
        "title": "Pumpkin and coconut dish",
        "description": "Local cooking often uses coconut and island-grown ingredients."
      }
    },
    "places": [
      {
        "image": "/images/continents/oceania/countries/kiribati/places/kiritimati-christmas-island.jpg",
        "title": "Kiritimati Island",
        "description": "One of the world’s largest coral atolls by land area.",
        "tag": "Place"
      },
      {
        "image": "/images/continents/oceania/countries/kiribati/places/kiritimati-salt-ponds.jpg",
        "title": "Kiritimati salt ponds",
        "description": "Shallow ponds and lagoons support distinctive habitats.",
        "tag": "Place"
      },
      {
        "image": "/images/continents/oceania/countries/kiribati/places/phoenix-islands-marine-life.jpg",
        "title": "Phoenix Islands marine life",
        "description": "Remote protected ocean ecosystems rich in marine biodiversity.",
        "tag": "Place"
      },
      {
        "image": "/images/continents/oceania/countries/kiribati/places/phoenix-islands-underwater.jpg",
        "title": "Phoenix Islands underwater",
        "description": "Coral reef habitats within the Phoenix Islands Protected Area.",
        "tag": "Place"
      }
    ],
    "theme": {
      "primary": "#187C9A",
      "secondary": "#B45B39",
      "accent": "#E5C66D",
      "background": "#FFF0D7",
      "surface": "#C9E5E8",
      "text": "#254A56"
    },
    "pageType": "mini",
    "extraFactFile": [
      {
        "image": "/images/continents/oceania/countries/kiribati/fact-file/kiribati-toddy-collection.jpg",
        "title": "Toddy collection",
        "description": "Sap collected from coconut palms is used in traditional drinks and foods."
      }
    ],
    "figures": [
      {
        "image": "/images/continents/oceania/countries/kiribati/figures/ieremia-tabai.jpg",
        "title": "Ieremia Tabai",
        "description": "Kiribati’s first President after independence."
      },
      {
        "image": "/images/continents/oceania/countries/kiribati/figures/anote-tong.jpg",
        "title": "Anote Tong",
        "description": "Former President known internationally for speaking about climate change."
      },
      {
        "image": "/images/continents/oceania/countries/kiribati/figures/david-katoatau.jpg",
        "title": "David Katoatau",
        "description": "Olympic weightlifter who brought attention to climate challenges facing Kiribati."
      },
      {
        "image": "/images/continents/oceania/countries/kiribati/figures/teresia-teaiwa.jpg",
        "title": "Teresia Teaiwa",
        "description": "Scholar and poet whose work explored Pacific identity and culture."
      }
    ],
    "culturalSpotlight": [
      {
        "image": "/images/continents/oceania/countries/kiribati/cultural-spotlight/kiribati-traditional-dance.jpg",
        "title": "Traditional dance",
        "description": "Dance traditions often feature bird-like movements and coordinated group performance."
      },
      {
        "image": "/images/continents/oceania/countries/kiribati/cultural-spotlight/kiribati-woven-dance-mat.jpg",
        "title": "Woven dance mat",
        "description": "Woven materials play important roles in Kiribati cultural life."
      }
    ]
  }
];
