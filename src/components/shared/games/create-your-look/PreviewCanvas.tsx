import Image from "next/image";
import type { RefObject } from "react";
import type { LookOption, LookBackground } from "./types";

type Props = {
  previewRef: RefObject<HTMLDivElement | null>;
  base: LookOption;
  sortedAccessories: LookOption[];
  activeAccessoryId: string;
  accessoryPositions: Record<string, { x: number; y: number }>;
  accessoryLayers: Record<string, number>;
  accessoryScales: Record<string, number>;
  accessoryRotations: Record<string, number>;
  background: LookBackground | null;
  userPhoto: string | null;
  setActiveAccessoryId: (id: string) => void;
  startDrag: (itemId: string, clientX: number, clientY: number) => void;
  moveDrag: (clientX: number, clientY: number) => void;
  endDrag: () => void;
};

export default function PreviewCanvas({
  previewRef,
  base,
  sortedAccessories,
  activeAccessoryId,
  accessoryPositions,
  accessoryLayers,
  accessoryScales,
  accessoryRotations,
  background,
  userPhoto,
  setActiveAccessoryId,
  startDrag,
  moveDrag,
  endDrag,
}: Props) {
  return (
    <div
      onMouseMove={(e) => moveDrag(e.clientX, e.clientY)}
      onMouseUp={endDrag}
      onMouseLeave={endDrag}
      onTouchMove={(e) => {
        const touch = e.touches[0];
        if (!touch) return;
        moveDrag(touch.clientX, touch.clientY);
      }}
      onTouchEnd={endDrag}
      className="relative mt-4 flex min-h-[280px] touch-none items-center justify-center overflow-hidden rounded-2xl border border-white bg-gradient-to-br from-white via-orange-50 to-yellow-100 p-2 shadow-inner sm:min-h-[420px] sm:p-8 lg:min-h-[560px]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,146,60,0.25),transparent_45%)]" />

      <div
        ref={previewRef}
        className="relative flex h-60 w-60 items-center justify-center overflow-hidden rounded-full shadow-inner sm:h-96 sm:w-96 lg:h-[34rem] lg:w-[34rem]"
      >
        {background && (
          <div
            className="absolute inset-0 z-0"
            style={{ background: background.background }}
            aria-label={background.label}
          />
        )}

        {userPhoto && (
          <img
            src={userPhoto}
            alt="Uploaded user"
            className="absolute inset-0 z-[5] h-full w-full object-cover"
            draggable={false}
          />
        )}

        {base.asset ? (
          <Image
            src={base.asset}
            alt={base.label}
            width={320}
            height={320}
            className="absolute z-10 object-contain"
            draggable={false}
          />
        ) : (
          <span className="absolute z-10 text-9xl">{base.emoji}</span>
        )}

        {sortedAccessories.map((item, index) => (
          <span
            key={item.id}
            onClick={() => setActiveAccessoryId(item.id)}
            onMouseDown={(e) => {
              e.preventDefault();
              startDrag(item.id, e.clientX, e.clientY);
            }}
            onTouchStart={(e) => {
              const touch = e.touches[0];
              if (!touch) return;
              startDrag(item.id, touch.clientX, touch.clientY);
            }}
            className={`absolute z-30 cursor-grab select-none text-6xl transition-all active:cursor-grabbing ${
              activeAccessoryId === item.id ? "drop-shadow-xl " : ""
            }`}
            style={{
              zIndex: (accessoryLayers[item.id] ?? index + 1) + 30,
              transform: `translate(${
                accessoryPositions[item.id]?.x ?? index * 18
              }px, ${
                accessoryPositions[item.id]?.y ?? index * 14
              }px) rotate(${accessoryRotations[item.id] ?? 0}deg)`,
            }}
          >
            {item.asset ? (
              <img
                src={item.asset}
                alt={item.label}
                width={160 * (accessoryScales[item.id] ?? 1)}
                height={160 * (accessoryScales[item.id] ?? 1)}
                className="z-10 object-contain"
                draggable={false}
              />
            ) : (
              item.emoji
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
