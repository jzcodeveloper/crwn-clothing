import { createGlobalStyle } from "styled-components";

import OpenSansCondensedLight from "../assets/fonts/OpenSansCondensed-Light.ttf";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border: none;
    font-family: "Open Sans Condensed";
  }

  a {
    text-decoration: none;
    color: black;
  }

  @font-face {
    font-family: "Open Sans Condensed";
    src: url(${OpenSansCondensedLight});
  }
`;

export default GlobalStyle;
