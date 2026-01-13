import Link from "next/link";

const ukCountries = {
  england: {
    title: "England",
    description: "Home to London and famous for history and culture.",
  },
  scotland: {
    title: "Scotland",
    description: "Known for mountains, castles, and strong traditions.",
  },
  wales: {
    title: "Wales",
    description: "Famous for its language, music, and community spirit.",
  },
  "northern-ireland": {
    title: "Northern Ireland",
    description: "Part of the island of Ireland with rich history.",
  },
};

export default function UKOverviewPage() {
  const countryKeys = Object.keys(ukCountries);

  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-8">🇬🇧 UK Countries</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {countryKeys.map((key) => {
          const country = ukCountries[key as keyof typeof ukCountries];
          return (
            <Link
              key={key}
              href={`/british-values/uk/${key}`}
              className="p-6 rounded-xl shadow-lg bg-white flex flex-col justify-center items-center text-center hover:scale-105 transition"
            >
              <h2 className="text-2xl font-bold mb-2">{country.title}</h2>
              <p className="text-gray-700 text-sm">{country.description}</p>
            </Link>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/british-values"
          className="inline-block bg-gray-700 text-white px-6 py-3 rounded hover:bg-gray-800 transition"
        >
          ← Back to British Values Home
        </Link>
      </div>
    </main>
  );
}
