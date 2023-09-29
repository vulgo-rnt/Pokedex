import { Autocomplete, TextField } from "@mui/material";
import styled from "styled-components";
import options from "./pokeNames/options.json";

const DivContanier = styled.div`
  width: 250px;
`;

function FindInput({ set }) {
  return (
    <DivContanier>
      <Autocomplete
        options={options}
        renderInput={(params) => (
          <TextField
            {...params}
            label={"Find Pokemon"}
            onKeyUp={(event) => {
              if (event.key === "Enter") {
                set(event.target.value);
              }
            }}
          />
        )}
      />
    </DivContanier>
  );
}

export default FindInput;
