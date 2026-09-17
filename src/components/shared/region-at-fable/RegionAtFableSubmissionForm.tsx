"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import { db, storage } from "@/firebaseConfig";

type RegionAtFableSubmissionFormProps = {
  region: string;
  regionName: string;
  countries: string[];
};

type SelectedPhoto = {
  file: File;
  caption: string;
};

export default function RegionAtFableSubmissionForm({
  region,
  regionName,
  countries,
}: RegionAtFableSubmissionFormProps) {
  const [country, setCountry] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [photos, setPhotos] = useState<SelectedPhoto[]>([]);

  const [linkLabel, setLinkLabel] = useState("");
  const [linkUrl, setLinkUrl] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function handlePhotos(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []);

    setPhotos(
      files.map((file) => ({
        file,
        caption: "",
      })),
    );
  }

  function updateCaption(index: number, caption: string) {
    setPhotos((current) =>
      current.map((photo, photoIndex) =>
        photoIndex === index ? { ...photo, caption } : photo,
      ),
    );
  }

  function removePhoto(index: number) {
    setPhotos((current) =>
      current.filter((_, photoIndex) => photoIndex !== index),
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!country) {
      setError("Please choose a country or area.");
      return;
    }

    if (!title.trim()) {
      setError("Please tell us what you did.");
      return;
    }

    if (photos.length === 0) {
      setError("Please add at least one photo.");
      return;
    }

    setSubmitting(true);
    setError("");
    setSuccess(false);

    try {
      const uploadedImages = [];

      for (const photo of photos) {
        const safeName = photo.file.name
          .toLowerCase()
          .replace(/[^a-z0-9.-]+/g, "-");

        const uniqueName = `${Date.now()}-${Math.random()
          .toString(36)
          .slice(2, 8)}-${safeName}`;

        const storagePath = `region-at-fable/${region}/submissions/${uniqueName}`;

        const storageReference = ref(storage, storagePath);

        await uploadBytes(storageReference, photo.file);

        const imageUrl = await getDownloadURL(storageReference);

        uploadedImages.push({
          imageUrl,
          storagePath,
          caption: photo.caption.trim(),
          rotation: 0,
        });
      }

      const links =
        linkUrl.trim().length > 0
          ? [
              {
                label: linkLabel.trim() || "Useful link",
                url: linkUrl.trim(),
              },
            ]
          : [];

      await addDoc(collection(db, "regionAtFable"), {
        region,
        regionName,
        country,
        title: title.trim(),
        description: description.trim(),
        images: uploadedImages,
        links,

        status: "pending",
        source: "public-submission",

        createdAt: serverTimestamp(),
      });

      setCountry("");
      setTitle("");
      setDescription("");
      setPhotos([]);
      setLinkLabel("");
      setLinkUrl("");
      setSuccess(true);
    } catch (submissionError) {
      console.error(
        "Could not submit Region At Fable activity:",
        submissionError,
      );

      setError(
        "Something went wrong while sending your submission. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="relative overflow-hidden bg-[#263a31] px-5 py-20 text-white sm:px-8 lg:px-12">
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#b44036]/40 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-amber-300/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-amber-300">
            Your turn
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Add something to
            <span className="block text-amber-300">{regionName} at Fable.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
            Been cooking, creating, playing, researching or exploring something?
            Add a few details and some photos to our scrapbook.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-12 rounded-[2rem] bg-[#fffaf0] p-6 text-slate-900 shadow-2xl sm:p-9"
        >
          <div className="grid gap-7 md:grid-cols-2">
            <label className="block">
              <span className="text-sm font-black uppercase tracking-[0.15em] text-slate-600">
                Country / area
              </span>

              <select
                value={country}
                onChange={(event) => setCountry(event.target.value)}
                className="mt-3 w-full rounded-2xl border-2 border-slate-200 bg-white px-4 py-4 text-base font-bold outline-none transition focus:border-[#b44036]"
              >
                <option value="">Choose one...</option>

                <option value={`${regionName} / General`}>
                  {regionName} / General
                </option>

                {countries.map((countryName) => (
                  <option key={countryName} value={countryName}>
                    {countryName}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-black uppercase tracking-[0.15em] text-slate-600">
                What did you do?
              </span>

              <input
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="e.g. We played Mahjong"
                className="mt-3 w-full rounded-2xl border-2 border-slate-200 bg-white px-4 py-4 text-base font-bold outline-none transition placeholder:font-normal placeholder:text-slate-400 focus:border-[#b44036]"
              />
            </label>
          </div>

          <label className="mt-7 block">
            <span className="text-sm font-black uppercase tracking-[0.15em] text-slate-600">
              Tell us a little about it
              <span className="ml-2 normal-case tracking-normal text-slate-400">
                (optional)
              </span>
            </span>

            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="A quick sentence or two is plenty."
              rows={4}
              className="mt-3 w-full resize-none rounded-2xl border-2 border-slate-200 bg-white px-4 py-4 leading-7 outline-none transition placeholder:text-slate-400 focus:border-[#b44036]"
            />
          </label>

          <div className="mt-7">
            <p className="text-sm font-black uppercase tracking-[0.15em] text-slate-600">
              Add your photos
            </p>

            <label className="mt-3 flex cursor-pointer flex-col items-center justify-center rounded-[1.5rem] border-2 border-dashed border-[#b44036]/35 bg-[#f7ecd4] px-6 py-10 text-center transition hover:border-[#b44036] hover:bg-[#f4dfbb]">
              <span className="text-4xl">📸</span>

              <span className="mt-3 text-lg font-black">Choose photo(s)</span>

              <span className="mt-1 text-sm text-slate-500">
                You can choose more than one.
              </span>

              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handlePhotos}
                className="hidden"
              />
            </label>
          </div>

          {photos.length > 0 ? (
            <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {photos.map((photo, index) => (
                <div
                  key={`${photo.file.name}-${index}`}
                  className="rounded-2xl border-2 border-slate-100 bg-white p-4 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-black text-slate-800">
                        Photo {index + 1}
                      </p>

                      <p className="mt-1 break-all text-xs text-slate-400">
                        {photo.file.name}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => removePhoto(index)}
                      className="rounded-full bg-rose-100 px-3 py-1.5 text-xs font-black text-rose-700 transition hover:bg-rose-200"
                    >
                      Remove
                    </button>
                  </div>

                  <label className="mt-4 block">
                    <span className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">
                      Caption
                    </span>

                    <input
                      type="text"
                      value={photo.caption}
                      onChange={(event) =>
                        updateCaption(index, event.target.value)
                      }
                      placeholder="Optional"
                      className="mt-2 w-full rounded-xl border-2 border-slate-100 px-3 py-3 text-sm outline-none transition focus:border-[#b44036]"
                    />
                  </label>
                </div>
              ))}
            </div>
          ) : null}

          <div className="mt-9 border-t-2 border-dashed border-slate-200 pt-8">
            <p className="font-black text-slate-800">
              🔗 Got a useful link?
              <span className="ml-2 text-sm font-normal text-slate-400">
                Optional
              </span>
            </p>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <input
                type="text"
                value={linkLabel}
                onChange={(event) => setLinkLabel(event.target.value)}
                placeholder="Link name"
                className="rounded-2xl border-2 border-slate-200 px-4 py-4 outline-none transition focus:border-[#b44036]"
              />

              <input
                type="url"
                value={linkUrl}
                onChange={(event) => setLinkUrl(event.target.value)}
                placeholder="https://..."
                className="rounded-2xl border-2 border-slate-200 px-4 py-4 outline-none transition focus:border-[#b44036]"
              />
            </div>
          </div>

          {error ? (
            <div className="mt-7 rounded-2xl bg-rose-100 px-5 py-4 font-bold text-rose-800">
              {error}
            </div>
          ) : null}

          {success ? (
            <div className="mt-7 rounded-2xl bg-emerald-100 px-5 py-4 text-emerald-900">
              <p className="font-black">🎉 Sent!</p>

              <p className="mt-1">
                Your submission is waiting for approval before it appears in the
                scrapbook.
              </p>
            </div>
          ) : null}

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center rounded-full bg-[#b44036] px-7 py-4 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#94362e] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Sending..." : "📌 Send to the scrapbook"}
            </button>

            <p className="text-sm leading-6 text-slate-500">
              It won&apos;t appear publicly until it has been approved.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
