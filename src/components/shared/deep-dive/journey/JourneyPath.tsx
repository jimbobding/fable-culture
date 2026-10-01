import type { JourneyTheme, JourneyVisualStyle } from "./types";

type Props = {
  theme: JourneyTheme;
  visualStyle?: JourneyVisualStyle;
};

export default function JourneyPath({ theme, visualStyle = "default" }: Props) {
  /*
    The path deliberately uses a tall SVG viewBox.

    JourneyPage will stretch this component down the centre
    of the complete journey.

    Different visual styles can eventually alter the path:
    river  = broad flowing water
    city   = street / route
    forest = walking trail
    trail  = expedition path
  */

  if (visualStyle === "river") {
    return (
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 w-[46%] max-w-[560px] -translate-x-1/2 sm:w-[34%]"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 500 2400"
          preserveAspectRatio="none"
          className="h-full w-full overflow-visible"
        >
          {/* OUTER BANK / SHADOW */}
          <path
            d="
              M250 0
              C390 120 385 270 235 390
              C85 510 105 670 285 780
              C445 880 425 1050 245 1160
              C70 1270 90 1440 290 1550
              C455 1645 425 1810 220 1925
              C75 2010 110 2220 250 2400
            "
            fill="none"
            stroke={theme.pathDark}
            strokeWidth="190"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.28"
          />

          {/* MAIN WATER */}
          <path
            d="
              M250 0
              C390 120 385 270 235 390
              C85 510 105 670 285 780
              C445 880 425 1050 245 1160
              C70 1270 90 1440 290 1550
              C455 1645 425 1810 220 1925
              C75 2010 110 2220 250 2400
            "
            fill="none"
            stroke={theme.path}
            strokeWidth="164"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* LIGHTER WATER CHANNEL */}
          <path
            d="
              M250 0
              C390 120 385 270 235 390
              C85 510 105 670 285 780
              C445 880 425 1050 245 1160
              C70 1270 90 1440 290 1550
              C455 1645 425 1810 220 1925
              C75 2010 110 2220 250 2400
            "
            fill="none"
            stroke={theme.pathLight}
            strokeWidth="92"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.42"
          />

          {/* WATER HIGHLIGHT */}
          <path
            d="
              M235 35
              C340 150 325 265 220 360
              C120 455 135 610 250 690
              C345 755 355 875 275 945
            "
            fill="none"
            stroke="white"
            strokeWidth="9"
            strokeLinecap="round"
            opacity="0.28"
          />

          {/* TRIBUTARY — LEFT */}
          <path
            d="
              M0 640
              C70 650 115 690 175 735
            "
            fill="none"
            stroke={theme.pathDark}
            strokeWidth="70"
            strokeLinecap="round"
            opacity="0.2"
          />

          <path
            d="
              M0 640
              C70 650 115 690 175 735
            "
            fill="none"
            stroke={theme.path}
            strokeWidth="54"
            strokeLinecap="round"
          />

          {/* TRIBUTARY — RIGHT */}
          <path
            d="
              M500 1370
              C430 1385 390 1420 350 1470
            "
            fill="none"
            stroke={theme.pathDark}
            strokeWidth="74"
            strokeLinecap="round"
            opacity="0.2"
          />

          <path
            d="
              M500 1370
              C430 1385 390 1420 350 1470
            "
            fill="none"
            stroke={theme.path}
            strokeWidth="56"
            strokeLinecap="round"
          />

          {/* SMALL WATER MARKS */}
          <g
            fill="none"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
            opacity="0.25"
          >
            <path d="M260 500 C285 485 315 485 340 500" />
            <path d="M160 1040 C185 1025 215 1025 240 1040" />
            <path d="M290 1650 C315 1635 345 1635 370 1650" />
            <path d="M150 2100 C175 2085 205 2085 230 2100" />
          </g>
        </svg>
      </div>
    );
  }

  /* =======================================================
     GENERIC JOURNEY PATH

     Used by city / forest / trail journeys until they
     receive their own visual treatment.
  ======================================================= */

  return (
    <div
      className="pointer-events-none absolute inset-y-0 left-1/2 w-20 -translate-x-1/2"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 120 2400"
        preserveAspectRatio="none"
        className="h-full w-full overflow-visible"
      >
        <path
          d="
            M60 0
            C105 180 20 330 65 500
            C110 670 25 830 60 1000
            C100 1170 20 1340 65 1510
            C110 1690 20 1870 60 2050
            C90 2190 55 2300 60 2400
          "
          fill="none"
          stroke={theme.pathDark}
          strokeWidth="26"
          strokeLinecap="round"
          opacity="0.2"
        />

        <path
          d="
            M60 0
            C105 180 20 330 65 500
            C110 670 25 830 60 1000
            C100 1170 20 1340 65 1510
            C110 1690 20 1870 60 2050
            C90 2190 55 2300 60 2400
          "
          fill="none"
          stroke={theme.path}
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray="18 20"
        />
      </svg>
    </div>
  );
}
