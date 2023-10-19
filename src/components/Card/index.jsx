import styled from "styled-components";
import TypesPokemons from "components/TypesPokemons";

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

  &:hover {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  }

  img {
    max-width: 60px;
    max-height: 60px;
    margin-left: 6px;
  }
`;

function Card({ input, set }) {
  const poke = input;

  let pokeId = 0;
  if (poke.id < 10) pokeId = `00${poke.id}`;
  else if (poke.id < 100) pokeId = `0${poke.id}`;
  else pokeId = poke.id;

  let pokeName =
    poke.name[0].toUpperCase() + poke.name.substring(1).replace(/-/g, " ");

  return (
    <CardContanier
      onClick={(event) => {
        set(input);
      }}
    >
      <img src={poke.img?.[1] || poke.img?.[0]} />
      <div>
        <p>{pokeName}</p>
        <p>#{pokeId}</p>
      </div>

      <TypesPokemons types={poke.types} />
    </CardContanier>
  );
}

export default Card;
