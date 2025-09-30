"use client";

import ContinentCard from "@/components/ContinentCard";

const continents = [
  {
    name: "Africa",
    image: "/images/continents/africa/africa.jpeg",
    href: "/africa",
  },
  {
    name: "Europe",
    image: "/images/continents/europe/europe.jpeg",
    href: "/europe",
  },
];

// Sample events for the calendar
const upcomingEvents = [
  { date: "2025-10-05", title: "African Storytelling Workshop" },
  { date: "2025-10-12", title: "European Culture Video Launch" },
  { date: "2025-10-20", title: "Interactive Map Session" },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="text-center py-16 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Fable-Culture
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10">
          Explore the cultures, regions, and fascinating stories of Africa and
          Europe. Discover facts, interactive resources, music, videos, and more
          — all in one place!
        </p>
      </header>

      {/* Continent Cards */}
      <section className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16 px-6">
        {continents.map((continent) => (
          <ContinentCard
            key={continent.name}
            name={continent.name}
            image={continent.image}
            href={continent.href}
          />
        ))}
      </section>

      {/* Upcoming Events / Calendar */}
      <section className="max-w-4xl mx-auto px-6 mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {upcomingEvents.map((event, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <p className="font-semibold text-blue-600">
                {new Date(event.date).toDateString()}
              </p>
              <h3 className="mt-2 font-bold text-gray-800">{event.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
