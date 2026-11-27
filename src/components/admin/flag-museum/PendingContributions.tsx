"use client";

import { useEffect, useState } from "react";
import ContributionActions from "./ContributionActions";

import {
  subscribeToPendingContributions,
  type FlagContribution,
} from "@/lib/flag-museum/moderationRepository";

export default function PendingContributions() {
  const [contributions, setContributions] = useState<FlagContribution[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    return subscribeToPendingContributions(
      (items) => {
        setContributions(items);
        setLoading(false);
        setError("");
      },
      (error) => {
        console.error("Unable to load contributions:", error);
        setContributions([]);
        setError(
          "Unable to load contributions. Check your teacher permissions.",
        );
        setLoading(false);
      },
    );
  }, []);

  if (loading) {
    return <p>Loading pupil research...</p>;
  }

  if (error) {
    return (
      <p role="alert" className="rounded-xl bg-red-50 p-4 text-red-700">
        {error}
      </p>
    );
  }

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-900">
        Pending contributions ({contributions.length})
      </h2>

      {contributions.length === 0 ? (
        <div className="mt-5 rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-stone-600">
            All caught up! No research is waiting for approval.
          </p>
        </div>
      ) : (
        <div className="mt-6 grid gap-5">
          {contributions.map((contribution) => (
            <article
              key={contribution.id}
              className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">
                {contribution.regionId} / {contribution.flagId}
              </p>

              <h3 className="mt-2 text-xl font-bold capitalize text-stone-900">
                {contribution.annotationId.replace(/-/g, " ")}
              </h3>

              <p className="mt-2 text-sm text-stone-500">
                Submitted by: {contribution.initials}
              </p>

              <div className="mt-5 rounded-xl bg-stone-50 p-4">
                <h4 className="font-semibold text-stone-900">
                  Pupil explanation
                </h4>

                <p className="mt-2 whitespace-pre-wrap text-stone-700">
                  {contribution.explanation}
                </p>
              </div>

              <div className="mt-4 rounded-xl bg-amber-50 p-4">
                <h4 className="font-semibold text-stone-900">
                  Research sources
                </h4>

                <p className="mt-2 whitespace-pre-wrap break-words text-stone-700">
                  {contribution.sources}
                </p>
              </div>

              {contribution.submittedAt && (
                <p className="mt-4 text-xs text-stone-500">
                  {contribution.submittedAt.toDate().toLocaleString("en-GB")}
                </p>
              )}
              <ContributionActions contribution={contribution} />
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
