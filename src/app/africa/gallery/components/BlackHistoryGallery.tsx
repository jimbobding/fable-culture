// src/app/africa/gallery/components/BlackHistoryGallery.tsx
"use client";

import Image from "next/image";
import {
  blackHistoryHero,
  blackHistoryImages,
} from "@/data/africa/blackHistoryGallery";

export default function BlackHistoryGallery() {
  return (
    <section className="bg-blue-50 p-6 rounded-lg mb-12">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        Black History Month
      </h2>

      <div className="flex flex-col gap-6">
        {/* Hero image + paragraph */}
        <div className="flex flex-col items-center w-full">
          <Image
            src={blackHistoryHero.src}
            alt={blackHistoryHero.alt}
            width={600}
            height={400}
            className="rounded-lg"
          />
          <p className="text-center text-gray-700 mt-4">
            {blackHistoryHero.description}
          </p>
        </div>

        {/* Smaller images grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {blackHistoryImages.map((img, i) => (
            <div key={i} className="flex flex-col items-center">
              <Image
                src={img.src}
                alt={img.alt}
                width={280}
                height={180}
                className="rounded-lg object-cover"
              />
              <p className="text-center text-gray-700 mt-2">{img.tagline}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
