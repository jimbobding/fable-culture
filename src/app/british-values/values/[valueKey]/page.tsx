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
        {/* Description */}
        <p className="text-lg mb-6">{value.description}</p>

        {/* Question */}
        <section className="bg-white rounded-xl shadow p-6 mb-10">
          <h2 className="text-2xl font-semibold mb-4">Question</h2>
          <p className="text-gray-800">
            {Array.isArray(value.question) ? value.question[0] : value.question}
          </p>
        </section>

        {/* Answers (Firebase-powered) */}
        <FactsSection
          continent="british-values"
          regionKey={valueKey}
          sectionHeading="Answers"
          inputHeading="Type your answer"
          placeholder="Write your answer here"
        />
      </div>

      {/* Back Link */}
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
