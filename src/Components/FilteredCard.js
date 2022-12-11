import { Link } from 'react-router-dom';
import '../SCSS/MovieCard.css';

const FilteredCard  = ( { img, id, getSingleMovieDetails, addToWatchList, isOnWatchList, removeFromWatchList } ) => {
 
  const addBtn = <button className={`watchlist-add btn`} onClick={() => addToWatchList(id)}>➕</button>
  const removeBtn = <button className={`watchlist-remove btn`} onClick={() => removeFromWatchList(id)}>✖️</button>
  return (
    <div className='movie-card banner-card' onClick={() => getSingleMovieDetails(id)}>
      <Link to='/moviedetails'>
        <img className='poster-img banner-img' id={id} src={`https://image.tmdb.org/t/p/w500${img}`} alt='movie poster'/>
      </Link>
      {isOnWatchList ? removeBtn : addBtn}
    </div>
  )
};

export default FilteredCard;