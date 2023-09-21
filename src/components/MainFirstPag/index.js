import { Link } from "react-router-dom";
import styled from "styled-components";

const MainContanier = styled.main`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const DivContanier = styled.div``;

const ButtonContanier = styled.button`
  font-size: 30px;
  color: black;
  border: none;
  padding: 10px;
  border-radius: 20px;
  background-color: transparent;
`;

const regions = [
  "Kanto",
  "Johto",
  "Hoenn",
  "Sinnoh",
  "Unova",
  "Kalos",
  "Alola",
  "Galar",
  "Paldea",
];
const types = [
  "Bug",
  "Dark",
  "Dragon",
  "Eletric",
  "Fairy",
  "Fighting",
  "Fire",
  "Flying",
  "Ghost",
  "Grass",
  "Ground",
  "Ice",
  "Normal",
  "Poison",
  "Psychic",
  "Rock",
  "Steel",
  "Water",
];
const allAndFavorite = ["All", "Favorite"];

function MainFisrtPag() {
  return (
    <MainContanier>
      <DivContanier>
        {allAndFavorite.map((value, index) => (
          <Link to={`/${value.toLowerCase()}`} key={index}>
            <ButtonContanier>{value}</ButtonContanier>
          </Link>
        ))}
      </DivContanier>
      <DivContanier>
        {regions.map((value, index) => (
          <Link to={`/region/${value.toLowerCase()}`} key={index}>
            <ButtonContanier>{value}</ButtonContanier>
          </Link>
        ))}
      </DivContanier>
      <DivContanier>
        {types.map((value, index) => (
          <Link to={`/type/${value.toLowerCase()}`} key={index}>
            <ButtonContanier>{value}</ButtonContanier>
          </Link>
        ))}
      </DivContanier>
    </MainContanier>
  );
}

export default MainFisrtPag;
