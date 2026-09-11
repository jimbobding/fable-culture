"use client";

import Link from "next/link";
import { useState } from "react";
import DeepDiveYourTurn from "@/components/shared/deep-dive/DeepDiveYourTurn";
import DeepDiveCommunityFeed from "@/components/shared/deep-dive/DeepDiveCommunityFeed";
import AnimeCommunityWall from "@/components/regions/east-asia/anime/AnimeCommunityWall";
import {
  animeDeepDive,
  animeFeaturedTitles,
  animeUsefulLinks,
} from "@/data/eastAsia/deepDives/anime";

const INK = "#17131F";
const PINK = "#FF4F9A";
const CYAN = "#08A9D6";
const YELLOW = "#FFD83D";

const IMAGES: Record<string, string | null> = {
  "astro-boy": "/images/east-asia/deep-dives/anime/astro-boy.jpeg",
  "dragon-ball": null,
  "sailor-moon": "/images/east-asia/deep-dives/anime/sailor-moon.webp",
  pokemon: "/images/east-asia/deep-dives/anime/pokemon.webp",
  "spirited-away": "/images/east-asia/deep-dives/anime/spirited-away.webp",
  naruto: "/images/east-asia/deep-dives/anime/naruto.webp",
  "one-piece": "/images/east-asia/deep-dives/anime/one-piece.webp",
  "demon-slayer": "/images/east-asia/deep-dives/anime/demon-slayer.webp",
  "my-hero-academia":
    "/images/east-asia/deep-dives/anime/my-hero-academia.webp",
};

function Dots({ light = false }: { light?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-[0.12]"
      style={{
        backgroundImage: `radial-gradient(circle, ${light ? "#fff" : INK} 1.4px, transparent 1.5px)`,
        backgroundSize: "12px 12px",
      }}
    />
  );
}

function SpeedLines() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-[0.10]"
      style={{
        background:
          "repeating-conic-gradient(from 270deg at 50% 50%, #fff 0deg 1deg, transparent 1deg 7deg)",
      }}
    />
  );
}

function Heading({
  kicker,
  children,
  light = false,
}: {
  kicker: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <>
      <p
        className="text-xs font-black uppercase tracking-[0.36em]"
        style={{ color: light ? YELLOW : PINK }}
      >
        {kicker}
      </p>
      <h2
        className={`mt-3 max-w-5xl text-5xl font-black uppercase leading-[0.86] tracking-[-0.045em] md:text-7xl ${
          light ? "text-white" : "text-[#17131F]"
        }`}
      >
        {children}
      </h2>
    </>
  );
}

function Picture({
  src,
  alt,
  label,
  className = "",
}: {
  src: string | null;
  alt: string;
  label: string;
  className?: string;
}) {
  return (
    <figure
      className={`relative overflow-hidden border-[5px] border-[#17131F] bg-white shadow-[9px_9px_0_#17131F] ${className}`}
    >
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <div className="relative flex h-full min-h-[260px] items-center justify-center bg-[#FFF7E8] p-8 text-center">
          <Dots />
          <div className="relative z-10">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#FF4F9A]">
              Image needed
            </p>
            <p className="mt-3 text-3xl font-black uppercase">{label}</p>
            <p className="mt-3 text-sm font-bold text-black/45">
              Drop the image into the anime folder and wire it here.
            </p>
          </div>
        </div>
      )}
      <figcaption className="absolute bottom-3 left-3 z-20 -rotate-2 border-[3px] border-[#17131F] bg-[#FFD83D] px-3 py-2 text-xs font-black uppercase shadow-[3px_3px_0_#17131F]">
        {label}
      </figcaption>
    </figure>
  );
}

