"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

export default function PasswordClient() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const searchParams = useSearchParams();

  const from = searchParams.get("from") || "/gallery";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const cleaned = input.trim();

    const sitePassword = process.env.NEXT_PUBLIC_SITE_PASSWORD;
    const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

    // ADMIN LOGIN
    if (from.startsWith("/admin")) {
      if (cleaned === adminPassword) {
        document.cookie = `fable-admin=${cleaned}; path=/; max-age=86400`;
        window.location.href = from;
        return;
      }
    }

    // GALLERY LOGIN
    if (cleaned === sitePassword) {
      document.cookie = `fable-auth=${cleaned}; path=/; max-age=3600`;
      window.location.href = from;
      return;
    }

    setError("Incorrect password. Try again.");
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16 bg-gradient-to-b from-slate-50 via-amber-50 to-orange-50">
      <div className="w-full max-w-md">
        <div className="text-center mb-6 flex flex-col items-center gap-3">
          <Image
            src="/images/FHLogo-Horizontal.svg"
            alt="Fable Culture Logo"
            width={70}
            height={70}
            priority
          />

          <p className="text-sm font-semibold tracking-widest text-slate-600">
            FABLE CULTURE
          </p>

          <h1 className="text-3xl font-extrabold text-slate-900">
            Enter Password
          </h1>

          <p className="text-slate-600">
            Enter password to access the gallery.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white shadow-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Password"
              className="w-full rounded-xl border px-4 py-3"
            />

            {error && <div className="text-red-600 text-sm">{error}</div>}

            <button
              type="submit"
              className="w-full rounded-xl bg-orange-500 text-white py-3 font-semibold"
            >
              Unlock
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
