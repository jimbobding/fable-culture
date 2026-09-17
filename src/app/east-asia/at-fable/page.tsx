import Link from "next/link";

import RegionAtFable from "@/components/shared/region-at-fable/RegionAtFable";

const eastAsiaCountries = [
  "China",
  "Japan",
  "South Korea",
  "North Korea",
  "Mongolia",
  "Taiwan",
];

export default function EastAsiaAtFablePage() {
  return (
    <main>
      <div className="bg-[#b44036] px-5 pt-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/east-asia"
            className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2.5 text-sm font-black text-white transition hover:bg-white hover:text-[#b44036]"
          >
            ← Back to East Asia
          </Link>
        </div>
      </div>

      <RegionAtFable
        region="east-asia"
        regionName="East Asia"
        countries={eastAsiaCountries}
      />
    </main>
  );
}
