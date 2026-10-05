import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { southAmericaCountries } from "@/data/southAmerica/southAmericaCountries";
import InfluentialFigures from "@/components/shared/InfluencialFigures";
import FactsSection from "@/components/shared/FactsSection";

export const dynamic = "force-dynamic";

type CountryPageProps = {
  params: Promise<{ country: string }>;
};

export default async function SouthAmericaCountryPage({
  params,
}: CountryPageProps) {
  const { country: countrySlug } = await params;

  const country = southAmericaCountries.find(
    (item) => item.slug === countrySlug,
  );

  if (!country) notFound();

  const theme = country.theme;

  const firstTimelineEvents = country.timeline.slice(0, 4);
  const remainingTimelineEvents = country.timeline.slice(4);

  return (
    <main
      className="overflow-x-hidden"
      style={{
        background: theme.background,
        color: theme.text,
      }}
    >
      {/* ======================================================
          HERO
      ====================================================== */}
      <section
        className="relative overflow-hidden"
        style={{ background: theme.primary }}
      >
        <River
          colour={theme.accent}
          className="absolute inset-0 opacity-[0.14]"
        />

        <div
          className="absolute -left-20 top-36 h-52 w-52 rotate-12 opacity-15"
          style={{ background: theme.secondary }}
        />

        <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-7 sm:px-8 lg:px-10">
          <nav className="flex items-center justify-between">
            <Link
              href="/south-america#explore"
              className="text-xs font-black uppercase tracking-[0.3em] text-white/65 transition hover:text-white"
            >
              ← South America
            </Link>

            <span className="text-4xl">{country.flag}</span>
          </nav>

          <div className="grid min-h-[680px] items-center gap-12 py-12 lg:grid-cols-12">
            <div className="relative z-10 lg:col-span-7">
              <p
                className="text-xs font-black uppercase tracking-[0.45em]"
                style={{ color: theme.accent }}
              >
                Take a jaunt through
              </p>

              <h1 className="mt-5 text-[clamp(4.6rem,11vw,9.5rem)] font-black uppercase leading-[0.73] tracking-[-0.065em] text-white">
                {country.name}
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
                {country.intro}
              </p>

              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
                {country.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-black uppercase tracking-[0.24em] text-white/45"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[430px] lg:col-span-5">
              <div
                className="absolute -bottom-4 -right-4 h-full w-full rotate-[2deg]"
                style={{ background: theme.accent }}
              />

              <div className="relative border-[6px] border-white/80 bg-white p-2">
                <div className="relative aspect-[4/5] max-h-[520px] overflow-hidden">
                  <Image
                    src={country.heroImage}
                    alt={country.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 36vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <span className="absolute -bottom-12 -left-8 rotate-[-5deg] text-6xl font-black uppercase text-white/15 sm:text-8xl">
                GO
              </span>
            </div>
          </div>
        </div>

        <PatternStrip primary={theme.accent} secondary={theme.secondary} />
      </section>

      {/* ======================================================
          QUICK FACTS
      ====================================================== */}
      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            <QuickFact
              number="01"
              label="Capital"
              value={country.capital}
              colour={theme.primary}
            />

            <QuickFact
              number="02"
              label="Population"
              value={country.population}
              colour={theme.secondary}
            />

            <QuickFact
              number="03"
              label="Languages"
              value={country.languages.join(", ")}
              colour={theme.accent}
            />

            <QuickFact
              number="04"
              label="Currency"
              value={country.currency}
              colour={theme.primary}
            />
          </div>
        </div>
      </section>

      {/* ======================================================
          OVERVIEW
      ====================================================== */}
      <section className="relative px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p
              className="text-xs font-black uppercase tracking-[0.4em]"
              style={{ color: theme.secondary }}
            >
              Get your bearings
            </p>

            <h2 className="mt-5 text-5xl font-black uppercase leading-[0.83] tracking-[-0.055em] sm:text-7xl">
              First,
              <br />
              look around
              <span style={{ color: theme.accent }}>.</span>
            </h2>

            <div
              className="mt-8 h-2 w-24"
              style={{ background: theme.primary }}
            />
          </div>

          <div className="flex items-center lg:col-span-7 lg:pt-14">
            <p className="max-w-3xl text-xl leading-[1.85] opacity-75">
              {country.overview}
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================
          CAPITAL
      ====================================================== */}
      {country.factFile.capital && (
        <section className="px-5 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-10 lg:grid-cols-12">
              <div className="relative lg:col-span-6 lg:col-start-2">
                <div
                  className="absolute -left-3 -top-3 h-full w-full"
                  style={{ background: theme.secondary }}
                />

                <div
                  className="relative border-[5px] bg-white p-2"
                  style={{ borderColor: theme.primary }}
                >
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={country.factFile.capital.image}
                      alt={country.factFile.capital.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 48vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4">
                <p
                  className="text-[10px] font-black uppercase tracking-[0.4em]"
                  style={{ color: theme.secondary }}
                >
                  First stop · Capital
                </p>

                <h2 className="mt-4 text-4xl font-black uppercase leading-[0.9] sm:text-5xl">
                  {country.factFile.capital.title}
                </h2>

                <p className="mt-6 text-lg leading-relaxed opacity-70">
                  {country.factFile.capital.description}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ======================================================
          THE JAUNT
      ====================================================== */}
      <section className="relative py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <p
            className="text-xs font-black uppercase tracking-[0.4em]"
            style={{ color: theme.secondary }}
          >
            Wander a little further
          </p>

          <h2 className="mt-5 max-w-4xl text-5xl font-black uppercase leading-[0.82] tracking-[-0.055em] sm:text-7xl">
            Follow the trail through {country.name}
            <span style={{ color: theme.accent }}>.</span>
          </h2>

          {/* HISTORY */}
          {country.factFile.history && (
            <article className="mt-24 grid items-center gap-10 lg:grid-cols-12">
              <div className="relative lg:col-span-6">
                <div
                  className="absolute -bottom-4 -right-4 h-full w-full rotate-[1deg]"
                  style={{ background: theme.accent }}
                />

                <div
                  className="relative border-[4px] bg-white p-2"
                  style={{ borderColor: theme.primary }}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={country.factFile.history.image}
                      alt={country.factFile.history.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 48vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <StoryText
                eyebrow="History"
                title={country.factFile.history.title}
                description={country.factFile.history.description}
                colour={theme.primary}
                className="lg:col-span-5 lg:col-start-8"
              />
            </article>
          )}

          {/* TRAIL MARK */}
          <TrailMark colour={theme.accent} side="right" />

          {/* FOOD */}
          {country.factFile.food && (
            <article className="grid items-center gap-10 lg:grid-cols-12">
              <StoryText
                eyebrow="Food"
                title={country.factFile.food.title}
                description={country.factFile.food.description}
                colour={theme.secondary}
                className="lg:col-span-5 lg:col-start-2"
              />

              <div className="relative mx-auto w-full max-w-[480px] lg:col-span-5 lg:col-start-8">
                <div
                  className="absolute -left-3 -top-3 h-full w-full rotate-[-2deg]"
                  style={{ background: theme.primary }}
                />

                <div className="relative border-[6px] border-[#211f1b] bg-[#f4e5c4] p-2">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={country.factFile.food.image}
                      alt={country.factFile.food.title}
                      fill
                      sizes="(max-width: 1024px) 90vw, 38vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </article>
          )}

          <TrailMark colour={theme.secondary} side="left" />

          {/* WILDLIFE */}
          {country.factFile.wildlife && (
            <article className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="relative mx-auto w-full max-w-[350px] lg:col-span-4 lg:col-start-2">
                <div
                  className="absolute -bottom-3 -right-3 h-full w-full"
                  style={{ background: theme.secondary }}
                />

                <div
                  className="relative border-[4px] bg-white p-2"
                  style={{ borderColor: theme.accent }}
                >
                  <div className="relative aspect-[4/5] max-h-[430px] overflow-hidden">
                    <Image
                      src={country.factFile.wildlife.image}
                      alt={country.factFile.wildlife.title}
                      fill
                      sizes="(max-width: 1024px) 80vw, 30vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <StoryText
                eyebrow="Wildlife"
                title={country.factFile.wildlife.title}
                description={country.factFile.wildlife.description}
                colour={theme.accent}
                className="lg:col-span-5 lg:col-start-7 lg:pb-10"
              />
            </article>
          )}
        </div>
      </section>

      {/* ======================================================
          CULTURE — BIG MOMENT, BUT TEXT WINS TOO
      ====================================================== */}
      {country.factFile.culture && (
        <section
          className="relative overflow-hidden py-24"
          style={{ background: theme.primary }}
        >
          <River
            colour={theme.accent}
            className="absolute inset-0 opacity-[0.08]"
          />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid items-center gap-0 lg:grid-cols-12">
              {/* PHOTO — CONTROLLED SIZE */}
              <div className="relative z-10 lg:col-span-7">
                <div
                  className="absolute -left-4 -top-4 h-full w-full"
                  style={{ background: theme.accent }}
                />

                <div className="relative border-[6px] border-white/80 bg-white p-2">
                  <div className="relative aspect-[16/10] max-h-[560px] overflow-hidden">
                    <Image
                      src={country.factFile.culture.image}
                      alt={country.factFile.culture.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* TEXT POSTER */}
              <div className="relative z-20 mt-[-20px] lg:col-span-5 lg:-ml-12 lg:mt-0">
                <div
                  className="relative px-7 py-10 sm:px-10 sm:py-12"
                  style={{
                    background: "#F4E5C4",
                    color: "#211F1B",
                  }}
                >
                  <div
                    className="absolute left-0 top-0 h-full w-2"
                    style={{ background: theme.accent }}
                  />

                  <p
                    className="text-[10px] font-black uppercase tracking-[0.42em]"
                    style={{ color: theme.secondary }}
                  >
                    Culture · stop and look
                  </p>

                  <h2 className="mt-5 text-4xl font-black uppercase leading-[0.86] tracking-[-0.04em] sm:text-6xl">
                    {country.factFile.culture.title}
                  </h2>

                  <div
                    className="my-6 h-1 w-20"
                    style={{ background: theme.accent }}
                  />

                  <p className="text-lg font-medium leading-[1.75] text-[#211f1b]/80">
                    {country.factFile.culture.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <PatternStrip primary={theme.accent} secondary={theme.secondary} />
        </section>
      )}

      {/* ======================================================
          TIMELINE
      ====================================================== */}
      <section
        className="relative overflow-hidden px-5 py-24 text-white sm:px-8 lg:px-10"
        style={{ background: theme.timeline }}
      >
        <div className="relative mx-auto max-w-6xl">
          <p
            className="text-xs font-black uppercase tracking-[0.4em]"
            style={{ color: theme.accent }}
          >
            Through time
          </p>

          <h2 className="mt-5 text-5xl font-black uppercase leading-[0.82] tracking-[-0.055em] sm:text-7xl">
            Follow the
            <br />
            story.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/55">
            Four stops first. Open the rest if you want to travel further.
          </p>

          <div className="mt-16">
            <TimelineEvents
              events={firstTimelineEvents}
              accent={theme.accent}
              background={theme.timeline}
              text={theme.text}
            />
          </div>

          {remainingTimelineEvents.length > 0 && (
            <details className="group mt-8">
              <summary
                className="mx-auto flex max-w-md cursor-pointer list-none justify-center border-y border-white/20 py-5 text-xs font-black uppercase tracking-[0.28em] [&::-webkit-details-marker]:hidden"
                style={{ color: theme.accent }}
              >
                <span className="group-open:hidden">
                  Continue the journey ↓
                </span>

                <span className="hidden group-open:inline">
                  Fold the story ↑
                </span>
              </summary>

              <div className="mt-14">
                <TimelineEvents
                  events={remainingTimelineEvents}
                  accent={theme.accent}
                  background={theme.timeline}
                  text={theme.text}
                />
              </div>
            </details>
          )}
        </div>
      </section>

      {/* ======================================================
          PEOPLE
      ====================================================== */}
      <section className="px-5 py-28 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p
                className="text-xs font-black uppercase tracking-[0.4em]"
                style={{ color: theme.secondary }}
              >
                Faces along the way
              </p>

              <h2 className="mt-5 text-5xl font-black uppercase leading-[0.82] tracking-[-0.055em] sm:text-7xl">
                Who
                <br />
                am I?
              </h2>
            </div>

            <div className="flex items-end lg:col-span-4">
              <p className="max-w-sm text-lg leading-relaxed opacity-60">
                Study the photograph. Read the clue. Make your guess before
                revealing the person.
              </p>
            </div>
          </div>

          <InfluentialFigures
            countryName={country.name}
            theme={country.theme}
            figures={country.influentialFigures}
            displayStyle={{
              treatment: "print",
              stagger: true,
              revealMode: "clue-only",
              imagePosition: "top",
            }}
          />
        </div>
      </section>

      {/* ======================================================
          CULTURAL SPOTLIGHTS
      ====================================================== */}
      {country.culturalSpotlights && country.culturalSpotlights.length > 0 && (
        <section className="relative py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <p
              className="text-xs font-black uppercase tracking-[0.4em]"
              style={{ color: theme.secondary }}
            >
              Look closer
            </p>

            <h2 className="mt-5 text-5xl font-black uppercase leading-[0.82] tracking-[-0.055em] sm:text-7xl">
              Cultural
              <br />
              spotlights.
            </h2>

            <div className="mt-20 space-y-28">
              {country.culturalSpotlights.map((spotlight, index) => {
                const reverse = index % 2 === 1;

                return (
                  <article
                    key={`${spotlight.title}-${index}`}
                    className="grid items-center gap-10 lg:grid-cols-12"
                  >
                    <div
                      className={`relative ${
                        reverse
                          ? "lg:order-2 lg:col-span-6 lg:col-start-7"
                          : "lg:col-span-6"
                      }`}
                    >
                      <div
                        className="absolute -bottom-3 -right-3 h-full w-full"
                        style={{
                          background:
                            index % 2 === 0 ? theme.accent : theme.secondary,
                        }}
                      />

                      <div className="relative border-[4px] border-[#211f1b] bg-white p-2">
                        <div className="relative aspect-[3/2] overflow-hidden">
                          <Image
                            src={spotlight.image}
                            alt={spotlight.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 48vw"
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    <StoryText
                      eyebrow={`Spotlight ${String(index + 1).padStart(
                        2,
                        "0",
                      )}`}
                      title={spotlight.title}
                      description={spotlight.description}
                      colour={index % 2 === 0 ? theme.primary : theme.secondary}
                      className={
                        reverse
                          ? "lg:order-1 lg:col-span-5"
                          : "lg:col-span-5 lg:col-start-8"
                      }
                    />
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ======================================================
          PLACES — ACTUAL WANDER
      ====================================================== */}
      <section className="relative overflow-hidden py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <p
            className="text-xs font-black uppercase tracking-[0.4em]"
            style={{ color: theme.secondary }}
          >
            One more wander
          </p>

          <h2 className="mt-5 max-w-3xl text-5xl font-black uppercase leading-[0.82] tracking-[-0.055em] sm:text-7xl">
            Places worth
            <br />
            stopping for.
          </h2>

          <div className="mt-24 space-y-32">
            {country.places.map((place, index) => {
              const layout = index % 4;

              if (layout === 0) {
                return (
                  <article
                    key={place.title}
                    className="grid items-center gap-10 lg:grid-cols-12"
                  >
                    <div className="relative lg:col-span-7">
                      <div
                        className="absolute -bottom-4 -right-4 h-full w-full"
                        style={{ background: theme.accent }}
                      />

                      <div
                        className="relative border-[5px] bg-white p-2"
                        style={{ borderColor: theme.primary }}
                      >
                        <div className="relative aspect-[16/9] overflow-hidden">
                          <Image
                            src={place.image}
                            alt={place.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 55vw"
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    <PlaceText
                      place={place}
                      number={index + 1}
                      colour={theme.primary}
                      className="lg:col-span-4 lg:col-start-9"
                    />
                  </article>
                );
              }

              if (layout === 1) {
                return (
                  <article
                    key={place.title}
                    className="grid items-center gap-10 lg:grid-cols-12"
                  >
                    <PlaceText
                      place={place}
                      number={index + 1}
                      colour={theme.secondary}
                      className="lg:col-span-4 lg:col-start-2"
                    />

                    <div className="relative mx-auto w-full max-w-[460px] lg:col-span-5 lg:col-start-7">
                      <div
                        className="absolute -left-3 -top-3 h-full w-full rotate-[-1.5deg]"
                        style={{ background: theme.secondary }}
                      />

                      <div className="relative border-[5px] border-[#211f1b] bg-[#f4e5c4] p-2">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={place.image}
                            alt={place.title}
                            fill
                            sizes="(max-width: 1024px) 90vw, 38vw"
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </article>
                );
              }

              if (layout === 2) {
                return (
                  <article
                    key={place.title}
                    className="grid gap-10 lg:grid-cols-12 lg:items-end"
                  >
                    <div className="relative mx-auto w-full max-w-[360px] lg:col-span-4 lg:col-start-2">
                      <div
                        className="absolute -bottom-3 -right-3 h-full w-full"
                        style={{ background: theme.accent }}
                      />

                      <div
                        className="relative border-[4px] bg-white p-2"
                        style={{ borderColor: theme.secondary }}
                      >
                        <div className="relative aspect-[4/5] max-h-[450px] overflow-hidden">
                          <Image
                            src={place.image}
                            alt={place.title}
                            fill
                            sizes="(max-width: 1024px) 80vw, 30vw"
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    <PlaceText
                      place={place}
                      number={index + 1}
                      colour={theme.accent}
                      className="lg:col-span-5 lg:col-start-7 lg:pb-8"
                    />
                  </article>
                );
              }

              return (
                <article
                  key={place.title}
                  className="grid items-center gap-10 lg:grid-cols-12"
                >
                  <div className="lg:col-span-5 lg:col-start-2">
                    <PlaceText
                      place={place}
                      number={index + 1}
                      colour={theme.primary}
                    />
                  </div>

                  <div className="relative lg:col-span-5 lg:col-start-8">
                    <div
                      className="relative border-y-[6px] py-2"
                      style={{
                        borderColor: theme.accent,
                      }}
                    >
                      <div className="relative aspect-[3/2] overflow-hidden">
                        <Image
                          src={place.image}
                          alt={place.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================
          FACTS
      ====================================================== */}
      <section
        className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-10"
        style={{ background: theme.primary }}
      >
        <River
          colour={theme.accent}
          className="absolute inset-0 opacity-[0.07]"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 text-white">
            <p
              className="text-xs font-black uppercase tracking-[0.4em]"
              style={{ color: theme.accent }}
            >
              Your turn
            </p>

            <h2 className="mt-5 text-5xl font-black uppercase leading-[0.82] tracking-[-0.055em] sm:text-7xl">
              What did
              <br />
              you discover?
            </h2>
          </div>

          <FactsSection
            continent="south-america"
            regionKey={country.slug}
            sectionHeading={`Things We’ve Learned About ${country.name}`}
            inputHeading="Add a new fact"
            placeholder="Share a fact you discovered about this country"
            staticItems={country.facts.slice(0, 3)}
            theme={{
              cardBg:
                "bg-gradient-to-br from-[#f4e5c4]/95 via-white/95 to-[#f4e5c4]/85",
              cardBorder: "border-white/30",
              cardShadow: "shadow-[0_20px_60px_rgba(0,0,0,0.18)]",
              text: "text-[#211f1b]",
              inputBg: "bg-white/90",
            }}
          />
        </div>
      </section>

      {/* ======================================================
          FINISH
      ====================================================== */}
      <footer
        className="relative overflow-hidden px-5 py-20 text-white sm:px-8 lg:px-10"
        style={{ background: theme.secondary }}
      >
        <River colour={theme.accent} className="absolute inset-0 opacity-10" />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-5xl">{country.flag}</span>

            <p className="mt-5 text-xs font-black uppercase tracking-[0.4em] text-white/45">
              End of this jaunt
            </p>

            <p className="mt-3 text-5xl font-black uppercase leading-none tracking-[-0.055em] sm:text-7xl">
              {country.name}
            </p>
          </div>

          <Link
            href="/south-america#explore"
            className="w-fit border-b-[3px] border-white/40 pb-3 text-xs font-black uppercase tracking-[0.25em] transition hover:border-white"
          >
            Pick another route →
          </Link>
        </div>
      </footer>
    </main>
  );
}

/* ============================================================
   QUICK FACT
============================================================ */

function QuickFact({
  number,
  label,
  value,
  colour,
}: {
  number: string;
  label: string;
  value: string;
  colour: string;
}) {
  return (
    <div className="relative border-l border-black/10 px-5 first:border-l-0">
      <span
        className="text-5xl font-black opacity-10"
        style={{ color: colour }}
      >
        {number}
      </span>

      <p
        className="-mt-2 text-[10px] font-black uppercase tracking-[0.3em]"
        style={{ color: colour }}
      >
        {label}
      </p>

      <p className="mt-3 break-words text-2xl font-black leading-tight">
        {value}
      </p>
    </div>
  );
}

/* ============================================================
   STORY TEXT
============================================================ */

function StoryText({
  eyebrow,
  title,
  description,
  colour,
  className = "",
}: {
  eyebrow: string;
  title: string;
  description: string;
  colour: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <p
        className="text-[10px] font-black uppercase tracking-[0.4em]"
        style={{ color: colour }}
      >
        {eyebrow}
      </p>

      <h3 className="mt-4 text-4xl font-black uppercase leading-[0.9] tracking-[-0.035em] sm:text-5xl">
        {title}
      </h3>

      <div className="my-5 h-1 w-14" style={{ background: colour }} />

      <p className="max-w-lg text-lg leading-relaxed opacity-70">
        {description}
      </p>
    </div>
  );
}

/* ============================================================
   PLACE TEXT
============================================================ */

function PlaceText({
  place,
  number,
  colour,
  className = "",
}: {
  place: {
    title: string;
    tag: string;
    description: string;
  };
  number: number;
  colour: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <span
        className="text-6xl font-black leading-none opacity-10"
        style={{ color: colour }}
      >
        {String(number).padStart(2, "0")}
      </span>

      <p
        className="-mt-2 text-[10px] font-black uppercase tracking-[0.35em]"
        style={{ color: colour }}
      >
        {place.tag}
      </p>

      <h3 className="mt-4 text-4xl font-black uppercase leading-[0.9] tracking-[-0.035em] sm:text-5xl">
        {place.title}
      </h3>

      <p className="mt-5 max-w-lg text-lg leading-relaxed opacity-65">
        {place.description}
      </p>
    </div>
  );
}

/* ============================================================
   TRAIL MARK
============================================================ */

function TrailMark({
  colour,
  side,
}: {
  colour: string;
  side: "left" | "right";
}) {
  return (
    <div
      className={`flex h-28 items-center ${
        side === "right" ? "justify-end pr-[15%]" : "justify-start pl-[15%]"
      }`}
    >
      <div className="flex rotate-[-8deg] items-center gap-3 opacity-40">
        <span className="h-2 w-2 rounded-full" style={{ background: colour }} />
        <span className="h-[2px] w-14" style={{ background: colour }} />
        <span className="h-3 w-3 rotate-45" style={{ background: colour }} />
      </div>
    </div>
  );
}

/* ============================================================
   TIMELINE
============================================================ */

function TimelineEvents({
  events,
  accent,
  background,
  text,
}: {
  events: Array<{
    year: string;
    title: string;
    text: string;
    periodKey?: string;
    isGap?: boolean;
    prompt?: string;
    questions?: string[];
  }>;
  accent: string;
  background: string;
  text: string;
}) {
  return (
    <div className="relative ml-2 border-l border-white/20 pl-8 sm:ml-5 sm:pl-12">
      {events.map((event, index) => (
        <article
          key={`${event.year}-${event.title}-${index}`}
          className="relative pb-12 last:pb-4"
        >
          <span
            className="absolute -left-[2.46rem] top-1 h-4 w-4 rounded-full border-[3px] sm:-left-[3.46rem]"
            style={{
              borderColor: accent,
              background: event.isGap ? accent : background,
            }}
          />

          {event.isGap ? (
            <div
              className="max-w-3xl p-6 sm:p-8"
              style={{
                background: accent,
                color: text,
              }}
            >
              <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60">
                Student investigation
              </p>

              <p className="mt-3 text-xs font-black uppercase tracking-[0.2em]">
                {event.year}
              </p>

              <h3 className="mt-2 text-2xl font-black">{event.title}</h3>

              {event.prompt && (
                <p className="mt-4 font-semibold leading-relaxed">
                  {event.prompt}
                </p>
              )}

              {event.questions && event.questions.length > 0 && (
                <div className="mt-5 space-y-2">
                  {event.questions.map((question) => (
                    <p
                      key={question}
                      className="border-t border-black/15 pt-2 text-sm font-semibold"
                    >
                      → {question}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="max-w-3xl">
              <p
                className="text-xs font-black uppercase tracking-[0.25em]"
                style={{ color: accent }}
              >
                {event.year}
              </p>

              <h3 className="mt-2 text-2xl font-black sm:text-3xl">
                {event.title}
              </h3>

              <p className="mt-4 leading-relaxed text-white/60">{event.text}</p>
            </div>
          )}
        </article>
      ))}
    </div>
  );
}

/* ============================================================
   RIVER
============================================================ */

function River({ colour, className }: { colour: string; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1600 900"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M-100 710 C210 620 250 330 540 395 C820 460 850 735 1140 620 C1370 530 1380 230 1710 160"
        fill="none"
        stroke={colour}
        strokeWidth="32"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ============================================================
   PATTERN
============================================================ */

function PatternStrip({
  primary,
  secondary,
}: {
  primary: string;
  secondary: string;
}) {
  return (
    <div className="absolute bottom-0 left-0 flex h-3 w-full overflow-hidden">
      {Array.from({ length: 36 }).map((_, index) => (
        <span
          key={index}
          className="h-full flex-1"
          style={{
            background: index % 2 === 0 ? primary : secondary,
          }}
        />
      ))}
    </div>
  );
}
