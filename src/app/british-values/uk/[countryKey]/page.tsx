// src/app/british-values/uk/[countryKey]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { ukCountries } from "@/data/ukCountries";
import FactsSection from "@/components/FactsSection";
import CountryGallery from "@/components/CountryGallery";

type Props = {
  params: Promise<{ countryKey: keyof typeof ukCountries }>;
};

export default async function UKCountryPage({ params }: Props) {
  // Await the params object
  const { countryKey } = await params;
  const country = ukCountries[countryKey];

  if (!country) return <div>Country not found</div>;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative h-[25vh] sm:h-[35vh] w-full flex items-center justify-center"
        style={{ backgroundColor: country.theme.primary }}
      >
        <Image
          src={country.heroImage}
          alt={country.title}
          fill
          className="object-cover opacity-60"
        />
        <h1 className="absolute text-4xl sm:text-6xl font-bold text-white drop-shadow-lg">
          {country.title}
        </h1>
      </div>
      <div className="max-w-5xl mx-auto p-10">
        {/* Intro */}
        <p className="text-lg text-gray-700 mb-8">{country.intro}</p>

        {/* Quick Facts */}
        <section className="bg-white rounded-xl shadow p-6 mb-10">
          <h2 className="text-2xl font-semibold mb-4">Quick Facts</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {country.quickFacts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </section>

        {/* Gallery */}
        <CountryGallery gallery={country.gallery} theme={country.theme} />

        {/* Firebase Facts Section */}
        <FactsSection continent="uk" regionKey={countryKey} />

        {/* Back Link */}
        {/* Themed Back Link */}
        <div className="mt-8 text-center">
          <Link
            href="/british-values/uk"
            className="inline-block px-6 py-3 rounded font-semibold text-white transition transform hover:scale-105"
            style={{ backgroundColor: country.theme.primary }}
          >
            ← Back to UK Overview
          </Link>
        </div>
      </div>
      x
    </main>
  );
}
