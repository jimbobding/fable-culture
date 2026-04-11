"use client";

import Link from "next/link";

export default function AdminPage() {
  const handleLogout = () => {
    document.cookie = "fable-auth=; path=/; max-age=0";
    document.cookie = "fable-admin=; path=/; max-age=0";
    window.location.href = "/";
  };

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Admin</h1>
            <p className="mt-2 text-slate-600">
              Manage uploads, facts, and timeline submissions.
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-xl bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-800 shadow hover:bg-gray-200 transition"
          >
            Log out
          </button>
        </div>

        {/* 🔥 GRID UPDATED */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Uploads */}
          <Link
            href="/admin/submissions"
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <h2 className="text-xl font-semibold text-slate-900">
              Student Uploads
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Review pending uploads, manage approved uploads, and delete items.
            </p>
          </Link>

          {/* Facts */}
          <Link
            href="/admin/facts"
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <h2 className="text-xl font-semibold text-slate-900">Facts</h2>
            <p className="mt-2 text-sm text-slate-600">
              Review and approve fact submissions.
            </p>
          </Link>

          {/* 🔥 NEW TIMELINE CARD */}
          <Link
            href="/admin/timeline-submissions"
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <h2 className="text-xl font-semibold text-slate-900">
              Timeline Submissions
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Review and approve student timeline ideas.
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
