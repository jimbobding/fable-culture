"use client";

import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
import { storage, db } from "@/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function StudentUploadForm() {
  const [title, setTitle] = useState("");
  const [region, setRegion] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);

    if (!selectedFile) {
      alert("Please choose an image file.");
      setIsSubmitting(false);
      return;
    }

    try {
      const storagePath = `student-uploads/${Date.now()}-${selectedFile.name}`;
      const storageRef = ref(storage, storagePath);

      await uploadBytes(storageRef, selectedFile);

      const imageUrl = await getDownloadURL(storageRef);

      await addDoc(collection(db, "gallerySubmissions"), {
        title,
        region,
        description,
        imageUrl,
        storagePath,
        status: "pending",
        submittedAt: serverTimestamp(),
      });

      alert("Upload submitted for review!");

      setTitle("");
      setRegion("");
      setDescription("");
      setSelectedFile(null);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Upload failed:", error);

      if (error instanceof Error) {
        alert(`Upload failed: ${error.message}`);
      } else {
        alert("Upload failed.");
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  const isMobile =
    typeof window !== "undefined" &&
    /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-b from-stone-50 via-orange-50/40 to-amber-50/30 px-6 py-10">
      <div className="w-full max-w-3xl">
        <div className="mb-6 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center rounded-xl border border-stone-300 bg-white px-4 py-2 text-sm font-semibold text-stone-700 shadow-sm transition hover:bg-stone-100"
          >
            ← Back
          </Link>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm">
          <div className="flex flex-col items-center justify-center border-b border-stone-200 bg-gradient-to-r from-amber-50 via-white to-orange-50 px-8 py-12 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-amber-700">
              Fable Culture
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-stone-900 md:text-5xl">
              Upload Student Work
            </h1>

            <p className="mt-4 max-w-xl text-base leading-7 text-stone-600">
              Share student work to be reviewed before being added to the
              gallery. Add a title, choose a region, write a short description,
              and upload an image.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 p-8">
            <div>
              <label
                htmlFor="title"
                className="mb-2 block text-sm font-semibold text-stone-800"
              >
                Title of work
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Rangoli Pattern"
                className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-900 shadow-sm outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
              />
            </div>

            <div>
              <label
                htmlFor="region"
                className="mb-2 block text-sm font-semibold text-stone-800"
              >
                Region
              </label>
              <select
                id="region"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-900 shadow-sm outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
              >
                <option value="">Select a region</option>
                <option value="africa">Africa</option>
                <option value="middle-east">Middle East</option>
                <option value="south-asia">South Asia</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="description"
                className="mb-2 block text-sm font-semibold text-stone-800"
              >
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Say a little about the work..."
                rows={4}
                className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-900 shadow-sm outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
              />
            </div>

            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
              <input
                ref={fileInputRef}
                id="image"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0] ?? null;
                  setSelectedFile(file);
                }}
              />

              <label className="mb-3 block text-sm font-semibold text-stone-800">
                Upload image
              </label>

              <div className="flex flex-col gap-3 sm:flex-row">
                {isMobile && (
                  <button
                    type="button"
                    onClick={() => {
                      if (fileInputRef.current) {
                        fileInputRef.current.setAttribute(
                          "capture",
                          "environment",
                        );
                        fileInputRef.current.click();
                      }
                    }}
                    className="flex-1 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    📸 Take Photo
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => {
                    if (fileInputRef.current) {
                      fileInputRef.current.removeAttribute("capture");
                      fileInputRef.current.click();
                    }
                  }}
                  className="flex-1 rounded-xl bg-stone-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-stone-800"
                >
                  📁 Upload File
                </button>
              </div>

              {selectedFile ? (
                <div className="mt-4 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
                  Selected file:{" "}
                  <span className="font-medium">{selectedFile.name}</span>
                </div>
              ) : (
                <p className="mt-4 text-sm text-stone-500">
                  No file selected yet.
                </p>
              )}
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-stone-500">
                Submissions are reviewed before appearing in the gallery.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-xl border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-700 shadow-sm transition hover:bg-stone-100"
                >
                  Cancel
                </Link>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-xl bg-amber-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit Work"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
