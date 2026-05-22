type FactFileItem = {
  image: string;
  title: string;
  description: string;
};

type FactFileTemplateProps = {
  countryName: string;

  theme: {
    primary: string;
    secondary: string;
    accent: string;
  };

  introLabel: string;

  introTitle: string;

  introText: string;

  items: {
    key: string;
    label: string;
    ring: string;
    bg: string;
    topBorder: string;
    data: FactFileItem;
  }[];
};

export default function FactFileTemplate({
  countryName,
  theme,
  introLabel,
  introTitle,
  introText,
  items,
}: FactFileTemplateProps) {
  return (
    <section className="space-y-6">
      <div className="text-center space-y-3">
        <p
          className="text-xs font-semibold uppercase tracking-[0.3em]"
          style={{ color: theme.secondary }}
        >
          {introLabel}
        </p>

        <h2 className="text-3xl font-bold text-[#4a1d0d] sm:text-4xl">
          {introTitle}
        </h2>

        <p className="mx-auto max-w-3xl leading-relaxed text-[#6b4226]">
          {introText}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item, index) => (
          <article
            key={item.key}
            className={`group overflow-hidden rounded-[2rem] border bg-gradient-to-br ${item.bg} ${item.ring} shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}
          >
            <div className={`h-3 w-full bg-gradient-to-r ${item.topBorder}`} />
            <div
              className={`grid h-full ${
                index % 2 === 0
                  ? "lg:grid-cols-[1.05fr_0.95fr]"
                  : "lg:grid-cols-[0.95fr_1.05fr]"
              }`}
            >
              <div
                className={`relative h-full min-h-[320px] overflow-hidden ${
                  index % 2 !== 0 ? "lg:order-2" : ""
                }`}
              >
                <img
                  src={item.data.image}
                  alt={`${item.data.title} in ${countryName}`}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />

                <div className="absolute left-4 top-4">
                  <span className="inline-flex rounded-full bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#4a1d0d] shadow-sm backdrop-blur">
                    {item.label}
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-7">
                <h3 className="text-2xl font-bold text-[#4a1d0d] sm:text-3xl">
                  {item.data.title}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-[#6b4226] sm:text-lg">
                  {item.data.description}
                </p>

                <div className="mt-5">
                  <span
                    className="inline-flex rounded-full px-4 py-2 text-sm font-medium text-white shadow-md"
                    style={{ backgroundColor: theme.primary }}
                  >
                    {item.label}
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
