"use client";

import { useState } from "react";

type InfluentialFigure = {
  name: string;
  role: string;
  image: string;
  description: string;
};

type Props = {
  countryName: string;
  theme: {
    primary: string;
    secondary: string;
    accent: string;
  };
  figures: InfluentialFigure[];
};

export default function InfluentialFigures({
  countryName,
  theme,
  figures,
}: Props) {
  const [revealedFigures, setRevealedFigures] = useState<string[]>([]);

  const revealFigure = (name: string) => {
    setRevealedFigures((prev) =>
      prev.includes(name) ? prev : [...prev, name],
    );
  };

  return (
    <section className="space-y-10 py-20">
      <div className="text-center space-y-4">
        <p
          className="text-xs font-semibold uppercase tracking-[0.3em]"
          style={{ color: theme.secondary }}
        >
          Influential Figures
        </p>

        <h2 className="text-4xl font-bold text-stone-900">
          Influential People of {countryName}
        </h2>

        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-stone-700">
          Explore influential people who helped shape the country through music,
          leadership, sport, activism, and culture.
        </p>
      </div>

      <div className="grid items-stretch gap-8 md:grid-cols-2">
        {figures.map((figure) => {
          const isRevealed = revealedFigures.includes(figure.name);

          return (
            <article
              key={figure.name}
              className="group h-full overflow-hidden rounded-[2rem] border border-white/60 bg-white/80 shadow-lg backdrop-blur transition-all duration-300 hover:shadow-2xl"
            >
              <div className="grid h-full lg:grid-cols-[0.95fr_1.05fr]">
                <div className="relative min-h-[320px] overflow-hidden">
                  <img
                    src={figure.image}
                    alt={figure.name}
                    className={`absolute inset-0 h-full w-full object-cover transition duration-500 ${
                      isRevealed
                        ? "blur-0 scale-105 brightness-100"
                        : "blur-2xl scale-105 brightness-50"
                    }`}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />

                  <div className="absolute left-4 top-4">
                    <span
                      className="inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white shadow-md"
                      style={{ backgroundColor: theme.primary }}
                    >
                      {figure.role}
                    </span>
                  </div>
                </div>

                <div className="flex min-h-[320px] flex-col justify-center p-6 sm:p-7">
                  <h3 className="min-h-[72px] text-3xl font-bold text-stone-900 transition-all duration-500">
                    {isRevealed ? figure.name : "???"}
                  </h3>

                  <p
                    className="mt-2 text-sm font-semibold uppercase tracking-[0.2em]"
                    style={{ color: theme.secondary }}
                  >
                    {figure.role}
                  </p>

                  <p className="mt-4 min-h-[96px] text-base leading-relaxed text-stone-700">
                    {figure.description}
                  </p>

                  <button
                    onClick={() => revealFigure(figure.name)}
                    className={`mt-6 w-fit rounded-full px-5 py-2 text-sm font-semibold text-white transition-all duration-300 ${
                      isRevealed
                        ? "pointer-events-none opacity-0"
                        : "opacity-100 hover:scale-105"
                    }`}
                    style={{ backgroundColor: theme.primary }}
                  >
                    Reveal Figure
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
