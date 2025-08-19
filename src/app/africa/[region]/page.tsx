"use client";

import { useEffect, useState } from "react";
import { africaRegions, RegionKey } from "@/data/africaRegions";
import { db } from "@/firebaseConfig";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation"; // <-- dynamic params

export default function RegionPage() {
  const params = useParams();
  const regionKey = params?.region as RegionKey;
  const localRegion = africaRegions[regionKey];

  const [newFact, setNewFact] = useState("");
  const [addedFacts, setAddedFacts] = useState<string[]>([]);

  useEffect(() => {
    if (!regionKey) return;
    const fetchFacts = async () => {
      const q = query(
        collection(db, "regionFacts"),
        where("regionKey", "==", regionKey)
      );
      const snapshot = await getDocs(q);
      setAddedFacts(snapshot.docs.map((doc) => doc.data().fact as string));
    };
    fetchFacts();
  }, [regionKey]);

  const handleAddFact = async () => {
    if (!newFact) return;
    await addDoc(collection(db, "regionFacts"), { regionKey, fact: newFact });
    setNewFact("");
    const snapshot = await getDocs(
      query(collection(db, "regionFacts"), where("regionKey", "==", regionKey))
    );
    setAddedFacts(snapshot.docs.map((doc) => doc.data().fact as string));
  };

  if (!localRegion) return <p>Region not found</p>;

  const topFacts: string[] = Array.isArray(localRegion.fact)
    ? localRegion.fact
    : [localRegion.fact];

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div
        className="flex-1 p-8 flex flex-col"
        style={{ background: localRegion.color }}
      >
        <h1 className="text-5xl font-extrabold mb-6">{localRegion.title}</h1>

        <h2 className="text-2xl font-semibold mb-2">Countries</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {localRegion.countries.map((country, i) => (
            <span
              key={i}
              className="bg-white text-gray-800 px-3 py-1 rounded-full shadow-sm text-sm"
            >
              {country}
            </span>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-2">Top Facts</h2>
        <ul className="list-disc pl-5 mb-6">
          {topFacts.map((fact, i) => (
            <li key={i}>{fact}</li>
          ))}
        </ul>

        {addedFacts.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Additional Facts</h3>
            <ul className="list-disc pl-5">
              {addedFacts.map((fact, i) => (
                <li key={i}>{fact}</li>
              ))}
            </ul>
          </div>
        )}

        <input
          type="text"
          placeholder="Add a new fact"
          value={newFact}
          onChange={(e) => setNewFact(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <button
          onClick={handleAddFact}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Fact
        </button>

        <Link
          href="/africa"
          className="bg-gray-700 text-white px-4 py-2 rounded mt-4 inline-block"
        >
          ← Back to Regions
        </Link>
      </div>

      <div className="flex-1 p-8 bg-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {localRegion.images.map((img, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl shadow-lg relative"
          >
            <Image
              src={img}
              alt={`${localRegion.title} image ${i + 1}`}
              width={500}
              height={320}
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
