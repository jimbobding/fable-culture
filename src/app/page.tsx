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
   OCTOBER 2026
========================================================= */

const octoberAwarenessMonths = [
  {
    title: "🏳️‍🌈 LGBTQ+ History Month",
    color:
      "bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 border-pink-200",
    labelColor: "text-pink-600",
    text: "LGBTQ+ History Month is a time to recognise and celebrate the lives, achievements and contributions of LGBTQ+ people throughout history. It’s an opportunity to learn about the struggles for equality, remember the people and communities who helped create change, and celebrate the diversity and resilience of LGBTQ+ communities today. Most importantly, it encourages us to keep learning, listening and building a more inclusive society for everyone.",
  },
  {
    title: "✊🏿 Black History Month",
    color:
      "bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100 border-amber-300",
    labelColor: "text-amber-700",
    text: "Black History Month is a time to recognise and celebrate the history, achievements and contributions of Black people and communities. It’s an opportunity to learn about the individuals and movements that have shaped society, acknowledge the challenges and inequalities faced throughout history, and celebrate the rich diversity of Black cultures and experiences today. It encourages us all to learn, reflect and recognise the important role Black communities continue to play in shaping our world.",
  },
  {
    title: "🧠 ADHD Awareness Month",
    color:
      "bg-gradient-to-br from-cyan-100 via-sky-50 to-indigo-100 border-cyan-200",
    labelColor: "text-cyan-700",
    text: "ADHD Awareness Month is a time to increase understanding of Attention Deficit Hyperactivity Disorder (ADHD), challenge misconceptions and reduce the stigma surrounding the condition. ADHD is a neurodevelopmental condition that can affect areas such as attention, impulsivity, activity levels, organisation and emotional regulation, with every person experiencing it differently. The month encourages greater awareness, understanding and acceptance, while recognising the strengths, experiences and contributions of people with ADHD and promoting more inclusive and supportive environments.",
  },
];

const octoberEvents = [
  {
    start: "2026-10-29",
    end: "2026-10-29",
    title: "🐈 National Cat Day",
    color: "bg-orange-100 border-orange-300",
    text: "National Cat Day is a chance to celebrate our feline friends and recognise the joy and companionship they bring to our lives. The day encourages people to appreciate cats, raise awareness of responsible pet ownership and highlight the importance of providing animals with safe, loving homes. It’s also an opportunity to learn more about cat welfare, support animal charities and, of course, give our cats some extra attention, treats and cuddles!",
  },
  {
    start: "2026-10-31",
    end: "2026-10-31",
    title: "🎃 Halloween",
    color: "bg-purple-100 border-purple-300",
    text: "Halloween is celebrated each year on 31 October and has roots stretching back more than 2,000 years. Its origins can be traced to Samhain, an ancient Celtic festival marking the end of the harvest and the beginning of winter. It was traditionally believed that, on this night, the boundary between the living and the spirit world became thinner. Over time, Samhain traditions blended with Christian observances such as All Hallows’ Eve, the evening before All Saints’ Day, helping shape the Halloween we know today. Modern celebrations include costumes, pumpkins, trick-or-treating and parties, while continuing to reflect the festival’s long history of marking the transition from autumn to winter.",
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
          THIS MONTH AT FABLE — OCTOBER 2026
      ===================================================== */}

      <section className="mx-auto mb-20 max-w-6xl px-6">
        <div className="mb-10 text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-orange-500">
            October 2026
          </p>

          <h2 className="mt-2 text-3xl font-black text-green-700 drop-shadow-[0_5px_10px_rgba(0,0,0,0.18)] md:text-4xl">
            This Month at Fable
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Cultural celebrations, awareness months and special days we&apos;re
            exploring together.
          </p>
        </div>

        {/* ===================================================
            AWARENESS MONTHS
        =================================================== */}

        <div className="mb-12">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-[3px] w-10 bg-pink-500" />

            <p className="text-xs font-black uppercase tracking-[0.25em] text-pink-600">
              Throughout October
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {octoberAwarenessMonths.map((item) => (
              <article
                key={item.title}
                className={`flex h-full flex-col rounded-[2rem] border p-7 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl ${item.color}`}
              >
                <p
                  className={`text-xs font-black uppercase tracking-[0.2em] ${item.labelColor}`}
                >
                  Awareness Month
                </p>

                <h3 className="mt-4 text-2xl font-black leading-tight text-stone-800">
                  {item.title}
                </h3>

                <p className="mt-5 flex-1 text-sm leading-7 text-stone-700">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* ===================================================
            SPECIAL DAYS
        =================================================== */}

        <div>
          <div className="mb-6 flex items-center gap-4">
            <div className="h-[3px] w-10 bg-orange-500" />

            <p className="text-xs font-black uppercase tracking-[0.25em] text-orange-600">
              Dates for the diary
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {octoberEvents.map((event) => (
              <article
                key={event.title}
                className={`flex h-full flex-col rounded-2xl border p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${event.color}`}
              >
                <p className="text-sm font-black text-pink-600">
                  {formatDateRange(event.start, event.end)}
                </p>

                <h3 className="mt-3 text-2xl font-black leading-tight text-gray-800">
                  {event.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-gray-700">
                  {event.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
