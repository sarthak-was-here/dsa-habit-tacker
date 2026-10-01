import { saveEvent } from "./eventStore";
import type { CodeQuestEvent } from "./types";
import {
  updateStreak,
  type StreakData,
} from "../game/streaks";

export function getXpForEvent(event: CodeQuestEvent): number {
  if (event.type === "PROBLEM_SOLVED") {
    if (event.difficulty === "EASY") {
      return 50;
    }

    if (event.difficulty === "MEDIUM") {
      return 100;
    }

    if (event.difficulty === "HARD") {
      return 200;
    }
  }

  if (event.type === "CONTEST_COMPLETED") {
    return 150;
  }

  return 0;
}

export function processEvent(
  event: CodeQuestEvent,
  streak: StreakData
) {
  console.log("CodeQuest Event:", event);
  saveEvent(event);

  const xp = getXpForEvent(event);

  let updatedStreak = streak;

  if (event.type === "PROBLEM_SOLVED") {
    const activityDate = event.timestamp.split("T")[0];

    updatedStreak = updateStreak(
      streak,
      activityDate
    );
  }

  console.log(`XP earned: +${xp}`);
  console.log("Updated streak:", updatedStreak);

  return {
    xp,
    streak: updatedStreak,
  };
}