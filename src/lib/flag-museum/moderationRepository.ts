import {
  collection,
  doc,
  onSnapshot,
  query,
  where,
  runTransaction,
  serverTimestamp,
  type Timestamp,
} from "firebase/firestore";

import { db } from "@/firebaseConfig";

export type FlagContribution = {
  id: string;
  regionId: string;
  flagId: string;
  annotationId: string;
  initials: string;
  explanation: string;
  sources: string;
  status: "pending" | "approved" | "rejected";
  submittedAt?: Timestamp;
};

// RETRIEVE PENDING CONTRIBUTIONS

export function subscribeToPendingContributions(
  onUpdate: (contributions: FlagContribution[]) => void,
  onError: (error: Error) => void,
) {
  const pendingQuery = query(
    collection(db, "flagContributions"),
    where("status", "==", "pending"),
  );

  return onSnapshot(
    pendingQuery,
    (snapshot) => {
      const contributions = snapshot.docs.map(
        (document) =>
          ({
            ...document.data(),
            id: document.id,
          }) as FlagContribution,
      );

      onUpdate(contributions);
    },
    onError,
  );
}

// APPROVE AND PUBLISH CONTRIBUTION

export async function approveFlagContribution(
  contributionId: string,
  editedExplanation: string,
  publishInitials: boolean = false,
  editedSources: string = "",
): Promise<void> {
  const explanation = editedExplanation.trim();
  const reviewedSources = editedSources.trim();

  if (reviewedSources.length > 2000) {
    throw new Error("Research sources are too long.");
  }

  if (!explanation || explanation.length > 2000) {
    throw new Error("Invalid explanation.");
  }

  const contributionRef = doc(db, "flagContributions", contributionId);

  await runTransaction(db, async (transaction) => {
    const snapshot = await transaction.get(contributionRef);

    if (!snapshot.exists()) {
      throw new Error("Contribution not found.");
    }

    const contribution = snapshot.data() as FlagContribution;
    const sources = reviewedSources;

    if (!sources || sources.length > 2000) {
      throw new Error("Valid research sources are required.");
    }

    if (publishInitials && !/^[A-Z]{2,4}$/.test(contribution.initials || "")) {
      throw new Error("Pupil initials must contain 2–4 uppercase letters.");
    }


    if (contribution.status !== "pending") {
      throw new Error("Contribution has already been reviewed.");
    }

    const identifiers = [
      contribution.regionId,
      contribution.flagId,
      contribution.annotationId,
    ];

    if (
      identifiers.some(
        (value) => typeof value !== "string" || !/^[a-z0-9-]+$/.test(value),
      )
    ) {
      throw new Error("Invalid exhibit identifiers.");
    }

    const explanationId = identifiers.join("__");

    const explanationRef = doc(db, "flagExplanations", explanationId);

    const existing = await transaction.get(explanationRef);

    if (existing.exists()) {
      throw new Error("This annotation already has a published explanation.");
    }

    transaction.set(explanationRef, {
      regionId: contribution.regionId,
      flagId: contribution.flagId,
      annotationId: contribution.annotationId,
      explanation,
      sources,
      initials: publishInitials ? contribution.initials : "",
      publishedAt: serverTimestamp(),
    });

    transaction.update(contributionRef, {
      explanation,
      reviewedSources: sources,
      status: "approved",
      reviewedAt: serverTimestamp(),
    });
  });
}

// REJECT CONTRIBUTION

export async function rejectFlagContribution(
  contributionId: string,
): Promise<void> {
  const contributionRef = doc(db, "flagContributions", contributionId);

  await runTransaction(db, async (transaction) => {
    const snapshot = await transaction.get(contributionRef);

    if (!snapshot.exists() || snapshot.data().status !== "pending") {
      throw new Error("Contribution is no longer pending.");
    }

    transaction.update(contributionRef, {
      status: "rejected",
      reviewedAt: serverTimestamp(),
    });
  });
}
