import CultureKitchen from "@/components/shared/culture-kitchen/CultureKitchen";

import {
  southAmericaCultureKitchen,
  southAmericaCultureKitchenTheme,
} from "@/data/southAmerica/cultureKitchen/cultureKitchen";
import Link from "next/link";

/*
============================================================
NOT READY YET — UNCOMMENT AS EACH SYSTEM IS CONNECTED
============================================================

// Regional map
import SouthAmericaMap from "@/components/regions/south-america/SouthAmericaMap";

// Shared systems
import CultureKitchen from "@/components/shared/culture-kitchen/CultureKitchen";
import CultureGallery from "@/components/shared/culture-gallery/CultureGallery";
import Timeline from "@/components/shared/Timeline";
import StudentDiscoveries from "@/components/shared/StudentDiscoveries";

// South America data
import { southAmericaCountries } from "@/data/southAmerica/southAmericaCountries";
import { southAmericaTimeline } from "@/data/southAmerica/timelines";

import {
  southAmericaDiscoveries,
  southAmericaDiscoveryThemes,
} from "@/data/southAmerica/discoveries";

// Firebase / approved learner resources
import { getApprovedResources } from "@/lib/getApprovedResources";

============================================================
*/

export const dynamic = "force-dynamic";

const teachingRegions = [
  {
    id: "brazil",
    name: "Brazil",
    countries: ["Brazil"],
    colour: "#F4C542",
    text: "One country. Huge landscapes, Portuguese language, enormous cultural influence and a story all of its own.",
  },
  {
    id: "andean",
    name: "Andean",
    countries: ["Bolivia", "Chile", "Ecuador", "Peru"],
    colour: "#B84432",
    text: "Travel along the Andes through ancient civilisations, high-altitude landscapes, living traditions and modern cities.",
  },
  {
    id: "northern",
    name: "Northern",
    countries: ["Colombia", "Guyana", "Suriname", "Venezuela"],
    colour: "#168C9E",
    text: "Follow the continent's northern edge through Caribbean connections, rainforest, rivers and remarkable cultural diversity.",
  },
  {
    id: "southern-cone",
    name: "Southern Cone",
    countries: ["Argentina", "Paraguay", "Uruguay"],
    colour: "#2456A6",
    text: "Head south through grasslands, great cities, music, migration and distinctive national identities.",
  },
];

