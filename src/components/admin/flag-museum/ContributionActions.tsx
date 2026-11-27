"use client";

import { useState } from "react";

import {
  approveFlagContribution,
  rejectFlagContribution,
  type FlagContribution,
} from "@/lib/flag-museum/moderationRepository";

type Props = {
  contribution: FlagContribution;
};

export default function ContributionActions({ contribution }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [explanation, setExplanation] = useState(contribution.explanation);
  const [sources, setSources] = useState(contribution.sources);
  const [publishInitials, setPublishInitials] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function handleApprove() {
    if (busy || !explanation.trim()) return;

    const confirmed = window.confirm(
      "Have you checked the explanation, research sources and pupil recognition? Approve and publish to the Flag Museum?",
    );

    if (!confirmed) return;

    setBusy(true);
    setError("");

    try {
      await approveFlagContribution(
        contribution.id,
        explanation,
        publishInitials,
        sources,
      );
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Unable to approve contribution.",
      );
    } finally {
      setBusy(false);
    }
  }

  async function handleReject() {
    if (busy) return;

    const confirmed = window.confirm("Reject this contribution?");

    if (!confirmed) return;

    setBusy(true);
    setError("");

    try {
      await rejectFlagContribution(contribution.id);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Unable to reject contribution.",
      );
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mt-6 space-y-4 border-t border-stone-200 pt-5">
      {isEditing && (
        <label className="block">
          <span className="font-semibold text-stone-900">
            Edit explanation before publishing
          </span>

          <textarea
            value={explanation}
            onChange={(event) => setExplanation(event.target.value)}
            maxLength={2000}
            rows={5}
            disabled={busy}
            className="mt-3 w-full rounded-xl border border-stone-300 p-4 text-stone-800"
          />
        </label>
      )}
      {isEditing && (
        <label className="block">
          <span className="font-semibold text-stone-900">
            Edit research sources before publishing
          </span>

          <textarea
            value={sources}
            onChange={(event) => setSources(event.target.value)}
            maxLength={2000}
            rows={4}
            disabled={busy}
            className="mt-3 w-full rounded-xl border border-stone-300 p-4 text-stone-800"
          />
        </label>
      )}

      {!isEditing && sources !== contribution.sources && (
        <div className="rounded-xl bg-blue-50 p-4">
          <p className="font-semibold text-blue-900">
            Reviewed research sources
          </p>

          <p className="mt-2 whitespace-pre-wrap text-stone-800">
            {sources || "Research sources are required before publishing."}
          </p>
        </div>
      )}
      {!isEditing && explanation !== contribution.explanation && (
        <div className="rounded-xl bg-blue-50 p-4">
          <p className="font-semibold text-blue-900">Edited explanation</p>

          <p className="mt-2 whitespace-pre-wrap text-stone-800">
            {explanation}
          </p>
        </div>
      )}

      <label className="flex items-center gap-3 text-sm text-stone-700">
        <input
          type="checkbox"
          checked={publishInitials}
          disabled={busy}
          onChange={(event) => setPublishInitials(event.target.checked)}
          className="h-5 w-5"
        />
        Include pupil initials in the published exhibit
      </label>

      {error && (
        <p
          role="alert"
          className="rounded-lg bg-red-50 p-3 text-sm text-red-700"
        >
          {error}
        </p>
      )}

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleApprove}
          disabled={busy || !explanation.trim()}
          className="rounded-lg bg-green-600 px-4 py-3 text-sm font-semibold text-white hover:bg-green-700 disabled:opacity-50"
        >
          {busy ? "Processing..." : "Approve & Publish"}
        </button>

        <button
          type="button"
          onClick={() => setIsEditing(!isEditing)}
          disabled={busy}
          className="rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {isEditing ? "Finish editing" : "Edit"}
        </button>

        {isEditing && (
          <button
            type="button"
            disabled={busy}
            onClick={() => {
              setExplanation(contribution.explanation);
              setIsEditing(false);
              setSources(contribution.sources);
            }}
            className="rounded-lg bg-gray-500 px-4 py-3 text-sm font-semibold text-white hover:bg-gray-600"
          >
            Cancel edits
          </button>
        )}

        <button
          type="button"
          onClick={handleReject}
          disabled={busy}
          className="rounded-lg bg-red-600 px-4 py-3 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-50"
        >
          Reject
        </button>
      </div>
    </div>
  );
}
