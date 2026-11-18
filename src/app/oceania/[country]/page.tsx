import { countries } from "@/data/oceania/countries";
import { notFound } from "next/navigation";
import Link from "next/link";
import InfluentialFigures from "@/components/shared/InfluencialFigures";
import FactsSection from "@/components/shared/FactsSection";

type Props = { params: Promise<{ country: string }> };
type Story = { image: string; title: string; description: string; tag?: string };

function MountedPhoto({ item, label, className = "", imageClassName = "" }: { item: Story; label: string; className?: string; imageClassName?: string }) {
  return (
    <figure className={`relative border-[9px] border-[#fffdf4] bg-[#fffdf4] shadow-[10px_13px_0_rgba(24,74,78,.18),0_20px_40px_rgba(18,57,58,.15)] outline outline-2 outline-[var(--country-primary)]/50 ${className}`}>
      <div className={`relative overflow-hidden bg-[var(--country-paper-dark)] ${imageClassName || "aspect-[4/3]"}`}>
        <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105" />
      </div>
      <figcaption className="flex items-center justify-between gap-3 px-3 pb-1 pt-4 text-xs font-bold uppercase tracking-[.13em] text-[var(--country-primary)]">
        <span>{label}</span><span aria-hidden="true">✦</span>
      </figcaption>
    </figure>
  );
}

function Kicker({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`text-xs font-black uppercase tracking-[.28em] ${light ? "text-[#aee1d7]" : "text-[var(--country-primary)]"}`}>{children}</p>;
}

