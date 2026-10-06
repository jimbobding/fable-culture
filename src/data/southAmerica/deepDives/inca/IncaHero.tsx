import Link from "next/link";

type IncaHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  openingQuestion: string;
};

export default function IncaHero({
  eyebrow,
  title,
  subtitle,
  intro,
  openingQuestion,
}: IncaHeroProps) {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-[#E8D6AE] text-[#252017]">
      {/* aged paper */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(92,61,35,0.13) 0 1px, transparent 1px),
            radial-gradient(circle at 70% 60%, rgba(92,61,35,0.09) 0 1px, transparent 1px)
          `,
          backgroundSize: "18px 18px, 27px 27px",
        }}
      />

      {/* giant sun */}
      <div className="absolute -right-20 top-20 h-72 w-72 rounded-full border-[18px] border-[#C76B3C]/70 md:h-96 md:w-96" />

      {/* mountain layers */}
      <div className="absolute inset-x-0 bottom-0 h-[44%]">
        <div
          className="absolute inset-x-0 bottom-0 h-full bg-[#58745B]"
          style={{
            clipPath:
              "polygon(0 70%, 10% 50%, 18% 62%, 31% 25%, 43% 57%, 54% 38%, 66% 61%, 79% 30%, 91% 53%, 100% 39%, 100% 100%, 0 100%)",
          }}
        />

        <div
          className="absolute inset-x-0 bottom-0 h-[75%] bg-[#344C3B]"
          style={{
            clipPath:
              "polygon(0 66%, 13% 45%, 25% 69%, 39% 36%, 52% 68%, 67% 42%, 81% 72%, 92% 49%, 100% 61%, 100% 100%, 0 100%)",
          }}
        />
      </div>

      {/* winding road */}
      <svg
        className="pointer-events-none absolute bottom-0 left-1/2 h-[55%] w-[110%] -translate-x-1/2"
        viewBox="0 0 1200 500"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M620 500 C400 420 830 365 585 290 C420 240 720 190 600 120 C535 82 590 45 610 0"
          fill="none"
          stroke="#D8B56B"
          strokeWidth="58"
          strokeLinecap="round"
        />
        <path
          d="M620 500 C400 420 830 365 585 290 C420 240 720 190 600 120 C535 82 590 45 610 0"
          fill="none"
          stroke="#8C633B"
          strokeWidth="4"
          strokeDasharray="12 14"
          strokeLinecap="round"
          opacity="0.65"
        />
      </svg>

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col px-6 py-8 md:px-10 lg:px-16">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/south-america"
            className="inline-flex rotate-[-1deg] items-center border-2 border-[#2D3D31] bg-[#F0DFB8] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] shadow-[4px_4px_0_#2D3D31] transition hover:-translate-y-1"
          >
            ← South America
          </Link>

          <span className="hidden text-xs font-black uppercase tracking-[0.2em] text-[#6E4A2F] md:block">
            Deep Dive No. 02
          </span>
        </div>

        <div className="flex flex-1 items-center py-16 md:py-20">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-black uppercase tracking-[0.24em] text-[#8B3E2F] md:text-sm">
              {eyebrow}
            </p>

            <div className="mb-4 inline-block rotate-[-2deg] bg-[#B64935] px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-[#F6E7BE] shadow-[6px_6px_0_#28382D]">
              Tawantinsuyu
            </div>

            <h1
              className="max-w-4xl text-6xl font-black uppercase leading-[0.84] tracking-[-0.055em] text-[#28271E] md:text-8xl lg:text-[9rem]"
              style={{
                textShadow: "3px 3px 0 rgba(139,62,47,0.16)",
              }}
            >
              {title}
            </h1>

            <p className="mt-6 rotate-[-1deg] text-xl font-black uppercase tracking-[0.08em] text-[#8B3E2F] md:text-3xl">
              {subtitle}
            </p>

            <p className="mt-8 max-w-2xl text-base font-bold leading-7 text-[#3F392C] md:text-lg">
              {intro}
            </p>

            <div className="mt-9 max-w-2xl rotate-[1deg] border-[3px] border-[#28271E] bg-[#F1D98E] p-5 shadow-[7px_7px_0_#28271E] md:p-6">
              <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-[#8B3E2F]">
                Your challenge
              </p>

              <p className="text-xl font-black leading-tight md:text-2xl">
                {openingQuestion}
              </p>
            </div>

            <a
              href="#begin-journey"
              className="mt-8 inline-flex rotate-[-1deg] items-center gap-3 bg-[#1E4C3A] px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-[#F5E4B8] shadow-[6px_6px_0_#B64935] transition hover:-translate-y-1"
            >
              Begin the journey
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="relative z-20 flex justify-end pb-4">
          <div className="rotate-[2deg] border-2 border-[#28271E] bg-[#EBC45C] px-4 py-2 text-xs font-black uppercase tracking-[0.15em] shadow-[4px_4px_0_#28271E]">
            Follow the road ↓
          </div>
        </div>
      </div>
    </section>
  );
}
