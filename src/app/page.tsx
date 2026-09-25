"use client";

import Link from "next/link";
import Image from "next/image";

/* =========================================================
   REGIONS
========================================================= */

const continents = [
  {
    name: "Africa",
    href: "/africa",
    description: "Explore the vibrant cultures and diverse regions of Africa.",
    color: "from-orange-400 to-yellow-400",
  },
  {
    name: "Europe",
    href: "/europe",
    description: "Discover Europe’s rich history, art, and modern traditions.",
    color: "from-blue-400 to-purple-400",
  },
  {
    name: "United Kingdom",
    href: "/british-values/",
    description: "Discover the countries and values that make up the UK.",
    color: "from-red-500 to-blue-700",
  },
  {
    name: "Middle East",
    href: "/middle-east",
    description:
      "Explore the Levant, Arabia, and Persia & Mesopotamia through maps, timelines, and facts.",
    color: "from-amber-400 to-orange-500",
  },
  {
    name: "South Asia",
    href: "/south-asia",
    description: "Explore countries, cultures, and history across South Asia.",
    color: "from-rose-400 to-orange-400",
  },
  {
    name: "Caribbean",
    href: "/caribbean",
    description:
      "Discover vibrant islands, Carnival traditions, influential people, music, history, and cultures from across the Caribbean.",
    color: "from-cyan-400 via-sky-400 to-emerald-400",
  },
  {
    name: "East Asia",
    href: "/east-asia",
    description:
      "Explore China, Japan, Korea, Mongolia and Taiwan through culture, history, food, art, activities and deep dives.",
    color: "from-red-500 via-amber-400 to-emerald-500",
  },
];

/* =========================================================
   SEPTEMBER EVENTS
========================================================= */

const monthlyFeature = {
  title: "East & South East Asian Heritage Month",
  subtitle: "September 2026",
  theme: "Evolving Threads",
  emoji: "🌏",
  text: "East & South East Asian Heritage Month is celebrated throughout September in the UK. It is an opportunity to celebrate and learn about the cultures, histories, traditions and achievements of East and South East Asian communities. This year’s theme, Evolving Threads, explores how stories, identities and communities connect, adapt and grow across generations, places and cultures.",
};

