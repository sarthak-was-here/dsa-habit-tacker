import {
  createDailyQuest,
  type DailyQuestState,
} from "./quests/questEngine";
import AchievementsPage from "./components/AchievementPage";
import AchievementToast from "./components/AchievementToast";
import { useState } from "react";

import { getLevelInfo } from "./game/levels";

import PlayerCard from "./components/PlayerCard";
import DailyQuest from "./components/DailyQuest";
import type { StreakData } from "./game/streaks";



function App() {
  const [dailyQuest] =
  useState<DailyQuestState>(() => {
    const savedQuest =
      localStorage.getItem(
        "codequest-daily-quest"
      );

    if (savedQuest) {
      const parsedQuest = JSON.parse(savedQuest);

      if (
        parsedQuest.date ===
        createDailyQuest().date
      ) {
        return parsedQuest;
      }
    }

    return createDailyQuest();
  });


  const [currentPage, setCurrentPage] =
  useState<"dashboard" | "achievements">(
    "dashboard"
  );
const [testSubmissionId, setTestSubmissionId] =
  useState("test-submission-1");
  const [testProblemId, setTestProblemId] =
  useState("1");

const [testProblemName, setTestProblemName] =
  useState("Two Sum");

  const [achievementToasts, setAchievementToasts] =
  useState<string[]>([]);

  const [unlockedAchievements] =
  useState<string[]>(() => {
    const saved = localStorage.getItem(
      "codequest-achievements"
    );

    return saved ? JSON.parse(saved) : [];
  });

 const simulateSubmission = async () => {
  const event = {
    type: "PROBLEM_SOLVED" as const,
    platform: "manual" as const,
    externalId: testSubmissionId,
    problemId: testProblemId,
    problemName: testProblemName,
    difficulty: "EASY" as const,
    topics: ["array", "hash-table"],
    timestamp: new Date().toISOString(),
  };

  const response = await fetch(
    "http://localhost:3000/api/events",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    }
  );

  const data = await response.json();

  console.log("BACKEND RESPONSE:", data);
};


  const [xp] = useState(() => {
    const savedXp = localStorage.getItem("codequest-xp");

    return savedXp ? Number(savedXp) : 0;
  });

  const levelInfo = getLevelInfo(xp);

  const [streak] = useState<StreakData>(() => {
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

if (currentPage === "achievements") {
  return (
    <AchievementsPage
      unlockedIds={unlockedAchievements}
      onBack={() => setCurrentPage("dashboard")}
    />
  );
}

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
        quest={dailyQuest}
      />
      <div>
  <input
    value={testSubmissionId}
    onChange={(event) =>
      setTestSubmissionId(event.target.value)
    }
    placeholder="Submission ID"
  />

  <input
    value={testProblemId}
    onChange={(event) =>
      setTestProblemId(event.target.value)
    }
    placeholder="Problem ID"
  />

  <input
    value={testProblemName}
    onChange={(event) =>
      setTestProblemName(event.target.value)
    }
    placeholder="Problem Name"
  />

  <button onClick={simulateSubmission}>
    🧪 Simulate Verified Submission
  </button>
</div>

<button
  onClick={() => setCurrentPage("achievements")}
>
  🏆 Achievements
</button>

<div className="achievement-toast-container">
  {achievementToasts.length > 0 && (
    <AchievementToast
      achievementId={achievementToasts[0]}
      onClose={() => {
        setAchievementToasts((current) =>
          current.slice(1)
        );
      }}
    />
  )}
</div>

    </div>
    
    
  );

}
export default App;