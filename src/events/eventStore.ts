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

export function saveEvent(event: CodeQuestEvent) {
  const events = getEvents();

  events.push(event);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(events)
  );
}