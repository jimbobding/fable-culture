"use client";

import TimelineSubmissionForm from "@/components/shared/TimelineSubmissionForm";
import { useEffect, useState } from "react";
import { db } from "@/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export type TimelineItem = {
  periodKey?: string;
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
  country?: string;
};

export default function Timeline({ items, theme, region, country }: Props) {
  const dotBorder = theme.dotBorder ?? "border-white/80";

  const [activeFormIndex, setActiveFormIndex] = useState<number | null>(null);
  const [approvedIdeas, setApprovedIdeas] = useState<any[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    async function fetchApproved() {
      const filters = [
        where("status", "==", "approved"),
        where("region", "==", region),
      ];

      if (country) {
        filters.push(where("country", "==", country));
      }

      const q = query(collection(db, "timelineSubmissions"), ...filters);

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
    <div className="space-y-8">
      {/* COLLAPSE / EXPAND BUTTON */}
      <div className="text-center">
        <button
          type="button"
          onClick={() => setIsExpanded((current) => !current)}
          className="
            inline-flex items-center gap-3
            rounded-full
            border border-white/60
            bg-white/80
            px-6 py-3
            font-semibold
            shadow-md
            backdrop-blur
            transition
            hover:-translate-y-0.5
            hover:shadow-lg
          "
          style={{
            color: theme.yearColor ?? "#0ea5e9",
          }}
        >
          {isExpanded ? "Hide timeline" : "Explore full timeline"}

          <span
            className={`transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          >
            ↓
          </span>
        </button>
      </div>

      {/* TIMELINE */}
      {isExpanded && (
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
              background:
                theme.lineColor ??
                "linear-gradient(to bottom, #22d3ee, #0ea5e9, #f97316)",
            }}
          />

          <ul className="space-y-14 md:space-y-20">
            {items.map((item, index) => {
              const isLeft = index % 2 === 0;

              const currentPeriodKey =
                item.periodKey ?? `timeline-item-${index}`;

              return (
                <li key={index} className="relative mb-6">
                  {/* DOT */}
                  <div
                    className={`
                      absolute w-5 h-5 rounded-full z-10
                      left-4 md:left-1/2
                      -translate-x-1/2
                      top-6
                      border-4 shadow-lg
                      ${dotBorder}
                    `}
                    style={{
                      backgroundColor: "#ffffff",
                      borderColor: theme.dotColor ?? "#0ea5e9",
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
                        rounded-2xl
                        border border-white/60
                        shadow-lg
                        backdrop-blur
                        p-5 sm:p-6
                        max-w-none md:max-w-md
                        bg-white/80
                        hover:-translate-y-1
                        transition-all duration-300
                      `}
                    >
                      {/* YEAR */}
                      <p
                        className={`font-bold ${theme.year ?? ""}`}
                        style={{
                          color: theme.yearColor ?? undefined,
                        }}
                      >
                        {item.year}
                      </p>

                      {/* CONTENT */}
                      <div className="mt-2 flex items-start gap-3">
                        {item.emoji && (
                          <div className="text-3xl leading-none">
                            {item.emoji}
                          </div>
                        )}

                        <div>
                          <h3 className="text-lg font-semibold">
                            {item.title}
                          </h3>

                          <p
                            className={`
                              mt-1
                              text-sm sm:text-base
                              leading-relaxed
                              ${theme.text ?? ""}
                            `}
                            style={{
                              color: theme.textColor ?? undefined,
                            }}
                          >
                            {item.text}
                          </p>
                        </div>
                      </div>

                      {/* STUDENT IDEAS */}
                      {(() => {
                        const ideasForThisItem = approvedIdeas.filter(
                          (idea) => idea.periodKey === currentPeriodKey,
                        );

                        if (ideasForThisItem.length === 0) {
                          return null;
                        }

                        return (
                          <div className="mt-4 space-y-2">
                            <p className="text-sm font-semibold text-stone-700">
                              Student Ideas:
                            </p>

                            {ideasForThisItem.map((idea) => (
                              <div
                                key={idea.id}
                                className="
                                  rounded-lg
                                  border border-amber-200
                                  bg-amber-50
                                  p-3
                                  text-sm
                                "
                              >
                                <p className="font-semibold">
                                  {idea.title} —{" "}
                                  <span className="text-xs text-stone-500">
                                    {idea.studentName || "Anonymous"}
                                  </span>
                                </p>

                                <p>{idea.explanation}</p>

                                {idea.submittedAt?.seconds && (
                                  <p className="mt-1 text-xs text-stone-400">
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
                          {item.questions.map((question, questionIndex) => (
                            <li key={questionIndex}>❓ {question}</li>
                          ))}
                        </ul>
                      )}

                      {/* GAP PROMPT */}
                      {item.isGap && item.prompt && (
                        <p className="mt-2 text-sm italic opacity-80">
                          🔍 {item.prompt}
                        </p>
                      )}

                      {/* STUDENT SUBMISSION FORM */}
                      <div className="mt-4">
                        <button
                          onClick={() =>
                            setActiveFormIndex(
                              activeFormIndex === index ? null : index,
                            )
                          }
                          className="
                            text-sm
                            font-semibold
                            text-amber-700
                            hover:underline
                          "
                        >
                          {activeFormIndex === index
                            ? "Cancel"
                            : "Add your idea"}
                        </button>

                        {activeFormIndex === index && (
                          <TimelineSubmissionForm
                            region={region}
                            country={country ?? ""}
                            periodKey={currentPeriodKey}
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
      )}
    </div>
  );
}