const septemberEvents = [
  {
    start: "2026-09-15",
    end: "2026-09-15",
    title: "🗳️ International Day of Democracy",
    color: "bg-sky-100 border-sky-300",
    text: "International Day of Democracy is observed every year on 15 September. It is a chance to think about democracy, having a voice and how people can take part in decisions that affect their lives. Democracy includes ideas such as participation, dialogue, human rights and listening to different points of view.",
  },
  {
    start: "2026-09-19",
    end: "2026-09-19",
    title: "🏴‍☠️ International Talk Like a Pirate Day",
    color: "bg-amber-100 border-amber-300",
    text: "International Talk Like a Pirate Day is a fun celebration held every year on 19 September. Have a go at pirate words and phrases, create your own pirate name or discover stories about pirates and life at sea. Arrr!",
  },
  {
    start: "2026-09-25",
    end: "2026-09-25",
    title: "✏️ National Doodle Day",
    color: "bg-purple-100 border-purple-300",
    text: "National Doodle Day is an annual Epilepsy Action fundraising campaign that uses creativity to raise awareness of epilepsy. Anyone can take part — pick up a pen, create a doodle and use art to help start conversations about epilepsy and support people affected by the condition.",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function LandingPage() {
  const formatDateRange = (start: string, end: string) => {
    const startDate = new Date(`${start}T12:00:00`);
    const endDate = new Date(`${end}T12:00:00`);

    const sameDay = startDate.toDateString() === endDate.toDateString();

    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "numeric",
      month: "long",
    };

    if (sameDay) {
      return startDate.toLocaleDateString("en-GB", options);
    }

    return `${startDate.toLocaleDateString(
      "en-GB",
      options,
    )} – ${endDate.toLocaleDateString("en-GB", options)}`;
  };

  return (
    <main className="min-h-[90vh] bg-gradient-to-br from-pink-50 to-yellow-50 pb-8">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="px-6 py-16 text-center">
        <h1 className="mb-4 text-5xl font-extrabold text-pink-600 md:text-6xl">
          Fable-Culture
        </h1>

        <div className="mb-6 flex justify-center">
          <Image
            src="/images/FHLogo-Horizontal.svg"
            alt="Fable-Culture Logo"
            width={160}
            height={160}
            className="mx-auto drop-shadow-[0_5px_10px_rgba(0,0,0,.5)]"
          />
        </div>

        <p className="mx-auto mb-10 max-w-3xl text-lg text-gray-700 md:text-xl">
          Explore the cultures, traditions, and shared values of Africa, Europe,
          South Asia, East Asia, the Middle East, the Caribbean, and the UK.
          Learn about different regions, important ideas, and the stories that
          shape communities—helping us better understand the world we live in.
        </p>
      </header>

      {/* =====================================================
          REGION CARDS
      ===================================================== */}

      <section className="mx-auto mb-16 grid max-w-6xl grid-cols-1 place-items-center gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {continents.map((continent) => (
          <Link
            key={continent.href}
            href={continent.href}
            className={`group relative flex h-48 w-72 flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-br hover:shadow-xl ${continent.color}`}
          >
            <h2 className="mb-2 text-3xl font-bold text-gray-800 transition group-hover:text-white">
              {continent.name}
            </h2>

            <p className="px-4 text-sm text-gray-700 opacity-0 transition-opacity duration-300 group-hover:text-gray-100 group-hover:opacity-100">
              {continent.description}
            </p>
          </Link>
        ))}
      </section>

      {/* =====================================================
          GALLERY + UPLOAD
      ===================================================== */}

      <section className="mb-20 px-6">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          <Link
            href="/gallery"
            className="flex h-48 flex-col items-center justify-center rounded-2xl border border-gray-200 bg-gradient-to-br from-purple-500 to-pink-500 text-center text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span className="text-2xl font-bold">🎨 Gallery</span>

            <p className="mt-2 text-sm font-medium">
              See all cultures and traditions
            </p>
          </Link>

          <Link
            href="/upload"
            className="flex h-48 flex-col items-center justify-center rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-400 to-orange-500 text-center text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span className="text-2xl font-bold">📤 Upload Your Work</span>

            <p className="mt-2 max-w-xs text-sm font-medium">
              Share student work to be reviewed and added to the gallery
            </p>
          </Link>
        </div>
      </section>

      {/* =====================================================
          THIS MONTH AT FABLE
      ===================================================== */}

      <section className="mx-auto mb-20 max-w-6xl px-6">
        <div className="mb-10 text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-pink-500">
            September 2026
          </p>

          <h2 className="mt-2 text-3xl font-black text-green-700 drop-shadow-[0_5px_10px_rgba(0,0,0,0.18)] md:text-4xl">
            This Month at Fable
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Cultural celebrations, awareness days and events we&apos;re
            exploring together.
          </p>
        </div>

        {/* ===================================================
            MONTH-LONG FEATURE
        =================================================== */}

        <div className="mb-10 overflow-hidden rounded-[2rem] border border-orange-200 bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100 shadow-md">
          <div className="grid md:grid-cols-[0.75fr_1.25fr]">
            {/* FEATURE TITLE SIDE */}

            <div className="flex flex-col items-center justify-center bg-gradient-to-br from-orange-500 to-amber-400 p-8 text-center text-white md:p-10">
              <span className="text-6xl">{monthlyFeature.emoji}</span>

              <p className="mt-5 text-xs font-black uppercase tracking-[0.25em] text-orange-100">
                Special Month
              </p>

              <h3 className="mt-3 text-3xl font-black leading-tight">
                {monthlyFeature.title}
              </h3>

              <p className="mt-4 font-bold">{monthlyFeature.subtitle}</p>
            </div>

            {/* FEATURE INFORMATION */}

            <div className="p-7 sm:p-9 md:p-10">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-600">
                2026 Theme
              </p>

              <h4 className="mt-2 text-3xl font-black text-stone-800">
                {monthlyFeature.theme}
              </h4>

              <p className="mt-5 text-base leading-8 text-stone-700">
                {monthlyFeature.text}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "Culture",
                  "History",
                  "Food",
                  "Art",
                  "Music",
                  "Community",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white/80 px-4 py-2 text-xs font-bold text-orange-700 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            SEPTEMBER EVENTS
        =================================================== */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {septemberEvents.map((event) => (
            <article
              key={event.title}
              className={`flex h-full flex-col rounded-2xl border p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${event.color}`}
            >
              <p className="text-sm font-black text-pink-600">
                {formatDateRange(event.start, event.end)}
              </p>

              <h3 className="mt-3 text-xl font-black leading-tight text-gray-800">
                {event.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-7 text-gray-700">
                {event.text}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
