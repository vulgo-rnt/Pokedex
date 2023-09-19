import { useState } from "react";
import styled from "styled-components";

const CardContanier = styled.span`
  width: 100px;
`;

const IdPokemonContanier = styled.p``;

function Card({ input }) {
  const [poke, setPoke] = useState({});
  const fet = async () => {
    const pokemonInfos = await fetch(
      ` http://192.168.0.95:4111/pokemon/${input}`
    );
    const pokemon = await pokemonInfos.json();
    setPoke(pokemon);
  };
  fet();

  return (
    <CardContanier>
      <img src={poke.img?.[0]} />
      <p>{poke.name}</p>
      <IdPokemonContanier>{poke.id}</IdPokemonContanier>
    </CardContanier>
  );
}

export default Card;
