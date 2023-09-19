import styled from "styled-components";

const Input = styled.input`
  width: 150px;
  border: none;
  border-radius: 20px;
  padding: 8px;
`;
function FindInput() {
  return <Input placeholder="Digite o nome do pokemon." />;
}

export default FindInput;
