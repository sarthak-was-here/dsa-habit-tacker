import { achievements } from "./achievements";

export type AchievementStats = {
  problemsSolved: number;
  solvedProblemIds: string[];
  solvedTopics: string[];
  solvedDifficulties: string[];
  currentStreak: number;
};

export function checkAchievements(
  stats: AchievementStats,
  unlockedIds: string[]
) {
  const newlyUnlocked: string[] = [];

  function unlock(
    achievementId: string,
    condition: boolean
  ) {
    if (!condition) {
      return;
    }

    // Already unlocked
    if (unlockedIds.includes(achievementId)) {
      return;
    }

    // Check that the achievement exists
    const achievementExists = achievements.some(
      (achievement) => achievement.id === achievementId
    );

    if (!achievementExists) {
      console.warn(
        `Achievement "${achievementId}" does not exist in achievements.ts`
      );
      return;
    }

    newlyUnlocked.push(achievementId);
  }

  // First day of activity
  unlock(
    "first-day",
    stats.problemsSolved >= 1
  );

  // First Array problem
  unlock(
    "first-array",
    stats.solvedTopics.includes("array")
  );

  // First Hash Table problem
  unlock(
    "first-hash-table",
    stats.solvedTopics.includes("hash-table")
  );

  // First Medium problem
  unlock(
    "first-medium",
    stats.solvedDifficulties.includes("MEDIUM")
  );

  // First Hard problem
  unlock(
    "first-hard",
    stats.solvedDifficulties.includes("HARD")
  );

  // Seven day streak
  unlock(
    "seven-day-streak",
    stats.currentStreak >= 7
  );

  return {
    newlyUnlocked,
  };
}