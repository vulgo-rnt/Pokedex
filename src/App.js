import styled from "styled-components";
import Header from "./components/Header";

const Global = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: red;
`;

function App() {
  return (
    <Global>
      <Header />
    </Global>
  );
}

export default App;
