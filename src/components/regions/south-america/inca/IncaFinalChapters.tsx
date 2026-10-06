"use client";

import { useState } from "react";

type Reveal =
  | "khipu"
  | "food"
  | "stone"
  | "regions"
  | "change"
  | "legacy"
  | null;

export default function IncaFinalChapters() {
  const [reveal, setReveal] = useState<Reveal>(null);
  const [flippedChangeCards, setFlippedChangeCards] = useState<number[]>([]);

  function toggleChangeCard(index: number) {
    setFlippedChangeCards((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index]
    );
  }

  function resetAllActivities() {
    window.location.reload();
  }

  const panel =
    "relative overflow-hidden border-[5px] border-[#211F1A] shadow-[8px_8px_0_#211F1A]";

  const button =
    "border-[4px] border-[#211F1A] px-5 py-3 text-sm font-black uppercase shadow-[4px_4px_0_#211F1A] transition hover:-translate-y-1";

  return (
    <div className="bg-[#E7D3A5] text-[#211F1A]">

      {/* =========================================================
          03 — KHIPU
      ========================================================= */}

      <section
        id="chapter-khipu"
        className="relative px-4 py-16 md:px-8 md:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 grid border-[5px] border-[#211F1A] bg-[#B74732] shadow-[8px_8px_0_#211F1A] md:grid-cols-[130px_1fr]">
            <div className="flex items-center justify-center border-b-[5px] border-[#211F1A] bg-[#E4B849] p-5 md:border-b-0 md:border-r-[5px]">
              <span className="text-6xl font-black">03</span>
            </div>

            <div className="p-6 text-[#F7E6BA]">
              <p className="text-xs font-black uppercase tracking-[0.2em]">
                Historian's mystery
              </p>

              <h2 className="mt-2 text-4xl font-black uppercase leading-[0.9] md:text-6xl">
                Read the Knots!
              </h2>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-12">
            {/* KHIPU VISUAL */}
            <div
              className={`${panel} min-h-[430px] bg-[#244C40] p-7 text-[#F7E6BA] lg:col-span-7`}
            >
              <p className="max-w-md text-xl font-black">
                Imagine finding this. No alphabet. No written sentence.
                Just cords, colours and knots.
              </p>

              <div className="absolute left-[8%] right-[8%] top-[125px] h-5 rotate-[-2deg] border-[4px] border-[#211F1A] bg-[#C78B4C]" />

              {[
                ["18%", "#E5B94D", "210px"],
                ["31%", "#B74732", "260px"],
                ["45%", "#E8D7A8", "180px"],
                ["58%", "#70A099", "280px"],
                ["72%", "#D67B4D", "225px"],
                ["84%", "#E5B94D", "255px"],
              ].map(([left, colour, height], index) => (
                <div
                  key={left}
                  className="absolute top-[140px] w-3 border-x-2 border-[#211F1A]"
                  style={{
                    left,
                    height,
                    backgroundColor: colour,
                  }}
                >
                  <div
                    className="absolute left-1/2 h-7 w-7 -translate-x-1/2 rounded-full border-[3px] border-[#211F1A]"
                    style={{
                      top: `${45 + index * 20}px`,
                      backgroundColor: colour,
                    }}
                  />

                  <div
                    className="absolute left-1/2 h-6 w-6 -translate-x-1/2 rounded-full border-[3px] border-[#211F1A]"
                    style={{
                      bottom: `${20 + index * 7}px`,
                      backgroundColor: colour,
                    }}
                  />
                </div>
              ))}

              <div className="absolute bottom-5 right-5 rotate-[3deg] text-4xl font-black uppercase text-[#E5B94D]">
                KNOTS?!
              </div>
            </div>

            {/* KHIPU QUESTION */}
            <div className={`${panel} bg-[#F1DEAF] p-7 lg:col-span-5`}>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#A33F30]">
                Examine the evidence
              </p>

              <h3 className="mt-3 text-3xl font-black uppercase">
                What might this record?
              </h3>

              <div className="mt-7 grid gap-3">
                {["Numbers & quantities", "A modern alphabet", "Printed maps"].map(
                  (answer, index) => (
                    <button
                      key={answer}
                      type="button"
                      onClick={() => setReveal("khipu")}
                      className={`${button} ${
                        index === 0 ? "bg-[#E4B849]" : "bg-[#F7E9C4]"
                      } text-left`}
                    >
                      {String.fromCharCode(65 + index)} — {answer}
                    </button>
                  )
                )}
              </div>

              {reveal === "khipu" && (
                <div className="mt-7 border-[4px] border-[#211F1A] bg-[#70A099] p-5">
                  <p className="font-black">
                    Khipu were used for record-keeping, including numerical
                    and administrative information.
                  </p>

                  <p className="mt-3 font-bold">
                    Historians are still investigating how much additional
                    information their cords, colours and knots may have encoded.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          04 — FOOD
      ========================================================= */}

      <section
        id="chapter-food"
        className="bg-[#D17B4E] px-4 py-16 md:px-8 md:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-12">
            <div className={`${panel} bg-[#F1DEAF] p-7 lg:col-span-5`}>
              <span className="inline-block border-[3px] border-[#211F1A] bg-[#E4B849] px-4 py-2 text-sm font-black">
                04
              </span>

              <p className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-[#A33F30]">
                Supply challenge
              </p>

              <h2 className="mt-2 text-5xl font-black uppercase leading-[0.85]">
                Feed the State!
              </h2>

              <p className="mt-5 font-bold leading-7">
                People travelling and working across a huge state needed
                supplies. Where would you keep useful reserves?
              </p>

              <div className="mt-7 grid gap-3">
                <button
                  type="button"
                  onClick={() => setReveal("food")}
                  className={`${button} bg-[#244C40] text-[#F7E6BA]`}
                >
                  Build storehouses
                </button>

                <button
                  type="button"
                  onClick={() => setReveal("food")}
                  className={`${button} bg-[#F7E9C4]`}
                >
                  Carry everything from Cusco
                </button>
              </div>

              {reveal === "food" && (
                <div className="mt-6 border-[4px] border-[#211F1A] bg-[#E4B849] p-5">
                  <p className="font-black">
                    Storehouses helped make supplies available at strategic
                    places rather than relying on everything coming from one
                    location.
                  </p>
                </div>
              )}
            </div>

            {/* STOREHOUSE CARTOON */}
            <div
              className={`${panel} min-h-[420px] bg-[#79966D] lg:col-span-7`}
            >
              <div className="absolute inset-x-0 bottom-0 h-[48%] bg-[#A86F42]" />

              <div className="absolute bottom-[100px] left-[12%] h-40 w-52 border-[5px] border-[#211F1A] bg-[#D8AE68]">
                <div className="absolute -left-5 -right-5 -top-12 h-14 border-[5px] border-[#211F1A] bg-[#754A34] [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
                <div className="absolute bottom-0 left-[72px] h-20 w-14 border-x-[5px] border-t-[5px] border-[#211F1A] bg-[#4C382C]" />
              </div>

              <div className="absolute bottom-[85px] right-[12%] rotate-[3deg] border-[5px] border-[#211F1A] bg-[#E4B849] p-5 shadow-[6px_6px_0_#211F1A]">
                <p className="text-4xl">🌽 🥔</p>
                <p className="mt-2 text-lg font-black uppercase">
                  Supplies!
                </p>
              </div>

              <p className="absolute right-6 top-6 rotate-[2deg] text-4xl font-black uppercase text-[#F5E4B8] [text-shadow:3px_3px_0_#211F1A]">
                Stock up!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          05 — STONE
      ========================================================= */}

      <section
        id="chapter-stone"
        className="px-4 py-16 md:px-8 md:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className={`${panel} bg-[#F1DEAF]`}>
            <div className="grid lg:grid-cols-2">
              <div className="border-b-[5px] border-[#211F1A] p-7 lg:border-b-0 lg:border-r-[5px]">
                <span className="text-6xl font-black text-[#B74732]">05</span>

                <h2 className="mt-3 text-5xl font-black uppercase leading-[0.85]">
                  Build in Stone!
                </h2>

                <p className="mt-5 font-bold leading-7">
                  Which wall would you trust?
                </p>

                <div className="mt-7 grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setReveal("stone")}
                    className={`${button} bg-[#E4B849]`}
                  >
                    Fitted stones
                  </button>

                  <button
                    type="button"
                    onClick={() => setReveal("stone")}
                    className={`${button} bg-[#F7E9C4]`}
                  >
                    Loose stack
                  </button>
                </div>

                {reveal === "stone" && (
                  <p className="mt-7 border-[4px] border-[#211F1A] bg-[#70A099] p-5 font-black">
                    Inca builders are famous for carefully fitted stonework.
                    Major surviving sites show extraordinary control of stone,
                    shape and construction.
                  </p>
                )}
              </div>

              {/* MASONRY */}
              <div className="grid min-h-[390px] grid-cols-4 grid-rows-4 gap-[5px] bg-[#211F1A] p-[5px]">
                {[
                  "#9D7650",
                  "#C19A64",
                  "#8B6949",
                  "#B38A5B",
                  "#C5A06C",
                  "#96704D",
                  "#B68E60",
                  "#876348",
                  "#AA8156",
                  "#C29B68",
                  "#92704E",
                  "#B98E5D",
                  "#8E6949",
                  "#B78E61",
                  "#C39C68",
                  "#9D7650",
                ].map((colour, index) => (
                  <div
                    key={index}
                    className={`border-[3px] border-[#211F1A] ${
                      index % 3 === 0 ? "rotate-[1deg]" : "rotate-[-1deg]"
                    }`}
                    style={{ backgroundColor: colour }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          06 — FOUR REGIONS
      ========================================================= */}

      <section
        id="chapter-four-regions"
        className="bg-[#244C40] px-4 py-16 text-[#F7E6BA] md:px-8 md:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-5">
            <span className="inline-block border-[4px] border-[#211F1A] bg-[#E4B849] px-4 py-2 text-2xl font-black text-[#211F1A] shadow-[4px_4px_0_#B74732]">
              06
            </span>

            <h2 className="mt-5 text-5xl font-black uppercase leading-[0.85] md:text-7xl">
              Four Regions.
              <br />
              One State.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {[
              "Chinchaysuyu",
              "Antisuyu",
              "Collasuyu",
              "Cuntisuyu",
            ].map((region, index) => (
              <button
                key={region}
                type="button"
                onClick={() => setReveal("regions")}
                className={`${panel} min-h-[160px] p-7 text-left transition hover:-translate-y-1 ${
                  ["bg-[#B74732]", "bg-[#6F8B68]", "bg-[#D4A943]", "bg-[#C9784C]"][
                    index
                  ]
                }`}
              >
                <p className="text-xs font-black uppercase tracking-[0.2em]">
                  Quarter {index + 1}
                </p>

                <p className="mt-3 text-3xl font-black uppercase">{region}</p>
              </button>
            ))}
          </div>

          {reveal === "regions" && (
            <div className="mx-auto mt-6 max-w-3xl border-[5px] border-[#211F1A] bg-[#F1DEAF] p-7 text-center text-[#211F1A] shadow-[7px_7px_0_#B74732]">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#A33F30]">
                At the centre
              </p>

              <p className="mt-2 text-5xl font-black uppercase">CUSCO</p>

              <p className="mt-4 font-bold leading-7">
                Tawantinsuyu means the realm of four parts. Cusco was the
                political and symbolic centre from which the four great
                divisions were understood.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          07 — CHANGE
      ========================================================= */}

      <section
        id="chapter-change"
        className="bg-[#C36C48] px-4 py-16 md:px-8 md:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <span className="text-6xl font-black">07</span>

            <h2 className="mt-2 text-5xl font-black uppercase leading-[0.85] md:text-7xl">
              Everything
              <br />
              Changes.
            </h2>

            <p className="mt-5 max-w-2xl border-[4px] border-[#211F1A] bg-[#F1DEAF] px-5 py-3 font-black shadow-[5px_5px_0_#211F1A]">
              CLICK EACH COMIC CARD TO OPEN THE EVIDENCE FILE.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                number: "1",
                title: "Internal conflict",
                front:
                  "The Inca state was already affected by a struggle for power.",
                back:
                  "After the death of Huayna Capac, a struggle for power developed between Atahualpa and Huáscar. Their conflict divided the Inca state shortly before the Spanish invasion.",
                stamp: "POWER STRUGGLE",
                colour: "bg-[#E4B849]",
              },
              {
                number: "2",
                title: "Spanish invasion",
                front:
                  "Spanish forces entered a complicated political situation in the Andes.",
                back:
                  "Francisco Pizarro and a relatively small Spanish force entered the Andes in 1532. They captured Atahualpa at Cajamarca. Spanish weapons mattered, but so did alliances with Indigenous groups who had their own reasons for opposing Inca rule.",
                stamp: "1532",
                colour: "bg-[#70A099]",
              },
              {
                number: "3",
                title: "Disease & upheaval",
                front:
                  "Disease, violence and political disruption transformed Andean life.",
                back:
                  "Diseases brought from Europe spread through the Americas and caused devastating loss of life. Epidemics reached the Andes during a period already marked by conflict and major political disruption.",
                stamp: "MAJOR UPHEAVAL",
                colour: "bg-[#D9A36A]",
              },
            ].map((item, index) => {
              const flipped = flippedChangeCards.includes(index);

              return (
                <button
                  key={item.number}
                  type="button"
                  onClick={() => toggleChangeCard(index)}
                  aria-pressed={flipped}
                  className="group min-h-[340px] text-left [perspective:1000px]"
                >
                  <div
                    className={`relative h-full min-h-[340px] transition-transform duration-500 [transform-style:preserve-3d] ${
                      flipped ? "[transform:rotateY(180deg)]" : ""
                    }`}
                  >
                    {/* FRONT */}
                    <div className="absolute inset-0 border-[5px] border-[#211F1A] bg-[#F1DEAF] p-6 shadow-[8px_8px_0_#211F1A] [backface-visibility:hidden]">
                      <div className="flex items-start justify-between gap-4">
                        <span className="text-6xl font-black text-[#B74732]">
                          {item.number}
                        </span>

                        <span className="rotate-[3deg] border-[3px] border-[#211F1A] bg-[#211F1A] px-3 py-2 text-[10px] font-black uppercase tracking-[0.15em] text-[#F7E6BA]">
                          Click to investigate
                        </span>
                      </div>

                      <h3 className="mt-5 text-3xl font-black uppercase leading-none">
                        {item.title}
                      </h3>

                      <p className="mt-5 font-bold leading-7">{item.front}</p>

                      <div className="absolute bottom-5 left-6 text-xs font-black uppercase tracking-[0.18em] text-[#A33F30]">
                        Turn over →
                      </div>
                    </div>

                    {/* BACK */}
                    <div
                      className={`absolute inset-0 border-[5px] border-[#211F1A] ${item.colour} p-6 shadow-[8px_8px_0_#211F1A] [backface-visibility:hidden] [transform:rotateY(180deg)]`}
                    >
                      <div className="inline-block rotate-[-2deg] border-[3px] border-[#211F1A] bg-[#F1DEAF] px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em]">
                        Evidence file
                      </div>

                      <div className="mt-5 inline-block rotate-[2deg] border-[3px] border-[#211F1A] px-3 py-2 text-sm font-black uppercase">
                        {item.stamp}
                      </div>

                      <h3 className="mt-5 text-2xl font-black uppercase leading-none">
                        {item.title}
                      </h3>

                      <p className="mt-4 font-bold leading-6">{item.back}</p>

                      <div className="absolute bottom-5 left-6 text-xs font-black uppercase tracking-[0.18em]">
                        ↩ Flip back
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-8 border-[5px] border-[#211F1A] bg-[#211F1A] p-6 text-[#F7E6BA] shadow-[8px_8px_0_#E4B849] md:p-8">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#E4B849]">
              Historian's question
            </p>

            <h3 className="mt-3 text-3xl font-black uppercase md:text-4xl">
              So what caused the change?
            </h3>

            <button
              type="button"
              onClick={() => setReveal("change")}
              className="mt-6 border-[4px] border-[#F7E6BA] bg-[#B74732] px-6 py-4 text-sm font-black uppercase tracking-[0.15em] shadow-[5px_5px_0_#E4B849] transition hover:-translate-y-1"
            >
              Reveal the bigger picture →
            </button>

            {reveal === "change" && (
              <div className="mt-7 border-[4px] border-[#211F1A] bg-[#E4B849] p-6 text-[#211F1A]">
                <p className="text-2xl font-black uppercase">
                  There isn't one simple answer.
                </p>

                <p className="mt-3 font-bold leading-7">
                  Internal conflict, Spanish invasion, Indigenous alliances,
                  disease and major political disruption all mattered.
                  History is more complicated than saying that one small army
                  simply defeated an empire.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          08 — LEGACY
      ========================================================= */}

      <section
        id="chapter-legacy"
        className="relative overflow-hidden bg-[#72A49A] px-4 py-20 md:px-8 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className={`${panel} bg-[#F1DEAF]`}>
            <div className="grid lg:grid-cols-2">
              {/* MODERN ANDES CARTOON */}
              <div className="relative min-h-[440px] overflow-hidden border-b-[5px] border-[#211F1A] bg-[#7AA69D] lg:border-b-0 lg:border-r-[5px]">
                <div className="absolute right-10 top-10 h-24 w-24 rounded-full border-[5px] border-[#211F1A] bg-[#E4B849]" />

                <svg
                  className="absolute inset-x-0 bottom-0 h-[75%] w-full"
                  viewBox="0 0 700 420"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M-40 340 L150 110 L260 250 L380 80 L550 270 L700 130 L760 350 L760 450 L-40 450 Z"
                    fill="#547158"
                    stroke="#211F1A"
                    strokeWidth="8"
                  />

                  <path
                    d="M-20 390 C160 330 260 390 400 315 C520 255 600 320 760 250"
                    fill="none"
                    stroke="#211F1A"
                    strokeWidth="48"
                  />

                  <path
                    d="M-20 390 C160 330 260 390 400 315 C520 255 600 320 760 250"
                    fill="none"
                    stroke="#D2A760"
                    strokeWidth="35"
                  />
                </svg>

                <div className="absolute bottom-7 left-7 rotate-[-2deg] border-[4px] border-[#211F1A] bg-[#E4B849] px-5 py-3 text-2xl font-black uppercase shadow-[5px_5px_0_#211F1A]">
                  Still here.
                </div>
              </div>

              <div className="p-7 md:p-10">
                <span className="text-6xl font-black text-[#B74732]">08</span>

                <p className="mt-5 text-xs font-black uppercase tracking-[0.2em] text-[#A33F30]">
                  Living legacy
                </p>

                <h2 className="mt-2 text-5xl font-black uppercase leading-[0.85] md:text-6xl">
                  The Road
                  <br />
                  Is Still Here.
                </h2>

                <p className="mt-6 font-bold leading-7">
                  The Inca state ended, but Andean communities, languages,
                  knowledge and traditions did not disappear. Parts of the
                  Qhapaq Ñan continue to connect communities today.
                </p>

                <button
                  type="button"
                  onClick={() => setReveal("legacy")}
                  className={`${button} mt-7 bg-[#244C40] text-[#F7E6BA]`}
                >
                  Finish the journey
                </button>

                {reveal === "legacy" && (
                  <div className="mt-7 border-[4px] border-[#211F1A] bg-[#E4B849] p-5">
                    <p className="text-2xl font-black uppercase leading-tight">
                      Ancient history isn't only about what disappeared.
                    </p>

                    <p className="mt-3 font-bold">
                      It is also about what survived, changed and continues.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* FINAL SPLASH */}
          <div className="mt-10 border-[6px] border-[#211F1A] bg-[#B74732] p-8 text-center text-[#F7E6BA] shadow-[9px_9px_0_#211F1A] md:p-14">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#E4B849]">
              End of issue
            </p>

            <p className="mt-4 text-5xl font-black uppercase leading-[0.82] tracking-[-0.05em] md:text-8xl">
              The Empire Ended.
              <span className="block text-[#E4B849]">
                The Andean Story Didn't.
              </span>
            </p>
          </div>

          {/* RESET ALL ACTIVITIES */}
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={resetAllActivities}
              className="rotate-[-1deg] border-[5px] border-[#211F1A] bg-[#E4B849] px-8 py-5 text-sm font-black uppercase tracking-[0.18em] text-[#211F1A] shadow-[7px_7px_0_#B74732] transition hover:-translate-y-1"
            >
              ↻ Reset all activities
            </button>
          </div>

          {/* SOURCES */}
          <div className="mt-8 border-[4px] border-[#211F1A] bg-[#F1DEAF] p-6 text-[#211F1A]">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#A33F30]">
              Keep investigating
            </p>

            <p className="mt-3 font-bold leading-7">
              This Deep Dive uses evidence from UNESCO's work on the Qhapaq
              Ñan and museum research into Inca khipu. Historical evidence
              continues to be studied and interpreted.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
