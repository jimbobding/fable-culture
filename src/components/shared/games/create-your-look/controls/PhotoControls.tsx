"use client";

import { useRef } from "react";

type Props = {
  title?: string;
  helpText?: string;
  userPhoto: string | null;
  onPhotoSelected: (file: File | null) => void;
  onRemovePhoto: () => void;
  compact?: boolean;
};

export default function PhotoControls({
  title = "📷 Add a Photo",
  helpText = "Upload or take a photo to include in your creation.",
  userPhoto,
  onPhotoSelected,
  onRemovePhoto,
  compact = false,
}: Props) {
  const photoInputRef = useRef<HTMLInputElement>(null);

  const openPhotoPicker = () => {
    photoInputRef.current?.click();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;

    onPhotoSelected(file);

    // Allows the same photo to be selected again later.
    event.target.value = "";
  };

  return (
    <div
      className={
        compact
          ? "rounded-[1.5rem] border-2 border-orange-100 bg-orange-50 p-4 shadow-md"
          : "rounded-[2.5rem] bg-white/75 p-5 shadow-xl backdrop-blur sm:p-6"
      }
    >
      <input
        ref={photoInputRef}
        type="file"
        accept="image/*"
        capture="user"
        className="hidden"
        onChange={handleChange}
      />

      <div className={compact ? "flex items-center justify-between gap-4" : ""}>
        <div>
          <h3
            className={
              compact
                ? "font-black text-stone-900"
                : "text-xl font-black text-stone-900"
            }
          >
            {title}
          </h3>

          <p className="mt-1 text-sm text-stone-600">{helpText}</p>
        </div>

        <button
          type="button"
          onClick={openPhotoPicker}
          className={
            compact
              ? "shrink-0 rounded-xl bg-orange-600 px-4 py-3 font-black text-white transition active:scale-95"
              : "mt-4 w-full rounded-xl bg-orange-600 px-5 py-3 font-black text-white transition hover:bg-orange-700 active:scale-[0.99]"
          }
        >
          📷 Add Yourself
        </button>
      </div>

      {userPhoto && (
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
          <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-700">
            ✓ Photo added
          </span>

          <button
            type="button"
            onClick={onRemovePhoto}
            className="rounded-xl bg-stone-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-stone-700"
          >
            Remove photo
          </button>
        </div>
      )}
    </div>
  );
}
