export type Level = {
  level: number;
  xpRequired: number;
};

export const levels: Level[] = Array.from(
  { length: 100 },
  (_, index) => {
    const level = index + 1;

    const xpRequired =
  level === 1
    ? 0
    : Math.floor(100 * Math.pow(level - 1, 1.25));

    return {
      level,
      xpRequired,
    };
  }
);

const careerTitles: Record<number, string> = {
  1: "Student",
  5: "CS Student",
  10: "Intern Candidate",
  15: "Intern",
  20: "Junior Engineer",
  30: "Software Engineer",
  40: "Engineer II",
  50: "Algorithm Specialist",
  60: "Senior Engineer",
  75: "Elite Engineer",
  90: "Algorithm Master",
  100: "Algorithm Legend",
};

export function getLevelInfo(xp: number) {
  let currentLevel = levels[0];

  for (const level of levels) {
    if (xp >= level.xpRequired) {
      currentLevel = level;
    } else {
      break;
    }
  }

  let title = careerTitles[1];

  for (const level of Object.keys(careerTitles)) {
    const milestone = Number(level);

    if (currentLevel.level >= milestone) {
      title = careerTitles[milestone];
    }
  }

  return {
    level: currentLevel.level,
    title,
    xp: xp,
    currentLevelXP: currentLevel.xpRequired,
    nextLevelXP:
      currentLevel.level < 100
        ? levels[currentLevel.level].xpRequired
        : null,
  };
}