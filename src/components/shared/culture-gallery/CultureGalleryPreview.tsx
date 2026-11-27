"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { getPublishedCultureGalleryArtRoomProjects } from "@/app/lib/cultureGalleryArtRoom";

type Props = {
  region: string;
  regionName: string;
  fallbackImage: string;
};

export default function CultureGalleryPreview({
  region,
  regionName,
  fallbackImage,
}: Props) {
  const [image, setImage] = useState(fallbackImage);

  useEffect(() => {
    let active = true;

    setImage(fallbackImage);

    async function loadPreview() {
      try {
        const projects =
          await getPublishedCultureGalleryArtRoomProjects(region);

        const project = projects.find(
          (item) => item.image || item.exampleImages.length > 0,
        );

        const previewImage =
          project?.image || project?.exampleImages[0]?.imageUrl;

        if (active && previewImage) {
          setImage(previewImage);
        }
      } catch (error) {
        console.error("Could not load gallery preview:", error);
      }
    }

    void loadPreview();

    return () => {
      active = false;
    };
  }, [region, fallbackImage]);

  return (
    <Link
      href={`/${region}/culture-gallery`}
      className="group relative flex min-h-[420px] flex-col items-center justify-end overflow-hidden border-[3px] border-white/20 p-8 text-center text-white transition duration-300 hover:border-[#F4C542]"
    >
      {/* Gallery artwork */}
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        onError={() => {
          if (image !== fallbackImage) {
            setImage(fallbackImage);
          }
        }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      {/* Gallery entrance */}
      <div className="relative z-10">
        <h3 className="text-3xl font-black uppercase tracking-tight sm:text-5xl">
          Enter the Gallery
        </h3>

        <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-white/80">
          Discover the art, creativity and cultural traditions of {regionName}.
        </p>

        <div className="mt-8 inline-flex items-center gap-5 bg-[#F4C542] px-6 py-4 text-sm font-black uppercase tracking-[0.15em] text-[#211F1B]">
          Explore the Gallery
          <span className="text-xl transition-transform group-hover:translate-x-2">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
