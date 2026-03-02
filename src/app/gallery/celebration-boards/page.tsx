import Link from "next/link";
import Image from "next/image";
import { celebrationBoards } from "@/data/celebrationBoardsManifest";

function formatDate(dateStr: string) {
  const [y, m, d] = dateStr.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  return dt.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function CelebrationBoardsIndexPage() {
  return (
    <main className="bg-slate-50 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Celebration Boards
          </h1>
          <p className="mt-2 text-gray-700">
            Photos from our monthly displays and school celebrations.
          </p>

          <div className="mt-4">
            <Link href="/gallery" className="text-sm underline text-gray-700">
              ← Back to Gallery
            </Link>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {celebrationBoards.map((board) => {
            const cover = board.images[0]?.src;

            return (
              <Link
                key={board.slug}
                href={`/gallery/celebration-boards/${board.slug}`}
                className="group rounded-2xl bg-white shadow border border-gray-200 overflow-hidden hover:shadow-md transition"
              >
                <div className="relative aspect-[4/3] bg-gray-100">
                  {cover ? (
                    <Image
                      src={cover}
                      alt={`${board.title} cover`}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-500">
                      No images yet
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <div className="text-xs text-gray-500">
                    {formatDate(board.date)}
                  </div>
                  <div className="mt-1 font-semibold text-gray-900">
                    {board.title}
                  </div>
                  <div className="mt-1 text-sm text-gray-600">
                    {board.images.length} image
                    {board.images.length === 1 ? "" : "s"}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
