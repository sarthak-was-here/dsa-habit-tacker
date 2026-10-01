import XPBar from "./XPBar";

type PlayerCardProps = {
  level: number;
  title: string;
  totalXp: number;
  currentLevelXP: number;
  nextLevelXP: number | null;
};

function PlayerCard({
  level,
  title,
  totalXp,
  currentLevelXP,
  nextLevelXP,
}: PlayerCardProps) {
  const progressXp = totalXp - currentLevelXP;

  const requiredForNextLevel =
    nextLevelXP !== null
      ? nextLevelXP - currentLevelXP
      : 0;

  return (
    <div>
      <h2>
        Level {level} — {title}
      </h2>

      <h3>⭐ {totalXp.toLocaleString()} Total XP</h3>

      {nextLevelXP !== null ? (
        <>
          <p>Progress to Level {level + 1}</p>

          <XPBar
            xp={progressXp}
            maxXp={requiredForNextLevel}
          />
        </>
      ) : (
        <p>👑 Maximum Level</p>
      )}

      <p>🔥 Streak: 0 days</p>
    </div>
  );
}

export default PlayerCard;