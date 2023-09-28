import styled from "styled-components";
import Logo from "../Logo";
import FindInput from "../FindInput";

const HeaderContanier = styled.header`
  display: flex;
  justify-content: space-between;
  padding-top: 2em;
  align-items: center;
`;

function Header({ set }) {
  return (
    <HeaderContanier>
      <Logo />
      <FindInput set={(value) => set(value)} />
    </HeaderContanier>
  );
}

export default Header;
