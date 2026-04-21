"use client";

import Link from "next/link";

import SouthAsiaMap from "@/components/regions/south-asia/SouthAsiaMap";
import StudentDiscoveries from "@/components/shared/StudentDiscoveries";
import {
  southAsiaDiscoveries,
  southAsiaThemes,
} from "@/data/southAsia/discoveries";

const countries = [
  {
    name: "India",
    href: "/south-asia/india",
    description:
      "A large and diverse country with many languages, religions, traditions, and landscapes.",
    color:
      "border-orange-300 bg-gradient-to-br from-orange-200/80 via-amber-100/80 to-rose-100/80 text-orange-950",
  },
  {
    name: "Pakistan",
    href: "/south-asia/pakistan",
    description:
      "A country with rich history, mountain landscapes, major rivers, and strong cultural traditions.",
    color:
      "border-emerald-300 bg-gradient-to-br from-emerald-200/80 via-teal-100/80 to-lime-100/80 text-emerald-950",
  },
  {
    name: "Bangladesh",
    href: "/south-asia/bangladesh",
    description:
      "Known for its rivers, delta lands, textiles, literature, and vibrant culture.",
    color:
      "border-green-300 bg-gradient-to-br from-green-200/80 via-emerald-100/80 to-cyan-100/80 text-green-950",
  },
  {
    name: "Nepal",
    href: "/south-asia/nepal",
    description:
      "Home to the Himalayas, mountain communities, temples, and deep cultural heritage.",
    color:
      "border-rose-300 bg-gradient-to-br from-rose-200/80 via-pink-100/80 to-orange-100/80 text-rose-950",
  },
  {
    name: "Bhutan",
    href: "/south-asia/bhutan",
    description:
      "A Himalayan kingdom known for monasteries, mountains, and strong cultural identity.",
    color:
      "border-amber-300 bg-gradient-to-br from-amber-200/80 via-yellow-100/80 to-orange-100/80 text-amber-950",
  },
  {
    name: "Sri Lanka",
    href: "/south-asia/sri-lanka",
    description:
      "An island nation with ancient history, tea-growing regions, wildlife, and coastal culture.",
    color:
      "border-yellow-300 bg-gradient-to-br from-yellow-200/80 via-amber-100/80 to-orange-100/80 text-yellow-950",
  },
  {
    name: "Afghanistan",
    href: "/south-asia/afghanistan",
    description:
      "A mountainous country with long history, trade links, and cultural importance across Asia.",
    color:
      "border-sky-300 bg-gradient-to-br from-sky-200/80 via-indigo-100/80 to-cyan-100/80 text-sky-950",
  },
  {
    name: "Maldives",
    href: "/south-asia/maldives",
    description:
      "A chain of islands in the Indian Ocean known for marine life, atolls, and island culture.",
    color:
      "border-cyan-300 bg-gradient-to-br from-cyan-200/80 via-blue-100/80 to-teal-100/80 text-cyan-950",
  },
];

const timelineItems = [
  {
    year: "2500 BCE",
    title: "Indus Valley Civilisation",
    text: "One of the world’s earliest civilisations developed in South Asia, with planned cities, drainage systems, and trade networks across the region.",
  },
  {
    year: "1500 BCE",
    title: "Early Beliefs and Traditions",
    text: "Religious ideas and traditions began to form, shaping cultures, daily life, and ways of thinking that still influence South Asia today.",
  },
  {
    year: "500 BCE",
    title: "Rise of New Religions",
    text: "Major religions such as Hinduism and Buddhism spread across the region, influencing art, architecture, and ways of life.",
  },
  {
    year: "300 BCE",
    title: "Mauryan Empire",
    text: "One of the first large empires unified much of South Asia, helping spread ideas, trade, and political organisation.",
  },
  {
    year: "1200 CE",
    title: "Trade and Cultural Exchange",
    text: "South Asia became a key part of global trade routes, connecting Asia, the Middle East, and beyond.",
  },
  {
    year: "1500 CE",
    title: "Mughal Empire",
    text: "A powerful empire brought new art, architecture, and cultural blending, including famous landmarks like the Taj Mahal.",
  },
  {
    year: "1700–1900",
    title: "European Influence",
    text: "European powers arrived for trade and gradually took control of parts of South Asia, changing politics and economies.",
  },
  {
    year: "1947",
    title: "Independence and Partition",
    text: "Countries like India and Pakistan gained independence, leading to major political changes and the creation of new nations.",
  },
  {
    year: "Modern Day",
    title: "South Asia Today",
    text: "South Asia is home to diverse countries with unique identities, languages, and cultures, while sharing deep historical connections.",
  },
];

