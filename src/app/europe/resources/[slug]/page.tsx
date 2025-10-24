"use client";

import { useParams } from "next/navigation";
import { europeResourceCategories } from "@/data/europeResources";
import ResourceCategoryPage from "@/components/ResourceCategoryPage";

const europeCategoryColors = {
  "Downloads / Presentations":
    "hover:bg-blue-100 hover:text-blue-700 hover:border-blue-300",
};

export default function EuropeResourceSlugPage() {
  const params = useParams();
  const categorySlug = params?.slug as string;
  const category = europeResourceCategories.find(
    (c) => c.slug === categorySlug
  );

  return (
    <ResourceCategoryPage
      category={category}
      categoryColors={europeCategoryColors}
    />
  );
}
