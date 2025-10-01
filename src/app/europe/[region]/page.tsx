"use client";

import Link from "next/link";
import Image from "next/image";
import { europeRegions } from "@/data/europeRegions";

export default function EuropeRegionsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">European Regions</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {europeRegions.map((region) => (
          <Link
            key={region.slug}
            href={`/europe/regions/${region.slug}`}
            className="group rounded-2xl border border-gray-200 bg-white/80 backdrop-blur p-6 shadow-md hover:shadow-xl transform transition hover:-translate-y-1 text-center"
          >
            <Image
              src={region.regionImage}
              alt={region.title}
              width={400}
              height={200}
              className="rounded-xl mb-4 object-cover"
            />
            <h2 className="text-2xl font-semibold">{region.title}</h2>
            <p className="text-gray-600 mt-2">{region.blurb}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
