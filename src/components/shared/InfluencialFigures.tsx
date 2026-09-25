"use client";

import { useState } from "react";

type InfluentialFigure = {
  name: string;
  role: string;
  image: string;
  description: string;

  // Optional proper educational clue.
  // Existing data does NOT need this.
  clue?: string;
};

type FigureDisplayStyle = {
  /**
   * "classic"
   * Existing shared appearance.
   *
   * "print"
   * Editorial mounted-print treatment.
   */
  treatment?: "classic" | "print";

  /**
   * Staggers alternating figures vertically.
   * Useful for more editorial / journey-style regions.
   */
  stagger?: boolean;

  /**
   * Controls what learners see before revealing.
   *
   * "role-and-description"
   * Preserves the existing East Asia behaviour.
   *
   * "clue-only"
   * Hides name, role and description until reveal.
   */
  revealMode?: "role-and-description" | "clue-only";

  /**
   * Optional image positioning for the whole section.
   */
  imagePosition?: "center" | "top";
};

type Props = {
  countryName: string;

  theme: {
    primary: string;
    secondary: string;
    accent: string;
  };

  figures: InfluentialFigure[];

  /**
   * Completely optional.
   *
   * If omitted, the component behaves like the
   * original shared East Asia component.
   */
  displayStyle?: FigureDisplayStyle;
};

export default function InfluentialFigures({
  countryName,
  theme,
  figures,
  displayStyle,
}: Props) {
  const [revealedFigures, setRevealedFigures] = useState<string[]>([]);

  /*
   * IMPORTANT:
   * These defaults preserve the original shared component.
   *
   * Existing regions do not need to pass anything.
   */
  const treatment = displayStyle?.treatment ?? "classic";
  const stagger = displayStyle?.stagger ?? false;
  const revealMode = displayStyle?.revealMode ?? "role-and-description";
  const imagePosition = displayStyle?.imagePosition ?? "center";

  const revealFigure = (name: string) => {
    setRevealedFigures((prev) =>
      prev.includes(name) ? prev : [...prev, name],
    );
  };

  const getClue = (figure: InfluentialFigure) => {
    /*
     * Proper clue from the country's dataset always wins.
     */
    if (figure.clue) {
      return figure.clue;
    }

    /*
     * Safe fallback for countries whose data has not
     * received dedicated clues yet.
     *
     * This deliberately avoids displaying the actual role.
     */
    const role = figure.role.toLowerCase();

    if (
      role.includes("football") ||
      role.includes("sport") ||
      role.includes("athlete") ||
      role.includes("driver")
    ) {
      return "I became famous through sport. Can you work out who I am?";
    }

    if (
      role.includes("music") ||
      role.includes("singer") ||
      role.includes("musician") ||
      role.includes("composer")
    ) {
      return "I became known through music. Can you work out who I am?";
    }

    if (
      role.includes("writer") ||
      role.includes("author") ||
      role.includes("poet")
    ) {
      return "My words became an important part of culture. Who am I?";
    }

    if (
      role.includes("artist") ||
      role.includes("painter") ||
      role.includes("architect")
    ) {
      return "I became known through creativity and the arts. Who am I?";
    }

    if (
      role.includes("activist") ||
      role.includes("leader") ||
      role.includes("president") ||
      role.includes("politic")
    ) {
      return "I became an important public figure in my country's story. Who am I?";
    }

    if (
      role.includes("scientist") ||
      role.includes("research") ||
      role.includes("invent")
    ) {
      return "My work helped develop knowledge and new ideas. Who am I?";
    }

    return `I became an influential figure in ${countryName}. Can you work out who I am?`;
  };

  if (treatment === "print") {
    return (
      <PrintFigures
        countryName={countryName}
        theme={theme}
        figures={figures}
        revealedFigures={revealedFigures}
        revealFigure={revealFigure}
        stagger={stagger}
        revealMode={revealMode}
        imagePosition={imagePosition}
        getClue={getClue}
      />
    );
  }

  /*
   * CLASSIC
   *
   * This is deliberately the original shared visual style.
   * East Asia will land here automatically.
   */
  return (
    <ClassicFigures
      countryName={countryName}
      theme={theme}
      figures={figures}
      revealedFigures={revealedFigures}
      revealFigure={revealFigure}
      revealMode={revealMode}
      imagePosition={imagePosition}
      getClue={getClue}
    />
  );
}

