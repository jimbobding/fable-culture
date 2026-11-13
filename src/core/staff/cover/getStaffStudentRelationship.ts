import { getStudentByInitials } from "@/data/students/studentProfiles";
import { getStaffProfile } from "@/data/staff/staffProfiles";
import type { StaffRelationship } from "@/types/studentProfile";

export type StaffStudentRelationshipResult = {
  relationship: StaffRelationship | "timetable" | "unknown";
  source: "manual" | "staff-profile" | "none";
};

export function getStaffStudentRelationship(
  staffId: string,
  studentInitials: string,
): StaffStudentRelationshipResult {
  const student = getStudentByInitials(studentInitials);

  // 1. Check manually assigned student relationships first.
  const manualRelationship = student?.staffRelationships.find(
    (entry) => entry.staffId === staffId,
  );

  if (manualRelationship) {
    return {
      relationship: manualRelationship.relationship,
      source: "manual",
    };
  }

  // 2. Fall back to existing staff profile relationships.
  const staff = getStaffProfile(staffId);

  if (staff?.worksWithStudentInitials.includes(studentInitials)) {
    return {
      relationship: "timetable",
      source: "staff-profile",
    };
  }

  // 3. No known relationship.
  return {
    relationship: "unknown",
    source: "none",
  };
}
