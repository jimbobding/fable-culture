"use client";

import { useState } from "react";
import { db } from "@/firebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

type Props = {
  region: string;
  country: string;
  periodKey: string;
  onSuccess?: () => void;
  submittedAt?: any;
};

export default function TimelineSubmissionForm({
  region,
  country,
  periodKey,
  onSuccess,
}: Props) {
  const [title, setTitle] = useState("");
  const [explanation, setExplanation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [studentName, setStudentName] = useState("");

  const handleSubmit = async () => {
    if (!studentName.trim() || !title.trim() || !explanation.trim()) return;

    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "timelineSubmissions"), {
        studentName: studentName.trim(),
        title: title.trim(),
        explanation: explanation.trim(),
        region,
        country,
        periodKey,
        status: "pending",

        submittedAt: serverTimestamp(),
      });

      setTitle("");
      setExplanation("");
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        onSuccess?.();
      }, 1200);
    } catch (err) {
      console.error("Submission failed:", err);
      alert("Something went wrong.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="mt-4 rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <p className="mb-2 text-sm font-semibold text-stone-700">
        Add your idea for this time period
      </p>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Short title (e.g. Independence)"
        className="mb-2 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm"
      />

      <textarea
        value={explanation}
        onChange={(e) => setExplanation(e.target.value)}
        placeholder="Explain what happened..."
        className="mb-3 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm"
        rows={3}
      />
      <input
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        placeholder="Your name"
        className="mb-2 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm"
      />

      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="w-full rounded-lg bg-amber-600 px-3 py-2 text-sm font-semibold text-white hover:bg-amber-700 disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>

      {success && (
        <p className="mt-2 text-sm text-green-600">
          Submitted! Waiting for approval.
        </p>
      )}
    </div>
  );
}
