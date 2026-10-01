"use client";

import { useRef, useState } from "react";
import type {
  JourneyAmbientStop,
  JourneySoundStop as JourneySoundStopType,
  JourneyTheme,
} from "./types";

type Props = {
  stop: JourneySoundStopType | JourneyAmbientStop;
  theme: JourneyTheme;
  index: number;
};

export default function JourneySoundStop({ stop, theme, index }: Props) {
  const side = stop.side || (index % 2 === 0 ? "left" : "right");

  return (
    <div
      className={`relative z-20 flex min-h-[560px] items-center ${
        side === "left" ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`relative w-[84%] sm:w-[47%] lg:w-[41%] ${
          side === "left" ? "sm:pr-10 lg:pr-16" : "sm:pl-10 lg:pl-16"
        }`}
      >
        {/* Connector */}
        <div
          className={`pointer-events-none absolute top-1/2 hidden h-[3px] w-16 -translate-y-1/2 sm:block ${
            side === "left" ? "-right-6" : "-left-6"
          }`}
          style={{ backgroundColor: theme.accent }}
        />

        {/* Map marker */}
        <div
          className={`pointer-events-none absolute top-1/2 hidden h-6 w-6 -translate-y-1/2 rounded-full border-4 sm:block ${
            side === "left" ? "-right-[36px]" : "-left-[36px]"
          }`}
          style={{
            backgroundColor: theme.surface,
            borderColor: theme.accent,
          }}
        />

        {stop.type === "sound" ? (
          <SoundChallenge stop={stop} theme={theme} />
        ) : (
          <AmbientSound stop={stop} theme={theme} />
        )}
      </div>
    </div>
  );
}

/* =========================================================
   AUDIO BUTTON

   Shared by mystery sounds and ambient sounds.
========================================================= */

function AudioPlayer({
  audioSrc,
  theme,
  playLabel,
}: {
  audioSrc: string;
  theme: JourneyTheme;
  playLabel: string;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const toggleAudio = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
      } catch {
        setPlaying(false);
      }
    } else {
      audio.pause();
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={audioSrc}
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />

      <button
        type="button"
        onClick={toggleAudio}
        className="group mt-6 flex w-full items-center gap-5 rounded-[1.5rem] border-[3px] p-4 text-left transition hover:-translate-y-1"
        style={{
          backgroundColor: theme.dark,
          borderColor: theme.dark,
          color: "#ffffff",
        }}
      >
        <span
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-2xl transition group-hover:scale-110"
          style={{
            backgroundColor: theme.accent,
            color: theme.dark,
          }}
        >
          {playing ? "❚❚" : "▶"}
        </span>

        <span>
          <span
            className="block text-[0.65rem] font-black uppercase tracking-[0.25em]"
            style={{ color: theme.accent }}
          >
            {playing ? "Now playing" : "Sound stop"}
          </span>

          <span className="mt-1 block text-lg font-black">
            {playing ? "Pause sound" : playLabel}
          </span>
        </span>

        {/* Fake waveform */}
        <span
          className="ml-auto hidden items-end gap-1 sm:flex"
          aria-hidden="true"
        >
          {[10, 22, 15, 30, 18, 26, 12].map((height, waveIndex) => (
            <span
              key={waveIndex}
              className={`w-[3px] rounded-full ${
                playing ? "animate-pulse" : ""
              }`}
              style={{
                height,
                backgroundColor: theme.accent,
                opacity: 0.8,
              }}
            />
          ))}
        </span>
      </button>
    </>
  );
}

/* =========================================================
   MYSTERY SOUND
========================================================= */

function SoundChallenge({
  stop,
  theme,
}: {
  stop: JourneySoundStopType;
  theme: JourneyTheme;
}) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const [revealed, setRevealed] = useState(false);

  const selectedAnswer = stop.answers.find(
    (answer) => answer.id === selectedId,
  );

  const reveal = () => {
    if (!selectedId) return;
    setRevealed(true);
  };

  const reset = () => {
    setSelectedId(null);
    setRevealed(false);
  };

  return (
    <article
      className="relative overflow-hidden rounded-[2.25rem] border-[3px] p-6 shadow-[8px_10px_0_rgba(0,0,0,0.10)] sm:p-8"
      style={{
        backgroundColor: theme.surface,
        borderColor: theme.dark,
      }}
    >
      {/* Cartoon sound rings */}
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full border-[22px] opacity-[0.07]"
        style={{ borderColor: theme.secondary }}
      />

      <div
        className="pointer-events-none absolute -right-5 -top-5 h-24 w-24 rounded-full border-[12px] opacity-10"
        style={{ borderColor: theme.accent }}
      />

      <div className="relative">
        <div className="flex items-start gap-4">
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-3xl"
            style={{
              backgroundColor: `${theme.secondary}20`,
            }}
          >
            {stop.marker || "👂"}
          </div>

          <div>
            {stop.eyebrow && (
              <p
                className="text-[0.68rem] font-black uppercase tracking-[0.28em]"
                style={{ color: theme.primary }}
              >
                {stop.eyebrow}
              </p>
            )}

            <h2
              className="mt-2 text-3xl font-black leading-[0.95] sm:text-4xl"
              style={{ color: theme.text }}
            >
              {stop.title}
            </h2>
          </div>
        </div>

        {stop.text && (
          <p className="mt-5 leading-7" style={{ color: theme.mutedText }}>
            {stop.text}
          </p>
        )}

        <AudioPlayer
          audioSrc={stop.audioSrc}
          theme={theme}
          playLabel="Listen carefully"
        />

        <p
          className="mt-7 text-xl font-black leading-snug"
          style={{ color: theme.text }}
        >
          {stop.question}
        </p>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {stop.answers.map((answer) => {
            const selected = selectedId === answer.id;

            const correct = revealed && answer.correct;

            let backgroundColor = theme.background;
            let borderColor = `${theme.dark}20`;
            let color = theme.text;

            if (selected && !revealed) {
              backgroundColor = theme.primary;
              borderColor = theme.primary;
              color = "#ffffff";
            }

            if (revealed && correct) {
              backgroundColor = theme.accent;
              borderColor = theme.accent;
              color = theme.dark;
            }

            if (revealed && selected && !answer.correct) {
              backgroundColor = `${theme.secondary}20`;
              borderColor = theme.secondary;
            }

            return (
              <button
                key={answer.id}
                type="button"
                disabled={revealed}
                onClick={() => setSelectedId(answer.id)}
                className="rounded-2xl border-2 px-4 py-4 text-left font-black transition hover:-translate-y-0.5 disabled:cursor-default"
                style={{
                  backgroundColor,
                  borderColor,
                  color,
                }}
              >
                {answer.label}
              </button>
            );
          })}
        </div>

        {selectedId && !revealed && (
          <button
            type="button"
            onClick={reveal}
            className="mt-5 rounded-full px-5 py-3 text-xs font-black uppercase tracking-[0.18em] transition hover:scale-[1.02]"
            style={{
              backgroundColor: theme.accent,
              color: theme.dark,
            }}
          >
            Reveal the sound →
          </button>
        )}

        {revealed && (
          <div
            className="mt-6 rounded-[1.5rem] border-2 p-5"
            style={{
              backgroundColor: `${theme.accent}18`,
              borderColor: theme.accent,
            }}
          >
            <div className="flex items-start gap-4">
              {stop.revealIcon && (
                <span className="text-5xl">{stop.revealIcon}</span>
              )}

              <div>
                <p
                  className="text-[0.65rem] font-black uppercase tracking-[0.24em]"
                  style={{ color: theme.primary }}
                >
                  {selectedAnswer?.correct ? "You got it!" : "Mystery solved"}
                </p>

                <h3
                  className="mt-1 text-2xl font-black"
                  style={{ color: theme.text }}
                >
                  {stop.revealTitle}
                </h3>

                <p
                  className="mt-3 leading-7"
                  style={{ color: theme.mutedText }}
                >
                  {stop.revealText}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={reset}
              className="mt-4 text-xs font-black uppercase tracking-[0.18em]"
              style={{ color: theme.primary }}
            >
              Guess again ↻
            </button>
          </div>
        )}
      </div>
    </article>
  );
}

/* =========================================================
   AMBIENT SOUND
========================================================= */

function AmbientSound({
  stop,
  theme,
}: {
  stop: JourneyAmbientStop;
  theme: JourneyTheme;
}) {
  return (
    <article
      className="relative overflow-hidden rounded-[2.25rem] border-[3px] p-6 shadow-[8px_10px_0_rgba(0,0,0,0.08)] sm:p-8"
      style={{
        backgroundColor: theme.dark,
        borderColor: theme.dark,
        color: "#ffffff",
      }}
    >
      {/* Decorative atmosphere */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-10 blur-2xl"
        style={{ backgroundColor: theme.secondary }}
      />

      <div className="relative">
        <div className="flex items-center gap-4">
          <span className="text-4xl">{stop.marker || "🎧"}</span>

          <div>
            {stop.eyebrow && (
              <p
                className="text-[0.68rem] font-black uppercase tracking-[0.28em]"
                style={{ color: theme.accent }}
              >
                {stop.eyebrow}
              </p>
            )}

            <h2 className="mt-1 text-3xl font-black leading-none sm:text-4xl">
              {stop.title}
            </h2>
          </div>
        </div>

        {stop.text && (
          <p className="mt-5 leading-7 text-white/65">{stop.text}</p>
        )}

        <AudioPlayer
          audioSrc={stop.audioSrc}
          theme={theme}
          playLabel={stop.buttonLabel || "Hear this place"}
        />

        {stop.prompt && (
          <div
            className="mt-6 rotate-[-1deg] rounded-2xl px-5 py-4 font-black leading-7"
            style={{
              backgroundColor: theme.accent,
              color: theme.dark,
            }}
          >
            {stop.prompt}
          </div>
        )}
      </div>
    </article>
  );
}
