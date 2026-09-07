"use client";

import { useEffect, useMemo, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";

import { db } from "@/firebaseConfig";
import type { CultureGalleryTheme } from "./types";

type GalleryCreation = {
  id: string;
  creatorName: string;
  submissionType: "created" | "discovered";
  artworkName?: string;
  country?: string;
  description?: string;
  artistName?: string;
  source?: string;
  imageUrl: string;
};

type Props = {
  region: string;
  regionName: string;
  theme: CultureGalleryTheme;
};

export default function CultureGalleryCreations({
  region,
  regionName,
  theme,
}: Props) {
  const [creations, setCreations] = useState<GalleryCreation[]>([]);
  const [loading, setLoading] = useState(true);

  // Artwork currently open in the lightbox
  const [selectedArtwork, setSelectedArtwork] =
    useState<GalleryCreation | null>(null);

  // =========================================================
  // FIREBASE
  // =========================================================

  useEffect(() => {
    const creationsQuery = query(
      collection(db, "cultureGallerySubmissions"),
      where("region", "==", region),
      where("status", "==", "approved"),
    );

    const unsubscribe = onSnapshot(
      creationsQuery,
      (snapshot) => {
        const nextCreations = snapshot.docs.map((document) => {
          const data = document.data();

          return {
            id: document.id,
            creatorName: data.creatorName ?? "",
            submissionType:
              data.submissionType === "discovered" ? "discovered" : "created",

            artworkName: data.artworkName ?? "",
            country: data.country ?? "",
            description: data.description ?? "",

            artistName: data.artistName ?? "",
            source: data.source ?? "",

            imageUrl: data.imageUrl ?? "",
          } as GalleryCreation;
        });

        setCreations(nextCreations);
        setLoading(false);
      },
      (error) => {
        console.error("Culture Gallery error:", error);
        setLoading(false);
      },
    );

    return () => unsubscribe();
  }, [region]);

  // =========================================================
  // LIGHTBOX KEYBOARD + SCROLL
  // =========================================================

  useEffect(() => {
    if (!selectedArtwork) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedArtwork(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedArtwork]);

  // =========================================================
  // SPLIT GALLERIES
  // =========================================================

  const createdWork = useMemo(
    () => creations.filter((creation) => creation.submissionType === "created"),
    [creations],
  );

  const discoveredWork = useMemo(
    () =>
      creations.filter((creation) => creation.submissionType === "discovered"),
    [creations],
  );

  const colour = (index: number) => theme.palette[index % theme.palette.length];

  // =========================================================
  // LOADING
  // =========================================================

  if (loading) {
    return (
      <section
        className="px-6 py-24"
        style={{ backgroundColor: theme.background }}
      >
        <p className="text-center font-bold" style={{ color: theme.mutedText }}>
          Hanging the artwork...
        </p>
      </section>
    );
  }

  return (
    <>
      <section
        className="overflow-hidden px-5 py-24 sm:px-8 lg:py-32"
        style={{
          backgroundColor: theme.background,
          color: theme.text,
        }}
      >
        <div className="mx-auto max-w-7xl">
          {/* =====================================================
              GALLERY INTRO
          ===================================================== */}

          <div className="relative mb-24 max-w-4xl">
            <div
              className="absolute -left-8 -top-8 h-20 w-20 rounded-full opacity-20"
              style={{ backgroundColor: colour(1) }}
            />

            <p
              className="relative text-xs font-black uppercase tracking-[0.32em]"
              style={{ color: colour(0) }}
            >
              Our Culture Gallery
            </p>

            <h2 className="relative mt-5 text-5xl font-black leading-[0.95] sm:text-6xl lg:text-7xl">
              Two ways to
              <br />
              fill our walls.
            </h2>

            <p
              className="relative mt-7 max-w-2xl text-lg leading-8 sm:text-xl"
              style={{ color: theme.mutedText }}
            >
              Artwork inspired by {regionName}, alongside pieces, artists and
              creative ideas we have discovered along the way.
            </p>
          </div>

          {/* =====================================================
              MADE BY US
          ===================================================== */}

          <section className="relative">
            <div className="relative z-10 mb-14 sm:ml-8">
              <div className="flex items-center gap-4">
                <span
                  className="block h-3 w-16 -rotate-2"
                  style={{ backgroundColor: colour(4) }}
                />

                <p
                  className="text-xs font-black uppercase tracking-[0.3em]"
                  style={{ color: colour(4) }}
                >
                  Created work
                </p>
              </div>

              <h3 className="mt-4 text-4xl font-black sm:text-5xl lg:text-6xl">
                Made by Us
              </h3>

              <p
                className="mt-4 max-w-xl text-lg leading-7"
                style={{ color: theme.mutedText }}
              >
                Things we have drawn, painted, built, designed or created after
                exploring the art and culture of {regionName}.
              </p>
            </div>

            {createdWork.length === 0 ? (
              <div className="relative mb-32 min-h-[260px]">
                <div
                  className="absolute left-[4%] top-8 h-32 w-32 rotate-6 rounded-full opacity-15"
                  style={{ backgroundColor: colour(2) }}
                />

                <div
                  className="absolute right-[8%] top-24 h-24 w-44 -rotate-6 opacity-15"
                  style={{ backgroundColor: colour(1) }}
                />

                <div className="relative mx-auto max-w-xl py-20 text-center">
                  <p className="text-3xl font-black">This wall is waiting.</p>

                  <p className="mt-3" style={{ color: theme.mutedText }}>
                    The first approved creation will appear here.
                  </p>
                </div>
              </div>
            ) : (
              <div className="relative mb-36 min-h-[500px]">
                <div
                  className="absolute -left-16 top-[20%] h-48 w-48 rounded-full opacity-10"
                  style={{ backgroundColor: colour(2) }}
                />

                <div
                  className="absolute right-[5%] top-[5%] h-28 w-64 rotate-6 opacity-10"
                  style={{ backgroundColor: colour(1) }}
                />

                <div className="relative grid grid-cols-1 items-start gap-x-3 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-8">
                  {createdWork.map((creation, index) => {
                    const rotations = [
                      "-rotate-3",
                      "rotate-2",
                      "-rotate-1",
                      "rotate-3",
                      "-rotate-2",
                      "rotate-1",
                    ];

                    const offsets = [
                      "lg:mt-0",
                      "lg:mt-20",
                      "lg:-mt-8",
                      "lg:mt-12",
                      "lg:-mt-4",
                      "lg:mt-24",
                    ];

                    const rotation = rotations[index % rotations.length];

                    const offset = offsets[index % offsets.length];

                    return (
                      <article
                        key={creation.id}
                        className={`group relative ${rotation} ${offset} transform transition duration-300 hover:z-20 hover:rotate-0 hover:scale-[1.03]`}
                      >
                        {/* tape */}

                        <div
                          className="absolute left-1/2 top-0 z-10 h-8 w-20 -translate-x-1/2 -translate-y-1/2 rotate-2 opacity-75"
                          style={{
                            backgroundColor: `${colour(index + 1)}88`,
                          }}
                        />

                        <div
                          className="p-3 pb-5 shadow-xl"
                          style={{
                            backgroundColor: theme.surface,
                          }}
                        >
                          {/* CLICKABLE ARTWORK */}

                          <button
                            type="button"
                            onClick={() => setSelectedArtwork(creation)}
                            className="group/image relative block w-full cursor-zoom-in"
                            aria-label={`Enlarge ${
                              creation.artworkName || "artwork"
                            }`}
                          >
                            <img
                              src={creation.imageUrl}
                              alt={
                                creation.artworkName ||
                                "Culture Gallery artwork"
                              }
                              className="max-h-[520px] w-full object-contain"
                            />

                            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover/image:bg-black/10">
                              <span className="translate-y-2 rounded-full bg-white/95 px-4 py-2 text-sm font-black text-slate-900 opacity-0 shadow-lg transition group-hover/image:translate-y-0 group-hover/image:opacity-100">
                                ⤢ View artwork
                              </span>
                            </div>
                          </button>

                          <div className="px-2 pb-1 pt-4">
                            {creation.artworkName && (
                              <h4 className="text-xl font-black">
                                {creation.artworkName}
                              </h4>
                            )}

                            <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                              <span className="font-black">
                                Created by{" "}
                                {creation.creatorName || "one of our artists"}
                              </span>

                              {creation.country && (
                                <>
                                  <span
                                    style={{
                                      color: theme.mutedText,
                                    }}
                                  >
                                    •
                                  </span>

                                  <span
                                    style={{
                                      color: theme.mutedText,
                                    }}
                                  >
                                    {creation.country}
                                  </span>
                                </>
                              )}
                            </div>

                            {creation.description && (
                              <p
                                className="mt-3 text-sm leading-6"
                                style={{
                                  color: theme.mutedText,
                                }}
                              >
                                {creation.description}
                              </p>
                            )}
                          </div>
                        </div>

                        <div
                          className="absolute -bottom-4 -right-3 -z-10 h-16 w-16 rotate-12 rounded-full opacity-40"
                          style={{
                            backgroundColor: colour(index + 3),
                          }}
                        />
                      </article>
                    );
                  })}
                </div>
              </div>
            )}
          </section>

          {/* =====================================================
              INSPIRATION WE FOUND
          ===================================================== */}

          <section className="relative">
            <div className="mb-16 lg:ml-[12%]">
              <div className="flex items-center gap-4">
                <span
                  className="block h-3 w-16 rotate-2"
                  style={{ backgroundColor: colour(3) }}
                />

                <p
                  className="text-xs font-black uppercase tracking-[0.3em]"
                  style={{ color: colour(3) }}
                >
                  Discovered work
                </p>
              </div>

              <h3 className="mt-4 text-4xl font-black sm:text-5xl lg:text-6xl">
                Inspiration We Found
              </h3>

              <p
                className="mt-4 max-w-2xl text-lg leading-7"
                style={{ color: theme.mutedText }}
              >
                Art, craft and creative work from {regionName} that caught our
                eye. These pieces were discovered and shared with the gallery by
                our community.
              </p>
            </div>

            {discoveredWork.length === 0 ? (
              <div className="relative min-h-[280px] py-20 text-center">
                <div
                  className="absolute left-[15%] top-10 h-20 w-20 rotate-12 opacity-15"
                  style={{ backgroundColor: colour(3) }}
                />

                <p className="text-3xl font-black">Find something brilliant?</p>

                <p
                  className="mx-auto mt-3 max-w-lg"
                  style={{ color: theme.mutedText }}
                >
                  Art and creative inspiration discovered across {regionName}{" "}
                  will be hung here.
                </p>
              </div>
            ) : (
              <div className="relative pb-24 pt-16">
                {/* string */}

                <div
                  className="absolute left-[-5%] right-[-5%] top-7 h-[2px] origin-center rotate-[1deg] opacity-50"
                  style={{ backgroundColor: theme.text }}
                />

                <div
                  className="absolute left-[30%] right-[-8%] top-12 h-px -rotate-[1deg] opacity-25"
                  style={{ backgroundColor: theme.text }}
                />

                <div className="relative grid grid-cols-1 gap-x-7 gap-y-24 sm:grid-cols-2 lg:grid-cols-3">
                  {discoveredWork.map((creation, index) => {
                    const rotations = [
                      "rotate-2",
                      "-rotate-3",
                      "rotate-1",
                      "-rotate-2",
                      "rotate-3",
                      "-rotate-1",
                    ];

                    const hangingOffsets = [
                      "mt-0",
                      "sm:mt-10",
                      "lg:-mt-3",
                      "lg:mt-12",
                      "lg:-mt-4",
                      "lg:mt-8",
                    ];

                    const rotation = rotations[index % rotations.length];

                    const offset =
                      hangingOffsets[index % hangingOffsets.length];

                    return (
                      <article
                        key={creation.id}
                        className={`group relative ${rotation} ${offset} transform transition duration-300 hover:z-20 hover:rotate-0 hover:scale-[1.03]`}
                      >
                        {/* hanging thread */}

                        <div
                          className="absolute left-1/2 top-0 h-16 w-px -translate-x-1/2 -translate-y-16 opacity-50"
                          style={{
                            backgroundColor: theme.text,
                          }}
                        />

                        {/* peg */}

                        <div
                          className="absolute left-1/2 top-0 z-20 h-8 w-3 -translate-x-1/2 -translate-y-4 rounded-sm shadow-sm"
                          style={{
                            backgroundColor: colour(index + 1),
                          }}
                        />

                        <div
                          className="p-3 pb-6 shadow-xl"
                          style={{
                            backgroundColor: theme.surface,
                          }}
                        >
                          {/* CLICKABLE ARTWORK */}

                          <button
                            type="button"
                            onClick={() => setSelectedArtwork(creation)}
                            className="group/image relative block w-full cursor-zoom-in"
                            aria-label={`Enlarge ${
                              creation.artworkName || "artwork"
                            }`}
                          >
                            <img
                              src={creation.imageUrl}
                              alt={creation.artworkName || "Discovered artwork"}
                              className="max-h-[500px] w-full object-contain"
                            />

                            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover/image:bg-black/10">
                              <span className="translate-y-2 rounded-full bg-white/95 px-4 py-2 text-sm font-black text-slate-900 opacity-0 shadow-lg transition group-hover/image:translate-y-0 group-hover/image:opacity-100">
                                ⤢ View artwork
                              </span>
                            </div>
                          </button>

                          <div className="px-2 pt-4">
                            {creation.artworkName && (
                              <h4 className="text-xl font-black">
                                {creation.artworkName}
                              </h4>
                            )}

                            {creation.artistName && (
                              <p className="mt-1 font-bold">
                                By {creation.artistName}
                              </p>
                            )}

                            <div
                              className="mt-2 text-sm leading-6"
                              style={{
                                color: theme.mutedText,
                              }}
                            >
                              <p>
                                Inspiration found by{" "}
                                <strong style={{ color: theme.text }}>
                                  {creation.creatorName || "our community"}
                                </strong>
                              </p>

                              {creation.country && <p>{creation.country}</p>}

                              {creation.source && (
                                <p className="mt-1 break-words text-xs">
                                  Found at: {creation.source}
                                </p>
                              )}
                            </div>

                            {creation.description && (
                              <p
                                className="mt-3 border-t pt-3 text-sm italic leading-6"
                                style={{
                                  color: theme.mutedText,
                                  borderColor: `${theme.text}18`,
                                }}
                              >
                                “{creation.description}”
                              </p>
                            )}
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            )}
          </section>
        </div>
      </section>

      {/* =====================================================
          ARTWORK LIGHTBOX
      ===================================================== */}

      {selectedArtwork && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-3 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Artwork preview"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedArtwork(null);
            }
          }}
        >
          {/* CLOSE */}

          <button
            type="button"
            onClick={() => setSelectedArtwork(null)}
            className="fixed right-4 top-4 z-[110] flex h-12 w-12 items-center justify-center rounded-full bg-white text-3xl font-bold text-slate-900 shadow-xl transition hover:scale-105 sm:right-7 sm:top-7"
            aria-label="Close artwork"
          >
            ×
          </button>

          {/* LIGHTBOX CONTENT */}

          <div className="flex max-h-[94vh] w-full max-w-7xl flex-col overflow-hidden rounded-2xl bg-[#FFFDF8] shadow-2xl lg:flex-row">
            {/* LARGE IMAGE */}

            <div className="flex min-h-0 flex-1 items-center justify-center bg-black/95 p-3 sm:p-6">
              <img
                src={selectedArtwork.imageUrl}
                alt={selectedArtwork.artworkName || "Culture Gallery artwork"}
                className="max-h-[65vh] max-w-full object-contain lg:max-h-[88vh]"
              />
            </div>

            {/* DETAILS */}

            <aside className="max-h-[40vh] overflow-y-auto p-6 sm:p-8 lg:max-h-[94vh] lg:w-[360px] lg:flex-none">
              <p
                className="text-xs font-black uppercase tracking-[0.25em]"
                style={{
                  color:
                    selectedArtwork.submissionType === "created"
                      ? colour(4)
                      : colour(3),
                }}
              >
                {selectedArtwork.submissionType === "created"
                  ? "Made by Us"
                  : "Inspiration We Found"}
              </p>

              {selectedArtwork.artworkName && (
                <h3 className="mt-3 text-3xl font-black leading-tight text-slate-900">
                  {selectedArtwork.artworkName}
                </h3>
              )}

              {selectedArtwork.submissionType === "created" ? (
                <div className="mt-5">
                  <p className="text-sm font-black text-slate-900">
                    Created by{" "}
                    {selectedArtwork.creatorName || "one of our artists"}
                  </p>

                  {selectedArtwork.country && (
                    <p className="mt-1 text-sm text-slate-500">
                      {selectedArtwork.country}
                    </p>
                  )}
                </div>
              ) : (
                <div className="mt-5">
                  {selectedArtwork.artistName && (
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-slate-400">
                        Artist / creator
                      </p>

                      <p className="mt-1 text-lg font-black text-slate-900">
                        {selectedArtwork.artistName}
                      </p>
                    </div>
                  )}

                  <div className="mt-5">
                    <p className="text-xs font-black uppercase tracking-wider text-slate-400">
                      Shared by
                    </p>

                    <p className="mt-1 font-bold text-slate-900">
                      {selectedArtwork.creatorName || "Our community"}
                    </p>
                  </div>

                  {selectedArtwork.country && (
                    <p className="mt-4 text-sm font-bold text-slate-600">
                      {selectedArtwork.country}
                    </p>
                  )}

                  {selectedArtwork.source && (
                    <div className="mt-5">
                      <p className="text-xs font-black uppercase tracking-wider text-slate-400">
                        Found at
                      </p>

                      <p className="mt-1 break-words text-sm text-slate-600">
                        {selectedArtwork.source}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {selectedArtwork.description && (
                <div className="mt-6 border-t border-slate-200 pt-5">
                  <p className="text-xs font-black uppercase tracking-wider text-slate-400">
                    Thoughts
                  </p>

                  <p className="mt-2 leading-7 text-slate-700">
                    {selectedArtwork.description}
                  </p>
                </div>
              )}

              <p className="mt-8 hidden text-xs font-bold text-slate-400 sm:block">
                Press ESC to close
              </p>
            </aside>
          </div>
        </div>
      )}
    </>
  );
}
