"use client";

import Link from "next/link";
import { useState } from "react";

const photos = {"ocean": "/images/continents/oceania/countries/fiji/places/yasawa-islands.jpg", "australia": "/images/continents/oceania/countries/australia/uluru-red-centre-landscape.jpg", "newguinea": "/images/continents/oceania/countries/papua-new-guinea/papua-new-guinea-highlands-landscape.jpg", "newzealand": "/images/continents/oceania/countries/new-zealand/milford-sound-landscape.jpg", "islands": "/images/continents/oceania/countries/tonga/tonga-vavau-islands-landscape.jpg"};

const places = [
  {
    number: "01",
    name: "Australia",
    subtitle: "THE RED CENTRE",
    description: "Ancient Country, enormous deserts, extraordinary wildlife and living First Nations cultures.",
    image: photos.australia,
    className: "lg:ml-[7%] lg:w-[62%]",
    label: "bg-[#d4774d]",
  },
  {
    number: "02",
    name: "Papua New Guinea",
    subtitle: "THE GREEN HIGHLANDS",
    description: "Rainforests, mountains and remarkable cultural and linguistic diversity.",
    image: photos.newguinea,
    className: "lg:ml-auto lg:mr-[5%] lg:w-[55%]",
    label: "bg-[#6e9471]",
  },
  {
    number: "03",
    name: "New Zealand",
    subtitle: "MOUNTAINS & OCEAN",
    description: "Dramatic landscapes, Māori heritage and stories of Aotearoa.",
    image: photos.newzealand,
    className: "lg:ml-[12%] lg:w-[57%]",
    label: "bg-[#7a9fa8]",
  },
  {
    number: "04",
    name: "Pacific Islands",
    subtitle: "THE BLUE PACIFIC",
    description: "Ocean navigation, island communities and cultures connected by the sea.",
    image: photos.islands || photos.ocean,
    className: "lg:ml-auto lg:mr-[10%] lg:w-[57%]",
    label: "bg-[#6ab5ae]",
  },
];

const adventures = [
  ["THE OUTBACK TRAIL", "An interactive journey across Australia's Red Centre", "🦘"],
  ["DANGER ZONE", "Discover Australia's dangerous wildlife", "🐊"],
  ["FIRST PEOPLES", "History, colonisation, resistance and living cultures", "🌿"],
  ["DRAG & DROP", "Match animals, places and traditions across Oceania", "🧩"],
];

const features = [
  ["Culture Kitchen", "🍲"],
  ["Culture Gallery", "🎨"],
  ["Region at Fable", "📸"],
  ["Student Discoveries", "🔎"],
  ["Religion & Worldviews", "🌏"],
  ["History & Voyages", "🧭"],
];

const countries = [
  "🇦🇺 Australia", "🇫🇯 Fiji", "🇰🇮 Kiribati",
  "🇲🇭 Marshall Islands", "🇫🇲 Micronesia",
  "🇳🇷 Nauru", "🇳🇿 New Zealand", "🇵🇼 Palau",
  "🇵🇬 Papua New Guinea", "🇼🇸 Samoa",
  "🇸🇧 Solomon Islands", "🇹🇴 Tonga",
  "🇹🇻 Tuvalu", "🇻🇺 Vanuatu",
];

