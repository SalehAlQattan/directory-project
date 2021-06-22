// hooks
import { Link } from 'react-router-dom';
// styles
import { MovieContainer } from '../styles';
const Movie = ({title, poster, slug}) => {
  return (
    <Link to={`/movies/${slug}`}>
      <MovieContainer>
        <img src={poster} alt={title} />
        <h2>{title}</h2>
      </MovieContainer>
    </Link>
  )
}

export default Movie
