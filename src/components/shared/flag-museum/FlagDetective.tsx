"use client";

import { useState } from "react";
import type { MuseumFlag } from "./FlagGallery";

type FlagDetectiveProps = {
  flag: MuseumFlag;
};

const questions = [
  {
    id: "colours",
    number: "01",
    title: "Colours",
    icon: "🎨",
    question: "Which colours can you see? What might they represent?",
  },
  {
    id: "symbols",
    number: "02",
    title: "Symbols",
    icon: "🔍",
    question: "What symbols can you find? What do they mean?",
  },
  {
    id: "history",
    number: "03",
    title: "History",
    icon: "📖",
    question: "When was this flag introduced? Has it changed over time?",
  },
];

export default function FlagDetective({ flag }: FlagDetectiveProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const completedQuestions = questions.filter((question) =>
    answers[question.id]?.trim(),
  ).length;

  function updateAnswer(id: string, value: string) {
    setAnswers((previous) => ({
      ...previous,
      [id]: value,
    }));
  }

  function clearAnswers() {
    if (window.confirm("Are you sure you want to clear your discoveries?")) {
      setAnswers({});
    }
  }

  return (
    <section className="mt-20 text-[#203d3b]">
      {/* JOURNAL HEADING */}
      <div className="border-b-2 border-[#b89a6e] pb-8">
        <p className="text-xs font-bold uppercase tracking-[.3em] text-[#866542]">
          Your museum research journal
        </p>

        <h2 className="mt-4 font-serif text-4xl sm:text-6xl">
          The Flag Detective
        </h2>

        <p className="mt-4 max-w-2xl text-lg leading-relaxed">
          Become a Flag Detective! Your challenge is to carry out your own
          research and discover the story behind this flag.
        </p>

        <div className="mt-6 rounded-xl border-2 border-[#b89a6e] bg-[#fff9eb] p-6">
          <h3 className="font-serif text-2xl">Your research mission</h3>

          <ol className="mt-4 list-decimal space-y-3 pl-6 text-lg">
            <li>Look carefully at your chosen flag.</li>
            <li>
              Use books or trusted websites to research its colours, symbols and
              history.
            </li>
            <li>Write your discoveries in your own words.</li>
            <li>Record where you found your information.</li>
          </ol>

          <p className="mt-5 font-semibold">
            Not all the answers can be found in the museum. It is your job to
            investigate!
          </p>
        </div>
      </div>

      {/* RESEARCH SUBJECT */}
      <div className="mt-8 flex flex-wrap items-center gap-6 rounded-xl border border-[#b89a6e] bg-[#fff9eb] p-6">
        <div className="w-32 border-[5px] border-[#9d8260] bg-white p-2 shadow-md">
          <img
            src={flag.image}
            alt={`Flag of ${flag.name}`}
            className="block h-auto w-full"
          />
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#866542]">
            Your investigation
          </p>

          <h3 className="mt-2 font-serif text-3xl">{flag.name}</h3>

          <p className="mt-2">Examine the evidence. Discover the story.</p>
        </div>
      </div>

      {/* PROGRESS */}
      <div className="mt-8">
        <div className="mb-3 flex items-center justify-between gap-4">
          <p className="font-bold">Your progress</p>

          <p className="text-sm font-bold">
            {completedQuestions} of {questions.length} completed
          </p>
        </div>

        <div
          role="progressbar"
          aria-label="Research progress"
          aria-valuemin={0}
          aria-valuemax={questions.length}
          aria-valuenow={completedQuestions}
          className="h-3 overflow-hidden rounded-full bg-[#d8cebd]"
        >
          <div
            className="h-full rounded-full bg-[#355b50] transition-all duration-300"
            style={{
              width: `${(completedQuestions / questions.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* RESEARCH QUESTIONS */}
      <div className="mt-8 grid gap-6">
        {questions.map((question) => {
          const completed = Boolean(answers[question.id]?.trim());

          return (
            <div
              key={question.id}
              className="rounded-xl border-2 border-[#b89a6e] bg-[#fff9eb] p-6 shadow-sm sm:p-8"
            >
              <div className="flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#e8ddc7] text-2xl"
                >
                  {question.icon}
                </span>

                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#866542]">
                    Investigation {question.number}
                  </p>

                  <h3 className="mt-1 font-serif text-3xl">{question.title}</h3>
                </div>

                {completed && (
                  <span className="text-xl font-bold text-[#355b50]">✓</span>
                )}
              </div>

              <label
                htmlFor={`detective-${flag.id}-${question.id}`}
                className="mt-6 block text-lg font-semibold"
              >
                {question.question}
              </label>

              <textarea
                id={`detective-${flag.id}-${question.id}`}
                value={answers[question.id] ?? ""}
                onChange={(event) =>
                  updateAnswer(question.id, event.target.value)
                }
                placeholder="Write your discoveries here..."
                rows={4}
                className="mt-4 w-full resize-y rounded-lg border-2 border-[#b89a6e] bg-white p-4 text-lg leading-relaxed outline-none transition focus:border-[#355b50] focus:ring-2 focus:ring-[#355b50]/20"
              />
            </div>
          );
        })}
      </div>

      {/* JOURNAL FOOTER */}
      <div className="mt-8 rounded-xl bg-[#123f49] p-6 text-[#f4ead7] sm:p-8">
        <h3 className="font-serif text-2xl">
          {completedQuestions === questions.length
            ? "Excellent investigating, detective!"
            : "Keep exploring, detective!"}
        </h3>

        <p className="mt-3 leading-relaxed">
          {completedQuestions === questions.length
            ? "You have written an answer for every investigation."
            : "Use books, trusted websites and the museum exhibits to help you discover more."}
        </p>

        <button
          type="button"
          onClick={clearAnswers}
          disabled={Object.values(answers).every((answer) => !answer.trim())}
          className="mt-6 rounded-lg border border-[#f4ead7]/60 px-5 py-3 text-sm font-bold transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Clear my answers
        </button>
      </div>
    </section>
  );
}
