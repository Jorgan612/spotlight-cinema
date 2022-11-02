import { Link, BrowserRouter } from 'react-router-dom';
import '../SCSS/MovieCard.css'
import MovieDetails from './MovieDetails';

const MovieCard  = ( {img, id, getSingleMovieDetails, addToWatchList} ) => {
  return (
    <div className='movie-card banner-card' onClick={() => getSingleMovieDetails(id)}>
      <Link to='/moviedetails'><img className='poster-img banner-img' id={id} src={`https://image.tmdb.org/t/p/w500${img}`} alt='movie poster'/></Link>
      <button className='watchlist-add btn' onClick={() => addToWatchList(id)}>➕</button>
    </div>
  )
}

export default MovieCard;