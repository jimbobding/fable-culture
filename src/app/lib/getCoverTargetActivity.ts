import { staffTimetables } from "@/data/staff/timetable/staffTimetable";
import { staffInitials } from "@/data/staff/timetable/staffInitials";

export function getCoverTargetActivity(
  coveringFor: string,
  start: string,
  end: string,
) {
  const staffId = staffInitials[coveringFor];

  if (!staffId) {
    return null;
  }

  const staff = staffTimetables.find((staff) => staff.id === staffId);

  if (!staff) {
    return null;
  }

  const matchingEntry = staff.entries.find(
    (entry) =>
      entry.start <= start && entry.end >= end && entry.type !== "break",
  );

  return matchingEntry?.activity ?? null;
}
