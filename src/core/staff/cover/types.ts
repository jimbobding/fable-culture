import type {
  StaffTimetable,
  TimetableEntry,
} from "@/data/staff/timetable/staffTimetable";

export type CoverCandidateStatus =
  | "free"
  | "freed-by-pupil-absence"
  | "flexible"
  | "unavailable";

export type CoverCandidate = {
  staffId: string;
  staffName: string;
  status: CoverCandidateStatus;
  score: number;
  reason: string;
};

export type CoverBoardSession = {
  id: string;
  absentStaffId: string;
  absentStaffName: string;
  entry: TimetableEntry;
  candidates: CoverCandidate[];
};

export type BuildCoverBoardInput = {
  staffTimetables: StaffTimetable[];
  selectedDay: string;
  absentStaffIds: string[];
  absentStudentInitials: string[];
};

export type CoverRequirement = {
  id: string;
  absentStaffId: string;
  absentStaffName: string;
  entry: TimetableEntry;
};
