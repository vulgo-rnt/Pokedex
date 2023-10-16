import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  gap: 1em;
  font-family: "Pokemon Classic Regular";
  h1 {
    text-decoration: none;
    color: black;
  }
  @media (max-width: 730px) {
    h1 {
      display: none;
    }
  }
`;

function Logo() {
  return (
    <Link to="/">
      <LogoContainer>
        <img
          src="/pokedex-icon.png"
          alt="logo"
          style={{ width: "80px", margin: "auto" }}
        />
        <h1>Pokedex</h1>
      </LogoContainer>
    </Link>
  );
}

export default Logo;
