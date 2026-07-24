import type { StaffProfile } from "@/types/staffProfile";
import type { TimetableEntry } from "@/data/staff/timetable/staffTimetable";

export type StaffMember = {
  id: string;
  profile: StaffProfile;
  timetable: TimetableEntry[];
};
