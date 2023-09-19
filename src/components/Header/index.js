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
  const [findValue, setFindValue] = useState(null);
  return (
    <HeaderContanier>
      <Logo />
      <FindInput set={(value) => setFindValue(value)} />
      {findValue ? <Card input={findValue} /> : ""}
    </HeaderContanier>
  );
}

export default Header;
