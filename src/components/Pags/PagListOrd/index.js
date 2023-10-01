import styled from "styled-components";
import Card from "components/Card";
import Dialogcard from "components/DialogCard";
import { Pagination } from "@mui/material";
import { PagContext } from "context/PagContext";
import { useContext } from "react";

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

function PagListOrd({ context = PagContext }) {
  const { list, lengthList, setPag, dialogCard, setDialogCard } =
    useContext(context);

  return (
    <BodyPag>
      <MainContanierListPokemons>
        {list.map((pokemon) => (
          <Card
            set={(param) => setDialogCard(param)}
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
      {dialogCard && (
        <Dialogcard poke={dialogCard} set={(param) => setDialogCard(param)} />
      )}
    </BodyPag>
  );
}

export default PagListOrd;
