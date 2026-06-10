export const dynamic = "force-dynamic";
import StudentDiscoveries from "@/components/shared/StudentDiscoveries";
import Link from "next/link";
import { caribbeanCountries } from "@/data/caribbean/caribbeanCountries";
import Timeline from "@/components/shared/Timeline";
import { caribbeanTimeline } from "@/data/caribbean/timeline";
import CaribbeanMap from "@/components/regions/caribbean/CaribbeanMap";
import {
  caribbeanDiscoveries,
  caribbeanThemes,
} from "@/data/caribbean/discoveries";
import { getApprovedResources } from "@/app/lib/getApprovedResources";
export default async function CaribbeanPage() {
  const approvedResources = await getApprovedResources("caribbean");

  const allResources = [...caribbeanDiscoveries, ...approvedResources];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0f7fa] via-[#f8fafc] to-[#fff7ed] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-28">
        {/* ================= FLOATING TYPOGRAPHY HERO ================= */}

        <section className="relative overflow-hidden min-h-[95vh] flex items-center justify-center bg-[#f8fafc]">
          {/* MAP OUTLINE */}
          <img
            src="/images/continents/caribbean/hero/caribbean-map-outline.png"
            alt="Caribbean Map"
            className="absolute inset-0 m-auto w-[88%] max-w-6xl opacity-[0.08] object-contain"
          />

          {/* ROUTE LINES */}
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <div className="absolute top-[34%] left-[15%] w-[30%] border-t border-dashed border-cyan-400 rotate-[10deg]" />

            <div className="absolute top-[56%] left-[42%] w-[20%] border-t border-dashed border-orange-400 -rotate-[10deg]" />

            <div className="absolute top-[44%] right-[16%] w-[18%] border-t border-dashed border-purple-400 rotate-[14deg]" />
          </div>

          {/* FLOATING COUNTRY LABELS */}
          <div className="absolute top-[18%] left-[12%]">
            <p className="text-cyan-600 font-bold tracking-[0.3em] uppercase text-sm">
              Jamaica
            </p>

            <p className="text-cyan-500/70 text-xs tracking-[0.2em]">
              18.1096° N, 77.2975° W
            </p>
          </div>

          <div className="absolute top-[24%] right-[16%]">
            <p className="text-orange-500 font-bold tracking-[0.3em] uppercase text-sm">
              Barbados
            </p>

            <p className="text-orange-400/70 text-xs tracking-[0.2em]">
              13.1939° N, 59.5432° W
            </p>
          </div>

          <div className="absolute bottom-[24%] left-[18%]">
            <p className="text-purple-600 font-bold tracking-[0.3em] uppercase text-sm">
              Haiti
            </p>

            <p className="text-purple-500/70 text-xs tracking-[0.2em]">
              18.9712° N, 72.2852° W
            </p>
          </div>

          <div className="absolute bottom-[18%] right-[18%]">
            <p className="text-amber-500 font-bold tracking-[0.3em] uppercase text-sm">
              Saint Lucia
            </p>

            <p className="text-amber-400/70 text-xs tracking-[0.2em]">
              13.9094° N, 60.9789° W
            </p>
          </div>

          {/* MAIN CONTENT */}
          <div className="relative z-10 text-center px-6 max-w-7xl">
            {/* TOP LABEL */}
            <p className="uppercase tracking-[0.55em] text-slate-700 text-xs md:text-sm font-semibold mb-10">
              Fable Culture
            </p>

            {/* TITLE */}
            <div className="space-y-2">
              <h1 className="text-6xl md:text-8xl font-black text-slate-800 leading-none">
                THE
              </h1>

              <div className="flex flex-wrap justify-center gap-2 md:gap-4 leading-none">
                <span className="text-6xl md:text-[10rem] font-black text-cyan-500 drop-shadow-[0_12px_18px_rgba(8,145,178,0.35)]">
                  C
                </span>

                <span className="text-6xl md:text-[10rem] font-black text-orange-500 drop-shadow-[0_12px_18px_rgba(249,115,22,0.35)]">
                  A
                </span>

                <span className="text-6xl md:text-[10rem] font-black text-purple-500 drop-shadow-[0_12px_18px_rgba(147,51,234,0.35)]">
                  R
                </span>

                <span className="text-6xl md:text-[10rem] font-black text-yellow-400 drop-shadow-[0_12px_18px_rgba(250,204,21,0.35)]">
                  I
                </span>

                <span className="text-6xl md:text-[10rem] font-black text-blue-600 drop-shadow-[0_12px_18px_rgba(37,99,235,0.35)]">
                  B
                </span>

                <span className="text-6xl md:text-[10rem] font-black text-lime-500 drop-shadow-[0_12px_18px_rgba(101,163,13,0.35)]">
                  B
                </span>

                <span className="text-6xl md:text-[10rem] font-black text-red-500 drop-shadow-[0_12px_18px_rgba(239,68,68,0.35)]">
                  E
                </span>

                <span className="text-6xl md:text-[10rem] font-black text-teal-500 drop-shadow-[0_12px_18px_rgba(20,184,166,0.35)]">
                  A
                </span>

                <span className="text-6xl md:text-[10rem] font-black text-amber-400 drop-shadow-[0_12px_18px_rgba(251,191,36,0.35)]">
                  N
                </span>
              </div>
            </div>

            {/* ICON ROW */}
            <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12">
              <div className="flex flex-col items-center gap-3">
                <span className="text-3xl">🎶</span>

                <p className="tracking-[0.3em] uppercase text-cyan-700 text-sm">
                  Music
                </p>
              </div>

              <div className="flex flex-col items-center gap-3">
                <span className="text-3xl">🚢</span>

                <p className="tracking-[0.3em] uppercase text-orange-700 text-sm">
                  Migration
                </p>
              </div>

              <div className="flex flex-col items-center gap-3">
                <span className="text-3xl">🎭</span>

                <p className="tracking-[0.3em] uppercase text-purple-700 text-sm">
                  Carnival
                </p>
              </div>

              <div className="flex flex-col items-center gap-3">
                <span className="text-3xl">✊</span>

                <p className="tracking-[0.3em] uppercase text-red-700 text-sm">
                  Resistance
                </p>
              </div>

              <div className="flex flex-col items-center gap-3">
                <span className="text-3xl">🌍</span>

                <p className="tracking-[0.3em] uppercase text-lime-700 text-sm">
                  Identity
                </p>
              </div>
            </div>

            {/* SUBTEXT */}
            <div className="mt-16 space-y-4 px-4">
              <p
                className="
    inline-block
    rounded-full
    bg-white/35
    backdrop-blur-[2px]
    px-6
    py-3
    tracking-[0.22em]
    md:tracking-[0.38em]
    uppercase
    text-slate-900
    font-black
    text-base
    md:text-lg
    shadow-lg
    drop-shadow-[0_3px_10px_rgba(255,255,255,0.25)]
  "
              >
                More Than Islands.
              </p>

              <p
                className="
    max-w-3xl
    mx-auto
    text-base
    md:text-2xl
    text-slate-800
    leading-relaxed
    font-semibold
    bg-white/28
    backdrop-blur-[2px]
    rounded-2xl
    px-6
    py-4
    shadow-[0_6px_24px_rgba(15,23,42,0.08)]
    border
    border-white/20
    [text-shadow:0_1px_6px_rgba(255,255,255,0.2)]
  "
              >
                A region shaped by movement, culture, resistance, and the sea.
              </p>
            </div>

            {/* SCROLL */}
            <div className="mt-20 flex flex-col items-center gap-3 text-slate-500">
              <div className="text-3xl">🧭</div>

              <p className="tracking-[0.3em] uppercase text-xs">
                Scroll To Explore
              </p>
            </div>
          </div>
        </section>

        {/* ================= IDENTITY SECTION ================= */}
        <section className="space-y-10 text-center">
          <div className="space-y-5 max-w-4xl mx-auto">
            <h2 className="text-5xl font-black text-slate-900">
              The Caribbean Is...
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              More than beaches and islands. The Caribbean is a region connected
              by movement, storytelling, music, identity, and survival.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] bg-white/70 backdrop-blur p-8 shadow-xl text-left space-y-4">
              <div className="text-4xl">🎶</div>

              <h3 className="text-2xl font-bold">Music & Celebration</h3>

              <p className="text-slate-600">
                Reggae, calypso, soca, steelpan, Carnival, and dance became
                global cultural influences connected to Caribbean creativity.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white/70 backdrop-blur p-8 shadow-xl text-left space-y-4">
              <div className="text-4xl">🚢</div>

              <h3 className="text-2xl font-bold">Migration & Movement</h3>

              <p className="text-slate-600">
                Caribbean migration shaped communities across the world,
                especially in the UK, United States, and Canada.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white/70 backdrop-blur p-8 shadow-xl text-left space-y-4">
              <div className="text-4xl">⚔️</div>

              <h3 className="text-2xl font-bold">History & Resistance</h3>

              <p className="text-slate-600">
                The Caribbean played a major role in colonial trade, slavery,
                revolution, independence, and cultural resistance.
              </p>
            </div>
          </div>
        </section>

        {/* ================= MAP ================= */}
        <section className="space-y-10 relative">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-black text-slate-900">
              Explore the Region
            </h2>

            <p className="text-slate-600 text-lg">
              Click a country to begin exploring the Caribbean.
            </p>
          </div>

          <div className="rounded-[3rem] overflow-hidden bg-gradient-to-br from-cyan-100 via-sky-50 to-orange-50 shadow-2xl p-8">
            <CaribbeanMap />
          </div>
        </section>

        {/* ================= COUNTRIES ================= */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-black text-slate-900">
              Caribbean Countries
            </h2>

            <p className="text-slate-600 text-lg">
              Explore cultures, histories, wildlife, music, and traditions
              across the Caribbean.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {caribbeanCountries.map((country) => (
              <Link
                key={country.slug}
                href={`/caribbean/${country.slug}`}
                className="
          group
          rounded-[1.75rem]
          overflow-hidden
          bg-white/70
          backdrop-blur
          shadow-lg
          hover:-translate-y-1.5
          hover:shadow-2xl
          transition-all
          duration-500
        "
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={country.heroImage}
                    alt={country.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 p-4 text-white space-y-1">
                    <h3 className="text-xl font-black leading-tight">
                      {country.flag} {country.name}
                    </h3>

                    <p className="text-white/75 text-xs">
                      {country.tags.slice(0, 2).join(" • ")}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
        {/* ================= DEEP DIVES ================= */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-black text-slate-900">
              Deep Dive Topics
            </h2>

            <p className="text-slate-600 text-lg">
              Explore larger stories connected to Caribbean identity and
              history.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Link
              href="/caribbean/topics/windrush"
              className="group rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <div className="relative h-[420px]">
                <img
                  src="/images/continents/caribbean/topics/windrush.jpg"
                  alt="Windrush"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                <div className="absolute bottom-0 p-8 text-white space-y-3">
                  <h3 className="text-3xl font-black">
                    🚢 Windrush Generation
                  </h3>

                  <p className="text-white/80">
                    Discover how Caribbean migration helped shape modern
                    Britain.
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="/caribbean/topics/carnival"
              className="group rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <div className="relative h-[420px]">
                <img
                  src="/images/continents/caribbean/topics/carnival1.jpg"
                  alt="Carnival"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                <div className="absolute bottom-0 p-8 text-white space-y-3">
                  <h3 className="text-3xl font-black">🎭 Carnival Culture</h3>

                  <p className="text-white/80">
                    Explore music, costumes, resistance, and celebration.
                  </p>
                </div>
              </div>
            </Link>

            {/* <Link
              href="/caribbean/music"
              className="group rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <div className="relative h-[420px]">
                <img
                  src="/images/continents/caribbean/topics/music.jpg"
                  alt="Music"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                <div className="absolute bottom-0 p-8 text-white space-y-3">
                  <h3 className="text-3xl font-black">🎶 Caribbean Music</h3>

                  <p className="text-white/80">
                    Discover reggae, soca, calypso, dancehall, and steelpan.
                  </p>
                </div>
              </div>
            </Link> */}
          </div>
        </section>

        {/* ================= TIMELINE ================= */}
        <section className="space-y-10">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-black text-slate-900">
              Caribbean Timeline
            </h2>

            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Explore the events, migrations, revolutions, and cultural changes
              that shaped the Caribbean over time.
            </p>
          </div>

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
        <StudentDiscoveries
          items={allResources}
          region="caribbean"
          countries={[
            "Jamaica",
            "Barbados",
            "Trinidad and Tobago",
            "Saint Lucia",
            "Saint Vincent and the Grenadines",
            "Saint Kitts and Nevis",
          ]}
          topics={[
            "Music",
            "Food",
            "History",
            "Culture",
            "Wildlife",
            "Migration",
            "Carnival",
          ]}
        />
      </div>
      <div className="mb-8 flex justify-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/80 px-5 py-3 text-sm font-semibold text-stone-800 shadow-lg backdrop-blur transition hover:-translate-y-0.5 hover:shadow-xl"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
