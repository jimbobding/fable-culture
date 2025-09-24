"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { resourceCategories, Resource } from "@/data/resources";

// Map category → hover colors
const categoryColors: Record<string, string> = {
  "Food / Recipes":
    "hover:bg-yellow-100 hover:text-yellow-700 hover:border-yellow-300 hover:shadow-yellow-200",
  "Art / Craft / Activities":
    "hover:bg-pink-100 hover:text-pink-700 hover:border-pink-300 hover:shadow-pink-200",
  "Culture / History / Geography":
    "hover:bg-blue-100 hover:text-blue-700 hover:border-blue-300 hover:shadow-blue-200",
  "Worksheets / Fact Files":
    "hover:bg-green-100 hover:text-green-700 hover:border-green-300 hover:shadow-green-200",
  "Food / Display Cards":
    "hover:bg-amber-100 hover:text-amber-700 hover:border-amber-300 hover:shadow-amber-200",
  "Twinkl Resources":
    "hover:bg-indigo-100 hover:text-indigo-700 hover:border-indigo-300 hover:shadow-indigo-200",
  "Internal Resources":
    "hover:bg-green-100 hover:text-green-700 hover:border-green-300 hover:shadow-green-200",
  "External Resources":
    "hover:bg-purple-100 hover:text-purple-700 hover:border-purple-300 hover:shadow-purple-200",
};

// Helper to pick icon per resource type
function getResourceIcon(href: string) {
  if (href.startsWith("http")) return "🌐"; // external link
  if (href.endsWith(".pdf")) return "📄"; // PDF
  if (href.toLowerCase().includes("recipe")) return "🥘"; // recipe/food
  if (
    href.toLowerCase().includes("art") ||
    href.toLowerCase().includes("craft")
  )
    return "🎨"; // art/craft
  return "📌"; // default
}

export default function ResourceCategoryPage() {
  const params = useParams();
  const categorySlug = (params?.category as string) || "";

  // Find category by slug
  const category = resourceCategories.find((c) => c.slug === categorySlug);

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

  const colors =
    categoryColors[category.category] ||
    "hover:bg-gray-100 hover:text-gray-700 hover:border-gray-300 hover:shadow-gray-200";

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
          {category.resources.map((r: Resource) => (
            <li key={r.href}>
              <a
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex justify-between items-center rounded-2xl border border-gray-200 p-4 shadow-md bg-white/80 backdrop-blur transition-transform hover:scale-105 ${colors}`}
              >
                <span className="flex items-center gap-2 font-medium">
                  <span>{getResourceIcon(r.href)}</span>
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
