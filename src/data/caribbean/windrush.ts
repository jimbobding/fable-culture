export type WindrushStoryCard = {
  id: string;
  icon: string;
  year: string;
  title: string;
  shortText: string;
  detail: string;
  didYouKnow: string;
};

export type WindrushLegacyCard = {
  icon: string;
  title: string;
  text: string;
};

export const windrushStoryCards: WindrushStoryCard[] = [
  {
    id: "journey",
    icon: "🚢",
    year: "1948",
    title: "A Journey Across the Atlantic",
    shortText: "The Empire Windrush arrived at Tilbury Docks on 22 June 1948.",
    detail:
      "After the Second World War, Britain needed workers to help rebuild the country. People from Caribbean islands travelled to Britain hoping for work, opportunity, and a new future. The arrival of the Empire Windrush became one of the most famous symbols of this wider migration story.",
    didYouKnow:
      "The Windrush story was not just one ship. It represents many Caribbean families who moved to Britain before and after 1948.",
  },
  {
    id: "work",
    icon: "🏥",
    year: "1950s",
    title: "Helping Rebuild Britain",
    shortText:
      "Many Caribbean migrants worked in hospitals, transport, factories, and public services.",
    detail:
      "Members of the Windrush generation helped Britain recover after the war. Many worked in the NHS, on buses and trains, in factories, construction, and other important services. Their work became part of everyday British life.",
    didYouKnow:
      "Many people who arrived faced difficult work and living conditions, but still helped build communities and support public services.",
  },
  {
    id: "community",
    icon: "🏠",
    year: "1950s–60s",
    title: "Building New Lives",
    shortText:
      "Families created homes, churches, businesses, clubs, and community spaces.",
    detail:
      "Starting a new life was not easy. Many Caribbean families had to find housing, work, schools, and support networks. Community spaces became important places for belonging, music, food, faith, friendship, and care.",
    didYouKnow:
      "Community centres, churches, music venues, and local businesses helped many families feel connected in a new country.",
  },
  {
    id: "culture",
    icon: "🎶",
    year: "1960s–today",
    title: "Changing British Culture",
    shortText:
      "Caribbean culture helped shape modern Britain through music, food, sport, language, and celebration.",
    detail:
      "The Windrush generation and their descendants helped transform British culture. Reggae, ska, calypso, sound systems, Caribbean food, cricket, Carnival, fashion, and language all became part of Britain’s cultural story.",
    didYouKnow:
      "Notting Hill Carnival grew into one of Europe’s largest street festivals and is strongly connected to Caribbean culture in Britain.",
  },
  {
    id: "challenges",
    icon: "⚠️",
    year: "1950s–70s",
    title: "Facing Racism and Discrimination",
    shortText:
      "Many Caribbean people were treated unfairly when looking for jobs, housing, and respect.",
    detail:
      "The Windrush story includes pride and contribution, but also hardship. Many people faced racism, unfair treatment, and discrimination. Some were refused housing or jobs because of the colour of their skin.",
    didYouKnow:
      "Learning about Windrush means celebrating contribution while also being honest about injustice.",
  },
  {
    id: "scandal",
    icon: "⚖️",
    year: "2018",
    title: "The Windrush Scandal",
    shortText:
      "Some people were wrongly told they had to prove their right to live in Britain.",
    detail:
      "Decades after arriving or growing up in Britain, some members of the Windrush generation were wrongly treated as if they did not have the right to live in the UK. Some lost jobs, homes, healthcare access, or were threatened with removal. The government later apologised and created support and compensation schemes.",
    didYouKnow:
      "The scandal showed why records, rights, fairness, and respect matter in society.",
  },
];

export const windrushLegacyCards: WindrushLegacyCard[] = [
  {
    icon: "🏥",
    title: "NHS",
    text: "Caribbean workers helped support hospitals and care services across Britain.",
  },
  {
    icon: "🎶",
    title: "Music",
    text: "Reggae, ska, calypso, sound system culture, and Caribbean rhythms shaped British music.",
  },
  {
    icon: "🍛",
    title: "Food",
    text: "Caribbean food became part of British high streets, homes, festivals, and family celebrations.",
  },
  {
    icon: "🥁",
    title: "Carnival",
    text: "Carnival became a powerful celebration of Caribbean identity, creativity, resistance, and joy.",
  },
  {
    icon: "🏏",
    title: "Sport",
    text: "Cricket, athletics, boxing, and football were shaped by Caribbean talent and pride.",
  },
  {
    icon: "🌍",
    title: "Identity",
    text: "The Windrush story helped shape what modern multicultural Britain looks and feels like.",
  },
];

export const windrushSources = [
  {
    title: "The National Archives — The Empire Windrush",
    href: "https://www.nationalarchives.gov.uk/education/resources/the-empire-windrush/",
  },
  {
    title: "The National Archives — Caribbean Migration",
    href: "https://www.nationalarchives.gov.uk/education/resources/the-empire-windrush/empire-windrush-caribbean-migration/",
  },
  {
    title: "British Library — Windrush Voices",
    href: "https://events.bl.uk/events/windrush-voices",
  },
  {
    title: "Imperial War Museums — Why Windrush Still Matters",
    href: "https://www.iwm.org.uk/blog/partnerships/2023/05/why-the-windrush-still-matters-today",
  },
  {
    title: "House of Commons Library — Windrush Scandal Response",
    href: "https://commonslibrary.parliament.uk/research-briefings/cbp-8779/",
  },
];
