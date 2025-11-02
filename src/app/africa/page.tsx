"use client";

import Link from "next/link";
import Image from "next/image";
import { resourceCategories } from "@/data/resources";

export default function AfricaPage() {
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
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Fable-Culture: Africa
          </h1>
          <p className="mt-3 text-lg text-gray-700">
            Explore Africa’s regions, cultures, and stories.
          </p>
          {/* Back to Landing Button */}
          <div className="mt-6 flex justify-center">
            <Link
              href="/"
              className="group inline-flex items-center rounded-xl bg-gray-100 px-4 py-2 font-semibold text-gray-800 shadow hover:bg-gray-200 transition"
            >
              {/* Optional icon/image */}
              <span className="mr-2">🏠</span>
              Back to Landing Page
            </Link>
          </div>

          <div className="mt-6">
            <Link
              href="/africa/regions"
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

        {/* Resources Hub */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Resources</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resourceCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/africa/resources/${category.slug}`}
                className="group rounded-2xl border border-gray-200 bg-white/80 backdrop-blur p-6 shadow-md hover:shadow-xl transform transition hover:-translate-y-1 text-center"
              >
                <h3 className="text-2xl font-semibold mb-2">
                  {category.category}
                </h3>
                <p className="text-gray-600">
                  {category.resources.length} resources
                </p>
                <span className="text-blue-500 text-xl mt-2 inline-block group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
