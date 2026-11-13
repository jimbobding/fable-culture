import type { CoverBoardSession } from "@/core/staff/cover/types";
import type { CoverAssignment } from "@/core/staff/cover/coverStorage";
import { hasCoverClash } from "@/core/staff/cover/coverAssignments";

type CoverSessionCardProps = {
  session: CoverBoardSession;
  coverBoard: CoverBoardSession[];
  assignments: CoverAssignment[];
  onAssignCover: (sessionId: string, staffId: string) => void;
};

export default function CoverSessionCard({
  session,
  coverBoard,
  assignments,
  onAssignCover,
}: CoverSessionCardProps) {
  const assignment = assignments.find((item) => item.sessionId === session.id);

  return (
    <div className="rounded-2xl border p-4">
      <p className="text-sm font-semibold text-red-700">
        {session.absentStaffName} absent
      </p>

      <h3 className="mt-1 text-lg font-bold">
        {session.entry.start} - {session.entry.end}
      </h3>

      <p className="text-slate-700">
        {session.entry.activity}{" "}
        <span className="text-sm text-slate-500">({session.entry.type})</span>
      </p>

      <select
        value={assignment?.coveredById ?? ""}
        onChange={(event) => onAssignCover(session.id, event.target.value)}
        className="mt-4 w-full rounded-xl border border-slate-300 bg-white px-4 py-2"
      >
        <option value="">Assign cover...</option>

        {session.candidates.map((candidate) => {
          const alreadyAssigned = hasCoverClash(
            session.id,
            candidate.staffId,
            assignments,
            coverBoard,
          );

          const unavailable =
            alreadyAssigned ||
            candidate.studentRelationship?.relationship === "not-suitable";

          return (
            <option
              key={candidate.staffId}
              value={candidate.staffId}
              disabled={unavailable}
            >
              {candidate.staffName} —{" "}
              {alreadyAssigned ? "Already covering" : candidate.reason}
            </option>
          );
        })}
      </select>

      <div className="mt-4 space-y-2">
        {session.candidates.slice(0, 5).map((candidate) => (
          <div
            key={candidate.staffId}
            className={`flex items-center justify-between rounded-xl px-4 py-3 ${
              candidate.score >= 90
                ? "bg-green-50"
                : candidate.score >= 70
                  ? "bg-blue-50"
                  : candidate.score >= 40
                    ? "bg-amber-50"
                    : "bg-red-50"
            }`}
          >
            <div>
              <p className="font-semibold">{candidate.staffName}</p>

              <p className="text-sm text-slate-500">{candidate.reason}</p>

              {candidate.studentRelationship &&
                candidate.studentRelationship.relationship !== "unknown" && (
                  <p
                    className={`mt-1 text-xs font-semibold ${
                      candidate.studentRelationship.relationship === "regular"
                        ? "text-green-700"
                        : candidate.studentRelationship.relationship ===
                            "suitable"
                          ? "text-blue-700"
                          : candidate.studentRelationship.relationship ===
                              "not-suitable"
                            ? "text-red-700"
                            : "text-purple-700"
                    }`}
                  >
                    {candidate.studentRelationship.relationship === "regular"
                      ? "Regular staff for this student"
                      : candidate.studentRelationship.relationship ===
                          "suitable"
                        ? "Suitable for this student"
                        : candidate.studentRelationship.relationship ===
                            "not-suitable"
                          ? "Not suitable for this student"
                          : "Works with this student"}
                  </p>
                )}
            </div>

            <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold">
              {candidate.score >= 90
                ? "Best match"
                : candidate.score >= 70
                  ? "Good option"
                  : candidate.score >= 40
                    ? "Flexible"
                    : "Avoid"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
