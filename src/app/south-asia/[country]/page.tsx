import Link from "next/link";
import { notFound } from "next/navigation";
import { countries } from "@/data/southAsia/southAsiaCountries";
import SouthAsiaFactFile from "@/components/regions/south-asia/SouthAsiaFactFile";
import { timelines } from "@/data/southAsia/timelines";
import FactsSection from "@/components/shared/FactsSection";

import Timeline from "@/components/shared/Timeline";

type Props = {
  params: Promise<{
    country: string;
  }>;
};

const timelineIcons = ["🏺", "📜", "👑", "🌍", "🏛️", "✨"];

const placeTagIcons: Record<string, string> = {
  City: "🏙️",
  Landscape: "🌄",
  "Religious Site": "🕌",
  "Sacred Site": "🕉️",
  "Sacred City": "🕉️",
  "Historic Landmark": "🏛️",
  "Historic Site": "🏛️",
  "Ancient Site": "🏺",
  Nature: "🌿",
  Mountain: "⛰️",
  Coast: "🌊",
  "Mountain Pass": "🛤️",
  "Historic Valley": "🏞️",
  "Historic Fortress": "🏰",
  "Modern Landmark": "✨",
  "Natural Wonder": "✨",
};

export default async function CountryPage({ params }: Props) {
  const { country: countrySlug } = await params;

  const country = countries.find((c) => c.slug === countrySlug);

  if (!country) {
    notFound();
  }

  const rawTimeline = timelines[country.slug] ?? [];

  const timelineItems = timelines[country.slug] ?? [];

  const nativeName = "nativeName" in country ? country.nativeName : "";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f6ead8] via-[#f1e1ca] to-[#e8d5bd]">
      <div className="mx-auto max-w-6xl px-4 pb-12">
        <div className="flex justify-center pt-6 pb-6">
          <Link href="/">
            <img
              src="/images/FHLogo-Horizontal.svg"
              alt="Fable Culture logo"
              className="h-14 sm:h-16 w-auto cursor-pointer hover:scale-105 transition-transform duration-200"
            />
          </Link>
        </div>
        {/* HERO */}
        <section
          className="relative min-h-[400px] overflow-hidden rounded-[2.25rem] shadow-2xl flex items-end"
          style={{
            background: `linear-gradient(135deg, ${country.theme.primary}, ${country.theme.secondary})`,
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${country.theme.primary}dd, ${country.theme.secondary}b8)`,
            }}
          />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.18),transparent_35%)]" />

          <div className="relative flex min-h-[500px] items-end px-6 py-14 sm:px-12 sm:py-16">
            <div className="max-w-3xl space-y-4 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/80 sm:text-sm">
                South Asia
              </p>

              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                  {country.flag} {country.name}
                </h1>

                {nativeName ? (
                  <p className="text-lg tracking-wide text-white/85 sm:text-2xl">
                    {nativeName}
                  </p>
                ) : null}
              </div>

              <p className="max-w-2xl text-base leading-relaxed text-white/90 sm:text-xl">
                {country.intro}
              </p>
            </div>
          </div>
        </section>

        {/* QUICK FACTS */}
        <section className="relative z-10 -mt-10 px-2 sm:-mt-14 sm:px-6">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[1.75rem] border border-white/60 bg-[#fff7ed]/90 p-5 shadow-xl backdrop-blur">
              <p
                className="text-xs font-semibold uppercase tracking-[0.25em]"
                style={{ color: country.theme.primary }}
              >
                Population
              </p>
              <p className="mt-2 text-lg font-semibold text-[#4a1d0d]">
                {country.population}
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/60 bg-[#fff7ed]/90 p-5 shadow-xl backdrop-blur">
              <p
                className="text-xs font-semibold uppercase tracking-[0.25em]"
                style={{ color: country.theme.primary }}
              >
                Capital
              </p>
              <p className="mt-2 text-lg font-semibold text-[#4a1d0d]">
                {country.capital}
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-white/60 bg-[#fff7ed]/90 p-5 shadow-xl backdrop-blur">
              <p
                className="text-xs font-semibold uppercase tracking-[0.25em]"
                style={{ color: country.theme.primary }}
              >
                Languages
              </p>
              <p className="mt-2 text-sm sm:text-base font-semibold text-[#4a1d0d] break-words">
                {country.languages?.join(", ") || "Various"}
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/60 bg-[#fff7ed]/90 p-5 shadow-xl backdrop-blur">
              <p
                className="text-xs font-semibold uppercase tracking-[0.25em]"
                style={{ color: country.theme.primary }}
              >
                Currency
              </p>
              <p className="mt-2 text-sm sm:text-base font-semibold text-[#4a1d0d] break-words">
                {country.currency}
              </p>
            </div>
          </div>
        </section>
        {/* OVERVIEW */}
        <section className="mt-14 grid items-stretch gap-6 max-w-4xl mx-auto">
          <div
            className="rounded-[2rem] p-[2px] shadow-xl"
            style={{
              background: `linear-gradient(135deg, ${country.theme.primary}, ${country.theme.secondary})`,
            }}
          >
            <div className="rounded-[2rem] bg-[#fff7ed]/95 p-6 sm:p-8 border border-white/60">
              <p
                className="text-xs font-semibold uppercase tracking-[0.3em]"
                style={{ color: country.theme.secondary }}
              >
                Country Overview
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#4a1d0d] sm:text-4xl">
                A closer look at {country.name}
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#6b4226] sm:text-lg">
                {country.name} is part of the South Asia region and has its own
                landscapes, traditions, history, and identity. This page is a
                starting point for exploring important places, key events,
                cultural life, and interesting facts connected to the country.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {["History", "Culture", "Places", "Food", "Wildlife"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-[#6b4226] shadow-sm"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        <div className="mt-12 space-y-14">
          {/* FACT FILE */}
          <SouthAsiaFactFile
            countryName={country.name}
            theme={country.theme}
            factFile={country.factFile}
          />

          {/* TIMELINE */}

          <Timeline
            items={timelineItems}
            theme={{
              lineColor: country.theme.primary,
              yearColor: country.theme.primary,
              textColor: "#6b4226",
              cardBg: "#fff7ed",
              dotColor: country.theme.secondary,
            }}
            region="south-asia"
            country={country.slug}
          />
          {/* PLACES */}
          <section className="space-y-6">
            <div className="text-center space-y-3">
              <p
                className="text-xs font-semibold uppercase tracking-[0.3em]"
                style={{ color: country.theme.secondary }}
              >
                Places to Explore
              </p>
              <h2 className="text-3xl font-bold text-[#4a1d0d] sm:text-4xl">
                Discover places in {country.name}
              </h2>
              <p className="mx-auto max-w-3xl leading-relaxed text-[#6b4226]">
                From famous landmarks to landscapes and historic cities, these
                places help tell the story of {country.name}.
              </p>
            </div>

            <div className="mx-auto max-w-4xl rounded-[2rem] border border-orange-200/70 bg-[#fff7ed]/85 p-6 shadow-lg sm:p-8">
              <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div className="space-y-3">
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.3em]"
                    style={{ color: country.theme.primary }}
                  >
                    Country and Places
                  </p>

                  <h3 className="text-2xl font-bold text-[#4a1d0d] sm:text-3xl">
                    Exploring {country.name}
                  </h3>

                  <p className="leading-relaxed text-[#6b4226]">
                    Every country has places that help us understand its story.
                    Some are natural landscapes, some are religious or historic
                    sites, and others are famous landmarks that people recognise
                    around the world.
                  </p>

                  <p className="leading-relaxed text-[#6b4226]">
                    These images give a glimpse into the geography, culture, and
                    history of {country.name}, helping students connect what
                    they see with what they learn.
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-orange-100 bg-white/70 p-4 shadow-sm">
                  <p className="text-sm font-medium text-[#6b4226]">
                    Look closely:
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#6b4226]">
                    <li>
                      • What do these places tell you about the landscape?
                    </li>
                    <li>• Which places look historic, religious, or modern?</li>
                    <li>
                      • Which place would you most like to visit, and why?
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {country.places.length > 0 && (
              <div className="grid gap-5 md:grid-cols-2">
                {country.places.map((place) => (
                  <article
                    key={place.title}
                    className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-orange-200/70 bg-[#fff7ed]/90 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <img
                        src={place.image}
                        alt={place.title}
                        className="absolute inset-0 h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                      <div className="absolute left-4 top-4">
                        <span className="inline-flex items-center gap-1 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#4a1d0d] shadow-sm backdrop-blur">
                          {place.tag
                            ? `${placeTagIcons[place.tag] ?? "📍"} ${place.tag}`
                            : "📍 Place"}
                        </span>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                        <h3 className="text-2xl font-bold">{place.title}</h3>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      <p className="leading-relaxed text-[#6b4226]">
                        {place.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>

          {/* FACTS */}
          <section className="space-y-5">
            <div className="text-center space-y-3">
              <p
                className="text-xs font-semibold uppercase tracking-[0.3em]"
                style={{ color: country.theme.secondary }}
              >
                Did You Know?
              </p>
              <h2 className="text-3xl font-bold text-[#4a1d0d] sm:text-4xl">
                Interesting Facts
              </h2>
            </div>

            <FactsSection
              continent="south-asia"
              regionKey={country.slug}
              sectionHeading="Things We’ve Learned"
              inputHeading="Add a new fact"
              placeholder="Share something interesting (check your source!)"
              staticItems={country.facts}
            />
          </section>

          {/* BACK */}
          <div className="flex justify-center pt-2">
            <Link
              href="/south-asia"
              className="inline-flex items-center rounded-xl px-5 py-3 font-semibold text-white shadow-lg transition hover:opacity-90"
              style={{ backgroundColor: country.theme.primary }}
            >
              ← Back to South Asia
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
