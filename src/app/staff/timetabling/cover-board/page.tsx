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
import CoverSessionCard from "@/components/staff/cover/CoverSessionCard";
import CoverPlan from "@/components/staff/cover/CoverPlan";

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

    if (!candidate) {
      window.alert("This staff member could not be found.");
      return;
    }

    if (candidate.studentRelationship?.relationship === "not-suitable") {
      window.alert(
        "This staff member is marked as not suitable for this student. Please choose another staff member.",
      );
      return;
    }

    if (candidate.status === "unavailable") {
      const confirmed = window.confirm(
        `${candidate.staffName} is already timetabled during this session.\n\n` +
          `Reason: ${candidate.reason}\n\n` +
          "Assigning them may create a timetable clash.\n\n" +
          "Do you want to continue?",
      );

      if (!confirmed) return;
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
                  {coverBoard.map((session) => (
                    <CoverSessionCard
                      key={session.id}
                      session={session}
                      coverBoard={coverBoard}
                      assignments={assignments}
                      onAssignCover={updateAssignment}
                    />
                  ))}
                </div>
              )}
            </section>

            <CoverPlan
              assignments={assignments}
              coverBoard={coverBoard}
              getStaffName={getStaffName}
            />
          </>
        )}
      </div>
    </main>
  );
}
