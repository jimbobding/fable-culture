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
  regionFacts?: string[];
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
  const sectionCardBase = `
    px-8 py-12
    rounded-2xl
    border
    ${theme.cardBorder}
    ${theme.cardShadow ?? "shadow-lg"}
  `;

  const sectionHeadingClass = `
    text-3xl sm:text-4xl
    font-bold
    tracking-tight
    text-center
    ${theme.introTitle}
  `;

  return (
    <section className="space-y-16">
      {/* ================= TIMELINE ================= */}
      <section className={`${sectionCardBase} ${theme.timeline.sectionBg}`}>
        <h2 className={`${sectionHeadingClass} mb-8`}>Historical Timeline</h2>

        <Timeline
          items={timeline}
          theme={{
            sectionBg: theme.timeline.sectionBg,
            line: theme.timeline.line,
            year: theme.timeline.year,
            text: theme.timeline.text,
            cardBg: theme.timeline.cardBg,
            dotBorder: theme.cardBorder,
          }}
        />
      </section>

      {/* ================= MODERN COUNTRIES ================= */}
      <section className={`${sectionCardBase} ${theme.cardBg}`}>
        <h2 className={`${sectionHeadingClass} mb-6`}>Modern Countries</h2>

        <ul className="space-y-4">
          {data.countries.map((country) => (
            <CountryDropdown
              key={country.name}
              country={country}
              theme={theme}
            />
          ))}
        </ul>
      </section>

      {/* ================= FACTS ================= */}
      <section
        className={`${sectionCardBase} ${theme.factsBg ?? theme.cardBg}`}
      >
        <h2 className={`${sectionHeadingClass} mb-6`}>Cultural Facts</h2>

        <FactsSection
          continent={continent}
          regionKey={regionKey}
          staticItems={data.regionFacts ?? []}
          sectionHeading=""
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
      <section className={`${sectionCardBase} ${theme.cardBg}`}>
        <h2 className={`${sectionHeadingClass} mb-6`}>Gallery</h2>

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
      className={`
        border
        rounded-2xl
        p-4
        transition-all
        ${theme.cardBg}
        ${theme.cardBorder}
        ${theme.cardShadow ?? "shadow-md"}
        hover:shadow-xl
        ${open ? "ring-2 ring-black/10" : ""}
      `}
    >
      <button
        onClick={() => setOpen(!open)}
        className={`w-full text-left font-semibold flex justify-between items-center ${theme.text}`}
        aria-expanded={open}
      >
        <span>
          {country.flag} {country.name}
        </span>
        <span className="opacity-70">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className={`mt-3 pl-4 space-y-1 ${theme.text}`}>
          <p>
            <strong>Capital:</strong>{" "}
            {country.link ? (
              <a
                href={country.link}
                className="underline underline-offset-4 opacity-90 hover:opacity-100"
              >
                {country.capital}
              </a>
            ) : (
              country.capital
            )}
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

          <p className="italic text-sm opacity-80 mt-1">{country.extra}</p>
        </div>
      )}
    </li>
  );
}
