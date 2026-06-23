"use client";

import { useState } from "react";
// import { staffTimetables } from "@/data/staff/staffTimetableVerified";
import { staffTimetables } from "@/data/staff/staffTimetable";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] as const;

function getTypeColour(type: string) {
  switch (type) {
    case "student":
      return "bg-blue-50 border-blue-200";

    case "role-specific":
      return "bg-indigo-50 border-indigo-200";

    case "break":
      return "bg-yellow-50 border-yellow-200";

    case "cover":
      return "bg-green-50 border-green-200";

    case "available":
      return "bg-red-50 border-red-200";

    case "jobs":
      return "bg-purple-50 border-purple-200";

    case "wfh":
      return "bg-slate-100 border-slate-300";

    case "other":
      return "bg-pink-50 border-pink-200";

    default:
      return "bg-white border-slate-200";
  }
}

export default function StaffTimetablePage() {
  const [selectedStaffId, setSelectedStaffId] = useState(
    staffTimetables[0]?.id ?? "",
  );

  const selectedStaff = staffTimetables.find(
    (staff) => staff.id === selectedStaffId,
  );

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 rounded-3xl bg-white p-6 shadow-sm">
          <h1 className="text-3xl font-bold">Staff Timetable</h1>

          <p className="mt-2 text-slate-600">
            View staff sessions, breaks and cover duties.
          </p>

          <select
            value={selectedStaffId}
            onChange={(e) => setSelectedStaffId(e.target.value)}
            className="mt-6 w-full rounded-xl border border-slate-300 px-4 py-3"
          >
            {staffTimetables.map((staff) => (
              <option key={staff.id} value={staff.id}>
                {staff.name}
              </option>
            ))}
          </select>
        </div>

        {selectedStaff && (
          <>
            <div className="mb-6 rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold">{selectedStaff.name}</h2>
            </div>

            <div className="space-y-6">
              {days.map((day) => {
                const entries = selectedStaff.entries.filter(
                  (entry) => entry.day === day,
                );

                return (
                  <div key={day} className="rounded-3xl bg-white p-6 shadow-sm">
                    <h3 className="mb-4 text-xl font-bold">{day}</h3>

                    {entries.length === 0 ? (
                      <p className="text-slate-500">No timetable entries.</p>
                    ) : (
                      <div className="space-y-3">
                        {entries.map((entry, index) => (
                          <div
                            key={index}
                            className={`rounded-2xl border p-4 ${getTypeColour(
                              entry.type,
                            )}`}
                          >
                            <div className="flex flex-col gap-2 md:flex-row md:justify-between">
                              <div>
                                <p className="font-bold">{entry.activity}</p>

                                <p className="text-sm capitalize text-slate-600">
                                  {entry.type}
                                </p>
                              </div>

                              <div className="font-semibold">
                                {entry.start} - {entry.end}
                              </div>
                            </div>

                            {entry.notes && (
                              <p className="mt-2 text-sm text-slate-600">
                                {entry.notes}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
