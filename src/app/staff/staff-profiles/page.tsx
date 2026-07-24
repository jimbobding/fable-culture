import Link from "next/link";
import { staffProfiles } from "@/data/staff/staffProfiles";
import { staffTimetables } from "@/data/staff/timetable/staffTimetable";
import { buildStaffMembers } from "@/core/staff/buildStaffMembers";

export default function StaffProfilesPage() {
  const staffMembers = buildStaffMembers(staffProfiles, staffTimetables).sort(
    (a, b) => a.profile.name.localeCompare(b.profile.name),
  );

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <section className="mb-8 rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Staff System
          </p>

          <h1 className="mt-2 text-3xl font-bold">Staff Profiles</h1>

          <p className="mt-2 max-w-2xl text-slate-600">
            View the information used by staff timetables and future cover
            recommendations.
          </p>

          <Link
            href="/staff"
            className="mt-6 inline-flex rounded-xl bg-slate-900 px-4 py-2 font-semibold text-white"
          >
            Back to Staff Dashboard
          </Link>
        </section>

        <section>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {staffMembers.map((staffMember) => {
              const staff = staffMember.profile;

              return (
                <Link
                  key={staff.id}
                  href={`/staff/staff-profiles/${staff.id}`}
                  className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-bold">{staff.name}</h2>
                      <p className="mt-1 text-slate-600">{staff.role}</p>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 font-bold text-blue-800">
                      {staff.initials ?? staff.name.slice(0, 2).toUpperCase()}
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <span
                      className={`rounded-full px-3 py-1 text-sm font-semibold ${
                        staff.canProvideCover
                          ? "bg-green-100 text-green-800"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {staff.canProvideCover
                        ? "Available for cover"
                        : "Not normally cover"}
                    </span>

                    <span className="text-sm font-semibold text-blue-700">
                      View profile →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
