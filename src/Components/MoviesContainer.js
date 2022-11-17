import '../SCSS/MoviesContainer.css';
import MovieCard from './MovieCard';

const MoviesContainer = ({movies, getSingleMovieDetails, addToWatchList, watchList}) => {
  const movieList = movies.map((movie, index) => {
    // still having issue with duplicates in regards to routing to a new view 
    
        if (watchList.includes(movie)) {
          console.log('is IF working?')
          return <MovieCard 
            img={movie.poster_path}
            key={index}
            id={movie.id}
            getSingleMovieDetails={getSingleMovieDetails}
            addToWatchList={addToWatchList}
            isOnWatchList={true}
          /> 
        } else {
          console.log('is ELSE working?')
          return <MovieCard 
            img={movie.poster_path}
            key={index}
            id={movie.id}
            getSingleMovieDetails={getSingleMovieDetails}
            addToWatchList={addToWatchList}
            isOnWatchList={false}
          />
        }
  })

  return (
    <section className='movies-container'>
      {movieList}
    </section>
  )
}

export default MoviesContainer;