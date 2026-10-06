import IncaHero from "@/components/regions/south-america/inca/IncaHero";
import IncaJourney from "@/components/regions/south-america/inca/IncaJourney";
import IncaRoad from "@/components/regions/south-america/inca/IncaRoad";
import IncaMessenger from "@/components/regions/south-america/inca/IncaMessenger";
import IncaFinalChapters from "@/components/regions/south-america/inca/IncaFinalChapters";
import { incaDeepDive } from "@/data/southAmerica/deepDives/inca";

export default function IncaDeepDivePage() {
  const { hero, opening, chapters } = incaDeepDive;

  return (
    <main className="overflow-hidden bg-[#E8D6AE]">
      <IncaHero {...hero} />

      <section
        id="begin-journey"
        className="relative bg-[#28271E] px-6 py-14 text-[#F1E2B9] md:px-10 md:py-16"
      >
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#E2B74F]">
            {opening.date}
          </p>

          <div className="mt-8">
            {opening.lines.map((line, index) => (
              <p
                key={line}
                className="text-4xl font-black uppercase leading-[1.05] tracking-[-0.03em] md:text-7xl"
                style={{
                  transform: `rotate(${index % 2 === 0 ? "-1" : "1"}deg)`,
                }}
              >
                {line}
              </p>
            ))}
          </div>

          <div className="my-14 h-[3px] w-full bg-[#B64935]" />

          <p className="max-w-4xl text-2xl font-bold leading-relaxed md:text-4xl">
            {opening.reveal}
          </p>

          <div className="mt-14 flex justify-center">
            <div className="rotate-[-2deg] border-[3px] border-[#F1E2B9] bg-[#B64935] px-8 py-5 text-center shadow-[8px_8px_0_#D4AA45]">
              <p className="text-xs font-black uppercase tracking-[0.25em]">
                First destination
              </p>

              <p className="mt-2 text-2xl font-black uppercase md:text-4xl">
                {opening.challenge}
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <div className="mx-auto h-8 w-[3px] bg-[#D4AA45]" />

            <div className="mx-auto mt-2 flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-[#D4AA45] text-xl font-black text-[#D4AA45]">
              01
            </div>

            <p className="mt-4 text-xs font-black uppercase tracking-[0.22em] text-[#D4AA45]">
              The road begins
            </p>
          </div>
        </div>
      </section>

      <IncaJourney chapters={chapters} />
      <IncaRoad />
      <IncaMessenger />
      <IncaFinalChapters />
    </main>
  );
}
