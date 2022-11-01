import MovieCard from "./MovieCard";

const WatchList = ({watchList, movies, getSingleMovieDetails}) => {
  const watchListTitles = watchList.map((movie, index) => {
     return <MovieCard 
      img={movie.poster_path}
      key={index}
      id={movie.id}
      getSingleMovieDetails={getSingleMovieDetails}
    />
  })
  return (
    <div className='watchlist-titles'>
      <h1>Watchlist</h1>
      {watchListTitles}
    </div>
  )
}

export default WatchList;