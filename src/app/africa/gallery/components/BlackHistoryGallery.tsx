"use client";

import Image from "next/image";
import {
  blackHistoryHero,
  blackHistoryImages,
} from "@/data/africa/blackHistoryGallery";

export default function BlackHistoryGallery() {
  return (
    <section className="py-12">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6 md:mb-8 tracking-tight drop-shadow-sm">
        Black History Month ✊🏾
      </h2>

      {/* Hero image */}
      <div className="flex flex-col items-center mb-14">
        <Image
          src={blackHistoryHero.src}
          alt={blackHistoryHero.alt}
          width={700}
          height={450}
          className="rounded-lg shadow-lg hover:shadow-xl transition"
        />

        <p className="text-center text-gray-700 mt-6 max-w-2xl">
          {blackHistoryHero.description}
        </p>
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {blackHistoryImages.map((img, i) => (
          <div key={i} className="text-center">
            <Image
              src={img.src}
              alt={img.alt}
              width={280}
              height={180}
              className="rounded-lg shadow-lg hover:shadow-xl transition"
            />
            <p className="mt-3 text-gray-600">{img.tagline}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
