// export type StaffTimetableDay =
//   | "Monday"
//   | "Tuesday"
//   | "Wednesday"
//   | "Thursday"
//   | "Friday";

// export type TimetableEntryType =
//   | "student"
//   | "role-specific"
//   | "break"
//   | "cover"
//   | "available"
//   | "jobs"
//   | "wfh"
//   | "planning"
//   | "other";

// export type TimetableEntry = {
//   day: StaffTimetableDay;
//   start: string;
//   end: string;
//   activity: string;
//   type: TimetableEntryType;
//   notes?: string;
// };

// export type StaffTimetable = {
//   id: string;
//   name: string;
//   entries: TimetableEntry[];
// };

// export const staffTimetables: StaffTimetable[] = [
//   {
//     id: "ben",
//     name: "Ben",
//     entries: [
//       {
//         day: "Monday",
//         start: "09:30",
//         end: "12:25",
//         activity: "Fishing",
//         type: "other",
//       },
//       {
//         day: "Monday",
//         start: "12:25",
//         end: "12:45",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Monday",
//         start: "12:45",
//         end: "15:30",
//         activity: "Aiden T",
//         type: "student",
//       },

//       {
//         day: "Tuesday",
//         start: "09:30",
//         end: "12:15",
//         activity: "Eden",
//         type: "student",
//       },
//       {
//         day: "Tuesday",
//         start: "12:15",
//         end: "12:40",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Tuesday",
//         start: "12:40",
//         end: "15:00",
//         activity: "Libby",
//         type: "student",
//       },

//       {
//         day: "Wednesday",
//         start: "09:30",
//         end: "12:40",
//         activity: "Scott",
//         type: "student",
//       },
//       {
//         day: "Wednesday",
//         start: "12:40",
//         end: "13:00",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Wednesday",
//         start: "13:00",
//         end: "15:00",
//         activity: "Scott",
//         type: "student",
//       },

//       {
//         day: "Thursday",
//         start: "09:30",
//         end: "12:00",
//         activity: "Fishing",
//         type: "other",
//       },
//       {
//         day: "Thursday",
//         start: "12:00",
//         end: "12:25",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Thursday",
//         start: "12:25",
//         end: "15:00",
//         activity: "Libby",
//         type: "student",
//       },

//       {
//         day: "Friday",
//         start: "09:30",
//         end: "12:20",
//         activity: "Scott",
//         type: "student",
//       },
//       {
//         day: "Friday",
//         start: "12:20",
//         end: "12:40",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Friday",
//         start: "12:40",
//         end: "15:00",
//         activity: "Scott",
//         type: "student",
//       },
//     ],
//   },

//   {
//     id: "carla",
//     name: "Carla",
//     entries: [
//       {
//         day: "Tuesday",
//         start: "09:30",
//         end: "12:25",
//         activity: "Josh",
//         type: "student",
//       },
//       {
//         day: "Tuesday",
//         start: "12:25",
//         end: "12:45",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Tuesday",
//         start: "12:45",
//         end: "15:30",
//         activity: "Quinten",
//         type: "student",
//       },

//       {
//         day: "Wednesday",
//         start: "09:30",
//         end: "12:20",
//         activity: "Peyton",
//         type: "student",
//       },
//       {
//         day: "Wednesday",
//         start: "12:20",
//         end: "12:40",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Wednesday",
//         start: "12:40",
//         end: "15:00",
//         activity: "Peyton",
//         type: "student",
//       },

//       {
//         day: "Thursday",
//         start: "09:30",
//         end: "12:25",
//         activity: "Jobs/Cover",
//         type: "jobs",
//       },
//       {
//         day: "Thursday",
//         start: "12:25",
//         end: "12:45",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Thursday",
//         start: "12:45",
//         end: "15:30",
//         activity: "Quinten",
//         type: "student",
//       },
//     ],
//   },

//   {
//     id: "chris",
//     name: "Chris",
//     entries: [
//       {
//         day: "Monday",
//         start: "09:00",
//         end: "16:30",
//         activity: "RS",
//         type: "role-specific",
//       },

//       {
//         day: "Tuesday",
//         start: "09:00",
//         end: "15:00",
//         activity: "RS",
//         type: "role-specific",
//       },

//       {
//         day: "Wednesday",
//         start: "09:00",
//         end: "15:00",
//         activity: "RS",
//         type: "role-specific",
//       },

//       {
//         day: "Thursday",
//         start: "09:00",
//         end: "12:00",
//         activity: "RS",
//         type: "role-specific",
//       },
//       {
//         day: "Thursday",
//         start: "12:00",
//         end: "12:20",
//         activity: "LK Cover",
//         type: "cover",
//       },
//       {
//         day: "Thursday",
//         start: "12:20",
//         end: "16:30",
//         activity: "RS",
//         type: "role-specific",
//       },

//       {
//         day: "Friday",
//         start: "09:30",
//         end: "15:00",
//         activity: "RS",
//         type: "role-specific",
//       },
//     ],
//   },

//   {
//     id: "claire-c",
//     name: "Claire C",
//     entries: [
//       {
//         day: "Tuesday",
//         start: "09:30",
//         end: "11:40",
//         activity: "Jobs",
//         type: "jobs",
//       },
//       {
//         day: "Tuesday",
//         start: "11:40",
//         end: "12:20",
//         activity: "PD Cover",
//         type: "cover",
//       },
//       {
//         day: "Tuesday",
//         start: "12:20",
//         end: "12:40",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Tuesday",
//         start: "12:40",
//         end: "15:00",
//         activity: "Jay",
//         type: "student",
//       },

