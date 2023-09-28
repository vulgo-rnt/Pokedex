import { Autocomplete, TextField } from "@mui/material";
import styled from "styled-components";

const DivContanier = styled.div`
  width: 250px;
`;

const options = ["pikachu", "bulbasaur"];

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
