"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { resourceCategories } from "@/data/resources";

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

  // Videos category
  const videoCategory = resourceCategories.find((c) => c.slug === "videos");
  const videos = videoCategory?.resources || [];

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

        {/* Resources Hub */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Resources</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resourceCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/resources/${category.slug}`}
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

        {/* Videos Section
        {videos.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">Videos</h2>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {videos.map((video, index) => (
                <VideoCard key={index} video={video} />
              ))}
            </div>
          </section>
        )} */}
      </div>
    </main>
  );
}

// Individual video card
function VideoCard({ video }: { video: { href: string; label: string } }) {
  const [playVideo, setPlayVideo] = useState(false);

  // Extract YouTube VIDEO_ID
  const VIDEO_ID = video.href.split("v=")[1];

  return (
    <div
      className="w-full max-w-sm mx-auto relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
      onClick={() => setPlayVideo(true)}
    >
      {playVideo ? (
        <iframe
          className="w-full h-[200px] md:h-[250px] rounded-2xl"
          src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
          title={video.label}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <Image
          src={`https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`}
          alt={video.label}
          width={640}
          height={360}
          className="w-full h-[200px] md:h-[250px] object-cover"
        />
      )}

      <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white p-2 text-center font-medium">
        {video.label}
      </div>
    </div>
  );
}
