import styled from "styled-components";
import Card from "../Card";
import { useEffect, useState } from "react";
import Pagnation from "../Pagnation";

const SectionContanier = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
  margin: 6%;
`;

const PagsLink = styled.div`
  margin: 0 40% 10% 40%;
`;

function ListOrdPoke() {
  const location = new String(window.location.pathname);
  const locationTreat = location.substring(1);

  const [list, setList] = useState([]);

  const [lengthList, setLengthList] = useState(0);

  const [pag, setPag] = useState(1);

  useEffect(() => {
    fetch(`http://192.168.0.95:4111/${locationTreat}/${pag}`)
      .then((resp) => resp.json())
      .then((resp) => {
        setList(resp.response);
        setLengthList(resp.lengthList);
      });
  }, [pag]);

  return (
    <>
      <SectionContanier>
        {list.map((pokemon) => (
          <Card key={pokemon.id} input={pokemon} />
        ))}
      </SectionContanier>
      <PagsLink>
        <Pagnation value={lengthList} set={setPag} />
      </PagsLink>
    </>
  );
}

export default ListOrdPoke;
