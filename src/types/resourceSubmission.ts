export type ResourceSubmission = {
  id?: string;

  title: string;

  url: string;

  description: string;

  topic: string;

  country: string;

  region: string;

  submittedBy?: string;

  status: "pending" | "approved" | "rejected";

  createdAt?: any;
};
