"use client";

export type TimelineItem = {
  year: string;
  event: string;
};

export type TimelineTheme = {
  sectionBg: string;
  line: string;
  year: string;
  text: string;
  cardBg: string;

  // NEW (optional) — lets the dot border match region theme without breaking callers
  dotBorder?: string;
};

type Props = {
  items: TimelineItem[];
  theme: TimelineTheme;
};

export default function Timeline({ items, theme }: Props) {
  const dotBorder = theme.dotBorder ?? "border-white/80";

  return (
    <div className="relative">
      {/* Vertical line: left on mobile, center on md+ */}
      <div
        className={`
          absolute top-0 h-full w-1
          left-4 md:left-1/2
          md:-translate-x-1/2
          ${theme.line}
        `}
      />

      <ul className="space-y-10 md:space-y-12">
        {items.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <li key={index} className="relative">
              {/* DOT: left on mobile, center on md+ */}
              <div
                className={`
                  absolute w-4 h-4 rounded-full z-10
                  left-4 md:left-1/2
                  -translate-x-1/2
                  top-6
                  ${theme.cardBg}
                  border-4
                  ${dotBorder}
                `}
              />

              {/* CARD WRAPPER */}
              <div
                className={`
                  pl-10 md:pl-0
                  ${
                    isLeft
                      ? "md:pr-8 md:w-1/2 md:flex md:justify-end"
                      : "md:pl-8 md:w-1/2 md:ml-auto"
                  }
                `}
              >
                {/* CARD */}
                <div
                  className={`
                    rounded-2xl border shadow-sm
                    p-5 sm:p-6
                    ${theme.cardBg}
                    max-w-none md:max-w-md
                    border-black/10
                  `}
                >
                  <p className={`font-bold ${theme.year}`}>{item.year}</p>
                  <p
                    className={`${theme.text} text-sm sm:text-base leading-relaxed break-words mt-1`}
                  >
                    {item.event}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
