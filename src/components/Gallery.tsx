type GalleryProps = {
  images: string[];
  captions?: string[];
  columns?: number;
  hoverEffect?: "scale" | "none";
  showCaptionOnHover?: boolean;
  borderColor?: string; // tailwind class
  shadow?: string; // tailwind class
};

export default function Gallery({
  images,
  captions = [],
  columns = 3,
  hoverEffect = "scale",
  showCaptionOnHover = false,
  borderColor,
  shadow,
}: GalleryProps) {
  // ✅ Tailwind-safe grid classes
  const gridCols =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 4
        ? "sm:grid-cols-4"
        : "sm:grid-cols-3";

  return (
    <div className={`grid gap-4 ${gridCols}`}>
      {images.map((src, i) => {
        const caption = captions[i];

        return (
          <div
            key={i}
            className={`
              group relative overflow-hidden rounded-2xl border
              ${borderColor ?? "border-black/10"}
              ${shadow ?? "shadow-sm"}
              transition
              hover:shadow-md
            `}
          >
            <img
              src={src}
              alt={caption || `Image ${i + 1}`}
              className={`
                w-full object-cover
                h-44 sm:h-48 md:h-52
                transition-transform duration-300
                ${hoverEffect === "scale" ? "group-hover:scale-105" : ""}
              `}
              loading="lazy"
            />

            {showCaptionOnHover && caption && (
              <div
                className={`
                  absolute inset-0
                  bg-black/45 backdrop-blur-[1px]
                  opacity-0 group-hover:opacity-100
                  flex items-end justify-center
                  p-3 sm:p-4
                  transition-opacity duration-300
                `}
              >
                <div className="w-full text-center">
                  <span className="inline-block text-sm sm:text-base font-semibold text-white drop-shadow">
                    {caption}
                  </span>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
