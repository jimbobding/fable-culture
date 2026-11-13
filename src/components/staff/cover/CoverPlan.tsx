import type { CoverBoardSession } from "@/core/staff/cover/types";
import type { CoverAssignment } from "@/core/staff/cover/coverStorage";

type CoverPlanProps = {
  assignments: CoverAssignment[];
  coverBoard: CoverBoardSession[];
  getStaffName: (staffId: string) => string;
};

export default function CoverPlan({
  assignments,
  coverBoard,
  getStaffName,
}: CoverPlanProps) {
  const activeAssignments = assignments.filter(
    (assignment) => assignment.coveredById,
  );

  return (
    <section className="rounded-3xl bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-bold">Cover plan</h2>

      {activeAssignments.length === 0 ? (
        <p className="text-slate-500">No cover assigned yet.</p>
      ) : (
        <div className="space-y-3">
          {activeAssignments.map((assignment) => {
            const session = coverBoard.find(
              (item) => item.id === assignment.sessionId,
            );

            if (!session) return null;

            return (
              <div
                key={assignment.sessionId}
                className="rounded-2xl border border-green-200 bg-green-50 p-4"
              >
                <p className="font-bold">
                  {session.entry.start} - {session.entry.end}
                </p>

                <p>{session.entry.activity}</p>

                <p className="text-sm text-slate-600">
                  Normally with: {session.absentStaffName}
                </p>

                <p className="text-sm font-semibold text-green-800">
                  Covered by: {getStaffName(assignment.coveredById)}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
