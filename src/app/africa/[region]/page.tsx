"use client";

import { useEffect, useState } from "react";
import { africaRegions, RegionKey } from "@/data/africaRegions";
import { db } from "@/firebaseConfig";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function RegionPage() {
  const params = useParams();
  const regionKey = params?.region as RegionKey;
  const localRegion = africaRegions[regionKey];

  const [newFact, setNewFact] = useState("");
  const [addedFacts, setAddedFacts] = useState<string[]>([]);
  const [isPending, setIsPending] = useState(false);

  const continent = "africa";

  useEffect(() => {
    if (!regionKey) return;
    const fetchFacts = async () => {
      const q = query(
        collection(db, "regionFacts"),
        where("regionKey", "==", regionKey),
        where("continent", "==", continent), // ✅ filter by continent
        where("status", "==", "approved"),
      );
      const snapshot = await getDocs(q);
      setAddedFacts(snapshot.docs.map((doc) => doc.data().fact as string));
    };
    fetchFacts();
  }, [regionKey]);

  const handleAddFact = async () => {
    if (!newFact.trim()) return;
    setIsPending(true); // start pending state
    await addDoc(collection(db, "regionFacts"), {
      regionKey,
      continent, // ✅ include continent
      fact: newFact,
      status: "pending",
      createdAt: new Date(),
    });

    setNewFact("");
    setIsPending(true); // keep showing the pending message
  };

  if (!localRegion) return <p>Region not found</p>;

  const headingShadow = "2px 2px 4px rgba(0,0,0,0.5)";

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* ---------------- LEFT COLUMN: REGION INFO ---------------- */}
      <div
        className="lg:w-1/2 p-8 flex flex-col"
        style={{ background: localRegion.color }}
      >
        <h1
          className="text-5xl font-extrabold mb-6 text-center"
          style={{
            color: localRegion.color,
            textShadow: headingShadow,
            WebkitTextStroke: "1px black",
          }}
        >
          {localRegion.title}
        </h1>

        <h2
          className="text-2xl font-semibold mb-4 text-center"
          style={{ textShadow: headingShadow }}
        >
          Countries
        </h2>
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {localRegion.countries.map((country, i) => (
            <span
              key={i}
              className="bg-white text-gray-800 px-3 py-1 rounded-full shadow-sm text-sm"
            >
              {country.emojiFlag} {country.name}
            </span>
          ))}
        </div>

        <h2
          className="text-2xl font-semibold mb-6 text-center"
          style={{ textShadow: headingShadow }}
        >
          Top Facts
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 mb-12">
          {localRegion.fact.map((fact, i) => (
            <div
              key={i}
              className="rounded-xl bg-white/80 backdrop-blur-md p-4 shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5"
            >
              <p className="text-gray-800 text-sm font-medium">{fact}</p>
            </div>
          ))}
        </div>

        {addedFacts.length > 0 && (
          <section className="mt-12">
            <h3
              className="text-2xl font-bold mb-6 text-center"
              style={{ textShadow: headingShadow }}
            >
              Things We’ve Learned
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {addedFacts.map((fact, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-white/70 backdrop-blur-md p-4 shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5"
                >
                  <p className="text-gray-800 text-sm font-medium">{fact}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Add New Fact */}
        <div className="mt-12 mb-6 rounded-2xl border border-black/5 bg-white/80 backdrop-blur p-4 shadow-sm">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Add a New Fact
          </label>
          <p mb-02>
            <strong>
              Remember to check your sources. Be aware of misinformation and
              disinformation
            </strong>
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="e.g., The Sahel is a semi-arid belt south of the Sahara."
              value={newFact}
              onChange={(e) => setNewFact(e.target.value)}
              className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleAddFact}
              className="shrink-0 rounded-xl bg-blue-600 px-4 py-2 font-semibold text-white shadow hover:bg-blue-700 transition"
            >
              Add
            </button>
          </div>
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

          {/* ✅ Pending Submission Message */}
          {isPending && (
            <p className="mt-2 text-sm text-yellow-700 font-medium">
              Your submission is pending approval. It will appear once reviewed.
            </p>
          )}
        </div>

        {localRegion.music && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2 text-center">
              Listen to Music
            </h3>
            <audio controls className="w-full rounded-lg">
              <source src={localRegion.music} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}

        <Link
          href="/africa"
          className="bg-gray-700 text-white px-4 py-2 rounded mt-4 inline-block text-center"
        >
          ← Back to Regions
        </Link>
      </div>

      {/* ---------------- RIGHT COLUMN: IMAGE GRID ---------------- */}
      <div className="lg:w-1/2 p-8 lg:pl-4 bg-gray-100 grid grid-cols-2 gap-4">
        {localRegion.images.map((img, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl shadow-lg relative transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ height: "200px" }}
          >
            <Image
              src={img.src}
              alt={img.caption}
              fill
              className="object-cover w-full h-full rounded-xl"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm font-semibold px-2 py-1 rounded bg-black/50 text-center">
                {img.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
