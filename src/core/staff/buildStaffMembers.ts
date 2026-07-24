import type { StaffProfile } from "@/types/staffProfile";
import type {
  StaffTimetable,
  TimetableEntry,
} from "@/data/staff/timetable/staffTimetable";
import type { StaffMember } from "@/types/staffMember";

export function buildStaffMembers(
  profiles: StaffProfile[],
  timetables: StaffTimetable[],
): StaffMember[] {
  const timetableByStaffId = new Map<string, TimetableEntry[]>(
    timetables.map((timetable) => [timetable.id, timetable.entries]),
  );

  return profiles
    .filter((profile) => profile.active)
    .map((profile) => ({
      id: profile.id,
      profile,
      timetable: timetableByStaffId.get(profile.id) ?? [],
    }));
}
