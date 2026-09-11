"use client";

import { useState } from "react";
import Link from "next/link";
import CultureKitchen from "./CultureKitchen";
import CultureKitchenSubmissionForm from "./CultureKitchenSubmissionForm";
import CultureKitchenGallery from "./CultureKitchenGallery";
import type { CultureKitchenDish, CultureKitchenTheme } from "./types";

type Props = {
  region: string;
  regionName: string;
  backHref: string;

  dishes: CultureKitchenDish[];
  countries: string[];

  theme: CultureKitchenTheme;

  title?: string;
  intro?: string;
};

export default function CultureKitchenPage({
  region,
  regionName,
  backHref,
  dishes,
  countries,
  theme,
  title,
  intro,
}: Props) {
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);

  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundColor: theme.background,
        color: theme.text,
      }}
    >
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-0 top-0 h-72 w-72 rounded-full blur-3xl"
          style={{
            backgroundColor: `${theme.primary}12`,
          }}
        />

        <div
          className="absolute right-[-8rem] top-[28rem] h-96 w-96 rounded-full blur-3xl"
          style={{
            backgroundColor: `${theme.tertiary}15`,
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(${theme.text} 1px, transparent 1px),
              linear-gradient(90deg, ${theme.text} 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* TOP BAR */}
      <div
        className="relative px-5 py-5 backdrop-blur sm:px-8 lg:px-12"
        style={{
          backgroundColor: `${theme.surfaceAlt}CC`,
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] transition"
            style={{
              color: theme.primary,
            }}
          >
            ← {regionName}
          </Link>

          <p
            className="hidden text-xs font-black uppercase tracking-[0.35em] sm:block"
            style={{
              color: theme.mutedText,
            }}
          >
            Culture Kitchen
          </p>
        </div>
      </div>

      <section className="relative px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl space-y-20">
          {/* MAIN KITCHEN */}
          <div
            className="rounded-[3rem_2rem_3.5rem_2.2rem] px-2 py-2 sm:px-3 sm:py-3"
            style={{
              backgroundColor: `${theme.surface}55`,
            }}
          >
            <CultureKitchen
              title={title ?? `${regionName} Culture Kitchen`}
              intro={
                intro ??
                `Explore dishes from across ${regionName}, discover the stories behind them and try something inspired by the region.`
              }
              dishes={dishes}
              theme={theme}
            />
          </div>

          {/* SHARE YOUR CREATION */}
          <section className="mx-auto max-w-5xl">
            <button
              type="button"
              onClick={() => setShowSubmissionForm((current) => !current)}
              className="group relative w-full overflow-hidden rounded-[2.7rem_1.8rem_3rem_2rem] px-6 py-7 text-left transition-all duration-300 hover:-translate-y-1 sm:px-8"
              style={{
                backgroundColor: theme.surface,
                boxShadow: theme.featureShadow,
              }}
            >
              {/* SOFT ACCENT */}
              <div
                className="absolute left-8 right-8 top-0 h-1.5 rounded-full"
                style={{
                  background: `linear-gradient(to right, ${theme.primary}, ${theme.accent}, ${theme.tertiary})`,
                }}
              />

              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-5">
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-3xl"
                    style={{
                      backgroundColor: theme.surfaceAlt,
                    }}
                  >
                    🍽️
                  </div>

                  <div>
                    <p
                      className="text-xs font-black uppercase tracking-[0.3em]"
                      style={{
                        color: theme.primary,
                      }}
                    >
                      Made something?
                    </p>

                    <h2
                      className="mt-2 text-2xl font-black sm:text-3xl"
                      style={{
                        color: theme.text,
                      }}
                    >
                      Share Your Inspired Creation
                    </h2>

                    <p
                      className="mt-2 max-w-2xl leading-relaxed"
                      style={{
                        color: theme.mutedText,
                      }}
                    >
                      Cooked something inspired by {regionName}? Share your
                      dish, the story behind it and a photo with the Culture
                      Kitchen.
                    </p>
                  </div>
                </div>

                <div
                  className="flex shrink-0 items-center gap-3 text-sm font-black uppercase tracking-[0.15em]"
                  style={{
                    color: theme.primary,
                  }}
                >
                  {showSubmissionForm ? "Close" : "Open form"}

                  <span
                    className={`text-xl transition-transform duration-300 ${
                      showSubmissionForm ? "rotate-180" : ""
                    }`}
                  >
                    ↓
                  </span>
                </div>
              </div>
            </button>

            {showSubmissionForm && (
              <div className="mt-6">
                <CultureKitchenSubmissionForm
                  region={region}
                  countries={countries}
                  theme={theme}
                />
              </div>
            )}
          </section>

          {/* APPROVED CREATIONS */}
          <div
            className="rounded-[3.2rem_2.1rem_2.8rem_2.4rem] px-2 py-2 sm:px-3 sm:py-3"
            style={{
              backgroundColor: `${theme.surface}45`,
            }}
          >
            <CultureKitchenGallery region={region} theme={theme} />
          </div>
        </div>
      </section>
    </main>
  );
}
