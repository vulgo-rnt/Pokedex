import styled from "styled-components";
import { useState } from "react";
import Logo from "../Logo";
import FindInput from "../FindInput";

const HeaderContanier = styled.header`
  display: flex;
  gap: 30px;
  padding: 18px;
`;

const [findValue, setFindValue] = useState("");

function Header() {
  return (
    <HeaderContanier>
      <Logo />
      <FindInput set={(value) => setFindValue(value)} />
      <p>{findValue}</p>
    </HeaderContanier>
  );
}

export default Header;
