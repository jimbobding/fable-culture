"use client";

import Link from "next/link";

const images = {
  ocean: "/images/continents/oceania/countries/fiji/places/yasawa-islands.jpg",
  australia: "/images/continents/oceania/countries/australia/uluru-red-centre-landscape.jpg",
  png: "/images/continents/oceania/countries/papua-new-guinea/papua-new-guinea-highlands-landscape.jpg",
  nz: "/images/continents/oceania/countries/new-zealand/milford-sound-landscape.jpg",
  islands: "/images/continents/oceania/countries/tonga/tonga-vavau-islands-landscape.jpg",
};

const routes: Record<string, string | null> = {
  "Culture Kitchen": null,
  "Culture Gallery": null,
  "Region at Fable": null,
  "Timeline": null,
  "Religion & Worldviews": null,
  "Outback Expedition": null,
  "Dangerous Wildlife": null,
  "First Peoples": null,
  "Drag & Drop": null,
};

const countries = [
  { name: "Australia", flag: "🇦🇺", href: null },
  { name: "Fiji", flag: "🇫🇯", href: null },
  { name: "Kiribati", flag: "🇰🇮", href: null },
  { name: "Marshall Islands", flag: "🇲🇭", href: null },
  { name: "Micronesia", flag: "🇫🇲", href: null },
  { name: "Nauru", flag: "🇳🇷", href: null },
  { name: "New Zealand", flag: "🇳🇿", href: null },
  { name: "Palau", flag: "🇵🇼", href: null },
  { name: "Papua New Guinea", flag: "🇵🇬", href: null },
  { name: "Samoa", flag: "🇼🇸", href: null },
  { name: "Solomon Islands", flag: "🇸🇧", href: null },
  { name: "Tonga", flag: "🇹🇴", href: null },
  { name: "Tuvalu", flag: "🇹🇻", href: null },
  { name: "Vanuatu", flag: "🇻🇺", href: null },
];

function Wave({
  colour = "#f4e8d1",
  stroke = "#203d3b",
}: {
  colour?: string;
  stroke?: string;
}) {
  return (
    <svg
      viewBox="0 0 1440 130"
      preserveAspectRatio="none"
      className="absolute bottom-[-1px] left-0 h-16 w-full sm:h-28"
      aria-hidden="true"
    >
      <path
        d="M0 65 C170 5 310 115 500 60 S820 10 1010 70 S1280 115 1440 40 V130 H0Z"
        fill={colour}
      />
      <path
        d="M0 65 C170 5 310 115 500 60 S820 10 1010 70 S1280 115 1440 40"
        fill="none"
        stroke={stroke}
        strokeWidth="4"
      />
    </svg>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-black uppercase tracking-[0.28em]">
      {children}
    </p>
  );
}

