"use client";

import { useRef, useState } from "react";

import type { LookOption, LookBackground } from "./types";
import OptionGroup from "./controls/OptionGroup";
import MultiOptionGroup from "./controls/MultiOptionGroup";
import PreviewCanvas from "./canvas/PreviewCanvas";
import AccessoryControls from "./controls/AccessoryControls";
import PhotoControls from "./controls/PhotoControls";
import SubmissionControls from "./controls/SubmissionControls";
import BackgroundOptions from "./controls/BackgroundOptions";
import CreationInfo from "./display/CreationInfo";
import ActionControls from "./controls/ActionControls";

import useDragControls from "./hooks/useDragControls";
import useCanvasItems from "./hooks/useCanvasItems";
import useCreationExport from "./hooks/useCreationExport";
import useLookActions from "./hooks/useLookActions";

type CreateYourLookConfig = {
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
  canvasShape?: "round" | "postcard";
  photoMode?: "background" | "object";

  labels?: {
    base?: string;
    accessories?: string;
    randomise?: string;
    reset?: string;
    save?: string;
    selfieTitle?: string;
    uploadHelp?: string;
    emptyMessage?: string;
  };

  activity?: string;
  downloadFilename?: string;
  submissionMessage?: string;
};

type Props = {
  config: CreateYourLookConfig;
};

const blankCanvasBase: LookOption = {
  id: "blank-canvas-base",
  label: "",
  emoji: "",
  description: "",
};

export default function CreateYourLook({ config }: Props) {
  const {
    title,
    intro,
    theme,
    baseOptions,
    accessoryOptions,
    finalMessage,
    backgroundOptions = [],
    canvasShape = "round",
    photoMode = "background",
    labels = {},
    activity = "create-your-look",
    downloadFilename = "create-your-look.png",
    submissionMessage = "Your creation has been submitted and is waiting for approval.",
  } = config;

  const {
    base: baseLabel = "Base",
    accessories: accessoriesLabel = "Options",
    randomise: randomiseLabel = "Randomise",
    reset: resetLabel = "Reset",
    save: saveLabel = "Save",
    selfieTitle = "📷 Add a Photo",
    uploadHelp = "Upload or take a photo to include in your creation.",
    emptyMessage = "Choose some options to begin your creation.",
  } = labels;

  const hasBaseOptions = baseOptions.length > 0;

  const previewRef = useRef<HTMLDivElement>(null);

  const [creatorName, setCreatorName] = useState("");

  const [userPhoto, setUserPhoto] = useState<string | null>(null);

  const [background, setBackground] = useState<LookBackground | null>(
    backgroundOptions[0] ?? null,
  );

  const {
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
  } = useCanvasItems({
    baseOptions,
    accessoryOptions,
    hasBaseOptions,
  });

  const { startDrag, moveDrag, endDrag } = useDragControls({
    accessoryPositions,
    setAccessoryPositions,
    setActiveAccessoryId,
  });

  const { saveLook, submitLook, isSubmitting } = useCreationExport({
    previewRef,
    downloadFilename,
    activity,
    creatorName,
    setCreatorName,
    submissionMessage,
  });

  const { resetLook, randomiseLook } = useLookActions({
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
  });

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

  const accessoryStepNumber = hasBaseOptions ? 2 : 1;
  const backgroundStepNumber = hasBaseOptions ? 3 : 2;

  return (
    <section
      className="rounded-2xl p-2 shadow-2xl sm:p-6"
      style={{ background: theme.background }}
    >
      <div className="mx-auto max-w-[1600px] space-y-5">
        {/* HEADER */}
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
            {/* CANVAS */}
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
                canvasShape={canvasShape}
                photoMode={photoMode}
              />

              {/* MOBILE / TABLET PHOTO BUTTON */}
              <div className="mt-4 xl:hidden">
                <PhotoControls
                  title={selfieTitle}
                  helpText={uploadHelp}
                  userPhoto={userPhoto}
                  onPhotoSelected={handleUserPhotoUpload}
                  onRemovePhoto={() => setUserPhoto(null)}
                  compact
                />
              </div>
            </div>

            {/* CONTROLS */}
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

              <ActionControls
                randomiseLabel={randomiseLabel}
                resetLabel={resetLabel}
                onRandomise={randomiseLook}
                onReset={resetLook}
              />

              {/* DESKTOP PHOTO CONTROL */}
              <div className="hidden xl:block">
                <PhotoControls
                  title={selfieTitle}
                  helpText={uploadHelp}
                  userPhoto={userPhoto}
                  onPhotoSelected={handleUserPhotoUpload}
                  onRemovePhoto={() => setUserPhoto(null)}
                />
              </div>

              {/* SAVE / SUBMIT */}
              <SubmissionControls
                creatorName={creatorName}
                onCreatorNameChange={setCreatorName}
                onSave={saveLook}
                onSubmit={submitLook}
                isSubmitting={isSubmitting}
                saveLabel={saveLabel}
              />
            </div>
          </div>

          {/* OPTION PANELS */}
          <div
            className={`mt-5 grid gap-4 ${
              hasBaseOptions ? "xl:grid-cols-3" : "xl:grid-cols-2"
            }`}
          >
            {/* BASE — ONLY SHOW FOR GAMES THAT USE ONE */}
            {hasBaseOptions && (
              <details
                open
                className="rounded-[1.5rem] bg-white p-4 text-left shadow-lg"
              >
                <summary className="cursor-pointer text-lg font-black text-stone-900">
                  1. Choose your {baseLabel.toLowerCase()}
                </summary>

                <div className="mt-4">
                  <OptionGroup
                    title={baseLabel}
                    options={baseOptions}
                    selectedId={base?.id ?? ""}
                    onSelect={selectBase}
                  />
                </div>
              </details>
            )}

            {/* MAIN OPTIONS */}
            <details
              open={!hasBaseOptions}
              className="rounded-[1.5rem] bg-white p-4 text-left shadow-lg"
            >
              <summary className="cursor-pointer text-lg font-black text-stone-900">
                {accessoryStepNumber}. Add {accessoriesLabel.toLowerCase()}
              </summary>

              <div className="mt-4">
                <MultiOptionGroup
                  title={accessoriesLabel}
                  options={accessoryOptions}
                  selectedIds={selectedAccessories.map((item) => item.id)}
                  onToggle={toggleAccessory}
                />
              </div>
            </details>

            {/* BACKGROUNDS */}
            <BackgroundOptions
              backgroundOptions={backgroundOptions}
              background={background}
              stepNumber={backgroundStepNumber}
              openByDefault={!hasBaseOptions}
              onSelect={setBackground}
            />
          </div>

          {/* INFORMATION */}
          <CreationInfo
            title={base?.label || activeAccessory?.label || "Your Creation"}
            description={
              canvasItems.length > 0
                ? canvasItems
                    .map((item) => item.description)
                    .filter(Boolean)
                    .join(" ")
                : emptyMessage
            }
            finalMessage={finalMessage}
            primaryColour={theme.primary}
          />
        </div>
      </div>
    </section>
  );
}
