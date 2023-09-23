import styled from "styled-components";

const TypeContenier = styled.img``;

function TypesPokemons({ types }) {
  return (
    <div>
      {types.map((type) => (
        <TypeContenier src={urlType?.[type]} />
      ))}
    </div>
  );
}

export default TypesPokemons;
