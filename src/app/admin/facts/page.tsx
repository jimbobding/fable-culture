export const dynamic = "force-dynamic";

import Link from "next/link";
import { db } from "@/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import AdminFactsClient from "@/components/admin/AdminFactsClient";

export type Fact = {
  id: string;
  fact: string;
  continent: string;
  regionKey: string;
  status: string;
};

export default async function AdminFactsPage() {
  const snapshot = await getDocs(collection(db, "regionFacts"));

  const facts = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Fact[];

  return (
    <main className="min-h-screen bg-stone-50">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <section className="mb-10 rounded-3xl border border-stone-200 bg-gradient-to-r from-amber-50 via-white to-orange-50 p-8 shadow-sm">
          <div className="flex justify-between items-start gap-4">
            <div>
              <h1 className="text-4xl font-bold text-stone-900">
                Fact Submissions
              </h1>
              <p className="mt-2 text-stone-600">
                Review and manage submitted facts.
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

        <AdminFactsClient facts={facts} />
      </div>
    </main>
  );
}
