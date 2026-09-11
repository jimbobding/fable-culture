"use client";

import { useMemo, useState } from "react";
import type {
  RegionalTimelineEvent,
  RegionalTimelineFilter,
  RegionalTimelineEra,
  RegionalTimelineTheme,
} from "./types";

type Props = {
  events: RegionalTimelineEvent[];
  filters: RegionalTimelineFilter[];
  eras: RegionalTimelineEra[];
  theme: RegionalTimelineTheme;
};

export default function RegionalTimeline({
  events,
  filters,
  eras,
  theme,
}: Props) {
  const [activeFilter, setActiveFilter] = useState("all");

  const sortedEvents = useMemo(() => {
    return [...events].sort((a, b) => a.sortYear - b.sortYear);
  }, [events]);

  const visibleEvents = useMemo(() => {
    if (activeFilter === "all") {
      return sortedEvents;
    }

    return sortedEvents.filter((event) => event.places.includes(activeFilter));
  }, [activeFilter, sortedEvents]);

  return (
    <div>
      {/* FILTERS */}
      <div className="mb-20 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setActiveFilter("all")}
          className="rounded-full border px-5 py-3 text-xs font-black uppercase tracking-[0.18em] transition"
          style={{
            background: activeFilter === "all" ? theme.primary : "transparent",
            borderColor: theme.primary,
            color: activeFilter === "all" ? theme.surface : theme.text,
          }}
        >
          All
        </button>

        {filters.map((filter: RegionalTimelineFilter) => (
          <button
            key={filter.id}
            type="button"
            onClick={() => setActiveFilter(filter.id)}
            className="rounded-full border px-5 py-3 text-xs font-black uppercase tracking-[0.18em] transition"
            style={{
              background:
                activeFilter === filter.id ? theme.primary : "transparent",
              borderColor: theme.primary,
              color: activeFilter === filter.id ? theme.surface : theme.text,
            }}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* ERAS */}
      <div className="space-y-28">
        {eras.map((era: RegionalTimelineEra, eraIndex) => {
          const eraEvents = visibleEvents.filter(
            (event) => event.era === era.id,
          );

          if (eraEvents.length === 0) {
            return null;
          }

          return (
            <section key={era.id} className="relative">
              {/* ERA HEADER */}
              <div className="mb-14 flex items-end gap-6">
                <span
                  className="font-serif text-6xl font-black opacity-15 md:text-8xl"
                  style={{ color: theme.primary }}
                >
                  {String(eraIndex + 1).padStart(2, "0")}
                </span>

                <div className="pb-2">
                  <p
                    className="text-xs font-black uppercase tracking-[0.35em]"
                    style={{ color: theme.primary }}
                  >
                    Era
                  </p>

                  <h2
                    className="mt-2 text-4xl font-black md:text-6xl"
                    style={{ color: theme.text }}
                  >
                    {era.title}
                  </h2>

                  {era.subtitle && (
                    <p
                      className="mt-3 max-w-2xl text-lg leading-relaxed"
                      style={{ color: theme.mutedText }}
                    >
                      {era.subtitle}
                    </p>
                  )}
                </div>
              </div>

              {/* EVENTS */}
              <div className="relative">
                <div
                  className="absolute bottom-0 left-[7px] top-0 w-px md:left-1/2"
                  style={{
                    backgroundColor: `${theme.primary}40`,
                  }}
                />

                <div className="space-y-16">
                  {eraEvents.map((event, index) => (
                    <TimelineEvent
                      key={event.id}
                      event={event}
                      index={index}
                      theme={theme}
                    />
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

function TimelineEvent({
  event,
  index,
  theme,
}: {
  event: RegionalTimelineEvent;
  index: number;
  theme: RegionalTimelineTheme;
}) {
  const leftSide = index % 2 === 0;

  return (
    <article className="relative grid md:grid-cols-2 md:gap-20">
      {/* TIMELINE DOT */}
      <div
        className="absolute left-0 top-2 z-10 h-[15px] w-[15px] rounded-full border-4 md:left-1/2 md:-translate-x-1/2"
        style={{
          backgroundColor: theme.accent,
          borderColor: theme.background,
        }}
      />

      <div
        className={`ml-10 md:ml-0 ${
          leftSide ? "md:col-start-1 md:pr-4" : "md:col-start-2 md:pl-4"
        }`}
      >
        <p
          className="text-sm font-black uppercase tracking-[0.25em]"
          style={{ color: theme.primary }}
        >
          {event.date}
        </p>

        <h3
          className="mt-3 text-3xl font-black leading-tight md:text-4xl"
          style={{ color: theme.text }}
        >
          {event.title}
        </h3>

        <div className="mt-5 flex flex-wrap gap-2">
          {event.places.map((place) => (
            <span
              key={place}
              className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.12em]"
              style={{
                backgroundColor: `${theme.secondary}20`,
                color: theme.secondary,
              }}
            >
              {place}
            </span>
          ))}
        </div>

        {event.image && (
          <div
            className={`mt-7 overflow-hidden ${
              leftSide ? "-rotate-1" : "rotate-1"
            }`}
          >
            <img
              src={event.image}
              alt={event.imageAlt || event.title}
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
        )}

        <p
          className="mt-6 text-lg leading-relaxed"
          style={{ color: theme.mutedText }}
        >
          {event.summary}
        </p>

        {event.significance && (
          <div
            className="mt-6 border-l-4 pl-5"
            style={{ borderColor: theme.accent }}
          >
            <p
              className="text-xs font-black uppercase tracking-[0.2em]"
              style={{ color: theme.primary }}
            >
              Why it matters
            </p>

            <p className="mt-2 leading-relaxed" style={{ color: theme.text }}>
              {event.significance}
            </p>
          </div>
        )}
      </div>
    </article>
  );
}
