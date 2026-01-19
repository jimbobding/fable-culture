// src/app/british-values/uk/page.tsx
import Link from "next/link";
import { ukCountries } from "@/data/ukCountries";

export default function UKOverviewPage() {
  const countryKeys = Object.keys(ukCountries);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-10">🇬🇧 UK Countries</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center max-w-4xl mx-auto">
        {countryKeys.map((key) => {
          const country = ukCountries[key as keyof typeof ukCountries];
          return (
            <Link
              key={key}
              href={`/british-values/uk/${key}`}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center transition hover:scale-105"
              style={{ minWidth: "220px", minHeight: "250px" }}
            >
              <img
                src={country.heroImage}
                alt={`${country.title} flag`}
                className="w-20 h-20 mb-4 object-contain"
              />
              <h2 className="text-xl font-semibold mb-2">{country.title}</h2>
              <p className="text-gray-700">{country.intro}</p>
            </Link>
          );
        })}
      </div>

      {/* Back Link */}
      <div className="mt-8 text-center">
        <Link
          href="/british-values"
          className="inline-block bg-gray-700 text-white px-6 py-3 rounded hover:bg-gray-800 transition"
        >
          ← Back to British Values Home
        </Link>
      </div>
    </main>
  );
}
