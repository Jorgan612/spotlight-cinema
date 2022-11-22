import '../SCSS/MoviesContainer.css';
import MovieCard from './MovieCard';

const MoviesContainer = ({movies, getSingleMovieDetails, addToWatchList, watchList}) => {
  const movieList = movies.map((movie, index) => {
    // still having issue with duplicates in regards to routing to a new view 
    // and styling when going back to main page

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
    /> 
  })

  return (
    <section className='movies-container'>
      {movieList}
    </section>
  )
}

export default MoviesContainer;