"use client";

import { db } from "@/firebaseConfig";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";

type Props = {
  id: string;
  title?: string;
  explanation?: string;
  region?: string;
  country?: string;
  periodKey?: string;
  studentName?: string;
};

export default function AdminTimelineCard({
  id,
  title,
  explanation,
  region,
  country,
  periodKey,
  studentName,
}: Props) {
  const handleApprove = async () => {
    await updateDoc(doc(db, "timelineSubmissions", id), {
      status: "approved",
    });

    window.location.reload();
  };

  const handleDelete = async () => {
    const confirmed = window.confirm("Delete this submission?");
    if (!confirmed) return;

    await deleteDoc(doc(db, "timelineSubmissions", id));

    window.location.reload();
  };

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm flex flex-col justify-between">
      <div>
        <p className="text-xs uppercase tracking-wide text-stone-500 mb-2">
          {region} / {country}
        </p>

        <p className="text-xs text-stone-500 mb-2">
          By: {studentName || "Anonymous"}
        </p>

        <p className="text-xs text-amber-700 font-semibold mb-2">
          Period: {periodKey}
        </p>

        <h3 className="text-lg font-bold text-stone-900 mb-2">
          {title || "No title"}
        </h3>

        <p className="text-sm text-stone-600 leading-relaxed">
          {explanation || "No explanation provided."}
        </p>
      </div>

      <div className="mt-6 flex gap-3">
        <button
          onClick={handleApprove}
          className="flex-1 rounded-xl bg-green-600 text-white py-2 text-sm font-semibold hover:bg-green-700"
        >
          Approve
        </button>

        <button
          onClick={handleDelete}
          className="flex-1 rounded-xl bg-red-600 text-white py-2 text-sm font-semibold hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
