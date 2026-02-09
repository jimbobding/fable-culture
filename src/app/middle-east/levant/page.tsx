"use client";

import RegionContent from "@/components/region/RegionContent";
import { levantData } from "@/data/middleEast/levantData";

import { levantGallery } from "@/data/middleEast/levantGallery";

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
        {/* Top Mosaic */}
        <div className="absolute top-0 left-0 w-full h-12 bg-[url('/images/continents/middle-east/region-pictures/moziac.webp')] bg-repeat-x z-10"></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-400/20 via-orange-400/20 to-red-400/10 z-20"></div>

        {/* Center Text */}
        <div className="absolute inset-0 flex items-center justify-center px-6 z-30">
          <div className="max-w-3xl w-full bg-black/40 p-10 rounded-2xl border-4 border-yellow-400/60 text-center">
            <h1 className="text-6xl font-extrabold mb-4 text-yellow-200">
              The Levant
            </h1>
            <p className="text-xl text-yellow-100">
              A historic eastern Mediterranean region linking Africa, Asia, and
              Europe through trade, religion, and culture.
            </p>
          </div>
        </div>

        {/* Bottom Curve */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden z-20">
          <svg
            className="relative block w-full h-24"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C300,80 900,0 1200,60 L1200,120 L0,120 Z"
              fill="#FFD580"
            />
          </svg>
        </div>

        {/* Bottom Mosaic */}
        <div className="absolute bottom-0 left-0 w-full h-12 z-30 bg-[url('/images/continents/middle-east/region-pictures/moziac.webp')] bg-repeat-x"></div>
      </section>

      {/* ---------- Reusable Region Content ---------- */}
      <RegionContent data={levantData} gallery={levantGallery} />
    </main>
  );
}
