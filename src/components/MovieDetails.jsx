// data
import movies from "../movies"
// hooks
import { useParams } from "react-router";
// entire movies as a prop 'better' for next topic!

import MoviesList from "./MoviesList";

const MovieDetails = () => {
  const { movieSlug } = useParams();
  const foundMovie = movies.find(movie => movie.slug === movieSlug);
  return (
    <div>
        <div style={{display: "flex", gap:'5rem', width: '70%', margin:'3rem auto'}}>
          <img style={{width: '300px'}} src={foundMovie.poster} alt={foundMovie.title} />
          <div style={{textAlign: 'left'}}>
            <h2>Movie Title: {foundMovie.title}</h2>
            <h2>Relase Date: {foundMovie.released}</h2>
            <h2>Duration: {foundMovie.runtime}</h2>
            <h2>Genre: {foundMovie.genre}</h2>
            <h2>Plot: {foundMovie.plot}</h2>
          </div>
        </div>
      <MoviesList />
    </div>
  )
}

export default MovieDetails