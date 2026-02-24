"use client";

import Image from "next/image";
import { drummingGallery, drummingVideo } from "@/data/africa/drummingGallery";

export default function AfricaDrummingGallery() {
  return (
    <section className="py-12">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 tracking-tight drop-shadow-sm">
        African Drumming 🥁
      </h2>

      {/* Hero video */}
      <div className="flex flex-col items-center mb-14">
        <video
          controls
          preload="metadata"
          className="w-full max-w-4xl rounded-lg shadow-lg hover:shadow-xl transition"
        >
          <source src={drummingVideo.src} type="video/mp4" />
        </video>

        <p className="text-center text-gray-700 mt-6 max-w-2xl">
          {drummingVideo.description}
        </p>
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {drummingGallery.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`Drumming ${i + 1}`}
            width={400}
            height={300}
            className="w-full h-60 object-cover rounded-lg shadow-lg hover:shadow-xl transition"
          />
        ))}
      </div>
    </section>
  );
}
