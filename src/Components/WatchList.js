import '../SCSS/WatchList.css';
import { Link } from 'react-router-dom';
import WatchListCard from '../Components/WatchListCard';
// import SearchWatchList from './SearchWatchList';

//Search doesn't work yet when in the watchlist films -> need to fix this (can search BUT it searches everything then regardless) -> needs to be tweaked

//search is currently not working confined to just the movies in watchlist but looks at all movies -> it is bad because if you search for a title all the movies that share that key word will in fact be returned as if in the watchlist 

//need to debug or rework search capability, it works but not as it should

const WatchList = ({ watchList, getSingleMovieDetails, removeFromWatchList, specificMovie, setIsSearching, isSearching }) => {
  

 let watchListMovies;
 if(specificMovie.length > 0) {
  watchListMovies = specificMovie.map
  ((movie, index) => {
    return <WatchListCard 
        img={movie.poster_path}
        key={index}
        id={movie.id}
        getSingleMovieDetails={getSingleMovieDetails}
        isOnWatchList={true}
        removeFromWatchList={removeFromWatchList}
        // setIsSearching={setIsSearching}
        // isSearching={isSearching}
        // watchList={watchList}
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
        // setIsSearching={setIsSearching}
        // isSearching={isSearching}
        // watchList={watchList}
      />
  })
}

  return (
    <div className='watchlist-titles-div'>
      <h1 className='selector'>Watchlist</h1>
      <Link to='/'>
          <button className='selector'>Return Home</button>
        </Link>
        {/* <SearchWatchList specificMovie={specificMovie} 
        setIsSearching={setIsSearching} 
        isSearching={isSearching} /> */}
      {watchList.length > 0 ? <div className='titles-container'>
        { watchListMovies }
      </div> : <p>You have no movies saved to your watchlist at this time.</p>}
      <div className='back-btn-div'>
        
      </div>
    </div>
  )
};

export default WatchList;
