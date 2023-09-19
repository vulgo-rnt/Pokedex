import styled from "styled-components";

const CardContanier = styled.span`
  width: 100px;
`;

const idPokemonContanier = styled.p``;

function Card({ id, name, types, img }) {
  return (
    <CardContanier>
      <img src={img} />
      <p>{name}</p>
      <idPokemonContanier>{id}</idPokemonContanier>
      {types.map((type) => {
        <span>{type}</span>;
      })}
    </CardContanier>
  );
}

export default Card;
