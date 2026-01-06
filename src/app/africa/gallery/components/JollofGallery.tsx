"use client";

import Image from "next/image";
import Link from "next/link";
import { jollofGallery } from "@/data/africa/jollofGallery";

export default function JollofGallery() {
  return (
    <section className="py-12">
      {/* Main heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 tracking-tight drop-shadow-sm text-orange-600">
        Jollof Showdown! 🍚
      </h2>

      {/* Subtitle */}
      <h3 className="text-xl md:text-2xl font-black text-center text-red-500 mb-6 animate-pulse">
        Ghana 🇬🇭 VS Kenya 🇰🇪
      </h3>

      {/* Description */}
      <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto text-lg">
        Our resident chef Jessica tried two styles of Jollof rice — which one
        wins?
      </p>

      {/* Gallery content */}
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
                className="rounded-lg shadow-lg hover:shadow-xl transition"
              />
              {recipe.description && (
                <p className="text-center text-gray-700 mt-4 max-w-2xl">
                  {recipe.description}
                </p>
              )}

              {recipe.recipeUrl && (
                <Link
                  href={recipe.recipeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-orange-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-orange-700 transition"
                >
                  🍽 View Recipe
                </Link>
              )}
            </div>

            {/* Steps / smaller images */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {recipe.images.map((imgSrc, j) => (
                <div
                  key={j}
                  className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
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
