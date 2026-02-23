"use client";

import RegionContent from "@/components/region/RegionContent";
import { persiaMesopotamiaData } from "@/data/middleEast/persiaMesopotamiaData";
import { persiaMesopotamiaGallery } from "@/data/middleEast/persiaMesopotamiaGallery";
import { persiaMesopotamiaTimeline } from "@/data/middleEast/persiaMesopotamiaTimeline";
import { persiaMesopotamiaTheme } from "@/styles/regionThemes";

export default function PersiaMesopotamiaPage() {
  return (
    <main className={`space-y-16 ${persiaMesopotamiaTheme.factsBg}`}>
      {/* ================= HERO ================= */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        {/* HERO IMAGE */}
        <img
          src="/images/continents/middle-east/region-headers/persia.jpeg"
          alt="Persia region"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* CENTER TEXT BOX */}
        <div className="relative z-20 flex items-center justify-center h-full px-4">
          <div className="bg-black/40 backdrop-blur-sm text-white px-10 py-7 rounded-2xl shadow-2xl max-w-xl text-center border border-purple-300/70 shadow-[0_0_25px_rgba(180,150,255,0.35)]">
            <h1 className="text-3xl md:text-5xl font-bold mb-3 tracking-wide">
              Persia & Mesopotamia
            </h1>

            <p className="text-sm md:text-base leading-relaxed text-white/90">
              From the first cities and writing systems to powerful empires and
              legendary trade routes, this region is often called the cradle of
              civilisation. Explore ancient Persia, Mesopotamia, and the
              cultures that shaped early human history.
            </p>
          </div>
        </div>

        {/* ===== PERSIAN TILE FRAME ===== */}

        {/* TOP */}
        <div
          className="absolute top-0 left-0 w-full h-12 z-30 pointer-events-none"
          style={{
            backgroundImage:
              "url('/images/continents/middle-east/region-pictures/persian-tile.jpg')",
            backgroundRepeat: "repeat-x",
            backgroundSize: "auto 100%",
          }}
        />

        {/* BOTTOM */}
        <div
          className="absolute bottom-0 left-0 w-full h-12 z-30 pointer-events-none"
          style={{
            backgroundImage:
              "url('/images/continents/middle-east/region-pictures/persian-tile.jpg')",
            backgroundRepeat: "repeat-x",
            backgroundSize: "auto 100%",
          }}
        />

        {/* LEFT */}
        <div
          className="absolute top-0 left-0 h-full w-12 z-30 pointer-events-none"
          style={{
            backgroundImage:
              "url('/images/continents/middle-east/region-pictures/persian-tile.jpg')",
            backgroundRepeat: "repeat-y",
            backgroundSize: "100% auto",
          }}
        />

        {/* RIGHT */}
        <div
          className="absolute top-0 right-0 h-full w-12 z-30 pointer-events-none"
          style={{
            backgroundImage:
              "url('/images/continents/middle-east/region-pictures/persian-tile.jpg')",
            backgroundRepeat: "repeat-y",
            backgroundSize: "100% auto",
          }}
        />
      </section>

      {/* ================= SPIEL / INTRO ================= */}
      <section
        className={`px-8 py-12 rounded-2xl text-center shadow-lg ${persiaMesopotamiaTheme.introGradient}`}
      >
        <p
          className={`text-lg max-w-3xl mx-auto leading-relaxed ${persiaMesopotamiaTheme.introText}`}
        >
          Persia & Mesopotamia covers modern-day Iran, Iraq, northern Syria, and
          Kuwait — home to some of the world’s earliest civilizations.
        </p>
        <p
          className={`text-lg max-w-3xl mx-auto leading-relaxed mt-4 ${persiaMesopotamiaTheme.introText}`}
        >
          In Iran, the ancient Persian Empire flourished, with monumental cities
          like Persepolis shaping politics, art, and culture.
        </p>
        <p
          className={`text-lg max-w-3xl mx-auto leading-relaxed mt-4 ${persiaMesopotamiaTheme.introText}`}
        >
          In Iraq, ancient Mesopotamia — often called the Cradle of Civilization
          — saw the first cities, writing systems, and organized societies.
          Babylon and other cities were centers of trade and innovation.
        </p>
        <p
          className={`text-lg max-w-3xl mx-auto leading-relaxed mt-4 ${persiaMesopotamiaTheme.introText}`}
        >
          Northern Syria was part of this ancient network, linking cultures
          through trade and shared history.
        </p>
        <p
          className={`text-lg max-w-3xl mx-auto leading-relaxed mt-4 ${persiaMesopotamiaTheme.introText}`}
        >
          Kuwait, at the northern tip of the Arabian Gulf, played a role in
          maritime trade and cultural exchange during these early periods.
        </p>
        <p
          className={`text-lg max-w-3xl mx-auto leading-relaxed mt-4 ${persiaMesopotamiaTheme.introText}`}
        >
          Over thousands of years, empires like the <b>Achaemenids</b> and
          cities such as <b>Babylon</b> and <b>Ur</b> left a rich cultural
          legacy. The region is known for its majestic ziggurats, intricate art,
          and early advancements in science and law.
        </p>
        <p
          className={`text-lg max-w-3xl mx-auto leading-relaxed mt-4 ${persiaMesopotamiaTheme.introText}`}
        >
          Today, you can explore its history through archaeological sites,
          gardens, and architectural marvels that span millennia. Persia &
          Mesopotamia remain a window into humanity's earliest achievements.
        </p>
      </section>
      {/* ================= REUSABLE REGION CONTENT ================= */}
      <div className={`${persiaMesopotamiaTheme.factsBg} px-4`}>
        <RegionContent
          data={persiaMesopotamiaData}
          gallery={persiaMesopotamiaGallery}
          continent="Middle East"
          regionKey="persiaMesopotamia"
          timeline={persiaMesopotamiaTimeline}
          theme={persiaMesopotamiaTheme}
        />
      </div>
    </main>
  );
}
