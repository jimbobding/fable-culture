"use client";

import { useState } from "react";

type Props = {
  title?: string;
  region?: string;
  description?: string;
  imageUrl?: string;
  submittedAt?: any;
};

export default function StudentUploadGalleryCard({
  title,
  region,
  description,
  imageUrl,
  submittedAt,
}: Props) {
  const [rotation, setRotation] = useState(0);

  function handleRotate() {
    setRotation((prev) => (prev + 90) % 360);
  }

  return (
    <article className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center justify-between border-b border-stone-100 bg-gradient-to-r from-amber-50 via-orange-50 to-rose-50 px-4 py-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
            Fable House
          </p>
          <p className="text-sm text-stone-500">Student Gallery</p>
        </div>

        <button
          type="button"
          onClick={handleRotate}
          className="rounded-lg border border-stone-200 bg-white px-3 py-1.5 text-sm font-medium text-stone-700 transition hover:bg-stone-50"
        >
          Rotate
        </button>
      </div>

      <div className="flex min-h-[320px] items-center justify-center bg-stone-100 p-4">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title || "Student upload"}
            className="max-h-[440px] w-auto max-w-full rounded-2xl object-contain shadow-sm transition duration-300"
            style={{ transform: `rotate(${rotation}deg)` }}
          />
        ) : (
          <div className="text-sm text-stone-500">No image available</div>
        )}
      </div>

      <div className="space-y-3 p-5">
        <div>
          <h2 className="text-xl font-semibold text-stone-900">
            {title || "Untitled submission"}
          </h2>
          <p className="mt-1 text-sm font-medium text-amber-700">
            {region || "Region not provided"}
          </p>
          {submittedAt && (
            <p className="text-xs text-stone-500 mt-2">
              Submitted: {new Date(submittedAt.seconds * 1000).toLocaleString()}
            </p>
          )}
        </div>

        <p className="text-sm leading-6 text-stone-700">
          {description || "No description provided."}
        </p>
      </div>
    </article>
  );
}
