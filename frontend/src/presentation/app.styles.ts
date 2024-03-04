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

  *::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: #d4d4d8;
  }
  *::-webkit-scrollbar-thumb {
    border-radius:5px;
    background: #9ca3af;
  }
  *::-webkit-scrollbar-thumb:hover {
    background-color: #6b7280;
    cursor: pointer;
    filter: brightness(0.8);
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
    max-width: 100vw;
    max-height: 100vh;
    overflow: auto;
  }

  #root {
    width: 100%;
  }
`;

export const Main = styled.main`
  width: 100%;
  height: calc(100vh - 10rem);
`;
