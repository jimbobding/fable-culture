"use client";

import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/firebaseConfig";

interface ShowcaseEntry {
  id: string;
  studentName: string;
  project: string;
  description: string;
  imageName: string;
  imageUrl: string;
}

export default function ShowcasePage() {
  const [entries, setEntries] = useState<ShowcaseEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const snapshot = await getDocs(collection(db, "showcaseEntries"));
        const data: ShowcaseEntry[] = await Promise.all(
          snapshot.docs.map(async (doc) => {
            const item = doc.data() as Omit<ShowcaseEntry, "id" | "imageUrl">;
            let imageUrl = "";
            try {
              const imageRef = ref(
                storage,
                `showcase/${item.project}/${item.imageName}`
              );
              imageUrl = await getDownloadURL(imageRef);
            } catch (err) {
              console.warn(
                `Image not found for ${item.imageName} in project ${item.project}:`,
                err
              );
            }
            return { id: doc.id, ...item, imageUrl };
          })
        );
        console.log("All entries with URLs:", data);
        setEntries(data);
      } catch (err) {
        console.error("Error fetching showcase entries:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEntries();
  }, []);

  if (loading) return <p>Loading showcase...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {entries.map((entry) => (
        <div
          key={entry.id}
          className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
        >
          {entry.imageUrl ? (
            <img
              src={entry.imageUrl}
              alt={entry.project}
              className="w-full h-48 object-cover"
            />
          ) : (
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
              Image not found
            </div>
          )}
          <div className="p-4">
            <h2 className="font-semibold text-lg">{entry.project}</h2>
            <p className="text-gray-700">{entry.description}</p>
            <p className="text-sm text-gray-500">By: {entry.studentName}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
