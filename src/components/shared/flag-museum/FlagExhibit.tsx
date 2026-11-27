"use client";

import { useEffect, useId, useState } from "react";
import type { MuseumFlag } from "./FlagGallery";
import { oceaniaFlagDates } from "@/data/oceania/flagMuseum/flagDates";
import type { FlagExhibitContent } from "./flagExhibitTypes";
import CuratorContribution, { type CuratorAnswer } from "./CuratorContribution";
import {
  subscribeToPublishedExplanations,
  type PublishedFlagExplanation,
} from "@/lib/flag-museum/publicationRepository";

type FlagExhibitProps = {
  regionId: string;
  flag: MuseumFlag;
  onBack: () => void;
  content?: FlagExhibitContent;
};

export default function FlagExhibit({
  regionId,
  flag,
  onBack,
  content,
}: FlagExhibitProps) {
  const [selectedAnnotationId, setSelectedAnnotationId] = useState<
    string | null
  >(null);
  const [curatorAnswers, setCuratorAnswers] = useState<
    Record<string, CuratorAnswer>
  >({});

  function updateCuratorAnswer(annotationId: string, answer: CuratorAnswer) {
    setCuratorAnswers((previous) => ({
      ...previous,
      [`${flag.id}:${annotationId}`]: answer,
    }));
  }

  const markerId = useId().replace(/:/g, "");
  const flagAdoptionDate =
    regionId === "oceania" ? oceaniaFlagDates[flag.id] : undefined;

  const [publication, setPublication] = useState<{
    key: string;
    explanations: PublishedFlagExplanation[];
    error: boolean;
  } | null>(null);

  const publicationKey = `${regionId}:${flag.id}`;

  useEffect(() => {
    return subscribeToPublishedExplanations(
      regionId,
      flag.id,
      (explanations) => {
        setPublication({
          key: publicationKey,
          explanations,
          error: false,
        });
      },
      () => {
        setPublication({
          key: publicationKey,
          explanations: [],
          error: true,
        });
      },
    );
  }, [regionId, flag.id, publicationKey]);

  const selectedAnnotation = content?.annotations.find(
    (annotation) => annotation.id === selectedAnnotationId,
  );

  const publicationLoading = publication?.key !== publicationKey;

  const publicationError = !publicationLoading && publication?.error;

  const publishedExplanation = !publicationLoading
    ? publication?.explanations.find(
        (explanation) => explanation.annotationId === selectedAnnotationId,
      )
    : undefined;
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

          {flagAdoptionDate && (
            <div className="mx-auto mt-6 w-fit rounded-xl border-2 border-[#a7653e] bg-[#fff9eb] px-8 py-4 shadow-md">
              <p className="text-xs font-black uppercase tracking-[.2em] text-[#a7653e]">
                Flag adoption / design history
              </p>
              <p className="mt-2 text-2xl font-black">{flagAdoptionDate}</p>
            </div>
          )}

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

                      {selectedAnnotation.mode === "investigate" &&
                      publicationLoading ? (
                        <p className="mt-3">Loading museum explanation...</p>
                      ) : selectedAnnotation.mode === "investigate" &&
                        publicationError ? (
                        <p className="mt-3 text-red-700">
                          Unable to load the museum explanation. Please try
                          again later.
                        </p>
                      ) : selectedAnnotation.mode === "investigate" &&
                        publishedExplanation ? (
                        <div className="mt-4">
                          <p className="whitespace-pre-wrap text-lg leading-relaxed">
                            {publishedExplanation.explanation}
                          </p>
                          {publishedExplanation.initials?.trim() && (
                            <div className="mt-6 rounded-xl border border-[#a7653e]/30 bg-[#f4e8d1] p-4">
                              <p className="text-xs font-black uppercase tracking-widest text-[#a7653e]">
                                Research completed by
                              </p>
                              <p className="mt-2 text-lg font-bold">
                                Museum Curator: {publishedExplanation.initials}
                              </p>
                            </div>
                          )}
                          {publishedExplanation.sources?.trim() && (
                            <div className="mt-5 rounded-xl border border-[#203d3b]/20 bg-[#fff9eb] p-4">
                              <h4 className="font-black">Research sources</h4>
                              <p className="mt-2 whitespace-pre-wrap break-words text-sm leading-relaxed">
                                {publishedExplanation.sources}
                              </p>
                            </div>
                          )}
                        </div>
                      ) : selectedAnnotation.mode === "investigate" ? (
                        <CuratorContribution
                          key={`${flag.id}:${selectedAnnotation.id}`}
                          regionId={regionId}
                          flagId={flag.id}
                          annotationId={selectedAnnotation.id}
                          annotationTitle={selectedAnnotation.title}
                          answer={
                            curatorAnswers[
                              `${flag.id}:${selectedAnnotation.id}`
                            ] ?? {
                              explanation: "",
                              sources: "",
                            }
                          }
                          onChange={(answer) =>
                            updateCuratorAnswer(selectedAnnotation.id, answer)
                          }
                        />
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
      </div>
    </section>
  );
}
