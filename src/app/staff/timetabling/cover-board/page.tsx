"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { staffTimetables } from "@/data/staff/timetable/staffTimetable";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] as const;

type Day = (typeof days)[number];

type CoverAssignment = {
  id: string;
  absentStaffId: string;
  absentStaffName: string;
  start: string;
  end: string;
  activity: string;
  coveredBy: string;
};

export default function CoverBoardPage() {
  const [selectedDay, setSelectedDay] = useState<Day>("Monday");
  const [staffOff, setStaffOff] = useState<string[]>([]);
  const [assignments, setAssignments] = useState<CoverAssignment[]>([]);

  const staffForDay = useMemo(() => {
    return staffTimetables
      .map((staff) => ({
        id: staff.id,
        name: staff.name,
        entries: staff.entries.filter((entry) => entry.day === selectedDay),
      }))
      .filter((staff) => staff.entries.length > 0);
  }, [selectedDay]);

  const absentStaff = staffForDay.filter((staff) =>
    staffOff.includes(staff.id),
  );

  const toggleStaffOff = (staffId: string) => {
    setStaffOff((current) =>
      current.includes(staffId)
        ? current.filter((id) => id !== staffId)
        : [...current, staffId],
    );
  };

  const updateAssignment = (
    absentStaffId: string,
    absentStaffName: string,
    start: string,
    end: string,
    activity: string,
    coveredBy: string,
  ) => {
    const id = `${absentStaffId}-${start}-${end}-${activity}`;

    setAssignments((current) => {
      const existing = current.find((item) => item.id === id);

      if (existing) {
        return current.map((item) =>
          item.id === id ? { ...item, coveredBy } : item,
        );
      }

      return [
        ...current,
        {
          id,
          absentStaffId,
          absentStaffName,
          start,
          end,
          activity,
          coveredBy,
        },
      ];
    });
  };

  const clearBoard = () => {
    setStaffOff([]);
    setAssignments([]);
  };

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <section className="mb-8 rounded-3xl bg-white p-6 shadow-sm">
          <h1 className="text-3xl font-bold">Daily Cover Board</h1>

          <p className="mt-2 text-slate-600">
            Tick who is off, then assign cover for their sessions.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/staff/timetabling"
              className="rounded-xl bg-slate-900 px-4 py-2 font-semibold text-white"
            >
              Back to Timetabling
            </Link>

            <Link
              href="/staff/timetabling/covers"
              className="rounded-xl bg-green-600 px-4 py-2 font-semibold text-white"
            >
              Weekly Covers
            </Link>

            <button
              onClick={clearBoard}
              className="rounded-xl border border-red-200 px-4 py-2 font-semibold text-red-700"
            >
              Clear Board
            </button>
          </div>
        </section>

        <section className="mb-6 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold">Choose day</h2>

          <div className="flex flex-wrap gap-2">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => {
                  setSelectedDay(day);
                  setStaffOff([]);
                  setAssignments([]);
                }}
                className={`rounded-xl px-4 py-2 font-semibold ${
                  selectedDay === day
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </section>

        <section className="mb-6 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold">Who is off?</h2>

          <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
            {staffForDay.map((staff) => (
              <button
                key={staff.id}
                onClick={() => toggleStaffOff(staff.id)}
                className={`rounded-xl border px-4 py-3 text-left font-semibold ${
                  staffOff.includes(staff.id)
                    ? "border-red-300 bg-red-50 text-red-800"
                    : "border-slate-200 bg-white"
                }`}
              >
                {staff.name}
              </button>
            ))}
          </div>
        </section>

        <section className="mb-6 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold">Sessions needing cover</h2>

          {absentStaff.length === 0 ? (
            <p className="text-slate-500">Select staff who are off.</p>
          ) : (
            <div className="space-y-4">
              {absentStaff.map((staff) => (
                <div key={staff.id} className="rounded-2xl border p-4">
                  <h3 className="text-lg font-bold">{staff.name}</h3>

                  <div className="mt-3 space-y-3">
                    {staff.entries.map((entry, index) => {
                      const assignmentId = `${staff.id}-${entry.start}-${entry.end}-${entry.activity}`;
                      const assignment = assignments.find(
                        (item) => item.id === assignmentId,
                      );

                      return (
                        <div key={index} className="rounded-xl bg-slate-50 p-4">
                          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                            <div>
                              <p className="font-bold">
                                {entry.start} - {entry.end}
                              </p>
                              <p>
                                {entry.activity}{" "}
                                <span className="text-sm text-slate-500">
                                  ({entry.type})
                                </span>
                              </p>
                            </div>

                            <select
                              value={assignment?.coveredBy ?? ""}
                              onChange={(e) =>
                                updateAssignment(
                                  staff.id,
                                  staff.name,
                                  entry.start,
                                  entry.end,
                                  entry.activity,
                                  e.target.value,
                                )
                              }
                              className="rounded-xl border border-slate-300 bg-white px-4 py-2"
                            >
                              <option value="">Covered by...</option>

                              {staffForDay
                                .filter((person) => person.id !== staff.id)
                                .map((person) => (
                                  <option key={person.id} value={person.name}>
                                    {person.name}
                                  </option>
                                ))}
                            </select>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold">Cover plan</h2>

          {assignments.filter((item) => item.coveredBy).length === 0 ? (
            <p className="text-slate-500">No cover assigned yet.</p>
          ) : (
            <div className="space-y-3">
              {assignments
                .filter((item) => item.coveredBy)
                .map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-green-200 bg-green-50 p-4"
                  >
                    <p className="font-bold">
                      {item.start} - {item.end}
                    </p>
                    <p>{item.activity}</p>
                    <p className="text-sm text-slate-600">
                      Normally with: {item.absentStaffName}
                    </p>
                    <p className="text-sm font-semibold text-green-800">
                      Covered by: {item.coveredBy}
                    </p>
                  </div>
                ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
