// src/components/Timeline.tsx
"use client";

import React from "react";

export type TimelineItem = {
  year: string;
  event: string;
};

type TimelineProps = {
  items: TimelineItem[];
};

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative mx-4 md:mx-8">
      {/* Vertical line */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1 bg-yellow-400 h-full"></div>

      <ul className="space-y-12">
        {items.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <li
              key={index}
              className="relative flex flex-col md:flex-row items-center md:justify-between"
            >
              {/* Empty spacer for alignment */}
              <div
                className={`hidden md:block md:w-1/2 ${isLeft ? "text-right" : ""}`}
              ></div>

              {/* Event box */}
              <div
                className={`bg-white shadow-lg p-4 rounded-lg max-w-sm md:max-w-xs z-10
                  ${isLeft ? "md:mr-8 md:translate-x-[-20%]" : "md:ml-8 md:translate-x-[20%]"}
                  transition-transform duration-500 hover:scale-105`}
              >
                <p className="font-bold text-yellow-600">{item.year}</p>
                <p className="text-gray-700">{item.event}</p>
              </div>

              {/* Empty spacer for alignment */}
              <div
                className={`hidden md:block md:w-1/2 ${!isLeft ? "text-left" : ""}`}
              ></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
