"use client";

import { useState } from "react";
import type {
  JourneyChoiceStop,
  JourneyFactStop,
  JourneyLandmarkStop,
  JourneyRevealStop,
  JourneyTheme,
} from "./types";

type SupportedStop =
  | JourneyFactStop
  | JourneyRevealStop
  | JourneyLandmarkStop
  | JourneyChoiceStop;

type Props = {
  stop: SupportedStop;
  theme: JourneyTheme;
  index: number;
};

export default function JourneyStop({ stop, theme, index }: Props) {
  const side = stop.side || (index % 2 === 0 ? "left" : "right");

  return (
    <div
      className={`relative z-20 flex min-h-[520px] items-center ${
        side === "left" ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`relative w-[82%] sm:w-[46%] lg:w-[40%] ${
          side === "left" ? "sm:pr-10 lg:pr-16" : "sm:pl-10 lg:pl-16"
        }`}
      >
        {/* Connector from card towards journey path */}
        <div
          className={`pointer-events-none absolute top-1/2 hidden h-[3px] w-16 -translate-y-1/2 sm:block ${
            side === "left" ? "-right-6" : "-left-6"
          }`}
          style={{
            backgroundColor: theme.accent,
          }}
        />

        {/* Route marker */}
        <div
          className={`pointer-events-none absolute top-1/2 hidden h-5 w-5 -translate-y-1/2 rounded-full border-4 sm:block ${
            side === "left" ? "-right-[34px]" : "-left-[34px]"
          }`}
          style={{
            backgroundColor: theme.surface,
            borderColor: theme.accent,
          }}
        />

        {stop.type === "fact" && <FactStop stop={stop} theme={theme} />}

        {stop.type === "reveal" && <RevealStop stop={stop} theme={theme} />}

        {stop.type === "landmark" && <LandmarkStop stop={stop} theme={theme} />}

        {stop.type === "choice" && <ChoiceStop stop={stop} theme={theme} />}
      </div>
    </div>
  );
}

/* =========================================================
   CARD SHELL
========================================================= */

function CardShell({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: JourneyTheme;
}) {
  return (
    <article
      className="relative overflow-hidden rounded-[2rem] border-[3px] p-6 shadow-[7px_9px_0_rgba(0,0,0,0.08)] sm:p-8"
      style={{
        backgroundColor: theme.surface,
        borderColor: theme.dark,
      }}
    >
      {/* Little illustrated-map corner marks */}
      <div
        className="pointer-events-none absolute -right-7 -top-7 h-20 w-20 rotate-12 rounded-[35%] opacity-10"
        style={{ backgroundColor: theme.accent }}
      />

      <div
        className="pointer-events-none absolute -bottom-8 -left-8 h-24 w-24 rounded-full opacity-[0.07]"
        style={{ backgroundColor: theme.primary }}
      />

      <div className="relative">{children}</div>
    </article>
  );
}

/* =========================================================
   HEADING
========================================================= */

function StopHeading({
  stop,
  theme,
}: {
  stop: SupportedStop;
  theme: JourneyTheme;
}) {
  return (
    <>
      <div className="flex items-start gap-4">
        {stop.marker && (
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-3xl"
            style={{
              backgroundColor: `${theme.accent}25`,
            }}
          >
            {stop.marker}
          </div>
        )}

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
        <p
          className="mt-5 text-base leading-7 sm:text-lg"
          style={{ color: theme.mutedText }}
        >
          {stop.text}
        </p>
      )}
    </>
  );
}

/* =========================================================
   FACT STOP
========================================================= */

function FactStop({
  stop,
  theme,
}: {
  stop: JourneyFactStop;
  theme: JourneyTheme;
}) {
  return (
    <CardShell theme={theme}>
      <StopHeading stop={stop} theme={theme} />

      {stop.highlight && (
        <div
          className="mt-6 rotate-[-1deg] rounded-xl px-5 py-4 text-lg font-black leading-snug"
          style={{
            backgroundColor: theme.accent,
            color: theme.dark,
          }}
        >
          {stop.highlight}
        </div>
      )}
    </CardShell>
  );
}

/* =========================================================
   LANDMARK
========================================================= */

function LandmarkStop({
  stop,
  theme,
}: {
  stop: JourneyLandmarkStop;
  theme: JourneyTheme;
}) {
  return (
    <div className="relative">
      {stop.largeLabel && (
        <p
          className="mb-3 text-5xl font-black leading-none opacity-15 sm:text-6xl lg:text-7xl"
          style={{ color: theme.dark }}
        >
          {stop.largeLabel}
        </p>
      )}

      <CardShell theme={theme}>
        <StopHeading stop={stop} theme={theme} />
      </CardShell>
    </div>
  );
}

/* =========================================================
   REVEAL
========================================================= */

function RevealStop({
  stop,
  theme,
}: {
  stop: JourneyRevealStop;
  theme: JourneyTheme;
}) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <CardShell theme={theme}>
      <StopHeading stop={stop} theme={theme} />

      <div className="mt-6 grid gap-3">
        {stop.items.map((item) => {
          const open = openId === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setOpenId(open ? null : item.id)}
              className="rounded-2xl border-2 p-4 text-left transition hover:-translate-y-0.5"
              style={{
                backgroundColor: open
                  ? `${theme.secondary}18`
                  : theme.background,
                borderColor: open ? theme.secondary : `${theme.dark}20`,
              }}
            >
              <div className="flex items-center gap-3">
                {item.icon && <span className="text-2xl">{item.icon}</span>}

                <span className="font-black" style={{ color: theme.text }}>
                  {item.title}
                </span>

                <span
                  className="ml-auto font-black"
                  style={{ color: theme.primary }}
                >
                  {open ? "−" : "+"}
                </span>
              </div>

              {open && (
                <p
                  className="mt-3 leading-7"
                  style={{ color: theme.mutedText }}
                >
                  {item.reveal}
                </p>
              )}
            </button>
          );
        })}
      </div>
    </CardShell>
  );
}

/* =========================================================
   CHOICE
========================================================= */

function ChoiceStop({
  stop,
  theme,
}: {
  stop: JourneyChoiceStop;
  theme: JourneyTheme;
}) {
  const [selected, setSelected] = useState<string[]>([]);

  const maxChoices = stop.maxChoices || stop.options.length;

  const toggleChoice = (option: string) => {
    setSelected((current) => {
      if (current.includes(option)) {
        return current.filter((item) => item !== option);
      }

      if (current.length >= maxChoices) {
        return current;
      }

      return [...current, option];
    });
  };

  const complete = selected.length === maxChoices;

  return (
    <CardShell theme={theme}>
      <StopHeading stop={stop} theme={theme} />

      {stop.instruction && (
        <p
          className="mt-5 text-sm font-black uppercase tracking-[0.14em]"
          style={{ color: theme.primary }}
        >
          {stop.instruction}
        </p>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {stop.options.map((option) => {
          const active = selected.includes(option);

          return (
            <button
              key={option}
              type="button"
              onClick={() => toggleChoice(option)}
              className="rounded-full border-2 px-4 py-2 text-sm font-black transition hover:-translate-y-0.5"
              style={{
                backgroundColor: active ? theme.primary : theme.background,
                borderColor: active ? theme.primary : `${theme.dark}25`,
                color: active ? "#ffffff" : theme.text,
              }}
            >
              {option}
            </button>
          );
        })}
      </div>

      {complete && stop.completionText && (
        <div
          className="mt-6 rounded-2xl p-5 font-bold leading-7"
          style={{
            backgroundColor: `${theme.accent}25`,
            color: theme.text,
          }}
        >
          {stop.completionText}
        </div>
      )}
    </CardShell>
  );
}
