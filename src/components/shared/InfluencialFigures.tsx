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

      <div className="grid gap-8 md:grid-cols-2">
        {figures.map((figure) => (
          <article
            key={figure.name}
            className="group overflow-hidden rounded-[2rem] border border-white/60 bg-white/80 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-[320px] overflow-hidden">
                <img
                  src={figure.image}
                  alt={figure.name}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
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

              <div className="flex flex-col justify-center p-6 sm:p-7">
                <h3 className="text-3xl font-bold text-stone-900">
                  {figure.name}
                </h3>

                <p
                  className="mt-2 text-sm font-semibold uppercase tracking-[0.2em]"
                  style={{ color: theme.secondary }}
                >
                  {figure.role}
                </p>

                <p className="mt-4 text-base leading-relaxed text-stone-700">
                  {figure.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
