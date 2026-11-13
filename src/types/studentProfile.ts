export type StaffRelationship = "regular" | "suitable" | "not-suitable";

export type StudentStaffRelationship = {
  staffId: string;
  relationship: StaffRelationship;
};

export type StudentProfile = {
  /**
   * Permanent internal student identifier.
   */
  id: string;

  /**
   * Student initials used throughout the system.
   */
  initials: string;

  /**
   * Whether the student is currently active.
   */
  active: boolean;

  /**
   * Learning group, e.g. Maple 2.
   */
  group?: string;

  /**
   * Educational pathway or qualification level.
   */
  curriculumPathway?: string;

  /**
   * Manually assigned staff relationships.
   *
   * The timetable will also be checked
   * automatically for familiar staff.
   */
  staffRelationships: StudentStaffRelationship[];

  /**
   * Support requirements relevant to cover.
   * Detailed sensitive information should be
   * stored separately with restricted access.
   */
  supportRequirements?: {
    staffingRatio?: string;
    requiredSkills?: string[];
  };
};
