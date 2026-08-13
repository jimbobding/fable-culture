import { eastAsiaCountries } from "@/data/eastAsia/eastAsiaCountries";
import { notFound } from "next/navigation";
import FactFileTemplate from "@/components/shared/FactFileTemplate";
import Timeline from "@/components/shared/Timeline";
import InfluentialFigures from "@/components/shared/InfluencialFigures";
import PlacesGrid from "@/components/shared/PlacesGrid";
import FactsSection from "@/components/shared/FactsSection";
import CulturalSpotlight from "@/components/shared/CulturalSpotlight";
import Link from "next/link";

type Props = {
  params: Promise<{
    country: string;
  }>;
};

export default async function EastAsiaCountryPage({ params }: Props) {
  const resolvedParams = await params;
  const countrySlug = resolvedParams.country;

  const country = eastAsiaCountries.find((c) => c.slug === countrySlug);

  if (!country) {
    notFound();
  }

  country.factFile.capital && {
    key: "capital",
    label: "Capital",
    ring: "border-[#c6a75e]/70",
    bg: "from-[#f4eddf] via-white to-[#eee4ce]",
    topBorder: "from-[#a83f35] via-[#c6a75e] to-[#263c32]",
    data: country.factFile.capital,
  };

  country.factFile.capital;

  const factFileItems = [
    country.factFile.history && {
      key: "history",
      label: "History",
      ring: "border-[#b5a989]/70",
      bg: "from-stone-100/80 via-white to-amber-100/70",
      topBorder: "from-[#263c32] via-[#c6a75e] to-[#a83f35]",
      data: country.factFile.history,
    },

    country.factFile.food && {
      key: "food",
      label: "Food",
      ring: "border-[#c6a75e]/70",
      bg: "from-orange-50/80 via-white to-amber-100/70",
      topBorder: "from-[#a83f35] via-orange-400 to-[#c6a75e]",
      data: country.factFile.food,
    },

    country.factFile.wildlife && {
      key: "wildlife",
      label: "Wildlife",
      ring: "border-[#5f8573]/70",
      bg: "from-emerald-50/80 via-white to-green-100/70",
      topBorder: "from-[#263c32] via-[#5f8573] to-emerald-500",
      data: country.factFile.wildlife,
    },

    country.factFile.culture && {
      key: "culture",
      label: "Culture",
      ring: "border-[#a83f35]/60",
      bg: "from-red-50/80 via-white to-amber-50/70",
      topBorder: "from-[#a83f35] via-[#c6a75e] to-[#263c32]",
      data: country.factFile.culture,
    },
  ].filter(
    (
      item,
    ): item is {
      key: string;
      label: string;
      ring: string;
      bg: string;
      topBorder: string;
      data: {
        image: string;
        title: string;
        description: string;
      };
    } => Boolean(item),
  );

  const culturalSpotlightItems =
    country.culturalSpotlights?.map((spotlight, index) => ({
      key: `spotlight-${index}`,
      label: "Cultural Spotlight",
      ring: "border-[#c6a75e]/70",
      bg: "from-[#f4eddf] via-white to-[#eee4ce]",
      topBorder: "from-[#a83f35] via-[#c6a75e] to-[#263c32]",
      data: spotlight,
    })) ?? [];

  const timelineItems = country.timeline;

  return (
    <div
      className="min-h-screen pt-6"
      style={{
        background: country.theme.background,
      }}
    >
      <div className="mx-auto max-w-7xl px-4 pb-20">
        {/* HERO */}
        <section
          className="relative overflow-hidden rounded-[2.5rem] shadow-2xl"
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
                  East Asia
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
                  className="text-xs font-semibold uppercase tracking-[0.25em]"
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

        {/* CAPITAL */}
        {country.factFile.capital && (
          <section className="mx-auto mt-14 max-w-4xl">
            <div className="overflow-hidden rounded-[2rem] border border-[#c6a75e]/40 bg-white/70 shadow-lg sm:grid sm:grid-cols-[1fr_1fr]">
              <div className="relative h-56 sm:h-72">
                <img
                  src={country.factFile.capital.image}
                  alt={`${country.factFile.capital.title}, capital of ${country.name}`}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-8">
                <p
                  className="text-xs font-semibold uppercase tracking-[0.3em]"
                  style={{ color: country.theme.secondary }}
                >
                  Capital City
                </p>

                <h2
                  className="mt-2 text-3xl font-black"
                  style={{ color: country.theme.text }}
                >
                  {country.factFile.capital.title}
                </h2>

                <p
                  className="mt-4 leading-relaxed"
                  style={{ color: country.theme.text }}
                >
                  {country.factFile.capital.description}
                </p>
              </div>
            </div>
          </section>
        )}
        {/* FACT FILE */}
        <section className="mt-14">
          <FactFileTemplate
            countryName={country.name}
            theme={country.theme}
            introLabel="Fact File"
            introTitle={`Learn about ${country.name}`}
            introText={`Explore the history, food, wildlife and culture of ${country.name} through images and short fact-file summaries.`}
            items={factFileItems}
          />
        </section>

        {/* TIMELINE */}
        <section className="space-y-10 py-20">
          <div className="space-y-4 text-center">
            <p
              className="text-xs font-semibold uppercase tracking-[0.3em]"
              style={{ color: country.theme.secondary }}
            >
              Historical Timeline
            </p>

            <h2
              className="text-4xl font-bold"
              style={{ color: country.theme.text }}
            >
              The Story of {country.name}
            </h2>

            <p
              className="mx-auto max-w-3xl text-lg leading-relaxed"
              style={{ color: country.theme.text }}
            >
              Explore some of the events and periods that have helped shape the
              history of {country.name}.
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
            region="east-asia"
            country={country.slug}
          />
        </section>

        {/* INFLUENTIAL FIGURES */}
        <section className="space-y-10 py-20">
          <InfluentialFigures
            countryName={country.name}
            theme={country.theme}
            figures={country.influentialFigures}
          />
        </section>

        {/* CULTURAL SPOTLIGHT */}
        <section className="space-y-10 py-20">
          <CulturalSpotlight
            countryName={country.name}
            theme={country.theme}
            introLabel="Cultural Spotlight"
            introTitle={`Discover the culture of ${country.name}`}
            introText={`Explore the rich cultural heritage of ${country.name} through its art, music, traditions, and more.`}
            items={culturalSpotlightItems}
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

        {/* FACTS */}
        <FactsSection
          continent="east-asia"
          regionKey={country.slug}
          sectionHeading={`Things We’ve Learned About ${country.name}`}
          inputHeading="Add a new fact"
          placeholder="Share a fact you discovered about this country"
          staticItems={country.facts}
          theme={{
            cardBg:
              "bg-gradient-to-br from-[#f4eddf]/95 via-[#eee4ce]/90 to-[#e4d7bd]/80",
            cardBorder: "border-[#c6a75e]/60",
            cardShadow: "shadow-[0_20px_60px_rgba(38,60,50,0.15)]",
            text: "text-[#263129]",
            inputBg: "bg-white/80",
          }}
        />

        <div className="mt-10 flex justify-center">
          <Link
            href="/east-asia"
            className="inline-flex items-center gap-2 rounded-full border border-[#c6a75e] bg-white px-5 py-3 text-sm font-semibold text-[#263129] shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            ← Back to East Asia
          </Link>
        </div>
      </div>
    </div>
  );
}
