"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebaseConfig";

export default function TeacherSignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSignIn(event: React.FormEvent) {
    event.preventDefault();

    if (loading) return;

    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);

      setPassword("");
    } catch {
      setError("Unable to sign in. Please check your email and password.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-md rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-stone-900">Teacher sign-in</h2>

      <p className="mt-3 text-sm text-stone-600">
        Sign in with your authorised teacher account to review Flag Museum
        contributions.
      </p>

      <form onSubmit={handleSignIn} className="mt-6 space-y-5">
        <label className="block">
          <span className="text-sm font-semibold text-stone-700">
            Email address
          </span>

          <input
            type="email"
            autoComplete="username"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            disabled={loading}
            className="mt-2 w-full rounded-lg border border-stone-300 p-3"
          />
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-stone-700">Password</span>

          <input
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            disabled={loading}
            className="mt-2 w-full rounded-lg border border-stone-300 p-3"
          />
        </label>

        {error && (
          <p
            role="alert"
            className="rounded-lg bg-red-50 p-3 text-sm text-red-700"
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-stone-900 px-5 py-3 font-semibold text-white transition hover:bg-stone-700 disabled:opacity-50"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </div>
  );
}
