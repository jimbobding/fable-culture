import type { ResistanceCase } from "./types";

export const oceaniaResistanceCases: ResistanceCase[] = [
  {
    id: "fiji-cession",
    number: "01",
    title: "The Agreement",
    location: "Fiji",
    year: "1874",
    introduction:
      "A document is signed. A kingdom becomes a British colony. But who agreed to this enormous change, and what did it mean for everyone else?",

    background: [
      "In the 1800s, Fiji was not a single, united nation ruled in the same way as Britain. Different communities and powerful chiefs held authority across the islands.",

      "Ratu Seru Epenisa Cakobau was an influential chief who claimed the title Tui Viti, or King of Fiji. His authority was not accepted equally everywhere.",

      "European settlement, financial difficulties, political rivalry and growing foreign influence created serious pressures. Some leaders believed British protection might bring stability.",

      "On 10 October 1874, thirteen leading chiefs signed the Deed of Cession at Levuka. Sir Hercules Robinson accepted it on behalf of Queen Victoria.",
    ],

    centralQuestion:
      "Can an agreement signed by powerful leaders represent the wishes of everyone?",

    evidence: [
      {
        id: "signatures",
        title: "Evidence A — The Signatures",
        category: "Historical document",
        content:
          "The Deed of Cession was signed by thirteen leading chiefs, including Cakobau, and accepted by Sir Hercules Robinson on behalf of Britain. It transferred sovereignty over the Fiji Islands to the British Crown.",

        question:
          "What can we establish from the signatures?",

        answers: [
          {
            id: "everyone",
            text: "Every person in Fiji personally agreed.",
            correct: false,
            feedback:
              "The signatures cannot establish the personal agreement of everyone living in Fiji.",
          },
          {
            id: "leaders",
            text: "Thirteen leading chiefs signed the agreement.",
            correct: true,
            feedback:
              "Correct. The document identifies its signatories, but it cannot tell us what every community thought.",
          },
          {
            id: "no-agreement",
            text: "There was no written agreement.",
            correct: false,
            feedback:
              "A written Deed of Cession survives and can be studied as a historical source.",
          },
        ],

        sourceUrl:
          "https://www.fijijournal.com/wp-content/uploads/2023/10/The-Deed-of-Cession-of-Fiji-to-Great-Britain.pdf",
        sourceLabel: "Deed of Cession — reproduced text",
      },

      {
        id: "authority",
        title: "Evidence B — Who Held Power?",
        category: "Historical interpretation",
        content:
          "Cakobau was an influential leader, but different chiefs and communities exercised authority across Fiji. His claim to rule all the islands was contested.",

        question:
          "Why does this complicate the story of the agreement?",

        answers: [
          {
            id: "simple",
            text: "It proves Fiji had no political leaders.",
            correct: false,
            feedback:
              "Fiji had established political leaders and systems of authority.",
          },
          {
            id: "complex",
            text: "Different communities did not necessarily share one leader's views.",
            correct: true,
            feedback:
              "Exactly. Historians must consider the different political communities involved.",
          },
          {
            id: "irrelevant",
            text: "It means the agreement had no consequences.",
            correct: false,
            feedback:
              "The agreement had major consequences: Fiji became a British colony.",
          },
        ],

        sourceUrl:
          "https://www.parliament.gov.fj/newitems/A4Primarymodules.pdf",
        sourceLabel: "Parliament of Fiji — historical education resource",
      },

      {
        id: "colonial-rule",
        title: "Evidence C — What Changed?",
        category: "Colonial history",
        content:
          "After cession, Britain established colonial government. Fijian chiefs continued to hold important positions within new administrative arrangements, but ultimate sovereignty had passed to the British Crown.",

        question:
          "Which conclusion is best supported by this evidence?",

        answers: [
          {
            id: "unchanged",
            text: "Nothing changed in Fiji.",
            correct: false,
            feedback:
              "The transfer of sovereignty fundamentally changed Fiji's political position.",
          },
          {
            id: "disappeared",
            text: "All Fijian leadership immediately disappeared.",
            correct: false,
            feedback:
              "Chiefs continued to play important roles, although within colonial structures.",
          },
          {
            id: "shared",
            text: "Local leadership continued, but under British colonial authority.",
            correct: true,
            feedback:
              "Correct. Colonial government changed the relationship between local leadership and political power.",
          },
        ],

        sourceUrl:
          "https://maa.cam.ac.uk/fiji-chiefs-and-governors",
        sourceLabel:
          "University of Cambridge — Chiefs and Governors",
      },
    ],

    historicalOutcome: [
      "Fiji became a British colony on 10 October 1874. The agreement transferred sovereignty to Queen Victoria, but it did not mean that all Fijians had individually consented.",

      "Colonial authority developed through a combination of cooperation with chiefs, new government institutions and coercion. Resistance and disagreement did not disappear with the signing.",

      "Fiji remained under British colonial rule until independence on 10 October 1970 — exactly 96 years after the Deed of Cession.",
    ],
  },
  {
    id: "kanak-resistance",
    number: "02",
    title: "The Land and the Resistance",
    location: "New Caledonia",
    year: "1878",
    introduction:
      "Land is taken. Cattle destroy crops. Complaints go unanswered. In 1878, resistance erupts. Investigate what drove the uprising and how its history has been recorded.",

    background: [
      "France annexed New Caledonia in 1853. Over the following decades, settlers and colonial authorities took control of increasing areas of land. Kanak communities faced displacement from places connected to their families, ancestors and cultural traditions.",

      "The colonial government established reserves and imposed boundaries that did not always reflect Kanak systems of landholding. Some communities lost access to important agricultural areas and ancestral places.",

      "European settlers introduced large herds of cattle. Animals sometimes wandered onto Kanak land and destroyed yam and taro gardens. These were important food crops, making the damage a serious threat to livelihoods.",

      "In June 1878, a major uprising began in the central-western part of the main island. Ataï became one of its best-known leaders. Kanak communities were not politically united: some fought colonial forces, while others sided with them.",

      "The fighting was violent and caused deaths among Kanak people and European settlers. French military forces suppressed the uprising. Ataï was killed in September 1878, but resistance continued into early 1879.",
    ],

    centralQuestion:
      "Why did the uprising happen, and how can we judge different accounts of it?",

    evidence: [
      {
        id: "land",
        title: "Evidence A — The Disappearing Land",
        category: "Historical research",
        content:
          "Colonial settlement and the creation of reserves changed how land was controlled. Kanak communities were displaced, and colonial boundaries often failed to reflect established relationships between clans and their ancestral lands.",

        question:
          "Why was the loss of land more than a financial problem?",

        answers: [
          {
            id: "only-money",
            text: "Land mattered only because it could be sold.",
            correct: false,
            feedback:
              "Land also supported food production, community life, ancestry and cultural identity.",
          },
          {
            id: "identity",
            text: "Land was connected to livelihoods, ancestry and cultural identity.",
            correct: true,
            feedback:
              "Correct. Dispossession affected both material survival and cultural relationships with place.",
          },
          {
            id: "unoccupied",
            text: "The land had no existing communities or uses.",
            correct: false,
            feedback:
              "Kanak communities had long-established relationships with these lands.",
          },
        ],

        sourceUrl:
          "https://link.springer.com/chapter/10.1007/978-3-031-49140-5_12",
        sourceLabel:
          "Academic research — Kanak Cultural Heritage on Colonised and Damaged Lands",
      },

      {
        id: "cattle",
        title: "Evidence B — The Damaged Gardens",
        category: "Historical interpretation",
        content:
          "Settlers' cattle frequently entered Kanak agricultural land and damaged yam and taro crops. The destruction added to tensions over land ownership and the colonial authorities' responses to Kanak complaints.",

        question:
          "What does this evidence help explain about the uprising?",

        answers: [
          {
            id: "livelihood",
            text: "Colonial expansion was disrupting everyday life and food production.",
            correct: true,
            feedback:
              "Exactly. The conflict involved practical threats to people's food supplies as well as wider questions of authority and land.",
          },
          {
            id: "only-cattle",
            text: "The entire uprising happened because of one escaped cow.",
            correct: false,
            feedback:
              "The causes were much broader, including land dispossession, colonial policies and repeated grievances.",
          },
          {
            id: "no-impact",
            text: "The cattle had no effect on Kanak communities.",
            correct: false,
            feedback:
              "Damage to crops was a significant source of tension.",
          },
        ],

        sourceUrl:
          "https://press-files.anu.edu.au/downloads/press/p241101/html/CH01.xhtml?page=9&referer=",
        sourceLabel:
          "Australian National University — France in the South Pacific",
      },

      {
        id: "accounts",
        title: "Evidence C — Whose Account?",
        category: "Source investigation",
        content:
          "Colonial reports frequently described Kanak attacks from the viewpoint of French authorities and settlers. Later historical research places those attacks in the context of land seizures, damaged crops, forced displacement and earlier Kanak complaints. Neither type of account should be read without considering its authors, evidence and purpose.",

        question:
          "How should a historian investigate these different accounts?",

        answers: [
          {
            id: "first",
            text: "Accept the earliest written report without questioning it.",
            correct: false,
            feedback:
              "An early report can be valuable evidence, but its author may have had a limited perspective or particular interests.",
          },
          {
            id: "ignore",
            text: "Ignore all written accounts because they may be biased.",
            correct: false,
            feedback:
              "Historians critically examine sources rather than automatically accepting or rejecting them.",
          },
          {
            id: "compare",
            text: "Compare sources, their authors and the wider historical context.",
            correct: true,
            feedback:
              "Correct. Comparing different evidence helps historians understand both events and how those events were represented.",
          },
        ],

        sourceUrl:
          "https://www.unc.nc/wp-content/uploads/2021/11/Understanding-New-Caledonia-semiHD-final-14-10-21-11-h.pdf",
        sourceLabel:
          "University of New Caledonia — Understanding New Caledonia",
      },
    ],

    historicalOutcome: [
      "The uprising began in June 1878 and developed into a major conflict. Ataï became one of its most prominent leaders. He was killed in September, but the fighting continued into early 1879.",

      "French forces suppressed the uprising. Many Kanak people were killed, displaced or deported, and colonial control over land expanded further. Historical estimates of casualties vary, so a precise death toll should be treated cautiously.",

      "The uprising did not end Kanak resistance. Questions of land, political authority and self-determination continued to shape New Caledonia's history. The events of 1878 remain important to understanding later Kanak political movements.",
    ],
  },
  {
    id: "samoa-mau",
    number: "03",
    title: "Samoa for Samoans",
    location: "Samoa",
    year: "1926–1962",
    introduction:
      "A movement refuses to surrender its future. Its supporters organise, boycott colonial institutions and march through Apia. Then, on 28 December 1929, tragedy strikes. How did the struggle continue?",

    background: [
      "New Zealand occupied German Samoa in 1914 and subsequently administered Western Samoa under a League of Nations mandate. Its handling of the devastating influenza epidemic in 1918, which killed roughly one-fifth of the population, contributed to deep resentment.",

      "In 1926, public meetings in Apia brought together Samoan and European critics of colonial administration. The movement became known as O le Mau a Samoa. Its slogan was Samoa mo Samoa — Samoa for Samoans.",

      "The Mau developed a widespread campaign of non-cooperation. Supporters boycotted European businesses, refused to cooperate with some government institutions, organised petitions and raised money for the movement.",

      "Tupua Tamasese Lealofi III became a prominent leader. The administration responded with arrests, restrictions, deportations and the use of armed personnel.",

      "On 28 December 1929, Mau supporters marched through Apia to welcome two members returning from exile. Police attempted an arrest during the procession. Confrontation followed, and police opened fire. Several Samoans, including Tamasese, were killed. A New Zealand policeman also died.",

      "The movement did not disappear. Women organised demonstrations and maintained resistance when many men were arrested or forced into hiding. Political change accelerated after 1935, and Western Samoa achieved independence on 1 January 1962.",
    ],

    centralQuestion:
      "How did Samoans challenge colonial authority, and why did the Mau movement endure?",

    evidence: [
      {
        id: "mau-organising",
        title: "Evidence A — A Movement Organises",
        category: "Political history",
        content:
          "The Mau built support across most Samoan districts. Its campaign included petitions, boycotts, non-cooperation with government institutions and the creation of its own organisational networks. The movement's slogan was Samoa mo Samoa.",

        question:
          "What made the Mau more than a single protest?",

        answers: [
          {
            id: "one-march",
            text: "It organised only one demonstration.",
            correct: false,
            feedback:
              "The Mau organised sustained resistance over several years.",
          },
          {
            id: "organised",
            text: "It developed widespread organisation and different methods of resistance.",
            correct: true,
            feedback:
              "Correct. The Mau combined political organisation, economic pressure and non-cooperation.",
          },
          {
            id: "no-purpose",
            text: "It had no political aims.",
            correct: false,
            feedback:
              "The Mau challenged colonial authority and sought Samoan self-determination.",
          },
        ],
        sourceUrl:
          "https://nzhistory.govt.nz/politics/samoa/rise-of-mau",
        sourceLabel: "NZHistory — The Rise of the Mau",
      },

      {
        id: "black-saturday",
        title: "Evidence B — Black Saturday",
        category: "Historical event and map",
        content:
          "On 28 December 1929, a Mau procession in Apia was disrupted by an attempted police arrest. Violence followed and police opened fire. Tupua Tamasese Lealofi III was among the Samoans killed. A New Zealand policeman also died. Historical sources differ over the total number of Samoan deaths.",

        question:
          "What should historians do when sources report different death tolls?",

        answers: [
          {
            id: "highest",
            text: "Always choose the largest number.",
            correct: false,
            feedback:
              "A larger figure is not automatically more reliable.",
          },
          {
            id: "ignore",
            text: "Ignore the event because accounts differ.",
            correct: false,
            feedback:
              "Disagreement over details does not mean the event did not happen.",
          },
          {
            id: "compare",
            text: "Compare the sources and explain the uncertainty.",
            correct: true,
            feedback:
              "Exactly. Historians distinguish well-established events from details that remain disputed.",
          },
        ],
        sourceUrl:
          "https://nzhistory.govt.nz/media/interactive/black-saturday-map",
        sourceLabel: "NZHistory — Black Saturday historical map",
      },

      {
        id: "women-mau",
        title: "Evidence C — Women Continue the Struggle",
        category: "Historical photographs and research",
        content:
          "Following the suppression of Mau activities, many male supporters went into hiding or faced arrest. Samoan women organised public demonstrations and continued to support the movement. Their participation challenges histories that focus only on prominent male leaders.",

        question:
          "What does the women's involvement reveal?",

        answers: [
          {
            id: "ended",
            text: "The movement ended when male leaders were targeted.",
            correct: false,
            feedback:
              "Women helped sustain the movement during repression.",
          },
          {
            id: "wider",
            text: "Resistance involved a wider community than its best-known leaders.",
            correct: true,
            feedback:
              "Correct. Women's organisation was an important part of the Mau's continuing resistance.",
          },
          {
            id: "unrelated",
            text: "Women played no part in political resistance.",
            correct: false,
            feedback:
              "Historical records show women organising and demonstrating.",
          },
        ],
        sourceUrl:
          "https://nzhistory.govt.nz/politics/samoa/black-saturday",
        sourceLabel: "NZHistory — Black Saturday and its aftermath",
      },

      {
        id: "independence",
        title: "Evidence D — Independence and Memory",
        category: "Independence history",
        content:
          "New Zealand's Labour government recognised the Mau as a legitimate political organisation after coming to power in 1935. Western Samoa became independent on 1 January 1962. In 2002, New Zealand's Prime Minister formally apologised for injustices committed during colonial administration.",

        question:
          "What does this sequence tell us about historical change?",

        answers: [
          {
            id: "immediate",
            text: "Independence happened immediately after Black Saturday.",
            correct: false,
            feedback:
              "More than three decades passed between Black Saturday and independence.",
          },
          {
            id: "unrelated",
            text: "Colonial actions had no lasting consequences.",
            correct: false,
            feedback:
              "The later apology demonstrates the lasting significance of colonial history.",
          },
          {
            id: "long",
            text: "Political change took decades, and historical injustices continued to matter.",
            correct: true,
            feedback:
              "Correct. Independence was a long process, and the legacy of colonial rule extended beyond 1962.",
          },
        ],
        sourceUrl:
          "https://natlib.govt.nz/teaching-and-learning-resources/te-kupenga-stories-of-aotearoa-nz/samoa-mo-samoa",
        sourceLabel: "National Library — Samoa mo Samoa",
      },
    ],

    historicalOutcome: [
      "The Mau became one of the most significant organised challenges to New Zealand's administration of Samoa. Its supporters used political organisation, boycotts, petitions and non-cooperation to demand greater self-determination.",

      "Black Saturday on 28 December 1929 was a tragedy. Police gunfire killed Samoan demonstrators, including Tupua Tamasese Lealofi III. Historical accounts differ on the precise death toll, and a New Zealand policeman also died during the confrontation.",

      "Repression did not extinguish the movement. Samoan women helped sustain resistance, and political recognition of the Mau followed the change of government in New Zealand in 1935.",

      "Western Samoa became independent on 1 January 1962, the first Pacific island nation to gain independence in the twentieth-century decolonisation period. New Zealand formally apologised in 2002 for aspects of its colonial administration, including Black Saturday.",
    ],
  },
];
