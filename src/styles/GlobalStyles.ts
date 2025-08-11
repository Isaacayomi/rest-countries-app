import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Nunito Sans", sans-serif;
    transition: .1s linear;

  }

  html, body, #root {
 min-height: 100vh;

}



`;
export default GlobalStyles;
