import styled from "styled-components";
import Header from "../Header";
import MainFisrtPag from "../MainFirstPag";
import { useState } from "react";

const Global = styled.div`
  min-height: 100vh;
  background-color: #dc0a2d;
  padding: 0 3em;
`;

function FirstPag() {
  const [inputValue, setInputValue] = useState(null);
  return (
    <Global>
      <Header set={(value) => setInputValue(value)} />
      <MainFisrtPag />
    </Global>
  );
}

export default FirstPag;
