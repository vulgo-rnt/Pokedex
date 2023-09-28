import styled from "styled-components";
import Card from "../Card";
import InfoPoke from "../InfoPoke";
import { useEffect, useState } from "react";
import { Pagination } from "@mui/material";

const SectionContanierListPokemons = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
  margin: 6%;
`;

const BodyPag = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function PagOrdPoke() {
  const location = new String(window.location.pathname);
  const locationTreat = location.substring(1);

  const [list, setList] = useState([]);

  const [lengthList, setLengthList] = useState(0);

  const [pag, setPag] = useState(1);

  const [infoPokeCard, setInfoPokeCard] = useState(null);

  useEffect(() => {
    fetch(`http://192.168.0.95:4111/${locationTreat}/${pag}`)
      .then((resp) => resp.json())
      .then((resp) => {
        setList(resp.response);
        setLengthList(resp.lengthList);
      });
  }, [pag]);

  return (
    <BodyPag>
      <SectionContanierListPokemons>
        {list.map((pokemon) => (
          <Card
            set={(param) => setInfoPokeCard(param)}
            key={pokemon.id}
            input={pokemon}
          />
        ))}
      </SectionContanierListPokemons>
      {infoPokeCard && (
        <InfoPoke poke={infoPokeCard} set={(param) => setInfoPokeCard(param)} />
      )}
      <Pagination
        count={Math.ceil(lengthList / 27)}
        onChange={(event, pag) => {
          setPag(pag);
        }}
      />
    </BodyPag>
  );
}

export default PagOrdPoke;
