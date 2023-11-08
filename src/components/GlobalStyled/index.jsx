import styled, { createGlobalStyle } from "styled-components";

const ResetStyled = createGlobalStyle`

  @font-face {
    font-family: "Pokemon Classic Regular";
    src: url("/font.woff")
         format("woff");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  body {
    margin: 0;
  }
  html {
    height: 100%;
  }
  a{
    text-decoration: none;
  }
  *{
    font-family: "Pokemon Classic Regular";
  }
`;

const GlobalStyled = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  background-color: #f50a32;
  padding: 0 3em;
`;

export { GlobalStyled, ResetStyled };
