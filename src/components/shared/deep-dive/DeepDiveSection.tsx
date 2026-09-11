"use client";

import { useState } from "react";
import type {
  DeepDiveConfig,
  DeepDiveSection as DeepDiveSectionType,
  DeepDiveSourceRef,
  DeepDiveTheme,
} from "./types";

type Props = {
  section: DeepDiveSectionType;
  theme: DeepDiveTheme;
  sources: DeepDiveConfig["sources"];
  index: number;
};

export default function DeepDiveSection({
  section,
  theme,
  sources,
  index,
}: Props) {
  switch (section.type) {
    case "article":
      return (
        <ArticleSection
          section={section}
          theme={theme}
          sources={sources}
          index={index}
        />
      );

    case "big-date":
      return (
        <BigDateSection section={section} theme={theme} sources={sources} />
      );

    case "facts":
      return <FactsSection section={section} theme={theme} sources={sources} />;

    case "reveal":
      return (
        <RevealSection section={section} theme={theme} sources={sources} />
      );

    case "timeline":
      return (
        <TimelineSection section={section} theme={theme} sources={sources} />
      );

    case "statement":
      return (
        <StatementSection section={section} theme={theme} sources={sources} />
      );

    case "journey":
      return (
        <JourneySection section={section} theme={theme} sources={sources} />
      );

    case "choice":
      return <ChoiceSection section={section} theme={theme} />;

    default:
      return null;
  }
}

/* =========================================================
   SOURCE CREDIT
========================================================= */

function SourceCredit({
  refs,
  sources,
  dark = false,
}: {
  refs?: DeepDiveSourceRef[];
  sources: DeepDiveConfig["sources"];
  dark?: boolean;
}) {
  if (!refs?.length) return null;

  return (
    <div
      className={`mt-8 flex flex-wrap items-center gap-2 border-t pt-5 text-xs ${
        dark ? "border-white/15" : "border-black/10"
      }`}
    >
      <span
        className={`font-black uppercase tracking-[0.22em] ${
          dark ? "text-white/40" : "text-black/40"
        }`}
      >
        Sources
      </span>

      {refs.map((ref) => {
        const source = sources.find((item) => item.id === ref.sourceId);

        if (!source) return null;

        return (
          <a
            key={ref.sourceId}
            href={source.url}
            target="_blank"
            rel="noreferrer"
            className={`rounded-full border px-3 py-2 font-bold transition ${
              dark
                ? "border-white/20 text-white/70 hover:bg-white/10 hover:text-white"
                : "border-black/15 text-black/60 hover:bg-black/5 hover:text-black"
            }`}
          >
            {ref.label || source.name} ↗
          </a>
        );
      })}
    </div>
  );
}

/* =========================================================
   ARTICLE
========================================================= */

