// src/app/africa/gallery/components/AfricaDrummingGallery.tsx
"use client";

import Image from "next/image";
import { drummingGallery, drummingVideo } from "@/data/africa/drummingGallery";

export default function AfricaDrummingGallery() {
  return (
    <section className="mb-12">
      {/* Hero Video */}
      <div className="flex flex-col items-center mb-6">
        <video
          controls
          className="w-full max-w-4xl rounded-lg shadow-lg"
          preload="metadata"
        >
          <source src={drummingVideo.mediaUrl} />
        </video>
        <p className="text-center text-gray-700 mt-4">
          {drummingVideo.description}
        </p>
      </div>

      {/* Smaller Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {drummingGallery.map((src, i) => (
          <div
            key={i}
            className="rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <Image
              src={src} // string path from drummingGallery
              alt={`Drumming Image ${i + 1}`}
              width={400}
              height={300}
              className="w-full h-60 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
