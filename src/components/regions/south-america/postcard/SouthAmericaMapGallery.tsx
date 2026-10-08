"use client";

import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";

import { db } from "@/firebaseConfig";

type MapSubmission = {
  id: string;
  creatorName?: string;
  imageUrl: string;
  activity: string;
  status: string;
};

export default function SouthAmericaMapGallery() {
  const [maps, setMaps] = useState<MapSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMap, setSelectedMap] = useState<MapSubmission | null>(null);

  useEffect(() => {
    async function loadMaps() {
      try {
        const q = query(
          collection(db, "createYourLookSubmissions"),
          where("activity", "==", "south-america-postcard"),
          where("status", "==", "approved"),
          orderBy("createdAt", "desc"),
        );

        const snapshot = await getDocs(q);

        setMaps(
          snapshot.docs.map((document) => ({
            id: document.id,
            ...(document.data() as Omit<MapSubmission, "id">),
          })),
        );
      } catch (error) {
        console.error("Could not load South America maps:", error);
      } finally {
        setLoading(false);
      }
    }

    void loadMaps();
  }, []);

  return (
    <section className="border-t-[7px] border-[#211f1b] bg-[#153d2d] px-5 py-14 text-[#f4e5c4]">
      <div className="mx-auto max-w-[1500px]">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#f4c542]">
            Made at Fable
          </p>

          <h2 className="mt-2 text-4xl font-black uppercase sm:text-6xl">
            Map Gallery
          </h2>

          <p className="mt-4 max-w-2xl text-lg font-bold text-[#f4e5c4]/75">
            Explore South America maps created by students at Fable.
          </p>
        </div>

        {loading ? (
          <div className="mt-10 border-[4px] border-[#f4e5c4]/30 p-8 text-center font-black uppercase tracking-[0.15em]">
            Loading maps...
          </div>
        ) : maps.length === 0 ? (
          <div className="mt-10 border-[4px] border-dashed border-[#f4c542] bg-[#211f1b] p-10 text-center">
            <p className="text-2xl font-black uppercase">
              The gallery is waiting for its first map!
            </p>

            <p className="mt-2 font-bold text-[#f4e5c4]/70">
              Finish a map and submit it to Fable Culture.
            </p>
          </div>
        ) : (
          <div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {maps.map((map, index) => (
              <button
                key={map.id}
                type="button"
                onClick={() => setSelectedMap(map)}
                className={`block w-full cursor-zoom-in border-[5px] border-[#211f1b] bg-[#efe0ba] p-4 text-left text-[#211f1b] shadow-[8px_8px_0_#b84432] transition hover:-translate-y-1 hover:shadow-[11px_11px_0_#b84432] ${
                  index % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]"
                }`}
              >
                <div className="overflow-hidden border-[4px] border-[#211f1b] bg-white">
                  <img
                    src={map.imageUrl}
                    alt={`South America map by ${map.creatorName || "a Fable student"}`}
                    className="h-auto w-full"
                  />
                </div>

                <div className="mt-4 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#b84432]">
                      South America Map
                    </p>

                    <h3 className="mt-1 text-xl font-black uppercase">
                      {map.creatorName || "Anonymous"}
                    </h3>
                  </div>

                  <span className="rotate-[-4deg] border-[3px] border-[#211f1b] bg-[#f4c542] px-3 py-2 text-[10px] font-black uppercase">
                    Fable Culture
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {selectedMap && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#211f1b]/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedMap(null)}
          role="presentation"
        >
          <div
            className="relative max-h-[95vh] w-full max-w-5xl overflow-auto border-[5px] border-[#211f1b] bg-[#efe0ba] p-3 shadow-[10px_10px_0_#b84432] sm:p-5"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedMap(null)}
              className="absolute right-4 top-4 z-20 flex h-12 w-12 items-center justify-center border-[3px] border-[#211f1b] bg-[#f4c542] text-2xl font-black shadow-[3px_3px_0_#211f1b]"
              aria-label="Close enlarged map"
            >
              ×
            </button>

            <img
              src={selectedMap.imageUrl}
              alt={`South America map by ${
                selectedMap.creatorName || "a Fable student"
              }`}
              className="mx-auto max-h-[80vh] w-auto max-w-full border-[4px] border-[#211f1b] bg-white object-contain"
            />

            <div className="mt-4 pr-16">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#b84432]">
                South America Map
              </p>

              <p className="mt-1 text-2xl font-black uppercase text-[#211f1b]">
                By {selectedMap.creatorName || "Anonymous"}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
