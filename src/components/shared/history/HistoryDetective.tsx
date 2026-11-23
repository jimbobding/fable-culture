"use client";

import { useState } from "react";
import type { HistoryDetectiveConfig } from "@/data/history/types";

type Props = {
  config: HistoryDetectiveConfig;
  onComplete: () => void;
};

export default function HistoryDetective({ config, onComplete }: Props) {
  const { investigations } = config;
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState<number | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [finished, setFinished] = useState(false);

  const investigation = investigations[step];
  const correct = answer === investigation.correct;

  function continueInvestigation() {
    if (!correct) return;

    if (step === investigations.length - 1) {
      setFinished(true);
      return;
    }

    setStep((current) => current + 1);
    setAnswer(null);
    setShowHint(false);
  }

  return (
    <section
      aria-label={config.title}
      className="mt-12 overflow-hidden rounded-[2rem] border-4 border-[#65846d] bg-[#f5f0df] text-[#263d32] shadow-xl"
    >
      <header className="bg-[#285a49] px-6 py-8 text-white sm:px-10">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f4d38b]">
          Interactive History Investigation
        </p>
        <h3 className="mt-3 text-3xl font-black sm:text-4xl">{config.title}</h3>
        <p className="mt-3 text-white/85">{config.introduction}</p>
      </header>

      {finished ? (
        <div className="px-6 py-12 text-center sm:px-10">
          <div className="text-6xl" aria-hidden="true">
            🔎
          </div>
          <h4 className="mt-5 text-3xl font-black">Investigation Complete!</h4>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed">
            {config.completionMessage}
          </p>
          <button
            type="button"
            onClick={onComplete}
            className="mt-8 rounded-full bg-[#285a49] px-8 py-4 font-bold text-white hover:bg-[#39765f]"
          >
            {config.completionButton}
          </button>
        </div>
      ) : (
        <div className="px-6 py-8 sm:px-10">
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm font-black uppercase">
              Investigation {step + 1} of {investigations.length}
            </span>
            <span className="font-bold">{investigation.location}</span>
          </div>

          <div className="mt-5 flex gap-2" aria-hidden="true">
            {investigations.map((item, index) => (
              <div
                key={item.id}
                className={`h-2 flex-1 rounded-full ${
                  index <= step ? "bg-[#39765f]" : "bg-[#d2c9ad]"
                }`}
              />
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-[#e2e9d8] p-6">
            {investigation.image ? (
              <div className="relative mb-6 overflow-hidden rounded-2xl bg-white shadow-md">
                <img
                  src={investigation.image}
                  alt={investigation.imageAlt || investigation.title}
                  className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-80"
                />

                <div className="absolute bottom-0 left-0 rounded-tr-xl bg-[#285a49] px-4 py-2 text-sm font-bold text-white">
                  🔎 Evidence {step + 1}
                </div>
              </div>
            ) : (
              <div className="text-5xl" aria-hidden="true">
                {investigation.icon}
              </div>
            )}
            <h4 className="mt-4 text-2xl font-black">{investigation.title}</h4>
            <p className="mt-4 leading-relaxed">{investigation.evidence}</p>
          </div>

          <h4 className="mt-8 text-xl font-black">{investigation.question}</h4>

          <div className="mt-5 grid gap-3">
            {investigation.options.map((option, index) => (
              <button
                key={option}
                type="button"
                aria-pressed={answer === index}
                onClick={() => setAnswer(index)}
                className={`rounded-xl border-2 p-5 text-left font-semibold transition ${
                  answer === index
                    ? "border-[#285a49] bg-[#dce9dc]"
                    : "border-[#c5c8b4] bg-white hover:bg-[#f0f7ee]"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setShowHint((current) => !current)}
            className="mt-6 text-sm font-bold underline"
          >
            {showHint ? "Hide clue" : "Need a clue?"}
          </button>

          {showHint && (
            <p className="mt-3 rounded-xl bg-[#fff4d6] p-4">
              {investigation.hint}
            </p>
          )}

          {answer !== null && (
            <div role="status" className="mt-6 rounded-xl bg-white p-5">
              <p className="font-black">
                {correct
                  ? "Excellent detective work!"
                  : "Not quite. Examine the evidence and try again."}
              </p>
              {correct && (
                <p className="mt-3 leading-relaxed">
                  {investigation.explanation}
                </p>
              )}
            </div>
          )}

          {correct && (
            <button
              type="button"
              onClick={continueInvestigation}
              className="mt-6 rounded-full bg-[#285a49] px-8 py-4 font-black text-white hover:bg-[#39765f]"
            >
              {step === investigations.length - 1
                ? "Complete Investigation"
                : "Next Discovery →"}
            </button>
          )}
        </div>
      )}
    </section>
  );
}
