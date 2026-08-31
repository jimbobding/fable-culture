"use client";

import { useState } from "react";
import type { LookOption } from "../types";

type Position = {
  x: number;
  y: number;
};

type Props = {
  baseOptions: LookOption[];
  accessoryOptions: LookOption[];
  hasBaseOptions: boolean;
};

export default function useCanvasItems({
  baseOptions,
  accessoryOptions,
  hasBaseOptions,
}: Props) {
  const [base, setBase] = useState<LookOption | undefined>(baseOptions[0]);

  const [selectedAccessories, setSelectedAccessories] = useState<LookOption[]>(
    hasBaseOptions && accessoryOptions[0] ? [accessoryOptions[0]] : [],
  );

  const [activeAccessoryId, setActiveAccessoryId] = useState(
    baseOptions[0]?.id ?? (hasBaseOptions ? accessoryOptions[0]?.id : "") ?? "",
  );

  const [accessoryPositions, setAccessoryPositions] = useState<
    Record<string, Position>
  >(() => {
    const positions: Record<string, Position> = {};

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

  const canvasItems = [...(base ? [base] : []), ...selectedAccessories].filter(
    Boolean,
  ) as LookOption[];

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

      const remainingAccessories = option.exclusiveGroup
        ? prev.filter((item) => item.exclusiveGroup !== option.exclusiveGroup)
        : prev;

      return [...remainingAccessories, option];
    });
  };

  return {
    base,
    setBase,

    selectedAccessories,
    setSelectedAccessories,

    canvasItems,
    activeAccessory,
    sortedAccessories,

    activeAccessoryId,
    setActiveAccessoryId,

    accessoryPositions,
    setAccessoryPositions,

    accessoryLayers,
    setAccessoryLayers,

    accessoryScales,
    setAccessoryScales,

    accessoryRotations,
    setAccessoryRotations,

    selectBase,
    toggleAccessory,
  };
}
