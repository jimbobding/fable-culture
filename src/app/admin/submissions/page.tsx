import Link from "next/link";
import { db } from "@/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import AdminSubmissionCard from "../../../components/admin/Timeline/AdminSubmissionCard";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type Submission = {
  id: string;
  title?: string;
  region?: string;
  description?: string;
  imageUrl?: string;
  status?: string;
  storagePath?: string;
  submittedAt?: any;
};

export default async function AdminSubmissionsPage() {
  const pendingQuery = query(
    collection(db, "gallerySubmissions"),
    where("status", "==", "pending"),
  );

  const approvedQuery = query(
    collection(db, "gallerySubmissions"),
    where("status", "==", "approved"),
  );

  const [pendingSnapshot, approvedSnapshot] = await Promise.all([
    getDocs(pendingQuery),
    getDocs(approvedQuery),
  ]);

  const pendingSubmissions = pendingSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Submission[];

  const approvedSubmissions = approvedSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Submission[];

  return (
    <main className="min-h-screen bg-stone-50">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <section className="mb-10 rounded-3xl border border-stone-200 bg-gradient-to-r from-amber-50 via-white to-orange-50 p-8 shadow-sm">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-amber-700">
            Fable Culture Admin
          </p>

          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-stone-900">
                Student Uploads
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-7 text-stone-600">
                Review pending uploads and manage approved ones.
              </p>
            </div>

            <Link
              href="/admin"
              className="rounded-xl border border-stone-300 bg-white px-4 py-2 text-sm font-semibold text-stone-700 hover:bg-stone-100"
            >
              ← Back to Admin
            </Link>
          </div>
        </section>

        <section className="mb-16 rounded-3xl border border-amber-200 bg-amber-50/50 p-8 shadow-sm">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-stone-900">
              Pending Uploads
            </h2>
            <p className="text-stone-600">
              These need approving before they appear publicly.
            </p>
          </div>

          {pendingSubmissions.length === 0 ? (
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              No pending submissions right now.
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {pendingSubmissions.map((submission) => (
                <AdminSubmissionCard
                  key={submission.id}
                  id={submission.id}
                  title={submission.title}
                  region={submission.region}
                  description={submission.description}
                  imageUrl={submission.imageUrl}
                  storagePath={submission.storagePath}
                  submittedAt={submission.submittedAt}
                />
              ))}
            </div>
          )}
        </section>

        <section className="rounded-3xl border border-green-200 bg-green-50/40 p-8 shadow-sm">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-stone-900">
              Approved Uploads
            </h2>
            <p className="text-stone-600">
              These are already visible in the public gallery.
            </p>
          </div>

          {approvedSubmissions.length === 0 ? (
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              No approved submissions yet.
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {approvedSubmissions.map((submission) => (
                <AdminSubmissionCard
                  key={submission.id}
                  id={submission.id}
                  title={submission.title}
                  region={submission.region}
                  description={submission.description}
                  imageUrl={submission.imageUrl}
                  storagePath={submission.storagePath}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