//       {
//         day: "Wednesday",
//         start: "09:30",
//         end: "12:00",
//         activity: "Available / Jobs",
//         type: "jobs",
//       },
//       {
//         day: "Wednesday",
//         start: "12:00",
//         end: "12:40",
//         activity: "PD Cover",
//         type: "cover",
//       },
//       {
//         day: "Wednesday",
//         start: "12:40",
//         end: "13:00",
//         activity: "TN Cover",
//         type: "cover",
//       },
//       {
//         day: "Wednesday",
//         start: "13:00",
//         end: "15:00",
//         activity: "Available / Jobs",
//         type: "jobs",
//       },

//       {
//         day: "Thursday",
//         start: "09:30",
//         end: "12:00",
//         activity: "Liam",
//         type: "student",
//       },
//       {
//         day: "Thursday",
//         start: "12:00",
//         end: "12:20",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Thursday",
//         start: "12:20",
//         end: "15:00",
//         activity: "Liam",
//         type: "student",
//       },
//     ],
//   },

//   {
//     id: "claire-t",
//     name: "Claire T",
//     entries: [
//       {
//         day: "Monday",
//         start: "09:30",
//         end: "15:00",
//         activity: "RS",
//         type: "role-specific",
//       },

//       {
//         day: "Tuesday",
//         start: "09:30",
//         end: "15:30",
//         activity: "RS",
//         type: "role-specific",
//       },

//       {
//         day: "Wednesday",
//         start: "09:30",
//         end: "15:00",
//         activity: "RS",
//         type: "role-specific",
//       },

//       {
//         day: "Thursday",
//         start: "09:30",
//         end: "15:00",
//         activity: "WFH",
//         type: "wfh",
//       },
//     ],
//   },

//   {
//     id: "craig",
//     name: "Craig",
//     entries: [
//       {
//         day: "Monday",
//         start: "09:30",
//         end: "15:00",
//         activity: "Noah",
//         type: "student",
//       },
//       {
//         day: "Monday",
//         start: "15:00",
//         end: "16:30",
//         activity: "RS",
//         type: "role-specific",
//       },

//       {
//         day: "Tuesday",
//         start: "09:30",
//         end: "16:30",
//         activity: "RS",
//         type: "role-specific",
//       },

//       {
//         day: "Wednesday",
//         start: "09:30",
//         end: "15:00",
//         activity: "Noah",
//         type: "student",
//       },

//       {
//         day: "Thursday",
//         start: "09:00",
//         end: "16:30",
//         activity: "RS",
//         type: "role-specific",
//       },

//       {
//         day: "Friday",
//         start: "09:00",
//         end: "12:25",
//         activity: "RS",
//         type: "role-specific",
//       },
//       {
//         day: "Friday",
//         start: "12:25",
//         end: "12:45",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Friday",
//         start: "12:45",
//         end: "15:30",
//         activity: "Aiden T",
//         type: "student",
//       },
//       {
//         day: "Friday",
//         start: "15:30",
//         end: "16:30",
//         activity: "RS",
//         type: "role-specific",
//       },
//     ],
//   },
//   {
//     id: "david",
//     name: "David",
//     entries: [
//       {
//         day: "Monday",
//         start: "09:30",
//         end: "12:25",
//         activity: "Rowan",
//         type: "student",
//       },
//       {
//         day: "Monday",
//         start: "12:25",
//         end: "12:45",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Monday",
//         start: "12:45",
//         end: "15:30",
//         activity: "May",
//         type: "student",
//       },

//       {
//         day: "Tuesday",
//         start: "09:30",
//         end: "12:20",
//         activity: "Rowan",
//         type: "student",
//       },
//       {
//         day: "Tuesday",
//         start: "12:20",
//         end: "12:40",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Tuesday",
//         start: "12:40",
//         end: "15:00",
//         activity: "Rowan",
//         type: "student",
//       },

//       {
//         day: "Wednesday",
//         start: "09:30",
//         end: "12:35",
//         activity: "Sol",
//         type: "student",
//       },
//       {
//         day: "Wednesday",
//         start: "12:35",
//         end: "12:55",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Wednesday",
//         start: "12:55",
//         end: "15:00",
//         activity: "Sol",
//         type: "student",
//       },

//       {
//         day: "Thursday",
//         start: "09:30",
//         end: "12:20",
//         activity: "Rowan",
//         type: "student",
//       },
//       {
//         day: "Thursday",
//         start: "12:20",
//         end: "12:40",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Thursday",
//         start: "12:40",
//         end: "15:00",
//         activity: "Rowan",
//         type: "student",
//       },

//       {
//         day: "Friday",
//         start: "09:30",
//         end: "12:25",
//         activity: "Sol",
//         type: "student",
//       },
//       {
//         day: "Friday",
//         start: "12:25",
//         end: "12:45",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Friday",
//         start: "12:45",
//         end: "15:30",
//         activity: "May",
//         type: "student",
//       },
//     ],
//   },

//   {
//     id: "debbie-r",
//     name: "Debbie R",
//     entries: [
//       {
//         day: "Monday",
//         start: "09:30",
//         end: "12:00",
//         activity: "Tyrese",
//         type: "student",
//       },
//       {
//         day: "Monday",
//         start: "12:00",
//         end: "12:20",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Monday",
//         start: "12:20",
//         end: "15:00",
//         activity: "Tyrese",
//         type: "student",
//       },

