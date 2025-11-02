"use client";

import Link from "next/link";
import Image from "next/image";

import { africaRegions, RegionKey } from "@/data/africaRegions";

export default function AfricaOverview() {
  const regionKeys: RegionKey[] = [
    "north",
    "west",
    "east",
    "central",
    "southern",
  ];
  const regionColors: Record<RegionKey, string> = {
    north: "#EAE2B7",
    west: "#FFD6A5",
    east: "#CDEAC0",
    central: "#A0CED9",
    southern: "#FFB6B9",
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-8">
        🌍 Explore Africa by Region
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {regionKeys.map((key) => {
          const region = africaRegions[key];
          return (
            <Link key={key} href={`/africa/${key}`} className="group">
              <div className="p-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 bg-white flex flex-col items-center justify-center h-80">
                <div className="w-full h-48 overflow-hidden rounded-xl mb-4">
                  <Image
                    src={region.regionImage}
                    alt={`${region.title} preview`}
                    width={400} // or your desired card width
                    height={250} // or your desired card height
                    className="object-cover rounded-xl"
                  />
                </div>
                <h2
                  className="text-2xl font-extrabold text-center"
                  style={{ color: regionColors[key] }}
                >
                  {region.title}
                </h2>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="mt-6">
        <Link href="/africa">
          <button className="bg-gray-700 text-white px-6 py-3 rounded hover:bg-gray-800 transition">
            ← Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
