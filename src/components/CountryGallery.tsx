import Image from "next/image";
import React from "react";

type GalleryItem = {
  src: string;
  label: string;
};

type Theme = {
  primary: string;
  secondary: string;
  accent: string;
};

type CountryGalleryProps = {
  gallery?: GalleryItem[]; // optional, default to []
  theme: Theme;
};

const CountryGallery: React.FC<CountryGalleryProps> = ({
  gallery = [],
  theme,
}) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
      {gallery.map((item) => (
        <div
          key={item.src}
          className="relative group overflow-hidden rounded-xl shadow-lg"
        >
          <Image
            src={item.src}
            alt={item.label}
            width={300}
            height={200}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div
            className="absolute bottom-0 w-full py-2 px-3 text-white font-semibold text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ backgroundColor: theme.primary + "AA" }}
          >
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryGallery;
