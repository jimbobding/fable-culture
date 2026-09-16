import Link from "next/link";

export default function SouthAmericaPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f2e5cf] text-[#292820]">
      {/* =========================================================
          HERO
      ========================================================== */}

      <section className="relative min-h-[94vh] overflow-hidden bg-[#173d32] text-white">
        {/* AMAZON / SUN GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_22%,rgba(229,164,52,0.30),transparent_25%),radial-gradient(circle_at_12%_75%,rgba(61,120,78,0.48),transparent_38%)]" />

        {/* SUN */}
        <div className="absolute right-[7%] top-[9%] h-40 w-40 rounded-full bg-[#e3a536] opacity-95 shadow-[0_0_100px_rgba(227,165,54,0.28)] sm:h-52 sm:w-52 md:h-72 md:w-72" />

        {/* SIDE LABEL */}
        <div className="absolute left-5 top-1/2 hidden -translate-y-1/2 md:block">
          <p className="[writing-mode:vertical-rl] text-xs font-semibold uppercase tracking-[0.55em] text-white/35">
            Fable Culture • South America
          </p>
        </div>

        {/* SUBTLE WOVEN DETAIL */}
        <div
          className="pointer-events-none absolute right-[3%] top-[48%] hidden h-36 w-72 opacity-[0.10] lg:block"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #f0c76b 0 8px, transparent 8px 18px)",
          }}
        />

        {/* ANDES LANDSCAPE */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 520"
            aria-hidden="true"
            className="block w-full"
          >
            {/* DISTANT ANDES */}
            <path
              d="M0 365L120 305L220 340L340 230L430 300L555 150L640 270L760 105L860 270L980 175L1080 290L1190 205L1300 285L1440 235V520H0Z"
              fill="#42634b"
            />

            {/* MID MOUNTAINS */}
            <path
              d="M0 410L150 325L280 390L420 265L560 375L720 230L865 365L1030 250L1170 355L1290 290L1440 385V520H0Z"
              fill="#294d3d"
            />

            {/* FOREST / FOREGROUND */}
            <path
              d="M0 455L175 385L325 445L505 360L660 435L835 350L1010 430L1195 350L1440 415V520H0Z"
              fill="#122f27"
            />
          </svg>
        </div>

        {/* SMALL TEXTILE BAND */}
        <div
          className="absolute inset-x-0 bottom-0 z-10 h-2"
          style={{
            background:
              "repeating-linear-gradient(90deg,#b9533d 0 28px,#dda63d 28px 56px,#347059 56px 84px,#39627a 84px 112px,#8b4d66 112px 140px)",
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto flex min-h-[94vh] max-w-7xl flex-col px-5 py-8 sm:px-8 lg:px-12">
          {/* NAV */}
          <nav className="flex items-center justify-between">
            <Link
              href="/"
              className="text-sm font-semibold uppercase tracking-[0.25em] text-white/75 transition hover:text-white"
            >
              Fable Culture
            </Link>

            <span className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
              Explore the continent
            </span>
          </nav>

          {/* MAIN HERO TEXT */}
          <div className="flex flex-1 items-center">
            <div className="max-w-6xl">
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.42em] text-[#e5bc65] sm:tracking-[0.5em]">
                Mountains • Rainforests • People • Stories
              </p>

              <h1 className="max-w-6xl text-6xl font-black leading-[0.82] tracking-tight sm:text-7xl md:text-8xl lg:text-[9rem]">
                SOUTH
                <span className="block text-[#e3c48b]">AMERICA</span>
              </h1>

              <div className="mt-10 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
                <p className="max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                  Journey from the Andes to the Amazon and beyond. Explore
                  ancient histories, living cultures, extraordinary landscapes
                  and modern South America.
                </p>

                <a
                  href="#explore"
                  className="group inline-flex w-fit items-center gap-3 border-b border-[#e5bc65] pb-2 text-sm font-bold uppercase tracking-[0.25em] text-[#f1d68d]"
                >
                  Begin the journey
                  <span className="transition-transform group-hover:translate-x-2">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* SCROLL */}
          <div className="pb-5 text-xs font-semibold uppercase tracking-[0.35em] text-white/40">
            Scroll to explore
          </div>
        </div>
      </section>
    </main>
  );
}
