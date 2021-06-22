// components
import Movie from './Movie'
import SearchBar from './SearchBar';
// data
import movies from '../movies';
// hooks
import { useState } from 'react';


const MoviesList = () => {  

  const [query, setQuery] = useState('')

  const moviesList = movies
    .filter(filteredMovie => filteredMovie.title.toLowerCase().includes(query.toLowerCase()))
    .map(movie => {
      return (
        <Movie 
          title={movie.title}
          poster={movie.poster}
          slug={movie.slug}
        />
      )
  })

  return (
    <>
    <SearchBar setQuery={setQuery}/>
    <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap:'5rem'}}>
      {moviesList}
    </div>
    </>
  )
}

export default MoviesList
