// styles
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles';
// packages
import { Route, Switch } from 'react-router'
// components
import MoviesList from './components/MoviesList';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
import NavBar from './components/NavBar';

const theme = {
  light: {
    color: '#ccc',
    backgroundColor: '#fff'
  },
  dark: {
    color: '#fff',
    backgroundColor: '#ccc'
  }
}

function App() {
  return (
    <div>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <NavBar />
    <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/movies/:movieSlug'>
        <MovieDetails />
      </Route>
      <Route path='/movies'>
        <MoviesList />
      </Route>
    </Switch>
    </ThemeProvider>
    </div>
  );
}

export default App;
