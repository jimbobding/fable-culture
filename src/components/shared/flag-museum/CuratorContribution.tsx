"use client";

import { useState } from "react";
import { submitFlagContribution } from "@/lib/flag-museum/contributionRepository";

export type CuratorAnswer = {
  explanation: string;
  sources: string;
};

type CuratorContributionProps = {
  regionId: string;
  flagId: string;
  annotationId: string;
  annotationTitle: string;
  answer: CuratorAnswer;
  onChange: (answer: CuratorAnswer) => void;
};

export default function CuratorContribution({
  regionId,
  flagId,
  annotationId,
  annotationTitle,
  answer,
  onChange,
}: CuratorContributionProps) {
  const [initials, setInitials] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const completed =
    answer.explanation.trim().length > 0 &&
    answer.sources.trim().length > 0 &&
    /^[A-Z]{2,4}$/.test(initials);

  async function handleSubmit() {
    if (!completed || submitting || submitted) return;

    setSubmitting(true);
    setError("");

    try {
      await submitFlagContribution({
        regionId,
        flagId,
        annotationId,
        initials,
        explanation: answer.explanation,
        sources: answer.sources,
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Flag contribution failed:", error);

      setError(
        "Your research could not be submitted. Please try again or ask your tutor for help.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="mt-5 rounded-xl border-2 border-[#355b50] bg-[#e4eddf] p-6">
        <h4 className="font-serif text-2xl font-bold">✓ Research submitted!</h4>

        <p className="mt-3 leading-relaxed">
          Fantastic work, Museum Curator! Your research has been sent to your
          tutor for review.
        </p>

        <p className="mt-3 leading-relaxed">
          Once approved, your explanation could become part of the Flag Museum
          for other visitors to explore.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-5 space-y-6">
      {/* CURATOR INSTRUCTIONS */}
      <div className="rounded-xl border border-[#b89a6e] bg-[#f4e8d1] p-5">
        <p className="text-xs font-black uppercase tracking-widest text-[#866542]">
          Museum Curator · Research required
        </p>

        <h4 className="mt-3 font-serif text-2xl font-bold">
          Help complete this exhibit
        </h4>

        <p className="mt-3 leading-relaxed">
          The museum is missing information about{" "}
          <strong>{annotationTitle.toLowerCase()}</strong>. Use books or trusted
          websites to research what this feature represents.
        </p>

        <p className="mt-3 leading-relaxed">
          Write an explanation in your own words that will help other museum
          visitors understand this part of the flag.
        </p>
      </div>

      {/* PUPIL INITIALS */}
      <label className="block">
        <span className="text-lg font-bold">Your initials</span>

        <span className="mt-2 block text-sm">
          Use your initials only, not your full name.
        </span>

        <input
          type="text"
          value={initials}
          maxLength={4}
          disabled={submitting}
          onChange={(event) =>
            setInitials(event.target.value.toUpperCase().replace(/[^A-Z]/g, ""))
          }
          placeholder="e.g. AB"
          className="mt-3 w-32 rounded-xl border-2 border-[#b89a6e] bg-[#fffdf7] p-3 text-lg font-bold uppercase outline-none focus:border-[#355b50]"
        />
      </label>

      {/* PUPIL EXPLANATION */}
      <label className="block">
        <span className="text-lg font-bold">My museum explanation</span>

        <textarea
          value={answer.explanation}
          maxLength={2000}
          disabled={submitting}
          onChange={(event) =>
            onChange({
              ...answer,
              explanation: event.target.value,
            })
          }
          rows={5}
          placeholder="Write your explanation here..."
          className="mt-3 w-full resize-y rounded-xl border-2 border-[#b89a6e] bg-[#fffdf7] p-4 text-lg leading-relaxed outline-none focus:border-[#355b50] focus:ring-2 focus:ring-[#355b50]/20"
        />
      </label>

      {/* RESEARCH SOURCES */}
      <label className="block">
        <span className="text-lg font-bold">
          Where did I find my information?
        </span>

        <span className="mt-2 block text-sm leading-relaxed">
          Record the website addresses or book titles you used during your
          research.
        </span>

        <textarea
          value={answer.sources}
          maxLength={2000}
          disabled={submitting}
          onChange={(event) =>
            onChange({
              ...answer,
              sources: event.target.value,
            })
          }
          rows={3}
          placeholder="My research sources..."
          className="mt-3 w-full resize-y rounded-xl border-2 border-[#b89a6e] bg-[#fffdf7] p-4 leading-relaxed outline-none focus:border-[#355b50] focus:ring-2 focus:ring-[#355b50]/20"
        />
      </label>

      {/* CONTRIBUTION STATUS */}
      <div
        className={`rounded-xl border p-4 ${
          completed
            ? "border-[#355b50] bg-[#e4eddf]"
            : "border-[#b89a6e] bg-[#f4e8d1]"
        }`}
      >
        <p className="font-bold">
          {completed
            ? "✓ Your research is ready to submit!"
            : "Your research is in progress"}
        </p>

        <p className="mt-2 text-sm leading-relaxed">
          {completed
            ? "Send your research to your tutor for review."
            : "Enter your initials, explanation and research sources."}
        </p>
      </div>

      {error && (
        <p
          role="alert"
          className="rounded-xl border border-red-300 bg-red-50 p-4 text-red-800"
        >
          {error}
        </p>
      )}

      {/* SUBMIT CONTRIBUTION */}
      <button
        type="button"
        onClick={handleSubmit}
        disabled={!completed || submitting}
        className="w-full rounded-xl bg-[#355b50] px-6 py-4 text-lg font-black text-white transition hover:bg-[#203d3b] disabled:cursor-not-allowed disabled:opacity-40"
      >
        {submitting
          ? "Submitting your research..."
          : "Submit research to my tutor"}
      </button>
    </div>
  );
}
