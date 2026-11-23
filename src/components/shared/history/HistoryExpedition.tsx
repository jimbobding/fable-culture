"use client";

import { useEffect, useRef, useState } from "react";
import type { HistoryExpedition as HistoryData } from "@/data/history/types";

import HistoryWayfindingChallenge from "./chapter-1-voyaging/HistoryWayfindingChallenge";
import HistoryDetective from "./chapter-2-pacific-worlds/HistoryDetective";
import HistoryVoyageMap from "./HistoryVoyageMap";
import HistorySources from "./HistorySources";
import HistoryEncounterScene from "./chapter-3-encounters/HistoryEncounterScene";
import HistoryResistanceArchive from "./chapter-4-resistance/HistoryResistanceArchive";
import HistoryLivingGallery from "./chapter-5-living-history/HistoryLivingGallery";

import { oceaniaDetective } from "@/data/history/oceaniaDetective";
import { oceaniaEncounter } from "@/data/history/oceaniaEncounter";
import { oceaniaResistanceCases } from "@/data/history/oceaniaResistance";

type Props = {
  expedition: HistoryData;
};

export default function HistoryExpedition({ expedition }: Props) {
  const [selected, setSelected] = useState(0);
  const [sailing, setSailing] = useState(false);

  const sailingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const chapter = expedition.chapters[selected];

  useEffect(() => {
    return () => {
      if (sailingTimer.current !== null) {
        clearTimeout(sailingTimer.current);
      }
    };
  }, []);

  function sailToChapter(index: number) {
    if (sailing || index < 0 || index >= expedition.chapters.length) {
      return;
    }

    if (sailingTimer.current !== null) {
      clearTimeout(sailingTimer.current);
    }

    setSailing(true);
    setSelected(index);

    // Show the voyage map while the boat travels.
    document.getElementById("expeditions")?.scrollIntoView({
      behavior: "smooth",
    });

    sailingTimer.current = setTimeout(() => {
      setSailing(false);

      document.getElementById("chapter")?.scrollIntoView({
        behavior: "smooth",
      });

      sailingTimer.current = null;
    }, 1600);
  }

  const theme = {
    "--history-primary": expedition.theme.primary,
    "--history-secondary": expedition.theme.secondary,
    "--history-accent": expedition.theme.accent,
    "--history-background": expedition.theme.background,
    "--history-surface": expedition.theme.surface,
    "--history-text": expedition.theme.text,
  } as React.CSSProperties;

  return (
    <main
      style={theme}
      className="min-h-screen bg-[var(--history-background)] text-[var(--history-text)]"
    >
      <header className="relative flex min-h-[85vh] items-center overflow-hidden bg-[var(--history-primary)] px-6 py-24 text-white">
        {expedition.heroImage && (
          <img
            src={expedition.heroImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-45"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl">
          <a
            href={`/${expedition.region}#geography`}
            className="mb-16 inline-block rounded-full border border-white/50 px-5 py-3 text-sm font-bold transition hover:bg-white/15"
          >
            ← Back to {expedition.region.replaceAll("-", " ")}
          </a>

          <p className="text-sm font-black uppercase tracking-[.35em] text-[var(--history-accent)]">
            Fable Culture / History Expedition
          </p>

          <h1 className="mt-6 max-w-5xl text-6xl font-black uppercase leading-[.9] tracking-tight sm:text-8xl">
            {expedition.title}
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/90">
            {expedition.introduction}
          </p>

          <a
            href="#expeditions"
            className="mt-10 inline-flex rounded-full bg-[var(--history-accent)] px-8 py-4 font-black text-[#203038] transition hover:scale-105"
          >
            Begin your expedition ↓
          </a>
        </div>
      </header>

      <section id="expeditions" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-widest text-[var(--history-secondary)]">
            Choose your destination
          </p>

          <h2 className="mt-4 text-5xl font-black sm:text-7xl">
            Travel through time.
          </h2>

          <p className="mt-5 max-w-2xl text-lg">
            Follow the voyage, investigate historical evidence and complete each
            expedition.
          </p>

          <div className="mt-14">
            <HistoryVoyageMap
              chapters={expedition.chapters}
              selected={selected}
              onSelect={sailToChapter}
            />
          </div>

          {sailing && (
            <p
              role="status"
              className="mt-6 text-center text-lg font-bold text-[var(--history-secondary)]"
            >
              ⛵ Sailing to {chapter?.title}...
            </p>
          )}
        </div>
      </section>

      {chapter && (
        <section
          id="chapter"
          className="scroll-mt-8 bg-[var(--history-surface)] px-6 py-24"
        >
          <div className="mx-auto max-w-5xl">
            <p className="font-black uppercase tracking-widest text-[var(--history-secondary)]">
              Expedition {String(selected + 1).padStart(2, "0")}
            </p>

            <h2 className="mt-5 text-5xl font-black sm:text-7xl">
              {chapter.title}
            </h2>

            <p className="mt-6 max-w-3xl text-xl leading-relaxed">
              {chapter.introduction ||
                "This expedition is being researched and prepared."}
            </p>

            {chapter.facts.length > 0 && (
              <div className="mt-12 grid gap-5 md:grid-cols-2">
                {chapter.facts.map((fact, index) => (
                  <article
                    key={fact.id}
                    className="rounded-3xl border border-black/10 bg-white/80 p-7 shadow-md"
                  >
                    <span className="text-sm font-black text-[var(--history-secondary)]">
                      DISCOVERY {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="mt-4 text-lg leading-relaxed">{fact.text}</p>

                    {fact.context && (
                      <p className="mt-4 text-sm italic opacity-75">
                        {fact.context}
                      </p>
                    )}

                    <HistorySources
                      sources={expedition.sources}
                      sourceIds={fact.sourceIds}
                    />
                  </article>
                ))}
              </div>
            )}

            {/* CHAPTER 1 — THE GREAT VOYAGE */}
            {chapter.id === "great-voyage" && (
              <HistoryWayfindingChallenge
                key={chapter.id}
                onComplete={() => sailToChapter(selected + 1)}
              />
            )}

            {/* CHAPTER 2 — PACIFIC WORLDS */}
            {chapter.id === "pacific-worlds" && (
              <HistoryDetective
                config={oceaniaDetective}
                key={chapter.id}
                onComplete={() => sailToChapter(selected + 1)}
              />
            )}

            {/* CHAPTER 3 — WHEN WORLDS MET */}
            {chapter.id === "worlds-met" && (
              <HistoryEncounterScene
                key={chapter.id}
                title={oceaniaEncounter.title}
                introduction={oceaniaEncounter.introduction}
                evidence={oceaniaEncounter.evidence}
                perspectiveMatches={oceaniaEncounter.perspectiveMatches}
                sceneImage={oceaniaEncounter.sceneImage}
                sceneAlt={oceaniaEncounter.sceneAlt}
                onComplete={() => sailToChapter(selected + 1)}
              />
            )}

            {/* CHAPTER 4 — PACIFIC RESISTANCE ARCHIVES */}
            {chapter.id === "resistance-change" && (
              <HistoryResistanceArchive
                key={chapter.id}
                cases={oceaniaResistanceCases}
                onComplete={() => sailToChapter(selected + 1)}
              />
            )}

            {/* CHAPTER 5 — LIVING HISTORY */}
            {chapter.id === "living-history" && (
              <HistoryLivingGallery key={chapter.id} />
            )}

            {/* CHAPTERS WITHOUT AN INTERACTIVE ACTIVITY */}
            {chapter.challenges.length === 0 &&
              chapter.id !== "great-voyage" &&
              chapter.id !== "pacific-worlds" &&
              chapter.id !== "worlds-met" &&
              chapter.id !== "resistance-change" &&
              chapter.id !== "living-history" && (
                <div className="mt-12 rounded-2xl border border-[#b6a17d] bg-white/70 p-7">
                  <p className="text-lg font-bold">
                    More discoveries are coming to this expedition.
                  </p>

                  <p className="mt-3">
                    We're preparing the historical evidence and interactive
                    activities for this chapter.
                  </p>
                </div>
              )}
          </div>
        </section>
      )}
    </main>
  );
}
