import { notFound } from "next/navigation";

const ukCountries = {
  england: {
    title: "England",
    description: "Home to London and famous for history and culture.",
  },
  scotland: {
    title: "Scotland",
    description: "Known for mountains, castles, and strong traditions.",
  },
  wales: {
    title: "Wales",
    description: "Famous for its language, music, and community spirit.",
  },
  "northern-ireland": {
    title: "Northern Ireland",
    description: "Part of the island of Ireland with rich history.",
  },
};

type Props = {
  params: Promise<{ countryKey: string }>;
};

export default async function UKCountryPage({ params }: Props) {
  const { countryKey } = await params; // <-- await params

  const country = ukCountries[countryKey as keyof typeof ukCountries];
  if (!country) notFound();

  return (
    <main style={{ padding: 40 }}>
      <h1>{country.title}</h1>
      <p>{country.description}</p>
    </main>
  );
}
