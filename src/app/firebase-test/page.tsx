"use client";

import { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "firebaseConfig";

export default function FirebaseTest() {
  const [title, setTitle] = useState("");
  const [fact, setFact] = useState("");
  const [regions, setRegions] = useState<any[]>([]);

  const fetchRegions = async () => {
    const snapshot = await getDocs(collection(db, "regions"));
    setRegions(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  const handleAdd = async () => {
    await addDoc(collection(db, "regions"), { title, fact });
    setTitle("");
    setFact("");
    fetchRegions();
  };

  useEffect(() => {
    fetchRegions();
  }, []);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Add Region</h1>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full"
      />
      <input
        placeholder="Fact"
        value={fact}
        onChange={(e) => setFact(e.target.value)}
        className="border p-2 w-full"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Region
      </button>

      <h2 className="text-xl font-semibold mt-6">Regions in Firestore:</h2>
      <ul className="list-disc pl-6">
        {regions.map((region) => (
          <li key={region.id}>
            <strong>{region.title}</strong> – {region.fact}
          </li>
        ))}
      </ul>
    </div>
  );
}