export default async function SouthAmericaPage() {
  /*
  NOT READY YET

  const approvedResources =
    await getApprovedResources("south-america");
  */

  return (
    <main className="overflow-x-hidden bg-[#F4E5C4] text-[#211F1B]">
      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[88vh] overflow-hidden bg-[#F4E5C4]">
        {/* COLOUR FIELDS */}

        <div className="absolute -left-24 -top-20 h-[430px] w-[430px] rotate-[-9deg] bg-[#F28C3C]" />

        <div className="absolute -right-20 top-0 h-[330px] w-[430px] rotate-[8deg] bg-[#153D2D]" />

        <div className="absolute bottom-[-130px] right-[8%] h-[300px] w-[440px] rotate-[-7deg] bg-[#B84432]" />

        {/* AMAZON / RIVER MOTIF */}

        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 1600 900"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M-100 690 C190 570 250 310 530 380 C820 450 850 750 1150 610 C1390 500 1370 240 1700 150"
            fill="none"
            stroke="#168C9E"
            strokeWidth="42"
            strokeLinecap="round"
          />

          <path
            d="M380 430 C310 360 260 300 180 280"
            fill="none"
            stroke="#168C9E"
            strokeWidth="15"
            strokeLinecap="round"
          />

          <path
            d="M1040 650 C1110 720 1190 760 1280 790"
            fill="none"
            stroke="#168C9E"
            strokeWidth="16"
            strokeLinecap="round"
          />
        </svg>

        {/* BOTANICAL MARKS */}

        <div className="absolute bottom-[14%] left-[6%] hidden rotate-[-15deg] lg:block">
          <div className="h-28 w-12 rounded-[100%_0] bg-[#153D2D]" />

          <div className="ml-9 -mt-12 h-24 w-10 rotate-45 rounded-[0_100%] bg-[#153D2D]" />
        </div>

        {/* TEXTILE MARKS */}

        <div className="absolute right-[5%] top-[45%] hidden rotate-12 gap-2 md:grid">
          <div className="h-7 w-7 rotate-45 bg-[#F4C542]" />
          <div className="h-7 w-7 rotate-45 bg-[#2456A6]" />
          <div className="h-7 w-7 rotate-45 bg-[#B84432]" />
        </div>

        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col px-5 pb-16 pt-7 sm:px-8 lg:px-10">
          <nav className="flex items-center justify-between">
            <Link
              href="/"
              className="text-xs font-black uppercase tracking-[0.3em] text-[#211F1B]/60 transition hover:text-[#211F1B]"
            >
              ← Fable Culture
            </Link>

            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#211F1B]/50">
              Explore the world
            </span>
          </nav>

          <div className="relative flex flex-1 items-center py-20">
            <div className="relative z-10 max-w-6xl">
              <p className="mb-5 text-xs font-black uppercase tracking-[0.5em] text-[#153D2D]">
                Continent 02
              </p>

              <h1 className="text-[clamp(5rem,14vw,12rem)] font-black uppercase leading-[0.69] tracking-[-0.075em] text-[#211F1B]">
                South
                <br />
                America
              </h1>

              <div className="mt-10 grid max-w-4xl gap-6 md:grid-cols-[1fr_1.2fr]">
                <div className="bg-[#F4C542] px-6 py-5">
                  <p className="text-sm font-black uppercase leading-relaxed tracking-[0.14em]">
                    Rainforest · Mountains · Cities · Music · Food · Ancient
                    worlds · Modern lives
                  </p>
                </div>

                <p className="max-w-xl text-lg font-medium leading-relaxed text-[#211F1B]/70">
                  Cross a continent shaped by enormous landscapes, living
                  cultures, movement, creativity and stories stretching back
                  thousands of years.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.35em] text-[#211F1B]/40">
            <span>Pacific</span>
            <span>Amazon</span>
            <span>Atlantic</span>
          </div>
        </div>
      </section>

      {/* ======================================================
          INTRO
      ====================================================== */}

      <section className="bg-[#211F1B] px-5 py-28 text-[#F4E5C4] sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-xs font-black uppercase tracking-[0.4em] text-[#F28C3C]">
                This is South America
              </p>

              <h2 className="mt-5 text-6xl font-black uppercase leading-[0.8] tracking-[-0.06em] sm:text-8xl">
                Not one
                <br />
                story.
              </h2>
            </div>

            <div className="flex items-end lg:col-span-5">
              <p className="max-w-xl text-xl leading-[1.75] text-[#F4E5C4]/65">
                Twelve independent countries. Hundreds of languages and
                communities. Enormous differences in landscape, history, culture
                and identity. We are going to explore it in pieces — then put
                the picture back together.
              </p>
            </div>
          </div>

          <div className="mt-20 grid gap-3 md:grid-cols-6">
            <div className="bg-[#153D2D] p-7 md:col-span-2 md:row-span-2">
              <p className="text-5xl">🌿</p>

              <p className="mt-8 text-3xl font-black uppercase">Amazon</p>

              <p className="mt-3 text-[#F4E5C4]/60">
                One of the world's great ecological regions.
              </p>
            </div>

            <div className="bg-[#F4C542] p-7 text-[#211F1B] md:col-span-2">
              <p className="text-6xl font-black">12</p>

              <p className="mt-2 text-xs font-black uppercase tracking-[0.25em]">
                Independent countries
              </p>
            </div>

            <div className="bg-[#168C9E] p-7 md:col-span-2">
              <p className="text-4xl">≈</p>

              <p className="mt-5 text-xl font-black uppercase">
                Rivers connect worlds
              </p>
            </div>

            <div className="bg-[#B84432] p-7 md:col-span-2">
              <p className="text-xl font-black uppercase">
                Living
                <br />
                cultures
              </p>
            </div>

            <div className="bg-[#2456A6] p-7 md:col-span-2">
              <p className="text-xl font-black uppercase">
                Ancient
                <br />+ modern
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          EXPLORE / MAP
      ====================================================== */}

      <section
        id="explore"
        className="relative overflow-hidden bg-[#168C9E] px-5 py-28 sm:px-8 lg:px-10"
      >
        <div className="pointer-events-none absolute -left-5 top-6 text-[clamp(7rem,20vw,18rem)] font-black uppercase leading-none tracking-[-0.08em] text-white/[0.08]">
          Explore
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-black uppercase tracking-[0.4em] text-[#F4C542]">
                Find your way
              </p>

              <h2 className="mt-5 text-6xl font-black uppercase leading-[0.8] tracking-[-0.06em] text-white sm:text-7xl">
                Continent
                <br />
                to region
                <br />
                to country.
              </h2>

              <p className="mt-7 max-w-md text-lg leading-relaxed text-white/70">
                Use the map to build your geography. We will explore the
                continent through four teaching regions, while every individual
                country remains part of the journey.
              </p>
            </div>

            <div className="flex min-h-[520px] items-center justify-center lg:col-span-8">
              {/*
              ==================================================
              SOUTH AMERICA MAP — NOT CONNECTED YET

              <SouthAmericaMap />
              ==================================================
              */}

              <div className="relative flex h-[480px] w-full max-w-[520px] items-center justify-center">
                <div
                  className="h-[420px] w-[290px] rotate-[8deg] bg-[#F4E5C4]/90"
                  style={{
                    clipPath:
                      "polygon(35% 0%, 70% 5%, 91% 20%, 85% 39%, 69% 53%, 61% 70%, 47% 100%, 33% 78%, 20% 61%, 8% 44%, 15% 23%)",
                  }}
                />

                <div className="absolute bg-[#211F1B] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#F4E5C4]">
                  Interactive map coming here
                </div>
              </div>
            </div>
          </div>

          {/* FOUR TEACHING REGIONS */}

          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {teachingRegions.map((region, index) => (
              <div
                key={region.id}
                className="relative min-h-[320px] overflow-hidden p-6"
                style={{
                  backgroundColor: region.colour,
                  color: region.id === "brazil" ? "#211F1B" : "#ffffff",
                }}
              >
                <span className="text-6xl font-black opacity-15">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-2 text-3xl font-black uppercase leading-none">
                  {region.name}
                </h3>

                <p className="mt-5 text-sm leading-relaxed opacity-75">
                  {region.text}
                </p>

                <div className="mt-7 flex flex-wrap gap-x-3 gap-y-2">
                  {region.countries.map((country) => (
                    <span
                      key={country}
                      className="border-b border-current/30 pb-1 text-xs font-black uppercase tracking-[0.12em]"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          CULTURE KITCHEN
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#F28C3C] py-24">
        <div className="absolute -right-8 top-2 text-[10rem] font-black uppercase leading-none text-[#211F1B]/[0.06] sm:text-[15rem]">
          Eat
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.4em] text-[#153D2D]">
                Taste the continent
              </p>

              <h2 className="mt-5 text-5xl font-black uppercase leading-[0.82] tracking-[-0.055em] sm:text-7xl">
                Culture
                <br />
                Kitchen.
              </h2>

              <p className="mt-7 max-w-md text-lg leading-relaxed text-[#211F1B]/65">
                Explore ingredients, recipes and food traditions from across
                South America.
              </p>
            </div>

            <div className="flex min-h-[340px] items-center justify-center border-[3px] border-[#211F1B]/15 bg-[#F4E5C4]/25 p-8">
              <CultureKitchen
                title="South America Culture Kitchen"
                intro="Cook your way across South America through six dishes chosen to explore different flavours, ingredients and kitchen skills."
                dishes={southAmericaCultureKitchen}
                theme={southAmericaCultureKitchenTheme}
              />

              <Link href="/south-america/culture-kitchen" className="...">
                Explore the Culture Kitchen →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          CULTURE GALLERY
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#2456A6] py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-black uppercase tracking-[0.4em] text-[#F4C542]">
                Look closer
              </p>

              <h2 className="mt-5 text-5xl font-black uppercase leading-[0.82] tracking-[-0.055em] sm:text-7xl">
                Culture
                <br />
                Gallery.
              </h2>

              <p className="mt-7 max-w-md text-lg leading-relaxed text-white/65">
                Art, objects, photographs and discoveries collected as we move
                across the continent.
              </p>
            </div>

            <div className="flex min-h-[420px] items-center justify-center border-[3px] border-white/20 bg-white/[0.06] p-8 lg:col-span-7">
              {/*
              ==================================================
              SHARED CULTURE GALLERY — NOT CONNECTED YET

              <CultureGallery
                region="south-america"
              />

              ==================================================
              */}

              <p className="max-w-sm text-center text-sm font-black uppercase tracking-[0.2em] text-white/40">
                Shared Culture Gallery plugs in here
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          REGIONAL TIMELINE
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#F4E5C4] px-5 py-28 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.4em] text-[#B84432]">
            Before · during · after
          </p>

          <h2 className="mt-5 text-6xl font-black uppercase leading-[0.8] tracking-[-0.06em] sm:text-8xl">
            Follow
            <br />
            the story.
          </h2>

          <p className="mt-7 max-w-2xl text-xl leading-relaxed text-[#211F1B]/60">
            South America's story stretches far beyond a single period. Follow
            change, continuity, movement and resistance across time.
          </p>

          <div className="mt-16">
            {/*
            ====================================================
            SHARED TIMELINE — NOT CONNECTED YET

            <Timeline
              events={southAmericaTimeline}
              theme={{
                primary: "#153D2D",
                secondary: "#B84432",
                accent: "#F28C3C",
                background: "#F4E5C4",
                text: "#211F1B",
              }}
              region="south-america"
            />

            ====================================================
            */}

            <div className="relative py-14">
              <div className="absolute left-0 right-0 top-1/2 h-[3px] bg-[#211F1B]/15" />

              <div className="relative grid grid-cols-5">
                {["#153D2D", "#B84432", "#F28C3C", "#168C9E", "#2456A6"].map(
                  (colour, index) => (
                    <div key={colour} className="flex justify-center">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#F4E5C4] text-xs font-black text-white"
                        style={{ backgroundColor: colour }}
                      >
                        {index + 1}
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>

            <p className="text-center text-xs font-black uppercase tracking-[0.25em] text-[#211F1B]/35">
              Shared regional timeline plugs in here
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================
          DEEP DIVES
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#153D2D] px-5 py-28 text-white sm:px-8 lg:px-10">
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08]"
          viewBox="0 0 1600 700"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M-100 580 C230 430 270 170 590 280 C880 380 870 610 1190 450 C1410 340 1430 130 1700 90"
            fill="none"
            stroke="#168C9E"
            strokeWidth="38"
          />
        </svg>

        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.4em] text-[#F4C542]">
            Go deeper
          </p>

          <h2 className="mt-5 text-6xl font-black uppercase leading-[0.8] tracking-[-0.06em] sm:text-8xl">
            Some stories
            <br />
            need more room.
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/60">
            Deep Dives give us space to investigate stories that cross borders,
            stretch across centuries or need more than a quick fact.
          </p>

          <div className="mt-20 border-t border-white/20">
            {/*
            ====================================================
            DEEP DIVE ROUTES / DATA NOT CONNECTED YET

            Eventually these should come from the shared
            Deep Dive system rather than being hard-coded.

            ====================================================
            */}

            <div className="grid gap-5 border-b border-white/20 py-10 md:grid-cols-[100px_1fr_auto] md:items-center">
              <span className="text-5xl font-black text-[#F28C3C]">01</span>

              <div>
                <p className="text-3xl font-black uppercase sm:text-5xl">
                  The Inca World
                </p>

                <p className="mt-3 max-w-2xl text-white/55">
                  Explore an empire built across mountains — its roads,
                  engineering, communities and legacy.
                </p>
              </div>

              <span className="text-4xl text-white/25">→</span>
            </div>

            <div className="grid gap-5 border-b border-white/20 py-10 md:grid-cols-[100px_1fr_auto] md:items-center">
              <span className="text-5xl font-black text-[#168C9E]">02</span>

              <div>
                <p className="text-3xl font-black uppercase sm:text-5xl">
                  Amazon Lives
                </p>

                <p className="mt-3 max-w-2xl text-white/55">
                  The Amazon is not simply a rainforest. Discover the people,
                  environments and questions connected to it.
                </p>
              </div>

              <span className="text-4xl text-white/25">→</span>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          STUDENT DISCOVERIES
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#F4C542] px-5 py-28 sm:px-8 lg:px-10">
        <div className="pointer-events-none absolute -right-4 -top-10 text-[13rem] font-black uppercase leading-none text-[#211F1B]/[0.06] sm:text-[20rem]">
          You
        </div>

        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.4em] text-[#B84432]">
            Student discoveries
          </p>

          <h2 className="mt-5 max-w-4xl text-6xl font-black uppercase leading-[0.8] tracking-[-0.06em] sm:text-8xl">
            Now it's
            <br />
            your turn.
          </h2>

          <p className="mt-7 max-w-2xl text-xl leading-relaxed text-[#211F1B]/65">
            Find something worth sharing — a useful website, video, article or
            resource that helps other learners explore South America.
          </p>

          <div className="mt-14 flex min-h-[300px] items-center justify-center border-[3px] border-[#211F1B]/15 bg-[#F4E5C4]/30 p-8">
            {/*
            ====================================================
            SHARED STUDENT DISCOVERIES — NOT CONNECTED YET

            <StudentDiscoveries
              region="south-america"
              countries={southAmericaCountries}
              discoveries={southAmericaDiscoveries}
              themes={southAmericaDiscoveryThemes}
              approvedResources={approvedResources}
            />

            ====================================================
            */}

            <p className="max-w-sm text-center text-sm font-black uppercase tracking-[0.2em] text-[#211F1B]/40">
              Shared Student Discoveries plugs in here
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================
          FINISH
      ====================================================== */}

      <footer className="relative overflow-hidden bg-[#B84432] px-5 py-20 text-white sm:px-8 lg:px-10">
        <svg
          className="absolute inset-0 h-full w-full opacity-10"
          viewBox="0 0 1500 300"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M-50 250 C300 70 450 320 760 150 C1040 0 1160 200 1550 20"
            fill="none"
            stroke="#F4C542"
            strokeWidth="34"
          />
        </svg>

        <div className="relative mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.4em] text-white/50">
              The journey continues
            </p>

            <p className="mt-4 text-5xl font-black uppercase leading-[0.85] tracking-[-0.055em] sm:text-7xl">
              Keep
              <br />
              exploring.
            </p>
          </div>

          <Link
            href="/"
            className="w-fit border-b-[3px] border-white/40 pb-3 text-xs font-black uppercase tracking-[0.25em] transition hover:border-white"
          >
            ← Back to Fable Culture
          </Link>
        </div>
      </footer>
    </main>
  );
}
