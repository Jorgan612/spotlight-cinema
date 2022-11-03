import '../SCSS/MoviesContainer.css'
import MovieCard from './MovieCard';

const MoviesContainer = ({movies, getSingleMovieDetails, addToWatchList, isOnWatchList}) => {
  const movieList = movies.map((movie, index) => {

    return <MovieCard 
      img={movie.poster_path}
      key={index}
      id={movie.id}
      getSingleMovieDetails={getSingleMovieDetails}
      addToWatchList={addToWatchList}
      isOnWatchList={isOnWatchList}
    />
  })

  return (
    <section className='movies-container'>
      {movieList}
    </section>
  )
}

export default MoviesContainer;