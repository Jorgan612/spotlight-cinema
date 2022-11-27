import '../SCSS/MoviesContainer.css';
import MovieCard from './MovieCard';

const MoviesContainer = ({ movies, getSingleMovieDetails, addToWatchList, watchList, removeFromWatchList }) => {
  const movieList = movies.map((movie, index) => {
    let isOnWatchList = false;
    watchList.forEach(watchListMovie => {
      if (movie.id === watchListMovie.id) {
        isOnWatchList = true;
      }
    });
    
    return <MovieCard 
      img={movie.poster_path}
      key={index}
      id={movie.id}
      getSingleMovieDetails={getSingleMovieDetails}
      addToWatchList={addToWatchList}
      isOnWatchList={isOnWatchList}
      removeFromWatchList={removeFromWatchList}
    /> 
  });

  return (
    <section className='movies-container'>
      {movieList}
    </section>
  )
};

export default MoviesContainer;