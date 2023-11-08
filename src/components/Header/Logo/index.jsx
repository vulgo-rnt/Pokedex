import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  gap: 1em;
  font-family: "Pokemon Classic Regular";

  h1 {
    text-decoration: none;
    color: #0a090c;
  }
  img {
    height: 80px;
    width: 80px;
    margin: auto;
  }
  @media (max-width: 730px) {
    h1 {
      display: none;
    }
    img {
      height: 50px;
      width: 50px;
    }
  }
`;

function Logo() {
  return (
    <Link to="/">
      <LogoContainer>
        <img src="/pokedex-icon.png" alt="logo" />
        <h1>Pokedex</h1>
      </LogoContainer>
    </Link>
  );
}

export default Logo;
