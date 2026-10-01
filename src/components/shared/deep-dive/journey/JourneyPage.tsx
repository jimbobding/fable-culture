"use client";

import Link from "next/link";
import JourneyPath from "./JourneyPath";
import JourneySoundStop from "./JourneySoundStop";
import JourneyStop from "./JourneyStop";

import type {
  JourneyAmbientStop,
  JourneyConfig,
  JourneyDecoration,
  JourneyMapFact,
  JourneySoundStop as JourneySoundStopType,
} from "./types";

type Props = {
  config: JourneyConfig;
};

/* =========================================================
   DECORATION SIZE
========================================================= */

function getDecorationSize(size: JourneyDecoration["size"]) {
  switch (size) {
    case "small":
      return "text-3xl sm:text-4xl";

    case "large":
      return "text-6xl sm:text-7xl lg:text-8xl";

    case "giant":
      return "text-7xl sm:text-8xl lg:text-9xl";

    case "medium":
    default:
      return "text-4xl sm:text-5xl lg:text-6xl";
  }
}

/* =========================================================
   MAP FACT SIZE
========================================================= */

function getMapFactSize(size: JourneyMapFact["size"]) {
  switch (size) {
    case "small":
      return {
        value: "text-4xl lg:text-5xl",
        label: "text-[0.62rem] lg:text-[0.68rem]",
        width: "w-40 lg:w-44",
      };

    case "large":
      return {
        value: "text-7xl lg:text-8xl",
        label: "text-xs lg:text-sm",
        width: "w-52 lg:w-60",
      };

    case "medium":
    default:
      return {
        value: "text-5xl lg:text-6xl",
        label: "text-[0.68rem] lg:text-xs",
        width: "w-44 lg:w-52",
      };
  }
}

/* =========================================================
   MAP DECORATIONS
========================================================= */

function JourneyDecorations({
  decorations,
}: {
  decorations?: JourneyDecoration[];
}) {
  if (!decorations?.length) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[5]"
      aria-hidden="true"
    >
      {decorations.map((decoration) => (
        <div
          key={decoration.id}
          className={`absolute select-none leading-none drop-shadow-sm ${getDecorationSize(
            decoration.size,
          )} ${decoration.hideOnMobile ? "hidden sm:block" : ""}`}
          style={{
            top: `${decoration.top}%`,
            left: `${decoration.left}%`,
            opacity: decoration.opacity ?? 1,
            transform: `translate(-50%, -50%) rotate(${
              decoration.rotation ?? 0
            }deg)`,
          }}
        >
          {decoration.content}
        </div>
      ))}
    </div>
  );
}

/* =========================================================
   MAP FACTS

   These are deliberately hidden on phones by default.

   Desktop has enough space for educational information to
   sit beside the winding route.

   On mobile, journey cards remain the focus unless a map
   fact explicitly opts into mobile display.
========================================================= */

