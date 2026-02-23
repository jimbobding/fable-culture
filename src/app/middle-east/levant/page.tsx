"use client";

import RegionContent from "@/components/region/RegionContent";
import { levantData } from "@/data/middleEast/levantData";
import { levantGallery } from "@/data/middleEast/levantGallery";

import { levantTimeline } from "@/data/middleEast/levantTimeline";
import { levantTheme } from "@/styles/regionThemes";
const theme = levantTheme;
import Link from "next/link";

export default function LevantPage() {
  return (
    <main className="space-y-16">
      {/* ---------- HERO WITH MOSAIC ---------- */}
      <section
        className="relative px-8 text-white overflow-hidden min-h-[650px] md:min-h-[750px] lg:min-h-[850px]"
        style={{
          backgroundImage:
            "url('/images/continents/middle-east/region-headers/petra.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* TOP MOSAIC */}
        <div className="absolute top-0 left-0 w-full h-12 bg-[url('/images/continents/middle-east/region-pictures/moziac.webp')] bg-repeat-x z-10"></div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-400/20 via-orange-400/20 to-red-400/10 z-20"></div>

        {/* CENTER TEXT */}
        <div className="absolute inset-0 flex items-center justify-center px-6 z-30">
          <div className="max-w-3xl w-full bg-black/40 p-10 rounded-2xl border-4 border-yellow-400/60 text-center">
            <h1 className="text-6xl font-extrabold mb-4 text-yellow-200 drop-shadow-md">
              The Levant
            </h1>
            <p className="text-xl text-yellow-100 drop-shadow-sm">
              A historic eastern Mediterranean region linking Africa, Asia, and
              Europe through trade, religion, and culture.
            </p>
          </div>
        </div>

        {/* BOTTOM CURVE */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden z-20">
          <svg className="relative block w-full h-24" viewBox="0 0 1200 120">
            <path
              d="M0,0 C300,80 900,0 1200,60 L1200,120 L0,120 Z"
              fill="#FFD580"
            />
          </svg>
        </div>

        {/* BOTTOM MOSAIC */}
        <div className="absolute bottom-0 left-0 w-full h-12 z-30 bg-[url('/images/continents/middle-east/region-pictures/moziac.webp')] bg-repeat-x"></div>
      </section>

      {/* ---------- LEVANT INTRO ---------- */}
      <section className="px-8 py-12 bg-gradient-to-r from-yellow-200 via-orange-300 to-red-200 rounded-2xl text-center shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-red-900 drop-shadow-md">
          Welcome to the Levant
        </h2>
        <p className="text-lg text-red-900 drop-shadow-sm max-w-3xl mx-auto leading-relaxed">
          The Levant is one of the world's oldest continuously inhabited
          regions, stretching along the eastern Mediterranean. From the rise of
          ancient civilizations like the Canaanites and Phoenicians, through
          pivotal moments in trade, culture, and religion, it has shaped the
          course of history. Today, it encompasses Jordan, Lebanon, Syria,
          Israel, and Palestine, blending ancient traditions with vibrant modern
          cultures.
        </p>
      </section>

      {/* ---------- REUSABLE REGION CONTENT ---------- */}

      <RegionContent
        data={levantData}
        gallery={levantGallery}
        continent="Middle East"
        regionKey="levant"
        timeline={levantTimeline}
        theme={levantTheme}
      />
      {/* Back to Map Button */}
      <div className="flex justify-center mt-10">
        <Link
          href="/middle-east"
          className={`
      inline-flex items-center gap-2
      px-5 py-2.5
      rounded-lg border
      font-medium
      transition-all duration-300
      hover:shadow-md hover:scale-[1.02]
      mb-10
      ${theme.cardBg}
      ${theme.cardBorder}
      ${theme.text}
    `}
        >
          ← Back to Middle East Map
        </Link>
      </div>
    </main>
  );
}
