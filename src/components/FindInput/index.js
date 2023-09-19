import styled from "styled-components";

const Input = styled.input`
  width: 150px;
  border: none;
  border-radius: 20px;
  padding: 8px;
`;

function FindInput({ set }) {
  const submit = (event) => {
    event.preventDefault();
    set(event.target[0].value);
    event.target[0].value = "";
  };

  return (
    <form onSubmit={submit}>
      <Input placeholder="Digite o nome do pokemon." />
    </form>
  );
}

export default FindInput;
