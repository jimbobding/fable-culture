export function sessionsOverlap(
  startA: string,
  endA: string,
  startB: string,
  endB: string,
): boolean {
  return startA < endB && startB < endA;
}

type CoverAssignment = {
  sessionId: string;
  coveredById: string;
};

type CoverSession = {
  id: string;
  entry: {
    start: string;
    end: string;
  };
};

export function hasCoverClash(
  sessionId: string,
  coveredById: string,
  assignments: CoverAssignment[],
  coverBoard: CoverSession[],
): boolean {
  const session = coverBoard.find((item) => item.id === sessionId);

  if (!session) return false;

  return assignments.some((assignment) => {
    if (
      assignment.sessionId === sessionId ||
      assignment.coveredById !== coveredById
    ) {
      return false;
    }

    const otherSession = coverBoard.find(
      (item) => item.id === assignment.sessionId,
    );

    if (!otherSession) return false;

    return sessionsOverlap(
      session.entry.start,
      session.entry.end,
      otherSession.entry.start,
      otherSession.entry.end,
    );
  });
}
