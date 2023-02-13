import { Link } from 'react-router-dom';
import '../CSS/MovieCard.css';

const MovieCard  = ( { img, id, getSingleMovieDetails, addToWatchList, isOnWatchList, removeFromWatchList } ) => {
 
  const addBtn = <button className={`watchlist-add btn`} onClick={() => addToWatchList(id)}>➕</button>
  const removeBtn = <button className={`watchlist-remove btn`} onClick={() => removeFromWatchList(id)}>✖️</button>
  return (
    <div className='movie-card banner-card' onClick={() => getSingleMovieDetails(id)}>
      <Link to='/moviedetails' aria-label='Click to see details about specific movie'>
        <img className='poster-img banner-img' id={id} src={`https://image.tmdb.org/t/p/w500${img}`} alt='movie poster'/>
      </Link>
      {isOnWatchList ? removeBtn : addBtn}
    </div>
  )
};

export default MovieCard;