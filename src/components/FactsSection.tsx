"use client";

import { useEffect, useState, useRef } from "react";
import { db } from "@/firebaseConfig";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

type Props = {
  continent: string;
  regionKey: string;

  // NEW – makes it reusable
  sectionHeading?: string;
  inputHeading?: string;
  placeholder?: string;
  staticItems?: string[];
};

export default function FactsSection({
  continent,
  regionKey,
  sectionHeading = "Things We’ve Learned",
  inputHeading = "Add a new fact",
  placeholder = "Check your source before submitting",
  staticItems = [],
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

  return (
    <section className="mt-12">
      {allItems.length > 0 && (
        <>
          <h3 className="text-2xl font-bold mb-6 text-center">
            {sectionHeading}
          </h3>

          <div className="grid gap-6 sm:grid-cols-2">
            {allItems.map((item, i) => (
              <div
                key={i}
                className="rounded-xl bg-white/80 p-4 shadow hover:shadow-md transition"
              >
                <p className="text-gray-800 text-sm font-medium">{item}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Input card */}
      <div className="mt-8 rounded-2xl bg-white/80 p-4 shadow">
        <label className="block text-sm font-medium mb-2">{inputHeading}</label>

        <input
          ref={inputRef}
          type="text"
          value={newFact}
          onChange={(e) => setNewFact(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-lg border px-3 py-2 mb-2"
        />

        <button
          onClick={handleAddFact}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
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
