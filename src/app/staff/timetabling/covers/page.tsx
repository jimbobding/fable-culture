import { staffTimetables } from "@/data/staff/timetable/staffTimetable";
import { getCoverTargetActivity } from "@/app/lib/getCoverTargetActivity";
import Link from "next/link";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] as const;

export default function StaffCoversPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 rounded-3xl bg-white p-6 shadow-sm">
          <h1 className="text-3xl font-bold">Weekly Cover Duties</h1>
          <p className="mt-2 text-slate-600">
            See who is covering breaks and who they are covering.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/staff/timetabling"
              className="rounded-xl bg-green-600 px-4 py-2 font-semibold text-white hover:bg-green-700"
            >
              Back to Timetable
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          {days.map((day) => {
            const covers = staffTimetables.flatMap((staff) =>
              staff.entries
                .filter((entry) => entry.day === day && entry.type === "cover")
                .map((entry) => ({
                  staffName: staff.name,
                  entry,
                  targetActivity: entry.coveringFor
                    ? getCoverTargetActivity(
                        entry.coveringFor,
                        entry.start,
                        entry.end,
                      )
                    : null,
                })),
            );

            return (
              <section key={day} className="rounded-3xl bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-2xl font-bold">{day}</h2>

                {covers.length === 0 ? (
                  <p className="text-slate-500">No cover duties recorded.</p>
                ) : (
                  <div className="space-y-3">
                    {covers.map((cover, index) => (
                      <div
                        key={`${day}-${cover.staffName}-${index}`}
                        className="rounded-2xl border border-green-200 bg-green-50 p-4"
                      >
                        <p className="font-bold">{cover.staffName}</p>

                        <p className="mt-1">
                          {cover.entry.start} - {cover.entry.end}
                        </p>

                        <p className="mt-2">
                          Covering:{" "}
                          <span className="font-semibold">
                            {cover.entry.coveringFor ?? cover.entry.activity}
                          </span>
                        </p>

                        {cover.targetActivity && (
                          <p className="mt-1 text-sm text-slate-600">
                            They are with: {cover.targetActivity}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
