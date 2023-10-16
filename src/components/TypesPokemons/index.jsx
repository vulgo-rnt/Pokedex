import styled from "styled-components";

const TypeContenier = styled.div`
  img {
    gap: 6px;
  }
`;

function TypesPokemons({ types }) {
  return (
    <TypeContenier>
      {types.map((type) => (
        <img key={type} src={`/typesImg/${type}.png`} />
      ))}
    </TypeContenier>
  );
}

export default TypesPokemons;
