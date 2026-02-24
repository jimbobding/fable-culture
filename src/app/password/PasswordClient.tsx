"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { unlock } from "./actions";

export default function PasswordClient() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const result = await unlock(new FormData(e.currentTarget));

    if (!result.ok) {
      setError(result.message);
      return;
    }

    router.replace(from);
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
            className="rounded-xl shadow-sm"
            priority
          />
          <p className="text-sm font-semibold tracking-widest text-slate-600">
            FABLE CULTURE
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-1">
            Enter Password
          </h1>
          <p className="text-slate-600 mt-1">
            This page is protected. Please enter the site password to continue.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur shadow-lg p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block">
              <span className="text-sm font-semibold text-slate-700">
                Password
              </span>

              <input
                name="password"
                type="password"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="••••••••"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-orange-300 focus:ring-4 focus:ring-orange-100"
              />
            </label>

            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-700 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-3 font-semibold text-white shadow-md hover:brightness-105 active:brightness-95 transition"
            >
              Unlock
            </button>

            <div className="flex items-center justify-between pt-2">
              <Link
                href="/"
                className="text-sm font-semibold text-slate-600 hover:text-slate-900"
              >
                ← Back to Home
              </Link>

              <button
                type="button"
                onClick={() => {
                  setInput("");
                  setError("");
                }}
                className="text-sm font-semibold text-slate-600 hover:text-slate-900"
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
