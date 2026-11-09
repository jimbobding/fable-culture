import Link from "next/link";
import Image from "next/image";

const imageBase = "/images/continents/oceania/countries";

const landscapes = [
  {
    title: "Australia",
    subtitle: "Red earth & ancient landscapes",
    image: `${imageBase}/australia/uluru-red-centre-landscape.jpg`,
    colour: "#C65B32",
    number: "01",
  },
  {
    title: "Pacific Islands",
    subtitle: "Turquoise oceans & island cultures",
    image: `${imageBase}/fiji/fiji-yasawa-islands-landscape.jpg`,
    colour: "#087E8B",
    number: "02",
  },
  {
    title: "Papua New Guinea",
    subtitle: "Rainforests & mountain highlands",
    image: `${imageBase}/papua-new-guinea/papua-new-guinea-highlands-landscape.jpg`,
    colour: "#205D48",
    number: "03",
  },
  {
    title: "New Zealand",
    subtitle: "Mountains, forests & Māori heritage",
    image: `${imageBase}/new-zealand/new-zealand-milford-sound-landscape.jpg`,
    colour: "#345D68",
    number: "04",
  },
];

const countries = [
  { name: "Australia", flag: "🇦🇺", group: "Australia" },
  { name: "Fiji", flag: "🇫🇯", group: "Melanesia" },
  { name: "Papua New Guinea", flag: "🇵🇬", group: "Melanesia" },
  { name: "Solomon Islands", flag: "🇸🇧", group: "Melanesia" },
  { name: "Vanuatu", flag: "🇻🇺", group: "Melanesia" },
  { name: "New Zealand", flag: "🇳🇿", group: "Polynesia" },
  { name: "Samoa", flag: "🇼🇸", group: "Polynesia" },
  { name: "Tonga", flag: "🇹🇴", group: "Polynesia" },
  { name: "Tuvalu", flag: "🇹🇻", group: "Polynesia" },
  { name: "Kiribati", flag: "🇰🇮", group: "Micronesia" },
  { name: "Nauru", flag: "🇳🇷", group: "Micronesia" },
  { name: "Palau", flag: "🇵🇼", group: "Micronesia" },
  { name: "Marshall Islands", flag: "🇲🇭", group: "Micronesia" },
  {
    name: "Federated States of Micronesia",
    flag: "🇫🇲",
    group: "Micronesia",
  },
];

const adventures = [
  {
    number: "01",
    title: "Across the Outback",
    subtitle: "THE DEEP DIVE",
    description:
      "Travel across Australia's Red Centre. Discover extraordinary landscapes, First Nations histories, wildlife and the stories of the land.",
    colour: "#C65B32",
    icon: "🦘",
  },
  {
    number: "02",
    title: "Danger Zone",
    subtitle: "WILDLIFE EXPERIENCE",
    description:
      "Meet Australia's dangerous animals. Explore their habitats, learn how they survive and discover how to stay safe.",
    colour: "#087E8B",
    icon: "🐊",
  },
  {
    number: "03",
    title: "First Peoples",
    subtitle: "THEN & NOW",
    description:
      "Explore Aboriginal and Torres Strait Islander cultures, colonisation, resistance, survival and life in Australia today.",
    colour: "#205D48",
    icon: "🌿",
  },
  {
    number: "04",
    title: "Oceania Challenge",
    subtitle: "DRAG & DROP GAME",
    description:
      "Match animals, landmarks, foods and cultural traditions to the places they belong.",
    colour: "#D88A32",
    icon: "🧩",
  },
];

