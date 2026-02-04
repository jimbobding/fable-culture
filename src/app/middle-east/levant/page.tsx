"use client";

import RegionContent from "@/components/region/RegionContent";
import AddFact from "@/components/FactsSection";
import { levantData } from "@/data/middleEast/levant";
// import Gallery from "@/components/Gallery";

export default function LevantPage() {
  return (
    <main className="space-y-16">
      {/* ---------- Header ---------- */}
      <section
        className="relative px-8 py-20 text-white"
        style={{
          backgroundImage:
            "url('/images/continents/middle-east/levant-header.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-3xl bg-black/40 p-8 rounded-lg">
          <h1 className="text-4xl font-bold mb-4">The Levant</h1>
          <p className="text-lg">
            The Levant is a historical region bridging the eastern
            Mediterranean. It has long been a crossroads of trade, religion, and
            culture. Today it contains Jordan, Lebanon, and Syria.
          </p>
        </div>
      </section>

      {/* ---------- Region Facts ---------- */}
      <section className="px-8 py-12 bg-gray-50 rounded-lg shadow-inner space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Facts about the Levant</h2>
        <AddFact region="levant" />
      </section>

      {/* ---------- Country Dropdowns ---------- */}
      <RegionContent data={levantData} />

      {/* ---------- Gallery ---------- */}
      <section className="px-8 py-12">
        <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
        {/* <Gallery
          images={[
            "/images/continents/middle-east/levant/1.jpg",
            "/images/continents/middle-east/levant/2.jpg",
            "/images/continents/middle-east/levant/3.jpg",
          ]}
          columns={3}
          hoverEffect="scale"
        /> */}
      </section>
    </main>
  );
}
