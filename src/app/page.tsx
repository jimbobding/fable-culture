"use client";

import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const facts = [
    {
      icon: "🌍",
      text: "Africa is the world’s second-largest continent by area & population.",
      color: "text-yellow-500",
    },
    {
      icon: "🏞️",
      text: "The Nile is one of the longest rivers on Earth (over 6,600 km).",
      color: "text-blue-500",
    },
    {
      icon: "🏜️",
      text: "Home to the Sahara—largest hot desert in the world.",
      color: "text-orange-500",
    },
  ];

  const resources = [
    {
      href: "https://en.wikipedia.org/wiki/Africa",
      label: "Wikipedia: Africa",
    },
    {
      href: "https://www.nationalgeographic.com/places/africa",
      label: "National Geographic: Africa",
    },
    {
      href: "https://www.britannica.com/place/Africa",
      label: "Britannica: Africa",
    },
  ];

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-gray-50">
      {/* Background Map */}
      <div className="absolute inset-0">
        <Image
          src="/images/map.jpg"
          alt="Map of Africa"
          fill
          className="object-cover object-center opacity-10 md:opacity-20"
          sizes="100vw"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Fable-Culture
          </h1>
          <p className="mt-3 text-lg text-gray-700">
            Explore Africa’s regions, cultures, and stories.
          </p>
          <div className="mt-8">
            <Link
              href="/africa"
              className="inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow hover:bg-blue-700 transition"
            >
              Explore Regions →
            </Link>
          </div>
        </header>

        {/* Facts Section */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {facts.map((fact, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur p-6 shadow-md transform transition duration-500 hover:scale-105 hover:shadow-xl"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <span className={`text-3xl ${fact.color}`}>{fact.icon}</span>
                <p className="text-gray-800 font-medium">{fact.text}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Resources Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-center">Resources</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((r) => (
              <a
                key={r.href}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-gray-200 bg-white/80 backdrop-blur p-5 shadow-md hover:shadow-lg transition flex justify-between items-center"
              >
                <span className="font-medium text-blue-700 group-hover:underline">
                  {r.label}
                </span>
                <span aria-hidden>↗</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
