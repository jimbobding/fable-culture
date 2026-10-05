"use client";

import Link from "next/link";

const MAP_WIDTH = 2170;
const MAP_HEIGHT = 2559;

type MapCountry = {
  name: string;
  slug: string;
  x: number;
  y: number;
  radius: number;
};

const countries: MapCountry[] = [
  { name: "Argentina", slug: "argentina", x: 1037, y: 1765, radius: 197 },
  { name: "Chile", slug: "chile", x: 872, y: 1383, radius: 175 },
  { name: "Uruguay", slug: "uruguay", x: 1321, y: 1660, radius: 111 },
  { name: "Paraguay", slug: "paraguay", x: 1250, y: 1342, radius: 124 },
  { name: "Bolivia", slug: "bolivia", x: 1060, y: 1106, radius: 179 },
  { name: "Peru", slug: "peru", x: 648, y: 887, radius: 222 },
  { name: "Ecuador", slug: "ecuador", x: 514, y: 581, radius: 104 },
  { name: "Colombia", slug: "colombia", x: 695, y: 389, radius: 158 },
  { name: "Venezuela", slug: "venezuela", x: 996, y: 253, radius: 147 },
  { name: "Guyana", slug: "guyana", x: 1239, y: 319, radius: 101 },
  { name: "Suriname", slug: "suriname", x: 1356, y: 376, radius: 66 },
  { name: "Brazil", slug: "brazil", x: 1562, y: 885, radius: 353 },
];

export default function SouthAmericaMap() {
  return (
    <div className="w-full">
      {/* MAP */}
      <div className="mx-auto w-full max-w-[720px]">
        <div
          className="relative w-full"
          style={{
            aspectRatio: `${MAP_WIDTH} / ${MAP_HEIGHT}`,
          }}
        >
          <img
            src="/images/continents/south-america/map/south-america-map.png"
            alt="Illustrated map of South America"
            className="absolute inset-0 h-full w-full object-contain"
            draggable={false}
          />

          {/* COUNTRY HOTSPOTS */}
          {countries.map((country) => {
            const left = (country.x / MAP_WIDTH) * 100;
            const top = (country.y / MAP_HEIGHT) * 100;

            const width = ((country.radius * 2) / MAP_WIDTH) * 100;
            const height = ((country.radius * 2) / MAP_HEIGHT) * 100;

            return (
              <Link
                key={country.slug}
                href={`/south-america/${country.slug}`}
                aria-label={`Explore ${country.name}`}
                title={country.name}
                className="group absolute z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-transparent transition duration-200 hover:border-[#F4C542]/90 hover:bg-[#F4C542]/20 focus-visible:border-[#F4C542] focus-visible:bg-[#F4C542]/25 focus-visible:outline-none"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  width: `${width}%`,
                  height: `${height}%`,
                }}
              >
                <span className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap border-2 border-[#211F1B] bg-[#F4C542] px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#211F1B] opacity-0 shadow-[4px_4px_0_#211F1B] transition duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                  {country.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* MOBILE FALLBACK */}
      <div className="mt-7 sm:hidden">
        <p className="mb-3 text-center text-[10px] font-black uppercase tracking-[0.25em] text-white/60">
          Tap the map or choose a country
        </p>

        <div className="grid grid-cols-3 gap-2">
          {countries.map((country) => (
            <Link
              key={country.slug}
              href={`/south-america/${country.slug}`}
              className="border border-white/20 bg-white/[0.07] px-2 py-2.5 text-center text-[10px] font-black uppercase tracking-[0.08em] text-white transition hover:bg-[#F4C542] hover:text-[#211F1B]"
            >
              {country.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
