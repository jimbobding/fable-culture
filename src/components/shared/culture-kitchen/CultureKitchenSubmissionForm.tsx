"use client";

import { useRef, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/firebaseConfig";
import type { CultureKitchenTheme } from "./types";

type Props = {
  region: string;
  countries: string[];
  theme: CultureKitchenTheme;
};

export default function CultureKitchenSubmissionForm({
  region,
  countries,
  theme,
}: Props) {
  const [creatorName, setCreatorName] = useState("");
  const [dishName, setDishName] = useState("");
  const [inspiration, setInspiration] = useState("");
  const [description, setDescription] = useState("");
  const [keyIngredients, setKeyIngredients] = useState("");
  const [adaptation, setAdaptation] = useState("");
  const [makeAgain, setMakeAgain] = useState<"yes" | "maybe" | "no">("yes");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const submitCreation = async () => {
    if (!creatorName.trim() || !dishName.trim() || !inspiration) {
      setError("Please add your name, your dish name and what inspired it.");
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitted(false);
      setError("");

      let imageUrl = "";
      let storagePath = "";

      if (selectedFile) {
        storagePath = `culture-kitchen/${Date.now()}-${selectedFile.name}`;

        const storageRef = ref(storage, storagePath);

        await uploadBytes(storageRef, selectedFile);

        imageUrl = await getDownloadURL(storageRef);
      }

      await addDoc(collection(db, "cultureKitchenSubmissions"), {
        creatorName: creatorName.trim(),
        dishName: dishName.trim(),
        inspiration,
        description: description.trim(),
        keyIngredients: keyIngredients.trim(),
        adaptation: adaptation.trim(),
        makeAgain,

        imageUrl,
        storagePath,

        region,

        status: "pending",
        submittedAt: serverTimestamp(),
      });

      setSubmitted(true);

      setCreatorName("");
      setDishName("");
      setInspiration("");
      setDescription("");
      setKeyIngredients("");
      setAdaptation("");
      setMakeAgain("yes");
      setSelectedFile(null);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (err) {
      console.error(err);

      setError(
        "There was a problem submitting your creation. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldStyle = {
    backgroundColor: theme.surface,
    borderColor: theme.border,
    color: theme.text,
  };

  return (
    <section
      className="relative overflow-hidden rounded-[2.8rem_1.8rem_3rem_2rem] border p-6 sm:p-8"
      style={{
        backgroundColor: theme.surfaceAlt,
        borderColor: theme.border,
        boxShadow: theme.featureShadow,
      }}
    >
      {/* TOP ACCENT */}
      <div
        className="absolute left-0 top-0 h-1 w-full"
        style={{
          background: `linear-gradient(to right, ${theme.primary}, ${theme.accent}, ${theme.tertiary})`,
        }}
      />

      {/* INTRO */}
      <div className="max-w-3xl">
        <p
          className="text-xs font-black uppercase tracking-[0.3em]"
          style={{ color: theme.primary }}
        >
          🍽️ Culture Kitchen Submission
        </p>

        <h3
          className="mt-3 text-3xl font-black sm:text-4xl"
          style={{ color: theme.text }}
        >
          Add Your Inspired Creation
        </h3>

        <p className="mt-3 leading-relaxed" style={{ color: theme.mutedText }}>
          Cooked something inspired by the food of this region? Tell us what you
          made, what inspired it and how you made it your own.
        </p>
      </div>

      {/* MAIN FIELDS */}
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-black" style={{ color: theme.text }}>
            Your name
          </span>

          <input
            type="text"
            value={creatorName}
            onChange={(e) => setCreatorName(e.target.value)}
            placeholder="Your name"
            className="w-full rounded-2xl border px-4 py-3 outline-none transition focus:ring-2"
            style={{
              ...fieldStyle,
              outlineColor: theme.primary,
            }}
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-black" style={{ color: theme.text }}>
            What did you make?
          </span>

          <input
            type="text"
            value={dishName}
            onChange={(e) => setDishName(e.target.value)}
            placeholder="Name your creation"
            className="w-full rounded-2xl border px-4 py-3 outline-none transition focus:ring-2"
            style={fieldStyle}
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-black" style={{ color: theme.text }}>
            What inspired your dish?
          </span>

          <select
            value={inspiration}
            onChange={(e) => setInspiration(e.target.value)}
            className="w-full rounded-2xl border px-4 py-3 outline-none"
            style={fieldStyle}
          >
            <option value="">Choose a country</option>

            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2 md:col-span-2">
          <span className="text-sm font-black" style={{ color: theme.text }}>
            🥕 Ingredients
          </span>

          <p className="text-sm" style={{ color: theme.mutedText }}>
            Add the ingredients you used. One ingredient per line works best.
          </p>

          <textarea
            value={keyIngredients}
            onChange={(e) => setKeyIngredients(e.target.value)}
            placeholder={"Chicken\nRice\nSoy sauce\nPeppers"}
            rows={6}
            className="w-full rounded-[1.7rem_2.2rem_1.5rem_2rem] border px-4 py-4 outline-none"
            style={fieldStyle}
          />
        </label>
      </div>

      {/* DESCRIPTION */}
      <label className="mt-5 block space-y-2">
        <span className="text-sm font-black" style={{ color: theme.text }}>
          Tell us about your creation
        </span>

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="What did you make and what was it like?"
          rows={4}
          className="w-full rounded-2xl border px-4 py-3 outline-none"
          style={fieldStyle}
        />
      </label>

      {/* ADAPTATION */}
      <label className="mt-5 block space-y-2">
        <span className="text-sm font-black" style={{ color: theme.text }}>
          Did you change or adapt anything?
        </span>

        <textarea
          value={adaptation}
          onChange={(e) => setAdaptation(e.target.value)}
          placeholder="Tell us what you changed..."
          rows={3}
          className="w-full rounded-2xl border px-4 py-3 outline-none"
          style={fieldStyle}
        />
      </label>

      {/* MAKE AGAIN */}
      <div className="mt-7">
        <p className="text-sm font-black" style={{ color: theme.text }}>
          Would you make it again?
        </p>

        <div className="mt-3 flex flex-wrap gap-3">
          {[
            ["yes", "😍 Definitely"],
            ["maybe", "🤔 Maybe"],
            ["no", "😬 Probably not"],
          ].map(([value, label]) => {
            const selected = makeAgain === value;

            return (
              <button
                key={value}
                type="button"
                onClick={() => setMakeAgain(value as "yes" | "maybe" | "no")}
                className="rounded-full border px-4 py-2 font-bold transition hover:-translate-y-0.5"
                style={{
                  backgroundColor: selected ? theme.secondary : theme.surface,
                  borderColor: selected ? theme.secondary : theme.border,
                  color: selected ? theme.surface : theme.text,
                }}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* PHOTO */}
      <div
        className="mt-7 rounded-[2rem_1.3rem_2.4rem_1.6rem] border-l-4 p-5"
        style={{
          backgroundColor: `${theme.tertiary}10`,
          borderColor: theme.tertiary,
        }}
      >
        <label className="block space-y-3">
          <span
            className="text-sm font-black uppercase tracking-[0.15em]"
            style={{ color: theme.tertiary }}
          >
            📷 Add a photo of your food
          </span>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={(e) => setSelectedFile(e.target.files?.[0] ?? null)}
            className="block w-full rounded-2xl border p-3 text-sm"
            style={{
              backgroundColor: theme.surface,
              borderColor: theme.border,
              color: theme.text,
            }}
          />
        </label>

        {selectedFile && (
          <p
            className="mt-3 text-sm font-bold"
            style={{ color: theme.tertiary }}
          >
            ✓ {selectedFile.name}
          </p>
        )}
      </div>

      {/* SUBMIT */}
      <button
        type="button"
        onClick={submitCreation}
        disabled={isSubmitting}
        className="mt-8 rounded-full border px-7 py-3 font-black uppercase tracking-[0.12em] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
        style={{
          backgroundColor: theme.primary,
          borderColor: theme.primary,
          color: theme.surface,
        }}
      >
        {isSubmitting ? "Submitting..." : "Submit My Creation"}
      </button>

      {error && (
        <div
          className="mt-5 border-l-4 p-4 font-semibold"
          style={{
            borderColor: theme.primary,
            backgroundColor: `${theme.primary}10`,
            color: theme.primary,
          }}
        >
          {error}
        </div>
      )}

      {submitted && (
        <div
          className="mt-5 border-l-4 p-4 font-semibold"
          style={{
            borderColor: theme.tertiary,
            backgroundColor: `${theme.tertiary}12`,
            color: theme.tertiary,
          }}
        >
          ✓ Your creation has been submitted for approval!
        </div>
      )}

      <p className="mt-5 text-xs" style={{ color: theme.mutedText }}>
        Submissions will be checked before appearing in the Culture Kitchen.
      </p>
    </section>
  );
}
