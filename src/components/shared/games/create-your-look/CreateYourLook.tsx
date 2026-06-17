"use client";

import { useRef, useState } from "react";
import type { LookOption, LookBackground } from "./types";
import OptionGroup from "./OptionGroup";
import MultiOptionGroup from "./MultiOptionGroup";
import PreviewCanvas from "./PreviewCanvas";
import AccessoryControls from "./AccessoryControls";
import { toPng } from "html-to-image";

type Props = {
  title: string;
  intro: string;
  theme: {
    primary: string;
    secondary: string;
    background: string;
  };
  baseOptions: LookOption[];
  accessoryOptions: LookOption[];
  finalMessage: string;
  backgroundOptions?: LookBackground[];
};

const blankCanvasBase: LookOption = {
  id: "blank-canvas-base",
  label: "",
  emoji: "",
  description: "",
};

export default function CreateYourLook({
  title,
  intro,
  theme,
  baseOptions,
  accessoryOptions,
  finalMessage,
  backgroundOptions = [],
}: Props) {
  const previewRef = useRef<HTMLDivElement>(null);

  const [base, setBase] = useState(baseOptions[0]);
  const [background, setBackground] = useState<LookBackground | null>(
    backgroundOptions[0] ?? null,
  );
  const [userPhoto, setUserPhoto] = useState<string | null>(null);

  const [selectedAccessories, setSelectedAccessories] = useState<LookOption[]>([
    accessoryOptions[0],
  ]);

  const canvasItems = [...(base ? [base] : []), ...selectedAccessories].filter(
    Boolean,
  ) as LookOption[];

  const [activeAccessoryId, setActiveAccessoryId] = useState(
    baseOptions[0]?.id ?? accessoryOptions[0]?.id ?? "",
  );

  const [accessoryPositions, setAccessoryPositions] = useState<
    Record<string, { x: number; y: number }>
  >(() => {
    const positions: Record<string, { x: number; y: number }> = {};

    [...baseOptions, ...accessoryOptions].forEach((item) => {
      positions[item.id] = {
        x: item.defaultPosition?.x ?? 8,
        y: item.defaultPosition?.y ?? -16,
      };
    });

    return positions;
  });

  const [accessoryLayers, setAccessoryLayers] = useState<
    Record<string, number>
  >(() => {
    const layers: Record<string, number> = {};

    [...baseOptions, ...accessoryOptions].forEach((item) => {
      layers[item.id] = item.layer ?? 1;
    });

    return layers;
  });

  const [accessoryScales, setAccessoryScales] = useState<
    Record<string, number>
  >(() => {
    const scales: Record<string, number> = {};

    [...baseOptions, ...accessoryOptions].forEach((item) => {
      scales[item.id] = 1;
    });

    return scales;
  });

  const [accessoryRotations, setAccessoryRotations] = useState<
    Record<string, number>
  >(() => {
    const rotations: Record<string, number> = {};

    [...baseOptions, ...accessoryOptions].forEach((item) => {
      rotations[item.id] = 0;
    });

    return rotations;
  });

  const [draggingId, setDraggingId] = useState<string | null>(null);

  const [dragStart, setDragStart] = useState({
    mouseX: 0,
    mouseY: 0,
    itemX: 0,
    itemY: 0,
  });

  const activeAccessory = canvasItems.find(
    (item) => item.id === activeAccessoryId,
  );

  const sortedAccessories = [...canvasItems].sort(
    (a, b) => (accessoryLayers[a.id] ?? 1) - (accessoryLayers[b.id] ?? 1),
  );

  const selectBase = (option: LookOption) => {
    setBase(option);
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

    setAccessoryScales((scales) => ({
      ...scales,
      [option.id]: scales[option.id] ?? 1,
    }));

    setAccessoryRotations((rotations) => ({
      ...rotations,
      [option.id]: rotations[option.id] ?? 0,
    }));
  };

  const toggleAccessory = (option: LookOption) => {
    setSelectedAccessories((prev) => {
      const alreadySelected = prev.some((item) => item.id === option.id);

      if (alreadySelected) {
        const remaining = prev.filter((item) => item.id !== option.id);

        if (activeAccessoryId === option.id) {
          setActiveAccessoryId(base?.id ?? remaining[0]?.id ?? "");
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

      setAccessoryScales((scales) => ({
        ...scales,
        [option.id]: 1,
      }));

      setAccessoryRotations((rotations) => ({
        ...rotations,
        [option.id]: 0,
      }));

      return [...prev, option];
    });
  };

  const startDrag = (itemId: string, clientX: number, clientY: number) => {
    setActiveAccessoryId(itemId);
    setDraggingId(itemId);

    setDragStart({
      mouseX: clientX,
      mouseY: clientY,
      itemX: accessoryPositions[itemId]?.x ?? 0,
      itemY: accessoryPositions[itemId]?.y ?? 0,
    });
  };

  const moveDrag = (clientX: number, clientY: number) => {
    if (!draggingId) return;

    setAccessoryPositions((prev) => ({
      ...prev,
      [draggingId]: {
        x: dragStart.itemX + clientX - dragStart.mouseX,
        y: dragStart.itemY + clientY - dragStart.mouseY,
      },
    }));
  };

  const endDrag = () => {
    setDraggingId(null);
  };

  const handleUserPhotoUpload = (file: File | null) => {
    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === "string") {
        setUserPhoto(reader.result);
      }
    };

    reader.readAsDataURL(file);
  };

  const resetLook = () => {
    const firstBase = baseOptions[0];
    const firstAccessory = accessoryOptions[0];

    setBase(firstBase);
    setSelectedAccessories(firstAccessory ? [firstAccessory] : []);
    setActiveAccessoryId(firstBase?.id ?? firstAccessory?.id ?? "");
    setBackground(backgroundOptions[0] ?? null);
    setDraggingId(null);

    const resetItems = [firstBase, firstAccessory].filter(
      Boolean,
    ) as LookOption[];

    const newPositions: Record<string, { x: number; y: number }> = {};
    const newLayers: Record<string, number> = {};
    const newScales: Record<string, number> = {};
    const newRotations: Record<string, number> = {};

    resetItems.forEach((item) => {
      newPositions[item.id] = {
        x: item.defaultPosition?.x ?? 8,
        y: item.defaultPosition?.y ?? -16,
      };
      newLayers[item.id] = item.layer ?? 1;
      newScales[item.id] = 1;
      newRotations[item.id] = 0;
    });

    setAccessoryPositions(newPositions);
    setAccessoryLayers(newLayers);
    setAccessoryScales(newScales);
    setAccessoryRotations(newRotations);
  };

  const randomiseLook = () => {
    const randomBase =
      baseOptions[Math.floor(Math.random() * baseOptions.length)];

    const accessoryCount =
      Math.floor(Math.random() * accessoryOptions.length) + 1;

    const shuffledAccessories = [...accessoryOptions]
      .sort(() => Math.random() - 0.5)
      .slice(0, accessoryCount);

    const randomItems = [randomBase, ...shuffledAccessories].filter(
      Boolean,
    ) as LookOption[];

    setBase(randomBase);
    setSelectedAccessories(shuffledAccessories);
    setActiveAccessoryId(randomBase?.id ?? shuffledAccessories[0]?.id ?? "");

    const newPositions: Record<string, { x: number; y: number }> = {};
    const newLayers: Record<string, number> = {};
    const newScales: Record<string, number> = {};
    const newRotations: Record<string, number> = {};

    randomItems.forEach((item, index) => {
      newPositions[item.id] = {
        x: Math.random() * 120 - 60,
        y: Math.random() * 120 - 60,
      };

      newLayers[item.id] = item.layer ?? index + 1;
      newScales[item.id] = Number((0.7 + Math.random() * 1.1).toFixed(1));
      newRotations[item.id] = Math.floor(Math.random() * 60) - 30;
    });

    setAccessoryPositions(newPositions);
    setAccessoryLayers(newLayers);
    setAccessoryScales(newScales);
    setAccessoryRotations(newRotations);
  };

  const saveLook = async () => {
    if (!previewRef.current) return;

    const dataUrl = await toPng(previewRef.current, {
      cacheBust: true,
      pixelRatio: 2,
    });

    const link = document.createElement("a");
    link.download = "create-your-carnival-look.png";
    link.href = dataUrl;
    link.click();
  };

  return (
    <section
      className="rounded-2xl p-2 shadow-2xl sm:p-6"
      style={{ background: theme.background }}
    >
      <div className="mx-auto max-w-[1600px] space-y-5">
        <div className="text-center">
          <p
            className="text-xs font-black uppercase tracking-[0.35em]"
            style={{ color: theme.secondary }}
          >
            Interactive Activity
          </p>

          <h2 className="mt-2 text-3xl font-black text-stone-900 sm:text-4xl">
            {title}
          </h2>

          <p className="mx-auto mt-3 max-w-4xl text-base leading-relaxed text-stone-700">
            {intro}
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl bg-white/80 p-3 shadow-xl backdrop-blur sm:p-6">
          <div className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-center text-sm font-bold uppercase tracking-[0.25em] text-stone-500">
                Your creation
              </p>

              <PreviewCanvas
                previewRef={previewRef}
                base={blankCanvasBase}
                sortedAccessories={sortedAccessories}
                activeAccessoryId={activeAccessoryId}
                accessoryPositions={accessoryPositions}
                accessoryLayers={accessoryLayers}
                accessoryScales={accessoryScales}
                accessoryRotations={accessoryRotations}
                setActiveAccessoryId={setActiveAccessoryId}
                startDrag={startDrag}
                moveDrag={moveDrag}
                endDrag={endDrag}
                background={background}
                userPhoto={userPhoto}
              />
            </div>

            <div className="space-y-4">
              <AccessoryControls
                activeAccessory={activeAccessory}
                activeAccessoryId={activeAccessoryId}
                accessoryPositions={accessoryPositions}
                accessoryLayers={accessoryLayers}
                accessoryScales={accessoryScales}
                accessoryRotations={accessoryRotations}
                setAccessoryLayers={setAccessoryLayers}
                setAccessoryScales={setAccessoryScales}
                setAccessoryRotations={setAccessoryRotations}
              />

              <div className="grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={randomiseLook}
                  className="rounded-xl bg-purple-700 px-4 py-3 text-sm font-black text-white transition hover:bg-purple-800"
                >
                  Randomise Look
                </button>

                <button
                  type="button"
                  onClick={resetLook}
                  className="rounded-xl bg-stone-800 px-4 py-3 text-sm font-black text-white transition hover:bg-stone-700"
                >
                  Reset Look
                </button>
              </div>

              <div className="rounded-[1.5rem] border-2 border-orange-100 bg-orange-50 p-5 text-left shadow-lg">
                <h3 className="text-lg font-black text-stone-900">
                  📷 Selfie & Photos
                </h3>
                <button
                  type="button"
                  onClick={saveLook}
                  className="mt-4 w-full rounded-xl bg-purple-700 px-5 py-3 font-black text-white transition hover:bg-purple-800"
                >
                  Save My Look
                </button>

                <p className="mt-1 text-sm text-stone-600">
                  Upload a photo or take a selfie to become part of your
                  Carnival creation.
                </p>

                <input
                  type="file"
                  accept="image/*"
                  capture="user"
                  className="mt-3 block w-full rounded-xl border border-stone-200 bg-white p-3"
                  onChange={(e) =>
                    handleUserPhotoUpload(e.target.files?.[0] ?? null)
                  }
                />

                {userPhoto && (
                  <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                      ✓ Photo uploaded
                    </span>

                    <button
                      type="button"
                      onClick={() => setUserPhoto(null)}
                      className="rounded-xl bg-stone-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-stone-700"
                    >
                      Remove photo
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-4 xl:grid-cols-3">
            <details
              open
              className="rounded-[1.5rem] bg-white p-4 text-left shadow-lg"
            >
              <summary className="cursor-pointer text-lg font-black text-stone-900">
                1. Choose your mask
              </summary>

              <div className="mt-4">
                <OptionGroup
                  title="Mask"
                  options={baseOptions}
                  selectedId={base?.id ?? ""}
                  onSelect={selectBase}
                />
              </div>
            </details>

            <details className="rounded-[1.5rem] bg-white p-4 text-left shadow-lg">
              <summary className="cursor-pointer text-lg font-black text-stone-900">
                2. Add accessories
              </summary>

              <div className="mt-4">
                <MultiOptionGroup
                  title="Accessories"
                  options={accessoryOptions}
                  selectedIds={selectedAccessories.map((item) => item.id)}
                  onToggle={toggleAccessory}
                />
              </div>
            </details>

            {backgroundOptions.length > 0 && (
              <details className="rounded-[1.5rem] bg-white p-4 text-left shadow-lg">
                <summary className="cursor-pointer text-lg font-black text-stone-900">
                  3. Background
                </summary>

                <div className="mt-4 grid gap-3">
                  {backgroundOptions.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setBackground(option)}
                      className={`rounded-2xl border-4 p-3 text-left transition ${
                        background?.id === option.id
                          ? "border-orange-400 bg-orange-50"
                          : "border-transparent bg-white hover:border-orange-200"
                      }`}
                    >
                      <div
                        className="h-14 rounded-xl"
                        style={{ background: option.background }}
                      />

                      <p className="mt-2 font-bold text-stone-800">
                        {option.label}
                      </p>
                    </button>
                  ))}
                </div>
              </details>
            )}
          </div>

          <div className="mt-5 grid gap-4 xl:grid-cols-[1fr_1fr]">
            <div className="rounded-[1.5rem] bg-stone-50 p-5 text-left">
              <h3 className="text-2xl font-black text-stone-900">
                {base?.label}
              </h3>

              <p className="mt-2 leading-relaxed text-stone-700">
                {canvasItems.length > 0
                  ? canvasItems.map((item) => item.description).join(" ")
                  : "Choose a mask and accessories to complete your look."}
              </p>
            </div>

            <div
              className="rounded-[1.5rem] p-5 text-left shadow-inner"
              style={{ backgroundColor: `${theme.primary}22` }}
            >
              <p className="text-sm font-black uppercase tracking-[0.25em] text-stone-700">
                Cultural meaning
              </p>

              <p className="mt-2 leading-relaxed text-stone-800">
                {finalMessage}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
