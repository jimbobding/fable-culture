export const dynamic = "force-dynamic";
import Image from "next/image";
import Link from "next/link";
import { db } from "@/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import StudentUploadGalleryCard from "../../../components/StudentUploadGalleryCard";

export default async function StudentUploadsGalleryPage() {
  const uploadsQuery = query(
    collection(db, "gallerySubmissions"),
    where("status", "==", "approved"),
  );

  const snapshot = await getDocs(uploadsQuery);

  const uploads = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as {
    id: string;
    title?: string;
    region?: string;
    description?: string;
    imageUrl?: string;
    submittedAt?: any;
  }[];

  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-50 via-orange-50/40 to-amber-50/30">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <section className="mb-10 overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm">
          <div className="flex flex-col items-center justify-center gap-6 p-8 text-center">
            {/* Logo */}
            <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 mx-auto">
              <Image
                src="/images/FHLogo-Horizontal.svg"
                alt="Fable House logo"
                width={80}
                height={80}
                className="h-auto w-auto object-contain"
              />
            </div>

            {/* Text */}
            <div className="text-center">
              <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-amber-700">
                Fable Culture
              </p>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-900">
                Student Uploads
              </h1>

              <p className="mt-3 max-w-xl mx-auto text-base leading-7 text-stone-600">
                Approved student work from across Fable Culture, celebrating
                creativity, culture, and the projects produced throughout the
                year.
              </p>

              {/* Buttons */}
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <Link
                  href="/gallery"
                  className="inline-flex rounded-lg border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-800 transition hover:bg-stone-50"
                >
                  Back to Gallery
                </Link>

                <Link
                  href="/upload"
                  className="inline-flex rounded-lg bg-amber-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-amber-700"
                >
                  Upload Student Work
                </Link>
              </div>
            </div>
          </div>
        </section>

        {uploads.length === 0 ? (
          <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
            No approved uploads yet.
          </div>
        ) : (
          <section className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {uploads.map((upload) => (
              <StudentUploadGalleryCard
                key={upload.id}
                title={upload.title}
                region={upload.region}
                description={upload.description}
                imageUrl={upload.imageUrl}
                submittedAt={upload.submittedAt}
              />
            ))}
          </section>
        )}
      </div>
    </main>
  );
}
