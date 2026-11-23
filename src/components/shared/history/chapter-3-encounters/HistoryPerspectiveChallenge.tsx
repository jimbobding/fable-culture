"use client";

import { useState } from "react";

export type PerspectiveMatch = {
  id: string;
  icon: string;
  title: string;
  question: string;
  explanation: string;
};

type Props = {
  title: string;
  introduction: string;
  matches: PerspectiveMatch[];
  onComplete: () => void;
};

export default function HistoryPerspectiveChallenge({
  title,
  introduction,
  matches,
  onComplete,
}: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [matchedIds, setMatchedIds] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<string | null>(null);

  const complete =
    matches.length > 0 && matchedIds.length === matches.length;

  function selectEvidence(id: string) {
    if (matchedIds.includes(id)) return;

    setSelectedId(id);
    setFeedback(null);
  }

  function answerQuestion(id: string) {
    if (!selectedId || matchedIds.includes(id)) return;

    if (selectedId === id) {
      setMatchedIds((current) =>
        current.includes(id) ? current : [...current, id]
      );

      const match = matches.find((item) => item.id === id);

      setFeedback(match?.explanation ?? null);
      setSelectedId(null);
    } else {
      setFeedback(
        "Not quite! Think about which piece of evidence best answers this question."
      );
    }
  }

  return (
    <section className="mt-8 overflow-hidden rounded-3xl border-4 border-[#8d704b] bg-[#efe1c4] text-[#403326] shadow-xl">
      <header className="bg-[#624a34] px-6 py-7 text-white">
        <p className="text-xs font-black uppercase tracking-widest text-[#f1d49b]">
          Final Investigation
        </p>

        <h3 className="mt-2 text-2xl font-black sm:text-3xl">
          {title}
        </h3>

        <p className="mt-3 max-w-2xl leading-relaxed">
          {introduction}
        </p>
      </header>

      <div className="p-5 sm:p-8">
        <p className="font-bold">
          Connections made: {matchedIds.length} / {matches.length}
        </p>

        <div className="mt-7 grid gap-8 lg:grid-cols-2">
          <div>
            <h4 className="mb-4 text-xl font-black">
              1. Choose an evidence card
            </h4>

            <div className="space-y-3">
              {matches.map((item) => {
                const matched = matchedIds.includes(item.id);
                const selected = selectedId === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    disabled={matched}
                    onClick={() => selectEvidence(item.id)}
                    aria-pressed={selected}
                    className={`flex w-full items-center gap-4 rounded-xl border-2 p-4 text-left transition ${
                      matched
                        ? "border-[#6c9474] bg-[#dce9d9]"
                        : selected
                          ? "border-[#624a34] bg-[#fff8e8] ring-4 ring-[#d2b681]"
                          : "border-[#c6ae88] bg-white hover:bg-[#fff8e8]"
                    }`}
                  >
                    <span className="text-3xl" aria-hidden="true">
                      {item.icon}
                    </span>

                    <span className="flex-1 font-black">
                      {item.title}
                    </span>

                    {matched && (
                      <span className="font-black text-[#39765f]">
                        ✓
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xl font-black">
              2. Connect it to a question
            </h4>

            <div className="space-y-3">
              {[...matches].reverse().map((item) => {
                const matched = matchedIds.includes(item.id);

                return (
                  <button
                    key={item.id}
                    type="button"
                    disabled={matched || !selectedId}
                    onClick={() => answerQuestion(item.id)}
                    className={`w-full rounded-xl border-2 p-5 text-left transition ${
                      matched
                        ? "border-[#6c9474] bg-[#dce9d9]"
                        : "border-[#c6ae88] bg-[#fffaf0] hover:border-[#624a34] disabled:cursor-not-allowed"
                    }`}
                  >
                    <span className="block font-bold">
                      {item.question}
                    </span>

                    {matched && (
                      <span className="mt-2 block text-sm font-black text-[#39765f]">
                        ✓ Evidence connected
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {feedback && (
          <div
            role="status"
            className="mt-7 rounded-xl border-2 border-[#c6ae88] bg-[#fff8e8] p-5"
          >
            <p className="leading-relaxed">{feedback}</p>
          </div>
        )}

        {complete && (
          <div className="mt-8 rounded-2xl bg-[#dce9d9] p-6">
            <h4 className="text-2xl font-black">
              Investigation complete!
            </h4>

            <p className="mt-3 leading-relaxed">
              Historians compare different sources and perspectives
              because no single account tells the whole story.
            </p>

            <button
              type="button"
              onClick={onComplete}
              className="mt-6 rounded-full bg-[#244e58] px-7 py-4 font-black text-white hover:bg-[#326b76]"
            >
              Continue the Expedition →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
