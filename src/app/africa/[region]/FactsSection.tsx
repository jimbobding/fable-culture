"use client";

import { useEffect, useState, useRef } from "react";
import { db } from "@/firebaseConfig";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

type Props = {
  regionKey: string;
  continent: string; // ✅ new prop to distinguish continents
};

export default function FactsSection({ regionKey, continent }: Props) {
  const [newFact, setNewFact] = useState("");
  const [addedFacts, setAddedFacts] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Fetch only facts for this continent + region
  useEffect(() => {
    const fetchFacts = async () => {
      const q = query(
        collection(db, "regionFacts"),
        where("regionKey", "==", regionKey),
        where("continent", "==", continent)
      );
      const snapshot = await getDocs(q);
      setAddedFacts(snapshot.docs.map((doc) => doc.data().fact as string));
    };
    fetchFacts();
  }, [regionKey, continent]);

  const handleAddFact = async () => {
    const trimmedFact = newFact.trim();
    if (!trimmedFact || addedFacts.includes(trimmedFact)) return;

    await addDoc(collection(db, "regionFacts"), {
      regionKey,
      continent,
      fact: trimmedFact,
      status: "pending", // optional: track fact approval
    });

    setNewFact("");
    inputRef.current?.focus();

    // Refresh facts after adding
    const snapshot = await getDocs(
      query(
        collection(db, "regionFacts"),
        where("regionKey", "==", regionKey),
        where("continent", "==", continent)
      )
    );
    setAddedFacts(snapshot.docs.map((doc) => doc.data().fact as string));
  };

  return (
    <div className="mt-6">
      {addedFacts.length > 0 && (
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Additional Facts</h3>
          <ul className="list-disc pl-5">
            {addedFacts.map((fact, i) => (
              <li key={i}>{fact}</li>
            ))}
          </ul>
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
