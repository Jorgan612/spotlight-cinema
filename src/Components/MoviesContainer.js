import '../SCSS/MoviesContainer.css'
import MovieCard from './MovieCard';

const MoviesContainer = ({movies, getSingleMovieDetails}) => {
  const movieList = movies.map((movie, index) => {
    return <MovieCard 
      img={movie.poster_path}
      key={index}
      id={movie.id}
      getSingleMovieDetails={getSingleMovieDetails}
    />
  })

  return (
    <section className='movies-container'>
      {movieList}
    </section>
  )
}

export default MoviesContainer;