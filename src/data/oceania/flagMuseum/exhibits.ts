import type { FlagExhibitContent } from "@/components/shared/flag-museum/flagExhibitTypes";

export const oceaniaFlagExhibits: Record<string, FlagExhibitContent> = {
  fiji: {
    flagId: "fiji",

    introduction:
      "Fiji's flag was adopted in 1970, when the country became independent. Its design includes a light-blue background, the Union Jack and a shield containing several symbols.",

    annotations: [
      {
        id: "blue-background",
        title: "The light-blue background",
        explanation:
          "The light-blue colour represents the Pacific Ocean surrounding Fiji.",
        x: 76,
        y: 22,
        labelX: 85,
        labelY: 18,
        mode: "explained",
      },
      {
        id: "union-jack",
        title: "The Union Jack",
        explanation:
          "The Union Jack reflects Fiji's historical connection with Britain. Fiji became independent from British colonial rule in 1970.",
        x: 24,
        y: 25,
        labelX: 15,
        labelY: 18,
        mode: "explained",
      },
      {
        id: "shield",
        title: "The shield",
        explanation:
          "The shield comes from Fiji's coat of arms. It includes a lion, a cross of St George and images representing agricultural products and a dove.",
        x: 76,
        y: 57,
        labelX: 82,
        labelY: 85,
        mode: "explained",
      },
    ],

    researchQuestions: [
      "Why do you think Fiji kept the Union Jack on its flag after independence?",
      "What animals, plants or other objects can you identify on the shield?",
      "If you designed a new flag for Fiji, which symbols would you include and why?",
    ],
  },
};

export function getOceaniaFlagExhibit(
  flagId: string,
): FlagExhibitContent | undefined {
  return oceaniaFlagExhibits[flagId];
}
