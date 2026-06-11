"use client";

import { db } from "@/firebaseConfig";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";

type Props = {
  id: string;
  title?: string;
  explanation?: string;
  region?: string;
  country?: string;
  periodKey?: string;
  studentName?: string;
  status?: string;
  submittedAt?: any;
};

export default function AdminTimelineCard({
  id,
  title,
  explanation,
  region,
  country,
  periodKey,
  studentName,
  status: submissionStatus,
  submittedAt,
}: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title ?? "");
  const [editExplanation, setEditExplanation] = useState(explanation ?? "");

  const handleApprove = async () => {
    await updateDoc(doc(db, "timelineSubmissions", id), {
      status: "approved",
    });

    window.location.reload();
  };

  const handleSave = async () => {
    await updateDoc(doc(db, "timelineSubmissions", id), {
      title: editTitle.trim(),
      explanation: editExplanation.trim(),
    });

    setIsEditing(false);
    window.location.reload();
  };

  const handleDelete = async () => {
    const confirmed = window.confirm("Delete this submission?");
    if (!confirmed) return;

    await deleteDoc(doc(db, "timelineSubmissions", id));
    window.location.reload();
  };

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
      <div>
        <p className="mb-2 text-xs uppercase tracking-wide text-stone-500">
          {region} / {country || "Regional Timeline"}
        </p>

        <p className="mb-2 text-xs text-stone-500">
          By: {studentName || "Anonymous"}
        </p>

        <p className="mb-2 text-xs font-semibold text-amber-700">
          Period: {periodKey}
        </p>

        <p className="mb-2 text-xs font-semibold text-green-700">
          Status: {submissionStatus || "pending"}
        </p>

        {isEditing ? (
          <input
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="mb-2 w-full rounded-lg border border-stone-300 px-3 py-2"
          />
        ) : (
          <h3 className="mb-2 text-lg font-bold text-stone-900">
            {title || "No title"}
          </h3>
        )}

        {isEditing ? (
          <textarea
            value={editExplanation}
            onChange={(e) => setEditExplanation(e.target.value)}
            rows={4}
            className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm"
          />
        ) : (
          <p className="text-sm leading-relaxed text-stone-600">
            {explanation || "No explanation provided."}
          </p>
        )}

        {submittedAt?.seconds && (
          <p className="mt-3 text-xs text-stone-400">
            {new Date(submittedAt.seconds * 1000).toLocaleString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        )}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Edit
          </button>
        )}

        {submissionStatus !== "approved" && !isEditing && (
          <button
            onClick={handleApprove}
            className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700"
          >
            Approve
          </button>
        )}

        {isEditing && (
          <button
            onClick={handleSave}
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            Save
          </button>
        )}

        {isEditing && (
          <button
            onClick={() => {
              setEditTitle(title ?? "");
              setEditExplanation(explanation ?? "");
              setIsEditing(false);
            }}
            className="rounded-lg bg-stone-500 px-4 py-2 text-sm font-semibold text-white hover:bg-stone-600"
          >
            Cancel
          </button>
        )}

        <button
          onClick={handleDelete}
          className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
