"use client";

import { useEffect, useState } from "react";
import { africaRegions } from "@/data/africaRegions";
import { db } from "@/firebaseConfig";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import Link from "next/link";
import Image from "next/image";

// Client-side props type
interface RegionPageProps {
  params: { region: keyof typeof africaRegions };
}

export default function RegionPage({ params }: RegionPageProps) {
  const regionKey = params.region;
  const localRegion = africaRegions[regionKey];

  const [newFact, setNewFact] = useState("");
  const [addedFacts, setAddedFacts] = useState<string[]>([]);

  // Fetch Firestore facts for this region
  useEffect(() => {
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

  // Add a new fact
  const handleAddFact = async () => {
    if (!newFact) return;
    await addDoc(collection(db, "regionFacts"), {
      regionKey,
      fact: newFact,
    });
    setNewFact("");
    const snapshot = await getDocs(
      query(collection(db, "regionFacts"), where("regionKey", "==", regionKey))
    );
    setAddedFacts(snapshot.docs.map((doc) => doc.data().fact as string));
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
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Static Data */}
      <div
        className="flex-1 p-8 flex flex-col justify-start"
        style={{ background: localRegion.color }}
      >
        <h1
          className="text-5xl font-extrabold mb-6"
          style={{ color: localRegion.color }}
        >
          {localRegion.title}
        </h1>

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
              <li key={i} className="mb-1">
                {fact}
              </li>
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
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Add Fact
          </button>
        </div>

        <div>
          <Link
            href="/africa"
            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition mt-4 inline-block text-center"
          >
            ← Back to Regions
          </Link>
        </div>
      </div>

      {/* Right Side - Image Gallery */}
      <div className="flex-1 h-full p-8 bg-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {localRegion.images.map((img, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 relative"
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
