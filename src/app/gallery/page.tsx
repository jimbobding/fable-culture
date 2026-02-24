"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import DrummingGallery from "@/app/africa/gallery/components/DrummingGallery";
import BlackHistoryGallery from "@/app/africa/gallery/components/BlackHistoryGallery";
import JollofGallery from "@/app/africa/gallery/components/JollofGallery";

const galleryComponents = [DrummingGallery, BlackHistoryGallery, JollofGallery];

export default function GlobalGalleryPage() {
  const pathname = usePathname();

  useEffect(() => {
    // When we stop being on /gallery, clear the cookie
    return () => {
      // Only clear if we are navigating away from /gallery
      if (pathname.startsWith("/gallery")) {
        document.cookie = "fable-auth=; path=/; max-age=0; SameSite=Lax";
      }
    };
  }, [pathname]);

  return (
    <main className="bg-slate-50 px-6 py-12">
      <div className="max-w-7xl mx-auto space-y-24">
        {galleryComponents.map((Gallery, i) => (
          <Gallery key={i} />
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <Link
          href="/"
          className="group inline-flex items-center rounded-xl bg-gray-100 px-4 py-2 font-semibold text-gray-800 shadow hover:bg-gray-200 transition"
          onClick={() => {
            document.cookie = "fable-auth=; path=/; max-age=0; SameSite=Lax";
          }}
        >
          <span className="mr-2">🏠</span>
          Back to Landing Page
        </Link>
      </div>
    </main>
  );
}
