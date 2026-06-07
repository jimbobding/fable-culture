import ResourceSubmissionForm from "@/components/shared/ResourceSubmissionForm";

type Discovery = {
  title: string;
  name?: string;
  description?: string;
  topic?: string;
  country?: string;
  href: string;
};

type Props = {
  items: Discovery[];
  region?: string;
  countries?: string[];
  topics?: string[];
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
    <section className="mx-auto max-w-4xl space-y-20 py-8 text-center">
      <div className="space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
          Student Contribution
        </p>

        <h2 className="text-4xl font-black text-slate-900 sm:text-5xl">
          {title}
        </h2>

        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
          {description}
        </p>

        <div className="flex flex-wrap justify-center gap-5 pt-2 text-sm text-slate-500">
          <span>🌍 Educational</span>
          <span>🎶 Cultural</span>
          <span>📚 Reliable</span>
          <span>👀 Safe for school</span>
        </div>
      </div>

      <div className="space-y-10 text-center">
        {items.map((item) => {
          const isPlaceholder = item.href === "#";

          const cardClasses = `
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
          `;

          const cardContent = (
            <>
              {isPlaceholder && (
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
                  Research Task
                </p>
              )}

              <div className="space-y-3">
                <h3 className="text-2xl font-black text-slate-900 transition-colors group-hover:text-slate-700">
                  {item.title}
                </h3>

                {(item.topic || item.country) && (
                  <p className="text-sm uppercase tracking-[0.15em] text-slate-400">
                    {[item.topic, item.country].filter(Boolean).join(" • ")}
                  </p>
                )}

                {item.description && (
                  <p className="leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                )}

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
            </>
          );

          if (isPlaceholder) {
            return (
              <div key={item.title} className={cardClasses}>
                {cardContent}
              </div>
            );
          }

          return (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cardClasses}
            >
              {cardContent}
            </a>
          );
        })}
      </div>

      {region && (
        <ResourceSubmissionForm
          region={region}
          countries={countries ?? []}
          topics={topics ?? []}
        />
      )}
    </section>
  );
}
