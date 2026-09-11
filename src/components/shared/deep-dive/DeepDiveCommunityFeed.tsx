"use client";

import { useEffect, useMemo, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/firebaseConfig";
export type DeepDiveCommunitySubmission = {
  id: string;
  creatorName: string;
  answer: string;
  imageUrl: string;
  region: string;
  deepDive: string;
  submissionType: string;
  submissionLabel: string;
  status: string;
};

type Props = {
  region: string;
  deepDive: string;
  children: (props: {
    submissions: DeepDiveCommunitySubmission[];
    loading: boolean;
  }) => React.ReactNode;
};

export default function DeepDiveCommunityFeed({
  region,
  deepDive,
  children,
}: Props) {
  const [submissions, setSubmissions] = useState<DeepDiveCommunitySubmission[]>(
    [],
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "deepDiveSubmissions"),
      (snapshot) => {
        setSubmissions(
          snapshot.docs.map((document) => {
            const data = document.data();

            return {
              id: document.id,
              creatorName: data.creatorName ?? "",
              answer: data.answer ?? "",
              imageUrl: data.imageUrl ?? "",
              region: data.region ?? "",
              deepDive: data.deepDive ?? "",
              submissionType: data.submissionType ?? "",
              submissionLabel: data.submissionLabel ?? "",
              status: data.status ?? "pending",
            };
          }),
        );

        setLoading(false);
      },
      (error) => {
        console.error("Could not load Deep Dive community submissions:", error);
        setLoading(false);
      },
    );

    return () => unsubscribe();
  }, []);

  const approved = useMemo(
    () =>
      submissions.filter(
        (submission) =>
          submission.status === "approved" &&
          submission.region === region &&
          submission.deepDive === deepDive,
      ),
    [submissions, region, deepDive],
  );

  return <>{children({ submissions: approved, loading })}</>;
}
