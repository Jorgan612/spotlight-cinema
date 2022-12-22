import '../SCSS/MoviesContainer.css';
import MovieCard from './MovieCard';

const MoviesContainer = ({ movies, getSingleMovieDetails, addToWatchList, watchList, removeFromWatchList, specificMovie }) => {
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
        {movieList.length > 0 ? <div className='titles-container'> </div> 
      : <p className='empty-watchlist-p'>You have no movies saved to your watchlist at this time.</p>}
      <div className='back-btn-div'></div>
    </section>  
  )
};

export default MoviesContainer;