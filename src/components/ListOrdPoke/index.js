import styled from "styled-components";
import Card from "../Card";
import { useEffect, useState } from "react";
import FindInput from "../FindInput";

const SectionContanier = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
  margin: 6%;
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
    <>
      <SectionContanier>
        {list.map((pokemon, index) => (
          <Card key={index} input={pokemon} />
        ))}
      </SectionContanier>
    </>
  );
}

export default ListOrdPoke;
