import Link from "next/link";
import StudentDiscoveries from "@/components/shared/StudentDiscoveries";
import {
  eastAsiaDiscoveries,
  eastAsiaThemes,
} from "@/data/eastAsia/discoveries";
import { getApprovedResources } from "@/app/lib/getApprovedResources";
import EastAsiaMap from "@/components/regions/east-asia/EastAsiaMap";
import { eastAsiaCountries } from "@/data/eastAsia/eastAsiaCountries";

export const dynamic = "force-dynamic";

export default async function EastAsiaPage() {
  const approvedResources = await getApprovedResources("east-asia");
  const allResources = [...eastAsiaDiscoveries, ...approvedResources];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f3eee2] text-[#202721]">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative min-h-[94vh] overflow-hidden bg-[#18251f] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_25%,rgba(190,52,43,0.38),transparent_25%),radial-gradient(circle_at_15%_80%,rgba(54,105,86,0.45),transparent_35%)]" />

        <div className="absolute right-[7%] top-[10%] h-40 w-40 rounded-full bg-[#c64538] opacity-90 shadow-[0_0_90px_rgba(198,69,56,0.28)] sm:h-52 sm:w-52 md:h-72 md:w-72" />

        <div className="absolute left-5 top-1/2 hidden -translate-y-1/2 md:block">
          <p className="[writing-mode:vertical-rl] text-xs font-semibold uppercase tracking-[0.55em] text-white/40">
            Fable Culture • East Asia
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 500"
            aria-hidden="true"
            className="block w-full"
          >
            <path
              d="M0 360L125 275L220 320L375 180L505 315L670 110L825 290L990 170L1150 300L1275 235L1440 340V500H0Z"
              fill="#31483e"
            />
            <path
              d="M0 405L170 315L310 380L485 245L640 370L815 220L1000 365L1170 280L1440 395V500H0Z"
              fill="#23372f"
            />
            <path
              d="M0 445L220 365L390 425L590 340L785 420L995 345L1210 420L1440 370V500H0Z"
              fill="#14231d"
            />
          </svg>
        </div>

        <div className="relative z-10 mx-auto flex min-h-[94vh] max-w-7xl flex-col px-5 py-8 sm:px-8 lg:px-12">
          <nav className="flex items-center justify-between">
            <Link
              href="/"
              className="text-sm font-semibold uppercase tracking-[0.25em] text-white/75 transition hover:text-white"
            >
              Fable Culture
            </Link>

            <span className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
              Explore the region
            </span>
          </nav>

          <div className="flex flex-1 items-center">
            <div className="max-w-5xl">
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.42em] text-[#d7b66f] sm:tracking-[0.5em]">
                Ancient worlds • Modern futures
              </p>

              <h1 className="max-w-5xl text-6xl font-black leading-[0.84] tracking-tight sm:text-7xl md:text-8xl lg:text-[10rem]">
                EAST
                <span className="block text-[#d8c9a5]">ASIA</span>
              </h1>

              <div className="mt-10 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
                <p className="max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                  Journey through extraordinary landscapes, ancient histories,
                  powerful traditions and modern cities.
                </p>

                <a
                  href="#explore"
                  className="group inline-flex w-fit items-center gap-3 border-b border-[#d7b66f] pb-2 text-sm font-bold uppercase tracking-[0.25em] text-[#ecd89e]"
                >
                  Begin the journey
                  <span className="transition-transform group-hover:translate-x-2">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="pb-5 text-xs font-semibold uppercase tracking-[0.35em] text-white/40">
            Scroll to explore
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================== */}
      <section className="relative px-5 py-28 sm:px-8 lg:px-12">
        <div className="pointer-events-none absolute -right-36 top-10 h-96 w-96 rounded-full border border-[#b9473c]/15" />
        <div className="pointer-events-none absolute -right-14 top-28 h-64 w-64 rounded-full border border-[#b9473c]/20" />

        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.4em] text-[#a03932]">
              A region of contrasts
            </p>

            <h2 className="mt-5 text-5xl font-black leading-[0.96] text-[#202721] md:text-7xl">
              Past,
              <span className="block font-serif italic text-[#607365]">
                present
              </span>
              and future.
            </h2>
          </div>

          <div className="space-y-10">
            <p className="max-w-3xl text-xl leading-relaxed text-[#4b574f] md:text-2xl">
              East Asia brings together ancient civilisations, changing
              landscapes, living traditions and some of the world&apos;s most
              exciting modern developments.
            </p>

            <div className="h-px w-full bg-gradient-to-r from-[#a03932] via-[#b99d65] to-transparent" />

            <div className="grid gap-10 sm:grid-cols-3">
              <article className="relative pt-7">
                <span className="absolute left-0 top-0 font-serif text-6xl text-[#a03932]/15">
                  01
                </span>
                <div className="relative">
                  <h3 className="text-xl font-black text-[#263129]">
                    Ancient worlds
                  </h3>
                  <p className="mt-3 leading-relaxed text-[#647066]">
                    Historic kingdoms, dynasties, temples, philosophies and
                    traditions.
                  </p>
                </div>
              </article>

              <article className="relative pt-7">
                <span className="absolute left-0 top-0 font-serif text-6xl text-[#a03932]/15">
                  02
                </span>
                <div className="relative">
                  <h3 className="text-xl font-black text-[#263129]">
                    Living culture
                  </h3>
                  <p className="mt-3 leading-relaxed text-[#647066]">
                    Food, festivals, storytelling, music, clothing, art and
                    everyday life.
                  </p>
                </div>
              </article>

              <article className="relative pt-7">
                <span className="absolute left-0 top-0 font-serif text-6xl text-[#a03932]/15">
                  03
                </span>
                <div className="relative">
                  <h3 className="text-xl font-black text-[#263129]">
                    Modern futures
                  </h3>
                  <p className="mt-3 leading-relaxed text-[#647066]">
                    Technology, transport, architecture, design, gaming and
                    innovation.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          POSTCARD
      ========================================================== */}
      <section className="relative overflow-hidden border-y-[10px] border-[#f3eee2] bg-[#b44036] px-5 py-24 text-white sm:px-8 lg:px-12">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full border-[45px] border-white/5" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.45em] text-[#f5d99b]">
              Featured experience
            </p>

            <h2 className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] md:text-7xl">
              Create your East Asia postcard.
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75">
              Explore objects, places, food and culture from across East Asia
              and use what you discover to build your own postcard.
            </p>
          </div>

          <Link
            href="/east-asia/postcard"
            className="group inline-flex w-fit items-center gap-4 border-b border-white/50 pb-3 text-sm font-black uppercase tracking-[0.2em]"
          >
            Create a postcard
            <span className="text-xl transition-transform group-hover:translate-x-2">
              →
            </span>
          </Link>
        </div>
      </section>

      {/* =========================================================
          CULTURE KITCHEN
      ========================================================== */}
      <section className="relative overflow-hidden border-y-[18px] border-[#f3eee2] bg-[#d47745] px-5 py-28 text-[#251d18] shadow-[inset_0_12px_28px_rgba(79,48,38,0.08),inset_0_-12px_28px_rgba(79,48,38,0.08)] sm:px-8 lg:px-12">
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-14 flex items-center gap-5">
            <span className="text-xs font-black uppercase tracking-[0.35em] text-[#633529]">
              01
            </span>
            <div className="h-px flex-1 bg-[#633529]/25" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#633529]/60">
              Food & culture
            </span>
          </div>

          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="relative hidden min-h-[390px] lg:block">
              <div className="absolute left-[20%] top-[22%] h-72 w-72 rounded-full bg-[#f3d58d]/30" />
              <div className="absolute left-[18%] top-[35%] h-28 w-72 rounded-b-[9rem] border-b-[18px] border-l-[12px] border-r-[12px] border-[#5c382b]/80" />
              <div className="absolute left-[29%] top-[5%] h-40 w-3 -rotate-12 rounded-full bg-[#5c382b]/70" />
              <div className="absolute left-[40%] top-[3%] h-40 w-3 rotate-6 rounded-full bg-[#5c382b]/70" />
            </div>

            <div>
              <p className="text-sm font-black uppercase tracking-[0.45em] text-[#633529]">
                Taste • Cook • Discover
              </p>

              <h2 className="mt-5 text-5xl font-black leading-[0.92] md:text-7xl">
                Culture
                <span className="block font-serif italic text-[#fff1c9]">
                  Kitchen.
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#4f3026] md:text-xl">
                Explore East Asia through food. Discover dishes from across the
                region, learn about the stories and traditions connected to
                them, try cooking challenges and share what you make.
              </p>

              <Link
                href="/east-asia/culture-kitchen"
                className="group mt-10 inline-flex items-center gap-4 rounded-full bg-[#4f3026] px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-[#fff1c9] shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >
                Enter the kitchen →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAP
      ========================================================== */}
      <section
        id="explore"
        className="relative scroll-mt-8 border-y-[18px] border-[#f3eee2] bg-[#fffaf0] px-5 py-32 shadow-[inset_0_12px_30px_rgba(32,39,33,0.04),inset_0_-12px_30px_rgba(32,39,33,0.04)] sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.4em] text-[#a03932]">
                Find your way
              </p>

              <h2 className="mt-4 text-5xl font-black md:text-7xl">
                Explore the region
              </h2>
            </div>

            <p className="max-w-md text-lg leading-relaxed text-[#657067]">
              Choose a country on the map to begin exploring, or use the links
              below to travel straight there.
            </p>
          </div>

          <EastAsiaMap />

          <div className="mt-10">
            <p className="mb-5 text-center text-sm font-bold uppercase tracking-[0.25em] text-[#7b817b]">
              Or choose a country
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {eastAsiaCountries.map((country) => (
                <Link
                  key={country.slug}
                  href={`/east-asia/${country.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-[#c9b98b] bg-[#fffdf7] px-5 py-3 font-bold text-[#263129] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#b44036] hover:text-white"
                >
                  <span className="text-xl">{country.flag}</span>
                  <span>{country.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CULTURE GALLERY
      ========================================================== */}
      <section className="relative overflow-hidden border-y-[18px] border-[#f3eee2] bg-[#e9dfc7] px-5 py-32 shadow-[inset_0_12px_30px_rgba(160,57,50,0.05),inset_0_-12px_30px_rgba(160,57,50,0.05)] sm:px-8 lg:px-12">
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-14 flex items-center gap-5">
            <span className="text-xs font-black uppercase tracking-[0.35em] text-[#a03932]">
              02
            </span>
            <div className="h-px flex-1 bg-[#a03932]/20" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#7a6553]">
              Art & creativity
            </span>
          </div>

          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.45em] text-[#a03932]">
                Look • Discover • Create
              </p>

              <h2 className="mt-5 text-5xl font-black leading-[0.92] md:text-7xl">
                Culture
                <span className="block font-serif italic text-[#a03932]">
                  Gallery.
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#59645c] md:text-xl">
                Explore art, craft and creative traditions from across East
                Asia. Discover work that inspires you, share pieces you find and
                add creations of your own.
              </p>

              <Link
                href="/east-asia/culture-gallery"
                className="group mt-10 inline-flex items-center gap-4 rounded-full bg-[#a03932] px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >
                Visit the gallery →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EAST ASIA THROUGH TIME
      ========================================================== */}
      <section className="relative overflow-hidden border-y-[18px] border-[#f3eee2] bg-[#1e2b25] px-5 py-28 text-white shadow-[inset_0_12px_35px_rgba(0,0,0,0.16),inset_0_-12px_35px_rgba(0,0,0,0.16)] sm:px-8 lg:px-12">
        <div className="absolute right-[-8rem] top-[-8rem] h-96 w-96 rounded-full border-[55px] border-white/[0.03]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-14 flex items-center gap-5">
            <span className="text-xs font-black uppercase tracking-[0.35em] text-[#d6b76f]">
              03
            </span>
            <div className="h-px flex-1 bg-white/15" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-white/35">
              History
            </span>
          </div>

          <p className="text-sm font-black uppercase tracking-[0.4em] text-[#d6b76f]">
            History connects
          </p>

          <div className="mt-6 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <h2 className="max-w-4xl text-5xl font-black leading-[0.95] md:text-7xl">
              East Asia
              <span className="block font-serif italic text-[#d8c9a5]">
                through time.
              </span>
            </h2>

            <p className="max-w-xl text-lg leading-relaxed text-white/60">
              Kingdoms rise. Borders change. Ideas travel. Explore how the
              histories of East Asia connect across thousands of years.
            </p>
          </div>

          {/* VISUAL MINI TIMELINE */}
          <div className="relative mt-20">
            <div className="h-px w-full bg-white/20" />

            <div className="flex justify-between">
              {["Ancient", "Kingdoms", "Empires", "Change", "Today"].map(
                (period) => (
                  <div
                    key={period}
                    className="-mt-2 flex flex-col items-center"
                  >
                    <div className="h-4 w-4 rounded-full border-4 border-[#1e2b25] bg-[#d6b76f]" />
                    <span className="mt-5 text-xs font-black uppercase tracking-[0.15em] text-white/40">
                      {period}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* REAL LINK */}
          <Link
            href="/east-asia/timeline"
            className="group mt-16 inline-flex items-center gap-4 rounded-full border-2 border-[#d6b76f] bg-[#d6b76f] px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-[#1e2b25] shadow-lg transition hover:-translate-y-1 hover:gap-6 hover:bg-[#ecd89e]"
          >
            Explore the timeline
            <span className="text-xl">→</span>
          </Link>
        </div>
      </section>

      {/* =========================================================
          DEEP DIVES
      ========================================================== */}
      <section className="relative overflow-hidden border-y-[18px] border-[#f3eee2] bg-[#cfc3a5] px-5 py-28 sm:px-8 lg:px-12">
        <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full border-[40px] border-[#a03932]/5" />
        <div className="pointer-events-none absolute -right-20 bottom-[-5rem] h-80 w-80 rounded-full border-[48px] border-[#263129]/5" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-14 flex items-center gap-5">
            <span className="text-xs font-black uppercase tracking-[0.35em] text-[#a03932]">
              04
            </span>
            <div className="h-px flex-1 bg-[#263129]/20" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#5f625b]">
              Stories & ideas
            </span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.42em] text-[#a03932]">
                Go deeper
              </p>
              <h2 className="mt-5 text-5xl font-black leading-[0.92] text-[#202721] md:text-7xl">
                East Asia
                <span className="block font-serif italic text-[#8d352f]">
                  Deep Dives.
                </span>
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-[#4f5b52] md:text-xl">
              Pick a topic and explore it in more detail through stories,
              visuals, activities and reliable sources.
            </p>
          </div>

          <div className="mt-16 grid gap-7 lg:grid-cols-2">
            <Link
              href="/east-asia/deep-dives/genghis-khan"
              className="group relative min-h-[390px] overflow-hidden rounded-[3rem_1.8rem_3.4rem_2.2rem] bg-[#26372e] p-8 text-white shadow-[0_18px_45px_rgba(38,49,41,0.18)] transition duration-300 hover:-translate-y-2 sm:p-10"
            >
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border-[35px] border-[#d6b76f]/10" />
              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.35em] text-[#d6b76f]">
                    History • Mongolia
                  </p>
                  <div className="mt-9 text-6xl">🏹</div>
                  <h3 className="mt-6 text-4xl font-black leading-none sm:text-5xl">
                    Genghis
                    <span className="block font-serif italic text-[#e4cf98]">
                      Khan
                    </span>
                  </h3>
                  <p className="mt-6 max-w-md leading-relaxed text-white/65">
                    Explore Temüjin&apos;s rise, the Mongol Empire and the
                    enormous impact it had across Asia and beyond.
                  </p>
                </div>
                <span className="mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-[#d6b76f] px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-[#26372e] transition group-hover:gap-5">
                  Explore Deep Dive →
                </span>
              </div>
            </Link>

            <Link
              href="/east-asia/deep-dives/anime"
              className="group relative min-h-[390px] overflow-hidden rounded-[1.8rem_3.2rem_2rem_3.5rem] border-[5px] border-[#17131F] bg-[#FFF7E8] p-8 text-[#17131F] shadow-[10px_10px_0_#17131F] transition duration-300 hover:-translate-y-2 sm:p-10"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    "radial-gradient(#17131F 1.5px, transparent 1.5px)",
                  backgroundSize: "13px 13px",
                }}
              />
              <div className="absolute -right-10 top-7 rotate-12 bg-[#FFD83D] px-10 py-3 text-xs font-black uppercase tracking-[0.25em] shadow-[5px_5px_0_#17131F]">
                Japan
              </div>
              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.35em] text-[#08A9D6]">
                    Culture • Animation
                  </p>
                  <div className="mt-9 text-6xl">💥</div>
                  <h3 className="mt-5 -rotate-1 text-5xl font-black uppercase leading-none sm:text-6xl">
                    Anime<span className="text-[#FF4F9A]">!</span>
                  </h3>
                  <p className="mt-6 max-w-md font-bold leading-relaxed text-black/60">
                    Discover how Japanese animation grew into a worldwide
                    cultural force — then explore, watch, draw and share.
                  </p>
                </div>
                <span className="mt-10 inline-flex w-fit items-center gap-3 border-[3px] border-[#17131F] bg-[#08A9D6] px-5 py-3 text-sm font-black uppercase tracking-[0.16em] shadow-[4px_4px_0_#17131F] transition group-hover:gap-5">
                  Explore Deep Dive →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          STUDENT DISCOVERIES
      ========================================================== */}
      <section className="border-y-[18px] border-[#f3eee2] bg-[#f3eddf] px-5 py-28 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <StudentDiscoveries
            items={allResources}
            region="east-asia"
            countries={[
              "China",
              "Japan",
              "South Korea",
              "North Korea",
              "Mongolia",
              "Taiwan",
            ]}
            topics={eastAsiaThemes}
            title="🌏 East Asia Discoveries"
            description="If you come across a website or resource you think may help, please add it below so other students can use it too."
          />
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================== */}
      <footer className="relative overflow-hidden bg-[#18251f] px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="relative mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.4em] text-[#d7b66f]">
              Continue exploring
            </p>

            <p className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
              Every place has a story waiting to be discovered.
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex w-fit items-center gap-3 border-b border-white/40 pb-2 text-sm font-bold uppercase tracking-[0.22em]"
          >
            ← Back to home
          </Link>
        </div>
      </footer>
    </main>
  );
}
