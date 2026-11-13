import type { StudentProfile } from "@/types/studentProfile";

export const studentProfiles: StudentProfile[] = [
  {
    id: "student-001",
    initials: "TN",
    active: true,
    group: "Maple 2",
    curriculumPathway: "Entry Level",

    staffRelationships: [
      { staffId: "jimmy", relationship: "regular" },
      { staffId: "ben", relationship: "suitable" },
    ],

    supportRequirements: {
      staffingRatio: "1:1",
      requiredSkills: [],
    },
  },
  {
    id: "student-002",
    initials: "BH",
    active: true,
    group: "Maple 2",

    staffRelationships: [
      { staffId: "jimmy", relationship: "regular" },
      { staffId: "jodie", relationship: "suitable" },
    ],
  },
  {
    id: "student-003",
    initials: "JT",
    active: true,

    staffRelationships: [
      { staffId: "jimmy", relationship: "regular" },
      { staffId: "grace", relationship: "suitable" },
    ],
  },
];

export function getStudentProfile(studentId: string) {
  return studentProfiles.find((student) => student.id === studentId);
}

export function getStudentByInitials(initials: string) {
  return studentProfiles.find((student) => student.initials === initials);
}
