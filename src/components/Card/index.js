import { useState } from "react";
import styled from "styled-components";

const CardContanier = styled.span``;

const IdPokemonContanier = styled.p``;

function Card({ input, inputFind = false }) {
  const [poke, setPoke] = useState(input);

  if (inputFind) {
    fetch(` http://192.168.0.95:4111/pokemon/${input}`)
      .then((resp) => resp.json())
      .then((resp) => setPoke(resp));
  }
  return (
    <CardContanier>
      <img src={poke.img?.[1] || poke.img?.[0]} />
      <div>
        <p>{poke.name}</p>
        <IdPokemonContanier>{poke.id}</IdPokemonContanier>
      </div>
    </CardContanier>
  );
}

export default Card;
