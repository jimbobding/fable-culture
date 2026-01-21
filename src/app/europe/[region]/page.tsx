"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { europeRegions, RegionKey } from "@/data/europeRegions";
import FactsSection from "./FactsSection";

export default function EuropeRegionPage() {
  const params = useParams();
  const regionKey = params?.region as RegionKey;
  const region = europeRegions[regionKey];

  // Always call useState at top level
  const [heroImage] = useState(
    region
      ? region.images[Math.floor(Math.random() * region.images.length)]
      : null,
  );

  if (!region) return <p>Region not found</p>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ---------------- REGION BANNER ---------------- */}
      <div className="relative h-64 w-full mb-8">
        {heroImage && (
          <Image
            src={heroImage.src}
            alt={heroImage.caption}
            fill
            className="object-cover w-full h-full rounded-b-2xl"
          />
        )}
        <h1 className="absolute bottom-4 left-4 text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
          {region.title}
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* ---------------- COUNTRIES (FLAGS CAROUSEL) ---------------- */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Countries</h2>
          <div className="flex gap-4 overflow-x-auto py-2 scrollbar-hide">
            {region.countries.map((c) => (
              <div
                key={c.name}
                className="flex-shrink-0 flex flex-col items-center bg-white rounded-lg shadow px-4 py-2"
              >
                <span className="text-3xl">{c.emojiFlag}</span>
                <span className="mt-1 text-sm">{c.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ---------------- REGION BLURB ---------------- */}
        {region.blurb && (
          <div className="mb-8 p-6 bg-white rounded-xl shadow-md">
            <p className="text-gray-800">{region.blurb}</p>
          </div>
        )}

        {/* ---------------- TOP FACTS ---------------- */}
        {region.fact.length > 0 && (
          <div className="mb-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {region.fact.map((fact, i) => (
              <div
                key={i}
                className="p-4 bg-white/70 backdrop-blur-md rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5"
              >
                <p className="text-gray-800 font-medium text-sm">{fact}</p>
              </div>
            ))}
          </div>
        )}

        {/* ---------------- USER ADDED FACTS ---------------- */}
        <FactsSection continent="europe" regionKey={regionKey} />

        {/* ---------------- GALLERY ---------------- */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {region.images.map((img, i) => (
            <div
              key={i}
              className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={img.src}
                alt={img.caption}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm px-2 py-1 text-center rounded-b-lg">
                {img.caption}
              </div>
            </div>
          ))}
        </div>

        {/* ---------------- OPTIONAL MUSIC/VIDEO ---------------- */}
        {region.music && (
          <div className="mb-8 p-4 bg-white rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-center">
              Listen to Music
            </h3>
            <audio controls className="w-full rounded-lg">
              <source src={region.music} type="audio/mpeg" />
            </audio>
          </div>
        )}

        {region.videoUrl && (
          <div className="mb-8 p-4 bg-white rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-center">
              Watch Video
            </h3>
            <iframe
              src={region.videoUrl}
              title={`${region.title} video`}
              width="560"
              height="315"
              className="w-full aspect-video rounded-lg"
              allowFullScreen
            />
          </div>
        )}

        {/* ---------------- BACK LINK ---------------- */}
        <div className="mt-12 mb-8 text-center">
          <Link
            href="/europe/regions"
            className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            ← Back to Europe Regions
          </Link>
        </div>
      </div>
    </div>
  );
}
