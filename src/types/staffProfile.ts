export type StaffWorkingDay =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday";

export type StaffWorkingHours = {
  day: StaffWorkingDay;
  start: string;
  end: string;
};

export type StaffProfile = {
  /**
   * Permanent internal identifier.
   */
  id: string;

  /**
   * Name shown throughout the Staff System.
   */
  name: string;

  /**
   * Staff initials used for compact labels.
   */
  initials?: string;

  /**
   * Primary job role.
   */
  role: string;

  /**
   * Additional responsibilities or roles.
   */
  additionalRoles?: string[];

  /**
   * Whether the staff member is currently active.
   */
  active: boolean;

  /**
   * Days the staff member normally works.
   */
  workingDays: StaffWorkingDay[];

  /**
   * Normal start and finish times.
   * Actual availability is checked against the timetable.
   */
  workingHours?: StaffWorkingHours[];

  /**
   * Existing staff-student relationships.
   * More detailed relationships will eventually
   * be maintained in student profiles.
   */
  worksWithStudentInitials: string[];

  /**
   * Skills that may influence cover recommendations.
   */
  skills: string[];

  /**
   * Whether this person is normally considered
   * for cover. False does not necessarily mean
   * they cannot be manually selected.
   */
  canProvideCover: boolean;

  /**
   * Whether this person normally provides break cover.
   */
  canProvideBreakCover?: boolean;

  /**
   * Optional cover ranking preference.
   */
  coverPriority?: number;

  /**
   * General operational cover notes.
   * Do not store sensitive student information here.
   */
  coverNotes?: string;
};
