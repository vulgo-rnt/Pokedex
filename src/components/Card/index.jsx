import styled from "styled-components";
import TypesPokemons from "components/TypesPokemons";
import { treatID, treatName } from "useful/traetString";
import PokeName from "components/PokeName";

const CardContanier = styled.span`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  min-width: 367px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 10px;

  &:hover {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  }

  img {
    max-width: 60px;
    max-height: 60px;
  }
`;

function Card({ input, set }) {
  const poke = input;

  return (
    <CardContanier
      onClick={(event) => {
        set(input);
      }}
    >
      <img src={poke.img?.[1] || poke.img?.[0]} />
      <div>
        <PokeName>{treatName(poke.name)}</PokeName>
        <p>#{treatID(poke.id)}</p>
      </div>

      <TypesPokemons types={poke.types} />
    </CardContanier>
  );
}

export default Card;