function ArticleSection({
  section,
  theme,
  sources,
  index,
}: {
  section: Extract<DeepDiveSectionType, { type: "article" }>;
  theme: DeepDiveTheme;
  sources: DeepDiveConfig["sources"];
  index: number;
}) {
  return (
    <section className="relative px-5 py-28 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="lg:sticky lg:top-12 lg:self-start">
          {section.eyebrow && (
            <p
              className="text-sm font-black uppercase tracking-[0.38em]"
              style={{ color: theme.primary }}
            >
              {section.eyebrow}
            </p>
          )}

          <span
            className="mt-5 block font-serif text-7xl font-black opacity-10 md:text-9xl"
            style={{ color: theme.primary }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <h2 className="-mt-5 max-w-xl text-4xl font-black leading-[0.95] md:text-6xl">
            {section.title}
          </h2>

          <div
            className="mt-8 h-1 w-24"
            style={{ backgroundColor: theme.accent }}
          />
        </div>

        <article>
          <div className="space-y-7">
            {section.paragraphs.map((paragraph, paragraphIndex) => (
              <p
                key={paragraphIndex}
                className="text-lg leading-[1.85] md:text-xl"
                style={{ color: theme.mutedText }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {section.highlight && (
            <div
              className="my-10 border-l-4 py-2 pl-7"
              style={{ borderColor: theme.accent }}
            >
              <p className="text-2xl font-black leading-relaxed md:text-3xl">
                {section.highlight}
              </p>
            </div>
          )}

          <SourceCredit refs={section.sourceRefs} sources={sources} />
        </article>
      </div>
    </section>
  );
}

/* =========================================================
   BIG DATE
========================================================= */

function BigDateSection({
  section,
  theme,
  sources,
}: {
  section: Extract<DeepDiveSectionType, { type: "big-date" }>;
  theme: DeepDiveTheme;
  sources: DeepDiveConfig["sources"];
}) {
  return (
    <section
      className="relative overflow-hidden px-5 py-28 text-white sm:px-8 lg:px-12"
      style={{ backgroundColor: theme.primary }}
    >
      <div className="mx-auto max-w-7xl text-center">
        <p
          className="font-serif text-[7rem] font-black leading-none opacity-20 md:text-[13rem]"
          style={{ color: theme.accent }}
        >
          {section.date}
        </p>

        {section.eyebrow && (
          <p
            className="-mt-5 text-xs font-black uppercase tracking-[0.4em]"
            style={{ color: theme.accent }}
          >
            {section.eyebrow}
          </p>
        )}

        <h2 className="mx-auto mt-7 max-w-5xl text-4xl font-black leading-[0.95] md:text-7xl">
          {section.title}
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-white/70">
          {section.text}
        </p>

        <div className="mx-auto max-w-3xl text-left">
          <SourceCredit refs={section.sourceRefs} sources={sources} dark />
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FACTS
========================================================= */

function FactsSection({
  section,
  theme,
  sources,
}: {
  section: Extract<DeepDiveSectionType, { type: "facts" }>;
  theme: DeepDiveTheme;
  sources: DeepDiveConfig["sources"];
}) {
  const dark = Boolean(section.dark);

  const shapes = [
    "polygon(4% 0, 100% 7%, 95% 92%, 85% 100%, 0 95%, 2% 20%)",
    "polygon(0 8%, 92% 0, 100% 16%, 96% 100%, 7% 95%)",
    "polygon(7% 0, 100% 5%, 96% 95%, 2% 100%, 0 18%)",
    "polygon(0 4%, 94% 0, 100% 88%, 88% 100%, 4% 95%)",
  ];

  const moves = [
    "md:-rotate-[2deg] md:translate-y-5",
    "md:rotate-[1.4deg] md:-translate-y-4",
    "md:-rotate-[0.8deg] md:translate-y-10",
    "md:rotate-[2deg]",
  ];

  const fills = dark
    ? ["#244F60", "#A64035", "#315F69", "#80692C"]
    : ["#F1DFAE", "#D9E4E6", "#E8C98B", "#EACFC7"];

  return (
    <section
      className={`relative overflow-hidden px-5 py-28 sm:px-8 lg:px-12 ${
        dark ? "text-white" : ""
      }`}
      style={{
        backgroundColor: dark ? theme.dark : theme.background,
      }}
    >
      <div
        aria-hidden="true"
        className="absolute -right-24 top-16 h-72 w-72 rounded-full border-[34px] opacity-[0.08]"
        style={{ borderColor: theme.accent }}
      />

      <div className="mx-auto max-w-7xl">
        {section.eyebrow && (
          <p
            className="text-sm font-black uppercase tracking-[0.4em]"
            style={{ color: theme.accent }}
          >
            {section.eyebrow}
          </p>
        )}

        <h2 className="mt-5 max-w-5xl -rotate-[0.4deg] text-5xl font-black md:text-7xl">
          {section.title}
        </h2>

        {section.intro && (
          <p
            className={`mt-7 max-w-3xl text-xl leading-relaxed ${
              dark ? "text-white/65" : ""
            }`}
            style={dark ? undefined : { color: theme.mutedText }}
          >
            {section.intro}
          </p>
        )}

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {section.facts.map((fact, index) => (
            <article
              key={fact.title}
              className={`relative min-h-[235px] p-7 shadow-[10px_12px_0_rgba(0,0,0,0.14)] ${
                moves[index % moves.length]
              }`}
              style={{
                backgroundColor: fills[index % fills.length],
                clipPath: shapes[index % shapes.length],
                color: dark ? "#ffffff" : theme.text,
              }}
            >
              <span
                aria-hidden="true"
                className="absolute right-5 top-5 h-3 w-14 -rotate-6"
                style={{
                  backgroundColor: index % 2 === 0 ? "#D9A62E" : "#A64035",
                }}
              />

              {fact.icon && (
                <div className="mb-4 text-5xl leading-none">{fact.icon}</div>
              )}

              <h3 className="text-2xl font-black leading-tight">
                {fact.title}
              </h3>

              <p
                className={`mt-4 text-base leading-relaxed ${
                  dark ? "text-white/75" : ""
                }`}
                style={dark ? undefined : { color: theme.mutedText }}
              >
                {fact.text}
              </p>
            </article>
          ))}
        </div>

        <SourceCredit refs={section.sourceRefs} sources={sources} dark={dark} />
      </div>
    </section>
  );
}

/* =========================================================
   REVEAL
========================================================= */

function RevealSection({
  section,
  theme,
  sources,
}: {
  section: Extract<DeepDiveSectionType, { type: "reveal" }>;
  theme: DeepDiveTheme;
  sources: DeepDiveConfig["sources"];
}) {
  const [open, setOpen] = useState<string | null>(null);

  const layouts = [
    {
      wrap: "md:w-[82%] md:-rotate-[2.2deg] md:translate-y-8",
      clip: "polygon(5% 0, 100% 6%, 96% 91%, 86% 100%, 0 95%, 2% 22%)",
      bg: "#F2DFAC",
      accent: "#A64035",
      iconBg: "#D9A62E",
    },
    {
      wrap: "md:w-[92%] md:ml-auto md:rotate-[1.5deg] md:-translate-y-5",
      clip: "polygon(0 8%, 94% 0, 100% 16%, 97% 100%, 6% 95%)",
      bg: "#DDE8EA",
      accent: "#236A8C",
      iconBg: "#236A8C",
    },
    {
      wrap: "md:w-[76%] md:ml-12 md:-rotate-[1deg] md:translate-y-16",
      clip: "polygon(6% 0, 100% 4%, 95% 96%, 2% 100%, 0 19%)",
      bg: "#F4E7C8",
      accent: "#D29D2D",
      iconBg: "#A64035",
    },
    {
      wrap: "md:w-[88%] md:ml-auto md:rotate-[2.3deg] md:translate-y-2",
      clip: "polygon(0 4%, 91% 0, 100% 13%, 96% 90%, 84% 100%, 4% 96%)",
      bg: "#E8CFC8",
      accent: "#A64035",
      iconBg: "#D9A62E",
    },
  ];

  return (
    <section className="relative overflow-hidden px-5 py-28 sm:px-8 lg:px-12">
      <div
        aria-hidden="true"
        className="absolute -left-40 top-24 h-80 w-80 rounded-full border-[34px] opacity-[0.06]"
        style={{ borderColor: theme.primary }}
      />

      <div className="mx-auto max-w-7xl">
        {section.eyebrow && (
          <p
            className="text-sm font-black uppercase tracking-[0.4em]"
            style={{ color: "#A64035" }}
          >
            {section.eyebrow}
          </p>
        )}

        <h2 className="mt-5 max-w-5xl -rotate-[0.5deg] text-5xl font-black md:text-7xl">
          {section.title}
        </h2>

        {section.intro && (
          <p
            className="mt-7 max-w-3xl text-xl leading-relaxed"
            style={{ color: theme.mutedText }}
          >
            {section.intro}
          </p>
        )}

        <p
          className="mt-7 text-xs font-black uppercase tracking-[0.28em]"
          style={{ color: theme.primary }}
        >
          Tap a symbol to reveal more ↓
        </p>

        <div className="relative mt-20 grid gap-16 pb-20 md:grid-cols-2 md:gap-x-16 md:gap-y-10">
          {section.options.map((option, index) => {
            const isOpen = open === option.id;
            const layout = layouts[index % layouts.length];
            const isLast = index === section.options.length - 1;

            return (
              <div key={option.id} className={`relative ${layout.wrap}`}>
                {index > 0 && (
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute z-30 hidden font-black md:block ${
                      index % 2 === 0
                        ? "-left-14 -top-5 rotate-12 text-6xl"
                        : "-left-12 top-[42%] -rotate-12 text-5xl"
                    }`}
                    style={{ color: isLast ? "#A64035" : "#D29D2D" }}
                  >
                    {isLast ? "−" : "+"}
                  </span>
                )}

                {option.icon && (
                  <span
                    aria-hidden="true"
                    className="absolute -left-3 -top-8 z-20 flex h-20 w-20 rotate-3 items-center justify-center rounded-full border-4 border-white text-4xl shadow-lg md:-left-5 md:-top-10 md:h-24 md:w-24 md:text-5xl"
                    style={{ backgroundColor: layout.iconBg }}
                  >
                    {option.icon}
                  </span>
                )}

                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : option.id)}
                  className="group relative w-full px-8 pb-8 pt-14 text-left transition duration-300 hover:-translate-y-2 md:pl-16"
                  style={{
                    backgroundColor: isOpen ? theme.primary : layout.bg,
                    color: isOpen ? "#ffffff" : theme.text,
                    clipPath: layout.clip,
                    filter: "drop-shadow(10px 12px 0 rgba(31, 39, 36, 0.16))",
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="absolute right-5 top-5 h-3 w-16 -rotate-6"
                    style={{
                      backgroundColor: layout.accent,
                      opacity: isOpen ? 0.4 : 1,
                    }}
                  />

                  <span className="block text-2xl font-black md:text-3xl">
                    {option.title}
                  </span>

                  <span
                    className={`mt-3 inline-block text-xs font-black uppercase tracking-[0.22em] ${
                      isOpen ? "text-white/65" : "text-black/40"
                    }`}
                  >
                    {isOpen ? "Close −" : "Reveal +"}
                  </span>

                  {isOpen && (
                    <div className="mt-6 border-t border-white/20 pt-5">
                      <p className="text-lg leading-relaxed text-white/80">
                        {option.reveal}
                      </p>
                    </div>
                  )}
                </button>
              </div>
            );
          })}

          <svg
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-1 left-[4%] hidden h-16 w-[92%] md:block"
            viewBox="0 0 1000 80"
            preserveAspectRatio="none"
          >
            <path
              d="M5 54 C150 10 265 78 405 42 C550 4 680 72 995 25"
              fill="none"
              stroke="#236A8C"
              strokeWidth="4"
              strokeDasharray="13 15"
              opacity="0.25"
            />
          </svg>
        </div>

        <SourceCredit refs={section.sourceRefs} sources={sources} />
      </div>
    </section>
  );
}

/* =========================================================
   TIMELINE
========================================================= */

function TimelineSection({
  section,
  theme,
  sources,
}: {
  section: Extract<DeepDiveSectionType, { type: "timeline" }>;
  theme: DeepDiveTheme;
  sources: DeepDiveConfig["sources"];
}) {
  const moves = [
    "md:translate-y-2 md:-rotate-[1.5deg]",
    "md:translate-y-16 md:rotate-[1deg]",
    "md:-translate-y-2 md:-rotate-[0.8deg]",
    "md:translate-y-12 md:rotate-[1.6deg]",
  ];

  return (
    <section
      className="relative overflow-hidden px-5 py-28 sm:px-8 lg:px-12"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="mx-auto max-w-7xl">
        {section.eyebrow && (
          <p
            className="text-sm font-black uppercase tracking-[0.4em]"
            style={{ color: theme.primary }}
          >
            {section.eyebrow}
          </p>
        )}

        <h2 className="mt-5 max-w-5xl -rotate-[0.4deg] text-5xl font-black md:text-7xl">
          {section.title}
        </h2>

        {section.intro && (
          <p className="mt-7 max-w-3xl text-xl leading-relaxed opacity-70">
            {section.intro}
          </p>
        )}

        <div className="relative mt-20 pb-12">
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
            viewBox="0 0 1000 320"
            preserveAspectRatio="none"
          >
            <path
              d="M30 180 C180 45 270 280 430 150 C590 30 690 285 970 125"
              fill="none"
              stroke={theme.primary}
              strokeWidth="5"
              strokeDasharray="13 14"
              opacity="0.35"
            />
          </svg>

          <div className="relative grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {section.items.map((item, index) => (
              <article
                key={`${item.date}-${item.title}`}
                className={`relative ${moves[index % moves.length]}`}
              >
                <div
                  className="flex h-28 w-28 items-center justify-center rounded-full border-[7px] border-white/60 text-center shadow-[8px_9px_0_rgba(0,0,0,0.12)]"
                  style={{
                    backgroundColor:
                      index % 2 === 0 ? theme.primary : "#A64035",
                    color: "#ffffff",
                  }}
                >
                  <span className="text-2xl font-black">{item.date}</span>
                </div>

                <h3 className="mt-6 text-2xl font-black leading-tight">
                  {item.title}
                </h3>

                {item.text && (
                  <p className="mt-3 max-w-xs leading-relaxed opacity-70">
                    {item.text}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>

        <SourceCredit refs={section.sourceRefs} sources={sources} />
      </div>
    </section>
  );
}

/* =========================================================
   STATEMENT
========================================================= */

function StatementSection({
  section,
  theme,
  sources,
}: {
  section: Extract<DeepDiveSectionType, { type: "statement" }>;
  theme: DeepDiveTheme;
  sources: DeepDiveConfig["sources"];
}) {
  const rotations = [
    "-rotate-[2deg] md:translate-y-3",
    "rotate-[1deg]",
    "-rotate-[0.8deg] md:translate-y-7",
    "rotate-[2deg] md:-translate-y-2",
  ];

  return (
    <section
      className="relative overflow-hidden px-5 py-32 text-white sm:px-8 lg:px-12"
      style={{ backgroundColor: theme.dark }}
    >
      <div
        aria-hidden="true"
        className="absolute -right-28 top-10 h-80 w-80 rounded-full border-[45px] border-[#A64035]/15"
      />

      <div className="mx-auto max-w-7xl">
        {section.eyebrow && (
          <p
            className="text-sm font-black uppercase tracking-[0.4em]"
            style={{ color: theme.accent }}
          >
            {section.eyebrow}
          </p>
        )}

        <h2 className="mt-6 max-w-5xl -rotate-[0.6deg] text-5xl font-black leading-[0.9] md:text-8xl">
          {section.title}
        </h2>

        <p className="mt-10 max-w-3xl text-xl leading-relaxed text-white/70">
          {section.text}
        </p>

        {section.questions && (
          <div className="mt-16 flex flex-wrap items-center gap-5">
            {section.questions.map((question, index) => (
              <div
                key={question}
                className={`px-7 py-6 shadow-[7px_8px_0_rgba(0,0,0,0.2)] ${
                  rotations[index % rotations.length]
                }`}
                style={{
                  backgroundColor:
                    index % 3 === 0
                      ? "#236A8C"
                      : index % 3 === 1
                        ? "#A64035"
                        : "#D9A62E",
                  color: index % 3 === 2 ? theme.dark : "#ffffff",
                  clipPath:
                    index % 2 === 0
                      ? "polygon(3% 0, 100% 6%, 96% 100%, 0 94%)"
                      : "polygon(0 7%, 94% 0, 100% 94%, 5% 100%)",
                }}
              >
                <p className="text-lg font-black uppercase tracking-[0.08em]">
                  {question}
                </p>
              </div>
            ))}
          </div>
        )}

        <SourceCredit refs={section.sourceRefs} sources={sources} dark />
      </div>
    </section>
  );
}

/* =========================================================
   JOURNEY
========================================================= */

function JourneySection({
  section,
  theme,
  sources,
}: {
  section: Extract<DeepDiveSectionType, { type: "journey" }>;
  theme: DeepDiveTheme;
  sources: DeepDiveConfig["sources"];
}) {
  const moves = [
    "md:translate-y-28 md:-rotate-[2deg]",
    "md:-translate-y-2 md:rotate-[1.4deg]",
    "md:translate-y-40 md:-rotate-[0.8deg]",
    "md:translate-y-10 md:rotate-[1.8deg]",
    "md:translate-y-36 md:-rotate-[1.4deg]",
    "md:translate-y-2 md:rotate-[0.8deg]",
  ];

  return (
    <section
      className="relative overflow-hidden px-5 py-28 text-white sm:px-8 lg:px-12"
      style={{ backgroundColor: theme.primary }}
    >
      <div
        aria-hidden="true"
        className="absolute -left-32 bottom-[-190px] h-[440px] w-[620px] rounded-[50%] bg-black/10"
      />

      <div className="mx-auto max-w-7xl">
        {section.eyebrow && (
          <p
            className="text-sm font-black uppercase tracking-[0.4em]"
            style={{ color: theme.accent }}
          >
            {section.eyebrow}
          </p>
        )}

        <h2 className="mt-5 max-w-5xl -rotate-[0.4deg] text-5xl font-black md:text-7xl">
          {section.title}
        </h2>

        {section.intro && (
          <p className="mt-7 max-w-3xl text-xl leading-relaxed text-white/70">
            {section.intro}
          </p>
        )}

        <div className="relative mt-20 min-h-[560px] md:min-h-[470px]">
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
            viewBox="0 0 1000 430"
            preserveAspectRatio="none"
          >
            <path
              d="M35 295 C150 115 255 370 370 175 C485 0 610 350 720 155 C815 20 885 125 970 55"
              fill="none"
              stroke="#F1D074"
              strokeWidth="5"
              strokeDasharray="10 15"
              opacity="0.75"
            />
          </svg>

          <div className="relative grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {section.items.map((item, index) => (
              <article
                key={item.title}
                className={`relative text-center ${moves[index % moves.length]}`}
              >
                <div
                  className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-[6px] border-white/30 text-4xl shadow-[7px_8px_0_rgba(0,0,0,0.18)]"
                  style={{
                    backgroundColor:
                      index % 3 === 0
                        ? "#D9A62E"
                        : index % 3 === 1
                          ? "#A64035"
                          : "#214B5B",
                  }}
                >
                  {item.icon || "•"}
                </div>

                <h3 className="mt-5 text-sm font-black uppercase tracking-[0.14em]">
                  {item.title}
                </h3>

                {item.text && (
                  <p className="mx-auto mt-3 max-w-[180px] text-sm leading-relaxed text-white/70">
                    {item.text}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>

        <SourceCredit refs={section.sourceRefs} sources={sources} dark />
      </div>
    </section>
  );
}

/* =========================================================
   CHOICE
========================================================= */

function ChoiceSection({
  section,
  theme,
}: {
  section: Extract<DeepDiveSectionType, { type: "choice" }>;
  theme: DeepDiveTheme;
}) {
  const [selected, setSelected] = useState<string[]>([]);
  const maximum = section.maxChoices || 3;

  const rotations = [
    "-rotate-[1deg]",
    "rotate-[1.5deg]",
    "-rotate-[2deg]",
    "rotate-[0.8deg]",
  ];

  function toggle(option: string) {
    setSelected((current) => {
      if (current.includes(option)) {
        return current.filter((item) => item !== option);
      }

      if (current.length >= maximum) {
        return current;
      }

      return [...current, option];
    });
  }

  return (
    <section
      className="relative overflow-hidden px-5 py-32 text-white sm:px-8 lg:px-12"
      style={{ backgroundColor: theme.dark }}
    >
      <div
        aria-hidden="true"
        className="absolute -right-32 bottom-[-150px] h-[420px] w-[420px] rounded-full border-[55px] opacity-20"
        style={{ borderColor: theme.primary }}
      />

      <div className="mx-auto max-w-7xl">
        {section.eyebrow && (
          <p
            className="text-sm font-black uppercase tracking-[0.4em]"
            style={{ color: theme.accent }}
          >
            {section.eyebrow}
          </p>
        )}

        <h2 className="mt-6 max-w-5xl -rotate-[0.5deg] text-5xl font-black leading-[0.95] md:text-7xl">
          {section.title}
        </h2>

        {section.intro && (
          <p className="mt-7 max-w-3xl text-xl leading-relaxed text-white/70">
            {section.intro}
          </p>
        )}

        <p
          className="mt-8 text-sm font-black uppercase tracking-[0.2em]"
          style={{ color: theme.accent }}
        >
          {section.instruction || `Choose up to ${maximum}.`}
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          {section.options.map((option, index) => {
            const isSelected = selected.includes(option);

            return (
              <button
                key={option}
                type="button"
                onClick={() => toggle(option)}
                className={`px-6 py-4 text-sm font-black shadow-[5px_6px_0_rgba(0,0,0,0.2)] transition hover:-translate-y-1 ${
                  rotations[index % rotations.length]
                }`}
                style={{
                  backgroundColor: isSelected
                    ? theme.accent
                    : index % 3 === 0
                      ? "#236A8C"
                      : index % 3 === 1
                        ? "#A64035"
                        : "rgba(255,255,255,0.10)",
                  color: isSelected ? theme.dark : "#ffffff",
                  clipPath:
                    index % 2 === 0
                      ? "polygon(3% 0, 100% 6%, 96% 100%, 0 94%)"
                      : "polygon(0 7%, 94% 0, 100% 94%, 5% 100%)",
                }}
              >
                {isSelected ? "✓ " : ""}
                {option}
              </button>
            );
          })}
        </div>

        {selected.length === maximum && (
          <div
            className="mt-14 max-w-4xl border-l-[6px] pl-7"
            style={{ borderColor: theme.accent }}
          >
            <p
              className="text-xs font-black uppercase tracking-[0.3em]"
              style={{ color: theme.accent }}
            >
              Your judgement
            </p>

            <p className="mt-4 text-2xl font-black leading-relaxed">
              {selected.join(" • ")}
            </p>

            {section.completionText && (
              <p className="mt-5 text-lg leading-relaxed text-white/70">
                {section.completionText}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
