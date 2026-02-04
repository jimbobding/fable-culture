"use client";

import { useState } from "react";
import Link from "next/link";

type Region = {
  name: string;
  href: string;
  cx: string;
  cy: string;
  r: string;
};

const regions: Region[] = [
  {
    name: "Levant",
    href: "/middle-east/levant",
    cx: "26%",
    cy: "22%",
    r: "5%",
  },
  {
    name: "Arabia",
    href: "/middle-east/arabia",
    cx: "48%",
    cy: "58%",
    r: "7%",
  },
  {
    name: "Persia",
    href: "/middle-east/persia",
    cx: "72%",
    cy: "38%",
    r: "6%",
  },
];

export default function MiddleEastLanding() {
  const [hovered, setHovered] = useState<string | null>(null);

  const stroke = "#5F9EA0"; // steel blue
  const fillHover = "rgba(95, 158, 160, 0.18)";

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Explore the Middle East
      </h1>

      {/* Map */}
      <div className="relative w-full">
        <img
          src="/images/continents/middle-east/map/map-middle-east1.webp"
          alt="Middle East map"
          className="w-full h-auto rounded-lg shadow"
        />

        {/* SVG overlay */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
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
                <circle
                  cx={region.cx}
                  cy={region.cy}
                  r={region.r}
                  style={{
                    fill: active ? fillHover : "transparent",
                    stroke,
                    strokeWidth: 0.8, // VERY thin
                    cursor: "pointer",
                    transition: "all 0.35s ease",
                    filter: active
                      ? "drop-shadow(0 0 6px rgba(95,158,160,0.6))"
                      : "none",
                  }}
                />
              </Link>
            );
          })}
        </svg>
      </div>

      {/* Cards */}
      <ul className="mt-6 flex flex-col md:flex-row justify-center gap-4">
        {regions.map((region) => {
          const active = hovered === region.name;

          return (
            <li key={region.name}>
              <Link
                href={region.href}
                onMouseEnter={() => setHovered(region.name)}
                onMouseLeave={() => setHovered(null)}
                className={`
                  px-4 py-2 rounded-lg border
                  transition-all duration-300
                  ${
                    active ? "bg-[rgba(95,158,160,0.15)] shadow-sm" : "bg-white"
                  }
                `}
                style={{
                  borderColor: stroke,
                  color: stroke,
                }}
              >
                {region.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
