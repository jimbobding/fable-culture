"use client";

import { useEffect, useState, useRef } from "react";
import { db } from "@/firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  serverTimestamp,
} from "firebase/firestore";

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
  const [facts, setFacts] = useState<any[]>([]);
  const [newFact, setNewFact] = useState("");
  const [isPending, setIsPending] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState("");

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

      const fetched = snapshot.docs.map((doc) => doc.data());

      fetched.sort((a, b) => {
        const aTime = a.submittedAt?.seconds || 0;
        const bTime = b.submittedAt?.seconds || 0;
        return bTime - aTime;
      });

      setFacts(fetched);
    };

    fetchFacts();

    const interval = setInterval(fetchFacts, 3000); // auto refresh

    return () => clearInterval(interval);
  }, [continent, regionKey]);

  // Add pending submission
  const handleAddFact = async () => {
    const trimmed = newFact.trim();
    if (!trimmed) return;

    setIsPending(true);

    await addDoc(collection(db, "regionFacts"), {
      name,
      continent,
      regionKey,
      fact: trimmed,
      status: "pending",
      submittedAt: serverTimestamp(),
    });

    setNewFact("");
    setName("");
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
    <section className="mt-12 space-y-8">
      {allItems.length > 0 && (
        <>
          <h3 className={`text-2xl font-bold text-center ${text}`}>
            {sectionHeading}
          </h3>

          <div className="grid gap-5 md:grid-cols-2">
            {allItems.map((item, i) => (
              <div
                key={i}
                className={`
                rounded-[1.75rem]
                border border-orange-200/70
                bg-[#fff7ed]/85
                p-5
                leading-relaxed
                text-[#6b4226]
                shadow-md
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-xl
              `}
              >
                <p>{typeof item === "string" ? item : item.fact}</p>
                {typeof item !== "string" && item.name && (
                  <p className="text-xs text-stone-500 mt-1">By: {item.name}</p>
                )}
                {typeof item !== "string" &&
                  (item.submittedAt || item.createdAt) && (
                    <p className="text-xs text-stone-400">
                      {(() => {
                        const timestamp = item.submittedAt || item.createdAt;

                        if (timestamp?.seconds) {
                          return new Date(
                            timestamp.seconds * 1000,
                          ).toLocaleString("en-GB", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          });
                        }

                        return new Date(timestamp).toLocaleString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        });
                      })()}
                    </p>
                  )}
              </div>
            ))}
          </div>
        </>
      )}

      {/* INPUT */}
      <div
        className={`
        rounded-2xl border p-6 space-y-4
        ${cardBg}
        ${cardBorder}
        ${cardShadow}
        ${text}
      `}
      >
        <label className="block text-sm font-medium">{inputHeading}</label>

        <label className="mb-2 block text-sm font-semibold text-stone-800">
          Your name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. J D"
          className="w-full max-w-xs rounded-lg border border-stone-300 px-3 py-2 text-sm"
        />

        <input
          ref={inputRef}
          type="text"
          value={newFact}
          onChange={(e) => setNewFact(e.target.value)}
          placeholder={placeholder}
          className={`
          w-full rounded-lg border px-3 py-2 outline-none
          ${inputBg}
          ${cardBorder}
          ${text}
          focus:ring-2 focus:ring-black/10
        `}
        />

        {/* FACT CHECK LINK */}
        <div>
          <a
            href="https://www.bbc.co.uk/bitesize/articles/z3hhvj6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-lg shadow hover:bg-blue-200 transition-colors text-sm"
          >
            ❓ Misinformation vs disinformation: What’s the difference?
          </a>
        </div>

        <button
          onClick={handleAddFact}
          className="w-full sm:w-auto px-4 py-2 rounded-lg font-medium transition bg-blue-600 text-white hover:bg-blue-700"
        >
          Add
        </button>

        {isPending && (
          <p className="text-sm text-yellow-700">
            Your submission is pending approval.
          </p>
        )}
      </div>
    </section>
  );
}
