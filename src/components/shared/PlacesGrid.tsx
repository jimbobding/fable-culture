type Place = {
  title: string;
  tag: string;
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

  places: Place[];
};

export default function PlacesGrid({ countryName, theme, places }: Props) {
  return (
    <section className="space-y-20 py-24">
      <div className="text-center space-y-4">
        <p
          className="text-xs font-semibold uppercase tracking-[0.3em]"
          style={{ color: theme.secondary }}
        >
          Places to Explore
        </p>

        <h2 className="text-5xl font-bold text-stone-900">
          Explore {countryName}
        </h2>

        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-stone-700">
          Discover landscapes, cities, landmarks, and locations that help tell
          the story of {countryName}.
        </p>
      </div>

      <div className="space-y-24">
        {places.map((place, index) => {
          const isLeft = index % 2 === 0;

          return (
            <article
              key={place.title}
              className={`
                grid items-center gap-10
                lg:grid-cols-2
              `}
            >
              {/* IMAGE */}
              <div
                className={`
                  relative overflow-hidden rounded-[2.5rem]
                  min-h-[420px]
                  shadow-2xl
                  ${!isLeft ? "lg:order-2" : ""}
                `}
              >
                <img
                  src={place.image}
                  alt={place.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                <div className="absolute left-6 top-6">
                  <span
                    className="inline-flex rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-white shadow-lg"
                    style={{ backgroundColor: theme.primary }}
                  >
                    {place.tag}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="space-y-5">
                <p
                  className="text-sm font-semibold uppercase tracking-[0.3em]"
                  style={{ color: theme.secondary }}
                >
                  {place.tag}
                </p>

                <h3 className="text-5xl font-bold text-stone-900">
                  {place.title}
                </h3>

                <p className="text-lg leading-relaxed text-stone-700">
                  {place.description}
                </p>

                <div
                  className="h-1 w-24 rounded-full"
                  style={{ backgroundColor: theme.accent }}
                />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
