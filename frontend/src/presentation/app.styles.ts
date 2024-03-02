import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    font-family: "Inter", sans-serif;
    background-color: #f0f2f5;
    line-height: 1.5;
    font-weight: 400;
    /* font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; */
  }

  * {
    margin: 0;
    box-sizing: border-box;
  }

  button, a {
    border: 0;
    text-decoration: none;
    cursor: pointer;
    background: transparent;
  }

  body {
    margin: 0;
    display: flex;
    width: 100vw;
    min-height: 100vh;
  }

  #root {
    width: 100%;
  }
`;

export const Main = styled.main`
  width: 100%;
  height: calc(100vh - 10rem);
`;
