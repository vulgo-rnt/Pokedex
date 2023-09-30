import styled from "styled-components";
import Card from "components/Card";
import InfoPoke from "components/DialogCard";
import { useContext, useEffect } from "react";
import { Pagination } from "@mui/material";
import { PagContext } from "context/FindValues";
import { useLocation } from "react-router-dom";

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
  const {
    list,
    setList,
    lengthList,
    setLengthList,
    pag,
    setPag,
    infoPokeCard,
    setInfoPokeCard,
  } = useContext(PagContext);

  useEffect(() => {
    fetch(`http://192.168.0.95:4111${useLocation()}/${pag}`)
      .then((resp) => resp.json())
      .then((resp) => {
        setList(resp.response);
        setLengthList(resp.lengthList);
      });
    console.log("useEffect");
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
