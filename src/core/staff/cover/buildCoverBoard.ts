import type {
  BuildCoverBoardInput,
  CoverBoardSession,
  CoverCandidate,
} from "./types";

import { getCoverRequirements } from "./getCoverRequirements";
import { getStaffStudentRelationship } from "./getStaffStudentRelationship";

function overlaps(startA: string, endA: string, startB: string, endB: string) {
  return startA < endB && startB < endA;
}

export function buildCoverBoard({
  staffTimetables,
  selectedDay,
  absentStaffIds,
  absentStudentInitials,
}: BuildCoverBoardInput): CoverBoardSession[] {
  const staffForDay = staffTimetables.map((staff) => ({
    ...staff,
    entries: staff.entries.filter((entry) => entry.day === selectedDay),
  }));

  const coverRequirements = getCoverRequirements(
    staffTimetables,
    selectedDay,
    absentStaffIds,
  );

  return coverRequirements.map((requirement) => {
    const candidates: CoverCandidate[] = staffForDay
      .filter((candidate) => candidate.id !== requirement.absentStaffId)
      .filter((candidate) => !absentStaffIds.includes(candidate.id))
      .map((candidate): CoverCandidate => {
        const overlappingEntries = candidate.entries.filter((entry) =>
          overlaps(
            requirement.entry.start,
            requirement.entry.end,
            entry.start,
            entry.end,
          ),
        );

        const isAbsentPupilSession = (
          entry: (typeof overlappingEntries)[number],
        ) =>
          entry.type === "student" &&
          absentStudentInitials.includes(entry.activity);

        const isAvailableEntry = (entry: (typeof overlappingEntries)[number]) =>
          entry.type === "available";

        const isLastResortEntry = (
          entry: (typeof overlappingEntries)[number],
        ) => entry.type === "jobs" || entry.type === "planning";

        const baseCandidate = {
          staffId: candidate.id,
          staffName: candidate.name,

          studentRelationship:
            requirement.entry.type === "student"
              ? getStaffStudentRelationship(
                  candidate.id,
                  requirement.entry.activity,
                )
              : undefined,
        };
        // 1. No scheduled commitments
        if (overlappingEntries.length === 0) {
          return {
            ...baseCandidate,
            status: "free",
            score: 100,
            reason: "Free at this time",
          };
        }

        // 2. Explicitly available
        if (overlappingEntries.every(isAvailableEntry)) {
          return {
            ...baseCandidate,
            status: "free",
            score: 100,
            reason: "Marked as available",
          };
        }

        // 3. Freed by pupil absence
        // Other overlapping entries must also be available
        // or cancelled by pupil absence.
        const hasAbsentPupilSession =
          overlappingEntries.some(isAbsentPupilSession);

        const allEntriesFreeOrCancelled = overlappingEntries.every(
          (entry) => isAvailableEntry(entry) || isAbsentPupilSession(entry),
        );

        if (hasAbsentPupilSession && allEntriesFreeOrCancelled) {
          const pupilInitials = [
            ...new Set(
              overlappingEntries
                .filter(isAbsentPupilSession)
                .map((entry) => entry.activity),
            ),
          ];

          return {
            ...baseCandidate,
            status: "freed-by-pupil-absence",
            score: 80,
            reason: `${pupilInitials.join(", ")} absent`,
          };
        }

        // 4. Jobs and planning are last-resort options
        // They must not hide a genuine timetable clash.
        const allEntriesPotentiallyFlexible = overlappingEntries.every(
          (entry) =>
            isAvailableEntry(entry) ||
            isAbsentPupilSession(entry) ||
            isLastResortEntry(entry),
        );

        if (allEntriesPotentiallyFlexible) {
          return {
            ...baseCandidate,
            status: "flexible",
            score: 50,
            reason: "On jobs or planning - last resort",
          };
        }

        // 5. At least one non-coverable commitment
        return {
          ...baseCandidate,
          status: "unavailable",
          score: 10,
          reason: "Timetable clash",
        };
      })
      .sort((a, b) => b.score - a.score);

    return {
      ...requirement,
      candidates,
    };
  });
}
