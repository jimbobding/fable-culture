"use client";

import { useState } from "react";

type Position = {
  x: number;
  y: number;
};

type Props = {
  accessoryPositions: Record<string, Position>;
  setAccessoryPositions: React.Dispatch<
    React.SetStateAction<Record<string, Position>>
  >;
  setActiveAccessoryId: React.Dispatch<React.SetStateAction<string>>;
};

export default function useDragControls({
  accessoryPositions,
  setAccessoryPositions,
  setActiveAccessoryId,
}: Props) {
  const [draggingId, setDraggingId] = useState<string | null>(null);

  const [dragStart, setDragStart] = useState({
    mouseX: 0,
    mouseY: 0,
    itemX: 0,
    itemY: 0,
  });

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

  return {
    draggingId,
    startDrag,
    moveDrag,
    endDrag,
  };
}
