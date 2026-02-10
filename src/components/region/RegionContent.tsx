"use client";

import { useState } from "react";
import Gallery from "@/components/Gallery";
import Timeline from "@/components/Timeline";
import FactsSection from "@/components/FactsSection";
import { levantTimeline } from "@/data/middleEast/levantTimeline";

// ---------- Type Definitions ----------
export type CountryFact = {
  name: string;
  capital?: string;
  languages?: string[];
  population?: string;
  note?: string;
  extra?: string; // Dish + religion
  flag?: string;
};

export type RegionData = {
  region: string;
  countries: CountryFact[];
};

type RegionContentProps = {
  data: RegionData;
  gallery: { src: string; label: string }[];
  continent: string; // NEW: needed for FactsSection
  regionKey: string; // NEW: needed for FactsSection
};

// ---------- Main RegionContent Component ----------
export default function RegionContent({
  data,
  gallery,
  continent,
  regionKey,
}: RegionContentProps) {
  return (
    <section className="px-8 py-16 space-y-16">
      {/* Timeline */}
      <section className="px-8 py-12 bg-gray-50 rounded-lg shadow-inner">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Historical Timeline
        </h2>
        <Timeline items={levantTimeline} />
      </section>

      {/* Modern countries */}
      <div>
        <h2 className="text-2xl mb-4 text-center">Modern countries</h2>
        <ul className="space-y-4">
          {data.countries.map((country) => (
            <CountryDropdown key={country.name} country={country} />
          ))}
        </ul>
      </div>

      {/* FactsSection */}
      <section className="px-8 py-12 bg-gray-50 rounded-lg shadow-inner">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Cultural Facts
        </h2>
        <FactsSection continent={continent} regionKey={regionKey} />
      </section>

      {/* Gallery */}
      <div>
        <h2 className="text-2xl mb-2 text-center">Gallery</h2>
        <Gallery
          images={gallery.map((img) => img.src)}
          captions={gallery.map((img) => img.label)}
          columns={3}
          hoverEffect="scale"
          showCaptionOnHover={true}
        />
      </div>
    </section>
  );
}

// ---------- Country Dropdown Component ----------
function CountryDropdown({ country }: { country: CountryFact }) {
  const [open, setOpen] = useState(false);

  return (
    <li className="border rounded-lg p-4 bg-white shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left font-semibold flex justify-between items-center"
      >
        <span>
          {country.flag ? country.flag + " " : ""}
          {country.name}
        </span>
        <span>{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="mt-2 pl-4 text-gray-700 space-y-1">
          {country.capital && (
            <p>
              <strong>Capital:</strong> {country.capital}
            </p>
          )}
          {country.languages && country.languages.length > 0 && (
            <p>
              <strong>Languages:</strong> {country.languages.join(", ")}
            </p>
          )}
          {country.population && (
            <p>
              <strong>Population:</strong> {country.population}
            </p>
          )}
          {country.note && (
            <p>
              <strong>Fact:</strong> {country.note}
            </p>
          )}
          {country.extra && (
            <p className="italic text-sm text-orange-700 mt-1">
              🍽️ {country.extra}
            </p>
          )}
        </div>
      )}
    </li>
  );
}