//       {
//         day: "Tuesday",
//         start: "09:30",
//         end: "12:40",
//         activity: "Nixxon",
//         type: "student",
//       },
//       {
//         day: "Tuesday",
//         start: "12:40",
//         end: "13:00",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Tuesday",
//         start: "13:00",
//         end: "15:00",
//         activity: "Nixxon",
//         type: "student",
//       },

//       {
//         day: "Wednesday",
//         start: "09:30",
//         end: "12:20",
//         activity: "Marnie",
//         type: "student",
//       },
//       {
//         day: "Wednesday",
//         start: "12:20",
//         end: "12:40",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Wednesday",
//         start: "12:40",
//         end: "15:00",
//         activity: "Marnie",
//         type: "student",
//       },
//     ],
//   },

//   {
//     id: "elizabeth",
//     name: "Elizabeth",
//     entries: [
//       {
//         day: "Monday",
//         start: "09:30",
//         end: "12:00",
//         activity: "RS",
//         type: "role-specific",
//       },
//       {
//         day: "Monday",
//         start: "12:00",
//         end: "12:30",
//         activity: "PD Cover",
//         type: "cover",
//       },
//       {
//         day: "Monday",
//         start: "12:30",
//         end: "12:45",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Monday",
//         start: "12:45",
//         end: "15:30",
//         activity: "Kobey",
//         type: "student",
//       },

//       {
//         day: "Tuesday",
//         start: "09:30",
//         end: "12:20",
//         activity: "Libby",
//         type: "student",
//       },
//       {
//         day: "Tuesday",
//         start: "12:20",
//         end: "12:40",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Tuesday",
//         start: "12:40",
//         end: "15:00",
//         activity: "Noah M",
//         type: "student",
//       },

//       {
//         day: "Wednesday",
//         start: "09:30",
//         end: "12:35",
//         activity: "Bear",
//         type: "student",
//       },
//       {
//         day: "Wednesday",
//         start: "12:35",
//         end: "12:55",
//         activity: "SC Cover",
//         type: "cover",
//       },
//       {
//         day: "Wednesday",
//         start: "12:55",
//         end: "13:15",
//         activity: "LBK Cover",
//         type: "cover",
//       },

//       {
//         day: "Thursday",
//         start: "09:30",
//         end: "12:10",
//         activity: "RS",
//         type: "role-specific",
//       },
//       {
//         day: "Thursday",
//         start: "12:10",
//         end: "12:30",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Thursday",
//         start: "12:30",
//         end: "15:00",
//         activity: "Jay",
//         type: "student",
//       },

//       {
//         day: "Friday",
//         start: "09:00",
//         end: "12:25",
//         activity: "RS",
//         type: "role-specific",
//       },
//       {
//         day: "Friday",
//         start: "12:25",
//         end: "12:45",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Friday",
//         start: "12:45",
//         end: "15:00",
//         activity: "Kobey",
//         type: "student",
//       },
//       {
//         day: "Friday",
//         start: "15:00",
//         end: "16:30",
//         activity: "RS",
//         type: "role-specific",
//       },
//     ],
//   },

//   {
//     id: "grace",
//     name: "Grace",
//     entries: [
//       {
//         day: "Tuesday",
//         start: "09:30",
//         end: "12:25",
//         activity: "Maths",
//         type: "other",
//       },
//       {
//         day: "Tuesday",
//         start: "12:25",
//         end: "12:45",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Tuesday",
//         start: "12:45",
//         end: "15:30",
//         activity: "Aiden T",
//         type: "student",
//       },

//       {
//         day: "Wednesday",
//         start: "09:30",
//         end: "13:00",
//         activity: "Jessica",
//         type: "student",
//       },
//       {
//         day: "Wednesday",
//         start: "13:20",
//         end: "15:00",
//         activity: "Jessica",
//         type: "student",
//       },

//       {
//         day: "Thursday",
//         start: "09:30",
//         end: "12:25",
//         activity: "Libby",
//         type: "student",
//       },
//       {
//         day: "Thursday",
//         start: "12:25",
//         end: "12:45",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Thursday",
//         start: "12:45",
//         end: "15:30",
//         activity: "Aiden T",
//         type: "student",
//       },

//       {
//         day: "Friday",
//         start: "09:30",
//         end: "12:20",
//         activity: "Maths",
//         type: "other",
//       },
//       {
//         day: "Friday",
//         start: "12:20",
//         end: "12:40",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Friday",
//         start: "12:40",
//         end: "15:00",
//         activity: "Aiden P",
//         type: "student",
//       },
//     ],
//   },

//   {
//     id: "hope",
//     name: "Hope",
//     entries: [
//       {
//         day: "Monday",
//         start: "09:30",
//         end: "12:00",
//         activity: "Peyton",
//         type: "student",
//       },
//       {
//         day: "Monday",
//         start: "12:00",
//         end: "12:20",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Monday",
//         start: "12:20",
//         end: "15:00",
//         activity: "Peyton",
//         type: "student",
//       },

//       {
//         day: "Tuesday",
//         start: "09:30",
//         end: "12:20",
//         activity: "Noah M",
//         type: "student",
//       },
//       {
//         day: "Tuesday",
//         start: "12:20",
//         end: "12:40",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Tuesday",
//         start: "12:45",
//         end: "15:30",
//         activity: "Bear",
//         type: "student",
//       },

