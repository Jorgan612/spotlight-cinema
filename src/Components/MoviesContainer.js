import '../SCSS/MoviesContainer.css';
import MovieCard from './MovieCard';


const MoviesContainer = ({ movies, getSingleMovieDetails, addToWatchList, watchList, removeFromWatchList, specificMovie, setSearchValue, searchValue  }) => {
  let movieList;
  if (specificMovie.length > 0) {
    movieList = specificMovie.map((movie, index) => {
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
  }) 
} else {
   movieList = movies.map((movie, index) => {
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
  })
};
  return (
    <section className='movies-container'>
      {movieList}
    </section>  
  )
};

export default MoviesContainer;