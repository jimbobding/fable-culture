type GalleryProps = {
  images: string[];
  captions?: string[];
  columns?: number;
  hoverEffect?: "scale" | "none";
  showCaptionOnHover?: boolean;
};

export default function Gallery({
  images,
  captions = [],
  columns = 3,
  hoverEffect = "scale",
  showCaptionOnHover = false,
}: GalleryProps) {
  return (
    <div className={`grid gap-4 sm:grid-cols-${columns}`}>
      {images.map((src, i) => (
        <div key={i} className="relative overflow-hidden rounded-lg shadow-lg">
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
