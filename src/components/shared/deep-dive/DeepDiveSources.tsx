import type { DeepDiveSource, DeepDiveTheme } from "./types";

type Props = {
  sources: DeepDiveSource[];
  theme: DeepDiveTheme;
};

export default function DeepDiveSources({ sources, theme }: Props) {
  if (sources.length === 0) {
    return null;
  }

  return (
    <section
      className="px-5 py-24 sm:px-8 lg:px-12"
      style={{ backgroundColor: theme.surface }}
    >
      <div className="mx-auto max-w-7xl">
        <p
          className="text-sm font-black uppercase tracking-[0.4em]"
          style={{ color: theme.primary }}
        >
          Where did we get our information?
        </p>

        <h2 className="mt-5 text-4xl font-black md:text-6xl">
          Sources & further exploration
        </h2>

        <p
          className="mt-6 max-w-3xl text-lg leading-relaxed"
          style={{ color: theme.mutedText }}
        >
          This Deep Dive uses credited museum, educational and other reliable
          sources. Follow the links below to explore the subject in more detail.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {sources.map((source) => (
            <a
              key={`${source.name}-${source.title}`}
              href={source.url}
              target="_blank"
              rel="noreferrer"
              className="group border-l-4 p-7 transition hover:translate-x-2"
              style={{
                backgroundColor: theme.background,
                borderColor: theme.primary,
              }}
            >
              <p
                className="text-xs font-black uppercase tracking-[0.25em]"
                style={{ color: theme.primary }}
              >
                {source.name}
              </p>

              <h3 className="mt-3 text-2xl font-black">{source.title}</h3>

              {source.description && (
                <p
                  className="mt-3 leading-relaxed"
                  style={{ color: theme.mutedText }}
                >
                  {source.description}
                </p>
              )}

              <p className="mt-5 font-black" style={{ color: theme.primary }}>
                Visit source →
              </p>
            </a>
          ))}
        </div>

        <p
          className="mt-10 max-w-4xl text-sm leading-relaxed"
          style={{ color: theme.mutedText }}
        >
          Fable Culture summarises information from the credited sources rather
          than reproducing their wording.
        </p>
      </div>
    </section>
  );
}