const printableResources = [
  {
    title: "South Asia Map Worksheet",
    href: "#",
    note: "Add your printable map worksheet link here.",
  },
  {
    title: "Country Fact File Template",
    href: "#",
    note: "Add your printable fact file resource here.",
  },
  {
    title: "South Asia Timeline Sheet",
    href: "#",
    note: "Add your printable timeline sheet here.",
  },
  {
    title: "Flags and Capitals Activity",
    href: "#",
    note: "Add your printable flags/capitals activity here.",
  },
];

// const [hovered, setHovered] = useState<string | null>(null);

export default function SouthAsiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff3e0] via-[#fde2d1] to-[#f8e7d8]">
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-12">
        <div className="flex justify-center pt-6 pb-6">
          <Link href="/">
            <img
              src="/images/FHLogo-Horizontal.svg"
              alt="Fable Culture logo"
              className="h-14 sm:h-16 w-auto cursor-pointer hover:scale-105 transition-transform duration-200"
            />
          </Link>
        </div>
        {/* ================= HERO ================= */}
        <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[#c2410c] via-[#db2777] to-[#7c3aed] opacity-95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,220,180,0.35),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.16),transparent_28%),radial-gradient(circle_at_50%_80%,rgba(251,191,36,0.18),transparent_35%)]" />
          <div className="absolute inset-0 opacity-15 bg-[linear-gradient(135deg,transparent_0%,transparent_46%,rgba(255,255,255,0.35)_50%,transparent_54%,transparent_100%)]" />

          <div className="relative px-6 py-14 sm:px-12 sm:py-20 text-center text-white space-y-6">
            <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-white/80 font-semibold">
              Fable Culture
            </p>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
              Explore South Asia
            </h1>

            <p className="max-w-3xl mx-auto text-base sm:text-xl leading-relaxed text-white/90">
              Discover the geography, history, cultures, traditions, and
              countries of South Asia — a region shaped by mountains, rivers,
              trade, faith, storytelling, and ancient civilisations.
            </p>

            <div className="flex flex-wrap justify-center gap-3 text-sm sm:text-base font-medium text-white/90">
              <span>India</span>
              <span>•</span>
              <span>Pakistan</span>
              <span>•</span>
              <span>Bangladesh</span>
              <span>•</span>
              <span>Nepal</span>
              <span>•</span>
              <span>Bhutan</span>
              <span>•</span>
              <span>Sri Lanka</span>
              <span>•</span>
              <span>Afghanistan</span>
              <span>•</span>
              <span>Maldives</span>
            </div>
          </div>
        </div>

        {/* ================= INTRO ================= */}
        <section className="space-y-8 rounded-[2rem] border border-orange-200/70 bg-gradient-to-br from-[#fff1dc] via-[#ffe8d6] to-[#ffe4ef] p-6 sm:p-8 shadow-lg">
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#4a1d0d]">
              What is South Asia?
            </h2>

            <p className="max-w-3xl mx-auto text-base sm:text-lg text-[#5f3b27] leading-relaxed">
              <span className="font-semibold">South Asia</span> is a region of
              Asia made up of countries connected by geography, history, trade,
              and culture. It includes great mountain ranges, major river
              systems, busy cities, coastal regions, and islands in the Indian
              Ocean.
            </p>

            {/* 🔹 Simple visual keywords (SEND friendly) */}
            <div className="flex justify-center gap-4 text-sm sm:text-base text-[#6b4226] font-medium">
              <span>🏔️ Mountains</span>
              <span>🌊 Rivers</span>
              <span>🏙️ Cities</span>
            </div>
          </div>

          {/* 🔥 CENTERED IMAGE */}
          <div className="flex justify-center">
            <img
              src="/images/continents/south-asia/hero.jpg"
              alt="Map and landscapes of South Asia"
              className="rounded-2xl shadow-lg max-h-72 object-cover w-full md:w-2/3"
            />
          </div>

          {/* 🔴 IMPORTANT BOX */}
          <div className="max-w-4xl mx-auto rounded-2xl border border-rose-300/70 bg-white/45 backdrop-blur px-6 py-5 shadow-sm">
            <p className="text-[#5f3b27] leading-relaxed">
              <span className="font-semibold text-rose-700">Important:</span>{" "}
              South Asia is a region, not one country. The countries within it
              each have their own identity, languages, traditions, and history.
            </p>
          </div>
        </section>

        {/* ================= TIMELINE ================= */}
        <div className="text-center space-y-3 mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9a3412]">
            Timeline
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#4a1d0d]">
            The Story of South Asia
          </h2>

          <p className="max-w-2xl mx-auto text-[#6b4226] leading-relaxed">
            Explore key moments that shaped South Asia — from ancient
            civilisations to the modern world.
          </p>
        </div>
        <section className="relative">
          {/* CENTER LINE */}
          <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#9a3412]/30 -translate-x-1/2" />

          {timelineItems.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={item.title}
                className="relative grid sm:grid-cols-2 items-center"
              >
                {/* CENTER DOT */}
                <div className="absolute left-5 sm:left-1/2 sm:-translate-x-1/2 top-6 z-10 h-5 w-5 rounded-full bg-[#9a3412] border-4 border-white shadow-md" />

                {/* LEFT SIDE */}
                <div
                  className={`${isLeft ? "sm:pr-10" : "sm:opacity-0"} hidden sm:block`}
                >
                  {isLeft && (
                    <div className="rounded-2xl border border-[#9a3412]/30 bg-[#fff7ed]/80 p-5 shadow-md">
                      <p className="text-sm font-semibold text-[#9a3412] uppercase tracking-wide">
                        {item.year}
                      </p>
                      <h3 className="text-xl font-bold text-[#4a1d0d] mt-1">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[#6b4226]">{item.text}</p>
                    </div>
                  )}
                </div>

                {/* RIGHT SIDE */}
                <div
                  className={`${!isLeft ? "sm:pl-10" : "sm:opacity-0"} pl-12 sm:pl-0`}
                >
                  {!isLeft ? (
                    <div className="rounded-2xl border border-[#7f1d1d]/30 bg-[#fff7ed]/80 p-5 shadow-md">
                      <p className="text-sm font-semibold text-[#7f1d1d] uppercase tracking-wide">
                        {item.year}
                      </p>
                      <h3 className="text-xl font-bold text-[#4a1d0d] mt-1">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[#6b4226]">{item.text}</p>
                    </div>
                  ) : (
                    <div className="sm:hidden rounded-2xl border border-[#9a3412]/30 bg-[#fff7ed]/80 p-5 shadow-md">
                      <p className="text-sm font-semibold text-[#9a3412] uppercase tracking-wide">
                        {item.year}
                      </p>
                      <h3 className="text-xl font-bold text-[#4a1d0d] mt-1">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[#6b4226]">{item.text}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </section>

        {/* ================= STUDENT DISCOVERIES ================= */}
        <StudentDiscoveries
          items={southAsiaDiscoveries}
          themes={southAsiaThemes}
        />

        {/* ================= MAP PLACEHOLDER ================= */}
        <section className="rounded-[2rem] border border-teal-200/70 bg-gradient-to-br from-[#dff7ef] via-[#e6fbff] to-[#dfefff] p-6 sm:p-8 shadow-lg space-y-6">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#123b3a]">
              Interactive Map
            </h2>
            <p className="max-w-3xl mx-auto text-[#245b59] leading-relaxed">
              Click a country to open its page and explore South Asia in more
              detail.
            </p>
          </div>

          <SouthAsiaMap />
        </section>

        {/* ================= COUNTRIES ================= */}
        <section className="rounded-[2rem] border border-indigo-200/70 bg-gradient-to-br from-[#efe8ff] via-[#f7ecff] to-[#ffeef8] p-6 sm:p-8 shadow-lg space-y-6">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#341b5a]">
              Explore the Countries of South Asia
            </h2>
            <p className="max-w-3xl mx-auto text-[#5b3f7c] leading-relaxed">
              Once the map is clickable, these cards can still stay underneath
              as an easier option for mobile devices and quick navigation.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {countries.map((country) => (
              <Link
                key={country.name}
                href={country.href}
                className={`rounded-2xl border p-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${country.color}`}
              >
                <h3 className="text-lg font-semibold mb-2">{country.name}</h3>
                <p className="text-sm leading-relaxed text-slate-800">
                  {country.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* ================= PRINTABLE RESOURCES ================= */}
        {/* <section className="rounded-[2rem] border border-rose-200/70 bg-gradient-to-br from-[#fff0ea] via-[#ffe6df] to-[#ffe0f0] p-6 sm:p-8 shadow-lg space-y-6">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4a1d0d]">
              Printable Resources
            </h2>
            <p className="max-w-3xl mx-auto text-[#6b4226] leading-relaxed">
              Add classroom-friendly worksheets, fact files, map tasks, and
              other printable resources here.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {printableResources.map((resource) => (
              <a
                key={resource.title}
                href={resource.href}
                className="rounded-2xl border border-rose-300 bg-white/55 backdrop-blur p-5 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-[#4a1d0d] mb-2">
                  {resource.title}
                </h3>
                <p className="text-[#6b4226] text-sm leading-relaxed">
                  {resource.note}
                </p>
              </a>
            ))}
          </div>
        </section> */}

        {/* ================= BACK BUTTON ================= */}
        <div className="mt-6 flex justify-center">
          <Link
            href="/"
            className="group inline-flex items-center rounded-xl bg-[#5c2d1f] px-5 py-3 font-semibold text-white shadow-lg hover:bg-[#4a2318] transition"
          >
            <span className="mr-2">🏠</span>
            Back to Landing Page
          </Link>
        </div>
      </div>
    </div>
  );
}
