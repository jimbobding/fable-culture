"use client";

import { useState } from "react";
import type { WindrushStoryCard } from "@/data/caribbean/windrush";

type Props = {
  items: WindrushStoryCard[];
};

export default function StoryJourney({ items }: Props) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="relative mx-auto max-w-6xl">
      <div className="absolute left-6 top-0 hidden h-full w-1 rounded-full bg-gradient-to-b from-orange-500 via-pink-500 to-amber-400 md:left-1/2 md:block md:-translate-x-1/2" />

      <div className="space-y-14">
        {items.map((item, index) => {
          const isOpen = openId === item.id;
          const isLeft = index % 2 === 0;

          return (
            <article
              key={item.id}
              className={`relative grid gap-6 md:grid-cols-2 md:items-center ${
                isLeft ? "" : "md:[&>*:first-child]:col-start-2"
              }`}
            >
              <div
                className={`relative ${
                  isLeft ? "md:pr-12" : "md:col-start-2 md:pl-12"
                }`}
              >
                <div className="absolute -left-1 top-8 hidden h-8 w-8 rounded-full border-4 border-white bg-orange-500 shadow-xl md:block md:left-auto md:right-[-4.1rem]" />

                {!isLeft && (
                  <div className="absolute -left-[4.1rem] top-8 hidden h-8 w-8 rounded-full border-4 border-white bg-pink-500 shadow-xl md:block" />
                )}

                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className={`
                    group
                    w-full
                    overflow-hidden
                    rounded-[2rem]
                    border
                    border-white/60
                    bg-white/80
                    text-left
                    shadow-xl
                    backdrop-blur
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-2xl
                  `}
                >
                  <div className="bg-gradient-to-br from-orange-500 via-pink-500 to-amber-400 p-[2px]">
                    <div className="rounded-[1.9rem] bg-white/90 p-6">
                      <div className="flex items-start gap-5">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-100 to-pink-100 text-4xl shadow-inner">
                          {item.icon}
                        </div>

                        <div className="min-w-0">
                          <p className="text-xs font-black uppercase tracking-[0.3em] text-orange-600">
                            {item.year}
                          </p>

                          <h3 className="mt-2 text-2xl font-black text-stone-900 sm:text-3xl">
                            {item.title}
                          </h3>

                          <p className="mt-3 leading-relaxed text-stone-600">
                            {item.shortText}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 flex justify-end">
                        <span className="rounded-full bg-stone-900 px-4 py-2 text-sm font-bold text-white transition group-hover:bg-orange-600">
                          {isOpen ? "Close" : "Explore"}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-4 overflow-hidden rounded-[2rem] border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-pink-50 p-6 shadow-lg">
                    <p className="text-lg leading-relaxed text-stone-700">
                      {item.detail}
                    </p>

                    <div className="mt-5 rounded-[1.5rem] border border-amber-200 bg-amber-100/80 p-5">
                      <p className="text-xs font-black uppercase tracking-[0.25em] text-amber-700">
                        Did you know?
                      </p>

                      <p className="mt-3 leading-relaxed text-stone-800">
                        {item.didYouKnow}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
