"use client";

import TimelineSubmissionForm from "@/components/shared/TimelineSubmissionForm";
import { useEffect, useState } from "react";
import { db } from "@/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export type TimelineItem = {
  periodKey: string;
  year: string;
  title: string;
  text: string;
  era?: "Ancient" | "Medieval" | "Early Modern" | "Modern" | "Contemporary";
  isGap?: boolean;
  prompt?: string;
  emoji?: string;
  questions?: string[];
};

export type TimelineTheme = {
  lineColor?: string;
  yearColor?: string;
  textColor?: string;
  cardBg?: string;
  dotColor?: string;

  line?: string;
  year?: string;
  text?: string;
  dotBorder?: string;
};

type Props = {
  items: TimelineItem[];
  theme: TimelineTheme;
  region: string;
  country: string;
};

export default function Timeline({ items, theme, region, country }: Props) {
  const dotBorder = theme.dotBorder ?? "border-white/80";
  const [activeFormIndex, setActiveFormIndex] = useState<number | null>(null);
  const [approvedIdeas, setApprovedIdeas] = useState<any[]>([]);

  useEffect(() => {
    async function fetchApproved() {
      const q = query(
        collection(db, "timelineSubmissions"),
        where("status", "==", "approved"),
        where("region", "==", region),
        where("country", "==", country),
      );

      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setApprovedIdeas(data);
    }

    fetchApproved();
  }, [region, country]);

  return (
    <div className="relative">
      {/* Vertical line */}
      <div
        className={`
          absolute inset-y-0 w-1
          left-4 md:left-1/2
          md:-translate-x-1/2
          ${theme.line ?? ""}
        `}
        style={{
          backgroundColor: theme.lineColor ?? undefined,
        }}
      />

      <ul className="space-y-10 md:space-y-12">
        {items.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <li key={index} className="relative">
              {/* DOT */}
              <div
                className={`
                  absolute w-4 h-4 rounded-full z-10
                  left-4 md:left-1/2
                  -translate-x-1/2
                  top-6
                  border-4
                  ${dotBorder}
                `}
                style={{
                  backgroundColor: theme.dotColor ?? undefined,
                }}
              />

              {/* CARD WRAPPER */}
              <div
                className={`
                  pl-10 md:pl-0
                  ${
                    isLeft
                      ? "md:pr-8 md:w-1/2 md:flex md:justify-end"
                      : "md:pl-8 md:w-1/2 md:ml-auto"
                  }
                `}
              >
                {/* CARD */}
                <div
                  className={`
                    rounded-2xl border shadow-sm
                    p-5 sm:p-6
                    max-w-none md:max-w-md
                    border-black/10
                    ${theme.cardBg ?? ""}
                  `}
                  style={{
                    backgroundColor:
                      theme.cardBg && !theme.cardBg.startsWith("bg-")
                        ? theme.cardBg
                        : undefined,
                  }}
                >
                  {/* Year */}
                  <p
                    className={`font-bold ${theme.year ?? ""}`}
                    style={{ color: theme.yearColor ?? undefined }}
                  >
                    {item.year}
                  </p>

                  {/* Title */}
                  <h3 className="font-semibold mt-1">
                    {item.emoji ? `${item.emoji} ` : ""}
                    {item.title}
                  </h3>

                  {/* Text */}
                  <p
                    className={`text-sm sm:text-base leading-relaxed mt-1 ${theme.text ?? ""}`}
                    style={{ color: theme.textColor ?? undefined }}
                  >
                    {item.text}
                  </p>

                  {/* STUDENT IDEAS */}
                  {(() => {
                    const ideasForThisItem = approvedIdeas.filter(
                      (idea) => idea.periodKey === item.periodKey,
                    );

                    if (ideasForThisItem.length === 0) return null;

                    return (
                      <div className="mt-4 space-y-2">
                        <p className="text-sm font-semibold text-stone-700">
                          Student Ideas:
                        </p>

                        {ideasForThisItem.map((idea) => (
                          <div
                            key={idea.id}
                            className="rounded-lg bg-amber-50 border border-amber-200 p-3 text-sm"
                          >
                            {/* Title + Name */}
                            <p className="font-semibold">
                              {idea.title} —{" "}
                              <span className="text-xs text-stone-500">
                                {idea.studentName || "Anonymous"}
                              </span>
                            </p>

                            {/* Explanation */}
                            <p>{idea.explanation}</p>

                            {/* Timestamp */}
                            {idea.submittedAt && idea.submittedAt.seconds && (
                              <p className="text-xs text-stone-400 mt-1">
                                {new Date(
                                  idea.submittedAt.seconds * 1000,
                                ).toLocaleString("en-GB", {
                                  day: "numeric",
                                  month: "short",
                                  year: "numeric",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    );
                  })()}

                  {/* QUESTIONS */}
                  {item.questions && (
                    <ul className="mt-2 space-y-1 text-sm italic opacity-80">
                      {item.questions.map((q, i) => (
                        <li key={i}>❓ {q}</li>
                      ))}
                    </ul>
                  )}

                  {/* GAP PROMPT */}
                  {item.isGap && item.prompt && (
                    <p className="mt-2 text-sm italic opacity-80">
                      🔍 {item.prompt}
                    </p>
                  )}

                  {/* FORM TO ADD IDEA */}
                  <div className="mt-4">
                    <button
                      onClick={() =>
                        setActiveFormIndex(
                          activeFormIndex === index ? null : index,
                        )
                      }
                      className="text-sm font-semibold text-amber-700 hover:underline"
                    >
                      {activeFormIndex === index ? "Cancel" : "Add your idea"}
                    </button>

                    {activeFormIndex === index && (
                      <TimelineSubmissionForm
                        region={region}
                        country={country}
                        periodKey={item.periodKey}
                        onSuccess={() => setActiveFormIndex(null)}
                      />
                    )}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
