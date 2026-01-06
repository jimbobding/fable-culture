import BlackHistoryGallery from "./components/BlackHistoryGallery";
import DrummingGallery from "./components/DrummingGallery";
import JollofGallery from "./components/JollofGallery";

export default function AfricaGalleryPage() {
  return (
    <main className="bg-slate-50 px-6 py-12">
      <div className="max-w-7xl mx-auto space-y-24">
        <DrummingGallery />
        <BlackHistoryGallery />
        <JollofGallery />
      </div>
    </main>
  );
}
