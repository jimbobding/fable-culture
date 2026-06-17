import type { LookOption } from "./types";

type Props = {
  title: string;
  options: LookOption[];
  selectedIds: string[];
  onToggle: (option: LookOption) => void;
};

export default function MultiOptionGroup({
  title,
  options,
  selectedIds,
  onToggle,
}: Props) {
  return (
    <div className="rounded-[2.5rem] bg-white/75 p-6 shadow-xl backdrop-blur">
      <h3 className="text-xl font-black text-stone-900">{title}</h3>

      <div className="mt-5 grid gap-4">
        {options.map((option) => {
          const isSelected = selectedIds.includes(option.id);

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onToggle(option)}
              className={`rounded-[1.5rem] border-2 p-5 text-left transition ${
                isSelected
                  ? "border-stone-900 bg-stone-900 text-white shadow-lg"
                  : "border-white bg-white/80 text-stone-800 hover:-translate-y-0.5 hover:shadow-md"
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="shrink-0 text-4xl">{option.emoji}</span>

                <div>
                  <p className="text-lg font-black leading-tight">
                    {option.label}
                  </p>

                  <p
                    className={`mt-1 text-sm ${
                      isSelected ? "text-white/75" : "text-stone-500"
                    }`}
                  >
                    {isSelected ? "Selected" : "Tap to add this accessory"}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