function Burst({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex aspect-square items-center justify-center p-8 text-center text-2xl font-black uppercase leading-none text-[#17131F] ${className}`}
      style={{
        backgroundColor: YELLOW,
        clipPath:
          "polygon(50% 0%,58% 25%,73% 5%,76% 30%,99% 18%,82% 42%,100% 50%,80% 58%,98% 81%,73% 70%,69% 100%,54% 75%,42% 100%,39% 73%,12% 92%,28% 64%,0% 58%,27% 48%,4% 29%,34% 33%)",
      }}
    >
      {children}
    </div>
  );
}

function LinkButton({
  href,
  children,
  colour = YELLOW,
}: {
  href: string;
  children: React.ReactNode;
  colour?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex -rotate-1 items-center gap-2 border-[4px] border-[#17131F] px-5 py-3 text-sm font-black uppercase shadow-[6px_6px_0_#17131F] transition hover:-translate-y-1"
      style={{ backgroundColor: colour }}
    >
      {children} ↗
    </a>
  );
}

export default function AnimePage() {
  const [openAnime, setOpenAnime] = useState<string | null>(null);
  const [selected, setSelected] = useState<string[]>([]);

  const intro = animeDeepDive.sections.find((s) => s.id === "what-is-anime");
  const worlds = animeDeepDive.sections.find((s) => s.id === "many-worlds");
  const timeline = animeDeepDive.sections.find(
    (s) => s.id === "anime-timeline",
  );
  const language = animeDeepDive.sections.find(
    (s) => s.id === "anime-language",
  );
  const drawing = animeDeepDive.sections.find((s) => s.id === "make-manga");
  const challenge = animeDeepDive.sections.find(
    (s) => s.id === "anime-challenge",
  );

  function toggleChoice(option: string) {
    setSelected((current) => {
      if (current.includes(option)) return current.filter((x) => x !== option);
      if (current.length >= 3) return current;
      return [...current, option];
    });
  }

  return (
    <main className="overflow-hidden bg-[#FFF7E8] text-[#17131F]">
      {/* HERO */}
      <section className="relative min-h-[94vh] overflow-hidden border-b-[7px] border-[#17131F] bg-[#17131F] px-5 py-8 text-white sm:px-8 lg:px-12">
        <Dots light />
        <SpeedLines />

        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#FF4F9A]" />
        <div className="absolute -bottom-44 -left-36 h-[480px] w-[480px] rounded-full bg-[#08A9D6]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <Link
            href="/east-asia"
            className="text-sm font-black uppercase tracking-[0.18em] text-white/70 hover:text-white"
          >
            ← East Asia
          </Link>

          <div className="grid min-h-[82vh] items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="relative z-30">
              <p className="text-sm font-black uppercase tracking-[0.32em] text-[#FFD83D]">
                Deep Dive • Japan • Animation
              </p>

              <h1 className="mt-6 -rotate-2 text-[27vw] font-black uppercase leading-[0.68] tracking-[-0.09em] sm:text-[10rem] lg:text-[11rem]">
                ANI
                <span className="block translate-x-7 text-[#FF4F9A]">ME!</span>
              </h1>

              <p className="mt-10 max-w-xl text-xl font-bold leading-relaxed text-white/72">
                {animeDeepDive.strapline}
              </p>
            </div>

            <div className="relative min-h-[650px]">
              <Picture
                src={IMAGES.naruto}
                alt="Naruto"
                label="Naruto"
                className="absolute left-[2%] top-[7%] h-[58%] w-[42%] -rotate-[5deg] shadow-[11px_11px_0_#08A9D6]"
              />
              <Picture
                src={IMAGES["one-piece"]}
                alt="One Piece"
                label="One Piece"
                className="absolute right-[4%] top-[3%] h-[50%] w-[43%] rotate-[5deg] shadow-[11px_11px_0_#FF4F9A]"
              />
              <Picture
                src={IMAGES["demon-slayer"]}
                alt="Demon Slayer"
                label="Demon Slayer"
                className="absolute bottom-[2%] left-[27%] h-[48%] w-[42%] rotate-[1deg] shadow-[11px_11px_0_#FFD83D]"
              />

              <Burst className="absolute bottom-[2%] right-0 z-30 w-36 rotate-6">
                Read! Watch! Draw!
              </Burst>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS ANIME */}
      <section className="relative px-5 py-28 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          <div>
            <Heading kicker="Start here">What actually is anime?</Heading>

            {intro?.type === "article" && (
              <div className="mt-9 max-w-2xl space-y-5 text-lg leading-relaxed md:text-xl">
                {intro.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}

                {intro.highlight && (
                  <div className="-rotate-1 border-[5px] border-[#17131F] bg-[#FFD83D] p-7 text-3xl font-black uppercase leading-none shadow-[9px_9px_0_#FF4F9A]">
                    {intro.highlight}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="relative min-h-[620px]">
            <Picture
              src={IMAGES["astro-boy"]}
              alt="Astro Boy"
              label="Astro Boy"
              className="absolute left-0 top-0 h-[46%] w-[68%] -rotate-3"
            />
            <Picture
              src={IMAGES["spirited-away"]}
              alt="Spirited Away"
              label="Spirited Away"
              className="absolute bottom-0 right-0 h-[50%] w-[78%] rotate-2 shadow-[10px_10px_0_#08A9D6]"
            />
            <Burst className="absolute right-0 top-[33%] z-30 w-36 rotate-6">
              One medium. Loads of styles.
            </Burst>
          </div>
        </div>
      </section>

      {/* TYPES */}
      {worlds?.type === "facts" && (
        <section className="relative border-y-[7px] border-[#17131F] bg-[#08A9D6] px-5 py-24 sm:px-8 lg:px-12">
          <Dots />
          <div className="relative mx-auto max-w-7xl">
            <Heading kicker="Pick your world">{worlds.title}</Heading>

            <div className="mt-14 flex flex-wrap justify-center gap-5">
              {worlds.facts.map((fact, i) => {
                const backgrounds = [YELLOW, "#fff", PINK, INK];
                return (
                  <article
                    key={fact.title}
                    className={`w-full border-[5px] border-[#17131F] p-7 shadow-[8px_8px_0_#17131F] sm:w-[45%] lg:w-[22%] ${
                      i % 2 ? "rotate-2 md:translate-y-8" : "-rotate-2"
                    }`}
                    style={{
                      backgroundColor: backgrounds[i % backgrounds.length],
                      color: i === 3 ? "#fff" : INK,
                    }}
                  >
                    <span className="text-5xl">{fact.icon}</span>
                    <h3 className="mt-4 text-3xl font-black uppercase">
                      {fact.title}
                    </h3>
                    <p className="mt-3 font-bold leading-relaxed opacity-70">
                      {fact.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* FAMOUS ANIME */}
      <section className="relative px-5 py-32 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Heading kicker="Picture wall">You might know these...</Heading>
          <p className="mt-6 max-w-2xl text-xl text-black/60">
            Tap a poster for a quick intro.
          </p>

          <div className="mt-16 grid auto-rows-[115px] grid-cols-2 gap-5 md:grid-cols-4">
            {animeFeaturedTitles.map((item, i) => {
              const open = openAnime === item.name;
              const src = IMAGES[item.imageId];
              const rowClass = i % 3 === 1 ? "row-span-3" : "row-span-4";

              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setOpenAnime(open ? null : item.name)}
                  className={`group relative overflow-hidden border-[5px] border-[#17131F] bg-white text-left shadow-[8px_8px_0_#17131F] transition hover:z-20 hover:-translate-y-2 ${rowClass} ${
                    i % 2 ? "rotate-[1.5deg]" : "-rotate-[1.5deg]"
                  }`}
                >
                  {src ? (
                    <img
                      src={src}
                      alt={item.name}
                      className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#FFD83D] p-6 text-center">
                      <Dots />
                      <div className="relative z-10">
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#FF4F9A]">
                          Image needed
                        </p>
                        <p className="mt-2 text-3xl font-black uppercase">
                          {item.name}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#17131F] via-[#17131F]/90 to-transparent p-5 pt-16 text-white">
                    <h3 className="text-2xl font-black uppercase">
                      {item.name}
                    </h3>
                    {open && (
                      <p className="mt-3 border-t-2 border-white/30 pt-3 text-sm font-bold leading-relaxed text-white/80">
                        {item.note}
                      </p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXTRA MHA SPLASH */}
      <section className="relative border-y-[7px] border-[#17131F] bg-[#FF4F9A] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <Picture
            src={IMAGES["my-hero-academia"]}
            alt="My Hero Academia"
            label="My Hero Academia"
            className="-rotate-2 min-h-[420px] shadow-[12px_12px_0_#FFD83D]"
          />
          <div className="relative">
            <div className="absolute -right-8 -top-10 w-32 rotate-6">
              <Burst>Different worlds!</Burst>
            </div>
            <p className="text-xs font-black uppercase tracking-[0.35em]">
              Look again
            </p>
            <h2 className="mt-4 text-5xl font-black uppercase leading-[0.88] md:text-7xl">
              Anime is not one art style.
            </h2>
            <p className="mt-7 max-w-xl text-xl font-bold leading-relaxed text-black/70">
              Compare character shapes, colours, backgrounds, movement and
              expressions. What makes one series instantly feel different from
              another?
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      {timeline?.type === "timeline" && (
        <section className="relative overflow-hidden bg-[#FFD83D] px-5 py-28 sm:px-8 lg:px-12">
          <div className="absolute -right-16 top-0 text-[20rem] font-black leading-none text-[#FF4F9A]/20">
            !
          </div>
          <div className="relative mx-auto max-w-7xl">
            <Heading kicker="Fast-forward">{timeline.title}</Heading>
            <p className="mt-6 max-w-3xl text-xl font-bold text-black/65">
              {timeline.intro}
            </p>

            <div className="mt-16 space-y-7">
              {timeline.items.map((item, i) => (
                <article
                  key={`${item.date}-${item.title}`}
                  className={`relative border-[5px] border-[#17131F] bg-white p-6 shadow-[8px_8px_0_#FF4F9A] md:max-w-[76%] ${
                    i % 2 ? "ml-auto rotate-1" : "-rotate-1"
                  }`}
                  style={{
                    clipPath:
                      i % 2
                        ? "polygon(0 4%,96% 0,100% 91%,5% 100%)"
                        : "polygon(3% 0,100% 5%,96% 100%,0 94%)",
                  }}
                >
                  <div className="grid gap-4 md:grid-cols-[140px_1fr] md:items-center">
                    <span className="text-4xl font-black text-[#08A9D6]">
                      {item.date}
                    </span>
                    <div>
                      <h3 className="text-2xl font-black uppercase">
                        {item.title}
                      </h3>
                      {item.text && (
                        <p className="mt-2 font-bold text-black/55">
                          {item.text}
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* VISUAL LANGUAGE */}
      {language?.type === "reveal" && (
        <section className="relative bg-[#17131F] px-5 py-28 text-white sm:px-8 lg:px-12">
          <Dots light />
          <div className="relative mx-auto max-w-7xl">
            <Heading kicker="Look closer" light>
              {language.title}
            </Heading>
            <p className="mt-6 max-w-3xl text-xl text-white/60">
              {language.intro}
            </p>

            <div className="mt-14 grid gap-7 md:grid-cols-2">
              {language.options.map((option, i) => (
                <article
                  key={option.id}
                  className={`min-h-[210px] border-[5px] border-white p-7 text-[#17131F] shadow-[9px_9px_0_rgba(255,255,255,0.15)] ${
                    i % 2 ? "rotate-1" : "-rotate-1"
                  }`}
                  style={{
                    backgroundColor: [YELLOW, PINK, CYAN, "#fff"][i % 4],
                    clipPath:
                      i % 2
                        ? "polygon(0 5%,96% 0,100% 92%,5% 100%)"
                        : "polygon(4% 0,100% 6%,95% 100%,0 94%)",
                  }}
                >
                  <span className="text-5xl">{option.icon}</span>
                  <h3 className="mt-4 text-3xl font-black uppercase">
                    {option.title}
                  </h3>
                  <p className="mt-4 font-bold leading-relaxed opacity-70">
                    {option.reveal}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* DRAW */}
      {drawing?.type === "journey" && (
        <section className="relative px-5 py-32 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <Heading kicker="Your turn">{drawing.title}</Heading>
            <p className="mt-6 max-w-2xl text-xl text-black/60">
              {drawing.intro}
            </p>

            <div className="relative mt-16">
              <div className="absolute left-0 right-0 top-12 hidden border-t-[5px] border-dashed border-[#08A9D6] md:block" />
              <div className="relative grid gap-7 md:grid-cols-3 lg:grid-cols-6">
                {drawing.items.map((item, i) => (
                  <div
                    key={item.title}
                    className={`text-center ${i % 2 ? "md:translate-y-16" : ""}`}
                  >
                    <div
                      className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-[5px] border-[#17131F] text-4xl shadow-[5px_5px_0_#17131F]"
                      style={{ backgroundColor: [YELLOW, PINK, CYAN][i % 3] }}
                    >
                      {item.icon}
                    </div>
                    <h3 className="mt-5 font-black uppercase">{item.title}</h3>
                    <p className="mt-2 text-sm font-bold leading-relaxed text-black/55">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-28 flex flex-wrap gap-5">
              {animeUsefulLinks.drawing.map((link, i) => (
                <LinkButton
                  key={link.url}
                  href={link.url}
                  colour={i % 2 ? CYAN : PINK}
                >
                  ✏️ {link.label}
                </LinkButton>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* WATCH / PLAY */}
      <section className="relative border-y-[7px] border-[#17131F] bg-[#08A9D6] px-5 py-28 sm:px-8 lg:px-12">
        <Dots />
        <div className="relative mx-auto max-w-7xl">
          <Heading kicker="Jump out">Watch. Draw. Play.</Heading>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            <div className="-rotate-1 border-[5px] border-[#17131F] bg-[#17131F] p-7 text-white shadow-[10px_10px_0_#FFD83D]">
              <span className="text-6xl">▶</span>
              <h3 className="mt-5 text-4xl font-black uppercase">Watch</h3>
              <p className="mt-4 text-white/65">
                Follow a step-by-step Naruto drawing tutorial and have a go
                yourself.
              </p>

              <a
                href="https://www.youtube.com/watch?v=wVAnQILxOzc"
                target="_blank"
                rel="noreferrer"
                className="group mt-7 block"
              >
                <div className="relative overflow-hidden border-[4px] border-white">
                  <img
                    src="/images/east-asia/deep-dives/anime/naruto-drawing-video.webp"
                    alt="Naruto drawing tutorial"
                    className="aspect-video w-full object-cover transition duration-300 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border-[4px] border-white bg-[#FF4F9A] text-4xl shadow-[5px_5px_0_#FFD83D] transition group-hover:scale-110">
                      ▶
                    </div>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 border-[3px] border-[#17131F] bg-[#FFD83D] px-4 py-3 text-[#17131F] shadow-[4px_4px_0_#17131F]">
                    <p className="text-xs font-black uppercase tracking-[0.2em]">
                      Drawing tutorial
                    </p>
                    <p className="mt-1 text-xl font-black uppercase">
                      Learn to draw Naruto
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="rotate-2 border-[5px] border-[#17131F] bg-[#FF4F9A] p-7 shadow-[10px_10px_0_#17131F]">
              <span className="text-6xl">🎮</span>
              <h3 className="mt-5 text-4xl font-black uppercase">Play</h3>
              <div className="mt-6 flex flex-col gap-4">
                {animeUsefulLinks.games.map((link) => (
                  <LinkButton key={link.url} href={link.url}>
                    {link.label}
                  </LinkButton>
                ))}
              </div>
            </div>

            <div className="-rotate-1 border-[5px] border-[#17131F] bg-[#FFD83D] p-7 shadow-[10px_10px_0_#FF4F9A]">
              <span className="text-6xl">🖼️</span>
              <h3 className="mt-5 text-4xl font-black uppercase">Explore</h3>
              <div className="mt-6 flex flex-col gap-4">
                {animeUsefulLinks.images.map((link) => (
                  <LinkButton key={link.url} href={link.url} colour={CYAN}>
                    {link.label}
                  </LinkButton>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CHALLENGE */}
      {challenge?.type === "choice" && (
        <section className="relative bg-[#17131F] px-5 py-32 text-white sm:px-8 lg:px-12">
          <Dots light />
          <div className="relative mx-auto max-w-7xl">
            <Heading kicker="Final challenge" light>
              {challenge.title}
            </Heading>
            <p className="mt-6 max-w-2xl text-xl text-white/60">
              {challenge.intro}
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              {challenge.options.map((option, i) => {
                const active = selected.includes(option);
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => toggleChoice(option)}
                    className={`border-[4px] border-white px-5 py-4 text-sm font-black uppercase shadow-[5px_5px_0_rgba(255,255,255,0.16)] transition hover:-translate-y-1 ${
                      i % 2 ? "rotate-1" : "-rotate-1"
                    }`}
                    style={{
                      backgroundColor: active
                        ? [CYAN, PINK, YELLOW][i % 3]
                        : "transparent",
                      color: active ? INK : "#fff",
                    }}
                  >
                    {active ? "✓ " : ""}
                    {option}
                  </button>
                );
              })}
            </div>

            {selected.length === 3 && (
              <div className="mt-16 max-w-4xl -rotate-1 border-[5px] border-white bg-[#FFF7E8] p-8 text-[#17131F] shadow-[10px_10px_0_#FF4F9A]">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-[#08A9D6]">
                  Your anime idea
                </p>
                <p className="mt-4 text-3xl font-black uppercase">
                  {selected.join(" + ")}
                </p>
                <p className="mt-5 font-bold text-black/60">
                  {challenge.completionText}
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* YOUR TURN */}
      <DeepDiveYourTurn
        region="east-asia"
        regionName="East Asia"
        deepDive="anime"
        deepDiveTitle="Anime"
        eyebrow="Your turn"
        title="Join the Anime Wall!"
        intro="Got an anime recommendation or made some anime-inspired artwork? Send it in. Keep it quick."
        options={[
          {
            id: "suggest-anime",
            label: "Suggest an Anime",
            icon: "📺",
            prompt: "What should we check out next?",
            answerRequired: true,
          },
          {
            id: "share-artwork",
            label: "Share Your Artwork",
            icon: "🎨",
            prompt: "Made something anime-inspired? Show us.",
            allowImage: true,
            imageRequired: true,
            answerRequired: false,
          },
        ]}
        nameLabel="Your name"
        namePlaceholder="First name or nickname"
        answerLabel="What are you sharing?"
        answerPlaceholder="Anime title or a tiny comment. Keep it short."
        submitLabel="Send it in →"
        successMessage="Nice one! It's been sent for approval."
        theme={{
          background: "#FFF7E8",
          surface: "#FFFFFF",
          text: "#17131F",
          mutedText: "#6A6570",
          primary: "#08A9D6",
          secondary: "#FFD83D",
          accent: "#FF4F9A",
          border: "#17131F",
        }}
      />

      {/* COMMUNITY WALL */}
      <DeepDiveCommunityFeed region="east-asia" deepDive="anime">
        {({ submissions, loading }) => (
          <AnimeCommunityWall submissions={submissions} loading={loading} />
        )}
      </DeepDiveCommunityFeed>

      {/* SOURCES */}
      <section className="px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Heading kicker="Credits">Sources</Heading>

          <div className="mt-10 divide-y-[3px] divide-[#17131F] border-y-[4px] border-[#17131F]">
            {animeDeepDive.sources.map((source, i) => (
              <a
                key={source.id}
                href={source.url}
                target="_blank"
                rel="noreferrer"
                className="grid gap-2 py-5 transition hover:bg-[#FFD83D]/30 md:grid-cols-[60px_1fr_auto] md:items-center md:px-3"
              >
                <span className="text-2xl font-black text-[#FF4F9A]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <strong className="block text-lg">{source.title}</strong>
                  <span className="text-sm font-bold text-black/45">
                    {source.name}
                  </span>
                </span>
                <span className="font-black uppercase">Open ↗</span>
              </a>
            ))}
          </div>

          <Link
            href="/east-asia"
            className="mt-14 inline-block font-black uppercase"
          >
            ← Back to East Asia
          </Link>
        </div>
      </section>
    </main>
  );
}
