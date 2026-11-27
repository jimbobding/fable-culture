"use client";

import Link from "next/link";
import { useState } from "react";

type Area = {
  name: string;
  slug: string;
  shape: string;
  coords: number[];
};

const areas: Area[] = [
  {
    "name": "Tasmania",
    "slug": "australia",
    "shape": "poly",
    "coords": [
      317,
      802,
      323,
      816,
      329,
      831,
      335,
      842,
      342,
      849,
      353,
      845,
      358,
      840,
      359,
      826,
      359,
      815,
      359,
      804,
      343,
      814
    ]
  },
  {
    "name": "Mainland Australia",
    "slug": "australia",
    "shape": "poly",
    "coords": [
      298,
      782,
      280,
      772,
      272,
      747,
      246,
      751,
      262,
      736,
      258,
      714,
      240,
      729,
      216,
      708,
      186,
      704,
      157,
      705,
      138,
      710,
      118,
      719,
      107,
      726,
      91,
      724,
      73,
      729,
      54,
      737,
      35,
      733,
      40,
      738,
      35,
      702,
      31,
      680,
      20,
      650,
      12,
      637,
      12,
      627,
      18,
      625,
      18,
      612,
      21,
      592,
      35,
      585,
      71,
      571,
      99,
      557,
      108,
      533,
      125,
      527,
      135,
      508,
      156,
      510,
      175,
      515,
      187,
      489,
      206,
      489,
      240,
      486,
      247,
      504,
      235,
      522,
      265,
      536,
      279,
      546,
      294,
      518,
      299,
      490,
      304,
      474,
      315,
      508,
      331,
      517,
      338,
      546,
      352,
      565,
      368,
      572,
      374,
      593,
      386,
      598,
      409,
      625,
      417,
      661,
      410,
      695,
      393,
      719,
      382,
      745,
      376,
      772,
      348,
      784,
      313,
      789,
      327,
      780,
      339,
      790,
      333,
      787
    ]
  },
  {
    "name": "South Island",
    "slug": "new-zealand",
    "shape": "poly",
    "coords": [
      552,
      901,
      545,
      886,
      551,
      872,
      560,
      856,
      579,
      842,
      590,
      832,
      603,
      815,
      617,
      820,
      618,
      827,
      608,
      845,
      606,
      852,
      593,
      859,
      587,
      873,
      577,
      889
    ]
  },
  {
    "name": "North Island",
    "slug": "new-zealand",
    "shape": "poly",
    "coords": [
      617,
      795,
      624,
      777,
      618,
      761,
      613,
      750,
      607,
      737,
      622,
      743,
      628,
      756,
      634,
      765,
      647,
      775,
      658,
      772,
      656,
      793,
      646,
      805,
      630,
      820,
      629,
      822
    ]
  },
  {
    "name": "Papua New Guinea",
    "slug": "papua-new-guinea",
    "shape": "poly",
    "coords": [
      288,
      460,
      286,
      436,
      289,
      416,
      290,
      395,
      306,
      398,
      315,
      400,
      324,
      405,
      339,
      414,
      355,
      418,
      375,
      417,
      394,
      411,
      382,
      393,
      377,
      382,
      404,
      404,
      408,
      417,
      394,
      426,
      356,
      430,
      356,
      439,
      357,
      447,
      368,
      456,
      381,
      457,
      389,
      455,
      402,
      457,
      416,
      482,
      378,
      472,
      360,
      474,
      340,
      449,
      304,
      461,
      301,
      458
    ]
  },
  {
    "name": "Solomon Islands",
    "slug": "solomon-islands",
    "shape": "poly",
    "coords": [
      433,
      442,
      423,
      417,
      438,
      423,
      451,
      426,
      466,
      433,
      479,
      436,
      490,
      447,
      496,
      466,
      501,
      475,
      481,
      484,
      455,
      454
    ]
  },
  {
    "name": "Vanuatu",
    "slug": "vanuatu",
    "shape": "poly",
    "coords": [
      575,
      577,
      564,
      562,
      550,
      542,
      548,
      530,
      541,
      514,
      552,
      517,
      561,
      518,
      572,
      534,
      567,
      544,
      566,
      551
    ]
  },
  {
    "name": "Fiji",
    "slug": "fiji",
    "shape": "circle",
    "coords": [
      661,
      555,
      36
    ]
  },
  {
    "name": "Samoa",
    "slug": "samoa",
    "shape": "circle",
    "coords": [
      727,
      510,
      24
    ]
  },
  {
    "name": "Tonga",
    "slug": "tonga",
    "shape": "circle",
    "coords": [
      729,
      583,
      29
    ]
  },
  {
    "name": "Kiribati",
    "slug": "kiribati",
    "shape": "circle",
    "coords": [
      900,
      351,
      43
    ]
  },
  {
    "name": "Marshall Islands",
    "slug": "marshall-islands",
    "shape": "circle",
    "coords": [
      610,
      317,
      52
    ]
  },
  {
    "name": "Micronesia",
    "slug": "micronesia",
    "shape": "circle",
    "coords": [
      394,
      299,
      23
    ]
  },
  {
    "name": "Micronesia",
    "slug": "micronesia",
    "shape": "circle",
    "coords": [
      462,
      300,
      32
    ]
  },
  {
    "name": "Micronesia",
    "slug": "micronesia",
    "shape": "circle",
    "coords": [
      513,
      323,
      18
    ]
  },
  {
    "name": "Palau",
    "slug": "palau",
    "shape": "circle",
    "coords": [
      230,
      303,
      41
    ]
  },
  {
    "name": "Nauru",
    "slug": "nauru",
    "shape": "circle",
    "coords": [
      550,
      386,
      26
    ]
  },
  {
    "name": "Tuvalu",
    "slug": "tuvalu",
    "shape": "circle",
    "coords": [
      685,
      467,
      20
    ]
  }
];

