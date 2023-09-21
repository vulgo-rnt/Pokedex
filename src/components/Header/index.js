import styled from "styled-components";
import { useState } from "react";
import Logo from "../Logo";
import FindInput from "../FindInput";
import Card from "../Card";

const HeaderContanier = styled.header`
  display: flex;
  gap: 30px;
  padding: 18px;
`;

function Header() {
  const [inputValue, setInputValue] = useState(null);
  return (
    <HeaderContanier>
      <Logo />
      <FindInput set={(value) => setInputValue(value)} />
      {inputValue ? <Card input={inputValue} /> : ""}
    </HeaderContanier>
  );
}

export default Header;
