import type {
  ArtRoomProject,
  CreativeCultureFeature,
  CultureGalleryTheme,
} from "./types";

type Props = {
  regionName: string;
  intro?: string;
  creativeCulture?: CreativeCultureFeature[];
  artRoom?: ArtRoomProject[];
  theme: CultureGalleryTheme;
};

export default function CultureGallery({
  regionName,
  intro,
  creativeCulture = [],
  artRoom = [],
  theme,
}: Props) {
  const colour = (index: number) => theme.palette[index % theme.palette.length];

  return (
    <>
      {/* =====================================================
          HERO — FREE-FLOWING STUDIO STYLE
      ===================================================== */}
      <section className="relative mx-auto max-w-7xl pb-20 pt-12 sm:pb-28 sm:pt-20">
        {/* DECORATIVE COLOUR SHAPES */}
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

      {/* =====================================================
          CREATIVE CULTURE
          Only exists when regional data exists
      ===================================================== */}
      {creativeCulture.length > 0 && (
        <section className="relative mx-auto max-w-7xl py-20 sm:py-28">
          <div className="relative mb-16 sm:mb-24">
            <span
              className="absolute -left-5 -top-7 h-20 w-20 rounded-full opacity-25"
              style={{ backgroundColor: colour(4) }}
            />

            <p
              className="relative text-xs font-black uppercase tracking-[0.35em]"
              style={{ color: colour(2) }}
            >
              Explore the region
            </p>

            <h2
              className="relative mt-3 text-4xl font-black tracking-tight sm:text-6xl"
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

          {/* FREE-FLOWING FEATURES */}
          <div className="space-y-24 sm:space-y-32">
            {creativeCulture.map((feature, index) => {
              const featureColour = colour(index);
              const reverse = index % 2 === 1;

              return (
                <article
                  key={feature.id}
                  className={`relative flex flex-col gap-8 lg:items-center lg:gap-16 ${
                    reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                  }`}
                >
                  {/* ART */}
                  {feature.image && (
                    <div
                      className={`relative lg:w-[55%] ${
                        index % 3 === 0
                          ? "lg:-rotate-2"
                          : index % 3 === 1
                            ? "lg:rotate-2"
                            : "lg:-rotate-1"
                      }`}
                    >
                      {/* COLOUR BEHIND IMAGE */}
                      <div
                        className="absolute -inset-4 -z-10 translate-x-4 translate-y-4 rounded-[8%_3%_7%_4%] opacity-30 sm:-inset-6"
                        style={{
                          backgroundColor: featureColour,
                        }}
                      />

                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="max-h-[650px] w-full object-cover"
                      />
                    </div>
                  )}

                  {/* WORDS */}
                  <div
                    className={`relative ${
                      feature.image ? "lg:w-[40%]" : "max-w-3xl"
                    }`}
                  >
                    <span
                      className="absolute -left-8 -top-8 h-16 w-16 rounded-full opacity-20"
                      style={{ backgroundColor: colour(index + 2) }}
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
                      className="relative mt-3 text-3xl font-black leading-tight sm:text-5xl"
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
                          className="mt-2 h-3 w-3 shrink-0 rounded-full"
                          style={{ backgroundColor: colour(index + 1) }}
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
          Completely disappears when there is no current project
      ===================================================== */}
      {artRoom.length > 0 && (
        <section className="relative mx-auto max-w-7xl py-24 sm:py-32">
          {/* BIG BACKGROUND SPLASH */}
          <div
            className="pointer-events-none absolute -left-[20%] top-20 h-[70%] w-[85%] -rotate-3 rounded-[45%_55%_48%_52%] opacity-[0.08]"
            style={{ backgroundColor: colour(2) }}
          />

          <div className="relative">
            <p
              className="text-xs font-black uppercase tracking-[0.35em]"
              style={{ color: colour(4) }}
            >
              Right now
            </p>

            <h2
              className="mt-3 max-w-4xl text-5xl font-black leading-[0.95] sm:text-7xl"
              style={{ color: theme.text }}
            >
              What's happening
              <br />
              <span className="font-serif italic" style={{ color: colour(2) }}>
                in the Art Room?
              </span>
            </h2>
          </div>

          <div className="relative mt-20 space-y-24">
            {artRoom.map((project, index) => (
              <article
                key={project.id}
                className={`relative max-w-5xl ${
                  index % 2 === 1 ? "ml-auto" : ""
                }`}
              >
                <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
                  {/* OPTIONAL PROJECT IMAGE */}
                  {project.image && (
                    <div
                      className={`relative ${
                        index % 2 === 0 ? "-rotate-2" : "rotate-2"
                      }`}
                    >
                      <div
                        className="absolute -inset-4 -z-10 translate-x-3 translate-y-3 opacity-25"
                        style={{
                          backgroundColor: colour(index + 3),
                        }}
                      />

                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full object-cover"
                      />
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
                      className="mt-2 text-3xl font-black sm:text-5xl"
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
                              className="mr-2 inline-block h-2 w-2 rounded-full"
                              style={{
                                backgroundColor: colour(materialIndex + index),
                              }}
                            />
                            {material}
                          </span>
                        ))}
                      </div>
                    )}

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
                                  className="text-xl font-black"
                                  style={{
                                    color: colour(instructionIndex + index),
                                  }}
                                >
                                  {instructionIndex + 1}
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
