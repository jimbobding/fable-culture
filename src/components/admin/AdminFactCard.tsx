"use client";

import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { db } from "@/firebaseConfig";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import type { Fact } from "@/app/admin/facts/page";

type Props = {
  id: string;
  fact: string;
  continent: string;
  regionKey: string;
  status: string;
  setLocalFacts: Dispatch<SetStateAction<Fact[]>>;
};

export default function AdminFactCard({
  id,
  fact,
  continent,
  regionKey,
  status,
  setLocalFacts,
}: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedFact, setEditedFact] = useState(fact);
  const [isSaving, setIsSaving] = useState(false);

  const handleApprove = async () => {
    await updateDoc(doc(db, "regionFacts", id), {
      status: "approved",
    });

    setLocalFacts((prev) =>
      prev.map((f) => (f.id === id ? { ...f, status: "approved" } : f)),
    );
  };

  const handleDelete = async () => {
    const confirmed = window.confirm("Delete this fact?");
    if (!confirmed) return;

    await deleteDoc(doc(db, "regionFacts", id));

    setLocalFacts((prev) => prev.filter((f) => f.id !== id));
  };

  const handleSave = async () => {
    const trimmed = editedFact.trim();
    if (!trimmed) return;

    setIsSaving(true);

    await updateDoc(doc(db, "regionFacts", id), {
      fact: trimmed,
    });

    setLocalFacts((prev) =>
      prev.map((f) => (f.id === id ? { ...f, fact: trimmed } : f)),
    );

    setIsSaving(false);
    setIsEditing(false);
  };

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-stone-500">
        {continent} / {regionKey}
      </p>

      {isEditing ? (
        <textarea
          value={editedFact}
          onChange={(e) => setEditedFact(e.target.value)}
          className="w-full rounded-lg border border-stone-300 p-2 text-sm"
        />
      ) : (
        <p className="text-stone-800">{fact}</p>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {status === "pending" && (
          <button
            onClick={handleApprove}
            className="rounded-lg bg-green-600 px-3 py-2 text-sm font-semibold text-white hover:bg-green-700"
          >
            Approve
          </button>
        )}

        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Edit
          </button>
        ) : (
          <>
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
            >
              {isSaving ? "Saving..." : "Save"}
            </button>

            <button
              onClick={() => {
                setIsEditing(false);
                setEditedFact(fact);
              }}
              className="rounded-lg bg-gray-400 px-3 py-2 text-sm font-semibold text-white hover:bg-gray-500"
            >
              Cancel
            </button>
          </>
        )}

        <button
          onClick={handleDelete}
          className="rounded-lg bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
