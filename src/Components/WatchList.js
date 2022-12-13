import '../SCSS/WatchList.css';
import { Link } from 'react-router-dom';
import WatchListCard from '../Components/WatchListCard';

//Search doesn't work yet when in the watchlist films -> need to fix this (can search BUT it searches everything then regardless) -> needs to be tweaked

const WatchList = ({ watchList, getSingleMovieDetails, removeFromWatchList, specificMovie }) => {
 let watchListMovies;
 if(specificMovie.length > 0) {
  watchListMovies = specificMovie.map((movie, index) => {
    return <WatchListCard 
        img={movie.poster_path}
        key={index}
        id={movie.id}
        getSingleMovieDetails={getSingleMovieDetails}
        isOnWatchList={true}
        removeFromWatchList={removeFromWatchList}
      /> 
  })
 } else {
  watchListMovies = watchList.map((movie, index) => {
     return <WatchListCard 
        img={movie.poster_path}
        key={index}
        id={movie.id}
        getSingleMovieDetails={getSingleMovieDetails}
        isOnWatchList={true}
        removeFromWatchList={removeFromWatchList}
      />
  })
}
  return (
    <div className='watchlist-titles-div'>
      <h1 className='selector'>Watchlist</h1>
      <Link to='/'>
          <button className='selector'>Return Home</button>
        </Link>
      {watchList.length > 0 ? <div className='titles-container'>
        { watchListMovies }
      </div> : <p>You have no movies saved to your watchlist at this time.</p>}
      <div className='back-btn-div'>
        
      </div>
    </div>
  )
};

export default WatchList;
