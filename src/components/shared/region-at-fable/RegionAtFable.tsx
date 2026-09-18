"use client";

import { useEffect, useMemo, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";

import { db } from "@/firebaseConfig";
import RegionAtFableSubmissionForm from "./RegionAtFableSubmissionForm";

type Rotation = 0 | 90 | 180 | 270;

type AtFableImage = {
  imageUrl: string;
  storagePath?: string;
  caption?: string;
  rotation?: Rotation;
};

type AtFableLink = {
  label: string;
  url: string;
};

type AtFableActivity = {
  id: string;
  region: string;
  regionName: string;
  country?: string;
  title: string;
  description?: string;
  images: AtFableImage[];
  links?: AtFableLink[];
  order?: number;
  status?: "pending" | "approved";
  source?: string;
};

type RegionAtFableProps = {
  region: string;
  regionName: string;
  countries: string[];
};

type SelectedImage = {
  image: AtFableImage;
  activityTitle: string;
};

const decorativeAngles = [-2.5, 1.8, -1.2, 2.4, -1.8, 1.1];

function isExternalLink(url: string) {
  return url.startsWith("http://") || url.startsWith("https://");
}

export default function RegionAtFable({
  region,
  regionName,
  countries,
}: RegionAtFableProps) {
  const [activities, setActivities] = useState<AtFableActivity[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedCountry, setSelectedCountry] = useState("All");
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);

  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(
    null,
  );

  useEffect(() => {
    async function loadActivities() {
      setLoading(true);

      try {
        const activitiesQuery = query(
          collection(db, "regionAtFable"),
          where("region", "==", region),
        );

        const snapshot = await getDocs(activitiesQuery);

        const data = snapshot.docs
          .map((document) => ({
            id: document.id,
            ...(document.data() as Omit<AtFableActivity, "id">),
          }))
          .filter((activity) => activity.status !== "pending")
          .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));

        setActivities(data);
      } catch (error) {
        console.error("Could not load At Fable activities:", error);
      } finally {
        setLoading(false);
      }
    }

    loadActivities();
  }, [region]);

  const filteredActivities = useMemo(() => {
    if (selectedCountry === "All") {
      return activities;
    }

    if (selectedCountry === "General") {
      return activities.filter(
        (activity) =>
          !activity.country || activity.country.includes("/ General"),
      );
    }

    return activities.filter(
      (activity) => activity.country === selectedCountry,
    );
  }, [activities, selectedCountry]);

  const filters = ["All", "General", ...countries];

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-[#f7ecd4]">
        {/* Decorative background */}
        <div
          aria-hidden="true"
          className="absolute -left-24 top-28 h-72 w-72 rounded-full bg-rose-300/30 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -right-20 top-[30rem] h-96 w-96 rounded-full bg-amber-300/30 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute bottom-20 left-1/3 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl"
        />

        {/* Hero */}
        <div className="relative overflow-hidden bg-[#b44036] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12">
          <div
            aria-hidden="true"
            className="absolute -right-12 -top-12 text-[13rem] leading-none opacity-[0.08]"
          >
            ✿
          </div>

          <div
            aria-hidden="true"
            className="absolute -bottom-16 left-10 text-[12rem] leading-none opacity-[0.07]"
          >
            東
          </div>

          <div className="relative mx-auto max-w-7xl">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-amber-200">
              Made • Played • Explored
            </p>

            <h1 className="mt-4 max-w-5xl text-5xl font-black leading-[0.95] sm:text-6xl lg:text-8xl">
              {regionName}
              <span className="block text-amber-300">at Fable.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
              A scrapbook of what we&apos;ve been learning, cooking, creating,
              playing and exploring together at Fable.
            </p>

            <div className="mt-9 flex flex-wrap gap-3 text-2xl">
              <span className="-rotate-3 rounded-2xl bg-white/15 px-4 py-3">
                📸
              </span>

              <span className="rotate-2 rounded-2xl bg-amber-300 px-4 py-3">
                🀄
              </span>

              <span className="-rotate-2 rounded-2xl bg-emerald-600 px-4 py-3">
                🥢
              </span>

              <span className="rotate-3 rounded-2xl bg-sky-500 px-4 py-3">
                🎨
              </span>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="relative z-10 border-b-4 border-[#e5d2aa] bg-[#fffaf0] px-5 py-7 shadow-sm sm:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.25em] text-slate-500">
              Explore by country
            </p>

            <div className="flex flex-wrap gap-2.5">
              {filters.map((filter) => {
                const active = selectedCountry === filter;

                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setSelectedCountry(filter)}
                    className={`rounded-full px-5 py-2.5 text-sm font-black transition ${
                      active
                        ? "scale-[1.03] bg-slate-900 text-white shadow-md"
                        : "border-2 border-slate-900/10 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-slate-900/30"
                    }`}
                  >
                    {filter === "All"
                      ? "🌏 All"
                      : filter === "General"
                        ? "✨ General"
                        : filter}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
          {loading ? (
            <div className="py-24 text-center">
              <div className="text-5xl">📷</div>

              <p className="mt-4 font-bold text-slate-600">
                Opening the scrapbook...
              </p>
            </div>
          ) : filteredActivities.length === 0 ? (
            <div className="mx-auto max-w-xl py-24 text-center">
              <div className="text-6xl">📌</div>

              <h2 className="mt-5 text-3xl font-black text-slate-900">
                Nothing pinned here yet.
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                When we add something from this part of {regionName}, it will
                appear here.
              </p>
            </div>
          ) : (
            <div className="space-y-24">
              {filteredActivities.map((activity, activityIndex) => (
                <article key={activity.id} className="relative">
                  {/* Heading */}
                  <div
                    className={`relative z-20 max-w-3xl ${
                      activityIndex % 2 === 0 ? "" : "ml-auto text-right"
                    }`}
                  >
                    <div
                      className={`inline-block ${
                        activityIndex % 2 === 0 ? "-rotate-1" : "rotate-1"
                      }`}
                    >
                      <span className="inline-flex rounded-full bg-amber-300 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-900 shadow-sm">
                        {activity.country || `${regionName} / General`}
                      </span>
                    </div>

                    <h2 className="mt-4 text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
                      {activity.title}
                    </h2>

                    {activity.description ? (
                      <p className="mt-4 text-lg leading-8 text-slate-600">
                        {activity.description}
                      </p>
                    ) : null}

                    {activity.links?.length ? (
                      <div
                        className={`mt-5 flex flex-wrap gap-3 ${
                          activityIndex % 2 === 0 ? "" : "justify-end"
                        }`}
                      >
                        {activity.links.map((link, index) => (
                          <a
                            key={`${link.url}-${index}`}
                            href={link.url}
                            target={
                              isExternalLink(link.url) ? "_blank" : undefined
                            }
                            rel={
                              isExternalLink(link.url)
                                ? "noreferrer"
                                : undefined
                            }
                            className="inline-flex items-center gap-2 rounded-full bg-[#b44036] px-5 py-2.5 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#94362e]"
                          >
                            {link.label}
                            <span aria-hidden="true">→</span>
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>

                  {/* Photo wall */}
                  <div className="relative mt-10 rounded-[2.5rem] border-[8px] border-[#d4a96a] bg-[#c89455] px-4 py-12 shadow-xl sm:px-8 lg:px-12">
                    {/* Noticeboard texture */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 opacity-[0.12]"
                      style={{
                        backgroundImage:
                          "radial-gradient(#3b2412 0.8px, transparent 0.8px)",
                        backgroundSize: "9px 9px",
                      }}
                    />

                    <div className="relative grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                      {activity.images?.map((image, imageIndex) => {
                        const decorativeAngle =
                          decorativeAngles[
                            imageIndex % decorativeAngles.length
                          ];

                        return (
                          <button
                            key={`${image.imageUrl}-${imageIndex}`}
                            type="button"
                            onClick={() =>
                              setSelectedImage({
                                image,
                                activityTitle: activity.title,
                              })
                            }
                            className="group relative mx-auto w-full max-w-sm text-left transition duration-300 hover:z-20 hover:scale-[1.04]"
                            style={{
                              transform: `rotate(${decorativeAngle}deg)`,
                            }}
                          >
                            {/* Tape */}
                            <div
                              aria-hidden="true"
                              className="absolute left-1/2 top-0 z-20 h-9 w-24 -translate-x-1/2 -translate-y-1/2 rotate-[-2deg] bg-amber-100/80 shadow-sm"
                            />

                            <div className="bg-[#fffdf7] p-3 pb-5 shadow-[0_12px_24px_rgba(52,35,18,0.3)] transition group-hover:shadow-[0_18px_35px_rgba(52,35,18,0.4)]">
                              <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-slate-100">
                                <img
                                  src={image.imageUrl}
                                  alt={image.caption || activity.title}
                                  className="max-h-full max-w-full object-contain"
                                  style={{
                                    transform: `rotate(${
                                      image.rotation ?? 0
                                    }deg)`,
                                  }}
                                />
                              </div>

                              {image.caption ? (
                                <p className="px-2 pt-4 text-center text-sm font-bold leading-6 text-slate-700">
                                  {image.caption}
                                </p>
                              ) : (
                                <p className="px-2 pt-4 text-center text-xs font-black uppercase tracking-[0.16em] text-slate-400">
                                  Click to enlarge
                                </p>
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Scrapbook divider */}
                  {activityIndex < filteredActivities.length - 1 ? (
                    <div
                      aria-hidden="true"
                      className="mx-auto mt-20 flex max-w-lg items-center gap-4 opacity-50"
                    >
                      <div className="h-px flex-1 bg-slate-500" />
                      <span className="rotate-6 text-2xl">✦</span>
                      <span className="-rotate-6 text-xl">✿</span>
                      <span className="rotate-3 text-2xl">✦</span>
                      <div className="h-px flex-1 bg-slate-500" />
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Submission invitation */}
        <div className="relative mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-12">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#263a31] px-6 py-10 text-white shadow-xl sm:px-10 sm:py-12">
            <div
              aria-hidden="true"
              className="absolute -right-10 -top-16 text-[10rem] leading-none opacity-[0.06]"
            >
              📸
            </div>

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-300">
                  Your turn
                </p>

                <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                  Got something to add?
                </h2>

                <p className="mt-3 leading-7 text-white/75">
                  Been cooking, creating, playing, researching or exploring{" "}
                  {regionName} at Fable? Add it to our scrapbook.
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setShowSubmissionForm((currentValue) => !currentValue)
                }
                className="inline-flex w-fit items-center gap-3 rounded-full bg-amber-300 px-6 py-4 font-black text-slate-900 shadow-md transition hover:-translate-y-0.5 hover:bg-amber-200"
              >
                <span>📸</span>

                {showSubmissionForm
                  ? "Close submission form"
                  : "Add something to the scrapbook"}

                <span aria-hidden="true">{showSubmissionForm ? "↑" : "→"}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Submission form */}
      {showSubmissionForm ? (
        <RegionAtFableSubmissionForm
          region={region}
          regionName={regionName}
          countries={countries}
        />
      ) : null}

      {/* Full image viewer */}
      {selectedImage ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl font-black text-slate-900 shadow-lg"
            aria-label="Close image"
          >
            ×
          </button>

          <div
            className="max-h-[92vh] max-w-6xl overflow-auto rounded-[2rem] bg-[#fffaf0] p-4 shadow-2xl sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex min-h-[300px] items-center justify-center overflow-hidden rounded-2xl bg-slate-100">
              <img
                src={selectedImage.image.imageUrl}
                alt={selectedImage.image.caption || selectedImage.activityTitle}
                className="max-h-[75vh] max-w-full object-contain"
                style={{
                  transform: `rotate(${selectedImage.image.rotation ?? 0}deg)`,
                }}
              />
            </div>

            <div className="px-2 pb-2 pt-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#b44036]">
                {selectedImage.activityTitle}
              </p>

              {selectedImage.image.caption ? (
                <p className="mt-2 text-lg font-bold text-slate-800">
                  {selectedImage.image.caption}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
