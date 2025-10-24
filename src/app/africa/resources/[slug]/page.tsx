"use client";

import { useParams } from "next/navigation";
import { resourceCategories } from "@/data/resources";
import ResourceCategoryPage from "@/components/ResourceCategoryPage";

const africaCategoryColors = {
  "Food / Recipes":
    "hover:bg-yellow-100 hover:text-yellow-700 hover:border-yellow-300",
  "Art / Craft / Activities":
    "hover:bg-pink-100 hover:text-pink-700 hover:border-pink-300",
  "Culture / History / Geography":
    "hover:bg-blue-100 hover:text-blue-700 hover:border-blue-300",
  "Worksheets / Fact Files":
    "hover:bg-green-100 hover:text-green-700 hover:border-green-300",
  "Food / Display Cards":
    "hover:bg-amber-100 hover:text-amber-700 hover:border-amber-300",
  Videos: "hover:bg-purple-100 hover:text-purple-700 hover:border-purple-300",
};

export default function AfricaResourceSlugPage() {
  const params = useParams();
  const categorySlug = params?.slug as string;
  const category = resourceCategories.find((c) => c.slug === categorySlug);

  return (
    <ResourceCategoryPage
      category={category}
      categoryColors={africaCategoryColors}
    />
  );
}
