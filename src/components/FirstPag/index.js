import styled from "styled-components";
import Header from "../Header";
import MainFisrtPag from "../MainFirstPag";

const Global = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: red;
  box-sizing: border-box;
`;

function FirstPag() {
  return (
    <Global>
      <Header />
      <MainFisrtPag />
    </Global>
  );
}

export default FirstPag;
