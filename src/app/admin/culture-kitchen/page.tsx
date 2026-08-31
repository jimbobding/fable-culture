"use client";

import { useEffect, useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/firebaseConfig";

type KitchenSubmission = {
  id: string;

  creatorName: string;
  dishName: string;

  inspiration: string;
  description: string;
  keyIngredients: string;
  adaptation: string;

  makeAgain: "yes" | "maybe" | "no";

  imageUrl?: string;
  storagePath?: string;

  region: string;

  status: "pending" | "approved" | "rejected";

  submittedAt?: {
    seconds: number;
  };
};

export default function CultureKitchenAdminPage() {
  const [submissions, setSubmissions] = useState<KitchenSubmission[]>([]);
  const [loading, setLoading] = useState(true);

  const [editingId, setEditingId] = useState<string | null>(null);

  const [editForm, setEditForm] = useState({
    creatorName: "",
    dishName: "",
    inspiration: "",
    description: "",
    keyIngredients: "",
    adaptation: "",
    makeAgain: "yes" as "yes" | "maybe" | "no",
  });

  async function loadSubmissions() {
    try {
      setLoading(true);

      const q = query(
        collection(db, "cultureKitchenSubmissions"),
        orderBy("submittedAt", "desc"),
      );

      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((docItem) => ({
        id: docItem.id,
        ...docItem.data(),
      })) as KitchenSubmission[];

      setSubmissions(data);
    } catch (error) {
      console.error("Could not load Culture Kitchen submissions:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadSubmissions();
  }, []);

  async function updateStatus(id: string, status: "approved" | "rejected") {
    await updateDoc(doc(db, "cultureKitchenSubmissions", id), {
      status,
    });

    setSubmissions((current) =>
      current.map((submission) =>
        submission.id === id
          ? {
              ...submission,
              status,
            }
          : submission,
      ),
    );
  }

  async function removeSubmission(id: string) {
    const confirmed = window.confirm("Delete this Culture Kitchen submission?");

    if (!confirmed) return;

    await deleteDoc(doc(db, "cultureKitchenSubmissions", id));

    setSubmissions((current) =>
      current.filter((submission) => submission.id !== id),
    );
  }

  function startEditing(submission: KitchenSubmission) {
    setEditingId(submission.id);

    setEditForm({
      creatorName: submission.creatorName,
      dishName: submission.dishName,
      inspiration: submission.inspiration,
      description: submission.description,
      keyIngredients: submission.keyIngredients,
      adaptation: submission.adaptation,
      makeAgain: submission.makeAgain,
    });
  }

  function cancelEditing() {
    setEditingId(null);
  }

  async function saveChanges(id: string) {
    await updateDoc(doc(db, "cultureKitchenSubmissions", id), {
      creatorName: editForm.creatorName.trim(),
      dishName: editForm.dishName.trim(),
      inspiration: editForm.inspiration.trim(),
      description: editForm.description.trim(),
      keyIngredients: editForm.keyIngredients.trim(),
      adaptation: editForm.adaptation.trim(),
      makeAgain: editForm.makeAgain,
    });

    setSubmissions((current) =>
      current.map((submission) =>
        submission.id === id
          ? {
              ...submission,
              creatorName: editForm.creatorName.trim(),
              dishName: editForm.dishName.trim(),
              inspiration: editForm.inspiration.trim(),
              description: editForm.description.trim(),
              keyIngredients: editForm.keyIngredients.trim(),
              adaptation: editForm.adaptation.trim(),
              makeAgain: editForm.makeAgain,
            }
          : submission,
      ),
    );

    setEditingId(null);
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-stone-100 p-6">
        <p>Loading Culture Kitchen submissions...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-stone-100 px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-orange-700">
            Admin
          </p>

          <h1 className="mt-2 text-4xl font-black text-stone-900">
            Culture Kitchen
          </h1>

          <p className="mt-3 text-stone-600">
            Review, edit and approve inspired dishes before they appear
            publicly.
          </p>
        </div>

        {submissions.length === 0 ? (
          <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
            <p className="text-4xl">🍜</p>

            <p className="mt-3 font-bold text-stone-700">
              No Culture Kitchen submissions yet.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {submissions.map((submission) => (
              <article
                key={submission.id}
                className="overflow-hidden rounded-[2rem] bg-white shadow-sm"
              >
                <div className="grid md:grid-cols-[300px_1fr]">
                  <div className="min-h-[250px] bg-orange-50">
                    {submission.imageUrl ? (
                      <img
                        src={submission.imageUrl}
                        alt={submission.dishName}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full min-h-[250px] items-center justify-center text-6xl">
                        🍽️
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    {editingId === submission.id ? (
                      <div className="space-y-5">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <label className="space-y-2">
                            <span className="text-sm font-bold text-stone-700">
                              Creator name
                            </span>

                            <input
                              type="text"
                              value={editForm.creatorName}
                              onChange={(e) =>
                                setEditForm((current) => ({
                                  ...current,
                                  creatorName: e.target.value,
                                }))
                              }
                              className="w-full rounded-xl border border-stone-300 px-4 py-3"
                            />
                          </label>

                          <label className="space-y-2">
                            <span className="text-sm font-bold text-stone-700">
                              Dish name
                            </span>

                            <input
                              type="text"
                              value={editForm.dishName}
                              onChange={(e) =>
                                setEditForm((current) => ({
                                  ...current,
                                  dishName: e.target.value,
                                }))
                              }
                              className="w-full rounded-xl border border-stone-300 px-4 py-3"
                            />
                          </label>

                          <label className="space-y-2">
                            <span className="text-sm font-bold text-stone-700">
                              Inspiration
                            </span>

                            <input
                              type="text"
                              value={editForm.inspiration}
                              onChange={(e) =>
                                setEditForm((current) => ({
                                  ...current,
                                  inspiration: e.target.value,
                                }))
                              }
                              className="w-full rounded-xl border border-stone-300 px-4 py-3"
                            />
                          </label>

                          <label className="space-y-2">
                            <span className="text-sm font-bold text-stone-700">
                              Would make again?
                            </span>

                            <select
                              value={editForm.makeAgain}
                              onChange={(e) =>
                                setEditForm((current) => ({
                                  ...current,
                                  makeAgain: e.target.value as
                                    | "yes"
                                    | "maybe"
                                    | "no",
                                }))
                              }
                              className="w-full rounded-xl border border-stone-300 px-4 py-3"
                            >
                              <option value="yes">😍 Definitely</option>
                              <option value="maybe">🤔 Maybe</option>
                              <option value="no">😬 Probably not</option>
                            </select>
                          </label>
                        </div>

                        <label className="block space-y-2">
                          <span className="text-sm font-bold text-stone-700">
                            Description
                          </span>

                          <textarea
                            rows={4}
                            value={editForm.description}
                            onChange={(e) =>
                              setEditForm((current) => ({
                                ...current,
                                description: e.target.value,
                              }))
                            }
                            className="w-full rounded-xl border border-stone-300 px-4 py-3"
                          />
                        </label>

                        <label className="block space-y-2">
                          <span className="text-sm font-bold text-stone-700">
                            Ingredients / flavours
                          </span>

                          <textarea
                            rows={3}
                            value={editForm.keyIngredients}
                            onChange={(e) =>
                              setEditForm((current) => ({
                                ...current,
                                keyIngredients: e.target.value,
                              }))
                            }
                            className="w-full rounded-xl border border-stone-300 px-4 py-3"
                          />
                        </label>

                        <label className="block space-y-2">
                          <span className="text-sm font-bold text-stone-700">
                            Adaptation
                          </span>

                          <textarea
                            rows={3}
                            value={editForm.adaptation}
                            onChange={(e) =>
                              setEditForm((current) => ({
                                ...current,
                                adaptation: e.target.value,
                              }))
                            }
                            className="w-full rounded-xl border border-stone-300 px-4 py-3"
                          />
                        </label>

                        <div className="flex flex-wrap gap-3">
                          <button
                            type="button"
                            onClick={() => saveChanges(submission.id)}
                            className="rounded-xl bg-blue-600 px-5 py-3 font-black text-white transition hover:bg-blue-700"
                          >
                            Save Changes
                          </button>

                          <button
                            type="button"
                            onClick={cancelEditing}
                            className="rounded-xl bg-stone-200 px-5 py-3 font-black text-stone-800 transition hover:bg-stone-300"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div>
                            <p className="text-sm font-black uppercase tracking-[0.2em] text-orange-700">
                              {submission.region} • {submission.inspiration}
                            </p>

                            <h2 className="mt-2 text-3xl font-black text-stone-900">
                              {submission.dishName}
                            </h2>

                            <p className="mt-1 font-semibold text-stone-500">
                              Submitted by {submission.creatorName}
                            </p>
                          </div>

                          <span
                            className={`rounded-full px-3 py-1 text-sm font-bold ${
                              submission.status === "approved"
                                ? "bg-green-100 text-green-700"
                                : submission.status === "rejected"
                                  ? "bg-red-100 text-red-700"
                                  : "bg-amber-100 text-amber-700"
                            }`}
                          >
                            {submission.status}
                          </span>
                        </div>

                        {submission.description && (
                          <div className="mt-5">
                            <p className="font-black text-stone-900">
                              Description
                            </p>

                            <p className="mt-1 text-stone-700">
                              {submission.description}
                            </p>
                          </div>
                        )}

                        {submission.keyIngredients && (
                          <div className="mt-4">
                            <p className="font-black text-stone-900">
                              Ingredients / flavours
                            </p>

                            <p className="mt-1 text-stone-700">
                              {submission.keyIngredients}
                            </p>
                          </div>
                        )}

                        {submission.adaptation && (
                          <div className="mt-4">
                            <p className="font-black text-stone-900">
                              Adaptation
                            </p>

                            <p className="mt-1 text-stone-700">
                              {submission.adaptation}
                            </p>
                          </div>
                        )}

                        <p className="mt-4 font-semibold text-stone-700">
                          Would make again:{" "}
                          {submission.makeAgain === "yes"
                            ? "😍 Definitely"
                            : submission.makeAgain === "maybe"
                              ? "🤔 Maybe"
                              : "😬 Probably not"}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                          <button
                            type="button"
                            onClick={() => startEditing(submission)}
                            className="rounded-xl bg-blue-600 px-5 py-3 font-black text-white transition hover:bg-blue-700"
                          >
                            Edit
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              updateStatus(submission.id, "approved")
                            }
                            className="rounded-xl bg-green-600 px-5 py-3 font-black text-white transition hover:bg-green-700"
                          >
                            Approve
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              updateStatus(submission.id, "rejected")
                            }
                            className="rounded-xl bg-red-600 px-5 py-3 font-black text-white transition hover:bg-red-700"
                          >
                            Reject
                          </button>

                          <button
                            type="button"
                            onClick={() => removeSubmission(submission.id)}
                            className="rounded-xl bg-stone-800 px-5 py-3 font-black text-white transition hover:bg-stone-700"
                          >
                            Delete
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