/* ============================================================
   CLASSIC

   Neutral/default treatment.
   Existing regions land here unless they explicitly opt into
   another treatment.
============================================================ */

function ClassicFigures({
  countryName,
  theme,
  figures,
  revealedFigures,
  revealFigure,
  revealMode,
  imagePosition,
  getClue,
}: {
  countryName: string;
  theme: Props["theme"];
  figures: InfluentialFigure[];
  revealedFigures: string[];
  revealFigure: (name: string) => void;
  revealMode: "role-and-description" | "clue-only";
  imagePosition: "center" | "top";
  getClue: (figure: InfluentialFigure) => string;
}) {
  return (
    <section className="space-y-10 py-20">
      <div className="space-y-4 text-center">
        <p
          className="text-xs font-semibold uppercase tracking-[0.3em]"
          style={{ color: theme.secondary }}
        >
          Influential Figures
        </p>

        <h2 className="text-4xl font-bold text-stone-900">
          Influential People of {countryName}
        </h2>

        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-stone-700">
          Explore influential people who helped shape the country through music,
          leadership, sport, activism, and culture.
        </p>
      </div>

      <div className="grid items-stretch gap-8 md:grid-cols-2">
        {figures.map((figure) => {
          const isRevealed = revealedFigures.includes(figure.name);

          return (
            <article
              key={figure.name}
              className="group h-full overflow-hidden rounded-[2rem] border border-white/60 bg-white/80 shadow-lg backdrop-blur transition-all duration-300 hover:shadow-2xl"
            >
              <div className="grid h-full lg:grid-cols-[0.95fr_1.05fr]">
                <div className="relative min-h-[320px] overflow-hidden">
                  <img
                    src={figure.image}
                    alt={figure.name}
                    className={`absolute inset-0 h-full w-full object-cover transition duration-500 ${
                      imagePosition === "top" ? "object-top" : "object-center"
                    } ${
                      isRevealed
                        ? "scale-105 blur-0 brightness-100"
                        : "scale-105 blur-2xl brightness-50"
                    }`}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />

                  {revealMode === "role-and-description" && (
                    <div className="absolute left-4 top-4">
                      <span
                        className="inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white shadow-md"
                        style={{ backgroundColor: theme.primary }}
                      >
                        {figure.role}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex min-h-[320px] flex-col justify-center p-6 sm:p-7">
                  <h3 className="min-h-[72px] text-3xl font-bold text-stone-900 transition-all duration-500">
                    {isRevealed ? figure.name : "???"}
                  </h3>

                  {isRevealed || revealMode === "role-and-description" ? (
                    <>
                      <p
                        className="mt-2 text-sm font-semibold uppercase tracking-[0.2em]"
                        style={{ color: theme.secondary }}
                      >
                        {figure.role}
                      </p>

                      <p className="mt-4 min-h-[96px] text-base leading-relaxed text-stone-700">
                        {figure.description}
                      </p>
                    </>
                  ) : (
                    <>
                      <p
                        className="mt-2 text-xs font-black uppercase tracking-[0.3em]"
                        style={{ color: theme.secondary }}
                      >
                        Clue
                      </p>

                      <p className="mt-4 min-h-[96px] text-base font-semibold leading-relaxed text-stone-700">
                        {getClue(figure)}
                      </p>
                    </>
                  )}

                  <button
                    type="button"
                    onClick={() => revealFigure(figure.name)}
                    className={`mt-6 w-fit rounded-full px-5 py-2 text-sm font-semibold text-white transition-all duration-300 ${
                      isRevealed
                        ? "pointer-events-none opacity-0"
                        : "opacity-100 hover:scale-105"
                    }`}
                    style={{ backgroundColor: theme.primary }}
                  >
                    Reveal Figure
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

/* ============================================================
   PRINT

   Same shared functionality.

   This appearance is only used when a region explicitly asks
   for treatment="print".

   Colours still come from that country's theme.
============================================================ */

function PrintFigures({
  countryName,
  theme,
  figures,
  revealedFigures,
  revealFigure,
  stagger,
  revealMode,
  imagePosition,
  getClue,
}: {
  countryName: string;
  theme: Props["theme"];
  figures: InfluentialFigure[];
  revealedFigures: string[];
  revealFigure: (name: string) => void;
  stagger: boolean;
  revealMode: "role-and-description" | "clue-only";
  imagePosition: "center" | "top";
  getClue: (figure: InfluentialFigure) => string;
}) {
  return (
    <section className="py-10">
      <div className="grid gap-x-12 gap-y-20 md:grid-cols-2">
        {figures.map((figure, index) => {
          const isRevealed = revealedFigures.includes(figure.name);
          const offset = stagger && index % 2 === 1;

          return (
            <article
              key={figure.name}
              className={`relative ${offset ? "md:translate-y-14" : ""}`}
            >
              <div className="mx-auto max-w-[420px]">
                {/* PRINT MOUNT */}
                <div className="relative">
                  <div
                    className={`absolute h-full w-full ${
                      index % 2 === 0
                        ? "-bottom-3 -right-3 rotate-[1.5deg]"
                        : "-left-3 -top-3 rotate-[-1.5deg]"
                    }`}
                    style={{
                      backgroundColor:
                        index % 2 === 0 ? theme.accent : theme.secondary,
                    }}
                  />

                  <div
                    className="relative border-[5px] bg-[#f7efd9] p-2"
                    style={{ borderColor: theme.primary }}
                  >
                    <div className="relative aspect-[4/5] overflow-hidden bg-stone-300">
                      <img
                        src={figure.image}
                        alt={
                          isRevealed
                            ? figure.name
                            : `Mystery influential person from ${countryName}`
                        }
                        className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                          imagePosition === "top"
                            ? "object-top"
                            : "object-center"
                        } ${
                          isRevealed
                            ? "scale-100 blur-0 brightness-100"
                            : "scale-[1.04] blur-xl brightness-[0.58]"
                        }`}
                      />

                      {!isRevealed && (
                        <>
                          <div className="absolute inset-0 bg-black/10" />

                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent px-5 pb-5 pt-20 text-white">
                            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/60">
                              Mystery person
                            </p>

                            <p className="mt-1 text-3xl font-black uppercase">
                              Who am I?
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <span
                    className={`absolute -top-7 z-10 text-7xl font-black leading-none opacity-20 ${
                      index % 2 === 0 ? "-left-3" : "-right-3"
                    }`}
                    style={{ color: theme.primary }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* COPY */}
                <div className="mt-9">
                  {!isRevealed && revealMode === "clue-only" ? (
                    <>
                      <p
                        className="text-[10px] font-black uppercase tracking-[0.4em]"
                        style={{ color: theme.secondary }}
                      >
                        Your clue
                      </p>

                      <p className="mt-3 text-xl font-bold leading-relaxed text-stone-800">
                        {getClue(figure)}
                      </p>

                      <button
                        type="button"
                        onClick={() => revealFigure(figure.name)}
                        className="mt-6 border-b-[3px] pb-2 text-xs font-black uppercase tracking-[0.22em] transition hover:translate-x-1"
                        style={{
                          color: theme.primary,
                          borderColor: theme.accent,
                        }}
                      >
                        Make your guess — reveal →
                      </button>
                    </>
                  ) : (
                    <>
                      <p
                        className="text-[10px] font-black uppercase tracking-[0.35em]"
                        style={{ color: theme.secondary }}
                      >
                        {figure.role}
                      </p>

                      <h3 className="mt-2 text-4xl font-black uppercase leading-[0.88] tracking-[-0.04em] text-stone-900 sm:text-5xl">
                        {isRevealed ? figure.name : "???"}
                      </h3>

                      <div
                        className="my-5 h-1 w-16"
                        style={{ backgroundColor: theme.accent }}
                      />

                      <p className="text-base leading-relaxed text-stone-700">
                        {figure.description}
                      </p>

                      {!isRevealed && (
                        <button
                          type="button"
                          onClick={() => revealFigure(figure.name)}
                          className="mt-6 border-b-[3px] pb-2 text-xs font-black uppercase tracking-[0.22em] transition hover:translate-x-1"
                          style={{
                            color: theme.primary,
                            borderColor: theme.accent,
                          }}
                        >
                          Reveal figure →
                        </button>
                      )}
                    </>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {stagger && <div className="hidden h-14 md:block" />}
    </section>
  );
}
