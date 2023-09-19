import styled from "styled-components";

const LogoContainer = styled.img`
  width: 80px;
`;

function Logo() {
  return <LogoContainer src="pokedex-icon.png" alt="logo" />;
}

export default Logo;
