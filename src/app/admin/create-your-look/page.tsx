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

type CreateYourLookSubmission = {
  id?: string;
  activity: string;
  creatorName?: string;
  imageUrl: string;
  status: "pending" | "approved" | "rejected";
  createdAt?: unknown;
};

export default function AdminCreateYourLookPage() {
  const [submissions, setSubmissions] = useState<CreateYourLookSubmission[]>(
    [],
  );

  const [loading, setLoading] = useState(true);

  async function loadSubmissions() {
    try {
      const q = query(
        collection(db, "createYourLookSubmissions"),
        orderBy("createdAt", "desc"),
      );

      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((docItem) => ({
        id: docItem.id,
        ...(docItem.data() as Omit<CreateYourLookSubmission, "id">),
      }));

      setSubmissions(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadSubmissions();
  }, []);

  async function approveSubmission(id: string) {
    await updateDoc(doc(db, "createYourLookSubmissions", id), {
      status: "approved",
    });

    loadSubmissions();
  }

  async function rejectSubmission(id: string) {
    await updateDoc(doc(db, "createYourLookSubmissions", id), {
      status: "rejected",
    });

    loadSubmissions();
  }

  async function deleteSubmission(id: string) {
    await deleteDoc(doc(db, "createYourLookSubmissions", id));

    loadSubmissions();
  }

  const pendingSubmissions = submissions.filter(
    (submission) => submission.status === "pending",
  );

  const approvedSubmissions = submissions.filter(
    (submission) => submission.status === "approved",
  );

  if (loading) {
    return (
      <div className="p-10 text-center text-slate-600">
        Loading Create Your Look submissions...
      </div>
    );
  }

  function renderSubmissionCard(
    submission: CreateYourLookSubmission,
    type: "pending" | "approved",
  ) {
    return (
      <div
        key={submission.id}
        className={`space-y-5 rounded-[2rem] border p-6 shadow-sm ${
          type === "approved"
            ? "border-emerald-200 bg-emerald-50/50"
            : "border-slate-200 bg-white"
        }`}
      >
        <div className="relative aspect-square overflow-hidden rounded-[1.5rem] bg-slate-100">
          <img
            src={submission.imageUrl}
            alt="Submitted Carnival look"
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
            {submission.activity}
          </p>

          <h2 className="mt-2 text-2xl font-black text-slate-900">
            Carnival Look Submission
          </h2>
          <p className="mt-1 text-slate-600 font-medium">
            {submission.creatorName || "Anonymous"}
          </p>
          <p
            className={`mt-2 inline-block rounded-full px-3 py-1 text-sm font-bold ${
              submission.status === "approved"
                ? "bg-emerald-100 text-emerald-700"
                : submission.status === "rejected"
                  ? "bg-red-100 text-red-700"
                  : "bg-amber-100 text-amber-700"
            }`}
          >
            {submission.status}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {type === "pending" && (
            <>
              <button
                type="button"
                onClick={() => approveSubmission(submission.id!)}
                className="rounded-full bg-emerald-600 px-5 py-2 text-sm font-bold text-white transition hover:bg-emerald-500"
              >
                ✅ Approve
              </button>

              <button
                type="button"
                onClick={() => rejectSubmission(submission.id!)}
                className="rounded-full bg-amber-600 px-5 py-2 text-sm font-bold text-white transition hover:bg-amber-500"
              >
                ❌ Reject
              </button>
            </>
          )}

          <button
            type="button"
            onClick={() => deleteSubmission(submission.id!)}
            className="rounded-full bg-red-600 px-5 py-2 text-sm font-bold text-white transition hover:bg-red-500"
          >
            🗑 Delete
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-6xl space-y-12 px-6 py-12">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          Admin
        </p>

        <h1 className="text-5xl font-black text-slate-900">
          🎭 Create Your Look
        </h1>

        <p className="text-lg text-slate-600">
          Review submitted Carnival looks before they appear in the public
          gallery.
        </p>
      </div>

      <section className="space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
            Pending
          </p>

          <h2 className="text-3xl font-black text-slate-900">
            ⏳ Waiting for approval
          </h2>
        </div>

        {pendingSubmissions.length === 0 ? (
          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 text-center shadow-sm">
            <p className="text-slate-500">No pending submissions.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {pendingSubmissions.map((submission) =>
              renderSubmissionCard(submission, "pending"),
            )}
          </div>
        )}
      </section>

      <section className="space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600">
            Approved
          </p>

          <h2 className="text-3xl font-black text-slate-900">✅ Approved</h2>
        </div>

        {approvedSubmissions.length === 0 ? (
          <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50/50 p-10 text-center shadow-sm">
            <p className="text-slate-500">No approved submissions yet.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {approvedSubmissions.map((submission) =>
              renderSubmissionCard(submission, "approved"),
            )}
          </div>
        )}
      </section>
    </main>
  );
}
