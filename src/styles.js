// packages
import styled, { createGlobalStyle } from 'styled-components';
import { NavLink } from 'react-router-dom';

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

export const HomeContainer = styled.div`

  height: 90vh;
  background: #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

`

export const MovieContainer = styled.div`
  img {
    width: 200px;
  }
`;

export const Navigation = styled.div`
  padding: 2rem;
  font-size: 2rem;
  display: flex;
  justify-content: space-around;
  background: #2b2d2f;
`;

export const HomeLink = styled(NavLink)`
  font-weight: bold;
  color: #fff;
  &.active{
    color: red;
    font-weight: bold;
  }
`

// export const MoviesLink = styled(NavLink)`
//   &.active{
//     color: red;
// }
// `

export const InputField = styled.input`
  width: 90%;
  padding: 2rem;
  margin: 1rem;
`