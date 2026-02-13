"use client";

import RegionContent from "@/components/region/RegionContent";
import { arabianData } from "@/data/middleEast/arabianData";
import { arabianGallery } from "@/data/middleEast/arabianGallery";
import { arabianTimeline } from "@/data/middleEast/arabianTimeline";
import { arabianTheme } from "@/styles/regionThemes";

export default function ArabianPage() {
  return (
    <main className="space-y-16">
      {/* ---------- HERO — Arabian Peninsula ---------- */}
      <section
        className="relative text-white overflow-hidden min-h-[650px] md:min-h-[750px]"
        style={{
          backgroundImage:
            "url('/images/continents/middle-east/region-headers/arabian-peninsula.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#EDC9AF]/40 via-[#D47C2A]/30 to-[#C75B12]/40 z-10" />

        {/* TEXT BOX */}
        <div className="absolute top-16 left-8 md:left-16 max-w-md z-20">
          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border-l-4 border-r-4 border-[#F4A460] shadow-xl">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-3 text-[#FFF5E1]">
              Arabian Peninsula
            </h1>
            <p className="text-lg md:text-xl text-[#FFF5E1]">
              Deserts, trade routes, and the birthplace of Islam.
            </p>
          </div>
        </div>

        {/* TOP MOSAIC */}
        <div className="absolute top-0 left-0 w-full h-12 z-20">
          <div
            className="w-full h-full bg-repeat-x"
            style={{
              backgroundImage:
                "url('/images/continents/middle-east/region-pictures/arabian-motif.webp')",
              backgroundSize: "auto 100%",
            }}
          />
        </div>

        {/* BOTTOM MOSAIC */}
        <div className="absolute bottom-0 left-0 w-full h-12 z-20">
          <div
            className="w-full h-full bg-repeat-x"
            style={{
              backgroundImage:
                "url('/images/continents/middle-east/region-pictures/arabian-motif.webp')",
              backgroundSize: "auto 100%",
            }}
          />
        </div>

        {/* CURVE */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden z-10">
          <svg
            className="block w-full h-24 md:h-32"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C400,100 800,0 1200,60 L1200,120 L0,120 Z"
              fill="#EDC9AF"
            />
          </svg>
        </div>
      </section>

      {/* ---------- INTRO BLOCK ---------- */}
      <section
        className={`px-8 py-12 rounded-2xl text-center shadow-lg ${arabianTheme.introGradient}`}
      >
        <h2 className={`text-3xl font-bold mb-4 ${arabianTheme.introTitle}`}>
          Life in the Arabian Peninsula
        </h2>

        <p
          className={`text-lg max-w-3xl mx-auto leading-relaxed ${arabianTheme.introText}`}
        >
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
        regionKey="levant"
        timeline={arabianTimeline}
        theme={arabianTheme}
      />
    </main>
  );
}
