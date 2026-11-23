"use client";

import { useState } from "react";
import type { HistorySource } from "@/data/history/types";

type Props = {
  sources: HistorySource[];
  sourceIds: string[];
  title?: string;
};

export default function HistorySources({
  sources,
  sourceIds,
  title = "Where did we learn this?",
}: Props) {
  const [expanded, setExpanded] = useState(false);

  const relevantSources = sourceIds.map((id) => ({
    id,
    source: sources.find((item) => item.id === id),
  }));

  if (sourceIds.length === 0) {
    return null;
  }

  return (
    <div className="mt-5 rounded-2xl border border-[#b6a17d] bg-[#fff8e9] text-[#344448]">
      <button
        type="button"
        onClick={() => setExpanded((current) => !current)}
        aria-expanded={expanded}
        className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left font-bold transition hover:bg-[#f4ead4]"
      >
        <span className="flex items-center gap-3">
          <span aria-hidden="true">📜</span>
          {title}
        </span>

        <span aria-hidden="true">{expanded ? "−" : "+"}</span>
      </button>

      {expanded && (
        <div className="border-t border-[#d5c5a7] px-5 py-5">
          <p className="mb-5 text-sm leading-relaxed">
            Historians use evidence to investigate the past.
            Explore the sources below to learn where this
            information comes from.
          </p>

          <ul className="space-y-4">
            {relevantSources.map(({ id, source }) => (
              <li
                key={id}
                className="rounded-xl border border-[#dfd1b8] bg-white p-4"
              >
                {source ? (
                  <>
                    <p className="font-bold">{source.title}</p>

                    <p className="mt-1 text-sm text-[#59676a]">
                      Published by: {source.organisation}
                    </p>

                    {source.notes && (
                      <p className="mt-2 text-sm leading-relaxed">
                        {source.notes}
                      </p>
                    )}

                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-sm font-bold text-[#176275] underline underline-offset-4 hover:text-[#0c4352]"
                    >
                      Explore this source ↗
                    </a>
                  </>
                ) : (
                  <p className="text-sm font-semibold text-[#91522e]">
                    Source reference "{id}" could not be found.
                  </p>
                )}
              </li>
            ))}
          </ul>

          <p className="mt-5 text-xs italic leading-relaxed text-[#687477]">
            A source helps us investigate a historical claim.
            It does not automatically prove that every
            interpretation is correct.
          </p>
        </div>
      )}
    </div>
  );
}
