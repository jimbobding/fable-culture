"use client";

import Link from "next/link";
import RepairPublishedResearch from "@/components/admin/flag-museum/RepairPublishedResearch";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import type { User } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import TeacherSignIn from "@/components/admin/flag-museum/TeacherSignIn";
import PendingContributions from "@/components/admin/flag-museum/PendingContributions";

export default function FlagContributionsPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    return onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  async function handleSignOut() {
    try {
      await signOut(auth);
    } catch {
      setError("Unable to sign out. Please try again.");
    }
  }

  return (
    <main className="min-h-screen bg-stone-50">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <section className="mb-10 rounded-3xl border border-stone-200 bg-gradient-to-r from-amber-50 via-white to-orange-50 p-8 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold text-stone-900">
                Flag Museum Contributions
              </h1>

              <p className="mt-2 text-stone-600">
                Review pupil research and publish approved explanations to the
                Flag Museum.
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

        {error && (
          <p role="alert" className="mb-4 text-red-700">
            {error}
          </p>
        )}

        {loading ? (
          <p className="text-stone-600">Checking teacher sign-in...</p>
        ) : !user ? (
          <TeacherSignIn />
        ) : (
          <>
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <div>
                <p className="font-semibold text-stone-900">Signed in</p>

                <p className="mt-1 text-sm text-stone-600">{user.email}</p>
              </div>

              <button
                onClick={handleSignOut}
                className="rounded-lg bg-stone-100 px-4 py-2 text-sm font-semibold text-stone-800 hover:bg-stone-200"
              >
                Sign out
              </button>
            </div>

            <RepairPublishedResearch />
            <PendingContributions />
          </>
        )}
      </div>
    </main>
  );
}
