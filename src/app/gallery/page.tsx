"use client";

// AFRICA gallery components
import DrummingGallery from "@/app/africa/gallery/components/DrummingGallery";
import BlackHistoryGallery from "@/app/africa/gallery/components/BlackHistoryGallery";
import JollofGallery from "@/app/africa/gallery/components/JollofGallery";

// FUTURE galleries (Europe/UK)
// import EuropeanLandmarksGallery from "@/app/europe/gallery/components/EuropeanLandmarksGallery";
// import BritishValuesGallery from "@/app/uk/gallery/components/BritishValuesGallery";

const galleryComponents = [
  DrummingGallery,
  BlackHistoryGallery,
  JollofGallery,
  // EuropeanLandmarksGallery,
  // BritishValuesGallery
];

export default function GlobalGalleryPage() {
  return (
    <main className="bg-slate-50 px-6 py-12">
      <div className="max-w-7xl mx-auto space-y-24">
        {galleryComponents.map((Gallery, i) => (
          <Gallery key={i} />
        ))}
      </div>
    </main>
  );
}
