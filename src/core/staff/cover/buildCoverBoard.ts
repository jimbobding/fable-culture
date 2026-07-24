import type {
  BuildCoverBoardInput,
  CoverBoardSession,
  CoverCandidate,
} from "./types";
import { getCoverRequirements } from "./getCoverRequirements";

const flexibleTypes = ["available", "jobs", "planning"];

function overlaps(startA: string, endA: string, startB: string, endB: string) {
  return startA < endB && startB < endA;
}

function isFlexible(type: string) {
  return flexibleTypes.includes(type);
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
      .map((candidate) => {
        const overlappingEntries = candidate.entries.filter((candidateEntry) =>
          overlaps(
            requirement.entry.start,
            requirement.entry.end,
            candidateEntry.start,
            candidateEntry.end,
          ),
        );

        const hasNoClash = overlappingEntries.length === 0;

        const freedStudentEntry = overlappingEntries.find(
          (candidateEntry) =>
            candidateEntry.type === "student" &&
            absentStudentInitials.includes(candidateEntry.activity),
        );

        const flexibleEntry = overlappingEntries.find((candidateEntry) =>
          isFlexible(candidateEntry.type),
        );

        if (hasNoClash) {
          return {
            staffId: candidate.id,
            staffName: candidate.name,
            status: "free",
            score: 100,
            reason: "Free at this time",
          };
        }

        if (freedStudentEntry) {
          return {
            staffId: candidate.id,
            staffName: candidate.name,
            status: "freed-by-pupil-absence",
            score: 80,
            reason: `${freedStudentEntry.activity} is off`,
          };
        }

        if (flexibleEntry) {
          return {
            staffId: candidate.id,
            staffName: candidate.name,
            status: "flexible",
            score: 50,
            reason: `On ${flexibleEntry.activity}`,
          };
        }

        return {
          staffId: candidate.id,
          staffName: candidate.name,
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
