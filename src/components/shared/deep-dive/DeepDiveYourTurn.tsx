"use client";

import { FormEvent, ReactNode, useMemo, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import { db, storage } from "@/firebaseConfig";

export type DeepDiveYourTurnOption = {
  id: string;
  label: string;
  icon?: ReactNode;
  prompt?: string;
  allowImage?: boolean;
  imageRequired?: boolean;
  answerRequired?: boolean;
};

export type DeepDiveYourTurnTheme = {
  background?: string;
  surface?: string;
  text?: string;
  mutedText?: string;
  primary?: string;
  secondary?: string;
  accent?: string;
  border?: string;
};

type Props = {
  region: string;
  regionName: string;
  deepDive: string;
  deepDiveTitle: string;
  title?: string;
  eyebrow?: string;
  intro?: string;
  options: DeepDiveYourTurnOption[];
  nameLabel?: string;
  namePlaceholder?: string;
  answerLabel?: string;
  answerPlaceholder?: string;
  submitLabel?: string;
  successMessage?: string;
  theme?: DeepDiveYourTurnTheme;
  className?: string;
};

const defaultTheme: Required<DeepDiveYourTurnTheme> = {
  background: "#FFF7E8",
  surface: "#FFFFFF",
  text: "#17131F",
  mutedText: "#6A6570",
  primary: "#08A9D6",
  secondary: "#FFD83D",
  accent: "#FF4F9A",
  border: "#17131F",
};

export default function DeepDiveYourTurn({
  region,
  regionName,
  deepDive,
  deepDiveTitle,
  title = "Your Turn!",
  eyebrow = "Fan corner",
  intro = "Got something to share? Pick one — we'll keep it quick.",
  options,
  nameLabel = "Your name",
  namePlaceholder = "First name or nickname",
  answerLabel = "Tell us",
  answerPlaceholder = "A few words is plenty.",
  submitLabel = "Send it in →",
  successMessage = "Nice one! It's been sent for approval.",
  theme,
  className = "",
}: Props) {
  const colours = useMemo(
    () => ({
      ...defaultTheme,
      ...theme,
    }),
    [theme],
  );

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [creatorName, setCreatorName] = useState("");
  const [answer, setAnswer] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const selectedOption = options.find((option) => option.id === selectedId);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!selectedOption) return;

    if (!creatorName.trim()) {
      setError("Pop your name in first.");
      return;
    }

    if (selectedOption.answerRequired !== false && !answer.trim()) {
      setError("Add a few words first.");
      return;
    }

    if (selectedOption.imageRequired && !selectedFile) {
      setError("Add your picture first.");
      return;
    }

    try {
      setSubmitting(true);
      setError("");

      let imageUrl = "";
      let storagePath = "";

      if (selectedOption.allowImage && selectedFile) {
        const safeFileName = selectedFile.name.replace(/[^a-zA-Z0-9._-]/g, "-");

        storagePath =
          `deep-dive-submissions/${region}/${deepDive}/` +
          `${Date.now()}-${safeFileName}`;

        const storageRef = ref(storage, storagePath);

        await uploadBytes(storageRef, selectedFile);
        imageUrl = await getDownloadURL(storageRef);
      }

      await addDoc(collection(db, "deepDiveSubmissions"), {
        creatorName: creatorName.trim(),
        answer: answer.trim(),

        imageUrl,
        storagePath,

        region,
        regionName,
        deepDive,
        deepDiveTitle,
        submissionType: selectedOption.id,
        submissionLabel: selectedOption.label,

        status: "pending",
        submittedAt: serverTimestamp(),
      });

      setSubmitted(true);
    } catch (submissionError) {
      console.error("Deep Dive Your Turn submission failed:", submissionError);
      setError("Couldn't send that one. Give it another try.");
    } finally {
      setSubmitting(false);
    }
  }

  function resetForm() {
    setSelectedId(null);
    setCreatorName("");
    setAnswer("");
    setSelectedFile(null);
    setSubmitted(false);
    setError("");
  }

  if (submitted) {
    return (
      <section
        className={`relative overflow-hidden border-y-[5px] px-5 py-20 sm:px-8 lg:px-12 ${className}`}
        style={{
          background: colours.background,
          color: colours.text,
          borderColor: colours.border,
        }}
      >
        <div className="relative mx-auto max-w-6xl text-center">
          <div
            className="mx-auto flex h-24 w-24 -rotate-6 items-center justify-center border-[5px] text-5xl font-black shadow-[7px_7px_0_var(--success-shadow)]"
            style={
              {
                "--success-shadow": colours.primary,
                borderColor: colours.border,
                background: colours.secondary,
              } as React.CSSProperties
            }
          >
            ✓
          </div>

          <h2 className="mt-8 text-5xl font-black uppercase md:text-7xl">
            Nice one!
          </h2>

          <p
            className="mx-auto mt-4 max-w-xl text-lg font-bold"
            style={{ color: colours.mutedText }}
          >
            {successMessage}
          </p>

          <button
            type="button"
            onClick={resetForm}
            className="mt-8 border-[4px] px-6 py-3 font-black uppercase shadow-[6px_6px_0_var(--success-border)]"
            style={
              {
                "--success-border": colours.border,
                borderColor: colours.border,
                background: colours.accent,
              } as React.CSSProperties
            }
          >
            Share another
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`relative overflow-hidden border-y-[5px] px-5 py-20 sm:px-8 lg:px-12 ${className}`}
      style={{
        background: colours.background,
        color: colours.text,
        borderColor: colours.border,
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(circle, ${colours.border} 1.2px, transparent 1.3px)`,
          backgroundSize: "13px 13px",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <p
          className="text-xs font-black uppercase tracking-[0.32em]"
          style={{ color: colours.accent }}
        >
          {eyebrow}
        </p>

        <h2 className="mt-3 text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] md:text-7xl">
          {title}
        </h2>

        <p
          className="mt-5 max-w-2xl text-lg font-bold leading-relaxed"
          style={{ color: colours.mutedText }}
        >
          {intro}
        </p>

        {!selectedOption ? (
          <div className="mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            {options.map((option, index) => (
              <button
                key={option.id}
                type="button"
                onClick={() => {
                  setSelectedId(option.id);
                  setError("");
                  setAnswer("");
                  setSelectedFile(null);
                }}
                className={`group border-[5px] p-7 text-left shadow-[8px_8px_0_var(--option-shadow)] transition hover:-translate-y-2 ${
                  index % 2 ? "rotate-1" : "-rotate-1"
                }`}
                style={
                  {
                    "--option-shadow": colours.border,
                    borderColor: colours.border,
                    background: index % 2 ? colours.secondary : colours.accent,
                  } as React.CSSProperties
                }
              >
                <span className="text-5xl transition-transform group-hover:scale-110">
                  {option.icon}
                </span>

                <h3 className="mt-5 text-2xl font-black uppercase">
                  {option.label}
                </h3>

                {option.prompt && (
                  <p className="mt-2 font-bold opacity-65">{option.prompt}</p>
                )}

                <span className="mt-6 block text-3xl font-black">→</span>
              </button>
            ))}
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-12 max-w-3xl border-[5px] p-6 shadow-[10px_10px_0_var(--form-shadow)] md:p-8"
            style={
              {
                "--form-shadow": colours.primary,
                borderColor: colours.border,
                background: colours.surface,
              } as React.CSSProperties
            }
          >
            <button
              type="button"
              onClick={() => {
                setSelectedId(null);
                setError("");
                setAnswer("");
                setSelectedFile(null);
              }}
              className="text-sm font-black uppercase"
              style={{ color: colours.mutedText }}
            >
              ← Back
            </button>

            <div className="mt-7">
              <span className="text-5xl">{selectedOption.icon}</span>
              <h3 className="mt-3 text-3xl font-black uppercase md:text-4xl">
                {selectedOption.label}
              </h3>
              <p
                className="mt-2 font-bold"
                style={{ color: colours.mutedText }}
              >
                Nice and quick.
              </p>
            </div>

            <div className="mt-9 space-y-8">
              <label className="block">
                <span className="text-lg font-black">{nameLabel}</span>
                <input
                  value={creatorName}
                  onChange={(event) => setCreatorName(event.target.value)}
                  maxLength={40}
                  placeholder={namePlaceholder}
                  className="mt-2 w-full border-b-[3px] bg-transparent px-1 py-3 text-lg font-bold outline-none"
                  style={{
                    borderColor: colours.primary,
                    color: colours.text,
                  }}
                />
              </label>

              <label className="block">
                <span className="text-lg font-black">{answerLabel}</span>
                <textarea
                  value={answer}
                  onChange={(event) => setAnswer(event.target.value)}
                  maxLength={280}
                  rows={2}
                  placeholder={answerPlaceholder}
                  className="mt-2 w-full resize-none border-b-[3px] bg-transparent px-1 py-3 text-lg font-bold outline-none"
                  style={{
                    borderColor: colours.accent,
                    color: colours.text,
                  }}
                />

                <span
                  className="mt-1 block text-right text-xs font-bold"
                  style={{ color: colours.mutedText }}
                >
                  {answer.length}/280
                </span>
              </label>

              {selectedOption.allowImage && (
                <label className="block">
                  <span className="text-lg font-black">
                    Add your picture
                    {!selectedOption.imageRequired && (
                      <span className="ml-2 text-sm opacity-50">
                        (optional)
                      </span>
                    )}
                  </span>

                  <p
                    className="mt-1 text-sm font-bold"
                    style={{ color: colours.mutedText }}
                  >
                    Take a photo or choose one you've already got.
                  </p>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={(event) =>
                      setSelectedFile(event.target.files?.[0] ?? null)
                    }
                    className="mt-4 block w-full text-sm font-bold"
                  />

                  {selectedFile && (
                    <p
                      className="mt-3 text-sm font-black"
                      style={{ color: colours.primary }}
                    >
                      ✓ Picture ready
                    </p>
                  )}
                </label>
              )}
            </div>

            {error && (
              <p className="mt-7 font-black" style={{ color: colours.accent }}>
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="mt-9 border-[4px] px-7 py-4 text-sm font-black uppercase tracking-[0.12em] shadow-[6px_6px_0_var(--submit-shadow)] transition hover:-translate-y-1 disabled:opacity-50"
              style={
                {
                  "--submit-shadow": colours.border,
                  borderColor: colours.border,
                  background: colours.primary,
                  color: colours.text,
                } as React.CSSProperties
              }
            >
              {submitting ? "Sending..." : submitLabel}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
