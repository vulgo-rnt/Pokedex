import styled from "styled-components";
import Card from "../Card";
import { useEffect, useState } from "react";

const SectionContanier = styled.section`
  display: flex;
`;

function ListOrdPoke() {
  const location = new String(window.location.pathname);
  const locationTreat = location.substring(1);

  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(` http://192.168.0.95:4111/${locationTreat}`)
      .then((resp) => resp.json())
      .then((resp) => setList(resp));
  }, []);

  return (
    <SectionContanier>
      {list.map((pokemon, index) => (
        <Card key={index} input={pokemon} />
      ))}
    </SectionContanier>
  );
}

export default ListOrdPoke;
