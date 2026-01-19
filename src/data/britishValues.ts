export type BritishValueKey =
  | "democracy"
  | "rule-of-law"
  | "individual-liberty"
  | "mutual-respect"
  | "tolerance-of-faiths";

export const britishValues: Record<
  BritishValueKey,
  {
    title: string;
    intro: string;
    description: string;
    theme: {
      primary: string;
      accent: string;
    };
    question: string | string[];
  }
> = {
  democracy: {
    title: "Democracy",
    intro: "Having a voice and taking part in decisions.",
    description:
      "Democracy means people have a say in how decisions are made. In the UK, this often happens through voting and discussion.",
    theme: {
      primary: "#1D4ED8", // blue
      accent: "#93C5FD",
    },
    question: ["What would you do if you were prime minister for the day?"],
  },

  "rule-of-law": {
    title: "Rule of Law",
    intro: "Understanding rules and why they matter.",
    description:
      "The rule of law means that rules apply to everyone and help keep people safe and treated fairly.",
    theme: {
      primary: "#065F46", // green
      accent: "#6EE7B7",
    },
    question: ["Why do we need rules?"],
  },

  "individual-liberty": {
    title: "Individual Liberty",
    intro: "Freedom to make choices safely.",
    description:
      "Individual liberty means being free to make choices while respecting others and staying safe.",
    theme: {
      primary: "#7C2D12", // warm orange
      accent: "#FDBA74",
    },
    question: ["What does freedom mean to you?"],
  },

  "mutual-respect": {
    title: "Mutual Respect & Tolerance",
    intro: "Respecting others and their differences.",
    description:
      "This value means treating others kindly and accepting different cultures, beliefs, and backgrounds.",
    theme: {
      primary: "#6B21A8", // purple
      accent: "#D8B4FE",
    },
    question: ["How can we show respect to others?"],
  },
  "tolerance-of-faiths": {
    title: "Tolerance of Different Faiths and Beliefs",
    intro: "Understanding and respecting different beliefs.",
    description:
      "This value is about understanding that people have different faiths and beliefs, and that these should be respected even if they differ from our own.",
    theme: {
      primary: "#92400E", // amber
      accent: "#FCD34D",
    },
    question: ["What can we learn from different beliefs?"],
  },
};
