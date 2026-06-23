import { mondayEntries } from "./timetableDays/monday";
import { tuesdayEntries } from "./timetableDays/tuesday";
import { WednesdayEntries } from "./timetableDays/wednesday";
import { thursdayEntries } from "./timetableDays/thursday";
import { fridayEntries } from "./timetableDays/friday";

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
};

export type StaffTimetable = {
  id: string;
  name: string;
  entries: TimetableEntry[];
};

const staffNames: Record<string, string> = {
  ben: "Ben",
  chris: "Chris",
  "claire-t": "Claire T",
  craig: "Craig",
  david: "David",
  "debbie-r": "Debbie R",
  elizabeth: "Elizabeth",
  hope: "Hope",
  jimmy: "Jimmy",
  jo: "Jo",
  jodie: "Jodie",
  katie: "Katie",
  laura: "Laura",
  "lizzy-l": "Lizzy L",
  nicky: "Nicky",
  ruth: "Ruth",
  safa: "Safa",
  samantha: "Samantha",
  sonia: "Sonia",
  vicky: "Vicky",
};

const allEntriesByStaff: Record<string, TimetableEntry[]> = {};

for (const dayEntries of [
  mondayEntries,
  tuesdayEntries,
  WednesdayEntries,
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

export const staffTimetables: StaffTimetable[] = Object.entries(staffNames).map(
  ([id, name]) => ({
    id,
    name,
    entries: allEntriesByStaff[id] ?? [],
  }),
);
