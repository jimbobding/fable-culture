import BlackHistoryGallery from "./components/BlackHistoryGallery";
import DrummingGallery from "./components/DrummingGallery";
import JollofGallery from "./components/JollofGallery";

export default function AfricaGalleryPage() {
  return (
    <main className="p-6 max-w-7xl mx-auto">
      {/* ... other sections like drumming, jollof ... */}
      <DrummingGallery />

      <BlackHistoryGallery />
      <JollofGallery />
    </main>
  );
}
