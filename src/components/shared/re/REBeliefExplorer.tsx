"use client";

import Image from "next/image";
import { useState } from "react";

import type { REBelief, RETheme } from "./types";

type REBeliefExplorerProps = {
  beliefs: REBelief[];
  theme: RETheme;
};

export default function REBeliefExplorer({
  beliefs,
  theme,
}: REBeliefExplorerProps) {
  const [activeId, setActiveId] = useState(beliefs[0]?.id ?? "");

  if (beliefs.length === 0) {
    return null;
  }

  const activeBelief =
    beliefs.find((belief) => belief.id === activeId) ?? beliefs[0];

  return (
    <section className="px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* ===================================================
            SECTION INTRO
        =================================================== */}

        <div className="mb-12 max-w-3xl">
          <p
            className="text-xs font-black uppercase tracking-[0.3em]"
            style={{ color: theme.secondary }}
          >
            Explore beliefs &amp; worldviews
          </p>

          <h2 className="mt-4 text-4xl font-black leading-none sm:text-5xl">
            Different ways of
            <br />
            understanding the world.
          </h2>

          <p
            className="mt-6 max-w-2xl text-base leading-8 sm:text-lg"
            style={{ color: theme.mutedText }}
          >
            Belief is not the same for everyone. Choose a tradition or worldview
            to explore some of its ideas, practices and connections to people
            and place.
          </p>
        </div>

        {/* ===================================================
            EXPLORER
        =================================================== */}

        <div className="grid overflow-hidden border lg:grid-cols-[0.38fr_0.62fr]">
          {/* LEFT — CHOICES */}

          <div
            className="border-b lg:border-b-0 lg:border-r"
            style={{
              backgroundColor: theme.surfaceAlt,
              borderColor: theme.secondary,
            }}
          >
            <div className="p-5 sm:p-6">
              <p
                className="text-xs font-black uppercase tracking-[0.24em]"
                style={{ color: theme.secondary }}
              >
                Choose a story
              </p>
            </div>

            <div>
              {beliefs.map((belief, index) => {
                const isActive = belief.id === activeBelief.id;

                return (
                  <button
                    key={belief.id}
                    type="button"
                    onClick={() => setActiveId(belief.id)}
                    className="group flex w-full items-center gap-4 border-t px-5 py-5 text-left transition sm:px-6"
                    style={{
                      backgroundColor: isActive
                        ? theme.primary
                        : theme.surfaceAlt,
                      borderColor: theme.secondary,
                      color: isActive ? "#ffffff" : theme.text,
                    }}
                  >
                    <span
                      className="text-xs font-black"
                      style={{
                        color: isActive ? theme.accent : theme.secondary,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="flex-1">
                      <span className="block text-lg font-black leading-tight">
                        {belief.title}
                      </span>

                      {belief.subtitle && (
                        <span
                          className="mt-1 block text-xs leading-5"
                          style={{
                            color: isActive
                              ? "rgba(255,255,255,0.72)"
                              : theme.mutedText,
                          }}
                        >
                          {belief.subtitle}
                        </span>
                      )}
                    </span>

                    <span
                      className={`text-xl transition ${
                        isActive ? "translate-x-1" : "group-hover:translate-x-1"
                      }`}
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT — ACTIVE STORY */}

          <article
            className="relative min-h-[620px] overflow-hidden"
            style={{ backgroundColor: theme.surface }}
          >
            {activeBelief.image && (
              <>
                <Image
                  key={activeBelief.image}
                  src={activeBelief.image}
                  alt={activeBelief.imageAlt ?? activeBelief.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 62vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-black/15" />
              </>
            )}

            {!activeBelief.image && (
              <div
                className="absolute inset-0"
                style={{ backgroundColor: theme.primary }}
              />
            )}

            <div className="relative flex min-h-[620px] flex-col justify-end p-7 text-white sm:p-10 lg:p-12">
              <p
                className="text-xs font-black uppercase tracking-[0.28em]"
                style={{ color: theme.accent }}
              >
                Explore
              </p>

              <h3 className="mt-3 max-w-3xl text-4xl font-black leading-none sm:text-5xl">
                {activeBelief.title}
              </h3>

              {activeBelief.subtitle && (
                <p className="mt-3 text-sm font-bold text-white/65">
                  {activeBelief.subtitle}
                </p>
              )}

              <p className="mt-6 max-w-3xl text-base leading-8 text-white/85">
                {activeBelief.summary}
              </p>

              {/* KEY IDEAS */}

              {activeBelief.keyIdeas.length > 0 && (
                <div className="mt-8">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-white/55">
                    Key ideas
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {activeBelief.keyIdeas.map((idea) => (
                      <span
                        key={idea}
                        className="border border-white/25 bg-black/25 px-3 py-2 text-xs font-bold backdrop-blur-sm"
                      >
                        {idea}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* PLACES */}

              {activeBelief.places && activeBelief.places.length > 0 && (
                <div className="mt-6 flex flex-wrap items-center gap-2">
                  <span
                    className="text-xs font-black uppercase tracking-[0.2em]"
                    style={{ color: theme.accent }}
                  >
                    Explore in
                  </span>

                  {activeBelief.places.map((place) => (
                    <span
                      key={place}
                      className="text-xs font-bold text-white/75"
                    >
                      {place}
                    </span>
                  ))}
                </div>
              )}

              {/* IMPORTANT CONTEXT */}

              {activeBelief.importantNote && (
                <div className="mt-8 max-w-3xl border-l-4 border-white/40 bg-black/30 p-5 backdrop-blur-sm">
                  <p
                    className="text-xs font-black uppercase tracking-[0.2em]"
                    style={{ color: theme.accent }}
                  >
                    Important context
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/80">
                    {activeBelief.importantNote}
                  </p>
                </div>
              )}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
