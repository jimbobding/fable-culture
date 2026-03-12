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
];

// ✅ Events — support single or multi-day events
const upcomingEvents = [
  {
    start: "2026-03-05",
    end: "2026-03-05",
    title: "World Book Day",
    color: "bg-blue-100 border-blue-300",
    text: "World Book Day is a celebration of books, authors, illustrators, and reading. In the UK and Ireland, it takes place on the first Thursday in March each year. The day encourages children and young people to discover the enjoyment of reading and to develop a lifelong reading habit.Many schools mark the occasion with activities such as dressing up as book characters, reading events, and the distribution of book tokens. Internationally, 23 April is recognised by UNESCO as World Book and Copyright Day",
  },
  {
    start: "2026-03-23",
    end: "2026-03-29",
    title: "Shakespeare Week",
    color: "bg-green-100 border-green-300",
    text: "Shakespeare Week is a national annual celebration of the life and works of William Shakespeare (1564–1616). It is organised to introduce primary school pupils to Shakespeare’s plays and language in accessible and creative ways.The week encourages performance, storytelling, and exploration of themes from his plays. Activities often include drama workshops, readings, and classroom projects designed to make Shakespeare engaging and understandable for young learners.",
  },
  {
    start: "2026-03-31",
    end: "2026-03-31",
    title: "International Transgender Day of Visibility",
    color: "bg-orange-100 border-orange-300",
    text: "International Transgender Day of Visibility (TDoV) is observed annually on 31 March. It was founded in 2009 by Rachel Crandall-Crocker, a transgender activist from the United States. The day is dedicated to recognising the lives, contributions, and achievements of transgender and non-binary people.It also raises awareness of the discrimination and challenges that many transgender people face globally. Unlike the Transgender Day of Remembrance in November, which commemorates victims of anti-trans violence, TDoV focuses on celebrating people who are living and on promoting understanding  and inclusion.",
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
    <main className="bg-gradient-to-br from-pink-50 to-yellow-50 min-h-[90vh] pb-8">
      {/* Header */}
      <header className="text-center py-16 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-pink-600">
          Fable-Culture
        </h1>

        {/* ✅ Logo under title */}
        <div className="flex justify-center mb-6">
          <Image
            src="/images/FHLogo-Horizontal.svg" // <-- replace this with your logo path
            alt="Fable-Culture Logo"
            width={160}
            height={160}
            className=" drop-shadow-[0_5px_10px_rgba(0,0,0,.5)] mx-auto"
          />
        </div>

        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10">
          Explore the cultures, traditions, and shared values of Africa, Europe,
          the Middle East, and the UK. Learn about different regions, important
          ideas, and the stories that shape communities—helping us better
          understand the world we live in.
        </p>
      </header>

      {/* Continent Hover Cards */}
      <section className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16 px-6">
        {continents.map((continent, i) => (
          <Link
            key={i}
            href={continent.href}
            className={`group relative w-72 h-48 flex flex-col justify-center items-center rounded-2xl border border-gray-200 bg-white text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-gradient-to-br ${continent.color}`}
          >
            <h2 className="text-3xl font-bold mb-2 text-gray-800 group-hover:text-white transition">
              {continent.name}
            </h2>
            <p className="text-gray-700 text-sm px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:text-gray-100">
              {continent.description}
            </p>
          </Link>
        ))}
      </section>
      {/* 🌎 Global Gallery Button */}
      <section className="flex justify-center mb-16 px-6">
        <Link
          href="/gallery" // <-- path to your global gallery page
          className="w-72 h-48 flex flex-col justify-center items-center rounded-2xl border border-gray-200 bg-gradient-to-br from-purple-500 to-pink-500 text-white text-center shadow-md font-bold text-2xl hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          🎨 Gallery
          <p className="mt-2 text-sm font-medium">
            See all cultures and traditions
          </p>
        </Link>
      </section>

      {/* Upcoming Events / Calendar */}
      <section className="max-w-4xl mx-auto px-6 mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-700 drop-shadow-[0_5px_10px_rgba(0,0,0,0.25)]">
          Important Events: {monthName}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {upcomingEvents.map((event, i) => (
            <div
              key={i}
              className={`p-6 rounded-2xl shadow hover:shadow-lg transition border ${event.color}`}
            >
              <p className="font-semibold text-pink-600">
                {formatDateRange(event.start, event.end)}
              </p>
              <h3 className="mt-2 font-bold text-gray-800">{event.title}</h3>
              {event.text && <p className="text-gray-500 mt-1">{event.text}</p>}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
