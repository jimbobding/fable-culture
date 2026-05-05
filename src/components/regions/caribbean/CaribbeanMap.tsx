"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Country = {
  name: string;
  href: string;
  coords: string;
};

// 🔴 MUST match your image size
const W = 2532;
const H = 1688;

const countries: Country[] = [
  { name: "Jamaica", href: "/caribbean/jamaica", coords: "759,853,95" },
  { name: "Barbados", href: "/caribbean/barbados", coords: "2290,1268,24" },
  { name: "Bahamas", href: "/caribbean/bahamas", coords: "950,313,203" },
  { name: "Cuba", href: "/caribbean/cuba", coords: "494,543,161" },
  { name: "Haiti", href: "/caribbean/haiti", coords: "1117,773,113" },
  {
    name: "Dominican Republic",
    href: "/caribbean/dominican-republic",
    coords: "1406,764,144",
  },
  {
    name: "Trinidad and Tobago",
    href: "/caribbean/trinidad-and-tobago",
    coords: "2150,1520,94",
  },
  {
    name: "Saint Lucia",
    href: "/caribbean/saint-lucia",
    coords: "2165,1214,18",
  },
  { name: "Grenada", href: "/caribbean/grenada", coords: "2111,1371,27" },
  { name: "Dominica", href: "/caribbean/dominica", coords: "2111,1084,34" },
  {
    name: "Saint Kitts and Nevis",
    href: "/caribbean/saint-kitts-and-nevis",
    coords: "2001,937,45",
  },
  {
    name: "Saint Vincent and the Grenadines",
    href: "/caribbean/saint-vincent-and-the-grenadines",
    coords: "2145,1291,46",
  },
  {
    name: "Antigua and Barbuda",
    href: "/caribbean/antigua-and-barbuda",
    coords: "2098,910,41",
  },
];

export default function CaribbeanMap() {
  const router = useRouter();
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="space-y-5">
      {/* DEBUG */}
      <div className="text-blue-500">Hovered: {hovered}</div>

      {/* MAP */}
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-[1.75rem] border border-cyan-300 shadow-xl bg-white">
        <img
          src="/images/continents/caribbean/map/map-caribbean.jpg"
          alt="Map of the Caribbean"
          className="block w-full h-auto"
        />

        <svg
          className="absolute inset-0 w-full h-full"
          viewBox={`0 0 ${W} ${H}`}
          preserveAspectRatio="none"
        >
          {countries.map((country) => (
            <circle
              key={country.name}
              cx={Number(country.coords.split(",")[0])}
              cy={Number(country.coords.split(",")[1])}
              r={Number(country.coords.split(",")[2])}
              onMouseEnter={() => setHovered(country.name)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => router.push(country.href)}
              style={{
                fill:
                  hovered === country.name
                    ? "rgba(14,165,233,0.4)"
                    : "transparent",
                stroke: hovered === country.name ? "#0284c7" : "transparent",
                strokeWidth: hovered === country.name ? 3 : 0,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            />
          ))}
        </svg>
      </div>

      {/* INSTRUCTIONS */}
      <div className="rounded-2xl border border-cyan-300 bg-cyan-50 px-5 py-4 text-center shadow-sm">
        <p className="text-sm text-cyan-900">
          <strong>How to use:</strong> Hover or tap a country to explore it.
        </p>
      </div>

      {/* LABEL */}
      {hovered && (
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-cyan-300 bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-900 shadow-sm">
            {hovered}
          </span>
        </div>
      )}
    </div>
  );
}
