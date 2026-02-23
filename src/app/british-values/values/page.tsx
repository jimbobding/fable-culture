// src/app/british-values/values/page.tsx
import Link from "next/link";
import { britishValues, BritishValueKey } from "@/data/britishValues";
import type { JSX } from "react";

const valueIcons: Record<BritishValueKey, JSX.Element> = {
  democracy: <span className="text-6xl">⚖️</span>,
  "rule-of-law": <span className="text-6xl">📜</span>,
  "individual-liberty": <span className="text-6xl">🕊️</span>,
  "mutual-respect": <span className="text-6xl">🤝</span>,
  "tolerance-of-faiths": <span className="text-6xl">🕌</span>,
};

export default function BritishValuesOverview() {
  const valueKeys = Object.keys(britishValues) as BritishValueKey[];

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-10">
        🇬🇧 British Values
      </h1>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {valueKeys.map((key) => {
          const value = britishValues[key];

          return (
            <Link
              key={key}
              href={`/british-values/values/${key}`}
              className="group relative bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center justify-between transition-transform hover:scale-105"
              style={{ borderTop: `4px solid ${value.theme.primary}` }}
            >
              <div
                className="mb-4 p-5 rounded-full"
                style={{ backgroundColor: value.theme.accent + "33" }}
              >
                {valueIcons[key]}
              </div>

              <h2 className="text-xl font-semibold mb-2">{value.title}</h2>

              <p className="text-gray-700 mb-6">{value.intro}</p>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-30 transition" />
            </Link>
          );
        })}
      </div>

      {/* Back Link */}
      <div className="mt-10 text-center">
        <Link
          href="/british-values/"
          className="inline-block bg-gray-700 text-white px-6 py-3 rounded hover:bg-gray-800 transition"
        >
          ← Back to UK Overview
        </Link>
      </div>
    </main>
  );
}
