"use client";

import Link from "next/link";

type Resource = {
  href: string;
  label: string;
};

type ResourceCategory = {
  category: string;
  slug: string;
  resources: Resource[];
};

type ResourceCategoryPageProps = {
  category: ResourceCategory | undefined;
  categoryColors?: Record<string, string>;
};

export default function ResourceCategoryPage({
  category,
  categoryColors,
}: ResourceCategoryPageProps) {
  if (!category) {
    return <div className="p-10 text-center text-xl">Category not found.</div>;
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">
          {category.category}
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {category.resources.map((resource: Resource, i) => (
            <Link
              key={i}
              href={resource.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block rounded-xl border border-gray-200 bg-white p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-1 ${
                categoryColors?.[category.category] || ""
              }`}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600">
                {resource.label}
              </h3>
              <p className="text-sm text-gray-500">Click to open resource</p>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/europe"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            ← Back to Resources
          </Link>
        </div>
      </div>
    </main>
  );
}
