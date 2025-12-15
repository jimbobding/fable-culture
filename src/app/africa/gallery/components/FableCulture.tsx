"use client";

import Image from "next/image";

type GalleryItem = {
  src: string;
  alt: string;
  description: string;
};

type FableCultureSectionProps = {
  title: string;
  heroImage: {
    src: string;
    alt: string;
    paragraph: string;
  };
  gallery: GalleryItem[];
};

export default function FableCultureSection({
  title,
  heroImage,
  gallery,
}: FableCultureSectionProps) {
  return (
    <section className="py-12 px-4">
      {/* Title */}
      <h2 className="text-4xl font-bold mb-8 text-center">{title}</h2>

      {/* Hero image + description */}
      <div className="flex flex-col items-center mb-12">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          width={900}
          height={600}
          className="rounded-xl shadow-lg"
        />
        <p className="text-center text-gray-700 mt-4 max-w-3xl">
          {heroImage.paragraph}
        </p>
      </div>

      {/* Gallery grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {gallery.map((item, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={400}
              height={300}
              className="w-full h-60 object-cover"
            />
            <p className="p-3 text-center text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
