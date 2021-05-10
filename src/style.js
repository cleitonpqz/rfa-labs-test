import { createGlobalStyle, css } from "styled-components";
import PoppinsRegular from "./assets/fonts/Poppins-Regular.ttf";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsRegular}); 
  }

  html {
    background: #F6F7FB;
    height: 100%;
  }

  body {
    height: 100%;
    margin: 0;

    font-family: Poppins;
    font-style: normal;
  }

  #root {
    display: grid;
    grid-template-columns: 80px auto 80px;
    grid-template-rows: auto;
    grid-template-areas:
      "leftMargin center rightMargin";
    height: 100%;
  }
`;

export default GlobalStyles;
