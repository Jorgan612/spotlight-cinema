const MovieDetails = ({singleView}) => {
  return (
    <div className='movie-details-div'>
      <h1>{singleView.title}</h1>
      <h2>{singleView.overview}</h2>
      <p>{Number(singleView.popularity.toFixed())}</p>
      <p>{singleView.release_date}</p>
      <p>{Number(singleView.vote_average.toFixed(1))}</p>
      <p>{singleView.vote_count}</p>
      <img className='backdrop-img' id={singleView.id} src={`https://image.tmdb.org/t/p/w500${singleView.backdrop_path}`} alt='single view poster'/>
    </div>
  )
}

export default MovieDetails;