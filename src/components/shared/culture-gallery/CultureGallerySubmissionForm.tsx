"use client";

import { FormEvent, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import { db, storage } from "@/firebaseConfig";

import type {
  CultureGallerySubmissionType,
  CultureGalleryTheme,
} from "./types";

type Props = {
  region: string;
  regionName: string;
  countries: string[];
  theme: CultureGalleryTheme;
  onClose: () => void;
};

export default function CultureGallerySubmissionForm({
  region,
  regionName,
  countries,
  theme,
  onClose,
}: Props) {
  const [submissionType, setSubmissionType] =
    useState<CultureGallerySubmissionType | null>(null);

  const [creatorName, setCreatorName] = useState("");
  const [country, setCountry] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Optional details
  const [showMore, setShowMore] = useState(false);
  const [artworkName, setArtworkName] = useState("");
  const [description, setDescription] = useState("");
  const [artistName, setArtistName] = useState("");
  const [source, setSource] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const colour = (index: number) => theme.palette[index % theme.palette.length];

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!submissionType) return;

    if (!creatorName.trim()) {
      setError("Pop your name in first.");
      return;
    }

    if (!country) {
      setError("Choose a country.");
      return;
    }

    if (!selectedFile) {
      setError("Add a picture for the gallery.");
      return;
    }

    try {
      setSubmitting(true);
      setError("");

      const safeFileName = selectedFile.name.replace(/[^a-zA-Z0-9._-]/g, "-");

      const storagePath =
        `culture-gallery/${region}/` + `${Date.now()}-${safeFileName}`;

      const storageRef = ref(storage, storagePath);

      await uploadBytes(storageRef, selectedFile);

      const imageUrl = await getDownloadURL(storageRef);

      await addDoc(collection(db, "cultureGallerySubmissions"), {
        submissionType,

        creatorName: creatorName.trim(),
        country,

        artworkName: artworkName.trim(),
        description: description.trim(),

        artistName: submissionType === "discovered" ? artistName.trim() : "",

        source: submissionType === "discovered" ? source.trim() : "",

        imageUrl,
        storagePath,

        region,
        status: "pending",

        submittedAt: serverTimestamp(),
      });

      setSubmitted(true);
    } catch (submissionError) {
      console.error("Culture Gallery submission failed:", submissionError);

      setError("Couldn't add that one. Give it another try.");
    } finally {
      setSubmitting(false);
    }
  }

  // =========================================================
  // SUCCESS
  // =========================================================

  if (submitted) {
    return (
      <div className="py-8 text-center">
        <div
          className="mx-auto flex h-20 w-20 -rotate-6 items-center justify-center rounded-full text-4xl"
          style={{ backgroundColor: `${colour(1)}66` }}
        >
          ✓
        </div>

        <h3 className="mt-6 text-4xl font-black" style={{ color: theme.text }}>
          Nice one!
        </h3>

        <p
          className="mx-auto mt-3 max-w-sm text-lg leading-7"
          style={{ color: theme.mutedText }}
        >
          It's been sent to the Culture Gallery for approval.
        </p>

        <button
          type="button"
          onClick={onClose}
          className="mt-7 rounded-full px-7 py-3 font-black"
          style={{
            backgroundColor: colour(2),
            color: "#ffffff",
          }}
        >
          DONE
        </button>
      </div>
    );
  }

  // =========================================================
  // FIRST CHOICE
  // =========================================================

  if (!submissionType) {
    return (
      <div className="py-2">
        <p
          className="text-xs font-black uppercase tracking-[0.3em]"
          style={{ color: colour(2) }}
        >
          Add to the gallery
        </p>

        <h3
          className="mt-3 text-4xl font-black leading-tight"
          style={{ color: theme.text }}
        >
          What are you sharing?
        </h3>

        <div className="mt-10 space-y-8">
          <button
            type="button"
            onClick={() => setSubmissionType("created")}
            className="group block w-full text-left"
          >
            <div className="flex items-center gap-5">
              <span className="text-5xl transition-transform group-hover:-rotate-6 group-hover:scale-110">
                🎨
              </span>

              <div>
                <p
                  className="text-2xl font-black"
                  style={{ color: theme.text }}
                >
                  I MADE THIS
                </p>

                <p className="mt-1" style={{ color: theme.mutedText }}>
                  Show us something you created.
                </p>
              </div>

              <span className="ml-auto text-3xl" style={{ color: colour(0) }}>
                →
              </span>
            </div>
          </button>

          <div
            className="h-[3px] w-full -rotate-1 rounded-full opacity-40"
            style={{ backgroundColor: colour(1) }}
          />

          <button
            type="button"
            onClick={() => setSubmissionType("discovered")}
            className="group block w-full text-left"
          >
            <div className="flex items-center gap-5">
              <span className="text-5xl transition-transform group-hover:rotate-6 group-hover:scale-110">
                ✨
              </span>

              <div>
                <p
                  className="text-2xl font-black"
                  style={{ color: theme.text }}
                >
                  I FOUND THIS
                </p>

                <p className="mt-1" style={{ color: theme.mutedText }}>
                  Share something interesting you found from {regionName}.
                </p>
              </div>

              <span className="ml-auto text-3xl" style={{ color: colour(3) }}>
                →
              </span>
            </div>
          </button>
        </div>
      </div>
    );
  }

  const discovered = submissionType === "discovered";

  // =========================================================
  // QUICK FORM
  // =========================================================

  return (
    <form onSubmit={handleSubmit}>
      <button
        type="button"
        onClick={() => {
          setSubmissionType(null);
          setError("");
          setShowMore(false);
        }}
        className="text-sm font-black"
        style={{ color: theme.mutedText }}
      >
        ← Back
      </button>

      <div className="mt-6">
        <span className="text-4xl">{discovered ? "✨" : "🎨"}</span>

        <h3
          className="mt-3 text-3xl font-black sm:text-4xl"
          style={{ color: theme.text }}
        >
          {discovered ? "Show us what you found" : "Show us what you made"}
        </h3>

        <p className="mt-2" style={{ color: theme.mutedText }}>
          Just three things. Nice and quick.
        </p>
      </div>

      <div className="mt-9 space-y-8">
        {/* NAME */}
        <label className="block">
          <span className="text-lg font-black" style={{ color: theme.text }}>
            1. Your name
          </span>

          <input
            value={creatorName}
            onChange={(event) => setCreatorName(event.target.value)}
            placeholder="Name"
            className="mt-2 w-full border-b-[3px] bg-transparent px-1 py-3 text-lg outline-none"
            style={{
              borderColor: colour(0),
              color: theme.text,
            }}
          />
        </label>

        {/* COUNTRY */}
        <label className="block">
          <span className="text-lg font-black" style={{ color: theme.text }}>
            2. Country
          </span>

          <select
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            className="mt-2 w-full border-b-[3px] bg-transparent px-1 py-3 text-lg outline-none"
            style={{
              borderColor: colour(2),
              color: theme.text,
            }}
          >
            <option value="">Choose a country</option>

            {countries.map((countryName) => (
              <option key={countryName} value={countryName}>
                {countryName}
              </option>
            ))}
          </select>
        </label>

        {/* PICTURE */}
        <label className="block">
          <span className="text-lg font-black" style={{ color: theme.text }}>
            3. Add your picture
          </span>

          <p className="mt-1 text-sm" style={{ color: theme.mutedText }}>
            Take a photo or choose one you've already got.
          </p>

          <input
            type="file"
            accept="image/*"
            onChange={(event) =>
              setSelectedFile(event.target.files?.[0] ?? null)
            }
            className="mt-4 block w-full text-sm"
          />

          {selectedFile && (
            <p className="mt-3 text-sm font-black" style={{ color: colour(5) }}>
              ✓ Picture ready
            </p>
          )}
        </label>

        {/* ARTIST — FOUND ART ONLY */}
        {discovered && (
          <label className="block">
            <span className="text-lg font-black" style={{ color: theme.text }}>
              Artist / creator
            </span>

            <p className="mt-1 text-sm" style={{ color: theme.mutedText }}>
              If you know who made it.
            </p>

            <input
              value={artistName}
              onChange={(event) => setArtistName(event.target.value)}
              placeholder="Artist name"
              className="mt-2 w-full border-b-[3px] bg-transparent px-1 py-3 text-lg outline-none"
              style={{
                borderColor: colour(5),
                color: theme.text,
              }}
            />
          </label>
        )}
      </div>

      {/* =====================================================
          OPTIONAL DETAILS
      ========================================================= */}

      <div className="mt-10">
        <button
          type="button"
          onClick={() => setShowMore(!showMore)}
          className="flex items-center gap-3 text-left font-black"
          style={{ color: colour(3) }}
          aria-expanded={showMore}
        >
          <span className="text-xl">{showMore ? "−" : "+"}</span>
          Want to add a little more?
        </button>

        <p className="ml-8 mt-1 text-sm" style={{ color: theme.mutedText }}>
          Totally optional.
        </p>

        {showMore && (
          <div
            className="ml-3 mt-7 space-y-7 border-l-4 pl-6"
            style={{
              borderColor: `${colour(1)}88`,
            }}
          >
            {/* TITLE */}
            <label className="block">
              <span className="font-black" style={{ color: theme.text }}>
                Give it a title
              </span>

              <input
                value={artworkName}
                onChange={(event) => setArtworkName(event.target.value)}
                placeholder="If you want to"
                className="mt-2 w-full border-b-2 bg-transparent px-1 py-2 outline-none"
                style={{
                  borderColor: colour(1),
                  color: theme.text,
                }}
              />
            </label>

            {/* SOURCE — FOUND ART ONLY */}
            {discovered && (
              <label className="block">
                <span className="font-black" style={{ color: theme.text }}>
                  Where did you find it?
                </span>

                <input
                  value={source}
                  onChange={(event) => setSource(event.target.value)}
                  placeholder="Website, book, museum..."
                  className="mt-2 w-full border-b-2 bg-transparent px-1 py-2 outline-none"
                  style={{
                    borderColor: colour(2),
                    color: theme.text,
                  }}
                />
              </label>
            )}

            {/* THOUGHTS */}
            <label className="block">
              <span className="font-black" style={{ color: theme.text }}>
                Any thoughts?
              </span>

              <textarea
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                rows={2}
                placeholder={
                  discovered
                    ? "What did you like about it?"
                    : "Tell us anything you want about your piece."
                }
                className="mt-2 w-full resize-none border-b-2 bg-transparent px-1 py-2 outline-none"
                style={{
                  borderColor: colour(4),
                  color: theme.text,
                }}
              />
            </label>
          </div>
        )}
      </div>

      {error && (
        <p className="mt-7 font-black" style={{ color: colour(0) }}>
          {error}
        </p>
      )}

      {/* SUBMIT */}
      <button
        type="submit"
        disabled={submitting}
        className="mt-10 inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-black uppercase tracking-[0.15em] shadow-md transition-transform hover:scale-[1.03] disabled:opacity-50"
        style={{
          backgroundColor: discovered ? colour(3) : colour(0),
          color: "#ffffff",
        }}
      >
        {submitting ? "Adding..." : "Add to Gallery →"}
      </button>
    </form>
  );
}
