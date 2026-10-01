export type StreakData = {
  currentStreak: number;
  longestStreak: number;
  lastActiveDate: string | null;
};

export function updateStreak(
  streak: StreakData,
  activityDate: string
): StreakData {
  const lastDate = streak.lastActiveDate;

  // First-ever activity
  if (!lastDate) {
    return {
      currentStreak: 1,
      longestStreak: 1,
      lastActiveDate: activityDate,
    };
  }

  // Same day → don't increase streak
  if (lastDate === activityDate) {
    return streak;
  }

  const last = new Date(lastDate);
  const current = new Date(activityDate);

  const differenceInMs =
    current.getTime() - last.getTime();

  const differenceInDays =
    differenceInMs / (1000 * 60 * 60 * 24);

  // Activity happened the next day
  if (differenceInDays === 1) {
    const newStreak = streak.currentStreak + 1;

    return {
      currentStreak: newStreak,
      longestStreak: Math.max(
        streak.longestStreak,
        newStreak
      ),
      lastActiveDate: activityDate,
    };
  }

  // Missed one or more days → restart
  return {
    currentStreak: 1,
    longestStreak: streak.longestStreak,
    lastActiveDate: activityDate,
  };
}