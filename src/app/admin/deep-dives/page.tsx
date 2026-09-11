"use client";

import { useEffect, useMemo, useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { db, storage } from "@/firebaseConfig";

type SubmissionStatus = "pending" | "approved" | "rejected";

type DeepDiveSubmission = {
  id: string;
  creatorName: string;
  answer: string;
  imageUrl: string;
  storagePath?: string;
  region: string;
  regionName: string;
  deepDive: string;
  deepDiveTitle: string;
  submissionType: string;
  submissionLabel: string;
  status: SubmissionStatus;
};

type StatusFilter = "all" | "pending" | "approved";

type SubmissionTypeOption = {
  value: string;
  label: string;
};

export default function AdminDeepDivesPage() {
  const [submissions, setSubmissions] = useState<DeepDiveSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [workingId, setWorkingId] = useState<string | null>(null);
  const [error, setError] = useState("");

  const [statusFilter, setStatusFilter] = useState<StatusFilter>("pending");
  const [typeFilter, setTypeFilter] = useState("all");
  const [regionFilter, setRegionFilter] = useState("all");
  const [deepDiveFilter, setDeepDiveFilter] = useState("all");
  const [search, setSearch] = useState("");

  const [editingSubmission, setEditingSubmission] =
    useState<DeepDiveSubmission | null>(null);
  const [editCreatorName, setEditCreatorName] = useState("");
  const [editAnswer, setEditAnswer] = useState("");
  const [editSubmissionType, setEditSubmissionType] = useState("");
  const [editSubmissionLabel, setEditSubmissionLabel] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "deepDiveSubmissions"),
      (snapshot) => {
        const data = snapshot.docs.map((document) => {
          const submission = document.data();

          return {
            id: document.id,
            creatorName: submission.creatorName ?? "",
            answer: submission.answer ?? "",
            imageUrl: submission.imageUrl ?? "",
            storagePath: submission.storagePath ?? "",
            region: submission.region ?? "",
            regionName: submission.regionName ?? "",
            deepDive: submission.deepDive ?? "",
            deepDiveTitle: submission.deepDiveTitle ?? "",
            submissionType: submission.submissionType ?? "",
            submissionLabel: submission.submissionLabel ?? "",
            status:
              submission.status === "approved"
                ? "approved"
                : submission.status === "rejected"
                  ? "rejected"
                  : "pending",
          } as DeepDiveSubmission;
        });

        setSubmissions(data);
        setLoading(false);
      },
      (snapshotError) => {
        console.error(snapshotError);
        setError("Couldn't load Deep Dive submissions.");
        setLoading(false);
      },
    );

    return () => unsubscribe();
  }, []);

  const pendingCount = submissions.filter(
    (submission) => submission.status === "pending",
  ).length;

  const approvedCount = submissions.filter(
    (submission) => submission.status === "approved",
  ).length;

  const regions = useMemo(() => {
    return Array.from(
      new Set(
        submissions
          .map((submission) => submission.regionName || submission.region)
          .filter(Boolean),
      ),
    ).sort();
  }, [submissions]);

  const deepDives = useMemo(() => {
    return Array.from(
      new Set(
        submissions
          .filter((submission) => {
            const displayRegion = submission.regionName || submission.region;
            return regionFilter === "all" || displayRegion === regionFilter;
          })
          .map((submission) => submission.deepDiveTitle)
          .filter(Boolean),
      ),
    ).sort();
  }, [submissions, regionFilter]);

  const submissionTypes = useMemo<SubmissionTypeOption[]>(() => {
    const map = new Map<string, string>();

    submissions.forEach((submission) => {
      const displayRegion = submission.regionName || submission.region;
      const matchesRegion =
        regionFilter === "all" || displayRegion === regionFilter;
      const matchesDeepDive =
        deepDiveFilter === "all" || submission.deepDiveTitle === deepDiveFilter;

      if (matchesRegion && matchesDeepDive && submission.submissionType) {
        map.set(
          submission.submissionType,
          submission.submissionLabel || submission.submissionType,
        );
      }
    });

    return Array.from(map.entries()).map(([value, label]) => ({
      value,
      label,
    }));
  }, [submissions, regionFilter, deepDiveFilter]);

  const filteredSubmissions = useMemo(() => {
    const searchValue = search.trim().toLowerCase();

    return submissions.filter((submission) => {
      const displayRegion = submission.regionName || submission.region;

      const matchesStatus =
        statusFilter === "all" || submission.status === statusFilter;
      const matchesType =
        typeFilter === "all" || submission.submissionType === typeFilter;
      const matchesRegion =
        regionFilter === "all" || displayRegion === regionFilter;
      const matchesDeepDive =
        deepDiveFilter === "all" || submission.deepDiveTitle === deepDiveFilter;

      const searchableText = [
        submission.creatorName,
        submission.answer,
        submission.region,
        submission.regionName,
        submission.deepDive,
        submission.deepDiveTitle,
        submission.submissionType,
        submission.submissionLabel,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !searchValue || searchableText.includes(searchValue);

      return (
        matchesStatus &&
        matchesType &&
        matchesRegion &&
        matchesDeepDive &&
        matchesSearch
      );
    });
  }, [
    submissions,
    statusFilter,
    typeFilter,
    regionFilter,
    deepDiveFilter,
    search,
  ]);

  async function approveSubmission(id: string) {
    try {
      setWorkingId(id);
      setError("");

      await updateDoc(doc(db, "deepDiveSubmissions", id), {
        status: "approved",
      });
    } catch (approvalError) {
      console.error(approvalError);
      setError("Couldn't approve that submission.");
    } finally {
      setWorkingId(null);
    }
  }

  async function moveToPending(id: string) {
    try {
      setWorkingId(id);
      setError("");

      await updateDoc(doc(db, "deepDiveSubmissions", id), {
        status: "pending",
      });
    } catch (pendingError) {
      console.error(pendingError);
      setError("Couldn't move that submission back to pending.");
    } finally {
      setWorkingId(null);
    }
  }

  async function deleteSubmission(submission: DeepDiveSubmission) {
    const confirmed = window.confirm(
      `Delete this submission from ${submission.creatorName || "Unknown"}?`,
    );

    if (!confirmed) return;

    try {
      setWorkingId(submission.id);
      setError("");

      if (submission.storagePath) {
        try {
          await deleteObject(ref(storage, submission.storagePath));
        } catch (storageError) {
          console.warn("Could not remove image from Storage:", storageError);
        }
      }

      await deleteDoc(doc(db, "deepDiveSubmissions", submission.id));
    } catch (deleteError) {
      console.error(deleteError);
      setError("Couldn't delete that submission.");
    } finally {
      setWorkingId(null);
    }
  }

  function openEditor(submission: DeepDiveSubmission) {
    setEditingSubmission(submission);
    setEditCreatorName(submission.creatorName ?? "");
    setEditAnswer(submission.answer ?? "");
    setEditSubmissionType(submission.submissionType ?? "");
    setEditSubmissionLabel(submission.submissionLabel ?? "");
    setError("");
  }

  function closeEditor() {
    if (workingId) return;
    setEditingSubmission(null);
  }

  async function saveEdit() {
    if (!editingSubmission) return;

    if (!editCreatorName.trim()) {
      setError("The submitter needs a name.");
      return;
    }

    if (!editSubmissionType.trim()) {
      setError("The submission needs a type.");
      return;
    }

    try {
      setWorkingId(editingSubmission.id);
      setError("");

      await updateDoc(doc(db, "deepDiveSubmissions", editingSubmission.id), {
        creatorName: editCreatorName.trim(),
        answer: editAnswer.trim(),
        submissionType: editSubmissionType.trim(),
        submissionLabel: editSubmissionLabel.trim(),
      });

      setEditingSubmission(null);
    } catch (editError) {
      console.error(editError);
      setError("Couldn't save those changes.");
    } finally {
      setWorkingId(null);
    }
  }

  function resetFilters() {
    setStatusFilter("pending");
    setTypeFilter("all");
    setRegionFilter("all");
    setDeepDiveFilter("all");
    setSearch("");
  }

  if (loading) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-center text-lg text-slate-500">
          Loading Deep Dive submissions...
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <header>
          <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">
            Admin
          </p>

          <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl font-black text-slate-900 sm:text-5xl">
                ⭐ Deep Dive Submissions
              </h1>

              <p className="mt-3 max-w-2xl text-lg leading-7 text-slate-600">
                Review, edit and approve contributions sent from Deep Dive
                pages.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="rounded-full bg-amber-100 px-5 py-3 font-black text-amber-800">
                {pendingCount} waiting
              </div>

              <div className="rounded-full bg-emerald-100 px-5 py-3 font-black text-emerald-800">
                {approvedCount} approved
              </div>
            </div>
          </div>
        </header>

        {error && (
          <div className="mt-8 rounded-2xl bg-red-50 p-5 font-bold text-red-700">
            {error}
          </div>
        )}

        <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-lg font-black text-slate-900">
              Filter Deep Dives
            </h2>

            <button
              type="button"
              onClick={resetFilters}
              className="text-sm font-bold text-slate-500 hover:text-slate-900"
            >
              Reset filters
            </button>
          </div>

          <div className="mt-5">
            <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-slate-400">
              Status
            </p>

            <div className="flex flex-wrap gap-2">
              {(
                [
                  ["pending", `Waiting (${pendingCount})`],
                  ["approved", `Approved (${approvedCount})`],
                  ["all", `All (${submissions.length})`],
                ] as const
              ).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setStatusFilter(value)}
                  className={`rounded-full px-4 py-2 text-sm font-black transition ${
                    statusFilter === value
                      ? "bg-slate-900 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-slate-400">
              Submission type
            </p>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setTypeFilter("all")}
                className={`rounded-full px-4 py-2 text-sm font-black ${
                  typeFilter === "all"
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                All
              </button>

              {submissionTypes.map((type) => (
                <button
                  key={type.value}
                  type="button"
                  onClick={() => setTypeFilter(type.value)}
                  className={`rounded-full px-4 py-2 text-sm font-black ${
                    typeFilter === type.value
                      ? "bg-fuchsia-600 text-white"
                      : "bg-fuchsia-50 text-fuchsia-700"
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div>
              <label className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                Region
              </label>

              <select
                value={regionFilter}
                onChange={(event) => {
                  setRegionFilter(event.target.value);
                  setDeepDiveFilter("all");
                  setTypeFilter("all");
                }}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3"
              >
                <option value="all">All regions</option>

                {regions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                Deep Dive
              </label>

              <select
                value={deepDiveFilter}
                onChange={(event) => {
                  setDeepDiveFilter(event.target.value);
                  setTypeFilter("all");
                }}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3"
              >
                <option value="all">All Deep Dives</option>

                {deepDives.map((deepDive) => (
                  <option key={deepDive} value={deepDive}>
                    {deepDive}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                Search
              </label>

              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Name, answer, Deep Dive..."
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3"
              />
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-black text-slate-900">Submissions</h2>

            <p className="text-sm font-bold text-slate-500">
              {filteredSubmissions.length} shown
            </p>
          </div>

          {filteredSubmissions.length === 0 ? (
            <div className="mt-7 rounded-[2rem] border-2 border-dashed border-slate-200 p-12 text-center">
              <div className="text-5xl">⭐</div>

              <p className="mt-4 text-xl font-black text-slate-700">
                Nothing here
              </p>

              <p className="mt-2 text-slate-500">
                No Deep Dive submissions match those filters.
              </p>
            </div>
          ) : (
            <div className="mt-7 grid items-start gap-8 md:grid-cols-2 xl:grid-cols-3">
              {filteredSubmissions.map((submission) => {
                const working = workingId === submission.id;
                const isArtwork = submission.submissionType === "share-artwork";
                const isRecommendation =
                  submission.submissionType === "suggest-anime";

                return (
                  <article
                    key={submission.id}
                    className="overflow-hidden rounded-[2rem] bg-white shadow-lg"
                  >
                    {submission.imageUrl ? (
                      <div className="bg-slate-100">
                        <img
                          src={submission.imageUrl}
                          alt={`${submission.deepDiveTitle || "Deep Dive"} submission`}
                          className="max-h-[500px] w-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="flex h-64 flex-col items-center justify-center bg-slate-100 text-slate-400">
                        <div className="text-6xl">
                          {isArtwork ? "🎨" : isRecommendation ? "📺" : "⭐"}
                        </div>

                        <div className="mt-3 font-black">
                          {submission.submissionLabel || "Deep Dive submission"}
                        </div>
                      </div>
                    )}

                    <div className="p-6">
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-black uppercase tracking-wider text-cyan-700">
                          ⭐ {submission.deepDiveTitle || "Deep Dive"}
                        </span>

                        <span
                          className={`rounded-full px-3 py-1 text-xs font-black ${
                            submission.status === "approved"
                              ? "bg-emerald-100 text-emerald-700"
                              : submission.status === "pending"
                                ? "bg-amber-100 text-amber-700"
                                : "bg-red-100 text-red-700"
                          }`}
                        >
                          {submission.status}
                        </span>

                        {submission.submissionLabel && (
                          <span className="rounded-full bg-fuchsia-100 px-3 py-1 text-xs font-black text-fuchsia-700">
                            {submission.submissionLabel}
                          </span>
                        )}

                        {(submission.regionName || submission.region) && (
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                            {submission.regionName || submission.region}
                          </span>
                        )}
                      </div>

                      <div className="mt-5">
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                          Submitted by
                        </p>

                        <p className="mt-1 text-lg font-black text-slate-900">
                          {submission.creatorName || "Unknown"}
                        </p>
                      </div>

                      {submission.answer && (
                        <div className="mt-5">
                          <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                            {isArtwork ? "Comment" : "What they shared"}
                          </p>

                          <p className="mt-2 whitespace-pre-wrap leading-6 text-slate-700">
                            {submission.answer}
                          </p>
                        </div>
                      )}

                      <div className="mt-7 flex flex-wrap gap-2 border-t border-slate-100 pt-5">
                        {submission.status !== "approved" && (
                          <button
                            type="button"
                            disabled={working}
                            onClick={() => approveSubmission(submission.id)}
                            className="rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-black text-white hover:bg-emerald-700 disabled:opacity-50"
                          >
                            ✓ Approve
                          </button>
                        )}

                        {submission.status === "approved" && (
                          <button
                            type="button"
                            disabled={working}
                            onClick={() => moveToPending(submission.id)}
                            className="rounded-full bg-amber-100 px-5 py-2.5 text-sm font-black text-amber-800 hover:bg-amber-200 disabled:opacity-50"
                          >
                            ↩ Pending
                          </button>
                        )}

                        <button
                          type="button"
                          disabled={working}
                          onClick={() => openEditor(submission)}
                          className="rounded-full bg-blue-50 px-5 py-2.5 text-sm font-black text-blue-700 hover:bg-blue-100 disabled:opacity-50"
                        >
                          ✎ Edit
                        </button>

                        <button
                          type="button"
                          disabled={working}
                          onClick={() => deleteSubmission(submission)}
                          className="rounded-full bg-red-50 px-5 py-2.5 text-sm font-black text-red-600 hover:bg-red-100 disabled:opacity-50"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>
      </div>

      {editingSubmission && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] bg-white p-6 shadow-2xl sm:p-8">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                  Deep Dive
                </p>

                <h2 className="mt-2 text-3xl font-black text-slate-900">
                  Edit submission
                </h2>
              </div>

              <button
                type="button"
                onClick={closeEditor}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-xl font-black text-slate-600 hover:bg-slate-200"
              >
                ×
              </button>
            </div>

            {editingSubmission.imageUrl && (
              <img
                src={editingSubmission.imageUrl}
                alt=""
                className="mt-7 max-h-72 w-full rounded-2xl bg-slate-100 object-contain"
              />
            )}

            <div className="mt-7 rounded-2xl bg-slate-50 p-5">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                Deep Dive
              </p>

              <p className="mt-1 text-lg font-black text-slate-900">
                {editingSubmission.deepDiveTitle || "Unknown Deep Dive"}
              </p>

              <p className="mt-1 text-sm font-bold text-slate-500">
                {editingSubmission.regionName || editingSubmission.region}
              </p>
            </div>

            <div className="mt-6">
              <label className="text-sm font-black text-slate-700">
                Submitted by
              </label>

              <input
                value={editCreatorName}
                onChange={(event) => setEditCreatorName(event.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3"
              />
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <label className="text-sm font-black text-slate-700">
                  Submission type
                </label>

                <input
                  value={editSubmissionType}
                  onChange={(event) =>
                    setEditSubmissionType(event.target.value)
                  }
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3"
                />
              </div>

              <div>
                <label className="text-sm font-black text-slate-700">
                  Display label
                </label>

                <input
                  value={editSubmissionLabel}
                  onChange={(event) =>
                    setEditSubmissionLabel(event.target.value)
                  }
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="text-sm font-black text-slate-700">
                Answer / comment
              </label>

              <textarea
                value={editAnswer}
                onChange={(event) => setEditAnswer(event.target.value)}
                rows={6}
                className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3"
              />
            </div>

            {error && (
              <p className="mt-5 rounded-xl bg-red-50 p-4 font-bold text-red-700">
                {error}
              </p>
            )}

            <div className="mt-7 flex justify-end gap-3">
              <button
                type="button"
                onClick={closeEditor}
                className="rounded-full bg-slate-100 px-6 py-3 font-black text-slate-600 hover:bg-slate-200"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={saveEdit}
                disabled={workingId === editingSubmission.id}
                className="rounded-full bg-slate-900 px-7 py-3 font-black text-white hover:bg-slate-700 disabled:opacity-50"
              >
                {workingId === editingSubmission.id
                  ? "Saving..."
                  : "Save changes"}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
