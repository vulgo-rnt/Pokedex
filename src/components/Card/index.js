import { useState } from "react";
import styled from "styled-components";

const CardContanier = styled.span`
  width: 100px;
`;

const IdPokemonContanier = styled.p``;

function Card({ input }) {
  const [poke, setPoke] = useState({});

  fetch(` http://192.168.0.95:4111/pokemon/${input}`)
    .then((resp) => resp.json())
    .then((resp) => setPoke(resp));

  return (
    <CardContanier>
      <img src={poke.img?.[0]} />
      <p>{poke.name}</p>
      <IdPokemonContanier>{poke.id}</IdPokemonContanier>
    </CardContanier>
  );
}

export default Card;
