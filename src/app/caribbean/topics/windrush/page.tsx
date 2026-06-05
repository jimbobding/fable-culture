import Link from "next/link";
import StoryJourney from "@/components/shared/StoryJourney";
import {
  windrushLegacyCards,
  windrushSources,
  windrushStoryCards,
} from "@/data/caribbean/windrush";

export default function WindrushPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 via-amber-50 to-yellow-100 px-4 py-8">
      <div className="mx-auto max-w-7xl space-y-20">
        <div className="flex justify-center">
          <Link
            href="/caribbean"
            className="inline-flex items-center gap-2 rounded-full border border-orange-300 bg-white/80 px-5 py-3 text-sm font-semibold text-stone-800 shadow-lg backdrop-blur transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            ← Back to Caribbean
          </Link>
        </div>

        {/* HERO */}
        <section className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-orange-600 via-amber-500 to-yellow-400 p-8 shadow-2xl sm:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.25),transparent_35%)]" />

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-white/80">
                Caribbean Stories
              </p>

              <h1 className="text-5xl font-black tracking-tight sm:text-7xl">
                The Windrush Journey
              </h1>

              <p className="max-w-3xl text-xl leading-relaxed text-white/90">
                Explore how Caribbean people helped rebuild Britain, changed
                British culture, faced injustice, and shaped the country we know
                today.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "Migration",
                  "Identity",
                  "Culture",
                  "Resistance",
                  "Legacy",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/20 px-4 py-2 text-sm font-bold backdrop-blur"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-white/30 bg-white/20 p-8 text-center text-white shadow-2xl backdrop-blur">
              <p className="text-7xl">🚢</p>

              <h2 className="mt-5 text-3xl font-black">1948 and beyond</h2>

              <p className="mt-4 leading-relaxed text-white/90">
                Windrush is not just one ship. It is a story of journeys,
                families, work, culture, community, unfair treatment, and
                lasting impact.
              </p>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="mx-auto max-w-4xl space-y-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-orange-600">
            Learn Through Story
          </p>

          <h2 className="text-4xl font-black text-stone-900 sm:text-5xl">
            A story that still shapes Britain
          </h2>

          <p className="text-lg leading-relaxed text-stone-700">
            The Windrush generation helped rebuild Britain after the Second
            World War. Their story includes hope, hard work, culture, racism,
            resilience, and legacy. Click each card to explore the story in
            small, student-friendly sections.
          </p>
        </section>

        {/* INTERACTIVE STORY */}
        <section className="mx-auto max-w-5xl space-y-10">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-orange-600">
              Interactive Timeline
            </p>

            <h2 className="mt-3 text-4xl font-black text-stone-900">
              Open the story cards
            </h2>
          </div>

          <StoryJourney items={windrushStoryCards} />
        </section>

        {/* LEGACY WALL */}
        <section className="space-y-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-orange-600">
              Legacy Today
            </p>

            <h2 className="mt-3 text-4xl font-black text-stone-900">
              How Windrush changed Britain
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-stone-700">
              Caribbean communities helped shape British life in many ways. This
              legacy can be seen in music, food, sport, Carnival, healthcare,
              education, and local communities.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {windrushLegacyCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[2rem] border border-white/60 bg-white/75 p-6 text-center shadow-xl backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <p className="text-5xl">{card.icon}</p>

                <h3 className="mt-4 text-2xl font-black text-stone-900">
                  {card.title}
                </h3>

                <p className="mt-3 leading-relaxed text-stone-700">
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* REFLECTION */}
        <section className="rounded-[3rem] bg-stone-900 p-8 text-white shadow-2xl sm:p-12">
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-amber-300">
              Think About It
            </p>

            <h2 className="text-4xl font-black">Reflection Questions</h2>

            <div className="grid gap-5 md:grid-cols-3">
              {[
                "How has Caribbean culture influenced Britain today?",
                "Why is it important to remember both contribution and injustice?",
                "What local examples of Caribbean culture can you notice around you?",
              ].map((question) => (
                <div
                  key={question}
                  className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur"
                >
                  <p className="leading-relaxed text-white/90">{question}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOURCES */}
        <section className="space-y-8 pb-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-orange-600">
              Further Exploration
            </p>

            <h2 className="mt-3 text-4xl font-black text-stone-900">
              Learn more from trusted sources
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-stone-700">
              These links help students and staff continue exploring the
              Windrush story using museums, archives, and official research.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {windrushSources.map((source) => (
              <a
                key={source.href}
                href={source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[1.5rem] border border-orange-200 bg-white/80 p-5 font-bold text-stone-800 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >
                {source.title} →
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
