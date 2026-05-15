import Link from "next/link";
import { carnivalCharacters } from "@/data/caribbean/carnivalCharacters";
import { carnivalImagePath } from "@/data/caribbean/assets";

export default function CarnivalPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50 text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img
          src="/images/continents/caribbean/carnival/carnival-hero3.jpg"
          alt="Caribbean Carnival"
          className="h-[50vh] w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="space-y-4 text-white">
            <p className="uppercase tracking-[0.3em] text-sm text-white/80">
              Caribbean Deep Dive
            </p>

            <h1 className="text-5xl md:text-6xl font-bold">
              🎭 Carnival Culture
            </h1>

            <p className="max-w-2xl mx-auto text-lg text-white/90">
              Music, colour, celebration, history, and identity across the
              Caribbean.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
        {/* INTRO */}
        {/* THE STORY OF CARNIVAL */}
        <section className="space-y-20 relative">
          {/* SECTION TITLE */}
          <div className="text-center space-y-6">
            <p className="uppercase tracking-[0.3em] text-sm text-pink-600 font-bold">
              The Story of Carnival
            </p>

            <h2 className="text-5xl md:text-6xl font-black text-slate-900">
              From Resistance to Celebration 🎭
            </h2>

            <p className="max-w-3xl mx-auto text-lg text-slate-700 leading-relaxed">
              Carnival is more than costumes and celebration. Its history is
              connected to slavery, colonialism, resistance, survival, and
              freedom across the Caribbean. Through music, dance, storytelling,
              and masquerade, Caribbean communities protected cultural
              traditions that others tried to erase.
            </p>
          </div>

          {/* ROOTS */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6 bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100 p-10 rounded-[2rem] shadow-xl">
              <p className="uppercase tracking-[0.2em] text-sm font-bold text-orange-700">
                🌍 The Roots
              </p>

              <p className="text-slate-700 leading-relaxed text-lg">
                Carnival began during colonial rule in the Caribbean. European
                colonists held large masquerade celebrations before Lent, while
                enslaved African people were excluded and oppressed through
                plantation slavery.
              </p>

              <p className="text-slate-700 leading-relaxed text-lg">
                Despite this oppression, African traditions survived through
                drumming, dance, storytelling, spiritual practices, and oral
                history. These traditions were passed from generation to
                generation even when enslavers attempted to destroy cultural
                identity and community connections.
              </p>

              <blockquote className="border-l-4 border-orange-500 pl-4 italic text-slate-800">
                “African slaves never forgot about where they came from and
                passed along their memories to each subsequent generation.”
              </blockquote>

              <p className="text-sm text-slate-600">
                — Dwaine Plaza & Jane DeCosmo
              </p>
            </div>

            <img
              src="/images/continents/caribbean/carnival/carnival-opression.avif"
              alt="Carnival history"
              className="rounded-[2rem] shadow-2xl object-cover h-full"
            />
          </div>

          {/* RESISTANCE */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img
              src="/images/continents/caribbean/carnival/jab-molassie.jpg"
              alt="Carnival resistance"
              className="rounded-[2rem] shadow-2xl object-cover h-full md:order-1"
            />

            <div className="space-y-6 bg-gradient-to-br from-red-100 via-pink-50 to-orange-100 p-10 rounded-[2rem] shadow-xl md:order-2">
              <p className="uppercase tracking-[0.2em] text-sm font-bold text-red-700">
                🔥 Resistance & Freedom
              </p>

              <p className="text-slate-700 leading-relaxed text-lg">
                After emancipation, Carnival became a powerful public expression
                of freedom, identity, and resistance. Formerly enslaved people
                reclaimed the streets through music, masquerade, satire, and
                celebration.
              </p>

              <p className="text-slate-700 leading-relaxed text-lg">
                Carnival also became a way to resist colonial control. Many
                performances, rituals, and characters mocked colonial power
                while celebrating Afro-Caribbean culture and creativity.
              </p>

              <p className="text-slate-700 leading-relaxed text-lg">
                Through Carnival, Caribbean communities protected traditions,
                memories, and identities that slavery tried to erase.
              </p>

              <blockquote className="border-l-4 border-red-500 pl-4 italic text-slate-800">
                “Carnival became a celebration of survival, creativity, and
                freedom.”
              </blockquote>
            </div>
          </div>

          {/* CELEBRATION */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6 bg-gradient-to-br from-fuchsia-100 via-pink-50 to-yellow-100 p-10 rounded-[2rem] shadow-xl">
              <p className="uppercase tracking-[0.2em] text-sm font-bold text-pink-700">
                🎶 Celebration & Identity
              </p>

              <h3 className="text-4xl font-black text-slate-900">
                Music, dance, colour, and community
              </h3>

              <p className="text-slate-700 leading-relaxed text-lg">
                Modern Carnival celebrations include calypso, soca, steel pan
                music, dance, costume design, and huge street parades.
              </p>

              <p className="text-slate-700 leading-relaxed text-lg">
                Carnival connects communities across the Caribbean and around
                the world, including in the UK through celebrations like Notting
                Hill Carnival.
              </p>
            </div>

            <img
              src="/images/continents/caribbean/carnival/celebration.jpg"
              alt="Carnival celebration"
              className="rounded-[2rem] shadow-2xl object-cover h-full"
            />
          </div>
        </section>

        {/* CHARACTERS */}
        <section className="space-y-26 pt-10">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">
              🎭 Famous Carnival Characters
            </h2>

            <p className="max-w-3xl mx-auto text-slate-700">
              Caribbean Carnival includes many traditional characters with
              unique costumes, stories, and meanings.
            </p>
          </div>

          <div className="grid gap-14 md:grid-cols-2 xl:grid-cols-3">
            {carnivalCharacters.map((character, index) => (
              <div
                key={character.name}
                className={`
        relative pt-24 pb-6 px-6 rounded-[2rem]
        shadow-xl hover:shadow-2xl transition-all duration-500
        hover:-translate-y-3 hover:rotate-1
        
        ${index === carnivalCharacters.length - 1 ? "xl:col-start-2" : ""}
        ${
          index % 3 === 0
            ? "bg-gradient-to-br from-pink-200 via-orange-100 to-yellow-100 rotate-1"
            : index % 3 === 1
              ? "bg-gradient-to-br from-sky-200 via-cyan-100 to-blue-100 -rotate-1"
              : "bg-gradient-to-br from-fuchsia-200 via-pink-100 to-rose-100 rotate-[1.5deg]"
        }
      `}
              >
                {/* BACKGROUND GLOW */}
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.8),transparent_40%)]" />

                {/* FLOATING IMAGE */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                  <div className="relative">
                    {/* GLOW */}
                    <div className="absolute inset-0 rounded-full bg-white blur-2xl opacity-60 scale-110" />

                    <img
                      src={character.image}
                      alt={character.name}
                      className="relative w-40 h-40 object-cover rounded-full border-4 border-white shadow-2xl"
                    />
                  </div>
                </div>

                {/* EMOJI */}
                <div className="absolute top-5 right-5 text-4xl drop-shadow-lg">
                  {character.emoji}
                </div>

                {/* CONTENT */}
                <div className="relative space-y-5 text-center">
                  <h3
                    className={`
    text-3xl font-black uppercase tracking-wide
    ${
      index % 5 === 0
        ? "text-pink-700"
        : index % 5 === 1
          ? "text-sky-700"
          : index % 5 === 2
            ? "text-orange-700"
            : index % 5 === 3
              ? "text-fuchsia-700"
              : "text-emerald-700"
    }
  `}
                  >
                    {character.name}
                  </h3>

                  <p className="text-slate-700 leading-relaxed">
                    {character.description}
                  </p>

                  {/* TAGS */}
                  <div className="flex flex-wrap justify-center gap-2 pt-2">
                    <span className="px-3 py-1 rounded-full bg-white/70 text-xs font-semibold">
                      Carnival
                    </span>

                    <span className="px-3 py-1 rounded-full bg-white/70 text-xs font-semibold">
                      Tradition
                    </span>

                    <span className="px-3 py-1 rounded-full bg-white/70 text-xs font-semibold">
                      Culture
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* UK CONNECTION */}
        {/* UK CARNIVAL */}
        <section className="space-y-10">
          <div className="text-center space-y-5">
            <p className="uppercase tracking-[0.3em] text-sm font-bold text-pink-600">
              Caribbean Carnival in Britain
            </p>

            <h2 className="text-5xl font-black text-slate-900">
              🇬🇧 Carnival Across the UK
            </h2>

            <p className="max-w-4xl mx-auto text-lg leading-relaxed text-slate-700">
              Caribbean Carnival traditions continue across the United Kingdom
              through music, dance, food, costume design, and community
              celebrations. These events celebrate Caribbean identity,
              creativity, and culture while bringing people together through
              performance and celebration.
            </p>
          </div>

          {/* MAIN FEATURE */}
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6 bg-gradient-to-br from-pink-100 via-orange-50 to-yellow-100 p-10 rounded-[2rem] shadow-xl">
              <div className="space-y-3">
                <p className="uppercase tracking-[0.2em] text-sm font-bold text-pink-700">
                  🎭 London
                </p>

                <h3 className="text-4xl font-black text-slate-900">
                  Notting Hill Carnival
                </h3>
              </div>

              <p className="text-slate-700 leading-relaxed text-lg">
                Notting Hill Carnival is one of the largest street festivals in
                Europe. It is famous for colourful costumes, steel pan music,
                dancing, food, and huge Caribbean-inspired parades through the
                streets of London.
              </p>

              <p className="text-slate-700 leading-relaxed text-lg">
                The event celebrates Caribbean culture and has become an
                important part of modern British cultural life.
              </p>

              <a
                href="https://nhcarnival.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-pink-600 text-white hover:bg-pink-700 transition"
              >
                Explore Notting Hill Carnival →
              </a>
            </div>

            <div className="rounded-[2rem] overflow-hidden shadow-2xl">
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/X6mcYQtu6xA"
                title="Notting Hill Carnival"
                allowFullScreen
              />
            </div>
          </div>

          {/* LOCAL CONNECTIONS */}
          {/* LOCAL UK CARNIVALS */}
          <section className="space-y-10">
            <div className="text-center space-y-5">
              <h2 className="text-4xl font-bold text-slate-900">
                📍 Caribbean Carnival Across the UK
              </h2>
              <p className="max-w-4xl mx-auto text-lg text-slate-700 leading-relaxed">
                Caribbean communities celebrate Carnival throughout the UK.
                Explore some of the biggest local events in Leeds, Huddersfield,
                and Manchester with music, dance, costumes, and food.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Leeds */}
              <a
                href="https://leedscarnival.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/70 backdrop-blur rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition hover:-translate-y-1"
              >
                <img
                  src={carnivalImagePath + "/leeds.png"}
                  alt="Leeds West Indian Carnival"
                  className="w-full h-56 object-cover rounded-t-[2rem]"
                />
                <div className="p-6 space-y-3">
                  <h3 className="text-2xl font-black text-sky-700">
                    🥁 Leeds West Indian Carnival
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    One of the oldest Caribbean carnivals in Europe with
                    parades, music, and culture.
                  </p>
                </div>
              </a>

              {/* Huddersfield */}
              <a
                href="https://www.creativekirklees.com/en-UK/topic/633aebb7f7522a32a072a1ff?mode=event&count=9/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/70 backdrop-blur rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition hover:-translate-y-1"
              >
                <img
                  src={carnivalImagePath + "/huddersfield.png"}
                  alt="Huddersfield Caribbean Carnival"
                  className="w-full h-56 object-cover rounded-t-[2rem]"
                />
                <div className="p-6 space-y-3">
                  <h3 className="text-2xl font-black text-fuchsia-700">
                    🎉 Huddersfield Carnival
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Community-focused celebration with music, dance, costumes,
                    and Caribbean food.
                  </p>
                </div>
              </a>

              {/* Manchester */}
              <a
                href="https://themanchestercarnival.com/#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/70 backdrop-blur rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition hover:-translate-y-1"
              >
                <img
                  src={carnivalImagePath + "/manchester.png"}
                  alt="Manchester Caribbean Carnival"
                  className="w-full h-56 object-fit rounded-t-[2rem]"
                />
                <div className="p-6 space-y-3">
                  <h3 className="text-2xl font-black text-orange-700">
                    🎶 Manchester Carnival
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Celebrate Caribbean culture with parades, music, and
                    community events in Manchester.
                  </p>
                </div>
              </a>
            </div>
          </section>
        </section>

        {/* QUESTIONS */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-center">
            💭 Questions to Think About
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="bg-white/70 rounded-2xl p-6 shadow">
              Why is music important in Carnival?
            </div>

            <div className="bg-white/70 rounded-2xl p-6 shadow">
              How can celebrations help communities feel connected?
            </div>

            <div className="bg-white/70 rounded-2xl p-6 shadow">
              Why is Carnival important to Caribbean identity?
            </div>
          </div>
        </section>

        {/* BACK */}
        <div className="text-center">
          <Link
            href="/caribbean"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sky-600 text-white hover:bg-sky-700 transition"
          >
            ← Back to Caribbean
          </Link>
        </div>
      </div>
    </main>
  );
}
