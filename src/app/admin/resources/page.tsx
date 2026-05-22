"use client";

import { useEffect, useState } from "react";

import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";

import { db } from "@/firebaseConfig";

import { ResourceSubmission } from "@/types/resourceSubmission";

export default function AdminResourcesPage() {
  const [resources, setResources] = useState<ResourceSubmission[]>([]);

  const [editingId, setEditingId] = useState<string | null>(null);

  const [editTitle, setEditTitle] = useState("");

  const [editDescription, setEditDescription] = useState("");

  const [editUrl, setEditUrl] = useState("");

  const [loading, setLoading] = useState(true);

  async function loadResources() {
    try {
      const q = query(
        collection(db, "resourceSubmissions"),
        orderBy("createdAt", "desc"),
      );

      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((docItem) => ({
        id: docItem.id,

        ...(docItem.data() as ResourceSubmission),
      }));

      setResources(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadResources();
  }, []);

  async function approveResource(id: string) {
    try {
      await updateDoc(doc(db, "resourceSubmissions", id), {
        status: "approved",
      });

      loadResources();
    } catch (error) {
      console.error(error);
    }
  }

  async function rejectResource(id: string) {
    try {
      await updateDoc(doc(db, "resourceSubmissions", id), {
        status: "rejected",
      });

      loadResources();
    } catch (error) {
      console.error(error);
    }
  }

  async function saveEdit(id: string) {
    try {
      await updateDoc(doc(db, "resourceSubmissions", id), {
        title: editTitle,
        description: editDescription,
        url: editUrl,
      });

      setEditingId(null);

      loadResources();
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteResource(id: string) {
    try {
      await deleteDoc(doc(db, "resourceSubmissions", id));

      loadResources();
    } catch (error) {
      console.error(error);
    }
  }

  const pendingResources = resources.filter(
    (resource) => resource.status === "pending",
  );

  const approvedResources = resources.filter(
    (resource) => resource.status === "approved",
  );

  if (loading) {
    return (
      <div className="p-10 text-center text-slate-600">
        Loading resources...
      </div>
    );
  }

  function renderResourceCard(
    resource: ResourceSubmission,
    type: "pending" | "approved",
  ) {
    return (
      <div
        key={resource.id}
        className={`
          rounded-[2rem]
          border
          p-8
          shadow-sm
          backdrop-blur-sm
          space-y-5
          ${
            type === "approved"
              ? "border-emerald-200 bg-emerald-50/50"
              : "border-slate-200 bg-white/60"
          }
        `}
      >
        <div className="space-y-3">
          {type === "pending" && (
            <p className="uppercase tracking-[0.25em] text-xs font-semibold text-amber-600">
              Pending Review
            </p>
          )}

          {editingId === resource.id ? (
            <input
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className="
                w-full
                rounded-xl
                border
                border-slate-300
                bg-white
                px-4
                py-3
                text-2xl
                font-black
                outline-none
              "
            />
          ) : (
            <h2 className="text-3xl font-black text-slate-900">
              {resource.title}
            </h2>
          )}

          <p className="text-sm uppercase tracking-[0.15em] text-slate-400">
            {resource.topic} • {resource.country} • {resource.region}
          </p>

          {editingId === resource.id ? (
            <textarea
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
              rows={4}
              className="
                w-full
                rounded-xl
                border
                border-slate-300
                bg-white
                px-4
                py-3
                outline-none
                resize-none
              "
            />
          ) : (
            <p className="text-slate-700 leading-relaxed">
              {resource.description}
            </p>
          )}

          {editingId === resource.id ? (
            <input
              value={editUrl}
              onChange={(e) => setEditUrl(e.target.value)}
              className="
                w-full
                rounded-xl
                border
                border-slate-300
                bg-white
                px-4
                py-3
                outline-none
              "
            />
          ) : (
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-slate-800 font-semibold underline"
            >
              Visit Resource →
            </a>
          )}

          {resource.submittedBy && (
            <p className="text-sm italic text-slate-500">
              Submitted by {resource.submittedBy}
            </p>
          )}
        </div>

        {/* ACTIONS */}
        <div className="flex flex-wrap gap-4 pt-2">
          {type === "pending" && (
            <button
              onClick={() => approveResource(resource.id!)}
              className="
                rounded-full
                bg-emerald-600
                px-5
                py-2
                text-sm
                font-bold
                text-white
                hover:bg-emerald-500
                transition-all
              "
            >
              ✅ Approve
            </button>
          )}

          {editingId === resource.id ? (
            <button
              onClick={() => saveEdit(resource.id!)}
              className="
                rounded-full
                bg-blue-600
                px-5
                py-2
                text-sm
                font-bold
                text-white
                hover:bg-blue-500
                transition-all
              "
            >
              💾 Save
            </button>
          ) : (
            <button
              onClick={() => {
                setEditingId(resource.id!);

                setEditTitle(resource.title);

                setEditDescription(resource.description);

                setEditUrl(resource.url);
              }}
              className="
                rounded-full
                bg-slate-700
                px-5
                py-2
                text-sm
                font-bold
                text-black
                hover:bg-slate-600
                transition-all
              "
            >
              ✏️ Edit
            </button>
          )}

          <button
            onClick={() => deleteResource(resource.id!)}
            className="
              rounded-full
              bg-red-600
              px-5
              py-2
              text-sm
              font-bold
              text-white
              hover:bg-red-500
              transition-all
            "
          >
            🗑 Delete
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      {/* HEADER */}
      <div className="space-y-4">
        <p className="uppercase tracking-[0.3em] text-xs font-semibold text-slate-500">
          Admin
        </p>

        <h1 className="text-5xl font-black text-slate-900">
          🌍 Resource Moderation
        </h1>

        <p className="text-slate-600 text-lg">
          Review student-submitted resources before they appear on Fable
          Culture.
        </p>
      </div>

      {/* PENDING */}
      <section className="space-y-6">
        <div className="space-y-2">
          <p className="uppercase tracking-[0.25em] text-xs font-semibold text-amber-600">
            Pending Resources
          </p>

          <h2 className="text-3xl font-black text-slate-900">
            ⏳ Pending Review
          </h2>
        </div>

        {pendingResources.length === 0 ? (
          <div className="rounded-[2rem] border border-slate-200 bg-white/60 p-10 text-center shadow-sm">
            <p className="text-slate-500">No pending resource submissions.</p>
          </div>
        ) : (
          pendingResources.map((resource) =>
            renderResourceCard(resource, "pending"),
          )
        )}
      </section>

      {/* APPROVED */}
      <section className="space-y-6">
        <div className="space-y-2">
          <p className="uppercase tracking-[0.25em] text-xs font-semibold text-emerald-600">
            Approved Resources
          </p>

          <h2 className="text-3xl font-black text-slate-900">✅ Approved</h2>
        </div>

        {approvedResources.length === 0 ? (
          <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50/50 p-10 text-center shadow-sm">
            <p className="text-slate-500">No approved resources yet.</p>
          </div>
        ) : (
          approvedResources.map((resource) =>
            renderResourceCard(resource, "approved"),
          )
        )}
      </section>
    </main>
  );
}
