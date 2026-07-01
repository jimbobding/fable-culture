import Link from "next/link";

export default function TimetablingHomePage() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8">
      <div className="mx-auto max-w-5xl">
        <section className="rounded-3xl bg-white p-6 shadow-sm">
          <h1 className="text-3xl font-bold">Timetabling</h1>
          <p className="mt-2 text-slate-600">
            Timetable tools, cover duties and daily cover planning.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link
              href="/staff/timetabling/timetable"
              className="rounded-2xl border bg-white p-5 hover:bg-slate-50"
            >
              <h2 className="text-xl font-bold">Staff Timetable</h2>
              <p className="mt-1 text-slate-600">
                View staff sessions and breaks.
              </p>
            </Link>

            <Link
              href="/staff/timetabling/covers"
              className="rounded-2xl border bg-white p-5 hover:bg-slate-50"
            >
              <h2 className="text-xl font-bold">Weekly Covers</h2>
              <p className="mt-1 text-slate-600">See planned cover duties.</p>
            </Link>

            <Link
              href="/staff/timetabling/cover-board"
              className="rounded-2xl border bg-white p-5 hover:bg-slate-50"
            >
              <h2 className="text-xl font-bold">Cover Board</h2>
              <p className="mt-1 text-slate-600">Plan daily changes.</p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
