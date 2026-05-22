import { TimelineItem } from "@/components/shared/Timeline";

export const timelines: Record<string, TimelineItem[]> = {
  jamaica: [
    {
      periodKey: "taino-people",
      year: "Before 1494",
      title: "The Taíno People",
      text: "Before European arrival, Jamaica was home to the Taíno people who lived through farming, fishing, and trade across the Caribbean.",
      emoji: "🌴",
      questions: [
        "How did island geography shape Taíno life?",
        "Why were trade routes important in the Caribbean?",
      ],
    },
    {
      periodKey: "caribbean-trade",
      year: "Before 1494",
      title: "Caribbean Trade Networks",
      text: "Caribbean islands were connected through trade routes, movement, and shared cultural traditions long before European arrival.",
      emoji: "🛶",
      questions: [
        "How were Caribbean islands connected?",
        "Why were sea routes important?",
      ],
    },

    {
      periodKey: "spanish-settlements",
      year: "1500s",
      title: "Spanish Settlements",
      text: "Spain established settlements in Jamaica and used the island for trade and control in the Caribbean.",
      emoji: "⛵",
      questions: [
        "Why did Spain want Caribbean islands?",
        "How did colonisation affect local people?",
      ],
    },

    {
      periodKey: "plantations",
      year: "1600s–1700s",
      title: "Plantation Expansion",
      text: "Large plantations were built to grow sugar crops, creating wealth for European powers while relying on enslaved labour.",
      emoji: "🌾",
      questions: [
        "Why was sugar so valuable?",
        "Who benefited from plantation systems?",
      ],
    },

    {
      periodKey: "maroons",
      year: "1700s",
      title: "Maroon Resistance",
      text: "Escaped enslaved Africans formed Maroon communities in Jamaica’s mountains and resisted British control.",
      emoji: "⚔️",
      questions: [
        "Who were the Maroons?",
        "Why is resistance important in Jamaican history?",
      ],
    },

    {
      periodKey: "columbus-arrives",
      year: "1494",
      title: "Columbus Arrives",
      text: "Christopher Columbus arrived in Jamaica during Spanish exploration of the Caribbean.",
      emoji: "🚢",
      questions: [
        "Why were Europeans exploring the Caribbean?",
        "How did arrival change life for Indigenous people?",
      ],
    },

    {
      periodKey: "spanish-rule",
      year: "1509–1655",
      title: "Spanish Rule",
      text: "Spain controlled Jamaica and established settlements while forcing Indigenous populations into harsh conditions.",
      emoji: "⚔️",
      questions: [
        "Why did European countries want Caribbean islands?",
        "What impact did colonisation have?",
      ],
    },

    {
      periodKey: "british-rule",
      year: "1655",
      title: "Britain Takes Control",
      text: "Britain captured Jamaica from Spain and expanded plantation systems across the island.",
      emoji: "🏴",
      questions: [
        "Why was Jamaica important to Britain?",
        "How did plantations shape Caribbean history?",
      ],
    },

    {
      periodKey: "slavery",
      year: "1600s–1800s",
      title: "Enslavement and Resistance",
      text: "Thousands of enslaved Africans were forced to work on plantations. Resistance movements and Maroon communities fought against slavery.",
      emoji: "⛓️",
      questions: [
        "What were Maroon communities?",
        "Why is resistance important in Jamaican history?",
      ],
    },

    {
      periodKey: "emancipation",
      year: "1838",
      title: "Emancipation",
      text: "Slavery officially ended in Jamaica after years of resistance, rebellion, and abolition movements.",
      emoji: "🕊️",
      questions: [
        "What changed after emancipation?",
        "Why did people continue fighting for equality?",
      ],
    },

    {
      periodKey: "reggae",
      year: "1960s–1970s",
      title: "Rise of Reggae",
      text: "Reggae music became globally influential through artists like Bob Marley, spreading Jamaican culture worldwide.",
      emoji: "🎵",
      questions: [
        "Why did reggae become globally popular?",
        "How can music spread messages and identity?",
      ],
    },

    {
      periodKey: "independence",
      year: "1962",
      title: "Independence",
      text: "Jamaica became an independent nation, developing its own government and national identity.",
      emoji: "🇯🇲",
      questions: [
        "Why is independence important?",
        "How do countries build national identity?",
      ],
    },

    {
      periodKey: "modern-jamaica",
      year: "1962–Present",
      title: "Modern Jamaica",
      text: "Jamaica continues to influence the world through music, athletics, food, language, and culture.",
      emoji: "🌍",
      questions: [
        "Why does Jamaica have global cultural influence?",
        "How does culture shape a country’s identity?",
      ],
    },

    {
      periodKey: "research-gap",
      year: "Research Gap",
      title: "What did we miss?",
      text: "There are many important stories and people not included in this timeline.",
      emoji: "❓",
      isGap: true,
      prompt:
        "Can you research and add another important event from Jamaican history?",
    },
  ],
};
