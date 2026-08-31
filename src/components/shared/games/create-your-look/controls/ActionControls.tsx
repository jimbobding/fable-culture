"use client";

type Props = {
  randomiseLabel: string;
  resetLabel: string;
  onRandomise: () => void;
  onReset: () => void;
};

export default function ActionControls({
  randomiseLabel,
  resetLabel,
  onRandomise,
  onReset,
}: Props) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <button
        type="button"
        onClick={() => onRandomise()}
        className="rounded-xl bg-purple-700 px-4 py-3 text-sm font-black text-white transition hover:bg-purple-800"
      >
        {randomiseLabel}
      </button>

      <button
        type="button"
        onClick={() => onReset()}
        className="rounded-xl bg-stone-800 px-4 py-3 text-sm font-black text-white transition hover:bg-stone-700"
      >
        {resetLabel}
      </button>
    </div>
  );
}
