"use client";

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
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-lg border bg-white p-6 shadow-sm"
    >
      <div>
        <label htmlFor="title" className="mb-2 block text-sm font-medium">
          Title of work
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Rangoli Pattern"
          className="w-full rounded-md border px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="region" className="mb-2 block text-sm font-medium">
          Region
        </label>
        <select
          id="region"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="w-full rounded-md border px-3 py-2"
        >
          <option value="">Select a region</option>
          <option value="africa">Africa</option>
          <option value="middle-east">Middle East</option>
          <option value="south-asia">South Asia</option>
        </select>
      </div>

      <div>
        <label htmlFor="description" className="mb-2 block text-sm font-medium">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Say a little about the work..."
          rows={4}
          className="w-full rounded-md border px-3 py-2"
        />
      </div>

      <div>
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
        <div>
          <label className="mb-2 block text-sm font-medium">Upload image</label>

          <div className="flex gap-3">
            {isMobile && (
              <button
                type="button"
                onClick={() => {
                  if (fileInputRef.current) {
                    fileInputRef.current.setAttribute("capture", "environment");
                    fileInputRef.current.click();
                  }
                }}
                className="flex-1 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
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
              className="flex-1 rounded-md bg-gray-600 px-4 py-2 text-white hover:bg-gray-700"
            >
              📁 Upload File
            </button>
          </div>

          {selectedFile && (
            <p className="mt-2 text-sm text-gray-600">
              Selected file: {selectedFile.name}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-md bg-black px-4 py-2 text-white hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : "Submit work"}
      </button>
    </form>
  );
}
