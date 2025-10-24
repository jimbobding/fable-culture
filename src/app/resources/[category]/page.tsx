// // src/app/resources/[category]/page.tsx
// "use client";

// import { useParams } from "next/navigation";
// import ResourceCategoryPage from "@/components/ResourceCategoryPage";
// import { resourceCategories } from "@/data/resources"; // Africa data
// import { europeResourceCategories } from "@/data/europeResources"; // Europe data

// // Optional: hover colors per continent/category
// const categoryColors = {
//   "Food / Recipes":
//     "hover:bg-yellow-100 hover:text-yellow-700 hover:border-yellow-300",
//   "Art / Craft / Activities":
//     "hover:bg-pink-100 hover:text-pink-700 hover:border-pink-300",
//   "Culture / History / Geography":
//     "hover:bg-blue-100 hover:text-blue-700 hover:border-blue-300",
//   "Worksheets / Fact Files":
//     "hover:bg-green-100 hover:text-green-700 hover:border-green-300",
//   "Food / Display Cards":
//     "hover:bg-amber-100 hover:text-amber-700 hover:border-amber-300",
//   Videos: "hover:bg-purple-100 hover:text-purple-700 hover:border-purple-300",
//   "Downloads / Presentations":
//     "hover:bg-red-100 hover:text-red-700 hover:border-red-300",
// };

// export default function SharedResourcePage() {
//   const params = useParams();
//   const categorySlug = params?.category as string;

//   // Look for category in Africa or Europe
//   const category =
//     resourceCategories.find((c) => c.slug === categorySlug) ||
//     europeResourceCategories.find((c) => c.slug === categorySlug);

//   if (!category)
//     return (
//       <div className="text-center mt-20 text-red-600">Category not found</div>
//     );

//   return (
//     <ResourceCategoryPage category={category} categoryColors={categoryColors} />
//   );
// }
