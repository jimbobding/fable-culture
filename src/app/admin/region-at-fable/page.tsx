"use client";

import { ChangeEvent, useEffect, useMemo, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";

import { db, storage } from "@/firebaseConfig";

type Rotation = 0 | 90 | 180 | 270;
type SubmissionStatus = "pending" | "approved";

type AtFableImage = {
  imageUrl: string;
  storagePath?: string;
  caption?: string;
  rotation?: Rotation;
};

type AtFableLink = {
  label: string;
  url: string;
};

type AtFableActivity = {
  id?: string;
  region: string;
  regionName: string;
  country?: string;
  title: string;
  description?: string;
  images: AtFableImage[];
  links?: AtFableLink[];
  order?: number;
  status?: SubmissionStatus;
  source?: string;
  createdAt?: unknown;
};

type PendingImage = {
  id: string;
  file: File;
  previewUrl: string;
  caption: string;
  rotation: Rotation;
};

const EMPTY_LINK: AtFableLink = {
  label: "",
  url: "",
};

const regionOptions = {
  "east-asia": {
    name: "East Asia",
    countries: [
      "East Asia / General",
      "China",
      "Japan",
      "South Korea",
      "North Korea",
      "Mongolia",
      "Taiwan",
    ],
  },

  "south-america": {
    name: "South America",
    countries: [
      "South America / General",
      "Brazil",
      "Argentina",
      "Bolivia",
      "Chile",
      "Colombia",
      "Ecuador",
      "Guyana",
      "Paraguay",
      "Peru",
      "Suriname",
      "Uruguay",
      "Venezuela",
    ],
  },
} as const;

export default function RegionAtFableAdminPage() {
  const [activities, setActivities] = useState<AtFableActivity[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [moderatingId, setModeratingId] = useState<string | null>(null);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingStatus, setEditingStatus] = useState<
    SubmissionStatus | undefined
  >(undefined);
  const [editingSource, setEditingSource] = useState<string | undefined>(
    undefined,
  );

  const [region, setRegion] = useState<keyof typeof regionOptions>("east-asia");
  const [regionName, setRegionName] = useState("East Asia");
  const [country, setCountry] = useState("East Asia / General");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [order, setOrder] = useState(1);

  const [existingImages, setExistingImages] = useState<AtFableImage[]>([]);
  const [pendingImages, setPendingImages] = useState<PendingImage[]>([]);
  const [links, setLinks] = useState<AtFableLink[]>([]);

  async function loadActivities() {
    setLoading(true);

    try {
      /*
       * Do NOT orderBy("order") here.
       *
       * Public submissions do not necessarily have an order field when they
       * first arrive, so an orderBy query can prevent them from appearing in
       * the admin moderation queue.
       */
      const snapshot = await getDocs(collection(db, "regionAtFable"));

      const data = snapshot.docs.map((document) => ({
        id: document.id,
        ...(document.data() as Omit<AtFableActivity, "id">),
      }));

      setActivities(data);
    } catch (error) {
      console.error("Could not load At Fable activities:", error);
      alert("The At Fable content could not be loaded from Firebase.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadActivities();
  }, []);

  const pendingSubmissions = useMemo(() => {
    return activities
      .filter((activity) => activity.status === "pending")
      .sort((a, b) => {
        const regionCompare = (a.regionName || "").localeCompare(
          b.regionName || "",
        );

        if (regionCompare !== 0) {
          return regionCompare;
        }

        return (a.title || "").localeCompare(b.title || "");
      });
  }, [activities]);

  const publishedActivities = useMemo(() => {
    return activities
      .filter((activity) => activity.status !== "pending")
      .sort((a, b) => {
        const regionCompare = (a.regionName || "").localeCompare(
          b.regionName || "",
        );

        if (regionCompare !== 0) {
          return regionCompare;
        }

        return (a.order ?? 999) - (b.order ?? 999);
      });
  }, [activities]);

  function resetForm() {
    pendingImages.forEach((image) => {
      URL.revokeObjectURL(image.previewUrl);
    });

    setEditingId(null);
    setEditingStatus(undefined);
    setEditingSource(undefined);

    setRegion("east-asia");
    setRegionName("East Asia");
    setCountry("East Asia / General");

    setTitle("");
    setDescription("");
    setOrder(publishedActivities.length + 1);

    setExistingImages([]);
    setPendingImages([]);
    setLinks([]);
  }

  function handleRegionChange(value: keyof typeof regionOptions) {
    setRegion(value);

    const selectedRegion = regionOptions[value];

    setRegionName(selectedRegion.name);
    setCountry(selectedRegion.countries[0]);
  }

  function handleImageSelection(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []);

    if (files.length === 0) {
      return;
    }

    const newImages: PendingImage[] = files.map((file) => ({
      id: `${file.name}-${file.lastModified}-${Math.random()}`,
      file,
      previewUrl: URL.createObjectURL(file),
      caption: "",
      rotation: 0,
    }));

    setPendingImages((current) => [...current, ...newImages]);

    event.target.value = "";
  }

  function rotatePendingImage(id: string) {
    setPendingImages((current) =>
      current.map((image) =>
        image.id === id
          ? {
              ...image,
              rotation: ((image.rotation + 90) % 360) as Rotation,
            }
          : image,
      ),
    );
  }

  function rotateExistingImage(index: number) {
    setExistingImages((current) =>
      current.map((image, imageIndex) =>
        imageIndex === index
          ? {
              ...image,
              rotation: (((image.rotation ?? 0) + 90) % 360) as Rotation,
            }
          : image,
      ),
    );
  }

  function updatePendingCaption(id: string, caption: string) {
    setPendingImages((current) =>
      current.map((image) => (image.id === id ? { ...image, caption } : image)),
    );
  }

  function updateExistingCaption(index: number, caption: string) {
    setExistingImages((current) =>
      current.map((image, imageIndex) =>
        imageIndex === index ? { ...image, caption } : image,
      ),
    );
  }

  function removePendingImage(id: string) {
    setPendingImages((current) => {
      const image = current.find((item) => item.id === id);

      if (image) {
        URL.revokeObjectURL(image.previewUrl);
      }

      return current.filter((item) => item.id !== id);
    });
  }

  async function removeExistingImage(index: number) {
    const image = existingImages[index];

    if (!image) {
      return;
    }

    const confirmed = window.confirm(
      "Remove this photo from the activity? This will also delete the uploaded image.",
    );

    if (!confirmed) {
      return;
    }

    try {
      if (image.storagePath) {
        await deleteObject(ref(storage, image.storagePath));
      }

      setExistingImages((current) =>
        current.filter((_, imageIndex) => imageIndex !== index),
      );
    } catch (error) {
      console.error("Could not remove image:", error);
      alert("The image could not be removed.");
    }
  }

  function addLink() {
    setLinks((current) => [...current, { ...EMPTY_LINK }]);
  }

  function updateLink(index: number, field: keyof AtFableLink, value: string) {
    setLinks((current) =>
      current.map((link, linkIndex) =>
        linkIndex === index ? { ...link, [field]: value } : link,
      ),
    );
  }

  function removeLink(index: number) {
    setLinks((current) =>
      current.filter((_, linkIndex) => linkIndex !== index),
    );
  }

  async function uploadPendingImages(): Promise<AtFableImage[]> {
    const uploaded: AtFableImage[] = [];

    for (const image of pendingImages) {
      const safeName = image.file.name.replace(/[^a-zA-Z0-9._-]/g, "-");

      const storagePath = `region-at-fable/${region}/${Date.now()}-${Math.random()
        .toString(36)
        .slice(2)}-${safeName}`;

      const imageRef = ref(storage, storagePath);

      await uploadBytes(imageRef, image.file, {
        contentType: image.file.type,
      });

      const imageUrl = await getDownloadURL(imageRef);

      uploaded.push({
        imageUrl,
        storagePath,
        caption: image.caption.trim(),
        rotation: image.rotation,
      });
    }

    return uploaded;
  }

  async function saveActivity() {
    if (!title.trim()) {
      alert("Please add a heading for this activity.");
      return;
    }

    if (existingImages.length === 0 && pendingImages.length === 0) {
      alert("Please add at least one photo.");
      return;
    }

    setSaving(true);

    try {
      const uploadedImages = await uploadPendingImages();

      const cleanedLinks = links
        .map((link) => ({
          label: link.label.trim(),
          url: link.url.trim(),
        }))
        .filter((link) => link.label && link.url);

      const activityData = {
        region,
        regionName: regionName.trim(),
        country,
        title: title.trim(),
        description: description.trim(),
        images: [...existingImages, ...uploadedImages],
        links: cleanedLinks,
        order: Number(order) || 1,
      };

      if (editingId) {
        /*
         * Keep the existing moderation status.
         * Editing a pending submission must NOT publish it.
         */
        await updateDoc(doc(db, "regionAtFable", editingId), {
          ...activityData,
          ...(editingStatus ? { status: editingStatus } : {}),
          ...(editingSource ? { source: editingSource } : {}),
        });
      } else {
        /*
         * Anything created directly by an administrator is immediately
         * approved.
         */
        await addDoc(collection(db, "regionAtFable"), {
          ...activityData,
          status: "approved",
          source: "admin",
          createdAt: serverTimestamp(),
        });
      }

      pendingImages.forEach((image) => {
        URL.revokeObjectURL(image.previewUrl);
      });

      setPendingImages([]);

      const wasEditing = Boolean(editingId);

      await loadActivities();
      resetForm();

      alert(wasEditing ? "Activity updated." : "Activity added.");
    } catch (error) {
      console.error("Could not save At Fable activity:", error);
      alert("The activity could not be saved.");
    } finally {
      setSaving(false);
    }
  }

  function editActivity(activity: AtFableActivity) {
    pendingImages.forEach((image) => {
      URL.revokeObjectURL(image.previewUrl);
    });

    const activityRegion =
      activity.region in regionOptions
        ? (activity.region as keyof typeof regionOptions)
        : "east-asia";

    setEditingId(activity.id ?? null);
    setEditingStatus(activity.status);
    setEditingSource(activity.source);

    setRegion(activityRegion);
    setRegionName(activity.regionName || regionOptions[activityRegion].name);

    setCountry(activity.country || regionOptions[activityRegion].countries[0]);

    setTitle(activity.title);
    setDescription(activity.description ?? "");

    /*
     * New public submissions may not have an order yet.
     */
    setOrder(activity.order ?? publishedActivities.length + 1);

    setExistingImages(activity.images ?? []);
    setPendingImages([]);
    setLinks(activity.links ?? []);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  async function approveSubmission(activity: AtFableActivity) {
    if (!activity.id) {
      return;
    }

    const confirmed = window.confirm(
      `Approve "${activity.title}" and publish it to At Fable?`,
    );

    if (!confirmed) {
      return;
    }

    setModeratingId(activity.id);

    try {
      /*
       * If the submission does not yet have a display order, give it the next
       * available position when it is approved.
       */
      const nextOrder =
        publishedActivities.reduce(
          (highest, item) => Math.max(highest, item.order ?? 0),
          0,
        ) + 1;

      await updateDoc(doc(db, "regionAtFable", activity.id), {
        status: "approved",
        order: activity.order ?? nextOrder,
        approvedAt: serverTimestamp(),
      });

      await loadActivities();

      if (editingId === activity.id) {
        resetForm();
      }

      alert("Submission approved and published.");
    } catch (error) {
      console.error("Could not approve submission:", error);
      alert("The submission could not be approved.");
    } finally {
      setModeratingId(null);
    }
  }

  async function deleteActivity(activity: AtFableActivity) {
    if (!activity.id) {
      return;
    }

    const isPending = activity.status === "pending";

    const confirmed = window.confirm(
      isPending
        ? `Delete the pending submission "${activity.title}" and all of its photos?`
        : `Delete "${activity.title}" and all of its photos?`,
    );

    if (!confirmed) {
      return;
    }

    setModeratingId(activity.id);

    try {
      /*
       * Remove all uploaded images from Firebase Storage first.
       */
      for (const image of activity.images ?? []) {
        if (!image.storagePath) {
          continue;
        }

        try {
          await deleteObject(ref(storage, image.storagePath));
        } catch (error) {
          console.warn("Could not delete stored image:", error);
        }
      }

      await deleteDoc(doc(db, "regionAtFable", activity.id));

      await loadActivities();

      if (editingId === activity.id) {
        resetForm();
      }

      alert(isPending ? "Submission deleted." : "Activity deleted.");
    } catch (error) {
      console.error("Could not delete activity:", error);
      alert("The activity could not be deleted.");
    } finally {
      setModeratingId(null);
    }
  }

  const availableCountries = regionOptions[region].countries;

  return (
    <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
      <header className="mb-10">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-500">
          Admin
        </p>

        <h1 className="mt-3 text-4xl font-black text-slate-900 sm:text-5xl">
          At Fable
        </h1>

        <p className="mt-4 max-w-3xl text-lg leading-7 text-slate-600">
          Review submissions from the website or add photos of what students
          have been learning, making, playing and exploring at Fable.
        </p>
      </header>

      {/* Pending submissions */}
      <section className="mb-14 overflow-hidden rounded-[2rem] border-2 border-amber-300 bg-amber-50 shadow-sm">
        <div className="flex flex-col gap-4 bg-amber-300 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-amber-950/70">
              Moderation
            </p>

            <h2 className="mt-1 text-3xl font-black text-slate-900">
              📬 Pending submissions
            </h2>
          </div>

          <div className="flex h-12 min-w-12 items-center justify-center rounded-full bg-slate-900 px-4 text-lg font-black text-white">
            {pendingSubmissions.length}
          </div>
        </div>

        <div className="p-5 sm:p-8">
          {loading ? (
            <p className="py-8 font-bold text-slate-600">
              Checking Firebase for submissions...
            </p>
          ) : pendingSubmissions.length === 0 ? (
            <div className="rounded-[1.5rem] border-2 border-dashed border-amber-300 bg-white/70 p-8 text-center">
              <div className="text-4xl">✨</div>

              <h3 className="mt-3 text-xl font-black text-slate-900">
                All clear
              </h3>

              <p className="mt-2 text-slate-600">
                There are no At Fable submissions waiting for approval.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {pendingSubmissions.map((activity) => {
                const isWorking = moderatingId === activity.id;

                return (
                  <article
                    key={activity.id}
                    className="rounded-[1.75rem] border border-amber-200 bg-white p-5 shadow-sm sm:p-6"
                  >
                    <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap gap-2">
                          <span className="rounded-full bg-amber-300 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-amber-950">
                            Pending
                          </span>

                          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-700">
                            {activity.regionName}
                          </span>

                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-700">
                            {activity.country ||
                              `${activity.regionName} / General`}
                          </span>

                          <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-black text-sky-700">
                            {activity.images?.length ?? 0} photo
                            {(activity.images?.length ?? 0) === 1 ? "" : "s"}
                          </span>
                        </div>

                        <h3 className="mt-4 text-2xl font-black text-slate-900">
                          {activity.title}
                        </h3>

                        {activity.description ? (
                          <p className="mt-2 max-w-3xl leading-7 text-slate-600">
                            {activity.description}
                          </p>
                        ) : null}

                        {activity.images?.length ? (
                          <div className="mt-5 flex flex-wrap gap-3">
                            {activity.images.map((image, index) => (
                              <button
                                key={`${image.imageUrl}-${index}`}
                                type="button"
                                onClick={() =>
                                  window.open(image.imageUrl, "_blank")
                                }
                                className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100"
                                title="Open full image"
                              >
                                <div className="flex h-28 w-32 items-center justify-center">
                                  <img
                                    src={image.imageUrl}
                                    alt={image.caption || ""}
                                    className="max-h-full max-w-full object-contain"
                                    style={{
                                      transform: `rotate(${
                                        image.rotation ?? 0
                                      }deg)`,
                                    }}
                                  />
                                </div>

                                {image.caption ? (
                                  <p className="max-w-32 border-t border-slate-200 bg-white px-2 py-2 text-xs font-bold text-slate-600">
                                    {image.caption}
                                  </p>
                                ) : null}
                              </button>
                            ))}
                          </div>
                        ) : null}

                        {activity.links?.length ? (
                          <div className="mt-5">
                            <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                              Submitted links
                            </p>

                            <div className="mt-2 flex flex-wrap gap-2">
                              {activity.links.map((link, index) => (
                                <a
                                  key={`${link.url}-${index}`}
                                  href={link.url}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-200"
                                >
                                  🔗 {link.label}
                                </a>
                              ))}
                            </div>
                          </div>
                        ) : null}
                      </div>

                      <div className="flex shrink-0 flex-wrap gap-3">
                        <button
                          type="button"
                          onClick={() => editActivity(activity)}
                          disabled={isWorking}
                          className="rounded-full bg-slate-900 px-5 py-3 text-sm font-black text-white transition hover:bg-slate-700 disabled:opacity-50"
                        >
                          ✏️ Edit
                        </button>

                        <button
                          type="button"
                          onClick={() => approveSubmission(activity)}
                          disabled={isWorking}
                          className="rounded-full bg-emerald-600 px-5 py-3 text-sm font-black text-white transition hover:bg-emerald-500 disabled:opacity-50"
                        >
                          {isWorking ? "Working..." : "✓ Approve"}
                        </button>

                        <button
                          type="button"
                          onClick={() => deleteActivity(activity)}
                          disabled={isWorking}
                          className="rounded-full bg-red-600 px-5 py-3 text-sm font-black text-white transition hover:bg-red-500 disabled:opacity-50"
                        >
                          🗑 Delete
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Add / edit form */}
      <section className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-emerald-700">
              {editingId
                ? editingStatus === "pending"
                  ? "Editing pending submission"
                  : "Editing activity"
                : "New activity"}
            </p>

            <h2 className="mt-2 text-2xl font-black text-slate-900">
              {editingId ? title || "Activity" : "Add something you've done"}
            </h2>

            {editingStatus === "pending" ? (
              <p className="mt-2 text-sm font-bold text-amber-700">
                This submission will remain pending when you save your edits.
                Use Approve afterwards to publish it.
              </p>
            ) : null}
          </div>

          {editingId ? (
            <button
              type="button"
              onClick={resetForm}
              className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-50"
            >
              Cancel editing
            </button>
          ) : null}
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <label className="block">
            <span className="mb-2 block text-sm font-bold text-slate-700">
              Region
            </span>

            <select
              value={region}
              onChange={(event) =>
                handleRegionChange(
                  event.target.value as keyof typeof regionOptions,
                )
              }
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900"
            >
              <option value="east-asia">East Asia</option>
              <option value="south-america">South America</option>
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-bold text-slate-700">
              Country / Area
            </span>

            <select
              value={country}
              onChange={(event) => setCountry(event.target.value)}
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900"
            >
              {availableCountries.map((countryOption) => (
                <option key={countryOption} value={countryOption}>
                  {countryOption}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-bold text-slate-700">
              Display order
            </span>

            <input
              type="number"
              min="1"
              value={order}
              onChange={(event) => setOrder(Number(event.target.value))}
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900"
            />
          </label>
        </div>

        <label className="mt-5 block">
          <span className="mb-2 block text-sm font-bold text-slate-700">
            Activity heading
          </span>

          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="e.g. Playing Mahjong"
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900"
          />
        </label>

        <label className="mt-5 block">
          <span className="mb-2 block text-sm font-bold text-slate-700">
            Short description
            <span className="ml-2 font-normal text-slate-400">optional</span>
          </span>

          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="e.g. We learned about the tiles and had a go at playing Mahjong together."
            rows={3}
            className="w-full resize-y rounded-2xl border border-slate-300 px-4 py-3 text-slate-900"
          />
        </label>

        {/* Photos */}
        <div className="mt-9 border-t border-slate-200 pt-8">
          <h3 className="text-xl font-black text-slate-900">📷 Photos</h3>

          <p className="mt-1 text-sm text-slate-500">
            Select several pictures at once, rotate them and add individual
            captions.
          </p>

          <label className="mt-5 inline-flex cursor-pointer rounded-full bg-slate-900 px-6 py-3 font-bold text-white transition hover:bg-slate-700">
            + Add photos
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageSelection}
              className="hidden"
            />
          </label>

          {existingImages.length > 0 || pendingImages.length > 0 ? (
            <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {existingImages.map((image, index) => (
                <div
                  key={`${image.imageUrl}-${index}`}
                  className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl bg-slate-200">
                    <img
                      src={image.imageUrl}
                      alt=""
                      className="max-h-full max-w-full object-contain"
                      style={{
                        transform: `rotate(${image.rotation ?? 0}deg)`,
                      }}
                    />
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => rotateExistingImage(index)}
                      className="rounded-full bg-slate-800 px-4 py-2 text-xs font-bold text-white"
                    >
                      ↻ Rotate 90°
                    </button>

                    <button
                      type="button"
                      onClick={() => removeExistingImage(index)}
                      className="rounded-full bg-red-600 px-4 py-2 text-xs font-bold text-white"
                    >
                      Remove
                    </button>
                  </div>

                  <input
                    type="text"
                    value={image.caption ?? ""}
                    onChange={(event) =>
                      updateExistingCaption(index, event.target.value)
                    }
                    placeholder="Photo caption (optional)"
                    className="mt-4 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900"
                  />
                </div>
              ))}

              {pendingImages.map((image) => (
                <div
                  key={image.id}
                  className="rounded-[1.5rem] border-2 border-dashed border-emerald-300 bg-emerald-50/40 p-4"
                >
                  <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl bg-slate-200">
                    <img
                      src={image.previewUrl}
                      alt=""
                      className="max-h-full max-w-full object-contain"
                      style={{
                        transform: `rotate(${image.rotation}deg)`,
                      }}
                    />
                  </div>

                  <p className="mt-3 text-xs font-black uppercase tracking-[0.15em] text-emerald-700">
                    New photo
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => rotatePendingImage(image.id)}
                      className="rounded-full bg-slate-800 px-4 py-2 text-xs font-bold text-white"
                    >
                      ↻ Rotate 90°
                    </button>

                    <button
                      type="button"
                      onClick={() => removePendingImage(image.id)}
                      className="rounded-full bg-red-600 px-4 py-2 text-xs font-bold text-white"
                    >
                      Remove
                    </button>
                  </div>

                  <input
                    type="text"
                    value={image.caption}
                    onChange={(event) =>
                      updatePendingCaption(image.id, event.target.value)
                    }
                    placeholder="Photo caption (optional)"
                    className="mt-4 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900"
                  />
                </div>
              ))}
            </div>
          ) : null}
        </div>

        {/* Links */}
        <div className="mt-9 border-t border-slate-200 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-black text-slate-900">
                🔗 Useful links
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Optional — add links connected to this activity.
              </p>
            </div>

            <button
              type="button"
              onClick={addLink}
              className="rounded-full border-2 border-slate-800 px-5 py-2.5 text-sm font-bold text-slate-800"
            >
              + Add link
            </button>
          </div>

          {links.length > 0 ? (
            <div className="mt-6 space-y-4">
              {links.map((link, index) => (
                <div
                  key={index}
                  className="grid gap-3 rounded-2xl bg-slate-50 p-4 md:grid-cols-[0.8fr_1.4fr_auto]"
                >
                  <input
                    type="text"
                    value={link.label}
                    onChange={(event) =>
                      updateLink(index, "label", event.target.value)
                    }
                    placeholder="Link name"
                    className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900"
                  />

                  <input
                    type="text"
                    value={link.url}
                    onChange={(event) =>
                      updateLink(index, "url", event.target.value)
                    }
                    placeholder="/east-asia/mongolia or https://..."
                    className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900"
                  />

                  <button
                    type="button"
                    onClick={() => removeLink(index)}
                    className="rounded-xl bg-red-100 px-4 py-3 font-bold text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div className="mt-9 border-t border-slate-200 pt-8">
          <button
            type="button"
            onClick={saveActivity}
            disabled={saving}
            className="rounded-full bg-emerald-700 px-8 py-4 text-lg font-black text-white shadow-md transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {saving
              ? "Saving..."
              : editingId
                ? editingStatus === "pending"
                  ? "Save Pending Changes"
                  : "Save Changes"
                : "Add to At Fable"}
          </button>

          {editingStatus === "pending" ? (
            <p className="mt-3 text-sm font-bold text-amber-700">
              Saving edits will not publish this submission.
            </p>
          ) : null}
        </div>
      </section>

      {/* Published activities */}
      <section className="mt-14">
        <div className="mb-7">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-slate-500">
            Published content
          </p>

          <h2 className="mt-2 text-3xl font-black text-slate-900">
            At Fable activities
          </h2>

          <p className="mt-2 text-slate-500">
            These activities are visible on the public At Fable gallery.
          </p>
        </div>

        {loading ? (
          <p className="py-10 text-slate-500">Loading activities...</p>
        ) : publishedActivities.length === 0 ? (
          <div className="rounded-[2rem] border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
            <div className="text-4xl">📸</div>

            <p className="mt-3 font-bold text-slate-700">
              Nothing has been published yet.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {publishedActivities.map((activity) => (
              <article
                key={activity.id}
                className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-700">
                        {activity.regionName}
                      </span>

                      <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-black text-amber-800">
                        {activity.country || `${activity.regionName} / General`}
                      </span>

                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                        Order {activity.order ?? "—"}
                      </span>

                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                        {activity.images?.length ?? 0} photo
                        {(activity.images?.length ?? 0) === 1 ? "" : "s"}
                      </span>

                      {activity.status === "approved" ? (
                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-black text-green-700">
                          ✓ Approved
                        </span>
                      ) : (
                        <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-black text-sky-700">
                          Existing content
                        </span>
                      )}
                    </div>

                    <h3 className="mt-4 text-2xl font-black text-slate-900">
                      {activity.title}
                    </h3>

                    {activity.description ? (
                      <p className="mt-2 max-w-3xl leading-7 text-slate-600">
                        {activity.description}
                      </p>
                    ) : null}

                    {activity.images?.length ? (
                      <div className="mt-5 flex flex-wrap gap-3">
                        {activity.images.slice(0, 5).map((image, index) => (
                          <div
                            key={`${image.imageUrl}-${index}`}
                            className="flex h-24 w-28 items-center justify-center overflow-hidden rounded-xl bg-slate-100"
                          >
                            <img
                              src={image.imageUrl}
                              alt=""
                              className="max-h-full max-w-full object-contain"
                              style={{
                                transform: `rotate(${image.rotation ?? 0}deg)`,
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>

                  <div className="flex shrink-0 flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => editActivity(activity)}
                      className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white"
                    >
                      ✏️ Edit
                    </button>

                    <button
                      type="button"
                      onClick={() => deleteActivity(activity)}
                      disabled={moderatingId === activity.id}
                      className="rounded-full bg-red-600 px-5 py-2.5 text-sm font-bold text-white disabled:opacity-50"
                    >
                      🗑 Delete
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
