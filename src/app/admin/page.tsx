"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "@/firebaseConfig";

const adminPages = [
  {
    title: "Student Uploads",
    href: "/admin/submissions",
    description: "Review pending uploads, manage approved uploads, and delete items.",
    collectionName: "gallerySubmissions",
  },
  {
    title: "Facts",
    href: "/admin/facts",
    description: "Review and approve fact submissions.",
    collectionName: "regionFacts",
  },
  {
    title: "Timeline Submissions",
    href: "/admin/timeline-submissions",
    description: "Review and approve student timeline ideas.",
    collectionName: "timelineSubmissions",
  },
  {
    title: "Resource Moderation",
    href: "/admin/resources",
    description: "Review and approve student resources.",
    collectionName: "resourceSubmissions",
  },
  {
    title: "Student Creations",
    href: "/admin/create-your-look",
    description: "Review South America maps and other interactive creations.",
    collectionName: "createYourLookSubmissions",
  },
  {
    title: "Culture Kitchen",
    href: "/admin/culture-kitchen",
    description: "Review and approve student Culture Kitchen creations.",
    collectionName: "cultureKitchenSubmissions",
  },
  {
    title: "Culture Gallery",
    href: "/admin/culture-gallery",
    description: "Review and approve Culture Gallery artwork and discoveries.",
    collectionName: "cultureGallerySubmissions",
  },
  {
    title: "Art Room Manager",
    href: "/admin/culture-gallery/art-room",
    description: "Create, edit, publish and delete Art Room activities and example images.",
    collectionName: null,
    icon: "🎨",
  },
  {
    title: "Deep Dive Submissions",
    href: "/admin/deep-dives",
    description: "Review and approve contributions from Deep Dive activities.",
    collectionName: "deepDiveSubmissions",
  },
  {
    title: "Region at Fable",
    href: "/admin/region-at-fable",
    description: "Manage activities, photographs and submissions from cultural learning at Fable.",
    collectionName: "regionAtFable",
    icon: "📸",
  },
];

type PendingCounts = Record<string, number>;

export default function AdminPage() {
  const [counts, setCounts] = useState<PendingCounts>({});
  const [errors, setErrors] = useState<string[]>([]);
  const [loaded, setLoaded] = useState<string[]>([]);

  useEffect(() => {
    const unsubscribeFunctions: Array<() => void> = [];

    for (const page of adminPages) {
      if (!page.collectionName) continue;

      const collectionName = page.collectionName;
      const pendingQuery = query(
        collection(db, collectionName),
        where("status", "==", "pending"),
      );

      const unsubscribe = onSnapshot(
        pendingQuery,
        (snapshot) => {
          setCounts((current) => ({
            ...current,
            [collectionName]: snapshot.size,
          }));

          setLoaded((current) =>
            current.includes(collectionName)
              ? current
              : [...current, collectionName],
          );

          setErrors((current) =>
            current.filter((name) => name !== collectionName),
          );
        },
        (error) => {
          console.error(`Could not load ${collectionName} approvals:`, error);

          setErrors((current) =>
            current.includes(collectionName)
              ? current
              : [...current, collectionName],
          );
        },
      );

      unsubscribeFunctions.push(unsubscribe);
    }

    return () => {
      unsubscribeFunctions.forEach((unsubscribe) => unsubscribe());
    };
  }, []);

  const moderationPages = adminPages.filter(
    (page) => page.collectionName !== null,
  );

  const totalPending = moderationPages.reduce(
    (total, page) => total + (counts[page.collectionName!] ?? 0),
    0,
  );

  const allLoaded = moderationPages.every(
    (page) =>
      loaded.includes(page.collectionName!) ||
      errors.includes(page.collectionName!),
  );

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
            <h1 className="text-3xl font-bold text-slate-900">
              Admin Dashboard
            </h1>

            <p className="mt-2 text-slate-600">
              Manage uploads, activities, facts, resources and submissions.
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-xl bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-800 shadow transition hover:bg-gray-200"
          >
            Log out
          </button>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Waiting for approval
          </p>

          <div className="mt-2 flex items-baseline gap-3">
            <span className="text-5xl font-bold text-slate-900">
              {totalPending}
            </span>

            <span className="text-sm text-slate-500">
              {!allLoaded
                ? "Checking submissions..."
                : errors.length > 0
                  ? "Partial count — some sections could not be checked"
                  : totalPending === 0
                    ? "All caught up!"
                    : "Student submissions need your attention"}
            </span>
          </div>

          {errors.length > 0 && (
            <p className="mt-3 text-sm text-red-700">
              Could not check: {errors.join(", ")}.
              Check the browser console and Firebase permissions.
            </p>
          )}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {adminPages.map((page) => {
            const count = page.collectionName
              ? counts[page.collectionName]
              : undefined;

            const failed = page.collectionName
              ? errors.includes(page.collectionName)
              : false;

            return (
              <Link
                key={page.href}
                href={page.href}
                className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-amber-300 hover:shadow-md"
              >
                {"icon" in page && page.icon && (
                  <div className="mb-3 text-3xl">{page.icon}</div>
                )}

                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-xl font-semibold text-slate-900">
                    {page.title}
                  </h2>

                  {page.collectionName && count !== undefined && count > 0 && (
                    <span className="shrink-0 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900">
                      {count} waiting
                    </span>
                  )}
                </div>

                <p className="mt-2 text-sm text-slate-600">
                  {page.description}
                </p>

                {page.collectionName && count === undefined && !failed && (
                  <p className="mt-3 text-xs text-slate-400">
                    Checking...
                  </p>
                )}

                {failed && (
                  <p className="mt-3 text-xs font-medium text-red-700">
                    Approval count unavailable
                  </p>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
