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
};

type Props = {
  items: TimelineItem[];
  theme: TimelineTheme;
};

export default function Timeline({ items, theme }: Props) {
  return (
    <div
      className={`relative px-4 md:px-8 py-12 rounded-xl ${theme.sectionBg}`}
    >
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
                  absolute w-4 h-4 bg-white rounded-full z-10
                  left-4 md:left-1/2
                  -translate-x-1/2
                  border-4 border-yellow-400
                  top-6
                `}
              />

              {/* CARD WRAPPER */}
              <div
                className={`
                  pl-10 md:pl-0
                  ${isLeft ? "md:pr-8 md:w-1/2 md:flex md:justify-end" : "md:pl-8 md:w-1/2 md:ml-auto"}
                `}
              >
                {/* CARD */}
                <div
                  className={`
                    rounded-lg shadow-lg
                    p-4 sm:p-5
                    ${theme.cardBg}
                    max-w-none md:max-w-md
                  `}
                >
                  <p className={`font-bold ${theme.year}`}>{item.year}</p>
                  <p
                    className={`${theme.text} text-sm sm:text-base leading-relaxed break-words`}
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
