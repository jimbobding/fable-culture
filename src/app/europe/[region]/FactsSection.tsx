"use client";

import { useEffect, useState, useRef } from "react";
import { db } from "@/firebaseConfig";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

type Props = {
  continent: string; // e.g., "africa", "europe"
  regionKey: string; // e.g., "west", "southern"
};

export default function FactsSection({ continent, regionKey }: Props) {
  const [newFact, setNewFact] = useState("");
  const [addedFacts, setAddedFacts] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Fetch only approved facts for this continent + region
  useEffect(() => {
    const fetchFacts = async () => {
      const q = query(
        collection(db, "regionFacts"),
        where("regionKey", "==", regionKey),
        where("continent", "==", continent), // ✅ dynamic continent
        where("status", "==", "approved")
      );
      const snapshot = await getDocs(q);
      setAddedFacts(snapshot.docs.map((doc) => doc.data().fact as string));
    };
    fetchFacts();
  }, [continent, regionKey]);

  const handleAddFact = async () => {
    const trimmedFact = newFact.trim();
    if (!trimmedFact || addedFacts.includes(trimmedFact)) return;

    await addDoc(collection(db, "regionFacts"), {
      continent, // ✅ dynamic
      regionKey,
      fact: trimmedFact,
      status: "pending",
    });

    setNewFact("");
    inputRef.current?.focus();
  };

  return (
    <div className="mt-6">
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 mb-4">
        {addedFacts.map((fact, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow break-inside-avoid"
          >
            <p className="text-gray-800">{fact}</p>
          </div>
        ))}
      </div>

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
