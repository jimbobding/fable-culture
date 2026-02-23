"use client";

import { useState } from "react";
import Link from "next/link";

type Region = {
  name: string;
  href: string;
  points: string; // "x,y x,y x,y"
};

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
      "736,596,524,814,943,1590,1465,1422,1710,1113,1525,935,1155,721,996,749",
  },

  {
    name: "Persia",
    href: "/middle-east/persia-mesopotamia",
    points:
      "994,739,738,588,719,525,904,296,977,172,1150,169,1325,340,1581,249,1769,340,1735,517,1796,649,1759,729,1849,890,1793,973,1635,961",
  },
];

export default function MiddleEastLanding() {
  const [hovered, setHovered] = useState<string | null>(null);

  const stroke = "#5F9EA0";
  const fillHover = "rgba(95, 158, 160, 0.18)";

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Explore the Middle East
      </h1>

      {/* Map */}
      <div className="relative w-full">
        <img
          src="/images/continents/middle-east/map/Middle_east_graphic_2003.jpg"
          alt="Middle East map"
          className="w-full h-auto rounded-lg shadow block"
        />

        {/* SVG overlay */}
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
                  ${active ? "bg-[rgba(95,158,160,0.15)] shadow-sm" : "bg-white"}
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