export default function OceaniaInteractiveMap() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative w-full overflow-hidden rounded-[20px]">
      <img
        src="/images/continents/oceania/map/map1.png"
        alt="Map of Oceania showing Australia, New Zealand and Pacific island countries"
        className="block h-auto w-full"
      />

      <svg
        viewBox="0 0 1200 1200"
        className="absolute inset-0 h-full w-full"
        role="group"
        aria-label="Clickable Oceania country map"
      >
        {areas.map((area, index) => {
          const isActive = active === area.slug;
          const common = {
            fill: isActive ? "#f5c57e" : "transparent",
            fillOpacity: isActive ? 0.45 : 0,
            stroke: isActive ? "#203d3b" : "transparent",
            strokeWidth: 3,
            className: "cursor-pointer transition-all duration-200",
          };

          const shape =
            area.shape === "circle" ? (
              <circle
                cx={area.coords[0]}
                cy={area.coords[1]}
                r={area.coords[2]}
                {...common}
              />
            ) : (
              <polygon
                points={area.coords.reduce((result, value, i) => {
                  if (i % 2 === 0) result.push(`${value},${area.coords[i + 1]}`);
                  return result;
                }, [] as string[]).join(" ")}
                {...common}
              />
            );

          return (
            <Link
              key={`${area.slug}-${index}`}
              href={`/oceania/${area.slug}`}
              aria-label={`Explore ${area.name}`}
              onMouseEnter={() => setActive(area.slug)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(area.slug)}
              onBlur={() => setActive(null)}
            >
              <title>{area.name}</title>
              {shape}
            </Link>
          );
        })}
      </svg>

      <div className="absolute bottom-3 left-3 rounded-full bg-[#203d3b]/90 px-4 py-2 text-xs font-bold text-white shadow-lg pointer-events-none">
        {active ? `Explore ${areas.find(a => a.slug === active)?.name}` : "Choose a country on the map"}
      </div>
    </div>
  );
}
