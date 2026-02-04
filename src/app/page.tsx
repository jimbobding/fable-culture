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
];

// ✅ Events — support single or multi-day events
const upcomingEvents = [
  {
    start: "2026-02-14",
    end: "2026-02-14",
    title: "Valentines Day",
    color: "bg-blue-100 border-blue-300",
    text: "Valentine’s Day started long ago as a day to celebrate love and friendship, named after Saint Valentine. Today, it’s all about sharing cards, flowers, and treats with people you care about—whether that’s friends, family, or someone special—spreading a little extra kindness and heart-shaped fun! 💌💖",
  },
  {
    start: "2026-02-17",
    end: "2026-02-17",
    title: "Pancake Day (Shrove Tuesday)",
    color: "bg-green-100 border-green-300",
    text: "Pancake Day (Shrove Tuesday) is the day before Lent starts, a time when Christians traditionally prepared by using up rich foods like eggs, milk, and sugar. Today, it’s a fun tradition of flipping pancakes, trying toppings, and sometimes even racing them—mixing history with a tasty treat! 🥞",
  },
  {
    start: "2026-02-27",
    end: "2026-02-27",
    title: "Pokémon Day",
    color: "bg-orange-100 border-orange-300",
    text: "Pokémon Day is celebrated every year on February 27th, marking the birthday of the very first Pokémon games back in 1996. Fans around the world celebrate by playing games, trading cards, watching shows, and sharing their favorite Pokémon—basically a day to celebrate all things Pikachu, Charizard, and beyond! ⚡🎉",
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
          and the UK. Learn about different regions, important ideas, and the
          stories that shape communities, helping us better understand the world
          we live in.
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
