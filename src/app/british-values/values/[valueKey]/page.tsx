// src/app/british-values/[valueKey]/page.tsx
import { notFound } from "next/navigation";
import { britishValues, BritishValueKey } from "@/data/britishValues";
import FactsSection from "@/components/FactsSection";
import Link from "next/link";

type Props = {
  params: Promise<{ valueKey: BritishValueKey }>;
};

export default async function BritishValuePage({ params }: Props) {
  const { valueKey } = await params;
  const value = britishValues[valueKey];

  if (!value) notFound();

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div
        className="h-[25vh] flex items-center justify-center text-white"
        style={{ backgroundColor: value.theme.primary }}
      >
        <h1 className="text-5xl font-bold">{value.title}</h1>
      </div>

      <div className="max-w-4xl mx-auto p-8">
        <p className="text-lg mb-6">{value.description}</p>

        {/* Examples */}
        <section className="bg-white rounded-xl shadow p-6 mb-10">
          <h2 className="text-2xl font-semibold mb-4">Examples</h2>
          <ul className="list-disc list-inside space-y-2">
            {value.examples.map((example) => (
              <li key={example}>{example}</li>
            ))}
          </ul>
        </section>

        {/* Firebase Facts */}
        <FactsSection continent="british-values" regionKey={valueKey} />

        {/* Game Placeholder */}
        {/* <section className="mt-10 p-6 border-2 border-dashed rounded-xl text-center">
          <p className="text-gray-500">🎮 Interactive activity coming soon</p>
        </section> */}
      </div>
      {/* Themed Back Link */}
      <div className="mt-8 text-center">
        <Link
          href="/british-values/values"
          className="inline-block px-6 py-3 rounded font-semibold text-white transition transform hover:scale-105"
          style={{ backgroundColor: value.theme.primary }}
        >
          ← Back to British Values Overview
        </Link>
      </div>
    </main>
  );
}
