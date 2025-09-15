"use client";

import { useState, useEffect } from "react";
import { collection, addDoc, getDocs, DocumentData } from "firebase/firestore";
import { db } from "@/firebaseConfig"; // make sure path is correct

// Define a proper type for your regions
type RegionType = {
  id: string;
  title: string;
  fact: string;
};

export default function FirebaseTest() {
  const [title, setTitle] = useState<string>("");
  const [fact, setFact] = useState<string>("");
  const [regions, setRegions] = useState<RegionType[]>([]);

  // Fetch regions from Firestore
  const fetchRegions = async () => {
    try {
      const snapshot = await getDocs(collection(db, "regions"));
      const regionsData: RegionType[] = snapshot.docs.map((doc) => {
        const data = doc.data() as Omit<RegionType, "id">;
        return { id: doc.id, ...data };
      });
      setRegions(regionsData);
    } catch (error) {
      console.error("Error fetching regions:", error);
    }
  };

  // Add a new region
  const handleAdd = async () => {
    if (!title.trim() || !fact.trim()) return;

    try {
      await addDoc(collection(db, "regions"), { title, fact });
      setTitle("");
      setFact("");
      fetchRegions();
    } catch (error) {
      console.error("Error adding region:", error);
    }
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
