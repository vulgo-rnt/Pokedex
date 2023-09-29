import styled from "styled-components";

const SectionContanier = styled.section`
  position: fixed;
  width: 60vw;
  background-color: white;
`;

function InfoPoke({ poke, set }) {
  return (
    <SectionContanier>
      <button
        onClick={() => {
          set(null);
        }}
      >
        X
      </button>
      {poke.name && (
        <>
          <p>{poke.name}</p>
          <p>{poke.id}</p>
          <img src={poke.img[0]} />
        </>
      )}
    </SectionContanier>
  );
}
export default InfoPoke;
