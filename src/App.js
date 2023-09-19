import styled from "styled-components";
import FindInput from "./components/FindInput";
import Logo from "./components/Logo";

const Header = styled.header`
  display: flex;
  gap: 30px;
  padding: 18px;
`;
const Global = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: red;
`;

function App() {
  return (
    <Global>
      <Header>
        <Logo />
        <FindInput />
      </Header>
    </Global>
  );
}

export default App;
