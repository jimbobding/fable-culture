"use client";

import { storage, db } from "@/firebaseConfig";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";

type Props = {
  id: string;
  title?: string;
  region?: string;
  description?: string;
  imageUrl?: string;
  storagePath?: string;
};

export default function AdminSubmissionCard({
  id,
  title,
  region,
  description,
  imageUrl,
  storagePath,
}: Props) {
  async function handleApprove() {
    try {
      await updateDoc(doc(db, "gallerySubmissions", id), {
        status: "approved",
      });

      alert("Approved!");
      window.location.reload();
    } catch (error) {
      console.error("Approve failed:", error);

      if (error instanceof Error) {
        alert(`Failed to approve: ${error.message}`);
      } else {
        alert("Failed to approve.");
      }
    }
  }

  async function handleDelete() {
    const confirmed = window.confirm(
      "Are you sure you want to delete this submission?",
    );

    if (!confirmed) return;

    try {
      console.log("Deleting submission:", { id, storagePath });

      if (typeof storagePath === "string" && storagePath.trim() !== "") {
        try {
          await deleteObject(ref(storage, storagePath));
          console.log("Storage object deleted.");
        } catch (storageError) {
          console.warn("Storage delete skipped/failed:", storageError);
        }
      }

      await deleteDoc(doc(db, "gallerySubmissions", id));
      console.log("Firestore document deleted.");

      alert("Submission deleted.");
      window.location.reload();
    } catch (error) {
      console.error("Delete failed:", error);

      if (error instanceof Error) {
        alert(`Delete failed: ${error.message}`);
      } else {
        alert("Delete failed.");
      }
    }
  }

  return (
    <article className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-[4/3] w-full bg-stone-100">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title || "Student submission"}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-stone-500">
            No image available
          </div>
        )}
      </div>

      <div className="space-y-3 p-5">
        <div>
          <h2 className="text-xl font-semibold text-stone-900">
            {title || "Untitled submission"}
          </h2>
          <p className="mt-1 text-sm font-medium text-amber-700">
            {region || "Region not provided"}
          </p>
        </div>

        <p className="min-h-[72px] text-sm leading-6 text-stone-700">
          {description || "No description provided."}
        </p>

        <div className="flex gap-3 pt-2">
          <button
            onClick={handleApprove}
            className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-700"
          >
            Approve
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}
