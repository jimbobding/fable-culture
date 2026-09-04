"use client";

import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import type { CultureKitchenTheme } from "./types";

type KitchenCreation = {
  id: string;
  creatorName: string;
  dishName: string;
  inspiration: string;
  description: string;
  keyIngredients: string;
  adaptation: string;
  makeAgain: "yes" | "maybe" | "no";
  imageUrl?: string;
  region: string;
};

type Props = {
  region: string;
  theme: CultureKitchenTheme;
};

export default function CultureKitchenGallery({ region, theme }: Props) {
  const [creations, setCreations] = useState<KitchenCreation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(
      collection(db, "cultureKitchenSubmissions"),
      where("status", "==", "approved"),
      where("region", "==", region),
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as KitchenCreation[];

        setCreations(data);
        setLoading(false);
      },
      (error) => {
        console.error("Could not load Culture Kitchen creations:", error);
        setLoading(false);
      },
    );

    return () => unsubscribe();
  }, [region]);

  if (loading) {
    return (
      <p
        className="text-center font-semibold"
        style={{ color: theme.mutedText }}
      >
        Loading our Culture Kitchen...
      </p>
    );
  }

  if (creations.length === 0) {
    return (
      <div
        className="border border-dashed p-8 text-center"
        style={{
          borderColor: theme.border,
          backgroundColor: theme.surfaceAlt,
          boxShadow: theme.featureShadow,
        }}
      >
        <p className="text-4xl">🍽️</p>

        <h3 className="mt-3 text-2xl font-black" style={{ color: theme.text }}>
          Nothing here yet...
        </h3>

        <p className="mx-auto mt-2 max-w-xl" style={{ color: theme.mutedText }}>
          Once we start cooking, our own inspired creations will appear here.
        </p>
      </div>
    );
  }

  return (
    <section className="space-y-10">
      {/* HEADING */}
      <div className="mx-auto max-w-3xl text-center">
        <div
          className="mx-auto mb-5 h-[2px] w-16"
          style={{ backgroundColor: theme.tertiary }}
        />

        <p
          className="text-xs font-black uppercase tracking-[0.35em]"
          style={{ color: theme.tertiary }}
        >
          🍴 Created by us
        </p>

        <h2
          className="mt-3 text-4xl font-black sm:text-5xl"
          style={{ color: theme.text }}
        >
          Made in our Culture Kitchen
        </h2>

        <p
          className="mx-auto mt-4 max-w-2xl leading-relaxed"
          style={{ color: theme.mutedText }}
        >
          See dishes we've cooked and creations inspired by the food and
          flavours we've been exploring.
        </p>
      </div>

      {/* CREATIONS */}
      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {creations.map((creation, index) => {
          const cardAccent = index % 2 === 0 ? theme.tertiary : theme.secondary;

          return (
            <article
              key={creation.id}
              className="group relative overflow-hidden border transition-all duration-300 hover:-translate-y-1"
              style={{
                borderColor: theme.border,
                backgroundColor: theme.surface,
                boxShadow: theme.cardShadow,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = theme.cardHoverShadow;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = theme.cardShadow;
              }}
            >
              {/* IMAGE */}
              <div
                className="relative h-60 overflow-hidden"
                style={{ backgroundColor: theme.surfaceAlt }}
              >
                {creation.imageUrl ? (
                  <img
                    src={creation.imageUrl}
                    alt={creation.dishName}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-6xl">
                    🍜
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                <div
                  className="absolute bottom-0 left-0 h-1 w-full"
                  style={{
                    background: `linear-gradient(to right, ${cardAccent}, ${theme.accent})`,
                  }}
                />

                <span
                  className="absolute left-4 top-4 border px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] backdrop-blur"
                  style={{
                    backgroundColor: `${theme.surface}E8`,
                    borderColor: theme.border,
                    color: cardAccent,
                  }}
                >
                  Inspired by {creation.inspiration}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3
                  className="text-2xl font-black"
                  style={{ color: theme.text }}
                >
                  {creation.dishName}
                </h3>

                <p
                  className="mt-1 text-sm font-semibold"
                  style={{ color: theme.mutedText }}
                >
                  Created by {creation.creatorName}
                </p>

                {creation.description && (
                  <p
                    className="mt-4 leading-relaxed"
                    style={{ color: theme.text }}
                  >
                    {creation.description}
                  </p>
                )}

                {/* INGREDIENTS */}
                {creation.keyIngredients && (
                  <div
                    className="mt-5 border-l-4 p-4"
                    style={{
                      borderColor: cardAccent,
                      backgroundColor: `${cardAccent}10`,
                    }}
                  >
                    <p
                      className="text-xs font-black uppercase tracking-[0.16em]"
                      style={{ color: cardAccent }}
                    >
                      Key ingredients & flavours
                    </p>

                    <p
                      className="mt-2 text-sm leading-relaxed"
                      style={{ color: theme.text }}
                    >
                      {creation.keyIngredients}
                    </p>
                  </div>
                )}

                {/* ADAPTATION */}
                {creation.adaptation && (
                  <div
                    className="mt-5 border-t pt-4"
                    style={{ borderColor: theme.softBorder }}
                  >
                    <p
                      className="text-sm font-black"
                      style={{ color: theme.secondary }}
                    >
                      ✨ How we made it our own
                    </p>

                    <p
                      className="mt-2 text-sm leading-relaxed"
                      style={{ color: theme.mutedText }}
                    >
                      {creation.adaptation}
                    </p>
                  </div>
                )}

                {/* MAKE AGAIN */}
                <div
                  className="mt-5 border-t pt-4"
                  style={{ borderColor: theme.softBorder }}
                >
                  <p className="font-bold" style={{ color: theme.text }}>
                    {creation.makeAgain === "yes" && "😍 We'd make this again!"}

                    {creation.makeAgain === "maybe" &&
                      "🤔 Maybe we'd make it again."}

                    {creation.makeAgain === "no" &&
                      "😬 Probably not one for next time!"}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
