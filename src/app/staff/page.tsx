import Link from "next/link";

const futureModules = [
  {
    title: "Student Management",
    description:
      "Attendance, student information and day-to-day support tools.",
    icon: "👥",
  },
  {
    title: "Staff Profiles",
    description: "Staff skills, responsibilities and cover suitability.",
    icon: "🪪",
  },
  {
    title: "Reports",
    description: "Operational summaries, trends and useful staff reports.",
    icon: "📊",
  },
  {
    title: "Resources",
    description: "Shared documents, templates and internal resources.",
    icon: "📚",
  },
];

export default function StaffHomePage() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <section className="overflow-hidden rounded-3xl bg-slate-900 text-white shadow-lg">
          <div className="p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold">
                Internal Staff System
              </span>

              <span className="rounded-full bg-amber-300 px-3 py-1 text-sm font-semibold text-slate-900">
                Prototype
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
              Fable Staff System
            </h1>

            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">
              Internal tools designed to simplify timetabling, break cover
              planning and future staff operations.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/staff/timetabling"
                className="rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Open Timetabling
              </Link>

              <Link
                href="/"
                className="rounded-xl border border-white/20 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Back to Fable Culture
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <div className="mb-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Available module
            </p>

            <h2 className="mt-1 text-2xl font-bold">Staff tools</h2>
          </div>

          <Link
            href="/staff/timetabling"
            className="group block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="grid md:grid-cols-[1fr_auto]">
              <div className="p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-100 text-3xl">
                    🗓️
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-2xl font-bold">Timetabling</h3>

                      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">
                        Available
                      </span>
                    </div>

                    <p className="mt-2 max-w-2xl leading-relaxed text-slate-600">
                      View individual staff timetables, check planned break
                      covers and use the daily cover board when staff or pupils
                      are absent.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
                        Staff Timetable
                      </span>

                      <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
                        Break Covers
                      </span>

                      <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
                        Cover Board
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center border-t bg-indigo-50 px-8 py-5 md:border-l md:border-t-0">
                <span className="font-semibold text-indigo-800 transition group-hover:translate-x-1">
                  Open module →
                </span>
              </div>
            </div>
          </Link>
        </section>

        <section className="mt-10">
          <div className="mb-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Planned expansion
            </p>

            <h2 className="mt-1 text-2xl font-bold">Future modules</h2>

            <p className="mt-2 text-slate-600">
              These areas are placeholders and are not active yet.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {futureModules.map((module) => (
              <article
                key={module.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 opacity-75 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-2xl">
                    {module.icon}
                  </div>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    Coming later
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold">{module.title}</h3>

                <p className="mt-2 leading-relaxed text-slate-600">
                  {module.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-amber-200 bg-amber-50 p-6">
          <div className="flex items-start gap-4">
            <div className="text-2xl">🧪</div>

            <div>
              <h2 className="font-bold text-amber-950">Prototype notice</h2>

              <p className="mt-1 text-sm leading-relaxed text-amber-900">
                This system is currently being tested. Timetable and cover
                information should be checked against the official school
                timetable before being relied upon.
              </p>
            </div>
          </div>
        </section>

        <footer className="py-8 text-center text-sm text-slate-500">
          Fable Staff System · Prototype version 0.1
        </footer>
      </div>
    </main>
  );
}
