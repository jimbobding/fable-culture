"use client";

import { useState } from "react";
import Gallery from "@/components/Gallery";
import Timeline from "@/components/Timeline";
import FactsSection from "@/components/FactsSection";
import type { RegionTheme } from "@/styles/regionThemes";

type Country = {
  name: string;
  capital: string;
  languages: string[];
  population: string;
  note: string;
  extra: string;
  flag: string;
  link?: string;
};

type RegionData = {
  region: string;
  countries: Country[];
};

type GalleryItem = {
  src: string;
  label: string;
};

type TimelineItem = {
  year: string;
  event: string;
};

type Props = {
  data: RegionData;
  gallery: GalleryItem[];
  continent: string;
  regionKey: string;
  timeline: TimelineItem[];
  theme: RegionTheme;
};

export default function RegionContent({
  data,
  gallery,
  continent,
  regionKey,
  timeline,
  theme,
}: Props) {
  return (
    <section className="px-8 py-16 space-y-16">
      {/* ================= TIMELINE ================= */}
      <section
        className={`px-8 py-12 rounded-lg shadow-lg ${theme.timeline.sectionBg}`}
      >
        <h2
          className={`text-2xl font-semibold mb-8 text-center ${theme.introTitle}`}
        >
          Historical Timeline
        </h2>

        <Timeline
          items={timeline}
          theme={{
            background: theme.timeline.sectionBg,
            line: theme.timeline.line,
            year: theme.timeline.year,
            text: theme.timeline.text,
            cardBg: theme.timeline.cardBg,
          }}
        />
      </section>

      {/* ================= MODERN COUNTRIES ================= */}
      <section
        className={`px-8 py-12 rounded-lg shadow-lg ${theme.cardBg}`}
      >
        <h2 className={`text-2xl font-semibold mb-6 text-center ${theme.introTitle}`}>
          Modern Countries
        </h2>
        <ul className="space-y-4">
          {data.countries.map((country) => (
            <CountryDropdown key={country.name} country={country} theme={theme} />
          ))}
        </ul>
      </section>

      {/* ================= FACTS ================= */}
      <section
        className={`px-8 py-12 rounded-lg shadow-lg ${theme.factsBg}`}
      >
        <h2
          className={`text-2xl font-semibold mb-6 text-center ${theme.introTitle}`}
        >
          Cultural Facts
        </h2>
     <FactsSection
  continent={continent}
  regionKey={regionKey}
  theme={{
    cardBg: theme.cardBg,
    cardBorder: theme.cardBorder,
    cardShadow: theme.cardShadow,
    text: theme.text,
    inputBg: theme.inputBg,
  }}
/>

      </section>

      {/* ================= GALLERY ================= */}
      <section
        className={`px-8 py-12 rounded-lg shadow-lg ${theme.cardBg}`}
      >
        <h2
          className={`text-2xl mb-6 text-center ${theme.introTitle}`}
        >
          Gallery
        </h2>
        <Gallery
          images={gallery.map((img) => img.src)}
          captions={gallery.map((img) => img.label)}
          columns={3}
          hoverEffect="scale"
          showCaptionOnHover={true}
          borderColor={theme.galleryBorder}
          shadow="shadow-md"
        />
      </section>
    </section>
  );
}

// ================= COUNTRY DROPDOWN =================
function CountryDropdown({
  country,
  theme,
}: {
  country: Country;
  theme: RegionTheme;
}) {
  const [open, setOpen] = useState(false);

  return (
    <li
      className={`border rounded-lg p-4 shadow-md transition-shadow hover:shadow-xl ${theme.cardBg} ${theme.cardBorder}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left font-semibold flex justify-between items-center"
      >
        <span>
          {country.flag} {country.name}
        </span>
        <span>{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="mt-2 pl-4 text-gray-700 space-y-1">
          <p>
            <strong>Capital:</strong>{" "}
            {country.link ? <a href={country.link} className="underline text-blue-600">{country.capital}</a> : country.capital}
          </p>
          <p>
            <strong>Languages:</strong> {country.languages.join(", ")}
          </p>
          <p>
            <strong>Population:</strong> {country.population}
          </p>
          <p>
            <strong>Fact:</strong> {country.note}
          </p>
          <p className="italic text-sm text-gray-600 mt-1">{country.extra}</p>
        </div>
      )}
    </li>
  );
}
