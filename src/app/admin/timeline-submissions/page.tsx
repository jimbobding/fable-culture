import Link from "next/link";
import { db } from "@/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import AdminTimelineClient from "@/components/admin/AdminTimelineClient";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type TimelineSubmission = {
  id: string;
  title?: string;
  explanation?: string;
  region?: string;
  country?: string;
  periodKey?: string;
  status?: string;
};

export default async function AdminTimelineSubmissionsPage() {
  const pendingQuery = query(
    collection(db, "timelineSubmissions"),
    where("status", "==", "pending"),
  );

  const approvedQuery = query(
    collection(db, "timelineSubmissions"),
    where("status", "==", "approved"),
  );

  const [pendingSnapshot, approvedSnapshot] = await Promise.all([
    getDocs(pendingQuery),
    getDocs(approvedQuery),
  ]);

  const pendingSubmissions = pendingSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as TimelineSubmission[];

  const approvedSubmissions = approvedSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as TimelineSubmission[];

  const pendingCount = pendingSubmissions.length;
  const approvedCount = approvedSubmissions.length;

  return (
    <main className="min-h-screen bg-stone-50">
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* 🔥 HEADER */}
        <section className="mb-10 rounded-3xl border border-stone-200 bg-gradient-to-r from-amber-50 via-white to-orange-50 p-8 shadow-sm">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-amber-700">
            Fable Culture Admin
          </p>

          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-stone-900">
                Timeline Submissions
              </h1>
              <div className="mt-3 space-y-2">
                <p className="max-w-2xl text-base leading-7 text-stone-600">
                  Review, filter, and manage student timeline ideas across all
                  regions.
                </p>

                <div className="flex gap-4 text-sm font-semibold">
                  <span className="text-amber-700">
                    Pending: {pendingCount}
                  </span>
                  <span className="text-green-700">
                    Approved: {approvedCount}
                  </span>
                </div>
              </div>
            </div>

            <Link
              href="/admin"
              className="rounded-xl border border-stone-300 bg-white px-4 py-2 text-sm font-semibold text-stone-700 hover:bg-stone-100"
            >
              ← Back to Admin
            </Link>
          </div>
        </section>

        {/* 🔥 CLIENT (filters + content) */}
        <AdminTimelineClient
          submissions={[...pendingSubmissions, ...approvedSubmissions]}
        />
      </div>
    </main>
  );
}
