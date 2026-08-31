"use client";

type Props = {
  title: string;
  description: string;
  finalMessage: string;
  primaryColour: string;
};

export default function CreationInfo({
  title,
  description,
  finalMessage,
  primaryColour,
}: Props) {
  return (
    <div className="mt-5 grid gap-4 xl:grid-cols-[1fr_1fr]">
      <div className="rounded-[1.5rem] bg-stone-50 p-5 text-left">
        <h3 className="text-2xl font-black text-stone-900">{title}</h3>

        <p className="mt-2 leading-relaxed text-stone-700">{description}</p>
      </div>

      <div
        className="rounded-[1.5rem] p-5 text-left shadow-inner"
        style={{
          backgroundColor: `${primaryColour}22`,
        }}
      >
        <p className="text-sm font-black uppercase tracking-[0.25em] text-stone-700">
          Cultural meaning
        </p>

        <p className="mt-2 leading-relaxed text-stone-800">{finalMessage}</p>
      </div>
    </div>
  );
}
