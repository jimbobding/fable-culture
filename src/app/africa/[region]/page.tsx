// src/app/africa/[region]/page.tsx
import { africaRegions, RegionKey } from "@/data/africaRegions";

type Props = {
  params: { region: string };
};

// ✅ Pre-render dynamic routes at build time
export function generateStaticParams() {
  return Object.keys(africaRegions).map((key) => ({
    region: key as RegionKey,
  }));
}

export default async function RegionPage({ params }: Props) {
  // Await params as Next.js 15 dynamic API
  const { region: regionKey } = await params;
  const region = africaRegions[regionKey as RegionKey];

  if (!region) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <p className="text-xl text-red-600">Region not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative">
      {/* Left Side - Text with region-specific background */}
      <div
        className="flex-1 p-12 flex flex-col justify-center"
        style={{ background: region.color }}
      >
        <h1 className="text-5xl font-extrabold mb-4">{region.title}</h1>
        <p className="text-lg text-gray-800 mb-6">{region.fact}</p>

        <h2 className="text-2xl font-semibold mb-2">Countries</h2>
        <p className="text-gray-700 mb-6">{region.countries.join(", ")}</p>

        <p className="text-gray-700">{region.blurb}</p>
      </div>

      {/* Right Side - Image Gallery */}
      <div className="flex-1 h-full p-8 bg-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {region.images.map((img, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={img}
              alt={`${region.title} image ${i + 1}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
