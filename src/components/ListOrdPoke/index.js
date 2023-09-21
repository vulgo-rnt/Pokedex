import styled from "styled-components";

const SectionContanier = styled`
    display: flex;
`;
function ListOrdPoke({ ord }) {
  return <SectionContanier>{ord.map((pokemon) => {})}</SectionContanier>;
}

export default ListOrdPoke;
