import { LinearProgress } from "@mui/material";
import styled from "styled-components";

const StatsContanier = styled.div`
  font-size: 8px;
  width: 95%;
  margin: auto;
`;

function BaseStats({ stats, hidden }) {
  const normalise = (value, max) => ((value - 0) * 100) / (max - 0);

  return (
    <StatsContanier hidden={hidden}>
      <div>
        <p>HP = {stats.hp}</p>
        <LinearProgress
          value={normalise(stats.hp, 255)}
          variant="determinate"
          color="secondary"
        />
      </div>
      <div>
        <p>Attack = {stats.attack}</p>
        <LinearProgress
          value={normalise(stats.attack, 190)}
          variant="determinate"
          color="secondary"
        />
      </div>
      <div>
        <p>Defense = {stats.defense}</p>
        <LinearProgress
          value={normalise(stats.defense, 250)}
          variant="determinate"
          color="secondary"
        />
      </div>
      <div>
        <p>Special-Attack = {stats["special-attack"]}</p>
        <LinearProgress
          value={normalise(stats["special-attack"], 250)}
          variant="determinate"
          color="secondary"
        />
      </div>
      <div>
        <p>Special-Defense = {stats["special-defense"]}</p>
        <LinearProgress
          value={normalise(stats["special-defense"], 250)}
          variant="determinate"
          color="secondary"
        />
      </div>
      <div>
        <p>Speed = {stats.speed}</p>
        <LinearProgress
          value={normalise(stats.speed, 250)}
          variant="determinate"
          color="secondary"
        />
      </div>
    </StatsContanier>
  );
}

export default BaseStats;
