"use client";

import { useState } from "react";
import Link from "next/link";

const subjects = [
  {
    name: "Geography",
    label: "LAND & SEA",
    title: "Across the Pacific",
    description:
      "Explore Oceania's islands, oceans, countries and landscapes. Discover where people live and how geography shapes life across the region.",
    image:
      "/images/continents/oceania/countries/fiji/places/yasawa-islands.jpg",
    href: "/oceania#explore",
  },
  {
    name: "History",
    label: "PEOPLE & TIME",
    title: "Stories Through Time",
    description:
      "Discover Pacific voyaging, First Peoples, colonisation, resistance and independence. Explore how the past shapes Oceania today.",
    image:
      "/images/continents/oceania/countries/australia/uluru-red-centre-landscape.jpg",
    href: "/oceania#history",
  },
  {
    name: "Religion & Culture",
    label: "BELIEFS & TRADITIONS",
    title: "People of the Pacific",
    description:
      "Explore the beliefs, languages, traditions and living cultures of Aboriginal and Torres Strait Islander peoples, Māori and Pacific communities.",
    image:
      "/images/continents/oceania/countries/papua-new-guinea/papua-new-guinea-highlands-landscape.jpg",
    href: "/oceania#culture",
  },
  {
    name: "Art",
    label: "CREATE & DISCOVER",
    title: "The Creative Pacific",
    description:
      "Explore carving, weaving and Indigenous art traditions. Discover their cultural meanings and create something of your own.",
    image:
      "/images/continents/oceania/countries/new-zealand/milford-sound-landscape.jpg",
    href: "/oceania#art",
  },
  {
    name: "Cooking",
    label: "TASTE & MAKE",
    title: "Flavours of Oceania",
    description:
      "Discover Pacific ingredients, traditional dishes and recipes to try. Share what you make through Culture Kitchen.",
    image:
      "/images/continents/oceania/countries/tonga/tonga-vavau-islands-landscape.jpg",
    href: "/oceania#cooking",
  },
  {
    name: "Science",
    label: "WILD & WONDERFUL",
    title: "Wild Oceania",
    description:
      "Meet extraordinary animals, explore their habitats and discover how they survive.",
    image:
      "/images/continents/oceania/countries/australia/uluru-red-centre-landscape.jpg",
    href: "/oceania#science",
  },
  {
    name: "IT & Games",
    label: "PLAY & LEARN",
    title: "Digital Explorers",
    description:
      "Research countries, test your knowledge and create digital projects inspired by Oceania.",
    image:
      "/images/continents/oceania/countries/fiji/places/yasawa-islands.jpg",
    href: "/oceania#digital",
  },
];

export default function OceaniaSubjectExplorer() {
  const [active, setActive] = useState(0);
  const subject = subjects[active];

  return (
    <section className="bg-[#f4e8d1] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-black uppercase tracking-[.3em] text-[#bd633e]">
          Your Oceania Adventure
        </p>

        <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
          WHAT WILL YOU DISCOVER?
        </h2>

        <p className="mt-5 max-w-2xl text-lg">
          Choose a subject and explore Oceania your way.
        </p>

        {/* SUBJECT TABS */}
        <div
          role="tablist"
          aria-label="Oceania learning subjects"
          className="mt-10 flex flex-wrap gap-3"
        >
          {subjects.map((item, index) => (
            <button
              key={item.name}
              type="button"
              role="tab"
              aria-selected={active === index}
              onClick={() => setActive(index)}
              className={`rounded-full border-2 px-5 py-3 text-sm font-black transition ${
                active === index
                  ? "border-[#203d3b] bg-[#203d3b] text-white"
                  : "border-[#203d3b]/30 hover:bg-[#e4d8c3]"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* ACTIVE SUBJECT */}
        <div
          role="tabpanel"
          className="mt-9 grid overflow-hidden rounded-[40px] bg-[#d3e5d9] shadow-xl lg:grid-cols-2"
        >
          <div className="relative min-h-[280px] lg:min-h-[430px]">
            <img
              key={subject.image}
              src={subject.image}
              alt={subject.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-12">
            <p className="text-xs font-black uppercase tracking-[.3em] text-[#bd633e]">
              {subject.label}
            </p>

            <h3 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
              {subject.title}
            </h3>

            <p className="mt-6 text-lg leading-relaxed">
              {subject.description}
            </p>

            <Link
              href={subject.href}
              className="mt-9 w-fit rounded-full bg-[#203d3b] px-7 py-4 text-sm font-black text-white transition hover:bg-[#bd633e]"
            >
              Explore {subject.name} ↗
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
