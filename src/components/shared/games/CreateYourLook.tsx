"use client";

import Image from "next/image";
import { useState } from "react";

type LookOption = {
  id: string;
  label: string;
  emoji: string;
  description: string;
  asset?: string;
  defaultPosition?: {
    x: number;
    y: number;
  };
  layer?: number;
};

type Props = {
  title: string;
  intro: string;
  theme: {
    primary: string;
    secondary: string;
    background: string;
  };
  baseOptions: LookOption[];
  colourOptions: LookOption[];
  accessoryOptions: LookOption[];
  finalMessage: string;
};

export default function CreateYourLook({
  title,
  intro,
  theme,
  baseOptions,
  colourOptions,
  accessoryOptions,
  finalMessage,
}: Props) {
  const [base, setBase] = useState(baseOptions[0]);
  const [colour, setColour] = useState(colourOptions[0]);

  const [selectedAccessories, setSelectedAccessories] = useState<LookOption[]>([
    accessoryOptions[0],
  ]);

  const [activeAccessoryId, setActiveAccessoryId] = useState(
    accessoryOptions[0]?.id ?? "",
  );

  const [accessoryPositions, setAccessoryPositions] = useState<
    Record<string, { x: number; y: number }>
  >({
    [accessoryOptions[0]?.id ?? ""]: {
      x: accessoryOptions[0]?.defaultPosition?.x ?? 8,
      y: accessoryOptions[0]?.defaultPosition?.y ?? -16,
    },
  });

  const [accessoryLayers, setAccessoryLayers] = useState<
    Record<string, number>
  >(() => {
    const layers: Record<string, number> = {};

    accessoryOptions.forEach((item) => {
      layers[item.id] = item.layer ?? 1;
    });

    return layers;
  });
  const [accessoryScales, setAccessoryScales] = useState<
    Record<string, number>
  >(() => {
    const scales: Record<string, number> = {};

    accessoryOptions.forEach((item) => {
      scales[item.id] = 1;
    });

    return scales;
  });

  const activeAccessory = selectedAccessories.find(
    (item) => item.id === activeAccessoryId,
  );

  const sortedAccessories = [...selectedAccessories].sort(
    (a, b) => (accessoryLayers[a.id] ?? 1) - (accessoryLayers[b.id] ?? 1),
  );

  const toggleAccessory = (option: LookOption) => {
    setSelectedAccessories((prev) => {
      const alreadySelected = prev.some((item) => item.id === option.id);

      if (alreadySelected) {
        const remaining = prev.filter((item) => item.id !== option.id);

        if (activeAccessoryId === option.id) {
          setActiveAccessoryId(remaining[0]?.id ?? "");
        }

        return remaining;
      }

      setActiveAccessoryId(option.id);

      setAccessoryPositions((positions) => ({
        ...positions,
        [option.id]: {
          x: option.defaultPosition?.x ?? 8,
          y: option.defaultPosition?.y ?? -16,
        },
      }));

      setAccessoryLayers((layers) => ({
        ...layers,
        [option.id]: option.layer ?? 1,
      }));

      return [...prev, option];
    });
  };

  const moveActiveAccessory = (x: number, y: number) => {
    if (!activeAccessoryId) return;

    setAccessoryPositions((prev) => ({
      ...prev,
      [activeAccessoryId]: {
        x: (prev[activeAccessoryId]?.x ?? 0) + x,
        y: (prev[activeAccessoryId]?.y ?? 0) + y,
      },
    }));
  };

  const resetLook = () => {
    const firstAccessory = accessoryOptions[0];

    setSelectedAccessories(firstAccessory ? [firstAccessory] : []);
    setActiveAccessoryId(firstAccessory?.id ?? "");

    setAccessoryPositions(
      firstAccessory
        ? {
            [firstAccessory.id]: {
              x: firstAccessory.defaultPosition?.x ?? 8,
              y: firstAccessory.defaultPosition?.y ?? -16,
            },
          }
        : {},
    );

    setAccessoryLayers(
      firstAccessory
        ? {
            [firstAccessory.id]: firstAccessory.layer ?? 1,
          }
        : {},
    );
  };

  return (
    <section
      className="rounded-[3rem] p-6 shadow-2xl sm:p-10"
      style={{ background: theme.background }}
    >
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="text-center">
          <p
            className="text-xs font-black uppercase tracking-[0.35em]"
            style={{ color: theme.secondary }}
          >
            Interactive Activity
          </p>

          <h2 className="mt-3 text-4xl font-black text-stone-900 sm:text-5xl">
            {title}
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-stone-700">
            {intro}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2.5rem] bg-white/80 p-8 text-center shadow-xl backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-stone-500">
              Your creation
            </p>

            <div className="relative mt-8 flex min-h-[300px] items-center justify-center overflow-hidden rounded-[2rem] border border-white bg-gradient-to-br from-white via-orange-50 to-yellow-100 p-8 shadow-inner">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,146,60,0.25),transparent_45%)]" />

              <div className="relative flex h-56 w-56 items-center justify-center rounded-full bg-white/70 shadow-inner">
                {base.asset ? (
                  <Image
                    src={base.asset}
                    alt={base.label}
                    width={190}
                    height={190}
                    className="absolute object-contain"
                  />
                ) : (
                  <span className="absolute text-9xl">{base.emoji}</span>
                )}

                {sortedAccessories.map((item, index) => (
                  <span
                    key={item.id}
                    onClick={() => setActiveAccessoryId(item.id)}
                    className={`absolute cursor-pointer text-6xl transition-all ${
                      activeAccessoryId === item.id
                        ? "scale-125 drop-shadow-xl"
                        : ""
                    }`}
                    style={{
                      zIndex: accessoryLayers[item.id] ?? index + 1,
                      transform: `translate(${
                        accessoryPositions[item.id]?.x ?? index * 18
                      }px, ${accessoryPositions[item.id]?.y ?? index * 14}px)`,
                    }}
                  >
                    {item.asset ? (
                      <Image
                        src={item.asset}
                        alt={item.label}
                        width={110}
                        height={110}
                        className="object-contain"
                      />
                    ) : (
                      item.emoji
                    )}
                  </span>
                ))}

                <span className="absolute bottom-4 left-8 text-5xl">
                  {colour.emoji}
                </span>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {[
                { label: "↑", x: 0, y: -10 },
                { label: "↓", x: 0, y: 10 },
                { label: "←", x: -10, y: 0 },
                { label: "→", x: 10, y: 0 },
              ].map((move) => (
                <button
                  key={move.label}
                  type="button"
                  onClick={() => moveActiveAccessory(move.x, move.y)}
                  className="h-10 w-10 rounded-full bg-stone-900 font-black text-white shadow transition hover:bg-orange-600"
                >
                  {move.label}
                </button>
              ))}

              <button
                type="button"
                onClick={resetLook}
                className="rounded-full border border-stone-300 bg-white px-5 py-2 text-sm font-bold text-stone-700 shadow transition hover:-translate-y-0.5 hover:shadow-md"
              >
                Reset Look
              </button>
            </div>

            <p className="mt-3 text-sm text-stone-500">
              Tap an accessory, then use the arrows to move it.
            </p>

            <div className="mt-4 rounded-2xl border border-stone-200 bg-white p-4 text-left shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-stone-500">
                Currently Editing
              </p>

              <p className="mt-2 text-lg font-black text-stone-900">
                {activeAccessory?.label ?? "No accessory selected"}
              </p>

              <p className="mt-2 text-sm text-stone-600">
                X: {accessoryPositions[activeAccessoryId]?.x ?? 0}
              </p>

              <p className="text-sm text-stone-600">
                Y: {accessoryPositions[activeAccessoryId]?.y ?? 0}
              </p>

              <p className="text-sm text-stone-600">
                Layer: {accessoryLayers[activeAccessoryId] ?? 0}
              </p>

              <div className="mt-3 flex gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setAccessoryLayers((prev) => ({
                      ...prev,
                      [activeAccessoryId]: (prev[activeAccessoryId] ?? 1) + 1,
                    }))
                  }
                  className="rounded-lg bg-stone-900 px-3 py-1 text-sm font-bold text-white"
                >
                  ▲ Forward
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setAccessoryLayers((prev) => ({
                      ...prev,
                      [activeAccessoryId]: Math.max(
                        1,
                        (prev[activeAccessoryId] ?? 1) - 1,
                      ),
                    }))
                  }
                  className="rounded-lg bg-stone-900 px-3 py-1 text-sm font-bold text-white"
                >
                  ▼ Back
                </button>
              </div>
            </div>

            <h3 className="mt-6 text-3xl font-black text-stone-900">
              {colour.label} {base.label}
            </h3>

            <p className="mt-3 leading-relaxed text-stone-700">
              {selectedAccessories.length > 0
                ? selectedAccessories.map((item) => item.description).join(" ")
                : "Choose accessories to complete your look."}
            </p>

            <div
              className="mt-6 rounded-[1.5rem] p-5 text-left shadow-inner"
              style={{ backgroundColor: `${theme.primary}22` }}
            >
              <p className="text-sm font-black uppercase tracking-[0.25em] text-stone-700">
                Cultural meaning
              </p>

              <p className="mt-3 leading-relaxed text-stone-800">
                {finalMessage}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <OptionGroup
              title="1. Choose your base"
              options={baseOptions}
              selectedId={base.id}
              onSelect={setBase}
            />

            <OptionGroup
              title="2. Choose your colour energy"
              options={colourOptions}
              selectedId={colour.id}
              onSelect={setColour}
            />

            <MultiOptionGroup
              title="3. Add details"
              options={accessoryOptions}
              selectedIds={selectedAccessories.map((item) => item.id)}
              onToggle={toggleAccessory}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function MultiOptionGroup({
  title,
  options,
  selectedIds,
  onToggle,
}: {
  title: string;
  options: LookOption[];
  selectedIds: string[];
  onToggle: (option: LookOption) => void;
}) {
  return (
    <div className="rounded-[2rem] bg-white/75 p-5 shadow-xl backdrop-blur">
      <h3 className="text-xl font-black text-stone-900">{title}</h3>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {options.map((option) => {
          const isSelected = selectedIds.includes(option.id);

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onToggle(option)}
              className={`rounded-2xl border p-4 text-left transition ${
                isSelected
                  ? "border-stone-900 bg-stone-900 text-white shadow-lg"
                  : "border-white bg-white/70 text-stone-800 hover:-translate-y-0.5 hover:shadow-md"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{option.emoji}</span>
                <span className="font-black">{option.label}</span>
              </div>

              <p
                className={`mt-2 text-sm leading-relaxed ${
                  isSelected ? "text-white/80" : "text-stone-600"
                }`}
              >
                {option.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function OptionGroup({
  title,
  options,
  selectedId,
  onSelect,
}: {
  title: string;
  options: LookOption[];
  selectedId: string;
  onSelect: (option: LookOption) => void;
}) {
  return (
    <div className="rounded-[2rem] bg-white/75 p-5 shadow-xl backdrop-blur">
      <h3 className="text-xl font-black text-stone-900">{title}</h3>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {options.map((option) => {
          const isSelected = selectedId === option.id;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onSelect(option)}
              className={`rounded-2xl border p-4 text-left transition ${
                isSelected
                  ? "border-stone-900 bg-stone-900 text-white shadow-lg"
                  : "border-white bg-white/70 text-stone-800 hover:-translate-y-0.5 hover:shadow-md"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{option.emoji}</span>
                <span className="font-black">{option.label}</span>
              </div>

              <p
                className={`mt-2 text-sm leading-relaxed ${
                  isSelected ? "text-white/80" : "text-stone-600"
                }`}
              >
                {option.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
