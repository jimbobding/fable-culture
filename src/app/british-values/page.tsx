"use client";

import Link from "next/link";
import Image from "next/image";

export default function BritishValuesHome() {
  return (
    <main className="relative min-h-screen  flex flex-col items-center p-8">
      {/* Background Map */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/uk-map.png"
          alt="Map of the United Kingdom"
          fill
          className="object-cover object-center opacity-10"
          sizes="100vw"
          priority
        />
      </div>

      {/* Back to Landing Page */}

      {/* Hero */}
      <div className="w-full max-w-4xl text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">🇬🇧 British Values</h1>
        <p className="text-gray-700 text-lg">
          Learn about the values and countries that make up the United Kingdom.
          Click a card below to start your journey.
        </p>
      </div>

      <div className="mb-10 flex justify-center w-full max-w-4xl">
        <Link
          href="/"
          className="group inline-flex items-center rounded-xl bg-gray-100 px-4 py-2 font-semibold text-gray-800 shadow hover:bg-gray-200 transition"
        >
          <span className="mr-2">🏠</span>
          Back to Landing Page
        </Link>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl w-full justify-items-center">
        {/* British Values Card */}
        <Link href="/british-values/values" className="w-full sm:w-auto">
          <div className="p-8 bg-white rounded-xl shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <span className="text-6xl mb-4">📜</span>
            <h2 className="text-2xl font-semibold mb-2">British Values</h2>
            <p className="text-gray-600 text-center">
              Learn about the values that guide UK society.
            </p>
          </div>
        </Link>

        {/* Explore UK Card */}
        <Link href="/british-values/uk" className="w-full sm:w-auto">
          <div className="p-8 bg-white rounded-xl shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <span className="text-6xl mb-4">🏴</span>
            <h2 className="text-2xl font-semibold mb-2">Explore the UK</h2>
            <p className="text-gray-600 text-center">
              Discover countries, culture, and landmarks.
            </p>
          </div>
        </Link>
      </div>
    </main>
  );
}
