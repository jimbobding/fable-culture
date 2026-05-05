"use client";
import { useState } from "react";

import StudentDiscoveries from "@/components/shared/StudentDiscoveries";
import Link from "next/link";
import { caribbeanCountries } from "@/data/caribbean/caribbeanCountries";
import Timeline from "@/components/shared/Timeline";
import { caribbeanTimeline } from "@/data/caribbean/timeline";
import CaribbeanMap from "@/components/regions/caribbean/CaribbeanMap";

export default function CaribbeanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0f7fa] via-[#f0fdfa] to-[#fff7ed]">
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-20">
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden rounded-[2rem] shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[#22d3ee] via-[#38bdf8] to-[#f97316]" />
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.3),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.2),transparent_35%)]" />

          <div className="relative px-6 py-16 sm:px-12 sm:py-24 text-center text-white space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-white/80 font-semibold">
              Fable Culture
            </p>

            <h1 className="text-4xl sm:text-6xl font-bold">
              🌴 Explore the Caribbean 🌊
            </h1>

            <p className="max-w-3xl mx-auto text-base sm:text-xl text-white/90">
              A region of islands, oceans, cultures, and history shaped by the
              sea.
            </p>
          </div>
        </section>

        {/* ================= WHAT IS THE CARIBBEAN ================= */}
        <section className="space-y-8 text-center">
          <h2 className="text-4xl font-bold text-[#0f172a]">
            What is the Caribbean?
          </h2>

          <p className="max-w-3xl mx-auto text-[#334155]">
            The Caribbean is a region made up of many islands surrounded by warm
            tropical seas. It is known for its climate, cultures, and powerful
            history.
          </p>

          {/* CENTER IMAGE */}
          <div className="flex justify-center">
            <img
              src="/images/caribbean/hero.jpg"
              alt="Caribbean islands"
              className="rounded-[2rem] shadow-lg max-h-[350px] object-cover"
            />
          </div>

          {/* QUICK LEARNING */}
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 text-[#334155]">
            <div>🌍 Group of islands</div>
            <div>☀️ Tropical climate</div>
            <div>🌊 Surrounded by ocean</div>
            <div>🌋 Some volcanic islands</div>
          </div>
        </section>

        {/* ================= THEMES ================= */}
        <section className="space-y-10">
          <h2 className="text-4xl font-bold text-center text-[#0f172a]">
            Explore the Caribbean
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {/* GEOGRAPHY */}
            <div className="rounded-[2rem] overflow-hidden shadow-lg bg-white/70 backdrop-blur">
              <img
                src="/images/caribbean/geography.jpg"
                className="h-48 w-full object-cover"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold">🌍 Geography</h3>
                <p>
                  Islands, volcanoes, coral reefs, and powerful weather systems.
                </p>
              </div>
            </div>

            {/* CULTURE */}
            <div className="rounded-[2rem] overflow-hidden shadow-lg bg-white/70 backdrop-blur">
              <img
                src="/images/caribbean/culture.jpg"
                className="h-48 w-full object-cover"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold">🎶 Culture</h3>
                <p>
                  Music, food, language, and traditions shaped by many
                  influences.
                </p>
              </div>
            </div>

            {/* IMPORTANCE */}
            <div className="rounded-[2rem] overflow-hidden shadow-lg bg-white/70 backdrop-blur">
              <img
                src="/images/caribbean/history.jpg"
                className="h-48 w-full object-cover"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold">🌎 Why it matters</h3>
                <p>
                  Trade routes, global culture, and a powerful shared history.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= TIMELINE ================= */}
        <section className="space-y-6">
          <h2 className="text-4xl font-bold text-center text-[#0f172a]">
            Caribbean Timeline
          </h2>

          <p className="text-center max-w-2xl mx-auto text-[#334155]">
            Explore the key moments that shaped the Caribbean.
          </p>

          {/* Replace with Timeline component later */}

          <Timeline
            items={caribbeanTimeline}
            theme={{
              lineColor: "#0ea5e9",
              yearColor: "#0284c7",
              textColor: "#334155",
              cardBg: "#ffffff",
              dotColor: "#f97316",
            }}
            region="caribbean"
          />
        </section>

        {/* ================= DISCOVERIES ================= */}
        <StudentDiscoveries items={[]} />

        {/* ================= MAP ================= */}
        <section className="space-y-6 text-center max-w-5xl mx-auto relative z-0">
          <h2 className="text-4xl font-bold text-[#0f172a]">Explore the Map</h2>

          <p className="text-[#334155]">Click a country to explore more.</p>

          {/* Replace with real map */}

          <div className="rounded-2xl">
            <CaribbeanMap />
          </div>
          {/* <div className="text-red-500">Hovered: {hoveredCountry}</div> */}
        </section>

        {/* ================= COUNTRIES ================= */}
        <section className="space-y-10 relative z-10">
          <h2 className="text-4xl font-bold text-center text-[#0f172a]">
            Caribbean Countries
          </h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {caribbeanCountries.map((country) => (
              <Link
                key={country.slug}
                href={`/caribbean/${country.slug}`}
                className="rounded-2xl bg-white/70 backdrop-blur p-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="font-semibold text-lg">
                  {country.flag} {country.name}
                </h3>

                <p className="text-sm text-slate-600 mt-1">
                  Population: {country.population}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
