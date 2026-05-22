import { caribbeanCountries } from "@/data/caribbean/caribbeanCountries";
import { notFound } from "next/navigation";
import FactFileTemplate from "@/components/shared/FactFileTemplate";
import { timelines } from "@/data/caribbean/countryTimelines";
import Timeline from "@/components/shared/Timeline";
import InfluentialFigures from "@/components/shared/InfluencialFigures";
import PlacesGrid from "@/components/shared/PlacesGrid";
import FactsSection from "@/components/shared/FactsSection";
import Link from "next/link";

type Props = {
  params: Promise<{
    country: string;
  }>;
};

export default async function CaribbeanCountryPage({ params }: Props) {
  const resolvedParams = await params;

  const countrySlug = resolvedParams.country;

  const country = caribbeanCountries.find((c) => c.slug === countrySlug);

  if (!country) {
    notFound();
  }

  const factFileItems = [
    country.factFile.capital && {
      key: "capital",
      label: "Capital",
      ring: "border-sky-300/70",
      bg: "from-sky-100/80 via-white to-cyan-100/70",
      topBorder: "from-sky-500 via-cyan-400 to-blue-500",
      data: country.factFile.capital,
    },

    country.factFile.history && {
      key: "history",
      label: "History",
      ring: "border-stone-300/70",
      bg: "from-stone-100/80 via-white to-amber-100/70",
      topBorder: "from-stone-500 via-amber-500 to-orange-500",
      data: country.factFile.history,
    },

    {
      key: "food",
      label: "Food",
      ring: "border-orange-300/70",
      bg: "from-orange-100/80 via-white to-amber-100/70",
      topBorder: "from-orange-500 via-amber-400 to-yellow-400",
      data: country.factFile.food,
    },

    {
      key: "wildlife",
      label: "Wildlife",
      ring: "border-emerald-300/70",
      bg: "from-emerald-100/80 via-white to-lime-100/70",
      topBorder: "from-emerald-500 via-green-400 to-lime-500",
      data: country.factFile.wildlife,
    },

    {
      key: "culture",
      label: "Culture",
      ring: "border-fuchsia-300/70",
      bg: "from-fuchsia-100/80 via-white to-rose-100/70",
      topBorder: "from-fuchsia-500 via-pink-400 to-rose-500",
      data: country.factFile.culture,
    },
  ].filter(Boolean);

  const timelineItems = timelines[country.slug] ?? [];

  return (
    <div
      className="min-h-screen pt-6 "
      style={{
        background: country.theme.background,
      }}
    >
      <div className="mx-auto max-w-7xl px-4 pb-20">
        {/* HERO */}
        <section
          className="relative  overflow-hidden rounded-[2.5rem] shadow-2xl"
          style={{
            background: `linear-gradient(135deg, ${country.theme.primary}, ${country.theme.secondary})`,
          }}
        >
          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.22),transparent_35%)]" />

          <div className="relative grid gap-10 px-8 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:px-14 lg:py-20">
            <div className="space-y-6 text-white">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/80 sm:text-sm">
                  Caribbean Region
                </p>

                <h1 className="text-5xl font-black tracking-tight sm:text-7xl">
                  {country.flag} {country.name}
                </h1>

                <p className="max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
                  {country.intro}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {country.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-[2rem] border border-white/20 shadow-2xl">
                <img
                  src={country.heroImage}
                  alt={country.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              </div>
            </div>
          </div>
        </section>
        {/* QUICK FACTS */}
        <section className="relative z-10 -mt-10 px-2 sm:-mt-14 sm:px-6">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                label: "Capital",
                value: country.capital,
              },
              {
                label: "Population",
                value: country.population,
              },
              {
                label: "Languages",
                value: country.languages.join(", "),
              },
              {
                label: "Currency",
                value: country.currency,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[1.75rem] border border-white/50 p-5 shadow-xl backdrop-blur"
                style={{
                  background: country.theme.card,
                }}
              >
                <p
                  className="text-xxs font-semibold uppercase tracking-[0.25em]"
                  style={{ color: country.theme.primary }}
                >
                  {item.label}
                </p>

                <p
                  className="mt-3 text-lg font-bold"
                  style={{ color: country.theme.text }}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* OVERVIEW */}
        <section className="mt-14">
          <div
            className="rounded-[2.5rem] p-[2px] shadow-2xl"
            style={{
              background: `linear-gradient(135deg, ${country.theme.primary}, ${country.theme.accent})`,
            }}
          >
            <div
              className="rounded-[2.5rem] p-8 sm:p-12"
              style={{ background: country.theme.card }}
            >
              <div className="max-w-4xl space-y-6">
                <p
                  className="text-xs font-semibold uppercase tracking-[0.3em]"
                  style={{ color: country.theme.secondary }}
                >
                  Cultural Overview
                </p>

                <h2
                  className="text-4xl font-black sm:text-5xl"
                  style={{ color: country.theme.text }}
                >
                  The story of {country.name}
                </h2>

                <p
                  className="text-lg leading-relaxed"
                  style={{ color: country.theme.text }}
                >
                  {country.overview}
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  {country.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-4 py-2 text-sm font-semibold shadow-md"
                      style={{
                        background: `${country.theme.secondary}22`,
                        color: country.theme.text,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FACT FILE */}
        <section className="mt-14">
          <FactFileTemplate
            countryName={country.name}
            theme={country.theme}
            introLabel="Fact File"
            introTitle={`Learn about ${country.name}`}
            introText="Explore the capital city, food, wildlife, and culture through images and short fact-file summaries."
            items={factFileItems}
          />
        </section>
        {/* TIMELINE */}
        <section className="space-y-10 py-20">
          <div className="text-center space-y-4">
            <p
              className="text-xs font-semibold uppercase tracking-[0.3em]"
              style={{ color: country.theme.secondary }}
            >
              Historical Timeline
            </p>

            <h2 className="text-4xl font-bold text-stone-900">
              The Story of {country.name}
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-stone-700">
              Explore the people, resistance movements, music, identity, and
              major events that helped shape modern Jamaica.
            </p>
          </div>

          <Timeline
            items={timelineItems}
            theme={{
              lineColor: country.theme.timeline,
              yearColor: country.theme.primary,
              textColor: country.theme.text,
              dotColor: country.theme.secondary,
            }}
            region="caribbean"
            country={country.slug}
          />
        </section>
        <section className="space-y-10 py-20">
          <InfluentialFigures
            countryName={country.name}
            theme={country.theme}
            figures={country.influentialFigures}
          />
        </section>
        {/* PLACES */}
        <section>
          <PlacesGrid
            countryName={country.name}
            theme={country.theme}
            places={country.places}
          />
        </section>
        {/* FACTSECTION */}
        <FactsSection
          continent="caribbean"
          regionKey={country.slug}
          sectionHeading={`Things We’ve Learned About ${country.name}`}
          inputHeading="Add a new fact"
          placeholder="Share a fact you discovered about this country"
          staticItems={country.facts}
          theme={{
            cardBg:
              "bg-gradient-to-br from-orange-50/95 via-amber-50/90 to-yellow-100/80",

            cardBorder: "border-orange-300/60",

            cardShadow: "shadow-[0_20px_60px_rgba(249,115,22,0.18)]",

            text: "text-[#5b341c]",

            inputBg: "bg-white/80",
          }}
        />
        <div className=" flex justify-center mt-10">
          <Link
            href="/caribbean"
            className="inline-flex items-center gap-2 rounded-full border border-orange-300 bg-white px-5 py-3 text-sm font-semibold text-stone-800 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            ← Back to Caribbean
          </Link>
        </div>
      </div>
    </div>
  );
}
