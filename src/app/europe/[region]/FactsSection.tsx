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

  useEffect(() => {
    const fetchFacts = async () => {
      const q = query(
        collection(db, "europeRegionFacts"),
        where("regionKey", "==", regionKey)
      );
      const snapshot = await getDocs(q);
      setAddedFacts(snapshot.docs.map((doc) => doc.data().fact as string));
    };
    fetchFacts();
  }, [regionKey]);

  const handleAddFact = async () => {
    if (!newFact.trim() || addedFacts.includes(newFact.trim())) return;

    await addDoc(collection(db, "europeRegionFacts"), {
      regionKey,
      fact: newFact.trim(),
    });

    setNewFact("");
    inputRef.current?.focus();

    // Refresh facts
    const snapshot = await getDocs(
      query(
        collection(db, "europeRegionFacts"),
        where("regionKey", "==", regionKey)
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
