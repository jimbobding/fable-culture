"use client";

import { useId, useState } from "react";
import type { MuseumFlag } from "./FlagGallery";
import type { FlagExhibitContent } from "./flagExhibitTypes";

type FlagExhibitProps = {
  flag: MuseumFlag;
  onBack: () => void;
  content?: FlagExhibitContent;
};

export default function FlagExhibit({
  flag,
  onBack,
  content,
}: FlagExhibitProps) {
  const [selectedAnnotationId, setSelectedAnnotationId] = useState<
    string | null
  >(null);

  const markerId = useId().replace(/:/g, "");

  const selectedAnnotation = content?.annotations.find(
    (annotation) => annotation.id === selectedAnnotationId,
  );

  // The flag occupies the middle of a 100 x 100 exhibit canvas.
  // Labels use positions on the whole canvas.
  // Feature coordinates use percentages of the flag itself.
  const flagBounds = {
    left: 15,
    top: 24,
    width: 70,
    height: 52,
  };

  return (
    <section className="min-h-[70vh] bg-[#f4e8d1] px-5 py-12 text-[#203d3b] sm:px-10">
      <div className="mx-auto max-w-5xl">
        <button
          type="button"
          onClick={onBack}
          className="rounded-full border-2 border-[#203d3b] px-6 py-3 text-sm font-black transition hover:bg-[#203d3b] hover:text-white"
        >
          ← Back to the gallery
        </button>

        <div className="mt-12 text-center">
          <p className="text-xs font-black uppercase tracking-[.3em] text-[#a7653e]">
            The Flag Museum · Special Exhibit
          </p>

          <h1 className="mt-5 text-4xl font-black uppercase tracking-tight sm:text-7xl">
            {flag.name}
          </h1>

          <p className="mt-5 text-lg">
            Take a closer look. What can this flag tell us?
          </p>
        </div>

        {/* FEATURED FLAG */}
        <div className="mx-auto mt-12 max-w-5xl">
          <div className="rounded-[30px] border-2 border-[#203d3b] bg-[#e8ddc7] p-4 shadow-[8px_8px_0_#203d3b] sm:p-8">
            <p className="mb-5 text-center text-xs font-black uppercase tracking-[.3em] text-[#866542]">
              Explore the details
            </p>

            {content && content.annotations.length > 0 ? (
              <>
                {/* DESKTOP ANNOTATION CANVAS */}
                <div className="relative mx-auto hidden aspect-[5/4] max-w-4xl md:block">
                  {/* The flag */}
                  <div
                    className="absolute z-10 border-[10px] border-[#67452f] bg-white p-3 shadow-xl"
                    style={{
                      left: `${flagBounds.left}%`,
                      top: `${flagBounds.top}%`,
                      width: `${flagBounds.width}%`,
                      height: `${flagBounds.height}%`,
                    }}
                  >
                    <img
                      src={flag.image}
                      alt={`Flag of ${flag.name}`}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Arrows connecting labels to flag features */}
                  <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    className="pointer-events-none absolute inset-0 z-20 h-full w-full overflow-visible"
                    aria-hidden="true"
                  >
                    <defs>
                      <marker
                        id={markerId}
                        markerWidth="4"
                        markerHeight="4"
                        refX="3.5"
                        refY="2"
                        orient="auto"
                      >
                        <path d="M0 0 L4 2 L0 4 Z" fill="#a7653e" />
                      </marker>
                    </defs>

                    {content.annotations.map((annotation) => {
                      const targetX =
                        flagBounds.left +
                        (annotation.x / 100) * flagBounds.width;

                      const targetY =
                        flagBounds.top +
                        (annotation.y / 100) * flagBounds.height;

                      const labelX = annotation.labelX ?? 50;
                      const labelY = annotation.labelY ?? 10;

                      const selected = selectedAnnotationId === annotation.id;

                      return (
                        <line
                          key={annotation.id}
                          x1={labelX}
                          y1={labelY}
                          x2={targetX}
                          y2={targetY}
                          stroke={selected ? "#123f49" : "#a7653e"}
                          strokeWidth={selected ? 0.65 : 0.4}
                          strokeDasharray={selected ? undefined : "1.5 1"}
                          markerEnd={`url(#${markerId})`}
                        />
                      );
                    })}
                  </svg>

                  {/* Labels around the flag */}
                  {content.annotations.map((annotation) => {
                    const selected = selectedAnnotationId === annotation.id;

                    return (
                      <button
                        key={annotation.id}
                        type="button"
                        onClick={() =>
                          setSelectedAnnotationId(
                            selected ? null : annotation.id,
                          )
                        }
                        aria-pressed={selected}
                        style={{
                          left: `${annotation.labelX ?? 50}%`,
                          top: `${annotation.labelY ?? 10}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                        className={`absolute z-30 w-[27%] rounded-xl border-2 px-3 py-3 text-center text-sm font-black shadow-md transition focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 ${
                          selected
                            ? "border-[#123f49] bg-[#123f49] text-white"
                            : "border-[#203d3b] bg-[#fff9eb] text-[#203d3b] hover:bg-[#f5c57e]"
                        }`}
                      >
                        {annotation.title}
                      </button>
                    );
                  })}
                </div>

                {/* MOBILE VERSION */}
                <div className="md:hidden">
                  <div className="border-[8px] border-[#67452f] bg-white p-2 shadow-xl">
                    <img
                      src={flag.image}
                      alt={`Flag of ${flag.name}`}
                      className="block h-auto w-full"
                    />
                  </div>

                  <div className="mt-5 grid gap-3">
                    {content.annotations.map((annotation) => {
                      const selected = selectedAnnotationId === annotation.id;

                      return (
                        <button
                          key={annotation.id}
                          type="button"
                          onClick={() =>
                            setSelectedAnnotationId(
                              selected ? null : annotation.id,
                            )
                          }
                          aria-pressed={selected}
                          className={`rounded-xl border-2 p-4 text-left font-black ${
                            selected
                              ? "border-[#123f49] bg-[#123f49] text-white"
                              : "border-[#203d3b] bg-[#fff9eb]"
                          }`}
                        >
                          ↗ {annotation.title}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* SELECTED EXPLANATION */}
                <div
                  aria-live="polite"
                  className="mx-auto mt-6 max-w-3xl rounded-[24px] border-2 border-[#203d3b] bg-white p-6 shadow-[5px_5px_0_#203d3b]"
                >
                  {selectedAnnotation ? (
                    <>
                      <h3 className="text-2xl font-black">
                        {selectedAnnotation.title}
                      </h3>

                      {selectedAnnotation.mode === "investigate" ? (
                        <p className="mt-3 text-lg leading-relaxed">
                          Your turn! Research this feature and explain what you
                          think it represents.
                        </p>
                      ) : (
                        <p className="mt-3 text-lg leading-relaxed">
                          {selectedAnnotation.explanation}
                        </p>
                      )}
                    </>
                  ) : (
                    <p className="text-center text-lg">
                      Choose a label to discover what each part of the flag
                      represents.
                    </p>
                  )}
                </div>

                <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-[#203d3b]/80">
                  {content.introduction}
                </p>
              </>
            ) : (
              <div className="mx-auto max-w-3xl border-[10px] border-[#67452f] bg-white p-3 shadow-xl">
                <img
                  src={flag.image}
                  alt={`Flag of ${flag.name}`}
                  className="block h-auto w-full"
                />
              </div>
            )}
          </div>
        </div>

        {/* INVESTIGATION PROMPTS */}
        <div className="mt-20">
          <p className="text-xs font-black uppercase tracking-[.3em] text-[#a7653e]">
            Become a flag detective
          </p>

          <h2 className="mt-4 text-3xl font-black uppercase sm:text-5xl">
            Investigate the design
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Colours",
                question:
                  "Which colours can you see? Why might they have been chosen?",
              },
              {
                number: "02",
                title: "Symbols",
                question:
                  "Can you spot any stars, animals, plants or other symbols?",
              },
              {
                number: "03",
                title: "History",
                question:
                  "When was this flag introduced? Has its design changed?",
              },
            ].map((prompt) => (
              <div
                key={prompt.number}
                className="rounded-[28px] border-2 border-[#203d3b] bg-white p-7 shadow-[5px_5px_0_#203d3b]"
              >
                <p className="text-sm font-black text-[#a7653e]">
                  {prompt.number}
                </p>

                <h3 className="mt-5 text-2xl font-black">{prompt.title}</h3>

                <p className="mt-4 leading-relaxed">{prompt.question}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-[30px] bg-[#123f49] p-8 text-center text-white">
          <h2 className="text-2xl font-black">Every flag has a story.</h2>

          <p className="mx-auto mt-3 max-w-xl">
            Soon you&apos;ll be able to explore the meanings behind the colours
            and symbols, and record your discoveries.
          </p>
        </div>
      </div>
    </section>
  );
}
