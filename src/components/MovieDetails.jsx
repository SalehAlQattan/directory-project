// data
import movies from "../movies"
// hooks
import { useParams } from "react-router";
// entire movies as a prop 'better' for next topic!
// .find to find
const MovieDetails = () => {
  const { movieSlug } = useParams();
  const foundMovie = movies.find(movie => movie.slug === movieSlug);
  return (
    <div>
      <img src={foundMovie.poster} alt={foundMovie.title} />
      <h2>Movie Title: {foundMovie.title}</h2>
      <h2>Relase Date: {foundMovie.released}</h2>
      <h2>Duration: {foundMovie.runtime}</h2>
      <h2>Genre: {foundMovie.genre}</h2>
      <h2>Plot: {foundMovie.plot}</h2>
    </div>
  )
}

export default MovieDetails