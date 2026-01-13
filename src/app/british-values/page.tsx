import Link from "next/link";

export default function BritishValuesHome() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">🇬🇧 British Values</h1>
        <p className="text-gray-700 text-lg mb-8">
          Learn about the values and countries that make up the United Kingdom.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/british-values/values"
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Explore British Values
          </Link>
          <Link
            href="/british-values/uk"
            className="px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition"
          >
            Explore the UK
          </Link>
        </div>
      </div>
    </main>
  );
}
