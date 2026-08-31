"use client";

import { useState } from "react";
import { toPng } from "html-to-image";

import { submitCreateYourLook } from "@/app/lib/createYourLookSubmissions";

type Props = {
  previewRef: React.RefObject<HTMLDivElement | null>;
  downloadFilename: string;
  activity: string;
  creatorName: string;
  setCreatorName: React.Dispatch<React.SetStateAction<string>>;
  submissionMessage: string;
};

export default function useCreationExport({
  previewRef,
  downloadFilename,
  activity,
  creatorName,
  setCreatorName,
  submissionMessage,
}: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const saveLook = async () => {
    if (!previewRef.current) return;

    const dataUrl = await toPng(previewRef.current, {
      cacheBust: true,
      pixelRatio: 2,
    });

    const link = document.createElement("a");

    link.download = downloadFilename;
    link.href = dataUrl;
    link.click();
  };

  const submitLook = async () => {
    if (!previewRef.current || isSubmitting) return;

    // Name is required for gallery submissions
    const trimmedCreatorName = creatorName.trim();

    if (!trimmedCreatorName) {
      alert("Please enter your name before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      const dataUrl = await toPng(previewRef.current, {
        cacheBust: true,
        pixelRatio: 2,
      });

      await submitCreateYourLook({
        imageDataUrl: dataUrl,
        activity,
        creatorName: trimmedCreatorName,
      });

      setCreatorName("");

      alert(submissionMessage);
    } catch (error) {
      console.error(error);

      alert("There was a problem submitting your creation. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    saveLook,
    submitLook,
    isSubmitting,
  };
}
