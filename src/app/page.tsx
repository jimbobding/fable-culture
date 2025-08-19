"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-blue-50 to-white flex flex-col items-center">
      {/* Main Title */}
      <h1 className="text-5xl font-extrabold mb-8 text-center text-blue-700 drop-shadow-md">
        🌍 Welcome to Fable-Culture
      </h1>

      {/* About Africa */}
      <section className="max-w-3xl w-full mb-8 p-8 bg-yellow-50 rounded-2xl shadow-lg border border-yellow-200">
        <h2 className="text-3xl font-bold mb-4 text-yellow-800 text-center">
          About Africa
        </h2>
        <p className="text-gray-700 mb-3 text-center">
          Africa is the second largest continent and home to incredible
          diversity in culture, wildlife, and landscapes.
        </p>
        <p className="text-gray-700 mb-3 text-center">
          From the Sahara Desert to the Serengeti, Africa is full of history,
          vibrant communities, and natural wonders.
        </p>
      </section>

      {/* Resources */}
      <section className="max-w-3xl w-full mb-8 p-8 bg-green-50 rounded-2xl shadow-lg border border-green-200">
        <h2 className="text-3xl font-bold mb-4 text-green-800 text-center">
          Resources
        </h2>
        <ul className="list-disc pl-8 text-blue-600 space-y-2">
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Africa"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wikipedia: Africa
            </a>
          </li>
          <li>
            <a
              href="https://www.nationalgeographic.com/places/africa"
              target="_blank"
              rel="noopener noreferrer"
            >
              National Geographic: Africa
            </a>
          </li>
          <li>
            <a
              href="https://www.britannica.com/place/Africa"
              target="_blank"
              rel="noopener noreferrer"
            >
              Britannica: Africa
            </a>
          </li>
          <li>
            <a
              href="https://www.africa.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Africa.com
            </a>
          </li>
          <li>
            <a
              href="https://www.worldatlas.com/africa"
              target="_blank"
              rel="noopener noreferrer"
            >
              World Atlas: Africa
            </a>
          </li>
        </ul>
      </section>

      {/* Explore Regions Button */}
      <Link href="/africa">
        <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition text-lg font-semibold mt-4 shadow-md">
          Explore Regions →
        </button>
      </Link>
    </div>
  );
}
