"use client";

import { useState } from "react";
import HistoryPerspectiveChallenge, { PerspectiveMatch } from "./HistoryPerspectiveChallenge";

export type EncounterEvidence = {
  id: string;
  icon: string;
  title: string;
  description: string;
  position?: {
    x: number;
    y: number;
  };
};

type Props = {
  title: string;
  introduction: string;
  evidence: EncounterEvidence[];
  perspectiveMatches?: PerspectiveMatch[];
  sceneImage?: string;
  sceneAlt?: string;
  onComplete: () => void;
};

export default function HistoryEncounterScene({
  title,
  introduction,
  evidence,
  sceneImage,
  sceneAlt,
  onComplete,
  perspectiveMatches,
}: Props) {
  const [discovered, setDiscovered] = useState<string[]>([]);
  const [active, setActive] = useState<string | null>(null);
  const [showChallenge, setShowChallenge] = useState(false);

  const selected = evidence.find((item) => item.id === active);
  const complete = evidence.length > 0 && discovered.length === evidence.length;

  function investigate(id: string) {
    setActive(id);

    setDiscovered((current) =>
      current.includes(id) ? current : [...current, id],
    );
  }

  return (
    <section className="mt-12 overflow-hidden rounded-3xl border-4 border-[#6d8a89] bg-[#e9f1ed] text-[#203c3b] shadow-xl">
      <header className="bg-[#244e58] px-6 py-9 text-white">
        <p className="text-sm font-black uppercase tracking-widest text-[#f4d99b]">
          Interactive History Encounter
        </p>

        <h3 className="mt-3 text-3xl font-black sm:text-4xl">{title}</h3>

        <p className="mt-4 max-w-2xl leading-relaxed">{introduction}</p>
      </header>

      <div className="p-6 sm:p-10">
        <p className="font-bold">
          Evidence discovered: {discovered.length} / {evidence.length}
        </p>

        {sceneImage && (
          <div className="relative mt-6 overflow-hidden rounded-2xl border-4 border-white shadow-xl">
            <img
              src={sceneImage}
              alt={sceneAlt || "Historical encounter illustration"}
              className="block h-auto w-full"
            />

            {evidence
              .filter((item) => item.position)
              .map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => investigate(item.id)}
                  aria-label={`Investigate ${item.title}`}
                  aria-pressed={active === item.id}
                  style={{
                    left: `${item.position!.x}%`,
                    top: `${item.position!.y}%`,
                  }}
                  className={`absolute flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white text-2xl shadow-xl transition hover:scale-125 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-yellow-300 sm:h-16 sm:w-16 ${
                    discovered.includes(item.id)
                      ? "bg-[#39765f] text-white"
                      : "bg-[#f4d99b] text-[#244e58]"
                  }`}
                >
                  {discovered.includes(item.id) ? "✓" : item.icon}
                </button>
              ))}
          </div>
        )}

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {evidence.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => investigate(item.id)}
              aria-pressed={active === item.id}
              className={`rounded-2xl border-2 p-6 text-left transition hover:-translate-y-1 hover:shadow-lg ${
                active === item.id
                  ? "border-[#244e58] bg-[#d5e6df]"
                  : "border-[#b3c9c2] bg-white"
              }`}
            >
              <span className="text-5xl" aria-hidden="true">
                {item.icon}
              </span>

              <span className="mt-5 block text-lg font-black">
                {item.title}
              </span>

              <span className="mt-3 block text-sm font-bold">
                {discovered.includes(item.id)
                  ? "✓ Evidence discovered"
                  : "Investigate →"}
              </span>
            </button>
          ))}
        </div>

        {selected && (
          <div
            role="status"
            aria-live="polite"
            className="mt-8 overflow-hidden rounded-2xl border-2 border-[#a88c60] bg-[#f7edcf] shadow-xl"
          >
            <div className="flex items-center justify-between gap-4 border-b-2 border-[#c8b58d] bg-[#e8d8ad] px-6 py-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#735c38]">
                  Historian's Field Notebook
                </p>

                <p className="mt-1 text-sm font-bold text-[#735c38]">
                  Evidence Record{" "}
                  {evidence.findIndex((item) => item.id === selected.id) + 1} of{" "}
                  {evidence.length}
                </p>
              </div>

              <span className="text-4xl" aria-hidden="true">
                {selected.icon}
              </span>
            </div>

            <div
              className="px-7 py-8 sm:px-10"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(transparent, transparent 35px, #d8c8a6 36px)",
              }}
            >
              <h4 className="text-2xl font-black text-[#4a3827] sm:text-3xl">
                {selected.title}
              </h4>

              <p className="mt-6 text-lg leading-9 text-[#4a3827]">
                {selected.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-[#b9a57e] pt-5">
                <span className="text-sm font-bold text-[#735c38]">
                  Historical Evidence • Oceania Expedition
                </span>

                <span className="rotate-[-5deg] rounded border-2 border-[#39765f] px-4 py-2 text-sm font-black uppercase tracking-wider text-[#39765f]">
                  ✓ Discovered
                </span>
              </div>
            </div>
          </div>
        )}

        {complete && (
          <div className="mt-8 rounded-2xl bg-[#d5e6df] p-7">
            <h4 className="text-2xl font-black">All evidence collected!</h4>

            <p className="mt-3">
              You've explored every perspective in this scene.
            </p>

            <button
              type="button"
              onClick={() => {
                if (perspectiveMatches?.length) {
                  setShowChallenge(true);
                } else {
                  onComplete();
                }
              }}
              className="mt-6 rounded-full bg-[#244e58] px-7 py-4 font-black text-white hover:bg-[#326b76]"
            >
              {perspectiveMatches?.length
                ? "Open the Historian's Desk →"
                : "Continue the Expedition →"}
            </button>
          </div>
        )}
        {complete && showChallenge && perspectiveMatches && (
          <HistoryPerspectiveChallenge
            title="The Historian's Desk"
            introduction="Select an evidence card, then connect it to the historical question it helps answer."
            matches={perspectiveMatches}
            onComplete={onComplete}
          />
        )}
      </div>
    </section>
  );
}
