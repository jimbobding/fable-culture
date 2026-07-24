export type StaffWorkingDay =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday";

export type StaffProfile = {
  /**
   * Permanent internal identifier.
   * This should not change when somebody's display name changes.
   */
  id: string;

  /**
   * Name shown throughout the Staff System.
   */
  name: string;

  /**
   * Staff initials used where a compact label is needed.
   */
  initials?: string;

  /**
   * General job role.
   */
  role: string;

  /**
   * Inactive staff can remain in historic data without appearing
   * as current staff members.
   */
  active: boolean;

  /**
   * Days the staff member normally works.
   */
  workingDays: StaffWorkingDay[];

  /**
   * Student initials only.
   */
  worksWithStudentInitials: string[];

  /**
   * Skills that may later influence cover recommendations.
   */
  skills: string[];

  /**
   * Whether this person should normally be considered for cover.
   */
  canProvideCover: boolean;

  /**
   * Optional ranking preference.
   * Higher numbers can later mean a stronger cover preference.
   */
  coverPriority?: number;
};
