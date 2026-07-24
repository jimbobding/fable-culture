import Link from "next/link";
import { notFound } from "next/navigation";
import { getStaffProfile } from "@/data/staff/staffProfiles";
import { staffTimetables } from "@/data/staff/timetable/staffTimetable";

type StaffProfilePageProps = {
  params: Promise<{
    staffId: string;
  }>;
};

export default async function StaffProfilePage({
  params,
}: StaffProfilePageProps) {
  const { staffId } = await params;

  const profile = getStaffProfile(staffId);

  if (!profile) {
    notFound();
  }

  const timetable = staffTimetables.find((staff) => staff.id === staffId);

  const timetableEntryCount = timetable?.entries.length ?? 0;

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-900">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/staff/staff-profiles"
            className="rounded-xl bg-slate-900 px-4 py-2 font-semibold text-white"
          >
            Back to Staff Profiles
          </Link>

          <Link
            href={`/staff/timetabling/timetable?staff=${profile.id}`}
            className="rounded-xl border border-blue-200 bg-white px-4 py-2 font-semibold text-blue-700"
          >
            View Timetable
          </Link>
        </div>

        <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-blue-100 text-3xl font-bold text-blue-800">
              {profile.initials ?? profile.name.slice(0, 2).toUpperCase()}
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                Staff Profile
              </p>

              <h1 className="mt-1 text-4xl font-bold">{profile.name}</h1>

              <p className="mt-2 text-lg text-slate-600">{profile.role}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span
                  className={`rounded-full px-3 py-1 text-sm font-semibold ${
                    profile.active
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {profile.active ? "Active staff member" : "Inactive"}
                </span>

                <span
                  className={`rounded-full px-3 py-1 text-sm font-semibold ${
                    profile.canProvideCover
                      ? "bg-blue-100 text-blue-800"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {profile.canProvideCover
                    ? "Can provide cover"
                    : "Not normally considered for cover"}
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <ProfileSection title="Working days">
            {profile.workingDays.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {profile.workingDays.map((day) => (
                  <ProfileTag key={day}>{day}</ProfileTag>
                ))}
              </div>
            ) : (
              <EmptyValue />
            )}
          </ProfileSection>

          <ProfileSection title="Timetable">
            <p className="text-3xl font-bold">{timetableEntryCount}</p>
            <p className="mt-1 text-sm text-slate-500">
              Weekly timetable entries currently recorded
            </p>
          </ProfileSection>

          <ProfileSection title="Works with">
            {profile.worksWithStudentInitials.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {profile.worksWithStudentInitials.map((initials) => (
                  <ProfileTag key={initials}>{initials}</ProfileTag>
                ))}
              </div>
            ) : (
              <EmptyValue />
            )}
          </ProfileSection>

          <ProfileSection title="Skills">
            {profile.skills.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill) => (
                  <ProfileTag key={skill}>{skill}</ProfileTag>
                ))}
              </div>
            ) : (
              <EmptyValue />
            )}
          </ProfileSection>

          <ProfileSection title="Cover settings">
            <dl className="space-y-3">
              <div className="flex items-center justify-between gap-4">
                <dt className="text-slate-600">Eligible for cover</dt>
                <dd className="font-semibold">
                  {profile.canProvideCover ? "Yes" : "No"}
                </dd>
              </div>

              <div className="flex items-center justify-between gap-4">
                <dt className="text-slate-600">Cover priority</dt>
                <dd className="font-semibold">
                  {profile.coverPriority ?? "Not set"}
                </dd>
              </div>
            </dl>
          </ProfileSection>

          <ProfileSection title="Profile identity">
            <dl className="space-y-3">
              <div className="flex items-center justify-between gap-4">
                <dt className="text-slate-600">Staff ID</dt>
                <dd className="font-mono text-sm font-semibold">
                  {profile.id}
                </dd>
              </div>

              <div className="flex items-center justify-between gap-4">
                <dt className="text-slate-600">Initials</dt>
                <dd className="font-semibold">
                  {profile.initials ?? "Not set"}
                </dd>
              </div>
            </dl>
          </ProfileSection>
        </div>

        <section className="mt-6 rounded-3xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="font-bold text-amber-900">Prototype profile</h2>

          <p className="mt-2 text-sm leading-6 text-amber-800">
            This page currently reads static profile data. Editing, login
            permissions and secure database storage will be added before staff
            information is used in the live system.
          </p>
        </section>
      </div>
    </main>
  );
}

type ProfileSectionProps = {
  title: string;
  children: React.ReactNode;
};

function ProfileSection({ title, children }: ProfileSectionProps) {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-bold">{title}</h2>
      {children}
    </section>
  );
}

function ProfileTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
      {children}
    </span>
  );
}

function EmptyValue() {
  return <p className="text-slate-500">No information added yet.</p>;
}