//       {
//         day: "Wednesday",
//         start: "09:30",
//         end: "12:25",
//         activity: "Emily",
//         type: "student",
//       },
//       {
//         day: "Wednesday",
//         start: "12:25",
//         end: "12:45",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Wednesday",
//         start: "12:45",
//         end: "15:30",
//         activity: "Emily",
//         type: "student",
//       },

//       {
//         day: "Thursday",
//         start: "09:30",
//         end: "12:30",
//         activity: "Nixxon",
//         type: "student",
//       },
//       {
//         day: "Thursday",
//         start: "12:30",
//         end: "12:50",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Thursday",
//         start: "12:50",
//         end: "15:00",
//         activity: "Nixxon",
//         type: "student",
//       },

//       {
//         day: "Friday",
//         start: "09:30",
//         end: "12:05",
//         activity: "Libby",
//         type: "student",
//       },
//       {
//         day: "Friday",
//         start: "12:05",
//         end: "12:25",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Friday",
//         start: "12:25",
//         end: "15:00",
//         activity: "Libby",
//         type: "student",
//       },
//     ],
//   },
//   {
//     id: "jimmy",
//     name: "Jimmy",
//     entries: [
//       {
//         day: "Monday",
//         start: "09:30",
//         end: "12:05",
//         activity: "RS",
//         type: "role-specific",
//       },
//       {
//         day: "Monday",
//         start: "12:05",
//         end: "12:25",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Monday",
//         start: "12:25",
//         end: "15:00",
//         activity: "Bear",
//         type: "student",
//       },
//       {
//         day: "Monday",
//         start: "15:00",
//         end: "16:30",
//         activity: "RS",
//         type: "role-specific",
//       },

//       {
//         day: "Tuesday",
//         start: "09:30",
//         end: "12:40",
//         activity: "Jessica",
//         type: "student",
//       },
//       {
//         day: "Tuesday",
//         start: "12:40",
//         end: "13:00",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Tuesday",
//         start: "13:00",
//         end: "15:00",
//         activity: "Jessica",
//         type: "student",
//       },

//       {
//         day: "Wednesday",
//         start: "09:30",
//         end: "12:40",
//         activity: "Tyrese",
//         type: "student",
//       },
//       {
//         day: "Wednesday",
//         start: "12:40",
//         end: "13:00",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Wednesday",
//         start: "13:00",
//         end: "15:00",
//         activity: "Tyrese",
//         type: "student",
//       },

//       {
//         day: "Thursday",
//         start: "09:30",
//         end: "12:00",
//         activity: "Tyrese",
//         type: "student",
//       },
//       {
//         day: "Thursday",
//         start: "12:00",
//         end: "12:20",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Thursday",
//         start: "12:20",
//         end: "15:00",
//         activity: "Tyrese",
//         type: "student",
//       },

//       {
//         day: "Friday",
//         start: "09:30",
//         end: "12:05",
//         activity: "Available",
//         type: "available",
//       },
//       {
//         day: "Friday",
//         start: "12:05",
//         end: "12:25",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Friday",
//         start: "12:25",
//         end: "15:00",
//         activity: "Sol",
//         type: "student",
//       },
//     ],
//   },

//   {
//     id: "jo",
//     name: "Jo",
//     entries: [
//       {
//         day: "Monday",
//         start: "09:00",
//         end: "16:30",
//         activity: "WFH",
//         type: "wfh",
//       },

//       {
//         day: "Tuesday",
//         start: "09:30",
//         end: "12:20",
//         activity: "SLC",
//         type: "other",
//       },
//       {
//         day: "Tuesday",
//         start: "12:20",
//         end: "12:40",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Tuesday",
//         start: "12:40",
//         end: "16:30",
//         activity: "SLC",
//         type: "other",
//       },

//       {
//         day: "Wednesday",
//         start: "09:30",
//         end: "12:30",
//         activity: "SLC",
//         type: "other",
//       },
//       {
//         day: "Wednesday",
//         start: "12:30",
//         end: "12:50",
//         activity: "EOu Cover",
//         type: "cover",
//       },
//       {
//         day: "Wednesday",
//         start: "12:50",
//         end: "15:00",
//         activity: "SLC",
//         type: "other",
//       },

//       {
//         day: "Thursday",
//         start: "09:30",
//         end: "10:30",
//         activity: "RS",
//         type: "role-specific",
//       },
//       {
//         day: "Thursday",
//         start: "10:30",
//         end: "12:00",
//         activity: "Jay",
//         type: "student",
//       },
//       {
//         day: "Thursday",
//         start: "12:00",
//         end: "16:30",
//         activity: "RS",
//         type: "role-specific",
//       },

//       {
//         day: "Friday",
//         start: "09:30",
//         end: "12:20",
//         activity: "SLC",
//         type: "other",
//       },
//       {
//         day: "Friday",
//         start: "12:20",
//         end: "12:40",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Friday",
//         start: "12:40",
//         end: "15:00",
//         activity: "Emily",
//         type: "student",
//       },
//       {
//         day: "Friday",
//         start: "15:00",
//         end: "16:30",
//         activity: "RS",
//         type: "role-specific",
//       },
//     ],
//   },

