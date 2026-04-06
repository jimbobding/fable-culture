"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Country = {
  name: string;
  href: string;
  points: string;
};

// IMPORTANT:
// Set these to the natural size of your map image if the overlay is off.
const W = 2000;
const H = 1700;

const countries: Country[] = [
  {
    name: "Afghanistan",
    href: "/south-asia/afghanistan",
    points:
      "417,80 219,230 207,414 431,431 564,348 666,196 781,90 645,39 479,88 447,67 429,71",
  },
  {
    name: "Pakistan",
    href: "/south-asia/pakistan",
    points:
      "334,453 208,425 279,512 217,646 419,653 507,727 625,708 599,533 680,535 809,328 731,163 684,181 678,183",
  },
  {
    name: "India",
    href: "/south-asia/india",
    points:
      "435,677 442,684 447,696 461,710 474,719 483,726 497,742 518,767 529,808 587,861 604,896 688,951 723,1057 732,1145 790,1212 801,1299 841,1373 878,1472 926,1491 942,1467 988,1405 1023,1378 1021,1306 1044,1244 1034,1133 1078,1115 1104,1090 1133,1060 1188,1030 1230,979 1263,937 1295,908 1329,848 1377,827 1424,779 1391,694 1371,622 1290,603 1196,569 1140,558 1055,512 1016,477 1036,426 960,371 967,315 961,258 945,239 940,224 926,207 910,191 877,198 827,223 781,212",
  },
  {
    name: "Sri Lanka",
    href: "/south-asia/sri-lanka",
    points:
      "1027,1423 1021,1483 1018,1553 1046,1598 1087,1594 1110,1569 1110,1541 1113,1525 1094,1476 1062,1438",
  },
  {
    name: "Bangladesh",
    href: "/south-asia/bangladesh",
    points:
      "1380,610 1378,626 1378,640 1383,661 1399,691 1401,712 1424,772 1428,809 1473,808 1491,801 1496,769 1507,772 1560,829 1585,829 1583,799 1576,770 1558,733 1525,748 1514,735 1525,756 1525,748 1534,698 1549,664 1420,606 1364,594",
  },
  {
    name: "Bhutan",
    href: "/south-asia/bhutan",
    points:
      "1396,553 1431,505 1458,502 1489,507 1509,516 1530,534 1534,557 1502,567 1461,573 1436,580 1398,571 1410,528",
  },
  {
    name: "Nepal",
    href: "/south-asia/nepal",
    points:
      "1044,438 1030,458 1027,470 1037,486 1062,511 1078,516 1094,535 1122,550 1143,560 1177,562 1196,565 1231,574 1261,588 1274,592 1304,592 1297,601 1309,601 1350,599 1364,596 1362,576 1357,553 1357,537 1080,426",
  },
  {
    name: "Maldives",
    href: "/south-asia/maldives",
    points:
      "684,1652 680,1596 684,1543 724,1550 724,1608 728,1652 726,1677 701,1681",
  },
];

export default function SouthAsiaMap() {
  const router = useRouter();
  const [hovered, setHovered] = useState<string | null>(null);

  const stroke = "#9a3412";
  const fillHover = "rgba(154, 52, 18, 0.22)";

  return (
    <div className="space-y-5">
      <div className="relative w-full overflow-hidden rounded-[1.75rem] border border-orange-300 shadow-xl bg-[#fff7ed]">
        <img
          src="/images/continents/south-asia/countries/map/Locator-map-South-Asia.webp"
          alt="Map of South Asia"
          className="block w-full h-auto"
        />

        <svg
          className="absolute inset-0 h-full w-full"
          viewBox={`0 0 ${W} ${H}`}
          preserveAspectRatio="none"
        >
          {countries.map((country) => {
            const active = hovered === country.name;

            return (
              <polygon
                key={country.name}
                points={country.points}
                onMouseEnter={() => setHovered(country.name)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => router.push(country.href)}
                style={{
                  fill: active ? fillHover : "transparent",
                  stroke: active ? stroke : "transparent",
                  strokeWidth: active ? 5 : 0,
                  cursor: "pointer",
                  transition: "fill 0.25s ease, stroke 0.25s ease",
                  filter: active
                    ? "drop-shadow(0 0 10px rgba(154,52,18,0.45))"
                    : "none",
                }}
              />
            );
          })}
        </svg>
      </div>

      <div className="rounded-2xl border border-orange-300 bg-[#fff7ed]/90 px-5 py-4 text-center shadow-sm">
        <p className="text-sm leading-relaxed text-[#6b4226] sm:text-base">
          <span className="font-semibold text-[#9a3412]">How to use:</span> Tap
          or hover over a country on the map to open its page. On smaller
          screens, the country links below the map can stay as an easier backup.
        </p>
      </div>

      {hovered && (
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-orange-300 bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-900 shadow-sm">
            {hovered}
          </span>
        </div>
      )}
    </div>
  );
}
