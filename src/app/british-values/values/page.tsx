import Link from "next/link";
import { valuesContent, BritishValueKey } from "@/data/britishValues";

const valueKeys: BritishValueKey[] = [
  "democracy",
  "rule-of-law",
  "individual-liberty",
  "mutual-respect",
  "tolerance",
];

export default function BritishValuesOverview() {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-8">🇬🇧 British Values</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {valueKeys.map((key) => {
          const value = valuesContent[key];
          return (
            <Link
              key={key}
              href={`/british-values/values/${key}`}
              className="p-6 rounded-xl shadow-lg bg-white flex flex-col items-center justify-center text-center hover:scale-105 transition"
            >
              <span className="text-4xl mb-3">{value.icon}</span>
              <h2 className="text-2xl font-bold mb-1">{value.title}</h2>
              <p className="text-gray-700 text-sm">{value.description}</p>
            </Link>
          );
        })}
      </div>

      <div className="mt-6 text-center">
        <Link
          href="/british-values"
          className="px-6 py-3 rounded bg-gray-700 text-white hover:bg-gray-800 transition inline-block"
        >
          ← Back to British Values Home
        </Link>
      </div>
    </div>
  );
}
