import { achievements } from "../achievements/achievements";

type AchievementPanelProps = {
  unlockedIds: string[];
};

function AchievementPanel({
  unlockedIds,
}: AchievementPanelProps) {
  return (
    <div>
      <h2>🏆 Achievements</h2>

      {achievements.map((achievement) => {
        const isUnlocked = unlockedIds.includes(
          achievement.id
        );

        const isHidden =
          achievement.hidden && !isUnlocked;

        return (
          <div key={achievement.id}>
            <span>
              {isHidden
                ? "❓"
                : achievement.icon}
            </span>

            <strong>
              {isHidden
                ? "???"
                : achievement.name}
            </strong>

            <p>
              {isHidden
                ? "Something is waiting for you..."
                : achievement.description}
            </p>

            <small>
              {isUnlocked
                ? `✅ Unlocked • +${achievement.xpReward} XP`
                : "🔒 Locked"}
            </small>
          </div>
        );
      })}
    </div>
  );
}

export default AchievementPanel;