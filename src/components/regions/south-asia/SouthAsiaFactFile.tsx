type FactFileItem = {
  image: string;
  title: string;
  description: string;
};

type SouthAsiaFactFileProps = {
  countryName: string;
  theme: {
    primary: string;
    secondary: string;
    accent: string;
  };
  factFile: {
    capital: FactFileItem;
    food: FactFileItem;
    wildlife: FactFileItem;
    culture: FactFileItem;
  };
};

const itemStyles = {
  capital: {
    label: "Capital",
    ring: "border-sky-300/70",
    bg: "from-sky-100/80 via-white to-cyan-100/70",
    topBorder: "from-sky-500 via-cyan-400 to-blue-500",
  },
  food: {
    label: "Food",
    ring: "border-amber-300/70",
    bg: "from-amber-100/80 via-white to-orange-100/70",
    topBorder: "from-amber-500 via-orange-400 to-red-400",
  },
  wildlife: {
    label: "Wildlife",
    ring: "border-emerald-300/70",
    bg: "from-emerald-100/80 via-white to-lime-100/70",
    topBorder: "from-emerald-500 via-green-400 to-lime-500",
  },
  culture: {
    label: "Culture",
    ring: "border-fuchsia-300/70",
    bg: "from-fuchsia-100/80 via-white to-rose-100/70",
    topBorder: "from-fuchsia-500 via-pink-400 to-rose-500",
  },
} as const;

export default function SouthAsiaFactFile({
  countryName,
  theme,
  factFile,
}: SouthAsiaFactFileProps) {
  const items = [
    { key: "capital" as const, ...factFile.capital },
    { key: "food" as const, ...factFile.food },
    { key: "wildlife" as const, ...factFile.wildlife },
    { key: "culture" as const, ...factFile.culture },
  ];

  return (
    <section className="space-y-6">
      <div className="text-center space-y-3">
        <p
          className="text-xs font-semibold uppercase tracking-[0.3em]"
          style={{ color: theme.secondary }}
        >
          Fact File
        </p>

        <h2 className="text-3xl font-bold text-[#4a1d0d] sm:text-4xl">
          Learn about {countryName}
        </h2>

        <p className="mx-auto max-w-3xl leading-relaxed text-[#6b4226]">
          Explore the capital city, food, wildlife, and culture through images
          and short fact-file summaries.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item, index) => {
          const style = itemStyles[item.key];

          return (
            <article
              key={item.key}
              className={`group overflow-hidden rounded-[2rem] border bg-gradient-to-br ${style.bg} ${style.ring} shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}
            >
              <div
                className={`h-3 w-full bg-gradient-to-r ${style.topBorder}`}
              />

              <div
                className={`grid ${
                  index % 2 === 0
                    ? "lg:grid-cols-[1.05fr_0.95fr]"
                    : "lg:grid-cols-[0.95fr_1.05fr]"
                }`}
              >
                <div
                  className={`relative min-h-[260px] ${
                    index % 2 !== 0 ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={item.image}
                    alt={`${item.title} in ${countryName}`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />

                  <div className="absolute left-4 top-4">
                    <span className="inline-flex rounded-full bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#4a1d0d] shadow-sm backdrop-blur">
                      {style.label}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col justify-center p-6 sm:p-7">
                  <h3 className="text-2xl font-bold text-[#4a1d0d] sm:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-[#6b4226] sm:text-lg">
                    {item.description}
                  </p>

                  <div className="mt-5">
                    <span
                      className="inline-flex rounded-full px-4 py-2 text-sm font-medium text-white shadow-md"
                      style={{ backgroundColor: theme.primary }}
                    >
                      {style.label}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
