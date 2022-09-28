const MovieDetails = ({singleView}) => {
  return (
    <div className='movie-details-div'>
      <img className='backdrop-img' id={singleView.id} src={`https://image.tmdb.org/t/p/w500${singleView.backdrop_path}`} alt='single view poster'/>
    </div>
  )
}

export default MovieDetails;