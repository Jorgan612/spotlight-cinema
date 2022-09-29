import '../SCSS/MovieDetails.css';
import { Link } from 'react-router-dom';

const MovieDetails = ({singleView}) => {
  return (
    <div className='movie-details-div'>
      <h1 className='details-title'>{singleView.title}</h1>
       <div className='img-details-div'>
        <div className='img-div'>
          <img className='backdrop-img' id={singleView.id} src={`https://image.tmdb.org/t/p/w500${singleView.backdrop_path}`} alt='single view poster'/>
        </div>
          <div className='details-about'>
            <p className='details-popularity'>Popularity: {Number(singleView.popularity.toFixed())}</p>
            <p className='details-release-date'>Release Date: {singleView.release_date}</p>
            <p className='details-avg'>Vote Average: {Number(singleView.vote_average.toFixed(1))}</p>
            <p className='details-count'>Total Votes: {singleView.vote_count}</p>
        </div>
      </div>
        <p className='overview-title'>Overview: </p>
        <h2 className='details-overview'>{singleView.overview}</h2>
        <Link to='/'>
          <button className='details-back-btn'>Back</button>
        </Link>
    </div>
  )
}

export default MovieDetails;