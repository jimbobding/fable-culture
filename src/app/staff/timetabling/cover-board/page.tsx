"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { staffTimetables } from "@/data/staff/timetable/staffTimetable";
import { buildCoverBoard } from "@/core/staff/cover/buildCoverBoard";
import { hasCoverClash } from "@/core/staff/cover/coverAssignments";
import {
  loadCoverPlan,
  saveCoverPlan,
  type CoverAssignment,
  type SavedCoverPlan,
} from "@/core/staff/cover/coverStorage";
import StaffAbsenceSelector from "@/components/staff/cover/StaffAbsenceSelector";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] as const;

type Day = (typeof days)[number];

function getTodayDate() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());

  const getPart = (type: string) =>
    parts.find((part) => part.type === type)?.value ?? "";

  return `${getPart("year")}-${getPart("month")}-${getPart("day")}`;
}

function getDayFromDate(dateString: string): Day | null {
  if (!dateString) return null;

  const date = new Date(`${dateString}T12:00:00`);

  if (Number.isNaN(date.getTime())) return null;

  const dayIndex = date.getDay();

  if (dayIndex === 0 || dayIndex === 6) return null;

  return days[dayIndex - 1];
}

export default function CoverBoardPage() {
  const [selectedDate, setSelectedDate] = useState(getTodayDate);

  const [absentStaffIds, setAbsentStaffIds] = useState<string[]>([]);

  const [absentStudentInitials, setAbsentStudentInitials] = useState<string[]>(
    [],
  );

  const [assignments, setAssignments] = useState<CoverAssignment[]>([]);
  const [loadedDate, setLoadedDate] = useState<string | null>(null);

  useEffect(() => {
    const plan = loadCoverPlan(selectedDate);

    setAbsentStaffIds(plan.absentStaffIds);
    setAbsentStudentInitials(plan.absentStudentInitials);
    setAssignments(plan.assignments);

    setLoadedDate(selectedDate);
  }, [selectedDate]);

  useEffect(() => {
    if (loadedDate !== selectedDate) return;

    const plan: SavedCoverPlan = {
      absentStaffIds,
      absentStudentInitials,
      assignments,
    };

    saveCoverPlan(selectedDate, plan);
  }, [
    loadedDate,
    selectedDate,
    absentStaffIds,
    absentStudentInitials,
    assignments,
  ]);

  const selectedDay = useMemo(
    () => getDayFromDate(selectedDate),
    [selectedDate],
  );

  const staffForDay = useMemo(() => {
    if (!selectedDay) return [];

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
    if (!selectedDay) return [];

    return buildCoverBoard({
      staffTimetables,
      selectedDay,
      absentStaffIds,
      absentStudentInitials,
    });
  }, [selectedDay, absentStaffIds, absentStudentInitials]);

  const clearBoard = () => {
    setAbsentStaffIds([]);
    setAbsentStudentInitials([]);
    setAssignments([]);
  };

  const changeDate = (date: string) => {
    setLoadedDate(null);
    setSelectedDate(date);
  };

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
    const session = coverBoard.find((item) => item.id === sessionId);

    if (!session) return;

    if (!coveredById) {
      setAssignments((current) =>
        current.filter((assignment) => assignment.sessionId !== sessionId),
      );
      return;
    }

    const candidate = session.candidates.find(
      (item) => item.staffId === coveredById,
    );

    if (!candidate || candidate.status === "unavailable") {
      window.alert("This staff member is not available for this session.");
      return;
    }

    const alreadyCovering = hasCoverClash(
      sessionId,
      coveredById,
      assignments,
      coverBoard,
    );

    if (alreadyCovering) {
      window.alert(
        "This staff member is already assigned to another cover session at this time.",
      );
      return;
    }

    setAssignments((current) => [
      ...current.filter((assignment) => assignment.sessionId !== sessionId),
      { sessionId, coveredById },
    ]);
  };

  const getAssignment = (sessionId: string) => {
    return assignments.find((assignment) => assignment.sessionId === sessionId);
  };

  const getStaffName = (staffId: string) => {
    return (
      staffTimetables.find((staff) => staff.id === staffId)?.name ?? staffId
    );
  };

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <section className="mb-8 rounded-3xl bg-white p-6 shadow-sm">
          <h1 className="text-3xl font-bold">Daily Cover Board</h1>

          <p className="mt-2 text-slate-600">
            Select a date, mark staff and pupils off, then assign suggested
            cover.
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
          <h2 className="mb-4 text-xl font-bold">Choose date</h2>

          <input
            type="date"
            value={selectedDate}
            onChange={(event) => changeDate(event.target.value)}
            className="w-full max-w-sm rounded-xl border border-slate-300 bg-white px-4 py-3"
          />

          {selectedDay ? (
            <p className="mt-3 font-semibold text-slate-700">
              Showing {selectedDay}'s timetable
            </p>
          ) : (
            <p className="mt-3 font-semibold text-amber-700">
              {selectedDate
                ? "No regular timetable is available for weekends."
                : "Please select a date."}
            </p>
          )}
        </section>

        {selectedDay && (
          <>
            <StaffAbsenceSelector
              staff={staffForDay}
              absentStaffIds={absentStaffIds}
              onToggleStaff={toggleStaffAbsent}
            />

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

                          {session.candidates.map((candidate) => {
                            const alreadyAssigned = hasCoverClash(
                              session.id,
                              candidate.staffId,
                              assignments,
                              coverBoard,
                            );

                            const unavailable =
                              candidate.status === "unavailable" ||
                              alreadyAssigned;

                            return (
                              <option
                                key={candidate.staffId}
                                value={candidate.staffId}
                                disabled={unavailable}
                              >
                                {candidate.staffName} —{" "}
                                {alreadyAssigned
                                  ? "Already covering"
                                  : candidate.reason}
                              </option>
                            );
                          })}
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

              {assignments.filter((assignment) => assignment.coveredById)
                .length === 0 ? (
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
          </>
        )}
      </div>
    </main>
  );
}
