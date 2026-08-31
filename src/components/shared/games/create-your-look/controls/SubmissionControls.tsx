"use client";

type Props = {
  creatorName: string;
  onCreatorNameChange: (name: string) => void;
  onSave: () => void;
  onSubmit: () => void;
  isSubmitting: boolean;
  saveLabel?: string;
};

export default function SubmissionControls({
  creatorName,
  onCreatorNameChange,
  onSave,
  onSubmit,
  isSubmitting,
  saveLabel = "Save",
}: Props) {
  return (
    <div className="rounded-[1.5rem] border-2 border-orange-100 bg-orange-50 p-5 text-left shadow-lg">
      <button
        type="button"
        onClick={() => onSave()}
        className="w-full rounded-xl bg-purple-700 px-5 py-3 font-black text-white transition hover:bg-purple-800"
      >
        {saveLabel}
      </button>

      <div className="mt-4 space-y-2">
        <label className="text-sm font-semibold text-slate-700">
          Your Name
        </label>

        <input
          type="text"
          value={creatorName}
          onChange={(event) => onCreatorNameChange(event.target.value)}
          placeholder="Enter your name"
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none"
        />
      </div>

      <button
        type="button"
        onClick={() => onSubmit()}
        disabled={isSubmitting}
        className={`mt-3 w-full rounded-xl px-5 py-3 font-black text-white transition ${
          isSubmitting
            ? "cursor-wait bg-orange-400"
            : "bg-orange-600 hover:bg-orange-700"
        }`}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-3">
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
            Submitting...
          </span>
        ) : (
          "Submit To Gallery"
        )}
      </button>
    </div>
  );
}
