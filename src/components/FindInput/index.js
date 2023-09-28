import styled from "styled-components";

const divContanier = styled.div``;

const Input = styled.input`
  width: 250px;
  border: none;
  border-radius: 20px;
  padding: 1em;
`;

function FindInput({ set }) {
  const submit = (event) => {
    event.preventDefault();
    set(event.target[0].value);
    event.target[0].value = "";
  };

  return (
    <form onSubmit={submit}>
      <Input placeholder="Find Pokemon :" />
    </form>
  );
}

export default FindInput;
