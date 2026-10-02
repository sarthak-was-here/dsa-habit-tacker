import type { DailyQuestState } from "../quests/questEngine";

type DailyQuestProps = {
  quest: DailyQuestState;
};

function DailyQuest({
  quest,
}: DailyQuestProps) {
  return (
    <div>
      <h3>⚔️ Today's Quest</h3>

      <p>
        Solve 1 LeetCode Problem
      </p>

      <p>
        Progress: {quest.progress} / {quest.target}
      </p>

      <p>
        Reward: +{quest.xpReward} XP
      </p>

      {quest.completed && (
        <p>✅ Quest Complete!</p>
      )}
    </div>
  );
}

export default DailyQuest;