function FeatureLink({
  name,
  children,
  light = false,
}: {
  name: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  const href = routes[name];

  if (!href) {
    return (
      <span className={
        "inline-flex w-fit rounded-full border px-6 py-3 text-sm font-bold " +
        (light
          ? "border-white/40 text-white/75"
          : "border-[#203d3b]/30 text-[#203d3b]/60")
      }>
        {name} · Coming soon
      </span>
    );
  }

  return (
    <Link
      href={href}
      className={
        "inline-flex w-fit rounded-full px-6 py-3 text-sm font-black transition hover:-translate-y-1 " +
        (light
          ? "bg-[#f4e8d1] text-[#203d3b]"
          : "bg-[#203d3b] text-white")
      }
    >
      {children} ↗
    </Link>
  );
}

export default function OceaniaPage() {
  return (
    <main className="overflow-hidden bg-[#f4e8d1] text-[#203d3b]">

      {/* HERO — THE PACIFIC */}
      <section className="relative min-h-[90vh] overflow-hidden bg-[#007e91] text-white">
        <img
          src={images.ocean}
          alt="Pacific islands surrounded by turquoise water"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#063e48]/85 via-[#063e48]/45 to-transparent" />

        <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col px-6">
          <nav className="flex items-center justify-between gap-4 py-8">
            <Link href="/" className="text-xs font-black uppercase tracking-[.2em]">
              ← Fable Culture
            </Link>
            <span className="text-xs font-bold uppercase tracking-[.2em]">
              Explore the world
            </span>
          </nav>

          <div className="flex flex-1 flex-col justify-center pb-32">
            <Eyebrow>Ocean · Islands · Country · Culture</Eyebrow>
            <h1 className="mt-6 text-[clamp(4.2rem,14vw,12rem)] font-black uppercase leading-[.8] tracking-[-.085em]">
              OCEANIA
            </h1>
            <p className="mt-9 max-w-xl text-xl leading-relaxed sm:text-2xl">
              From the red heart of Australia to the islands of the
              Pacific — explore extraordinary places, people and stories.
            </p>
            <a
              href="#explore"
              className="mt-9 w-fit rounded-full bg-[#f5c57e] px-8 py-4 font-black text-[#203d3b] transition hover:bg-white"
            >
              Start exploring ↓
            </a>
          </div>
        </div>
        <Wave />
      </section>

      {/* INTRO — FOUR LANDSCAPES */}
      <section className="px-6 pb-28 pt-20">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>One region. Many worlds.</Eyebrow>

          <div className="mt-6 grid items-end gap-10 lg:grid-cols-[1fr_1fr]">
            <h2 className="text-5xl font-black leading-[.95] tracking-tight sm:text-7xl">
              THERE'S MORE<br />
              THAN ONE WAY<br />
              <span className="text-[#bd633e]">TO EXPLORE.</span>
            </h2>
            <p className="max-w-lg text-lg leading-relaxed">
              Oceania includes vast deserts, tropical rainforests,
              snow-covered mountains and thousands of islands. Its peoples
              have rich, diverse histories, languages and living cultures.
              Discover what connects these places — and what makes each unique.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-12">
            <div className="relative h-80 overflow-hidden rounded-[48px_90px_38px_65px] md:col-span-7">
              <img src={images.australia} alt="Australian Red Centre" className="h-full w-full object-cover" />
              <span className="absolute bottom-5 left-6 bg-[#f4e8d1] px-4 py-2 font-black">
                AUSTRALIA · RED EARTH
              </span>
            </div>

            <div className="relative h-80 overflow-hidden rounded-[75px_35px_85px_40px] md:col-span-5">
              <img src={images.nz} alt="New Zealand mountains" className="h-full w-full object-cover" />
              <span className="absolute bottom-5 left-6 bg-[#f4e8d1] px-4 py-2 font-black">
                AOTEAROA · MOUNTAINS
              </span>
            </div>

            <div className="relative h-72 overflow-hidden rounded-[35px_75px_40px_85px] md:col-span-5">
              <img src={images.png} alt="Papua New Guinea highlands" className="h-full w-full object-cover" />
              <span className="absolute bottom-5 left-6 bg-[#f4e8d1] px-4 py-2 font-black">
                PAPUA NEW GUINEA · RAINFOREST
              </span>
            </div>

            <div className="relative h-72 overflow-hidden rounded-[85px_40px_70px_35px] md:col-span-7">
              <img src={images.islands} alt="Tongan islands" className="h-full w-full object-cover" />
              <span className="absolute bottom-5 left-6 bg-[#f4e8d1] px-4 py-2 font-black">
                PACIFIC ISLANDS · OCEAN
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* MAP + FLAGS */}
      <section id="explore" className="relative bg-[#123f49] px-6 pb-28 pt-24 text-white">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>Explore the Pacific</Eyebrow>
          <h2 className="mt-5 text-5xl font-black uppercase tracking-tight sm:text-7xl">
            FIND YOUR<br />
            <span className="text-[#8fd7cf]">DESTINATION.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Explore Oceania on the map, then choose a flag to discover
            a country's geography, history, food, wildlife and culture.
          </p>

          <div className="relative mt-12 flex min-h-[320px] flex-col items-center justify-center overflow-hidden rounded-[45px] border-2 border-dashed border-[#8fd7cf]/60 bg-[#246c77]/60 px-6 py-16 text-center sm:min-h-[500px]">
            <div className="absolute left-[8%] top-[20%] h-32 w-32 rounded-full border border-white/20" />
            <div className="absolute bottom-[12%] right-[10%] h-48 w-48 rounded-full border border-white/20" />
            <span className="text-6xl">🧭</span>
            <h3 className="relative mt-6 text-3xl font-black sm:text-5xl">
              THE OCEANIA MAP
            </h3>
            <p className="relative mt-4 max-w-md text-white/80">
              Our interactive map will go here. Find countries,
              island groups and journeys across the Pacific.
            </p>
            <span className="relative mt-6 rounded-full border border-white/40 px-5 py-2 text-xs font-black uppercase tracking-widest">
              Map coming soon
            </span>
          </div>

          <div className="mt-16">
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div>
                <Eyebrow>Flags of Oceania</Eyebrow>
                <h3 className="mt-3 text-3xl font-black sm:text-4xl">
                  CHOOSE A COUNTRY
                </h3>
              </div>
              <p className="max-w-sm text-sm text-white/70">
                Discover what each flag represents. Country pages will
                become clickable as they're completed.
              </p>
            </div>

            <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
              {countries.map((country) => {
                const content = (
                  <>
                    <span className="text-5xl leading-none" aria-hidden="true">
                      {country.flag}
                    </span>
                    <span className="mt-3 text-center text-xs font-black">
                      {country.name}
                    </span>
                    {!country.href && (
                      <span className="mt-2 text-[10px] text-white/60">
                        Coming soon
                      </span>
                    )}
                  </>
                );

                const classes =
                  "flex min-h-36 flex-col items-center justify-center rounded-[22px] border border-white/20 bg-white/10 p-3 transition";

                return country.href ? (
                  <Link
                    key={country.name}
                    href={country.href}
                    className={classes + " hover:-translate-y-1 hover:bg-white/20"}
                  >
                    {content}
                  </Link>
                ) : (
                  <div key={country.name} className={classes}>
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Wave colour="#cf744c" stroke="#203d3b" />
      </section>

      {/* OUTBACK EXPEDITION */}
      <section className="relative overflow-hidden bg-[#cf744c] px-6 pb-28 pt-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Interactive Deep Dive / Australia</Eyebrow>
            <h2 className="mt-6 text-6xl font-black uppercase leading-[.9] tracking-tight sm:text-8xl">
              INTO THE<br />
              OUTBACK.
            </h2>
            <p className="mt-8 max-w-lg text-lg leading-relaxed">
              Follow a journey across Australia's Red Centre.
              Explore remarkable landscapes, learn about the Country
              and cultures of First Nations peoples, and discover
              the challenges of travelling through the Outback.
            </p>
            <div className="mt-8">
              <FeatureLink name="Outback Expedition">
                Begin the expedition
              </FeatureLink>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[100px_35px_100px_35px] border-[5px] border-[#203d3b]">
              <img
                src={images.australia}
                alt="The Australian Outback"
                className="h-[450px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 rotate-[-7deg] rounded-full bg-[#f4e8d1] px-7 py-5 text-xl font-black shadow-lg">
              THE RED CENTRE ↗
            </div>
          </div>
        </div>
      </section>

      {/* FIRST PEOPLES */}
      <section className="bg-[#f4e8d1] px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <Eyebrow>History · Identity · Living Cultures</Eyebrow>
            <h2 className="mt-6 text-5xl font-black leading-[.95] sm:text-7xl">
              FIRST<br />PEOPLES.<br />
              <span className="text-[#bd633e]">LIVING STORIES.</span>
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xl leading-relaxed">
              Learn about Aboriginal and Torres Strait Islander peoples,
              Māori communities and the many Indigenous peoples of the Pacific.
              Explore histories before and during colonisation, resistance,
              cultural survival and the lives and achievements of communities today.
            </p>
            <p className="mt-6 text-base leading-relaxed text-[#59645c]">
              Discover how cultures, languages, knowledge and connections
              to land and sea continue to shape Oceania.
            </p>
            <div className="mt-8">
              <FeatureLink name="First Peoples">
                Explore First Peoples
              </FeatureLink>
            </div>
          </div>
        </div>
      </section>

      {/* WILDLIFE + GAME */}
      <section className="bg-[#d7e7d6] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>Discover · Play · Learn</Eyebrow>
          <h2 className="mt-4 text-5xl font-black sm:text-7xl">
            WILD OCEANIA.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-[65px_30px_65px_30px] bg-[#203d3b] p-9 text-white">
              <span className="text-5xl">🐊</span>
              <h3 className="mt-6 text-3xl font-black">
                DANGEROUS ENCOUNTERS
              </h3>
              <p className="mt-4 mb-7 leading-relaxed text-white/80">
                Crocodiles, snakes, spiders and creatures of the sea.
                How dangerous are they really, and how do they survive?
              </p>
              <FeatureLink name="Dangerous Wildlife" light>
                Meet the wildlife
              </FeatureLink>
            </div>

            <div className="rounded-[30px_65px_30px_65px] bg-[#f2c27c] p-9">
              <span className="text-5xl">🧩</span>
              <h3 className="mt-6 text-3xl font-black">
                DRAG, DROP & DISCOVER
              </h3>
              <p className="mt-4 mb-7 leading-relaxed">
                Match flags, places, animals and traditions in
                an Oceania-themed interactive challenge.
              </p>
              <FeatureLink name="Drag & Drop">
                Play the game
              </FeatureLink>
            </div>
          </div>
        </div>
      </section>

      {/* CULTURE KITCHEN */}
      <section className="relative overflow-hidden bg-[#e7aa76] px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Make · Taste · Discover</Eyebrow>
            <h2 className="mt-6 text-5xl font-black uppercase leading-[.9] sm:text-7xl">
              CULTURE<br />KITCHEN.
            </h2>
            <p className="mt-7 max-w-lg text-lg leading-relaxed">
              Explore dishes from across Oceania, discover their stories
              and try making something inspired by the region.
              Share your creations with Fable.
            </p>
            <div className="mt-8">
              <FeatureLink name="Culture Kitchen">
                Explore recipes
              </FeatureLink>
            </div>
          </div>

          <div className="relative flex min-h-80 items-center justify-center rounded-[48%_52%_40%_60%] border-4 border-[#203d3b] bg-[#f4e8d1]">
            <div className="text-center">
              <span className="text-8xl">🥥</span>
              <p className="mt-5 text-xl font-black">
                FLAVOURS OF THE PACIFIC
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CULTURE, HISTORY AND STUDENT WORK */}
      <section className="bg-[#f4e8d1] px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>Culture · Creativity · Discovery</Eyebrow>
          <h2 className="mt-5 text-5xl font-black sm:text-7xl">
            OCEANIA AT FABLE.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed">
            Discover student creations, explore history and beliefs,
            and share what you've learned about Oceania.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {[
              {
                name: "Culture Gallery",
                title: "CREATE & SHARE",
                text: "Explore art, photographs and creative work inspired by Oceania.",
                colour: "bg-[#c9dcd3]",
                icon: "🎨",
              },
              {
                name: "Region at Fable",
                title: "OUR FABLE JOURNEY",
                text: "See what learners have been exploring, making and discovering.",
                colour: "bg-[#f0cb94]",
                icon: "📸",
              },
              {
                name: "Timeline",
                title: "STORIES THROUGH TIME",
                text: "Explore voyaging, settlement, colonisation, independence and change.",
                colour: "bg-[#b8d4dd]",
                icon: "🧭",
              },
              {
                name: "Religion & Worldviews",
                title: "BELIEFS & WORLDVIEWS",
                text: "Discover Indigenous spiritual traditions and religions across Oceania.",
                colour: "bg-[#e3c9b6]",
                icon: "🌏",
              },
            ].map((feature, index) => (
              <article
                key={feature.name}
                className={
                  "p-8 sm:p-10 " +
                  feature.colour +
                  (index % 2 === 0
                    ? " rounded-[65px_25px_55px_30px]"
                    : " rounded-[25px_65px_30px_55px]")
                }
              >
                <span className="text-5xl">{feature.icon}</span>
                <h3 className="mt-6 text-2xl font-black">
                  {feature.title}
                </h3>
                <p className="mt-4 mb-7 max-w-md leading-relaxed">
                  {feature.text}
                </p>
                <FeatureLink name={feature.name}>
                  Explore {feature.name}
                </FeatureLink>
              </article>
            ))}
          </div>

          <div className="mt-16 border-t-2 border-[#203d3b]/25 pt-12">
            <Eyebrow>Student Discoveries</Eyebrow>
            <h3 className="mt-4 text-3xl font-black">
              WHAT HAVE YOU DISCOVERED?
            </h3>
            <p className="mt-4 max-w-2xl text-lg">
              Research a country, explore a tradition, or investigate
              something that interests you. Our student discoveries
              system will showcase approved learner work here.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-[#203d3b] px-6 py-12 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <span className="text-3xl font-black">OCEANIA.</span>
          <Link href="/" className="font-bold">
            ← Fable Culture
          </Link>
        </div>
      </footer>
    </main>
  );
}
