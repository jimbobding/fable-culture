"use client";

import { useState } from "react";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { db } from "@/firebaseConfig";

type Props = {
  region: string;

  countries: string[];

  topics: string[];
};

export default function ResourceSubmissionForm({
  region,
  countries,
  topics,
}: Props) {
  const [title, setTitle] = useState("");

  const [url, setUrl] = useState("");

  const [description, setDescription] = useState("");

  const [submittedBy, setSubmittedBy] = useState("");

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);

      await addDoc(collection(db, "resourceSubmissions"), {
        title,
        url,
        description,

        region,

        submittedBy: submittedBy || "",

        status: "pending",

        createdAt: serverTimestamp(),
      });

      setSuccess(true);

      setTitle("");
      setUrl("");
      setDescription("");

      setSubmittedBy("");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="max-w-3xl mx-auto rounded-[2rem] border border-emerald-200 bg-emerald-50/70 backdrop-blur-sm p-8 text-center space-y-4">
        <p className="uppercase tracking-[0.3em] text-xs font-semibold text-emerald-700">
          Submission Received
        </p>

        <h3 className="text-3xl font-black text-emerald-900">🌍 Thank You</h3>

        <p className="text-emerald-800 leading-relaxed max-w-2xl mx-auto">
          Your resource has been sent for teacher review and may be added to
          Fable Culture after approval.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
        max-w-3xl
        mx-auto
        rounded-[2rem]
        border
        border-slate-200/70
        bg-white/40
        backdrop-blur-md
        p-8
        shadow-lg
        space-y-6
      "
    >
      <div className="space-y-3 text-center">
        <p className="uppercase tracking-[0.3em] text-xs font-semibold text-slate-500">
          Student Contribution
        </p>

        <h3 className="text-3xl font-black text-slate-900">
          ➕ Suggest a Resource
        </h3>

        <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Found a useful website, video, museum, article, or educational
          resource? Submit it for teacher review.
        </p>
      </div>

      {/* TITLE */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700">
          Resource Title
        </label>

        <input
          required
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="
            w-full
            rounded-xl
            border
            border-slate-200
            bg-white/70
            px-4
            py-3
            outline-none
            focus:border-slate-400
          "
          placeholder="Caribbean Music History"
        />
      </div>

      {/* URL */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700">
          Website URL
        </label>

        <input
          required
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="
            w-full
            rounded-xl
            border
            border-slate-200
            bg-white/70
            px-4
            py-3
            outline-none
            focus:border-slate-400
          "
          placeholder="https://..."
        />
      </div>

      {/* DESCRIPTION */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700">
          Why is this useful?
        </label>

        <textarea
          required
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="
            w-full
            rounded-xl
            border
            border-slate-200
            bg-white/70
            px-4
            py-3
            outline-none
            focus:border-slate-400
            resize-none
          "
          placeholder="Explain why students should explore this resource..."
        />
      </div>

      {/* NAME */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700">
          Your Name
        </label>

        <input
          required
          type="text"
          value={submittedBy}
          onChange={(e) => setSubmittedBy(e.target.value)}
          className="
            w-full
            rounded-xl
            border
            border-slate-200
            bg-white/70
            px-4
            py-3
            outline-none
            focus:border-slate-400
          "
          placeholder="Your name"
        />
      </div>

      {/* SUBMIT */}
      <button
        type="submit"
        disabled={loading}
        className="
          w-full
          rounded-xl
          bg-slate-900
          px-6
          py-4
          text-white
          font-bold
          transition-all
          hover:bg-slate-800
          disabled:opacity-50
        "
      >
        {loading ? "Submitting..." : "Submit Resource"}
      </button>
    </form>
  );
}
