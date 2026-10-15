"use client";

import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import type { CultureKitchenTheme } from "./types";

type KitchenCreation = {
  id: string;
  creatorName?: string;
  dishName?: string;
  inspiration?: string;
  description?: string;
  keyIngredients?: string;
  adaptation?: string;
  makeAgain?: "yes" | "maybe" | "no";
  imageUrl?: string;
  recipeUrl?: string;
  recipeFileUrl?: string;
  recipeSteps?: string;
  region: string;
};

type Props = {
  region: string;
  theme: CultureKitchenTheme;
};

function safeUrl(value?: string): string {
  if (!value) return "";
  try {
    const url = new URL(value);
    return ["https:", "http:"].includes(url.protocol) ? url.href : "";
  } catch {
    return "";
  }
}

export default function CultureKitchenGallery({ region, theme }: Props) {
  const [creations, setCreations] = useState<KitchenCreation[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<KitchenCreation | null>(null);

  useEffect(() => {
    const q = query(
      collection(db, "cultureKitchenSubmissions"),
      where("status", "==", "approved"),
      where("region", "==", region)
    );

    return onSnapshot(q, snapshot => {
      setCreations(snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as KitchenCreation[]);
      setLoading(false);
    }, error => {
      console.error("Could not load Culture Kitchen:", error);
      setLoading(false);
    });
  }, [region]);

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selected]);

  if (loading) {
    return <p style={{ color: theme.mutedText }}>
      Loading our Culture Kitchen...
    </p>;
  }

  return (
    <section className="space-y-8">
      <div className="text-center">
        <p className="text-xs font-black uppercase tracking-widest"
          style={{ color: theme.tertiary }}>
          🍴 Created by us
        </p>
        <h2 className="mt-3 text-3xl font-black sm:text-4xl"
          style={{ color: theme.text }}>
          Made in our Culture Kitchen
        </h2>
        <p className="mt-3" style={{ color: theme.mutedText }}>
          Explore our dishes and open each recipe to find out more.
        </p>
      </div>

      {creations.length === 0 ? (
        <div className="rounded-2xl border border-dashed p-8 text-center"
          style={{
            borderColor: theme.border,
            backgroundColor: theme.surfaceAlt
          }}>
          <p className="text-4xl">🍽️</p>
          <h3 className="mt-3 text-xl font-black"
            style={{ color: theme.text }}>
            Nothing here yet...
          </h3>
          <p className="mt-2" style={{ color: theme.mutedText }}>
            Our approved recipes will appear here.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {creations.map(creation => (
            <article key={creation.id}
              className="flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border"
              style={{
                backgroundColor: theme.surface,
                borderColor: theme.border,
                boxShadow: theme.cardShadow
              }}>
              <div className="aspect-[4/3] w-full overflow-hidden"
                style={{ backgroundColor: theme.surfaceAlt }}>
                {safeUrl(creation.imageUrl) ? (
                  <img src={safeUrl(creation.imageUrl)}
                    alt={creation.dishName || "Recipe"}
                    className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full items-center justify-center text-4xl">
                    🍲
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-3">
                <h3 className="line-clamp-2 min-h-[2.5rem] text-sm font-black"
                  style={{ color: theme.text }}>
                  {creation.dishName || "Untitled recipe"}
                </h3>
                <p className="mt-1 truncate text-xs"
                  style={{ color: theme.mutedText }}>
                  🌎 {creation.inspiration || "Culture Kitchen"}
                </p>
                <p className="mt-1 truncate text-xs"
                  style={{ color: theme.mutedText }}>
                  By {creation.creatorName || "Our kitchen"}
                </p>

                <button type="button"
                  onClick={() => setSelected(creation)}
                  className="mt-auto w-full rounded-xl px-2 py-2.5 text-xs font-black"
                  style={{
                    backgroundColor: theme.primary,
                    color: theme.surface,
                    marginTop: "16px"
                  }}>
                  Open Recipe
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-3 sm:p-6"
          onMouseDown={event => {
            if (event.target === event.currentTarget) setSelected(null);
          }}
        >
          <div role="dialog" aria-modal="true"
            aria-label={selected.dishName || "Recipe"}
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl p-5 shadow-2xl sm:p-8"
            style={{ backgroundColor: theme.surface, color: theme.text }}>

            <button type="button"
              onClick={() => setSelected(null)}
              aria-label="Close recipe"
              className="absolute right-4 top-4 z-10 rounded-full border px-3 py-2 font-black"
              style={{
                backgroundColor: theme.surface,
                borderColor: theme.border,
                color: theme.text
              }}>
              ✕
            </button>

            {safeUrl(selected.imageUrl) && (
              <img src={safeUrl(selected.imageUrl)}
                alt={selected.dishName || "Recipe"}
                className="mb-5 max-h-72 w-full rounded-2xl object-cover" />
            )}

            <h2 className="pr-12 text-3xl font-black">
              {selected.dishName || "Untitled recipe"}
            </h2>
            <p className="mt-2" style={{ color: theme.mutedText }}>
              🌎 {selected.inspiration} · By {selected.creatorName}
            </p>

            {selected.keyIngredients && (
              <div className="mt-6">
                <h3 className="text-lg font-black">🥕 Ingredients</h3>
                <p className="mt-2 whitespace-pre-line">
                  {selected.keyIngredients}
                </p>
              </div>
            )}

            {(selected.recipeSteps || selected.description) && (
              <div className="mt-6">
                <h3 className="text-lg font-black">👩‍🍳 Recipe / Instructions</h3>
                <p className="mt-2 whitespace-pre-line">
                  {selected.recipeSteps || selected.description}
                </p>
              </div>
            )}

            {selected.adaptation && (
              <div className="mt-6">
                <h3 className="text-lg font-black">✨ Our own twist</h3>
                <p className="mt-2 whitespace-pre-line">
                  {selected.adaptation}
                </p>
              </div>
            )}

            {selected.makeAgain && (
              <p className="mt-6 font-semibold">
                {selected.makeAgain === "yes" && "😍 We'd make this again!"}
                {selected.makeAgain === "maybe" && "🤔 Maybe we'd make it again."}
                {selected.makeAgain === "no" && "😬 Probably not next time!"}
              </p>
            )}

            {safeUrl(selected.recipeUrl) && (
              <a href={safeUrl(selected.recipeUrl)}
                target="_blank" rel="noopener noreferrer"
                className="mt-6 inline-block rounded-full px-6 py-3 font-black"
                style={{
                  backgroundColor: theme.primary,
                  color: theme.surface
                }}>
                🔗 View Original Recipe ↗
              </a>
            )}

            {safeUrl(selected.recipeFileUrl) && (
              <a href={safeUrl(selected.recipeFileUrl)}
                target="_blank" rel="noopener noreferrer"
                className="mt-4 inline-block rounded-full border px-6 py-3 font-black"
                style={{
                  borderColor: theme.primary,
                  color: theme.text
                }}>
                📎 Open Attached Recipe ↗
              </a>
            )}

            <div className="mt-8 border-t pt-5"
              style={{ borderColor: theme.border }}>
              <button type="button"
                onClick={() => setSelected(null)}
                className="rounded-full px-6 py-3 font-bold"
                style={{
                  backgroundColor: theme.surfaceAlt,
                  color: theme.text
                }}>
                ← Back to Recipes
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
