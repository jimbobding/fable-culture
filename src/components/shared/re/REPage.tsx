"use client";

import Image from "next/image";
import Link from "next/link";

import type { REConfig } from "./types";
import REBeliefExplorer from "./REBeliefExplorer";
import REEnquiry from "./REEnquiry";

type REPageProps = {
  config: REConfig;
};

export default function REPage({ config }: REPageProps) {
  const { hero, theme } = config;

  return (
    <main
      className="min-h-screen"
      style={{
        backgroundColor: theme.background,
        color: theme.text,
      }}
    >
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[78vh] overflow-hidden">
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Dark image overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Decorative colour wash */}
        <div
          className="absolute inset-y-0 left-0 w-full opacity-70 md:w-3/4"
          style={{
            background: `linear-gradient(to right, ${theme.primary}, transparent)`,
          }}
        />

        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-between px-6 py-8 sm:px-8 lg:px-10">
          {/* TOP NAV */}
          <div>
            <Link
              href={config.backHref}
              className="inline-flex items-center gap-2 border border-white/30 bg-black/20 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white backdrop-blur-sm transition hover:bg-white hover:text-black"
            >
              <span aria-hidden="true">←</span>
              Back to {config.regionName}
            </Link>
          </div>

          {/* HERO CONTENT */}
          <div className="max-w-4xl pb-8 pt-24">
            {hero.eyebrow && (
              <p
                className="mb-5 text-xs font-black uppercase tracking-[0.35em]"
                style={{ color: theme.accent }}
              >
                {hero.eyebrow}
              </p>
            )}

            <h1 className="max-w-4xl text-6xl font-black uppercase leading-[0.82] tracking-[-0.06em] text-white sm:text-7xl md:text-8xl lg:text-[7rem]">
              {hero.title}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
              {hero.intro}
            </p>

            {/* MAIN ENQUIRY */}
            <div className="mt-10 max-w-3xl border-l-4 border-white/70 bg-black/25 p-6 backdrop-blur-sm sm:p-8">
              <p
                className="text-xs font-black uppercase tracking-[0.28em]"
                style={{ color: theme.accent }}
              >
                Our big enquiry
              </p>

              <p className="mt-3 text-2xl font-black leading-tight text-white sm:text-3xl">
                {hero.enquiryQuestion}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          JOURNEY INTRO
      ===================================================== */}

      <section className="px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p
                className="text-xs font-black uppercase tracking-[0.3em]"
                style={{ color: theme.secondary }}
              >
                RE · {config.regionName}
              </p>

              <h2 className="mt-4 text-4xl font-black leading-none sm:text-5xl">
                Explore belief,
                <br />
                identity &amp; meaning.
              </h2>
            </div>

            <div>
              <p
                className="max-w-2xl text-base leading-8 sm:text-lg"
                style={{ color: theme.mutedText }}
              >
                Look closely, ask questions and discover how different people
                understand the world. Explore beliefs, traditions, sacred places
                and everyday practices — and think about the questions people
                have asked across generations.
              </p>
            </div>
          </div>

          {/* JOURNEY MARKERS */}
          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden border md:grid-cols-4">
            {[
              ["01", "Look"],
              ["02", "Think"],
              ["03", "Discover"],
              ["04", "Compare"],
            ].map(([number, label]) => (
              <div
                key={number}
                className="p-6 sm:p-8"
                style={{ backgroundColor: theme.surface }}
              >
                <p
                  className="text-xs font-black"
                  style={{ color: theme.accent }}
                >
                  {number}
                </p>

                <p className="mt-2 text-xl font-black">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          COMPONENTS WILL SLOT IN HERE
      ===================================================== */}
      <REBeliefExplorer beliefs={config.beliefs} theme={theme} />
      <REEnquiry enquiries={config.enquiries} theme={theme} />
    </main>
  );
}
