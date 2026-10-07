import type { CodeQuestEvent } from "./types";

const events: CodeQuestEvent[] = [];

export function getEvents(): CodeQuestEvent[] {
  return events;
}

export function hasEvent(event: CodeQuestEvent): boolean {
  if (!event.externalId) {
    return false;
  }

  return events.some(
    (existingEvent) =>
      existingEvent.platform === event.platform &&
      existingEvent.externalId === event.externalId
  );
}

export function hasCompletedProblem(
  problemId: string
): boolean {
  return events.some(
    (event) =>
      event.type === "PROBLEM_SOLVED" &&
      event.problemId === problemId
  );
}

export function saveEvent(event: CodeQuestEvent): void {
  events.push(event);
}