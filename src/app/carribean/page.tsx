import Link from "next/link";

export default function CaribbeanPage() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-sky-100 via-amber-50 to-orange-100 text-slate-800">
      {/* 🌊 HERO */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src="/images/continents/caribbean/hero.jpg"
          alt="Caribbean beach"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/50 via-sky-700/40 to-orange-400/40" />

        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            The Caribbean 🌴
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-xl mx-auto">
            Explore islands, cultures, and stories shaped by the sea
          </p>
        </div>
      </section>

      {/* 🌴 INTRO */}
      <section className="max-w-3xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">A Region of Islands</h2>
        <p className="text-lg leading-relaxed">
          The Caribbean is made up of many islands, each with its own culture,
          history, and traditions. From music and food to festivals and stories,
          the region is full of life, shaped by the sea and the people who live
          there.
        </p>
      </section>

      {/* 🗺️ COUNTRIES */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Explore Countries
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* 🇯🇲 Jamaica */}
          <Link href="/caribbean/jamaica">
            <div className="rounded-3xl p-6 bg-gradient-to-br from-emerald-200 to-lime-100 shadow-md hover:shadow-xl transition hover:-translate-y-1 cursor-pointer">
              <h3 className="text-xl font-bold mb-2">Jamaica 🇯🇲</h3>
              <p>
                Famous for reggae music, beautiful beaches, and rich culture.
              </p>
            </div>
          </Link>

          {/* 🇹🇹 Trinidad & Tobago */}
          <Link href="/caribbean/trinidad-and-tobago">
            <div className="rounded-3xl p-6 bg-gradient-to-br from-red-200 to-orange-100 shadow-md hover:shadow-xl transition hover:-translate-y-1 cursor-pointer">
              <h3 className="text-xl font-bold mb-2">Trinidad & Tobago 🇹🇹</h3>
              <p>Known for Carnival, steel pan music, and vibrant festivals.</p>
            </div>
          </Link>

          {/* 🇧🇸 Bahamas */}
          <Link href="/caribbean/bahamas">
            <div className="rounded-3xl p-6 bg-gradient-to-br from-sky-200 to-cyan-100 shadow-md hover:shadow-xl transition hover:-translate-y-1 cursor-pointer">
              <h3 className="text-xl font-bold mb-2">Bahamas 🇧🇸</h3>
              <p>Clear blue waters, coral reefs, and island life.</p>
            </div>
          </Link>

          {/* 🇩🇴 Dominican Republic */}
          <Link href="/caribbean/dominican-republic">
            <div className="rounded-3xl p-6 bg-gradient-to-br from-indigo-200 to-purple-100 shadow-md hover:shadow-xl transition hover:-translate-y-1 cursor-pointer">
              <h3 className="text-xl font-bold mb-2">Dominican Republic 🇩🇴</h3>
              <p>A mix of history, beaches, and lively culture.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* 🎶 CULTURE STRIP */}
      <section className="bg-gradient-to-r from-orange-200 via-pink-200 to-amber-200 py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">🎶 Music</h3>
            <p>Reggae, calypso, and steel pan rhythms</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">🍛 Food</h3>
            <p>Spiced dishes, fresh seafood, and bold flavours</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">🎉 Festivals</h3>
            <p>Colourful celebrations like Carnival</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">📜 History</h3>
            <p>Stories shaped by people, trade, and movement</p>
          </div>
        </div>
      </section>

      {/* 🌍 CTA */}
      <section className="text-center py-12 px-6">
        <h2 className="text-2xl font-semibold mb-4">
          Start exploring the Caribbean
        </h2>
        <Link href="/caribbean/jamaica">
          <button className="px-6 py-3 bg-sky-600 text-white rounded-full shadow-md hover:bg-sky-700 transition">
            Explore Now →
          </button>
        </Link>
      </section>
    </main>
  );
}
