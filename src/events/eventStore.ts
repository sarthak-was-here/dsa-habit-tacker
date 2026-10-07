import type { CodeQuestEvent } from "./types";

const STORAGE_KEY = "codequest-events";

export function getEvents(): CodeQuestEvent[] {
  const savedEvents = localStorage.getItem(STORAGE_KEY);

  if (!savedEvents) {
    return [];
  }

  try {
    return JSON.parse(savedEvents);
  } catch {
    console.warn("Could not read saved CodeQuest events.");
    return [];
  }
}

export function hasEvent(event: CodeQuestEvent): boolean {
  if (!event.externalId) {
    return false;
  }

  const events = getEvents();

  return events.some(
    (existingEvent) =>
      existingEvent.platform === event.platform &&
      existingEvent.externalId === event.externalId
  );
}

export function saveEvent(event: CodeQuestEvent): boolean {
  if (hasEvent(event)) {
    return false;
  }

  const events = getEvents();

  events.push(event);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(events)
  );

  return true;
}

export function hasCompletedProblem(problemId: string): boolean {
  const events = getEvents();

  return events.some(
    (event) =>
      event.type === "PROBLEM_SOLVED" &&
      event.problemId === problemId
  );
}