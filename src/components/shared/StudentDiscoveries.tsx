type Theme = {
  title: string;
  points: string[];
  image: string;
};

type Discovery = {
  title: string;
  name: string;
  description: string;
  topic: string;
  country: string;
  href: string;
};

type Props = {
  items: Discovery[];
  themes: Theme[];
};

export default function StudentDiscoveries({ items, themes }: Props) {
  return (
    <section className="rounded-[2rem] border border-orange-200/70 bg-gradient-to-br from-[#fff1dc] via-[#ffe8d6] to-[#ffe4ef] p-6 sm:p-8 shadow-lg space-y-10">
      {/* HEADER */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#4a1d0d]">
          🌟 Student Discoveries
        </h2>
        <p className="max-w-3xl mx-auto text-[#6b4226]">
          Explore this region through student-found websites and guided
          discovery tasks.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {themes?.map((theme) => (
          <div
            key={theme.title}
            className="overflow-hidden rounded-2xl border border-orange-300 bg-white/60 shadow-md"
          >
            <img
              src={theme.image}
              alt={theme.title}
              className="h-40 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold text-[#4a1d0d] mb-2">
                {theme.title}
              </h3>

              <ul className="text-[#6b4226] text-sm space-y-2">
                {theme.points.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* DISCOVERIES */}
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item) => {
          const isPlaceholder = item.href === "#";

          return (
            <a
              key={item.title}
              href={item.href}
              target={!isPlaceholder ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`rounded-2xl border p-6 shadow-md transition-all duration-300 ${
                isPlaceholder
                  ? "border-dashed border-amber-400 bg-amber-50 opacity-90 cursor-default"
                  : "border-rose-300 bg-white/70 backdrop-blur hover:shadow-xl hover:-translate-y-1"
              }`}
            >
              {isPlaceholder && (
                <p className="text-xs font-semibold text-amber-600 mb-2">
                  🔍 Your Task
                </p>
              )}

              <h3 className="text-xl font-semibold text-[#4a1d0d] mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-rose-700 mb-2">
                {item.topic} • {item.country}
              </p>

              <p className="text-[#6b4226] text-sm leading-relaxed">
                {item.description}
              </p>
              <p className="text-sm text-rose-700 mt-2">{item.name}</p>

              {!isPlaceholder && (
                <p className="mt-4 text-sm font-semibold text-rose-700">
                  Visit site →
                </p>
              )}
            </a>
          );
        })}
      </div>
    </section>
  );
}
