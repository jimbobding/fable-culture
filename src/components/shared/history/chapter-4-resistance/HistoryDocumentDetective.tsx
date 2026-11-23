"use client";

import { useState } from "react";

export type DocumentClue = {
  id: string;
  label: string;
  heading: string;
  discovery: string;
  historianQuestion: string;
  passage?: string;
};

export type DocumentStatement = {
  id: string;
  text: string;
  correct: boolean;
};

export type DocumentChallenge = {
  question: string;
  statements: DocumentStatement[];
  feedback: string;
};

type Props = {
  documentTitle: string;
  documentDate: string;
  introduction: string;
  clues: DocumentClue[];
  challenge?: DocumentChallenge;
  onComplete: () => void;
};

export default function HistoryDocumentDetective({
  documentTitle,
  documentDate,
  introduction,
  clues,
  challenge,
  onComplete,
}: Props) {
  const [discovered, setDiscovered] = useState<string[]>([]);
  const [activeClue, setActiveClue] = useState<string | null>(null);
  const [selectedStatements, setSelectedStatements] = useState<string[]>([]);
  const [challengeChecked, setChallengeChecked] = useState(false);
  const [challengeSolved, setChallengeSolved] = useState(false);

  const currentClue = clues.find((clue) => clue.id === activeClue);
  const complete =
    clues.length > 0 && discovered.length === clues.length;

  const requiredStatements =
    challenge?.statements.filter((statement) => statement.correct).length ?? 0;

  function toggleStatement(id: string) {
    if (challengeSolved) return;

    setSelectedStatements((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
    setChallengeChecked(false);
  }

  function checkChallenge() {
    if (!challenge) return;

    const correct =
      selectedStatements.length === requiredStatements &&
      selectedStatements.every((id) =>
        challenge.statements.some(
          (statement) => statement.id === id && statement.correct
        )
      );

    setChallengeChecked(true);

    if (correct) {
      setChallengeSolved(true);
    }
  }

  function investigate(id: string) {
    setActiveClue(id);
    setDiscovered((current) =>
      current.includes(id) ? current : [...current, id]
    );
  }

  return (
    <section className="rounded-3xl border-4 border-[#6f573c] bg-[#e9ddc6] p-5 text-[#3d3024] shadow-xl sm:p-9">
      <div className="rounded-2xl bg-[#473b30] p-6 text-white">
        <p className="text-xs font-black uppercase tracking-widest text-[#e9cb91]">
          Historical Document Investigation
        </p>
        <h3 className="mt-3 text-3xl font-black">
          {documentTitle}
        </h3>
        <p className="mt-2 text-sm text-[#e9cb91]">
          {documentDate}
        </p>
        <p className="mt-5 leading-relaxed">{introduction}</p>
      </div>

      <div className="mt-7 rounded-2xl border-2 border-[#b69a72] bg-[#fff8e9] p-6">
        <p className="text-xs font-black uppercase tracking-widest text-[#806346]">
          Document Examination
        </p>
        <h4 className="mt-3 text-2xl font-black">
          Examine the historical record
        </h4>
        <p className="mt-3 leading-relaxed">
          Select each marked section to discover what the
          document can tell us — and what it cannot.
        </p>

        <div className="mt-7 rounded-xl border border-[#b69a72] bg-[#f5e7c9] p-5 shadow-inner sm:p-8">
          <p className="text-center text-xs font-black uppercase tracking-[0.2em] text-[#806346]">
            Educational Reconstruction
          </p>

          <h5 className="mt-4 border-b border-[#b69a72] pb-4 text-center font-serif text-2xl font-bold">
            {documentTitle}
          </h5>

          <p className="mt-3 text-center font-serif italic">
            {documentDate}
          </p>

          <div className="mt-8 space-y-5">
            {clues.map((clue, index) => {
              const found = discovered.includes(clue.id);
              const active = activeClue === clue.id;

              return (
                <button
                  key={clue.id}
                  type="button"
                  onClick={() => investigate(clue.id)}
                  aria-pressed={active}
                  className={`w-full rounded-lg border-l-4 p-5 text-left font-serif leading-8 transition focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#244e58] ${
                    active
                      ? "border-[#47765a] bg-[#e1e9d8]"
                      : found
                        ? "border-[#47765a] bg-[#eee7d2]"
                        : "border-[#a98a5e] bg-[#fff6dc] hover:bg-[#fffaf0]"
                  }`}
                >
                  <span className="mb-2 block font-sans text-xs font-black uppercase tracking-widest text-[#806346]">
                    Section {index + 1} · {clue.label}
                  </span>

                  <span className="block text-lg">
                    {clue.passage ?? clue.heading}
                  </span>

                  <span className="mt-3 block font-sans text-sm font-bold text-[#245d67]">
                    {found ? "✓ Evidence discovered" : "Examine this passage →"}
                  </span>
                </button>
              );
            })}
          </div>

          <p className="mt-7 border-t border-[#b69a72] pt-4 text-center text-xs italic text-[#806346]">
            Simplified educational reconstruction, not a facsimile
            or verbatim transcription of an original document.
          </p>
        </div>
      </div>

      {currentClue && (
        <div
          role="status"
          className="mt-7 rounded-2xl border-2 border-[#a98a5e] bg-[#fffaf0] p-6"
        >
          <p className="text-xs font-black uppercase tracking-widest">
            Evidence Discovered
          </p>
          <h4 className="mt-3 text-2xl font-black">
            {currentClue.heading}
          </h4>
          <p className="mt-4 leading-8">
            {currentClue.discovery}
          </p>
          <div className="mt-6 rounded-xl bg-[#eee0c4] p-5">
            <p className="text-sm font-black">
              Think like a historian
            </p>
            <p className="mt-2">
              {currentClue.historianQuestion}
            </p>
          </div>
        </div>
      )}

      <div className="mt-7 rounded-2xl border-2 border-dashed border-[#a98a5e] bg-[#f8efdc] p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h4 className="text-xl font-black">
            Historian's Notebook
          </h4>
          <p className="text-sm font-bold">
            {discovered.length} / {clues.length} clues
          </p>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {clues.map((clue) => {
            const found = discovered.includes(clue.id);
            const active = activeClue === clue.id;

            return (
              <button
                key={clue.id}
                type="button"
                disabled={!found}
                onClick={() => setActiveClue(active ? null : clue.id)}
                aria-pressed={active}
                className={`rounded-xl border-2 p-4 text-center transition ${
                  active
                    ? "border-[#244e58] bg-[#c5ddc9] ring-4 ring-[#a8c9b2]"
                    : found
                      ? "border-[#47765a] bg-[#dce9d9] hover:-translate-y-1 hover:bg-[#c5ddc9]"
                      : "cursor-not-allowed border-dashed border-[#c9b594] bg-[#fff8e9]"
                }`}
              >
                <span className="block text-2xl" aria-hidden="true">
                  {found ? "🔎" : "○"}
                </span>
                <span className="mt-2 block text-xs font-black uppercase">
                  {found ? clue.label : "Undiscovered"}
                </span>
                {found && (
                  <span className="mt-2 block text-xs font-semibold">
                    {active ? "Close evidence ↑" : "Review evidence ↓"}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {currentClue && discovered.includes(currentClue.id) && (
          <div
            role="region"
            aria-label={`Notebook evidence: ${currentClue.label}`}
            className="mt-5 rounded-xl border-2 border-[#47765a] bg-[#fffaf0] p-5"
          >
            <p className="text-xs font-black uppercase tracking-widest text-[#806346]">
              Evidence Review
            </p>

            <h5 className="mt-2 text-xl font-black">
              {currentClue.heading}
            </h5>

            <p className="mt-3 leading-relaxed">
              {currentClue.discovery}
            </p>

            <div className="mt-4 rounded-lg bg-[#eee0c4] p-4">
              <p className="font-black">Think like a historian</p>
              <p className="mt-2">{currentClue.historianQuestion}</p>
            </div>

            <button
              type="button"
              onClick={() => setActiveClue(null)}
              className="mt-4 rounded-full border-2 border-[#244e58] px-4 py-2 text-sm font-bold text-[#244e58] hover:bg-[#e1e9d8]"
            >
              Close evidence
            </button>
          </div>
        )}

        {complete && challenge && (
          <div className="mt-7 rounded-2xl border-2 border-[#a98a5e] bg-[#fffaf0] p-5 sm:p-7">
            <p className="text-xs font-black uppercase tracking-widest text-[#806346]">
              Final Investigation
            </p>

            <h5 className="mt-3 text-2xl font-black">
              The Historian&apos;s Challenge
            </h5>

            <p className="mt-3 leading-relaxed">
              {challenge.question}
            </p>

            <p className="mt-2 text-sm font-semibold">
              Choose {requiredStatements} statements supported by the evidence.
            </p>

            <div className="mt-5 space-y-3">
              {challenge.statements.map((statement) => (
                <label
                  key={statement.id}
                  className="flex cursor-pointer items-start gap-3 rounded-xl border-2 border-[#c5af8c] bg-white p-4"
                >
                  <input
                    type="checkbox"
                    checked={selectedStatements.includes(statement.id)}
                    disabled={challengeSolved}
                    onChange={() => toggleStatement(statement.id)}
                    className="mt-1 h-5 w-5 accent-[#244e58]"
                  />
                  <span>{statement.text}</span>
                </label>
              ))}
            </div>

            {!challengeSolved && (
              <button
                type="button"
                onClick={checkChallenge}
                disabled={selectedStatements.length !== requiredStatements}
                className="mt-5 rounded-full bg-[#244e58] px-6 py-3 font-black text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                Check my evidence
              </button>
            )}

            {challengeChecked && (
              <div
                role="status"
                className="mt-5 rounded-xl bg-[#dce9d9] p-5"
              >
                <p className="font-black">
                  {challengeSolved
                    ? "✓ Evidence verified!"
                    : "Not quite — investigate again."}
                </p>
                <p className="mt-2">
                  {challengeSolved
                    ? challenge.feedback
                    : "Look again at what the document actually proves."}
                </p>
              </div>
            )}
          </div>
        )}

        {complete && (!challenge || challengeSolved) && (
          <button
            type="button"
            onClick={onComplete}
            className="mt-7 rounded-full bg-[#244e58] px-7 py-4 font-black text-white hover:bg-[#326b76]"
          >
            Investigation complete — Continue →
          </button>
        )}
      </div>
    </section>
  );
}
