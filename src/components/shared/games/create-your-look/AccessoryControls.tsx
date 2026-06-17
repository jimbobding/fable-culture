import type { Dispatch, SetStateAction } from "react";
import type { LookOption } from "./types";

type Props = {
  activeAccessory?: LookOption;
  activeAccessoryId: string;
  accessoryPositions: Record<string, { x: number; y: number }>;
  accessoryLayers: Record<string, number>;
  accessoryScales: Record<string, number>;
  accessoryRotations: Record<string, number>;
  setAccessoryLayers: Dispatch<SetStateAction<Record<string, number>>>;
  setAccessoryScales: Dispatch<SetStateAction<Record<string, number>>>;
  setAccessoryRotations: Dispatch<SetStateAction<Record<string, number>>>;
};

export default function AccessoryControls({
  activeAccessory,
  activeAccessoryId,
  accessoryPositions,
  accessoryLayers,
  accessoryScales,
  accessoryRotations,
  setAccessoryLayers,
  setAccessoryScales,
  setAccessoryRotations,
}: Props) {
  return (
    <>
      <p className="mt-2 text-lg font-black text-stone-900">
        {activeAccessory?.label ?? "No accessory selected"}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() =>
            setAccessoryScales((prev) => ({
              ...prev,
              [activeAccessoryId]: (prev[activeAccessoryId] ?? 1) + 0.1,
            }))
          }
          className="rounded-lg bg-stone-900 px-3 py-1 text-sm font-bold text-white"
        >
          + Bigger
        </button>

        <button
          type="button"
          onClick={() =>
            setAccessoryScales((prev) => ({
              ...prev,
              [activeAccessoryId]: Math.max(
                0.3,
                (prev[activeAccessoryId] ?? 1) - 0.1,
              ),
            }))
          }
          className="rounded-lg bg-stone-900 px-3 py-1 text-sm font-bold text-white"
        >
          − Smaller
        </button>

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

        <button
          type="button"
          onClick={() =>
            setAccessoryRotations((prev) => ({
              ...prev,
              [activeAccessoryId]: (prev[activeAccessoryId] ?? 0) - 15,
            }))
          }
          className="rounded-lg bg-stone-900 px-3 py-1 text-sm font-bold text-white"
        >
          ↺ Rotate Left
        </button>

        <button
          type="button"
          onClick={() =>
            setAccessoryRotations((prev) => ({
              ...prev,
              [activeAccessoryId]: (prev[activeAccessoryId] ?? 0) + 15,
            }))
          }
          className="rounded-lg bg-stone-900 px-3 py-1 text-sm font-bold text-white"
        >
          ↻ Rotate Right
        </button>
      </div>
      ;{/* controls + info go here */}
    </>
  );
}
