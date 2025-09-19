"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { resourceCategories } from "@/data/resources";

export default function ResourceCategoryPage() {
  const params = useParams();
  const categoryKey = (params?.category as string) || "";

  // Convert URL segment back to category name
  const formattedCategory = categoryKey
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");

  const category = resourceCategories.find(
    (c) => c.category.toLowerCase() === formattedCategory.toLowerCase()
  );

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-red-50 to-white p-8">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          Category not found
        </h1>
        <Link
          href="/"
          className="rounded-lg bg-blue-600 px-6 py-2 text-white font-medium shadow hover:bg-blue-700 transition"
        >
          ← Back to Home
        </Link>
      </div>
    );
  }

  // Assign colors per category
  const categoryColors: Record<
    string,
    { bg: string; text: string; border: string; shadow: string }
  > = {
    "Twinkl Resources": {
      bg: "hover:bg-blue-100",
      text: "hover:text-blue-700",
      border: "hover:border-blue-300",
      shadow: "hover:shadow-blue-200",
    },
    "Internal Resources": {
      bg: "hover:bg-green-100",
      text: "hover:text-green-700",
      border: "hover:border-green-300",
      shadow: "hover:shadow-green-200",
    },
    "External Resources": {
      bg: "hover:bg-purple-100",
      text: "hover:text-purple-700",
      border: "hover:border-purple-300",
      shadow: "hover:shadow-purple-200",
    },
  };

  const colors = categoryColors[category.category] || {
    bg: "hover:bg-gray-100",
    text: "hover:text-gray-700",
    border: "hover:border-gray-300",
    shadow: "hover:shadow-gray-200",
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Back link */}
        <Link
          href="/"
          className="inline-block mb-6 rounded-lg bg-blue-50 px-4 py-2 text-blue-600 font-medium hover:bg-blue-100 transition"
        >
          ← Back to Home
        </Link>

        {/* Header */}
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-10">
          {category.category}
        </h1>

        {/* Resources grid */}
        <ul className="grid gap-4 sm:grid-cols-2">
          {category.resources.map((r) => (
            <li key={r.href}>
              <a
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex justify-between items-center rounded-2xl border border-gray-200 p-4 shadow-md bg-white/80 backdrop-blur transition-transform hover:scale-105 ${colors.bg} ${colors.text} ${colors.border} ${colors.shadow}`}
              >
                <span
                  className={`font-medium transition-colors ${colors.text}`}
                >
                  {r.label}
                </span>
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                >
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
