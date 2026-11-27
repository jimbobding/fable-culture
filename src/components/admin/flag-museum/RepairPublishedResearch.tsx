"use client";

import { useEffect, useState } from "react";
import {
  collection,
  doc,
  onSnapshot,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/firebaseConfig";

type PublishedResearch = {
  id: string;
  regionId: string;
  flagId: string;
  annotationId: string;
  explanation: string;
  initials: string;
  sources?: string;
};

export default function RepairPublishedResearch() {
  const [items, setItems] = useState<PublishedResearch[]>([]);
  const [editing, setEditing] = useState<PublishedResearch | null>(null);
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return onSnapshot(
      collection(db, "flagExplanations"),
      (snapshot) => {
        setItems(
          snapshot.docs.map(
            (item) => ({
              ...item.data(),
              id: item.id,
            }) as PublishedResearch,
          ),
        );
        setLoading(false);
      },
      (error) => {
        setMessage(error.message);
        setLoading(false);
      },
    );
  }, []);

  async function saveChanges() {
    if (!editing || busy) return;

    const explanation = editing.explanation.trim();
    const sources = editing.sources?.trim() || "";
    const initials = editing.initials?.trim().toUpperCase() || "";

    if (!explanation || !sources) {
      setMessage("Explanation and research sources are required.");
      return;
    }

    if (explanation.length > 2000 || sources.length > 2000) {
      setMessage("Explanation or sources are too long.");
      return;
    }

    if (initials && !/^[A-Z]{2,4}$/.test(initials)) {
      setMessage("Use 2–4 initials only, or leave blank.");
      return;
    }

    if (!window.confirm(
      "Publish these changes, including the reviewed sources and authorised initials?"
    )) return;

    setBusy(true);
    setMessage("");

    try {
      await updateDoc(
        doc(db, "flagExplanations", editing.id),
        {
          explanation,
          sources,
          initials,
          updatedAt: serverTimestamp(),
        },
      );

      setEditing(null);
      setMessage("Published research successfully updated.");
    } catch (error) {
      setMessage(String(error));
    } finally {
      setBusy(false);
    }
  }

  async function removeResearch(item: PublishedResearch) {
    if (busy) return;

    if (!window.confirm(
      `Delete the published research for ${item.flagId} / ${item.annotationId}? This will reopen the annotation for pupils.`
    )) return;

    setBusy(true);
    setMessage("");

    try {
      await deleteDoc(
        doc(db, "flagExplanations", item.id),
      );

      if (editing?.id === item.id) {
        setEditing(null);
      }

      setMessage(
        "Published research removed. Annotation reopened."
      );
    } catch (error) {
      setMessage(String(error));
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="mb-10 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">

      <h2 className="text-2xl font-bold text-stone-900">
        Published Research ({items.length})
      </h2>

      <p className="mt-2 text-stone-600">
        Manage research currently displayed in the Flag Museum.
      </p>

      {message && (
        <p role="status" className="mt-4 rounded-xl bg-blue-50 p-4 text-blue-900">
          {message}
        </p>
      )}

      {loading && (
        <p className="mt-4">Loading published research...</p>
      )}

      {!loading && items.length === 0 && (
        <p className="mt-4 text-stone-500">
          No published research yet.
        </p>
      )}

      {items.map((item) => (
        <article
          key={item.id}
          className="mt-5 space-y-4 rounded-2xl border border-stone-200 bg-stone-50 p-5"
        >

          <p className="text-xs font-bold uppercase tracking-wide text-stone-500">
            {item.regionId} / {item.flagId}
          </p>

          <h3 className="text-xl font-bold capitalize text-stone-900">
            {item.annotationId.replace(/-/g, " ")}
          </h3>

          {editing?.id === item.id ? (
            <div className="space-y-4">

              <label className="block font-semibold">
                Explanation
                <textarea
                  value={editing.explanation}
                  onChange={(event) =>
                    setEditing({
                      ...editing,
                      explanation: event.target.value,
                    })
                  }
                  disabled={busy}
                  maxLength={2000}
                  rows={5}
                  className="mt-2 w-full rounded-xl border bg-white p-3"
                />
              </label>

              <label className="block font-semibold">
                Published pupil initials
                <input
                  value={editing.initials}
                  onChange={(event) =>
                    setEditing({
                      ...editing,
                      initials: event.target.value.toUpperCase(),
                    })
                  }
                  disabled={busy}
                  maxLength={4}
                  className="mt-2 block w-32 rounded-xl border bg-white p-3"
                />
              </label>

              <label className="block font-semibold">
                Research sources
                <textarea
                  value={editing.sources || ""}
                  onChange={(event) =>
                    setEditing({
                      ...editing,
                      sources: event.target.value,
                    })
                  }
                  disabled={busy}
                  maxLength={2000}
                  rows={4}
                  className="mt-2 w-full rounded-xl border bg-white p-3"
                />
              </label>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={saveChanges}
                  disabled={busy}
                  className="rounded-lg bg-green-700 px-4 py-3 font-bold text-white disabled:opacity-50"
                >
                  Save & Publish Changes
                </button>

                <button
                  onClick={() => setEditing(null)}
                  disabled={busy}
                  className="rounded-lg bg-gray-500 px-4 py-3 font-bold text-white"
                >
                  Cancel
                </button>
              </div>

            </div>
          ) : (
            <>

              <div className="rounded-xl bg-white p-4">
                <h4 className="font-bold">Explanation</h4>
                <p className="mt-2 whitespace-pre-wrap break-words">
                  {item.explanation}
                </p>
              </div>

              <div className="rounded-xl bg-amber-50 p-4">
                <h4 className="font-bold">Museum Curator</h4>
                <p className="mt-2">
                  {item.initials || "Initials not published"}
                </p>
              </div>

              <div className="rounded-xl bg-white p-4">
                <h4 className="font-bold">Research sources</h4>
                <p className="mt-2 whitespace-pre-wrap break-words">
                  {item.sources || "No sources published"}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">

                <button
                  onClick={() => {
                    setMessage("");
                    setEditing({ ...item });
                  }}
                  disabled={busy}
                  className="rounded-lg bg-blue-700 px-4 py-3 font-bold text-white"
                >
                  Edit Research
                </button>

                <button
                  onClick={() => removeResearch(item)}
                  disabled={busy}
                  className="rounded-lg bg-red-700 px-4 py-3 font-bold text-white"
                >
                  Delete Published Research
                </button>

              </div>

            </>
          )}

        </article>
      ))}

    </section>
  );
}