//   {
//     id: "jodie",
//     name: "Jodie",
//     entries: [
//       {
//         day: "Monday",
//         start: "09:30",
//         end: "12:10",
//         activity: "Max",
//         type: "student",
//       },
//       {
//         day: "Monday",
//         start: "12:10",
//         end: "12:30",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Monday",
//         start: "12:30",
//         end: "15:30",
//         activity: "Available / Jobs",
//         type: "jobs",
//       },

//       {
//         day: "Tuesday",
//         start: "09:30",
//         end: "12:05",
//         activity: "Max",
//         type: "student",
//       },
//       {
//         day: "Tuesday",
//         start: "12:05",
//         end: "12:25",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Tuesday",
//         start: "12:25",
//         end: "15:00",
//         activity: "Josh",
//         type: "student",
//       },

//       {
//         day: "Wednesday",
//         start: "09:30",
//         end: "12:15",
//         activity: "Eden",
//         type: "student",
//       },
//       {
//         day: "Wednesday",
//         start: "12:15",
//         end: "12:35",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Wednesday",
//         start: "12:35",
//         end: "15:00",
//         activity: "Available / Jobs",
//         type: "jobs",
//       },

//       {
//         day: "Thursday",
//         start: "09:30",
//         end: "12:20",
//         activity: "Scott",
//         type: "student",
//       },
//       {
//         day: "Thursday",
//         start: "12:20",
//         end: "12:40",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Thursday",
//         start: "12:40",
//         end: "15:00",
//         activity: "Scott",
//         type: "student",
//       },

//       {
//         day: "Friday",
//         start: "09:30",
//         end: "12:15",
//         activity: "Eden",
//         type: "student",
//       },
//       {
//         day: "Friday",
//         start: "12:15",
//         end: "12:35",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Friday",
//         start: "12:35",
//         end: "15:00",
//         activity: "Nixxon",
//         type: "student",
//       },
//     ],
//   },

//   {
//     id: "katie",
//     name: "Katie",
//     entries: [
//       {
//         day: "Monday",
//         start: "09:30",
//         end: "12:40",
//         activity: "Rowan",
//         type: "student",
//       },
//       {
//         day: "Monday",
//         start: "12:40",
//         end: "13:00",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Monday",
//         start: "13:00",
//         end: "16:30",
//         activity: "RS",
//         type: "role-specific",
//       },

//       {
//         day: "Tuesday",
//         start: "09:30",
//         end: "12:00",
//         activity: "RS",
//         type: "role-specific",
//       },
//       {
//         day: "Tuesday",
//         start: "12:00",
//         end: "12:20",
//         activity: "LBK Cover",
//         type: "cover",
//       },
//       {
//         day: "Tuesday",
//         start: "12:20",
//         end: "12:40",
//         activity: "NM Cover",
//         type: "cover",
//       },
//       {
//         day: "Tuesday",
//         start: "12:40",
//         end: "13:00",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Tuesday",
//         start: "13:00",
//         end: "15:00",
//         activity: "Clay Club",
//         type: "other",
//       },

//       {
//         day: "Wednesday",
//         start: "09:30",
//         end: "12:25",
//         activity: "RS",
//         type: "role-specific",
//       },
//       {
//         day: "Wednesday",
//         start: "12:25",
//         end: "12:45",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Wednesday",
//         start: "12:45",
//         end: "15:30",
//         activity: "Noah M",
//         type: "student",
//       },

//       {
//         day: "Thursday",
//         start: "09:30",
//         end: "12:10",
//         activity: "Rowan",
//         type: "student",
//       },
//       {
//         day: "Thursday",
//         start: "12:10",
//         end: "12:30",
//         activity: "AP Cover",
//         type: "cover",
//       },
//       {
//         day: "Thursday",
//         start: "12:30",
//         end: "12:50",
//         activity: "NG Cover",
//         type: "cover",
//       },
//       {
//         day: "Thursday",
//         start: "12:50",
//         end: "16:30",
//         activity: "RS",
//         type: "role-specific",
//       },

//       {
//         day: "Friday",
//         start: "09:30",
//         end: "12:40",
//         activity: "Emily",
//         type: "student",
//       },
//       {
//         day: "Friday",
//         start: "12:40",
//         end: "13:00",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Friday",
//         start: "13:00",
//         end: "16:30",
//         activity: "RS",
//         type: "role-specific",
//       },
//     ],
//   },

//   {
//     id: "laura",
//     name: "Laura",
//     entries: [
//       {
//         day: "Monday",
//         start: "09:30",
//         end: "12:20",
//         activity: "Peyton",
//         type: "student",
//       },
//       {
//         day: "Monday",
//         start: "12:20",
//         end: "12:40",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Monday",
//         start: "12:40",
//         end: "15:00",
//         activity: "Rowan",
//         type: "student",
//       },

//       {
//         day: "Tuesday",
//         start: "09:30",
//         end: "12:00",
//         activity: "Peyton",
//         type: "student",
//       },
//       {
//         day: "Tuesday",
//         start: "12:00",
//         end: "12:20",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Tuesday",
//         start: "12:20",
//         end: "15:00",
//         activity: "Peyton",
//         type: "student",
//       },

//       {
//         day: "Wednesday",
//         start: "09:30",
//         end: "12:00",
//         activity: "Peyton",
//         type: "student",
//       },
//       {
//         day: "Wednesday",
//         start: "12:00",
//         end: "12:20",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Wednesday",
//         start: "12:20",
//         end: "15:00",
//         activity: "Peyton",
//         type: "student",
//       },

