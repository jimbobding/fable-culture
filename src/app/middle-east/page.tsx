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
      {/* ================= HEADER ================= */}
      <div
        className="rounded-2xl border bg-white shadow-md px-6 py-8 sm:px-10 sm:py-10"
        style={{ borderColor: stroke }}
      >
        <div className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Explore the Middle East
          </h1>

          <p className="max-w-3xl mx-auto text-gray-700 text-base sm:text-lg leading-relaxed">
            Learn what the Middle East means today, how it connects across
            history, and explore three learning regions using the interactive
            map.
          </p>
        </div>
      </div>

      {/* ================= INTRO ================= */}
      <section className="space-y-8">
        {/* Intro text */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
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
        <div className="max-w-4xl mx-auto rounded-2xl border border-cyan-300/60 bg-cyan-50 px-6 py-5 shadow-sm">
          <p className="text-gray-800 leading-relaxed">
            <span className="font-semibold">Important:</span> The Middle East is
            not one country, and there is no single official border that
            everyone agrees on.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Included */}
          <div className="rounded-2xl border bg-white p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-3">
              Countries generally included
            </h3>

            <ul className="text-gray-700 space-y-1">
              <li>• Saudi Arabia, UAE, Qatar, Bahrain, Kuwait, Oman, Yemen</li>
              <li>• Jordan, Israel, Palestine, Lebanon, Syria</li>
              <li>• Iraq, Iran</li>
            </ul>
          </div>

          {/* Sometimes */}
          <div className="rounded-2xl border bg-white p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-3">Sometimes included</h3>

            <ul className="text-gray-700 space-y-2">
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

          {/* Role in history */}
          <div className="rounded-2xl border bg-white p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-3">
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
        <div className="rounded-2xl border bg-white p-6 sm:p-8 shadow-md space-y-6">
          <h3 className="text-2xl font-bold text-center">
            Our 3 Learning Regions
          </h3>

          <p className="text-gray-700 leading-relaxed">
            Modern borders don’t always match older cultural regions. To make
            learning clearer, we group the Middle East into three broad learning
            regions based on geography and history.
          </p>

          <div className="grid gap-5 md:grid-cols-3">
            {/* Levant */}
            <div className="rounded-xl border bg-amber-50 p-5">
              <h4 className="font-semibold mb-2">The Levant</h4>
              <p className="text-sm text-gray-700">
                Lebanon, Syria, Jordan, Israel, Palestine
              </p>
            </div>

            {/* Arabia */}
            <div className="rounded-xl border bg-orange-50 p-5">
              <h4 className="font-semibold mb-2">Arabia</h4>
              <p className="text-sm text-gray-700">
                Saudi Arabia, UAE, Qatar, Bahrain, Kuwait, Oman, Yemen
              </p>
            </div>

            {/* Persia */}
            <div className="rounded-xl border bg-emerald-50 p-5">
              <h4 className="font-semibold mb-2">Persia &amp; Mesopotamia</h4>
              <p className="text-sm text-gray-700">Iran and Iraq</p>
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
