import '../SCSS/MovieDetails.css';
import { Link } from 'react-router-dom';

//CERTAIN MOVIES LIKE BRINGING UP BABY BREAKING ON LINE 10 -> ERROR: Uncaught TypeError: Cannot read properties of undefined (reading 'title') / but working fine for others, singleView returns as undefined

const MovieDetails = ({ singleView }) => {
  console.log("single view", typeof singleView.original_title)
    console.log(" type", typeof singleView)

  return (
    <div className='movie-details-div'>
      <div className='details-border-div'>
        <h1 className='details-title'>{singleView.original_title}</h1>
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
        <div className='overview-container-div'>
          <p className='overview-title'>Overview: </p>
          <p className='details-overview'>{singleView.overview}</p>
        </div>
      </div>
      <footer className='details-footer'>
        <Link to='/'>
          <button className='details-back-btn selector'>Back</button>
        </Link>
      </footer>
    </div>
  )
};

export default MovieDetails;