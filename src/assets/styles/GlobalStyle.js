import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  *, *::after, *::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Poppins', sans-serif;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  a, button {
    font-family: 'Poppins', sans-serif;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

export default GlobalStyle;
