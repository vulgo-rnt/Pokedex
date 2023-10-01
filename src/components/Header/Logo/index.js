import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  gap: 1em;
  font-family: "Pokemon Classic Regular";
  @media (max-width: 730px) {
    h1 {
      display: none;
    }
  }
`;

function Logo() {
  return (
    <LogoContainer>
      <img
        src="/pokedex-icon.png"
        alt="logo"
        style={{ width: "80px", margin: "auto" }}
      />
      <h1>Pokedex</h1>
    </LogoContainer>
  );
}

export default Logo;
