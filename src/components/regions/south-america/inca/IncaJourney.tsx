import type { IncaChapter } from "@/data/southAmerica/deepDives/inca";

type IncaJourneyProps = {
  chapters: IncaChapter[];
};

export default function IncaJourney({ chapters }: IncaJourneyProps) {
  return (
    <section className="relative overflow-hidden bg-[#E7D3A5] px-4 py-20 text-[#211F1A] md:px-8 md:py-28">
      {/* PRINT TEXTURE */}
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(rgba(45,35,25,0.35) 0.7px, transparent 0.7px)",
          backgroundSize: "7px 7px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* COMIC MASTHEAD */}
        <div className="mb-6 border-[5px] border-[#211F1A] bg-[#B74732] px-5 py-7 shadow-[7px_7px_0_#211F1A] md:px-9">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#F2D98B]">
                Fable Culture presents
              </p>

              <h2 className="mt-2 text-5xl font-black uppercase leading-[0.82] tracking-[-0.05em] text-[#F6E6BD] md:text-8xl">
                Inside
                <br />
                Tawantinsuyu
              </h2>
            </div>

            <p className="max-w-sm border-[3px] border-[#211F1A] bg-[#E5B94D] p-4 text-sm font-black uppercase leading-5 shadow-[4px_4px_0_#211F1A]">
              8 investigations into the roads, messages, records, food,
              buildings and people of the Inca state.
            </p>
          </div>
        </div>

        {/* ISSUE STRIP */}
        <div className="mb-10 flex flex-wrap border-x-[5px] border-b-[5px] border-[#211F1A] bg-[#F2E2BA]">
          <div className="border-r-[3px] border-[#211F1A] px-4 py-2 text-xs font-black uppercase">
            Issue No. 01
          </div>

          <div className="border-r-[3px] border-[#211F1A] px-4 py-2 text-xs font-black uppercase">
            South America
          </div>

          <div className="px-4 py-2 text-xs font-black uppercase">
            History • Engineering • Evidence
          </div>
        </div>

        {/* COMIC GRID */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {chapters.map((chapter, index) => {
            const layouts = [
              "md:col-span-8",
              "md:col-span-4",
              "md:col-span-5",
              "md:col-span-7",
              "md:col-span-4",
              "md:col-span-8",
              "md:col-span-7",
              "md:col-span-5",
            ];

            const backgrounds = [
              "bg-[#F1DEAF]",
              "bg-[#E3B84E]",
              "bg-[#5E7860] text-[#F6E7BF]",
              "bg-[#F0D6A0]",
              "bg-[#C76A42]",
              "bg-[#E9D8AC]",
              "bg-[#244C40] text-[#F6E7BF]",
              "bg-[#E1B94F]",
            ];

            return (
              <article
                key={chapter.id}
                id={`inca-${chapter.id}`}
                className={`${layouts[index]} ${backgrounds[index]} relative min-h-[340px] overflow-hidden border-[5px] border-[#211F1A] p-6 shadow-[7px_7px_0_#211F1A] md:p-8`}
              >
                {/* BIG FADED ISSUE NUMBER */}
                <div
                  className="pointer-events-none absolute -right-3 -top-10 text-[10rem] font-black leading-none opacity-[0.08] md:text-[13rem]"
                  aria-hidden="true"
                >
                  {chapter.number}
                </div>

                {/* NUMBER BOX */}
                <div className="relative z-10 inline-flex border-[3px] border-[#211F1A] bg-[#F5E5BC] px-3 py-2 text-sm font-black text-[#211F1A] shadow-[3px_3px_0_#211F1A]">
                  {chapter.number}
                </div>

                <p className="relative z-10 mt-6 text-xs font-black uppercase tracking-[0.2em]">
                  {chapter.kicker}
                </p>

                <h3 className="relative z-10 mt-2 max-w-xl text-4xl font-black uppercase leading-[0.88] tracking-[-0.045em] md:text-6xl">
                  {chapter.title}
                </h3>

                <p className="relative z-10 mt-6 max-w-xl text-base font-bold leading-7">
                  {chapter.intro}
                </p>

                {/* COMIC QUESTION BOX */}
                <div className="relative z-10 mt-7 max-w-xl border-[3px] border-[#211F1A] bg-[#F5E5BC] p-4 text-[#211F1A] shadow-[4px_4px_0_#211F1A]">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#A44632]">
                    What would you do?
                  </p>

                  <p className="mt-2 text-lg font-black leading-tight">
                    {chapter.question}
                  </p>
                </div>

                <a
                  href={`#chapter-${chapter.id}`}
                  className="relative z-10 mt-7 inline-flex border-[3px] border-[#211F1A] bg-[#211F1A] px-5 py-3 text-xs font-black uppercase tracking-[0.15em] text-[#F6E7BF] shadow-[4px_4px_0_#B74732] transition hover:-translate-y-1"
                >
                  Open investigation →
                </a>
              </article>
            );
          })}
        </div>

        {/* END SPLASH */}
        <div className="mt-10 border-[5px] border-[#211F1A] bg-[#F1DEAF] p-7 text-center shadow-[8px_8px_0_#211F1A] md:p-12">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#A44632]">
            To be continued...
          </p>

          <p className="mt-4 text-4xl font-black uppercase leading-[0.9] tracking-[-0.04em] md:text-7xl">
            The empire ended.
            <span className="block text-[#B74732]">
              The Andean story didn't.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
