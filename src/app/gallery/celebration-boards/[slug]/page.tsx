import Link from "next/link";
import { celebrationBoards } from "@/data/celebrationBoardsManifest";
import RotatableImageCard from "../components/RotatableImageCard";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

function formatDate(dateStr: string) {
  const [y, m, d] = dateStr.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  return dt.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default async function CelebrationBoardPage({ params }: Props) {
  const { slug } = await params;
  const cleanSlug = decodeURIComponent(slug);

  const board = celebrationBoards.find((b) => b.slug === cleanSlug);
  if (!board) return notFound();

  return (
    <main className="bg-slate-50 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/gallery/celebration-boards"
          className="text-sm underline text-gray-700"
        >
          ← Back to Celebration Boards
        </Link>

        <div className="mt-4">
          <p className="text-xs uppercase tracking-wide text-gray-500">
            {board.header}
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            {board.title}
          </h1>

          <p className="mt-2 text-gray-700">{formatDate(board.date)}</p>

          {board.description ? (
            <p className="mt-2 max-w-2xl text-gray-700">{board.description}</p>
          ) : null}
        </div>

        {board.images.length === 0 ? (
          <p className="mt-8 text-gray-700">No images have been added yet.</p>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {board.images.map((img) => (
              <RotatableImageCard
                key={img.src}
                src={img.src}
                alt={img.caption ? img.caption : board.title}
                caption={img.caption}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return celebrationBoards.map((b) => ({ slug: b.slug }));
}
