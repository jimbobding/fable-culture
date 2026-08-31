import Link from "next/link";

export type CultureFeature = {
  id: string;
  title: string;
  description: string;
  href: string;
  emoji: string;
  label?: string;
};

type Props = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  features: CultureFeature[];
};

export default function CultureFeatureCards({
  eyebrow = "Explore & Create",
  title = "Experience the culture",
  intro = "Discover culture through food, art and creative activities.",
  features,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-[#f4eddf] px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.4em] text-[#a03932]">
            {eyebrow}
          </p>

          <h2 className="mt-4 text-5xl font-black text-[#202721] md:text-7xl">
            {title}
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[#657067]">{intro}</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <Link
              key={feature.id}
              href={feature.href}
              className="group relative min-h-[340px] overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-10"
            >
              <span className="absolute right-7 top-4 font-serif text-8xl font-black text-[#a03932]/5">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-[#d6b76f]/15 transition duration-500 group-hover:scale-125" />

              <div className="relative flex h-full flex-col">
                <span className="text-6xl">{feature.emoji}</span>

                {feature.label && (
                  <p className="mt-8 text-xs font-black uppercase tracking-[0.3em] text-[#a03932]">
                    {feature.label}
                  </p>
                )}

                <h3 className="mt-3 text-3xl font-black text-[#263129] sm:text-4xl">
                  {feature.title}
                </h3>

                <p className="mt-4 max-w-lg text-lg leading-relaxed text-[#657067]">
                  {feature.description}
                </p>

                <div className="mt-auto pt-8">
                  <span className="inline-flex items-center gap-3 font-black uppercase tracking-[0.15em] text-[#a03932]">
                    Explore
                    <span className="transition-transform group-hover:translate-x-2">
                      →
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
