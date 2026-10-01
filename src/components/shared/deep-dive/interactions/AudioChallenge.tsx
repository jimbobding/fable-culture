"use client";

import { useRef, useState } from "react";
import type { DeepDiveAudioClip, DeepDiveTheme } from "../types";

type Props = {
  clip: DeepDiveAudioClip;
  theme: DeepDiveTheme;
  number?: number;
};

export default function AudioChallenge({ clip, theme, number }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);

  const selected = clip.options?.find((option) => option.id === selectedOption);

  const toggleAudio = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
      } catch {
        setIsPlaying(false);
      }
    } else {
      audio.pause();
    }
  };

  const chooseOption = (id: string) => {
    if (revealed) return;

    setSelectedOption(id);
  };

  const revealAnswer = () => {
    setRevealed(true);
  };

  const resetChallenge = () => {
    setSelectedOption(null);
    setRevealed(false);
  };

  return (
    <article
      className="relative overflow-hidden rounded-[2rem] border p-6 sm:p-8"
      style={{
        backgroundColor: theme.surface,
        borderColor: `${theme.primary}30`,
      }}
    >
      {/* Decorative sound rings */}
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full border-[24px] opacity-[0.06]"
        style={{ borderColor: theme.primary }}
      />

      <div
        className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full border-[14px] opacity-[0.08]"
        style={{ borderColor: theme.accent }}
      />

      <div className="relative">
        {/* Clip number / label */}
        <div className="flex items-center justify-between gap-4">
          <p
            className="text-xs font-black uppercase tracking-[0.28em]"
            style={{ color: theme.primary }}
          >
            {number ? `Sound ${String(number).padStart(2, "0")}` : "Listen"}
          </p>

          <span className="text-2xl" role="img" aria-label="Audio">
            🔊
          </span>
        </div>

        {clip.title && (
          <h3
            className="mt-4 text-2xl font-black sm:text-3xl"
            style={{ color: theme.text }}
          >
            {clip.title}
          </h3>
        )}

        {/* Audio */}
        <audio
          ref={audioRef}
          src={clip.audioSrc}
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        />

        <button
          type="button"
          onClick={toggleAudio}
          className="mt-6 inline-flex min-h-14 items-center gap-4 rounded-full px-6 py-3 text-sm font-black uppercase tracking-[0.18em] transition hover:scale-[1.02] active:scale-[0.98]"
          style={{
            backgroundColor: theme.dark,
            color: "#ffffff",
          }}
        >
          <span className="text-xl">{isPlaying ? "❚❚" : "▶"}</span>

          {isPlaying ? "Pause sound" : "Play sound"}
        </button>

        {/* Question */}
        {clip.question && (
          <p
            className="mt-8 text-xl font-black leading-snug sm:text-2xl"
            style={{ color: theme.text }}
          >
            {clip.question}
          </p>
        )}

        {/* Options */}
        {clip.options && clip.options.length > 0 && (
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {clip.options.map((option) => {
              const isSelected = selectedOption === option.id;

              let backgroundColor = theme.background;
              let borderColor = `${theme.text}20`;
              let color = theme.text;

              if (isSelected) {
                backgroundColor = theme.primary;
                borderColor = theme.primary;
                color = "#ffffff";
              }

              if (revealed && option.correct) {
                backgroundColor = theme.accent;
                borderColor = theme.accent;
                color = theme.dark;
              }

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => chooseOption(option.id)}
                  className="min-h-16 rounded-2xl border-2 px-5 py-4 text-left font-black transition hover:-translate-y-0.5"
                  style={{
                    backgroundColor,
                    borderColor,
                    color,
                  }}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Reveal button */}
        {!revealed &&
          (selectedOption || !clip.options?.length) &&
          (clip.revealTitle || clip.revealText) && (
            <button
              type="button"
              onClick={revealAnswer}
              className="mt-6 border-b-2 pb-1 text-sm font-black uppercase tracking-[0.18em]"
              style={{
                color: theme.primary,
                borderColor: theme.accent,
              }}
            >
              Reveal answer ↓
            </button>
          )}

        {/* Reveal */}
        {revealed && (
          <div
            className="mt-7 rounded-2xl p-5 sm:p-6"
            style={{
              backgroundColor: `${theme.accent}20`,
            }}
          >
            {selected && typeof selected.correct === "boolean" && (
              <p
                className="text-xs font-black uppercase tracking-[0.22em]"
                style={{ color: theme.primary }}
              >
                {selected.correct ? "You got it" : "Good guess"}
              </p>
            )}

            {clip.revealTitle && (
              <h4
                className="mt-2 text-2xl font-black"
                style={{ color: theme.text }}
              >
                {clip.revealTitle}
              </h4>
            )}

            {clip.revealText && (
              <p className="mt-3 leading-7" style={{ color: theme.mutedText }}>
                {clip.revealText}
              </p>
            )}

            {clip.options && clip.options.length > 0 && (
              <button
                type="button"
                onClick={resetChallenge}
                className="mt-5 text-xs font-black uppercase tracking-[0.2em]"
                style={{ color: theme.primary }}
              >
                Try again ↻
              </button>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
