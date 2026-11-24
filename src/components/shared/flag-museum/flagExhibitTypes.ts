export type FlagAnnotation = {
  id: string;
  title: string;
  explanation: string;

  // Position of the feature on the flag
  x: number;
  y: number;

  // Position of the label around the exhibit
  labelX?: number;
  labelY?: number;

  // Future option for pupil-led investigations
  mode?: "explained" | "investigate";
};

export type FlagExhibitContent = {
  flagId: string;
  introduction: string;
  annotations: FlagAnnotation[];
  researchQuestions: string[];
};
