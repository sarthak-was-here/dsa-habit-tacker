import { useState } from "react";

import { getLevelInfo } from "./game/levels";

import PlayerCard from "./components/PlayerCard";
import DailyQuest from "./components/DailyQuest";
import { processEvent } from "./events/eventEngine";
import type { StreakData } from "./game/streaks";



function App() {
  const simulateSubmission = () => {
  const result = processEvent(
    {
      type: "PROBLEM_SOLVED",
      platform: "manual",
      problemId: "1",
      problemName: "Two Sum",
      difficulty: "EASY",
      topics: ["array", "hash-table"],
      timestamp: new Date().toISOString(),
    },
    streak
  );

  const newXp = xp + result.xp;

  setXp(newXp);

  localStorage.setItem(
    "codequest-xp",
    String(newXp)
  );

  setStreak(result.streak);

  localStorage.setItem(
    "codequest-streak",
    JSON.stringify(result.streak)
  );
};

  const [xp, setXp] = useState(() => {
    const savedXp = localStorage.getItem("codequest-xp");

    return savedXp ? Number(savedXp) : 0;
  });

  const levelInfo = getLevelInfo(xp);

  const solveProblem = () => {
    const newXp = xp + 50;

    setXp(newXp);

    localStorage.setItem(
      "codequest-xp",
      String(newXp)
    );
  };
  const [streak, setStreak] = useState<StreakData>(() => {
  const savedStreak = localStorage.getItem(
    "codequest-streak"
  );

  if (savedStreak) {
    return JSON.parse(savedStreak);
  }

  return {
    currentStreak: 0,
    longestStreak: 0,
    lastActiveDate: null,
  };
});

  return (
    <div>
      <h1>⚔️ CodeQuest</h1>

      <PlayerCard
  level={levelInfo.level}
  title={levelInfo.title ?? "Student"}
  totalXp={xp}
  currentLevelXP={levelInfo.currentLevelXP}
  nextLevelXP={levelInfo.nextLevelXP}
/>
<p>
  🔥 Current Streak: {streak.currentStreak} days
</p>

<p>
  🏆 Longest Streak: {streak.longestStreak} days
</p>

      <DailyQuest
        onComplete={solveProblem}
      />
      <button onClick={simulateSubmission}>
  🧪 Simulate Verified Submission
</button>
    </div>
    
  );
}

export default App;