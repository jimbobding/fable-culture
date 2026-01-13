export type BritishValueKey =
  | "democracy"
  | "rule-of-law"
  | "individual-liberty"
  | "mutual-respect"
  | "tolerance";

export const valuesContent: Record<
  BritishValueKey,
  { title: string; icon: string; description: string }
> = {
  democracy: {
    title: "Democracy",
    icon: "🗳️",
    description: "Having a say, voting, and making decisions together.",
  },
  "rule-of-law": {
    title: "Rule of Law",
    icon: "⚖️",
    description: "Rules and laws help keep everyone safe and treated fairly.",
  },
  "individual-liberty": {
    title: "Individual Liberty",
    icon: "🕊️",
    description: "Being free to make choices and express yourself safely.",
  },
  "mutual-respect": {
    title: "Mutual Respect",
    icon: "🤝",
    description: "Listening to others and treating people kindly.",
  },
  tolerance: {
    title: "Tolerance",
    icon: "🌍",
    description: "Respecting people with different faiths and beliefs.",
  },
};
