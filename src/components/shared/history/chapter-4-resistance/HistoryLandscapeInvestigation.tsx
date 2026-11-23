"use client";

import { useState } from "react";

export type LandscapeClue = {
  id: string;
  label: string;
  before: string;
  after: string;
  discovery: string;
  question: string;
  sourceUrl: string;
  sourceLabel: string;
};

type Props = {
  title: string;
  introduction: string;
  clues: LandscapeClue[];
  onComplete: () => void;
};

export default function HistoryLandscapeInvestigation({
  title,
  introduction,
  clues,
  onComplete,
}: Props) {
  const [period, setPeriod] = useState<"before" | "after">("before");
  const [activeClue, setActiveClue] = useState<string | null>(null);
  const [discovered, setDiscovered] = useState<string[]>([]);

  const currentClue = clues.find((clue) => clue.id === activeClue);
  const complete =
    clues.length > 0 && discovered.length === clues.length;

  function investigate(id: string) {
    setActiveClue(id);
    setDiscovered((current) =>
      current.includes(id) ? current : [...current, id]
    );
  }

  return (
    <section className="rounded-3xl border-4 border-[#49634e] bg-[#e7eddf] p-5 text-[#263b2c] shadow-xl sm:p-9">
      <header className="rounded-2xl bg-[#355d4b] p-6 text-white">
        <p className="text-xs font-black uppercase tracking-widest text-[#d7e8c8]">
          Historical Landscape Investigation
        </p>
        <h3 className="mt-3 text-3xl font-black">{title}</h3>
        <p className="mt-4 leading-relaxed">{introduction}</p>
      </header>

      <div className="mt-7 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => {
            setPeriod("before");
            setActiveClue(null);
          }}
          aria-pressed={period === "before"}
          className={`rounded-full px-5 py-3 font-black ${
            period === "before"
              ? "bg-[#244e58] text-white"
              : "bg-white text-[#244e58]"
          }`}
        >
          Before expansion
        </button>

        <button
          type="button"
          onClick={() => {
            setPeriod("after");
            setActiveClue(null);
          }}
          aria-pressed={period === "after"}
          className={`rounded-full px-5 py-3 font-black ${
            period === "after"
              ? "bg-[#244e58] text-white"
              : "bg-white text-[#244e58]"
          }`}
        >
          During expansion
        </button>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border-2 border-[#7c9b80] bg-[#dbe6d0] p-4">
        <svg
          viewBox="0 0 600 340"
          role="img"
          aria-label={
            period === "before"
              ? "Conceptual landscape showing Kanak gardens and settlements"
              : "Conceptual landscape showing colonial land boundaries and restricted access"
          }
          className="w-full"
        >
          <rect width="600" height="340" fill="#dbe6d0" />

          <path
            d="M0 140 Q100 10 210 120 T430 95 T600 135 L600 0 L0 0Z"
            fill="#92b6a3"
          />

          <path
            d="M0 265 Q150 205 300 270 T600 240"
            stroke="#9cc4cf"
            strokeWidth="34"
            fill="none"
          />

          {period === "before" ? (
            <g>
              <rect x="65" y="160" width="170" height="75" rx="8" fill="#a8c57f" />
              <path d="M105 165 L135 125 L165 165Z" fill="#a57b55" />
              <rect x="118" y="165" width="34" height="35" fill="#e5cba4" />

              <path d="M350 180 L390 135 L430 180Z" fill="#a57b55" />
              <rect x="365" y="180" width="50" height="38" fill="#e5cba4" />

              <text x="150" y="255" fontSize="19" textAnchor="middle" fill="#31533b">
                Gardens
              </text>
              <text x="390" y="240" fontSize="19" textAnchor="middle" fill="#31533b">
                Community
              </text>
            </g>
          ) : (
            <g>
              <rect x="55" y="155" width="220" height="95" fill="#d5b58b" stroke="#9d7850" strokeWidth="4" />
              <path d="M110 155 V250 M165 155 V250 M220 155 V250" stroke="#9d7850" strokeDasharray="8 6" strokeWidth="3" />

              <rect x="340" y="165" width="190" height="85" fill="#f1d5aa" stroke="#b28c60" strokeWidth="4" strokeDasharray="10 6" />

              <text x="165" y="205" fontSize="20" textAnchor="middle" fill="#6c4d32">
                Settler land
              </text>
              <text x="435" y="205" fontSize="20" textAnchor="middle" fill="#6c4d32">
                Restricted
              </text>
              <text x="435" y="230" fontSize="20" textAnchor="middle" fill="#6c4d32">
                access
              </text>
            </g>
          )}

          <text x="300" y="320" fontSize="14" textAnchor="middle" fill="#546d5b">
            Educational illustration — not a historical map
          </text>
        </svg>

        <p className="mt-3 text-center text-sm font-semibold">
          Compare the two landscapes. What has changed?
        </p>
      </div>

      <div className="mt-7 grid gap-3 sm:grid-cols-3">
        {clues.map((clue) => {
          const found = discovered.includes(clue.id);

          return (
            <button
              key={clue.id}
              type="button"
              onClick={() => investigate(clue.id)}
              aria-pressed={activeClue === clue.id}
              className={`rounded-xl border-2 p-5 text-left transition hover:-translate-y-1 ${
                found
                  ? "border-[#47765a] bg-[#dce9d9]"
                  : "border-[#7c9b80] bg-white hover:bg-[#f4f8ed]"
              }`}
            >
              <span className="text-2xl" aria-hidden="true">
                {found ? "🔎" : "📍"}
              </span>
              <span className="mt-3 block font-black">
                {clue.label}
              </span>
              <span className="mt-3 block text-sm font-bold">
                {found ? "✓ Discovered" : "Investigate →"}
              </span>
            </button>
          );
        })}
      </div>

      {currentClue && (
        <article className="mt-7 rounded-2xl border-2 border-[#7c9b80] bg-white p-6">
          <h4 className="text-2xl font-black">
            {currentClue.label}
          </h4>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-[#e7eddf] p-5">
              <p className="font-black">Before expansion</p>
              <p className="mt-3 leading-relaxed">
                {currentClue.before}
              </p>
            </div>

            <div className="rounded-xl bg-[#f1e2c9] p-5">
              <p className="font-black">During expansion</p>
              <p className="mt-3 leading-relaxed">
                {currentClue.after}
              </p>
            </div>
          </div>

          <p className="mt-5 leading-8">
            {currentClue.discovery}
          </p>

          <div className="mt-5 rounded-xl bg-[#e7eddf] p-5">
            <p className="font-black">Think like a historian</p>
            <p className="mt-2">{currentClue.question}</p>
          </div>

          <a
            href={currentClue.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block font-bold text-[#245d67] underline"
          >
            View reference: {currentClue.sourceLabel} ↗
          </a>
        </article>
      )}

      <div className="mt-7 rounded-2xl border-2 border-dashed border-[#7c9b80] bg-[#f4f8ed] p-6">
        <h4 className="text-xl font-black">
          Landscape Evidence Notebook
        </h4>

        <p className="mt-3 font-semibold">
          {discovered.length} / {clues.length} discoveries
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {clues.map((clue) => (
            <div
              key={clue.id}
              className="rounded-xl border-2 border-[#7c9b80] bg-white p-4 text-center"
            >
              <p className="text-2xl" aria-hidden="true">
                {discovered.includes(clue.id) ? "🔎" : "○"}
              </p>
              <p className="mt-2 text-sm font-black">
                {discovered.includes(clue.id)
                  ? clue.label
                  : "Undiscovered"}
              </p>
            </div>
          ))}
        </div>

        {complete && (
          <button
            type="button"
            onClick={onComplete}
            className="mt-7 rounded-full bg-[#244e58] px-7 py-4 font-black text-white"
          >
            Evidence collected — Continue →
          </button>
        )}
      </div>
    </section>
  );
}
