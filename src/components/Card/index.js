import styled from "styled-components";

const CardContanier = styled.span`
  width: 100px;
`;

const IdPokemonContanier = styled.p``;

function Card({ id, name, types, img }) {
  return (
    <CardContanier>
      <img src={img} />
      <p>{name}</p>
      <IdPokemonContanier>{id}</IdPokemonContanier>
      {types.map((type) => {
        <span>{type}</span>;
      })}
    </CardContanier>
  );
}

export default Card;
