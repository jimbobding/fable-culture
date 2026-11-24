"use client";

import { useState } from "react";
import FlagGallery, { type MuseumFlag } from "./FlagGallery";
import FlagExhibit from "./FlagExhibit";
import type { FlagExhibitContent } from "./flagExhibitTypes";

export type FlagMuseumSection = {
  id: string;
  name: string;
  description: string;
  flagCount: number;
};

type FlagMuseumProps = {
  title: string;
  introduction: string;
  sections: FlagMuseumSection[];
  flags?: (MuseumFlag & { regionId: string })[];
  exhibits?: Record<string, FlagExhibitContent>;
};

const galleryStyles = [
  {
    accent: "#e2c38e",
    wall: "#284f54",
    motif: "✦",
  },
  {
    accent: "#c9ddbb",
    wall: "#355b50",
    motif: "❋",
  },
  {
    accent: "#f0c5a8",
    wall: "#654a45",
    motif: "☼",
  },
  {
    accent: "#c8d6ef",
    wall: "#394c65",
    motif: "✧",
  },
];

export default function FlagMuseum({
  title,
  introduction,
  sections,
  flags = [],
  exhibits = {},
}: FlagMuseumProps) {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [selectedFlag, setSelectedFlag] = useState<MuseumFlag | null>(null);

  const activeSection = sections.find(
    (section) => section.id === selectedSection,
  );

  const totalFlags = sections.reduce(
    (total, section) => total + section.flagCount,
    0,
  );

  function enterGallery(sectionId: string) {
    setSelectedFlag(null);
    setSelectedSection(sectionId);
  }

  function returnToEntrance() {
    setSelectedFlag(null);
    setSelectedSection(null);
  }

  return (
    <div className="overflow-hidden">
      {!activeSection ? (
        <>
          {/* MUSEUM ENTRANCE */}
          <section className="relative overflow-hidden bg-[#102f35] px-6 pb-20 pt-16 text-[#f4ead7] sm:pt-24">
            {/* Architectural background */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, transparent 0px, transparent 119px, rgba(229,207,163,.12) 120px, transparent 121px)",
              }}
            />

            <div className="relative mx-auto max-w-7xl">
              <div className="flex flex-wrap items-center justify-between gap-5 border-b border-[#bba47a]/40 pb-6">
                <p className="text-xs font-semibold uppercase tracking-[.35em] text-[#d4bd91]">
                  Fable Culture · Permanent Collection
                </p>

                <p className="text-xs uppercase tracking-[.25em] text-[#d4bd91]">
                  Pacific Exhibition
                </p>
              </div>

              <div className="mx-auto max-w-5xl py-20 text-center sm:py-28">
                <p className="text-xs font-semibold uppercase tracking-[.5em] text-[#d4bd91]">
                  Welcome to the museum
                </p>

                <div
                  aria-hidden="true"
                  className="mx-auto mt-8 h-px w-24 bg-[#c9aa77]"
                />

                <h1 className="mt-10 font-serif text-[clamp(3.5rem,8vw,7.5rem)] font-normal leading-[1.02] tracking-[-.045em]">
                  {title}
                </h1>

                <p className="mx-auto mt-9 max-w-2xl text-lg leading-relaxed text-[#e5dac6] sm:text-xl">
                  {introduction}
                </p>

                <div className="mx-auto mt-12 flex max-w-md items-center justify-center gap-8 border-y border-[#bba47a]/40 py-5">
                  <div className="text-center">
                    <p className="font-serif text-3xl text-[#e0c08b]">
                      {totalFlags}
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[.25em]">
                      Flags
                    </p>
                  </div>

                  <div className="h-10 w-px bg-[#bba47a]/40" />

                  <div className="text-center">
                    <p className="font-serif text-3xl text-[#e0c08b]">
                      {sections.length}
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[.25em]">
                      Galleries
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* GALLERY ENTRANCES */}
          <section className="bg-[#e9e1d3] px-5 py-20 text-[#243c3b] sm:px-10 sm:py-28">
            <div className="mx-auto max-w-7xl">
              <div className="mb-14 text-center">
                <p className="text-xs font-semibold uppercase tracking-[.35em] text-[#8a6847]">
                  Explore the collection
                </p>

                <h2 className="mt-5 font-serif text-4xl font-normal sm:text-6xl">
                  The Galleries
                </h2>

                <p className="mx-auto mt-5 max-w-xl leading-relaxed text-[#52615d]">
                  Select a gallery entrance to explore the flags, stories and
                  symbols of the Pacific.
                </p>
              </div>

              <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
                {sections.map((section, index) => {
                  const style = galleryStyles[index % galleryStyles.length];
                  const previewFlags = flags
                    .filter((flag) => flag.regionId === section.id)
                    .slice(0, 3);

                  return (
                    <button
                      key={section.id}
                      type="button"
                      onClick={() => enterGallery(section.id)}
                      className="group relative flex min-h-[430px] flex-col border border-[#a69a84] bg-[#d8cebd] p-3 text-left shadow-[0_10px_25px_rgba(32,45,39,.12)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_18px_35px_rgba(32,45,39,.22)] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4"
                      aria-label={`Enter ${section.name} gallery`}
                    >
                      {/* Architectural doorway */}
                      <div
                        className="relative flex min-h-[360px] flex-1 flex-col overflow-hidden border-[8px] border-[#9d8260]"
                        style={{ backgroundColor: style.wall }}
                      >
                        {/* Warm museum lighting */}
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 opacity-60 transition-opacity duration-500 group-hover:opacity-100"
                          style={{
                            background: `radial-gradient(ellipse at 50% 0%, ${style.accent}55, transparent 75%)`,
                          }}
                        />

                        {/* Gallery number */}
                        <div className="relative flex items-center justify-between px-6 pt-6">
                          <p
                            className="text-xs font-bold uppercase tracking-[.25em]"
                            style={{ color: style.accent }}
                          >
                            Gallery {String(index + 1).padStart(2, "0")}
                          </p>

                          <span
                            aria-hidden="true"
                            className="text-3xl transition-transform duration-500 group-hover:rotate-12"
                            style={{ color: style.accent }}
                          >
                            {style.motif}
                          </span>
                        </div>

                        {/* Miniature framed flags */}
                        <div className="relative flex items-center justify-center gap-3 px-5 pb-6 pt-10 sm:gap-5">
                          {previewFlags.map((flag, flagIndex) => (
                            <div
                              key={flag.id}
                              className="w-[30%] max-w-[145px] border-[5px] border-[#b89a6e] bg-[#f4ead7] p-1.5 shadow-lg transition-transform duration-300 group-hover:-translate-y-2"
                              style={{
                                transform: `rotate(${
                                  flagIndex === 0
                                    ? -5
                                    : flagIndex === previewFlags.length - 1
                                      ? 5
                                      : 0
                                }deg)`,
                                transitionDelay: `${flagIndex * 70}ms`,
                              }}
                            >
                              <div className="flex aspect-[3/2] items-center justify-center bg-white">
                                <img
                                  src={flag.image}
                                  alt={`Flag of ${flag.name}`}
                                  className="h-full w-full object-contain"
                                />
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Gallery title */}
                        <div className="relative mt-3 flex flex-1 flex-col px-6 pb-7 text-center">
                          <h3 className="font-serif text-3xl leading-tight text-[#f4ead7] sm:text-4xl">
                            {section.name}
                          </h3>

                          <p className="mt-4 text-base leading-relaxed text-[#f4ead7]">
                            Discover the colours, symbols and stories behind the
                            flags.
                          </p>

                          <div className="mt-auto pt-8">
                            <p
                              className="mb-4 text-xs font-bold uppercase tracking-[.2em]"
                              style={{ color: style.accent }}
                            >
                              {section.flagCount} flags to explore
                            </p>

                            <div
                              className="relative flex items-center justify-between gap-4 overflow-hidden rounded-xl border-2 border-white/30 px-5 py-4 text-base font-bold text-[#203d3b] shadow-[0_5px_0_rgba(0,0,0,.25)] transition-all duration-300 group-hover:-translate-y-1 group-hover:brightness-110 group-hover:shadow-[0_8px_0_rgba(0,0,0,.25)]"
                              style={{
                                background: `linear-gradient(145deg, ${style.accent}, ${style.accent}dd)`,
                              }}
                            >
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-x-3 top-1 h-px bg-white/60"
                              />

                              <svg
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                className="h-6 w-6 shrink-0"
                              >
                                <path d="M3 21h18M6 21V3h12v18" />
                                <path d="M14 12h1" />
                              </svg>

                              <span className="flex-1 text-center">
                                Explore the gallery
                              </span>

                              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#203d3b] text-xl text-white transition-transform duration-300 group-hover:translate-x-1">
                                →
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mx-auto mt-16 max-w-2xl border-t border-[#b7a994] pt-8 text-center">
                <p className="font-serif text-xl italic text-[#716655]">
                  Every flag tells a story.
                </p>
              </div>
            </div>
          </section>
        </>
      ) : (
        /* INSIDE A GALLERY */
        <section className="min-h-[75vh] bg-[#f4e8d1] px-6 py-16 text-[#203d3b]">
          <div className="mx-auto max-w-7xl">
            <button
              type="button"
              onClick={returnToEntrance}
              className="rounded-full border-2 border-current px-6 py-3 text-sm font-black transition hover:bg-[#203d3b] hover:text-white"
            >
              ← Return to museum entrance
            </button>

            <p className="mt-16 text-xs font-black uppercase tracking-[.3em] text-[#bd633e]">
              Inside the exhibition
            </p>

            <h2 className="mt-5 text-5xl font-black uppercase tracking-tight sm:text-7xl">
              {activeSection.name}
            </h2>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed">
              {activeSection.description}
            </p>

            <div className="mt-14">
              {selectedFlag ? (
                <FlagExhibit
                  flag={selectedFlag}
                  onBack={() => setSelectedFlag(null)}
                  content={exhibits[selectedFlag.id]}
                />
              ) : (
                <FlagGallery
                  title={activeSection.name}
                  description={activeSection.description}
                  flags={flags.filter(
                    (flag) => flag.regionId === activeSection.id,
                  )}
                  onSelectFlag={setSelectedFlag}
                />
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
