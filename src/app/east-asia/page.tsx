import Link from "next/link";
import StudentDiscoveries from "@/components/shared/StudentDiscoveries";
import {
  eastAsiaDiscoveries,
  eastAsiaThemes,
} from "@/data/eastAsia/discoveries";
import { getApprovedResources } from "@/app/lib/getApprovedResources";
export const dynamic = "force-dynamic";
import EastAsiaMap from "@/components/regions/east-asia/EastAsiaMap";

export default async function EastAsiaPage() {
  const approvedResources = await getApprovedResources("east-asia");

  const allResources = [...eastAsiaDiscoveries, ...approvedResources];
  return (
    <main className="min-h-screen overflow-hidden bg-[#f3eee2] text-[#202721]">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative min-h-[94vh] overflow-hidden bg-[#18251f] text-white">
        {/* Soft background lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_25%,rgba(190,52,43,0.38),transparent_25%),radial-gradient(circle_at_15%_80%,rgba(54,105,86,0.45),transparent_35%)]" />

        {/* Rising sun */}
        <div className="absolute right-[7%] top-[10%] h-40 w-40 rounded-full bg-[#c64538] opacity-90 shadow-[0_0_90px_rgba(198,69,56,0.28)] sm:h-52 sm:w-52 md:h-72 md:w-72" />

        {/* Decorative vertical label */}
        <div className="absolute left-5 top-1/2 hidden -translate-y-1/2 md:block">
          <p className="[writing-mode:vertical-rl] text-xs font-semibold uppercase tracking-[0.55em] text-white/40">
            Fable Culture • East Asia
          </p>
        </div>

        {/* Mountain scenery */}
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
                  href="#introduction"
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
      <section
        id="introduction"
        className="relative px-5 py-28 sm:px-8 lg:px-12"
      >
        {/* Decorative circles */}
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
          FEATURED EXPERIENCE
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#b44036] px-5 py-24 text-white sm:px-8 lg:px-12">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full border-[45px] border-white/5" />

        <div className="absolute -bottom-28 right-[5%] h-96 w-96 rounded-full border-[55px] border-[#edcf8d]/10" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.45em] text-[#f5d99b]">
              Featured experience
            </p>

            <h2 className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] md:text-7xl">
              Explore culture through creativity and discovery.
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75">
              This space will later become home to an interactive East Asia
              activity.
            </p>
          </div>

          <span className="inline-flex w-fit rounded-full border border-white/35 px-7 py-4 text-sm font-black uppercase tracking-[0.2em] text-white/80">
            Coming soon
          </span>
        </div>
      </section>

      {/* =========================================================
          VISUAL MAP AREA
      ========================================================== */}
      <section className="relative px-5 py-28 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.4em] text-[#a03932]">
                Find your way
              </p>

              <h2 className="mt-4 text-5xl font-black text-[#202721] md:text-7xl">
                Explore the region
              </h2>
            </div>

            <p className="max-w-md text-lg leading-relaxed text-[#657067]">
              The interactive map will sit here once the regional component is
              ready.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-[#c2b07d]/20 blur-3xl" />

            <div className="absolute -bottom-14 -right-10 h-52 w-52 rounded-full bg-[#5f8573]/20 blur-3xl" />

            <div className="relative">
              <EastAsiaMap />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FUTURE CONTENT TRANSITION
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#1e2b25] px-5 py-28 text-white sm:px-8 lg:px-12">
        <div className="absolute right-[-8rem] top-[-8rem] h-96 w-96 rounded-full border-[55px] border-white/[0.03]" />

        <div className="absolute bottom-[-10rem] left-[10%] h-[28rem] w-[28rem] rounded-full bg-[#b44036]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.4em] text-[#d6b76f]">
            The journey continues
          </p>

          <div className="mt-6 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <h2 className="max-w-4xl text-5xl font-black leading-[0.95] md:text-7xl">
              Countries, stories and activities will grow from here.
            </h2>

            <p className="max-w-xl text-lg leading-relaxed text-white/60">
              Once the visual direction feels right, this section can lead into
              country pages, deep dives, timelines and student discoveries.
            </p>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-3">
            <div className="min-h-52 border-t border-white/20 pt-7">
              <span className="font-serif text-4xl text-white/20">01</span>

              <p className="mt-8 text-2xl font-black">Explore countries</p>
            </div>

            <div className="min-h-52 border-t border-white/20 pt-7">
              <span className="font-serif text-4xl text-white/20">02</span>

              <p className="mt-8 text-2xl font-black">Discover stories</p>
            </div>

            <div className="min-h-52 border-t border-white/20 pt-7">
              <span className="font-serif text-4xl text-white/20">03</span>

              <p className="mt-8 text-2xl font-black">Share learning</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
      STUDENT DISCOVERIES
  ========================================================== */}
      <section className="bg-[#f3eddf] px-5 py-24 sm:px-8 lg:px-12">
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
            description="Help build our East Asia collection by finding useful websites, videos, museums, music, recipes and educational resources connected to the region."
          />
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================== */}
      <footer className="relative overflow-hidden bg-[#18251f] px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full bg-[#b44036]/25" />

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
            className="inline-flex w-fit items-center gap-3 border-b border-white/40 pb-2 text-sm font-bold uppercase tracking-[0.22em] transition hover:border-[#d7b66f] hover:text-[#ecd89e]"
          >
            ← Back to home
          </Link>
        </div>
      </footer>
    </main>
  );
}
