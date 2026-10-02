import type { CodeQuestEvent } from "./types";
import type { AchievementStats } from "../achievements/achievementsEngine";

export function getAchievementStats(
  events: CodeQuestEvent[],
  currentStreak: number
): AchievementStats {
  const problemEvents = events.filter(
    (event) => event.type === "PROBLEM_SOLVED"
  );

  const solvedProblemIds = [
    ...new Set(
      problemEvents.map((event) => event.problemId)
    ),
  ];

  const solvedTopics = [
    ...new Set(
      problemEvents.flatMap((event) => event.topics)
    ),
  ];

  const solvedDifficulties = [
    ...new Set(
      problemEvents.map((event) => event.difficulty)
    ),
  ];

  return {
    problemsSolved: solvedProblemIds.length,
    solvedProblemIds,
    solvedTopics,
    solvedDifficulties,
    currentStreak,
  };
}