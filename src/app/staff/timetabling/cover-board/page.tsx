"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { staffTimetables } from "@/data/staff/timetable/staffTimetable";
import { buildCoverBoard } from "@/core/staff/cover/buildCoverBoard";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] as const;

type Day = (typeof days)[number];

type CoverAssignment = {
  sessionId: string;
  coveredById: string;
};

export default function CoverBoardPage() {
  const [selectedDay, setSelectedDay] = useState<Day>("Monday");
  const [absentStaffIds, setAbsentStaffIds] = useState<string[]>([]);
  const [absentStudentInitials, setAbsentStudentInitials] = useState<string[]>(
    [],
  );
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

  const studentInitialsForDay = useMemo(() => {
    const initials = staffForDay.flatMap((staff) =>
      staff.entries
        .filter((entry) => entry.type === "student")
        .map((entry) => entry.activity),
    );

    return Array.from(new Set(initials)).sort();
  }, [staffForDay]);

  const coverBoard = useMemo(() => {
    return buildCoverBoard({
      staffTimetables,
      selectedDay,
      absentStaffIds,
      absentStudentInitials,
    });
  }, [selectedDay, absentStaffIds, absentStudentInitials]);

  const toggleStaffAbsent = (staffId: string) => {
    setAbsentStaffIds((current) =>
      current.includes(staffId)
        ? current.filter((id) => id !== staffId)
        : [...current, staffId],
    );

    setAssignments((current) =>
      current.filter((assignment) => assignment.coveredById !== staffId),
    );
  };

  const toggleStudentAbsent = (studentInitials: string) => {
    setAbsentStudentInitials((current) =>
      current.includes(studentInitials)
        ? current.filter((initials) => initials !== studentInitials)
        : [...current, studentInitials],
    );
  };

  const updateAssignment = (sessionId: string, coveredById: string) => {
    setAssignments((current) => {
      const existing = current.find(
        (assignment) => assignment.sessionId === sessionId,
      );

      if (existing) {
        return current.map((assignment) =>
          assignment.sessionId === sessionId
            ? { ...assignment, coveredById }
            : assignment,
        );
      }

      return [...current, { sessionId, coveredById }];
    });
  };

  const getAssignment = (sessionId: string) => {
    return assignments.find((assignment) => assignment.sessionId === sessionId);
  };

  const getStaffName = (staffId: string) => {
    return (
      staffTimetables.find((staff) => staff.id === staffId)?.name ?? staffId
    );
  };

  const clearBoard = () => {
    setAbsentStaffIds([]);
    setAbsentStudentInitials([]);
    setAssignments([]);
  };

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <section className="mb-8 rounded-3xl bg-white p-6 shadow-sm">
          <h1 className="text-3xl font-bold">Daily Cover Board</h1>

          <p className="mt-2 text-slate-600">
            Mark staff and pupils off, then assign suggested cover.
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
                  clearBoard();
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
          <h2 className="mb-4 text-xl font-bold">Staff off</h2>

          <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
            {staffForDay.map((staff) => (
              <button
                key={staff.id}
                onClick={() => toggleStaffAbsent(staff.id)}
                className={`rounded-xl border px-4 py-3 text-left font-semibold ${
                  absentStaffIds.includes(staff.id)
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
          <h2 className="mb-4 text-xl font-bold">Pupils off</h2>

          <div className="flex flex-wrap gap-2">
            {studentInitialsForDay.map((initials) => (
              <button
                key={initials}
                onClick={() => toggleStudentAbsent(initials)}
                className={`rounded-xl border px-4 py-2 font-semibold ${
                  absentStudentInitials.includes(initials)
                    ? "border-amber-300 bg-amber-50 text-amber-800"
                    : "border-slate-200 bg-white"
                }`}
              >
                {initials}
              </button>
            ))}
          </div>
        </section>

        <section className="mb-6 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold">Sessions needing cover</h2>

          {coverBoard.length === 0 ? (
            <p className="text-slate-500">
              Select a staff member who is off to generate cover needs.
            </p>
          ) : (
            <div className="space-y-4">
              {coverBoard.map((session) => {
                const assignment = getAssignment(session.id);

                return (
                  <div key={session.id} className="rounded-2xl border p-4">
                    <p className="text-sm font-semibold text-red-700">
                      {session.absentStaffName} absent
                    </p>

                    <h3 className="mt-1 text-lg font-bold">
                      {session.entry.start} - {session.entry.end}
                    </h3>

                    <p className="text-slate-700">
                      {session.entry.activity}{" "}
                      <span className="text-sm text-slate-500">
                        ({session.entry.type})
                      </span>
                    </p>

                    <select
                      value={assignment?.coveredById ?? ""}
                      onChange={(event) =>
                        updateAssignment(session.id, event.target.value)
                      }
                      className="mt-4 w-full rounded-xl border border-slate-300 bg-white px-4 py-2"
                    >
                      <option value="">Assign cover...</option>

                      {session.candidates.map((candidate) => (
                        <option
                          key={candidate.staffId}
                          value={candidate.staffId}
                        >
                          {candidate.staffName} — {candidate.reason}
                        </option>
                      ))}
                    </select>

                    <div className="mt-4 space-y-2">
                      {session.candidates.slice(0, 5).map((candidate) => (
                        <div
                          key={candidate.staffId}
                          className={`flex items-center justify-between rounded-xl px-4 py-3 ${
                            candidate.score >= 90
                              ? "bg-green-50"
                              : candidate.score >= 70
                                ? "bg-blue-50"
                                : candidate.score >= 40
                                  ? "bg-amber-50"
                                  : "bg-red-50"
                          }`}
                        >
                          <div>
                            <p className="font-semibold">
                              {candidate.staffName}
                            </p>
                            <p className="text-sm text-slate-500">
                              {candidate.reason}
                            </p>
                          </div>

                          <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold">
                            {candidate.score >= 90
                              ? "Best match"
                              : candidate.score >= 70
                                ? "Good option"
                                : candidate.score >= 40
                                  ? "Flexible"
                                  : "Avoid"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        <section className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold">Cover plan</h2>

          {assignments.filter((assignment) => assignment.coveredById).length ===
          0 ? (
            <p className="text-slate-500">No cover assigned yet.</p>
          ) : (
            <div className="space-y-3">
              {assignments
                .filter((assignment) => assignment.coveredById)
                .map((assignment) => {
                  const session = coverBoard.find(
                    (item) => item.id === assignment.sessionId,
                  );

                  if (!session) return null;

                  return (
                    <div
                      key={assignment.sessionId}
                      className="rounded-2xl border border-green-200 bg-green-50 p-4"
                    >
                      <p className="font-bold">
                        {session.entry.start} - {session.entry.end}
                      </p>

                      <p>{session.entry.activity}</p>

                      <p className="text-sm text-slate-600">
                        Normally with: {session.absentStaffName}
                      </p>

                      <p className="text-sm font-semibold text-green-800">
                        Covered by: {getStaffName(assignment.coveredById)}
                      </p>
                    </div>
                  );
                })}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
