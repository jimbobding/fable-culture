// src/app/africa/gallery/components/JollofGallery.tsx
"use client";

import Image from "next/image";
import { jollofGallery } from "@/data/africa/jollofGallery";

export default function JollofGallery() {
  return (
    <section className="bg-yellow-50 p-8 rounded-lg mb-12">
      {/* Main heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-orange-600 drop-shadow-lg">
        Jollof Showdown!
      </h2>

      {/* Subheading with fun effect */}
      <h3 className="text-2xl md:text-3xl font-black text-center text-red-500 mb-4 animate-pulse">
        Ghanaian Style 🇬🇭 VS Kenyan Style 🇰🇪
      </h3>

      {/* Description / blurb */}
      <p className="text-center text-gray-700 mb-8 text-lg md:text-xl">
        Our resident chef, Jessica, decided to try two different styles of
        Jollof rice! Each country claims theirs is the best — Ghanaian or
        Kenyan? Dive in and see which one steals the spotlight!
      </p>

      {/* Gallery grid */}
      <div className="flex flex-col md:flex-row gap-8">
        {jollofGallery.map((recipe, i) => (
          <div key={i} className="flex-1 flex flex-col gap-6">
            {/* Hero image */}
            <div className="flex flex-col items-center">
              <Image
                src={recipe.hero}
                alt={`${recipe.title} Hero`}
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
              {recipe.description && (
                <p className="text-center text-gray-700 mt-3 text-md md:text-lg">
                  {recipe.description}
                </p>
              )}
            </div>

            {/* Smaller images grid */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {recipe.images.map((imgSrc, j) => (
                <div
                  key={j}
                  className="rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <Image
                    src={imgSrc}
                    alt={`${recipe.title} Step ${j + 1}`}
                    width={280}
                    height={180}
                    className="w-full h-40 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
