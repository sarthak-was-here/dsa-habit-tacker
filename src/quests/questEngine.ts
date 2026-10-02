import type { CodeQuestEvent } from "../events/types";

export type DailyQuestState = {
  id: string;
  date: string;
  progress: number;
  target: number;
  completed: boolean;
  xpReward: number;
};

export const DAILY_QUEST_XP = 50;

export function getTodayKey(): string {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function createDailyQuest(): DailyQuestState {
  return {
    id: "daily-problem",
    date: getTodayKey(),
    progress: 0,
    target: 1,
    completed: false,
    xpReward: DAILY_QUEST_XP,
  };
}

export function processQuestEvent(
  event: CodeQuestEvent,
  quest: DailyQuestState
) {
  const today = getTodayKey();

  // New day → create a fresh daily quest
  let currentQuest = quest;

  if (quest.date !== today) {
    currentQuest = createDailyQuest();
  }

  // Only problem-solving events count
  if (event.type !== "PROBLEM_SOLVED") {
    return {
      quest: currentQuest,
      bonusXp: 0,
    };
  }

  // Quest already completed today
  if (currentQuest.completed) {
    return {
      quest: currentQuest,
      bonusXp: 0,
    };
  }

  const updatedQuest: DailyQuestState = {
    ...currentQuest,
    progress: Math.min(
      currentQuest.progress + 1,
      currentQuest.target
    ),
    completed: true,
  };

  return {
    quest: updatedQuest,
    bonusXp: updatedQuest.xpReward,
  };
}