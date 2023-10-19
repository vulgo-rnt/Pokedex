import styled, { createGlobalStyle } from "styled-components";

const ResetStyled = createGlobalStyle`

  @font-face {
    font-family: "Pokemon Classic Regular";
    src: url("https://db.onlinewebfonts.com/t/900f8add35323c44ee840c611ed9a7a5.eot");
    src: url("https://db.onlinewebfonts.com/t/900f8add35323c44ee840c611ed9a7a5.eot?#iefix")
        format("embedded-opentype"),
      url("https://db.onlinewebfonts.com/t/900f8add35323c44ee840c611ed9a7a5.woff")
        format("woff"),
      url("https://db.onlinewebfonts.com/t/900f8add35323c44ee840c611ed9a7a5.woff2")
        format("woff2"),
      url("https://db.onlinewebfonts.com/t/900f8add35323c44ee840c611ed9a7a5.ttf")
        format("truetype"),
      url("https://db.onlinewebfonts.com/t/900f8add35323c44ee840c611ed9a7a5.svg#Pokemon Classic Regular")
        format("svg");
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
  background-color: #dc0a2d;
  padding: 0 3em;
`;

export { GlobalStyled, ResetStyled };
