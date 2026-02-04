// src/components/region/RegionContent.tsx
"use client";

import { useState } from "react";

export type CountryFact = {
  name: string;
  capital?: string;
  languages?: string[];
  note?: string;
  flag?: string;
  population?: number;
};

export type RegionData = {
  countries: CountryFact[];
};

type RegionContentProps = {
  data: RegionData;
};

export default function RegionContent({ data }: RegionContentProps) {
  return (
    <section className="px-8 py-16 space-y-12">
      <div>
        <h2 className="text-2xl mb-4">Modern countries</h2>
        <ul className="space-y-2">
          {data.countries.map((country) => (
            <CountryDropdown key={country.name} country={country} />
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl mb-2">Cultural facts</h2>
        {/* Future FactsSection or Firestore data for region */}
      </div>

      <div>
        <h2 className="text-2xl mb-2">Gallery</h2>
        {/* Gallery can be added here */}
      </div>
    </section>
  );
}

function CountryDropdown({ country }: { country: CountryFact }) {
  const [open, setOpen] = useState(false);

  return (
    <li className="border rounded p-4 bg-white shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left font-semibold flex justify-between items-center"
      >
        {country.name} <span>{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="mt-2 pl-4 text-gray-700 space-y-1">
          {country.capital && (
            <p>
              <strong>Capital:</strong> {country.capital}
            </p>
          )}
          {country.languages && (
            <p>
              <strong>Languages:</strong> {country.languages.join(", ")}
            </p>
          )}
          {country.note && <p>{country.note}</p>}
          {country.flag && (
            <p className="text-2xl select-none">{country.flag}</p>
          )}
          {country.population && (
            <p>
              <strong>Population:</strong> {country.population.toLocaleString()}
            </p>
          )}
        </div>
      )}
    </li>
  );
}
