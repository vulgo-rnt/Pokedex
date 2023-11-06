import { Autocomplete, TextField } from "@mui/material";
import styled from "styled-components";
import options from "./pokeNames/options.json";
import { useState, useEffect } from "react";
import DialogCard from "components/DialogCard";

const DivContanier = styled.div`
  label {
    z-index: 0;
  }
  width: 250px;
`;

function FindInput() {
  const [inputValue, setInputValue] = useState(null);

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    if (inputValue) {
      fetch(
        `https://pokedex-backend-vulgo-rnt.vercel.app/pokemon/${inputValue}`
      )
        .then((resp) => resp.json())
        .then((resp) => {
          setPokemon(resp);
        });
    }
  }, [inputValue]);

  return (
    <>
      <DivContanier>
        <Autocomplete
          options={options}
          renderInput={(params) => (
            <TextField
              {...params}
              label={"Find Pokemon"}
              onBlur={(event) => {
                setInputValue(event.target.value);
              }}
              onKeyUp={(event) => {
                if (event.key === "Enter") {
                  setInputValue(event.target.value);
                }
              }}
            />
          )}
        />
      </DivContanier>
      {pokemon && (
        <DialogCard
          poke={pokemon}
          set={(param) => {
            setInputValue(param);
            setPokemon(param);
          }}
        />
      )}
    </>
  );
}

export default FindInput;
