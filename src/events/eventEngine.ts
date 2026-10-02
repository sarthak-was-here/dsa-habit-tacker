import { saveEvent, hasEvent } from "./eventStore";
import {
  processQuestEvent,
  type DailyQuestState,
} from "../quests/questEngine";

import { getEvents } from "./eventStore";
import { getAchievementStats } from "./stats";
import { checkAchievements } from "../achievements/achievementsEngine";
// import { saveEvent } from "./eventStore";
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
  streak: StreakData,
  unlockedIds: string[],
  dailyQuest: DailyQuestState
) {
  console.log("CodeQuest Event:", event);
  if (hasEvent(event)) {
  console.log("Duplicate event ignored:", event);

  return {
    xp: 0,
    streak,
    achievements: [],
    quest: dailyQuest,
  };
}

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

  const questResult = processQuestEvent(
  event,
  dailyQuest
);

  const events = getEvents();

  const stats = getAchievementStats(
    events,
    updatedStreak.currentStreak
  );

  const achievementResult = checkAchievements(
    stats,
    unlockedIds
  );

  const totalXp =
  xp + achievementResult.bonusXp + questResult.bonusXp;

console.log(`Base XP earned: +${xp}`);
console.log(
  `Achievement XP earned: +${achievementResult.bonusXp}`
);
console.log(`Total XP earned: +${totalXp}`);
console.log("Updated streak:", updatedStreak);
console.log(
  "New achievements:",
  achievementResult.newlyUnlocked
);

console.log(
  `Quest XP earned: +${questResult.bonusXp}`
);

return {
  xp: totalXp,
  streak: updatedStreak,
  achievements: achievementResult.newlyUnlocked,
  quest: questResult.quest,
};
}