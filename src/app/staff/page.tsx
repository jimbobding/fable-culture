import Link from "next/link";

export default function StaffHomePage() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8">
      <div className="mx-auto max-w-5xl">
        <section className="rounded-3xl bg-white p-6 shadow-sm">
          <h1 className="text-3xl font-bold">Staff Area</h1>
          <p className="mt-2 text-slate-600">
            Staff tools and internal systems.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Link
              href="/staff/timetabling"
              className="rounded-2xl border bg-slate-50 p-5 hover:bg-slate-100"
            >
              <h2 className="text-xl font-bold">Timetabling</h2>
              <p className="mt-1 text-slate-600">
                View staff timetables, weekly covers and daily cover board.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
