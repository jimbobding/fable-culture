"use client";

import { useEffect, useState, useRef } from "react";
import { db } from "@/firebaseConfig";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

type Props = {
  regionKey: string;
};

export default function FactsSection({ regionKey }: Props) {
  const [newFact, setNewFact] = useState("");
  const [addedFacts, setAddedFacts] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Fetch only approved facts
  useEffect(() => {
    const fetchFacts = async () => {
      const q = query(
        collection(db, "regionFacts"),
        where("regionKey", "==", regionKey),
        where("status", "==", "approved") // ✅ only approved facts
      );
      const snapshot = await getDocs(q);
      setAddedFacts(snapshot.docs.map((doc) => doc.data().fact as string));
    };
    fetchFacts();
  }, [regionKey]);

  const handleAddFact = async () => {
    const trimmedFact = newFact.trim();
    if (!trimmedFact || addedFacts.includes(trimmedFact)) return;

    // Add new fact with correct field for Firestore rules
    await addDoc(collection(db, "regionFacts"), {
      regionKey,
      fact: trimmedFact,
      status: "pending", // ✅ matches Firestore create rule
    });

    setNewFact("");
    inputRef.current?.focus();
  };

  return (
    <div className="mt-6">
      {addedFacts.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Additional Facts</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {addedFacts.map((fact, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow"
              >
                <p className="text-gray-800">{fact}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mb-6">
        <input
          ref={inputRef}
          type="text"
          placeholder="Add a new fact"
          value={newFact}
          onChange={(e) => setNewFact(e.target.value)}
          className="border p-2 w-full mb-2 rounded"
        />
        <p className="mb-2">
          <strong>
            Remember to check your sources. Be aware of misinformation and
            disinformation
          </strong>
        </p>
        <p className="my-4">
          <a
            href="https://www.bbc.co.uk/bitesize/articles/z3hhvj6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-lg shadow hover:bg-blue-200 transition-colors"
          >
            ❓ Misinformation vs disinformation: What’s the difference?
          </a>
        </p>
        <button
          onClick={handleAddFact}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add Fact
        </button>
      </div>
    </div>
  );
}
