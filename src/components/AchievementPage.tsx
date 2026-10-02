import { achievements } from "../achievements/achievements";

type AchievementsPageProps = {
  unlockedIds: string[];
  onBack: () => void;
};

function AchievementsPage({
  unlockedIds,
  onBack,
}: AchievementsPageProps) {
  const unlockedAchievements = achievements.filter(
    (achievement) =>
      unlockedIds.includes(achievement.id)
  );

  const lockedAchievements = achievements.filter(
    (achievement) =>
      !unlockedIds.includes(achievement.id)
  );

  return (
    <div>
      <button onClick={onBack}>
        ← Back to Dashboard
      </button>

      <h1>🏆 Achievements</h1>

      <h2>
        ✅ Unlocked ({unlockedAchievements.length})
      </h2>

      {unlockedAchievements.map((achievement) => (
        <div key={achievement.id}>
          <span>{achievement.icon}</span>

          <strong>{achievement.name}</strong>

          <p>{achievement.description}</p>

          <small>
            +{achievement.xpReward} XP
          </small>
        </div>
      ))}

      <h2>
        🔒 Locked ({lockedAchievements.length})
      </h2>

      {lockedAchievements.map((achievement) => (
        <div key={achievement.id}>
          <span>
            {achievement.hidden ? "❓" : achievement.icon}
          </span>

          <strong>
            {achievement.hidden
              ? "???"
              : achievement.name}
          </strong>

          <p>
            {achievement.hidden
              ? "Something is waiting for you..."
              : achievement.description}
          </p>

          <small>🔒 Locked</small>
        </div>
      ))}
    </div>
  );
}

export default AchievementsPage;