import styled from "styled-components";
import Header from "../Header";
import MainFisrtPag from "../MainFirstPag";
import { useState } from "react";

const Global = styled.div`
  background-color: #dc0a2d;
  box-sizing: border-box;
  height: 100%;
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
