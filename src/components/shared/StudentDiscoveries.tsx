import ResourceSubmissionForm from "@/components/shared/ResourceSubmissionForm";

type Discovery = {
  title: string;

  name?: string;

  description: string;

  topic: string;

  country: string;

  href: string;
};

type Props = {
  items: Discovery[];

  region: string;

  countries: string[];

  topics: string[];

  title?: string;

  description?: string;
};

export default function StudentDiscoveries({
  items,

  region,

  countries,

  topics,

  title = "🌍 Student Discoveries",

  description = "Help expand Fable Culture by finding useful websites, videos, museums, music, recipes, and educational resources connected to this region.",
}: Props) {
  return (
    <section className="max-w-4xl mx-auto py-8 space-y-20 text-center">
      {/* HEADER */}
      <div className="space-y-6">
        <p className="uppercase tracking-[0.35em] text-xs font-semibold text-slate-400">
          Student Contribution
        </p>

        <h2 className="text-4xl sm:text-5xl font-black text-slate-900">
          {title}
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
          {description}
        </p>

        {/* TRAITS */}
        <div className="flex flex-wrap justify-center gap-5 pt-2 text-sm text-slate-500">
          <span>🌍 Educational</span>

          <span>🎶 Cultural</span>

          <span>📚 Reliable</span>

          <span>👀 Safe for school</span>
        </div>
      </div>

      {/* DISCOVERIES */}
      <div className="space-y-10 text-center">
        {items.map((item) => {
          const isPlaceholder = item.href === "#";

          return (
            <a
              key={item.title}
              href={item.href}
              target={!isPlaceholder ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="
                group
                block
                max-w-2xl
                mx-auto
                rounded-[2rem]
                bg-white/30
                backdrop-blur-sm
                border
                border-white/40
                px-8
                py-8
                shadow-sm
                transition-all
                duration-300
                hover:bg-white/45
                hover:shadow-lg
                hover:-translate-y-1
              "
            >
              {isPlaceholder && (
                <p className="uppercase tracking-[0.25em] text-xs font-semibold text-amber-600">
                  Research Task
                </p>
              )}

              <div className="space-y-3">
                <h3 className="text-2xl font-black text-slate-900 group-hover:text-slate-700 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-400 tracking-[0.15em] uppercase">
                  {item.topic} • {item.country}
                </p>

                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                {item.name && (
                  <p className="text-sm italic text-slate-400">
                    Shared by {item.name}
                  </p>
                )}

                {!isPlaceholder && (
                  <p className="pt-1 text-sm font-semibold text-slate-700">
                    Explore Resource →
                  </p>
                )}
              </div>
            </a>
          );
        })}
      </div>

      {/* SUBMISSION FORM */}
      <ResourceSubmissionForm
        region={region}
        countries={countries}
        topics={topics}
      />
    </section>
  );
}
