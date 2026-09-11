"use client";

import Link from "next/link";
import DeepDiveSection from "./DeepDiveSection";
import DeepDiveSources from "./DeepDiveSources";
import type { DeepDiveConfig } from "./types";

type Props = {
  config: DeepDiveConfig;
};

export default function DeepDivePage({ config }: Props) {
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
        className="relative flex min-h-[92vh] items-center overflow-hidden px-5 py-20 text-white sm:px-8 lg:px-12"
        style={{ backgroundColor: theme.dark }}
      >
        {/* BACKGROUND GLOW */}
        <div
          className="absolute -right-32 -top-32 h-[34rem] w-[34rem] rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: theme.primary }}
        />

        <div
          className="absolute -bottom-48 left-[5%] h-[30rem] w-[30rem] rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: theme.accent }}
        />

        {/* GIANT DECORATIVE SYMBOL */}
        {config.heroSymbol && (
          <div className="pointer-events-none absolute right-[6%] top-1/2 hidden -translate-y-1/2 text-[18rem] opacity-[0.05] lg:block">
            {config.heroSymbol}
          </div>
        )}

        {/* LANDSCAPE */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 opacity-40">
          <svg viewBox="0 0 1440 300" className="block w-full">
            <path
              d="M0 195 C190 145 350 230 540 185 C730 135 870 215 1040 165 C1200 120 1320 165 1440 140 V300 H0Z"
              fill={theme.secondary}
            />

            <path
              d="M0 245 C240 200 390 275 620 225 C850 175 1070 260 1440 195 V300 H0Z"
              fill={theme.primary}
            />
          </svg>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <nav className="flex items-center justify-between gap-6">
            <Link
              href={config.regionHref}
              className="text-xs font-black uppercase tracking-[0.28em] text-white/50 transition hover:text-white"
            >
              ← {config.regionName}
            </Link>

            <span className="text-xs font-black uppercase tracking-[0.3em] text-white/30">
              Fable Culture
            </span>
          </nav>

          <div className="mt-24 max-w-5xl">
            <p
              className="text-sm font-black uppercase tracking-[0.45em]"
              style={{ color: theme.accent }}
            >
              {config.heroEyebrow || "Fable Culture Deep Dive"}
            </p>

            <h1 className="mt-7 text-6xl font-black leading-[0.84] tracking-tight sm:text-7xl md:text-8xl lg:text-[9rem]">
              {config.title}

              {config.titleAccent && (
                <span
                  className="block font-serif italic"
                  style={{ color: theme.accent }}
                >
                  {config.titleAccent}
                </span>
              )}
            </h1>

            <p className="mt-10 max-w-3xl text-xl leading-relaxed text-white/65 md:text-2xl">
              {config.strapline}
            </p>

            <a
              href="#deep-dive-start"
              className="mt-14 inline-flex items-center gap-4 border-b pb-3 text-xs font-black uppercase tracking-[0.3em]"
              style={{
                borderColor: theme.accent,
                color: theme.accent,
              }}
            >
              Begin the deep dive ↓
            </a>
          </div>
        </div>
      </header>

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div id="deep-dive-start" className="scroll-mt-8">
        {config.sections.map((section, index) => (
          <DeepDiveSection
            key={section.id}
            section={section}
            theme={theme}
            sources={config.sources}
            index={index}
          />
        ))}
      </div>

      {/* =====================================================
          SOURCES
      ====================================================== */}
      <DeepDiveSources sources={config.sources} theme={theme} />

      {/* =====================================================
          FOOTER
      ====================================================== */}
      <footer
        className="px-5 py-16 text-white sm:px-8 lg:px-12"
        style={{ backgroundColor: theme.dark }}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p
              className="text-xs font-black uppercase tracking-[0.35em]"
              style={{ color: theme.accent }}
            >
              Fable Culture • Deep Dive
            </p>

            <p className="mt-3 max-w-xl text-3xl font-black">
              Keep questioning. Keep exploring.
            </p>
          </div>

          <Link
            href={config.regionHref}
            className="w-fit border-b border-white/40 pb-2 text-sm font-black uppercase tracking-[0.2em] transition hover:border-white"
          >
            ← Back to {config.regionName}
          </Link>
        </div>
      </footer>
    </main>
  );
}
