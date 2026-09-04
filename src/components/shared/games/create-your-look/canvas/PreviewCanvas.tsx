import Image from "next/image";
import type { RefObject } from "react";
import type { LookOption, LookBackground } from "../types";

export const USER_PHOTO_ITEM_ID = "__user-photo";

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

  canvasShape?: "round" | "postcard";
  photoMode?: "background" | "object";

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
  canvasShape = "round",
  photoMode = "background",
  setActiveAccessoryId,
  startDrag,
  moveDrag,
  endDrag,
}: Props) {
  const isPostcard = canvasShape === "postcard";

  const photoPosition = accessoryPositions[USER_PHOTO_ITEM_ID] ?? {
    x: 0,
    y: 0,
  };

  const photoScale = accessoryScales[USER_PHOTO_ITEM_ID] ?? 1;

  const photoRotation = accessoryRotations[USER_PHOTO_ITEM_ID] ?? 0;

  const photoLayer = accessoryLayers[USER_PHOTO_ITEM_ID] ?? 20;

  return (
    <div
      onMouseMove={(event) => moveDrag(event.clientX, event.clientY)}
      onMouseUp={endDrag}
      onMouseLeave={endDrag}
      onTouchMove={(event) => {
        const touch = event.touches[0];

        if (!touch) return;

        moveDrag(touch.clientX, touch.clientY);
      }}
      onTouchEnd={endDrag}
      className={`
        relative mt-4 flex touch-none items-center justify-center
        overflow-hidden border border-white
        bg-gradient-to-br from-white via-orange-50 to-yellow-100
        p-3 shadow-inner sm:p-6
        ${
          isPostcard
            ? "min-h-[330px] lg:min-h-[540px]"
            : "min-h-[370px] sm:min-h-[420px] lg:min-h-[560px]"
        }
      `}
    >
      {/* SOFT OUTER BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,146,60,0.20),transparent_48%)]" />

      {/* ACTUAL CREATION CANVAS */}
      <div
        ref={previewRef}
        className={`
          relative flex items-center justify-center
          overflow-hidden shadow-inner
          ${
            isPostcard
              ? "aspect-[3/2] w-full max-w-[900px] rounded-[1rem] border-[10px] border-white bg-white shadow-xl"
              : "h-[22rem] w-full max-w-[22rem] rounded-[1.5rem] sm:h-96 sm:w-96 sm:rounded-full lg:h-[34rem] lg:w-[34rem]"
          }
        `}
      >
        {/* BACKGROUND */}
        {background && (
          <div
            className="absolute inset-0 z-0"
            style={{
              background: background.background,
            }}
            aria-label={background.label}
          />
        )}

        {/* USER PHOTO — BACKGROUND MODE */}
        {userPhoto && photoMode === "background" && (
          <img
            src={userPhoto}
            alt="Uploaded user"
            className="absolute inset-0 z-[5] h-full w-full object-cover"
            draggable={false}
          />
        )}

        {/* BASE */}
        {base.asset ? (
          <Image
            src={base.asset}
            alt={base.label}
            width={320}
            height={320}
            className="absolute z-10 object-contain"
            draggable={false}
          />
        ) : base.emoji ? (
          <span className="absolute z-10 text-9xl">{base.emoji}</span>
        ) : null}

        {/* USER PHOTO — DRAGGABLE OBJECT */}
        {userPhoto && photoMode === "object" && (
          <span
            onClick={() => setActiveAccessoryId(USER_PHOTO_ITEM_ID)}
            onMouseDown={(event) => {
              event.preventDefault();

              startDrag(USER_PHOTO_ITEM_ID, event.clientX, event.clientY);
            }}
            onTouchStart={(event) => {
              const touch = event.touches[0];

              if (!touch) return;

              startDrag(USER_PHOTO_ITEM_ID, touch.clientX, touch.clientY);
            }}
            className={`
              absolute cursor-grab select-none
              active:cursor-grabbing
              ${
                activeAccessoryId === USER_PHOTO_ITEM_ID
                  ? "drop-shadow-2xl"
                  : ""
              }
            `}
            style={{
              zIndex: photoLayer + 30,

              transform: `
                translate(
                  ${photoPosition.x}px,
                  ${photoPosition.y}px
                )
                rotate(${photoRotation}deg)
              `,
            }}
          >
            <img
              src={userPhoto}
              alt="Uploaded user"
              draggable={false}
              className={`
                object-cover shadow-xl
                ${
                  isPostcard
                    ? "h-40 w-32 rounded-xl sm:h-52 sm:w-40 lg:h-64 lg:w-48"
                    : "h-44 w-36 rounded-2xl sm:h-52 sm:w-40 lg:h-64 lg:w-48"
                }
                ${
                  activeAccessoryId === USER_PHOTO_ITEM_ID
                    ? "ring-4 ring-white/90"
                    : ""
                }
              `}
              style={{
                transform: `scale(${photoScale})`,
              }}
            />
          </span>
        )}

        {/* DRAGGABLE PIECES */}
        {sortedAccessories.map((item, index) => (
          <span
            key={item.id}
            onClick={() => setActiveAccessoryId(item.id)}
            onMouseDown={(event) => {
              event.preventDefault();

              startDrag(item.id, event.clientX, event.clientY);
            }}
            onTouchStart={(event) => {
              const touch = event.touches[0];

              if (!touch) return;

              startDrag(item.id, touch.clientX, touch.clientY);
            }}
            className={`
              absolute z-30 cursor-grab select-none
              text-6xl transition-all
              active:cursor-grabbing
              ${activeAccessoryId === item.id ? "drop-shadow-xl" : ""}
            `}
            style={{
              zIndex: (accessoryLayers[item.id] ?? index + 1) + 30,

              transform: `
                translate(
                  ${accessoryPositions[item.id]?.x ?? index * 18}px,
                  ${accessoryPositions[item.id]?.y ?? index * 14}px
                )
                rotate(
                  ${accessoryRotations[item.id] ?? 0}deg
                )
              `,
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
