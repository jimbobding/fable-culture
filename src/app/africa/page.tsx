import { africaRegions, RegionKey } from "@/data/africaRegions";

type Props = {
  params: { region: RegionKey };
};

// This lets Next.js pre-render all regions at build-time
export function generateStaticParams() {
  return Object.keys(africaRegions).map((key) => ({
    region: key as RegionKey,
  }));
}

export default function RegionPage({ params }: Props) {
  const region = africaRegions[params.region];

  if (!region) {
    return <div className="p-8">Region not found</div>;
  }

  return (
    <div className="min-h-screen p-8 bg-yellow-50">
      <h1 className="text-4xl font-bold mb-6">{region.title}</h1>
      <p className="mb-4 text-gray-700">{region.fact}</p>
      <div className="mb-6 text-gray-600">
        <strong>Countries1:</strong> {region.countries.join(", ")}
      </div>
      <p className="mb-8 max-w-3xl">{region.blurb}</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {region.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${region.title} image ${i + 1}`}
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  );
}