//       {
//         day: "Thursday",
//         start: "09:30",
//         end: "12:00",
//         activity: "EO Collect and Drop Off",
//         type: "other",
//       },
//       {
//         day: "Thursday",
//         start: "12:00",
//         end: "12:20",
//         activity: "TN Cover",
//         type: "cover",
//       },
//       {
//         day: "Thursday",
//         start: "12:20",
//         end: "12:40",
//         activity: "RH Cover",
//         type: "cover",
//       },
//       {
//         day: "Thursday",
//         start: "12:40",
//         end: "15:00",
//         activity: "Jobs / Cover",
//         type: "jobs",
//       },
//     ],
//   },
//   {
//     id: "lizzy-l",
//     name: "Lizzy L",
//     entries: [
//       {
//         day: "Monday",
//         start: "09:00",
//         end: "16:30",
//         activity: "WFH",
//         type: "wfh",
//       },

//       {
//         day: "Tuesday",
//         start: "09:30",
//         end: "16:30",
//         activity: "RS",
//         type: "role-specific",
//       },

//       {
//         day: "Wednesday",
//         start: "09:30",
//         end: "16:30",
//         activity: "RS",
//         type: "role-specific",
//       },

//       {
//         day: "Thursday",
//         start: "09:30",
//         end: "11:45",
//         activity: "RS",
//         type: "role-specific",
//       },
//       {
//         day: "Thursday",
//         start: "11:45",
//         end: "12:25",
//         activity: "AP Cover",
//         type: "cover",
//       },
//       {
//         day: "Thursday",
//         start: "12:25",
//         end: "16:30",
//         activity: "RS",
//         type: "role-specific",
//       },

//       {
//         day: "Friday",
//         start: "09:00",
//         end: "16:30",
//         activity: "RS",
//         type: "role-specific",
//       },
//     ],
//   },

//   {
//     id: "matthew",
//     name: "Matthew",
//     entries: [
//       {
//         day: "Tuesday",
//         start: "09:30",
//         end: "12:25",
//         activity: "Josh",
//         type: "student",
//       },
//       {
//         day: "Tuesday",
//         start: "12:25",
//         end: "12:45",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Tuesday",
//         start: "12:45",
//         end: "15:30",
//         activity: "Quinten",
//         type: "student",
//       },

//       {
//         day: "Wednesday",
//         start: "09:30",
//         end: "12:20",
//         activity: "Peyton",
//         type: "student",
//       },
//       {
//         day: "Wednesday",
//         start: "12:20",
//         end: "12:40",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Wednesday",
//         start: "12:40",
//         end: "15:00",
//         activity: "Peyton",
//         type: "student",
//       },

//       {
//         day: "Thursday",
//         start: "09:30",
//         end: "12:25",
//         activity: "Jobs/Cover",
//         type: "jobs",
//       },
//       {
//         day: "Thursday",
//         start: "12:25",
//         end: "12:45",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Thursday",
//         start: "12:45",
//         end: "15:30",
//         activity: "Quinten",
//         type: "student",
//       },
//     ],
//   },

//   {
//     id: "nicky",
//     name: "Nicky",
//     entries: [
//       {
//         day: "Monday",
//         start: "09:30",
//         end: "10:30",
//         activity: "Jobs",
//         type: "jobs",
//       },
//       {
//         day: "Monday",
//         start: "10:30",
//         end: "12:00",
//         activity: "Business Planning",
//         type: "planning",
//       },
//       {
//         day: "Monday",
//         start: "12:00",
//         end: "12:20",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Monday",
//         start: "12:20",
//         end: "15:00",
//         activity: "Peyton",
//         type: "student",
//       },

//       {
//         day: "Tuesday",
//         start: "09:30",
//         end: "12:25",
//         activity: "Libby",
//         type: "student",
//       },
//       {
//         day: "Tuesday",
//         start: "12:25",
//         end: "12:45",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Tuesday",
//         start: "12:45",
//         end: "15:30",
//         activity: "Aiden T",
//         type: "student",
//       },

//       {
//         day: "Wednesday",
//         start: "09:30",
//         end: "12:20",
//         activity: "Marnie",
//         type: "student",
//       },
//       {
//         day: "Wednesday",
//         start: "12:20",
//         end: "12:40",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Wednesday",
//         start: "12:40",
//         end: "15:00",
//         activity: "Marnie",
//         type: "student",
//       },

//       {
//         day: "Thursday",
//         start: "09:30",
//         end: "12:20",
//         activity: "Scott",
//         type: "student",
//       },
//       {
//         day: "Thursday",
//         start: "12:20",
//         end: "12:40",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Thursday",
//         start: "12:40",
//         end: "15:00",
//         activity: "Scott",
//         type: "student",
//       },

//       {
//         day: "Friday",
//         start: "09:30",
//         end: "12:25",
//         activity: "RS",
//         type: "role-specific",
//       },
//       {
//         day: "Friday",
//         start: "12:25",
//         end: "12:45",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Friday",
//         start: "12:45",
//         end: "15:30",
//         activity: "Noah M",
//         type: "student",
//       },
//     ],
//   },

