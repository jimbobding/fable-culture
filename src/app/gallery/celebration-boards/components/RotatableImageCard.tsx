"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  caption?: string;
};

export default function RotatableImageCard({ src, alt, caption }: Props) {
  const [rotation, setRotation] = useState(0);

  return (
    <figure className="rounded-2xl overflow-hidden bg-white shadow border border-gray-200">
      <div className="relative aspect-[4/3] bg-gray-100">
        <div
          className="absolute inset-0"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <button
          type="button"
          onClick={() => setRotation((prev) => prev + 90)}
          className="absolute right-2 top-2 rounded-lg bg-white/90 px-3 py-1 text-sm font-semibold text-gray-800 shadow hover:bg-white"
        >
          ↻ Rotate
        </button>
      </div>

      {caption ? (
        <figcaption className="p-3 text-sm text-gray-700">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
