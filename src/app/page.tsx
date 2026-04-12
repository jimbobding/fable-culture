"use client";

import Link from "next/link";
import Image from "next/image";

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
];

const upcomingEvents = [
  {
    start: "2026-04-15",
    end: "2026-04-15",
    title: "🎨 World Art Day",
    color: "bg-purple-100 border-purple-300",
    text: "World Art Day celebrates creativity and the importance of art in society. It is a great chance to explore artists, try new techniques, and share creative work in school.",
  },

  {
    start: "2026-04-22",
    end: "2026-04-22",
    title: "🌍 Earth Day",
    color: "bg-green-100 border-green-300",
    text: "Earth Day encourages people to care for the planet and think about how we can protect nature. It is a good opportunity to learn about recycling, wildlife, and looking after our environment.",
  },
  {
    start: "2026-04-23",
    end: "2026-04-23",
    title: "🏴 St George’s Day",
    color: "bg-red-100 border-red-300",
    text: "St George’s Day is the feast day of England’s patron saint. It can be used to explore English traditions, stories, symbols, and how national identity is celebrated in different ways.",
  },
];

export default function LandingPage() {
  const now = new Date();
  const monthName = now.toLocaleString("default", { month: "long" });

  const formatDateRange = (start: string, end: string) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const sameDay = startDate.toDateString() === endDate.toDateString();
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "short",
    };

    if (sameDay) return startDate.toLocaleDateString(undefined, options);
    if (startDate.getMonth() !== endDate.getMonth()) {
      return `${startDate.toLocaleDateString(undefined, options)}–${endDate.toLocaleDateString(undefined, options)}`;
    }
    return `${startDate.getDate()}–${endDate.toLocaleDateString(undefined, options)}`;
  };

  return (
    <main className="min-h-[90vh] bg-gradient-to-br from-pink-50 to-yellow-50 pb-8">
      {/* Header */}
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
          South Asia, the Middle East, and the UK. Learn about different
          regions, important ideas, and the stories that shape
          communities—helping us better understand the world we live in.
        </p>
      </header>

      {/* Continent Hover Cards */}
      <section className="mb-16 flex flex-col items-center justify-center gap-8 px-6 md:flex-row">
        {continents.map((continent, i) => (
          <Link
            key={i}
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

      {/* Gallery + Upload */}
      <section className="mb-16 px-6">
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

      {/* Upcoming Events / Calendar */}
      <section className="mx-auto mb-16 max-w-4xl px-6">
        <h2 className="mb-6 text-center text-3xl font-bold text-green-700 drop-shadow-[0_5px_10px_rgba(0,0,0,0.25)]">
          Important Events: {monthName}
        </h2>

        {/* Special Month Highlight */}
        <div className="mb-8 flex justify-center">
          <div className="w-full max-w-2xl rounded-[2rem] border border-amber-200 bg-gradient-to-r from-amber-100 via-orange-50 to-yellow-100 p-6 text-center shadow-md">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
              Special Month
            </p>
            <h3 className="text-2xl font-bold text-stone-800 md:text-3xl">
              🐾 National Pet Month
            </h3>
            <p className="mt-3 text-sm leading-7 text-stone-700 md:text-base">
              National Pet Month celebrates the joy that pets bring and helps
              raise awareness of responsible pet ownership. It is a lovely
              chance to talk about caring for animals, their needs, and the
              important role pets can play in people’s lives.
            </p>
            <p className="mt-3 text-sm font-medium text-amber-800">
              1 Apr – 5 May
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {upcomingEvents.map((event, i) => (
            <div
              key={i}
              className={`rounded-2xl border p-6 shadow transition hover:shadow-lg ${event.color}`}
            >
              <p className="font-semibold text-pink-600">
                {formatDateRange(event.start, event.end)}
              </p>
              <h3 className="mt-2 font-bold text-gray-800">{event.title}</h3>
              {event.text && <p className="mt-1 text-gray-600">{event.text}</p>}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