//   {
//     id: "poppy",
//     name: "Poppy",
//     entries: [
//       {
//         day: "Tuesday",
//         start: "09:30",
//         end: "12:00",
//         activity: "RS",
//         type: "role-specific",
//       },
//       {
//         day: "Tuesday",
//         start: "12:00",
//         end: "12:20",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Tuesday",
//         start: "12:20",
//         end: "15:00",
//         activity: "RS",
//         type: "role-specific",
//       },

//       {
//         day: "Thursday",
//         start: "09:30",
//         end: "12:00",
//         activity: "Jay",
//         type: "student",
//       },
//       {
//         day: "Thursday",
//         start: "12:00",
//         end: "12:20",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Thursday",
//         start: "12:20",
//         end: "15:00",
//         activity: "Jay",
//         type: "student",
//       },
//     ],
//   },

//   {
//     id: "ruth",
//     name: "Ruth",
//     entries: [
//       {
//         day: "Monday",
//         start: "09:30",
//         end: "12:20",
//         activity: "Medical / Jobs",
//         type: "jobs",
//       },
//       {
//         day: "Monday",
//         start: "12:20",
//         end: "12:40",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Monday",
//         start: "12:40",
//         end: "15:00",
//         activity: "Noah M",
//         type: "student",
//       },

//       {
//         day: "Tuesday",
//         start: "09:30",
//         end: "12:15",
//         activity: "Eden",
//         type: "student",
//       },
//       {
//         day: "Tuesday",
//         start: "12:15",
//         end: "12:40",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Tuesday",
//         start: "12:40",
//         end: "15:00",
//         activity: "Libby",
//         type: "student",
//       },

//       {
//         day: "Wednesday",
//         start: "09:30",
//         end: "12:20",
//         activity: "Peyton",
//         type: "student",
//       },
//       {
//         day: "Wednesday",
//         start: "12:20",
//         end: "12:40",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Wednesday",
//         start: "12:40",
//         end: "15:00",
//         activity: "Peyton",
//         type: "student",
//       },

//       {
//         day: "Thursday",
//         start: "09:30",
//         end: "12:00",
//         activity: "Peyton",
//         type: "student",
//       },
//       {
//         day: "Thursday",
//         start: "12:00",
//         end: "12:20",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Thursday",
//         start: "12:20",
//         end: "15:00",
//         activity: "Peyton",
//         type: "student",
//       },

//       {
//         day: "Friday",
//         start: "09:30",
//         end: "12:25",
//         activity: "Sol",
//         type: "student",
//       },
//       {
//         day: "Friday",
//         start: "12:25",
//         end: "12:45",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Friday",
//         start: "12:45",
//         end: "15:00",
//         activity: "Sol",
//         type: "student",
//       },
//     ],
//   },
//   {
//     id: "lizzy-l",
//     name: "Lizzy L",
//     entries: [
//       {
//         day: "Monday",
//         start: "09:00",
//         end: "16:30",
//         activity: "WFH",
//         type: "wfh",
//       },
//       {
//         day: "Tuesday",
//         start: "09:30",
//         end: "16:30",
//         activity: "RS",
//         type: "role-specific",
//       },
//       {
//         day: "Wednesday",
//         start: "09:30",
//         end: "11:45",
//         activity: "RS",
//         type: "role-specific",
//       },
//       {
//         day: "Wednesday",
//         start: "11:45",
//         end: "12:25",
//         activity: "AP Cover",
//         type: "cover",
//       },
//       {
//         day: "Wednesday",
//         start: "12:25",
//         end: "16:30",
//         activity: "RS",
//         type: "role-specific",
//       },
//       {
//         day: "Thursday",
//         start: "09:30",
//         end: "16:30",
//         activity: "RS",
//         type: "role-specific",
//       },
//       {
//         day: "Friday",
//         start: "09:00",
//         end: "16:30",
//         activity: "RS",
//         type: "role-specific",
//       },
//     ],
//   },

//   {
//     id: "matthew",
//     name: "Matthew",
//     entries: [
//       {
//         day: "Tuesday",
//         start: "09:30",
//         end: "12:00",
//         activity: "Rowan",
//         type: "student",
//       },
//       {
//         day: "Tuesday",
//         start: "12:00",
//         end: "12:20",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Tuesday",
//         start: "12:20",
//         end: "15:00",
//         activity: "Rowan",
//         type: "student",
//       },

//       {
//         day: "Thursday",
//         start: "09:30",
//         end: "12:35",
//         activity: "Sol",
//         type: "student",
//       },
//       {
//         day: "Thursday",
//         start: "12:35",
//         end: "12:55",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Thursday",
//         start: "12:55",
//         end: "15:00",
//         activity: "Rowan",
//         type: "student",
//       },
//     ],
//   },

//   {
//     id: "nicky",
//     name: "Nicky",
//     entries: [
//       {
//         day: "Monday",
//         start: "09:30",
//         end: "10:30",
//         activity: "Jobs",
//         type: "jobs",
//       },
//       {
//         day: "Monday",
//         start: "10:30",
//         end: "12:00",
//         activity: "Business Planning",
//         type: "planning",
//       },
//       {
//         day: "Monday",
//         start: "12:00",
//         end: "12:20",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Monday",
//         start: "12:20",
//         end: "15:00",
//         activity: "Peyton",
//         type: "student",
//       },

//       {
//         day: "Tuesday",
//         start: "09:30",
//         end: "11:40",
//         activity: "Peyton",
//         type: "student",
//       },
//       {
//         day: "Tuesday",
//         start: "11:40",
//         end: "12:00",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Tuesday",
//         start: "12:00",
//         end: "15:00",
//         activity: "Peyton",
//         type: "student",
//       },