export default async function OceaniaCountryPage({ params }: Props) {
  const { country: slug } = await params;
  const country = countries.find((item) => item.slug === slug);
  if (!country) notFound();

  const { theme } = country;

  const colourVars = {
    "--country-primary": theme.primary,
    "--country-secondary": theme.secondary,
    "--country-accent": theme.accent,
    "--country-paper": theme.background,
    "--country-paper-dark": theme.surface,
    "--country-ink": theme.text,
    "--country-muted": `color-mix(in srgb, ${theme.text} 65%, white)`,
    "--country-wall": `color-mix(in srgb, ${theme.secondary} 78%, #241b19)`,
    "--country-frame": `color-mix(in srgb, ${theme.primary} 60%, #79553a)`,
  } as React.CSSProperties;
  const fieldNotes: Story[] = [
    { ...country.factFile.food, tag: "Food & everyday life" },
    { ...country.factFile.wildlife, tag: "Wildlife" },
    { ...country.factFile.culture, tag: "History & culture" },
    ...country.extraFactFile,
  ];
  const figures = country.figures.map((figure) => ({ name: figure.title, role: figure.tag || "Influential person", image: figure.image, description: figure.description }));
  const firstPlace = country.places[0];
  const otherPlaces = country.places.slice(1);

  return (
    <main style={colourVars} className="overflow-hidden bg-[var(--country-paper)] text-[var(--country-ink)]">
      {/* Journal cover: full-bleed photo rather than East Asia's split hero */}
      <header className="relative min-h-[680px] overflow-hidden bg-[var(--country-secondary)] text-white">
        <img src={country.heroImage} alt={`Landscape of ${country.name}`} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${theme.secondary}F2, ${theme.primary}D9, transparent)` }} />
        <div className="absolute inset-x-0 top-0 h-2 bg-[var(--country-accent)]" />
        <div className="relative mx-auto flex min-h-[680px] max-w-7xl flex-col px-6 pb-24 pt-8 sm:px-10">
          <Link href="/oceania#geography" className="w-fit rounded-full border border-white/60 bg-black/40 px-5 py-3 text-sm font-bold backdrop-blur transition hover:bg-white/20">← Back to the Oceania map</Link>
          <div className="my-auto max-w-4xl py-16">
            <Kicker light>Fable Culture / Pacific field journal</Kicker>
            <h1 className="mt-6 text-[clamp(4rem,12vw,10rem)] font-black uppercase leading-[.82] tracking-[-.07em]">{country.name}</h1>
            <p className="mt-8 max-w-2xl border-l-4 border-[var(--country-accent)] pl-6 text-lg leading-relaxed text-white/95 sm:text-2xl">{country.intro}</p>
            <a href="#start" className="mt-9 inline-flex rounded-full bg-[var(--country-accent)] px-7 py-4 font-black text-[#183d40] transition hover:bg-white">Open the journal ↓</a>
          </div>
          <p className="absolute bottom-8 right-8 hidden text-xs font-black uppercase tracking-[.2em] text-white/75 sm:block">An Oceania country story · {country.pageType === "mini" ? "Short profile" : "Full guide"}</p>
        </div>
      </header>

      {/* Field-guide strip, intentionally not floating cards */}
      <section id="start" className="scroll-mt-6 border-b-4 border-[var(--country-primary)] bg-[var(--country-paper-dark)] px-6 py-8 sm:px-10">
        <div className="mx-auto grid max-w-7xl gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {[["Capital", country.capital], ["Population", country.population], ["Languages", country.languages.join(", ")], ["Currency", country.currency]].map(([label, value], i) => (
            <div key={label} className={`relative ${i ? "lg:border-l lg:border-[var(--country-primary)] lg:pl-8" : ""}`}>
              <Kicker>{label}</Kicker><p className="mt-2 text-xl font-black">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Scrapbook spread: large text and inset photograph */}
      <section className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10">
        <div className="pointer-events-none absolute right-0 top-16 hidden text-[15rem] font-black leading-none text-[#d8e3d6] lg:block">{country.flag}</div>
        <div className="relative grid items-center gap-16 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <Kicker>01 / The story begins</Kicker>
            <h2 className="mt-5 text-5xl font-black leading-[.95] tracking-tight sm:text-7xl">A place with a story to tell.</h2>
            <p className="mt-8 max-w-lg text-xl leading-relaxed">{country.intro}</p>
            <div className="mt-9 space-y-4 border-t-2 border-[var(--country-primary)] pt-6">
              {country.facts.slice(0, 3).map((fact, i) => <p key={i} className="flex gap-4 leading-relaxed"><span className="font-black text-[var(--country-primary)]">0{i + 1}</span>{fact}</p>)}
            </div>
          </div>
          <div className="relative px-5 pb-14 pt-6 sm:px-10 lg:mx-auto lg:w-[85%]">
            <div className="absolute inset-5 rotate-3 rounded-[50%_45%_55%_40%] bg-[var(--country-paper-dark)]" />
            <MountedPhoto item={country.factFile.capital} label={`Capital city / ${country.capital}`} className="relative -rotate-3" imageClassName="aspect-[5/4]" />
            <div className="relative -mr-4 -mt-5 ml-auto max-w-sm rotate-2 border-l-[7px] border-[var(--country-accent)] bg-[var(--country-paper)] p-6 shadow-xl sm:-mr-7">
              <Kicker>Look closer</Kicker><h3 className="mt-2 text-2xl font-black">{country.factFile.capital.title}</h3>
              <p className="mt-3 leading-relaxed">{country.factFile.capital.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* OCEANIA EXPLORER'S FIELD JOURNAL */}
      {fieldNotes.length > 0 && (
        <section id="fact-file" className="relative overflow-hidden bg-[var(--country-paper-dark)] px-5 py-24 sm:px-10">
          <div className="pointer-events-none absolute inset-0 opacity-30"
            style={{ backgroundImage: "radial-gradient(#b7a98a 1px, transparent 1px)", backgroundSize: "32px 32px" }}
          />

          <div className="relative mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <Kicker>02 / The explorer's notebook</Kicker>
              <h2 className="mt-5 text-5xl font-black leading-tight sm:text-7xl">
                Curious things & hidden stories.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed">
                Open the field journal and discover the food, wildlife, history
                and traditions that make {country.name} remarkable.
              </p>
            </div>

            <div className="relative mt-20">
              <div className="pointer-events-none absolute bottom-12 left-1/2 top-0 hidden w-px border-l-[3px] border-dashed border-[var(--country-primary)] lg:block" />

              <div className="space-y-24 lg:space-y-36">
                {fieldNotes.map((item, i) => (
                  <article
                    key={`${item.title}-${i}`}
                    className={`relative flex flex-col gap-9 ${
                      i % 2 ? "lg:items-end" : "lg:items-start"
                    }`}
                  >
                    <div className={`relative w-full lg:w-[78%] ${
                      i % 2 ? "lg:mr-0" : "lg:ml-0"
                    }`}>
                      <div className={`relative grid items-center gap-8 lg:grid-cols-2 ${
                        i % 2 ? "lg:[&>*:first-child]:order-2" : ""
                      }`}>

                        <div className="relative mx-auto w-full max-w-[420px]">
                          <div className={`absolute -inset-3 rounded-md ${
                            i % 3 === 0
                              ? "rotate-3 bg-[var(--country-accent)]"
                              : i % 3 === 1
                                ? "-rotate-3 bg-[var(--country-paper-dark)]"
                                : "rotate-2 bg-[var(--country-paper)]"
                          }`} />

                          <div className={`relative border-[9px] border-[#fffaf0] bg-white p-2 shadow-2xl ${
                            i % 2 ? "rotate-2" : "-rotate-2"
                          }`}>
                            <img
                              src={item.image}
                              alt={item.title}
                              className="aspect-[4/3] w-full object-cover"
                            />
                            <p className="px-2 pb-2 pt-4 text-sm font-semibold italic text-[var(--country-ink)]">
                              Field photograph {String(i + 1).padStart(2, "0")} · {item.title}
                            </p>
                          </div>

                          <div className="absolute -right-5 -top-7 flex h-16 w-16 rotate-12 items-center justify-center rounded-full border-4 border-[#fffaf0] bg-[var(--country-accent)] text-xl font-black text-white shadow-xl">
                            {String(i + 1).padStart(2, "0")}
                          </div>
                        </div>

                        <div className="relative">
                          <Kicker>{item.tag || "An interesting discovery"}</Kicker>
                          <h3 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
                            {item.title}
                          </h3>

                          <svg
                            viewBox="0 0 220 42"
                            className="mt-5 h-10 w-44 text-[#bc7657]"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M3 25 C50 3 78 40 120 17 S180 9 215 21"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeDasharray="5 8"
                            />
                          </svg>

                          <p className="mt-5 max-w-md text-lg leading-relaxed">
                            {item.description}
                          </p>

                          <div className="relative mt-8 max-w-sm -rotate-1 border-l-[5px] border-[var(--country-accent)] bg-[var(--country-paper)] px-6 py-5 shadow-lg">
                            <p className="text-xs font-black uppercase tracking-widest text-[var(--country-primary)]">
                              Explorer's question
                            </p>
                            <p className="mt-3 font-medium italic leading-relaxed">
                              What else could we discover about {item.title}?
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`pointer-events-none hidden lg:block absolute top-1/2 ${
                      i % 2 ? "right-[8%]" : "left-[8%]"
                    }`}>
                      <span className="block h-3 w-3 rounded-full bg-[var(--country-accent)] ring-8 ring-[var(--country-paper-dark)]" />
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-24 flex items-center justify-center gap-5 text-[var(--country-primary)]">
              <span className="h-px w-20 bg-current" />
              <span className="text-3xl">✦</span>
              <span className="text-sm font-black uppercase tracking-widest">
                End of field notes
              </span>
              <span className="text-3xl">✦</span>
              <span className="h-px w-20 bg-current" />
            </div>
          </div>
        </section>
      )}

      {/* PLACES — THE EXPEDITION CHART */}
      {country.places.length > 0 && (
        <section id="places" className="relative overflow-hidden bg-[var(--country-paper)] px-5 py-24 text-[var(--country-ink)] sm:px-10">
          <div className="relative mx-auto max-w-6xl">
            <div className="flex flex-wrap items-start justify-between gap-8">
              <div className="max-w-2xl">
                <Kicker>03 / The expedition chart</Kicker>
                <h2 className="mt-5 text-5xl font-black leading-tight sm:text-7xl">
                  Follow the trail.
                </h2>
                <p className="mt-6 text-lg leading-relaxed">
                  Discover remarkable places across {country.name}.
                  Every stop has a story waiting to be explored.
                </p>
              </div>
              <div className="rotate-6 rounded-full border-4 border-double border-[var(--country-accent)] px-8 py-6 text-center text-[var(--country-secondary)]">
                <div className="text-3xl">✦</div>
                <div className="text-xs font-black uppercase tracking-widest">
                  Field expedition
                </div>
              </div>
            </div>

            <div className="relative mt-16 rounded-[2rem] border-2 border-[var(--country-primary)] bg-[var(--country-paper-dark)] p-5 shadow-[12px_12px_0_var(--country-primary)] sm:p-10">
              <div
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                  backgroundImage: "radial-gradient(var(--country-primary) 1px, transparent 1px)",
                  backgroundSize: "26px 26px"
                }}
              />

              <div className="relative mb-10 flex items-center justify-between border-b-2 border-dashed border-[var(--country-primary)] pb-5">
                <span className="text-xs font-black uppercase tracking-[.25em]">
                  Expedition record / {country.name}
                </span>
                <span className="text-sm font-bold">
                  {country.places.length} discoveries
                </span>
              </div>

              <div className="relative">
                <svg
                  className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
                  viewBox="0 0 1000 1100"
                  preserveAspectRatio="none"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M160 95 C500 -50 890 110 750 310 S150 330 240 580 S900 550 780 830 S300 920 490 1050"
                    stroke="var(--country-primary)"
                    strokeWidth="4"
                    strokeDasharray="8 13"
                    strokeLinecap="round"
                  />
                  <path
                    d="M160 95 C500 -50 890 110 750 310 S150 330 240 580 S900 550 780 830 S300 920 490 1050"
                    stroke="var(--country-accent)"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                </svg>

                <div className="relative grid gap-12 lg:min-h-[1100px] lg:grid-cols-12 lg:grid-rows-3 lg:gap-6">
                  {country.places.map((place, i) => (
                    <article
                      key={`${place.title}-${i}`}
                      className={`relative ${
                        i % 5 === 0
                          ? "lg:col-span-5 lg:col-start-1"
                          : i % 5 === 1
                            ? "lg:col-span-5 lg:col-start-8"
                            : i % 5 === 2
                              ? "lg:col-span-5 lg:col-start-4"
                              : i % 5 === 3
                                ? "lg:col-span-5 lg:col-start-1"
                                : "lg:col-span-5 lg:col-start-8"
                      } ${i % 2 ? "lg:rotate-2" : "lg:-rotate-2"}`}
                    >
                      <div className="relative mx-auto max-w-[380px]">
                        <div className="absolute -inset-2 rotate-3 bg-[var(--country-accent)]" />
                        <div className="relative border-[8px] border-white bg-white p-2 shadow-xl">
                          <img
                            src={place.image}
                            alt={place.title}
                            className="aspect-[5/3] w-full object-cover"
                          />
                          <div className="px-2 pb-2 pt-4">
                            <p className="text-xs font-black uppercase tracking-widest text-[var(--country-primary)]">
                              Stop {String(i + 1).padStart(2, "0")}
                            </p>
                            <h3 className="mt-2 text-2xl font-black">
                              {place.title}
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed">
                              {place.description}
                            </p>
                          </div>
                        </div>
                        <span className="absolute -right-4 -top-5 flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#f6efd9] bg-[var(--country-accent)] text-lg font-black text-white shadow-lg">
                          {i + 1}
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="relative mt-12 flex items-center justify-center gap-4 border-t-2 border-dashed border-[var(--country-primary)] pt-8">
                <span className="text-2xl">✦</span>
                <span className="text-xs font-black uppercase tracking-widest">
                  End of expedition chart
                </span>
                <span className="text-2xl">✦</span>
              </div>
            </div>

            <p className="mt-7 text-center text-sm italic text-[var(--country-ink)]">
              An illustrated journey through discoveries, not a geographical route to scale.
            </p>
          </div>
        </section>
      )}

      {/* CULTURAL SPOTLIGHT — THE ILLUMINATED MUSEUM */}
      {country.culturalSpotlight.length > 0 && (
        <section
          id="culture"
          className="relative isolate overflow-hidden bg-[var(--country-wall)] px-5 py-24 text-[#fff4dc] sm:px-10 lg:py-32"
        >
          {/* Museum wall texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 25%, var(--country-primary) 0, transparent 40%), radial-gradient(circle at 85% 75%, var(--country-secondary) 0, transparent 50%)",
            }}
          />

          {/* Ceiling rail */}
          <div className="absolute inset-x-0 top-0 h-3 border-b border-[var(--country-accent)] bg-[var(--country-secondary)]" />

          <div className="relative mx-auto max-w-6xl">
            <div className="mb-20 max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[.35em] text-[var(--country-accent)]">
                Gallery 04 / Living Culture
              </p>

              <h2 className="mt-5 text-5xl font-black leading-tight sm:text-7xl">
                Step into the gallery.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
                Discover the traditions, creativity and cultural stories
                of {country.name}. Every exhibit has something to tell.
              </p>
            </div>

            {/* Asymmetrical museum exhibition */}
            <div className="grid items-start gap-x-12 gap-y-24 lg:grid-cols-12">
              {country.culturalSpotlight.map((item, i) => (
                <article
                  key={`${item.title}-${i}`}
                  className={`group relative min-w-0 ${
                    i % 3 === 0
                      ? "lg:col-span-7"
                      : i % 3 === 1
                        ? "lg:col-span-5 lg:mt-32"
                        : "lg:col-span-8 lg:col-start-3"
                  }`}
                >
                  {/* Light source */}
                  <div className="pointer-events-none absolute left-1/2 top-[-80px] z-20 -translate-x-1/2">
                    <div className="mx-auto h-4 w-20 rounded-b-full border border-[#e7c18a]/50 bg-[var(--country-secondary)] shadow-[0_6px_20px_rgba(255,219,152,.5)]" />
                    <div className="mx-auto h-2 w-10 rounded-b-full bg-[#ffe0a0] blur-[3px]" />
                  </div>

                  {/* Visible cone of golden light */}
                  <div
                    className="pointer-events-none absolute left-1/2 top-[-65px] z-0 h-[calc(100%+110px)] w-[145%] max-w-none -translate-x-1/2 opacity-70 transition-opacity duration-700 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255,226,164,.36) 0%, rgba(255,220,153,.19) 35%, rgba(255,210,135,.07) 70%, transparent 100%)",
                      clipPath: "polygon(48% 0, 52% 0, 100% 100%, 0 100%)",
                    }}
                  />

                  {/* Light falling onto the wall */}
                  <div className="pointer-events-none absolute inset-[-12%] z-0 rounded-full bg-[#f7c77e]/10 blur-[70px] transition-colors duration-700 group-hover:bg-[#f7c77e]/20" />

                  <div className="relative z-10 mx-auto max-w-[560px]">
                    {/* Museum picture frame */}
                    <div className="border-[10px] border-[var(--country-frame)] bg-[var(--country-accent)] p-[5px] shadow-[0_25px_45px_rgba(0,0,0,.55),inset_0_0_0_2px_#e2bd85] transition-transform duration-500 group-hover:-translate-y-1 sm:border-[15px]">
                      <div className="border-[8px] border-[var(--country-paper)] bg-[var(--country-paper-dark)] p-1 shadow-inner sm:border-[12px]">
                        <div className="relative overflow-hidden bg-[var(--country-secondary)]">
                          <img
                            src={item.image}
                            alt={item.title}
                            className={`w-full object-cover transition duration-700 group-hover:scale-[1.04] ${
                              i % 3 === 1
                                ? "aspect-[4/5]"
                                : "aspect-[5/3]"
                            }`}
                          />

                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#fff1c9]/15 via-transparent to-black/10 transition-opacity duration-700 group-hover:opacity-40" />
                        </div>
                      </div>
                    </div>

                    {/* Museum information plaque */}
                    <div className="relative mx-auto mt-8 max-w-[90%] border border-[var(--country-accent)] bg-[var(--country-paper)] px-6 py-6 text-[var(--country-ink)] shadow-[5px_8px_0_rgba(20,12,10,.3)] sm:px-8">
                      <div className="flex items-center justify-between gap-4 border-b border-[var(--country-accent)] pb-3">
                        <span className="text-[10px] font-black uppercase tracking-[.22em] text-[var(--country-primary)]">
                          Exhibit {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-xs font-semibold italic text-[var(--country-primary)]">
                          {country.name}
                        </span>
                      </div>

                      <h3 className="mt-5 text-2xl font-black leading-tight sm:text-3xl">
                        {item.title}
                      </h3>

                      <p className="mt-4 leading-relaxed text-[var(--country-ink)]">
                        {item.description}
                      </p>

                      <div className="mt-6 flex items-center gap-3 border-t border-[var(--country-accent)] pt-4">
                        <span className="text-xl text-[var(--country-accent)]">✦</span>
                        <span className="text-xs font-semibold italic text-[var(--country-primary)]">
                          A story from the living cultures of the Pacific
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Museum closing detail */}
            <div className="mt-28 flex items-center justify-center gap-5 border-t border-[var(--country-accent)]/50 pt-10 text-[var(--country-accent)]">
              <span className="h-px w-12 bg-current" />
              <span className="text-2xl">✦</span>
              <span className="text-xs font-black uppercase tracking-[.25em]">
                End of gallery
              </span>
              <span className="text-2xl">✦</span>
              <span className="h-px w-12 bg-current" />
            </div>
          </div>
        </section>
      )}

      {figures.length > 0 && <section id="people" className="bg-[var(--country-paper-dark)] px-6 py-20 sm:px-10"><div className="mx-auto max-w-7xl"><InfluentialFigures countryName={country.name} theme={theme} figures={figures} displayStyle={{ treatment: "print", stagger: true }} /></div></section>}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10"><FactsSection continent="oceania" regionKey={country.slug} sectionHeading={`Things We’ve Learned About ${country.name}`} inputHeading="Add a new fact" placeholder="Share something you discovered about this country" staticItems={country.facts} theme={{ cardBg: "bg-[var(--country-paper)]", cardBorder: "border-[var(--country-primary)]/60", cardShadow: "shadow-lg", text: "text-[var(--country-ink)]", inputBg: "bg-white" }} /></section>
      <footer className="bg-[var(--country-secondary)] px-6 py-14 text-center"><Link href="/oceania#geography" className="inline-flex rounded-full border-2 border-[var(--country-accent)] px-8 py-4 font-black text-[var(--country-accent)] transition hover:bg-[var(--country-accent)] hover:text-[#153f4a]">← Discover another Pacific country</Link></footer>
    </main>
  );
}
