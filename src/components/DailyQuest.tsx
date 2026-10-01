type DailyQuestProps = {
  onComplete: () => void;
};

function DailyQuest({ onComplete }: DailyQuestProps) {
  return (
    <div>
      <h3>Today's Quest</h3>

      <p>⚔️ Solve 1 LeetCode Problem</p>

      <button onClick={onComplete}>
        Complete Quest +50 XP
      </button>
    </div>
  );
}

export default DailyQuest;