export type LookOption = {
  id: string;
  label: string;
  emoji: string;
  description: string;
  asset?: string;
  defaultPosition?: {
    x: number;
    y: number;
  };
  layer?: number;
};
export type LookBackground = {
  id: string;
  label: string;
  background: string;
};
