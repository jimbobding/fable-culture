"use client";

import { useState } from "react";
import type { LookOption } from "../types";

type Props = {
  title: string;
  options: LookOption[];
  selectedIds: string[];
  onToggle: (option: LookOption) => void;
};

export default function MultiOptionGroup({
  title,
  options,
  selectedIds,
  onToggle,
}: Props) {
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const groupedOptions = options.filter((option) => option.group);
  const ungroupedOptions = options.filter((option) => !option.group);

  const groups = Array.from(
    new Set(
      groupedOptions
        .map((option) => option.group)
        .filter((group): group is string => Boolean(group)),
    ),
  );

  const renderOption = (option: LookOption) => {
    const isSelected = selectedIds.includes(option.id);

    return (
      <button
        key={option.id}
        type="button"
        onClick={() => onToggle(option)}
        className={`rounded-[1.25rem] border-2 p-3 text-left transition ${
          isSelected
            ? "border-stone-900 bg-stone-900 text-white shadow-md"
            : "border-white bg-white text-stone-800 hover:-translate-y-0.5 hover:shadow-md"
        }`}
      >
        <div className="flex items-center gap-3">
          {option.asset ? (
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-stone-100 p-1">
              <img
                src={option.asset}
                alt=""
                className="h-full w-full object-contain"
                draggable={false}
              />
            </div>
          ) : (
            <span className="shrink-0 text-4xl">{option.emoji}</span>
          )}

          <div className="min-w-0">
            <p className="font-black leading-tight">{option.label}</p>

            <p
              className={`mt-1 text-xs ${
                isSelected ? "text-white/70" : "text-stone-500"
              }`}
            >
              {isSelected ? "Selected" : "Tap to add"}
            </p>
          </div>
        </div>
      </button>
    );
  };

  return (
    <div className="rounded-[2.5rem] bg-white/75 p-5 shadow-xl backdrop-blur sm:p-6">
      <h3 className="text-xl font-black text-stone-900">{title}</h3>

      {groups.length > 0 ? (
        <div className="mt-5 space-y-3">
          {groups.map((group) => {
            const groupItems = groupedOptions.filter(
              (option) => option.group === group,
            );

            const isOpen = openGroup === group;

            const selectedCount = groupItems.filter((option) =>
              selectedIds.includes(option.id),
            ).length;

            return (
              <div
                key={group}
                className="overflow-hidden rounded-[1.5rem] border border-stone-200 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenGroup(isOpen ? null : group)}
                  className="flex w-full items-center justify-between gap-4 p-4 text-left transition hover:bg-stone-50"
                >
                  <div>
                    <p className="font-black text-stone-900">{group}</p>

                    <p className="text-xs text-stone-500">
                      {groupItems.length} options
                      {selectedCount > 0 ? ` • ${selectedCount} selected` : ""}
                    </p>
                  </div>

                  <span
                    className={`text-xl text-stone-500 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {isOpen && (
                  <div className="grid gap-3 border-t border-stone-100 bg-stone-50/70 p-3 sm:grid-cols-2">
                    {groupItems.map(renderOption)}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : null}

      {ungroupedOptions.length > 0 && (
        <div className={`${groups.length > 0 ? "mt-5" : "mt-5"} grid gap-4`}>
          {ungroupedOptions.map(renderOption)}
        </div>
      )}
    </div>
  );
}
