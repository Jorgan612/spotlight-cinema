import { Link, BrowserRouter } from 'react-router-dom';
import '../SCSS/MovieCard.css'
import MovieDetails from './MovieDetails';

const MovieCard  = ( {img, id, getSingleMovieDetails} ) => {
  //click should take viewer to a single movie's details
  //need a router link to it
  //brings you to that page, activates that component, so that component is rendered
  return (
    <div className='movie-card banner-card' onClick={() => getSingleMovieDetails(id)}>
      <Link to='/moviedetails'><img className='poster-img banner-img' id={id} src={`https://image.tmdb.org/t/p/w500${img}`} alt='movie poster'/></Link>
    </div>
  )
}

export default MovieCard;