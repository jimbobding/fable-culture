"use client";

import { useState } from "react";
import Link from "next/link";

type Region = {
  name: string;
  href: string;
  points: string; // "x,y x,y x,y"
};

// MUST match your image's natural size
const W = 1920;
const H = 1734;

const regions: Region[] = [
  {
    name: "Levant",
    href: "/middle-east/levant",
    points:
      "531,743 600,763 734,595 828,458 879,308 702,330 592,335 548,483 495,639",
  },
  {
    name: "Arabia",
    href: "/middle-east/arabia",
    points:
      "736,596 524,814 943,1590 1465,1422 1710,1113 1525,935 1155,721 996,749",
  },
  {
    name: "Persia",
    href: "/middle-east/persia-mesopotamia",
    points:
      "994,739 738,588 719,525 904,296 977,172 1150,169 1325,340 1581,249 1769,340 1735,517 1796,649 1759,729 1849,890 1793,973 1635,961",
  },
];

export default function MiddleEastLanding() {
  const [hovered, setHovered] = useState<string | null>(null);

  const stroke = "#5F9EA0";
  const fillHover = "rgba(95, 158, 160, 0.18)";

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-12">
      {/* ================= HERO HEADER ================= */}
      <div className="relative overflow-hidden rounded-3xl shadow-xl">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-sky-500 to-blue-600 opacity-95" />

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_60%)]" />

        {/* Content */}
        <div className="relative px-6 py-12 sm:px-12 sm:py-16 text-center text-white space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Explore the Middle East
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg leading-relaxed text-white/90">
            Discover how geography, culture, trade routes, and empires shaped
            one of the most historically connected regions in the world.
          </p>

          <div className="flex justify-center gap-6 text-sm sm:text-base font-medium">
            <span>Levant</span>
            <span>•</span>
            <span>Arabia</span>
            <span>•</span>
            <span>Persia & Mesopotamia</span>
          </div>
        </div>
      </div>

      {/* ================= INTRO ================= */}
      <section className="space-y-8 rounded-3xl border bg-gradient-to-br from-sky-50 via-white to-cyan-50 p-6 sm:p-8 shadow-sm">
        {/* Intro text */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
            What is the Middle East?
          </h2>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-700 leading-relaxed">
            The <span className="font-semibold">Middle East</span> is a modern
            term for a region mainly in{" "}
            <span className="font-semibold">Southwest Asia</span>, where{" "}
            <span className="font-semibold">Europe, Asia, and Africa</span>{" "}
            meet. It has long been a crossroads for trade, culture, religion,
            and ideas.
          </p>
        </div>

        {/* Info banner */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-cyan-300/60 bg-white/70 backdrop-blur px-6 py-5 shadow-sm">
          <p className="text-gray-800 leading-relaxed">
            <span className="font-semibold text-cyan-700">Important:</span> The
            Middle East is not one country, and there is no single official
            border that everyone agrees on.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Countries Included */}
          <div className="rounded-2xl border border-t-4 border-t-cyan-500 bg-white/90 backdrop-blur p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3 text-cyan-800">
              Countries generally included
            </h3>

            <ul className="text-gray-700 space-y-1 leading-relaxed">
              <li>• Saudi Arabia, UAE, Qatar, Bahrain, Kuwait, Oman, Yemen</li>
              <li>• Jordan, Israel, Palestine, Lebanon, Syria</li>
              <li>• Iraq, Iran</li>
            </ul>
          </div>

          {/* Sometimes Included */}
          <div className="rounded-2xl border border-t-4 border-t-sky-500 bg-white/90 backdrop-blur p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3 text-sky-800">
              Sometimes included
            </h3>

            <ul className="text-gray-700 space-y-2 leading-relaxed">
              <li>• Turkey</li>
              <li>• Egypt</li>
              <li>• Cyprus</li>
            </ul>

            <div className="mt-4 rounded-xl bg-gray-50 border px-4 py-3">
              <p className="text-sm text-gray-700">
                Often called <b>MENA</b> (Middle East &amp; North Africa).
              </p>
            </div>
          </div>

          {/* Role in History */}
          <div className="rounded-2xl border border-t-4 border-t-blue-500 bg-white/90 backdrop-blur p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">
              The Middle East’s Role in World History
            </h3>

            <ul className="text-gray-700 space-y-2 text-sm sm:text-base leading-relaxed">
              <li>
                • Some of the world’s earliest cities and trade routes developed
                here.
              </li>
              <li>
                • Writing and record-keeping helped societies organise
                government, learning, and business.
              </li>
              <li>
                • Laws and leadership systems influenced later empires and
                countries.
              </li>
              <li>
                • Major world religions began here and still shape lives today.
              </li>
            </ul>
          </div>
        </div>

        {/* Region split */}
        <div className="rounded-3xl border bg-white/90 backdrop-blur p-6 sm:p-8 shadow-sm space-y-6">
          <h3 className="text-2xl font-bold text-center text-slate-900">
            Our 3 Learning Regions
          </h3>

          <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            Modern borders don’t always match older cultural regions. To make
            learning clearer, we group the Middle East into three broad learning
            regions based on geography and history.
          </p>

          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-200 to-transparent" />

          <div className="grid gap-5 md:grid-cols-3">
            {/* Levant */}
            <div className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-5 shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold mb-2 text-amber-900">The Levant</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Lebanon, Syria, Jordan, Israel, Palestine
              </p>
            </div>

            {/* Arabia */}
            <div className="rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 to-white p-5 shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold mb-2 text-orange-900">Arabia</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Saudi Arabia, UAE, Qatar, Bahrain, Kuwait, Oman, Yemen
              </p>
            </div>

            {/* Persia */}
            <div className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-5 shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold mb-2 text-emerald-900">
                Persia &amp; Mesopotamia
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Iran and Iraq
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAP ================= */}
      <div className="relative w-full">
        <img
          src="/images/continents/middle-east/map/Middle_east_graphic_2003.jpg"
          alt="Middle East map"
          className="w-full h-auto rounded-xl shadow block"
        />

        <svg
          className="absolute inset-0 w-full h-full"
          viewBox={`0 0 ${W} ${H}`}
          preserveAspectRatio="none"
        >
          {regions.map((region) => {
            const active = hovered === region.name;

            return (
              <Link
                key={region.name}
                href={region.href}
                onMouseEnter={() => setHovered(region.name)}
                onMouseLeave={() => setHovered(null)}
              >
                <polygon
                  points={region.points}
                  style={{
                    fill: active ? fillHover : "transparent",
                    stroke: active ? stroke : "transparent",
                    strokeWidth: active ? 6 : 0,
                    cursor: "pointer",
                    transition: "fill 0.25s ease, stroke 0.25s ease",
                    filter: active
                      ? "drop-shadow(0 0 10px rgba(95,158,160,0.6))"
                      : "none",
                  }}
                />
              </Link>
            );
          })}
        </svg>
      </div>

      {/* ================= HOW TO USE (STYLED BANNER) ================= */}
      <div
        className="rounded-2xl border bg-white shadow-sm px-6 py-5 text-center"
        style={{ borderColor: stroke }}
      >
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          <span className="font-semibold">How to use:</span> Tap a region on the
          map to open it, or use the buttons below. On mobile, it can help to
          zoom slightly for more accurate tapping.
        </p>
      </div>

      {/* ================= QUICK PICK CHIPS ================= */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
        <Link
          href="/middle-east/levant"
          onMouseEnter={() => setHovered("Levant")}
          onMouseLeave={() => setHovered(null)}
          className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium bg-amber-50 border-amber-200 text-amber-900 hover:shadow-md transition"
        >
          <span className="w-3 h-3 rounded-full bg-amber-400" />
          Levant
        </Link>

        <Link
          href="/middle-east/arabia"
          onMouseEnter={() => setHovered("Arabia")}
          onMouseLeave={() => setHovered(null)}
          className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium bg-orange-50 border-orange-200 text-orange-900 hover:shadow-md transition"
        >
          <span className="w-3 h-3 rounded-full bg-orange-400" />
          Arabia
        </Link>

        <Link
          href="/middle-east/persia-mesopotamia"
          onMouseEnter={() => setHovered("Persia")}
          onMouseLeave={() => setHovered(null)}
          className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium bg-emerald-50 border-emerald-200 text-emerald-900 hover:shadow-md transition"
        >
          <span className="w-3 h-3 rounded-full bg-emerald-400" />
          Persia &amp; Mesopotamia
        </Link>
      </div>
    </div>
  );
}
