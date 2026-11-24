"use client";

export type MuseumFlag = {
  id: string;
  name: string;
  image: string;
};

type FlagGalleryProps = {
  title: string;
  description: string;
  flags: MuseumFlag[];
  wallColour?: string;
  onSelectFlag?: (flag: MuseumFlag) => void;
};

export default function FlagGallery({
  title,
  description,
  flags,
  wallColour = "#e8ddc7",
  onSelectFlag,
}: FlagGalleryProps) {
  return (
    <section
      className="relative overflow-hidden rounded-[28px] border-[6px] border-[#574536] text-[#302b27] shadow-xl sm:rounded-[48px]"
      style={{ backgroundColor: wallColour }}
    >
      {/* WALL TEXTURE */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 8px, rgba(255,255,255,.15) 9px)",
        }}
      />

      <div className="relative px-5 pb-24 pt-12 sm:px-10">
        {/* ROOM HEADING */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[.35em] text-[#866542]">
            The Pacific Collection
          </p>

          <h2 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-6xl">
            {title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed">
            {description}
          </p>

          <div className="mx-auto mt-8 h-[2px] w-28 bg-[#866542]" />
        </div>

        {/* FLAGS ON THE WALL */}
        <div className="mt-16 grid gap-x-8 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
          {flags.map((flag) => (
            <div key={flag.id} className="group relative text-center">
              {/* SPOTLIGHT */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-12 left-1/2 h-64 w-72 -translate-x-1/2 rounded-full bg-white/40 blur-3xl"
              />

              <button
                type="button"
                onClick={() => onSelectFlag?.(flag)}
                disabled={!onSelectFlag}
                className="relative mx-auto block w-full max-w-[340px] text-left disabled:cursor-default enabled:transition-transform enabled:duration-200 enabled:hover:-translate-y-2 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4"
                aria-label={`Investigate the flag of ${flag.name}`}
              >
                {/* WOODEN FRAME */}
                <div className="rounded-sm border-[10px] border-[#67452f] bg-[#67452f] shadow-[5px_10px_18px_rgba(40,25,15,.35)]">
                  <div className="border-[4px] border-[#b68b53] bg-[#fff9eb] p-3">
                    <div className="flex aspect-[3/2] items-center justify-center bg-white">
                      <img
                        src={flag.image}
                        alt={`Flag of ${flag.name}`}
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* BRASS MUSEUM PLAQUE */}
                <div className="mx-auto mt-5 w-fit max-w-full rounded-sm border border-[#9b7135] bg-[#d6b36b] px-5 py-3 text-center shadow-md">
                  <p className="text-sm font-black uppercase tracking-wide">
                    {flag.name}
                  </p>

                  <p className="mt-1 text-[10px] font-bold uppercase tracking-widest">
                    {onSelectFlag ? "Explore this flag ↗" : "Museum exhibit"}
                  </p>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* WOODEN SKIRTING / FLOOR */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-12 w-full border-t-[7px] border-[#76543b] bg-[#a77a50]"
      >
        <div className="h-2 border-b border-[#e3bb85]/60" />
      </div>
    </section>
  );
}
