import styled from "styled-components";
import Header from "../Header";
import MainFisrtPag from "../MainFirstPag";
import { useState, useEffect } from "react";
import InfoPoke from "../InfoPoke";

const Global = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  background-color: #dc0a2d;
  padding: 0 3em;
  section {
    top: 30px;
    margin-left: 16%;
  }
`;

function FirstPag() {
  const [inputValue, setInputValue] = useState(null);

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    if (inputValue) {
      fetch(`http://192.168.0.95:4111/pokemon/${inputValue}`)
        .then((resp) => resp.json())
        .then((resp) => {
          setPokemon(resp);
        });
    }
  }, [inputValue]);

  return (
    <Global>
      <Header set={(value) => setInputValue(value)} />
      <MainFisrtPag />
      {pokemon && (
        <InfoPoke
          poke={pokemon}
          set={(param) => {
            setInputValue(param);
            setPokemon(param);
          }}
        />
      )}
    </Global>
  );
}

export default FirstPag;
