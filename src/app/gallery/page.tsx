"use client";

import Link from "next/link";

import DrummingGallery from "@/app/africa/gallery/components/DrummingGallery";
import BlackHistoryGallery from "@/app/africa/gallery/components/BlackHistoryGallery";
import JollofGallery from "@/app/africa/gallery/components/JollofGallery";

const galleryComponents = [DrummingGallery, BlackHistoryGallery, JollofGallery];

export const dynamic = "force-dynamic";

export default function GlobalGalleryPage() {
  const handleLogout = () => {
    document.cookie = "fable-auth=; path=/; max-age=0";
    document.cookie = "fable-admin=; path=/; max-age=0";
    window.location.href = "/";
  };

  return (
    <main className="bg-slate-50 px-6 py-12">
      <div className="max-w-7xl mx-auto space-y-24">
        <section className="bg-white rounded-2xl shadow border border-gray-200 p-6">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Gallery Sections
            </h2>

            <button
              onClick={handleLogout}
              className="rounded-xl bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-800 shadow hover:bg-gray-200 transition"
            >
              Log out
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/gallery/celebration-boards"
              className="rounded-xl border border-gray-200 bg-slate-50 p-4 hover:bg-slate-100 transition shadow-sm"
            >
              <div className="text-lg font-semibold text-gray-900">
                🏆 Celebration Boards
              </div>
              <div className="text-sm text-gray-600 mt-1">
                Monthly displays and school celebrations
              </div>
            </Link>

            <Link
              href="/gallery/student-uploads"
              className="rounded-xl border border-gray-200 bg-slate-50 p-4 hover:bg-slate-100 transition shadow-sm"
            >
              <div className="text-lg font-semibold text-gray-900">
                🖼️ Student Uploads
              </div>
              <div className="text-sm text-gray-600 mt-1">
                Approved student work submitted to Fable Culture
              </div>
            </Link>

            <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-4 opacity-50">
              <div className="text-sm text-gray-500 mt-1">
                Europe, Middle East & more
              </div>
            </div>
          </div>
        </section>

        {galleryComponents.map((Gallery, i) => (
          <Gallery key={i} />
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <Link
          href="/"
          className="group inline-flex items-center rounded-xl bg-gray-100 px-4 py-2 font-semibold text-gray-800 shadow hover:bg-gray-200 transition"
          onClick={() => {
            document.cookie = "fable-auth=; path=/; max-age=0";
            document.cookie = "fable-admin=; path=/; max-age=0";
          }}
        >
          <span className="mr-2">🏠</span>
          Back to Landing Page
        </Link>
      </div>
    </main>
  );
}
