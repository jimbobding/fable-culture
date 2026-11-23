"use client";

import type { HistoryChapter } from "@/data/history/types";

type Props = {
  chapters: HistoryChapter[];
  selected: number;
  onSelect: (index: number) => void;
};

const stops = [
  { x: 12, y: 73 },
  { x: 30, y: 35 },
  { x: 51, y: 63 },
  { x: 72, y: 29 },
  { x: 88, y: 68 },
];

export default function HistoryVoyageMap({
  chapters,
  selected,
  onSelect,
}: Props) {
  const positions = chapters.map((_, index) => stops[index % stops.length]);

  const route = positions
    .map((point, index) => {
      const x = point.x * 10;
      const y = point.y * 5;

      if (index === 0) return `M ${x} ${y}`;

      const previous = positions[index - 1];
      const px = previous.x * 10;
      const py = previous.y * 5;
      const middle = (px + x) / 2;

      return `C ${middle} ${py}, ${middle} ${y}, ${x} ${y}`;
    })
    .join(" ");

  const boat = positions[selected];

  return (
    <div className="relative overflow-hidden rounded-[2rem] border-[10px] border-[#9b7853] bg-[#b9d3cf] shadow-2xl">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent 0px,
              transparent 39px,
              #527c79 40px
            ),
            repeating-linear-gradient(
              90deg,
              transparent 0px,
              transparent 39px,
              #527c79 40px
            )
          `,
        }}
      />

      <div className="relative aspect-[10/6] min-h-[340px]">
        <svg
          viewBox="0 0 1000 500"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <path
            d="M 0 100 Q 130 20 190 140 T 120 330 L 0 400 Z"
            fill="#a7b99a"
            stroke="#718b7c"
            strokeWidth="4"
          />

          <path
            d="M 1000 0 L 850 0 Q 800 80 910 150 T 1000 240 Z"
            fill="#a7b99a"
            stroke="#718b7c"
            strokeWidth="4"
          />

          <path
            d="M 420 410 Q 470 355 520 410 T 580 500 L 400 500 Z"
            fill="#a7b99a"
            stroke="#718b7c"
            strokeWidth="4"
          />

          <path
            d={route}
            fill="none"
            stroke="#fff8e6"
            strokeWidth="12"
            strokeLinecap="round"
          />

          <path
            d={route}
            fill="none"
            stroke="#94613f"
            strokeWidth="4"
            strokeDasharray="7 12"
            strokeLinecap="round"
          />
        </svg>

        <div className="pointer-events-none absolute left-5 top-5 rounded-xl border border-[#80674b]/30 bg-[#f5e7c9]/90 px-4 py-3 shadow-md sm:left-8 sm:top-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#765d42]">
            Fable Culture
          </p>
          <p className="font-serif text-xl font-bold text-[#4d5140] sm:text-3xl">
            The Pacific Voyage
          </p>
        </div>

        {chapters.map((chapter, index) => {
          const position = positions[index];
          const active = selected === index;

          return (
            <button
              key={chapter.id}
              type="button"
              onClick={() => onSelect(index)}
              aria-label={`Visit expedition ${index + 1}: ${chapter.title}`}
              aria-pressed={active}
              className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 focus-visible:rounded-xl focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#f6d28a]"
              style={{
                left: `${position.x}%`,
                top: `${position.y}%`,
              }}
            >
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-[#80593c] bg-[#fff5dc] text-lg font-black text-[#684b36] shadow-lg transition duration-300 sm:h-16 sm:w-16 sm:text-2xl ${
                  active ? "scale-125 ring-4 ring-[#e7bf7b]" : "hover:scale-110"
                }`}
              >
                {index + 1}
              </span>

              <span className="max-w-28 rounded-md bg-[#fff4dc]/95 px-2 py-1 text-center text-[10px] font-black leading-tight text-[#4d493c] shadow sm:max-w-44 sm:text-sm">
                {chapter.title}
              </span>
            </button>
          );
        })}

        {boat && (
          <div
            className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-[140%] text-3xl drop-shadow-lg transition-all duration-700 ease-in-out sm:text-5xl"
            style={{
              left: `${boat.x}%`,
              top: `${boat.y}%`,
            }}
            aria-hidden="true"
          >
            ⛵
          </div>
        )}

        <div className="pointer-events-none absolute bottom-5 left-5 text-[#456c69] opacity-70 sm:bottom-8 sm:left-8">
          <svg
            width="75"
            height="75"
            viewBox="0 0 100 100"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="50"
              cy="50"
              r="32"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M50 8 L58 50 L50 92 L42 50 Z"
              fill="#9b694a"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M8 50 L50 42 L92 50 L50 58 Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <text
              x="50"
              y="6"
              textAnchor="middle"
              fill="currentColor"
              fontSize="12"
              fontWeight="bold"
            >
              N
            </text>
          </svg>
        </div>

        <p className="pointer-events-none absolute bottom-5 right-5 max-w-40 text-right text-xs font-semibold italic text-[#496b67] sm:bottom-8 sm:right-8 sm:max-w-none">
          Five chapters. One voyage through time.
        </p>
      </div>

      <div className="border-t-4 border-[#9b7853] bg-[#f0e1c5] px-5 py-4 text-center text-sm font-medium text-[#67543d]">
        Select a numbered stop to explore a chapter. This is a fictional
        learning journey, not a historical migration route.
      </div>
    </div>
  );
}