//       {
//         day: "Wednesday",
//         start: "09:30",
//         end: "12:20",
//         activity: "Scott",
//         type: "student",
//       },
//       {
//         day: "Wednesday",
//         start: "12:20",
//         end: "12:40",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Wednesday",
//         start: "12:40",
//         end: "15:00",
//         activity: "Scott",
//         type: "student",
//       },

//       {
//         day: "Thursday",
//         start: "09:30",
//         end: "12:00",
//         activity: "Scott",
//         type: "student",
//       },
//       {
//         day: "Thursday",
//         start: "12:00",
//         end: "12:20",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Thursday",
//         start: "12:20",
//         end: "15:00",
//         activity: "Scott",
//         type: "student",
//       },
//     ],
//   },

//   {
//     id: "poppy",
//     name: "Poppy",
//     entries: [
//       {
//         day: "Tuesday",
//         start: "09:30",
//         end: "11:40",
//         activity: "RS",
//         type: "role-specific",
//       },
//       {
//         day: "Tuesday",
//         start: "11:40",
//         end: "12:00",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Tuesday",
//         start: "12:00",
//         end: "12:40",
//         activity: "Jay Check",
//         type: "student",
//       },
//       {
//         day: "Tuesday",
//         start: "12:45",
//         end: "15:30",
//         activity: "May",
//         type: "student",
//       },
//       {
//         day: "Wednesday",
//         start: "09:30",
//         end: "09:50",
//         activity: "Jay",
//         type: "student",
//       },
//       {
//         day: "Wednesday",
//         start: "09:50",
//         end: "11:15",
//         activity: "Get Moving",
//         type: "other",
//       },
//       {
//         day: "Wednesday",
//         start: "11:15",
//         end: "12:00",
//         activity: "Jay",
//         type: "student",
//       },
//       {
//         day: "Wednesday",
//         start: "12:00",
//         end: "12:20",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Wednesday",
//         start: "12:20",
//         end: "15:00",
//         activity: "Jay Check / Support",
//         type: "student",
//       },

//       {
//         day: "Thursday",
//         start: "09:30",
//         end: "09:50",
//         activity: "Jay",
//         type: "student",
//       },
//       {
//         day: "Thursday",
//         start: "09:50",
//         end: "12:20",
//         activity: "Get Moving",
//         type: "other",
//       },
//       {
//         day: "Thursday",
//         start: "12:20",
//         end: "12:25",
//         activity: "Jay",
//         type: "student",
//       },
//       {
//         day: "Thursday",
//         start: "12:25",
//         end: "12:45",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Thursday",
//         start: "12:45",
//         end: "15:30",
//         activity: "May",
//         type: "student",
//       },

//       {
//         day: "Friday",
//         start: "09:30",
//         end: "12:40",
//         activity: "RS",
//         type: "role-specific",
//       },
//       {
//         day: "Friday",
//         start: "12:40",
//         end: "13:00",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Friday",
//         start: "13:00",
//         end: "16:00",
//         activity: "Study Time",
//         type: "other",
//       },
//     ],
//   },

//   {
//     id: "ruth",
//     name: "Ruth",
//     entries: [
//       {
//         day: "Monday",
//         start: "09:30",
//         end: "12:20",
//         activity: "Medical / Jobs",
//         type: "jobs",
//       },
//       {
//         day: "Monday",
//         start: "12:20",
//         end: "12:40",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Monday",
//         start: "12:45",
//         end: "15:30",
//         activity: "Noah M",
//         type: "student",
//       },

//       {
//         day: "Tuesday",
//         start: "12:00",
//         end: "12:25",
//         activity: "Charlotte",
//         type: "student",
//       },
//       {
//         day: "Tuesday",
//         start: "12:25",
//         end: "12:45",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Tuesday",
//         start: "12:45",
//         end: "15:30",
//         activity: "Aiden P",
//         type: "student",
//       },

//       {
//         day: "Wednesday",
//         start: "09:30",
//         end: "11:45",
//         activity: "Aiden P",
//         type: "student",
//       },
//       {
//         day: "Wednesday",
//         start: "11:45",
//         end: "12:05",
//         activity: "CB Cover",
//         type: "cover",
//       },
//       {
//         day: "Wednesday",
//         start: "12:05",
//         end: "12:25",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Wednesday",
//         start: "12:25",
//         end: "15:00",
//         activity: "Aiden P",
//         type: "student",
//       },

//       {
//         day: "Thursday",
//         start: "09:30",
//         end: "12:10",
//         activity: "Charlotte",
//         type: "student",
//       },
//       {
//         day: "Thursday",
//         start: "12:10",
//         end: "12:30",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Thursday",
//         start: "12:30",
//         end: "15:00",
//         activity: "Charlotte",
//         type: "student",
//       },

//       {
//         day: "Friday",
//         start: "09:30",
//         end: "12:25",
//         activity: "Aiden P",
//         type: "student",
//       },
//       {
//         day: "Friday",
//         start: "12:25",
//         end: "12:45",
//         activity: "Break",
//         type: "break",
//       },
//       {
//         day: "Friday",
//         start: "12:45",
//         end: "15:30",
//         activity: "Noah M",
//         type: "student",
//       },
//     ],
//   },
// ];
