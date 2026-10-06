"use client";

import { useState } from "react";

type RouteChoice = "alone" | "relay" | "wait" | null;

export default function IncaMessenger() {
  const [choice, setChoice] = useState<RouteChoice>(null);
  const [relayStep, setRelayStep] = useState(0);

  const relayStops = [
    "CUSCO",
    "RUNNER 1",
    "RUNNER 2",
    "RUNNER 3",
    "DESTINATION!",
  ];

  function choose(option: RouteChoice) {
    setChoice(option);

    if (option !== "relay") {
      setRelayStep(0);
    }
  }

  function advanceRelay() {
    setRelayStep((current) =>
      Math.min(current + 1, relayStops.length - 1)
    );
  }

  return (
    <section
      id="chapter-messengers"
      className="relative overflow-hidden bg-[#6F8B68] px-4 py-20 text-[#211F1A] md:px-8 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(#211F1A 0.8px, transparent 0.8px)",
          backgroundSize: "7px 7px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-5 grid border-[5px] border-[#211F1A] bg-[#244C40] shadow-[8px_8px_0_#211F1A] md:grid-cols-[150px_1fr]">
          <div className="flex items-center justify-center border-b-[5px] border-[#211F1A] bg-[#E5B94D] p-5 md:border-b-0 md:border-r-[5px]">
            <span className="text-7xl font-black leading-none">02</span>
          </div>

          <div className="p-6 text-[#F7E6BA] md:p-8">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#E5B94D]">
              Communication challenge
            </p>

            <h2 className="mt-2 text-5xl font-black uppercase leading-[0.85] tracking-[-0.05em] md:text-7xl">
              Carry the
              <br />
              Message!
            </h2>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-12">
          {/* CARTOON PANEL */}
          <div className="relative min-h-[540px] overflow-hidden border-[5px] border-[#211F1A] bg-[#77A6A0] shadow-[8px_8px_0_#211F1A] lg:col-span-7">
            <div className="absolute left-4 top-4 z-20 max-w-[270px] rotate-[-2deg] border-[3px] border-[#211F1A] bg-[#F3E0A9] p-4 shadow-[4px_4px_0_#211F1A]">
              <p className="text-xs font-black uppercase tracking-[0.15em] text-[#A33F30]">
                Urgent message!
              </p>

              <p className="mt-2 text-lg font-black leading-tight">
                Information needs to travel along the road — fast.
              </p>
            </div>

            {/* COMIC SUN */}
            <div className="absolute right-10 top-10 h-20 w-20 rounded-full border-[4px] border-[#211F1A] bg-[#E5B94D]" />

            {/* LANDSCAPE */}
            <svg
              className="absolute inset-x-0 bottom-0 h-[72%] w-full"
              viewBox="0 0 800 500"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M-50 390 L150 130 L290 330 L420 90 L610 355 L720 190 L860 400 L860 520 L-50 520 Z"
                fill="#526D58"
                stroke="#211F1A"
                strokeWidth="8"
                strokeLinejoin="round"
              />

              <path
                d="M420 90 L375 150 L415 137 L437 166 L460 135 L490 160 Z"
                fill="#F3E4BC"
                stroke="#211F1A"
                strokeWidth="6"
              />

              {/* ROAD */}
              <path
                d="M-40 475 C170 390 235 465 390 380 C535 300 620 365 850 260"
                fill="none"
                stroke="#211F1A"
                strokeWidth="58"
                strokeLinecap="round"
              />

              <path
                d="M-40 475 C170 390 235 465 390 380 C535 300 620 365 850 260"
                fill="none"
                stroke="#D4AC67"
                strokeWidth="43"
                strokeLinecap="round"
              />
            </svg>

            {/* CARTOON RUNNER */}
            <div className="absolute bottom-[95px] left-[43%] z-10">
              <div className="relative h-[190px] w-[130px]">
                {/* head */}
                <div className="absolute left-[45px] top-0 h-52 w-52 max-h-[52px] max-w-[52px] rounded-full border-[4px] border-[#211F1A] bg-[#B9784F]" />

                {/* hair */}
                <div className="absolute left-[42px] top-[-3px] h-7 w-[58px] rounded-t-full border-[4px] border-b-0 border-[#211F1A] bg-[#211F1A]" />

                {/* body */}
                <div className="absolute left-[38px] top-[48px] h-[75px] w-[67px] rotate-[-6deg] border-[4px] border-[#211F1A] bg-[#B74834]" />

                {/* sash */}
                <div className="absolute left-[47px] top-[62px] h-[12px] w-[63px] rotate-[24deg] border-2 border-[#211F1A] bg-[#E5B94D]" />

                {/* left arm */}
                <div className="absolute left-[13px] top-[66px] h-[18px] w-[55px] -rotate-[32deg] border-[4px] border-[#211F1A] bg-[#B9784F]" />

                {/* right arm */}
                <div className="absolute left-[90px] top-[70px] h-[18px] w-[50px] rotate-[28deg] border-[4px] border-[#211F1A] bg-[#B9784F]" />

                {/* legs */}
                <div className="absolute left-[35px] top-[112px] h-[20px] w-[70px] rotate-[48deg] border-[4px] border-[#211F1A] bg-[#704A37]" />
                <div className="absolute left-[60px] top-[132px] h-[20px] w-[70px] -rotate-[35deg] border-[4px] border-[#211F1A] bg-[#704A37]" />

                {/* message pouch */}
                <div className="absolute left-[94px] top-[92px] h-10 w-9 rotate-[8deg] border-[4px] border-[#211F1A] bg-[#E5B94D]" />
              </div>
            </div>

            {/* COMIC MOTION LINES */}
            <div className="absolute bottom-[190px] left-[28%] rotate-[-8deg] text-5xl font-black italic text-[#F4D45C] [text-shadow:3px_3px_0_#211F1A] md:text-7xl">
              RUN!
            </div>
          </div>

          {/* DECISION PANEL */}
          <div className="border-[5px] border-[#211F1A] bg-[#F1DEAF] p-6 shadow-[8px_8px_0_#211F1A] lg:col-span-5 md:p-8">
            <div className="inline-block rotate-[1deg] border-[3px] border-[#211F1A] bg-[#B74834] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#F7E6BA]">
              You're the messenger
            </div>

            <h3 className="mt-6 text-4xl font-black uppercase leading-[0.9] tracking-[-0.04em] md:text-5xl">
              How will you get it there?
            </h3>

            <p className="mt-5 font-bold leading-7 text-[#514737]">
              The destination is a long way away. The message needs to travel
              quickly across difficult Andean terrain.
            </p>

            <div className="mt-8 space-y-4">
              <button
                type="button"
                onClick={() => choose("alone")}
                className="w-full border-[4px] border-[#211F1A] bg-[#F7E9C4] p-4 text-left font-black uppercase shadow-[5px_5px_0_#211F1A] transition hover:-translate-y-1 hover:bg-[#E9CF89]"
              >
                A — Run the entire journey yourself
              </button>

              <button
                type="button"
                onClick={() => choose("relay")}
                className="w-full border-[4px] border-[#211F1A] bg-[#F7E9C4] p-4 text-left font-black uppercase shadow-[5px_5px_0_#211F1A] transition hover:-translate-y-1 hover:bg-[#E9CF89]"
              >
                B — Pass it between runners
              </button>

              <button
                type="button"
                onClick={() => choose("wait")}
                className="w-full border-[4px] border-[#211F1A] bg-[#F7E9C4] p-4 text-left font-black uppercase shadow-[5px_5px_0_#211F1A] transition hover:-translate-y-1 hover:bg-[#E9CF89]"
              >
                C — Wait for someone travelling that way
              </button>
            </div>

            {choice === "alone" && (
              <div className="mt-7 border-[4px] border-[#211F1A] bg-[#D2764B] p-5 shadow-[5px_5px_0_#211F1A]">
                <p className="text-xs font-black uppercase tracking-[0.18em]">
                  Huff... puff...
                </p>

                <p className="mt-2 text-lg font-black">
                  One runner would tire over a very long journey. Try using
                  the network.
                </p>
              </div>
            )}

            {choice === "wait" && (
              <div className="mt-7 border-[4px] border-[#211F1A] bg-[#D2764B] p-5 shadow-[5px_5px_0_#211F1A]">
                <p className="text-xs font-black uppercase tracking-[0.18em]">
                  Tick... tock...
                </p>

                <p className="mt-2 text-lg font-black">
                  Too unpredictable. Important information needed a more
                  organised system.
                </p>
              </div>
            )}

            {choice === "relay" && (
              <div className="mt-7 border-[4px] border-[#211F1A] bg-[#6F8B68] p-5 shadow-[5px_5px_0_#211F1A]">
                <p className="text-xs font-black uppercase tracking-[0.18em]">
                  ★ You've found the relay!
                </p>

                <p className="mt-2 text-lg font-black">
                  Instead of one person completing the whole journey,
                  messengers could pass information along the road network.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* RELAY GAME */}
        {choice === "relay" && (
          <div className="mt-5 border-[5px] border-[#211F1A] bg-[#E5B94D] p-6 shadow-[8px_8px_0_#211F1A] md:p-9">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#8D382C]">
                  Relay challenge
                </p>

                <h3 className="mt-2 text-4xl font-black uppercase leading-none md:text-5xl">
                  Pass the message!
                </h3>
              </div>

              <p className="max-w-md font-bold">
                Hit the button to pass the message from runner to runner.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-5 items-center gap-2">
              {relayStops.map((stop, index) => {
                const reached = index <= relayStep;
                const carrying = index === relayStep;

                return (
                  <div key={stop} className="relative text-center">
                    <div
                      className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full border-[4px] border-[#211F1A] font-black md:h-20 md:w-20 ${
                        reached
                          ? "bg-[#B74834] text-[#F7E6BA]"
                          : "bg-[#F3E0A9]"
                      } ${carrying ? "scale-110" : ""}`}
                    >
                      {index === 0 ? "🏛" : index === 4 ? "★" : "🏃"}
                    </div>

                    <p className="mt-3 hidden text-[10px] font-black uppercase md:block">
                      {stop}
                    </p>

                    {index < relayStops.length - 1 && (
                      <div className="absolute left-[70%] top-7 -z-0 h-[4px] w-[65%] bg-[#211F1A] md:top-10" />
                    )}
                  </div>
                );
              })}
            </div>

            {relayStep < relayStops.length - 1 ? (
              <button
                type="button"
                onClick={advanceRelay}
                className="mt-9 border-[4px] border-[#211F1A] bg-[#244C40] px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#F7E6BA] shadow-[5px_5px_0_#B74834] transition hover:-translate-y-1"
              >
                Pass the message →
              </button>
            ) : (
              <div className="mt-9 border-[4px] border-[#211F1A] bg-[#244C40] p-6 text-[#F7E6BA] shadow-[5px_5px_0_#B74834]">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#E5B94D]">
                  Message delivered!
                </p>

                <p className="mt-3 text-2xl font-black uppercase leading-tight">
                  Many runners. One connected network.
                </p>
              </div>
            )}
          </div>
        )}

        {/* EVIDENCE STRIP */}
        <div className="mt-5 border-[5px] border-[#211F1A] bg-[#F1DEAF] p-6 shadow-[8px_8px_0_#211F1A] md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#A33F30]">
            Evidence file
          </p>

          <p className="mt-3 max-w-4xl text-xl font-black leading-snug md:text-2xl">
            The road network did more than move travellers. It helped connect
            settlements and administrative centres and supported the movement
            of information, people and resources across Tawantinsuyu.
          </p>
        </div>
      </div>
    </section>
  );
}
