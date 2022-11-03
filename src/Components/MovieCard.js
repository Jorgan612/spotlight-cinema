import { Link, BrowserRouter } from 'react-router-dom';
import '../SCSS/MovieCard.css'
import MovieDetails from './MovieDetails';

const MovieCard  = ( {img, id, getSingleMovieDetails, addToWatchList, isOnWatchList} ) => {
 

  console.log('isOnWatchList in MOVIE CARD ---', isOnWatchList)
  const addBtn = <button className={`watchlist-add btn`} onClick={() => addToWatchList(id)}>➕</button>
  const removeBtn = <button className={`watchlist-remove btn`} onClick={() => addToWatchList(id)}>✖️</button>
  return (
    <div className='movie-card banner-card' onClick={() => getSingleMovieDetails(id)}>
      <Link to='/moviedetails'><img className='poster-img banner-img' id={id} src={`https://image.tmdb.org/t/p/w500${img}`} alt='movie poster'/></Link>
      {isOnWatchList ? removeBtn : addBtn}
      {/* {<button className={`watchlist-add btn`} onClick={() => addToWatchList(id)}>➕</button>} */}
    </div>
  )
}

export default MovieCard;