const features = [
  {
    title: "Culture Kitchen",
    eyebrow: "TASTE OCEANIA",
    description:
      "Discover recipes and flavours from across Australia and the Pacific.",
    icon: "🍳",
    colour: "#D88A32",
  },
  {
    title: "Culture Gallery",
    eyebrow: "ART & CREATIVITY",
    description:
      "Explore art, music, design and creative traditions from across the region.",
    icon: "🎨",
    colour: "#087E8B",
  },
  {
    title: "Region at Fable",
    eyebrow: "OUR SCRAPBOOK",
    description:
      "See what Fable learners have been making, exploring and discovering.",
    icon: "📸",
    colour: "#205D48",
  },
  {
    title: "Student Discoveries",
    eyebrow: "LEARNER RESOURCES",
    description:
      "Explore student-created resources, projects and discoveries.",
    icon: "🔎",
    colour: "#C65B32",
  },
  {
    title: "Religion & Worldviews",
    eyebrow: "BELIEFS & COMMUNITIES",
    description:
      "Discover the different religions, beliefs and worldviews found across Oceania.",
    icon: "🌏",
    colour: "#345D68",
  },
  {
    title: "History & Voyages",
    eyebrow: "REGIONAL TIMELINE",
    description:
      "Journey through ocean navigation, settlement, colonisation and modern history.",
    icon: "🧭",
    colour: "#8B5439",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10">
      <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-[#C65B32]">
        {eyebrow}
      </p>
      <h2 className="max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#203B38]/75 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export default function OceaniaPage() {
  return (
    <main className="overflow-x-hidden bg-[#F7EBD5] text-[#173C38]">
      {/* HERO */}
      <section className="relative min-h-[90vh] overflow-hidden bg-[#087E8B] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(125deg,#087E8B_0%,#0B7180_43%,#C65B32_100%)]" />

        <div className="pointer-events-none absolute -right-32 -top-40 h-[600px] w-[600px] rounded-full border-[75px] border-[#F4B14B]/35" />
        <div className="pointer-events-none absolute -bottom-56 -left-32 h-[500px] w-[500px] rounded-full border-[70px] border-white/10" />

        <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col px-5 pb-14 pt-7 sm:px-8 lg:px-10">
          <nav className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="text-xs font-black uppercase tracking-[0.25em] text-white/85 transition hover:text-white"
            >
              ← Fable Culture
            </Link>
            <span className="text-xs font-black uppercase tracking-[0.25em] text-white/70">
              Explore the world
            </span>
          </nav>

          <div className="flex flex-1 flex-col justify-center py-20">
            <p className="mb-6 text-xs font-black uppercase tracking-[0.5em] text-[#FFE0A1]">
              The Pacific · Australia · Aotearoa
            </p>

            <h1 className="max-w-full text-[clamp(4rem,14vw,12rem)] font-black uppercase leading-[0.78] tracking-[-0.075em]">
              OCEANIA
            </h1>

            <p className="mt-9 max-w-2xl text-xl font-semibold leading-relaxed sm:text-2xl">
              From turquoise oceans to red deserts.
              <br />
              A world of islands, landscapes and living cultures.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#explore"
                className="bg-[#F4B14B] px-7 py-4 text-sm font-black uppercase tracking-widest text-[#173C38] transition hover:bg-white"
              >
                Start exploring ↓
              </a>
              <a
                href="#adventures"
                className="border-2 border-white px-7 py-4 text-sm font-black uppercase tracking-widest transition hover:bg-white hover:text-[#173C38]"
              >
                Choose an adventure
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-2 border-t border-white/30 pt-5 text-xs font-bold uppercase tracking-widest text-white/80">
            <span>14 independent countries</span>
            <span>One vast ocean</span>
            <span>Countless stories</span>
          </div>
        </div>
      </section>

      {/* FOUR LANDSCAPES */}
      <section id="explore" className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="01 / Land & ocean"
            title="Four worlds. One Oceania."
            description="From Australia's vast interior to the islands of the Pacific, Oceania is home to remarkable landscapes and many distinct cultures."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {landscapes.map((place) => (
              <article
                key={place.title}
                className="group relative min-h-[330px] overflow-hidden bg-[#173C38] sm:min-h-[400px]"
              >
                <Image
                  src={place.image}
                  alt={place.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9">
                  <span
                    className="mb-4 inline-block px-3 py-1 text-xs font-black"
                    style={{ backgroundColor: place.colour }}
                  >
                    {place.number}
                  </span>
                  <h3 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
                    {place.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-white/85 sm:text-base">
                    {place.subtitle}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <section className="bg-[#173C38] px-5 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-[#F4B14B]">
            02 / Find your way
          </p>
          <h2 className="text-4xl font-black uppercase tracking-tight sm:text-6xl">
            Explore the map
          </h2>
          <p className="mt-5 max-w-2xl text-white/75">
            Discover Australia, New Zealand and the island nations of the Pacific.
            Our interactive map will let you explore each country.
          </p>

          <div className="relative mt-10 flex min-h-[360px] items-center justify-center overflow-hidden border-2 border-dashed border-white/30 bg-[#0A6570] p-8 text-center sm:min-h-[460px]">
            <div className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1.5px, transparent 1.5px)",
                backgroundSize: "32px 32px",
              }}
            />
            <div className="relative">
              <div className="text-7xl">🗺️</div>
              <h3 className="mt-5 text-2xl font-black uppercase">
                Interactive Oceania Map
              </h3>
              <p className="mx-auto mt-3 max-w-md text-white/75">
                Coming next — clickable countries, island groups and regional
                exploration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COUNTRIES */}
      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="03 / Discover the region"
            title="Explore the countries"
            description="Meet the countries of Oceania, from Australia's vast landscapes to some of the world's smallest island nations."
          />

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {countries.map((country) => (
              <div
                key={country.name}
                className="flex min-h-[125px] items-center gap-4 border-b-4 border-[#087E8B] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-4xl" aria-hidden="true">
                  {country.flag}
                </span>
                <div>
                  <h3 className="text-lg font-black">{country.name}</h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-[#087E8B]">
                    {country.group}
                  </p>
                  <p className="mt-2 text-xs text-[#173C38]/50">
                    Country page coming soon
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVENTURES */}
      <section id="adventures" className="bg-[#E9D2AB] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="04 / Learn by exploring"
            title="Choose your adventure"
            description="Travel, investigate, discover and test your knowledge with interactive Oceania experiences."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {adventures.map((adventure) => (
              <article
                key={adventure.title}
                className="relative overflow-hidden bg-[#F7EBD5] p-7 shadow-md sm:p-10"
                style={{ borderTop: `10px solid ${adventure.colour}` }}
              >
                <div className="mb-8 flex items-start justify-between">
                  <span className="text-6xl">{adventure.icon}</span>
                  <span className="text-5xl font-black text-[#173C38]/10">
                    {adventure.number}
                  </span>
                </div>
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#C65B32]">
                  {adventure.subtitle}
                </p>
                <h3 className="mt-3 text-3xl font-black uppercase tracking-tight sm:text-4xl">
                  {adventure.title}
                </h3>
                <p className="mt-5 max-w-lg leading-relaxed text-[#173C38]/75">
                  {adventure.description}
                </p>
                <div className="mt-8 border-t border-[#173C38]/15 pt-5 text-xs font-black uppercase tracking-widest text-[#087E8B]">
                  Interactive experience coming soon
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SHARED FEATURE PLACEHOLDERS */}
      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="05 / Discover more"
            title="Oceania at Fable"
            description="Explore food, art, history, worldviews and student-created work. These sections will connect to our existing Fable Culture systems."
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="flex min-h-[280px] flex-col bg-white p-7 shadow-sm"
                style={{ borderTop: `8px solid ${feature.colour}` }}
              >
                <div className="text-5xl">{feature.icon}</div>
                <p className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-[#C65B32]">
                  {feature.eyebrow}
                </p>
                <h3 className="mt-2 text-2xl font-black uppercase">
                  {feature.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-[#173C38]/75">
                  {feature.description}
                </p>
                <p className="mt-6 text-xs font-black uppercase tracking-wider text-[#087E8B]">
                  Coming soon
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#173C38] px-5 py-12 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-2xl font-black uppercase tracking-tight">
              Oceania
            </p>
            <p className="mt-2 text-sm text-white/65">
              A world of islands, landscapes and living cultures.
            </p>
          </div>
          <Link
            href="/"
            className="text-xs font-black uppercase tracking-widest text-[#F4B14B] hover:text-white"
          >
            ← Back to Fable Culture
          </Link>
        </div>
      </footer>
    </main>
  );
}
