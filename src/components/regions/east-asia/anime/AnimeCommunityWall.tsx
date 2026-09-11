"use client";

import type { DeepDiveCommunitySubmission } from "@/components/shared/deep-dive/DeepDiveCommunityFeed";

type Props = {
  submissions: DeepDiveCommunitySubmission[];
  loading?: boolean;
};

const INK = "#17131F";
const BG = "#FFF7E8";
const PINK = "#FF4F9A";
const CYAN = "#08A9D6";
const YELLOW = "#FFD83D";

export default function AnimeCommunityWall({
  submissions,
  loading = false,
}: Props) {
  const artwork = submissions.filter(
    (submission) =>
      submission.submissionType === "share-artwork" && submission.imageUrl,
  );

  const recommendations = submissions.filter(
    (submission) => submission.submissionType !== "share-artwork",
  );

  const rotations = [
    "-rotate-[2.5deg]",
    "rotate-[1.8deg]",
    "-rotate-[1deg]",
    "rotate-[2.8deg]",
    "-rotate-[1.7deg]",
    "rotate-[1deg]",
  ];

  const imageHeights = [
    "h-[330px] md:h-[430px]",
    "h-[420px] md:h-[520px]",
    "h-[360px] md:h-[460px]",
    "h-[450px] md:h-[560px]",
  ];

  const bubbleColours = [YELLOW, "#FFFFFF", PINK, CYAN];

  return (
    <section
      className="relative overflow-hidden border-y-[7px] px-5 py-28 sm:px-8 lg:px-12"
      style={{ background: BG, borderColor: INK, color: INK }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage: `radial-gradient(circle, ${INK} 1.5px, transparent 1.6px)`,
          backgroundSize: "13px 13px",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 h-72 w-72 rotate-12"
        style={{
          background: PINK,
          clipPath:
            "polygon(50% 0,59% 31%,78% 8%,75% 36%,100% 27%,80% 50%,100% 63%,73% 63%,79% 96%,57% 72%,48% 100%,40% 72%,13% 91%,27% 61%,0 55%,28% 43%,5% 22%,36% 32%)",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full opacity-90"
        style={{ background: CYAN }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="relative max-w-5xl">
          <p className="text-xs font-black uppercase tracking-[0.36em] text-[#FF4F9A]">
            Made by you
          </p>

          <h2 className="mt-3 -rotate-1 text-5xl font-black uppercase leading-[0.82] tracking-[-0.05em] md:text-8xl">
            The Fable Anime Wall!
          </h2>

          <p className="mt-7 max-w-2xl text-xl font-bold leading-relaxed text-black/60">
            Your drawings. Your recommendations. Your corner of the Anime Deep
            Dive.
          </p>

          <div className="absolute -right-20 top-10 hidden w-36 rotate-6 border-[4px] border-[#17131F] bg-[#FFD83D] p-4 text-center text-xl font-black uppercase shadow-[6px_6px_0_#17131F] lg:block">
            Your picks!
            <br />
            Your art!
          </div>
        </div>

        {loading ? (
          <div className="mt-16 text-2xl font-black uppercase">
            Loading the wall...
          </div>
        ) : submissions.length === 0 ? (
          <div className="relative mt-16 max-w-3xl py-14">
            <div
              className="-rotate-2 border-[5px] border-[#17131F] bg-[#FFD83D] px-8 py-10 shadow-[10px_10px_0_#17131F]"
              style={{
                clipPath: "polygon(2% 5%,98% 0,100% 91%,5% 100%)",
              }}
            >
              <p className="text-3xl font-black uppercase md:text-5xl">
                Wall loading...
              </p>
              <p className="mt-4 text-lg font-bold text-black/60">
                No approved posts yet. Send something in and it could appear
                here!
              </p>
            </div>
          </div>
        ) : (
          <>
            {artwork.length > 0 && (
              <section className="relative mt-24">
                <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-[#08A9D6]">
                      Created at Fable
                    </p>
                    <h3 className="mt-2 -rotate-1 text-4xl font-black uppercase leading-none md:text-6xl">
                      🎨 Our Anime Artwork
                    </h3>
                  </div>

                  <div className="rotate-2 border-[4px] border-[#17131F] bg-[#FF4F9A] px-5 py-3 text-sm font-black uppercase shadow-[5px_5px_0_#17131F]">
                    Drawn by us ★
                  </div>
                </div>

                <div className="relative columns-1 gap-8 md:columns-2 lg:columns-3">
                  {artwork.map((submission, index) => (
                    <figure
                      key={submission.id}
                      className={`relative mb-10 inline-block w-full break-inside-avoid border-[5px] border-[#17131F] bg-white p-3 shadow-[10px_10px_0_#17131F] ${rotations[index % rotations.length]}`}
                    >
                      <div
                        className={`relative overflow-hidden ${imageHeights[index % imageHeights.length]}`}
                      >
                        <img
                          src={submission.imageUrl}
                          alt={`Anime-inspired artwork by ${
                            submission.creatorName || "a Fable student"
                          }`}
                          className="h-full w-full object-cover"
                        />

                        <div
                          aria-hidden="true"
                          className="absolute right-0 top-0 h-20 w-20 opacity-90"
                          style={{
                            background: [PINK, CYAN, YELLOW][index % 3],
                            clipPath:
                              "polygon(50% 0,60% 35%,88% 12%,73% 43%,100% 52%,70% 60%,82% 94%,55% 72%,39% 100%,35% 69%,3% 80%,28% 55%,0 39%,35% 39%)",
                          }}
                        />
                      </div>

                      <figcaption className="relative px-2 pb-3 pt-5">
                        <div className="absolute -top-7 left-1 -rotate-2 border-[3px] border-[#17131F] bg-[#FFD83D] px-3 py-1 text-xs font-black uppercase shadow-[3px_3px_0_#17131F]">
                          🎨 Artwork
                        </div>

                        <p className="text-xl font-black uppercase">
                          {submission.creatorName || "Fable artist"}
                        </p>

                        {submission.answer && (
                          <p className="mt-2 font-bold leading-relaxed text-black/55">
                            {submission.answer}
                          </p>
                        )}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            )}

            {recommendations.length > 0 && (
              <section className="relative mt-32">
                <div className="relative mb-16">
                  <div
                    aria-hidden="true"
                    className="absolute -left-8 -top-10 h-32 w-32 -rotate-12 opacity-90"
                    style={{
                      background: YELLOW,
                      clipPath:
                        "polygon(50% 0,60% 34%,86% 10%,75% 42%,100% 50%,72% 61%,84% 94%,56% 72%,39% 100%,35% 69%,2% 82%,28% 56%,0 40%,35% 39%)",
                    }}
                  />

                  <div className="relative">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-[#FF4F9A]">
                      What should we watch next?
                    </p>
                    <h3 className="mt-2 rotate-[0.5deg] text-4xl font-black uppercase leading-none md:text-6xl">
                      💬 Suggest Anime
                    </h3>
                    <p className="mt-5 max-w-2xl text-lg font-bold text-black/55">
                      Anime picks from the Fable community.
                    </p>
                  </div>
                </div>

                <div className="relative flex flex-wrap items-start justify-center gap-x-9 gap-y-16">
                  {recommendations.map((submission, index) => {
                    const isLeftTail = index % 2 === 0;
                    const background =
                      bubbleColours[index % bubbleColours.length];
                    const textColour = background === INK ? "#FFFFFF" : INK;

                    return (
                      <article
                        key={submission.id}
                        className={`relative w-full max-w-[430px] border-[5px] border-[#17131F] px-8 py-9 shadow-[9px_9px_0_#17131F] sm:w-[47%] lg:w-[31%] ${
                          rotations[index % rotations.length]
                        } ${index % 3 === 1 ? "lg:translate-y-10" : ""}`}
                        style={{
                          background,
                          color: textColour,
                          borderRadius:
                            index % 3 === 0
                              ? "42px 58px 46px 64px"
                              : index % 3 === 1
                                ? "60px 40px 66px 44px"
                                : "48px 62px 40px 58px",
                        }}
                      >
                        <div
                          aria-hidden="true"
                          className={`absolute -bottom-[28px] h-12 w-14 border-b-[5px] border-[#17131F] ${
                            isLeftTail
                              ? "left-10 border-l-[5px]"
                              : "right-10 border-r-[5px]"
                          }`}
                          style={{
                            background,
                            clipPath: isLeftTail
                              ? "polygon(0 0,100% 0,22% 100%)"
                              : "polygon(0 0,100% 0,78% 100%)",
                          }}
                        />

                        <div className="relative z-10">
                          <span className="text-4xl">📺</span>

                          <p className="mt-3 text-xs font-black uppercase tracking-[0.2em] opacity-55">
                            Anime suggestion
                          </p>

                          <p className="mt-3 break-words text-2xl font-black uppercase leading-snug">
                            {submission.answer || "Check this one out!"}
                          </p>

                          <p className="mt-6 text-sm font-black uppercase tracking-[0.12em] opacity-70">
                            Suggested by {submission.creatorName || "Fable"}
                          </p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            )}

            <div className="mt-28 flex justify-center">
              <div className="rotate-2 border-[5px] border-[#17131F] bg-[#FFD83D] px-8 py-5 text-center text-2xl font-black uppercase shadow-[8px_8px_0_#17131F]">
                Keep the wall growing! ★
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
