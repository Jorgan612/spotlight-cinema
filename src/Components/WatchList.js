import MovieCard from "./MovieCard";
import '../SCSS/WatchList.css';
import { Link } from 'react-router-dom';

const WatchList = ({watchList, getSingleMovieDetails}) => {
  const watchListTitles = watchList.map((movie, index) => {
     return <MovieCard 
        img={movie.poster_path}
        key={index}
        id={movie.id}
        getSingleMovieDetails={getSingleMovieDetails}
        isOnWatchList={true}
      />
  })
  return (
    <div className='watchlist-titles-div'>
      <h1 className='selector'>Watchlist</h1>
      {watchList.length > 0 ? <div className='titles-container'>
        { watchListTitles }
      </div> : <p>You have no movies saved to your watchlist at this time.</p>}
      <div className='back-btn-div'>
        <Link to='/'>
          <button className='selector'>Back</button>
        </Link>
      </div>
    </div>
  )
}

export default WatchList;