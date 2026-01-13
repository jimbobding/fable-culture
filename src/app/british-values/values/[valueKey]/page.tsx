import { notFound } from "next/navigation";
import Link from "next/link";
import { valuesContent, BritishValueKey } from "@/data/britishValues";

type Props = {
  params: { valueKey: BritishValueKey };
};

export default async function BritishValuePage({ params }: Props) {
  // ✅ unwrap params properly
  const { valueKey } = await params;
  const value = valuesContent[valueKey];

  if (!value) notFound();

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">{value.title}</h1>
      <p className="text-gray-700 text-lg mb-6">{value.description}</p>
      <Link
        href="/british-values/values"
        className="text-blue-600 hover:underline"
      >
        ← Back to Overview
      </Link>
    </main>
  );
}
