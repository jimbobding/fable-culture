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
      {/* vertical line */}
      <div
        className={`absolute left-1/2 top-0 -translate-x-1/2 w-1 h-full ${theme.line}`}
      />

      <ul className="space-y-12">
        {items.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <li key={index} className="relative flex items-center">
              {/* LEFT CARD */}
              {isLeft && (
                <div className="w-1/2 pr-8 flex justify-end">
                  <div className={`p-4 rounded-lg shadow-lg ${theme.cardBg}`}>
                    <p className={`font-bold ${theme.year}`}>{item.year}</p>
                    <p className={theme.text}>{item.event}</p>
                  </div>
                </div>
              )}

              {/* DOT */}
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-4 border-yellow-400 rounded-full z-10" />

              {/* RIGHT CARD */}
              {!isLeft && (
                <div className="w-1/2 pl-8 ml-auto">
                  <div className={`p-4 rounded-lg shadow-lg ${theme.cardBg}`}>
                    <p className={`font-bold ${theme.year}`}>{item.year}</p>
                    <p className={theme.text}>{item.event}</p>
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
