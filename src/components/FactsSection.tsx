"use client";

import { useEffect, useState, useRef } from "react";
import { db } from "@/firebaseConfig";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

type Props = {
  continent: string;
  regionKey: string;

  sectionHeading?: string;
  inputHeading?: string;
  placeholder?: string;

  // Hardcoded fallback facts (shown alongside firebase facts, or alone if firebase is empty)
  staticItems?: string[];

  theme?: {
    cardBg?: string; // tailwind class e.g. "bg-[#fffaf3]"
    cardBorder?: string; // tailwind class e.g. "border-yellow-400"
    cardShadow?: string; // tailwind class e.g. "shadow-lg shadow-orange-200/40"
    text?: string; // tailwind class e.g. "text-gray-800"
    inputBg?: string; // tailwind class e.g. "bg-white/80"
  };
};

export default function FactsSection({
  continent,
  regionKey,
  sectionHeading = "Things We’ve Learned",
  inputHeading = "Add a new fact",
  placeholder = "Check your source before submitting",
  staticItems = [],
  theme,
}: Props) {
  const [facts, setFacts] = useState<string[]>([]);
  const [newFact, setNewFact] = useState("");
  const [isPending, setIsPending] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Fetch approved facts from Firebase
  useEffect(() => {
    const fetchFacts = async () => {
      const q = query(
        collection(db, "regionFacts"),
        where("continent", "==", continent),
        where("regionKey", "==", regionKey),
        where("status", "==", "approved"),
      );

      const snapshot = await getDocs(q);
      setFacts(snapshot.docs.map((doc) => doc.data().fact as string));
    };

    fetchFacts();
  }, [continent, regionKey]);

  // Add pending submission
  const handleAddFact = async () => {
    const trimmed = newFact.trim();
    if (!trimmed) return;

    setIsPending(true);

    await addDoc(collection(db, "regionFacts"), {
      continent,
      regionKey,
      fact: trimmed,
      status: "pending",
      createdAt: new Date(),
    });

    setNewFact("");
    inputRef.current?.focus();
  };

  // Combine static + firebase items
  const allItems = [...staticItems, ...facts];

  const cardBg = theme?.cardBg ?? "bg-white/80";
  const cardBorder = theme?.cardBorder ?? "border-black/10";
  const cardShadow = theme?.cardShadow ?? "shadow";
  const text = theme?.text ?? "text-gray-800";
  const inputBg = theme?.inputBg ?? "bg-white/80";

  return (
    <section className="mt-12">
      {allItems.length > 0 && (
        <>
          <h3 className={`text-2xl font-bold mb-6 text-center ${text}`}>
            {sectionHeading}
          </h3>

          <div className="grid gap-6 sm:grid-cols-2">
            {allItems.map((item, i) => (
              <div
                key={i}
                className={`
                  rounded-2xl border p-4 transition
                  ${cardBg}
                  ${cardBorder}
                  ${cardShadow}
                  hover:shadow-md
                `}
              >
                <p className={`text-sm font-medium ${text}`}>{item}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Input card */}
      <div
        className={`
          mt-10 rounded-2xl border p-6
          ${cardBg}
          ${cardBorder}
          ${cardShadow}
          ${text}
        `}
      >
        <label className="block text-sm font-medium mb-2">{inputHeading}</label>

        <input
          ref={inputRef}
          type="text"
          value={newFact}
          onChange={(e) => setNewFact(e.target.value)}
          placeholder={placeholder}
          className={`
            w-full rounded-lg border px-3 py-2 mb-2 outline-none
            ${inputBg}
            ${cardBorder}
            ${text}
            focus:ring-2 focus:ring-black/10
          `}
        />

        <button
          onClick={handleAddFact}
          className="px-4 py-2 rounded-lg font-medium transition bg-blue-600 text-white hover:bg-blue-700"
        >
          Add
        </button>

        {isPending && (
          <p className="mt-2 text-sm text-yellow-700">
            Your submission is pending approval.
          </p>
        )}
      </div>
    </section>
  );
}
