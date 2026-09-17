"use client";

import { ChangeEvent, useEffect, useMemo, useState } from "react";

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import { storage } from "@/firebaseConfig";
import BackToAdminButton from "@/components/admin/BackToAdminButton";

import {
  deleteCultureGalleryArtRoomImage,
  deleteCultureGalleryArtRoomProject,
  FirebaseArtRoomExampleImage,
  FirebaseArtRoomProject,
  getAllCultureGalleryArtRoomProjects,
  saveCultureGalleryArtRoomProject,
  setCultureGalleryArtRoomPublished,
} from "@/app/lib/cultureGalleryArtRoom";

/* =========================================================
   REGION OPTIONS

   Add future regions here when their Culture Gallery goes live.
========================================================= */

const REGIONS = [
  {
    slug: "east-asia",
    name: "East Asia",
    countries: [
      "China",
      "Japan",
      "South Korea",
      "North Korea",
      "Mongolia",
      "Taiwan",
    ],
  },
];

/* =========================================================
   TYPES
========================================================= */

type PendingExampleImage = {
  id: string;
  file: File;
  previewUrl: string;
  alt: string;
  caption: string;
};

type EditorState = {
  id: string;

  region: string;
  regionName: string;
  country: string;

  title: string;
  description: string;
  task: string;

  image: string;
  imageStoragePath: string;

  exampleImages: FirebaseArtRoomExampleImage[];

  materials: string[];
  instructions: string[];

  order: number;
  published: boolean;
};

/* =========================================================
   EMPTY EDITOR
========================================================= */

function makeEmptyEditor(): EditorState {
  return {
    id: "",

    region: "east-asia",
    regionName: "East Asia",
    country: "",

    title: "",
    description: "",
    task: "",

    image: "",
    imageStoragePath: "",

    exampleImages: [],

    materials: [""],
    instructions: [""],

    order: 1,
    published: true,
  };
}

/* =========================================================
   SAFE FILE NAME
========================================================= */