function JourneyMapFacts({
  facts,
  theme,
}: {
  facts?: JourneyMapFact[];
  theme: JourneyConfig["theme"];
}) {
  if (!facts?.length) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-[6]">
      {facts.map((fact) => {
        const sizing = getMapFactSize(fact.size);

        const alignClass =
          fact.align === "right"
            ? "text-right"
            : fact.align === "center"
              ? "text-center"
              : "text-left";

        return (
          <div
            key={fact.id}
            className={`absolute ${sizing.width} ${alignClass} ${
              fact.hideOnMobile === false ? "" : "hidden sm:block"
            }`}
            style={{
              top: `${fact.top}%`,
              left: `${fact.left}%`,
              transform: `translate(-50%, -50%) rotate(${
                fact.rotation ?? 0
              }deg)`,
            }}
          >
            {fact.icon && (
              <div className="mb-2 text-3xl leading-none lg:text-4xl">
                {fact.icon}
              </div>
            )}

            <div
              className={`${sizing.value} font-black leading-[0.82] tracking-[-0.05em]`}
              style={{
                color: theme.primary,
              }}
            >
              {fact.value}
            </div>

            <div
              className={`mt-3 ${sizing.label} font-black uppercase leading-[1.35] tracking-[0.16em]`}
              style={{
                color: theme.dark,
              }}
            >
              {fact.label}
            </div>

            {fact.detail && (
              <p
                className="mt-3 text-xs font-semibold leading-5"
                style={{
                  color: theme.mutedText,
                }}
              >
                {fact.detail}
              </p>
            )}

            <div
              className="mt-3 h-1 w-12 rounded-full"
              style={{
                backgroundColor: theme.accent,
                marginLeft:
                  fact.align === "right"
                    ? "auto"
                    : fact.align === "center"
                      ? "auto"
                      : undefined,
                marginRight: fact.align === "center" ? "auto" : undefined,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default function JourneyPage({ config }: Props) {
  const { theme } = config;

  return (
    <main
      className="min-h-screen overflow-hidden"
      style={{
        backgroundColor: theme.background,
        color: theme.text,
      }}
    >
      {/* =====================================================
          HERO
      ====================================================== */}

      <header
        className="relative overflow-hidden px-5 pb-24 pt-8 sm:px-8 lg:px-12"
        style={{
          backgroundColor: theme.dark,
          color: "#ffffff",
        }}
      >
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-10"
          style={{ backgroundColor: theme.primary }}
        />

        <div
          className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full opacity-10"
          style={{ backgroundColor: theme.accent }}
        />

        <div className="relative mx-auto max-w-7xl">
          <nav className="flex items-center justify-between gap-6">
            <Link
              href={config.regionHref}
              className="text-xs font-black uppercase tracking-[0.25em] text-white/55 transition hover:text-white"
            >
              ← {config.regionName}
            </Link>

            <span className="text-xs font-black uppercase tracking-[0.28em] text-white/30">
              Fable Culture
            </span>
          </nav>

          <div className="mx-auto mt-20 max-w-5xl text-center">
            {config.eyebrow && (
              <p
                className="text-xs font-black uppercase tracking-[0.4em] sm:text-sm"
                style={{ color: theme.accent }}
              >
                {config.eyebrow}
              </p>
            )}

            <h1 className="mt-6 text-6xl font-black leading-[0.85] tracking-tight sm:text-7xl md:text-8xl lg:text-[8.5rem]">
              {config.title}

              {config.titleAccent && (
                <span
                  className="mt-3 block font-serif text-[0.58em] italic"
                  style={{ color: theme.accent }}
                >
                  {config.titleAccent}
                </span>
              )}
            </h1>

            <p className="mx-auto mt-9 max-w-3xl text-lg leading-8 text-white/65 sm:text-xl">
              {config.intro}
            </p>

            <a
              href="#journey-start"
              className="mt-10 inline-flex rotate-[-1deg] items-center gap-3 rounded-full px-6 py-4 text-xs font-black uppercase tracking-[0.2em] transition hover:rotate-0 hover:scale-105"
              style={{
                backgroundColor: theme.accent,
                color: theme.dark,
              }}
            >
              Start the journey ↓
            </a>
          </div>
        </div>

        <svg
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          className="pointer-events-none absolute bottom-0 left-0 h-24 w-full sm:h-32"
          aria-hidden="true"
        >
          <path
            d="M0 125 C170 60 310 145 470 95 C640 40 790 145 960 90 C1120 40 1270 105 1440 65 V180 H0Z"
            fill={theme.primary}
            opacity="0.55"
          />

          <path
            d="M0 150 C210 100 390 165 590 120 C790 75 990 165 1180 115 C1290 85 1370 95 1440 90 V180 H0Z"
            fill={theme.background}
          />
        </svg>
      </header>

      {/* =====================================================
          JOURNEY INTRO
      ====================================================== */}

      <section
        id="journey-start"
        className="relative scroll-mt-0 px-5 pb-20 pt-20 sm:px-8 sm:pb-28 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p
              className="text-xs font-black uppercase tracking-[0.35em]"
              style={{ color: theme.primary }}
            >
              Follow the route
            </p>

            <h2
              className="mt-4 text-4xl font-black leading-none sm:text-5xl md:text-6xl"
              style={{ color: theme.text }}
            >
              {config.startLabel || "The journey begins"}
            </h2>

            <p
              className="mx-auto mt-5 max-w-xl text-lg leading-8"
              style={{ color: theme.mutedText }}
            >
              Scroll to travel. Look around. Listen carefully. There are things
              to discover along the way.
            </p>

            <div
              className="mx-auto mt-8 flex h-14 w-14 items-center justify-center rounded-full text-2xl"
              style={{
                backgroundColor: theme.accent,
                color: theme.dark,
              }}
            >
              ↓
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAP / JOURNEY
      ====================================================== */}

      <section className="relative px-4 pb-20 sm:px-8 lg:px-12">
        {/* Map-paper texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          aria-hidden="true"
          style={{
            backgroundImage: `
              linear-gradient(${theme.dark} 1px, transparent 1px),
              linear-gradient(90deg, ${theme.dark} 1px, transparent 1px)
            `,
            backgroundSize: "42px 42px",
          }}
        />

        {/* Background land shapes */}
        <div
          className="pointer-events-none absolute left-[2%] top-[8%] hidden h-64 w-64 rounded-[45%] opacity-[0.06] sm:block"
          style={{ backgroundColor: theme.primary }}
        />

        <div
          className="pointer-events-none absolute right-[1%] top-[32%] hidden h-80 w-80 rounded-full opacity-[0.05] sm:block"
          style={{ backgroundColor: theme.secondary }}
        />

        <div
          className="pointer-events-none absolute left-[4%] top-[62%] hidden h-72 w-72 rounded-[40%] opacity-[0.06] sm:block"
          style={{ backgroundColor: theme.primary }}
        />

        <div
          className="pointer-events-none absolute right-[3%] top-[82%] hidden h-60 w-60 rounded-[45%] opacity-[0.06] sm:block"
          style={{ backgroundColor: theme.accent }}
        />

        <div className="relative mx-auto max-w-7xl">
          {/* =================================================
              DESKTOP / TABLET PATH

              River begins at the first journey encounter.
          ================================================= */}

          <div className="absolute inset-x-0 bottom-0 top-[260px] hidden sm:block">
            <JourneyPath theme={theme} visualStyle={config.visualStyle} />
          </div>

          {/* =================================================
              MOBILE PATH
          ================================================= */}

          <div
            className="pointer-events-none absolute bottom-0 left-1/2 top-0 w-16 -translate-x-1/2 sm:hidden"
            aria-hidden="true"
          >
            <div
              className="absolute bottom-0 left-1/2 top-0 w-12 -translate-x-1/2 rounded-full opacity-90"
              style={{
                backgroundColor: theme.path,
              }}
            />

            <div
              className="absolute bottom-0 left-1/2 top-0 w-5 -translate-x-1/2 rounded-full opacity-45"
              style={{
                backgroundColor: theme.pathLight,
              }}
            />
          </div>

          {/* =================================================
              DECORATIVE SCENERY
          ================================================= */}

          <JourneyDecorations decorations={config.decorations} />

          {/* =================================================
              EDUCATIONAL MAP FACTS
          ================================================= */}

          <JourneyMapFacts facts={config.mapFacts} theme={theme} />

          {/* =================================================
              INTERACTIVE STOPS
          ================================================= */}

          <div className="relative z-10 space-y-24 py-16 sm:space-y-0 sm:py-12">
            {config.stops.map((stop, index) => {
              if (stop.type === "sound" || stop.type === "ambient") {
                return (
                  <JourneySoundStop
                    key={stop.id}
                    stop={stop as JourneySoundStopType | JourneyAmbientStop}
                    theme={theme}
                    index={index}
                  />
                );
              }

              return (
                <JourneyStop
                  key={stop.id}
                  stop={stop}
                  theme={theme}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          DESTINATION
      ====================================================== */}

      <section
        className="relative overflow-hidden px-5 py-28 text-center sm:px-8 lg:px-12"
        style={{
          backgroundColor: theme.primary,
          color: "#ffffff",
        }}
      >
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border-[70px] opacity-[0.05]"
          style={{ borderColor: theme.accent }}
        />

        <div className="relative mx-auto max-w-4xl">
          <p
            className="text-xs font-black uppercase tracking-[0.4em]"
            style={{ color: theme.accent }}
          >
            Destination reached
          </p>

          <h2 className="mt-5 text-5xl font-black leading-none sm:text-6xl md:text-7xl">
            {config.endLabel || "You made it."}
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Look back at what you encountered along the route. Every stop was
            part of a much bigger story.
          </p>

          <Link
            href={config.regionHref}
            className="mt-10 inline-flex rounded-full border-2 border-white/30 px-6 py-4 text-xs font-black uppercase tracking-[0.2em] transition hover:border-white"
          >
            ← Back to {config.regionName}
          </Link>
        </div>
      </section>
    </main>
  );
}
