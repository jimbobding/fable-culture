"use client";

import Image from "next/image";
import { useState } from "react";

import type { REEnquiry as REEnquiryType, RETheme } from "./types";

type REEnquiryProps = {
  enquiries: REEnquiryType[];
  theme: RETheme;
};

export default function REEnquiry({ enquiries, theme }: REEnquiryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  if (enquiries.length === 0) {
    return null;
  }

  const active = enquiries[activeIndex];

  const changeEnquiry = (index: number) => {
    setActiveIndex(index);
    setRevealed(false);
  };

  return (
    <section
      className="px-6 py-20 sm:px-8 lg:px-10"
      style={{ backgroundColor: theme.surfaceAlt }}
    >
      <div className="mx-auto max-w-7xl">
        {/* ===================================================
            INTRO
        =================================================== */}

        <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p
              className="text-xs font-black uppercase tracking-[0.3em]"
              style={{ color: theme.secondary }}
            >
              Look → Think → Discover
            </p>

            <h2 className="mt-4 text-4xl font-black leading-none sm:text-5xl">
              What can you
              <br />
              discover first?
            </h2>
          </div>

          <p
            className="max-w-xl text-base leading-8 sm:text-lg"
            style={{ color: theme.mutedText }}
          >
            Start with the evidence. Look closely before reading the answer.
            What can you notice? What might it tell us about belief, identity or
            community?
          </p>
        </div>

        {/* ===================================================
            ENQUIRY SELECTOR
        =================================================== */}

        {enquiries.length > 1 && (
          <div className="mb-6 flex flex-wrap gap-2">
            {enquiries.map((enquiry, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={enquiry.id}
                  type="button"
                  onClick={() => changeEnquiry(index)}
                  className="px-4 py-3 text-xs font-black uppercase tracking-[0.12em] transition"
                  style={{
                    backgroundColor: isActive ? theme.primary : theme.surface,
                    color: isActive ? "#ffffff" : theme.text,
                    border: `1px solid ${theme.secondary}`,
                  }}
                >
                  Enquiry {String(index + 1).padStart(2, "0")}
                </button>
              );
            })}
          </div>
        )}

        {/* ===================================================
            MAIN EXPERIENCE
        =================================================== */}

        <div
          className="overflow-hidden border"
          style={{
            backgroundColor: theme.surface,
            borderColor: theme.secondary,
          }}
        >
          <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
            {/* IMAGE */}

            <div className="relative min-h-[420px] lg:min-h-[700px]">
              <Image
                src={active.image}
                alt={active.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
                <p
                  className="text-xs font-black uppercase tracking-[0.25em]"
                  style={{ color: theme.accent }}
                >
                  Look closely
                </p>

                <h3 className="mt-3 max-w-xl text-3xl font-black leading-tight sm:text-4xl">
                  {active.title}
                </h3>
              </div>
            </div>

            {/* ENQUIRY PANEL */}

            <div className="flex min-h-[600px] flex-col p-7 sm:p-10 lg:p-12">
              {/* LOOK */}

              <div>
                <div className="flex items-center gap-4">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-black text-white"
                    style={{ backgroundColor: theme.primary }}
                  >
                    1
                  </span>

                  <p
                    className="text-xs font-black uppercase tracking-[0.25em]"
                    style={{ color: theme.secondary }}
                  >
                    Look
                  </p>
                </div>

                <p className="mt-4 text-xl font-black leading-8">
                  {active.lookPrompt}
                </p>
              </div>

              {/* THINK */}

              <div
                className="mt-8 border-l-4 pl-6"
                style={{ borderColor: theme.accent }}
              >
                <div className="flex items-center gap-4">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-black text-white"
                    style={{ backgroundColor: theme.secondary }}
                  >
                    2
                  </span>

                  <p
                    className="text-xs font-black uppercase tracking-[0.25em]"
                    style={{ color: theme.secondary }}
                  >
                    Think
                  </p>
                </div>

                <p
                  className="mt-4 text-lg leading-8"
                  style={{ color: theme.mutedText }}
                >
                  {active.thinkPrompt}
                </p>
              </div>

              {/* DISCOVER */}

              <div className="mt-10">
                {!revealed ? (
                  <button
                    type="button"
                    onClick={() => setRevealed(true)}
                    className="group inline-flex items-center gap-5 px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:-translate-y-1"
                    style={{ backgroundColor: theme.primary }}
                  >
                    Discover the story
                    <span className="text-xl transition-transform group-hover:translate-x-2">
                      →
                    </span>
                  </button>
                ) : (
                  <div>
                    <div className="flex items-center gap-4">
                      <span
                        className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-black"
                        style={{
                          backgroundColor: theme.accent,
                          color: theme.text,
                        }}
                      >
                        3
                      </span>

                      <p
                        className="text-xs font-black uppercase tracking-[0.25em]"
                        style={{ color: theme.secondary }}
                      >
                        Discover
                      </p>
                    </div>

                    <h4 className="mt-5 text-2xl font-black">
                      {active.revealTitle}
                    </h4>

                    <p
                      className="mt-4 leading-8"
                      style={{ color: theme.mutedText }}
                    >
                      {active.revealText}
                    </p>

                    {active.bigQuestion && (
                      <div
                        className="mt-8 p-6"
                        style={{
                          backgroundColor: theme.primary,
                          color: "#ffffff",
                        }}
                      >
                        <p
                          className="text-xs font-black uppercase tracking-[0.25em]"
                          style={{ color: theme.accent }}
                        >
                          Big question
                        </p>

                        <p className="mt-3 text-xl font-black leading-7">
                          {active.bigQuestion}
                        </p>
                      </div>
                    )}

                    <button
                      type="button"
                      onClick={() => setRevealed(false)}
                      className="mt-6 text-xs font-black uppercase tracking-[0.18em] underline underline-offset-4"
                      style={{ color: theme.secondary }}
                    >
                      Hide the story
                    </button>
                  </div>
                )}
              </div>

              {/* PROGRESS */}

              <div className="mt-auto pt-10">
                <p
                  className="text-xs font-bold"
                  style={{ color: theme.mutedText }}
                >
                  {activeIndex + 1} of {enquiries.length} enquiries
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            NEXT / PREVIOUS
        =================================================== */}

        {enquiries.length > 1 && (
          <div className="mt-6 flex justify-between gap-4">
            <button
              type="button"
              disabled={activeIndex === 0}
              onClick={() => changeEnquiry(activeIndex - 1)}
              className="px-4 py-3 text-xs font-black uppercase tracking-[0.15em] disabled:cursor-not-allowed disabled:opacity-30"
            >
              ← Previous
            </button>

            <button
              type="button"
              disabled={activeIndex === enquiries.length - 1}
              onClick={() => changeEnquiry(activeIndex + 1)}
              className="px-4 py-3 text-xs font-black uppercase tracking-[0.15em] disabled:cursor-not-allowed disabled:opacity-30"
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
