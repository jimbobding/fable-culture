import Link from "next/link";
import CreateYourLook from "@/components/shared/games/create-your-look/CreateYourLook";
import { carnivalLookData } from "@/data/caribbean/createYourLook/carnival";

const maskInspiration = [
  {
    title: "Colour & Celebration",
    emoji: "🌈",
    text: "Bright colours, sequins, glitter, patterns and Carnival energy.",
    image: "/images/games/carnival/mask/colourful-mask.avif",
    alt: "Colourful Carnival mask",
    colour: "text-orange-600",
    bg: "from-orange-100 to-pink-100",
  },
  {
    title: "Character & Storytelling",
    emoji: "🎭",
    text: "Create a hero, performer, animal, mystery figure or Carnival character.",
    image: "/images/games/carnival/mask/characters-mask.jpeg",
    alt: "Character Carnival mask",
    colour: "text-pink-600",
    bg: "from-pink-100 to-purple-100",
  },
  {
    title: "Nature & Feathers",
    emoji: "🪶",
    text: "Inspired by birds, feathers, flowers, leaves, animals and tropical patterns.",
    image: "/images/games/carnival/mask/nature-mask.webp",
    alt: "Nature and feather Carnival mask",
    colour: "text-purple-600",
    bg: "from-purple-100 to-cyan-100",
  },
];

export default function CarnivalMaskWorkshopPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-100 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl space-y-14">
        <section className="relative overflow-hidden py-16">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="rotate-[-12deg] text-[20rem] opacity-[0.05]">
              🎭
            </div>
          </div>

          <div className="absolute left-[8%] top-[18%] h-32 w-32 rounded-full bg-orange-300/30 blur-3xl" />
          <div className="absolute right-[12%] top-[12%] h-40 w-40 rounded-full bg-pink-300/30 blur-3xl" />
          <div className="absolute bottom-[8%] left-[38%] h-48 w-48 rounded-full bg-purple-300/30 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.5em] text-pink-600">
              Mask Inspiration
            </p>

            <h1 className="mt-4 text-5xl font-black leading-none text-slate-900 md:text-7xl">
              Every Mask
              <br />
              Tells A Story
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
              Carnival masks can show colour, celebration, character, mystery,
              nature and imagination. Which kind of mask will you create?
            </p>
          </div>

          <div className="relative z-10 mt-16 grid gap-10 md:grid-cols-3">
            {maskInspiration.map((mask, index) => (
              <div
                key={mask.title}
                className={`space-y-4 text-center ${
                  index === 1 ? "md:-translate-y-8" : ""
                }`}
              >
                <div
                  className={`mx-auto flex ${
                    index === 1 ? "h-64 w-64" : "h-56 w-56"
                  } items-center justify-center rounded-full bg-gradient-to-br ${
                    mask.bg
                  } shadow-2xl`}
                >
                  <img
                    src={mask.image}
                    alt={mask.alt}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>

                <h2
                  className={`${
                    index === 1 ? "text-3xl" : "text-2xl"
                  } font-black ${mask.colour}`}
                >
                  {mask.emoji} {mask.title}
                </h2>

                <p className="mx-auto max-w-xs text-slate-600">{mask.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-4xl space-y-6 text-center">
          <p className="text-sm font-black uppercase tracking-[0.4em] text-purple-600">
            Your Challenge
          </p>

          <h2 className="text-4xl font-black text-slate-900">
            Create Your Own Carnival Mask
          </h2>

          <p className="text-lg leading-relaxed text-slate-600">
            Visit the art room and use the materials available to create a
            Carnival mask that reflects your own ideas, interests and
            creativity. Your design could be inspired by colour, nature,
            animals, characters, music or Caribbean Carnival traditions.
          </p>

          <div className="rounded-[2rem] bg-white/70 p-8 shadow-xl backdrop-blur">
            <p className="text-xl font-bold text-slate-900">
              🎭 Finished masks will be worn during the Fable House Garden Party
              Carnival celebrations.
            </p>

            <p className="mt-4 text-slate-600">
              Think carefully about the colours, patterns and details you
              choose. Every mask tells a story.
            </p>
          </div>
        </section>

        <section id="create-your-look">
          <CreateYourLook {...carnivalLookData} />
        </section>

        <section className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-xl">
          <h2 className="text-3xl font-black">Explore Carnival History</h2>

          <p className="mt-4 max-w-3xl leading-relaxed text-white/80">
            Find out more about the history, characters, music and meaning
            behind Caribbean Carnival.
          </p>

          <Link
            href="/caribbean/topics/carnival"
            className="mt-6 inline-flex rounded-full bg-white px-6 py-3 font-black text-slate-900 shadow hover:bg-orange-100"
          >
            Go to Carnival History
          </Link>
        </section>
      </div>
      <section className="flex justify-center py-6">
        <Link
          href="/caribbean"
          className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-bold text-purple-700 shadow-lg transition hover:bg-purple-50 hover:shadow-xl"
        >
          ← Back to Caribbean
        </Link>
      </section>
    </main>
  );
}
