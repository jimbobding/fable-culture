import { staffTimetables } from "@/data/staff/timetable/staffTimetable";
import { staffProfiles } from "@/data/staff/staffProfiles";

export function getCoverTargetActivity(
  coveringFor: string,
  start: string,
  end: string,
) {
  // Find the staff member using their initials
  const staffProfile = staffProfiles.find(
    (staff) => staff.initials === coveringFor,
  );

  if (!staffProfile) {
    return null;
  }

  // Find their timetable using their staff ID
  const staff = staffTimetables.find((staff) => staff.id === staffProfile.id);

  if (!staff) {
    return null;
  }

  // Find the activity they would normally be doing
  const matchingEntry = staff.entries.find(
    (entry) =>
      entry.start <= start && entry.end >= end && entry.type !== "break",
  );

  return matchingEntry?.activity ?? null;
}
