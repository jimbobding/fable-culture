"use client";

import { useState } from "react";

type Choice = {
  id: string;
  label: string;
  short: string;
  correct: boolean;
  response: string;
};

const choices: Choice[] = [
  {
    id: "tunnel",
    label: "Cut straight through",
    short: "Tunnel",
    correct: false,
    response:
      "That would need enormous excavation. In steep Andean terrain, builders often worked with the mountain rather than trying to smash straight through it.",
  },
  {
    id: "steps",
    label: "Build stone steps",
    short: "Stone steps",
    correct: true,
    response:
      "Good thinking. On steep slopes, sections of the Qhapaq Ñan used stone stairways to climb through difficult mountain terrain.",
  },
  {
    id: "around",
    label: "Go all the way around",
    short: "Long detour",
    correct: false,
    response:
      "Sometimes routes did follow the landscape, but enormous detours were not always practical. Builders developed roads, retaining walls and stairways for steep terrain.",
  },
];

export default function IncaRoad() {
  const [selected, setSelected] = useState<string | null>(null);

  const answer = choices.find((choice) => choice.id === selected);

  return (
    <section
      id="chapter-road"
      className="relative overflow-hidden bg-[#DDB64D] px-4 py-20 text-[#211F1A] md:px-8 md:py-28"
    >
      {/* printed dots */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage:
            "radial-gradient(#211F1A 0.8px, transparent 0.8px)",
          backgroundSize: "7px 7px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* CHAPTER HEADER */}
        <div className="mb-5 grid border-[5px] border-[#211F1A] bg-[#B84A34] shadow-[8px_8px_0_#211F1A] md:grid-cols-[150px_1fr]">
          <div className="flex items-center justify-center border-b-[5px] border-[#211F1A] bg-[#F0DFAF] p-5 md:border-b-0 md:border-r-[5px]">
            <span className="text-7xl font-black leading-none">01</span>
          </div>

          <div className="p-6 text-[#F7E6BA] md:p-8">
            <p className="text-xs font-black uppercase tracking-[0.25em]">
              Engineering challenge
            </p>

            <h2 className="mt-2 text-5xl font-black uppercase leading-[0.85] tracking-[-0.05em] md:text-7xl">
              Build the
              <br />
              Great Road!
            </h2>
          </div>
        </div>

        {/* COMIC GRID */}
        <div className="grid gap-5 lg:grid-cols-12">
          {/* ILLUSTRATION PANEL */}
          <div className="relative min-h-[500px] overflow-hidden border-[5px] border-[#211F1A] bg-[#73A39A] shadow-[8px_8px_0_#211F1A] lg:col-span-7">
            {/* comic caption */}
            <div className="absolute left-4 top-4 z-20 max-w-[260px] rotate-[-2deg] border-[3px] border-[#211F1A] bg-[#F3E0A9] p-4 shadow-[4px_4px_0_#211F1A]">
              <p className="text-xs font-black uppercase tracking-[0.15em] text-[#A33F30]">
                Somewhere high in the Andes...
              </p>

              <p className="mt-2 text-lg font-black leading-tight">
                The road has reached a seriously steep mountain.
              </p>
            </div>

            {/* SUN */}
            <div className="absolute right-10 top-10 h-24 w-24 rounded-full border-[4px] border-[#211F1A] bg-[#E8B83F] shadow-[5px_5px_0_rgba(33,31,26,0.35)]" />

            {/* SVG COMIC LANDSCAPE */}
            <svg
              className="absolute inset-x-0 bottom-0 h-[78%] w-full"
              viewBox="0 0 800 520"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {/* distant mountain */}
              <path
                d="M-40 390 L185 95 L305 270 L410 130 L610 390 Z"
                fill="#69795D"
                stroke="#211F1A"
                strokeWidth="8"
                strokeLinejoin="round"
              />

              {/* snow */}
              <path
                d="M185 95 L137 158 L180 145 L201 173 L220 143 L250 165 Z"
                fill="#F2E3B8"
                stroke="#211F1A"
                strokeWidth="6"
                strokeLinejoin="round"
              />

              {/* foreground mountain */}
              <path
                d="M180 520 L525 120 L870 520 Z"
                fill="#9A6841"
                stroke="#211F1A"
                strokeWidth="9"
                strokeLinejoin="round"
              />

              {/* mountain shading */}
              <path
                d="M525 120 L470 520 L870 520 Z"
                fill="#7C5136"
                opacity="0.55"
              />

              {/* stone stair road */}
              <path
                d="M330 520 L382 462 L365 436 L414 389 L397 361 L447 316 L430 286 L479 242 L464 215 L525 158"
                fill="none"
                stroke="#211F1A"
                strokeWidth="54"
                strokeLinecap="square"
                strokeLinejoin="miter"
              />

              <path
                d="M330 520 L382 462 L365 436 L414 389 L397 361 L447 316 L430 286 L479 242 L464 215 L525 158"
                fill="none"
                stroke="#D5AE67"
                strokeWidth="40"
                strokeLinecap="square"
                strokeLinejoin="miter"
              />

              {/* step marks */}
              <g stroke="#745133" strokeWidth="5">
                <line x1="350" y1="493" x2="383" y2="505" />
                <line x1="373" y1="457" x2="404" y2="470" />
                <line x1="378" y1="421" x2="414" y2="434" />
                <line x1="407" y1="382" x2="440" y2="397" />
                <line x1="412" y1="347" x2="449" y2="360" />
                <line x1="442" y1="307" x2="475" y2="320" />
                <line x1="445" y1="272" x2="484" y2="286" />
                <line x1="474" y1="233" x2="506" y2="247" />
              </g>

              {/* scrub plants */}
              <g fill="#365D43" stroke="#211F1A" strokeWidth="5">
                <path d="M155 500 L160 438 L174 474 L191 446 L181 500 Z" />
                <path d="M665 500 L671 425 L687 467 L704 437 L697 500 Z" />
                <path d="M730 510 L736 462 L748 485 L762 458 L757 510 Z" />
              </g>
            </svg>

            {/* SOUND EFFECT */}
            <div className="absolute bottom-7 right-5 rotate-[5deg] text-4xl font-black uppercase italic text-[#F0C74F] [text-shadow:3px_3px_0_#211F1A] md:text-6xl">
              UP!
            </div>
          </div>

          {/* CHALLENGE PANEL */}
          <div className="border-[5px] border-[#211F1A] bg-[#F1DEAF] p-6 shadow-[8px_8px_0_#211F1A] lg:col-span-5 md:p-8">
            <div className="inline-block rotate-[1deg] border-[3px] border-[#211F1A] bg-[#244C40] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#F7E6BA]">
              Your move
            </div>

            <h3 className="mt-6 text-4xl font-black uppercase leading-[0.9] tracking-[-0.04em] md:text-5xl">
              How do you get the road up there?
            </h3>

            <p className="mt-5 font-bold leading-7 text-[#514737]">
              You need to connect communities across this steep landscape.
              Pick an engineering solution.
            </p>

            <div className="mt-8 space-y-4">
              {choices.map((choice, index) => {
                const isSelected = selected === choice.id;

                return (
                  <button
                    key={choice.id}
                    type="button"
                    onClick={() => setSelected(choice.id)}
                    className={`group flex w-full items-center gap-4 border-[4px] border-[#211F1A] p-4 text-left font-black uppercase shadow-[5px_5px_0_#211F1A] transition hover:-translate-y-1 ${
                      isSelected
                        ? "bg-[#E4B849]"
                        : "bg-[#F7E9C4] hover:bg-[#E9CF89]"
                    }`}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center border-[3px] border-[#211F1A] bg-[#B84A34] text-[#F7E6BA]">
                      {String.fromCharCode(65 + index)}
                    </span>

                    <span>{choice.label}</span>
                  </button>
                );
              })}
            </div>

            {!answer && (
              <div className="mt-8 border-t-[4px] border-dashed border-[#211F1A] pt-6">
                <p className="text-sm font-black uppercase tracking-[0.12em] text-[#A33F30]">
                  ↑ Choose one to reveal the evidence
                </p>
              </div>
            )}

            {answer && (
              <div className="mt-8">
                <div
                  className={`border-[4px] border-[#211F1A] p-5 shadow-[5px_5px_0_#211F1A] ${
                    answer.correct ? "bg-[#6E8C67]" : "bg-[#D27A4E]"
                  }`}
                >
                  <p className="text-xs font-black uppercase tracking-[0.2em]">
                    {answer.correct
                      ? "★ That's the idea!"
                      : "Not your best mountain plan!"}
                  </p>

                  <p className="mt-3 text-lg font-black leading-snug">
                    {answer.response}
                  </p>
                </div>

                <div className="mt-5 rotate-[-1deg] border-[4px] border-[#211F1A] bg-[#E4B849] p-5 shadow-[5px_5px_0_#B84A34]">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#8D382C]">
                    Evidence file
                  </p>

                  <p className="mt-2 text-lg font-black leading-snug">
                    The Qhapaq Ñan crossed extremely difficult Andean terrain.
                    Its engineering included stone paving, stairways, retaining
                    walls, bridges and drainage systems.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* FACT STRIP */}
        <div className="mt-5 grid border-[5px] border-[#211F1A] bg-[#244C40] text-[#F5E4B8] shadow-[8px_8px_0_#211F1A] md:grid-cols-[1fr_2fr]">
          <div className="flex items-center justify-center border-b-[5px] border-[#211F1A] bg-[#B84A34] p-7 text-center md:border-b-0 md:border-r-[5px]">
            <div>
              <p className="text-5xl font-black md:text-6xl">30,000+</p>
              <p className="mt-1 text-xs font-black uppercase tracking-[0.18em]">
                kilometres
              </p>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#E4B849]">
              The bigger picture
            </p>

            <p className="mt-3 text-xl font-black leading-snug md:text-2xl">
              At its greatest extent, the Qhapaq Ñan road network stretched
              for more than 30,000 kilometres across the Andes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
