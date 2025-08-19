"use client";

import { useEffect, useState } from "react";
import { africaRegions } from "@/data/africaRegions";
import { db } from "@/firebaseConfig";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import Link from "next/link";
import Image from "next/image";

interface RegionFact {
  regionKey: string;
  fact: string;
}

interface RegionPageProps {
  params: { region: keyof typeof africaRegions };
}

export default function RegionPage({ params }: RegionPageProps) {
  const regionKey = params.region;
  const localRegion = africaRegions[regionKey];

  const [newFact, setNewFact] = useState("");
  const [addedFacts, setAddedFacts] = useState<string[]>([]);

  // Fetch Firestore facts
  useEffect(() => {
    const fetchFacts = async () => {
      const q = query(
        collection(db, "regionFacts"),
        where("regionKey", "==", regionKey)
      );
      const snapshot = await getDocs(q);
      setAddedFacts(
        snapshot.docs.map((doc) => (doc.data() as RegionFact).fact)
      );
    };
    fetchFacts();
  }, [regionKey]);

  const handleAddFact = async () => {
    if (!newFact) return;
    await addDoc(collection(db, "regionFacts"), { regionKey, fact: newFact });
    setNewFact("");
    // Refresh
    const snapshot = await getDocs(
      query(collection(db, "regionFacts"), where("regionKey", "==", regionKey))
    );
    setAddedFacts(snapshot.docs.map((doc) => (doc.data() as RegionFact).fact));
  };

  if (!localRegion) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <p className="text-xl text-red-600">Region not found</p>
      </div>
    );
  }

  const topFacts: string[] = Array.isArray(localRegion.fact)
    ? localRegion.fact
    : [localRegion.fact];

  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative">
      {/* Left Side */}
      <div
        className="flex-1 p-8 lg:p-12 flex flex-col justify-start"
        style={{ background: localRegion.color }}
      >
        <h1 className="text-5xl font-extrabold mb-6">{localRegion.title}</h1>

        <h2 className="text-2xl font-semibold mb-2">Countries</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {localRegion.countries.map((country, i) => (
            <span
              key={i}
              className="bg-white text-gray-800 px-3 py-1 rounded-full shadow-sm text-sm hover:scale-105 transition"
            >
              {country}
            </span>
          ))}
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Top Facts</h2>
          <ul className="list-disc pl-5">
            {topFacts.map((fact, i) => (
              <li key={i}>{fact}</li>
            ))}
          </ul>
        </div>

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

        <div className="mb-6">
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
        </div>

        <div>
          <Link href="/africa">
            <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition mt-4">
              ← Back to Regions
            </button>
          </Link>
        </div>
      </div>

      {/* Right Side - Images */}
      <div className="flex-1 h-full p-8 bg-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {localRegion.images.map((img, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 relative h-64"
          >
            <Image
              src={img}
              alt={`${localRegion.title} image ${i + 1}`}
              fill
              className="object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
