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

type SubmissionType = "created" | "discovered";
type SubmissionStatus = "pending" | "approved" | "rejected";

type GallerySubmission = {
  id: string;

  submissionType: SubmissionType;

  creatorName: string;
  country: string;

  artworkName?: string;
  description?: string;

  artistName?: string;
  source?: string;

  imageUrl: string;
  storagePath?: string;

  region: string;
  status: SubmissionStatus;
};

type StatusFilter = "all" | "pending" | "approved";
type TypeFilter = "all" | SubmissionType;

export default function AdminCultureGalleryPage() {
  const [submissions, setSubmissions] = useState<GallerySubmission[]>([]);

  const [loading, setLoading] = useState(true);
  const [workingId, setWorkingId] = useState<string | null>(null);
  const [error, setError] = useState("");

  // =========================================================
  // FILTERS
  // =========================================================

  const [statusFilter, setStatusFilter] = useState<StatusFilter>("pending");

  const [typeFilter, setTypeFilter] = useState<TypeFilter>("all");

  const [regionFilter, setRegionFilter] = useState("all");

  const [countryFilter, setCountryFilter] = useState("all");

  const [search, setSearch] = useState("");

  // =========================================================
  // EDITING
  // =========================================================

  const [editingSubmission, setEditingSubmission] =
    useState<GallerySubmission | null>(null);

  const [editType, setEditType] = useState<SubmissionType>("created");

  const [editCreatorName, setEditCreatorName] = useState("");

  const [editCountry, setEditCountry] = useState("");

  const [editArtworkName, setEditArtworkName] = useState("");

  const [editDescription, setEditDescription] = useState("");

  const [editArtistName, setEditArtistName] = useState("");

  const [editSource, setEditSource] = useState("");

  // =========================================================
  // LOAD
  // =========================================================

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "cultureGallerySubmissions"),

      (snapshot) => {
        const data = snapshot.docs.map((document) => {
          const submission = document.data();

          return {
            id: document.id,

            creatorName: submission.creatorName ?? "",

            country: submission.country ?? "",

            submissionType:
              submission.submissionType === "discovered"
                ? "discovered"
                : "created",

            artworkName: submission.artworkName ?? "",

            description: submission.description ?? "",

            artistName: submission.artistName ?? "",

            source: submission.source ?? "",

            imageUrl: submission.imageUrl ?? "",

            storagePath: submission.storagePath ?? "",

            region: submission.region ?? "",

            status:
              submission.status === "approved"
                ? "approved"
                : submission.status === "rejected"
                  ? "rejected"
                  : "pending",
          } as GallerySubmission;
        });

        setSubmissions(data);
        setLoading(false);
      },

      (snapshotError) => {
        console.error(snapshotError);

        setError("Couldn't load Culture Gallery submissions.");

        setLoading(false);
      },
    );

    return () => unsubscribe();
  }, []);

  // =========================================================
  // COUNTS
  // =========================================================

  const pendingCount = submissions.filter(
    (submission) => submission.status === "pending",
  ).length;

  const approvedCount = submissions.filter(
    (submission) => submission.status === "approved",
  ).length;

  // =========================================================
  // FILTER OPTIONS
  // =========================================================

  const regions = useMemo(() => {
    return Array.from(
      new Set(
        submissions.map((submission) => submission.region).filter(Boolean),
      ),
    ).sort();
  }, [submissions]);

  const countries = useMemo(() => {
    return Array.from(
      new Set(
        submissions
          .filter(
            (submission) =>
              regionFilter === "all" || submission.region === regionFilter,
          )
          .map((submission) => submission.country)
          .filter(Boolean),
      ),
    ).sort();
  }, [submissions, regionFilter]);

  // =========================================================
  // FILTER SUBMISSIONS
  // =========================================================

  const filteredSubmissions = useMemo(() => {
    const searchValue = search.trim().toLowerCase();

    return submissions.filter((submission) => {
      const matchesStatus =
        statusFilter === "all" || submission.status === statusFilter;

      const matchesType =
        typeFilter === "all" || submission.submissionType === typeFilter;

      const matchesRegion =
        regionFilter === "all" || submission.region === regionFilter;

      const matchesCountry =
        countryFilter === "all" || submission.country === countryFilter;

      const searchableText = [
        submission.creatorName,
        submission.country,
        submission.artworkName,
        submission.artistName,
        submission.description,
        submission.source,
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
        matchesCountry &&
        matchesSearch
      );
    });
  }, [
    submissions,
    statusFilter,
    typeFilter,
    regionFilter,
    countryFilter,
    search,
  ]);

  // =========================================================
  // APPROVE
  // =========================================================

  async function approveSubmission(id: string) {
    try {
      setWorkingId(id);
      setError("");

      await updateDoc(doc(db, "cultureGallerySubmissions", id), {
        status: "approved",
      });
    } catch (approvalError) {
      console.error(approvalError);

      setError("Couldn't approve that submission.");
    } finally {
      setWorkingId(null);
    }
  }

  // =========================================================
  // MOVE BACK TO PENDING
  // =========================================================

  async function moveToPending(id: string) {
    try {
      setWorkingId(id);
      setError("");

      await updateDoc(doc(db, "cultureGallerySubmissions", id), {
        status: "pending",
      });
    } catch (pendingError) {
      console.error(pendingError);

      setError("Couldn't move that submission back to pending.");
    } finally {
      setWorkingId(null);
    }
  }

  // =========================================================
  // DELETE
  // =========================================================

  async function deleteSubmission(submission: GallerySubmission) {
    const confirmed = window.confirm(
      `Delete this submission from ${submission.creatorName}?`,
    );

    if (!confirmed) return;

    try {
      setWorkingId(submission.id);
      setError("");

      if (submission.storagePath) {
        try {
          const imageRef = ref(storage, submission.storagePath);

          await deleteObject(imageRef);
        } catch (storageError) {
          console.warn("Could not remove image from Storage:", storageError);
        }
      }

      await deleteDoc(doc(db, "cultureGallerySubmissions", submission.id));
    } catch (deleteError) {
      console.error(deleteError);

      setError("Couldn't delete that submission.");
    } finally {
      setWorkingId(null);
    }
  }

  // =========================================================
  // OPEN EDITOR
  // =========================================================

  function openEditor(submission: GallerySubmission) {
    setEditingSubmission(submission);

    setEditType(submission.submissionType);

    setEditCreatorName(submission.creatorName ?? "");

    setEditCountry(submission.country ?? "");

    setEditArtworkName(submission.artworkName ?? "");

    setEditDescription(submission.description ?? "");

    setEditArtistName(submission.artistName ?? "");

    setEditSource(submission.source ?? "");

    setError("");
  }

  function closeEditor() {
    if (workingId) return;

    setEditingSubmission(null);
  }

  // =========================================================
  // SAVE EDIT
  // =========================================================

  async function saveEdit() {
    if (!editingSubmission) return;

    if (!editCreatorName.trim()) {
      setError("The submitter needs a name.");
      return;
    }

    if (!editCountry.trim()) {
      setError("Please choose a country.");
      return;
    }

    try {
      setWorkingId(editingSubmission.id);
      setError("");

      await updateDoc(
        doc(db, "cultureGallerySubmissions", editingSubmission.id),
        {
          submissionType: editType,

          creatorName: editCreatorName.trim(),

          country: editCountry.trim(),

          artworkName: editArtworkName.trim(),

          description: editDescription.trim(),

          artistName: editType === "discovered" ? editArtistName.trim() : "",

          source: editType === "discovered" ? editSource.trim() : "",
        },
      );

      setEditingSubmission(null);
    } catch (editError) {
      console.error(editError);

      setError("Couldn't save those changes.");
    } finally {
      setWorkingId(null);
    }
  }

  // =========================================================
  // RESET FILTERS
  // =========================================================

  function resetFilters() {
    setStatusFilter("pending");
    setTypeFilter("all");
    setRegionFilter("all");
    setCountryFilter("all");
    setSearch("");
  }

  // =========================================================
  // LOADING
  // =========================================================

  if (loading) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-center text-lg text-slate-500">
          Loading Culture Gallery...
        </p>
      </main>
    );
  }

  // =========================================================
  // PAGE
  // =========================================================

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        {/* HEADER */}

        <header>
          <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">
            Admin
          </p>

          <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl font-black text-slate-900 sm:text-5xl">
                🎨 Culture Gallery
              </h1>

              <p className="mt-3 max-w-2xl text-lg leading-7 text-slate-600">
                Review, edit and approve Culture Gallery submissions.
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

        {/* ERROR */}

        {error && (
          <div className="mt-8 rounded-2xl bg-red-50 p-5 font-bold text-red-700">
            {error}
          </div>
        )}

        {/* =================================================
            FILTER BAR
        ================================================== */}

        <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-lg font-black text-slate-900">
              Filter Gallery
            </h2>

            <button
              type="button"
              onClick={resetFilters}
              className="text-sm font-bold text-slate-500 hover:text-slate-900"
            >
              Reset filters
            </button>
          </div>

          {/* STATUS BUTTONS */}

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

          {/* TYPE */}

          <div className="mt-5">
            <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-slate-400">
              Type
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

              <button
                type="button"
                onClick={() => setTypeFilter("created")}
                className={`rounded-full px-4 py-2 text-sm font-black ${
                  typeFilter === "created"
                    ? "bg-orange-500 text-white"
                    : "bg-orange-50 text-orange-700"
                }`}
              >
                🎨 Made
              </button>

              <button
                type="button"
                onClick={() => setTypeFilter("discovered")}
                className={`rounded-full px-4 py-2 text-sm font-black ${
                  typeFilter === "discovered"
                    ? "bg-violet-600 text-white"
                    : "bg-violet-50 text-violet-700"
                }`}
              >
                ✨ Found
              </button>
            </div>
          </div>

          {/* SELECTS + SEARCH */}

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div>
              <label className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                Region
              </label>

              <select
                value={regionFilter}
                onChange={(event) => {
                  setRegionFilter(event.target.value);

                  setCountryFilter("all");
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
                Country
              </label>

              <select
                value={countryFilter}
                onChange={(event) => setCountryFilter(event.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3"
              >
                <option value="all">All countries</option>

                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
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
                placeholder="Name, title, artist..."
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3"
              />
            </div>
          </div>
        </section>

        {/* RESULTS */}

        <section className="mt-10">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-black text-slate-900">Submissions</h2>

            <p className="text-sm font-bold text-slate-500">
              {filteredSubmissions.length} shown
            </p>
          </div>

          {filteredSubmissions.length === 0 ? (
            <div className="mt-7 rounded-[2rem] border-2 border-dashed border-slate-200 p-12 text-center">
              <div className="text-5xl">🖼️</div>

              <p className="mt-4 text-xl font-black text-slate-700">
                Nothing here
              </p>

              <p className="mt-2 text-slate-500">
                No submissions match those filters.
              </p>
            </div>
          ) : (
            <div className="mt-7 grid items-start gap-8 md:grid-cols-2 xl:grid-cols-3">
              {filteredSubmissions.map((submission) => {
                const discovered = submission.submissionType === "discovered";

                const working = workingId === submission.id;

                return (
                  <article
                    key={submission.id}
                    className="overflow-hidden rounded-[2rem] bg-white shadow-lg"
                  >
                    {/* IMAGE */}

                    {submission.imageUrl ? (
                      <div className="bg-slate-100">
                        <img
                          src={submission.imageUrl}
                          alt={
                            submission.artworkName ||
                            "Culture Gallery submission"
                          }
                          className="max-h-[500px] w-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="flex h-64 items-center justify-center bg-slate-100 text-slate-400">
                        No image
                      </div>
                    )}

                    {/* INFO */}

                    <div className="p-6">
                      <div className="flex flex-wrap gap-2">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-black uppercase tracking-wider ${
                            discovered
                              ? "bg-violet-100 text-violet-700"
                              : "bg-orange-100 text-orange-700"
                          }`}
                        >
                          {discovered ? "✨ Found" : "🎨 Made"}
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

                        {submission.country && (
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                            {submission.country}
                          </span>
                        )}
                      </div>

                      {submission.artworkName && (
                        <h3 className="mt-5 text-2xl font-black text-slate-900">
                          {submission.artworkName}
                        </h3>
                      )}

                      <div className="mt-5">
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                          Submitted by
                        </p>

                        <p className="mt-1 text-lg font-black text-slate-900">
                          {submission.creatorName || "Unknown"}
                        </p>
                      </div>

                      {discovered && submission.artistName && (
                        <div className="mt-4">
                          <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                            Artist / creator
                          </p>

                          <p className="mt-1 text-slate-700">
                            {submission.artistName}
                          </p>
                        </div>
                      )}

                      {discovered && submission.source && (
                        <div className="mt-4">
                          <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                            Found at
                          </p>

                          <p className="mt-1 break-words text-slate-700">
                            {submission.source}
                          </p>
                        </div>
                      )}

                      {submission.description && (
                        <div className="mt-4">
                          <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                            Thoughts
                          </p>

                          <p className="mt-1 leading-6 text-slate-700">
                            {submission.description}
                          </p>
                        </div>
                      )}

                      {/* ACTIONS */}

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

      {/* =====================================================
          EDIT MODAL
      ===================================================== */}

      {editingSubmission && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] bg-white p-6 shadow-2xl sm:p-8">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                  Culture Gallery
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

            {/* PREVIEW */}

            {editingSubmission.imageUrl && (
              <img
                src={editingSubmission.imageUrl}
                alt=""
                className="mt-7 max-h-72 w-full rounded-2xl bg-slate-100 object-contain"
              />
            )}

            {/* MADE / FOUND */}

            <div className="mt-7">
              <label className="text-sm font-black text-slate-700">
                Submission type
              </label>

              <div className="mt-2 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setEditType("created")}
                  className={`rounded-2xl border-2 p-4 font-black ${
                    editType === "created"
                      ? "border-orange-500 bg-orange-50 text-orange-700"
                      : "border-slate-200 text-slate-500"
                  }`}
                >
                  🎨 MADE
                </button>

                <button
                  type="button"
                  onClick={() => setEditType("discovered")}
                  className={`rounded-2xl border-2 p-4 font-black ${
                    editType === "discovered"
                      ? "border-violet-500 bg-violet-50 text-violet-700"
                      : "border-slate-200 text-slate-500"
                  }`}
                >
                  ✨ FOUND
                </button>
              </div>
            </div>

            {/* FORM */}

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <label className="text-sm font-black text-slate-700">
                  Submitted by
                </label>

                <input
                  value={editCreatorName}
                  onChange={(event) => setEditCreatorName(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3"
                />
              </div>

              <div>
                <label className="text-sm font-black text-slate-700">
                  Country
                </label>

                <input
                  value={editCountry}
                  onChange={(event) => setEditCountry(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="text-sm font-black text-slate-700">
                Artwork title
              </label>

              <input
                value={editArtworkName}
                onChange={(event) => setEditArtworkName(event.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3"
              />
            </div>

            {editType === "discovered" && (
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-black text-slate-700">
                    Artist / creator
                  </label>

                  <input
                    value={editArtistName}
                    onChange={(event) => setEditArtistName(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3"
                  />
                </div>

                <div>
                  <label className="text-sm font-black text-slate-700">
                    Where found
                  </label>

                  <input
                    value={editSource}
                    onChange={(event) => setEditSource(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3"
                  />
                </div>
              </div>
            )}

            <div className="mt-5">
              <label className="text-sm font-black text-slate-700">
                Thoughts / description
              </label>

              <textarea
                value={editDescription}
                onChange={(event) => setEditDescription(event.target.value)}
                rows={5}
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
