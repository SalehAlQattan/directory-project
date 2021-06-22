// components
import Movie from './Movie'
// data
import movies from '../movies';

const MoviesList = () => {  
    const moviesList = movies.map(movie => {
    return (
      <Movie 
        title={movie.title}
        poster={movie.poster}
        slug={movie.slug}
      />
    )
  })
  return (
    <div>
    {moviesList}
    </div>
  )
}

export default MoviesList
