"use client";

import Link from "next/link";
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
      {/* ======================================================
          FILTERS
      ====================================================== */}

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

      {/* ======================================================
          ERAS
      ====================================================== */}

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
  const [isOpen, setIsOpen] = useState(false);

  const leftSide = index % 2 === 0;

  const hasMoreContent =
    Boolean(event.significance) ||
    Boolean(event.details?.length) ||
    Boolean(event.deepDiveHref) ||
    Boolean(event.image);

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
        {/* DATE */}

        <p
          className="text-sm font-black uppercase tracking-[0.25em]"
          style={{ color: theme.primary }}
        >
          {event.date}
        </p>

        {/* TITLE */}

        <h3
          className="mt-3 text-3xl font-black leading-tight md:text-4xl"
          style={{ color: theme.text }}
        >
          {event.title}
        </h3>

        {/* PLACE TAGS */}

        <div className="mt-5 flex flex-wrap gap-2">
          {event.places.map((place) => {
            const matchingFilter = filtersLabelLookup(place);

            return (
              <span
                key={place}
                className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.12em]"
                style={{
                  backgroundColor: `${theme.secondary}20`,
                  color: theme.secondary,
                }}
              >
                {matchingFilter}
              </span>
            );
          })}
        </div>

        {/* SHORT TEASER */}

        <p
          className="mt-6 text-lg leading-relaxed"
          style={{ color: theme.mutedText }}
        >
          {event.summary}
        </p>

        {/* DISCOVER MORE */}

        {hasMoreContent && (
          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            aria-expanded={isOpen}
            className="group mt-6 inline-flex items-center gap-3 border-b-2 pb-2 text-xs font-black uppercase tracking-[0.2em] transition"
            style={{
              color: theme.primary,
              borderColor: theme.accent,
            }}
          >
            {isOpen ? "Show less" : "Discover more"}

            <span
              className={`text-lg transition-transform duration-300 ${
                isOpen ? "rotate-180" : "group-hover:translate-y-1"
              }`}
            >
              ↓
            </span>
          </button>
        )}

        {/* ==================================================
            EXPANDED CONTENT
        ================================================== */}

        {isOpen && (
          <div className="mt-8">
            {/* IMAGE */}

            {event.image && (
              <div
                className={`mb-8 overflow-hidden ${
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

            {/* DETAILS */}

            {event.details && event.details.length > 0 && (
              <div
                className="p-6"
                style={{
                  backgroundColor: theme.surface,
                  color: theme.text,
                }}
              >
                <p
                  className="text-xs font-black uppercase tracking-[0.22em]"
                  style={{ color: theme.secondary }}
                >
                  Explore the story
                </p>

                <div className="mt-5 space-y-4">
                  {event.details.map((detail, detailIndex) => (
                    <div
                      key={`${event.id}-detail-${detailIndex}`}
                      className="flex gap-4"
                    >
                      <span
                        className="mt-[0.55rem] h-2 w-2 shrink-0 rounded-full"
                        style={{
                          backgroundColor: theme.accent,
                        }}
                      />

                      <p className="leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* WHY IT MATTERS */}

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

                <p
                  className="mt-2 leading-relaxed"
                  style={{ color: theme.text }}
                >
                  {event.significance}
                </p>
              </div>
            )}

            {/* DEEP DIVE LINK */}

            {event.deepDiveHref && (
              <Link
                href={event.deepDiveHref}
                className="group mt-8 inline-flex items-center gap-4 px-5 py-4 text-sm font-black uppercase tracking-[0.15em] transition hover:-translate-y-1"
                style={{
                  backgroundColor: theme.primary,
                  color: theme.surface,
                }}
              >
                {event.deepDiveLabel || "Explore the Deep Dive"}

                <span className="text-xl transition-transform group-hover:translate-x-2">
                  →
                </span>
              </Link>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

/**
 * Turns filter IDs such as:
 * "peru"
 * "argentina"
 * "south-korea"
 *
 * into readable labels when displayed on timeline cards.
 */
function filtersLabelLookup(place: string) {
  return place
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
