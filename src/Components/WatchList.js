import '../CSS/WatchList.css';
import { Link } from 'react-router-dom';

const WatchList = () => { 
  return (
    <div className='watchlist-titles-div'>
      <h1 className='selector'>Watchlist</h1>
      <Link to='/home' aria-label="Click to return to homepage">
          <button className='selector'>Return Home</button>
        </Link>
    </div>
  )
};

export default WatchList;
