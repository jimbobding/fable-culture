"use client";

import RegionContent from "@/components/region/RegionContent";
import { arabianData } from "@/data/middleEast/arabianData";
import { arabianGallery } from "@/data/middleEast/arabianGallery";

export default function ArabianPage() {
  return (
    <main className="space-y-16">
      {/* ---------- HERO ---------- */}
      <section
        className="relative px-8 text-white overflow-hidden min-h-[650px] md:min-h-[750px] lg:min-h-[850px]"
        style={{
          backgroundImage:
            "url('/images/continents/middle-east/region-headers/desert.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* TOP MOSAIC */}
        <div className="absolute top-0 left-0 w-full h-12 bg-[url('/images/continents/middle-east/region-pictures/moziac.webp')] bg-repeat-x z-10"></div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/20 via-orange-400/20 to-amber-500/20 z-20"></div>

        {/* TEXT */}
        <div className="absolute inset-0 flex items-center justify-center px-6 z-30">
          <div className="max-w-3xl w-full bg-black/40 p-10 rounded-2xl border-4 border-yellow-300/70 text-center">
            <h1 className="text-6xl font-extrabold mb-4 text-yellow-100">
              Arabian Peninsula
            </h1>
            <p className="text-xl text-yellow-50">
              A vast desert region shaped by trade routes, nomadic cultures, and
              the birthplace of Islam.
            </p>
          </div>
        </div>

        {/* CURVE */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden z-20">
          <svg className="relative block w-full h-24" viewBox="0 0 1200 120">
            <path
              d="M0,0 C300,80 900,0 1200,60 L1200,120 L0,120 Z"
              fill="#FFE2A8"
            />
          </svg>
        </div>

        {/* BOTTOM MOSAIC */}
        <div className="absolute bottom-0 left-0 w-full h-12 z-30 bg-[url('/images/continents/middle-east/region-pictures/moziac.webp')] bg-repeat-x"></div>
      </section>

      {/* ---------- INTRO BLOCK ---------- */}
      <section className="px-8 py-12 bg-gradient-to-r from-yellow-200 via-amber-300 to-orange-300 rounded-2xl text-center shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-orange-900">
          Life in the Arabian Peninsula
        </h2>

        <p className="text-lg text-orange-950 max-w-3xl mx-auto leading-relaxed">
          The Arabian Peninsula has long been a land of movement, trade, and
          storytelling. Ancient caravan routes once crossed its deserts,
          connecting Africa, Asia, and Europe. Cities like Mecca and Medina
          became some of the most important religious centres in the world,
          while coastal settlements traded spices, incense, and pearls.
          <br />
          <br />
          Today, the region includes countries such as Saudi Arabia, the United
          Arab Emirates, Oman, Yemen, Qatar, Kuwait, and Bahrain. Skyscrapers,
          oil wealth, and global cities now sit alongside ancient traditions,
          desert landscapes, and deep-rooted cultural heritage.
        </p>
      </section>

      {/* ---------- REUSABLE CONTENT ---------- */}
      <RegionContent
        data={arabianData}
        gallery={arabianGallery}
        continent="Middle East"
        regionKey="arabian"
      />
    </main>
  );
}
