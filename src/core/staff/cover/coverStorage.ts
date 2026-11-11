export type CoverAssignment = {
  sessionId: string;
  coveredById: string;
};

export type SavedCoverPlan = {
  absentStaffIds: string[];
  absentStudentInitials: string[];
  assignments: CoverAssignment[];
};

function getStorageKey(date: string): string {
  return `fable-cover-plan-${date}`;
}

export function loadCoverPlan(date: string): SavedCoverPlan {
  const emptyPlan: SavedCoverPlan = {
    absentStaffIds: [],
    absentStudentInitials: [],
    assignments: [],
  };

  const saved = localStorage.getItem(getStorageKey(date));

  if (!saved) return emptyPlan;

  try {
    const plan = JSON.parse(saved) as SavedCoverPlan;

    if (
      !Array.isArray(plan.absentStaffIds) ||
      !Array.isArray(plan.absentStudentInitials) ||
      !Array.isArray(plan.assignments)
    ) {
      return emptyPlan;
    }

    return plan;
  } catch {
    return emptyPlan;
  }
}

export function saveCoverPlan(date: string, plan: SavedCoverPlan): void {
  localStorage.setItem(getStorageKey(date), JSON.stringify(plan));
}
