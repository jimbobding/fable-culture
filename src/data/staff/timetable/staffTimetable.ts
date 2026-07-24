import { mondayEntries } from "./timetableDays/monday";
import { tuesdayEntries } from "./timetableDays/tuesday";
import { wednesdayEntries } from "./timetableDays/wednesday";
import { thursdayEntries } from "./timetableDays/thursday";
import { fridayEntries } from "./timetableDays/friday";
import { staffProfiles } from "@/data/staff/staffProfiles";

export type StaffTimetableDay =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday";

export type TimetableEntryType =
  | "student"
  | "role-specific"
  | "break"
  | "cover"
  | "available"
  | "jobs"
  | "wfh"
  | "planning"
  | "other";

export type TimetableEntry = {
  day: StaffTimetableDay;
  start: string;
  end: string;
  activity: string;
  type: TimetableEntryType;
  notes?: string;
  coveringFor?: string;
};

export type StaffTimetable = {
  id: string;
  name: string;
  entries: TimetableEntry[];
};

const allEntriesByStaff: Record<string, TimetableEntry[]> = {};

for (const dayEntries of [
  mondayEntries,
  tuesdayEntries,
  wednesdayEntries,
  thursdayEntries,
  fridayEntries,
]) {
  for (const [staffId, entries] of Object.entries(dayEntries)) {
    allEntriesByStaff[staffId] = [
      ...(allEntriesByStaff[staffId] ?? []),
      ...entries,
    ];
  }
}

export const staffTimetables: StaffTimetable[] = staffProfiles
  .filter((staff) => staff.active)
  .map((staff) => ({
    id: staff.id,
    name: staff.name,
    entries: allEntriesByStaff[staff.id] ?? [],
  }));
