import Link from "next/link";

const maps = [
  {
    name: "MAP 1 — PNG",
    src: "/images/continents/oceania/map/map1.png",
  },
  {
    name: "MAP 2 — JPEG",
    src: "/images/continents/oceania/map/map-oceania-1.jpeg",
  },
];

export default function MapComparisonPage() {
  return (
    <main className="min-h-screen bg-[#f4e8d1] px-5 py-12 text-[#203d3b]">
      <div className="mx-auto max-w-7xl">
        <Link href="/oceania" className="font-bold">
          ← Back to Oceania
        </Link>

        <h1 className="mt-10 text-5xl font-black">
          OCEANIA MAP COMPARISON
        </h1>

        <p className="mt-4 text-lg">
          Compare both maps and zoom in to inspect the smaller islands.
        </p>

        <div className="mt-12 space-y-16">
          {maps.map((map) => (
            <section key={map.name}>
              <h2 className="mb-5 text-3xl font-black">
                {map.name}
              </h2>

              <div className="overflow-x-auto rounded-3xl bg-white p-4 shadow-lg">
                <img
                  src={map.src}
                  alt={map.name}
                  className="h-auto min-w-[1000px] w-full"
                />
              </div>

              <a
                href={map.src}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-full bg-[#203d3b] px-6 py-3 font-bold text-white"
              >
                Open full-size map ↗
              </a>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
