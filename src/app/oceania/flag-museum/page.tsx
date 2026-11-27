import Link from "next/link";

import FlagMuseum from "@/components/shared/flag-museum/FlagMuseum";
import { oceaniaFlagSections } from "@/data/oceania/flagMuseum/regions";
import { oceaniaMuseumFlags } from "@/data/oceania/flagMuseum/flags";
import { oceaniaFlagExhibits } from "@/data/oceania/flagMuseum/exhibits";

export default function OceaniaFlagMuseumPage() {
  return (
    <main className="min-h-screen bg-[#f4e8d1] text-[#203d3b]">
      <header className="bg-[#123f49] px-6 py-6 text-white">
        <nav className="mx-auto max-w-7xl">
          <Link
            href="/oceania"
            className="inline-flex rounded-full border border-white/40 px-5 py-3 text-sm font-bold transition hover:bg-white hover:text-[#123f49]"
          >
            ← Back to Oceania
          </Link>
        </nav>
      </header>

      <FlagMuseum
        regionId="oceania"
        title="THE PACIFIC FLAG MUSEUM"
        introduction="Welcome to Oceania's Flag Museum! Explore the flags of the Pacific, discover their colours and symbols, and investigate the stories behind their designs. Choose a geographical section to begin."
        sections={oceaniaFlagSections}
        flags={oceaniaMuseumFlags}
        exhibits={oceaniaFlagExhibits}
      />
    </main>
  );
}
