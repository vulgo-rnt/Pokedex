import styled from "styled-components";
import Logo from "components/Header/Logo";
import FindInput from "components/FindInput";

const HeaderContanier = styled.header`
  display: flex;
  justify-content: space-between;
  padding-top: 2em;
  align-items: center;
`;

function Header() {
  return (
    <HeaderContanier>
      <Logo />
      <FindInput />
    </HeaderContanier>
  );
}

export default Header;
