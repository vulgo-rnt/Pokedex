import { LinearProgress } from "@mui/material";

function BaseStats({ stats, hidden }) {
  const normalise = (value, max) => ((value - 0) * 100) / (max - 0);

  return (
    <span hidden={hidden}>
      <label>
        HP = {stats.hp}
        <LinearProgress
          value={normalise(stats.hp, 255)}
          variant="determinate"
          color="secondary"
        />
      </label>
      <label>
        Attack = {stats.attack}{" "}
        <LinearProgress
          value={normalise(stats.attack, 190)}
          variant="determinate"
          color="secondary"
        />
      </label>
      <label>
        Defense = {stats.defense}{" "}
        <LinearProgress
          value={normalise(stats.defense, 250)}
          variant="determinate"
          color="secondary"
        />
      </label>
      <label>
        Special-Attack = {stats["special-attack"]}
        <LinearProgress
          value={normalise(stats["special-attack"], 250)}
          variant="determinate"
          color="secondary"
        />
      </label>
      <label>
        Special-Defense = {stats["special-defense"]}{" "}
        <LinearProgress
          value={normalise(stats["special-defense"], 250)}
          variant="determinate"
          color="secondary"
        />
      </label>
      <label>
        Speed = {stats.speed}{" "}
        <LinearProgress
          value={normalise(stats.speed, 250)}
          variant="determinate"
          color="secondary"
        />
      </label>
    </span>
  );
}

export default BaseStats;
