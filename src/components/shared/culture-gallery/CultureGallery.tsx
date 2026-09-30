import type {
  ArtRoomProject,
  CreativeCultureFeature,
  CultureGalleryTheme,
  CultureGalleryPresentation,
} from "./types";

type Props = {
  regionName: string;
  intro?: string;
  creativeCulture?: CreativeCultureFeature[];
  artRoom?: ArtRoomProject[];
  theme: CultureGalleryTheme;
  presentation?: CultureGalleryPresentation;
};

export default function CultureGallery({
  regionName,
  intro,
  creativeCulture = [],
  artRoom = [],
  theme,
  presentation,
}: Props) {
  const colour = (index: number) => theme.palette[index % theme.palette.length];

  /*
    ============================================================
    PRESENTATION CONTROLS

    If no presentation is supplied, everything falls back to the
    original Culture Gallery appearance.

    This keeps East Asia unchanged while allowing regions such as
    South America to have a much stronger visual identity.
    ============================================================
  */

  const isPoster = presentation?.heroStyle === "poster";
  const isStacked = presentation?.headingStyle === "stacked";
  const isPrint = presentation?.imageStyle === "print";
  const isFreeform = presentation?.layoutStyle === "freeform";
  const hasTextilePattern = presentation?.patternStyle === "textile";
  const isMural = presentation?.sectionStyle === "mural";

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      {!isPoster && (
        <section className="relative mx-auto max-w-7xl pb-20 pt-12 sm:pb-28 sm:pt-20">
          <div
            className="pointer-events-none absolute -left-20 top-2 h-52 w-52 rounded-full opacity-20 blur-[1px] sm:h-72 sm:w-72"
            style={{
              backgroundColor: colour(1),
            }}
          />

          <div
            className="pointer-events-none absolute right-[4%] top-10 h-32 w-32 rotate-12 rounded-[38%_62%_55%_45%] opacity-20 sm:h-52 sm:w-52"
            style={{
              backgroundColor: colour(2),
            }}
          />

          <div
            className="pointer-events-none absolute right-[24%] top-72 h-20 w-48 -rotate-6 rounded-[50%] opacity-20"
            style={{
              backgroundColor: colour(0),
            }}
          />

          <div className="relative">
            <p
              className="ml-1 text-xs font-black uppercase tracking-[0.45em]"
              style={{ color: colour(0) }}
            >
              Culture Gallery
            </p>

            <h1
              className="mt-5 max-w-5xl text-6xl font-black leading-[0.82] tracking-[-0.06em] sm:text-8xl lg:text-[9rem]"
              style={{ color: theme.text }}
            >
              ART
              <span
                className="ml-3 inline-block -rotate-3 font-serif italic sm:ml-6"
                style={{ color: colour(3) }}
              >
                &
              </span>
              <br />
              <span className="relative">
                CREATIVITY
                <span
                  className="absolute -bottom-3 left-[4%] -z-10 h-5 w-[88%] -rotate-2 rounded-full opacity-60"
                  style={{ backgroundColor: colour(1) }}
                />
              </span>
            </h1>

            <div className="mt-12 flex flex-col gap-7 sm:ml-[22%] sm:max-w-2xl">
              <p
                className="text-xl leading-9 sm:text-2xl"
                style={{ color: theme.mutedText }}
              >
                {intro ??
                  `Explore art, craft, design and creative traditions from across ${regionName}.`}
              </p>

              <div className="flex items-center gap-3">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: colour(0) }}
                />

                <span
                  className="h-3 w-8 rounded-full"
                  style={{ backgroundColor: colour(1) }}
                />

                <span
                  className="h-3 w-5 rounded-full"
                  style={{ backgroundColor: colour(2) }}
                />

                <span
                  className="h-3 w-12 rounded-full"
                  style={{ backgroundColor: colour(3) }}
                />

                <span
                  className="h-3 w-4 rounded-full"
                  style={{ backgroundColor: colour(4) }}
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          POSTER HERO
          Used by South America
      ===================================================== */}

      {isPoster && (
        <section className="relative mx-auto max-w-7xl overflow-hidden pb-24 pt-10 sm:pb-32 sm:pt-16">
          {/* GIANT BACKGROUND LETTERING */}

          <div
            className="pointer-events-none absolute -right-5 top-0 select-none text-[9rem] font-black leading-none opacity-[0.055] sm:text-[15rem] lg:text-[20rem]"
            style={{ color: colour(2) }}
          >
            SA
          </div>

          {/* PAINT / PAPER SHAPES */}

          <div
            className="pointer-events-none absolute -left-10 top-32 h-36 w-36 -rotate-12 rounded-[42%_58%_35%_65%]"
            style={{ backgroundColor: colour(1) }}
          />

          <div
            className="pointer-events-none absolute right-[6%] top-[37%] h-20 w-52 rotate-6 rounded-[65%_35%_60%_40%]"
            style={{ backgroundColor: colour(4) }}
          />

          <div
            className="pointer-events-none absolute bottom-32 left-[43%] h-24 w-24 rotate-12 rounded-full opacity-80"
            style={{ backgroundColor: colour(2) }}
          />

          <div
            className="pointer-events-none absolute bottom-10 right-[18%] h-10 w-44 -rotate-3"
            style={{ backgroundColor: colour(0) }}
          />

          <div className="relative z-10">
            {/* LITTLE POSTER LABEL */}

            <div
              className="mb-10 inline-block -rotate-2 px-5 py-2 text-xs font-black uppercase tracking-[0.32em] shadow-md"
              style={{
                backgroundColor: colour(0),
                color: "#ffffff",
              }}
            >
              {regionName} • Culture Gallery
            </div>

            {/* MAIN TYPOGRAPHY */}

            <div className={isStacked ? "max-w-6xl" : "max-w-5xl"}>
              <p
                className="ml-[7%] text-[clamp(4.5rem,13vw,10rem)] font-black uppercase leading-[0.72] tracking-[-0.075em]"
                style={{ color: theme.text }}
              >
                ART
              </p>

              <p
                className="-mt-1 ml-[35%] font-serif text-[clamp(3.5rem,9vw,8rem)] italic leading-[0.78]"
                style={{ color: colour(3) }}
              >
                lives
              </p>

              <p
                className="-mt-2 text-[clamp(5rem,15vw,12rem)] font-black uppercase leading-[0.7] tracking-[-0.085em]"
                style={{ color: colour(2) }}
              >
                HERE
              </p>
            </div>

            {/* INTRO */}

            <div className="mt-14 grid gap-10 md:grid-cols-[1.35fr_0.65fr] md:items-end">
              <p
                className="max-w-2xl text-lg font-medium leading-8 sm:text-xl"
                style={{ color: theme.mutedText }}
              >
                {intro ??
                  `Explore art, craft, design and creative traditions from across ${regionName}.`}
              </p>

              <div className="md:pb-2 md:text-right">
                <p
                  className="text-xs font-black uppercase tracking-[0.35em]"
                  style={{ color: colour(0) }}
                >
                  Explore • Create • Discover
                </p>

                <p
                  className="mt-3 text-2xl font-black uppercase"
                  style={{ color: theme.text }}
                >
                  {regionName}
                </p>
              </div>
            </div>
          </div>

          {/* TEXTILE / GRAPHIC BAND */}

          {hasTextilePattern && (
            <div className="relative z-10 mt-16 overflow-hidden">
              <div className="flex min-w-max items-center gap-3">
                {Array.from({ length: 22 }).map((_, index) => (
                  <div
                    key={index}
                    className={
                      index % 3 === 0
                        ? "h-5 w-5 rotate-45"
                        : index % 3 === 1
                          ? "h-5 w-10 -skew-x-12"
                          : "h-5 w-5 rounded-full"
                    }
                    style={{
                      backgroundColor: colour(index),
                    }}
                  />
                ))}
              </div>

              <div
                className="mt-3 h-[5px] w-full"
                style={{ backgroundColor: colour(0) }}
              />
            </div>
          )}
        </section>
      )}

      {/* =====================================================
          CREATIVE CULTURE
      ===================================================== */}

      {creativeCulture.length > 0 && (
        <section
          className={`relative mx-auto max-w-7xl py-20 sm:py-28 ${
            isFreeform ? "lg:py-36" : ""
          }`}
        >
          {/* MURAL BACKGROUND WORD */}

          {isMural && (
            <div
              className="pointer-events-none absolute -left-10 top-4 select-none text-[6rem] font-black uppercase leading-none opacity-[0.045] sm:text-[10rem] lg:text-[14rem]"
              style={{ color: theme.text }}
            >
              CREATE
            </div>
          )}

          <div className="relative mb-16 sm:mb-24">
            <span
              className={
                isMural
                  ? "absolute -left-8 -top-10 h-20 w-44 -rotate-6 opacity-30"
                  : "absolute -left-5 -top-7 h-20 w-20 rounded-full opacity-25"
              }
              style={{ backgroundColor: colour(4) }}
            />

            <p
              className="relative text-xs font-black uppercase tracking-[0.35em]"
              style={{ color: colour(2) }}
            >
              Explore the region
            </p>

            <h2
              className={`relative mt-3 font-black tracking-tight ${
                isMural
                  ? "max-w-4xl text-5xl uppercase leading-[0.85] sm:text-7xl lg:text-8xl"
                  : "text-4xl sm:text-6xl"
              }`}
              style={{ color: theme.text }}
            >
              Creative Culture
            </h2>

            <p
              className="relative mt-5 max-w-xl text-lg leading-8"
              style={{ color: theme.mutedText }}
            >
              Art, craft, design and creative traditions from across{" "}
              {regionName}.
            </p>
          </div>

          <div
            className={
              isFreeform
                ? "space-y-32 sm:space-y-44"
                : "space-y-24 sm:space-y-32"
            }
          >
            {creativeCulture.map((feature, index) => {
              const featureColour = colour(index);
              const reverse = index % 2 === 1;

              return (
                <article
                  key={feature.id}
                  className={`relative flex flex-col gap-8 lg:items-center ${
                    isFreeform ? "lg:gap-20" : "lg:gap-16"
                  } ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} ${
                    isFreeform
                      ? index % 3 === 0
                        ? "lg:mr-[7%]"
                        : index % 3 === 1
                          ? "lg:ml-[10%]"
                          : "lg:mr-[3%] lg:ml-[5%]"
                      : ""
                  }`}
                >
                  {feature.image && (
                    <div
                      className={`relative ${
                        isFreeform ? "lg:w-[58%]" : "lg:w-[55%]"
                      } ${
                        index % 3 === 0
                          ? "lg:-rotate-2"
                          : index % 3 === 1
                            ? "lg:rotate-2"
                            : "lg:-rotate-1"
                      }`}
                    >
                      {/* PRINT BACKING */}

                      <div
                        className={`absolute -z-10 ${
                          isPrint
                            ? "-inset-3 translate-x-5 translate-y-5 rotate-2 sm:-inset-5"
                            : "-inset-4 translate-x-4 translate-y-4 rounded-[8%_3%_7%_4%] opacity-30 sm:-inset-6"
                        }`}
                        style={{
                          backgroundColor: featureColour,
                          opacity: isPrint ? 0.9 : 0.3,
                        }}
                      />

                      {/* SECOND PRINT LAYER */}

                      {isPrint && (
                        <div
                          className="absolute -inset-2 -z-20 -translate-x-4 translate-y-3 -rotate-3"
                          style={{
                            backgroundColor: colour(index + 2),
                          }}
                        />
                      )}

                      <div
                        className={
                          isPrint ? "bg-white p-3 shadow-xl sm:p-4" : ""
                        }
                      >
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className={`w-full object-cover ${
                            isPrint ? "max-h-[520px]" : "max-h-[650px]"
                          }`}
                        />

                        {isPrint && (
                          <div className="flex items-end justify-between gap-4 px-1 pb-1 pt-3">
                            <span
                              className="text-[10px] font-black uppercase tracking-[0.25em]"
                              style={{ color: theme.text }}
                            >
                              {feature.country ?? regionName}
                            </span>

                            <span
                              className="text-[10px] font-black"
                              style={{ color: featureColour }}
                            >
                              0{index + 1}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  <div
                    className={`relative ${
                      feature.image
                        ? isFreeform
                          ? "lg:w-[34%]"
                          : "lg:w-[40%]"
                        : "max-w-3xl"
                    }`}
                  >
                    <span
                      className={
                        isMural
                          ? "absolute -left-10 -top-8 h-5 w-32 -rotate-3"
                          : "absolute -left-8 -top-8 h-16 w-16 rounded-full opacity-20"
                      }
                      style={{
                        backgroundColor: colour(index + 2),
                        opacity: isMural ? 0.8 : 0.2,
                      }}
                    />

                    {feature.country && (
                      <p
                        className="relative text-xs font-black uppercase tracking-[0.3em]"
                        style={{ color: featureColour }}
                      >
                        {feature.country}
                      </p>
                    )}

                    <h3
                      className={`relative mt-3 font-black leading-tight ${
                        isMural
                          ? "text-4xl uppercase sm:text-6xl"
                          : "text-3xl sm:text-5xl"
                      }`}
                      style={{ color: theme.text }}
                    >
                      {feature.title}
                    </h3>

                    {feature.description && (
                      <p
                        className="relative mt-5 text-lg leading-8"
                        style={{ color: theme.mutedText }}
                      >
                        {feature.description}
                      </p>
                    )}

                    {feature.culturalNote && (
                      <div className="relative mt-7 flex gap-4">
                        <span
                          className={
                            isMural
                              ? "mt-3 h-1 w-10 shrink-0"
                              : "mt-2 h-3 w-3 shrink-0 rounded-full"
                          }
                          style={{
                            backgroundColor: colour(index + 1),
                          }}
                        />

                        <p
                          className="text-sm leading-7"
                          style={{ color: theme.text }}
                        >
                          {feature.culturalNote}
                        </p>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}

      {/* =====================================================
          ART ROOM
      ===================================================== */}

      {artRoom.length > 0 && (
        <section className="relative mx-auto max-w-7xl py-24 sm:py-32">
          {!isMural && (
            <div
              className="pointer-events-none absolute -left-[20%] top-20 h-[70%] w-[85%] -rotate-3 rounded-[45%_55%_48%_52%] opacity-[0.08]"
              style={{ backgroundColor: colour(2) }}
            />
          )}

          {isMural && (
            <>
              <div
                className="pointer-events-none absolute -right-10 top-8 select-none text-[7rem] font-black uppercase leading-none opacity-[0.045] sm:text-[11rem] lg:text-[15rem]"
                style={{ color: theme.text }}
              >
                MAKE
              </div>

              <div
                className="pointer-events-none absolute left-[8%] top-32 h-8 w-64 -rotate-3"
                style={{ backgroundColor: colour(1) }}
              />
            </>
          )}

          <div className="relative">
            <p
              className="text-xs font-black uppercase tracking-[0.35em]"
              style={{ color: colour(4) }}
            >
              Right now
            </p>

            <h2
              className={`mt-3 max-w-4xl font-black leading-[0.95] ${
                isMural
                  ? "text-5xl uppercase sm:text-7xl lg:text-8xl"
                  : "text-5xl sm:text-7xl"
              }`}
              style={{ color: theme.text }}
            >
              What&apos;s happening
              <br />
              <span
                className={isMural ? "font-black" : "font-serif italic"}
                style={{ color: colour(2) }}
              >
                in the Art Room?
              </span>
            </h2>
          </div>

          <div
            className={`relative mt-20 ${
              isFreeform ? "space-y-32" : "space-y-24"
            }`}
          >
            {artRoom.map((project, index) => (
              <article
                key={project.id}
                className={`relative max-w-5xl ${
                  index % 2 === 1 ? "ml-auto" : ""
                } ${isFreeform && index % 3 === 0 ? "lg:mr-[8%]" : ""}`}
              >
                <div
                  className={`grid gap-8 ${
                    project.image
                      ? "lg:grid-cols-[1fr_1.2fr] lg:items-center"
                      : ""
                  }`}
                >
                  {/* MAIN PROJECT IMAGE */}

                  {project.image && (
                    <div
                      className={`relative ${
                        index % 2 === 0 ? "-rotate-2" : "rotate-2"
                      }`}
                    >
                      <div
                        className={`absolute -z-10 ${
                          isPrint
                            ? "-inset-3 translate-x-5 translate-y-5 rotate-2"
                            : "-inset-4 translate-x-3 translate-y-3 opacity-25"
                        }`}
                        style={{
                          backgroundColor: colour(index + 3),
                          opacity: isPrint ? 0.9 : 0.25,
                        }}
                      />

                      {isPrint && (
                        <div
                          className="absolute -inset-2 -z-20 -translate-x-3 translate-y-2 -rotate-2"
                          style={{
                            backgroundColor: colour(index + 1),
                          }}
                        />
                      )}

                      <div className={isPrint ? "bg-white p-3 shadow-xl" : ""}>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full object-cover"
                        />

                        {isPrint && (
                          <div className="flex items-center justify-between px-1 pb-1 pt-3">
                            <span
                              className="text-[10px] font-black uppercase tracking-[0.22em]"
                              style={{ color: theme.text }}
                            >
                              Art Room
                            </span>

                            <span
                              className="text-[10px] font-black uppercase"
                              style={{ color: colour(index) }}
                            >
                              {project.country ?? regionName}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  <div>
                    {project.country && (
                      <p
                        className="text-xs font-black uppercase tracking-[0.25em]"
                        style={{ color: colour(index) }}
                      >
                        {project.country}
                      </p>
                    )}

                    <h3
                      className={`mt-2 font-black ${
                        isMural
                          ? "text-4xl uppercase leading-[0.9] sm:text-6xl"
                          : "text-3xl sm:text-5xl"
                      }`}
                      style={{ color: theme.text }}
                    >
                      {project.title}
                    </h3>

                    {project.description && (
                      <p
                        className="mt-5 text-lg leading-8"
                        style={{ color: theme.mutedText }}
                      >
                        {project.description}
                      </p>
                    )}

                    {project.task && (
                      <div className="mt-7">
                        <p
                          className="text-xs font-black uppercase tracking-[0.25em]"
                          style={{ color: colour(index + 1) }}
                        >
                          Try it
                        </p>

                        <p
                          className="mt-2 text-xl font-bold leading-8"
                          style={{ color: theme.text }}
                        >
                          {project.task}
                        </p>
                      </div>
                    )}

                    {/* EXAMPLE / INSPIRATION IMAGES */}

                    {project.exampleImages &&
                      project.exampleImages.length > 0 && (
                        <div className="mt-9">
                          <div className="flex items-center gap-3">
                            <p
                              className="text-xs font-black uppercase tracking-[0.25em]"
                              style={{ color: colour(index + 2) }}
                            >
                              Ideas & inspiration
                            </p>

                            <span
                              className="h-2 w-10 rounded-full opacity-70"
                              style={{
                                backgroundColor: colour(index + 3),
                              }}
                            />
                          </div>

                          <div
                            className={`mt-5 grid gap-6 ${
                              project.exampleImages.length === 1
                                ? "max-w-xl"
                                : project.exampleImages.length === 2
                                  ? "sm:grid-cols-2"
                                  : "sm:grid-cols-2 lg:grid-cols-3"
                            }`}
                          >
                            {project.exampleImages.map(
                              (exampleImage, exampleIndex) => (
                                <figure
                                  key={`${project.id}-example-${exampleIndex}`}
                                  className={`relative ${
                                    exampleIndex % 3 === 0
                                      ? "-rotate-1"
                                      : exampleIndex % 3 === 1
                                        ? "rotate-1"
                                        : "-rotate-[0.5deg]"
                                  }`}
                                >
                                  <div
                                    className="absolute -inset-2 -z-10 translate-x-2 translate-y-2 opacity-20"
                                    style={{
                                      backgroundColor: colour(
                                        index + exampleIndex + 1,
                                      ),
                                    }}
                                  />

                                  <div
                                    className={`overflow-hidden shadow-md ${
                                      isPrint ? "p-3" : "p-2"
                                    }`}
                                    style={{
                                      backgroundColor: theme.surface,
                                    }}
                                  >
                                    <img
                                      src={exampleImage.src}
                                      alt={
                                        exampleImage.alt ??
                                        `${project.title} example ${
                                          exampleIndex + 1
                                        }`
                                      }
                                      className="aspect-[4/3] w-full object-cover"
                                    />

                                    {exampleImage.caption && (
                                      <figcaption
                                        className="px-2 pb-2 pt-3 text-sm font-bold leading-6"
                                        style={{
                                          color: theme.mutedText,
                                        }}
                                      >
                                        {exampleImage.caption}
                                      </figcaption>
                                    )}
                                  </div>
                                </figure>
                              ),
                            )}
                          </div>
                        </div>
                      )}

                    {/* MATERIALS */}

                    {project.materials && project.materials.length > 0 && (
                      <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                        {project.materials.map((material, materialIndex) => (
                          <span
                            key={material}
                            className="relative text-sm font-black"
                            style={{
                              color: theme.text,
                            }}
                          >
                            <span
                              className={
                                isMural
                                  ? "mr-2 inline-block h-1 w-5"
                                  : "mr-2 inline-block h-2 w-2 rounded-full"
                              }
                              style={{
                                backgroundColor: colour(materialIndex + index),
                              }}
                            />

                            {material}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* INSTRUCTIONS */}

                    {project.instructions &&
                      project.instructions.length > 0 && (
                        <ol className="mt-8 space-y-4">
                          {project.instructions.map(
                            (instruction, instructionIndex) => (
                              <li
                                key={`${project.id}-${instructionIndex}`}
                                className="flex max-w-2xl gap-4"
                              >
                                <span
                                  className={`font-black ${
                                    isMural ? "text-3xl" : "text-xl"
                                  }`}
                                  style={{
                                    color: colour(instructionIndex + index),
                                  }}
                                >
                                  {String(instructionIndex + 1).padStart(
                                    2,
                                    "0",
                                  )}
                                </span>

                                <span
                                  className="leading-7"
                                  style={{
                                    color: theme.mutedText,
                                  }}
                                >
                                  {instruction}
                                </span>
                              </li>
                            ),
                          )}
                        </ol>
                      )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
