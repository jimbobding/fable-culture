import Link from "next/link";
import RegionalTimeline from "./RegionalTimeline";
import type { RegionalTimelineConfig } from "./types";

type Props = {
  config: RegionalTimelineConfig;
};

export default function RegionalTimelinePage({ config }: Props) {
  const { regionName, title, intro, backHref, theme } = config;

  return (
    <main
      className="min-h-screen"
      style={{
        backgroundColor: theme.background,
        color: theme.text,
      }}
    >
      {/* HERO */}
      <header
        className="relative overflow-hidden px-5 pb-24 pt-8 text-white sm:px-8 lg:px-12"
        style={{ backgroundColor: theme.primary }}
      >
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full border-[60px] opacity-10"
          style={{ borderColor: theme.accent }}
        />

        <div
          className="pointer-events-none absolute -bottom-48 left-[10%] h-96 w-96 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: theme.secondary }}
        />

        <div className="relative mx-auto max-w-7xl">
          <nav className="flex items-center justify-between">
            <Link
              href={backHref}
              className="text-sm font-bold uppercase tracking-[0.22em] text-white/70 transition hover:text-white"
            >
              ← Back to {regionName}
            </Link>

            <span className="text-xs font-black uppercase tracking-[0.3em] text-white/40">
              Fable Culture
            </span>
          </nav>

          <div className="mt-28 max-w-5xl">
            <p
              className="text-sm font-black uppercase tracking-[0.45em]"
              style={{ color: theme.accent }}
            >
              History • Change • Connection
            </p>

            <h1 className="mt-6 text-6xl font-black leading-[0.88] tracking-tight md:text-8xl lg:text-9xl">
              {title}
            </h1>

            <p className="mt-9 max-w-3xl text-xl leading-relaxed text-white/70 md:text-2xl">
              {intro}
            </p>
          </div>

          {/* SIMPLE VISUAL TIMELINE */}
          <div className="mt-20 flex items-center">
            <div className="h-3 w-3 rounded-full bg-white" />
            <div className="h-px flex-1 bg-white/30" />
            <div
              className="h-5 w-5 rounded-full"
              style={{ backgroundColor: theme.accent }}
            />
            <div className="h-px flex-1 bg-white/30" />
            <div className="h-3 w-3 rounded-full bg-white" />
          </div>
        </div>
      </header>

      {/* TIMELINE */}
      <section className="px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <p
              className="text-xs font-black uppercase tracking-[0.35em]"
              style={{ color: theme.primary }}
            >
              Explore the timeline
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
              See what was happening across the region.
            </h2>

            <p
              className="mt-6 text-lg leading-relaxed"
              style={{ color: theme.mutedText }}
            >
              View the whole story or choose a place to follow its journey
              through the wider history of {regionName}.
            </p>
          </div>

          <RegionalTimeline
            events={config.events}
            filters={config.filters}
            eras={config.eras}
            theme={config.theme}
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="px-5 py-16 text-white sm:px-8 lg:px-12"
        style={{ backgroundColor: theme.primary }}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p
              className="text-xs font-black uppercase tracking-[0.35em]"
              style={{ color: theme.accent }}
            >
              Keep exploring
            </p>

            <p className="mt-3 max-w-2xl text-3xl font-black">
              History makes more sense when we see how places connect.
            </p>
          </div>

          <Link
            href={backHref}
            className="w-fit border-b border-white/40 pb-2 text-sm font-black uppercase tracking-[0.2em]"
          >
            ← Back to {regionName}
          </Link>
        </div>
      </footer>
    </main>
  );
}
