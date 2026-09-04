"use client";

import type { LookBackground } from "../types";

type Props = {
  backgroundOptions: LookBackground[];
  background: LookBackground | null;
  stepNumber: number;
  openByDefault?: boolean;
  onSelect: (background: LookBackground) => void;
};

export default function BackgroundOptions({
  backgroundOptions,
  background,
  stepNumber,
  openByDefault = false,
  onSelect,
}: Props) {
  if (backgroundOptions.length === 0) {
    return null;
  }

  return (
    <details
      open={openByDefault}
      className="rounded-[1.5rem] bg-white p-4 text-left shadow-lg"
    >
      <summary className="cursor-pointer text-lg font-black text-stone-900">
        {stepNumber}. Choose a background
      </summary>

      <div className="mt-4 grid gap-3">
        {backgroundOptions.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => onSelect(option)}
            className={`rounded-2xl border-4 p-3 text-left transition ${
              background?.id === option.id
                ? "border-orange-400 bg-orange-50"
                : "border-transparent bg-white hover:border-orange-200"
            }`}
          >
            <div
              className="h-14 rounded-xl"
              style={{
                background: option.background,
              }}
            />

            <p className="mt-2 font-bold text-stone-800">{option.label}</p>
          </button>
        ))}
      </div>
    </details>
  );
}
