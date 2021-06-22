// packages
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
  font-size: 62.5%;
  box-sizing: border-box;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.6rem;
  text-align: center;
}
`;
export const  MovieContainer = styled.div`

  img {
    width: 100px;
  }

`;