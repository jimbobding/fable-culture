// src/app/british-values/values/page.tsx
import Link from "next/link";
import { britishValues, BritishValueKey } from "@/data/britishValues";

// Demo icons (replace with animations/SVGs later)
const valueIcons: Record<BritishValueKey, JSX.Element> = {
  democracy: <span className="text-6xl">⚖️</span>,
  "rule-of-law": <span className="text-6xl">📜</span>,
  "individual-liberty": <span className="text-6xl">🕊️</span>,
  "mutual-respect": <span className="text-6xl">🤝</span>,
  "tolerance-of-faiths": <span className="text-6xl">🕌</span>,
};

export default function BritishValuesOverview() {
  const valueKeys = Object.keys(britishValues) as BritishValueKey[];

  // Split into rows of max 3 cards
  const topRow = valueKeys.slice(0, 3);
  const bottomRow = valueKeys.slice(3);

  const renderRow = (row: BritishValueKey[]) => (
    <div className={`flex justify-center gap-6 mb-6`}>
      {row.map((key) => {
        const value = britishValues[key];
        return (
          <Link
            key={key}
            href={`/british-values/values/${key}`}
            className="group relative bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-between text-center overflow-hidden hover:scale-105 transition-transform"
            style={{
              borderTop: `4px solid ${value.theme.primary}`,
              height: "320px", // fixed height
              minWidth: "320px", // ensures minimum width
              maxWidth: "260px", // keeps cards consistent
              width: "100%", // allows flex/grid to scale
            }}
          >
            <div
              className="mb-4 p-4 rounded-full"
              style={{ backgroundColor: value.theme.accent + "33" }}
            >
              {valueIcons[key]}
            </div>
            <h2 className="text-xl font-semibold mb-2">{value.title}</h2>
            <p className="text-gray-700">{value.intro}</p>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-40 transition" />
          </Link>
        );
      })}
    </div>
  );

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-center mb-10">
        🇬🇧 British Values
      </h1>

      {renderRow(topRow)}
      {bottomRow.length > 0 && renderRow(bottomRow)}

      {/* Back Link */}
      <div className="mt-8 text-center">
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