function safeFileName(fileName: string) {
  return fileName
    .toLowerCase()
    .replace(/[^a-z0-9.-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/* =========================================================
   UNIQUE ID
========================================================= */

function makeProjectId(title: string) {
  const slug = title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return `${slug || "art-room-project"}-${Date.now()}`;
}

/* =========================================================
   PAGE
========================================================= */

export default function AdminCultureGalleryArtRoomPage() {
  const [projects, setProjects] = useState<FirebaseArtRoomProject[]>([]);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [workingId, setWorkingId] = useState<string | null>(null);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [regionFilter, setRegionFilter] = useState("east-asia");

  const [editorOpen, setEditorOpen] = useState(false);

  const [editingExisting, setEditingExisting] = useState(false);

  const [editor, setEditor] = useState<EditorState>(makeEmptyEditor());

  const [mainImageFile, setMainImageFile] = useState<File | null>(null);

  const [mainImagePreview, setMainImagePreview] = useState("");

  const [pendingExamples, setPendingExamples] = useState<PendingExampleImage[]>(
    [],
  );

  /* =========================================================
     LOAD PROJECTS
  ========================================================= */

  async function loadProjects() {
    try {
      setLoading(true);
      setError("");

      const data = await getAllCultureGalleryArtRoomProjects();

      setProjects(data);
    } catch (loadError) {
      console.error(loadError);

      setError("Couldn't load the Culture Gallery Art Room projects.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void loadProjects();
  }, []);

  /* =========================================================
     FILTERED PROJECTS
  ========================================================= */

  const filteredProjects = useMemo(() => {
    return projects
      .filter((project) => project.region === regionFilter)
      .sort((a, b) => a.order - b.order);
  }, [projects, regionFilter]);

  /* =========================================================
     REGION DETAILS
  ========================================================= */

  const selectedRegion =
    REGIONS.find((region) => region.slug === editor.region) ?? REGIONS[0];

  /* =========================================================
     CLEAN UP PREVIEW URLS
  ========================================================= */

  useEffect(() => {
    return () => {
      if (mainImagePreview) {
        URL.revokeObjectURL(mainImagePreview);
      }

      pendingExamples.forEach((example) => {
        URL.revokeObjectURL(example.previewUrl);
      });
    };
  }, [mainImagePreview, pendingExamples]);

  /* =========================================================
     OPEN NEW PROJECT
  ========================================================= */

  function openNewProject() {
    const region =
      REGIONS.find((item) => item.slug === regionFilter) ?? REGIONS[0];

    setEditor({
      ...makeEmptyEditor(),

      region: region.slug,
      regionName: region.name,

      order: filteredProjects.length + 1,
    });

    setEditingExisting(false);

    setMainImageFile(null);
    setMainImagePreview("");
    setPendingExamples([]);

    setError("");
    setSuccess("");

    setEditorOpen(true);
  }

  /* =========================================================
     OPEN EXISTING PROJECT
  ========================================================= */

  function openExistingProject(project: FirebaseArtRoomProject) {
    setEditor({
      id: project.id,

      region: project.region,
      regionName: project.regionName,

      country: project.country ?? "",

      title: project.title,
      description: project.description ?? "",
      task: project.task ?? "",

      image: project.image ?? "",
      imageStoragePath: project.imageStoragePath ?? "",

      exampleImages: [...project.exampleImages],

      materials: project.materials.length > 0 ? [...project.materials] : [""],

      instructions:
        project.instructions.length > 0 ? [...project.instructions] : [""],

      order: project.order,
      published: project.published,
    });

    setEditingExisting(true);

    setMainImageFile(null);
    setMainImagePreview("");
    setPendingExamples([]);

    setError("");
    setSuccess("");

    setEditorOpen(true);
  }

  /* =========================================================
     CLOSE EDITOR
  ========================================================= */

  function closeEditor() {
    if (saving) return;

    if (mainImagePreview) {
      URL.revokeObjectURL(mainImagePreview);
    }

    pendingExamples.forEach((example) => {
      URL.revokeObjectURL(example.previewUrl);
    });

    setEditorOpen(false);

    setMainImageFile(null);
    setMainImagePreview("");
    setPendingExamples([]);

    setError("");
  }

  /* =========================================================
     CHANGE REGION
  ========================================================= */

  function changeEditorRegion(regionSlug: string) {
    const region =
      REGIONS.find((item) => item.slug === regionSlug) ?? REGIONS[0];

    setEditor((current) => ({
      ...current,

      region: region.slug,
      regionName: region.name,

      country: "",
    }));
  }

  /* =========================================================
     MAIN IMAGE
  ========================================================= */

  function chooseMainImage(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) return;

    if (mainImagePreview) {
      URL.revokeObjectURL(mainImagePreview);
    }

    setMainImageFile(file);
    setMainImagePreview(URL.createObjectURL(file));

    event.target.value = "";
  }

  function removeNewMainImage() {
    if (mainImagePreview) {
      URL.revokeObjectURL(mainImagePreview);
    }

    setMainImageFile(null);
    setMainImagePreview("");
  }

  async function removeExistingMainImage() {
    if (!editor.image) return;

    const confirmed = window.confirm("Remove the current main image?");

    if (!confirmed) return;

    try {
      setError("");

      if (editor.imageStoragePath) {
        await deleteCultureGalleryArtRoomImage(editor.imageStoragePath);
      }

      setEditor((current) => ({
        ...current,
        image: "",
        imageStoragePath: "",
      }));
    } catch (imageError) {
      console.error(imageError);

      setError("Couldn't remove the main image.");
    }
  }

  /* =========================================================
     ADD EXAMPLE IMAGES
  ========================================================= */

  function chooseExampleImages(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []);

    if (files.length === 0) return;

    const newExamples = files.map((file) => ({
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,

      file,

      previewUrl: URL.createObjectURL(file),

      alt: "",
      caption: "",
    }));

    setPendingExamples((current) => [...current, ...newExamples]);

    event.target.value = "";
  }

  function updatePendingExample(
    id: string,
    field: "alt" | "caption",
    value: string,
  ) {
    setPendingExamples((current) =>
      current.map((example) =>
        example.id === id
          ? {
              ...example,
              [field]: value,
            }
          : example,
      ),
    );
  }

  function removePendingExample(id: string) {
    setPendingExamples((current) => {
      const example = current.find((item) => item.id === id);

      if (example) {
        URL.revokeObjectURL(example.previewUrl);
      }

      return current.filter((item) => item.id !== id);
    });
  }

  /* =========================================================
     EXISTING EXAMPLE IMAGES
  ========================================================= */

  function updateExistingExample(
    index: number,
    field: "alt" | "caption",
    value: string,
  ) {
    setEditor((current) => ({
      ...current,

      exampleImages: current.exampleImages.map((example, exampleIndex) =>
        exampleIndex === index
          ? {
              ...example,
              [field]: value,
            }
          : example,
      ),
    }));
  }

  async function removeExistingExample(index: number) {
    const example = editor.exampleImages[index];

    if (!example) return;

    const confirmed = window.confirm("Remove this inspiration image?");

    if (!confirmed) return;

    try {
      setError("");

      if (example.storagePath) {
        await deleteCultureGalleryArtRoomImage(example.storagePath);
      }

      setEditor((current) => ({
        ...current,

        exampleImages: current.exampleImages
          .filter((_, exampleIndex) => exampleIndex !== index)
          .map((item, itemIndex) => ({
            ...item,
            order: itemIndex + 1,
          })),
      }));
    } catch (imageError) {
      console.error(imageError);

      setError("Couldn't remove that inspiration image.");
    }
  }

  function moveExistingExample(index: number, direction: "up" | "down") {
    setEditor((current) => {
      const images = [...current.exampleImages];

      const newIndex = direction === "up" ? index - 1 : index + 1;

      if (newIndex < 0 || newIndex >= images.length) {
        return current;
      }

      [images[index], images[newIndex]] = [images[newIndex], images[index]];

      return {
        ...current,

        exampleImages: images.map((image, imageIndex) => ({
          ...image,
          order: imageIndex + 1,
        })),
      };
    });
  }

  function movePendingExample(index: number, direction: "up" | "down") {
    setPendingExamples((current) => {
      const images = [...current];

      const newIndex = direction === "up" ? index - 1 : index + 1;

      if (newIndex < 0 || newIndex >= images.length) {
        return current;
      }

      [images[index], images[newIndex]] = [images[newIndex], images[index]];

      return images;
    });
  }

  /* =========================================================
     MATERIALS
  ========================================================= */

  function updateMaterial(index: number, value: string) {
    setEditor((current) => ({
      ...current,

      materials: current.materials.map((material, materialIndex) =>
        materialIndex === index ? value : material,
      ),
    }));
  }

  function addMaterial() {
    setEditor((current) => ({
      ...current,
      materials: [...current.materials, ""],
    }));
  }

  function removeMaterial(index: number) {
    setEditor((current) => ({
      ...current,

      materials:
        current.materials.length === 1
          ? [""]
          : current.materials.filter(
              (_, materialIndex) => materialIndex !== index,
            ),
    }));
  }

  /* =========================================================
     INSTRUCTIONS
  ========================================================= */

  function updateInstruction(index: number, value: string) {
    setEditor((current) => ({
      ...current,

      instructions: current.instructions.map((instruction, instructionIndex) =>
        instructionIndex === index ? value : instruction,
      ),
    }));
  }

  function addInstruction() {
    setEditor((current) => ({
      ...current,
      instructions: [...current.instructions, ""],
    }));
  }

  function removeInstruction(index: number) {
    setEditor((current) => ({
      ...current,

      instructions:
        current.instructions.length === 1
          ? [""]
          : current.instructions.filter(
              (_, instructionIndex) => instructionIndex !== index,
            ),
    }));
  }

  /* =========================================================
     UPLOAD ONE FILE
  ========================================================= */

  async function uploadImage(
    file: File,
    region: string,
    projectId: string,
    folder: "main" | "examples",
  ) {
    const cleanName = safeFileName(file.name);

    const uniqueName = `${Date.now()}-${Math.random()
      .toString(36)
      .slice(2, 8)}-${cleanName}`;

    const storagePath = `culture-gallery/art-room/${region}/${projectId}/${folder}/${uniqueName}`;

    const storageReference = ref(storage, storagePath);

    await uploadBytes(storageReference, file);

    const imageUrl = await getDownloadURL(storageReference);

    return {
      imageUrl,
      storagePath,
    };
  }

  /* =========================================================
     SAVE
  ========================================================= */

  async function saveProject() {
    if (!editor.title.trim()) {
      setError("Please give the Art Room task a title.");
      return;
    }

    if (!editor.region) {
      setError("Please choose a region.");
      return;
    }

    try {
      setSaving(true);
      setError("");
      setSuccess("");

      const projectId = editor.id || makeProjectId(editor.title);

      let mainImage = editor.image;
      let mainImageStoragePath = editor.imageStoragePath;

      /* -----------------------------------------
         NEW MAIN IMAGE
      ----------------------------------------- */

      if (mainImageFile) {
        const uploaded = await uploadImage(
          mainImageFile,
          editor.region,
          projectId,
          "main",
        );

        /*
          If we're replacing an old uploaded image,
          remove the old one after the new upload succeeds.
        */
        if (editor.imageStoragePath) {
          await deleteCultureGalleryArtRoomImage(editor.imageStoragePath);
        }

        mainImage = uploaded.imageUrl;
        mainImageStoragePath = uploaded.storagePath;
      }

      /* -----------------------------------------
         EXISTING EXAMPLES
      ----------------------------------------- */

      const uploadedExamples: FirebaseArtRoomExampleImage[] =
        editor.exampleImages.map((example, index) => ({
          ...example,
          order: index + 1,
        }));

      /* -----------------------------------------
         NEW EXAMPLES
      ----------------------------------------- */

      for (const pending of pendingExamples) {
        const uploaded = await uploadImage(
          pending.file,
          editor.region,
          projectId,
          "examples",
        );

        uploadedExamples.push({
          imageUrl: uploaded.imageUrl,
          storagePath: uploaded.storagePath,

          alt: pending.alt.trim(),
          caption: pending.caption.trim(),

          order: uploadedExamples.length + 1,
        });
      }

      /* -----------------------------------------
         CLEAN LISTS
      ----------------------------------------- */

      const materials = editor.materials
        .map((material) => material.trim())
        .filter(Boolean);

      const instructions = editor.instructions
        .map((instruction) => instruction.trim())
        .filter(Boolean);

      /* -----------------------------------------
         PROJECT
      ----------------------------------------- */

      const project: FirebaseArtRoomProject = {
        id: projectId,

        region: editor.region,
        regionName: editor.regionName,

        country: editor.country.trim() || undefined,

        title: editor.title.trim(),

        description: editor.description.trim() || undefined,

        task: editor.task.trim() || undefined,

        image: mainImage || undefined,

        imageStoragePath: mainImageStoragePath || undefined,

        exampleImages: uploadedExamples,

        materials,
        instructions,

        order:
          Number.isFinite(editor.order) && editor.order > 0 ? editor.order : 1,

        published: editor.published,
      };

      await saveCultureGalleryArtRoomProject(project, !editingExisting);

      setSuccess(
        editingExisting ? "Art Room task updated." : "Art Room task created.",
      );

      if (mainImagePreview) {
        URL.revokeObjectURL(mainImagePreview);
      }

      pendingExamples.forEach((example) => {
        URL.revokeObjectURL(example.previewUrl);
      });

      setMainImageFile(null);
      setMainImagePreview("");
      setPendingExamples([]);

      await loadProjects();

      setEditorOpen(false);
    } catch (saveError) {
      console.error(saveError);

      setError(
        "Couldn't save the Art Room task. Check Firebase permissions and try again.",
      );
    } finally {
      setSaving(false);
    }
  }

  /* =========================================================
     QUICK PUBLISH / UNPUBLISH
  ========================================================= */

  async function togglePublished(project: FirebaseArtRoomProject) {
    try {
      setWorkingId(project.id);
      setError("");
      setSuccess("");

      await setCultureGalleryArtRoomPublished(project.id, !project.published);

      await loadProjects();

      setSuccess(
        project.published
          ? `"${project.title}" is now hidden.`
          : `"${project.title}" is now published.`,
      );
    } catch (publishError) {
      console.error(publishError);

      setError("Couldn't change the published status.");
    } finally {
      setWorkingId(null);
    }
  }

  /* =========================================================
     DELETE PROJECT
  ========================================================= */

  async function deleteProject(project: FirebaseArtRoomProject) {
    const confirmed = window.confirm(
      `Delete "${project.title}"?\n\nThis will also delete its uploaded Art Room images.`,
    );

    if (!confirmed) return;

    try {
      setWorkingId(project.id);
      setError("");
      setSuccess("");

      await deleteCultureGalleryArtRoomProject(project);

      await loadProjects();

      setSuccess(`"${project.title}" has been deleted.`);
    } catch (deleteError) {
      console.error(deleteError);

      setError("Couldn't delete that Art Room task.");
    } finally {
      setWorkingId(null);
    }
  }

  /* =========================================================
     PAGE
  ========================================================= */

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        {/* HEADER */}

        <header>
          <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">
            Culture Gallery Admin
          </p>
          <BackToAdminButton />

          <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl font-black text-slate-900 sm:text-5xl">
                🖌️ Art Room
              </h1>

              <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-600">
                Create and update the activities that appear in the Culture
                Gallery Art Room.
              </p>
            </div>

            <button
              type="button"
              onClick={openNewProject}
              className="rounded-full bg-slate-900 px-6 py-3.5 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-slate-700"
            >
              + New Art Room task
            </button>
          </div>
        </header>

        {/* MESSAGES */}

        {error && !editorOpen && (
          <div className="mt-8 rounded-2xl bg-red-50 p-5 font-bold text-red-700">
            {error}
          </div>
        )}

        {success && !editorOpen && (
          <div className="mt-8 rounded-2xl bg-emerald-50 p-5 font-bold text-emerald-800">
            ✓ {success}
          </div>
        )}

        {/* REGION FILTER */}

        <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
            Region
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            {REGIONS.map((region) => (
              <button
                key={region.slug}
                type="button"
                onClick={() => setRegionFilter(region.slug)}
                className={`rounded-full px-5 py-2.5 text-sm font-black transition ${
                  regionFilter === region.slug
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {region.name}
              </button>
            ))}
          </div>
        </section>

        {/* PROJECTS */}

        <section className="mt-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-black text-slate-900">
                Current Art Room tasks
              </h2>

              <p className="mt-1 text-slate-500">
                {filteredProjects.length}{" "}
                {filteredProjects.length === 1 ? "task" : "tasks"}
              </p>
            </div>
          </div>

          {loading ? (
            <div className="mt-7 rounded-[2rem] bg-white p-12 text-center shadow-sm">
              <p className="font-bold text-slate-500">Loading Art Room...</p>
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="mt-7 rounded-[2rem] border-2 border-dashed border-slate-200 bg-white p-12 text-center">
              <div className="text-5xl">🎨</div>

              <h3 className="mt-4 text-xl font-black text-slate-800">
                No Firebase Art Room tasks yet
              </h3>

              <p className="mx-auto mt-2 max-w-xl leading-7 text-slate-500">
                Your existing hard-coded Culture Gallery can stay as the
                fallback. Create your first Firebase task when you&apos;re
                ready.
              </p>

              <button
                type="button"
                onClick={openNewProject}
                className="mt-6 rounded-full bg-slate-900 px-6 py-3 font-black text-white"
              >
                + Create a task
              </button>
            </div>
          ) : (
            <div className="mt-7 grid items-start gap-7 md:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project) => {
                const working = workingId === project.id;

                return (
                  <article
                    key={project.id}
                    className="overflow-hidden rounded-[2rem] bg-white shadow-md"
                  >
                    {/* MAIN IMAGE */}

                    {project.image ? (
                      <div className="flex h-64 items-center justify-center bg-slate-100">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="flex h-52 items-center justify-center bg-slate-100 text-5xl">
                        🎨
                      </div>
                    )}

                    <div className="p-6">
                      <div className="flex flex-wrap gap-2">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-black ${
                            project.published
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {project.published ? "● Published" : "○ Hidden"}
                        </span>

                        {project.country && (
                          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700">
                            {project.country}
                          </span>
                        )}

                        <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-black text-violet-700">
                          {project.exampleImages.length} inspiration{" "}
                          {project.exampleImages.length === 1
                            ? "image"
                            : "images"}
                        </span>
                      </div>

                      <h3 className="mt-5 text-2xl font-black text-slate-900">
                        {project.title}
                      </h3>

                      {project.description && (
                        <p className="mt-3 line-clamp-3 leading-7 text-slate-600">
                          {project.description}
                        </p>
                      )}

                      <p className="mt-4 text-sm font-bold text-slate-400">
                        Display order: {project.order}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-100 pt-5">
                        <button
                          type="button"
                          disabled={working}
                          onClick={() => openExistingProject(project)}
                          className="rounded-full bg-blue-50 px-5 py-2.5 text-sm font-black text-blue-700 hover:bg-blue-100 disabled:opacity-50"
                        >
                          ✎ Edit
                        </button>

                        <button
                          type="button"
                          disabled={working}
                          onClick={() => togglePublished(project)}
                          className={`rounded-full px-5 py-2.5 text-sm font-black disabled:opacity-50 ${
                            project.published
                              ? "bg-amber-50 text-amber-700 hover:bg-amber-100"
                              : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                          }`}
                        >
                          {project.published ? "Hide" : "Publish"}
                        </button>

                        <button
                          type="button"
                          disabled={working}
                          onClick={() => deleteProject(project)}
                          className="rounded-full bg-red-50 px-5 py-2.5 text-sm font-black text-red-600 hover:bg-red-100 disabled:opacity-50"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>
      </div>

      {/* =====================================================
          EDITOR
      ===================================================== */}

      {editorOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/65 p-4 sm:p-8">
          <div className="mx-auto my-4 w-full max-w-5xl rounded-[2rem] bg-white shadow-2xl">
            {/* EDITOR HEADER */}

            <div className="sticky top-0 z-20 flex items-start justify-between gap-5 rounded-t-[2rem] border-b border-slate-200 bg-white/95 p-6 backdrop-blur sm:p-8">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                  Culture Gallery
                </p>

                <h2 className="mt-2 text-3xl font-black text-slate-900">
                  {editingExisting ? "Edit Art Room task" : "New Art Room task"}
                </h2>
              </div>

              <button
                type="button"
                onClick={closeEditor}
                disabled={saving}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xl font-black text-slate-600 hover:bg-slate-200 disabled:opacity-50"
              >
                ×
              </button>
            </div>

            <div className="p-6 sm:p-8">
              {/* BASIC DETAILS */}

              <section>
                <h3 className="text-xl font-black text-slate-900">
                  1. Task details
                </h3>

                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <label>
                    <span className="text-sm font-black text-slate-700">
                      Region
                    </span>

                    <select
                      value={editor.region}
                      onChange={(event) =>
                        changeEditorRegion(event.target.value)
                      }
                      className="mt-2 w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 outline-none focus:border-blue-500"
                    >
                      {REGIONS.map((region) => (
                        <option key={region.slug} value={region.slug}>
                          {region.name}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label>
                    <span className="text-sm font-black text-slate-700">
                      Country
                    </span>

                    <select
                      value={editor.country}
                      onChange={(event) =>
                        setEditor((current) => ({
                          ...current,
                          country: event.target.value,
                        }))
                      }
                      className="mt-2 w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 outline-none focus:border-blue-500"
                    >
                      <option value="">Region / General</option>

                      {selectedRegion.countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="mt-5 block">
                  <span className="text-sm font-black text-slate-700">
                    Task title
                  </span>

                  <input
                    type="text"
                    value={editor.title}
                    onChange={(event) =>
                      setEditor((current) => ({
                        ...current,
                        title: event.target.value,
                      }))
                    }
                    placeholder="e.g. Design Your Own Chinese Vase"
                    className="mt-2 w-full rounded-xl border-2 border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
                  />
                </label>

                <label className="mt-5 block">
                  <span className="text-sm font-black text-slate-700">
                    Description
                  </span>

                  <textarea
                    value={editor.description}
                    onChange={(event) =>
                      setEditor((current) => ({
                        ...current,
                        description: event.target.value,
                      }))
                    }
                    rows={3}
                    placeholder="A short introduction to the activity."
                    className="mt-2 w-full resize-none rounded-xl border-2 border-slate-200 px-4 py-3 leading-7 outline-none focus:border-blue-500"
                  />
                </label>

                <label className="mt-5 block">
                  <span className="text-sm font-black text-slate-700">
                    Try it
                  </span>

                  <textarea
                    value={editor.task}
                    onChange={(event) =>
                      setEditor((current) => ({
                        ...current,
                        task: event.target.value,
                      }))
                    }
                    rows={4}
                    placeholder="Tell the learner what to create or try."
                    className="mt-2 w-full resize-none rounded-xl border-2 border-slate-200 px-4 py-3 leading-7 outline-none focus:border-blue-500"
                  />
                </label>
              </section>

              {/* MAIN IMAGE */}

              <section className="mt-12 border-t border-slate-200 pt-10">
                <h3 className="text-xl font-black text-slate-900">
                  2. Main task image
                </h3>

                <p className="mt-2 text-slate-500">
                  Optional. This is the main picture for the activity.
                </p>

                {(mainImagePreview || editor.image) && (
                  <div className="mt-6 max-w-xl overflow-hidden rounded-2xl border-2 border-slate-100 bg-slate-50 p-4">
                    <img
                      src={mainImagePreview || editor.image}
                      alt="Main task preview"
                      className="max-h-96 w-full object-contain"
                    />

                    <button
                      type="button"
                      onClick={
                        mainImagePreview
                          ? removeNewMainImage
                          : removeExistingMainImage
                      }
                      className="mt-4 rounded-full bg-red-50 px-4 py-2 text-sm font-black text-red-600 hover:bg-red-100"
                    >
                      Remove image
                    </button>
                  </div>
                )}

                <label className="mt-5 flex cursor-pointer items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-8 text-center transition hover:border-blue-400 hover:bg-blue-50">
                  <div>
                    <div className="text-3xl">🖼️</div>

                    <p className="mt-2 font-black text-slate-800">
                      {editor.image || mainImagePreview
                        ? "Choose replacement image"
                        : "Choose main image"}
                    </p>
                  </div>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={chooseMainImage}
                    className="hidden"
                  />
                </label>
              </section>

              {/* EXAMPLE IMAGES */}

              <section className="mt-12 border-t border-slate-200 pt-10">
                <h3 className="text-xl font-black text-slate-900">
                  3. Ideas & inspiration
                </h3>

                <p className="mt-2 max-w-2xl leading-7 text-slate-500">
                  Add example or reference pictures to help learners understand
                  the activity. You can add as many as you need.
                </p>

                {/* EXISTING */}

                {editor.exampleImages.length > 0 && (
                  <div className="mt-7">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                      Current images
                    </p>

                    <div className="mt-4 grid gap-5 md:grid-cols-2">
                      {editor.exampleImages.map((example, index) => (
                        <div
                          key={`${example.imageUrl}-${index}`}
                          className="rounded-2xl border-2 border-slate-100 p-4"
                        >
                          <img
                            src={example.imageUrl}
                            alt={example.alt || "Inspiration"}
                            className="h-56 w-full rounded-xl bg-slate-100 object-contain"
                          />

                          <label className="mt-4 block">
                            <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                              Alt text
                            </span>

                            <input
                              value={example.alt ?? ""}
                              onChange={(event) =>
                                updateExistingExample(
                                  index,
                                  "alt",
                                  event.target.value,
                                )
                              }
                              placeholder="Describe the picture"
                              className="mt-2 w-full rounded-xl border-2 border-slate-100 px-3 py-3 text-sm outline-none focus:border-blue-400"
                            />
                          </label>

                          <label className="mt-3 block">
                            <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                              Caption
                            </span>

                            <input
                              value={example.caption ?? ""}
                              onChange={(event) =>
                                updateExistingExample(
                                  index,
                                  "caption",
                                  event.target.value,
                                )
                              }
                              placeholder="Optional caption"
                              className="mt-2 w-full rounded-xl border-2 border-slate-100 px-3 py-3 text-sm outline-none focus:border-blue-400"
                            />
                          </label>

                          <div className="mt-4 flex flex-wrap gap-2">
                            <button
                              type="button"
                              disabled={index === 0}
                              onClick={() => moveExistingExample(index, "up")}
                              className="rounded-full bg-slate-100 px-3 py-2 text-xs font-black text-slate-600 disabled:opacity-30"
                            >
                              ← Earlier
                            </button>

                            <button
                              type="button"
                              disabled={
                                index === editor.exampleImages.length - 1
                              }
                              onClick={() => moveExistingExample(index, "down")}
                              className="rounded-full bg-slate-100 px-3 py-2 text-xs font-black text-slate-600 disabled:opacity-30"
                            >
                              Later →
                            </button>

                            <button
                              type="button"
                              onClick={() => removeExistingExample(index)}
                              className="rounded-full bg-red-50 px-3 py-2 text-xs font-black text-red-600"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* NEW */}

                {pendingExamples.length > 0 && (
                  <div className="mt-8">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-500">
                      New images
                    </p>

                    <div className="mt-4 grid gap-5 md:grid-cols-2">
                      {pendingExamples.map((example, index) => (
                        <div
                          key={example.id}
                          className="rounded-2xl border-2 border-blue-100 bg-blue-50/30 p-4"
                        >
                          <img
                            src={example.previewUrl}
                            alt=""
                            className="h-56 w-full rounded-xl bg-white object-contain"
                          />

                          <p className="mt-3 break-all text-xs font-bold text-slate-400">
                            {example.file.name}
                          </p>

                          <label className="mt-4 block">
                            <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                              Alt text
                            </span>

                            <input
                              value={example.alt}
                              onChange={(event) =>
                                updatePendingExample(
                                  example.id,
                                  "alt",
                                  event.target.value,
                                )
                              }
                              placeholder="Describe the picture"
                              className="mt-2 w-full rounded-xl border-2 border-slate-100 bg-white px-3 py-3 text-sm outline-none focus:border-blue-400"
                            />
                          </label>

                          <label className="mt-3 block">
                            <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                              Caption
                            </span>

                            <input
                              value={example.caption}
                              onChange={(event) =>
                                updatePendingExample(
                                  example.id,
                                  "caption",
                                  event.target.value,
                                )
                              }
                              placeholder="Optional caption"
                              className="mt-2 w-full rounded-xl border-2 border-slate-100 bg-white px-3 py-3 text-sm outline-none focus:border-blue-400"
                            />
                          </label>

                          <div className="mt-4 flex flex-wrap gap-2">
                            <button
                              type="button"
                              disabled={index === 0}
                              onClick={() => movePendingExample(index, "up")}
                              className="rounded-full bg-white px-3 py-2 text-xs font-black text-slate-600 disabled:opacity-30"
                            >
                              ← Earlier
                            </button>

                            <button
                              type="button"
                              disabled={index === pendingExamples.length - 1}
                              onClick={() => movePendingExample(index, "down")}
                              className="rounded-full bg-white px-3 py-2 text-xs font-black text-slate-600 disabled:opacity-30"
                            >
                              Later →
                            </button>

                            <button
                              type="button"
                              onClick={() => removePendingExample(example.id)}
                              className="rounded-full bg-red-50 px-3 py-2 text-xs font-black text-red-600"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <label className="mt-6 flex cursor-pointer items-center justify-center rounded-2xl border-2 border-dashed border-violet-300 bg-violet-50 px-6 py-8 text-center transition hover:border-violet-500">
                  <div>
                    <div className="text-3xl">📸</div>

                    <p className="mt-2 font-black text-violet-800">
                      Add inspiration pictures
                    </p>

                    <p className="mt-1 text-sm text-violet-600">
                      You can choose several at once.
                    </p>
                  </div>

                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={chooseExampleImages}
                    className="hidden"
                  />
                </label>
              </section>

              {/* MATERIALS */}

              <section className="mt-12 border-t border-slate-200 pt-10">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-black text-slate-900">
                      4. Materials
                    </h3>

                    <p className="mt-2 text-slate-500">
                      Optional list of things the learner needs.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={addMaterial}
                    className="rounded-full bg-slate-100 px-4 py-2 text-sm font-black text-slate-700"
                  >
                    + Add material
                  </button>
                </div>

                <div className="mt-5 space-y-3">
                  {editor.materials.map((material, index) => (
                    <div key={index} className="flex gap-3">
                      <input
                        value={material}
                        onChange={(event) =>
                          updateMaterial(index, event.target.value)
                        }
                        placeholder={`Material ${index + 1}`}
                        className="min-w-0 flex-1 rounded-xl border-2 border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
                      />

                      <button
                        type="button"
                        onClick={() => removeMaterial(index)}
                        className="rounded-xl bg-red-50 px-4 font-black text-red-600"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </section>

              {/* INSTRUCTIONS */}

              <section className="mt-12 border-t border-slate-200 pt-10">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-black text-slate-900">
                      5. Instructions
                    </h3>

                    <p className="mt-2 text-slate-500">
                      Optional step-by-step instructions.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={addInstruction}
                    className="rounded-full bg-slate-100 px-4 py-2 text-sm font-black text-slate-700"
                  >
                    + Add step
                  </button>
                </div>

                <div className="mt-5 space-y-3">
                  {editor.instructions.map((instruction, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-900 font-black text-white">
                        {index + 1}
                      </div>

                      <textarea
                        value={instruction}
                        onChange={(event) =>
                          updateInstruction(index, event.target.value)
                        }
                        rows={2}
                        placeholder={`Step ${index + 1}`}
                        className="min-w-0 flex-1 resize-none rounded-xl border-2 border-slate-200 px-4 py-3 leading-6 outline-none focus:border-blue-500"
                      />

                      <button
                        type="button"
                        onClick={() => removeInstruction(index)}
                        className="h-11 rounded-xl bg-red-50 px-4 font-black text-red-600"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </section>

              {/* PUBLISHING */}

              <section className="mt-12 border-t border-slate-200 pt-10">
                <h3 className="text-xl font-black text-slate-900">
                  6. Publishing
                </h3>

                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <label>
                    <span className="text-sm font-black text-slate-700">
                      Display order
                    </span>

                    <input
                      type="number"
                      min={1}
                      value={editor.order}
                      onChange={(event) =>
                        setEditor((current) => ({
                          ...current,

                          order: Number(event.target.value) || 1,
                        }))
                      }
                      className="mt-2 w-full rounded-xl border-2 border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
                    />
                  </label>

                  <div>
                    <span className="text-sm font-black text-slate-700">
                      Status
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        setEditor((current) => ({
                          ...current,

                          published: !current.published,
                        }))
                      }
                      className={`mt-2 flex w-full items-center justify-between rounded-xl border-2 px-4 py-3 font-black ${
                        editor.published
                          ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                          : "border-slate-200 bg-slate-50 text-slate-500"
                      }`}
                    >
                      <span>{editor.published ? "Published" : "Hidden"}</span>

                      <span>{editor.published ? "●" : "○"}</span>
                    </button>
                  </div>
                </div>
              </section>

              {/* ERRORS */}

              {error && (
                <div className="mt-8 rounded-2xl bg-red-50 p-5 font-bold text-red-700">
                  {error}
                </div>
              )}

              {/* SAVE */}

              <div className="mt-10 flex flex-col-reverse gap-3 border-t border-slate-200 pt-7 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={closeEditor}
                  disabled={saving}
                  className="rounded-full bg-slate-100 px-6 py-3 font-black text-slate-600 hover:bg-slate-200 disabled:opacity-50"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={saveProject}
                  disabled={saving}
                  className="rounded-full bg-slate-900 px-7 py-3 font-black text-white shadow-md hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {saving
                    ? "Uploading & saving..."
                    : editingExisting
                      ? "Save changes"
                      : "Create Art Room task"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
