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
      {images.map((src, i) => (
        <div
          key={i}
          className={`
            relative overflow-hidden rounded-lg border
            ${borderColor ?? "border-gray-200"}
            ${shadow ?? "shadow-md"}
          `}
        >
          <img
            src={src}
            alt={captions[i] || `Image ${i + 1}`}
            className={`w-full h-48 object-cover transition-transform duration-300 ${
              hoverEffect === "scale" ? "hover:scale-105" : ""
            }`}
          />

          {showCaptionOnHover && captions[i] && (
            <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 flex items-center justify-center text-white text-center p-2 transition-opacity duration-300">
              <span className="text-sm md:text-base font-semibold">
                {captions[i]}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
