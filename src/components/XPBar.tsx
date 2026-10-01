type XPBarProps = {
  xp: number;
  maxXp: number;
};

function XPBar({ xp, maxXp }: XPBarProps) {
  const progress = Math.min((xp / maxXp) * 100, 100);

  return (
    <div>
      <p>
        ⭐ XP: {xp} / {maxXp}
      </p>

      <div
        style={{
          width: "300px",
          height: "20px",
          backgroundColor: "#333",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "#f5c542",
          }}
        />
      </div>
    </div>
  );
}

export default XPBar;