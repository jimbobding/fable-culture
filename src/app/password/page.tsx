import { Suspense } from "react";
import PasswordClient from "./PasswordClient";

export default function PasswordPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen flex items-center justify-center px-6 py-16 bg-gradient-to-b from-slate-50 via-amber-50 to-orange-50">
          <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white/80 backdrop-blur shadow-lg p-6 sm:p-8 text-center">
            <p className="text-slate-700 font-semibold">Loading…</p>
          </div>
        </main>
      }
    >
      <PasswordClient />
    </Suspense>
  );
}
