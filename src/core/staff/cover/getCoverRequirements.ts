import type { StaffTimetable } from "@/data/staff/timetable/staffTimetable";
import type { CoverRequirement } from "./types";

const coverableTypes = ["student", "cover", "role-specific", "other"];

function isCoverable(type: string) {
  return coverableTypes.includes(type);
}

export function getCoverRequirements(
  staffTimetables: StaffTimetable[],
  selectedDay: string,
  absentStaffIds: string[],
): CoverRequirement[] {
  return staffTimetables
    .filter((staff) => absentStaffIds.includes(staff.id))
    .flatMap((staff) =>
      staff.entries
        .filter((entry) => entry.day === selectedDay)
        .filter((entry) => isCoverable(entry.type))
        .map((entry) => ({
          id: `${staff.id}-${entry.day}-${entry.start}-${entry.end}-${entry.activity}`,
          absentStaffId: staff.id,
          absentStaffName: staff.name,
          entry,
        })),
    );
}
