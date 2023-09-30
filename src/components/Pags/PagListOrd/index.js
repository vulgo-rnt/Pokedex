import styled from "styled-components";
import Card from "components/Card";
import InfoPoke from "components/DialogCard";
import { useEffect, useState } from "react";
import { Pagination } from "@mui/material";

const MainContanierListPokemons = styled.main`
  margin: 2em;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
`;

const BodyPag = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function PagListOrd() {
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
      <MainContanierListPokemons>
        {list.map((pokemon) => (
          <Card
            set={(param) => setInfoPokeCard(param)}
            key={pokemon.id}
            input={pokemon}
          />
        ))}
      </MainContanierListPokemons>
      <Pagination
        count={Math.ceil(lengthList / 27)}
        onChange={(event, pag) => {
          setPag(pag);
        }}
      />
      {infoPokeCard && (
        <InfoPoke poke={infoPokeCard} set={(param) => setInfoPokeCard(param)} />
      )}
    </BodyPag>
  );
}

export default PagListOrd;
