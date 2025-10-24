"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { europeRegions, RegionKey } from "@/data/europeRegions";

export default function EuropeOverview() {
  const regionKeys: RegionKey[] = [
    "northern",
    "southern",
    "eastern",
    "western",
  ];

  const regionColors: Record<RegionKey, string> = {
    northern: "#AEC6CF",
    southern: "#FFB347",
    eastern: "#77DD77",
    western: "#CBAACB",
  };

  // Pick one random image per region and save it in state
  const [regionImages] = useState(() => {
    return regionKeys.map((key) => {
      const region = europeRegions[key];
      const randomImage =
        region.images[Math.floor(Math.random() * region.images.length)];
      return { key, image: randomImage };
    });
  });

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-8">
        🌍 Explore Europe by Region
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {regionImages.map(({ key, image }) => {
          const region = europeRegions[key];
          return (
            <Link key={key} href={`/europe/${key}`} className="group">
              <div className="p-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 bg-white flex flex-col items-center justify-center h-80">
                <div className="w-full h-48 overflow-hidden rounded-xl mb-4">
                  <Image
                    src={image.src}
                    alt={image.caption}
                    width={400}
                    height={250}
                    className="object-cover w-full h-full rounded-xl"
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

      <div className="mt-6 text-center">
        <Link href="/">
          <button className="bg-gray-700 text-white px-6 py-3 rounded hover:bg-gray-800 transition">
            ← Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
