"use client";

import { useState } from "react";
import type { ResistanceCase } from "@/data/history/types";
import HistoryDocumentDetective from "./HistoryDocumentDetective";
import HistoryLandscapeInvestigation from "./HistoryLandscapeInvestigation";
import { oceaniaKanakLandscape } from "@/data/history/oceaniaKanakLandscape";
import { oceaniaFijiDocument } from "@/data/history/oceaniaFijiDocument";

type Props = {
  cases: ResistanceCase[];
  onComplete: () => void;
};

export default function HistoryResistanceArchive({
  cases,
  onComplete,
}: Props) {
  const [caseIndex, setCaseIndex] = useState(0);
  const [activeEvidence, setActiveEvidence] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showOutcome, setShowOutcome] = useState(false);
  const [documentComplete, setDocumentComplete] = useState(false);
  const [landscapeComplete, setLandscapeComplete] = useState(false);

  const currentCase = cases[caseIndex];
  const isFijiDocumentCase =
    currentCase?.id === oceaniaFijiDocument.id;
  const isKanakLandscapeCase =
    currentCase?.id === "kanak-resistance";

  if (!currentCase) return null;

  const selectedEvidence = currentCase.evidence.find(
    (item) => item.id === activeEvidence
  );

  const solvedCount = currentCase.evidence.filter((item) =>
    item.answers.some(
      (answer) =>
        answer.id === answers[item.id] && answer.correct
    )
  ).length;

  const allSolved = isFijiDocumentCase
    ? documentComplete
    : isKanakLandscapeCase
      ? landscapeComplete
      : solvedCount === currentCase.evidence.length;

  function nextCase() {
    if (caseIndex === cases.length - 1) {
      onComplete();
      return;
    }

    setCaseIndex((current) => current + 1);
    setActiveEvidence(null);
    setAnswers({});
    setShowOutcome(false);
    setDocumentComplete(false);
    setLandscapeComplete(false);
  }

  return (
    <section className="mt-12 overflow-hidden rounded-3xl border-4 border-[#65523d] bg-[#e8ddc8] text-[#352c23] shadow-2xl">
      <header className="bg-[#302c2a] px-6 py-9 text-white sm:px-10">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-[#e4c78d]">
          Fable Culture / Historical Investigations
        </p>

        <h3 className="mt-4 text-3xl font-black sm:text-5xl">
          The Pacific Resistance Archives
        </h3>

        <p className="mt-5 max-w-2xl leading-relaxed text-[#e9dfd0]">
          Open historical records. Examine the evidence.
          Question what you read. Discover what happened.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <span className="rounded-full border border-white/30 px-4 py-2 text-sm font-bold">
            Case {caseIndex + 1} / {cases.length}
          </span>
          <span className="rounded-full border border-white/30 px-4 py-2 text-sm font-bold">
            {currentCase.location} · {currentCase.year}
          </span>
        </div>
      </header>

      <div className="p-5 sm:p-9">
        <div className="rounded-2xl border-2 border-[#a68c66] bg-[#fff9ec] p-6 sm:p-8">
          <p className="text-xs font-black uppercase tracking-widest text-[#806346]">
            Confidential Case File {currentCase.number}
          </p>

          <h4 className="mt-3 text-3xl font-black">
            {currentCase.title}
          </h4>

          <p className="mt-4 text-lg font-semibold leading-relaxed">
            {currentCase.introduction}
          </p>

          <div className="mt-7 space-y-4 border-t border-[#d2bea0] pt-6">
            <h5 className="text-xl font-black">
              Historical Background
            </h5>

            {currentCase.background.map((paragraph, index) => (
              <p key={index} className="leading-8">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-7 rounded-xl bg-[#e9ddc2] p-5">
            <p className="text-xs font-black uppercase tracking-widest">
              Your Investigation
            </p>
            <p className="mt-2 text-xl font-black">
              {currentCase.centralQuestion}
            </p>
          </div>
        </div>

        {isFijiDocumentCase ? (
          <div className="mt-10">
            <HistoryDocumentDetective
              key={currentCase.id}
              documentTitle={oceaniaFijiDocument.documentTitle}
              documentDate={oceaniaFijiDocument.documentDate}
              introduction={oceaniaFijiDocument.introduction}
              clues={oceaniaFijiDocument.clues}
              challenge={oceaniaFijiDocument.challenge}
              onComplete={() => setDocumentComplete(true)}
            />

            <a
              href={oceaniaFijiDocument.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-sm font-bold text-[#245d67] underline underline-offset-4"
            >
              View historical source: {oceaniaFijiDocument.sourceLabel} ↗
            </a>
          </div>
        ) : isKanakLandscapeCase ? (
          <div className="mt-10">
            <HistoryLandscapeInvestigation
              key={currentCase.id}
              title={oceaniaKanakLandscape.title}
              introduction={oceaniaKanakLandscape.introduction}
              clues={oceaniaKanakLandscape.clues}
              onComplete={() => setLandscapeComplete(true)}
            />
          </div>
        ) : (
          <>
        <div className="mt-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h4 className="text-2xl font-black">
              Evidence Archive
            </h4>

            <p className="font-bold">
              Records investigated: {solvedCount} / {currentCase.evidence.length}
            </p>
          </div>

          <p className="mt-3 text-sm leading-relaxed">
            Open each record, examine its contents and answer
            the historian's question.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {currentCase.evidence.map((item) => {
              const solved = item.answers.some(
                (answer) =>
                  answer.id === answers[item.id] && answer.correct
              );

              const active = activeEvidence === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveEvidence(item.id)}
                  aria-pressed={active}
                  className={`min-h-44 rounded-xl border-2 p-5 text-left shadow-md transition hover:-translate-y-1 hover:shadow-xl ${
                    active
                      ? "border-[#4c6253] bg-[#f5e8c8] ring-4 ring-[#b4a17e]"
                      : solved
                        ? "border-[#58816b] bg-[#dce9d9]"
                        : "border-[#a68c66] bg-[#fff9ec]"
                  }`}
                >
                  <span className="text-3xl" aria-hidden="true">
                    {solved ? "✓" : "📜"}
                  </span>

                  <span className="mt-4 block font-black">
                    {item.title}
                  </span>

                  <span className="mt-2 block text-sm">
                    {item.category}
                  </span>

                  <span className="mt-4 block text-sm font-bold">
                    {solved ? "✓ Investigated" : "Open record →"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {selectedEvidence && (
          <article
            className="mt-8 overflow-hidden rounded-2xl border-2 border-[#9d8056] bg-[#fffaf0] shadow-xl"
          >
            <header className="bg-[#6b543a] px-6 py-5 text-white">
              <p className="text-xs font-black uppercase tracking-widest text-[#f0d7a5]">
                Archive Record / {selectedEvidence.category}
              </p>

              <h5 className="mt-2 text-2xl font-black">
                {selectedEvidence.title}
              </h5>
            </header>

            <div className="p-6 sm:p-9">
              <div
                className="rounded-lg border-l-4 border-[#9d8056] bg-[#f5e9cd] p-6"
              >
                <p className="leading-8">
                  {selectedEvidence.content}
                </p>
              </div>

              <a
                href={selectedEvidence.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block text-sm font-bold text-[#245d67] underline underline-offset-4"
              >
                View reference: {selectedEvidence.sourceLabel} ↗
              </a>

              <div className="mt-8 border-t border-[#d2bea0] pt-7">
                <h6 className="text-xl font-black">
                  Historian's Question
                </h6>

                <p className="mt-3 text-lg">
                  {selectedEvidence.question}
                </p>

                <div className="mt-5 space-y-3">
                  {selectedEvidence.answers.map((answer) => {
                    const chosen =
                      answers[selectedEvidence.id] === answer.id;

                    return (
                      <button
                        key={answer.id}
                        type="button"
                        onClick={() =>
                          setAnswers((current) => ({
                            ...current,
                            [selectedEvidence.id]: answer.id,
                          }))
                        }
                        aria-pressed={chosen}
                        className={`w-full rounded-xl border-2 p-4 text-left font-semibold transition ${
                          chosen
                            ? "border-[#486e5a] bg-[#e0ebdf]"
                            : "border-[#c5af8c] bg-white hover:border-[#806346]"
                        }`}
                      >
                        {answer.text}
                      </button>
                    );
                  })}
                </div>

                {selectedEvidence.answers
                  .filter(
                    (answer) =>
                      answer.id === answers[selectedEvidence.id]
                  )
                  .map((answer) => (
                    <div
                      key={answer.id}
                      role="status"
                      className={`mt-5 rounded-xl border-2 p-5 ${
                        answer.correct
                          ? "border-[#58816b] bg-[#e0ebdf]"
                          : "border-[#b38a55] bg-[#f6e6c8]"
                      }`}
                    >
                      <p className="font-black">
                        {answer.correct
                          ? "✓ Evidence understood"
                          : "Investigate again"}
                      </p>
                      <p className="mt-2 leading-relaxed">
                        {answer.feedback}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </article>
        )}

          </>
        )}

        {allSolved && !showOutcome && (
          <div className="mt-9 rounded-2xl bg-[#dce9d9] p-7">
            <h4 className="text-2xl font-black">
              All evidence investigated!
            </h4>

            <p className="mt-3">
              You've examined all three records. Now discover
              what happened next.
            </p>

            <button
              type="button"
              onClick={() => setShowOutcome(true)}
              className="mt-6 rounded-full bg-[#244e58] px-7 py-4 font-black text-white"
            >
              Open the Historical Outcome →
            </button>
          </div>
        )}

        {showOutcome && (
          <div className="mt-9 rounded-2xl border-2 border-[#58816b] bg-[#e0ebdf] p-7 sm:p-9">
            <p className="text-xs font-black uppercase tracking-widest">
              Case Conclusion
            </p>

            <h4 className="mt-3 text-3xl font-black">
              What actually happened?
            </h4>

            <div className="mt-6 space-y-4">
              {currentCase.historicalOutcome.map((paragraph, index) => (
                <p key={index} className="leading-8">
                  {paragraph}
                </p>
              ))}
            </div>

            <button
              type="button"
              onClick={nextCase}
              className="mt-8 rounded-full bg-[#244e58] px-7 py-4 font-black text-white"
            >
              {caseIndex === cases.length - 1
                ? "Continue the Expedition →"
                : "Open Next Case File →"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
