import '../SCSS/WatchList.css';
import { Link } from 'react-router-dom';
import WatchListCard from '../Components/WatchListCard';

const WatchList = ({ watchList, getSingleMovieDetails, removeFromWatchList }) => {
  const watchListTitles = watchList.map((movie, index) => {
     return <WatchListCard 
        img={movie.poster_path}
        key={index}
        id={movie.id}
        getSingleMovieDetails={getSingleMovieDetails}
        isOnWatchList={true}
        removeFromWatchList={removeFromWatchList}
      />
  });
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
};

export default WatchList;