function Photo({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return src ? (
    <img src={src} alt={alt} className={"h-full w-full object-cover " + className} />
  ) : (
    <div className="flex h-full w-full items-center justify-center bg-[#86b6aa] text-6xl">
      🌴
    </div>
  );
}

function DrawnLine({
  colour = "#233a35",
  className = "",
}: {
  colour?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1000 130"
      preserveAspectRatio="none"
      className={"pointer-events-none w-full " + className}
      aria-hidden="true"
    >
      <path
        d="M-20 60 C150 0 230 125 400 65 S680 10 820 70 S950 110 1020 40"
        fill="none"
        stroke={colour}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M-20 75 C150 15 230 140 400 80 S680 25 820 85 S950 125 1020 55"
        fill="none"
        stroke={colour}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity=".5"
      />
    </svg>
  );
}

export default function OceaniaPage() {
  const [showCountries, setShowCountries] = useState(false);

  return (
    <main className="overflow-hidden bg-[#f4e8d1] text-[#243a35]">

      {/* 1 — THE OCEAN */}
      <section className="relative min-h-[90vh] overflow-hidden bg-[#168e9c] text-white">
        <div className="absolute inset-0">
          <Photo src={photos.ocean || photos.islands} alt="Pacific islands" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#123f46]/60 via-[#123f46]/10 to-[#123f46]/75" />
        </div>

        <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col px-6">
          <nav className="flex items-center justify-between py-8">
            <Link href="/" className="text-sm font-bold tracking-[.2em]">
              ← FABLE CULTURE
            </Link>
            <span className="text-xs uppercase tracking-[.3em]">
              Field Notes / Oceania
            </span>
          </nav>

          <div className="flex flex-1 flex-col justify-center pb-28">
            <p className="mb-6 text-sm font-bold uppercase tracking-[.4em] text-[#ffe3ae]">
              Follow the ocean
            </p>
            <h1 className="max-w-5xl text-[clamp(4.5rem,15vw,12rem)] font-black uppercase leading-[.8] tracking-[-.09em]">
              OCEANIA<span className="text-[#ffd19b]">.</span>
            </h1>
            <p className="mt-9 max-w-lg text-xl leading-relaxed sm:text-2xl">
              A thousand journeys across ocean, island, mountain and red earth.
            </p>
            <a
              href="#journey"
              className="mt-10 w-fit rounded-full bg-[#f4e8d1] px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#243a35] transition hover:bg-[#ffd19b]"
            >
              Begin the journey ↗
            </a>
          </div>
        </div>

        <svg
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          className="absolute bottom-[-1px] h-20 w-full sm:h-32"
          aria-hidden="true"
        >
          <path d="M0 80 C250 10 420 140 690 75 S1160 10 1440 90 V150 H0Z" fill="#f4e8d1"/>
          <path d="M0 80 C250 10 420 140 690 75 S1160 10 1440 90" fill="none" stroke="#243a35" strokeWidth="5"/>
        </svg>
      </section>

      {/* 2 — THE JOURNEY */}
      <section id="journey" className="relative px-6 pb-32 pt-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[.3em] text-[#bd643e]">
              Land / Sea / People
            </p>
            <h2 className="mt-5 text-5xl font-black leading-[.95] tracking-tight sm:text-7xl">
              Not one landscape.<br />
              <span className="italic text-[#bd643e]">Not one story.</span>
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed">
              Oceania is a vast and varied region. Follow the winding route
              through four different worlds.
            </p>
          </div>

          <DrawnLine className="my-8 h-20" />

          <div className="relative space-y-24 lg:space-y-6">
            <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-px border-l-2 border-dashed border-[#bd643e]/30 lg:block" />

            {places.map((place) => (
              <article
                key={place.name}
                className={"relative w-full " + place.className}
              >
                <div className="relative">
                  <div className="overflow-hidden rounded-[48%_52%_46%_54%/13%_17%_14%_19%]">
                    <div className="h-64 sm:h-96">
                      <Photo src={place.image} alt={place.name} />
                    </div>
                  </div>

                  <div className="absolute -left-3 -top-7 flex h-16 w-16 rotate-[-12deg] items-center justify-center rounded-full border-2 border-[#243a35] bg-[#f3c17e] text-xl font-black sm:-left-8">
                    {place.number}
                  </div>
                </div>

                <div className="relative -mt-10 ml-auto max-w-md rounded-[35px_45px_35px_50px] bg-[#f4e8d1] px-7 py-6 shadow-[0_8px_30px_#243a3520] sm:mr-6">
                  <span className="text-xs font-bold tracking-[.3em] text-[#bd643e]">
                    {place.subtitle}
                  </span>
                  <h3 className="mt-2 text-3xl font-black sm:text-4xl">
                    {place.name}
                  </h3>
                  <p className="mt-3 leading-relaxed">{place.description}</p>
                </div>

                <DrawnLine colour="#bd643e" className="mt-4 h-16" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — THE EXPLORATION */}
      <section className="relative bg-[#d3e5d9] px-6 pb-28 pt-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[.3em] text-[#bd643e]">
            Choose your path
          </p>
          <h2 className="mt-4 text-5xl font-black leading-[.95] tracking-tight sm:text-7xl">
            THE ADVENTURE<br />IS YOURS.
          </h2>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_.8fr]">
            <div className="relative overflow-hidden rounded-[50px_90px_45px_75px] bg-[#1d7883] p-8 text-white sm:p-12">
              <div className="absolute -right-20 -top-16 h-60 w-60 rounded-full border-[2px] border-white/40" />
              <p className="text-xs font-bold uppercase tracking-[.3em] text-[#ffdfa7]">
                Explore the Pacific
              </p>
              <h3 className="mt-4 text-4xl font-black sm:text-5xl">
                ISLAND HOPPING
              </h3>
              <p className="mt-5 max-w-md text-lg">
                Discover the countries of Oceania and find your way across
                the world's largest ocean.
              </p>

              <div className="my-10 flex min-h-40 items-center justify-center rounded-[50%] border border-white/40 bg-white/10 text-7xl">
                🗺️
              </div>

              <button
                onClick={() => setShowCountries(!showCountries)}
                className="rounded-full bg-[#f3c17e] px-7 py-4 font-bold text-[#243a35] transition hover:bg-white"
              >
                {showCountries ? "Hide countries ↑" : "Explore countries ↗"}
              </button>

              {showCountries && (
                <div className="mt-8 flex flex-wrap gap-2">
                  {countries.map((country) => (
                    <span key={country} className="rounded-full bg-white/20 px-4 py-2 text-sm">
                      {country}
                    </span>
                  ))}
                </div>
              )}

              <p className="mt-6 text-xs text-white/70">
                Interactive map coming soon
              </p>
            </div>

            <div className="space-y-7 py-3">
              <h3 className="text-3xl font-black">EXPEDITIONS</h3>
              {adventures.map(([title, description, icon], i) => (
                <div key={title}>
                  <div className="flex items-start gap-5">
                    <span className="text-4xl">{icon}</span>
                    <div>
                      <p className="text-xs font-bold tracking-[.2em] text-[#bd643e]">
                        ADVENTURE 0{i + 1}
                      </p>
                      <h4 className="mt-1 text-xl font-black">{title}</h4>
                      <p className="mt-2 text-sm leading-relaxed">{description}</p>
                      <p className="mt-2 text-xs font-bold text-[#1d7883]">
                        Coming soon
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 h-px bg-[#243a35]/30" />
                </div>
              ))}
            </div>
          </div>

          <DrawnLine className="my-20 h-24" />

          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[.3em] text-[#bd643e]">
              Learning together
            </p>
            <h3 className="mt-4 text-4xl font-black sm:text-6xl">
              OCEANIA AT FABLE
            </h3>
            <p className="mt-5 text-lg">
              Food, creativity, history, beliefs and discoveries made by our learners.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            {features.map(([name, icon]) => (
              <div
                key={name}
                className="flex items-center gap-3 rounded-full border-2 border-[#243a35]/60 bg-[#f4e8d1] px-6 py-4"
              >
                <span className="text-2xl">{icon}</span>
                <span className="font-bold">{name}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-[#243a35]/60">
            Shared learning features will be connected as we build.
          </p>
        </div>
      </section>

      <footer className="bg-[#243a35] px-6 py-12 text-[#f4e8d1]">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-6">
          <span className="text-3xl font-black">OCEANIA.</span>
          <Link href="/" className="font-bold">
            ← Back to Fable Culture
          </Link>
        </div>
      </footer>
    </main>
  );
}
