import { useEffect } from "react";
import { achievements } from "../achievements/achievements";

type AchievementToastProps = {
  achievementId: string;
  onClose: () => void;
};

function AchievementToast({
  achievementId,
  onClose,
}: AchievementToastProps) {
  const achievement = achievements.find(
    (item) => item.id === achievementId
  );

  useEffect(() => {
  const timer = setTimeout(() => {
    onClose();
  }, 10000);

  return () => clearTimeout(timer);
}, [achievementId]);

  if (!achievement) {
    return null;
  }

  return (
    <div className="achievement-toast">
      <div className="achievement-toast-title">
        🏆 ACHIEVEMENT UNLOCKED
      </div>

      <div className="achievement-toast-icon">
        {achievement.icon}
      </div>

      <div className="achievement-toast-name">
        {achievement.name}
      </div>

      <div className="achievement-toast-description">
        {achievement.description}
      </div>

      <div className="achievement-toast-xp">
        +{achievement.xpReward} XP
      </div>
    </div>
  );
}

export default AchievementToast;