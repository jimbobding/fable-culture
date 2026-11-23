"use client";

import { useState } from "react";

type Question = {
  title: string;
  scene: string;
  question: string;
  options: { id: string; text: string }[];
  correct: string;
  hint: string;
  explanation: string;
  sourceIds: string[];
};

type Props = {
  onComplete: () => void;
};

const questions: Question[] = [
  {
    title: "Read the Stars",
    scene: "Night falls over the Pacific Ocean.",
    question: "How could stars help a traditional Pacific navigator?",
    options: [
      { id: "a", text: "They could provide directional guidance." },
      { id: "b", text: "They showed the exact distance to land." },
      { id: "c", text: "They predicted the precise arrival time." },
    ],
    correct: "a",
    hint: "Think about how the position of stars changes across the sky.",
    explanation:
      "Pacific navigators learned the rising and setting positions of stars and used this knowledge to help maintain direction.",
    sourceIds: ["hawaii-navigation", "hokulea-wayfinding"],
  },
  {
    title: "Feel the Ocean",
    scene: "Clouds cover the stars. The canoe continues across the sea.",
    question: "What else could help a navigator maintain direction?",
    options: [
      { id: "a", text: "The colour of the canoe's sail." },
      { id: "b", text: "The direction and pattern of ocean swells." },
      { id: "c", text: "The number of people aboard." },
    ],
    correct: "b",
    hint: "The ocean has patterns that experienced navigators can recognise.",
    explanation:
      "Experienced navigators can recognise ocean swell patterns and use them as directional clues, including when stars are hidden.",
    sourceIds: ["hawaii-navigation", "hokulea-wayfinding"],
  },
  {
    title: "Search for Land",
    scene: "After days at sea, the crew begins looking for signs of land.",
    question: "Which observation might provide a clue that land is nearby?",
    options: [
      { id: "a", text: "Certain birds travelling to or from land." },
      { id: "b", text: "The canoe becoming heavier." },
      { id: "c", text: "Every wave becoming smaller." },
    ],
    correct: "a",
    hint: "Some seabirds return to land after feeding at sea.",
    explanation:
      "Navigators could observe bird behaviour alongside clouds, swells and other natural signs. No single clue guaranteed that land was nearby.",
    sourceIds: ["hokulea-wayfinding"],
  },
];

export default function HistoryWayfindingChallenge({ onComplete }: Props) {
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [complete, setComplete] = useState(false);

  const question = questions[step];
  const correct = answer === question.correct;

  function nextStep() {
    if (step === questions.length - 1) {
      setComplete(true);
      return;
    }

    setStep((current) => current + 1);
    setAnswer(null);
    setShowHint(false);
  }

  return (
    <section
      aria-label="Pacific wayfinding challenge"
      className="mt-12 overflow-hidden rounded-[2rem] border-4 border-[#b58b5d] bg-[#f5ead5] text-[#243f42] shadow-xl"
    >
      <div className="bg-[#123f49] px-6 py-8 text-white sm:px-10">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#e6bf7d]">
          Interactive History Mission
        </p>

        <h3 className="mt-3 text-3xl font-black sm:text-4xl">
          The Wayfinder's Journey
        </h3>

        <p className="mt-3 max-w-2xl text-white/80">
          Explore three clues that traditional Pacific navigators used to find
          their way across the ocean.
        </p>
      </div>

      {complete ? (
        <div className="px-6 py-12 text-center sm:px-10">
          <div className="text-6xl" aria-hidden="true">
            ⛵
          </div>

          <h4 className="mt-5 text-3xl font-black">Voyage Complete!</h4>

          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed">
            You've explored how knowledge of stars, ocean swells and natural
            signs helped Pacific navigators travel across enormous distances.
          </p>

          <p className="mx-auto mt-4 max-w-xl text-sm italic">
            This is a learning simulation, not a reconstruction of one
            particular historical voyage.
          </p>

          <button
            type="button"
            onClick={onComplete}
            className="mt-8 rounded-full bg-[#123f49] px-8 py-4 font-bold text-white transition hover:bg-[#1b6470]"
          >
            Sail to the Next Island →
          </button>
        </div>
      ) : (
        <div className="px-6 py-8 sm:px-10">
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm font-black uppercase tracking-wider">
              Stage {step + 1} of {questions.length}
            </span>

            <span className="text-sm font-semibold">{question.title}</span>
          </div>

          <div className="mt-4 flex gap-2" aria-hidden="true">
            {questions.map((item, index) => (
              <div
                key={item.title}
                className={`h-2 flex-1 rounded-full ${
                  index <= step ? "bg-[#1b6470]" : "bg-[#d7c5a6]"
                }`}
              />
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-[#dce8e1] p-6">
            <p className="text-sm font-black uppercase tracking-wider text-[#35636a]">
              At Sea
            </p>

            <p className="mt-3 text-xl font-semibold">{question.scene}</p>
          </div>

          <h4 className="mt-8 text-2xl font-black">{question.question}</h4>

          <div className="mt-6 grid gap-3">
            {question.options.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setAnswer(option.id)}
                aria-pressed={answer === option.id}
                className={`rounded-xl border-2 p-5 text-left font-semibold transition ${
                  answer === option.id
                    ? "border-[#1b6470] bg-[#dce8e1]"
                    : "border-[#cdbb9d] bg-white/70 hover:bg-white"
                }`}
              >
                {option.text}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setShowHint((current) => !current)}
            className="mt-6 text-sm font-bold underline underline-offset-4"
          >
            {showHint ? "Hide clue" : "Need a clue?"}
          </button>

          {showHint && (
            <p className="mt-3 rounded-xl bg-[#fff6df] p-4 text-sm">
              {question.hint}
            </p>
          )}

          {answer && (
            <div role="status" className="mt-6 rounded-xl bg-white p-5">
              <p className="font-black">
                {correct
                  ? "Excellent navigation!"
                  : "Not quite — try another answer."}
              </p>

              {correct && (
                <p className="mt-3 leading-relaxed">{question.explanation}</p>
              )}
            </div>
          )}

          {correct && (
            <button
              type="button"
              onClick={nextStep}
              className="mt-6 rounded-full bg-[#123f49] px-8 py-4 font-black text-white transition hover:bg-[#1b6470]"
            >
              {step === questions.length - 1
                ? "Complete Voyage"
                : "Continue Sailing →"}
            </button>
          )}
        </div>
      )}
    </section>
  );
}
