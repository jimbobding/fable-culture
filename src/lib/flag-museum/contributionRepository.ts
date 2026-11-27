import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { db } from "@/firebaseConfig";

export type FlagContributionInput = {
  regionId: string;
  flagId: string;
  annotationId: string;
  initials: string;
  explanation: string;
  sources: string;
};

export async function submitFlagContribution(
  contribution: FlagContributionInput,
): Promise<string> {
  const document = await addDoc(collection(db, "flagContributions"), {
    regionId: contribution.regionId,
    flagId: contribution.flagId,
    annotationId: contribution.annotationId,
    initials: contribution.initials.trim().toUpperCase(),
    explanation: contribution.explanation.trim(),
    sources: contribution.sources.trim(),
    status: "pending",
    submittedAt: serverTimestamp(),
  });

  return document.id;
}
