"use client";

import { useState } from "react";
import Link from "next/link";

import CultureGallery from "./CultureGallery";
import CultureGalleryCreations from "./CultureGalleryCreations";
import CultureGallerySubmissionForm from "./CultureGallerySubmissionForm";

import type { CultureGalleryConfig, CultureGalleryTheme } from "./types";

type Props = {
  region: string;
  regionName: string;
  backHref: string;

  countries: string[];

  config: CultureGalleryConfig;
  theme: CultureGalleryTheme;
};

export default function CultureGalleryPage({
  region,
  regionName,
  backHref,
  countries,
  config,
  theme,
}: Props) {
  const [showSubmission, setShowSubmission] = useState(false);

  const colour = (index: number) => theme.palette[index % theme.palette.length];

  return (
    <main
      className="min-h-screen overflow-hidden"
      style={{
        backgroundColor: theme.background,
        color: theme.text,
      }}
    >
      {/* TOP NAV */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 pt-6 sm:px-8">
        <Link
          href={backHref}
          className="text-sm font-black uppercase tracking-[0.14em]"
          style={{ color: theme.mutedText }}
        >
          ← Back to {regionName}
        </Link>

        <div className="flex gap-2">
          {theme.palette.slice(0, 4).map((paletteColour) => (
            <span
              key={paletteColour}
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: paletteColour }}
            />
          ))}
        </div>
      </div>

      <div className="px-5 sm:px-8">
        <CultureGallery
          regionName={regionName}
          intro={config.intro}
          creativeCulture={config.creativeCulture}
          artRoom={config.artRoom}
          theme={theme}
        />
      </div>

      {/* =====================================================
          CLEAR INVITATION
      ===================================================== */}

      <section className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div
          className="pointer-events-none absolute left-[5%] top-10 h-28 w-52 -rotate-6 rounded-[55%_45%_60%_40%] opacity-20"
          style={{ backgroundColor: colour(1) }}
        />

        <div
          className="pointer-events-none absolute right-[8%] top-[42%] h-32 w-32 rounded-full opacity-15"
          style={{ backgroundColor: colour(2) }}
        />

        <div className="relative">
          <p
            className="text-xs font-black uppercase tracking-[0.4em]"
            style={{ color: colour(0) }}
          >
            Your turn
          </p>

          <h2
            className="mt-4 max-w-4xl text-4xl font-black leading-[0.95] sm:text-6xl lg:text-7xl"
            style={{ color: theme.text }}
          >
            ADD TO OUR
            <br />
            <span className="font-serif italic" style={{ color: colour(3) }}>
              Culture Gallery.
            </span>
          </h2>

          <p
            className="mt-8 max-w-3xl text-lg leading-8 sm:text-xl"
            style={{ color: theme.mutedText }}
          >
            Found a piece of art, craft or creative work from any {regionName}{" "}
            country that you think is interesting? Share it with our gallery.
          </p>

          <p
            className="mt-4 max-w-3xl text-lg leading-8 sm:text-xl"
            style={{ color: theme.mutedText }}
          >
            Or if the art and culture of {regionName} has inspired you to make
            something yourself, we would love to see that too.
          </p>

          <div className="mt-14 grid gap-10 sm:grid-cols-2">
            <div className="relative sm:pl-8">
              <div
                className="absolute -left-3 -top-4 h-20 w-20 rounded-full opacity-20"
                style={{ backgroundColor: colour(4) }}
              />

              <p className="relative text-4xl">🎨</p>

              <h3
                className="relative mt-3 text-2xl font-black"
                style={{ color: theme.text }}
              >
                MADE SOMETHING?
              </h3>

              <p
                className="relative mt-2 leading-7"
                style={{ color: theme.mutedText }}
              >
                Take a photo and show us what you created.
              </p>
            </div>

            <div className="relative sm:translate-y-10">
              <div
                className="absolute -left-6 top-8 h-10 w-40 -rotate-3 rounded-full opacity-20"
                style={{ backgroundColor: colour(1) }}
              />

              <p className="relative text-4xl">✨</p>

              <h3
                className="relative mt-3 text-2xl font-black"
                style={{ color: theme.text }}
              >
                FOUND SOMETHING?
              </h3>

              <p
                className="relative mt-2 leading-7"
                style={{ color: theme.mutedText }}
              >
                Share art, an artist, craft or creative idea you've discovered
                from {regionName}.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowSubmission(true)}
            className="mt-16 inline-flex rotate-[-1deg] items-center gap-4 rounded-full px-8 py-5 text-base font-black uppercase tracking-[0.16em] shadow-lg transition-transform hover:rotate-0 hover:scale-105"
            style={{
              backgroundColor: colour(0),
              color: "#ffffff",
            }}
          >
            <span className="text-2xl">＋</span>
            Add to the Gallery
          </button>
        </div>
      </section>

      {/* STUDENT / COMMUNITY GALLERY */}

      <CultureGalleryCreations
        region={region}
        regionName={regionName}
        theme={theme}
      />

      {/* =====================================================
          SUBMISSION OVERLAY
      ===================================================== */}

      {showSubmission && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/50 px-4 py-8 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Add to Culture Gallery"
        >
          <div
            className="relative mx-auto max-w-2xl overflow-hidden px-6 py-8 shadow-2xl sm:px-10 sm:py-10"
            style={{
              backgroundColor: theme.surface,
            }}
          >
            {/* COLOUR SPLASH */}
            <div
              className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full opacity-20"
              style={{ backgroundColor: colour(1) }}
            />

            <button
              type="button"
              onClick={() => setShowSubmission(false)}
              className="absolute right-5 top-4 z-10 text-3xl font-light"
              style={{ color: theme.text }}
              aria-label="Close"
            >
              ×
            </button>

            <div className="relative">
              <CultureGallerySubmissionForm
                region={region}
                regionName={regionName}
                countries={countries}
                theme={theme}
                onClose={() => setShowSubmission(false)}
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
