"use client";

import type { LookBackground, LookOption } from "../types";

type Position = {
  x: number;
  y: number;
};

type Props = {
  baseOptions: LookOption[];
  accessoryOptions: LookOption[];
  backgroundOptions: LookBackground[];
  hasBaseOptions: boolean;

  setBase: React.Dispatch<React.SetStateAction<LookOption | undefined>>;

  setSelectedAccessories: React.Dispatch<React.SetStateAction<LookOption[]>>;

  setActiveAccessoryId: React.Dispatch<React.SetStateAction<string>>;

  setAccessoryPositions: React.Dispatch<
    React.SetStateAction<Record<string, Position>>
  >;

  setAccessoryLayers: React.Dispatch<
    React.SetStateAction<Record<string, number>>
  >;

  setAccessoryScales: React.Dispatch<
    React.SetStateAction<Record<string, number>>
  >;

  setAccessoryRotations: React.Dispatch<
    React.SetStateAction<Record<string, number>>
  >;

  setBackground: React.Dispatch<React.SetStateAction<LookBackground | null>>;

  setUserPhoto: React.Dispatch<React.SetStateAction<string | null>>;

  endDrag: () => void;
};

export default function useLookActions({
  baseOptions,
  accessoryOptions,
  backgroundOptions,
  hasBaseOptions,
  setBase,
  setSelectedAccessories,
  setActiveAccessoryId,
  setAccessoryPositions,
  setAccessoryLayers,
  setAccessoryScales,
  setAccessoryRotations,
  setBackground,
  setUserPhoto,
  endDrag,
}: Props) {
  const resetLook = () => {
    const firstBase = baseOptions[0];

    const firstAccessory =
      hasBaseOptions && accessoryOptions[0] ? accessoryOptions[0] : undefined;

    setBase(firstBase);

    setSelectedAccessories(firstAccessory ? [firstAccessory] : []);

    setActiveAccessoryId(firstBase?.id ?? firstAccessory?.id ?? "");

    setBackground(backgroundOptions[0] ?? null);

    endDrag();

    setUserPhoto(null);

    const resetItems = [firstBase, firstAccessory].filter(
      Boolean,
    ) as LookOption[];

    const newPositions: Record<string, Position> = {};
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
    const randomBase = hasBaseOptions
      ? baseOptions[Math.floor(Math.random() * baseOptions.length)]
      : undefined;

    const maximumRandomAccessories = Math.min(6, accessoryOptions.length);

    const accessoryCount =
      maximumRandomAccessories > 0
        ? Math.floor(Math.random() * maximumRandomAccessories) + 1
        : 0;

    const shuffledAccessories = [...accessoryOptions]
      .sort(() => Math.random() - 0.5)
      .slice(0, accessoryCount);

    const randomItems = [randomBase, ...shuffledAccessories].filter(
      Boolean,
    ) as LookOption[];

    setBase(randomBase);
    setSelectedAccessories(shuffledAccessories);

    setActiveAccessoryId(randomBase?.id ?? shuffledAccessories[0]?.id ?? "");

    const newPositions: Record<string, Position> = {};
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

  return {
    resetLook,
    randomiseLook,
  };
}
