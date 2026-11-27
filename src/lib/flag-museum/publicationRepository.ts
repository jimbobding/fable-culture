import { collection, onSnapshot, query, where } from "firebase/firestore";

import { db } from "@/firebaseConfig";

export type PublishedFlagExplanation = {
  regionId: string;
  flagId: string;
  annotationId: string;
  explanation: string;
  initials: string;
  sources?: string;
};

export function subscribeToPublishedExplanations(
  regionId: string,
  flagId: string,
  onUpdate: (explanations: PublishedFlagExplanation[]) => void,
  onError: (error: Error) => void,
) {
  const publishedQuery = query(
    collection(db, "flagExplanations"),
    where("regionId", "==", regionId),
    where("flagId", "==", flagId),
  );

  return onSnapshot(
    publishedQuery,
    (snapshot) => {
      const explanations = snapshot.docs.map(
        (document) => document.data() as PublishedFlagExplanation,
      );

      onUpdate(explanations);
    },
    onError,
  );
}
